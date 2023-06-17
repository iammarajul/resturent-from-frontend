import { createStore } from 'vuex';

// Create a new store instance.
const store = createStore({
  state () {
    return {
      page: 2,
      first_page:{},
      items: [],
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    setFormData(state, items){
      state.first_page = {...items};
      state.page = state.page + 1;
    }
  },
})


export default store;