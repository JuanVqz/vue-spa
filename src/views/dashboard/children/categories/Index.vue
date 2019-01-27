<template lang='pug'>
  #categoriesIndex
    .columns.is-multiline
      .column.is-4(v-for="category in categories" :key="category.id")
        router-link(:to="{ name: 'category_path', params: { id: category.id } }")
          .notification
            h2.title {{ category.name }}
            h6.subtitle.has-text-justify {{ category.description }}
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'categoriesIndex',
    computed: mapState({
      categories: state => state.categories
    }),
    mounted() {
      this.$store.dispatch('fetchCategories')
    }
  }
</script>
