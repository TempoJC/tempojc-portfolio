const path = require('path');

const buildEslintCommand = (filenames) =>
	`next lint --fix --file ${filenames
		.map((f) => path.relative(process.cwd(), f))
		.join(' --file ')}`;

const buildPrettierCommand = (filenames) =>
	`prettier --check --write --ignore-unknown ${filenames
		.map((f) => path.relative(process.cwd(), f))
		.join(' ')}`;

module.exports = {
	// Type check TypeScript files
	'*.{ts,tsx}': () => 'tsc --pretty --noEmit',

	// Lint & Prettify TS and JS files
	'*.{js,jsx,ts,tsx}': [buildEslintCommand, buildPrettierCommand],

	// Prettify only Markdown and JSON files
	'*.{md, json, css}': [buildPrettierCommand],

	// Stylelint only CSS files
	'*.{css}': ['stylelint --fix'],

	// Type check Jest files
	'*.test.{ts,tsx}': ['jest'],
};
