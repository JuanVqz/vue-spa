<template lang='pug'>
  #movieComponent
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
  export default {
    name: 'movieComponent',
    props: {
      movie: {
        required: true,
        type: Object
      }
    }
  }
</script>