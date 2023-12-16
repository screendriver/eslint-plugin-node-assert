import type { rules } from "@typescript-eslint/eslint-plugin";
import { importStrictRule } from "./rules/import-strict.js";

const allRules: typeof rules = {
	"import-strict": importStrictRule
};

export default {
	rules: allRules
};
