<template>
  <div class="wdiv">
  	<div v-if="!lookState">
  	  <label for="setLookPasswd" class="col-xs-12">请设置解锁密码</label>
  	  <input type="text" name="setLookPasswd" class="col-xs-6 col-xs-offset-3">
  	  <P class="col-xs-12">提示：解锁密码长度为4~16位数字或字母组成，区分大小写</P>
  	  <button class="col-xs-2 col-xs-offset-5" @click="setPasswd()"><i class="fa fa-5x fa-unlock-alt"></i></button>
  	</div>
  	<div v-if="looking">
  	  <button class="btn-center" @click="toUntie()"><i class="fa fa-5x fa-lock"></i></button>
  	</div>
  	<div v-if="untie">
  	  <label for="untieLookPasswd" class="col-xs-12">请输入解锁密码</label>
  	  <input type="text" name="untieLookPasswd" class="col-xs-6 col-xs-offset-3">
  	  <button class="col-xs-2 col-xs-offset-5" @click="untieLook()"><i class="fa fa-5x fa-unlock-alt"></i></button>
  	</div>
    <button v-if="!lookState" class="quitlook" @click="quitLook()"><i class="fa fa-2x fa-close"></i></button>
  </div>
</template>

<script>
import store from '../store/store'

export default {
  name: 'look',
  data () {
  	return {
  	  lookState: false,
  	  untie: false,
  	  passwd: null
  	}
  },
  store,
  props: [],
  computed: {
  	looking: function () {
  	  var data = false;
  	  this.lookState===true&&this.untie===false ? data=true : null;
  	  return data;
  	}
  },
  components: {},
  methods: {
  	toUntie: function () {
  	  this.untie = true;
  	},
  	untieLook: function () {
      var ps = document.getElementsByName('untieLookPasswd')[0];
      var inputMd5 = md5(ps.value);
      inputMd5 === this.passwd ? this.lookState=false : ps.value=null;
      inputMd5 === this.passwd ? this.untie=false : null;
      this.lookState === false ? this.$store.commit('changePopShow', 'lookShow') : null;
  	},
  	setPasswd: function () {
  	  var ps = document.getElementsByName('setLookPasswd')[0];
  	  //?检查设置的密码是否符合格式
  	  this.passwd = md5(ps.value);
  	  console.log(this.passwd);
  	  this.passwd ? this.lookState=true : null;
  	},
  	quitLook: function () {
  	  this.$store.commit('changePopShow', 'lookShow');
  	}
  }
}
</script>

<style scoped>
.wdiv {
  position: absolute;
  top: 290px;
  left: 760px;
  width: 500px;
  height: 500px;
  border: 1px solid red;
  background-color: #3b9a9c;
  border-radius: 5px;
}
input {
  border-radius: 16px;
  margin-top: 20px;
  margin-bottom: 20px;
}
label {
  margin-top: 50px;
}
button {
  background-color: rgba(0,0,0,0);
}
.quitlook {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background-color: rgba(0,0,0,0);
}
.btn-center {
  margin-top: 40%;
}
</style>
