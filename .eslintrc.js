module.exports = {
    env: {
        commonjs: true,
        es6: true,
        node: true,
        mocha: true
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
        ecmaVersion: 2018,
        sourceType: "module"
    },
    plugins: [
        '@typescript-eslint/eslint-plugin'
    ],
    rules: {
        'no-unused-vars': 0,
        'max-classes-per-file': ['warn', 2],
        'import/no-unresolved': 0,
        'import/prefer-default-export': 0,
        'no-useless-constructor': 0,
        'no-underscore-dangle': 0,
        'max-len': ['error', 200],
        'default-case': 0,
        'padded-blocks': 0,
        'lines-between-class-members': 0,
        'indent': [1, 4, { SwitchCase: 1, ignoreComments: true }],  // enforce consistent indentation
        'no-restricted-syntax': 0,
        'no-continue': 0,
        'no-param-reassign': 0,
        'no-case-declarations': 0,
        'no-multi-assign': 0,
        'no-nested-ternary': 0,
        'no-restricted-globals': 0,
        'operator-assignment': 0,
        'no-useless-concat': 0,
        'no-mixed-operators': 0,
        'object-curly-newline': 0,
        'comma-dangle': 0,
        'no-shadow': 0,
        'no-plusplus': 0,
        'prefer-destructuring': 0,
        'no-console': 0,
        'linebreak-style': 0,
        'no-trailing-spaces': 0,
        'no-eval': 0,
        'dot-notation': 0,
        'curly': ['warn', 'multi'],
        'nonblock-statement-body-position': ["error", "below"],
        'import/extensions': 0,
        'no-unused-expressions': 0,
        'spaced-comment': 0,
        'class-methods-use-this': 0,
        'no-else-return': 0,
        'arrow-body-style': ["warn"],
        'prefer-template': 0,
        'import/no-dynamic-require': 0,
        'global-require': 0,
        'no-multiple-empty-lines': 0,
        'object-shorthand': 0
    }
};