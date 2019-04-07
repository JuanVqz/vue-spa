<template lang='pug'>
  #categoriesShow
    CategoryComponent(:category="category")

    .columns.is-multiline
      .column.is-6(v-for="movie in category.movies" :key="movie.id")
        MovieComponent(:movie="movie")
</template>

<script>
  import { mapState } from 'vuex'
  import CategoryComponent from '@/components/categories/CategoryComponent'
  import MovieComponent from '@/components/categories/MovieComponent'

  export default {
    name: 'categoriesShow',
    components: {
      CategoryComponent,
      MovieComponent
    },
    computed: mapState({
      category: state => state.category
    }),
    mounted() {
      this.$store.dispatch('getCategory', this.$route.params.id)
    }
  }
</script>