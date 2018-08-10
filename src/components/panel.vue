<template lang="pug">
  div
    router-link(v-bind:to="'/'")
      span HOME
    router-link(v-bind:to="'/add'")
      span ADD USER
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
