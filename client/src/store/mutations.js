/*
包含多个直接更新state的方法的对象
 */
import Vue from 'vue'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_SEARCH_SHOPS
} from './types'
export default {
  //更新地址
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  },
  //更新食品分类
  [RECEIVE_CATEGORYS] (state, {categorys}) {
    state.categorys = categorys
  },
  //更新商铺列表
  [RECEIVE_SHOPS] (state, {shops}) {
    state.shops = shops
  },
  //更新用户信息
  [RECEIVE_USER_INFO] (state, {userInfo}) {
    state.userInfo = userInfo
  },
  //重置用户信息
  [RESET_USER_INFO] (state) {
    state.userInfo = {}
  },
  [RECEIVE_GOODS] (state, {goods}) {
    state.goods = goods
  },
  [RECEIVE_INFO] (state, {info}) {
    state.info = info
  },
  [RECEIVE_RATINGS] (state, {ratings}) {
    state.ratings = ratings
  },
  [INCREMENT_FOOD_COUNT] (state, {food}) {
    if (!food.count) { //第一次添加
      Vue.set(food, 'count', 1)   // 让新增的属性也有数据绑定
      state.cartFoods.push(food)   // 将food添加到cartFoods中
    } else {
      food.count++
    }
  },
  [DECREMENT_FOOD_COUNT] (state, {food}) {
    if(food.count) {// 只有有值才去减
      food.count--
      if(food.count===0) {
        // 将food从cartFoods中移除
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
      }
    }
  },
  [CLEAR_CART] (state) {
    state.cartFoods.forEach(food => food.count = 0)
    state.cartFoods = []
  },
  [RECEIVE_SEARCH_SHOPS] (state, {searchShops}) {
    state.searchShops = searchShops
  }
}
