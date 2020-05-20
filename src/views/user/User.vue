<template>
  <div>
    <div class="user-info-wrapper">
      <div class="user-info">
        <div class="user-nick-name">{{ user.nickname }}</div>
        <div class="user-avatar-wrapper">
          <van-image name="user-avatar" round width="2rem" height="2rem" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
        </div>
      </div>
      <div class="user-extra">
        <div class="user-extra-text">信用分: {{ user.id }}</div>
      </div>
    </div>

        <van-row class="user-links">
      <van-col span="6">
        <van-icon name="pending-payment" />
        待付款
      </van-col>
      <van-col span="6">
        <van-icon name="records" />
        待接单
      </van-col>
      <van-col span="6">
        <van-icon name="tosend" />
        待发货
      </van-col>
      <van-col span="6">
        <van-icon name="logistics" />
        已发货
      </van-col>
    </van-row>

    <van-cell-group class="user-group">
      <van-cell icon="records" title="全部订单" is-link />
    </van-cell-group>

    <van-cell-group>
      <van-cell icon="points" title="我的积分" is-link />
      <van-cell icon="gold-coin-o" title="我的优惠券" is-link />
      <van-cell icon="gift-o" title="我收到的礼物" is-link />
    </van-cell-group>

    <footer-tabbar/>
  </div>
</template>
<script>
import { Row, Col, Icon, Cell, CellGroup, Field,  Button, Image } from 'vant'
import {mapGetters,mapActions} from 'vuex'
import FooterTabbar from 'components/FooterTabbar'

export default {
  name: 'User',
  data () {
    return {
        title: '我的'
    }
  },
  computed:{
    user(){
      //返回获取到的数据
      return this.$store.state.user.user
    }
  },
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Button.name]: Button,
    [Image.name]: Image,
    FooterTabbar,

  }


}
</script>
<style lang="scss" scoped>
 .user-info-wrapper {
    margin: 15px 10px;
    background: #F8F9FB;
    border-radius: 12px;
    padding: 15px 20px;
    border: 1px solid #E0E1E2;

    .user-info {
      position: relative;
      height: 90px;
      // border-bottom: 1px solid #E9E9E9;

    .user-nick-name {
        font-size: 17px;
        font-weight: 500;
        color: #333;
      }


    .user-avatar-wrapper {
        margin: 15px;
        position: absolute;
        right: 0;
        top: 0;
   

        .user-avatar {
          width: 40px;
          border-radius: 50%;
        }
      }
    }
 }

.user {
  .poster {
    width: 100%;
    height: 53vw;
    display: block;
  }
  .group {
    margin-bottom: 15px;
  }
  .links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
</style>
