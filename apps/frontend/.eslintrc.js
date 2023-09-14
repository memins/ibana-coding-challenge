module.exports = {
    extends: ['../../.eslintrc.json', 'plugin:vue/vue3-recommended', 'plugin:@intlify/vue-i18n/recommended', '@vue/typescript/recommended', 'prettier'],
    ignorePatterns: ['components.d.ts'],
    plugins: ['import'],
    parser: 'vue-eslint-parser',
    parserOptions: { ecmaVersion: 2020 },
    // ignorePatterns: ['node_modules/', 'vue3-jest/'],
    rules: {
        //   'no-console': 'off',
        //   'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        //   'space-before-function-paren': ['error', { anonymous: 'never', named: 'never', asyncArrow: 'always' }],
        //   'padded-blocks': 'off',
        //   'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        //   '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
        //   'no-multiple-empty-lines': ['error', { max: 1 }],
        //   'keyword-spacing': ['error', { after: true }],
        //   'max-len': ['error', { code: 150, ignorePattern: '^\\s*<path' }],
        //   'no-param-reassign': [2, { props: false }],
        //   'object-curly-newline': [
        //     'error',
        //     {
        //       consistent: true,
        //       multiline: true
        //     }
        //   ],
        //   'no-extra-boolean-cast': 'error',
        //   'import/extensions': [
        //     'error',
        //     {
        //       css: 'never',
        //       ts: 'never',
        //       js: 'never',
        //       vue: 'always',
        //       json: 'always',
        //       png: 'always',
        //       jpg: 'always',
        //       mp3: 'always',
        //       mp4: 'always'
        //     }
        //   ],
        //   indent: ['error', 2, { SwitchCase: 0 }],
        '@typescript-eslint/naming-convention': 'off',
        'vue/attribute-hyphenation': ['error', 'never'],
        // TODO -- figure out how to get this to work with prettier
        // 'vue/html-indent': ['error', 2, { baseIndent: 0 }],
        'vue/multi-word-component-names': 'off',
        // 'vue/singleline-html-element-content-newline': [
        //   'warn',
        //   {
        //     ignoreWhenNoAttributes: true,
        //     ignoreWhenEmpty: true
        //   }
        // ],
        // 'vue/max-attributes-per-line': [
        //     'error',
        //     {
        //         singleline: 3
        //     }
        // ],
        'vue/first-attribute-linebreak': 'off',
        'vue/no-v-html': 'off',
        '@intlify/vue-i18n/no-v-html': 'off',
        '@intlify/vue-i18n/no-unused-keys': [
            'warn',
            {
                src: './src',
                extensions: ['.js', '.vue']
            }
        ],
        '@intlify/vue-i18n/no-raw-text': [
            'warn',
            {
                "ignorePattern": "^[-#:()&0-9ᐊᐅ✓]+$"
            }
        ]
    },
    settings: {
        'vue-i18n': {
            localeDir: './src/app/translations/*.json'
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.ts', '.vue', '.json']
            }
        }
    }
}
