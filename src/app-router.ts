import { Router } from '@vaadin/router'
import './app-home'
import './app-what'
import './app-when'
import './app-who'
import './app-contact'

const outlet = document.getElementById('outlet')
const router = new Router(outlet)

router.setRoutes([
    { path: '/home', component: 'app-home' },
    { path: '/what', component: 'app-what' },
    { path: '/when', component: 'app-when' },
    { path: '/who', component: 'app-who' },
    { path: '/contact', component: 'app-contact' },
])