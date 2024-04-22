# Vue 店商網站 : Eco-Coffee

![專案封面圖](https://github.com/XUHT0730/Eco-Coffee/blob/main/ReadMeImg/banner.png)

## 專案說明
> Demo Website :https://xuht0730.github.io/Eco-Coffee/#/

Eco-Coffee 為虛構的咖啡豆電商網站，此網站具備前、後台功能。


## 使用技術

- [x] Vue 及 Vue Vite 規劃 SPA 架構 
- [x] Vue Router 架構路由
- [x] 串接 RESTful API
- [x] 使用 Pinia 統一狀態管理狀態
- [x] Bootstrap5 + SCSS 規劃響應式版型

### 前台功能

- [x] 電商展示 : 產品分類、單一產品介紹  
- [x] 商品收藏清單
- [x] 購物車結帳
- [x] 商品關鍵字搜尋

![範例圖片 1](https://github.com/XUHT0730/Eco-Coffee/blob/main/ReadMeImg/front1.png)
![範例圖片 2](https://github.com/XUHT0730/Eco-Coffee/blob/main/ReadMeImg/front2.png)

### 後台功能

- [x] 訂單列表管理  
- [x] 優惠券管理
- [x] 發布文章管理

![範例圖片 1](https://github.com/XUHT0730/Eco-Coffee/blob/main/ReadMeImg/back1.png)
![範例圖片 2](https://github.com/XUHT0730/Eco-Coffee/blob/main/ReadMeImg/back2.png)

## 建議的 IDE 設定

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## 安裝

以下將會引導你如何安裝此專案到你的電腦上。

Node.js 版本建議為：`16.15.0` 以上...

### 環境變數

請將 .env.example 複製一份並命名為 .env，並將裡面的環境變數設定為你的值。
```sh
cp .env.example .env
```

### 安裝套件

```bash
npm install
```

### 啟動開發環境

```bash
npm run dev
```

### 打包專案

```bash
npm run build
```

### 部署專案

```bash
npm run deploy
```

## 使用套件
- axios (^1.6.7)
- bootstrap (^5.3.2)
- bootstrap-icons (^1.11.3)
- pinia (^2.1.7)
- vue (^3.3.11)
- vue-router (^4.2.5)
- sweetalert2 (^11.10.5)
- @popperjs/core (^2.11.8)
- swiper@11
- vee-validate/i18n (^4.12.5)
- vee-validate/rules (^4.12.5)
- eslint (^8.49.0)
- eslint-config-airbnb-base (^15.0.0)
- eslint-import-resolver-alias (^1.1.2)
- eslint-plugin-import (^2.29.1)
- eslint-plugin-n (^16.6.2)
- eslint-plugin-promise (^6.1.1)
- eslint-plugin-vue (^9.20.1)
- gh-pages (^6.1.1)

## gh-pages 部署說明

內建預設是使用 gh-pages 進行部署，因此只需要在專案根目錄下執行以下指令即可。
```bash
npm run deploy
```

## 聯絡作者

你可以透過以下方式與我聯絡
- Ｍail : roy1108730@gmail.com
