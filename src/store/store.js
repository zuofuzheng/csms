/*
* @Author: zuofu
* @Date:   2018-09-13 10:20:00
* @Last Modified by:   zuofu
* @Last Modified time: 2018-09-30 19:43:58
*/
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var state = {
  originalPrice: 995,
  unitPrice: 889,
  totolPrice: 444,
  discounts: 106,
  commodityName: '白菜',
  weight: 5,
  money: 555,
  quantity: 1,
  clientNumber: '00000001',
  orderNumber: 1809140001,
  shopID: '001',
  commodityNumber: '0001-180908-AB01',
  tableDate: [{}, {}],
  noticeTitleH1: '公告',
  noticeTitleH2: null,
  noticeTitleH3: '这是一个副标题',
  contentData: [
    {topImge: '../../static/img/1.ico', ptext: 'hahahaha', buttonImge: '../../static/img/1.ico'},
    {topImge: null, ptext: 'wowowowo', buttonImge: null}
  ],
  accessoryData: [
    {icon: '../../static/img/2.ico', labelText: '1'},
    {icon: '../../static/img/3.ico', labelText: '2'},
    {icon: '../../static/img/2.ico', labelText: '3'}
  ],
  //后台管理页面数据
  currentModule: 'collectMoney',
  moduleData: {
    moduleList: {
      collectMoney: {id: 'collect-money', text: '收银', class: 'green4', xfunction: '', index: 1},
      stockControl: {id: 'stock-control', text: '库存管理', class: 'green5', xfunction: '', index: 2},
      commodityControl: {id: 'commodity-control', text: '商品管理', class: 'yellew4', xfunction: '', index: 3},
      clientControl: {id: 'client-control', text: '客户管理', class: 'red4', xfunction: '', index: 4},
      closeAccount : {id: 'close-account', text: '结算', class: 'green5', xfunction: '', index: 5},
      settings: {id: 'settings', text: '设置', class: 'red4', xfunction: '', index: 6}
    }
  },
  collectMoneyData: {
    operator: {
      of1: {id: 'addorder', show: true, text: '增', order: 'ADD'},
      of2: {id: 'alterorder', show: true, text: '改', order: 'ALT'},
      of3: {id: 'deleteorder', show: true, text: '删', order: 'DEL'},
      of4: {id: 'clearorder', show: true, text: '清空', order: 'CLR'},
      of5: {id: 'rollbackorder', show: true, text: '回退', order: 'RBK'},
      of6: {id: 'findorder', show: true, text: '查找', order: 'QUERY'}
    },
    selectF: {
      all: {id: 'all', text: '全选', order: 'ALL'},
      allno: {id: 'allno', text: '不选', order: 'ALLNO'},
      odd: {id: 'odd', text: '奇数', order: 'ODD'},
      even: {id: 'even', text: '偶数', order: 'EVEN'},
      single: {id: 'against', text: '反选', order: 'AGAINST'},
      multiple: {id: 'only/multiple', text: '多选', order: 'ONLY'}
    },
    selectState: false,
    SettlementF: {
      newOrder: {id: 'newOrder', text: '新建', order: 'NEWORDER'},
      settle: {id: 'settle', text: '结账', order: 'SETTLE'},
      hangup: {id: 'hangup', text: '挂单', order: 'HANGUP'}
    },
    receptionBackstage: {
      reception: {id: 'reception', text: '前台', order: 'RECEPTION'},
      back: {id: 'back', text: '后台', order: 'BACK'},
    },
    tableComponent: 'subjectTable',
    rbState: 'reception',
    addDataAffiliation: null
  },
  stockControlData: {

  },
  commodityControlData: {

  },
  clientControlData: {

  },
  closeAccountData: {

  },
  settingsData: {

  },
  popShow: {//弹出页面显示状态
    newOrderShow: false,
    paymentShow: false,
    delOrderShow: false,
    addDataShow: false
  },
  operateCache: {subjectTable: [], orderHandling: []},
  orderList: [
    {orderNumber: 12345678, foundTime: '2018-09-24', clientId: 12312312, number: 12, money: 116, hangupTime: '2018-09-24', state: 'G', remark: '' },
    {orderNumber: 12349876, foundTime: '2018-09-24', clientId: 12315678, number: 7, money: 89, hangupTime: '2018-09-24', state: 'G', remark: '' }
  ],
  currentOrder: {
    orderNumber: 12345678,
    clientId: 12312312,
    datas: [
      {barCode: '010001', commodityNumber: 456123, commodityName: '萝卜', category: '蔬菜', dateProduced: '2018-08-01', dateOverdue: '2019-08-01', describe: '', remark: '', originalP: 5, settlementP: 4.5, weight: 2, unit: 'kg'},
      {barCode: '010002', commodityNumber: 456555, commodityName: '白菜', category: '蔬菜', dateProduced: '2018-08-01', dateOverdue: '2019-08-01', describe: '', remark: '', originalP: 3, settlementP: 2.5, weight: 5, unit: 'kg'},
      {barCode: '010003', commodityNumber: 456454, commodityName: '土豆', category: '蔬菜', dateProduced: '2018-08-01', dateOverdue: '2019-08-01', describe: '', remark: '', originalP: 6, settlementP: 5.5, weight: 1, unit: 'kg'}
    ]
  }
}
const mutations = {
  change (state, name, datanew) {
    state[name] = datanew;
  },
  changeCpt (state, ndata) {
    if(ndata.name !== 'ALL'){
      state.moduleData.cpt[ndata.name] = ndata.data;
    } 
  },
  changecCurrentM (state, data) {
    state.moduleData.cpt[state.moduleData.currentM] = 'navigationClassify';
    state.moduleData.currentM = data;
  },
  changeSelectState (state, data) {
    state.collectMoneyData.selectState = data;
    if (data === true) {
      state.collectMoneyData.selectF.multiple.order = 'MUlTIPLE';
      state.collectMoneyData.selectF.multiple.text = '单选';
    }else{
      state.collectMoneyData.selectF.multiple.order = 'ONLY';
      state.collectMoneyData.selectF.multiple.text = '多选';
    }
  },
  changeTableComponent (state, data) {
    state.collectMoneyData.tableComponent = data;
    if (data === 'subjectTable') {
      state.collectMoneyData.rbState = 'reception';
    }else {
      state.collectMoneyData.rbState = 'backstage';
    }
  },
  changePopShow (state, data) {
    var fx = function (str) {
      state.popShow[str]===true?state.popShow[str]=false:state.popShow[str]=true;
    }
    switch (data) {
      case 'newOrderShow':
        fx('newOrderShow');
        break;
      case 'paymentShow':
        fx('paymentShow');
         break;
      case 'delOrderShow':
        fx('delOrderShow');
        break;
      case 'addDataShow':
        fx('addDataShow');
        break;
    } 
  },
  changeCurrentOrder (state, data) {
    //console.log(data);
    if (data.instructStr) {
      switch (data.instructStr) {
        case 'ADD':
          if (data.datas.barCode.length === 6) {
            var exist = false;
            for (var i = 0; i < state.currentOrder.datas.length; i++) {
              if (state.currentOrder.datas[i].barCode === data.datas.barCode) {
                exist = true;
              }
            }
            !exist ? state.currentOrder.datas.push(data.datas) : console.log('err');
          }else if (data.datas.barCode.length === 13) {
            state.currentOrder.datas.push(data.datas);
          }
          break;
        case 'ALT':
          
          break;
        case 'DEL':
          
          break;
        case 'REPLACE':
          state.currentOrder = data.currentOrder;
          console.log(state.currentOrder);
          break;
        default:

          break;
      }
    }
  },
  changeAddDataAffiliation (state, data) {
    state.collectMoneyData.addDataAffiliation = data;
  },
  deletCurrentOrder (state, data) {
    var dataz = null;
    var list = null;
    var removeDatas = function(from, to) {
      var rest = dataz.slice((to || from) + 1 || dataz.length);
      dataz.length = from < 0 ? dataz.length + from : from;
      dataz.push.apply(dataz, rest);
      console.log(dataz);
    };
    switch (data) {
      case 'reception':
        dataz = state.currentOrder.datas;
        list = state.operateCache.subjectTable;
        break;
      case 'backstage':
        dataz = state.orderList;
        list = state.operateCache.orderHandling;
        console.log(list);
        break;
    }
    for (var i = 0; i < list.length; i++) {
      for (var j = 0; j < dataz.length; j++) {
        switch (data) {
          case 'reception':
            dataz[j].barCode===list[i]?removeDatas(j):console.log('on find!');
            break;
          case 'backstage':
            dataz[j].orderNumber===list[i]?removeDatas(j):console.log('on find!');
            break;
        }
      }
    }  
  },
  changeOperateCache (state, data) {
    var st = null;
    switch (state.collectMoneyData.tableComponent) {
      case 'subjectTable':
        st = state.operateCache.subjectTable;
        break;
      case 'orderHandling':
        st = state.operateCache.orderHandling;
        break;
    }
    var n = st.indexOf(data);
    n===-1?st.push(data):st.splice(n, 1);
  }
}
export default new Vuex.Store({
  state,
  mutations
})
