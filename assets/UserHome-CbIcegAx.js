import{m as w,_ as b,r as a,o as r,c as d,b as e,a as c,e as p,F as _,i as y,g as E,t as l,w as T,f as B,u as S,x as F}from"./index-O4EEIHBO.js";import{S as v}from"./sweetalert2.all-EK7c56Sq.js";import{c as k}from"./cartStore-otakfmji.js";import{S as O,a as A,A as P,P as z,N as R}from"./navigation-BDfXkgLr.js";var j={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"hedy-api-path",BASE_URL:"/Eco-Coffee/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:D,VITE_PATH:C}=j,V={data(){return{products:[],trackList:[]}},methods:{...w(k,["addToCart"]),getProducts(){const s=`${D}/api/${C}/products/all`;this.isLoading=!0,this.axios.get(s).then(t=>{this.products=t.data.products,this.isLoading=!1}).catch(t=>{this.isLoading=!1,this.pushMessage({style:"danger",title:"取得產品資訊失敗",content:t.response.data.message})})}},components:{Swiper:O,SwiperSlide:A},setup(){return{modules:[P,z,R]}},created(){this.getProducts()}},x=s=>(S("data-v-097fb2fa"),s=s(),F(),s),N={class:"container mt-6"},Z=x(()=>e("h2",{class:"text-center fw-bold"},"熱銷商品",-1)),G={class:"d-flex justify-content-center my-4"},U={class:"row"},M={class:"col-md-4 col-sm"},$={class:"card swiper-card mb-sm-4 ms-md-4 m-sm-auto"},K=["src"],X={class:"card-body"},Y={class:"badge rounded-pill bg-primary mb-2"},H={class:"card-title fs-6 fw-bold"},W={class:"card-text"},Q=["onClick"],q=x(()=>e("i",{class:"bi bi-cart-check me-2"},null,-1));function J(s,t,u,f,n,I){const h=a("router-link"),m=a("swiper-slide"),g=a("swiper");return r(),d("section",N,[Z,e("div",G,[c(g,{autoplay:!0,slidesPerView:1,spaceBetween:10,breakpoints:{375:{slidesPerView:1,spaceBetween:10},768:{slidesPerView:3,spaceBetween:30},1024:{slidesPerView:4,spaceBetween:30}},modules:f.modules,class:"mySwiper"},{default:p(()=>[(r(!0),d(_,null,y(n.products,o=>(r(),E(m,{key:o.id},{default:p(()=>[e("div",U,[e("div",M,[e("div",$,[c(h,{to:`/product/${o.id}`,class:"swiper-card-link"},{default:p(()=>[e("img",{src:o.imageUrl,class:"swiper-card-img"},null,8,K)]),_:2},1032,["to"]),e("div",X,[e("span",Y,l(o.category),1),e("h5",H,l(o.title),1),e("p",W,"NT$ "+l(o.price),1),e("a",{class:"btn btn-primary d-flex justify-content-center text-white",onClick:T(i=>s.addToCart(o.id),["prevent"])},[q,B("加入購物車")],8,Q)])])])])]),_:2},1024))),128))]),_:1},8,["modules"])])])}const ee=b(V,[["render",J],["__scopeId","data-v-097fb2fa"]]);var se={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"hedy-api-path",BASE_URL:"/Eco-Coffee/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:te,VITE_PATH:oe}=se,ae={data(){return{isLoading:!1,products:[],product:{},categories:["赫根山 Mount Hagen","生態綠 OKOGREEN","畢嘉士","微笑人咖啡 Laughing Man Coffee"],categoryImages:{"赫根山 Mount Hagen":"https://storage.googleapis.com/vue-course-api.appspot.com/hedy-api-path/1709715033061.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=n85X7ObXNieSwqZLOSrnYmhIL83qxdhcGsxGJzhLIUUageDPpp6hFX%2B8WBZ1x0x%2B5F%2FkYgtlj4cR9%2F5Fi5x3i9LzeB3Q6mzwQcbPhDQW8iIINJPhaJy8HUu1tHKFKXTQbWIqgwSEBv%2BN%2BEdaqQU%2FSmKpbBh2iAd8vLvEWtLe3fFI%2FfE1Dg%2Bw%2FWH4n5vOu0JwZa5yP0O%2BVgZVS1SpfZQP97VxS5U1hrOKtyMjXOoZz8QT46lpiHJFsFzL3XyoGfg0UqdY8MkhYWjfSktfuegFUhVNLvZuAN0%2FG2nlcH8tGYFrAw54or9hlu1xRpiYm8feAyYAqFZnOJ1S5rdEFpTRjw%3D%3D","生態綠 OKOGREEN":"https://storage.googleapis.com/vue-course-api.appspot.com/hedy-api-path/1709715556894.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Tk%2FEOX124uZ9R3QmgPD%2F6hemCuWb%2FIubWOqc4vLAXsR0BsRvNvKCttsBdA4rsmJdvbqBWGSN8ytXPC1yDcOzhOi2gQQTyb4XIYjCpBSLGDikOiNcDAGm%2F%2BjZHwx8izYUxOemNuYb8JYq9rxutE6%2FiMB8IM%2FhEashSovcwpGVMMcx0hRwujaUBRyexKfmJRBgxzduOdf%2FZsW0kA8Vp45IFJ95R3o7j2NOaT%2BV1vW6M%2BgzQb3OkS96FZ9hCw3n97ZLP5WdBJgkdCMVanbEsIbdbjemrnQDC8xWyV17xPemwVajES5wwLfbM9AvQgOfnNlMTGqRRHV81j%2BWbzDxsoGNQA%3D%3D",畢嘉士:"https://storage.googleapis.com/vue-course-api.appspot.com/hedy-api-path/1709715836608.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=E4AK9zjU%2FYtRqaXPjzRupgauGSOBzBfGfIw6MzzPMarYin5jXuP44HGh%2FA2zxIbXQ8gekZMw0wdiIbfZAhc1NIm55RJDHor7nerOCmbXTdI0A1oFyIpmvWTdz3CmF%2BLDt1%2F1WzGUFsaX3P9G29FCSA7i%2B5qBDfRAwxxDzeBT08wefAlGGo1bpLWATFR74CQvIAuEkynQG1zOpsjwbx0RShgg9mEgh4rEgvwv5mz59vOT97ObCcjwuy85NjpVznoKnTrOyyCgTk4Nzu3ADJXjwTozoaK0k%2FYf12e6BH5K7kYS2sNL0%2FDyF1nFcjUJIIb74F88EVO0dqlE48Hd4X%2FzhA%3D%3D","微笑人咖啡 Laughing Man Coffee":"https://storage.googleapis.com/vue-course-api.appspot.com/hedy-api-path/1709716136349.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Pu7xrGVSxcwMV5la8oQGW9F%2BDMRw7ZPbjWygBXtDl9I%2BXd4vORmgmvSFahlVoULqqHOsd%2FL6mPA5u%2B4ckyBPC3BfomiFLW8fECvfN26cnmCOtcED6ldIAUhAjp8rTfXoEZjZj02YT1nStQKHsWkuooFp6ZZ%2FaJsmqTRt4%2BgX%2F6gzB3DoAxXXSqHy5UjzbhLXK%2Fs2IXPbVq%2BwfzwR27W7tQ8SxvUMmdKWScYi5NxL%2BFJjZVS9LmiIAHY%2FagwtfOS%2B5ieXZ4ZMrpZ4m0bPSe2qbHjezy61RnddLf0FmIerEJa%2BmxLKK9dy3P1jYZOtsYi86awpKnxsjrw1qpOxrE27NA%3D%3D"},trackList:[]}},methods:{...w(k,["addToCart"]),getProducts(){const s=`${te}/api/${oe}/products/all`;this.isLoading=!0,this.axios.get(s).then(t=>{this.products=t.data.products,this.isLoading=!1}).catch(t=>{this.isLoading=!1,this.pushMessage({style:"danger",title:"取得產品資訊失敗",content:t.response.data.message})})},getTrack(){const s=localStorage.getItem("homeTrack");s&&(this.trackList=JSON.parse(s))},setTrack(s){if(this.trackList.includes(s)){const t=this.trackList.findIndex(u=>u===s);this.trackList.splice(t,1),v.fire({icon:"success",title:"己移除收藏清單",showConfirmButton:!1,timer:1500})}else v.fire({icon:"success",title:"己加入收藏清單",showConfirmButton:!1,timer:1500}),this.trackList.push(s);localStorage.setItem("homeTrack",JSON.stringify(this.trackList)),this.getTrack()}},components:{SwiperComponent2:ee},created(){this.getProducts(),this.getTrack()}},L=s=>(S("data-v-b386b1cf"),s=s(),F(),s),ie={class:"header",style:{"background-image":"url(https://storage.googleapis.com/vue-course-api.appspot.com/hedy-api-path/1709543433230.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=RKdXij%2BJKl7scyyCrzbEoL7DKU%2BhtTvd%2B19Qhee9AUDq%2FoXrgyD8lS%2BZCheCWRKgOfScfomYaSL3rgCwbQeThOe2rtiKYmypjiZnqy1hZF0ldnixATNZZaCldVhwKytNUTZHjWoP58IeUI9FLiRG6PMhzknkCEzSP4OdmF54GOEvdYBkQp3D1QhPENbhBB4bjd9WbxuGjJHRuDY5B4pItsX4ZbMPpLQQeOpGiO%2F2AjrnOIW2giK%2BDc4eD4SAZowcPBNK8YJCo79Z9KqZQ6lRS%2FInyi%2BNkpH3UnYfYzqFTN6PEHNva892jSwMMYMtKCu5cC7ReW%2FfkBTEY%2B9GR2KF7g%3D%3D)"}},ce={class:"container d-flex align-items-center h-100 position-relative",style:{"z-index":"1"}},re={class:"header-text"},ne=L(()=>e("h1",{class:"fw-bold mb-3 text-nowrap"},"發現公平貿易咖啡的美味世界",-1)),de={class:"container mt-6"},pe=L(()=>e("h2",{class:"text-center mb-5 fw-bold"},"支持公平貿易的店家",-1)),le={class:"row justify-content-center"},ue={class:"col-lg-10 col-md-9 col-sm-12"},he={class:"row row-cols-lg-2 row-cols-md-2 g-4"},me={class:"image-container"},ge=["src"],_e={class:"overlay"},fe={class:"my-3 text-center d-md-none d-lg-none"};function ve(s,t,u,f,n,I){const h=a("LoadingOverLay"),m=a("RouterLink"),g=a("router-link"),o=a("SwiperComponent2");return r(),d(_,null,[c(h,{active:n.isLoading,"z-index":1060},null,8,["active"]),e("header",ie,[e("div",ce,[e("div",re,[ne,c(m,{to:"/about",type:"button",class:"btn btn-primary btn-lg",style:{"border-radius":"0"}},{default:p(()=>[B(" 了解公平貿易 ")]),_:1})])])]),e("section",de,[pe,e("div",le,[e("div",ue,[e("div",he,[(r(!0),d(_,null,y(n.categories,i=>(r(),d("div",{class:"col-sm-1 mb-4",key:i},[c(g,{to:`/products?category=${i}`,class:"d-block text-muted clickable-link"},{default:p(()=>[e("div",me,[e("img",{src:n.categoryImages[i],class:"card-img-top object-fit-cover title-image"},null,8,ge),e("div",_e,l(i),1)]),e("h3",fe,l(i),1)]),_:2},1032,["to"])]))),128))])])])]),c(o)],64)}const Se=b(ae,[["render",ve],["__scopeId","data-v-b386b1cf"]]);export{Se as default};
