<template>
  <div id="newOrder">
    <div v-show="!show">
      <button class="col-xs-6 lishi" @click="foundOrder('temporary')"></button>
      <button class="col-xs-6 vip" @click="foundOrder('member')"></button>
    </div>
    <div v-show="show">
      <input type="text" name="inputClientId" @input="queryClientIdF()">
      <p>请输入客户ID</p>
      <button name="affirmNewOrder" class="inputId-btn" @click="affirmInput()" disabled>确定</button>
      <button class="inputId-btn" @click="closeInput()">重新输入</button>
    </div>
    <button class="quitNewOrder" @click="toHidden()"></button>
  </div>
</template>

<script>
import store from '../store/store'

export default {
  name: 'addNewOrder',
  data () {
    return {
      show: false,
      clientMessge: null
    }
  },
  store,
  computed: {
  },
  methods: {
    //查询客户id是否存在,若存在则返回客户信息，不存在则返回null
    queryClientIdF: function (event) {
      var inputElement = document.getElementsByName('inputClientId')[0];
      var affirmBtn = document.getElementsByName('affirmNewOrder')[0];
      var id = inputElement.value;
      if (id.length === 8) {
        var clientMessge = null;
        var fData = {
        clientId: 100001,
        clientName: 'sb',
        clientGrade: 'V1',
        clientCredits: 1
        }
        fData != null?clientMessge = fData:null;
        this.clientMessge = clientMessge;
        console.log(this.clientMessge);
        affirmBtn.disabled = false;
        affirmBtn.focus();
      }else {
        affirmBtn.disabled===false ? affirmBtn.disabled=true: null;
      }
    },
    //向后台系统申请一个订单号
    applyOrder: function () {
        return 1809300101010001;
    },
    setfocus: function () {
      document.getElementsByName('inputClientId')[0].focus();
      console.log(document.activeElement);
    },
    //创建订单
    foundOrder: function (event) {
      //检查当前用户订单是否存在，若存在则将当前用户存入后台
      var current = this.$store.state.currentOrder;
      if (current.datas.length !== 0) {
      }
      //依据选项来创建用户订单
      var order = null;
      switch (event) {
        case 'temporary':
          alert('创建了一个临时用户订单');
          order = {
            orderNumber: this.applyOrder(),
            clientId: '00000000',
            foundTime: '18-09-24||17:28:10',
            number: 3,
            money: 50,
            datas: []
          }
          order !== null ? this.$store.commit('changeCurrentOrder', {instructStr: 'REPLACE', currentOrder: order}):null;
          break;
        case 'member':
          this.show = true;
          setTimeout("document.getElementsByName('inputClientId')[0].focus()", 50);
          break;
      }
    },
    //清空输入框重新输入
    closeInput: function () {
      var inputElement = document.getElementsByName('inputClientId')[0];
      inputElement.value = null;
      inputElement.focus();
    },
    //确认输入，依据客户信息创建订单
    affirmInput: function () {
      var id = this.clientMessge;
      var order = {
        orderNumber: this.applyOrder(),
        clientId: id.clientId,
        datas: []
      }
      order !== null ? this.$store.commit('changeCurrentOrder', {instructStr: 'REPLACE', currentOrder: order}):null;
      this.toHidden();
    },
    //退出新建订单页面
    toHidden: function (event) {
      document.getElementsByName('inputClientId')[0].value = null;
      document.getElementsByName('inputClientId')[0].removeAttribute('autofocus');
      this.$store.commit('changePopShow', 'newOrderShow');
      this.show2 = false;
      this.show = false;
    }
  }
}
</script>

<style scoped>
#newOrder {
  position: absolute;
  top: 370px;
  left: 660px;
  width: 600px;
  height: 280px;
  border-radius: 2px;
  background-color: #3b9a9c;
}
button {
  height: 160px;width: 160px;
  margin: 59px 69px;
  border: none;
  outline: none;
  border-radius: 30px;
  background-size: contain;
  background-color: #3b9a9c;
}
.lishi {
  background-image: url(../../static/img/lishiuder.png);
}
.vip {
  background-image: url(../../static/img/1-vip.png);
}
.quitNewOrder {
  position: absolute;
  top: 5px;
  right: 15px;
  width: 30px;
  height: 30px;
  margin: 0;
  background-image: url(../../static/img/logout.png);
  background-size: contain;
}
input {
  font-size: 120%;
  margin: 40px auto 10px auto;
  border-radius: 16px;
  border: none;
  padding: 0 8px;
}
p {
  height: 100px;
}
.inputId-btn {
  width: 80px;
  height: 24px;
  border: 1px solid red;
  margin: 5px 24px;
}
</style>