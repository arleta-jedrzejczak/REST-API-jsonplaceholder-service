<template lang="pug">
  div(v-if="deleting").container.text-muted
    div.row
      div.col-md-6.col-lg-4.flex-column.justify-content-between.align-items-between
        div.card
          div.card-block.flex-column.justify-content-between.align-items-between
            h3.display-4 Delete user?
            ul
              li {{ user.name }}
              li {{ user.id }}
              li {{ user.name }}
              li {{ user.username }}
              li {{ user.email }}
              li {{ user.website }}
              li {{ user.phone }}
            button(v-on:click.prevent="setDel").btn.btn-outline-primary Delete User
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