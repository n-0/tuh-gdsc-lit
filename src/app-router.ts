import { Router } from '@vaadin/router'
import './home/app-home'
import './what/app-what'
import './when/app-when'
import './who/app-who'
import './terms/app-terms'

const outlet = document.getElementById('outlet')
const router = new Router(outlet)

const routes = [
    { path: '/', component: 'app-home' },
    { path: '/home', component: 'app-home' },
    { path: '/what', component: 'app-what' },
    { path: '/when', component: 'app-when' },
    { path: '/who', component: 'app-who' },
    { path: '/terms', component: 'app-terms' },
] 

router.setRoutes(routes)
