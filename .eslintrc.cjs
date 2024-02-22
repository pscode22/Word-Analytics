module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    "airbnb",
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react-hooks/recommended',
    "plugin:prettier/recommended"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ["import", 'react-refresh',],
  // include: ["src/**/*.ts", "src/**/*.js", "test/**/*.ts"],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    "import/no-unresolved": "error"
  },
  settings: {
    "import/parsers" : {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true,
        "project": "./tsconfig.json",
        // "alias": {
        //   "map": [
        //     ["@components", "./src/components"],
        //     ["@pages", "./src/pages"],
        //     ["@data", "./src/data"],
        //     ["@assets", "./src/assets"],
        //     ["@ctx", "./src/contexts"],
        //     ["@", "./src"]
        //   ]
        // }
      }
    }
  }
}
