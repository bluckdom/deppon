r<template>
  <div class="container">
    <div class="padding15 mt15 container-fluid">
      <a-modal
        v-model="addcork"
        width="80%"
        title="添加协作"
      >
        <iframe src="/cowork/AddCoWork_other.jsp?from=other&typeid=24" frameborder="0" width="100%" height="500"></iframe>
        <template slot="footer">
          <a-button @click="addcork=false">取消</a-button>
        </template>
      </a-modal>
      <div class="fr addso">
        <a @click="addcork = true">新增协作</a>
        |
        <a href="/cowork/CoworkMain.jsp?layout=1&mainid=&typeid=24&type=all&jointype=&labelid=&name=&coworkid=" target="_blank">报价单功能讨论<a-icon type="question-circle" /></a>
      </div>
    </div>
    <h3 class="tc mt10 toptitle">德邦快递单信息</h3>
    <div class="oh mt10">
      <a-col :xs="24" :lg="6">
        <div class="fieldname">
          来源单据类型
        </div>
        <div class="inputbox">
          {{order.srctype}}
        </div>
      </a-col>
      <a-col :xs="24" :lg="6">
        <div class="fieldname">
          来源单据主键
        </div>
        <div class="inputbox">
          {{order.srcpk}}
        </div>
      </a-col>
      <a-col :xs="24" :lg="6">
        <div class="fieldname">
          运单号
        </div>
        <div class="inputbox">
          {{order.mailNo}}
        </div>
      </a-col>
    </div>
    <div class="depponbox mt10 oh" v-if="order.errno === 1">
      <a-row>
        <a-col :xs="24" :lg="6">
          <div class="fieldname">
            货物名称
          </div>
          <div class="inputbox">
            {{order.cargoName}}
          </div>
        </a-col>
        <a-col :xs="24" :lg="6">
          <div class="fieldname">
            支付方式
          </div>
          <div class="inputbox">
            {{order.payType}}
          </div>
        </a-col>
        <a-col :xs="24" :lg="6">
          <div class="fieldname">
            运输方式
          </div>
          <div class="inputbox">
            {{order.transportType}}
          </div>
        </a-col>
        <a-col :xs="24" :lg="6">
          <div class="fieldname">
            代收类型
          </div>
          <div class="inputbox">
            {{order.codType}}
          </div>
        </a-col>
      </a-row>
      <a-row class="mt10">
        <a-col :xs="24" :lg="6">
          <div class="fieldname">
            总件数
          </div>
          <div class="inputbox">
            {{order.totalNumber}}
          </div>
        </a-col>
        <a-col :xs="24" :lg="6">
          <div class="fieldname">
            总体积
          </div>
          <div class="inputbox">
            {{order.totalVolume}}
          </div>
        </a-col>
        <a-col :xs="24" :lg="6">
          <div class="fieldname">
            总重量
          </div>
          <div class="inputbox">
            {{order.totalWeight}}
          </div>
        </a-col>
        <a-col :xs="24" :lg="6">
          <div class="fieldname">
            代收金额
          </div>
          <div class="inputbox">
            {{order.codValue}}
          </div>
        </a-col>
      </a-row>
      <a-row class="mt10">
        <a-col :xs="24" :lg="6">
          <div class="fieldname">
            上门接货
          </div>
          <div class="inputbox">
            <div class="mt5"> {{order.vistReceive}}</div>
          </div>
        </a-col>
        <a-col :xs="24" :lg="6">
          <div class="fieldname">
            代收款客户账号
          </div>
          <div class="inputbox">
            {{order.reciveLoanAccount}}
          </div>
        </a-col>
        <a-col :xs="24" :lg="12">
          <div class="fieldname">
            代收款开户名
          </div>
          <div class="inputbox">
            {{order.accountName}}
          </div>
        </a-col>
      </a-row>
      <a-row>
        <a-col :xs="24" :lg="6">
          <div class="fieldname">
            保价金额
          </div>
          <div class="inputbox">
            {{order.insuranceValue}}
          </div>
        </a-col>
        <a-col :xs="24" :lg="6">
          <div class="fieldname">
            签收回单
          </div>
          <div class="inputbox">
            {{order.backSignBill}}
          </div>
        </a-col>
      </a-row>
      <div class="mt10 tc toptitle "><a-divider>发货人信息</a-divider></div>
      <a-row class="mt10">
        <a-col :xs="24" :lg="6">
          <div class="fieldname">
            发货人
          </div>
          <div class="inputbox">
            {{order.sender.name}}
          </div>
        </a-col>
        <a-col :xs="24" :lg="6">
          <div class="fieldname">
            手机
          </div>
          <div class="inputbox">
            {{order.sender.mobile}}
          </div>
        </a-col>
        <a-col :xs="24" :lg="6">
          <div class="fieldname">
            省份
          </div>
          <div class="inputbox">
            {{order.sender.province}}
          </div>
        </a-col>
        <a-col :xs="24" :lg="6">
          <div class="fieldname">
            城市
          </div>
          <div class="inputbox">
            {{order.sender.city}}
          </div>
        </a-col>
      </a-row>
      <a-row class="mt10">
        <a-col :xs="24" :lg="6">
          <div class="fieldname">
            区县
          </div>
          <div class="inputbox">
            {{order.sender.county}}
          </div>
        </a-col>
        <a-col :xs="24" :lg="18">
          <div class="fieldname">
            详细地址
          </div>
          <div class="inputbox">
            {{order.sender.address}}
          </div>
        </a-col>
      </a-row>
      <div class="mt10 tc toptitle "><a-divider>收货人信息</a-divider></div>
      <a-row class="mt10">
        <a-col :xs="24" :lg="6">
          <div class="fieldname">
            收货人
          </div>
          <div class="inputbox">
            {{order.receiver.name}}
          </div>
        </a-col>
        <a-col :xs="24" :lg="6">
          <div class="fieldname">
            手机
          </div>
          <div class="inputbox">
            {{order.receiver.mobile}}
          </div>
        </a-col>
        <a-col :xs="24" :lg="6">
          <div class="fieldname">
            省份
          </div>
          <div class="inputbox">
            {{order.receiver.province}}
          </div>
        </a-col>
        <a-col :xs="24" :lg="6">
          <div class="fieldname">
            城市
          </div>
          <div class="inputbox">
            {{order.receiver.city}}
          </div>
        </a-col>
      </a-row>
      <a-row class="mt10">
        <a-col :xs="24" :lg="6">
          <div class="fieldname">
            区县
          </div>
          <div class="inputbox">
            {{order.receiver.county}}
          </div>
        </a-col>
        <a-col :xs="24" :lg="18">
          <div class="fieldname">
            详细地址
          </div>
          <div class="inputbox">
            {{order.receiver.address}}
          </div>
        </a-col>
      </a-row>
      <div class="mt10 tc">
        <a :href="printorder()" class="ant-btn ant-btn-primary" target="_blank">打印</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'addOrder',
  data () {
    return {
      order: {},
      id: '',
      addcork: false
    }
  },
  mounted () {
    this.id = this.$route.query.id
    this.getOrder()
  },
  watch: {
    $route (to, from) {
      this.id = to.query.id
      this.getOrder()
    }
  },
  methods: {
    printorder () {
      return '/test/deppon/getorder.jsp?id=' + this.id + '&print=1'
    },
    getOrder () {
      // 获取快递单数据
      // /test/deppon/getOrder.jsp
      // http://localhost/orderinfo.json
      this.$http.get('/test/deppon/getOrder.jsp?id=' + this.id).then(res => {
        res = res.body
        if (res.errno === 1) {
          this.order = res
        } else {
          this.$message.error(res.txt)
          this.order = {}
        }
      })
    }
  }
}
</script>
<style scoped>
  .toptitle{font-size: 16px}
  .depponbox{
    background-color: #f7f7f7;
    border:1px solid #ddd;
    border-radius: 3px;padding: 20px}
  .fieldname span{
    color: #f00;
  }
  .ant-table-tbody > tr.custtrname > td{padding: 5px 10px}
  .fieldname{
    text-align: right;
    color: #666;
    font-size: 14px;
    width: 100px;
    font-weight: normal;
    float: left;
    line-height: 32px;
  }
  .inputbox{
    margin-left: 110px;
  line-height: 32px;
  font-size: 14px}
  .loadingbox > div{
    position: relative;top:50%;margin-top: -15px}
</style>
