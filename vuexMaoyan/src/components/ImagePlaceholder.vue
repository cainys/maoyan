<template>
  <div class="img-responsive" v-bind:style="{'background-image':'url('+placeholder+')'}" style="background-size:100%;">
    <img :src="src" style="width: 100%; transition: all 1.2s ease;">
  </div>
</template>

<script>
  export default{
    props: {
      src: {
        type: String,
        required: true
      },
      placeholder: {
        type: String
      }
    }
  }
</script>
