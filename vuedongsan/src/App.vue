<template>

  <div class="black-bg" v-if="modal === true">
    <div class="white-bg">
      <h4>상세페이지</h4>
      <p>상세페이지 내용</p>
      <button @click="modal = false">닫기</button>
    </div>
  </div>

  <div class="menu">
    <a v-for="(menu, idx) in menuList" :key="idx">{{ menu }}</a>
  </div>

  <div v-for="oneroom in onerooms" :key="oneroom">
    <img @click="modal = true" :src="oneroom.image" alt="oneroom iamge">
    <h4>{{ oneroom.title }}</h4>
    <p>{{ oneroom.content }}</p>
    <p>$ {{ oneroom.price }}</p>
  </div>


  <!-- <div v-for="(product,idx) in products" :key="idx">
    <h4>{{ product }}</h4>
    <p>{{ price[idx] }}만원</p>
    <button @click="click[idx]++">허위매물 신고</button> <span>신고수 : {{ click[idx] }}</span>
  </div> -->

  <!-- <div>
    <img src="./assets/room0.jpg" class="romm-img">
    <h4 @click="modal = true">{{ onerooms[0].title }}</h4> 
    <p>{{ onerooms[0].price }} 만원</p>
    <button @click="click[0]++">허위매물 신고</button> <span>신고수 : {{ click[0] }}</span>
  </div>
  <div>
    <img src="./assets/room1.jpg" class="romm-img">
    <h4>{{ products[1] }}</h4>
    <p>{{ price[1] }} 만원</p>
    <button @click="click[1]++">허위매물 신고</button> <span>신고수 : {{ click[1] }}</span>
  </div>
  <div>
    <img src="./assets/room2.jpg" class="romm-img">
    <h4>{{ products[2] }}</h4>
    <p>{{ price[2] }} 만원</p>
    <button @click="click[2]++">허위매물 신고</button> <span>신고수 : {{ click[2] }}</span>
  </div> -->
</template>

<script>
import data from './assets/data.js';

export default {
  name: 'App',
  data() { // 데이터 보관함
    return {
      menuList : ['Home', 'Products', 'About'],
      products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
      price : [60, 70, 80],
      click: [0, 0, 0],
      modal : false,
      onerooms : data
    }
  },
  methods: {
    increase() {
      this.click++;
    },
  },
  components: {
  }
}
</script>

<style>
body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}

.romm-img {
  width: 100%;
  margin-top: 40px;
}
</style>
