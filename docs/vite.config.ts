//vite.config.js
import flexSearchIndexOptions from "flexsearch";
import { defineConfig } from "vite";
import { SearchPlugin } from "vitepress-plugin-search";

//default options
var options = {
  ...flexSearchIndexOptions,
  previewLength: 100, 
  buttonLabel: "搜索",
  placeholder: "请输入关键词",
  lang: "zh",
  allow: [],
  ignore: [],
  encode: false,
  tokenize: "full"
};

export default defineConfig({
  plugins: [SearchPlugin(options)],
});