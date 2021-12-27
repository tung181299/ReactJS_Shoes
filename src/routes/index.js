import Dashboard from 'containers/admin/Dashboard/Dashboard';

import User from 'containers/admin/User/User';
import About from 'containers/client/About/About';

import DemoHOC from 'containers/client/DemoHOC/DemoHOC';

import Home from 'containers/client/Home/Home';

import Review from 'containers/client/Review/Review';
import Login from 'containers/shared/Auth/Login/Login';
import Register from 'containers/shared/Auth/Register/Register';
import PageNotFound from 'containers/shared/PageNotFound/PageNotFound';



export const clientRoutes = [{
        path: '/',
        component: Home,
        exact: true,
        isPrivate: false,
    },
    {
        path: '/review',
        component: Review,
        exact: false,
        isPrivate: false,
    },
    {
        path: '/about',
        component: About,
        exact: false,
        isPrivate: false,
    },
    {
        path: '/hoc',
        component: DemoHOC,
        exact: false,
        isPrivate: false,
    },


];

export const adminRoutes = [{
        path: '/admin',
        component: Dashboard,
        exact: true,
        isPrivate: true,
    },
    {
        path: '/admin/user',
        component: User,
        exact: false,
        isPrivate: true,
    },

];
export const sharedRoutes = [{
        path: '/login',
        component: Login,
        exact: true,
        isPrivate: false,
    },
    {
        path: '/register',
        component: Register,
        exact: true,
        isPrivate: false,
    },
    {
        path: '*',
        component: PageNotFound,
        exact: false,
        isPrivate: false,
    },

]