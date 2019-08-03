<template>
  <div>

    <div>
      <ZanTab v-bind="tab3" :componentId="'tab3'" @change="handleZanTabChange"/>
    </div>

    <div class="zan-panel" @click="cardClick">
      <div class="zan-card">
        <div class="zan-card__thumb">
          <image class="zan-card__img"
                 src="https://img.yzcdn.cn/upload_files/2016/11/25/FpqPXlrMRjKwJs8VdTu3ZDJCj4j5.jpeg?imagediv2/2/w/200/h/200/q/90/format/jpeg"
                 mode="aspectFit"
          ></image>
        </div>
        <div class="zan-card__detail">
          <div class="zan-card__detail-row">
            <div class="zan-card__right-col">¥ 999.99</div>
            <div class="zan-card__left-col zan-ellipsis--l2">
              红烧牛肉【虚拟商品】【有库存】【有sku】
            </div>
          </div>

          <div class="zan-card__detail-row zan-c-gray-darker">
            <div class="zan-card__right-col">x2</div>
            <div class="zan-card__left-col">
              3000克 50%
            </div>
          </div>
          <div class="zan-card__detail-row zan-c-gray-darker">
            <div class="zan-card__left-col zan-c-red">已发货</div>
          </div>
        </div>
      </div>
    </div>

    <_toast />
  </div>
</template>

<script>
import ZanTab from '../../components/zan/tab'
import { getComponentByTag } from '../../utils/helper'
import ZanToast from '../../components/zan/toast'

export default {
  components: {
    ZanTab,
    _toast: ZanToast
  },
  data () {
    return {
      logs: [],
      tab3: {
        list: [{
          id: '1',
          title: '全部'
        }, {
          id: '2',
          title: '待付款'
        }, {
          id: '3',
          title: '待发货'
        }, {
          id: '4',
          title: '待收货'
        }, {
          id: '5',
          title: '已完成订单'
        }],
        selectedId: '1',
        scroll: false,
        height: 15
      }
    }
  },
  mounted () {
    this.toast = getComponentByTag(this, '_toast')
  },
  created () {
  },
  methods: {
    ...ZanTab.methods,
    handleZanTabChange (e) {
      const {componentId, selectedId} = e
      this[componentId].selectedId = selectedId
      this.toast.showZanToast('选中' + selectedId + '刷新')
    },
    cardClick () {
      this.$commonjs.navigateTo('/pages/goodsDetail/main')
    }
  },
  onLoad () {
    this.$commonjs.setBarTitle('订单列表')
  }
}
</script>

<style>
  .zan-tab__item {
    padding: 0 calc(100vh/48);
  }
</style>
