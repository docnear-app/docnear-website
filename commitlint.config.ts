import type { UserConfig } from "@commitlint/types";

const config: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // Type must be one of these
    "type-enum": [
      2,
      "always",
      [
        "feat", // New feature
        "fix", // Bug fix
        "docs", // Documentation only
        "style", // Formatting, missing semicolons, etc
        "refactor", // Code change that neither fixes a bug nor adds a feature
        "perf", // Performance improvement
        "test", // Adding or updating tests
        "build", // Build system or dependency changes
        "ci", // CI/CD changes
        "chore", // Other changes (e.g. updating .gitignore)
        "revert", // Revert a previous commit
      ],
    ],
    // Subject must be lowercase
    "subject-case": [2, "always", "lower-case"],
    // Subject cannot be empty
    "subject-empty": [2, "never"],
    // Subject cannot end with a period
    "subject-full-stop": [2, "never", "."],
    // Max header length 100 chars
    "header-max-length": [2, "always", 100],
    // Body must have blank line before it
    "body-leading-blank": [1, "always"],
    // Footer must have blank line before it
    "footer-leading-blank": [1, "always"],
  },
};

export default config;
