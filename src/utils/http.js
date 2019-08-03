function request (url, method, data, header = {}) {
  wx.showLoading({
    title: '加载中' // 数据请求前loading
  })
  return new Promise((resolve, reject) => {
    wx.request({
      url: url, // 仅为示例，并非真实的接口地址
      method: method,
      data: data,
      headers: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        wx.hideLoading()
        resolve(res.data)
      },
      fail: function (res) {
        wx.hideLoading()
        wx.showToast({
          title:'获取失败！',
          icon:'none',
        });
        // reject(false)
      },
      complete: function () {
        wx.hideLoading()
      }
    })
  })
}

function get (obj) {
  return request(obj.url, 'GET', obj.data)
}

function post (obj) {
  return request(obj.url, 'POST', obj.data)
}

export default {
  request,
  get,
  post
}

// this.$httpWX.post({
//   url: '/mms/country/queryValidZoneListForMallHome',
//   data: {
//     'categoryType': 'SaleGoodsType@sim',
//     'streamNo': 'web_bss153570682909641893',
//     'reqSource': 'MALL_H5',
//     'appid': 'string',
//     'timestamp': 1535706829096,
//     'sign': 'string'
//   }
// }).then(res => {
//   console.log(res)
// }）
