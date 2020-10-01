## Tutorial ntoes
### Bear counting
- https://github.com/shama/letswritecode/tree/master/how-to-make-chrome-extensions
- content.js 是每次頁面載入都會去呼叫的 js
- background.js 對所有 tabs 來說是全域的存在
- manifest.json
  - browser_action - 左鍵點擊，可顯示一個預設的 html 
    ```
    "browser_action": {
        "default_popup": "popup.html"
    }
    ```  
    此預設的優先權高於 `chrome.browserAction.onClicked()`
  - `"permissions": ["tabs"]` 則是 `chrome.tabs.create({ url: 'popup.html' })` 需要
- `chrome.browserAction.onClicked()` 可以控制點擊擴充功能時要做的事

### 需要進一步查閱
- `chrome.browserAction.onClicked()` 好像綁架了左鍵的點擊行為，那又能對「右鍵」做什麼？
- `DOMContentLoaded` vs. `load` - [重新認識 JavaScript 番外篇 (6) - 網頁的生命週期](https://ithelp.ithome.com.tw/articles/10197335)

### Resources
- `manifest.json` 中文解釋
  - [Chrome Extension Develop](https://leejulee.github.io/article/2017/08/01/Chrome-Extension-Dev)