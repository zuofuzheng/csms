/*
* @Author: zuofu
* @Date:   2018-09-17 12:39:29
* @Last Modified by:   zuofu
* @Last Modified time: 2018-09-17 12:39:29
* :function(functionName,k.operator)
*/
<template>
  <div>
    <p v-for="k in mData" :key="k.id" v-show="k.show" class="col-xs-5 h-40">
      <button @click="handleFs(k.order)">{{k.text}}</button>
    </p>
  </div>
</template>

<script>
import store from '../store/store'

export default {
  name: 'collectMoney',
  data () {
    return {
     
    }
  },
  store,
  props: ['functionName'],
  computed: {
    mData: function () {
      return this.$store.state.collectMoneyData.operator;
    }
  },
  methods: {
    handleFs: function(event){
      var rbState = this.$store.state.collectMoneyData.rbState;
      switch (event) {
        case 'ADD':
          this.$store.commit('changePopShow', 'addDataShow');
          this.$store.commit('changeAddDataAffiliation', 'ADD');
          setTimeout("document.getElementsByName('addData')[0].focus()", 50);
          break;
        case 'ALT':
          
          break;
        case 'DEL':
          this.$store.commit('deletCurrentOrder', rbState);
          break;
        case 'CLR':
          var table = null;
          var datas = this.$store.state.collectMoneyData;
          if (datas.tableComponent === 'subjectTable') {
            table = document.getElementsByName('tableList');
          }else if (datas.tableComponent === 'orderHandling') {
            table = document.getElementsByName('backstageTable');
          }
          //执行全选
          for (var i = 0; i < table.length; i++) {
            if (table[i].checked === false) {
              table[i].click();
            }
          }
          //弹出警告框
          //执行删除
          this.$store.commit('deletCurrentOrder', rbState);
          break;
        case 'RBK':
          break;
        case 'QUERY':
          this.$store.commit('changePopShow', 'addDataShow');
          this.$store.commit('changeAddDataAffiliation', 'QUERY');
          setTimeout("document.getElementsByName('addData')[0].focus()", 50);
          break;
        default:
          break;
      }
    }
  }
}
</script>

<style scoped>
.h-40 {
  height: 40px;
  color: red;
}
p {
  margin: 0 5px 10px 5px;
  padding: 0;
  border: 2px solid #D25565;
  border-radius: 3px;
  font-size: 120%;
}
button {
  display: block;
  height: 100%;
  width: 100%;
  line-height: 50%;
  border: none;
  outline:none;
  color: #D25565;
  background-color: rgba(0,0,0,0);
}
div {
  box-sizing:border-box;
  height: 240px;
  margin: 10px;
  border-bottom: 2px solid #D25565;
}
</style>
