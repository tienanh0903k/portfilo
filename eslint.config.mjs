import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off", // Tắt quy tắc kiểm tra biến không sử dụng
      "react/no-unescaped-entities": "off", // Tắt quy tắc kiểm tra ký tự không thoát
    },
  },
];

export default eslintConfig;
