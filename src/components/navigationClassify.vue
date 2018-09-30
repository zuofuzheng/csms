/*
* @Author: zuofu
* @Date:   2018-09-16 12:39:29
* @Last Modified by:   zuofu
* @Last Modified time: 2018-09-16 12:39:29
*/
<template>
<div class="chu">
  <p v-if="moduleList[moduleNamez]">
    <span>{{moduleList[moduleNamez].text}}</span>
  </p>
</div>
</template>

<script>
export default {
  data () {
    return {
      moduleList: {
        n1: {text: '模块1'},
        n2: {text: '模块2'},
        n3: {text: '模块3'},
        n4: {text: '模块4'},
        n5: {text: '模块5'},
        n6: {text: '模块6'}
      }
    }
  },
  props: ['moduleNamez']
}
</script>

<style scoped>
.chu {
  border: none;
  margin: 0;
  height: 100px;
  font-size: 300%;
  line-height: 100px;
}
</style>
