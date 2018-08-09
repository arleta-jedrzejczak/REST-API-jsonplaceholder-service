<template lang="pug">
  div
    h2 {{ user.name }}
    ul
      li {{ user.id }}
      li {{ user.name }}
      li {{ user.username }}
      li {{ user.email }}
      li {{ user.website }}
      li {{ user.phone }}
    
</template>

<script>
export default {
  data () {
    return {
      id: this.$route.params.id,
      user: {}
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