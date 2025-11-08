import stylistic from '@stylistic/eslint-plugin';
import parserTs from '@typescript-eslint/parser';

export default [
	{
		plugins: {
			'@stylistic': stylistic
		},
		languageOptions: {
			parser: parserTs
		},
		files: [
			'**/eslint.config.js',
			'**/*.{ts,tsx}'
		],
		ignores: [],
		rules: {
			...stylistic.configs.recommended.rules,

			'@stylistic/semi': 'error',
			'@stylistic/comma-dangle': ['error', 'never'],
			'@stylistic/indent': ['error', 'tab'],
			'@stylistic/no-tabs': 'off',
			'@stylistic/quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
			'@stylistic/jsx-indent-props': ['error', 'tab'],
			'@stylistic/jsx-quotes': ['error', 'prefer-single']
		}
	}
];
