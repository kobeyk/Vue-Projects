<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/">Home</router-link> 
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to My Vue'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -- CSS域 -->
<style scoped>


</style>
