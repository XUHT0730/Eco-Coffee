import{_ as C,p as T,m as u,r as g,o as i,c as a,a as c,b as t,d as E,v as $,n as v,e as h,F as m,i as y,f as _,t as r,h as S,w as V}from"./index-ScBNamNi.js";import{c as U}from"./cartStore-CNg7mac8.js";import{t as b}from"./trackStore-CTF9Smll.js";import{t as M}from"./toastMessage-C11o2i5Q.js";import{P as N}from"./PaginationComponent-CE4fhVNK.js";import"./sweetalert2.all-DYvzZ1P1.js";var O={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"hedy-api-path",BASE_URL:"/Eco-Coffee/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:k,VITE_PATH:w}=O,R={data(){return{status:{loadingItem:""},isLoading:!1,fullPage:!1,products:[],categories:["赫根山 Mount Hagen","生態綠 OKOGREEN","畢嘉士","微笑人咖啡 Laughing Man Coffee"],product:{},search:"",cart:{},pagination:{}}},computed:{...T(b,["trackList"])},methods:{...u(M,["pushMessage"]),...u(U,["addToCart"]),...u(b,["getTrack","setTrack"]),getProducts(e=1){const{category:n=""}=this.$route.query,l=`${k}/api/${w}/products?category=${n}&page=${e}`;this.isLoading=!0,this.axios.get(l).then(p=>{const{pagination:o}=p.data;this.pagination=o,this.products=p.data.products,this.isLoading=!1}).catch(()=>{this.isLoading=!1})},getProduct(e){this.$router.push(`product/${e}`)},getSearch(){const e=`${k}/api/${w}/products/all`;this.isLoading=!0,this.axios.get(e).then(n=>{this.products=n.data.products,this.isLoading=!1,this.products=this.products.filter(l=>l.title.trim().toLowerCase().includes(this.search.toLowerCase()))}).catch(()=>{this.isLoading=!1})}},components:{PaginationComponent:N},watch:{search(e){this.getSearch(1,e)},"$route.query":{handler(){this.getProducts()},deep:!0}},created(){this.getProducts(),this.getTrack(),this.getSearch()}},D={class:"bg-light py-4"},I={class:"container"},q={class:"row d-flex justify-content-end"},A={class:"col-md-3"},B={class:"input-group w-100 mt-md-0 mt-3"},j=t("div",{class:"input-group-append"},[t("button",{class:"btn btn-primary py-2",type:"button",id:"search"},[t("i",{class:"bi bi-search"})])],-1),H={class:"container ec-container"},z={class:"row mt-5 mt-md-5 mt-3"},F={class:"col-lg-2 col-md-3 mb-5"},G={class:"list-group"},K={class:"col-lg-10 col-lg-10 col-md-9 mb-5"},J={class:"vl-parent"},Q={class:"row row-cols-3 g-4"},W={key:0,class:"col"},X=t("p",{class:"h4 text-danger"},"Sorry ~ 查無此商品",-1),Y=[X],Z={class:"card product-card shadow bg-white mb-sm-4 ms-md-4 m-sm-auto"},tt=["src","alt"],st={class:"card-body position-relative"},et={class:"row d-flex"},ot={class:"col"},it={class:"left w-100"},at={class:"bg-secondary position-absolute fs-6 px-2 py-1 text-white category"},ct={class:"col-3"},nt={class:"right w-100 text-end"},rt=["onClick"],lt={key:0},dt=t("i",{class:"bi bi-heart-fill fs-4 text-danger"},null,-1),ht=[dt],_t={key:1},pt=t("i",{class:"bi bi-heart fs-4 text-danger"},null,-1),ut=[pt],gt={class:"card-title pt-2 fw-bold"},mt={key:0,class:"h5 fw-bold"},ft={key:1},vt={class:"h6 text-dark"},yt={key:0,class:"h5 fw-bold"},bt=["onClick"],kt=t("i",{class:"bi bi-cart-check"},null,-1);function wt(e,n,l,p,o,L){const f=g("LoadingOverLay"),d=g("router-link"),x=g("PaginationComponent");return i(),a(m,null,[c(f,{active:o.isLoading,"z-index":1060},null,8,["active"]),t("section",D,[t("div",I,[t("div",q,[t("div",A,[t("div",B,[E(t("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=s=>o.search=s),class:"form-control border-primary py-2",placeholder:"快速搜尋 ex : 低咖啡因、濾掛"},null,512),[[$,o.search,void 0,{trim:!0}]]),j])])])])]),t("section",H,[t("div",z,[t("div",F,[t("ul",G,[t("li",{class:v([{active:!e.$route.query.category},"list-group-item"])},[c(d,{class:"py-2 d-block",style:{color:"black"},to:"/products"},{default:h(()=>[_("全部商品")]),_:1})],2),(i(!0),a(m,null,y(o.categories,s=>(i(),a("li",{key:s,class:v(["list-group-item",{active:e.$route.query.category===s}])},[c(d,{class:"py-2 d-block",style:{color:"black"},to:`/products?category=${s}`},{default:h(()=>[_(r(s),1)]),_:2},1032,["to"])],2))),128))])]),t("div",K,[t("div",J,[c(f,{active:o.isLoading,"is-full-page":o.fullPage},null,8,["active","is-full-page"]),t("div",Q,[o.products.length===0?(i(),a("div",W,Y)):(i(!0),a(m,{key:1},y(o.products,s=>(i(),a("div",{class:"col-12 col-xl-4 col-lg-5 d-flex justify-content-center",key:s.id},[t("div",Z,[c(d,{to:`/product/${s.id}`,class:"product-card-link"},{default:h(()=>[t("img",{src:s.imageUrl,alt:s.title,class:"product-card-img"},null,8,tt)]),_:2},1032,["to"]),t("div",st,[t("div",et,[t("div",ot,[t("div",it,[t("div",at,r(s.category),1)])]),t("div",ct,[t("div",nt,[t("div",{onClick:P=>e.setTrack(s.id)},[e.trackList.includes(s.id)?(i(),a("span",lt,ht)):(i(),a("span",_t,ut))],8,rt)])])]),t("h5",gt,[c(d,{to:`/product/${s.id}`},{default:h(()=>[_(r(s.title),1)]),_:2},1032,["to"])]),t("td",null,[s.origin_price===s.price?(i(),a("div",mt," NT$ "+r(s.price)+" 元 ",1)):(i(),a("div",ft,[t("del",vt,"原價 "+r(s.origin_price)+" 元",1),s.price?(i(),a("div",yt," 現在只要 NT$ "+r(s.price)+" 元 ",1)):S("",!0)]))]),t("button",{class:"btn btn-primary w-100",type:"button",onClick:V(P=>e.addToCart(s.id),["prevent"])},[kt,_(" 加入購物車 ")],8,bt)])])]))),128))])])]),c(x,{class:"d-flex justify-content-center",pagination:o.pagination,onEmitPages:L.getProducts},null,8,["pagination","onEmitPages"])])])],64)}const $t=C(R,[["render",wt]]);export{$t as default};
