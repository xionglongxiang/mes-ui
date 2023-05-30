import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  description: "this is home page of mes-ui",
  title: "mes-ui",
  themeConfig: {
    siteTitle: false,
    logo: "../logo.png",
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
        collapsed: false,
        items: [
          { text: "Alert", link: "/components/Alert" },
          { text: "Button", link: "/components/Button" },
          { text: "DatePicker", link: "/components/DatePicker" },
          { text: "Dialog", link: "/components/Dialog" },
          { text: "Drawer", link: "/components/Drawer" },
          { text: "Input", link: "/components/Input" },
          { text: "Message", link: "/components/Message" },
          { text: "MessageBox", link: "/components/MessageBox" },
          { text: "Notification", link: "/components/Notification" },
          { text: "Popconfirm", link: "/components/Popconfirm" },
          { text: "Progress", link: "/components/Progress" },
          { text: "Select", link: "/components/Select" },
          { text: "Table", link: "/components/Table" },
          { text: "Uploader", link: "/components/Uploader" },
        ],
      },
      {
        text: "Business 业务组件",
        collapsed: false,
        items: [{ text: "Button", link: "/components/Button" }],
      },
      {
        text: "Utils 工具函数",
        collapsed: false,
        items: [
          { text: "Checker", link: "/Utils/Checker" },
          { text: "Cookie", link: "/Utils/Cookie" },
          { text: "Date", link: "/Utils/Date" },
          { text: "HtmlEncoder", link: "/Utils/HtmlEncoder" },
          { text: "Precision", link: "/Utils/Precision" },
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
