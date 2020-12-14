import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: []
  },
  mutations: {
    addCount(state, payload) {
      payload.count++
    },
    addToCart(state, payload) {
      payload.checked = true
      payload.count = 1
      state.cartList.push(payload)
    }
  },
  actions: {
    addCart(context, payload) {
      //是否有该商品
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
        //判断+1还是push
      if (oldProduct) {
        //oldProduct.count += 1;
        context.commit('addCount', oldProduct)
      } else {
        //payload.count = 1
        //context.state.cartList.push(payload)
        context.commit('addToCart', payload)
      }
    }
  },
  modules: {}
})