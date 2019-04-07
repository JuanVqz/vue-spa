<template lang='pug'>
  #categoriesNew
    form(@submit.prevent="newCategory")
      .columns
        .column.is-half.is-offset-one-quarter
          h3.title.is-uppercase registrar nueva categoria
          .field
            .label Nombre
            .control
              input.input(v-model="category.name" placeholder="Ingrese el nombre de la categoria" autofocus required)
          .field
            .label Descripción
            .control
              textarea.textarea(v-model="category.description" placeholder="Ingrese la descripción de la categoria")

      .columns.is-multiline
        .column.is-12(v-for="(movie, index) in category.movies_attributes")
          .card
            .card-header
              .card-header-title.is-uppercase pelicula
              .card-header-icon
                span.icon(@click="deleteMovieForm(index)")
                  font-awesome-icon(icon="times")
            .card-content
              .columns
                .column
                  .field
                    .label Nombre
                    .control
                      input.input(v-model="movie.name" placeholder="Ingrese el nombre")
                  .field
                    .label Año
                    .control
                      input.input(v-model="movie.year" placeholder="Ingrese el año")
                  .field
                    .label Valoración
                    .control
                      input.input(type="number" v-model="movie.ranking" min="1" max="5" placeholder="Ingrese la valoración")
                .column
                  .field
                    .label Descripción
                    .control
                      textarea.textarea(v-model="movie.description" rows="7" placeholder="Ingrese la descripción")

      .buttons
        button.button.is-success
          span.icon
            font-awesome-icon(icon="save")
          span Guardar
        button.button.is-link(@click.prevent="addMovieForm" style="margin-left: auto;")
          span.icon
            font-awesome-icon(icon="plus")
          span Agregar pelicula
</template>

<script>
  export default {
    name: 'categoriesNew',
    data() {
      return {
        category: {
          movies_attributes: []
        }
      }
    },
    methods: {
      newCategory() {
        this.$store.dispatch('postCategory', this.category)
          .then(response => {
            this.$router.push({ name: 'category_path', params: { id: response.data.id }})
          })
      },
      addMovieForm() {
        this.category.movies_attributes.push(
          { name: '', description: '', year: 2019, ranking: 3 }
        )
      },
      deleteMovieForm(index) {
        this.category.movies_attributes.splice(index, 1)
      }
    }
  }
</script>