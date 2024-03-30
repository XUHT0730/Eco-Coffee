import{_ as v,m as _,r as a,o as r,c as n,a as c,b as e,e as p,F as g,i as B,f as l,t as u,u as b,x as y}from"./index-ScBNamNi.js";import{c as x}from"./cartStore-CNg7mac8.js";import{S}from"./SwiperComponent2-DFqBL4uK.js";import"./sweetalert2.all-DYvzZ1P1.js";var w={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"hedy-api-path",BASE_URL:"/Eco-Coffee/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:z,VITE_PATH:E}=w,I={data(){return{isLoading:!1,products:[],product:{},categories:["赫根山 Mount Hagen","生態綠 OKOGREEN","畢嘉士","微笑人咖啡 Laughing Man Coffee"],categoryImages:{"赫根山 Mount Hagen":"https://storage.googleapis.com/vue-course-api.appspot.com/hedy-api-path/1709715033061.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=n85X7ObXNieSwqZLOSrnYmhIL83qxdhcGsxGJzhLIUUageDPpp6hFX%2B8WBZ1x0x%2B5F%2FkYgtlj4cR9%2F5Fi5x3i9LzeB3Q6mzwQcbPhDQW8iIINJPhaJy8HUu1tHKFKXTQbWIqgwSEBv%2BN%2BEdaqQU%2FSmKpbBh2iAd8vLvEWtLe3fFI%2FfE1Dg%2Bw%2FWH4n5vOu0JwZa5yP0O%2BVgZVS1SpfZQP97VxS5U1hrOKtyMjXOoZz8QT46lpiHJFsFzL3XyoGfg0UqdY8MkhYWjfSktfuegFUhVNLvZuAN0%2FG2nlcH8tGYFrAw54or9hlu1xRpiYm8feAyYAqFZnOJ1S5rdEFpTRjw%3D%3D","生態綠 OKOGREEN":"https://storage.googleapis.com/vue-course-api.appspot.com/hedy-api-path/1709715556894.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Tk%2FEOX124uZ9R3QmgPD%2F6hemCuWb%2FIubWOqc4vLAXsR0BsRvNvKCttsBdA4rsmJdvbqBWGSN8ytXPC1yDcOzhOi2gQQTyb4XIYjCpBSLGDikOiNcDAGm%2F%2BjZHwx8izYUxOemNuYb8JYq9rxutE6%2FiMB8IM%2FhEashSovcwpGVMMcx0hRwujaUBRyexKfmJRBgxzduOdf%2FZsW0kA8Vp45IFJ95R3o7j2NOaT%2BV1vW6M%2BgzQb3OkS96FZ9hCw3n97ZLP5WdBJgkdCMVanbEsIbdbjemrnQDC8xWyV17xPemwVajES5wwLfbM9AvQgOfnNlMTGqRRHV81j%2BWbzDxsoGNQA%3D%3D",畢嘉士:"https://storage.googleapis.com/vue-course-api.appspot.com/hedy-api-path/1709715836608.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=E4AK9zjU%2FYtRqaXPjzRupgauGSOBzBfGfIw6MzzPMarYin5jXuP44HGh%2FA2zxIbXQ8gekZMw0wdiIbfZAhc1NIm55RJDHor7nerOCmbXTdI0A1oFyIpmvWTdz3CmF%2BLDt1%2F1WzGUFsaX3P9G29FCSA7i%2B5qBDfRAwxxDzeBT08wefAlGGo1bpLWATFR74CQvIAuEkynQG1zOpsjwbx0RShgg9mEgh4rEgvwv5mz59vOT97ObCcjwuy85NjpVznoKnTrOyyCgTk4Nzu3ADJXjwTozoaK0k%2FYf12e6BH5K7kYS2sNL0%2FDyF1nFcjUJIIb74F88EVO0dqlE48Hd4X%2FzhA%3D%3D","微笑人咖啡 Laughing Man Coffee":"https://storage.googleapis.com/vue-course-api.appspot.com/hedy-api-path/1709716136349.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Pu7xrGVSxcwMV5la8oQGW9F%2BDMRw7ZPbjWygBXtDl9I%2BXd4vORmgmvSFahlVoULqqHOsd%2FL6mPA5u%2B4ckyBPC3BfomiFLW8fECvfN26cnmCOtcED6ldIAUhAjp8rTfXoEZjZj02YT1nStQKHsWkuooFp6ZZ%2FaJsmqTRt4%2BgX%2F6gzB3DoAxXXSqHy5UjzbhLXK%2Fs2IXPbVq%2BwfzwR27W7tQ8SxvUMmdKWScYi5NxL%2BFJjZVS9LmiIAHY%2FagwtfOS%2B5ieXZ4ZMrpZ4m0bPSe2qbHjezy61RnddLf0FmIerEJa%2BmxLKK9dy3P1jYZOtsYi86awpKnxsjrw1qpOxrE27NA%3D%3D"}}},methods:{..._(x,["addToCart"]),getProducts(){const o=`${z}/api/${E}/products/all`;this.isLoading=!0,this.axios.get(o).then(t=>{this.products=t.data.products,this.isLoading=!1}).catch(t=>{this.isLoading=!1,this.pushMessage({style:"danger",title:"取得產品資訊失敗",content:t.response.data.message})})}},components:{SwiperComponent2:S},created(){this.getProducts()}},d=o=>(b("data-v-862ffda8"),o=o(),y(),o),O={class:"header",style:{"background-image":"url(https://storage.googleapis.com/vue-course-api.appspot.com/hedy-api-path/1709543433230.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=RKdXij%2BJKl7scyyCrzbEoL7DKU%2BhtTvd%2B19Qhee9AUDq%2FoXrgyD8lS%2BZCheCWRKgOfScfomYaSL3rgCwbQeThOe2rtiKYmypjiZnqy1hZF0ldnixATNZZaCldVhwKytNUTZHjWoP58IeUI9FLiRG6PMhzknkCEzSP4OdmF54GOEvdYBkQp3D1QhPENbhBB4bjd9WbxuGjJHRuDY5B4pItsX4ZbMPpLQQeOpGiO%2F2AjrnOIW2giK%2BDc4eD4SAZowcPBNK8YJCo79Z9KqZQ6lRS%2FInyi%2BNkpH3UnYfYzqFTN6PEHNva892jSwMMYMtKCu5cC7ReW%2FfkBTEY%2B9GR2KF7g%3D%3D)"}},L={class:"container d-flex align-items-center h-100 position-relative",style:{"z-index":"1"}},j={class:"header-text"},A=d(()=>e("h1",{class:"fw-bold mb-3 text-nowrap"},"發現公平貿易咖啡的美味世界",-1)),D={class:"container mt-6"},R=d(()=>e("h2",{class:"text-center mb-5 fw-bold"},"支持公平貿易的店家",-1)),k={class:"row justify-content-center"},Z={class:"col-lg-10 col-md-9 col-sm-12"},C={class:"row row-cols-lg-2 row-cols-md-2 g-4"},G={class:"image-container"},P=["src","alt"],T={class:"overlay"},N={class:"my-3 text-center d-md-none d-lg-none"},K=d(()=>e("i",{class:"bi bi-arrow-up fw-bold"},null,-1));function X(o,t,Y,M,i,W){const m=a("LoadingOverLay"),h=a("RouterLink"),f=a("router-link"),F=a("SwiperComponent2");return r(),n(g,null,[c(m,{active:i.isLoading,"z-index":1060},null,8,["active"]),e("header",O,[e("div",L,[e("div",j,[A,c(h,{to:"/about",type:"button",class:"btn btn-primary btn-lg",style:{"border-radius":"0"}},{default:p(()=>[l(" 了解公平貿易 ")]),_:1})])])]),e("section",D,[R,e("div",k,[e("div",Z,[e("div",C,[(r(!0),n(g,null,B(i.categories,s=>(r(),n("div",{class:"col-sm-1 mb-4",key:s},[c(f,{to:`/products?category=${s}`,class:"d-block text-muted clickable-link"},{default:p(()=>[e("div",G,[e("img",{src:i.categoryImages[s],alt:s.categories,class:"card-img-top object-fit-cover title-image"},null,8,P),e("div",T,u(s),1)]),e("h3",N,[K,l(u(s),1)])]),_:2},1032,["to"])]))),128))])])])]),c(F)],64)}const q=v(I,[["render",X],["__scopeId","data-v-862ffda8"]]);export{q as default};
