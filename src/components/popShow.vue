<template>
<div id="pop-bg">
  <new-order v-show="add"></new-order>
  <payment v-show="pay"></payment>
  <del-order v-show="del"></del-order>
  <add-data v-show='tdata'></add-data>
</div>
</template>

<script>
import store from '../store/store'
import newOrder from '@/components/addNewOrder'
import payment from '@/components/payment'
import delOrder from '@/components/delOrder'
import addData from '@/components/addData'

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
    }
  },
  components: {
    'newOrder': newOrder,
    'payment': payment,
    'delOrder': delOrder,
    'addData': addData
  },
  methods: {
    
  }
}
</script>

<style>

</style>