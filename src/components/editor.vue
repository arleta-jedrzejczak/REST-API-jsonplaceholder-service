<template lang="pug">
  div
    h2 Edit user
    form(v-if="!submitted")
      p Id {{user.id}}
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
      button(v-on:click.prevent="patch") Edit User
    div(v-if="submitted")
      h3 User edited successfully
    div
      h3 Preview
      p Id: {{ user.id }}
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
      id: this.$route.params.id,
      user: {
        id: '',
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
      patch: function(){
        this.$http.patch('http://jsonplaceholder.typicode.com/users/' + this.id, {
          id: this.user.id,
          name: this.user.name,
          username: this.user.username,
          email: this.user.email,
          website: this.user.website,
          phone: this.user.phone
      }).then(function(data){
        this.submitted = true
      });
    }
  },
  created() {
    this.$http.get('http://jsonplaceholder.typicode.com/users/' + this.id).then(data => {
      this.user.id = data.body.id,
      this.user.name = data.body.name,
      this.user.username = data.body.username,
      this.user.email = data.body.email,
      this.user.website = data.body.website,
      this.user.phone = data.body.phone
    })
  }
}
</script>


<style lang="stylus">

</style>
