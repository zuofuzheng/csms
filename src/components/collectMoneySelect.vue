<template>
  <div id="selects">
    <button v-for="k in selectFs"
      class="h-40 col-xs-5"
      :key="k.id"
      :disabled="disableStatus(k)"
      @click.stop="selectX(k.order)"
      @mouseover="cutClass('mouseIn')"
      @mouseout="cutClass('mouseIn')"
    >
      {{k.text}}
    </button>
  </div>
</template>

<script>
import store from '../store/store'
import commonality from '../assets/commonalityFn.js'

export default {
  name: 'Select',
  data () {
    return {
      selectFs: {
        all: {id: 'all', text: '全选', order: 'ALL', disable: false, mouseIn: false},
        allno: {id: 'allno', text: '不选', order: 'ALLNO', disable: false, mouseIn: false},
        odd: {id: 'odd', text: '奇数', order: 'ODD', disable: false, mouseIn: false},
        even: {id: 'even', text: '偶数', order: 'EVEN', disable: false, mouseIn: false},
        single: {id: 'against', text: '反选', order: 'AGAINST', disable: false, mouseIn: false},
        multiple: {id: 'only/multiple', text: '多选', order: 'ONLY', disable: false, mouseIn: false}
      }
    }
  },
  store,
  computed: {
    disable: function () {
      var data = this.$store.state.user.pck ? false : true;
      return data;
    }
  },
  props:[],
  methods: {
    cutClass: function (class1, class2) {
      class2 ? commonality.cutClass(event, class1, class2) : commonality.cutClass(event, class1);
    },
    disableStatus: function (event) {
      console.log('123');
      return this.disable ? this.disable : event.disable;
    },
    changeMultiple () {
      var data = this.$store.state.collectMoneyData.selectState;
      this.selectFs.multiple.order = data === true ?'MUlTIPLE' : 'ONLY';
      this.selectFs.multiple.text  = data === true ?'单选' : '多选';
    },
    changeBtnBg: function (event) {
      var n = event.class.indexOf('mouseIn');
      n === -1 ? event.class += ' mouseIn' : event.class = event.class.replace(' mouseIn', '');
    },
    selectX: function (event) {
      var datas = this.$store.state.collectMoneyData;
      var table = null;
      datas.tableComponent === 'subjectTable' ? table = document.getElementsByName('tableList') : null;
      datas.tableComponent === 'orderHandling' ? table = document.getElementsByName('backstageTable') : null;
      if (event === 'ONLY') {
        datas.selectState !== true ? this.$store.commit('changeSelectState', true) : null;
      }else {
        this.$store.commit('changeSelectState', false);
      }
      this.changeMultiple();
      switch (event) {
        case 'ALL'://全选
          for (var i = 0; i < table.length; i++) {
            table[i].checked === false ? table[i].click() : null;
          }
          break;
        case 'ALLNO'://全不选
          for (var i = 0; i < table.length; i++) {
            table[i].checked === true ? table[i].click() : null;
          }
          break;
        case 'ODD'://奇数选择
          for (var i = 0; i < table.length; i=i+2) {
            table[i].checked === true ? null : table[i].click();
          }
          for (var j = 1; j < table.length; j=j+2) {
            table[j].checked === false ? null : table[j].click();
          }
          break;
        case 'EVEN'://偶数选择
          for (var i = 1; i < table.length; i=i+2) {
            table[i].checked === true ? null : table[i].click();
          }
          for (var j = 0; j < table.length; j=j+2) {
            table[j].checked === false ? null : table[j].click();
          }
          break;
        case 'AGAINST'://反向选择
          for (var i = 0; i < table.length; i++) {
            table[i].click();
          }
          break;
        case 'ONLY':
          for (var i = 1; i < table.length; i++) {
            table[i].checked === false ? null : table[i].click();
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
  color: red;
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
button:disabled {
  color: #6E6E6E;
}
</style>