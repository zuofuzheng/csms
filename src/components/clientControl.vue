<template>
  <div>
    <p>is clientControl</p>
  </div>
</template>

<script>
import store from '../store/store'

export default {
  name: 'clientControl',
  data () {
    return {}
  },
  store,
  props: [],
  computed: {
    mData: function () {
      return this.$store.state.clientControlData;
    }
  },
  components: {}
}
</script>

<style>

</style>