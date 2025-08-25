// eslint.config.mjs
import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  vue: true,
  jsx: true,
  ignores: ['**/dist/**', '**/node_modules/**'],

  // 统一的规则配置
  rules: {
    'no-unused-vars': 'off',
    'unused-imports/no-unused-vars': 'warn',
    'ts/no-unused-vars': 'warn',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/promise-function-async': 'off',
    'style/brace-style': ['error', '1tbs'],
    'ts/consistent-type-definitions': ['error', 'interface'],
    'ts/no-namespace': 'off',
    'no-console': 'warn',
  },
})
