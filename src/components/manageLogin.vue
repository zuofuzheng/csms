<template>
  <div id="users">
    <button :disabled="loginX" class="buttonbg1" id="login" @click="login()"></button>
    <button :disabled="lookX" class="buttonbg2" id="userlook" @click="look()"></button>
    <button :disabled="quitX" class="buttonbg3" id="logdown" @click="quit()"></button>
  </div>
</template>

<script>
import store from '../store/store'

export default {
  name: 'manageLogin',
  data () {
    return {

    }
  },
  store,
  computed: {
    loginX: function () {
      var data = false;
      this.$store.state.user.userName !== null && this.$store.state.user.pck !== null ? data=true : null;
      return data;
    },
    lookX: function () {
      var data = true;
      this.loginX === true ? data = false : null;
      return data;
    },
    quitX: function () {
      var data = true;
      this.loginX === true ? data = false : null;
      return data;
    }
  },
  components: {
  },
  methods: {
    login: function () {
      console.log('1111');
      this.$store.commit('changePopShow', 'loginShow');
    },
    look: function () {
      console.log('222'),
      this.$store.commit('changePopShow', 'lookShow');
    },
    quit: function () {
      console.log('333');
      //？向服务器提交退出请求，等待服务器返回退出指令
      //？调用其他指令将相关数据上传服务器
      //？执行退出，重置管理页面
      var tui = true;
      tui ? this.$store.commit('changeUser', null) : null;
    }
  }
}
</script>

<style scoped="">
div {
  background-color: #3b9a9c;
}
button {
  display: inline-block;
  height: 40px;
  width: 40px;
  border-radius: 5px;
  margin: 10px 25px;
  border: none;
  outline: none;
  background-size: 40px;
  background-color: rgba(0,0,0,0);
}
.buttonbg1 {
  background-image: url(../../static/img/login.png);
}
.buttonbg2 {
  background-image: url(../../static/img/userlook.png);
}
.buttonbg3 {
  background-image: url(../../static/img/logdown.png);
}
</style>