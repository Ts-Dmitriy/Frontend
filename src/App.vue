<template>
  <LoginPage />
  <HelloWorld msg="Welcome to Your Vue.js App"/>
<CatalogProd/>
<!-- 
  <p v-if="role!='admin'"><router-link to="@/views/LoginPage">Login</router-link></p>
  <p v-if="role=='admin'"><router-link to="@/components/HelloWorld">Admin Panel</router-link></p> -->


</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import LoginPage from '@/views/LoginPage.vue';
import CatalogProd from './catalog/CatalogProd.vue';
export default {
  name: 'App',
  components: {
    HelloWorld,
    LoginPage,
    CatalogProd,
  },
  computed : {
    role(){
      return localStorage.getItem('role');
      
    }
  }
}

</script>

<style>
#app { 
  margin-left: 400px;
    width: 850px;
    height: 1000px;

}

</style>


