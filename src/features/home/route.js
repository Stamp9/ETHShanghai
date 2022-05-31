import { WelcomePage, Page1 } from './';

export default {
  path: '',
  childRoutes: [{ path: 'welcome-page', component: WelcomePage, isIndex: true }, { path: 'page1', component: Page1 }],
};
