<template>
  <div id="selects">
    <button v-for="k in rb" class="h-40 col-xs-12" @click="xfunction(k.order)">
      {{k.text}}
    </button>
  </div>
</template>

<script>
import store from '../store/store'

export default {
  name: 'receptionBackstage',
  data () {
    return {

    }
  },
  store,
  computed: {
    rb: function () {
      return this.$store.state.collectMoneyData.receptionBackstage;
    }
  },
  props:[],
  methods: {
    toOrderHandling: function () {
      this.$store.commit('changeTableComponent', 'orderHandling');
    },
    toSubjectTable: function () {
      this.$store.commit('changeTableComponent', 'subjectTable');
    },
    xfunction: function (event) {
      switch (event) {
        case 'BACK':
          this.toOrderHandling();
          break;
        case 'RECEPTION':
          this.toSubjectTable();
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
</style>