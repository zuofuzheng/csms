/*
* @Author: zuofu
* @Date:   2018-09-13 12:14:00
* @Last Modified by:   zuofu
* @Last Modified time: 2018-09-13 10:20:00
*/
<template>
  <div>
      <h1 v-if="noticeTitleH1">{{noticeTitleH1}}</h1>
      <h2 v-if="noticeTitleH2">{{noticeTitleH2}}</h2>
      <h3 v-if="noticeTitleH3">{{noticeTitleH3}}</h3>
  </div>
</template>

<script>
import store from '../store/store'
import { mapState } from 'vuex'

export default {
  name: 'informationTitle',
  data () {
    return {
      compentname: 'is informationTitle'
    }
  },
  store,
  computed: mapState(['noticeTitleH1', 'noticeTitleH2', 'noticeTitleH3'])
}
</script>

<style scoped>
  h1 {
    color: red;
  }
  h2 {
    color: blue;
    text-align: right;
  }
  h3 {
    color: green;
    text-align: right;
  }
</style>
