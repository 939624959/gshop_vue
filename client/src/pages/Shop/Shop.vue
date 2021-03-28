<template>
<div id="shop">
  <ShopHeader/>
  <ul class="nav-container">
    <li class="nav-item"><router-link to="/shop/goods" replace>点餐</router-link></li>
    <li class="nav-item"><router-link to="/shop/ratings" replace>评论</router-link></li>
    <li class="nav-item"><router-link to="/shop/info" replace>商家</router-link></li>
  </ul>
  <keep-alive>
    <router-view/>
  </keep-alive>
</div>
</template>

<script>
  import ShopHeader from '../../components/ShopHeader/ShopHeader'
  export default {
    components: {
      ShopHeader
    },
    mounted () {
      this.$store.dispatch('getShopInfo')
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
@import "../../common/stylus/mixins.styl";
#shop
  .nav-container
    height  40px
    line-height 40px
    background-color  #fff
    bottom-border-1px(rgba(7, 17, 27, 0.1))
    .nav-item
      float left
      width 33.333333%
      text-align  center
      font-size 14px
      color rgb(77, 85, 93)
      a
        display block
        position  relative
        &.router-link-active
          color #02a774
          &::after
            content ''
            height  2px
            width 35px
            position  absolute
            left  50%
            bottom  1px
            transform translateX(-50%)
            background #02a774
</style>
