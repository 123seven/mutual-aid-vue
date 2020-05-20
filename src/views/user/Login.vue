<template>
  <div>
    <div class="header">
      <div class="logo">
      <van-image  round width="2rem" height="2rem" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
      </div>
    </div>
    <div class="content">
      <van-form @submit="onSubmit">
        <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]"/>
        <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]"/>
        <div style="margin: 16px;">
          <van-button   round block type="info"  native-type="submit">登录</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>
<script>
import { Field,  Button, Image } from 'vant'
import { mapActions,mapGetters } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
        username: 'zhuhao@ouchteam.com',
        password: 'seven8899'
    }
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
      const data = {
        account: this.username,
        password: this.password,
        $router: this.$router,
        $route: this.$route
      }
      this.login(data)
    },
    ...mapActions({
      login: 'user/login'
    })
  },

  components: {
    [Field.name]: Field,
    [Button.name]: Button,
    [Image.name]: Image
  }
}
</script>


<style lang="scss" scoped>
  .header{
    width: 100%;
    height: 165px;
    display: flex;
    justify-content: center;
    align-items: center;

  }

</style>
