<template>
    <div class="hello">
        <p>
  {{'Users'}}
</p>
<button class="button " v-on:click="getDataUser()" >get</button>
<button class="button " key v-on:click="saveUser()" >save</button>
<button class="button " key v-on:click="updateUser()" >update</button>
<button class="button " key v-on:click="deleteUser()" >delete</button>
<table v-for="place in users" v-bind:key="place" style="width:100%">
  <tr>
    <th>ID</th>
    <th>User Name</th>
    <th>Number</th>
    <th>Password</th>
    <th>Access Token</th>
  </tr>
  <tr>
    <td>{{place.id_user}}</td>
    <td>{{place.fullname}}</td>
    <td>{{place.number}}</td>
    <td  style=
"max-width:100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis">{{place.password_hash}}</td>
    <td    style=
"max-width:100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis">{{place.access_token}}</td>
  </tr>
</table>
<br><br>
</div>
<UserSave   v-show="modalUserSave" @updateDataUser="getDataUser" @close="closeModal"/>
<UserUpdate   v-show="modalUserUpdate"  @updateDataUser="getDataUser" @close="closeModal"/>
<UserDelete   v-show="modalUserDelete"  @updateDataUser="getDataUser" @close="closeModal"/>
</template>

<script>
import axios from 'axios';
import UserSave from '@/components/save/CategorySave.vue';
import UserUpdate from '@/components/update/CategoryUpdate.vue';
import UserDelete from '@/components/delete/CategoryDelete.vue';
export default {
name: 'HelloWorld',
components: {
  UserSave,
  UserUpdate,
  UserDelete,

  },
props: {
  msg: String
},

      data() {
          return {
            users:[],
            modalUserSave:false,
            modalUserUpdate:false,
            modalUserDelete:false,

          }
  },
  methods: {
    async getDataUser(count) {
            const { data } = await axios.get("http://localhost/basic/web/index.php/user/get-data");
            console.log(data);

            if(count==null){
            if(this.users.length==0){
            this.users = data;
            }
            else{
              this.users = [];
            }}

            else if(count==1){
              this.users = data;
            }
        },
        saveUser(){
          this.modalUserSave = !this.modalUserSave
        },
        updateUser(){
          this.modalUserUpdate=!this.modalUserUpdate
        },
        deleteUser(){
          this.modalUserDelete=!this.modalUserDelete
        },
        closeModal(isClose){
          console.log(isClose)
          this.modalUserSave = isClose;
          this.modalUserUpdate = isClose;
          this.modalUserDelete= isClose;
        },
}
}

</script>
<style>
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
.button:hover {
  filter: brightness(120%);
}
.button:active {
  filter: brightness(90%);
}
</style>