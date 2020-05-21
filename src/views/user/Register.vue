<template>
  <div>
    <div class="header">
      <div class="logo">
      <van-image  round width="2rem" height="2rem" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
      </div>
    </div>

    <div class="content">
      <van-form @submit="onSubmit">
        <van-field   v-model="email" name="邮箱" label="邮箱" placeholder="请输入邮箱"/>
        <van-field   v-model="password" type="password" name="密码" label="密码" placeholder="请输入密码"/>
        <van-field   v-model="code" clearable label="验证码" placeholder="请输入验证码">
        <template #button>
          <van-button  @click="send" size="small" type="primary">发送验证码</van-button>
        </template>
        </van-field>
        <div style="margin: 16px;">
          <van-button round block type="info"  native-type="submit">注册</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>
<script>
import { Field, Button, Image } from 'vant'
import { mapActions } from 'vuex'
import dayjs from 'dayjs'


export default {
  name:'Register',
    data () {
    return {
        email: '',
        password: '',
        code:''
    }
  },
  components: {
    [Field.name]: Field,
    [Button.name]: Button,
    [Image.name]: Image
  },
  methods: {
    onSubmit(values) {

      const data = {
        email: this.email,
        password: this.password,
        code: this.code
      }
      console.log(data)
    },
    send () {
      console.log(this.email,)
   
      this.send_code(this.values)
    },
    ...mapActions({
      send_code: 'user/sendCode'
    })
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
