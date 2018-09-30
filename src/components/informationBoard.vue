/*
* @Author: zuofu
* @Date:   2018-09-13 12:14:00
* @Last Modified by:   zuofu
* @Last Modified time: 2018-09-13 10:20:00
*/
<template>
  <div id="information" class="col-lg-4">
    <information-title></information-title>
    <information-content></information-content>
    <information-accessory></information-accessory>
  </div>
</template>

<script>
import informationTitle from './informationTitle'
import informationContent from './informationContent'
import informationAccessory from './informationAccessory'

export default {
  name: 'informationBoard',
  data () {
    return {}
  },
  components: {
    'informationTitle': informationTitle,
    'informationAccessory': informationAccessory,
    'informationContent': informationContent
  }
}
</script>

<style scoped>
#information{
  background-color: #576574;
  height:1080px;
  padding-top: 15px;
  padding-bottom: 15px;

}

</style>
