<template>
  <div id="selects">
    <button v-for="k in selectFs" class="h-40 col-xs-5" :key="k.id" @click.stop="selectX(k.order)">
      {{k.text}}
    </button>
  </div>
</template>

<script>
import store from '../store/store'

export default {
  name: 'Select',
  data () {
    return {

    }
  },
  store,
  computed: {
    selectFs: function () {
      return this.$store.state.collectMoneyData.selectF;
    }
  },
  props:[],
  methods: {
    selectX: function (event) {
      var datas = this.$store.state.collectMoneyData;
      var table = null;
      if (datas.tableComponent === 'subjectTable') {
        table = document.getElementsByName('tableList');
      }else if (datas.tableComponent === 'orderHandling') {
        table = document.getElementsByName('backstageTable');
      }
      if (event === 'ONLY') {
        if (datas.selectState !== true) {
          this.$store.commit('changeSelectState', true);
        }
      }else {
        this.$store.commit('changeSelectState', false);
      }
      switch (event) {
        case 'ALL'://全选
          for (var i = 0; i < table.length; i++) {
            if (table[i].checked === false) {
              table[i].click();
            }
          }
          break;
        case 'ALLNO'://全不选
          for (var i = 0; i < table.length; i++) {
            if (table[i].checked === true) {
              table[i].click();
            }
          }
          break;
        case 'ODD'://奇数选择
          for (var i = 0; i < table.length; i=i+2) {
            table[i].checked===true?null:table[i].click();
          }
          for (var j = 1; j < table.length; j=j+2) {
            table[j].checked===false?null:table[j].click();
          }
          break;
        case 'EVEN'://偶数选择
          for (var i = 1; i < table.length; i=i+2) {
            table[i].checked===true?null:table[i].click();
          }
          for (var j = 0; j < table.length; j=j+2) {
            table[j].checked===false?null:table[j].click();
          }
          break;
        case 'AGAINST'://反向选择
          for (var i = 0; i < table.length; i++) {
            table[i].click();
          }
          break;
        case 'ONLY':
          for (var i = 1; i < table.length; i++) {
            table[i].checked===false?null:table[i].click();
          }
          break;
        default:
          break;
      }
    }
  }
}
</script>

<style scoped>
button {
  display: block;
  height: 40px;
  line-height: 50%;
  border: 2px solid #6E6E6E;
  outline:none;
  color: #6E6E6E;
  font-size: 120%;
  background-color: rgba(0,0,0,0);
  padding: 0;
  margin: 0 5px 10px 5px;
}
div {
  box-sizing:border-box;
  height: 240px;
  margin: 10px;
  border-bottom: 2px solid #D25565;
}
</style>