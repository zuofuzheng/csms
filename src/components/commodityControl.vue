<template>
  <div>
    <p>is commodityControl</p>
  </div>
</template>

<script>
import store from '../store/store'

export default {
  name: 'commodityControl',
  data () {
    return {}
  },
  store,
  props: [],
  computed: {
    mData: function () {
      return this.$store.state.commodityControlData;
    }
  },
  components: {}
}
</script>

<style>

</style>