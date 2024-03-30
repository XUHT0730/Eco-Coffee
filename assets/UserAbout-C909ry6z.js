import{_ as w,p as k,m as v,r as h,o as e,c as o,a as c,b as t,e as d,F as p,i as x,s as E,f as l,t as a,h as r,w as L}from"./index-ScBNamNi.js";import{c as C}from"./cartStore-CNg7mac8.js";import{t as g}from"./trackStore-CTF9Smll.js";import"./sweetalert2.all-DYvzZ1P1.js";const I="/Eco-Coffee/assets/aboutus00-olEPRXT6.png",T="/Eco-Coffee/assets/aboutus01-v_Pv9dq-.png",j="/Eco-Coffee/assets/undraw_barista_qd50-CYoRSKxZ.svg";var N={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"hedy-api-path",BASE_URL:"/Eco-Coffee/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:R,VITE_PATH:V}=N,U={data(){return{products:[],product:{},isLoading:!1}},computed:{...k(g,["trackList"])},methods:{...v(C,["addToCart"]),...v(g,["getTrack","setTrack"]),getProducts(){const i=`${R}/api/${V}/products/all`;this.isLoading=!0,this.axios.get(i).then(n=>{this.products=n.data.products,this.isLoading=!1}).catch(n=>{this.isLoading=!1,this.pushMessage({style:"danger",title:"取得產品資訊失敗",content:n.response.data.message})})}},created(){this.getProducts(),this.getTrack()}},z=E('<section class="container position-relative"><video src="https://storage.coverr.co/videos/IIHifY02t9LqcHkbEs2DTK8NElI2JKm4H?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjEzNjM3NDE5fQ.UUz6vmTAmUCQzbhRYZNL3WuFntsfFNQn_sPhJit3Hnk" autoplay muted loop class="w-100"></video><div class="layout-wrapper"><i class="h2 bi bi-cup-hot me-2 ff-minor"></i><span class="h2 ff-minor">Eco-Coffee</span><h3 class="mt-3">連結咖啡愛好者與咖啡農民</h3></div></section><section class="container mt-6"><div class="row justify-content-center"><div class="col-md-5"><img src="'+I+'" class="w-100 h-70 object-fit-cover" alt="fair-trand"></div><div class="col-md-5 d-flex align-items-center"><div><h2 class="fw-bold my-4">什麼是公平貿易咖啡？</h2><p> 國際公平貿易組織的成立，主要目的是為了協助咖啡市場能夠秉持著公平貿易的原則做買賣交易， 經濟學之父亞當史密斯曾於國富論中提及「自由市場中的價格機制應為供需平衡」， 然而現實是發展中國家的貿易常態性被剝削，許多較貧困的咖啡農民即使生產出品質出眾的咖啡， 所獲取的利潤依然屈指可數，1980年代，更因咖啡供過於求的問題，導致出現咖啡過剩的危機， 進而影響到咖啡農民們的咖啡賣價被極其嚴重壓縮，公平貿易的觀念也就是由此興起， 少數已開發的歐美國家協同發起穩定咖啡市場的機制，試圖透過人為的介入將利潤回饋給咖啡農民們， 同時也盡可能讓咖啡的貿易可以趨於公平。 </p></div></div></div><div class="row justify-content-center mt-6 flex-row-reverse"><div class="col-md-5"><img class="w-100 object-fit-cover" src="'+T+'" alt="公平貿易的定義原則"></div><div class="col-md-5 d-flex align-items-center"><div><h2 class="fw-bold my-4">公平貿易的定義原則</h2><p> 「以公開公平的國際交易為原則、強調保護勞動生產農民們權益的重要性、並致力於改革和國際貿易的永續發展， 建立一個對話、透明、尊重的貿易夥伴關係」，乃為最被廣為接受的公平貿易宗旨，也是由國際公平貿易標籤組織FLO、 國際公平貿易協會IFAT、歐洲世界商店連線NEW、歐洲公平貿易協會EFTA等四個公平貿易組織共同創立的準則。 </p><p> 所謂公平貿易，為的就是拉近發展中國家和已開發國家的差距，為咖啡農民們爭取更多的利潤空間， 促使農民們可以回饋購買者更多品質優良的咖啡，長遠目標更是期許國際之間的貿易， 能夠以公平的合作方式互補成長，謀取彼此最大的利益。 </p></div></div></div></section>',2),A={class:"py-5 mt-6",style:{"background-image":"url(https://www.toptal.com/designers/subtlepatterns/uploads/spikes.png)"}},F={class:"container"},P={class:"row justify-content-center"},S=t("div",{class:"col-md-4 text-center"},[t("img",{style:{height:"312px",width:"309px"},src:j})],-1),H={class:"col-md-4 d-flex align-items-center"},J=t("p",null," 隨著對社會責任和可持續發展的關注日益增加， 公平貿易成為了一個炙手可熱的話題。作為消費者， 我們的購買行為對世界的影響力不容小覷。透過支持公平貿易， 我們可以為全球的咖啡種植者和農民帶來實質的幫助， 同時也在推動社會公平和環境保護方面發揮積極作用。 ",-1),$={class:"container me-6"},D=t("p",{class:"h2 text-center my-6 fw-bold"},"選購公平貿易咖啡商品",-1),O={class:"d-flex justify-content-center align-items-center"},B={class:"row row-cols-3 mb-4 g-4 col-lg-12 col-md-10 mb-5 d-flex justify-content-center"},M={key:0,class:"col col-12 col-xl-4 col-lg-5 d-flex justify-content-center"},Q={class:"card product-card shadow bg-white mb-sm-4 ms-md-4 m-sm-auto"},q=["src","alt"],K={class:"card-body position-relative"},W={class:"row d-flex"},Y={class:"col"},Z={class:"left w-100"},G={class:"bg-secondary position-absolute fs-6 px-2 py-1 text-white category"},X={class:"col-3"},tt={class:"right w-100 text-end"},st=["onClick"],et={key:0},ot=t("i",{class:"bi bi-heart-fill fs-4 text-danger"},null,-1),it=[ot],ct={key:1},at=t("i",{class:"bi bi-heart fs-4 text-danger"},null,-1),nt=[at],dt={class:"card-title pt-2 fw-bold"},lt={key:0,class:"h5"},rt={key:1,class:"h6 text-dark"},_t={key:2,class:"h5 fw-bold"},ht=["onClick"],pt=t("i",{class:"bi bi-cart-check"},null,-1),mt={class:"row d-flex justify-content-center"};function ut(i,n,ft,vt,_,gt){const y=h("LoadingOverLay"),m=h("RouterLink"),u=h("router-link");return e(),o(p,null,[c(y,{active:_.isLoading,"z-index":1060},null,8,["active"]),z,t("section",A,[t("div",F,[t("div",P,[S,t("div",H,[t("div",null,[J,c(m,{to:"/articles",type:"button",class:"btn btn-primary w-100 py-2 text-bold",style:{"border-radius":"0"}},{default:d(()=>[l(" 查看更多文章 ")]),_:1})])])])])]),t("section",$,[D,t("div",O,[t("div",B,[(e(!0),o(p,null,x(_.products,(s,f)=>(e(),o(p,{key:s.id},[f<2||_.products[f-1].category!==s.category?(e(),o("div",M,[t("div",Q,[c(u,{to:`/product/${s.id}`,class:"product-card-link"},{default:d(()=>[t("img",{src:s.imageUrl,alt:s.title,class:"product-card-img"},null,8,q)]),_:2},1032,["to"]),t("div",K,[t("div",W,[t("div",Y,[t("div",Z,[t("div",G,a(s.category),1)])]),t("div",X,[t("div",tt,[t("div",{onClick:b=>i.setTrack(s.id)},[i.trackList.includes(s.id)?(e(),o("span",et,it)):(e(),o("span",ct,nt))],8,st)])])]),t("h5",dt,[c(u,{to:`/product/${s.id}`},{default:d(()=>[l(a(s.title),1)]),_:2},1032,["to"])]),t("td",null,[s.price?r("",!0):(e(),o("div",lt,a(i.item.origin_price)+" 元 ",1)),s.price?(e(),o("del",rt," 原價 "+a(s.origin_price)+" 元",1)):r("",!0),s.price?(e(),o("div",_t," 現在只要 "+a(s.price)+" 元 ",1)):r("",!0)]),t("button",{class:"btn btn-primary w-100",type:"button",onClick:L(b=>i.addToCart(s.id),["prevent"])},[pt,l(" 加入購物車 ")],8,ht)])])])):r("",!0)],64))),128))])]),t("div",mt,[c(m,{to:"/products",type:"button",class:"btn btn-outline-primary fs-5 py-3 w-50 text-nowrap"},{default:d(()=>[l(" 查看更多商品 ")]),_:1})])])],64)}const xt=w(U,[["render",ut]]);export{xt as default};