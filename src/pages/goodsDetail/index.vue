<template>
  <div class="index">
    <zanbar v-bind="this.status" :componentId="'status'"/>
    <div class="zan-panel" style="margin-top: 0">
      <div class="zan-cell zan-cell--access" @click="goToShop">
        <div class="zan-cell__bd">注水牛肉店</div>
        <div class="zan-cell__ft"></div>
      </div>
      <div class="zan-cell">
        <div class="zan-cell__bd">时间:<span class="z-left-10">2019-07-25</span></div>
      </div>
      <div class="zan-cell">
        <div class="zan-cell__bd">名称:<span class="z-left-10">大碗牛肉</span></div>
      </div>
      <div class="zan-cell">
        <div class="zan-cell__bd">价格:<span class="z-left-10">￥20</span></div>
      </div>
    </div>
    <div class="zan-panel">
      <div class="zan-cell zan-cell--access" @click="goToShop">
        <div class="zan-cell__bd">订单信息</div>
      </div>
      <div class="zan-cell">
        <div class="zan-cell__bd">联系电话:<span class="z-left-10">15578565689</span></div>
      </div>
      <div class="zan-cell">
        <div class="zan-cell__bd">送货地址:<span class="z-left-10">深圳市龙岗区坂田街道xxxxx辖区1000号</span></div>
      </div>
      <div class="zan-cell">
        <div class="zan-cell__bd">订单号:<span class="z-left-10">201907251000010001</span></div>
      </div>
    </div>
    <div class="zan-cell__bd">
        <div class="zan-font-12 zan-font-bold zan-c-green y-top-10">【退货规则】</div>
        <div class="text-list">
          <div class="zan-font-12"><span>1:</span>收到货之前可以进行退货</div>
          <div class="zan-font-12"><span>2:</span>签收后退货邮费需自付</div>
          <div class="zan-font-12"><span>3:</span>订单完成一个月后非正常损坏不能进行退货</div>
        </div>
    </div>
    <div class="zan-btns y-top-20">
      <button class="zan-btn zan-btn--primary" @click="returnGoods">退货</button>
    </div>

    <ZanDialog v-bind="zanDialog"/>
    <_toast />
  </div>
</template>

<script>
import ZanNoticeBar from '../../components/zan/noticebar'
import ZanDialog from '../../components/zan/dialog'
import { getComponentByTag } from '../../utils/helper'
import ZanToast from '../../components/zan/toast'

export default {
  components: {
    zanbar: ZanNoticeBar,
    ZanDialog,
    _toast: ZanToast
  },
  computed: {
  },
  mounted () {
    this.toast = getComponentByTag(this, '_toast')
  },
  data () {
    return {
      status: {
        text: '已发货',
        animationData: []
      },
      zanDialog: {
        'name': '',
        'show': false,
        'title': '',
        'content': '',
        'buttons': [],
        'buttonsShowVertical': true,
        res: {}
      }
    }
  },
  methods: {
    ...ZanDialog.methods,
    returnGoods: function () {
      const obj = {
        title: '确认退货',
        content: '确认要狠心抛弃臣妾吗',
        showCancel: true
      }
      this.showZanDialog(obj).then(() => {
        this.toast.showZanToast('我会等着您的！')
        this.zanDialog.show = false
      }).catch(() => {
        this.toast.showZanToast('取消退货！')
        this.zanDialog.show = false
      })
    }
  },
  onLoad () {
    this.$commonjs.setBarTitle('订单详情')
  }
}
</script>

<style>
  .index {
    height: 100vh;
    background: #e2e2e2;
  }
  .zan-noticebar {
    color:#ffffff;
    background-color:#aaaaaa;
  }
  .z-left-10 {
    margin-left: 20rpx;
  }
  .y-top-10 {
    margin-top: 20rpx;
  }
  .y-top-20 {
    margin-top: 40rpx;
  }
  .text-list {
    padding:5px 10px;
    line-height:20px;
  }

</style>
