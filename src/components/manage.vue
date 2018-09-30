/*
* @Author: zuofu
* @Date:   2018-09-15 12:39:29
* @Last Modified by:   zuofu
* @Last Modified time: 2018-09-15 12:39:29
*/
<template>
  <div id="manage" class="col-lg-12">
    <div class="col-lg-2 nopadding">
      <p class="col-xs-12 h-60 nomargin nopadding">
        <img src="../../static/img/logo.png" class="imgsize">
      </p>
      <navigation></navigation>
      <manage-operator></manage-operator>
      <manage-login></manage-login>
      <span id="anchor-point"></span>
    </div>
    <div class="col-lg-10 nopadding">
      <centent-top></centent-top>
      <centent-subject></centent-subject>
    </div>
    <div id="pop-show">
      <pop-show></pop-show>
    </div>
  </div>
</template>

<script>
import navigation from '@/components/manageNavigation'
import cententSubject from '@/components/cententSubject'
import cententTop from '@/components/cententTop'
import manageOperator from '@/components/manageOperator'
import manageBottom from '@/components/manageBottom'
import manageLogin from '@/components/manageLogin'
import popShow from '@/components/popShow'

export default {
  name: 'manage',
  data () {
    return {
      manage: 'is a nanage page'
    }
  },
  components: {
    'navigation': navigation,
    'cententSubject': cententSubject,
    'cententTop': cententTop,
    'manageOperator': manageOperator,
    'manageBottom': manageBottom,
    'manageLogin': manageLogin,
    'popShow': popShow
  }
}
</script>

<style scoped>
#manage {
  height: 1080px;
  background-color: #57D1C9;
  background-image: 
}
.nopadding {
  padding: 0;
}
.nomargin {
  margin: 0;
}
#anchor-point{
  display: inline-block;
  position: absolute;
  height: 15px;
  width: 15px;
  background-color: #a2a9af;
  top: 465px;
  left: 149px;
  transform: rotate(45deg);
}
.imgsize{
  height: 100%;
  width: 100%;
}
#pop-show {
  position: absolute;
  width: auto;
  height: auto;
  top: 0px;
  left: 0px;
}
</style>
