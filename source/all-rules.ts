import type { TSESLint } from "@typescript-eslint/utils";
import { importStrictRule } from "./rules/import-strict.js";

const allRules: Record<string, TSESLint.RuleModule<string, unknown[]>> = {
	"import-strict": importStrictRule
};

export default {
	rules: allRules
};
