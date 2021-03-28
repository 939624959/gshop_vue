# gshop_vue

#### 介绍

尚硅谷vue随堂实战项目
 一个外卖WebApp (SPA)。
包括商家、商品、购物车、用户等多个子模块
采用模块化、组件化、工程化的模式开发

#### 软件架构

使用Vue全家桶+ES6+Webpack等技术

#### 使用说明

1.  开启本地mongodb数据库
2.  选中server文件夹，右键-->open in terminal-->npm install-->npm start
3.  选中client文件夹，右键-->open in terminal-->npm install-->npm start

#### 技术选型

1.  前台数据展现/交互/组件化
    vue、vue-router、vuex、mini-ui、vue-lazyload、better-scroll、swiper、moment、date-fns
2.  前后台交互
3.  mock数据：mockjs
    ajax请求：axios、async/await
    测试借口：postman
3.  模块化
    es6、bable
4.  项目构建/工程化
    webpack、vue-li、eslint
5.  css预编译器
    stylus


#### 前端路由

一级路由
1.  首页  /msite Msite.vue
2.  搜索  /search Search.vue
3.  订单  /order Order.vue
4.  个人  /profile Profile.vue
5.  登陆  /login Login.vue      ______
6.  商家  /shop Shop.vue        ______|___不显示底部导航

二级路由
1.  商家商品 /goods ShopGoods.vue
2.  商家评价  /ratings ShopRratings.vue
3.  商家信息  /info ShopInfo.vue

#### vue组件

App  ____FootGuide            ___HeaderTop
    |           _____Msite___|___ShopList
    |____路由___|             |___Stars
                |
                |____Search______HeaderTop
                |
                |_____Order______HeaderTop
                |
                |_____Profile____HeaderTop
                |
                |_____Login_______AlterTip
                |     
                |             _____ShopHeader______Stars
                |             |                             ____CartControl
                |______Shop___|           ____ShoopGoods___|_____Food
                              |          ｜
                              |____路由___|____ShopRatings_____Stars
                                          |
                                          |____ShopInfo
                               

