
import HomePage from '../pages/home.f7';
import AboutPage from '../pages/about.f7';
import FormPage from '../pages/form.f7';


import ListJobPage from '../pages/list-job.f7';
import PendingJobPage from '../pages/pending-job.f7';
import ProfilePage from '../pages/profile.f7';

import NotFoundPage from '../pages/404.f7';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/home/',
    component: HomePage,
  },
  {
    path: '/list-job/',
    component: ListJobPage,
  },
  {
    path: '/pending-job/',
    component: PendingJobPage,
  },
  {
    path: '/profile/',
    component: ProfilePage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;