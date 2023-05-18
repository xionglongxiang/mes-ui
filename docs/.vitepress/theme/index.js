// .vitepress/theme/index.js

// import 'element-plus/dist/index.css';

import '@xlx-ui/components/lib/style.css';

// import elementplus from 'element-plus';
import DefaultTheme from 'vitepress/theme';

import xlx from '@xlx-ui/components';

// console.log('elementplus', elementplus)
console.log(xlx)

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData }) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    // app.use(elementplus);
    app.use(xlx)
  },
};

