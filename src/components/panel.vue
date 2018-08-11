<template lang="pug">
  header.navbar.navbar-toggleable-sm.bg-primary.navbar-inverse.fixed-top
    div.container
      div.navbar
        ul.navbar-nav.mr-auto
          li.nav-item.active
            router-link(v-bind:to="'/'")
              span.nav-link HOME
          li.nav-item
            router-link(v-bind:to="'/add'")
              span.nav-link ADD USER
</template>

<script>
export default {
  name: 'panel',
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
