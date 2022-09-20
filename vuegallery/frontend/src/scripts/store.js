import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            account: {
                id: 0
            }
        }
    },
    mutations: {
        setAccout(state, payload) {
            state.account.id = payload;
        }
    }
})

export default store;