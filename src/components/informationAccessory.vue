/*
* @Author: zuofu
* @Date:   2018-09-13 12:14:00
* @Last Modified by:   zuofu
* @Last Modified time: 2018-09-13 10:20:00
*/
<template>
<div id="accessory" class="col-md-12">
  <div class="col-md-4" v-for="k in accessoryData">
    <img :src="k.icon" class="imghw">
    <label class="col-xs-12">{{k.labelText}}</label>
  </div>
  <address>
    zuofu<br>
    2018-09-13<br>
    use vue
  </address>
</div>
</template>

<script>
import store from '../store/store'
import { mapState } from 'vuex'

export default {
  name: 'informationAccessory',
  data () {
    return {
      compentname: 'is informationAccessory'
    }
  },
  store,
  computed: mapState(['accessoryData'])
}
</script>

<style>
#accessory {
  top: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
}
.imghw {
  height: 100px;
  width: 100px;
}
</style>
