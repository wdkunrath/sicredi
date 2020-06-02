import Inside from '../layout/Inside';
import Outside from '../layout/Outside';
import {
    Dashboard,
    NotFound,
    PermissionDenied,
    Emitter,
    Login,
} from '@views';

const routesList = [

    {
        component: NotFound,
        exact: true,
        layout: Outside,
        path: '/404',
        title: '404'
    },
    {
        component: Dashboard,
        exact: true,
        layout: Inside,
        path: '/dashboard',
        title: 'Dashboard'
    },
    {
        component: Emitter,
        exact: true,
        layout: Inside,
        path: '/emissao',
        title: 'Emissão'
    },
    {
        component: Login,
        exact: true,
        layout: Outside,
        path: '/login',
        title: 'Login'
    },
    {
        component: PermissionDenied,
        exact: true,
        layout: Outside,
        path: '/permissionDenied',
        title: 'Permission Denied'
    }

];

export default routesList;