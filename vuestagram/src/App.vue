<template>
  <div class="header">
    <ul class="header-button-left">
      <li @click="step--">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <h4>Hi {{ userName }} {{ age }}</h4>
  <button @click="$store.commit('changeName')">name</button>
  <button @click="increaseAge(10)">age</button>

  <p>{{ $store.state.more }}</p>
  <button @click="$store.dispatch('getData')">더보기버튼</button>

  <Container :postData="postData" :step="step" :imgUrl="imgUrl" 
              @write="content = $event" :selectFilter=selectFilter />
  <button @click="more">더보기</button>


  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" accept="image/*" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import Container from './components/Container.vue';
import Data from './assets/data';
import axios from 'axios';
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'App',
  components: {
    Container,
  },
  data() {
    return {
      postData: Data,
      moreBtnClick: 0,
      step: 0,
      imgUrl: '',
      content: '',
      selectFilter: '',
    }
  },
  mounted() {
    this.emitter.on('selectFilter', (e) => {
      this.selectFilter = e;
    });
  },
  // 계산결과저장용 함수, 함수 사용해도 실행X, 처음 실행하고 값을 간직함, return 필수!!
  computed: {
    name() {
      return this.$store.state.name;
    },
    // $store.state 간편하게 꺼내 쓰는 방법
    ...mapState(['name', 'age', 'likes']),
    ...mapState({ userName: 'name'})
  },
  methods: {
    // vuex mutations 한번에 꺼내 쓰는 방법
    ...mapMutations(['setMore', 'changeName', 'increaseAge']),
    more() {
      axios.get(`https://codingapple1.github.io/vue/more${this.moreBtnClick}.json`)
        .then(res => {
          this.postData.push(res.data);
          this.moreBtnClick++;
        })
    },
    upload(e) {
      let imgFile = e.target.files;
      this.imgUrl= URL.createObjectURL(imgFile[0]);
      this.step++;
    },
    publish() {
      const newPost = {
        name: "Hyun Min",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.imgUrl,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.content,
        filter: this.selectFilter
      };
      this.postData.unshift(newPost);
      this.step = 0;
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

ul {
  padding: 5px;
  list-style-type: none;
}

.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}

.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}

.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}

.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}

.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}

.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}

.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}

.inputfile {
  display: none;
}

.input-plus {
  cursor: pointer;
}

#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
