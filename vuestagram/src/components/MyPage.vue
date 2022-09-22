<template>
    <div style="padding : 10px">
        <h4>팔로워</h4>
        <input placeholder="🔎" @input="search($event.target.value)" />
        <div class="post-header" v-for="(follower, idx) in follower" :key="idx">
            <div class="profile" :style="{ backgroundImage: `url(${follower.image})`}"></div>
            <span class="profile-name">{{ follower.name }}</span>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import axios from 'axios';

export default {
    name: 'MyPage',
    setup() {
        let follower = ref([]);
        let followerOriginal = ref([]);

        onMounted(() => {
            axios.get('/follower.json')
            .then((res) => {
                follower.value = res.data;
                followerOriginal.value = [...res.data];
            })
        })

        function search(param) {
            let searchFollower = followerOriginal.value.filter((a) => {
                return a.name.indexOf(param) != -1
            });
            follower.value = [...searchFollower];
        }



        return { follower, search }
    }
}
</script>

<style>

</style>