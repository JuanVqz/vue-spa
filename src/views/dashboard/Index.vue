<template lang='pug'>
  #dashboardIndex
    Navbar
    section.section
      .columns
        .column.is-2
          Sidebar
        .column.is-10
          .content
            router-view
</template>

<script>
  import Navbar from './partials/Navbar'
  import Sidebar from './partials/Sidebar'

  export default {
    name: 'dashboardIndex',
    components: { Navbar, Sidebar }
  }
</script>