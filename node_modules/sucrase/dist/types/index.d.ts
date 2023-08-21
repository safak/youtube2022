import CJSImportProcessor from "./CJSImportProcessor";
import { RawSourceMap } from "./computeSourceMap";
import { HelperManager } from "./HelperManager";
import NameManager from "./NameManager";
import type { Scope } from "./parser/tokenizer/state";
import TokenProcessor from "./TokenProcessor";
export interface TransformResult {
    code: string;
    sourceMap?: RawSourceMap;
}
export interface SucraseContext {
    tokenProcessor: TokenProcessor;
    scopes: Array<Scope>;
    nameManager: NameManager;
    importProcessor: CJSImportProcessor | null;
    helperManager: HelperManager;
}
export declare type Options = import("./Options").Options;
export declare type SourceMapOptions = import("./Options").SourceMapOptions;
export declare type Transform = import("./Options").Transform;
export declare function getVersion(): string;
export declare function transform(code: string, options: Options): TransformResult;
/**
 * Return a string representation of the sucrase tokens, mostly useful for
 * diagnostic purposes.
 */
export declare function getFormattedTokens(code: string, options: Options): string;
