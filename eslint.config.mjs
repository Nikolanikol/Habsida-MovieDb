import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "eslint:recommended", // Рекомендуемые правила ESLint
    "plugin:react/recommended", // Правила для React
    "plugin:react-hooks/recommended", // Лучшие практики для хуков
    "plugin:jsx-a11y/recommended", // Доступность в JSX
    "plugin:prettier/recommended" // Интеграция с Prettier
  ),
  {
    rules: {
      "react/react-in-jsx-scope": "off", // Отключено для Next.js
      "unused-imports/no-unused-imports": "warn", // Уведомление о неиспользуемых импортов
      "@typescript-eslint/explicit-function-return-type": "warn", // Указывать типы функций явно
      "@typescript-eslint/no-explicit-any": "warn", // Предупреждение при использовании any
      "@typescript-eslint/consistent-type-imports": "error", // Всегда использовать type-импорты для типов
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", ["parent", "sibling", "index"]],
          "newlines-between": "always",
        },
      ], // Организация импортов
    },
    settings: {
      react: {
        version: "detect", // Автоматическое определение версии React
      },
    },
  },
];

export default eslintConfig;

