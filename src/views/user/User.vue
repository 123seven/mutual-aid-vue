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
        <div class="user-extra-text">信用分: {{user.id}}</div>
      </div>
    </div>
    
   
    <footer-tabbar/>
  </div>
</template>
<script>
import { Field,  Button, Image } from 'vant'
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
        margin: 3px 10px;
        padding: 15px 20px;
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

</style>
