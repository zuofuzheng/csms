<template>
  <div id="selects">
    <button v-for="k in SettleFs" class="h-40 col-xs-12" @click="xfunction(k.order)">
      {{k.text}}
    </button>
  </div>
</template>

<script>
import store from '../store/store'

export default {
  name: 'Settlement',
  data () {
    return {

    }
  },
  store,
  props:[],
  computed: {
    SettleFs: function () {
      return this.$store.state.collectMoneyData.SettlementF;
    },
    payment: function () {
      return this.$store.state.popShow.paymentShow;
    },
    newOrder: function () {
      return this.$store.state.popShow.newOrderShow;
    }
  },
  methods: {
    xfunction: function (event) {
      switch (event) {
        case 'NEWORDER':
          this.newOrder === false ? this.$store.commit('changePopShow','newOrderShow') : null;
          break;
        case 'SETTLE':
          this.payment === false ? this.$store.commit('changePopShow','paymentShow') : null;
          break;
        case 'HANGUP':
          
          break;
      }
      if (event === 'SETTLE') {
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
</style>