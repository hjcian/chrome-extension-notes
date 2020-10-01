// // =================================================================
// // 此部分是註冊一個監聽者，等待接受別人 trigger
// chrome.runtime.onMessage.addListener(function (
//   request,
//   sender,
//   senderCB) {
//   const re = new RegExp('bear', 'gi')
//   //   alert(document.documentElement.innerHTML.slice(0, 50))
//   const matches = document.documentElement.innerHTML.match(re)
//   senderCB({
//     count: matches.length
//   })
// })
// // =================================================================

// =================================================================
// 此部分是做出，只要頁面讀取進來就必做，然後我們想要把頁面搜尋的工作丟到背景 (background.js 負責) 去
const re = new RegExp('bear', 'gi')
const matches = document.documentElement.innerHTML.match(re) || []
chrome.runtime.sendMessage({
  url: window.location.href,
  count: matches.length
})
// =================================================================
