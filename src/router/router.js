import {createRouter, createWebHistory} from 'vue-router'

// Components
import Home from '../views/Home.vue'
import BlogHome from '../views/BlogHome.vue'

const blog = {
    thumbGen: () => import('../articles/EntropyBasedCropping.vue'),
    clarity: () => import('../articles/CodeClarity.vue'),
    cargo: () => import('../articles/CargoCult.vue'),
    jwt: () => import('../articles/JWTs.vue'),
}

const routes = [
    { 
        path: '/', 
        name: 'home',
        component: Home
    },
    {
        name: 'blog',
        path: '/blog', 
        component: BlogHome,
        children:[
            {
                name: 'post3',
                path: '/blog/code_clarity',
                component: blog.clarity,
                meta: {
                    isMostRecentPost: true
                }
            },
            {
                name: 'post2',
                path: '/blog/new_face_of_cargo_cult_programming',
                component: blog.cargo,
                meta: {
                    isMostRecentPost: false
                }
            },
            {
                name: 'post1',
                path: '/blog/jwts',
                component: blog.jwt,
                meta: {
                    isMostRecentPost: false
                }
            },
            {
                name: 'post0',
                path: '/blog/thumbnail_generation',
                component: blog.thumbGen,
                meta: {
                    isMostRecentPost: false
                }
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior (to, from, savedPosition) {
        if(to.hash){
            if(document.getElementsByTagName('body')[0].getBoundingClientRect().width < 768){
                return {
                    top: 50,
                    el: to.hash,
                    behavior: 'smooth',
                }
            }else{
                return { 
                    top: 10,
                    el: to.hash,
                    behavior: 'smooth',
                }
            }
            
        }
    }
})

export default router;