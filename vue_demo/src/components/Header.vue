<template>
  <div class="header_app">
  	<header>
  		<h1 @click="updateTitle">{{ title }}</h1> 
  	</header>
    
  </div>
</template>

<script>
export default {
  name: 'Header_App',
  data () {
    return {
      title: '点击一下我试试'    
    }
  },
  methods:{
    updateTitle:function(argument){
      // body...
      this.title = "我是网站的头部，你可以复用我哦"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -- CSS域 -->
<style scoped>
header h1{
	color:red
}

</style>
