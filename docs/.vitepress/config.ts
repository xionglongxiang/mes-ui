import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  description: "this is home page of mes-ui",
  themeConfig: {
    siteTitle: "",
    logo: "../logo.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "组件文档", link: "/introduction/quick-start" },
      { text: "组件需求", link: "https://www.yuque.com/u33828756/chbl2o" },
    ],

    sidebar: [
      {
        text: "基础",
        items: [
          { text: "快速开始", link: "/introduction/quick-start" },
          { text: "问题列表", link: "/introduction/questions" },
          { text: "设计思路", link: "/introduction/design" },
        ],
      },

      {
        text: "Basic 基础组件",
        items: [{ text: "Button", link: "/components/Button" }],
      },
      {
        text: "Utils 工具函数",
        items: [
          { text: "word parseer", link: "/utils/index" },
          { text: "cookie", link: "/utils/cookie" },
        ],
      },
      {
        text: "文档辅助",
        items: [
          { text: "文档编写案例", link: "/markdown-examples" },
          { text: "test", link: "/test" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
