
<template>
    <div class="modal-backdrop">
      <div class="modal">
        <slot name="header">
          Добавление отзыва
        </slot>
    
        <slot name="body">
          <div class="container">
    <div>
      <h2>Single File</h2>
      <hr/>
      <input type="text" class="txt"  v-model="id_user" placeholder="ID user"> <br>
        <input type="file" id="imageFile" name="imageFile" ref="file" />
      
      <br>
      <button v-on:click="submitFile()">Submit</button>
    </div>
  </div>
      </slot>
    
      <slot name="footer">
    
    <button type="button" class="btn-green" @click="close">Close</button>   
    
    </slot>
    </div>
    </div>
    </template>
    
    <script>
import axios from "axios";
    export default {
        name: "ReviewSave",
        props: {
          
        },
        data() {
            return {
              id_user:null,
              imageFile: '',

            };
        },

        methods: {
    
            close() {
                this.$emit("close", false);
            },

    submitFile() {
this.imageFile= this.$refs.file.files[0];
let formData = new FormData();
formData.append('imageFile', this.imageFile);
formData.append('id_user', this.id_user); 
console.log(formData.get('imageFile'))
axios.post('http://localhost/basic/web/index.php/review/upload', formData, {
    header: {
      'Content-Type': 'multipart/form-data'
    }
}).then(function(){
  console.log('SUCCESS!!');
})
.catch(function(){
  console.log('FAILURE!!');
});
    },

        
        },
    
    }
    </script>
    
    <style>
    .ans{
      width: 350px;
      height: 350px;
      text-align: center;
    }
    .modal-backdrop {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.3);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .modal {
      background-image:url(4.jpg);
    background-position: center;
      box-shadow: 2px 2px 20px 1px;
      overflow-x: auto;
      display: flex;
      flex-direction: column;
      font-size: 1.5rem;
    }
    
    .modal-header,
    .modal-footer {
      padding: 15px;
      display: flex;
    }
    
    .modal-header {
      border-bottom: 1px solid #eeeeee;
      color: #4AAE9B;
      justify-content: space-between;
    }
    
    .modal-footer {
      border-top: 1px solid #eeeeee;
      justify-content: flex-end;
    }
    
    .modal-body {
      position: relative;
      padding: 20px 10px;
    }
    
    .btn-close {
      border: none;
      font-size: 20px;
      padding: 20px;
      cursor: pointer;
      font-weight: bold;
      color: #4AAE9B;
      background: transparent;
    }
    
    .btn-green {
      color: white;
      background: #4AAE9B;
      border: 1px solid #4AAE9B;
      border-radius: 2px;
    }
    </style>