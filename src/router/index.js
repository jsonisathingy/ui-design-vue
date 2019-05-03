import Router from 'vue-router';
import Color from '../components/Color';
import Typography from '../components/Typography';
import Alerts from '../components/Alerts';
import Buttons from '../components/Buttons';
import Cards from '../components/Cards';
import Dropdowns from '../components/Dropdowns';
import Sidebar from '../components/Sidebar';
import Tabs from '../components/Tabs';
import NotFound from '../components/NotFound';
/**
 * Available toolbar configuration
 * hideToolbar - Will hide main toolbar when route accessed
 */
export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/color'
        },
        {
            path: '/color',
            name: 'Color',
            component: Color,
            meta: { hideToolbar: false }
        },
        {
            path: '/typography',
            name: 'Typography',
            component: Typography,
            meta: { hideToolbar: false }
        },
        {
            path: '/alerts',
            name: 'Alerts',
            component: Alerts,
            meta: { hideToolbar: false }
        },
        {
            path: '/buttons',
            name: 'Buttons',
            component: Buttons,
            meta: { hideToolbar: false }
        },
        {
            path: '/cards',
            name: 'Cards',
            component: Cards,
            meta: { hideToolbar: false }
        },
        {
            path: '/dropdowns',
            name: 'Dropdowns',
            component: Dropdowns,
            meta: { hideToolbar: false }
        },
        {
            path: '/sidebar',
            name: 'Sidebar',
            component: Sidebar,
            meta: { hideToolbar: false }
        },
        {
            path: '/tabs',
            name: 'Tabs',
            component: Tabs,
            meta: { hideToolbar: false }
        },
        {
            path: '*',
            component: NotFound,
            meta: { hideToolbar: true, bodyClass: 'fr-body-image' }
        }
    ]
});
