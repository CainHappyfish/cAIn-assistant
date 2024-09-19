import Welcome from '../views/welcome.vue'
import Chat from '../views/chats.vue'
import Settings from '../components/Settings/SettingPanel.vue'
import Test from '../views/test.vue'
import {createRouter, createWebHistory} from "vue-router";


const routes = [
    { path: '/', component: Welcome },
    { path: '/chat', component: Chat },
    { path: '/settings', component: Settings },
    { path: '/test', component: Test },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router