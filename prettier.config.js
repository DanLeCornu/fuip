module.exports = {
  trailingComma: "all",
  tabWidth: 2,
  semi: false,
  singleQuote: false,
  printWidth: 110,
  plugins: [require("prettier-plugin-tailwindcss")],
  tailwindConfig: "./packages/web/tailwind.config.js",
}
