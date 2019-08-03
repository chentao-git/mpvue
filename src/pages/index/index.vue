<template>
  <div class="index">
    <!-- 搜索按钮 -->
    <div class="index-title">
      <!--<div class="search-btn" @click="search">搜索</div>-->
      <dl class="ub-box ub-ver z-padding-v-10-px" @click="search" style="background:#fff;">
        <dd class="ub-flex-1 ub-box ub-ver">
          <div class="search ub-box ub-ver-v z-width-90-percent z-box-sizing-border" style="height: 60rpx;width: 90%;">
            <i class="iconfont icon-sousuo z-color-666 z-font-size-16"></i>
            <span class="z-font-size-14 z-color-999 z-margin-left-8-px">请输入商家名、品类或者商圈...</span>
          </div>
        </dd>
      </dl>
    </div>

    <!-- 轮播图模块 -->
    <Swiper :images="images"></Swiper>
    <div class="zan-panel" style="margin-top: 1px;">
      <div v-for="icon in icons" :key="icon" class="icon-wrap" @click.stop="iconJump">
        <div class="zan-icon" :class="'zan-icon-' + icon"  style="color: #ff4343;"></div>
        <div class="icon-classname">{{icon}}</div>
      </div>
    </div>

    <!-- 快捷导航模块 -->
    <div class="zan-panel" style="margin-top: 0;border-top: 3px solid #e6e6e6">
      <div class="zan-row">
        <div class="zan-col zan-col-8" @click="fastEntry">
          <div class="col-content">
            <span class="col-ti zan-font-14 zan-font-bold zan-c-blue">超值套餐</span>
            <span class="col-te zan-font-10 zan-c-black">欢迎抢购</span>
            <img class="col-img" src="/static/images/hanbao.png">
          </div>
        </div>
        <div class="zan-col zan-col-8" @click="fastEntry">
          <div class="col-content">
            <span class="col-ti zan-font-14 zan-font-bold zan-c-blue">增肥套餐</span>
            <span class="col-te zan-font-10 zan-c-black">欢迎抢购</span>
            <img class="col-img" src="/static/images/gutou.png">
          </div>
        </div>
        <div class="zan-col zan-col-8" style="border-right: 0">
          <div class="col-content" @click="fastEntry">
            <span class="col-ti zan-font-14 zan-font-bold zan-c-blue">减肥套餐</span>
            <span class="col-te zan-font-10 zan-c-black">欢迎抢购</span>
            <img class="col-img" src="/static/images/pan.png">
          </div>
        </div>
      </div>
    </div>

    <!-- 卡片选择模块 -->
    <div class="zan-panel" v-for="(item, index) in shopList" :key="index" @click="cardClick" style="border-top: 3px solid #e6e6e6; margin-top: 0;">
      <div class="zan-card">
        <div class="zan-card__thumb">
          <img class="zan-card__img"
                 :src="item.shopImg"
                 mode="aspectFit"
          >
        </div>
        <div class="zan-card__detail">
          <div class="zan-card__detail-row">
            <div class="ellipsis-name zan-font-16 zan-font-bold">
              {{item.shopName}}
            </div>
          </div>
          <div class="zan-card__detail-row zan-c-gray-darker">

            <div v-if="item.shopBiDa" class="zan-card__right-col"><capsule v-bind="capsuleData" ></capsule></div>
            <div class="zan-card__left-col">
              <img src="/static/images/xingxing.png" style="width: 26rpx;height: 26rpx;">
              <span class="zan-font-12 z-margin-left-4-px score-color">{{item.shopScore}}</span>
              <span class="zan-font-12 z-margin-left-8-px">月售{{item.shopMonthSale}}</span>
            </div>
          </div>
          <div class="zan-card__detail-row zan-c-gray-darker">
            <div class="zan-card__right-col">
              <span class="zan-font-12">{{item.distributionTime}}</span>
              <span class="zan-font-12 z-margin-left-15-px z-margin-right-10-px">{{item.distributionDistance}}km</span>
            </div>
            <div class="zan-card__left-col">
              <span class="zan-font-12">起送￥{{item.shopFloorPrice}}</span>
              <span class="zan-font-12 z-margin-left-4-px">配送￥{{item.shopNowDistributionPrice}}</span>
              <span class="zan-font-12 zan-text-deleted z-margin-left-4-px">￥{{item.shopOriginDistributionPrice}}</span>
            </div>
          </div>
          <div class="zan-card__detail-row zan-c-gray-darker">
              <view class="zan-tag shop-motto">"{{item.shopMotto}}"</view>
          </div>
          <div v-if="item.shopActivity.length > 0" class="zan-card__detail-row zan-c-gray-darker">
              <span v-for="(activity, num) in item.shopActivity" :key="num">
                <view v-if="num == 0" class="zan-tag zan-tag--danger zan-tag--plain">{{activity.content}}</view>
                <view v-else class="zan-tag zan-tag--danger zan-tag--plain z-margin-left-4-px">{{activity.content}}</view>
              </span>
          </div>
        </div>
      </div>
    </div>

    <div class="userinfo-nickname">
      <card :text="userInfo.nickName"></card>
    </div>
    <_toast />
  </div>
</template>

<script>
import card from '@/components/card'
import Swiper from '@/components/wxoriginal/swiper'
import capsule from '@/components/zan/capsule'
import { getComponentByTag } from '../../utils/helper'
import ZanToast from '../../components/zan/toast'

export default {
  components: {
    card,
    Swiper,
    capsule,
    _toast: ZanToast
  },
  mounted () {
    this.toast = getComponentByTag(this, '_toast')
  },
  data () {
    return {
      motto: '不一样的烟火，自己看着都上火！',
      shopList: [
        {
          shopImg: '/static/images/jirou.jpg',
          shopName: '终极叉烧注水鸡肉专坑老客百年老店',
          shopBiDa: true,
          shopScore: '6.6',
          shopMonthSale: '300',
          distributionTime: '40分钟',
          distributionDistance: '0.9',
          shopFloorPrice: '30',
          shopNowDistributionPrice: '0',
          shopOriginDistributionPrice: '1',
          shopMotto: '开瓶盖终身谢谢惠顾!',
          shopActivity: [
            {
              content: '30减15'
            },
            {
              content: '60减25'
            },
            {
              content: '90减35'
            }
          ]
        },
        {
          shopImg: '/static/images/pmTea.jpg',
          shopName: '翻水水下午茶',
          shopBiDa: true,
          shopScore: '4.4',
          shopMonthSale: '250',
          distributionTime: '40分钟',
          distributionDistance: '1.7',
          shopFloorPrice: '20',
          shopNowDistributionPrice: '2',
          shopOriginDistributionPrice: '4',
          shopMotto: '你爷爷下棋必被人指指点点!',
          shopActivity: [
            {
              content: '25减15'
            },
            {
              content: '60减25'
            },
            {
              content: '80减35'
            }
          ]
        },
        {
          shopImg: '/static/images/timg.jpg',
          shopName: '没有珍珠的珍珠奶茶店',
          shopBiDa: true,
          shopScore: '4.7',
          shopMonthSale: '250',
          distributionTime: '40分钟',
          distributionDistance: '2.1',
          shopFloorPrice: '20',
          shopNowDistributionPrice: '3',
          shopOriginDistributionPrice: '5',
          shopMotto: '你妈买菜必被超级加倍!',
          shopActivity: [
            {
              content: '30减15'
            },
            {
              content: '65减30'
            },
            {
              content: '85减35'
            }
          ]
        },
        {
          shopImg: '/static/images/tao.jpg',
          shopName: '原滋原味900年份蟠桃',
          shopBiDa: false,
          shopScore: '4.1',
          shopMonthSale: '50',
          distributionTime: '2天',
          distributionDistance: '200',
          shopFloorPrice: '200',
          shopNowDistributionPrice: '10',
          shopOriginDistributionPrice: '50',
          shopMotto: '你爸斗地主34568必没有7!',
          shopActivity: [
            {
              content: '50减15'
            },
            {
              content: '70减25'
            },
            {
              content: '100减35'
            }
          ]
        }
      ],
      capsuleData: {
        leftText: '准时达',
        rightText: '使命必达',
        color: '#38f',
        onclick: null
      },
      images: [
        {
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563542244794&di=1017156e46cde9c7842d3a10f9c9eacb&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F402e358052d4d2b38b3f7b329ed4939f62fb6a22.jpg'
        },
        {
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563542297404&di=b67faea6202b39650391b4a66abe8536&imgtype=0&src=http%3A%2F%2Fimg8.zol.com.cn%2Fbbs%2Fupload%2F15082%2F15081006_0800.jpg'
        }
      ],
      icons: [
        'new-arrival',
        'hot-sale',
        'phone',
        'completed',
        'value-card',
        'certificate'
      ],
      userInfo: {
        nickName: '卖女孩的小火柴',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      }
    }
  },
  methods: {
    search (ev) {
      const url = '/pages/search/main'
      this.$commonjs.navigateTo(url)
    },
    iconJump () {
      this.toast.showZanToast('暂时开发中！')
    },
    cardClick () {
      this.toast.showZanToast('程序员已被枪毙，暂无人开发！')
    },
    fastEntry () {
      this.toast.showZanToast('屏幕点碎也不给你吃！')
    }
  },
  created () {
    // let app = getApp()
  },
  onShow () { // 页面加载就触发 onLoad 页面第一次加载触发
  },
  onLoad () {
    const param = this.$commonjs.getUrlParams()
    if (param.id !== undefined && param.id !== 'undefined') {
      console.log('onShow id:' + param.id)
      this.toast.showZanToast('搜索id为' + param.id + '结果显示')
    }
  }
}
</script>

<style scoped>
  @import "../../css/search/search.css";
  @import "../../css/search/iconfont.css";

  .zan-col {
    line-height: 15rpx;
    height: 200rpx;
    text-align: center;
    font-size: 12px;
    color: #fff;
    border-right:1rpx solid #e6e6e6;
  }
  .col-content {
    margin: 0 auto;
    width: 80%;
    height: 100%;
  }
  .col-ti {
    display:block;
    width:100%;
    position:relative;
    top:28rpx;
  }
  .col-te {
    display:block;
    width:100%;
    position:relative;
    top:50rpx;
  }
  .col-img {
    width: 110rpx;
    height: 90rpx;
    position:relative;
    top:60rpx;
  }
  .ellipsis-name {
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .score-color {
    color: #f4650f;
  }
  .shop-motto {
    background: #f4dfbd;
    color: #f4a214;
  }


  .z-margin-left-8-px {
    margin-left:16rpx;
  }
  .z-margin-left-6-px {
    margin-left:12rpx;
  }
  .z-margin-left-4-px {
    margin-left:8rpx;
  }
  .z-margin-left-2-px {
    margin-left:4rpx;
  }
  .z-margin-left-15-px {
    margin-left:30rpx;
  }
  .z-margin-right-10-px {
    margin-right: 20rpx;
  }
  .index-title {
    width: 100%;
    height: 80rpx;
  }
  .search-btn {
    float:right;
    margin-right:10rpx;
    margin-top:10rpx;
    font-size:16px;

  }
  .icon-wrap {
    width: 33.33333%;
    height: 100px;
    float: left;
    text-align: center;
  }
  .icon-classname {
    color: #999;
    font-size: 15px;
  }
  .zan-icon {
    font-size: 25px;
    margin: 15px;
  }

  .index {
    height: 100vh;
  }
  .userinfo-nickname {
    color: #aaa;
    text-align:center;
  }
  .all{
    position:fixed;
    bottom:0;
    width:7.5rem;
    height:1rem;
    background-color: #ffffff;
  }
  .all:after{
    display:block;
    content:'';
    clear:both;
  }
  .left{
    float:left;
    width: 50%;
    height:1rem;
    background-color:red;
  }
  .right{
    float:left;
    width: 50%;
    height:1rem;
    background-color:green;
  }
</style>
