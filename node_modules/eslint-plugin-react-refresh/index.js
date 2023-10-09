"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  rules: () => rules
});
module.exports = __toCommonJS(src_exports);

// src/only-export-components.ts
var possibleReactExportRE = /^[A-Z][a-zA-Z0-9]*$/;
var strictReactExportRE = /^[A-Z][a-zA-Z0-9]*[a-z]+[a-zA-Z0-9]*$/;
var onlyExportComponents = {
  meta: {
    messages: {
      exportAll: "This rule can't verify that `export *` only export components",
      namedExport: "Fast refresh only works when a file only export components. Use a new file to share constant or functions between components.",
      anonymousExport: "Fast refresh can't handle anonymous component. Add a name to your export.",
      localComponents: "Fast refresh only works when a file only export components. Move your component(s) to a separate file.",
      noExport: "Fast refresh only works when a file has exports. Move your component(s) to a separate file."
    },
    type: "problem",
    schema: [
      {
        type: "object",
        properties: {
          checkJS: { type: "boolean" }
        },
        additionalProperties: false
      }
    ]
  },
  defaultOptions: [],
  create: (context) => {
    const { checkJS } = context.options[0] || { checkJS: false };
    const filename = context.getFilename();
    if (filename.includes(".test.") || filename.includes(".spec.") || filename.includes(".stories.")) {
      return {};
    }
    const shouldScan = filename.endsWith(".jsx") || filename.endsWith(".tsx") || checkJS && filename.endsWith(".js");
    if (!shouldScan)
      return {};
    return {
      Program(program) {
        let hasExports = false;
        let mayHaveReactExport = false;
        let reactIsInScope = false;
        const localComponents = [];
        const nonComponentExport = [];
        const handleLocalIdentifier = (identifierNode) => {
          if (identifierNode.type !== "Identifier")
            return;
          if (possibleReactExportRE.test(identifierNode.name)) {
            localComponents.push(identifierNode);
          }
        };
        const handleExportIdentifier = (identifierNode) => {
          if (identifierNode.type !== "Identifier") {
            nonComponentExport.push(identifierNode);
            return;
          }
          if (!mayHaveReactExport && possibleReactExportRE.test(identifierNode.name)) {
            mayHaveReactExport = true;
          }
          if (!strictReactExportRE.test(identifierNode.name)) {
            nonComponentExport.push(identifierNode);
          }
        };
        const handleExportDeclaration = (node) => {
          if (node.type === "VariableDeclaration") {
            for (const variable of node.declarations) {
              handleExportIdentifier(variable.id);
            }
          } else if (node.type === "FunctionDeclaration") {
            if (node.id === null) {
              context.report({ messageId: "anonymousExport", node });
            } else {
              handleExportIdentifier(node.id);
            }
          } else if (node.type === "CallExpression") {
            context.report({ messageId: "anonymousExport", node });
          }
        };
        for (const node of program.body) {
          if (node.type === "ExportAllDeclaration") {
            hasExports = true;
            context.report({ messageId: "exportAll", node });
          } else if (node.type === "ExportDefaultDeclaration") {
            hasExports = true;
            if (node.declaration.type === "VariableDeclaration" || node.declaration.type === "FunctionDeclaration" || node.declaration.type === "CallExpression") {
              handleExportDeclaration(node.declaration);
            }
            if (node.declaration.type === "Identifier") {
              handleExportIdentifier(node.declaration);
            }
            if (node.declaration.type === "ArrowFunctionExpression" && !node.declaration.id) {
              context.report({ messageId: "anonymousExport", node });
            }
          } else if (node.type === "ExportNamedDeclaration") {
            hasExports = true;
            if (node.declaration)
              handleExportDeclaration(node.declaration);
            for (const specifier of node.specifiers) {
              handleExportIdentifier(specifier.exported);
            }
          } else if (node.type === "VariableDeclaration") {
            for (const variable of node.declarations) {
              handleLocalIdentifier(variable.id);
            }
          } else if (node.type === "FunctionDeclaration") {
            handleLocalIdentifier(node.id);
          } else if (node.type === "ImportDeclaration") {
            if (node.source.value === "react") {
              reactIsInScope = true;
            }
          }
        }
        if (checkJS && !reactIsInScope)
          return;
        if (hasExports) {
          if (mayHaveReactExport) {
            for (const node of nonComponentExport) {
              context.report({ messageId: "namedExport", node });
            }
          } else if (localComponents.length) {
            for (const node of localComponents) {
              context.report({ messageId: "localComponents", node });
            }
          }
        } else if (localComponents.length) {
          for (const node of localComponents) {
            context.report({ messageId: "noExport", node });
          }
        }
      }
    };
  }
};

// src/index.ts
var rules = {
  "only-export-components": onlyExportComponents
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  rules
});
