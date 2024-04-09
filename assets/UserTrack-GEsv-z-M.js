import{_ as y,p as x,m as u,r as d,o,c as e,a,b as t,F as f,i as L,e as r,t as i,f as n,h as l,w}from"./index-CRfqc60q.js";import{c as T}from"./cartStore-Pz2VlNCe.js";import{t as m}from"./trackStore-BYaULkG_.js";import"./sweetalert2.all-CXSejtdh.js";var C={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"hedy-api-path",BASE_URL:"/Eco-Coffee/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:E,VITE_PATH:V}=C,P={data(){return{isLoading:!1,products:[],cart:{}}},computed:{...x(m,["trackList"]),filterProducts(){return this.products.filter(c=>this.trackList.includes(c.id))}},methods:{...u(T,["addToCart"]),...u(m,["getTrack","setTrack"]),getProducts(){this.isLoading=!0;const c=`${E}/api/${V}/products/all`;this.axios.get(c).then(_=>{this.products=_.data.products,this.isLoading=!1}).catch(()=>{this.isLoading=!1})}},mounted(){this.getProducts(),this.getTrack()}},R={class:"position-relative mb-6 ec-container"},S={key:0},$={class:"container"},U={class:"row d-flex justify-content-center"},A=t("div",{class:"col-12 text-center text-dark mt-xl-7 mt-lg-7 mt-md-7","data-aos":"fade-down"},[t("div",{class:"h3 fw-bold mt-5 mb-2"},"追蹤商品")],-1),B={class:"row row-cols-4 g-4 col-lg-12 col-md-10 mb-5 d-flex"},D={class:"card product-card shadow bg-white mb-sm-4 ms-md-4 m-sm-auto"},I=["src","alt"],N={class:"card-body position-relative"},O={class:"row d-flex"},j={class:"col"},F={class:"w-100"},H={class:"bg-secondary position-absolute fs-9 px-2 py-1 text-white category"},M={class:"col-3"},z={class:"w-100 text-end"},q=["onClick"],G={key:0},J=t("i",{class:"bi bi-heart-fill fs-4 text-danger"},null,-1),K=[J],Q={key:1},W=t("i",{class:"bi bi-heart fs-4 text-danger"},null,-1),X=[W],Y={class:"card-title pt-2 fw-bold"},Z={key:0,class:"h5"},tt={key:1,class:"h6 text-dark"},st={key:2,class:"h5 fw-bold"},ot=["onClick"],et=t("i",{class:"bi bi-cart-check"},null,-1),ct={key:1,class:"text-center mb-7 mb-md-9 pt-7 pt-md-9"},it=t("h2",{class:"text-dark mt-6"},"沒有追蹤商品，快去逛逛",-1),at=t("p",{class:"text-primary my-4 mb-md-5"},"前往商品列表",-1);function dt(c,_,rt,nt,v,h){const k=d("LoadingOverLay"),p=d("router-link"),g=d("RouterLink");return o(),e(f,null,[a(k,{active:v.isLoading,"z-index":1060,class:"text-center"},null,8,["active"]),t("section",R,[h.filterProducts.length>0?(o(),e("div",S,[t("div",$,[t("div",U,[A,t("div",B,[(o(!0),e(f,null,L(h.filterProducts,s=>(o(),e("div",{key:s.id,class:"col-12 col-xl-3 col-lg-3 d-flex justify-content-center"},[t("div",D,[a(p,{to:`/product/${s.id}`,class:"product-card-link"},{default:r(()=>[t("img",{src:s.imageUrl,alt:s.title,class:"product-card-img"},null,8,I)]),_:2},1032,["to"]),t("div",N,[t("div",O,[t("div",j,[t("div",F,[t("div",H,i(s.category),1)])]),t("div",M,[t("div",z,[t("div",{onClick:b=>c.setTrack(s.id)},[c.trackList.includes(s.id)?(o(),e("span",G,K)):(o(),e("span",Q,X))],8,q)])])]),t("h5",Y,[a(p,{to:`/product/${s.id}`},{default:r(()=>[n(i(s.title),1)]),_:2},1032,["to"])]),t("td",null,[s.price?l("",!0):(o(),e("div",Z,i(s.origin_price)+" 元 ",1)),s.price?(o(),e("del",tt," 原價 "+i(s.origin_price)+" 元",1)):l("",!0),s.price?(o(),e("div",st," 現在只要 "+i(s.price)+" 元 ",1)):l("",!0)]),t("button",{class:"btn btn-primary w-100",type:"button",onClick:w(b=>c.addToCart(s.id),["prevent"])},[et,n(" 加入購物車 ")],8,ot)])])]))),128))])])])])):(o(),e("div",ct,[it,at,a(g,{to:"/products",class:"fs-5 btn btn-primary py-3 px-5"},{default:r(()=>[n(" 查看商品 ")]),_:1})]))])],64)}const ut=y(P,[["render",dt]]);export{ut as default};
