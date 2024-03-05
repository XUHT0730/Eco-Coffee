import{m as _,_ as h,r as i,o as u,c as m,b as o,a as t,e as n,f as c,w as k,g as b,h as T}from"./index-63o2KDvu.js";import{t as v}from"./toastMessage-D24-VtmM.js";import{T as $}from"./ToastModal-CdvlDvmn.js";var R={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"hedy-api-path",BASE_URL:"/undefined/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:V}=R,x={methods:{..._(v,["pushMessage"]),logOut(){const a=`${V}/logout`;this.axios.post(a).then(e=>{this.pushMessage({style:"success",title:"已登出",content:e.data.message}),document.cookie="myToken=;expires=;path=/",this.$router.push("/")}).catch(e=>{this.pushMessage({style:"danger",title:"登出狀態",content:e.response.data.message})})}}},E={class:"navbar navbar-expand-lg bg-light"},M={class:"container-fluid"},S=o("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[o("span",{class:"navbar-toggler-icon"})],-1),L={class:"collapse navbar-collapse",id:"navbarSupportedContent"},y={class:"navbar-nav me-auto mb-2 mb-lg-0"};function A(a,e,g,f,p,r){const s=i("RouterLink"),l=i("router-link");return u(),m("div",null,[o("nav",E,[o("div",M,[t(s,{to:"/admin",class:"navbar-brand"},{default:n(()=>[c("Navbar")]),_:1}),S,o("div",L,[o("div",y,[t(s,{to:"/admin/products",class:"nav-item nav-link"},{default:n(()=>[c("產品")]),_:1}),t(s,{to:"/admin/orders",class:"nav-item nav-link"},{default:n(()=>[c("訂單")]),_:1}),t(s,{to:"/admin/coupons",class:"nav-item nav-link"},{default:n(()=>[c("優惠券")]),_:1}),t(s,{to:"/admin/article",class:"nav-item nav-link"},{default:n(()=>[c("貼文")]),_:1}),t(l,{to:"/",class:"nav-item nav-link"},{default:n(()=>[c("前台頁面")]),_:1}),o("a",{href:"#",onClick:e[0]||(e[0]=k((...d)=>r.logOut&&r.logOut(...d),["prevent"])),class:"nav-item nav-link"},"登出")])])])])])}const N=h(x,[["render",A]]);var C={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"hedy-api-path",BASE_URL:"/undefined/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:D}=C,I={data(){return{checkSuccess:!1}},components:{AdminNavbar:N,ToastModal:$},methods:{..._(v,["pushMessage"]),checkLogin(){const a=`${D}/api/user/check`;this.axios.post(a).then(e=>{this.pushMessage({style:"success",title:"登入成功",content:e.data.message}),this.checkSuccess=!0}).catch(e=>{this.pushMessage({style:"danger",title:"錯誤訊息",content:e.response.data.message}),this.$router.push("/login")})}},mounted(){const a=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.axios.defaults.headers.common.Authorization=a,this.checkLogin()}};function O(a,e,g,f,p,r){const s=i("AdminNavbar"),l=i("ToastModal"),d=i("RouterView");return u(),m("div",null,[t(s),t(l),p.checkSuccess?(u(),b(d,{key:0})):T("",!0)])}const P=h(I,[["render",O]]);export{P as default};
