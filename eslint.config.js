import tsParser from "@typescript-eslint/parser";

export default [
   {
      files: ["**/*.ts", "**/*.tsx"],

      languageOptions: {
         parser: tsParser
      },

      rules: {
         "brace-style": ["error", "allman"]
      }
   }
];