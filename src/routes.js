
import home from './components/home.vue'
import add from './components/add.vue'
import user from './components/user.vue'
import editor from './components/editor.vue'
import deleter from './components/deleter.vue'

export default [
    { path:'/', component: home },
    { path:'/add', component: add },
    { path: '/:id', component: user},
    { path: '/:id/edit', component: editor},
    { path: '/:id/delete', component: deleter}
]