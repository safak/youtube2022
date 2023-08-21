"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "applyImportantSelector", {
    enumerable: true,
    get: ()=>applyImportantSelector
});
const _postcssSelectorParser = /*#__PURE__*/ _interopRequireDefault(require("postcss-selector-parser"));
const _formatVariantSelectorJs = require("./formatVariantSelector.js");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function applyImportantSelector(selector, important) {
    let sel = (0, _postcssSelectorParser.default)().astSync(selector);
    sel.each((sel)=>{
        // Wrap with :is if it's not already wrapped
        let isWrapped = sel.nodes[0].type === "pseudo" && sel.nodes[0].value === ":is" && sel.nodes.every((node)=>node.type !== "combinator");
        if (!isWrapped) {
            sel.nodes = [
                _postcssSelectorParser.default.pseudo({
                    value: ":is",
                    nodes: [
                        sel.clone()
                    ]
                })
            ];
        }
        let [pseudoElements] = (0, _formatVariantSelectorJs.collectPseudoElements)(sel);
        if (pseudoElements.length > 0) {
            sel.nodes.push(...pseudoElements.sort(_formatVariantSelectorJs.sortSelector));
        }
    });
    return `${important} ${sel.toString()}`;
}
