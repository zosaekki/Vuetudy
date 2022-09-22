import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            name: 'kim',
            age: 22,
            likes: [30, 40, 50],
            liked: [false, false, false]
        }
    },
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
        }
    }
})

export default store;