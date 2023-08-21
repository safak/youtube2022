import {ContextualKeyword} from "../parser/tokenizer/keywords";
import {TokenType as tt} from "../parser/tokenizer/types";


/**
 * Starting at a potential `assert` token remove the import assertion if there
 * is one.
 */
export function removeMaybeImportAssertion(tokens) {
  if (tokens.matches2(tt.name, tt.braceL) && tokens.matchesContextual(ContextualKeyword._assert)) {
    // assert
    tokens.removeToken();
    // {
    tokens.removeToken();
    tokens.removeBalancedCode();
    // }
    tokens.removeToken();
  }
}
