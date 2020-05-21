<template>
  <div>
    <div class="user-info-wrapper">
      <div class="user-info">
        <div class="name-box">
          {{ user.nickname }}
        </div>
        <div class="user-avatar-wrapper">
          <van-image
            name="user-avatar"
            round
            width="2rem"
            height="2rem"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
        </div>
      </div>
      <div class="user-extra">
        <div class="user-extra-text">信用分: {{ user.id }}</div>
      </div>
    </div>

    <van-row class="user-links">
      <van-col span="6">
        <van-icon v-model="newMsg" size="30" name="new" />
        消息通知
      </van-col>
      <van-col span="6">
        <van-icon size="30" name="balance-list" />
        助力任务
      </van-col>
      <van-col span="6">
        <van-icon size="30" name="todo-list" />
        发布任务
      </van-col>
      <van-col span="6">
        <van-icon size="30" name="bill" />
        账户余额
      </van-col>
    </van-row>

    <van-cell-group>
      <van-cell icon="youzan-shield" title="我的信用分" is-link />
      <van-cell icon="comment" title="意见反馈" is-link />
      <van-cell icon="column" title="关于我们" is-link />
      <van-cell @click="logout" icon="clear" title="退出登录" is-link />
    </van-cell-group>

    <footer-tabbar />
  </div>
</template>
<script>
import { Row, Col, Icon, Cell, CellGroup, Field, Button, Image } from "vant";
import { mapGetters, mapActions, mapMutations } from "vuex";
import FooterTabbar from "components/FooterTabbar";

export default {
  name: "User",
  data() {
    return {
      title: "我的",
      newMsg: true
    };
  },

  computed: {
    user() {
      return this.$store.state.user.user;
    },
    props: {
      checked: Boolean
    }
  },
  methods: {
    ...mapMutations({
      logout: "user/LOGOUT"
    })
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
    FooterTabbar
  }
}

</script>
<style lang="less">
.user-info-wrapper {
  margin: 15px 10px;
  background: #f8f9fb;
  border-radius: 12px;
  padding: 15px 20px;
  border: 1px solid #e0e1e2;
  .user-info {
    position: relative;
    height: 90px;
    .name-box {
      font-weight: bold;
      font-size: 18px;
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
  &-poster {
    width: 100%;
    height: 53vw;
    display: block;
  }
  &-group {
    margin-top: 15px;
    margin-bottom: 15px;
  }
  &-links {
    padding: 5px 0px;
    font-size: 3px;
    text-align: center;
    background-color: #fff;
    margin: 10px 0px;
    .van-icon {
      margin: 0px auto;
      display: table;
      font-size: 5px;
    }
  }
}
</style>
