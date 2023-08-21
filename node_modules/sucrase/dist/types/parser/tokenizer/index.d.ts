import { ContextualKeyword } from "./keywords";
import { TokenType } from "./types";
export declare enum IdentifierRole {
    Access = 0,
    ExportAccess = 1,
    TopLevelDeclaration = 2,
    FunctionScopedDeclaration = 3,
    BlockScopedDeclaration = 4,
    ObjectShorthandTopLevelDeclaration = 5,
    ObjectShorthandFunctionScopedDeclaration = 6,
    ObjectShorthandBlockScopedDeclaration = 7,
    ObjectShorthand = 8,
    ImportDeclaration = 9,
    ObjectKey = 10,
    ImportAccess = 11
}
/**
 * Extra information on jsxTagStart tokens, used to determine which of the three
 * jsx functions are called in the automatic transform.
 */
export declare enum JSXRole {
    NoChildren = 0,
    OneChild = 1,
    StaticChildren = 2,
    KeyAfterPropSpread = 3
}
export declare function isDeclaration(token: Token): boolean;
export declare function isNonTopLevelDeclaration(token: Token): boolean;
export declare function isTopLevelDeclaration(token: Token): boolean;
export declare function isBlockScopedDeclaration(token: Token): boolean;
export declare function isFunctionScopedDeclaration(token: Token): boolean;
export declare function isObjectShorthandDeclaration(token: Token): boolean;
export declare class Token {
    constructor();
    type: TokenType;
    contextualKeyword: ContextualKeyword;
    start: number;
    end: number;
    scopeDepth: number;
    isType: boolean;
    identifierRole: IdentifierRole | null;
    jsxRole: JSXRole | null;
    shadowsGlobal: boolean;
    isAsyncOperation: boolean;
    contextId: number | null;
    rhsEndIndex: number | null;
    isExpression: boolean;
    numNullishCoalesceStarts: number;
    numNullishCoalesceEnds: number;
    isOptionalChainStart: boolean;
    isOptionalChainEnd: boolean;
    subscriptStartIndex: number | null;
    nullishStartIndex: number | null;
}
export declare function next(): void;
export declare function nextTemplateToken(): void;
export declare function retokenizeSlashAsRegex(): void;
export declare function pushTypeContext(existingTokensInType: number): boolean;
export declare function popTypeContext(oldIsType: boolean): void;
export declare function eat(type: TokenType): boolean;
export declare function eatTypeToken(tokenType: TokenType): void;
export declare function match(type: TokenType): boolean;
export declare function lookaheadType(): TokenType;
export declare class TypeAndKeyword {
    type: TokenType;
    contextualKeyword: ContextualKeyword;
    constructor(type: TokenType, contextualKeyword: ContextualKeyword);
}
export declare function lookaheadTypeAndKeyword(): TypeAndKeyword;
export declare function nextTokenStart(): number;
export declare function nextTokenStartSince(pos: number): number;
export declare function lookaheadCharCode(): number;
export declare function nextToken(): void;
export declare function skipLineComment(startSkip: number): void;
export declare function skipSpace(): void;
export declare function finishToken(type: TokenType, contextualKeyword?: ContextualKeyword): void;
/**
 * Called after `as` expressions in TS; we're switching from a type to a
 * non-type context, so a > token may actually be >= . This is needed because >=
 * must be tokenized as a > in a type context because of code like
 * `const x: Array<T>=[];`, but `a as T >= 1` is a code example where it must be
 * treated as >=.
 *
 * Notably, this only applies to >, not <. In a code snippet like `a as T <= 1`,
 * we must NOT tokenize as <, or else the type parser will start parsing a type
 * argument and fail.
 */
export declare function rescan_gt(): void;
export declare function getTokenFromCode(code: number): void;
export declare function skipWord(): void;
