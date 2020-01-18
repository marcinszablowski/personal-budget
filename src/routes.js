import React from 'react';


const Dashboard = React.lazy(() => import('./views/Dashboard'));
const MainAccount = React.lazy(() => import('./views/Accounts/MainAccount'));
const Goals = React.lazy(() => import('./views/Goals/Goals'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/goals', name: 'Goals', component: Goals },
  { path: '/accounts/main-account', name: 'Main Account', component: MainAccount },
];

export default routes;
