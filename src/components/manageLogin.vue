<template>
  <div id="users" class="col-xs-12">
    <button :disabled="loginX" class="col-xs-4 button button-large button-plain button-borderless" id="login" @click="login()">
      <i class="fa fa-lg" :class="{'btn-color-green': loginX,'fa-user-plus': !loginX, 'fa-user': loginX}"></i>
    </button>
    <button :disabled="lookX" class="col-xs-4 button button-large button-plain button-borderless" id="userlook" @click="look()">
      <i class="fa fa-lg fa-lock" :class="{'btn-color-yellow': !lookX}"></i>
    </button>
    <button :disabled="quitX" class="col-xs-4 button button-large button-plain button-borderless" id="logdown" @click="quit()">
      <i class="fa fa-lg fa-power-off" :class="{'btn-color-red': !quitX}"></i>
    </button>
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

<style scoped>
div {
  background-color: #3b9a9c;
}
button {
  height: 60px !important;
}
button:disabled {
  border: none !important;
  background-color: rgba(0,0,0,0) !important;
}
.btn-color-red {
  color: #D25565;
}
.btn-color-green {
  color: #014955;
}
.btn-color-yellow {
  color: #bc8420;
}
</style>