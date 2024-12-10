import js from "@eslint/js";
import globals from "globals";
import eslintReact from "eslint-plugin-react";
import eslintReactHooks from "eslint-plugin-react-hooks";
import eslintReactRefresh from "eslint-plugin-react-refresh";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintImport from "eslint-plugin-import";
import reactConfig from "eslint-plugin-import/config/react.js";

const { parserOptions } = reactConfig;

export default [
  {
    ignores: ["node_modules", "dist"],
  },
  js.configs.recommended,
  {
    plugins: {
      react: eslintReact,
      "react-hooks": eslintReactHooks,
      "react-refresh": eslintReactRefresh,
      prettier: prettierPlugin,
      import: eslintImport,
    },
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2024,
      },
      parserOptions,
    },
    rules: {
      ...eslintConfigPrettier.rules,
      "no-console": "warn",
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
          singleQuote: false,
          tabWidth: 2,
          trailingComma: "es5",
          bracketSpacing: true,
        },
      ],
      "import/no-default-export": "error",
      "no-unused-vars": [
        "error",
        {
          vars: "all",
          args: "after-used",
          ignoreRestSiblings: true,
        },
      ],
      "func-style": ["error", "expression"],
      "prefer-arrow-callback": ["error"],
      "react/jsx-uses-vars": "error",
      "no-shadow": "off",
      "no-alert": "error",
      eqeqeq: "error",
      "react/jsx-no-undef": "error",
    },
  },
  {
    files: ["eslint.config.js"],
    rules: {
      "import/no-default-export": "off",
    },
  },
];
