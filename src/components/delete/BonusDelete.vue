<template>
    <div class="modal-backdrop">
      <div class="modal">
        <slot name="header">
          Удаление бонусов от заказа
        </slot>
    
        <slot name="body">
        <input type="number" class="txt"  v-model="id_bonusOrder" placeholder="Введите идентификатор">
        <br />  
    <button class="button2 " v-on:click="deleteBonus">Delete</button>  
    
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
        name: "BonusDelete",
        props: {
        },
        data() {
            return {
                isModalVisible: true,
                id_bonusOrder:null,
            };
        },
        methods: {
            close() {
                this.$emit("close", false);
            },
            async deleteOrder(){
            axios.delete('http://localhost/basic/web/index.php/bonus/delete-bonus',  {params:{
            id_bonusOrder:this.id_bonusOrder
          }})
          this.$emit('updateDataBonus',1)
        }
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