<template>
    <!-- <div>
        <h5 @click="$router.push('/detail/0')">{{ blog[0].title }}</h5>
    </div> -->
    
    <div v-for="(item, idx) in blog" :key="idx">
        <h5 @click="$router.push(`/detail/${idx}`)">{{ item.title }}</h5>
    </div>
</template>

<script>
export default {
    name: 'List',
    props: {
        blog: Array
    }
}
</script>

<style>

</style>