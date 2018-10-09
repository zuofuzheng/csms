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
    selectState: false,
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
    addDataShow: false,
    loginShow: false,
    lookShow: false
  },
  operateCache: {subjectTable: [], orderHandling: []},
  orderList: [//后台订单数据
    {orderNumber: 12345678, foundTime: '2018-09-24 13:15:21', clientId: 12312312, number: 12, money: 116, hangupTime: '2018-09-24 13:15:21', state: 'G', remark: '' },
    {orderNumber: 12349876, foundTime: '2018-09-24 13:15:21', clientId: 12315678, number: 7, money: 89, hangupTime: '2018-09-24 13:15:21', state: 'G', remark: '' }
  ],
  currentOrder: {//当前订单数据
    orderNumber: 12348888,
    clientId: 12312312,
    foundTime: '18-09-24 16:25:15',
    number: 3,
    money: 50,
    datas: [
      {barCode: '010001', commodityNumber: 456123, commodityName: '萝卜', category: '蔬菜', dateProduced: '2018-08-01', dateOverdue: '2019-08-01', describe: '', remark: '', originalP: 5, settlementP: 4.5, weight: 2, unit: 'kg'},
      {barCode: '010002', commodityNumber: 456555, commodityName: '白菜', category: '蔬菜', dateProduced: '2018-08-01', dateOverdue: '2019-08-01', describe: '', remark: '', originalP: 3, settlementP: 2.5, weight: 5, unit: 'kg'},
      {barCode: '010003', commodityNumber: 456454, commodityName: '土豆', category: '蔬菜', dateProduced: '2018-08-01', dateOverdue: '2019-08-01', describe: '', remark: '', originalP: 6, settlementP: 5.5, weight: 1, unit: 'kg'}
    ]
  },
  currentClientDatas: {
    clientId: 12312312,
    grade: 'V1',
    credits: 50,
    registerTime: '2018-09-20',
    effectiveTime: '2020-09-20',
    weixin: null,
    phone: 13522521522,
    address: null,
    nickname: '大包子'
  },
  caches: [//操作缓存
    {change: null, origin: null, data: {}},
    {change: null, origin: null, data: {}},
    {change: null, origin: null, data: {}},
    {change: null, origin: null, data: {}},
    {change: null, origin: null, data: {}},
    {change: null, origin: null, data: {}},
    {change: null, origin: null, data: {}},
    {change: null, origin: null, data: {}},
    {change: null, origin: null, data: {}},
    {change: null, origin: null, data: {}},
    {change: null, origin: null, data: {}},
    {change: null, origin: null, data: {}}
  ],
  log: [//日志
    {user: null, change: null, dataMark: null, description: null},
    {user: null, change: null, dataMark: null, description: null},
    {user: null, change: null, dataMark: null, description: null}
  ],
  user: {
    userName: null,
    pck: null
  }
}
const mutations = {
  changeCpt (state, ndata) {
    if (ndata.name !== 'ALL') {
      state.moduleData.cpt[ndata.name] = ndata.data;
    }
  },
  changecCurrentM (state, data) {
    state.moduleData.cpt[state.moduleData.currentM] = 'navigationClassify';
    state.moduleData.currentM = data;
  },
  changeSelectState (state, data) {
    state.collectMoneyData.selectState = data;
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
    if (data in state.popShow) {
      state.popShow[data]===true?state.popShow[data]=false:state.popShow[data]=true;
    }else {
      console.log('changePopShow data is not in popshow or data is not string');
    }
  },
  changeCurrentOrder (state, data) {
    if (data.instructStr) {
      switch (data.instructStr) {
        case 'ADD':
          if (data.datas.barCode.length === 6) {
            var exist = false;
            for (var i = 0; i < state.currentOrder.datas.length; i++) {
              state.currentOrder.datas[i].barCode === data.datas.barCode ? exist = true : null;
            }
            !exist ? state.currentOrder.datas.push(data.datas) : console.log('err');
          }else if (data.datas.barCode.length === 13) {
            var exist = false;
            for (var i = 0; i < state.currentOrder.datas.length; i++) {
              state.currentOrder.datas[i].barCode === data.datas.barCode ? exist = true : null;
              exist ? state.currentOrder.datas[i].weight += 1 : null;
            }
            !exist ? state.currentOrder.datas.push(data.datas) : null;
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
      //console.log(state.currentOrder);
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
  },
  //将当前订单挂到后台
  currentOrderToBackstage (state, data) {
    var order = {};
    if (state.currentOrder.orderNumber !== null) {
      order.orderNumber = state.currentOrder.orderNumber;
      order.clientId = state.currentOrder.clientId;
      order.foundTime = state.currentOrder.foundTime;
      order.number = state.currentOrder.number;
      order.money = state.currentOrder.money;
      var nowDate = new Date;
      order.hangupTime = nowDate;
      order.remark = '';
      order.state = data.state;
      //？将数据发送到服务器，等待服务器返回执行结果
      //若服务器返回执行成功则将压入后台
      state.orderList.push(order);
      //重置当前订单为待创建状态
      state.currentOrder = {
        orderNumber: null,
        clientId: null,
        foundTime: null,
        money: 0,
        number: 0,
        datas: []
      }
    }
  },
  //更新user暂存数据
  changeUser (state, data) {
    if (data===null) {
      state.user.userName = null;
      state.user.pck = null;
    }else {
      data.userName.length>0 && typeof(data.userName)==='string'?state.user.userName=data.userName:error(()=>{console.log('data type err: userName')});
      data.pck.length>0 ? state.user.pck = data.pck : error(()=>{console.log('data is undefined: pck')});
    }
    console.log(state.user.pck);
  }
}
export default new Vuex.Store({
  state,
  mutations
})
