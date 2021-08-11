module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["react-app", "prettier"],
  plugins: ["react", "prettier", "flowtype"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        printWidth: 80,
        trailingComma: "es5",
        jsxSingleQuote: true,
        singleQuote: true,
        useTabs: true,
      },
    ],
  },
};
