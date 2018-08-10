<template lang="pug">
  div
    h1 Users
    table
      th(v-for="item in items" v-bind:key="item.id")
        tr {{item.description}}
      td(v-for="user in users")
        tr {{ user.id }}
        router-link(v-bind:to="'/' + user.id")
          tr {{ user.name }}
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
      items: [
        { id: 0, description: 'id' },
        { id: 1, description: 'name' },
        { id: 2, description: 'username' },
        { id: 3, description: 'email' },
        { id: 4, description: 'website' },
        { id: 5, description: 'phone' }
      ],
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
