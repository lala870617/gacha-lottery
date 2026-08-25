# 幸運扭蛋抽獎網站

純 HTML / CSS / JavaScript 製作，可直接部署到 GitHub Pages。

## 檔案
- `index.html`：網站主頁
- `style.css`：扭蛋機外觀與動畫
- `script.js`：抽獎邏輯與機率

## 修改獎項與機率
打開 `script.js`，修改最上方的：

```js
const prizes = [
  { name: "1000", weight: 40 },
  { name: "2000", weight: 30 },
  { name: "3000", weight: 20 },
  { name: "任選", weight: 10 }
];
```

`weight` 是相對機率。上述總和為 100，所以剛好分別是 40%、30%、20%、10%。

## GitHub Pages
1. 建立 GitHub Repository。
2. 將 `index.html`、`style.css`、`script.js` 上傳到 Repository 根目錄。
3. 到 Repository → Settings → Pages。
4. Source 選 `Deploy from a branch`。
5. Branch 選 `main`，資料夾選 `/ (root)`。
6. Save。
7. 等 GitHub Pages 顯示網站網址即可。

## 注意
這是純前端抽獎。JavaScript 和獎項機率會公開在瀏覽器中，所以適合娛樂、小活動或展示用途。
如果獎品有เงินจริง或需要防作弊，應改用後端產生並記錄抽獎結果。
