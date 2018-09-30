/*
* @Author: zuofu
* @Date:   2018-09-15 12:39:29
* @Last Modified by:   zuofu
* @Last Modified time: 2018-09-15 12:39:29
*/
<template>
  <div class="col-lg-12">
    <form>
      <keep-alive>
        <component :is="tableComponent"></component>
      </keep-alive>
    </form>
  </div>
</template>

<script>
import subjectTable from '@/components/subjectTable'
import orderHandling from '@/components/orderHandling'
import store from '../store/store'

export default {
  name: 'cententSubject',
  data () {
    return {
      text: 'is a content'
    }
  },
  store,
  computed: {
    tableComponent: function () {
      return this.$store.state.collectMoneyData.tableComponent;
    }
  },
  components: {
    'subjectTable': subjectTable,
    'orderHandling': orderHandling
  },
  methods: {
  }
}
</script>

<style scoped>
.w-30 {width: 30px}
.w-40 {width: 40px}
.w-50 {width: 50px}
.w-80 {width: 80px}
.w-100 {width: 100px}
.w-150 {width: 150px}
.w-200 {width: 200px}
div {
  height: 1020px;
  background-color: #E6E6E6;
}
th {

}
</style>
