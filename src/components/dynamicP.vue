/*
* @Author: zuofu
* @Date:   2018-09-13 12:14:00
* @Last Modified by:   zuofu
* @Last Modified time: 2018-09-13 10:20:00
*/
<template>
  <p v-if="type === 'text'"><span>{{data}}</span></p>
  <p v-else-if="type === 'number'"><span>{{data}}</span></p>
  <p v-else-if="type === 'cnumber'"><span>{{$store.state[data]}}</span></p>
  <p v-else-if="type === 'ctext'"><span>{{$store.state[data]}}</span></p>
  <p v-else-if="type === 'date'"><span>{{datenow.date}}</span></br><span>{{datenow.day}}</span></p>
  <p v-else="type === 'time'"><span>{{datenow.time}}</span></p>
</template>

<script>
import nowDate from '../assets/nowDate'
import store from '../store/store'
import { mapState } from 'vuex'

var dates = {date: null, day: null, time: null};

var timefever = setInterval(function(){
  var getDates = nowDate.getDate();
  dates.time = getDates.time;
  dates.day = getDates.day;
  dates.date = getDates.date;
},1000);

export default {
  name: 'dynamicP',
  data () {
    return {
      compentname: 'is dynamicP',
      datenow: dates
    }
  },
  store,
  props: ['data','type'],
  computed: {},
  methods: {
    
  }
}
</script>

<style>
  .h-20 {height: 20px}
  .h-30 {height: 30px}
  .h-40 {height: 40px}
  .h-50 {height: 50px}
  .h-60 {height: 60px}
  .h-70 {height: 70px}
  .h-80 {height: 80px}
  .h-90 {height: 90px}
  .h-100 {height: 100px}
  .h-120 {height: 120px}
  .fz80 {font-size: 80%}
  .fz120 {font-size: 120%}
  .fz150 {font-size: 150%}
  .fz200 {font-size: 200%}
  .fz250 {font-size: 250%}
  .fz300 {font-size: 300%}
  .fz400 {font-size: 400%}
  .fz500 {font-size: 500%}
  .f-red{color:red;}
  .f-red2{color:red;}
  .f-blue{color:blue;}
  .f-yellow{color:yellow;}
  .f-yellow2{color:#FFBF00;}
  .f-white{color:white;}
  .f-green{color:#64FE2E;}
  .bg-blue{background-color: blue;}
  .bg-red{background-color: red;}
  .bg-yellow{background-color: yellow}
  .bg-gray{background-color:#8395a7;}
  .bg-green1{background-color: #00d2d3;}
  .bg-green2{background-color: #81F7BE;}
  .bg-blue1{background-color: #54a0ff;}
  .bg-gray1{background-color: #576574;}
  .bg-gray2{background-color: #A4A4A4;}
</style>
