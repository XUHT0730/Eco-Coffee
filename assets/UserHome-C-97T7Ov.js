import{_ as x,m as F,r as o,o as i,c as l,a as c,b as e,e as r,F as m,i as u,q as S,f as v,t as d,g as k,w as L,s as j,u as E}from"./index-aaLPSl0K.js";import{S as f}from"./sweetalert2.all-D_P0A1B9.js";import{S as O,a as I,A as z,P as A,N as D}from"./navigation-BZV3fHMN.js";import{c as R}from"./cartStore-vWDUzHx-.js";const T="/Eco-Coffee/assets/fair-trand-BULniK_g.png",C="/Eco-Coffee/assets/whatisfairtrand-DjLqRQC9.png";var P={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"hedy-api-path",BASE_URL:"/Eco-Coffee/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:N,VITE_PATH:Z}=P,G={data(){return{isLoading:!1,products:[],product:{},categories:["赫根山 Mount Hagen","生態綠 OKOGREEN","畢嘉士","微笑人咖啡 Laughing Man Coffee"],categoryImages:{"赫根山 Mount Hagen":"https://storage.googleapis.com/vue-course-api.appspot.com/hedy-api-path/1709715033061.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=n85X7ObXNieSwqZLOSrnYmhIL83qxdhcGsxGJzhLIUUageDPpp6hFX%2B8WBZ1x0x%2B5F%2FkYgtlj4cR9%2F5Fi5x3i9LzeB3Q6mzwQcbPhDQW8iIINJPhaJy8HUu1tHKFKXTQbWIqgwSEBv%2BN%2BEdaqQU%2FSmKpbBh2iAd8vLvEWtLe3fFI%2FfE1Dg%2Bw%2FWH4n5vOu0JwZa5yP0O%2BVgZVS1SpfZQP97VxS5U1hrOKtyMjXOoZz8QT46lpiHJFsFzL3XyoGfg0UqdY8MkhYWjfSktfuegFUhVNLvZuAN0%2FG2nlcH8tGYFrAw54or9hlu1xRpiYm8feAyYAqFZnOJ1S5rdEFpTRjw%3D%3D","生態綠 OKOGREEN":"https://storage.googleapis.com/vue-course-api.appspot.com/hedy-api-path/1709715556894.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Tk%2FEOX124uZ9R3QmgPD%2F6hemCuWb%2FIubWOqc4vLAXsR0BsRvNvKCttsBdA4rsmJdvbqBWGSN8ytXPC1yDcOzhOi2gQQTyb4XIYjCpBSLGDikOiNcDAGm%2F%2BjZHwx8izYUxOemNuYb8JYq9rxutE6%2FiMB8IM%2FhEashSovcwpGVMMcx0hRwujaUBRyexKfmJRBgxzduOdf%2FZsW0kA8Vp45IFJ95R3o7j2NOaT%2BV1vW6M%2BgzQb3OkS96FZ9hCw3n97ZLP5WdBJgkdCMVanbEsIbdbjemrnQDC8xWyV17xPemwVajES5wwLfbM9AvQgOfnNlMTGqRRHV81j%2BWbzDxsoGNQA%3D%3D",畢嘉士:"https://storage.googleapis.com/vue-course-api.appspot.com/hedy-api-path/1709715836608.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=E4AK9zjU%2FYtRqaXPjzRupgauGSOBzBfGfIw6MzzPMarYin5jXuP44HGh%2FA2zxIbXQ8gekZMw0wdiIbfZAhc1NIm55RJDHor7nerOCmbXTdI0A1oFyIpmvWTdz3CmF%2BLDt1%2F1WzGUFsaX3P9G29FCSA7i%2B5qBDfRAwxxDzeBT08wefAlGGo1bpLWATFR74CQvIAuEkynQG1zOpsjwbx0RShgg9mEgh4rEgvwv5mz59vOT97ObCcjwuy85NjpVznoKnTrOyyCgTk4Nzu3ADJXjwTozoaK0k%2FYf12e6BH5K7kYS2sNL0%2FDyF1nFcjUJIIb74F88EVO0dqlE48Hd4X%2FzhA%3D%3D","微笑人咖啡 Laughing Man Coffee":"https://storage.googleapis.com/vue-course-api.appspot.com/hedy-api-path/1709716136349.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Pu7xrGVSxcwMV5la8oQGW9F%2BDMRw7ZPbjWygBXtDl9I%2BXd4vORmgmvSFahlVoULqqHOsd%2FL6mPA5u%2B4ckyBPC3BfomiFLW8fECvfN26cnmCOtcED6ldIAUhAjp8rTfXoEZjZj02YT1nStQKHsWkuooFp6ZZ%2FaJsmqTRt4%2BgX%2F6gzB3DoAxXXSqHy5UjzbhLXK%2Fs2IXPbVq%2BwfzwR27W7tQ8SxvUMmdKWScYi5NxL%2BFJjZVS9LmiIAHY%2FagwtfOS%2B5ieXZ4ZMrpZ4m0bPSe2qbHjezy61RnddLf0FmIerEJa%2BmxLKK9dy3P1jYZOtsYi86awpKnxsjrw1qpOxrE27NA%3D%3D"},trackList:[]}},methods:{...F(R,["addToCart"]),getProducts(){const s=`${N}/api/${Z}/products/all`;this.isLoading=!0,this.axios.get(s).then(a=>{this.products=a.data.products,this.isLoading=!1}).catch(a=>{this.isLoading=!1,this.pushMessage({style:"danger",title:"取得產品資訊失敗",content:a.response.data.message})})},getTrack(){const s=localStorage.getItem("homeTrack");s&&(this.trackList=JSON.parse(s))},setTrack(s){if(this.trackList.includes(s)){const a=this.trackList.findIndex(h=>h===s);this.trackList.splice(a,1),f.fire({icon:"success",title:"己移除收藏清單",showConfirmButton:!1,timer:1500})}else f.fire({icon:"success",title:"己加入收藏清單",showConfirmButton:!1,timer:1500}),this.trackList.push(s);localStorage.setItem("homeTrack",JSON.stringify(this.trackList)),this.getTrack()}},components:{Swiper:O,SwiperSlide:I},setup(){return{modules:[z,A,D]}},created(){this.getProducts(),this.getTrack()}},p=s=>(j("data-v-62e32aa8"),s=s(),E(),s),V={class:"header",style:{"background-image":"url(https://storage.googleapis.com/vue-course-api.appspot.com/hedy-api-path/1709543433230.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=RKdXij%2BJKl7scyyCrzbEoL7DKU%2BhtTvd%2B19Qhee9AUDq%2FoXrgyD8lS%2BZCheCWRKgOfScfomYaSL3rgCwbQeThOe2rtiKYmypjiZnqy1hZF0ldnixATNZZaCldVhwKytNUTZHjWoP58IeUI9FLiRG6PMhzknkCEzSP4OdmF54GOEvdYBkQp3D1QhPENbhBB4bjd9WbxuGjJHRuDY5B4pItsX4ZbMPpLQQeOpGiO%2F2AjrnOIW2giK%2BDc4eD4SAZowcPBNK8YJCo79Z9KqZQ6lRS%2FInyi%2BNkpH3UnYfYzqFTN6PEHNva892jSwMMYMtKCu5cC7ReW%2FfkBTEY%2B9GR2KF7g%3D%3D)"}},K={class:"container d-flex align-items-center h-100 position-relative",style:{"z-index":"1"}},M={class:"header-text"},X=p(()=>e("h1",{class:"fw-bold mb-3"},"發現公平貿易咖啡的美味世界",-1)),Y={class:"container mt-6"},Q=p(()=>e("h2",{class:"text-center mb-5 fw-bold"},"支持公平貿易的店家",-1)),U={class:"row justify-content-center"},W={class:"col-lg-10 col-md-9 col-sm-12"},q={class:"row row-cols-lg-2 row-cols-md-2 g-4"},H={class:"image-container"},J=["src"],$={class:"overlay"},ee={class:"my-3 text-center d-md-none d-lg-none"},se=S('<section class="bg-light py-6 mt-6" data-v-62e32aa8><div class="container" data-v-62e32aa8><div class="row justify-content-center mb-3" data-v-62e32aa8><div class="col-md-12 text-center" data-v-62e32aa8><h1 class="fw-bold mt-3" data-v-62e32aa8>以永續經營的精神 發展咖啡文化</h1><h2 data-v-62e32aa8>打破咖啡產業中的不公平和不平等</h2></div></div><div class="row justify-content-center mt-6" data-v-62e32aa8><div class="col-md-5" data-v-62e32aa8><img src="'+T+'" class="w-100 h-70 object-fit-cover" alt="fair-trand" data-v-62e32aa8></div><div class="col-md-5 d-flex align-items-center" data-v-62e32aa8><div class="text-center" data-v-62e32aa8><h2 class="fw-bold mt-3" data-v-62e32aa8>以永續經營的精神 發展咖啡文化</h2><p class="text-primary me-3 fw-bold" data-v-62e32aa8>我們相信，每一杯咖啡都能成為改變世界的力量。</p><p data-v-62e32aa8>我們的使命是通過推動公平貿易和提供最優質的咖啡，促進社會正義和環境保護。我們相信，每一杯咖啡都能成為改變世界的力量。</p></div></div></div><div class="row justify-content-center mt-6 flex-row-reverse" data-v-62e32aa8><div class="col-md-5" data-v-62e32aa8><img class="w-100 object-fit-cover" src="'+C+'" alt="" data-v-62e32aa8></div><div class="col-md-5 d-flex align-items-center" data-v-62e32aa8><div class="text-center" data-v-62e32aa8><h2 class="fw-bold mt-3" data-v-62e32aa8>合作咖啡豆品牌</h2><p class="text-primary fw-bold me-3" data-v-62e32aa8>以公平貿易的角度，並創造利潤共享的平台</p><p data-v-62e32aa8> 我們與四家頂級咖啡豆品牌合作，包括 Mount Hagen、OKOGREEN、 畢嘉士和微笑人咖啡。我們選擇這些品牌是因為它們與我們的價值觀和使命相契合， 並致力於推動公平貿易的發展。 </p></div></div></div></div></section>',1),te={class:"container mt-6"},ae=p(()=>e("h2",{class:"text-center fw-bold"},"熱銷商品",-1)),oe={class:"d-flex justify-content-center my-4"},ie={class:"row"},ce={class:"col-md-4 col-sm"},re={class:"card swiper-card mb-sm-4 ms-md-4 m-sm-auto"},de=["src"],ne={class:"card-body"},le={class:"badge rounded-pill bg-primary mb-2"},pe={class:"card-title fs-6 fw-bold"},me={class:"card-text"},he=["onClick"],ge=p(()=>e("i",{class:"bi bi-cart-check me-2"},null,-1));function ue(s,a,h,_,n,ve){const w=o("LoadingOverLay"),b=o("RouterLink"),g=o("router-link"),y=o("swiper-slide"),B=o("swiper");return i(),l(m,null,[c(w,{active:n.isLoading,"z-index":1060},null,8,["active"]),e("header",V,[e("div",K,[e("div",M,[X,c(b,{to:"/about",type:"button",class:"btn btn-primary btn-lg",style:{"border-radius":"0"}},{default:r(()=>[v(" 了解公平貿易 ")]),_:1})])])]),e("section",Y,[Q,e("div",U,[e("div",W,[e("div",q,[(i(!0),l(m,null,u(n.categories,t=>(i(),l("div",{class:"col-sm-1 mb-4",key:t},[c(g,{to:`/products?category=${t}`,class:"d-block text-muted"},{default:r(()=>[e("div",H,[e("img",{src:n.categoryImages[t],class:"card-img-top object-fit-cover title-image"},null,8,J),e("div",$,d(t),1)]),e("h3",ee,d(t),1)]),_:2},1032,["to"])]))),128))])])])]),se,e("section",te,[ae,e("div",oe,[c(B,{autoplay:!0,slidesPerView:1,spaceBetween:10,breakpoints:{375:{slidesPerView:1,spaceBetween:10},768:{slidesPerView:3,spaceBetween:30},1024:{slidesPerView:4,spaceBetween:30}},modules:_.modules,class:"mySwiper"},{default:r(()=>[(i(!0),l(m,null,u(n.products,t=>(i(),k(y,{key:t.id},{default:r(()=>[e("div",ie,[e("div",ce,[e("div",re,[c(g,{to:`/product/${t.id}`,class:"swiper-card-link"},{default:r(()=>[e("img",{src:t.imageUrl,class:"swiper-card-img"},null,8,de)]),_:2},1032,["to"]),e("div",ne,[e("span",le,d(t.category),1),e("h5",pe,d(t.title),1),e("p",me,"NT$ "+d(t.price),1),e("a",{class:"btn btn-primary d-flex justify-content-center text-white",onClick:L(fe=>s.addToCart(t.id),["prevent"])},[ge,v("加入購物車")],8,he)])])])])]),_:2},1024))),128))]),_:1},8,["modules"])])])],64)}const Be=x(G,[["render",ue],["__scopeId","data-v-62e32aa8"]]);export{Be as default};
