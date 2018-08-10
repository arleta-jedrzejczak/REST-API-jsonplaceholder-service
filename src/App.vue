<template lang="pug">
  #app
    panel
    router-view
</template>

<script>
import panel from './components/panel.vue'
import home from './components/home.vue'
import add from './components/add.vue'
import user from './components/user.vue'
import {bus} from './main'

export default {
  name: 'app',
  components: {
    panel,
    home,
    add,
    user
  }
}
</script>

<style>

</style>
