<template>
<div class="login">
    <input id="username" type="text" class="txtLog" name="username" v-model.trim="form.username" required autofocus placeholder="Введите логин">  
    <input id="password" type="text" class="txtLog" name="password" v-model.trim="form.password" required autofocus placeholder="Введите пароль"> 
    <br />  
<button class="buttonLog " v-on:click="login">Log in</button>  
</div>
</template>

<script>    
import authService from '@/services/auth.service'
export default {
  name: "LoginPage",
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
    }
  },
  methods: {
    async login() {
      const {success} = await authService.login(this.form)
      if (success) {
        return await authService.routerPush('helloWorld')
      }
    }
  }
}
</script>

<style> 
.login{
    width: 850px;
    height: 1000px;
    background-image:url(2.jpg);
    background-position: center;
    background-size: 100% 100%;
    border-radius: 20px; 
    color: #fff;
    text-shadow: -1px 1px 0 #000;
    border-color: #111;
    border-radius: 1px;
    font-family: Arial;
    box-shadow: 4px 4px 4px #4f4f4f;
}
p {
  text-align: center;
  font-size: 1.5rem;
  margin: 0;
}
.buttonLog {
  width: 70px;
  height: 40px;
  margin-left: 400px;
  margin-top: 20px;
  background: #333;
  border-radius: 20px;
  text-align: center;
  line-height: 37px;
  font-size: 1rem;
  color: #fff;
  cursor: pointer;
  user-select: none;
}
.buttonLog:hover {
  filter: brightness(120%);
}
.buttonLog:active {
  filter: brightness(90%);
}
.txtLog {
  margin-left: 200px;
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

</style>