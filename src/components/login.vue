<template>
  <div>
  	<form onsubmit="return false">
  	  <h1>login</h1>
  	  <label for="username" class="col-xs-12">请输入用户名</label>
  	  <input type="text" name="username" class="col-xs-8 col-xs-offset-2">
  	  <label for="passwd" class="col-xs-12">请输入密码</label>
  	  <input type="text" name="passwd" class="col-xs-8 col-xs-offset-2">
  	  <p id="login-prompt" class="col-xs-12">提示信息</p>
  	  <button id="loginbtn" class="col-xs-2 col-xs-offset-5" @click="tologin()">login</button>
  	</form>
  	<button class="login-quit" @click="quit()">x</button>
  </div>
</template>

<script>
import store from '../store/store'

export default {
  name: 'login',
  data () {
  	return {
  	}
  },
  store,
  props: [],
  computed: {},
  components: {},
  methods: {
  	quit: function () {
  	  document.getElementsByName('username')[0].value = null;
  	  document.getElementsByName('passwd')[0].value = null;
  	  this.$store.commit('changePopShow', 'loginShow');
  	},
  	tologin: function () {
  	  var inputUsername = document.getElementsByName('username')[0];
  	  var inputPasswd = document.getElementsByName('passwd')[0];
  	  //正则验证
  	  var username = md5(inputUsername.value);
  	  var passwd = md5(inputPasswd.value);
  	  //向服务器查询用户，若用户存在0，不存在1，密码正确1，密码不正确2，返回一个数字表示查询结果（1，2，3），以及一个有期限限制的校验码
  	  //将校验码，用户名暂存到store
  	  var date = new Date();
  	  var pck = md5(date.getTime());
  	  var dataz = {
  	  	userName: username,
  	  	pck: pck
  	  }
  	  this.$store.state.user.pck === dataz.pck ? null : this.$store.commit('changeUser', dataz);
  	  this.quit();
  	}
  }
}
</script>

<style scoped>
div {
  position: absolute;
  top: 200px;
  left: 760px;
  height: 600px;
  width: 400px;
  background-color: blue;
  border-radius: 5px;
  font-size: 120%;
}
input {
  border-radius: 16px;
  margin-top: 14px;
  margin-bottom: 14px;
}
h1 {
  margin: 42px 0;
}
.login-quit{
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
}
</style>