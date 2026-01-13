import { createWebHistory, createRouter } from 'vue-router'
import WikiMenu from '../components/WikiMenu.vue'
import WikiPage from '../components/WikiPage.vue'
import WikiNotion from '../components/WikiNotion.vue'

const routes = [
    { 
        path: '/',
        name: 'accueil',
        component: WikiMenu
    },
    { 
        path: '/categorie/:categorie', 
        name: 'categorie',
        component: WikiMenu 
    },
    {
        path: '/wiki/:subcat',
        name: 'wiki-subcat',
        component: WikiPage
    },
    {
        path: '/wiki/:subcat/:notion',
        name: 'wiki-notion',
        component: WikiNotion
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router