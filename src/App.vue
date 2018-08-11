<template lang="pug">
  #app
    panel
    div.jumbotron.jumbotron-fluid.bg-primary
    router-view.jumbotron-fluid
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

<style lang="stylus">
#app
  font-family 'Lato', sans-serif
</style>
