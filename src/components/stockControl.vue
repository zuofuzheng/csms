<template>
  <div>
    <p>is stockControl</p>
  </div>
</template>

<script>
import store from '../store/store'

export default {
  name: 'stockControl',
  data () {
    return {}
  },
  store,
  props: [],
  computed: {
    mData: function () {
      return this.$store.state.stockControlData;
    }
  },
  components: {}
}
</script>

<style>

</style>