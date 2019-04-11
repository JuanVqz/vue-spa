<template lang='pug'>
  #dashboardNavbar
    .navbar(role="navigation" aria-label="main navigation")
      .navbar-brand
        a.navbar-item
          img(src="https://bulma.io/images/bulma-logo.png" width="112" height="28")
      .navbar-menu
        .navbar-end
          .navbar-item
            .buttons
              a.button.is-danger(@click.prevent="logout") Cerrar sesión
</template>

<script>
  export default {
    name: 'dashboardNavbar',
    methods: {
      logout() {
        this.$store.dispatch('doLogout')
        this.$router.push({ name: 'login_path' })
      }
    }
  }
</script>
