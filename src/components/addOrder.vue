<template>
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
        |
        <a href="http://fw.sjl.com.cn/knowledgeMap/base/MapView.jsp?mapId=6" target="_blank">帮助中心<a-icon type="question-circle" /></a>
      </div>
    </div>
    <h3 class="tc mt20 toptitle">德邦快递下单处理</h3>
    <div class="oh mt20">
      <a-col :xs="24" :lg="6">
        <div class="fieldname">
          <span>*</span>来源单据类型
        </div>
        <div class="inputbox">
          <a-select v-model="srctype" style="width: 100%" @change="srcpk=''">
            <a-select-option v-for="i in srctypes" :key="i.value">{{i.name}}</a-select-option>
          </a-select>
        </div>
      </a-col>
      <a-col :xs="24" :lg="6" v-if="srctype!== '3'">
        <div class="fieldname">
          <span>*</span>来源单据主键
        </div>
        <div class="inputbox">
          <a-input v-model="srcpk" placeholder="货物名称"></a-input>
        </div>
      </a-col>
    </div>
    <div class="depponbox mt20 oh">
      <a-row>
        <a-col :xs="24" :lg="6">
          <div class="fieldname">
            <span>*</span>货物名称
          </div>
          <div class="inputbox">
            <a-select v-model="cargoName" style="width: 80%;">
              <a-select-option v-for="i in materials" :key="i">{{i}}</a-select-option>
            </a-select>
            <a title="添加货物名称" style="font-size: 16px" href="http://fw.sjl.com.cn/formmode/view/AddFormMode.jsp?customTreeDataId=null&mainid=0&modeId=146&formId=-284&type=1" target="_blank"><a-icon type="plus-circle" /></a>
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
            <span>*</span>代收金额
          </div>
          <div class="inputbox">
            <a-input-number v-model="codValue" placeholder="代收金额"></a-input-number>
          </div>
        </a-col>
        <a-col :xs="24" :lg="6">
          <div class="fieldname">
            <span>*</span>上门接货
          </div>
          <div class="inputbox">
            <div class="mt5"><a-switch defaultChecked v-model="vistReceive"/></div>
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
      <a-row class="mt20">

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
            签收回单
          </div>
          <div class="inputbox">
            <a-select v-model="backSignBill"
                style="width: 100%">
              <a-select-option v-for="i in backSignBills" :key="i.id">{{i.name}}</a-select-option>
            </a-select>
          </div>
        </a-col>
      </a-row>
      <a-row class="mt20">
        <a-col :xs="24">
          <div class="fieldname">
            备注
          </div>
          <div class="inputbox">
            <a-textarea placeholder="备注" v-model="remark" :autosize="{ minRows: 2, maxRows: 3 }" />
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
            <a-select v-model="senderid"
                      showSearch
                      placeholder="请选择发货人"
                      :filterOption="filtersender"
                      labelInValue
                      @change="Changesendr"
                      style="width: 100%">
              <a-select-option v-for="i in hrms" :key="i.id">{{i.name}}<span style="float:right; font-size: 12px">{{i.py}}</span></a-select-option>
            </a-select>
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
        <a-col :xs="24" :lg="6">
          <div class="fieldname">
            销售组织
          </div>
          <div class="inputbox">
            <a-select v-model="pk_org" style="width: 100%" @change="handleSearch">
              <a-select-option v-for="i in pk_orgs" :key="i.pk">{{i.name}}</a-select-option>
            </a-select>
          </div>
        </a-col>
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
            <a-button shape="circle" @click="openDialog" icon="search" />
          </div>
        </a-col>
        <a-col :xs="24" :lg="8">
          <div class="fieldname">
            选择联系人
          </div>
          <div class="inputbox">
            <a-select v-model="pk_linkman" allowClear style="width: 60%;" @change="changelinkman">
              <a-select-option v-for="i in pk_linkmans" :key="i.pk_linkman">{{i.name}}</a-select-option>
            </a-select>
            <a-button-group>
              <a-button type="primary" icon="edit" size="small" @click="openLinkman('editall')" title="修改"/>
              <a-button type="primary" icon="user-add" size="small" @click="openLinkman('add')" title="添加"/>
            </a-button-group>
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
    <a-modal
      :title="linkmantitle"
      :visible="linkmanvisible"
      width="800px"
      @cancel="linkmanvisible=false"
    >
      <table class="oh linkman-border" width="100%">
        <tr>
          <td>
            <div class="fieldname">
              姓名
            </div>
            <div class="inputbox">
              <a-input v-model="editlinkman.name" placeholder="姓名"></a-input>
            </div>
          </td>
          <td>
            <div class="fieldname">
              手机
            </div>
            <div class="inputbox">
              <a-input v-model="editlinkman.cell" placeholder="手机"></a-input>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="fieldname">
              传真
            </div>
            <div class="inputbox">
              <a-input v-model="editlinkman.fax" placeholder="传真"></a-input>
            </div>
          </td>
          <td>
            <div class="fieldname">
              邮箱
            </div>
            <div class="inputbox">
              <a-input v-model="editlinkman.email" placeholder="邮箱"></a-input>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="fieldname">
              电话
            </div>
            <div class="inputbox">
              <a-input v-model="editlinkman.phone" placeholder="电话"></a-input>
            </div>
          </td>
          <td>
            <div class="fieldname">
              职位
            </div>
            <div class="inputbox">
              <a-input v-model="editlinkman.vjob" placeholder="职位"></a-input>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="fieldname">
              省份
            </div>
            <div class="inputbox">
              <a-select v-model="editlinkman.province"
                        allowClear
                        style="width: 100%;"
                        showSearch
                        placeholder="省份"
                        :filterOption="addressfilter"
                        :defaultActiveFirstOption="false"
                        @change="clearcity"
                        :notFoundContent="notFoundContent">
                <a-select-option v-for="i in provinces" :key="i.pk_key">{{i.value}}</a-select-option>
              </a-select>
            </div>
          </td>
          <td>
            <div class="fieldname">
              城市
            </div>
            <div class="inputbox">
              <a-select v-model="editlinkman.city"
                        allowClear
                        style="width: 100%;"
                        showSearch
                        placeholder="城市"
                        :defaultActiveFirstOption="false"
                        optionFilterProp="children"
                        @change="clearvsections"
                        :filterOption="addressfilter"
                        :notFoundContent="notFoundContent">
                <a-select-option v-for="i in citys" :key="i.pk_key">{{i.value}}</a-select-option>
              </a-select>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="fieldname">
              区县
            </div>
            <div class="inputbox">
              <a-select v-model="editlinkman.vsection"
                        allowClear
                        style="width: 100%;"
                        showSearch
                        placeholder="区县"
                        :defaultActiveFirstOption="false"
                        optionFilterProp="children"
                        :filterOption="addressfilter"
                        :notFoundContent="notFoundContent">>
                <a-select-option v-for="i in vsections" :key="i.pk_key">{{i.value}}</a-select-option>
              </a-select>
            </div>
          </td>
          <td>
            <div class="fieldname">
              详细地址
            </div>
            <div class="inputbox">
              <a-input v-model="editlinkman.detailinfo" placeholder="详细地址"></a-input>
            </div>
          </td>
        </tr>
      </table>
      <template slot="footer">
        <a-button key="back" @click="linkmanvisible=false">取消</a-button>
        <a-button type="primary" @click="savelinkman">保存</a-button>
      </template>
    </a-modal>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'addOrder',
  data () {
    return {
      linkmantitle: '',
      notFoundContent: '无数据',
      senderid: undefined,
      srctype: '3',
      srctypes: [],
      srcpk: '',
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
      remark: '',
      transportType: 'RCP',
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
        county: '静安区',
        address: '永兴路258弄1号楼503'
      },
      reciveLoanAccount: '',
      accountName: '',
      insuranceValue: 0,
      hrms: [],
      receiver: {
        name: '',
        mobile: '',
        province: '',
        city: '',
        county: '',
        address: ''
      },
      pk_customer: '',
      custoemrlist: [],
      listvisible: false,
      pagination: {},
      data: [],
      loading: false,
      searchName: '',
      pk_linkman: '',
      pk_linkmans: [],
      addcork: false,
      backSignBills: [
        {id: '0', name: '无需返单'},
        {id: '1', name: '签收单原件返回'},
        {id: '2', name: '客户签收单传真返回'},
        {id: '4', name: '运单到达联传真返回'}
      ],
      backSignBill: '0',
      pk_org: '',
      pk_orgs: [],
      linkmanvisible: false,
      linktype: '',
      editlinkman: {
        cell: '',
        email: '',
        fax: '',
        name: '',
        phone: '',
        vjob: '',
        city: undefined,
        country: '0001Z010000000079UJJ',
        province: undefined,
        vsection: undefined,
        detailinfo: ''
      },
      provinces: [],
      vsections: [],
      citys: [],
      materials: []
    }
  },
  mounted () {
    this.fetch()
    this.$http.get('/test/deppon/getNameinfo.jsp').then(res => {
      res = res.body
      this.srctypes = res.srctypes
      this.hrms = res.hrm
      this.materials = res.materialname
    })
    let srctype = this.$route.query.srctype
    let srcpk = this.$route.query.srcpk
    if (srctype !== undefined && srctype !== '') {
      this.srctype = srctype
      this.srcpk = srcpk
    }
    let pklinkman = this.$route.query.pk_linkman
    if (pklinkman && pklinkman !== '') {
      this.changelinkman(pklinkman)
    }
    // http://localhost/province.json
    this.$http.get('/test/customerVue/getBaseproperty.jsp?type=linkman&name=province').then(res => {
      res = res.body
      this.provinces = res
    }).catch(res => {
      console.log(res.body)
    })
    // /test/customerVue/orgs.jsp
    // http://localhost/orgs.json
    this.$http.get('/test/customerVue/orgs.jsp').then(res => {
      this.pk_orgs = res.body
    }).catch(res => {
      console.log(res)
    })
  },
  watch: {
    $route (to, from) {
      this.srctype = to.query.srctype
      this.srcpk = to.query.srcpk
    }
  },
  methods: {
    addressfilter (input, option) {
      return option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
    },
    savelinkman () {
      if (this.pk_customer) {
        let data = {...this.editlinkman}
        if (data.name.length > 1 && (data.cell.length > 1 || data.phone.length > 1) && data.province && data.city && data.vsection) {
          data.type = this.linktype
          data.pk_customer = this.pk_customer
          if (data.type === 'editall') {
            data.pk_linkman = this.pk_linkman
          }
          this.$http.post('/test/customer/linkman/editlinkman.jsp', data, {emulateJSON: true}).then(res => {
            res = res.body
            if (res.errno === 1) {
              this.$message.success(res.txt)
              this.pk_linkman = res.pk_linkman
              // 重新获取linkman数据
              this.changelinkman(res.pk_linkman)
              // 刷新下拉菜单
              this.$http.get('/test/customerVue/linkman/getLinkmans.jsp?pk_customer=' + this.pk_customer).then(res => {
                res = res.body
                this.pk_linkmans = res.linkman
              })
              this.linkmanvisible = false
            } else {
              this.$message.error(res.txt)
            }
          }).catch(res => {
            console.log(res)
            this.linkmanvisible = false
          })
        } else {
          this.$message.error('姓名、电话(手机)、省份、城市和详细地址必需填写')
        }
      } else {
        this.$message.error('请选择客户')
      }
    },
    clearcity (a) {
      if (!a) {
        this.citys = []
      } else {
        this.$http.get('/test/customerVue/getBaseproperty.jsp?type=linkman&name=city&parent=' + a).then(res => {
          res = res.body
          this.citys = res
        }).catch(res => {
          console.log(res.body)
        })
      }
      this.editlinkman.city = undefined
      this.clearvsections()
    },
    clearvsections (a) {
      if (!a) {
        this.vsections = []
      } else {
        this.$http.get('/test/customerVue/getBaseproperty.jsp?type=linkman&name=city&parent=' + a).then(res => {
          res = res.body
          this.vsections = res
        }).catch(res => {
          console.log(res.body)
        })
      }
      this.editlinkman.vsection = undefined
    },
    openLinkman (a) {
      if (a === 'editall') {
        if (this.pk_linkman && this.pk_linkman.length > 10) {
          this.linkmantitle = '编辑联系人'
          this.linkmanvisible = true
          this.linktype = a
          this.$http.get('/test/customerVue/linkman/getLinkman.jsp?pk=' + this.pk_linkman).then(res => {
            res = res.body.linkman
            this.editlinkman.cell = res.cell
            this.editlinkman.email = res.email
            this.editlinkman.fax = res.fax
            this.editlinkman.name = res.name
            this.editlinkman.phone = res.phone
            this.editlinkman.vjob = res.vjob
            this.editlinkman.city = res.city
            this.editlinkman.country = res.country
            this.editlinkman.province = res.province
            this.editlinkman.vsection = res.vsection
            this.editlinkman.detailinfo = res.detailinfo
            // 重新获取城市信息
            this.$http.get('/test/customerVue/getBaseproperty.jsp?type=linkman&name=city&parent=' + res.province).then(res => {
              res = res.body
              this.citys = res
            }).catch(res => {
              console.log(res.body)
            })
            // 获取区县
            this.$http.get('/test/customerVue/getBaseproperty.jsp?type=linkman&name=city&parent=' + res.city).then(res => {
              res = res.body
              this.vsections = res
            }).catch(res => {
              console.log(res.body)
            })
          })
        } else {
          this.$message.error('请先选择联系人再编辑')
        }
      } else if (a === 'add') {
        if (!this.pk_customer) {
          this.$message.error('请先选择客户')
          return
        }
        this.linkmantitle = '新增联系人'
        this.linktype = a
        this.linkmanvisible = true
        this.editlinkman = {
          cell: '',
          email: '',
          fax: '',
          name: '',
          phone: '',
          vjob: '',
          city: undefined,
          country: '0001Z010000000079UJJ',
          province: undefined,
          vsection: undefined,
          detailinfo: ''
        }
      }
    },
    openDialog () {
      this.listvisible = true
      this.fetch()
    },
    Changesendr (val) {
      let nameinfo = this.hrms.filter(function (obj) {
        return val.key === obj.id
      })
      this.sender.name = nameinfo[0].name
      this.sender.mobile = nameinfo[0].mobile
    },
    filtersender (input, option) {
      console.log(option)
      return option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
        option.componentOptions.children[1].children[0].text.indexOf(input.toLowerCase()) >= 0
    },
    changelinkman (v) {
      if (!v) {
        this.clearAddress()
      } else {
        this.$http.get('/test/customerVue/linkman/getAddress.jsp?pk_linkman=' + v).then(res => {
          res = res.body
          if (res.errno === 1) {
            let mobile = res.cell === '' ? res.phone : res.cell
            this.receiver = {
              name: res.name,
              mobile: mobile,
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
    checkPhone (v) {
      let reg = /^((13[0-9])|(17[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0-9]))\d{8}$|^0\d{2,3}-?\d{7,8}(-\d{1,5}){0,1}$/
      if (reg.test(v)) {
        return true
      } else {
        return false
      }
    },
    addOrder () {
      let sphone = this.sender.mobile
      let rphone = this.receiver.mobile
      if (!this.checkPhone(sphone)) {
        this.$message.error('发件人电话错误')
        return false
      }
      if (!this.checkPhone(rphone)) {
        this.$message.error('收件人电话错误')
        return false
      }

      this.subordedr = true
      let data = {
        cargoName: this.cargoName,
        payType: this.payType,
        transportType: this.transportType,
        totalNumber: this.totalNumber,
        totalVolume: this.totalVolume,
        totalWeight: this.totalWeight,
        codType: this.codType,
        srctype: this.srctype,
        srcpk: this.srcpk,
        codValue: this.codValue,
        vistReceive: this.vistReceive ? 'Y' : 'N',
        reciveLoanAccount: this.reciveLoanAccount,
        accountName: this.accountName,
        insuranceValue: this.insuranceValue,
        receiver: this.receiver,
        sender: this.sender,
        backSignBill: this.backSignBill,
        remark: this.remark,
        pk_org: this.pk_org,
        pk_customer: this.pk_customer,
        pk_linkman: this.pk_linkman
      }
      data.receiver.phone = this.receiver.mobile
      data.sender.phone = this.sender.mobile
      this.$http.post('/test/deppon/addorder.jsp', data).then(res => {
        res = res.body
        if (res.result === 'true') {
          this.$message.success(res.reason)
          window.location.href = 'http://fw.sjl.com.cn/WebReport/ReportServer?reportlet=NC65Report%2FExpress%2FTemplate%2FDepponExpress.cpt&orderid=' + res.modelid
        } else {
          this.$message.error(res.reason)
        }
        this.subordedr = false
      }).catch(res => {
        this.subordedr = false
      })
    },
    handleSearch: _.debounce(function (value) {
      this.$http.get('/test/customerVue/searchCustname.jsp?q=' + value + '&pk_org=' + this.pk_org).then(res => {
        res = res.body
        this.custoemrlist = res
      })
    }, 500),
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
      this.$http.get('/test/customerVue/customerList.jsp', {params: {name: this.searchName, org: this.pk_org, ...params}}).then(res => {
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
  .linkman-border{margin:5px;
    border-bottom: 1px solid #ddd;
    border-right: 1px solid #ddd;}
  .linkman-border td{border:1px solid #ddd;padding: 5px 10px}

</style>
