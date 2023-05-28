import '@xlx-ui/components/lib/style.css';
import './style.css';

import DefaultTheme from 'vitepress/theme';

import xlx from '@xlx-ui/components';

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData }) => {
    app.use(xlx)
  },
};

