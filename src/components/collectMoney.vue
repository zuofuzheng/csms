/*
* @Author: zuofu
* @Date:   2018-09-15 12:39:29
* @Last Modified by:   zuofu
* @Last Modified time: 2018-09-15 12:39:29
*/
<template>
<div class="col-xs-12">
  <template>
    <operator-select></operator-select>
    <operator-function></operator-function>
    <operator-settlement></operator-settlement>
    <reception-backstage></reception-backstage>
  </template> 
</div>
</template>

<script>
import operatorFunction from '@/components/collectMoneyOperator'
import operatorSelect from '@/components/collectMoneySelect'
import operatorSettlement from '@/components/collectMoneySettlement'
import receptionBackstage from '@/components/receptionBackstageCut'

export default {
  name: 'collcetMoney',
  data () {
    return {}
  },
  components: {
    'operatorFunction': operatorFunction,
    'operatorSelect': operatorSelect,
    'operatorSettlement': operatorSettlement,
    'receptionBackstage': receptionBackstage
  }
}
</script>

<style scoped>
div {
  height: 960px;
  background-color: #a2a9af;
  box-sizing:border-box;
}
</style>
