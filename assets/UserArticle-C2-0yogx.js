import{_ as d,m as _,r as o,o as h,c as m,a as c,b as e,e as u,t as a,f as r}from"./index-aaLPSl0K.js";import{t as p}from"./toastMessage-DNINzTwN.js";var f={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"hedy-api-path",BASE_URL:"/Eco-Coffee/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:g,VITE_PATH:L}=f,v={data(){return{isLoading:!1,article:{},id:""}},methods:{..._(p,["pushMessage"]),getArticle(){const i=`${g}/api/${L}/article/${this.id}`;this.isLoading=!0,this.axios.get(i).then(s=>{this.article=s.data.article,this.isLoading=!1}).catch(s=>{this.isLoading=!1,this.pushMessage({style:"danger",title:"取得文章資訊失敗",content:s.response.data.message})})}},created(){this.id=this.$route.params.articleId,this.getArticle()}},b={class:"container ec-container"},x={"aria-label":"breadcrumb"},E={class:"breadcrumb mt-3"},T={class:"breadcrumb-item"},V={class:"row justify-content-center"},y={class:"col-8"},A={class:"fw-bold"},R={class:"text-muted"},M={class:"text-muted"},I=["src","alt"],U=["innerHTML"];function k(i,s,B,D,t,H){const n=o("LoadingOverLay"),l=o("RouterLink");return h(),m("div",b,[c(n,{active:t.isLoading,"z-index":1060},null,8,["active"]),e("nav",x,[e("ol",E,[e("li",T,[c(l,{to:"/articles"},{default:u(()=>[r("部落格列表")]),_:1})])])]),e("div",V,[e("article",y,[e("h2",A,a(t.article.title),1),e("p",null,[e("small",R,a(i.$filters.date(t.article.create_at)),1),r(" - "),e("small",M,"作者："+a(t.article.author),1)]),e("img",{src:t.article.imageUrl,alt:t.article.title,class:"img-fluid my-3"},null,8,I),e("div",{innerHTML:t.article.content},null,8,U)])])])}const w=d(v,[["render",k]]);export{w as default};
