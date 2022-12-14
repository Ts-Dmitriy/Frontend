<template>
  <LoginPage />
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <p v-if="role!='admin'"><router-link to="/helloWorld">Admin Panel</router-link></p>
  <p v-if="role=='admin'"><router-link to="/helloWorld">Admin Panel</router-link></p> -->
  <router-view/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import LoginPage from '@/views/LoginPage.vue';
export default {
  name: 'App',
  components: {
    // HelloWorld,
    LoginPage,
  },
  computed : {
    role(){
      return localStorage.getItem('role')
    }
  }
}

</script>

<style>
#app { 
  margin-left: 400px;
    width: 850px;
    height: 1000px;
    background-image:url(2.jpg);
    background-position: center;
    background-size: 160% 100%;
    border-radius: 20px; 
    color: #fff;
    text-shadow: -1px 1px 0 #000;
    border-color: #111;
    border-radius: 1px;
    font-family: Arial;
    box-shadow: 4px 4px 4px #4f4f4f;
}
.screen{
  width: 300px;
  height: 300px;
  margin-left: 900px;
  margin-top: -750px ;
  padding: 10px;
  background-image:url(2.jpg);
  background-position: center;
  border-radius: 20px;
}

p {
  text-align: center;
  font-size: 1.5rem;
  margin: 0;
}
.button {
  width: 70px;
  height: 40px;
  margin-left: 113px;
  background: #333;
  border-radius: 20px;
  text-align: center;
  line-height: 37px;
  font-size: 1rem;
  color: #fff;
  cursor: pointer;
  user-select: none;
}
th, td{
  /* padding: 0px 30px 0px 30px; */
  text-align: center;
}
.button2 {
  width: 70px;
  height: 40px;
  margin-left: 200px;
  background: #333;
  border-radius: 20px;
  text-align: center;
  line-height: 37px;
  font-size: 1rem;
  color: #fff;
  cursor: pointer;
  user-select: none;


}
.button:hover {
  filter: brightness(120%);
}
.button:active {
  filter: brightness(90%);
}

.txt {
  width: 470px;
  height: 45px;
  margin-top: 40px;
  margin-bottom: 8px; 
  background: rgb(211, 206, 206);
  text-align: left;
  line-height: 50px;
  font-size: 1.5rem;
  color: #111;
  border-radius: 17px;
  cursor: pointer;
  user-select: none;
}
.txt1 {
  width: 295px;
  height: 45px;
  margin-bottom: 8px; 
  background: rgb(211, 206, 206);
  text-align: left;
  line-height: 50px;
  font-size: 1.5rem;
  color: #111;
  border-radius: 17px;
  cursor: pointer;
  user-select: none;
}
.rad {
  font-family: sans-serif;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 10px;
  user-select: none;
  overflow-x: auto;
}
.checkb {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}
.demo {
  font-family: sans-serif;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 10px;
  user-select: none;
  overflow-x: auto;

}
.p-dropdown {
    width: 14rem;
}
.dropbtn {
  background-color: #2d477d;
  color: white;
  padding: 8px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}


.dropdown {
  position: relative;
  display: inline-block;
}


.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}


.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #f1f1f1}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #bab9f3;
}



</style>


