/*
* @Author: zuofu
* @Date:   2018-09-15 12:39:29
* @Last Modified by:   zuofu
* @Last Modified time: 2018-09-15 12:39:29
*/
<template>
  <div class="col-xs-6" @click="xf()">
    <div id="messge">
      <p>this a messge</p>
    </div>
    <template v-for="k in childrenList">
      <navigation-module :moduleName="k" :key='k'></navigation-module>
    </template>
  </div>
</template>

<script>
import navigationModule from '@/components/navigationModule'

export default {
  name: 'navigation',
  data () {
    return {
      text: 'is a navigation',
      childrenList: ['collectMoney', 'stockControl', 'commodityControl', 'clientControl', 'closeAccount', 'settings']
    }
  },
  components: {
    'navigationModule': navigationModule
  },
  methods: {
    xf: function (argument) {
    }
  }
}

</script>

<style scoped>
div {
  height: 960px;
  background-color: #a2a9af;
  padding: 0;
}
#messge {
  height: 360px;
  background-color: #2d2d2d;
}
</style>
