<template lang="pug">
  div(v-if="editing").container.text-muted
    div.row
      div.col-md-6.col-lg-4.flex-column.justify-content-between.align-items-between
        div.card
          form.card-block.flex-column.justify-content-between.align-items-between
            h3.display-4 Edit user
            p Id {{user.id}}
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
          button(v-on:click.prevent="setEdit").btn.btn-outline-primary Edit User
          div.card-block
            h3.display-4 Preview
            p Id: {{ user.id }}
            p Name: {{ user.name }}
            p Username: {{ user.username }}
            p Email: {{ user.email }}
            p Website: {{ user.website }}
            p Phone: {{ user.phone }}
</template>

<script>
import {mapActions} from 'vuex'
import {bus} from '../main'
export default {
  data () {
    return {
      id: this.$route.params.id,
      editing: false,
      user: {
        id: '',
        name: '',
        username: '',
        email: '',
        website: '',
        phone: ''
      }
    }
  },
    methods: {
    setEdit: function () {
      var vm = this
      vm.patchUser(vm.user),
      vm.editing = false
      this.$router.push('/')
    },
    ...mapActions([
      'patchUser'
    ])
  },
  created () {
    var vm = this
    bus.$on('changeData', (data) => {
      vm.editing = true
      vm.user.id = data.id
      vm.user.name = data.name
      vm.user.username = data.username
      vm.user.email = data.email
      vm.user.website = data.website
      vm.user.phone = data.phone
    })
  }
}

</script>


<style lang="stylus">

</style>
