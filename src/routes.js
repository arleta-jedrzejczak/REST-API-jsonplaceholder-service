
import home from './components/home.vue'
import add from './components/add.vue'
import user from './components/user.vue'

export default [
    { path:'/', component: home },
    { path:'/add', component: add },
    { path: '/:id', component: user}
]