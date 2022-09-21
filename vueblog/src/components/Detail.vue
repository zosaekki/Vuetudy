<template>
  <div>
        <h4>상세 페이지</h4>
        <h5>글 제목 : {{ blog[$route.params.id].title }}</h5>
        <p>{{ blog[$route.params.id].content }}</p>
        <p>{{ blog[$route.params.id].date }}</p>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Detail',
    props: {
        blog: Array
    }
}
</script>

<style>

</style>