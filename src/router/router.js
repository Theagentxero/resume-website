import {createRouter, createWebHistory} from 'vue-router'

// Components
import Home from '../views/Home.vue'

const routes = [
    { path: '/', component: Home },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior (to, from, savedPosition) {
        if(to.hash){
            var navRect = document.getElementById('nav-cont').getBoundingClientRect();
            if(document.getElementsByTagName('body')[0].getBoundingClientRect().width < 768){
                return { 
                    top: navRect.height,
                    el: to.hash,
                    behavior: 'smooth',
                }
            }else{
                return { 
                    top: 20,
                    el: to.hash,
                    behavior: 'smooth',
                }
            }
            
        }
    }
})


export default router;