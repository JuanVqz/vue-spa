<template lang='pug'>
  #categoriesIndex
    .columns.is-multiline
      .column.is-4(v-for="category in categories" :key="category.id")
        .notification
          h2.title {{ category.name }}
          h6.subtitle.has-text-justify {{ category.description }}
</template>

<script>
  export default {
    name: 'categoriesIndex',
    data() {
      return {
        categories: []
      }
    },
    mounted() {
      this.fetchCategories()
    },
    methods: {
      fetchCategories() {
        this.$http.get("http://localhost:3000/api/categories")
          .then(response => this.categories = response.data)
          .catch(err => console.log(err.response))
      }
    }
  }
</script>
