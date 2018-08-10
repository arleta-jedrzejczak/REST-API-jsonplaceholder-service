<template lang="pug">
  div
    h2 Add a New User
    form
      label Name
        input(type="text" v-model="user.name" required)
      label
        input(type="text" v-model="user.username" required)
      label
        input(type="email" v-model="user.email" required)
      label
        input(type="text" v-model="user.website")
      label
        input(type="text" v-model="user.phone")
      button(v-on:click.prevent="getId") Add User
    div
      h3 Preview
      p Name: {{ user.name }}
      p Username: {{ user.username }}
      p Email: {{ user.email }}
      p Website: {{ user.website }}
      p Phone: {{ user.phone }}
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data () {
    return {
      user: {
        id: '',
        name: '',
        username: '',
        email: '',
        website: '',
        phone: '',
        adress: {
          city: 'test',
          geo: {
            lat: 'test',
            lng: 'test'
          },
          street: 'test',
          suite: 'test',
          zipcode: 'test'
        },
        comapny: {
          bs: 'test',
          catchPhrase: 'test',
          name: 'test'
        }
      }
    }
  },
  computed: {
    users () {
      return this.$store.state.users
    }
  },
  methods: {
    getId: function () {
      var vm = this
      vm.user.id = vm.users.length + 1
      vm.addUser(vm.user)
      this.$router.push('/')
    },
    ...mapActions([
      'addUser',
      ''
    ])
  },
  created () {
    if (!this.users) {
      this.$router.push('/')
    }
  }
}
</script>


<style lang="stylus">

</style>
