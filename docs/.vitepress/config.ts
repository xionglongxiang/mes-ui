import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "mes-ui",
  description: "this is home page of mes-ui",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "组件文档", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
          { text: "test", link: "/test" },
        ],
      },
      {
        text: "基础",
        items: [{ text: "快速开始", link: "/introduction/quick-start" }],
      },
      {
        text: "Utils 工具函数",
        items: [{ text: "word parseer", link: "/utils/index" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
