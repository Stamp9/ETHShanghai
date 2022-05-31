import { WelcomePage } from './';
import Rss from './Rss'

export default {
  path: '',
  childRoutes: [
    { path: 'welcome-page', component: WelcomePage, isIndex: true },
    { path: 'rss', component: Rss }
  ],
};
