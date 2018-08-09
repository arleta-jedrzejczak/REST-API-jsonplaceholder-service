<template lang="pug">
  #app
    router-view
</template>

<script>
import home from './components/home.vue'
import add from './components/add.vue'
import user from './components/user.vue'
import editor from './components/editor.vue'
import deleter from './components/deleter.vue'
import {bus} from './main'

export default {
  name: 'app',
  components: {
    home,
    add,
    user,
    editor,
    deleter
  }
}
</script>

<style>

</style>
