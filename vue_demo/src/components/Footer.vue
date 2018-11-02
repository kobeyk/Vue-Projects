<template>
  <div class="footer_app">
    <h1>{{ title }}</h1> 
  </div>
</template>

<script>
export default {
  name: 'Footer_App',
  data () {
    return {
      title: 'Copyright ©2018 Appleyk'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -- CSS域 -->
<style scoped>

h1{
	color:green
}

</style>
