import { baseConfig } from "@enormora/eslint-config-base";
import { nodeConfig } from "@enormora/eslint-config-node";
import { mochaConfig } from "@enormora/eslint-config-mocha";
import { typescriptConfig } from "@enormora/eslint-config-typescript";

export default [
	{
		ignores: ["target/**"]
	},
	{
		...baseConfig,
		rules: {
			...baseConfig.rules,
			"@stylistic/no-tabs": "off",
			"@stylistic/quotes": ["error", "double"],
			"@stylistic/indent": ["error", "tab"]
		}
	},
	nodeConfig,
	{
		...typescriptConfig,
		files: ["**/*.ts"],
		rules: {
			...typescriptConfig.rules
		}
	},
	{
		...mochaConfig,
		files: ["test/**/*.test.ts"]
	},
	{
		files: ["eslint.config.js", "ava.config.js", "prettier.config.js"],
		rules: {
			"import/no-default-export": "off"
		}
	}
];
