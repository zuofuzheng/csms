/*
* @Author: zuofu
* @Date:   2018-09-13 10:20:00
* @Last Modified by:   zuofu
* @Last Modified time: 2018-09-13 10:20:00
*/
<template>
  <div id="show">
    <informationBoard></informationBoard>
    <dynamicBoard></dynamicBoard>
  </div>
</template>

<script>
import informationBoard from '@/components/informationBoard'
import dynamicBoard from '@/components/dynamicBoard'

export default {
  name: 'Show',
  data () {
    return {
      show: 'csms show page'
    }
  },
  components: {
    'informationBoard': informationBoard,
    'dynamicBoard': dynamicBoard
  }
}
</script>

<style>
#show {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  //margin-top: 60px;
}
</style>
