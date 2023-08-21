import type { HelperManager } from "../HelperManager";
import type { Options } from "../index";
import type NameManager from "../NameManager";
import type TokenProcessor from "../TokenProcessor";
import type ReactHotLoaderTransformer from "./ReactHotLoaderTransformer";
import Transformer from "./Transformer";
/**
 * Class for editing import statements when we are keeping the code as ESM. We still need to remove
 * type-only imports in TypeScript and Flow.
 */
export default class ESMImportTransformer extends Transformer {
    readonly tokens: TokenProcessor;
    readonly nameManager: NameManager;
    readonly helperManager: HelperManager;
    readonly reactHotLoaderTransformer: ReactHotLoaderTransformer | null;
    readonly isTypeScriptTransformEnabled: boolean;
    private nonTypeIdentifiers;
    private declarationInfo;
    private injectCreateRequireForImportRequire;
    constructor(tokens: TokenProcessor, nameManager: NameManager, helperManager: HelperManager, reactHotLoaderTransformer: ReactHotLoaderTransformer | null, isTypeScriptTransformEnabled: boolean, options: Options);
    process(): boolean;
    private processImportEquals;
    private processImport;
    /**
     * Remove type bindings from this import, leaving the rest of the import intact.
     *
     * Return true if this import was ONLY types, and thus is eligible for removal. This will bail out
     * of the replacement operation, so we can return early here.
     */
    private removeImportTypeBindings;
    private isTypeName;
    private processExportDefault;
    /**
     * In TypeScript, we need to remove named exports that were never declared or only declared as a
     * type.
     */
    private processNamedExports;
    /**
     * ESM elides all imports with the rule that we only elide if we see that it's
     * a type and never see it as a value. This is in contrast to CJS, which
     * elides imports that are completely unknown.
     */
    private shouldElideExportedName;
}
