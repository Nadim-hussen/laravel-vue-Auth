import { createApp } from 'vue'
import { createStore } from 'vuex'

const store = createStore({
    state () {
      return {
        count: 0
      }
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  })
  export default store;

//   const app = createApp({ store })

  // Install the store instance as a plugin
//   app.use(store)