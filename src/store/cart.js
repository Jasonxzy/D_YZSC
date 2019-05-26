import {shopcart} from 'api/request_yms'

const state = {
  shopc: []
}

const mutations = {
  changeCartLists: function (state, shopc) {
    state.shopc = shopc
  }
}

const actions = {
  getCartList: function (context) {
    shopcart((res) => {
      context.commit('changeCartLists', res.shoppingcart)
      // context.shopc = res.shoppingcart
    })
  }
}

const getters = {
  total: function (state) {
    let number = 0, price = 0, List = state.shopc
    for (let i = 0; i < List.length; i++) {
      number += List[i].shAmount
      price += List[i].goodsinfo.ginfoPrice * List[i].shAmount
    }
    return {
      number,
      price
    }
  }
}

export default {
  namespace: true,
  state,
  mutations,
  getters,
  actions
}
