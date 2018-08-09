<template lang="pug">
  div
    h2 Delete user?
    ul
      li {{ user.name }}
      li {{ user.id }}
      li {{ user.name }}
      li {{ user.username }}
      li {{ user.email }}
      li {{ user.website }}
      li {{ user.phone }}
    button(v-on:click.prevent="deleter") Delete User
</template>

<script>
export default {
  data () {
    return {
      id: this.$route.params.id,
      user: {}
    }
  },
  methods: {
      deleter: function(){
        this.$http.delete('http://jsonplaceholder.typicode.com/users/' + this.id, {
          user: this.user
      }).then(function(data){
      });
    }
  },
  created() {
    this.$http.get('http://jsonplaceholder.typicode.com/users/' + this.id).then(data => {
      this.user = data.body
    })
  }
}
</script>

<style>

</style>