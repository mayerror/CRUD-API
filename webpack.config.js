import { resolve as _resolve } from "path";
import ESLintPlugin from "eslint-webpack-plugin";

export const target = "node";
export const entry = "./src/index.ts";
export const module = {
  rules: [
    {
      test: /\.ts$/,
      use: "ts-loader",
      exclude: /node_modules/
    }
  ]
};
export const output = {
  filename: "bundle.js",
  path: _resolve(__dirname, "dist"),
  clean: true
};
export const resolve = {
  extensions: [".ts", ".js"]
};
export const plugins = [new ESLintPlugin({ extensions: ["ts", "js"] })];
