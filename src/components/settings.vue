<template>
  <div>
    <p>is settings</p>
  </div>
</template>

<script>
import store from '../store/store'

export default {
  name: 'settings',
  data () {
    return {}
  },
  store,
  props: [],
  computed: {
    mData: function () {
      return this.$store.state.settingsData;
    }
  },
  components: {}
}
</script>

<style>

</style>