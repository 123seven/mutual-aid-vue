<template>
  <van-tabbar route :safe-area-inset-bottom="true">
    <van-tabbar-item icon="hot-o" replace to="/">任务中心</van-tabbar-item>
    <van-tabbar-item icon="balance-o" replace to="/article">我的任务</van-tabbar-item>
    <van-tabbar-item icon="fire-o" replace to="/article">我的悬赏</van-tabbar-item>
    <van-tabbar-item icon="contact"  replace  to="/user">个人中心</van-tabbar-item>
  </van-tabbar>

</template>
<script>
import { Tabbar, TabbarItem } from 'vant'
export default {
  name: 'FooterTabbar',
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  }
}
</script>
