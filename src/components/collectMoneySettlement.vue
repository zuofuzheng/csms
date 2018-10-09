<template>
  <div id="selects">
    <button v-for="k in settleFs"
      class="h-40 col-xs-12"
      :class="{'mouseIn': k.mouseIn}"
      :disabled="disableStatus(k)"
      @click.stop="xfunction(k.order)"
      @mouseout="cutClass('mouseIn')"
      @mouseover="cutClass('mouseIn')"
    >
      {{k.text}}
    </button>
  </div>
</template>

<script>
import store from '../store/store'
import commonality from '../assets/commonalityFn.js'

export default {
  name: 'Settlement',
  data () {
    return {
      settleFs: {
        newOrder: {id: 'newOrder', text: '新建', order: 'NEWORDER', disable: false, mouseIn: false},
        settle: {id: 'settle', text: '结账', order: 'SETTLE', disable: false, mouseIn: false},
        hangup: {id: 'hangup', text: '挂单', order: 'HANGUP', disable: false, mouseIn: false}
      }
    }
  },
  store,
  props:[],
  computed: {
    payment: function () {
      return this.$store.state.popShow.paymentShow;
    },
    newOrder: function () {
      return this.$store.state.popShow.newOrderShow;
    },
    disable: function () {
      return this.$store.state.user.pck ? false : true;
    },
    rbState: function () {
      return this.$store.state.collectMoneyData.rbState;
    }
  },
  methods: {
    cutClass: function (class1, class2) {
      class2 ? commonality.cutClass(event, class1, class2) : commonality.cutClass(event, class1);
    },
    disableStatus: function (elmt) {
      if (this.rbState === 'reception') {
        for (var k in this.settleFs) {
          this.settleFs[k].disable = false;
        }
      }else {
        for (var k in this.settleFs) {
          this.settleFs[k].disable = true;
        }
      }
      return this.disable ? this.disable : elmt.disable;
    },
    xfunction: function (elmt) {
      console.log(event);
      switch (elmt) {
        case 'NEWORDER':
          this.newOrder === false ? this.$store.commit('changePopShow','newOrderShow') : null;
          break;
        case 'SETTLE':
          this.payment === false ? this.$store.commit('changePopShow','paymentShow') : null;
          break;
        case 'HANGUP':
          this.$store.commit('currentOrderToBackstage', {state: 'watingSettlement'});
          break;
      }
      if (elmt === 'SETTLE') {
        console.log(1);
      }
    }
  }
}
</script>

<style scoped>
button {
  display: block;
  height: 40px;
  line-height: 50%;
  border: 2px solid #D25565;
  outline:none;
  color: #D25565;
  font-size: 120%;
  background-color: rgba(0,0,0,0);
  padding: 0;
  margin: 0 0px 10px 0px;
}
div {
  box-sizing:border-box;
  height: 240px;
  margin: 10px;
  border-bottom: 2px solid #D25565;
}
button:disabled {
  color: #6E6E6E;
}
</style>