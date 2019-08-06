<template>
  <div class="index">
    <div class="header">
      <div class="zan-cell">
        <div class="zan-cell__bd">
          <div class="zan-font-bold zan-font-14">终极叉烧注水鸡肉专坑老客百年老店</div>
          <div class="right-title zan-font-bold zan-font-14">···</div>
        </div>
      </div>
    </div>
    <!-- 轮播图模块 -->
    <Swiper :images="images" autoplay="false"></Swiper>

  </div>
</template>

<script>
  import Swiper from '@/components/wxoriginal/swiper'

export default {
  components: {
    Swiper
  },
  computed: {
  },
  data () {
    return {
      images: [
        {
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563542244794&di=1017156e46cde9c7842d3a10f9c9eacb&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F402e358052d4d2b38b3f7b329ed4939f62fb6a22.jpg'
        },
        {
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563542297404&di=b67faea6202b39650391b4a66abe8536&imgtype=0&src=http%3A%2F%2Fimg8.zol.com.cn%2Fbbs%2Fupload%2F15082%2F15081006_0800.jpg'
        }
      ]
    }
  },
  methods: {
  }
}
</script>

<style>
  .index {
    height: 100vh;
  }
  .header {
    position: relative;
    background: #bec0b5;
    margin-top: 1px;
    overflow: hidden;
  }
  .right-title {
    position: absolute;
    right: 15px;
    top: 30%;
    display: inline-block;
    height: 6px;
    width: 25px;

  }
</style>
