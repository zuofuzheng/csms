<template>
<div id="addData">
  <p><span>请输入数据</span></p>
  <input type="text" name="addData" autofocus="autofocus" @input="dataQuery(affiliation)">
  <h3 class="row">详情</h3>
  <p id="getDataShow" class="row h-100">信息</p>
  <button id="addDataEnd" @click="quit()">完成</button>
</div>
</template>

<script>
import store from '../store/store'

export default {
  name: 'addData',
  data () {
    return {
      shopCode: 10101001
    }
  },
  store,
  porps: [],
  computed: {
    affiliation: function () {
      return this.$store.state.collectMoneyData.addDataAffiliation;
    },
    rbState: function () {
      return this.$store.state.collectMoneyData.rbState;
    }
  },
  methods: {
    //查询函数
    barcodeQuery: function (event) {
      //查询商品条码信息
      console.log(event);
      var data = null;
      if (event === '123456') {
        data = {
          商品条码: '010005',
          商品代码: '456777',
          商品名称: '萝卜',
          商品类别: '蔬菜',
          生产日期: '2018-08-01',
          过期日期: '2019-08-01',
          商品描述: 'null',
          商品备注: 'null',
          商品原价: 5,
          折扣价格: 4.5,
          商品数量: 2,
          商品单位: 'kg'
        }
      }else if(event === '1111123456789') {
        data = {
          商品条码: '1232521225217',
          商品代码: '456888',
          商品名称: '可乐',
          商品类别: '饮料',
          生产日期: '2018-08-01',
          过期日期: '2019-08-01',
          商品描述: 'null',
          商品备注: 'null',
          商品原价: 3,
          折扣价格: 2.8,
          商品数量: 2,
          商品单位: '瓶'
        }
      }
      return data;
    },
    clientQuery: function () {
      //查询客户信息
    },
    orderQuery: function () {
      //查询订单信息
    },
    creatOrder: function () {
      //创建新订单
    },
    addtoOrder: function (event) {
      //将商品添加到当前订单
      var oneData = {};
      oneData.barCode = event['商品条码'];
      oneData.commodityNumber = event['商品代码'];
      oneData.commodityName = event['商品名称'];
      oneData.category = event['商品类别'];
      oneData.dateProduced = event['生产日期'];
      oneData.dateOverdue = event['过期日期'];
      oneData.describe = event['商品描述'];
      oneData.remark = event['商品备注'];
      oneData.originalP = event['商品原价'];
      oneData.settlementP = event['折扣价格'];
      oneData.weight = event['商品数量'];
      oneData.unit = event['商品单位'];
      var postData = {
        instructStr: 'ADD',
        datas: oneData
      }
      this.$store.commit('changeCurrentOrder', postData);
    },
    dataQuery: function (event) {
      var inputElement = document.getElementsByName('addData')[0];
      var inputValue = inputElement.value;
      var str1 = '';
      var str2 = '';
      this.rbState==='reception'?str2='Data':str2='Order';
      this.affiliation==='ADD'?str1='add':str1='query';
      var str = str1 + str2;
      var datas = null;
      switch (str) {
        case 'addData':
          //6位为内部条码 1~2位为机位代码 3~6位为商品码
          //13位为标准EAN-13码
          if (inputValue.length == 6 || inputValue.length == 13) {
            datas = this.barcodeQuery(inputValue);
            if (datas !== null) {
              this.addtoOrder(datas);
              inputElement.value = null;
              inputElement.focus();
            }
          }
          break;
        case 'addOrder':
          if (inputValue.length == 8) {
            datas = this.clientQuery();
          }
          break;
        case 'queryOrder':
          if (inputValue.length == 12) {
            datas = this.orderQuery();
          }
          break;
        default:

          break;
      }
      if (datas !== null) {
        var dataShow = document.getElementById('getDataShow');
        var html = '';
        //console.log(datas);
        for (var xy in datas) {
          html += '<span class="col-xs-3">'+xy+'</span>'+'<span class="col-xs-3">'+datas[xy]+'</span>';
        }
        dataShow.innerHTML = html;
      }else {
        document.getElementById('getDataShow').innerHTML = '没有该信息！';
      }
    },
    quit: function () {
      document.getElementsByName('addData')[0].value = null;
      document.getElementById('getDataShow').innerHTML = null;
      this.$store.commit('changePopShow', 'addDataShow');
    }
  }
}
</script>

<style scoped>
#addData {
  position: absolute;
  top: 400px;
  left: 500px;
  width: 920px;
  height: 360px;
  padding: 10px 20px;
  font-size: 150%;
  background-color: #3b9a9c;
  color: white;
}
input {
  margin-top: 20px;
  padding: 0 15px;
  border: none;
  outline: none;
  border-radius: 16px;
  color: black;
}
#getDataShow {
  height: 150px;
  padding-left: 110px;
  padding-right: 110px;
  font-size: 80%;
}
button {
  border: none;
  outline: none;
}
.left-radius{
  border-radius: 30px 0 0 30px;
  background-color: #04B404;
}
.right-radius{
  border-radius: 0 30px 30px 0;
  background-color: #A4A4A4;
}
</style>