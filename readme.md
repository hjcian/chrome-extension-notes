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