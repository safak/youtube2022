import { Options } from "./index";
export interface HookOptions {
    matcher?: (code: string) => boolean;
    ignoreNodeModules?: boolean;
}
export declare type RevertFunction = () => void;
export declare function addHook(extension: string, options: Options, hookOptions?: HookOptions): RevertFunction;
export declare function registerJS(hookOptions?: HookOptions): RevertFunction;
export declare function registerJSX(hookOptions?: HookOptions): RevertFunction;
export declare function registerTS(hookOptions?: HookOptions): RevertFunction;
export declare function registerTSX(hookOptions?: HookOptions): RevertFunction;
export declare function registerTSLegacyModuleInterop(hookOptions?: HookOptions): RevertFunction;
export declare function registerTSXLegacyModuleInterop(hookOptions?: HookOptions): RevertFunction;
export declare function registerAll(hookOptions?: HookOptions): RevertFunction;
