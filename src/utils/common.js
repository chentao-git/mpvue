const commonJs = {}

// 关闭当前页面，跳转到应用内的某个页面
commonJs.redictTo = function (url) {
  wx.redirectTo({url})
}
// 返回上一页
commonJs.backTo = function () {
  wx.navigateBack({delta: 1})
}
// 打开新窗口
commonJs.navigateTo = function (url) {
  wx.navigateTo({url})
}
// 小程序中跳转tabBar 页面，该方法不会刷新跳转页面，需要在success下进行刷新（暂时未写success刷新逻辑）
commonJs.switchTabTo = function (url) {
  wx.switchTab({url})
}
// 关闭所有页面，打开到应用内的某个页面
commonJs.reLaunchTo = function (url) {
  wx.reLaunch({url})
}
// 设置小程序页面的标题
commonJs.setBarTitle = function (title) {
  wx.setNavigationBarTitle({title})
}
// 获取路径参数
// let params = this.$root.$mp.query 也可以获取参数
commonJs.getUrlParams = function () {
  var pages = getCurrentPages()
  var currentPage = pages[pages.length - 1]
  const urlParams = currentPage.options
  return urlParams
}

export default commonJs
