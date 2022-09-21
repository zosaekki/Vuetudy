<template>
  <Transition name="fade">
    <Modal @modalClose="modal = false" :onerooms="onerooms" :clicked="clicked" :modal="modal" />
  </Transition>

  <div class="menu">
    <a v-for="(menu, idx) in menuList" :key="idx">{{ menu }}</a>
  </div>

  <Discount />

  <div>
    <button @click="priceSort">가격순 정렬</button>
    <button @click="priceReverseSort">가격 역순 정렬</button>
    <button @click="enSort">ABC 순 정렬</button>
  </div>
  <button @click="sortBack">되돌리기</button>

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
      oneroomsOriginal: [...data],
      onerooms: data,
      clicked: 0,
    };
  },
  methods: {
    increase() {
      this.click++;
    },
    sortBack() {
      this.onerooms = [...this.oneroomsOriginal];
    },
    priceSort() {
      this.onerooms.sort(function(a,b) {
        return a.price - b.price;
      })
    },
    priceReverseSort() {
      this.onerooms.sort(function(a, b) {
        return b.price - a.price;
      })
    },
    enSort() {
      this.onerooms.sort(function(a, b) {
        return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
      })
    }
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

.fade-enter-from {
  transform: translateY(-1000px);
}

.fade-enter-active {
  transition: all 1s;
}

.fade-enter-to {
  transform: translateY(0px);
}

.fade-leave-from {
  opacity: 1;
}

.fade-leave-active {
  transition: all 1s;
}

.fade-leave-to {
  opacity: 0;
}
</style>
