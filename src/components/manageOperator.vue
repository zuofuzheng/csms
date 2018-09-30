<template>
  <div class="col-xs-6">
    <keep-alive>
      <component :is="moduleName"></component>
    </keep-alive>
  </div>
</template>

<script>
import collectMoney from '@/components/collectMoney'
import stockControl from '@/components/stockControl'
import commodityControl from '@/components/commodityControl'
import clientControl from '@/components/clientControl'
import closeAccount from '@/components/closeAccount'
import settings from '@/components/settings'
import store from '../store/store'

export default {
  name: 'operator',
  data () {
    return {}
  },
  store,
  props: [],
  computed: {
    moduleName: function () {
      return this.$store.state.currentModule;
    }
  },
  components: {
    'collectMoney': collectMoney,
    'stockControl': stockControl,
    'commodityControl': commodityControl,
    'clientControl': clientControl,
    'closeAccount': closeAccount,
    'settings': settings
  }
}
</script>

<style scoped>
div {
  height: 960px;
  background-color: #a2a9af;
  padding: 0;
}
</style>