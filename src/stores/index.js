import {createStore} from 'vuex';
import _ from 'lodash';

// Create a new store instance.
const store = createStore({
    state() {
        return {
            page: 1,
            first_page: {},
            items: [],
            complated_pages: 0,
        }
    },
    getters: {
        getProgress: state => (state.page-1)*10,
        getPageNumber: state => (state.page),
        getItemById: state => (id) => state.items.find((item) => item.id === id),
        getItem: (state, getters) => (index) => {
            const item = getters.getItemById(index);
            if (item === undefined) {
                return {
                    ingredientTable: [],
                };
            } else {
                return _.cloneDeep(item);
            }
        },
        getIngriedientsTableByIndex: (state,getters) => (index) => {
            const item = getters.getItemById(index);
            if (item === undefined) {
                return [];
            } else if (item.ingredientTable === undefined) {
                return [];
            } else {
                return _.cloneDeep(item.ingredientTable);
            }
        }

    },
    mutations: {
        setItems(state, index, items) {
            state.items[index] = items;
        },
        setFormData(state, items) {
            state.first_page = {...items};
            state.page = state.page + 1;
        },
        decrementPageNumber(state) {
            if (state.page > 1) {
                state.page = state.page - 1;
            }
        },
        incrementPageNumber(state) {
            state.page = state.page + 1;
        },
        setItemData(state, {index, data}) {
            state.items[index] = {...data};
        },
        updateIngriedientsTable(state, {index, newData}) {
            const item = state.items.findIndex((item) => item.id === index);

            console.log('updateIngriedientsTable', index, item);
            if (state.items[index] === undefined) {
                state.items[index] = {};
            }
            state.items[index].ingredientTable = [...item];
        },
        updateItem(state, {index, newData}) {
            let item = state.items.findIndex((item) => item.id === index);
            console.log('updateItem', index, newData, item);
            if (item === -1) {
                let obj = {
                    id: index,
                    ...newData
                };
                state.items.push(obj);
            } else {
                state.items[item] = {
                    ...state.items[item],
                    ...newData
                };
            }

        }
    },
})


export default store;