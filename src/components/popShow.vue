<template>
<div id="pop-bg">
  <div v-show="bg" class="pop-show-bg"></div>
  <new-order v-show="add"></new-order>
  <payment v-show="pay"></payment>
  <del-order v-show="del"></del-order>
  <add-data v-show='tdata'></add-data>
  <user-login v-if="loginShow"></user-login>
  <user-look v-if='lookShow'></user-look>
</div>
</template>

<script>
import store from '../store/store'
import newOrder from '@/components/addNewOrder'
import payment from '@/components/payment'
import delOrder from '@/components/delOrder'
import addData from '@/components/addData'
import userLogin from '@/components/login'
import userLook from '@/components/userLook'

export default {
  name: 'popShow',
  data () {
    return {
    }
  },
  store,
  computed: {
    add: function () {
      return this.$store.state.popShow.newOrderShow;
    },
    pay: function () {
      return this.$store.state.popShow.paymentShow;
    },
    del: function () {
      return this.$store.state.popShow.delOrderShow;
    },
    tdata: function () {
      return this.$store.state.popShow.addDataShow;
    },
    loginShow: function () {
      return this.$store.state.popShow.loginShow;
    },
    lookShow: function () {
      return this.$store.state.popShow.lookShow;
    },
    bg: function() {
      var data = false;
      for (var k in this.$store.state.popShow) {
        this.$store.state.popShow[k]===true ? data=true : null;
        if (data===true) {break;}
      }
      return data;
    }
  },
  components: {
    'newOrder': newOrder,
    'payment': payment,
    'delOrder': delOrder,
    'addData': addData,
    'userLogin': userLogin,
    'userLook': userLook
  },
  methods: {

  }
}
</script>

<style>
.pop-show-bg {
  width: 1920px;
  height: 1080px;
  background-color: rgba(48,48,48,0.5);
}
</style>