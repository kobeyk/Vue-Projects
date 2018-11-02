  <template>  
    <div class="user">
      <header_app></header_app>
      <ul>
        <!-- <li  v-for = "user in users" @click="user.show = !user.show">
          <p v-show="user.show"  > {{user.name}} - {{user.job}}</p> 
        </li> -->
        <li  v-for = "user in users">
         <p>{{user.name}} - {{user.email}}</p>
       </li>
     </ul>
     <footer_app></footer_app>
     <router-link to="/hello">Hello</router-link>
   </div>  
 </template>
 <script>

  // 引入网页头和网页尾部组件
  import Header_App from '@/components/Header'
  import Footer_App from '@/components/Footer'

  export default {
    name: 'User',
    data () {
      return {
       users:[]
     }
   },
    // 放置组件
    components:{
    	"header_app":Header_App,
      "footer_app":Footer_App
    },
    beforeCreate(){
      alert("Vue实例创建前，页面还没有显示出来！")
    },
    created(){
      alert('Vue实例已经被创建，但是页面还没有显示出来')
      // 免费的json api == http://jsonplaceholder.typicode.com/
      this.$http.get("http://jsonplaceholder.typicode.com/users")
      .then((data)=>{
          // console.log(data)
          this.users = data.body;
        })
    },
    beforeMount(){
      alert('DOM被装载前，页面还未显示出来')
    },
    mounted(){
      alert('DOM已经完成装载，页面终于显示出来了')
    },
    beforeUpdate(){
      alert('DOM更新前，页面还没有变化')
    },
    updated(){
      alert('DOM更新后，页面已经发生了改变')
    },
    destroy(){
      alert('Vue实例销毁')
    }
  }
  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -- CSS域 -->
  <style scoped>
  ul li{ 
   color:orange
  }

  ul li p{
    color:blue
  }

  </style>
