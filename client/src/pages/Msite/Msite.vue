<template>
<div class="msite">
  <HeaderTop :title="address.name">
    <router-link class="header_search" slot="left" to="/search">
      <i class="iconfont icon-icon-test10"></i>
    </router-link>
    <router-link class="header_login" slot="right" :to="userInfo._id ? '/userinfo' : '/login'">
      <span class="header_login_text" v-if="!userInfo._id">登陆|注册</span>
      <span class="header_login_text" v-else>
        <i class="iconfont icon-wode"/>
      </span>
    </router-link>
  </HeaderTop>
  <nav class="msite_nav">
    <div class="swiper-container swiper-container-horizontal swiper-container-ios" v-if="categorys.length">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(categorys, index) in categoryArr" :key="index">
          <a href="javascript:" class="link_to_food" v-for="(category, index) in categorys" :key="index">
            <div class="food_container">
              <img :src="baseImageUrl + category.image_url">
            </div>
            <span>{{category.title}}</span>
          </a>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <img src="./images/msite_back.svg" alt="bgi" v-else>
  </nav>
  <div class="msite_shop_list">
    <div class="shop_header">
      <i class="iconfont icon-menu"></i>
      <span class="shop_header_title">附近商家</span>
    </div>
    <ShopList/>
  </div>
</div>
</template>

<script>

  import 'swiper/swiper-bundle.min.css'
  import Swiper from 'swiper/bundle';
  import {mapActions, mapState} from 'vuex'

  import HeaderTop from '../../components/HeaderTop/HeaderTop'
  import ShopList from '../../components/ShopList/ShopList'
  export default {
    data () {
      return {
        baseImageUrl: 'https://fuss10.elemecdn.com'
      }
    },
    computed: {
      ...mapState(['address', 'categorys', 'userInfo']),
      categoryArr () {
        const {categorys} = this
        const Arr = []
        let arr = []
        categorys.forEach(c => {
          if (arr.length === 8) {
            arr = []
          }
          if (arr.length === 0) {
            Arr.push(arr)
          }
          arr.push(c)
        })
        return Arr
      }
    },
    mounted () {
      this.getCategorys();
      this.getShops()
    },
    watch: {
      categorys (value) {
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            loop: true,
            pagination: {
              el: '.swiper-pagination',
            }
          })
        })
      }
    },
    methods: {
      ...mapActions(['getCategorys', 'getShops'])
    },
    components: {
      HeaderTop,
      ShopList
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
@import "../../common/stylus/mixins.styl";
.msite
  width 100%
  .header
    background-color #02a774
    position fixed
    z-index 100
    left 0
    top 0
    width 100%
    height 45px
    .header_search
      position absolute
      left 15px
      top 50%
      transform translateY(-50%)
      width 10%
      height 50%
      .icon-icon-test10
        font-size 25px
        color #fff
    .header_title
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      width 50%
      color #fff
      text-align center
      .header_title_text
        font-size 20px
        color #fff
        display block
    .header_login
      font-size 14px
      color #fff
      position absolute
      right 15px
      top 50%
      transform translateY(-50%)
      .header_login_text
        color #fff
        .icon-wode
          font-size 25px
  .msite_nav
    bottom-border-1px(#e4e4e4)
    margin-top 45px
    height 200px
    background #fff
    .swiper-container
      width 100%
      height 100%
      .swiper-slide
        display flex
        justify-content center
        align-items flex-start
        flex-wrap wrap
        .link_to_food
          width 25%
          .food_container
            display blockquote
            width 100%
            text-align center
            padding-bottom 10px
            font-size 0
            img
              display inline-block
              width 50px
              height 50px
          span
            display block
            width 100%
            text-align center
            font-size 13px
            color #666
      >span.swiper-pagination-bullet-active
        background #02a774
  .msite_shop_list
    top-border-1px(#e4e4e4)
    margin-top 10px
    background #fff
    .shop_header
      padding 10px 10px 0
      .shop_icon
        margin-left 5px
        color #999
      .shop_header_title
        color #999
        font-size 14px
        line-height 20px
</style>
