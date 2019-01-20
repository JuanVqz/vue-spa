<template lang='pug'>
  #dashboardSidebar
    aside.menu
      p.menu-label CATEGORIAS
      ul.menu-list
        li
          router-link(:to="{ name: 'home_path' }")
            span.icon
              font-awesome-icon(icon='home')
            span Inicio
</template>

<script>
  export default {
    name: 'dashboardSidebar'
  }
</script>