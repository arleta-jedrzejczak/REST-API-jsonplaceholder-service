<template lang="pug">
  div(v-if="deleting")
    h2 Delete user?
    ul
      li {{ user.name }}
      li {{ user.id }}
      li {{ user.name }}
      li {{ user.username }}
      li {{ user.email }}
      li {{ user.website }}
      li {{ user.phone }}
    button(v-on:click.prevent="setDel") Delete User
</template>

<script>
import {mapActions} from 'vuex'
import {bus} from '../main'
export default {
  data () {
    return {
      deleting: false,
      id: this.$route.params.id,
      user: {}
    }
  },
  methods: {
    setDel: function () {
      this.deleteUser(this.user)
      this.$router.push('/')
    },
    ...mapActions([
      'deleteUser'
    ])
  },
  created() {
    var vm = this
    bus.$on('deleteData', (data) => {
      vm.deleting = true
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

<style>

</style>