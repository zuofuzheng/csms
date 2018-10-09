<template>
  <div id="selects">
    <button v-for="k in rbs"
      class="h-40 col-xs-12"
      :disabled="disableStatus(k)"
      @click="xfunction(k)"
      @mouseout="cutClass('mouseIn')"
      @mouseover="cutClass('mouseIn')"
    >
      {{k.text}}
    </button>
  </div>
</template>

<script>
import store from '../store/store'
import commonality from '../assets/commonalityFn.js'

export default {
  name: 'receptionBackstage',
  data () {
    return {
      rbs: {
        reception: {id: 'reception', text: '前台', order: 'RECEPTION', disable: true},
        back: {id: 'back', text: '后台', order: 'BACK', disable: false}
      }
    }
  },
  store,
  computed: {
    rb: function () {
      return this.$store.state.collectMoneyData.rbState;
    },
    disable: function () {
      return this.$store.state.user.pck ? false : true;
    }
  },
  props:[],
  methods: {
    cutClass: function (class1, class2) {
      class2 ? commonality.cutClass(event, class1, class2) : commonality.cutClass(event, class1);
    },
    disableStatus: function (event) {
      return this.disable ? this.disable : event.disable;
    },
    changerbs: function () {
      this.rbs.back.disable = !this.rbs.back.disable;
      this.rbs.reception.disable = !this.rbs.reception.disable;
    },
    toOrderHandling: function (event) {
      this.$store.commit('changeTableComponent', 'orderHandling');
      this.changerbs();
    },
    toSubjectTable: function (event) {
      this.$store.commit('changeTableComponent', 'subjectTable');
      this.changerbs();
    },
    xfunction: function (els) {
      commonality.cutClass(event, 'mouseIn');
      switch (els.order) {
        case 'BACK':
          this.toOrderHandling(event);
          break;
        case 'RECEPTION':
          this.toSubjectTable(event);
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
  border: 2px solid #D25565;
  outline:none;
  color: #D25565;
  font-size: 120%;
  background-color: rgba(0,0,0,0);
  padding: 0;
  margin: 0 0px 10px 0px;
}
div {
  box-sizing:border-box;
  height: 180px;
  margin: 10px;
}
button:disabled {
  color: #6E6E6E;
}
</style>