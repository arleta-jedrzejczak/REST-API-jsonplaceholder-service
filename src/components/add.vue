<template lang="pug">
  div
    div.jumbotron.jumbotron-fluid.bg-secondary.text-muted.text-center
      h2.display-3 Add a New User
    div.container.text-muted
      div.row
        div.col-md-6.col-lg-4.flex-column.justify-content-between.align-items-between
          div.card
            div.card-block.flex-column.justify-content-between.align-items-between
              form.card-block
                label Name
                  input(type="text" v-model="user.name" required)
                label Username
                  input(type="text" v-model="user.username" required)
                label Email
                  input(type="email" v-model="user.email" required)
                label Website
                  input(type="text" v-model="user.website")
                label Phone
                  input(type="text" v-model="user.phone")
              button(v-on:click.prevent="getId").btn.btn-outline-primary Add User
              div.card-block
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
