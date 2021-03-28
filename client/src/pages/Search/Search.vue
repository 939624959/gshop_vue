<template>
  <section class="search">
    <HeaderTop title="搜索"/>
    <form class="search_form" @submit.prevent="search">
      <input type="search" name="search" placeholder="请输入商家或美食名称"
             class="search_input" v-model="keyword">
      <input type="submit" name="submit" class="search_submit">
    </form>
    <section class="list" v-if="succ" ref="list">
      <ul class="list_container" ref="listUl">
        <router-link class="list_li" tag="li" :to="{path:'/shop', query: {id:shop.id}}"
                     v-for="shop in searchShops" :key="shop.id">
          <section class="item_left">
            <img :src="imgBaseUrl + shop.image_path" alt="" class="restaurant_img">
          </section>
          <section class="item_right">
            <div class="item_right_text">
              <p><span>{{shop.name}}</span></p>
              <p>月售{{shop.month_sales||shop.recent_order_num}}单</p>
              <p>{{shop.delivery_fee||shop.float_minimum_order_amount}}元起送/距离{{shop.distance}}公里</p>
            </div>
          </section>
        </router-link>
      </ul>
    </section>
    <div class="search_none" v-if="empty">很抱歉！无搜索结果</div>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import HeaderTop from '../../components/HeaderTop/HeaderTop'
  export default {
    data () {
      return {
        keyword: '',
        imgBaseUrl: 'http://cangdu.org:8001/img/',
        empty: false,
        succ: false
      }
    },
    computed: {
      ...mapState(['searchShops'])
    },
    watch: {
      searchShops (value) {
        if (value.length === 0) {
          this.empty = true
        } else {
          this.succ = true
          this.$nextTick(() => {
            if (!this.scroll) {
              this.scroll = new BScroll('.list', {
                click: true
              })
            } else {
              this.scroll.refresh()
            }
          })
        }
      }
    },
    methods: {
      search () {
        const keyword = this.keyword.trim()
        if (keyword) {
          this.empty = false
          this.succ = false
          this.$store.dispatch('searchShops', keyword)
        }
      }
    },
    components: {
      HeaderTop
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
@import "../../common/stylus/mixins.styl";
.search
  width 100%
  height  100%
  overflow  hidden
  .header
    background-color #02a774
    position fixed
    z-index 100
    left 0
    top 0
    width 100%
    height 45px
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
  .search_form
    clearFix()
    margin-top 45px
    background-color #fff
    padding 12px 8px
    z-index 30
    input
      height 35px
      padding 0 4px
      border-radius 2px
      font-weight bold
      outline none
      &.search_input
        float left
        width 79%
        border 4px solid #f2f2f2
        font-size 14px
        color #333
        background-color #f2f2f2
      &.search_submit
        float right
        width 18%
        border 4px solid #02a774
        font-size 16px
        color #fff
        background-color #02a774
  .list
    height  100%
    overflow  hidden
    .list_container
      background-color  #fff
      &::after
        content ''
        display block
        height  150px
        width 100%
        background-color #f5f5f5
      .list_li
        display flex
        justify-content center
        padding 10px
        border-bottom 1px solid $bc
        .item_left
          margin-right  10px
          .restaurant_img
            width 50px
            height  50px
            display block
        .item_right
          font-size 12px
          flex  1
          .item_right_text
            p
              line-height 12px
              margin-bottom 6px
              &:last-child
                margin-bottom 0
  .search_none
    margin  0 auto
    color #333
    background  #fff
    text-align  center
    margin-top  0.125rem
    height  50px
    padding-top 20px
</style>
