import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact, { rules } from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {parserOptions: {"project": "./tsconfig.json"}},
  {globals: {
    "JSX": true
  }},
  {rules: {
    "react/destructuring-assignment": "warn",
    "react/prop-types": "warn",
    "arrow-body-style": "warn",
    "no-use-before-define": "warn",
    "no-shadow": "warn",
    "dot-notation": "warn",
    "@typescript-eslint/no-unsafe-call": "warn",
    "@typescript-eslint/no-unsafe-assignment": "warn",
    "jsx-a11y/control-has-associated-label": "warn",
    "react-hooks/exhaustive-deps": "off",
    "@typescript-eslint/no-use-before-define": "warn",
    "no-console": "off",
    "no-unsafe-optional-chaining": "warn",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-no-useless-fragment": "warn",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/explicit-function-return-type": "warn",
    "@typescript-eslint/no-unused-expressions": "warn",
    "@typescript-eslint/no-shadow": "warn",
    "@typescript-eslint/no-unsafe-argument": "warn",
    "@typescript-eslint/no-unsafe-member-access": "warn",
    "@typescript-eslint/no-unsafe-return": "warn",
    "@typescript-eslint/unbound-method": "warn",
    "@typescript-eslint/dot-notation": "warn",
    "jsx-a11y/click-events-have-key-events": "warn",
    "jsx-a11y/interactive-supports-focus": "warn",
    "jsx-a11y/no-static-element-interactions": "off",
    "@typescript-eslint/prefer-regexp-exec": "warn",
    "@typescript-eslint/restrict-template-expressions": "warn",
    "@typescript-eslint/restrict-plus-operands": "warn",
    "@typescript-eslint/require-await": "warn",
    "@typescript-eslint/no-this-alias": "warn",
    "no-empty-function": "off",
    "react/no-unstable-nested-components": "off",
    "no-useless-constructor": "off",
    "@typescript-eslint/await-thenable": "warn",
    "@typescript-eslint/no-useless-constructor": "off",
    "react/jsx-no-constructed-context-values": "warn",
    "@typescript-eslint/ban-types": [
      "warn",
      {
        "extendDefaults": true,
        "types": {
          "{}": false
        }
      }
    ],
    "array-callback-return": "warn",
    "prefer-arrow-callback": "warn",
    "import/no-extraneous-dependencies": "warn",
    "import/no-named-as-default": "warn",
    "no-useless-concat": "warn",
    "eqeqeq": "off",
    "no-plusplus": "off",
    "quotes": "warn",
    "import/no-cycle": "warn",
    "no-nested-ternary": "warn",
    "jsx-a11y/label-has-associated-control": "off",
    "react/button-has-type": "off",
    "react/no-unused-prop-types": "off",
    "react/jsx-one-expression-per-line": "off",
    "linebreak-style": "off",
    "import/no-unresolved": "off",
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".tsx",
          ".ts"
        ]
      }
    ],
    "no-unused-expressions": [
      "warn",
      {
        "allowShortCircuit": true
      }
    ],
    "prettier/prettier": [
      "warn",
      {
        "arrow-parens": "as-needed",
        "endOfLine": "auto",
        "printWidth": 125,
        "tabWidth": 2,
        "semi": true,
        "singleQuote": true,
        "trailingComma": "es5",
        "bracketSpacing": true
        // "jsxBracketSameLine": false
      }
    ]
  }},
  {languageOptions: { globals: globals.browser }},
  
  pluginJs.configs.recommended,
  
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];