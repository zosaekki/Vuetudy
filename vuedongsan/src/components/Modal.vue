<template>
  <div class="black-bg" v-if="modal === true">
    <div class="white-bg">
      <Discount />
      <img :src="onerooms[clicked].image" alt="image" style="width: 100%" />
      <h4>{{ onerooms[clicked].title }}</h4>
      <p>{{ onerooms[clicked].content }}</p>
      <input v-model="month">
       <p>{{ month }}개월 선택 : ₩ {{ month * onerooms[clicked].price }}</p>
      <button @click="modalClose">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      month: 1,
    }
  },
  // input에 다른 값이 들어오는 것을 방지
  watch: {
    // month 데이터가 변환될 때마다 코드 실행
    month(data) {
      if(isNaN(data)) {
        alert("숫자만 입력해!!")
        this.month = 1;
      }
    }
  },
  props: {
    onerooms: Object,
    clicked: Number,
    modal: Boolean,
  },
  beforeUpdate() {
    if(this.month == 2) {
      alert("2개월은 안판다~, 3개월부터 사라~")
      this.month = 3;
    }
  },
  methods: {
    modalClose() {
      this.$emit('modalClose')
    },
  },
};
</script>

<style></style>
