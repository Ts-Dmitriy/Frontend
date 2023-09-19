<template>
    <div class="login">
      <div @click="myOrders()">
        <p  >
{{'My orders'}}
</p>
      </div>
      <table v-for="place in orderHistory" v-bind:key="place" style="width:100%">
  <tr>
    <th>ID</th>
    <th>Date</th>
    <th>User ID</th>
    <th>Product ID</th>
    <th>Staff ID</th>
  </tr>
  <tr>
    <td>{{place.id_order}}</td>
    <td>{{place.date_order}}</td>
    <td>{{place.id_user}}</td>
    <td>{{place.id_product}}</td>
    <td>{{place.id_staff}}</td>
  </tr>
</table>
<br><br>

      <div @click="catalogGet">
        <p  >
{{'Products'}}
</p>
      </div>
<BuyModal v-show="modalBuy" :catalogProd="filt" :eKey="keyProd" @close="closeModal" />
<div class="out" v-for="(item, key) in catalog" :key="key">
    {{"Name: "}}{{item.name_product}} <br>
    {{"Description: "}}{{item.description}} <br>
    {{"Cost: " }}{{item.cost}} <br>
    <button class="button" @click="buyModal(key)">
      Buy
    </button>
</div>

        <br />   
    </div>
    </template>
    
    <script>    
    import BuyModal from '@/catalog/BuyModal.vue'
    import axios from 'axios';
    export default {
      name: "CatalogProd",
      components:{
        BuyModal,
      },
      data() {
        return {
          catalog:[],
          modalBuy:false,
          keyProd:null,
          orderHistory:[],
          filt:[]
        }
      },

      methods: {
        async myOrders(){
          const { data } = await axios.get("http://localhost/basic/web/index.php/orderhistory/get-data-orderhistory"  );
  this.orderHistory=data.filter(q=>q.id_user==localStorage.id)

        },

        async catalogGet() {
      const { data } = await axios.get("http://localhost/basic/web/index.php/products/get-data-products");
            console.log(data);
            this.catalog = data;

  },
  buyModal(key){
    this.modalBuy = !this.modalBuy
    this.keyProd=key
    this.filt.id_product=this.catalog[this.keyProd].id_product
this.filt.name_product=this.catalog[this.keyProd].name_product
this.filt.description=this.catalog[this.keyProd].description
this.filt.cost=this.catalog[this.keyProd].cost
console.log(this.filt)
  },
  closeModal(isClose){
          this.modalBuy = isClose;

          }
      },
    };
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
    .out{
      margin-left: 20px;
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