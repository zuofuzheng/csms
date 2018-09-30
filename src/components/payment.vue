<template>
  <div id="payment">
    <p>支付信息</p>
    <ul id="prompt-message">
      <li><span>订单编号：</span><span>1809260001002</span></li>
      <li><span>客户ID：</span><span>12512120</span></li>
      <li><span>总件数：</span><span>19</span></li>
      <li><span>订单金额：</span><span>998</span></li>
    </ul>
    <p><label for="promotionCode">优惠码</label></p>
    
    <input type="text" name="promotionCode">
    <p><span>优惠码抵扣：</span><span>0</span><span>￥</span></p>
    <p><span>需要支付：</span><span>998</span><span>￥</span></p>
    <p>支付方式</p>
    <ul>
      <li><button @click="payBtn('wx')">微信</button></li>
      <li><button @click="payBtn('al')">支付宝</button></li>
      <li><button @click="payBtn('yh')">银行卡</button></li>
      <li><button @click="payBtn('xj')">现金</button></li>
    </ul>
    <input disabled type="text" name="cash" @input="getCash()">
    <p><span>找零：</span><span>{{changeCash}}</span><span>￥</span></p>
    <p id="changeScheme">
      <span>50元</span>
      <span>20元</span>
      <span>10元</span>
      <span>5元</span>
      <span>1元</span>
      <span>5角</span>
      <span>1角</span>
      <br>
      <span>{{changeScheme.wushi}}</span>
      <span>{{changeScheme.ershi}}</span>
      <span>{{changeScheme.shi}}</span>
      <span>{{changeScheme.wu}}</span>
      <span>{{changeScheme.yi}}</span>
      <span>{{changeScheme.wumao}}</span>
      <span>{{changeScheme.yimao}}</span>
    </p>
    <p>操作</p>
    <ul>
      <li><button @click="affirm()">支付完成</button></li>
      <li><button @click="awaiting()">等待确认</button></li>
      <li><button @click="laterPay()">稍后支付</button></li>
    </ul>
    <button id="quitpaycomponent" @click="quitpay()">退出</button>
  </div>
</template>

<script>
import store from '../store/store'

export default {
  name: 'payment',
  data () {
    return {
      payCode: 0,
      paymoney: 998,
      changeScheme: {
        wushi: 0,
        ershi: 0,
        shi: 0,
        wu: 0,
        yi: 0,
        wumao: 0,
        yimao: 0
      },
      payWay: null
    }
  },
  store,
  computed: {
    changeCash: function () {
      var n = this.payCode - this.paymoney;
      if (n > 0) {
        return n;
      }else {
        return null;
      } 
    }
  },
  methods: {
    //监控cash输入，计算找零金额及方案
    getCash: function (event) {
      var cash = document.getElementsByName('cash');
      var n = parseInt(cash[0].value);
      if (n - this.paymoney > 0) {
        if (n - this.paymoney < 100) {
          this.payCode = n;
          //计算找零方案
          var z = n-this.paymoney;
          var m = z.toString();
          if (z/50 > 1) {
            this.changeScheme.wushi = 1;
          }
          if ((z - 50*this.changeScheme.wushi)/20 >= 1) {
            this.changeScheme.ershi = parseInt((z - 50*this.changeScheme.wushi)/20);
          }
          if ((z - 50*this.changeScheme.wushi)%20 >= 10) {
            this.changeScheme.shi = 1;
          }
          var y = z-parseInt(z/10)*10;
          if (y/5 > 1) {
            this.changeScheme.wu = 1;
          }
          if (y - 5*this.changeScheme.wu >= 1) {
            this.changeScheme.yi = parseInt(y - 5*this.changeScheme.wu);
          }
          var j = y - parseInt(y);
          if (j/0.5 > 1) {
            this.changeScheme.wumao = 1;
          }
          if (j - 0.5*this.changeScheme.wumao >= 0.1) {
            this.changeScheme.yimao = (j - 0.5*this.changeScheme.wumao)/0.1;
          }
        }else{
          alert('找零金额超过100!');
          cash[0].value = null;
          this.payCode = 0;
          for (var k in this.changeScheme) {
            this.changeScheme[k] = 0;
          }
        }
      }else {
        this.payCode = 0;
        for (var k in this.changeScheme) {
          this.changeScheme[k] = 0;
        }
      }
    },
    buttonDisabled: function (name, tf) {
      var btn = document.getElementsByName(name)[0];
      if (tf) {
        tf===true?btn.blur():btn.focus();
        btn.disabled = tf;
      }else {
        if (btn.disabled === true) {
          btn.disabled = false;
          btn.focus();
        }else {
          btn.blur();
          btn.disabled = true;
        }
      }
      
    },
    //支付方式
    payBtn: function (event) {
      switch (event) {
        case 'wx':
          this.payWay = 'winxin';
          this.buttonDisabled('cash', true);
          break;
        case 'al':
          this.payWay = 'alipay';
          this.buttonDisabled('cash', true);
          break;
        case 'yh':
          this.payWay = 'bank';
          this.buttonDisabled('cash', true);
          break;
        case 'xj':
          this.payWay = 'cash';
          this.buttonDisabled('cash');
          break;
      }
    },
    //隐藏组件
    toHidden: function (event) {
      this.$store.commit('changePopShow', 'paymentShow');
    },
    //确认支付
    affirm: function (event) {
      alert('支付完成，钱款到账');
      this.toHidden();
    },
    awaiting: function (event) {
      alert('存入后台，等待确认');
      this.toHidden();
    },
    laterPay: function () {
      alert('存入后台，等待支付');
      this.toHidden();
    },
    //退出支付页面
    quitpay: function (event) {
      alert('退出支付页面,可以执行增改删等操作');
      this.toHidden();
    }
  }
}
</script>

<style scoped>
#payment {
  width: 905px;
  height: 640px;
  position: absolute;
  top: 210px;
  left: 500px;
  border: 2px solid #014955;
  border-radius: 10px;
  background-color: #3b9a9c;
  font-size: 120%;
  color: white;
}
p {
  text-align: center;
  margin: 10px;
  font-weight: 700;
}
ul {
  padding: 10px 60px;
}
li {
  display: inline-block;
}
#prompt-message li {
  display: block;
}
button {
  border: 2px solid #bc8420;
  width: 120px;
  height: 45px;
  background-color: #3b9a9c;
  border-radius: 2px;
}
#prompt-message span {
  display: inline-block;
  width: 200px;
  padding: 0 30px;
  text-align: left;
}
input {
  color: black;
  border-radius: 14px;
  border: none;
  padding: 0 10px;
}
input:disabled {
  background-color: #000000;
}
#changeScheme {

}
#changeScheme span{
  display: inline-block;
  width: 60px;
}
#quitpaycomponent {
  position: absolute;
  top: 2%;
  right: 2%;
  height: 40px;
  width: 50px;
  border-radius: 30%;
}
</style>