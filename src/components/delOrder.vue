<template>
  <div>
    <p>确定要删除以下订单？</p>
    <ul>
      <li>
        <span>订单编号：</span><span>xxxxxxxxx</span>
        <span>客户ID：</span><span>xxxxxxxxx</span>
      </li>
    </ul>

    <button @click="">确定</button>
    <button @click="">取消</button>
  </div>
</template>

<script>
export default {
  name: 'delOrder',
  data () {
    return {

    }
  },
  computed: {

  },
  methods: {
    //获取要删除的订单信息
    getOrder: function (event) {
      return true;
    },
    //删除订单
    deleteOrder: function (event) {
      console.log('已删除订单xxxxxxxxx'); 
    }
    ,
    //退出删除订单页面
    toHidden: function (event) {

    }
  }
}
</script>

<style>

</style>