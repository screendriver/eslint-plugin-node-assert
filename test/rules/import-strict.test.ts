import { RuleTester } from "@typescript-eslint/rule-tester";
import { importStrictRule } from "../../source/rules/import-strict.js";

const ruleTester = new RuleTester();

ruleTester.run("import-strict", importStrictRule, {
	valid: [
		"import assert from 'node:assert/strict'",
		"import { equal } from 'node:assert/strict';",
		"import { strictEqual } from 'node:assert/strict';"
	],
	invalid: [
		{
			code: "import assert from 'node:assert'",
			errors: [{ messageId: "import-strict" }]
		},
		{
			code: "import { equal } from 'node:assert'",
			errors: [{ messageId: "import-strict" }]
		},
		{
			code: "import { strictEqual } from 'node:assert'",
			errors: [{ messageId: "import-strict" }]
		}
	]
});
