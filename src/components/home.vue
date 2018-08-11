<template lang="pug">
  main
    div.jumbotron.jumbotron-fluid.bg-secondary.text-muted.text-center
      h1.display-2 Users
    div.container.text-muted
      div.row
        div.col-md-6.col-lg-4.flex-column.justify-content-center.align-items-center
          div(v-for="user in users").card
            div.card-block
              tr {{ user.id }}
              router-link(v-bind:to="'/' + user.id")
                tr.card-title {{ user.name }}
              tr {{ user.username }}
              tr {{ user.email }}
              tr {{ user.website }}
              tr {{ user.phone }}
</template>

<script>
import {bus} from '../main'
import {store} from './../store/store'
export default {
  name: 'home',
  data () {
    return {
  
    }
  },
  computed: {
    users () {
      return this.$store.state.users
    }
  },
  created () {
    store.dispatch('getUsers')
  },
  methods: {

  },
}
</script>

<style lang="stylus">

</style>
