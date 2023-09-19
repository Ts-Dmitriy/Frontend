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
<p>
{{'Products categories'}}
</p>
<button class="button " v-on:click="getDataCategory()" >get</button>
<button class="button " key v-on:click="saveCategory()" >save</button>
<button class="button " key v-on:click="updateCategory()" >update</button>
<button class="button " key v-on:click="deleteCategory()" >delete</button>
<table v-for="place in category" v-bind:key="place" style="width:100%">
  <tr>
    <th>ID</th>
    <th>Category Name</th>
  </tr>
  <tr>
    <td>{{place.id_category}}</td>
    <td>{{place.name_category}}</td>
  </tr>
</table>
<br><br>
<p>
{{'Subcategories'}}
</p>
<button class="button " v-on:click="getDataSubCategory()" >get</button>
<button class="button " key v-on:click="saveSubCategory()" >save</button>
<button class="button " key v-on:click="updateSubCategory()" >update</button>
<button class="button " key v-on:click="deleteSubCategory()" >delete</button>
<table v-for="place in subcategory" v-bind:key="place" style="width:100%">
  <tr>
    <th>ID</th>
    <th>Subcategory Name</th>
    <th>Category ID</th>
  </tr>
  <tr>
    <td>{{place.id_subCat}}</td>
    <td>{{place.name_subCat}}</td>
    <td>{{place.id_category}}</td>
  </tr>
</table>

<br><br>
<p>
{{'Products'}}
</p>
<button class="button " v-on:click="getDataProducts()" >get</button>
<button class="button " key v-on:click="saveProduct()" >save</button>
<button class="button " key v-on:click="updateProduct()" >update</button>
<button class="button " key v-on:click="deleteProduct()" >delete</button>
<table v-for="place in products" v-bind:key="place" style="width:100%">
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Cost</th>
    <th>Description</th>
    <th>Subcategory ID</th>
  </tr>
  <tr>
    <td>{{place.id_product}}</td>
    <td>{{place.name_product}}</td>
    <td>{{place.cost}}</td>
    <td>{{place.description}}</td>
    <td>{{place.id_subCat}}</td>
  </tr>
</table>

<br><br>
<p>
{{'Branch'}}
</p>
<button class="button " v-on:click="getDataBranch()" >get</button>
<button class="button " key v-on:click="saveBranch()" >save</button>
<button class="button " key v-on:click="updateBranch()" >update</button>
<button class="button " key v-on:click="deleteBranch()" >delete</button>
<table v-for="place in branch" v-bind:key="place" style="width:100%">
  <tr>
    <th>ID</th>
    <th>Address</th>
    <th>Number</th>
  </tr>
  <tr>
    <td>{{place.id_branch}}</td>
    <td>{{place.address}}</td>
    <td>{{place.number}}</td>
  </tr>
</table>


<br><br>
<p>
{{'Staff'}}
</p>
<button class="button " v-on:click="getDataStaff()" >get</button>
<button class="button " key v-on:click="saveStaff()" >save</button>
<button class="button " key v-on:click="updateStaff()" >update</button>
<button class="button " key v-on:click="deleteStaff()" >delete</button>
<table v-for="place in staff" v-bind:key="place" style="width:100%">
  <tr>
    <th>ID</th>
    <th>Worker Name</th>
    <th>Number</th>
    <th>Role</th>
    <th>ID Brach</th>
  </tr>
  <tr>
    <td>{{place.id_staff}}</td>
    <td>{{place.fullname}}</td>
    <td>{{place.number}}</td>
    <td>{{place.role}}</td>
    <td>{{place.id_branch}}</td>
  </tr>
</table>

<br><br>
<p>
{{'Order History'}}
</p>
<button class="button " v-on:click="getDataOrderHistory()" >get</button>
<button class="button " key v-on:click="saveOrder()" >save</button>
<button class="button " key v-on:click="updateOrder()" >update</button>
<button class="button " key v-on:click="deleteOrder()" >delete</button>
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
<p>
{{'Bonus Archive'}}
</p>
<button class="button " v-on:click="getDataBonusArchive()" >get</button>
<button class="button " key v-on:click="saveBonusArchive()" >save</button>
<button class="button " key v-on:click="updateBonusArchive()" >update</button>
<button class="button " key v-on:click="deleteBonusArchive()" >delete</button>
<div class="block">
  <table v-for="place in bonusArchive" v-bind:key="place" style="width:100%">
  <tr>
    <th>ID</th>
    <th>Name</th>

  </tr>
  <tr>
    <td>{{place.id_bonus}}</td>
    <td>{{place.name_bonus}}</td>
  </tr>
</table>

</div>
<br><br>
<p>
{{'Order Bonuses'}}
</p>
<button class="button " v-on:click="getDataBonus()" >get</button>
<button class="button " key v-on:click="saveBonus()" >save</button>
<button class="button " key v-on:click="updateBonus()" >update</button>
<button class="button " key v-on:click="deleteBonus()" >delete</button>
<table v-for="place in bonus" v-bind:key="place" style="width:100%">
  <tr>
    <th>ID</th>
    <th>Bonus ID</th>
    <th>Amount</th>
    <th>Order ID</th>

  </tr>
  <tr>
    <td>{{place.id_bonusOrder}}</td>
    <td>{{place.id_bonus}}</td>
    <td>{{place.amount}}</td>
    <td>{{place.id_order}}</td>
  </tr>
</table>
<br><br>
<button class="button " key v-on:click="saveReview()" >save</button>
<upload-files></upload-files>

<div class="screen">
  <input type="form-control" class="txt1"  v-model="req" placeholder="Search" >
    <li v-for="place in filt" v-bind:key="place">
    {{place.fullname}}

    </li>
    
    <button class="button " v-on:click="openModal(req)">Search</button>
    <div class="dropdown">
  <button class="dropbtn">Filter</button>
  <div class="dropdown-content">
    <a v-on:click="filerTable(1)">All</a>
    <a v-on:click="filerTable(2)">Users</a>
    <a v-on:click="filerTable(3)">Products categories</a>
  </div>
</div>
</div>
  
</div>



<UserSave   v-show="modalUserSave" @updateDataUser="getDataUser" @close="closeModal"/>
<UserUpdate   v-show="modalUserUpdate"  @updateDataUser="getDataUser" @close="closeModal"/>
<UserDelete   v-show="modalUserDelete"  @updateDataUser="getDataUser" @close="closeModal"/>

<CategorySave   v-show="modalCategorySave" @updateDataCategory="getDataCategory" @close="closeModal"/>
<CategoryUpdate   v-show="modalCategoryUpdate"  @updateDataCategory="getDataCategory" @close="closeModal"/>
<CategoryDelete   v-show="modalCategoryDelete"  @updateDataCategory="getDataCategory" @close="closeModal"/>

<SubCategorySave   v-show="modalSubCategorySave" @updateDataSubCategory="getDataSubCategory" @close="closeModal"/>
<SubCategoryUpdate   v-show="modalSubCategoryUpdate"  @updateDataSubCategory="getDataSubCategory" @close="closeModal"/>
<SubCategoryDelete   v-show="modalSubCategoryDelete"  @updateDataSubCategory="getDataSubCategory" @close="closeModal"/>

<ProductSave   v-show="modalProductSave" @updateDataProducts="getDataProducts" @close="closeModal"/>
<ProductUpdate   v-show="modalProductUpdate" @updateDataProducts="getDataProducts" @close="closeModal"/>
<ProductDelete   v-show="modalProductDelete" @updateDataProducts="getDataProducts" @close="closeModal"/>

<BranchSave  v-show="modalBranchSave" @updateDataBranch="getDataBranch" @close="closeModal"/>
<BranchUpdate  v-show="modalBranchUpdate" @updateDataBranch="getDataBranch" @close="closeModal"/>
<BranchDelete  v-show="modalBranchDelete" @updateDataBranch="getDataBranch" @close="closeModal"/>

<StaffSave  v-show="modalStaffSave" @updateDataStaff="getDataStaff" @close="closeModal"/>
<StaffUpdate  v-show="modalStaffUpdate" @updateDataStaff="getDataStaff" @close="closeModal"/>
<StaffDelete  v-show="modalStaffDelete" @updateDataStaff="getDataStaff" @close="closeModal"/>

<OrderSave  v-show="modalOrderSave" @updateDataOrderHistory="getDataOrderHistory" @close="closeModal"/>
<OrderUpdate  v-show="modalOrderUpdate" @updateDataOrderHistory="getDataOrderHistory" @close="closeModal"/>
<OrderDelete  v-show="modalOrderDelete" @updateDataOrderHistory="getDataOrderHistory" @close="closeModal"/>

<BonusSave  v-show="modalBonusSave" @updateDataBonus="getDataBonus" @close="closeModal"/>
<BonusUpdate  v-show="modalBonusUpdate" @updateDataBonus="getDataBonus" @close="closeModal"/>
<BonusDelete  v-show="modalBonusDelete" @updateDataBonus="getDataBonus" @close="closeModal"/>

<BonusArchiveSave  v-show="modalBonusArchiveSave" @updateDataBonusArchive="getDataBonusArchive" @close="closeModal"/>
<BonusArchiveUpdate  v-show="modalBonusArchiveUpdate" @updateDataBonusArchive="getDataBonusArchive" @close="closeModal"/>
<BonusArchiveDelete  v-show="modalBonusArchiveDelete" @updateDataBonusArchive="getDataBonusArchive" @close="closeModal"/>

<ReviewSave  v-show="modalReviewSave"  @close="closeModal"/>
</template>

<script>
import axios from 'axios';
import UserSave from '@/components/save/UserSave.vue';
import UserUpdate from '@/components/update/UserUpdate.vue';
import UserDelete from '@/components/delete/UserDelete.vue';

import CategorySave from '@/components/save/CategorySave.vue';
import CategoryUpdate from '@/components/update/CategoryUpdate.vue';
import CategoryDelete from '@/components/delete/CategoryDelete.vue';

import SubCategorySave from '@/components/save/SubCategorySave.vue';
import SubCategoryUpdate from '@/components/update/SubCategoryUpdate.vue';
import SubCategoryDelete from '@/components/delete/SubCategoryDelete.vue';

import ProductSave from '@/components/save/ProductSave.vue';
import ProductUpdate from '@/components/update/ProductUpdate.vue';
import ProductDelete from '@/components/delete/ProductDelete.vue';

import BranchSave from '@/components/save/BranchSave.vue';
import BranchUpdate from '@/components/update/BranchUpdate.vue';
import BranchDelete from '@/components/delete/BranchDelete.vue';

import StaffSave from '@/components/save/StaffSave.vue';
import StaffUpdate from '@/components/update/StaffUpdate.vue';
import StaffDelete from '@/components/delete/StaffDelete.vue';

import OrderSave from '@/components/save/OrderSave.vue';
import OrderUpdate from '@/components/update/OrderUpdate.vue';
import OrderDelete from '@/components/delete/OrderDelete.vue';

import BonusSave from '@/components/save/BonusSave.vue';
import BonusUpdate from '@/components/update/BonusUpdate.vue';
import BonusDelete from '@/components/delete/BonusDelete.vue';

import BonusArchiveSave from '@/components/save/BonusArchiveSave.vue';
import BonusArchiveUpdate from '@/components/update/BonusArchiveUpdate.vue';
import BonusArchiveDelete from '@/components/delete/BonusArchiveDelete.vue';

import ReviewSave from '@/components/save/ReviewSave.vue';
export default {
  
name: 'HelloWorld',
components: {
  UserSave,
  UserUpdate,
  UserDelete,

  CategorySave,
  CategoryUpdate,
  CategoryDelete,

  SubCategorySave,
  SubCategoryUpdate,
  SubCategoryDelete,

  BranchSave,
  BranchUpdate,
  BranchDelete,

  StaffSave,
  StaffUpdate,
  StaffDelete,

  OrderSave,
  OrderUpdate,
  OrderDelete,

  ProductSave,
  ProductUpdate,
  ProductDelete,

  BonusArchiveSave,
  BonusArchiveUpdate,
  BonusArchiveDelete,

  BonusSave,
  BonusUpdate,
  BonusDelete,

  ReviewSave,
  },
props: {
  msg: String
},

      data() {
          return {
            users:[],
            category:[],
            subcategory:[],
            products:[],
            branch:[],
            staff:[],
            orderHistory:[],
            bonus:[],
            bonusArchive:[],
            db_name:'',
            quary:'',
            filt:[],
            // req:'',

            modalUserSave: false,
            modalUserUpdate:false,
            modalUserDelete:false,

            modalCategorySave:false,
            modalCategoryUpdate:false,
            modalCategoryDelete:false,

            modalSubCategorySave:false,
            modalSubCategoryUpdate:false,
            modalSubCategoryDelete:false,

            modalProductSave:false,
            modalProductUpdate:false,
            modalProductDelete:false,

            modalBranchSave:false,
            modalBranchUpdate:false,
            modalBranchDelete:false,

            modalStaffSave:false,
            modalStaffUpdate:false,
            modalStaffDelete:false,

            modalOrderSave:false,
            modalOrderUpdate:false,
            modalOrderDelete:false,

            modalBonusArchiveSave:false,
            modalBonusArchiveUpdate:false,
            modalBonusArchiveDelete:false,

            modalBonusSave:false,
            modalBonusUpdate:false,
            modalBonusDelete:false,

            modalReviewSave:false,
          }
  },
  watch:{
            req: function (newReq, oldReq) {
              console.log(oldReq);
              if(newReq){

          this.filerTable(1)
              }
            }
  },

      methods: {
        async filerTable(filter){
          //this.quary=this.req
          switch(filter){
            case 1:{
              const { dataUser } = await axios.get("http://localhost/basic/web/index.php/user/get-data");
              this.filt=dataUser.filter(q=>q.fullname.toLowerCase().startsWith(this.req.toLowerCase()))
              // const { data } = await axios.get("http://localhost/basic/web/index.php/category/get-data-category");
              console.log(dataUser)
              break;
            }
            case 2:
          }
        },     

        saveReview(){
          this.modalReviewSave = !this.modalReviewSave
        },
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

        async getDataCategory(count) {
            const { data } = await axios.get("http://localhost/basic/web/index.php/category/get-data-category");
            console.log(data);

            if(count==null){
            if(this.category.length==0){
            this.category = data;
            }
            else{
              this.category = [];
            }}

            else if(count==1){
              this.category = data;
            }
        },
        saveCategory(){
          this.modalCategorySave = !this.modalCategorySave
        },
        updateCategory(){
          this.modalCategoryUpdate=!this.modalCategoryUpdate
        },
        deleteCategory(){
          this.modalCategoryDelete=!this.modalCategoryDelete
        },


        async getDataSubCategory(count) {
            const { data } = await axios.get("http://localhost/basic/web/index.php/subcategory/get-data-subcategory");
            console.log(data);

            if(count==null){
            if(this.subcategory.length==0){
            this.subcategory = data;
            }
            else{
              this.subcategory = [];
            }}

            else if(count==1){
              this.subcategory = data;
            }
        },
        saveSubCategory(){
          this.modalSubCategorySave = !this.modalSubCategorySave
        },
        updateSubCategory(){
          this.modalSubCategoryUpdate=!this.modalSubCategoryUpdate
        },
        deleteSubCategory(){
          this.modalSubCategoryDelete=!this.modalSubCategoryDelete
        },

        async getDataProducts(count) {
            const { data } = await axios.get("http://localhost/basic/web/index.php/products/get-data-products");
            console.log(data);

            if(count==null){
            if(this.products.length==0){
            this.products = data;
            }
            else{
              this.products = [];
            }}

            else if(count==1){
              this.products = data;
            }
        },
        saveProduct(){
          this.modalProductSave = !this.modalProductSave
        },
        updateProduct(){
          this.modalProductUpdate=!this.modalProductUpdate
        },
        deleteProduct(){
          this.modalProductDelete=!this.modalProductDelete
        },

        async getDataBranch(count) {
            const { data } = await axios.get("http://localhost/basic/web/index.php/branch/get-data-branch");
            console.log(data);

            if(count==null){
            if(this.branch.length==0){
            this.branch = data;
            }
            else{
              this.branch = [];
            }}

            else if(count==1){
              this.branch = data;
            }
        },
        saveBranch(){
          this.modalBranchSave = !this.modalBranchSave
        },
        updateBranch(){
          this.modalBranchUpdate=!this.modalBranchUpdate
        },
        deleteBranch(){
          this.modalBranchDelete=!this.modalBranchDelete
        },

        async getDataStaff(count) {
            const { data } = await axios.get("http://localhost/basic/web/index.php/staff/get-data-staff");
            console.log(data);

            if(count==null){
            if(this.staff.length==0){
            this.staff = data;
            }
            else{
              this.staff = [];
            }}

            else if(count==1){
              this.staff = data;
            }
        },
        saveStaff(){
          this.modalStaffSave = !this.modalStaffSave
        },
        updateStaff(){
          this.modalStaffUpdate=!this.modalStaffUpdate
        },
        deleteStaff(){
          this.modalStaffDelete=!this.modalStaffDelete
        },

        async getDataOrderHistory(count) {
            const { data } = await axios.get("http://localhost/basic/web/index.php/orderhistory/get-data-orderhistory");
            console.log(data);

            if(count==null){
            if(this.orderHistory.length==0){
            this.orderHistory = data;
            }
            else{
              this.orderHistory = [];
            }}

            else if(count==1){
              this.orderHistory = data;
            }
        },
        saveOrder(){
          this.modalOrderSave = !this.modalOrderSave
        },
        updateOrder(){
          this.modalOrderUpdate=!this.modalOrderUpdate
        },
        deleteOrder(){
          this.modalOrderDelete=!this.modalOrderDelete
        },

        async getDataBonus(count) {
            const { data } = await axios.get("http://localhost/basic/web/index.php/bonus/get-data-bonus");
            console.log(data);

            if(count==null){
            if(this.bonus.length==0){
            this.bonus = data;
            }
            else{
              this.bonus = [];
            }}

            else if(count==1){
              this.bonus = data;
            }
        },
        saveBonus(){
          this.modalBonusSave = !this.modalBonusSave
        },
        updateBonus(){
          this.modalBonusUpdate=!this.modalBonusUpdate
        },
        deleteBonus(){
          this.modalBonusDelete=!this.modalBonusDelete
        },

        async getDataBonusArchive(count) {
            const { data } = await axios.get("http://localhost/basic/web/index.php/bonusarchive/get-data-bonusarchive");
            console.log(data);

            if(count==null){
            if(this.bonusArchive.length==0){
            this.bonusArchive = data;
            }
            else{
              this.bonusArchive = [];
            }}

            else if(count==1){
              this.bonusArchive = data;
            }
        },
        saveBonusArchive(){
          this.modalBonusArchiveSave = !this.modalBonusArchiveSave
        },
        updateBonusArchive(){
          this.modalBonusArchiveUpdate=!this.modalBonusArchiveUpdate
        },
        deleteBonusArchive(){
          this.modalBonusArchiveDelete=!this.modalBonusArchiveDelete
        },
        closeModal(isClose){
          console.log(isClose)
          this.modalUserSave = isClose;
          this.modalUserUpdate = isClose;
          this.modalUserDelete= isClose;

          this.modalCategorySave = isClose
          this.modalCategoryUpdate= isClose
          this.modalCategoryDelete= isClose

          this.modalSubCategorySave = isClose
          this.modalSubCategoryUpdate= isClose
          this.modalSubCategoryDelete= isClose

          this.modalBranchSave= isClose
          this.modalBranchUpdate= isClose
          this.modalBranchDelete=isClose

          this.modalStaffSave=isClose
          this.modalStaffUpdate=isClose
          this.modalStaffDelete=isClose

          this.modalOrderSave=isClose
          this.modalOrderUpdate=isClose
          this.modalOrderDelete=isClose

          this.modalBonusArchiveSave=isClose
          this.modalBonusArchiveUpdate=isClose
          this.modalBonusArchiveDelete=isClose

          this.modalBonusSave=isClose
          this.modalBonusUpdate=isClose
          this.modalBonusDelete=isClose

          this.modalReviewSave=isClose
        },
      


  },

}
</script>
<style>
.hello{ 

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
