<template>
  <div ref="index" class="index" style="height: 1600px;">
    <div class="header" :style='{opacity: opacitys}'>
      <div class="zan-cell">
        <div class="zan-cell__bd">
          <div class="zan-font-bold zan-font-14">{{shopName}}</div>
          <div @click.stop="more" class="right-title zan-font-bold zan-font-14">...</div>
        </div>
      </div>
    </div>
    <!-- 轮播图模块 -->
    <div>
      <Swiper :images="images" :autoplay="false"></Swiper>
    </div>

    <!-- 类别选项卡 -->
    <div :class="typeStyle">
      <ZanTab v-bind="tab3" :componentId="'tab3'" @change="handleZanTabChange"></ZanTab>
    </div>

    <div>


      <p>11111</p>
      <p>11111</p>
      <p>11111</p>
      <p>11111</p>
      <p>11111</p>
      <p>11111</p>
      <p>11111</p>
      <p>11111</p>
      <p>11111</p>
      <p>11111</p>
      <p>11111</p>

    </div>


    <_toast />
  </div>
</template>

<script>
  import Swiper from '@/components/wxoriginal/swiper'
  import ZanTab from '../../components/zan/tab'
  import ZanToast from '../../components/zan/toast'
  import { getComponentByTag } from '../../utils/helper'

export default {
  components: {
    Swiper,
    ZanTab,
    _toast: ZanToast
  },
  mounted() {
    this.toast = getComponentByTag(this, '_toast')
  },
  computed: {

  },
  data () {
    return {
      opacitys: 0,
      shopName: '',
      typeStyle: '',
      images: [
        {
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563542244794&di=1017156e46cde9c7842d3a10f9c9eacb&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F402e358052d4d2b38b3f7b329ed4939f62fb6a22.jpg'
        },
        {
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563542297404&di=b67faea6202b39650391b4a66abe8536&imgtype=0&src=http%3A%2F%2Fimg8.zol.com.cn%2Fbbs%2Fupload%2F15082%2F15081006_0800.jpg'
        }
      ],
      tab3: {
        list: [{
          id: '1',
          title: '全部商品'
        }, {
          id: '2',
          title: '超级套餐'
        }, {
          id: '3',
          title: '优惠酬宾'
        }, {
          id: '4',
          title: '含泪甩卖'
        }, {
          id: '5',
          title: '精品套餐'
        }, {
          id: '6',
          title: '精品套餐1'
        }],
        selectedId: '1',
        scroll: true,
        height: 50
      }
    }
  },
  onPageScroll:function(e){
    this.typeStyle=''
    let scroll = e.scrollTop;
    if(scroll < 100){
      this.opacitys = scroll/100
    }else {
      this.opacitys = 1
      this.typeStyle='typeCard'
    }
  },
  methods: {
    ...ZanTab.methods,
    handleZanTabChange (e) {
      const {componentId, selectedId} = e
      this[componentId].selectedId = selectedId
      this.toast.showZanToast('选中' + selectedId + '刷新')
    },
    more() {
      if (this.opacitys != 0){
        this.toast.showZanToast('暂无更多！')
      }
    }
  },
  onLoad() { //页面第一次加载触发
    const param = this.$commonjs.getUrlParams()
    this.shopName = param.name
  },
  onShow() {
    this.typeStyle=''
    this.opacitys = 0
  }
}
</script>

<style>
  .index {
    height: 100vh;
  }
  .header {
    position: fixed;
    width: 100%;
    background-color: rgb(231, 231, 231);
    margin-top: 0;
    overflow: hidden;
    z-index: 1000;

  }
  .right-title {
    position: absolute;
    z-index: 1000;
    right: 15px;
    top: 20%;
    display: inline-block;
    height: 6px;
    width: 20px;
  }
  .typeCard {
    position: fixed;
    top: 40px;
    width: 100%;
    z-index: 1000;
  }
  /*不显示滚动条*/
  ::-webkit-scrollbar{
    width: 0;
    height: 0;
    color: transparent;
  }
</style>
