import{_,m as a,r as d,o as r,c,a as l,b as e,e as h,t as o,h as n,w as m,F as f,f as v}from"./index-Bnjvlgro.js";import{c as g}from"./cartStore-DZd-oacZ.js";import{t as b}from"./toastMessage-De8WdkPR.js";var L={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"hedy-api-path",BASE_URL:"/Eco-Coffee/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:k,VITE_PATH:y}=L,E={data(){return{isLoading:!1,product:{},id:""}},methods:{...a(b,["pushMessage"]),...a(g,["addToCart"]),getProduct(){const i=`${k}/api/${y}/product/${this.id}`;this.isLoading=!0,this.axios.get(i).then(s=>{this.product=s.data.product,this.isLoading=!1})}},created(){this.id=this.$route.params.productId,this.getProduct()}},T={class:"container"},V={"aria-label":"breadcrumb"},x={class:"breadcrumb"},C={class:"breadcrumb-item"},R={class:"breadcrumb-item active","aria-current":"page"},P={class:"row justify-content-center"},w={class:"col-8"},I=["src","alt"],S={class:"col-4"},U={key:0,class:"h5"},A={key:1,class:"h6"},B={key:2,class:"h5"},D=e("hr",null,null,-1);function M(i,s,N,O,t,F){const u=d("LoadingOverLay"),p=d("RouterLink");return r(),c(f,null,[l(u,{active:t.isLoading,"z-index":1060},null,8,["active"]),e("div",T,[e("nav",V,[e("ol",x,[e("li",C,[l(p,{to:"/cart"},{default:h(()=>[v("購物車")]),_:1})]),e("li",R,o(t.product.title),1)])]),e("div",P,[e("article",w,[e("h2",null,o(t.product.title),1),e("div",null,o(t.product.content),1),e("div",null,o(t.product.description),1),e("img",{src:t.product.imageUrl,class:"img-fluid mb-3",alt:t.product.title},null,8,I)]),e("div",S,[t.product.price?n("",!0):(r(),c("div",U,o(t.product.origin_price)+" 元",1)),t.product.price?(r(),c("del",A,"原價 "+o(t.product.origin_price)+" 元",1)):n("",!0),t.product.price?(r(),c("div",B,"現在只要 "+o(t.product.price)+" 元",1)):n("",!0),D,e("a",{class:"btn btn-dark w-100 py-2",onClick:s[0]||(s[0]=m(H=>i.addToCart(t.product.id),["prevent"]))},"加入購物車")])])])],64)}const G=_(E,[["render",M]]);export{G as default};
