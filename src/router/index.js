import {
    createRouter,
    createWebHistory
} from 'vue-router'

const routes = [{
        path: '/',
        name: 'Index',
        component: () => import('../components/SelectModel.vue')
        
    },
    {
        path: '/Timer',
        name: 'Timer',
        component: () => import('../components/Timer.vue')

    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})