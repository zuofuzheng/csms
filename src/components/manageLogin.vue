<template>
  <div id="login">
    <button class="buttonbg1"></button>
    <button class="buttonbg2"></button>
    <button class="buttonbg3"></button>
  </div>
</template>

<script>
export default {
  name: 'manageLogin',
  data () {
    return {

    }
  }
}
</script>

<style scoped="">
div {
  background-color: #3b9a9c;
}
button {
  display: inline-block;
  height: 40px;
  width: 40px;
  border-radius: 5px;
  margin: 10px 25px;
  border: none;
  outline: none;
  background-size: 40px;
  background-color: rgba(0,0,0,0);
}
.buttonbg1 {
  background-image: url(../../static/img/login.png);
}
.buttonbg2 {
  background-image: url(../../static/img/userlook.png);
}
.buttonbg3 {
  background-image: url(../../static/img/logdown.png);
}
</style>