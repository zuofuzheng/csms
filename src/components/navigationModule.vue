/*
* @Author: zuofu
* @Date:   2018-09-15 12:39:29
* @Last Modified by:   zuofu
* @Last Modified time: 2018-09-15 12:39:29
*/
<template>
  <div class="col-xs-12" @click="chanemodule">
    <button :class="cpts[moduleName].class" :key="cpts[moduleName].id">
      {{cpts[moduleName].text}}
    </button>
  </div>
</template>

<script>
import store from '../store/store'

export default {
  name: 'navigationModule',
  data () {
    return {}
  },
  store,
  props: ['moduleName'],
  computed: {
    cpts: function () {
      return this.$store.state.moduleData.moduleList;
    }
  },
  /*
  components: {
    'navigationClassify': navigationClassify,
    'moduleFunction': moduleFunction
  },*/
  methods: {
    chanemodule: function () {
      var oldModule = this.$store.state.currentModule;
      //切换module
      this.$store.state.currentModule = this.moduleName;
      //计算指示标志top
      var x1 = this.$store.state.moduleData.moduleList[this.moduleName].index;
      var x2 = this.$store.state.moduleData.moduleList[oldModule].index;
      var anchor = document.getElementById('anchor-point');
      var height = (x1-x2)*100 + anchor.offsetTop;
      anchor.style.top = height + 'px';
    }
  }
}
</script>

<style scoped>
div {
  height: 100px;
  background-color: #D8D8D8;
  box-sizing:border-box;
  margin: 0;
  padding: 0;
  color: white;
}
button {
  display: block;
  height: 100%;
  width: 100%;
  line-height: 50%;
  border: none; 
  font-size: 150%;
  outline:none;
}
.green4 {
  background-color: #3b9a9c;
}
.green5 {
  background-color: #014955;
}
.yellew4 {
  background-color: #bc8420;
}
.red4 {
  background-color: #D25565;
}
</style>