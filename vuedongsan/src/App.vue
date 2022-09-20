<template>
  <Modal @modalClose="modal = false" :onerooms="onerooms" :clicked="clicked" :modal="modal" />

  <div class="menu">
    <a v-for="(menu, idx) in menuList" :key="idx">{{ menu }}</a>
  </div>

  <Discount />

  <Card
    @openModal="modal = true; clicked = $event" :onerooms="onerooms" />
</template>

<script>
import data from "./assets/data.js";
import Discount from "./components/Discount.vue";
import Modal from "./components/Modal.vue";
import Card from "./components/Card.vue";

export default {
  name: "App",
  data() {
    // 데이터 보관함
    return {
      menuList: ["Home", "Products", "About"],
      /*
      products: ['역삼동원룸', '천호동원룸', '마포구원룸'],
      price: [60, 70, 80],
      click: [0, 0, 0],
      */
      modal: false,
      onerooms: data,
      clicked: 0,
    };
  },
  methods: {
    increase() {
      this.click++;
    },
  },
  components: {
    Discount,
    Modal,
    Card,
  },
};
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
  background: rgba(0, 0, 0, 0.5);
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

.discount {
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
</style>
