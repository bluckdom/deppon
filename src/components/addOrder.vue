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
            <a-select v-model="payType" style="width: 100%">
              <a-select-option v-for="i in payTypes" :key="i.id">{{i.txt}}</a-select-option>
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
        <a-col :xs="24" :lg="6">
        <div class="fieldname">
          保价金额
        </div>
        <div class="inputbox">
          <a-input-number v-model="insuranceValue" placeholder="保价金额"></a-input-number>
        </div>
        </a-col>
      </a-row>
      <div class="mt20 tc toptitle "><a-divider>发货人信息</a-divider></div>
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
      <div class="mt20 tc toptitle "><a-divider>收货人信息</a-divider></div>
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
              <a-select-option v-for="d in custoemrlist" :key="d.pk">{{d.value}}</a-select-option>
            </a-select>
            <a-button shape="circle" @click="listvisible=true" icon="search" />
          </div>
        </a-col>
        <a-col :xs="24" :lg="6">
          <div class="fieldname">
            选择联系人
          </div>
          <div class="inputbox">
            <a-select v-model="pk_linkman" allowClear style="width: 100%" @change="changelinkman">
              <a-select-option v-for="i in pk_linkmans" :key="i.pk_linkman">{{i.name}}</a-select-option>
            </a-select>
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
        <a-button type="primary" @click="addOrder" :loading="subordedr">提交订单</a-button>
      </div>
    </div>
    <a-modal
      title="请选择客户"
      :visible="listvisible"
      @cancel="listvisible=false"
    >
      <template slot="footer">
        <a-button key="back" @click="listvisible=false">取消</a-button>
      </template>
      <div class="oh">
        <a-input v-model="searchName" placeholder="客户名称" style="width: 80%"></a-input>
        <a-button @click="fetch" type="primary" icon="search" />
      </div>
      <a-table :columns="columns"
               :rowKey="record => record.pk_customer"
               :dataSource="data"
               :pagination="pagination"
               @change="handleTableChange"
               :loading="loading"
               :rowClassName="() => {return 'custtrname'}"
               :customRow="RowMethod"
      >
      </a-table>
    </a-modal>
  </div>
</template>

<script>
export default {
  name: 'addOrder',
  data () {
    return {
      subordedr: false,
      columns: [{
        title: '名称',
        dataIndex: 'name'
      }, {
        title: '编码',
        dataIndex: 'code'
      }],
      cargoName: '',
      payType: '2',
      payTypes: [
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
        name: '',
        mobile: '',
        province: '上海',
        city: '上海市',
        county: '',
        address: ''
      },
      reciveLoanAccount: '',
      accountName: '',
      insuranceValue: 0,
      receiver: {
        name: '',
        mobile: '',
        province: '',
        city: '',
        county: '',
        address: ''
      },
      pk_customer: undefined,
      custoemrlist: [],
      listvisible: false,
      pagination: {},
      data: [],
      loading: false,
      searchName: '',
      pk_linkman: undefined,
      pk_linkmans: []
    }
  },
  mounted () {
    this.fetch()
    this.$http.get('/test/deppon/getNameinfo.jsp').then(res => {
      res = res.body
      this.sender.name = res.name
      this.sender.mobile = res.mobile
    })
  },
  methods: {
    changelinkman (v) {
      if (!v) {
        this.clearAddress()
      } else {
        this.$http.get('/test/customerVue/linkman/getAddress.jsp?pk_linkman=' + v).then(res => {
          res = res.body
          if (res.errno === 1) {
            this.receiver = {
              name: res.name,
              mobile: res.phone,
              province: res.province,
              city: res.city,
              county: res.vsection,
              address: res.detailinfo
            }
          } else {
            this.$message.error('无数据')
          }
        })
      }
    },
    RowMethod (record) {
      return {
        on: {
          click: (e) => {
            this.pk_customer = record.pk_customer
            this.custoemrlist = [
              {
                value: record.name,
                pk: record.pk_customer
              }
            ]
            this.handleChange(record.pk_customer)
            this.listvisible = false
          }
        }
      }
    },
    addOrder () {
      this.subordedr = true
      let data = {
        cargoName: this.cargoName,
        payType: this.payType,
        transportType: this.transportType,
        totalNumber: this.totalNumber,
        totalVolume: this.totalVolume,
        totalWeight: this.totalWeight,
        codType: this.codType,
        codValue: this.codValue,
        vistReceive: this.vistReceive ? 'Y' : 'N',
        reciveLoanAccount: this.reciveLoanAccount,
        accountName: this.accountName,
        insuranceValue: this.insuranceValue,
        receiver: this.receiver,
        sender: this.sender
      }

      this.$http.post('/test/deppon/addorder.jsp', data).then(res => {
        res = res.body
        if (res.result === 'true') {
          window.location.reload()
        }
        this.$message.error(res.reason)
        this.subordedr = false
      })
    },
    handleSearch (value) {
      // http://localhost/orgs.json
      // /test/customerVue/searchCustname.jsp
      this.$http.get('/test/customerVue/searchCustname.jsp?q=' + value).then(res => {
        res = res.body
        this.custoemrlist = res
      })
    },
    handleChange (value) {
      this.clearCustomerinfo()
      if (!value) {
        this.pk_customer = ''
        return
      }
      this.pk_customer = value
      this.pk_linkmans = []
      this.pk_linkman = undefined
      this.$http.get('/test/customerVue/linkman/getLinkmans.jsp?pk_customer=' + value).then(res => {
        res = res.body
        this.pk_linkmans = res.linkman
        this.listvisible = false
      })
    },
    clearCustomerinfo () {
      this.pk_linkman = undefined
      this.pk_linkmans = []
      this.clearAddress()
    },
    clearAddress () {
      this.receiver = {
        name: '',
        mobile: '',
        province: '',
        city: '',
        county: '',
        address: ''
      }
    },
    handleTableChange (pagination) {
      this.pagination = pagination
      this.fetch({
        pagesize: 10,
        page: pagination.current
      })
    },
    fetch (params = {}) {
      this.loading = true
      // http://localhost/List.json
      // /test/customerVue/customerList.jsp
      this.$http.get('/test/customerVue/customerList.jsp', {params: {name: this.searchName, ...params}}).then(res => {
        res = res.body
        const pagination = {...this.pagination}
        pagination.total = res.num
        this.loading = false
        this.data = res.cust
        this.pagination = pagination
      })
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
  .ant-table-tbody > tr.custtrname > td{padding: 5px 10px}
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
  .loadingbox{
    position: fixed;
    top:0;
    left:0;
    text-align: center;
  width: 100%;
    z-index: 111;
    background:rgba(0,0,0,0.8);
  height:100%;}
  .loadingbox > div{
    position: relative;top:50%;margin-top: -15px}

</style>
