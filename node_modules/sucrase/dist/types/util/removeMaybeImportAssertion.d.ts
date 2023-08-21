import type TokenProcessor from "../TokenProcessor";
/**
 * Starting at a potential `assert` token remove the import assertion if there
 * is one.
 */
export declare function removeMaybeImportAssertion(tokens: TokenProcessor): void;
