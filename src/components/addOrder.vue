<template>
  <div class="container">
    <h3 class="tc mt20 toptitle">德邦快递下单处理</h3>
    <div class="depponbox mt20 oh">
      <a-row>
        <a-col :xs="24" :lg="6">
          <div class="fieldname">
            <span>*</span>货物名称
          </div>
          <div class="inputbox">
            <a-input v-model="cargoName" placeholder="货物名称"></a-input>
          </div>
        </a-col>
        <a-col :xs="24" :lg="6">
          <div class="fieldname">
            <span>*</span>支付方式
          </div>
          <div class="inputbox">
            <a-select v-model="paytype" style="width: 100%">
              <a-select-option v-for="i in paytypes" :key="i.id">{{i.txt}}</a-select-option>
            </a-select>
          </div>
        </a-col>
        <a-col :xs="24" :lg="6">
          <div class="fieldname">
            <span>*</span>运输方式
          </div>
          <div class="inputbox">
            <a-select v-model="transportType" style="width: 100%">
              <a-select-option v-for="i in transportTypes" :key="i.id">{{i.txt}}</a-select-option>
            </a-select>
          </div>
        </a-col>
        <a-col :xs="24" :lg="6">
          <div class="fieldname">
            <span>*</span>代收类型
          </div>
          <div class="inputbox">
            <a-select v-model="codType" style="width: 100%">
              <a-select-option v-for="i in codTypes" :key="i.id">{{i.txt}}</a-select-option>
            </a-select>
          </div>
        </a-col>
      </a-row>
      <a-row class="mt20">
        <a-col :xs="24" :lg="6">
          <div class="fieldname">
            <span>*</span>总件数
          </div>
          <div class="inputbox">
            <a-input-number v-model="totalNumber" placeholder="总件数"></a-input-number>
          </div>
        </a-col>
        <a-col :xs="24" :lg="6">
          <div class="fieldname">
            <span>*</span>总体积
          </div>
          <div class="inputbox">
            <a-input-number v-model="totalVolume" placeholder="总体积"></a-input-number>
          </div>
        </a-col>
        <a-col :xs="24" :lg="6">
          <div class="fieldname">
            <span>*</span>总重量
          </div>
          <div class="inputbox">
            <a-input-number v-model="totalWeight" placeholder="总重量"></a-input-number>
          </div>
        </a-col>
        <a-col :xs="24" :lg="6">
          <div class="fieldname">
            <span>*</span>代收金额
          </div>
          <div class="inputbox">
            <a-input-number v-model="codValue" placeholder="代收金额"></a-input-number>
          </div>
        </a-col>
      </a-row>
      <a-row class="mt20">

        <a-col :xs="24" :lg="6">
          <div class="fieldname">
            <span>*</span>上门接货
          </div>
          <div class="inputbox">
            <div class="mt5"><a-switch defaultChecked v-model="vistReceive"/></div>
          </div>
        </a-col>
        <a-col :xs="24" :lg="6" v-if="codValue > 0">
          <div class="fieldname">
            <span>*</span>代收货款客户账号
          </div>
          <div class="inputbox">
            <a-input v-model="reciveLoanAccount" placeholder="代收货款客户账号"></a-input>
          </div>
        </a-col>
        <a-col :xs="24" :lg="12" v-if="codValue > 0">
          <div class="fieldname">
            <span>*</span>代收货款客户开户名
          </div>
          <div class="inputbox">
            <a-input v-model="accountName" placeholder="代收货款客户开户名"></a-input>
          </div>
        </a-col>

      </a-row>
      <div class="mt20 tc toptitle bt1">发货人信息</div>
      <a-row class="mt20">
        <a-col :xs="24" :lg="6">
          <div class="fieldname">
            发货人
          </div>
          <div class="inputbox">
            <a-input v-model="sender.name" placeholder="发货人姓名"></a-input>
          </div>
        </a-col>
        <a-col :xs="24" :lg="6">
          <div class="fieldname">
            手机
          </div>
          <div class="inputbox">
            <a-input v-model="sender.mobile" placeholder="手机"></a-input>
          </div>
        </a-col>
        <a-col :xs="24" :lg="6">
          <div class="fieldname">
            省份
          </div>
          <div class="inputbox">
            <a-input v-model="sender.province" placeholder="省份"></a-input>
          </div>
        </a-col>
        <a-col :xs="24" :lg="6">
          <div class="fieldname">
            城市
          </div>
          <div class="inputbox">
            <a-input v-model="sender.city" placeholder="城市"></a-input>
          </div>
        </a-col>
      </a-row>
      <a-row class="mt20">
        <a-col :xs="24" :lg="6">
          <div class="fieldname">
            区县
          </div>
          <div class="inputbox">
            <a-input v-model="sender.county" placeholder="区县"></a-input>
          </div>
        </a-col>
        <a-col :xs="24" :lg="18">
          <div class="fieldname">
            详细地址
          </div>
          <div class="inputbox">
            <a-input v-model="sender.address" placeholder="详细地址"></a-input>
          </div>
        </a-col>
      </a-row>
      <div class="mt20 tc toptitle bt1">收货人信息</div>
      <a-row class="mt20">
        <a-col :xs="24" :lg="10">
          <div class="fieldname">
            客户名称
          </div>
          <div class="inputbox">
            <a-select
              showSearch
              :value="pk_customer"
              placeholder="请输入客户名称"
              style="width: 80%"
              :defaultActiveFirstOption="false"
              :showArrow="false"
              :filterOption="false"
              @search="handleSearch"
              @change="handleChange"
              :notFoundContent="null"
              allowClear
            >
              <a-select-option v-for="d in custoemrlist" :key="d.pk">{{d.name}}</a-select-option>
            </a-select>
            <a-button shape="circle" icon="search" />
          </div>
        </a-col>
      </a-row>
      <a-row class="mt20">
        <a-col :xs="24" :lg="6">
          <div class="fieldname">
            收货人
          </div>
          <div class="inputbox">
            <a-input v-model="receiver.name" placeholder="发货人姓名"></a-input>
          </div>
        </a-col>
        <a-col :xs="24" :lg="6">
          <div class="fieldname">
            手机
          </div>
          <div class="inputbox">
            <a-input v-model="receiver.mobile" placeholder="手机"></a-input>
          </div>
        </a-col>
        <a-col :xs="24" :lg="6">
          <div class="fieldname">
            省份
          </div>
          <div class="inputbox">
            <a-input v-model="receiver.province" placeholder="省份"></a-input>
          </div>
        </a-col>
        <a-col :xs="24" :lg="6">
          <div class="fieldname">
            城市
          </div>
          <div class="inputbox">
            <a-input v-model="receiver.city" placeholder="城市"></a-input>
          </div>
        </a-col>
      </a-row>
      <a-row class="mt20">
        <a-col :xs="24" :lg="6">
          <div class="fieldname">
            区县
          </div>
          <div class="inputbox">
            <a-input v-model="receiver.county" placeholder="区县"></a-input>
          </div>
        </a-col>
        <a-col :xs="24" :lg="18">
          <div class="fieldname">
            详细地址
          </div>
          <div class="inputbox">
            <a-input v-model="receiver.address" placeholder="详细地址"></a-input>
          </div>
        </a-col>
      </a-row>
      <div class="mt20 tc">
        <a-button type="primary" @click="addOrder">提交订单</a-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'addOrder',
  data () {
    return {
      cargoName: '',
      paytype: '2',
      paytypes: [
        {id: '1', txt: '收货人付款（到付）'},
        {id: '2', txt: '发货人付款（月结）'}
      ],
      transportType: 'PACKAGE',
      transportTypes: [
        {id: 'PACKAGE', txt: '标准快递'},
        {id: 'RCP', txt: '360特惠件'},
        {id: 'EPEP', txt: '电商尊享'},
        {id: 'DEAP', txt: '特准快件 '},
        {id: 'ZBRH', txt: '3.60特重件'},
        {id: 'NZBRH', txt: '重包入户'},
        {id: 'ZBTH', txt: '重包特惠'},
        {id: 'CITYPIECE', txt: '同城件'}
      ],
      totalNumber: 1,
      totalVolume: 0,
      totalWeight: 0,
      codType: '3',
      codTypes: [
        {id: '1', txt: '即日退'},
        {id: '3', txt: '三日退'}
      ],
      codValue: 0,
      vistReceive: true,
      sender: {
        name: '姓名',
        mobile: '1500000000',
        province: '上海市',
        city: '上海市',
        county: '',
        address: ''
      },
      reciveLoanAccount: '',
      accountName: '',
      receiver: {
        name: '姓名1',
        mobile: '150000111',
        province: '上海市11',
        city: '上海市11',
        county: '',
        address: ''
      },
      pk_customer: undefined,
      custoemrlist: []
    }
  },
  computed: {
  },
  methods: {
    addOrder () {
      alert(12)
    },
    handleSearch (value) {
      // http://localhost/orgs.json
      this.$http.get('http://localhost/orgs.json').then(res => {
        res = res.body
        this.custoemrlist = res
      })
    },
    handleChange (value) {
      this.pk_customer = value
      console.log(value)
    }
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
  .bt1{
    border-top: 1px solid #ddd;
    padding-top: 10px;}
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
  .inputbox .ant-input-number,.inputbox select{
    width: 100%;}
</style>
