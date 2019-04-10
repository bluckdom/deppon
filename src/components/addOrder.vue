<template>
  <div class="container">
    <h3 class="tc mt20 toptitle">德邦快递下单处理</h3>
    <div class="depponbox mt20 oh">
      <a-row>
        <a-col :xs="24" :lg="8">
          <div class="fieldname">
            <span>*</span>货物名称
          </div>
          <div class="inputbox">
            <a-input :value="cargoName" placeholder="货物名称"></a-input>
          </div>
        </a-col>
        <a-col :xs="24" :lg="8">
          <div class="fieldname">
            <span>*</span>支付方式
          </div>
          <div class="inputbox">
            <a-input :value="payType" placeholder="支付方式"></a-input>
          </div>
        </a-col>
        <a-col :xs="24" :lg="8">
          <div class="fieldname">
            <span>*</span>运输方式
          </div>
          <div class="inputbox">
            <a-input :value="transportType" placeholder="运输方式"></a-input>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'addOrder',
  data () {
    return {
      cargoName: ''
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .toptitle{font-size: 16px}
  .depponbox{
    background-color: #f7f7f7;
  border:1px solid #ddd;
  border-radius: 3px;padding: 20px}
  .fieldname span{
    color: #f00;
  }
  .fieldname{
    text-align: right;
    color: #666;
    font-size: 14px;
    width: 80px;
    font-weight: normal;
    float: left;
    line-height: 32px;
  }
  .inputbox{
    margin-left: 100px;}
</style>
