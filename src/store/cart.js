
const state = {
  cartLists: [
    {
      goodsName: '甜蜜如心鲜奶蛋糕',
      img: '../public/img/100000027_M.jpg',
      specifications: '8号',
      goodsNum: 1,
      fillers: '香芋+香芋（网红款）',
      goodsPrice: '238.00'},
    {
      goodsName: '仙茶香草蛋糕',
      img: '../public/img/100000027_M.jpg',
      specifications: '6号',
      goodsNum: 1,
      fillers: '香芋+黄金',
      goodsPrice: '258.00'}
  ]
}

const mutations = {
  changeCartLists: function (state, lists) {
    state.cartLists = lists
  }
}

const actions = {

}

const getters = {
  total: function (state) {
    let number = 0, price = 0, List = state.cartLists
    for (let i = 0; i < List.length; i++) {
      number += List[i].goodsNum
      price += List[i].goodsPrice * List[i].goodsNum
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
