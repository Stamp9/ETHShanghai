// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import { WelcomePage, CounterPage, RedditListPage, Layout } from './';

export default {
  path: 'examples',
  component: Layout,
  childRoutes: [
    { path: '', component: WelcomePage, isIndex: true },
    { path: 'counter', component: CounterPage },
    { path: 'reddit', component: RedditListPage },
  ],
};
