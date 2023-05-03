import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mycartproductlist:[]
  },
  getters: {
    mycartlist:state=>{
      return state.mycartproductlist
    }
  },
  mutations: {
    ADD_TO_CART:(state,product)=>
    {
      state.mycartproductlist.push(product)
    },
    CANCEL_FROM_CART:(state,product)=>
    {
      state.mycartproductlist.splice(product,1)
    }
  },
  actions: {
  },
  modules: {
  }
})
