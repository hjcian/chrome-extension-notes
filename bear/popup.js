// document 指的是 popup 那一塊小小的ＨＴＭＬ本身

document.addEventListener('DOMContentLoaded', function () {
  const bg = chrome.extension.getBackgroundPage()

  Object.keys(bg.bears).forEach(function (url) {
    const div = document.createElement('div')
    div.textContent = `${url}: ${bg.bears[url]}`
    document.body.appendChild(div)
  })

  // // =================================================================
  // // 此部分是增加一個事件監聽給 popup.html 裡的 button，來達成我們想要的互動性
  // // 即點擊後計算 bears 數量
  // document.querySelector('button').addEventListener('click',
  //   onclick, false)

  // function onclick () {
  //   console.log('onclick')
  //   chrome.tabs.query({ currentWindow: true, active: true },
  //     function (tabs) {
  //       chrome.tabs.sendMessage(tabs[0].id, 'hi', setCountCB)
  //     })
  // }

  // // setCountCB 是一個 callback function，可以在
  // function setCountCB (resp) {
  //   const div = document.createElement('div')
  //   div.textContent = `${resp.count} bears`
  //   document.body.appendChild(div)
  // }
  // // =================================================================
}, false)
