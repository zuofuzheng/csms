/*
* @Author: zuofu
* @Date:   2018-09-13 12:14:00
* @Last Modified by:   zuofu
* @Last Modified time: 2018-09-13 10:20:00
*/
<template>
<div id="contentz" class="col-md-12">
  <template v-for="k in contentData">
    <div v-if="k.topImge" class="col-md-12">
      <img :src="k.topImge">
    </div>
    <p v-if="k.ptext" class="col-md-12">{{k.ptext}}</p>
    <div v-if="k.buttonImge" class="col-md-12">
      <img :src="k.buttonImge">
    </div>
    
  </template>
</div>
</template>

<script>
import store from '../store/store'
import { mapState } from 'vuex'

export default {
  name: 'informationContent',
  data () {
    return {
      compentname: 'informationContent'
    }
  },
  store,
  computed: mapState(['contentData'])
}
</script>

<style scoped>
#contentz {
  height: 60%;
}
</style>
