import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
    state() {
        return {
            name: 'kim',
            age: 22,
            likes: [30, 40, 50],
            liked: [false, false, false],
            more: {},
        }
    },
    // store state 수정 요청 
    mutations: {
        changeName(state) {
            state.name = 'park';
        },
        increaseAge(state, data) {
            state.age += data;
        },
        clickLikes(state, data) {
            if(state.liked[data] == false) {
                state.likes[data]++;
                state.liked[data] = true
            } else {
                state.likes[data]--;
                state.liked[data] = false;
            }
        },
        setMore(state, data) {
            state.more = data;
        },
    },
    // ajax, 오래 걸리는 작업
    actions: {
        getData(context) {
            axios.get('https://codingapple1.github.io/vue/more0.json')
            .then((res) => {
                console.log(res.data);
                context.commit('setMore', res.data);
            })
        }
    }
})

export default store;