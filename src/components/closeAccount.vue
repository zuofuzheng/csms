<template>
  <div>
    <p>is closeAccount</p>
  </div>
</template>

<script>
import store from '../store/store'

export default {
  name: 'closeAccount',
  data () {
    return {}
  },
  store,
  props: [],
  computed: {
    mData: function () {
      return this.$store.state.closeAccountData;
    }
  },
  components: {}
}
</script>

<style>

</style>