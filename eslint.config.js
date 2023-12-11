const typeScriptPlugin = require("@typescript-eslint/eslint-plugin");
const typeScriptParser = require("@typescript-eslint/parser");
const eslintConfigPrettier = require("eslint-config-prettier");
const prettierPlugin = require("eslint-plugin-prettier");

module.exports = [
	{
		ignores: ["target/**"],
	},
	eslintConfigPrettier,
	{
		plugins: {
			prettier: prettierPlugin,
		},
		rules: {
			"prettier/prettier": "error",
		},
	},
	{
		files: ["**/*.ts"],
		plugins: {
			"@typescript-eslint": typeScriptPlugin,
		},
		languageOptions: {
			parser: typeScriptParser,
			parserOptions: {
				project: "./tsconfig.json",
				EXPERIMENTAL_useProjectService: true,
			},
		},
		rules: [],
	},
];
