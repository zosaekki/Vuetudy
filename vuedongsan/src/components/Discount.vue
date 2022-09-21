<template>
    <div class="discount">
        <h4>지금 결제하면 {{ discountPer }}% 할인</h4>
    </div>
</template>

<script>
export default {
    name: 'Discount',
    data() {
        return {
            discountPer: 20
        }
    },
    mounted() {
    const timer = setInterval(() => {
      this.discountPer--;
      if(this.discountPer == 0) {
        clearInterval(timer);
      }
    }, 1000);
    },
}
</script>

<style>

</style>