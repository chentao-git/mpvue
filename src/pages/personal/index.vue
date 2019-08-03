<template>
  <div class="index">
    <div class="handle">
      <div class="zan-cell handle-all">
        <div class="zan-cell__bd" style="margin-left:20px;" @click="userInfo">
          <div class="zan-cell__text zan-font-16 zan-font-bold">卖女孩的小火柴</div>
          <div class="zan-cell__desc y-top-2">这家伙很懒，什么都没留下</div>
        </div>
        <div class="zan-cell__ft" style="right: 10px;">
          <img src="/static/images/user.jpg" class="user-img" @click="userImg">
          <div class="user-vip" @click="goToVip">
            <img src="/static/images/vip.png" class="user-vip-grade">
            <span class="user-vip-span">12</span>
          </div>
        </div>
      </div>
    </div>
    <div class="zan-panel vip-cell">
      <div class="zan-cell zan-cell--access" @click="goToVip">
        <img src="/static/images/crown.png" class="vipImg">
        <div class="zan-cell__bd zan-font-14 zan-font-bold z-margin-left-4 y-top-2" style="color: #aaaaaa">一介布衣</div>
        <div class="zan-cell__ft"></div>
      </div>
    </div>
    <div class="zan-panel" style="margin-top: 44px;">
      <div class="zan-panel zan-panel--without-border">
        <div style="width: 49%;float: left;">
          <div class="user-card left-card-active">
            <div class="zan-cell">
              <div class="zan-cell__bd">
                <div class="zan-cell__text">优惠券</div>
                <div class="zan-cell__desc">16个</div>
              </div>
              <div class="zan-cell__ft zan-icon zan-icon-gift-card user-icon"></div>
            </div>
          </div>
        </div>
        <div style="width: 49%;float: right;">
          <div class="user-card right-card-active">
            <div class="zan-cell">
              <div class="zan-cell__bd">
                <div class="zan-cell__text">钱包</div>
                <div class="zan-cell__desc">余额***</div>
              </div>
              <div class="zan-cell__ft zan-icon zan-icon-value-card user-icon"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="zan-cell zan-cell--access user-padding" @click="goToShop">
        <div class="zan-cell__bd zan-font-bold z-margin-left-10">我的购物车</div>
        <div class="zan-cell__ft"></div>
      </div>
      <div class="zan-cell zan-cell--access user-padding" @click="goToShop">
        <div class="zan-cell__bd zan-font-bold z-margin-left-10">我的客服</div>
        <div class="zan-cell__ft"></div>
      </div>
      <div class="zan-cell zan-cell--access user-padding" @click="goToShop">
        <div class="zan-cell__bd zan-font-bold z-margin-left-10">商务合作</div>
        <div class="zan-cell__ft"></div>
      </div>
      <div class="zan-cell zan-cell--access user-padding" @click="goToShop">
        <div class="zan-cell__bd zan-font-bold z-margin-left-10">我的设置</div>
        <div class="zan-cell__ft"></div>
      </div>
    </div>
    <div class="user-file">
      <div class="zan-font-8 zan-font-bold user-a-file">
          <a href="#" style="margin-left: 70%;">平台规则</a>
      </div>
      <div class="zan-font-8 zan-font-bold user-a-file">
          <a href="#" style="margin-right:70%;">合作资质</a>
      </div>
    </div>

    <_toast />
  </div>
</template>

<script>
  import { getComponentByTag } from '../../utils/helper'
  import ZanToast from '../../components/zan/toast'

export default {
  components: {
    _toast: ZanToast
  },
  mounted () {
    this.toast = getComponentByTag(this, '_toast')
  },
  data () {
    return {

    }
  },
  methods: {
    goToVip: function () {
      this.toast.showZanToast('您已经是最高的等级了！')
    },
    userInfo: function () {
      this.$commonjs.navigateTo('/pages/userInfo/main')
    },
    userImg: function () {
      this.toast.showZanToast('头像够帅了！')
    }
  },
  onLoad () {
    this.$commonjs.setBarTitle('个人中心')
  }
}
</script>

<style>
  .index {
    height: 100vh;
    background: #e2e2e2;
  }
  .handle {
    height: 300rpx;
    background-color: #fdfdfe;
  }
  .handle-all {
    position:relative;
    top:40rpx;
  }
  .user-img {
    width:150rpx;
    height:150rpx;
    border-radius: 50%;
  }
  .user-vip {
    position:absolute;
    top:120rpx;
    right:-10rpx;

  }
  .user-vip-grade {
    width:50rpx;
    height:30rpx;
  }
  .user-vip-span {
    font-size: 20px;
    color: #d7a640;
  }
  .vipImg {
    height: 36rpx;
    width: 54rpx;
  }
  .vip-cell {
    width: 100%;
    border: 1px solid #e2e2e2;
    border-radius: 15px;
    box-shadow: 3px 3px 3px #888888;
    position:absolute;
    top:260rpx;
    z-index: 100;
  }
  .vip-cell:active {
    border: 0;
  }
  .user-padding {
    padding: 25px 15px;
  }
  .user-card {
    width: 75%;
    border: 1px solid #fffcc2;
    border-radius: 20px;
    margin-bottom: 20rpx;
    margin-top: 10px;
    box-shadow: 3px 3px #63573B;
  }
  .left-card-active{
    margin-left: 20px;
  }
  .right-card-active{
    margin-left: 10px;
  }
  .left-card-active:active {
    border: 0;
  }
  .right-card-active:active {
    border: 0;
  }
  .user-file {
    width: 100%;
    text-align:center;
    margin-top: 10px;
  }
  .user-a-file {
    line-height: 10px;
    width: 50%;
    float: left;
  }
  .user-icon{
    font-size: 25px;
    color: #ffd161;
  }
  .z-margin-left-4 {
   margin-left: 8rpx;
  }
  .z-margin-left-10 {
    margin-left: 20rpx;
  }
  .y-top-2 {
    margin-top: 4rpx;
  }
</style>
