import { Router } from '@vaadin/router'
import './app-home'
import './app-what'
import './app-when'
import './app-who'
import './app-contact'

const outlet = document.getElementById('outlet')
const router = new Router(outlet)

const routes = [
    { path: '/', component: 'app-home' },
    { path: '/home', component: 'app-home' },
    { path: '/what', component: 'app-what' },
    { path: '/when', component: 'app-when' },
    { path: '/who', component: 'app-who' },
    { path: '/impressum', component: 'app-impressum' },
] 

router.setRoutes(routes)
let scrollAccumulator = 0
let routeIndex = 1

history.pushState({ routeIndex: 1}, '')
// @ts-ignore
window.onmousewheel = async (event: MouseEvent) => {
    // @ts-ignore
    if (event.deltaY) {
        // @ts-ignore
        if (event.deltaY > 0) {
            scrollAccumulator += 25 
        // @ts-ignore
        } else if (event.deltaY < 0) {
            scrollAccumulator -= 25 
        }
    }

    if (Math.abs(scrollAccumulator) > 500) {
        if (scrollAccumulator > 0 && routeIndex < 6) {
            routeIndex++
            await Router.go(routes[routeIndex].path)
        } else if (routeIndex >= 1) {
            routeIndex--
            await Router.go(routes[routeIndex].path)
        }
        scrollAccumulator = 0
    }
}

document.getElementsByTagName('body')[0]!.onscroll = ((e) => console.log(e))