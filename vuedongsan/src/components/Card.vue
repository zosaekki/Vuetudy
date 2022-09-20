<template>
  <div v-for="(oneroom, idx) in onerooms" :key="idx">
    <img :src="oneroom.image" alt="oneroom iamge" />
    <h4 @click="eventMsg(oneroom.id)">{{ oneroom.title }}</h4>
    <p>{{ oneroom.content }}</p>
    <p>₩ {{ oneroom.price }}</p>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    onerooms: Object,
  },
  methods: {
    eventMsg(param) {
      this.$emit('openModal', param );
    }
  }
};
</script>

<style></style>
