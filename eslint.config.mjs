// import blitzPlugin from '@blitz/eslint-plugin';
// import { getNamingConventionRule, tsFileExtensions } from '@blitz/eslint-plugin/dist/configs/typescript.js';

function generateNamingConventionRegex(defaults, extensions = []) {
    return `^(${defaults.concat(extensions).join('|')})$`;
}
export default [
  {
    ignores: [
      '**/dist',
      '**/node_modules',
      '**/.wrangler',
      '**/bolt/build',
      '**/.history',
    ],
  },
  // ...blitzPlugin.configs.recommended(),
  {
    rules: {
      '@blitz/catch-error-name': 'off',
      '@typescript-eslint/no-this-alias': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@blitz/comment-syntax': 'off',
      '@blitz/block-scope-case': 'off',
      'array-bracket-spacing': ["error", "never"],
      'object-curly-newline': ["error", { "consistent": true }],
      'keyword-spacing': ["error", { "before": true, "after": true }],
      'consistent-return': "error",
      'semi': ["error", "always"],
      'curly': ["error"],
      'no-eval': ["error"],
      'linebreak-style': ["error", "unix"],
      'arrow-spacing': ["error", { "before": true, "after": true }]
    },
  },
  {
    files: ['**/*.tsx'],
    rules: {
      '@typescript-eslint/naming-convention': [
          'error',
          {
              selector: ['variable', 'function'],
              format: ['camelCase', 'UPPER_CASE', tsx && 'StrictPascalCase'].filter(Boolean),
              leadingUnderscore: 'allowSingleOrDouble',
              trailingUnderscore: 'forbid',
              filter: {
                  regex: generateNamingConventionRegex(['__dirname'], extensions?.variable?.exceptions),
                  match: false,
              },
          },
          {
              selector: 'parameter',
              format: ['camelCase'],
              leadingUnderscore: 'allow',
          },
          {
              selector: 'typeLike',
              format: ['PascalCase'],
          },
          {
              selector: 'memberLike',
              modifiers: ['private'],
              format: ['camelCase'],
              leadingUnderscore: 'require',
          },
      ],
    },
  },
  {
    files: ['**/*.d.ts'],
    rules: {
      '@typescript-eslint/no-empty-object-type': 'off',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts', '**/*.js', '**/*.jsx', '**/*.mjs', '**/*.cjs', '**/*.tsx'],
    ignores: ['functions/*'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['../'],
              message: 'Relative imports are not allowed. Please use \'~/\' instead.',
            },
          ],
        },
      ],
    },
  },
];
