/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ['node_modules/', '.next/'],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    extends: ['next/core-web-vitals'],
  },
]
