import { ESLintUtils } from "@typescript-eslint/utils";

const createRule = ESLintUtils.RuleCreator((name) => {
	return `https://github.com/screendriver/eslint-plugin-node-assert/blob/master/docs/rules/${name}.md`;
});

export const importStrictRule = createRule({
	name: "import-strict",
	meta: {
		docs: {
			description: "Enforce the usage of 'node:assert/strict'"
		},
		messages: {
			"import-strict": "Always import from 'node:assert/strict'"
		},
		type: "suggestion",
		schema: []
	},
	defaultOptions: [],

	create(context) {
		return {
			ImportDeclaration(node) {
				if (node.source.value === "node:assert") {
					context.report({
						messageId: "import-strict",
						node
					});
				}
			}
		};
	}
});
