<template lang='pug'>
  #categoriesShow
    h3.title {{ category.name }}
    h4.subtitle.has-text-grey-light {{ category.description }}

    .columns.is-multiline
      .column.is-6(v-for="movie in category.movies" :key="movie.id")
        .box
          article.media
            .media-content
              .content
                h3.title {{ movie.name }}
                p.has-text-justify {{ movie.description }}
              nav.level.is-mobile
                .level-left
                  .lavel-item.has-text-grey-light {{ movie.year }}
                .level-right
                  .lavel-item(v-for="r in movie.ranking")
                    font-awesome-icon(icon="star" class="has-text-warning")
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'categoriesShow',
    computed: mapState({
      category: state => state.category
    }),
    mounted() {
      this.$store.dispatch('getCategory', this.$route.params.id)
    }
  }
</script>