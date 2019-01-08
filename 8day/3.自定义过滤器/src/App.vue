<template>
<div>
  <p>{{priceFlag}}</p>
  <p>
    <button @click="priceFlag='$'">美元</button>
    <button @click="priceFlag='¥'">人民币</button>
    <button @click="priceFlag='€'">欧元</button>
  </p>
  <ul>
    <li v-for="item in goodsList" :key="item.id">
      <p :style="item.icon_color | color">{{item.name}}</p>
      <p>价格：{{item.price | price(priceFlag)}}</p>
    </li>
  </ul>


</div>

</template>

<script>
export default {
  data(){
    return {
      priceFlag: '$',
      goodsList: [
        {id: 1, name: '钢笔', price: 689, icon_color: "70bc46"},
        {id: 2, name: '笔记本', price: 129, icon_color: 'f07373'},
        {id: 3, name: '橡皮擦', price: 3, icon_color: 'f1884f'},
        {id: 4, name: '文具盒', price: 20, icon_color: 'f07373'}
      ]
    }
  },
  filters: {
    color(value){
      console.log(value);
      return 'color: #fff; background: #'+value;
    }
  }
}
</script>

<style>

</style>

