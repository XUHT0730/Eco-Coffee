import{_ as y,m as g,r as m,o as s,c as o,a as c,b as e,e as l,F as u,j as f,f as _,t as i,h,w as L}from"./index-63o2KDvu.js";import{c as k}from"./cartStore-BqpvqVXL.js";import{t as $}from"./toastMessage-D24-VtmM.js";var E={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"hedy-api-path",BASE_URL:"/undefined/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:b,VITE_PATH:P}=E,T={data(){return{status:{loadingItem:""},isLoading:!1,products:[],categories:["赫根山 Mount Hagen","生態綠 OKOGREEN","畢嘉士","微笑人咖啡 Laughing Man Coffee"],product:{},cart:{}}},methods:{...g($,["pushMessage"]),...g(k,["addToCart"]),getProducts(){const{category:a=""}=this.$route.query,p=`${b}/api/${P}/products?category=${a}`;this.isLoading=!0,this.axios.get(p).then(r=>{this.products=r.data.products,this.isLoading=!1}).catch(r=>{this.isLoading=!1,this.pushMessage({style:"danger",title:"取得產品資訊失敗",content:r.response.data.message})})},getProduct(a){this.$router.push(`product/${a}`)}},watch:{"$route.query":{handler(){this.getProducts()},deep:!0}},created(){this.getProducts()}},V={class:"container"},w=e("h1",null,"使用者產品列表頁面",-1),x={class:"row"},C={class:"col-lg-2 col-md-3 mb-2"},M={class:"list-group"},O={class:"list-group-item active","aria-current":"true"},R={class:"row row-cols-3 my-4 g-4 col-lg-10 col-md-9"},U={class:"card"},I=["src"],N={class:"card-body"},S={class:"card-title"},A={key:0,class:"h5"},B={key:1,class:"h6"},D={key:2,class:"h5"},H=["onClick"];function j(a,p,r,q,n,F){const v=m("LoadingOverLay"),d=m("router-link");return s(),o(u,null,[c(v,{active:n.isLoading,"z-index":1060},null,8,["active"]),e("div",V,[w,e("div",x,[e("div",C,[e("ul",M,[e("li",O,[c(d,{class:"py-2 d-block text-muted",to:"/products"},{default:l(()=>[_("全部商品")]),_:1})]),(s(!0),o(u,null,f(n.categories,t=>(s(),o("li",{key:t,class:"list-group-item"},[c(d,{class:"py-2 d-block text-muted",to:`/products?category=${t}`},{default:l(()=>[_(i(t),1)]),_:2},1032,["to"])]))),128))])]),e("div",R,[(s(!0),o(u,null,f(n.products,t=>(s(),o("div",{class:"col",key:t.id},[e("div",U,[e("img",{href:"#",class:"card-img-top object-fit-cover",src:t.imageUrl,alt:"",height:"275"},null,8,I),e("div",N,[e("h6",S,[c(d,{to:`/product/${t.id}`},{default:l(()=>[_(i(t.title),1)]),_:2},1032,["to"]),e("td",null,[t.price?h("",!0):(s(),o("div",A,i(a.item.origin_price)+" 元 ",1)),t.price?(s(),o("del",B,"原價 "+i(t.origin_price)+" 元",1)):h("",!0),t.price?(s(),o("div",D," 現在只要 "+i(t.price)+" 元 ",1)):h("",!0)])]),e("button",{class:"btn btn-outline-primary w-100",onClick:L(z=>a.addToCart(t.id),["prevent"])},"加入購物車",8,H)])])]))),128))])])])],64)}const Q=y(T,[["render",j]]);export{Q as default};