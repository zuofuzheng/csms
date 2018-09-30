/*
* @Author: zuofu
* @Date:   2018-09-15 12:39:29
* @Last Modified by:   zuofu
* @Last Modified time: 2018-09-15 12:39:29
*/
<template>
  <div class="col-xs-12">
    <template v-if="moduleList[moduleNamez]">
      <p class="col-xs-5 p-c" v-for="j in moduleList[moduleNamez]">
        <a href=" javascript:void(0);" @click="designateF()">{{j.text}}</a>
      </p>
    </template>
  </div>
</template>

<script>
import store from '../store/store'

export default {
  name: 'moduleFunction',
  data () {
    return {
      text: 'moduleFunction',
      moduleList: {
        n1: {
          m1: {text: '功能1', xFunction: ''},
          m2: {text: '功能2', xFunction: ''},
          m3: {text: '功能3', xFunction: ''},
          m4: {text: '功能4', xFunction: ''}
        },
        n2: {
          t1: {text: '功能1', xFunction: ''},
          t2: {text: '功能2', xFunction: ''},
          t3: {text: '功能3', xFunction: ''},
          t4: {text: '功能4', xFunction: ''}
        },
        n3: {
          u1: {text: '功能1', xFunction: ''},
          u2: {text: '功能2', xFunction: ''},
          u3: {text: '功能3', xFunction: ''},
          u4: {text: '功能4', xFunction: ''}
        },
        n4: {
          f1: {text: '功能1', xFunction: ''},
          f2: {text: '功能2', xFunction: ''},
          f3: {text: '功能3', xFunction: ''},
          f4: {text: '功能4', xFunction: ''}
        },
        n5: {
          e1: {text: '功能1', xFunction: ''},
          e2: {text: '功能2', xFunction: ''},
          e3: {text: '功能3', xFunction: ''},
          e4: {text: '功能4', xFunction: ''}
        },
        n6: {
          s1: {text: '功能1', xFunction: ''},
          s2: {text: '功能2', xFunction: ''},
          s3: {text: '功能3', xFunction: ''},
          s4: {text: '功能4', xFunction: ''}
        }
      }
    }
  },
  props: ['moduleNamez'],
  store,
  methods: {
    designateF: function () {
      this.$store.commit('changecCurrentM',this.moduleNamez);
      return false;
    }
  }
}
</script>

<style scoped>
div {
  height: 100px;
  background-color: #a2a9af;
  margin: 0px;
  border: none;
}
.p-c {
  height: 38px;
  padding: 0px;
  margin: 5px 5px 1px 5px;
  box-sizing:border-box;
  border:1px solid #FBC723;
  border-radius: 3px;
}
a{
  display: block;
  height: 36px;
  line-height: 36px;
  font-size: 120%;
}
</style>
