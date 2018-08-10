<template lang="pug">
  div
    editor
    deleter
    div(v-if="!editing&&!deleting")
      h2 {{ user.name }}
      ul
        li {{ user.id }}
        li {{ user.name }}
        li {{ user.username }}
        li {{ user.email }}
        li {{ user.website }}
        li {{ user.phone }}
      button(v-on:click.prevent="openForm(user)") Edit user
      button(v-on:click.prevent="confirmDelete(user)") Delete user
</template>

<script>
import {bus} from '../main'
import editor from './editor.vue'
import deleter from './deleter.vue'
export default {
  name: 'user',
  components: {
    editor,
    deleter
  },
  data () {
    return {
      editing: false,
      deleting: false
    }
  },
  computed: {
    users () {
      return this.$store.state.users
    },
    user () {
      return this.$store.state.users[this.$route.params.id-1]
    }
  },
  methods: {
    openForm: function(value) {
      var vm = this
      vm.editing = true
      bus.$emit('changeData', value)
    },
    confirmDelete: function(value) {
      var vm = this
      vm.deleting = true
      bus.$emit('deleteData', value)
    }
  },
  created () {
    if (!this.users) {
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>