import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cashflow: [],
    count: 0,
    isTrue: true          
  },
  getters: {
    expenses(state) {
      return state.cashflow.filter(product => product.radio === 'Expense')
    },
    incomes(state) {
      return state.cashflow.filter(product => product.radio === 'Income')
    },
    amount(state) {
      return state.cashflow.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.cost;
      }, 0)
    },
    isTrue: function(state) {
      return state.isTrue
    }
    // showTime: function(state) {
    //   return state.time
    // }
  },
  mutations: {
    ADD_ITEM: (state, item) => {        
      state.cashflow.push(item)      
    },
    increment (state, payload) {
      state.count += payload
    },
    toggle: function (state) {
      state.isTrue = !state.isTrue
    },
    delete: function (state, item) { 
      var removeIndex = state.cashflow.map(function (element) {
        return element.uuid;
      }).indexOf(item);      
      state.cashflow.splice(removeIndex, 1);               
    },
    addTime: function(state, payload) {
      state.cashflow.push(payload)
    }
  },
  actions: {
    toggle: function (context) {
      context.commit('toggle')
    }
  }
})

// https://scotch.io/tutorials/state-management-in-vue-getting-started-with-vue