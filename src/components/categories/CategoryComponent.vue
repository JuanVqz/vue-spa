<template lang='pug'>
  #categoryComponent
    h3.title {{ category.name }}
    h4.subtitle.has-text-grey-light {{ category.description }}
</template>

<script>
  export default {
    name: 'categoryComponent',
    props: {
      category: {
        required: true,
        type: Object
      }
    }
  }
</script>