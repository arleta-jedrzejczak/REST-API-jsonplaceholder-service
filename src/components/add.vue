<template lang="pug">
  div
    h2 Add a New User
    form(v-if="!submitted")
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
      button(v-on:click.prevent="post") Add User
    div(v-if="submitted")
      h3 User added successfully
    div
      h3 Preview
      p Name: {{ user.name }}
      p Username: {{ user.username }}
      p Email: {{ user.email }}
      p Website: {{ user.website }}
      p Phone: {{ user.phone }}
</template>

<script>
export default {
  data () {
    return {
      user: {
        name: '',
        username: '',
        email: '',
        website: '',
        phone: ''
      },
      submitted: false
    }
  },
    methods: {
      post: function(){
        this.$http.post('http://jsonplaceholder.typicode.com/users', {
          name: this.user.name,
          username: this.user.username,
          email: this.user.email,
          website: this.user.website,
          phone: this.user.phone
      }).then(function(data){
        this.submitted = true
      });
    }
  }
}
</script>


<style lang="stylus">

</style>
