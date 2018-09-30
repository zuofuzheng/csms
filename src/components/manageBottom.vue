/*
* @Author: zuofu
* @Date:   2018-09-15 12:39:29
* @Last Modified by:   zuofu
* @Last Modified time: 2018-09-15 12:39:29
*/
<template>
  <div class="col-lg-12">
    <p><span>{{text}}</span></p>
  </div>
</template>

<script>
export default {
  name: 'manageBottom',
  data () {
    return {
      text: 'is a Bottom'
    }
  }
}
</script>

<style scoped>
div {
  height: 60px;
  background-color: #4c5870;
}
</style>
