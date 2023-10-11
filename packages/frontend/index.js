module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "turbo",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:typescript-sort-keys/recommended",
    "plugin:prettier/recommended",
  ],

  parser: "@typescript-eslint/parser",

  parserOptions: {
    project: ["tsconfig.json"],
    createDefaultProgram: true,
  },

  plugins: ["sort-keys-fix", "@typescript-eslint"],

  rules: {
    // react props 정렬 설정
    "react/jsx-sort-props": [
      2,
      {
        callbacksLast: true,
        multiline: "last",
        shorthandFirst: false,
      },
    ],
    "linebreak-style": ["error", "unix"],
    "@typescript-eslint/no-empty-interface": ["off"],
    "react/display-name": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/consistent-type-imports": "error",
  },
};
