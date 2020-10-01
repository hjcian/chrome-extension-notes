// 看起來 background.js 是全域的，全部的 tabs 都存取到同一份
// const bears = {}

window.bears = {} // 變成 window 的變數

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  window.bears[request.url] = request.count
})

chrome.browserAction.onClicked.addListener(function (tab) {
  // browserAction 就是擴充小按鈕
  // chrome 會告訴我們在哪一個 'tab' 點擊了 browserAction
  // 我們想要替使用者新增一個 tab，需要 permissions。
  // "permissions": ["tabs"]

  // 而以下的 default_popup 也從 browser_action 移除，因為未來會新建一個 tab
  //   "browser_action": {
  //     "default_popup": "popup.html",
  chrome.tabs.create({ url: 'popup.html' })
})
