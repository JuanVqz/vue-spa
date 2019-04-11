<template lang='pug'>
  #login.hero.is-fullheight
    .hero-body
      .container.has-text-centered
        .column.is-6.is-offset-3
          .box
            h2.title Iniciar Sesión
            form(@submit.prevent="login")
              .field
                .control
                  input(type="text" v-model="user.email" class="input" placeholder="Ingrese su correo electronico" autofocus)
              .field
                .control
                  input(type="password" v-model="user.password" class="input" placeholder="Increse su contraseña")
              .field
                .control
                  button(type="submit" class="button is-fullwidth") Entrar

</template>

<script>
  export default {
    name: 'login',

    data() {
      return {
        user: {}
      }
    },

    methods: {
      login() {
        this.$store.dispatch('doLogin', this.user)
          .then(response => {
            this.$router.push({ name: response.path })
          })
          .catch(err => console.log(err))
      }
    }
  }
</script>
