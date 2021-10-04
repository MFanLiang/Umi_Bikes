import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  "theme": {
    "primary-color": "#33FF00",
  },

  copy: ['/public'],
  //因为整个项目要使用约定式路由，所以将下面的配置信息注释掉
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  fastRefresh: {},
});
