import { resolve as _resolve } from "path";
import ESLintPlugin from "eslint-webpack-plugin";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  target: "node",
  entry: "./src/index.ts",
  output: {
    filename: "bundle.cjs",
    path: _resolve(__dirname, "dist"),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  plugins: [new ESLintPlugin({ extensions: ["ts", "js"] })]
};
