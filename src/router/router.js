import Home from '../pages/home';
import User from '../pages/user';
import Profile from '../pages/profile';
import Nav from '../pages/nav';
import DataVisual from '../pages/dataVisual';
import Webgl from '../pages/webgl';
import SvgTest from '../pages/svg-test';

export default [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: 'user/:userId',
        name: 'user',
        component: User,
        props: true
      },
      {
        path: 'profile',
        components: {
          default: Profile,
          nav: Nav
        }
      },
      {
        path: 'dataVisual',
        component: DataVisual
      },
      {
        path: 'webgl',
        component: Webgl
      },
      {
        path: 'svg-test',
        component: SvgTest
      }
    ]
  }
];

// 其中require.ensure()可以实现按需加载
