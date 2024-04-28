import{_ as X,r as C,o as f,c as g,a as M,e as x,b as i,F as L,i as R,g as U,p as N,m as z,t as w,f as k,h as J,d as K,y as W,w as F}from"./index-D73JBGpL.js";import{c as q}from"./cartStore-Cja2YL6Z.js";import{t as H}from"./trackStore-Ct4zZg4s.js";import{g as Z,i as $,e as ee,n as D,a as O,N as te,b as se,c as ie,S as oe}from"./SwiperComponent2-Bm4swp65.js";import"./sweetalert2.all-DW_t8ktx.js";function re(u){let{swiper:e,extendParams:m,on:v}=u;m({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let o=!1,y=!1;e.thumbs={swiper:null};function T(){const s=e.thumbs.swiper;if(!s||s.destroyed)return;const t=s.clickedIndex,c=s.clickedSlide;if(c&&c.classList.contains(e.params.thumbs.slideThumbActiveClass)||typeof t>"u"||t===null)return;let d;s.params.loop?d=parseInt(s.clickedSlide.getAttribute("data-swiper-slide-index"),10):d=t,e.params.loop?e.slideToLoop(d):e.slideTo(d)}function b(){const{thumbs:s}=e.params;if(o)return!1;o=!0;const t=e.constructor;if(s.swiper instanceof t)e.thumbs.swiper=s.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper.update();else if($(s.swiper)){const c=Object.assign({},s.swiper);Object.assign(c,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new t(c),y=!0}return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",T),!0}function a(s){const t=e.thumbs.swiper;if(!t||t.destroyed)return;const c=t.params.slidesPerView==="auto"?t.slidesPerViewDynamic():t.params.slidesPerView;let d=1;const l=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(d=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(d=1),d=Math.floor(d),t.slides.forEach(h=>h.classList.remove(l)),t.params.loop||t.params.virtual&&t.params.virtual.enabled)for(let h=0;h<d;h+=1)ee(t.slidesEl,`[data-swiper-slide-index="${e.realIndex+h}"]`).forEach(n=>{n.classList.add(l)});else for(let h=0;h<d;h+=1)t.slides[e.realIndex+h]&&t.slides[e.realIndex+h].classList.add(l);const p=e.params.thumbs.autoScrollOffset,P=p&&!t.params.loop;if(e.realIndex!==t.realIndex||P){const h=t.activeIndex;let n,E;if(t.params.loop){const r=t.slides.filter(I=>I.getAttribute("data-swiper-slide-index")===`${e.realIndex}`)[0];n=t.slides.indexOf(r),E=e.activeIndex>e.previousIndex?"next":"prev"}else n=e.realIndex,E=n>e.previousIndex?"next":"prev";P&&(n+=E==="next"?p:-1*p),t.visibleSlidesIndexes&&t.visibleSlidesIndexes.indexOf(n)<0&&(t.params.centeredSlides?n>h?n=n-Math.floor(c/2)+1:n=n+Math.floor(c/2)-1:n>h&&t.params.slidesPerGroup,t.slideTo(n,s?0:void 0))}}v("beforeInit",()=>{const{thumbs:s}=e.params;if(!(!s||!s.swiper))if(typeof s.swiper=="string"||s.swiper instanceof HTMLElement){const t=Z(),c=()=>{const l=typeof s.swiper=="string"?t.querySelector(s.swiper):s.swiper;if(l&&l.swiper)s.swiper=l.swiper,b(),a(!0);else if(l){const p=P=>{s.swiper=P.detail[0],l.removeEventListener("init",p),b(),a(!0),s.swiper.update(),e.update()};l.addEventListener("init",p)}return l},d=()=>{if(e.destroyed)return;c()||requestAnimationFrame(d)};requestAnimationFrame(d)}else b(),a(!0)}),v("slideChange update resize observerUpdate",()=>{a()}),v("setTransition",(s,t)=>{const c=e.thumbs.swiper;!c||c.destroyed||c.setTransition(t)}),v("beforeDestroy",()=>{const s=e.thumbs.swiper;!s||s.destroyed||y&&s.destroy()}),Object.assign(e.thumbs,{init:b,update:a})}function ne(u){let{swiper:e,extendParams:m,emit:v,once:o}=u;m({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function y(){if(e.params.cssMode)return;const a=e.getTranslate();e.setTranslate(a),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function T(){if(e.params.cssMode)return;const{touchEventsData:a,touches:s}=e;a.velocities.length===0&&a.velocities.push({position:s[e.isHorizontal()?"startX":"startY"],time:a.touchStartTime}),a.velocities.push({position:s[e.isHorizontal()?"currentX":"currentY"],time:D()})}function b(a){let{currentPos:s}=a;if(e.params.cssMode)return;const{params:t,wrapperEl:c,rtlTranslate:d,snapGrid:l,touchEventsData:p}=e,h=D()-p.touchStartTime;if(s<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(s>-e.maxTranslate()){e.slides.length<l.length?e.slideTo(l.length-1):e.slideTo(e.slides.length-1);return}if(t.freeMode.momentum){if(p.velocities.length>1){const _=p.velocities.pop(),S=p.velocities.pop(),Y=_.position-S.position,j=_.time-S.time;e.velocity=Y/j,e.velocity/=2,Math.abs(e.velocity)<t.freeMode.minimumVelocity&&(e.velocity=0),(j>150||D()-_.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=t.freeMode.momentumVelocityRatio,p.velocities.length=0;let n=1e3*t.freeMode.momentumRatio;const E=e.velocity*n;let r=e.translate+E;d&&(r=-r);let I=!1,V;const A=Math.abs(e.velocity)*20*t.freeMode.momentumBounceRatio;let B;if(r<e.maxTranslate())t.freeMode.momentumBounce?(r+e.maxTranslate()<-A&&(r=e.maxTranslate()-A),V=e.maxTranslate(),I=!0,p.allowMomentumBounce=!0):r=e.maxTranslate(),t.loop&&t.centeredSlides&&(B=!0);else if(r>e.minTranslate())t.freeMode.momentumBounce?(r-e.minTranslate()>A&&(r=e.minTranslate()+A),V=e.minTranslate(),I=!0,p.allowMomentumBounce=!0):r=e.minTranslate(),t.loop&&t.centeredSlides&&(B=!0);else if(t.freeMode.sticky){let _;for(let S=0;S<l.length;S+=1)if(l[S]>-r){_=S;break}Math.abs(l[_]-r)<Math.abs(l[_-1]-r)||e.swipeDirection==="next"?r=l[_]:r=l[_-1],r=-r}if(B&&o("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(d?n=Math.abs((-r-e.translate)/e.velocity):n=Math.abs((r-e.translate)/e.velocity),t.freeMode.sticky){const _=Math.abs((d?-r:r)-e.translate),S=e.slidesSizesGrid[e.activeIndex];_<S?n=t.speed:_<2*S?n=t.speed*1.5:n=t.speed*2.5}}else if(t.freeMode.sticky){e.slideToClosest();return}t.freeMode.momentumBounce&&I?(e.updateProgress(V),e.setTransition(n),e.setTranslate(r),e.transitionStart(!0,e.swipeDirection),e.animating=!0,O(c,()=>{!e||e.destroyed||!p.allowMomentumBounce||(v("momentumBounce"),e.setTransition(t.speed),setTimeout(()=>{e.setTranslate(V),O(c,()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(v("_freeModeNoMomentumRelease"),e.updateProgress(r),e.setTransition(n),e.setTranslate(r),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,O(c,()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(r),e.updateActiveIndex(),e.updateSlidesClasses()}else if(t.freeMode.sticky){e.slideToClosest();return}else t.freeMode&&v("_freeModeNoMomentumRelease");(!t.freeMode.momentum||h>=t.longSwipesMs)&&(v("_freeModeStaticRelease"),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:y,onTouchMove:T,onTouchEnd:b}})}const le={props:{product:Object},data(){return{thumbsSwiper:null,modules:[te,re,ne]}},methods:{setThumbsSwiper(u){this.thumbsSwiper=u}},components:{Swiper:se,SwiperSlide:ie}},ae=["src","alt"],ce=["src","alt"],de=["src","alt"],ue=["src","alt"];function me(u,e,m,v,o,y){const T=C("SwiperSlide"),b=C("Swiper");return f(),g(L,null,[M(b,{loop:!1,spaceBetween:10,navigation:!1,thumbs:{swiper:o.thumbsSwiper},modules:o.modules,class:"mySwiper2"},{default:x(()=>[M(T,null,{default:x(()=>[i("img",{src:m.product.imageUrl,alt:m.product.title},null,8,ae)]),_:1}),(f(!0),g(L,null,R(m.product.imagesUrl,(a,s)=>(f(),U(T,{key:s},{default:x(()=>[i("img",{src:m.product.imagesUrl[s],alt:m.product.title},null,8,ce)]),_:2},1024))),128))]),_:1},8,["thumbs","modules"]),M(b,{onSwiper:y.setThumbsSwiper,loop:!1,spaceBetween:10,slidesPerView:6,freeMode:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0,modules:o.modules,class:"mySwiper01 ms-6 mb-4"},{default:x(()=>[M(T,null,{default:x(()=>[i("img",{src:m.product.imageUrl,alt:m.product.title},null,8,de)]),_:1}),(f(!0),g(L,null,R(m.product.imagesUrl,(a,s)=>(f(),U(T,{key:s},{default:x(()=>[i("img",{src:m.product.imagesUrl[s],alt:m.product.title,class:"object-fit-cover"},null,8,ue)]),_:2},1024))),128))]),_:1},8,["onSwiper","modules"])],64)}const pe=X(le,[["render",me]]);var he={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"hedy-api-path",BASE_URL:"/Eco-Coffee/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:G,VITE_PATH:Q}=he,fe={data(){return{isLoading:!1,thumbsSwiper:null,product:{qty:1},products:[],id:""}},computed:{...N(H,["trackList"]),...N(q,["cart"])},methods:{...z(q,["getCart","addToCart"]),...z(H,["getTrack","setTrack"]),setThumbsSwiper(u){this.thumbsSwiper=u},getProducts(){const u=`${G}/api/${Q}/products/all`;this.isLoading=!0,this.axios.get(u).then(e=>{this.products=e.data.products,this.isLoading=!1}).catch(e=>{this.isLoading=!1,this.pushMessage({style:"danger",title:"取得產品資訊失敗",content:e.response.data.message})})},getProduct(){const u=`${G}/api/${Q}/product/${this.id}`;this.isLoading=!0,this.axios.get(u).then(e=>{this.product={...e.data.product,qty:1},this.isLoading=!1}).catch(()=>{this.isLoading=!1})},handleClick(){window.location.reload()}},components:{SwiperComponent:pe,SwiperComponent2:oe},created(){this.id=this.$route.params.productId,this.getProducts(),this.getProduct(),this.getTrack(),this.getCart()}},be={class:"container"},_e={"aria-label":"breadcrumb"},we={class:"breadcrumb mt-3"},ve={class:"breadcrumb-item"},ge={class:"breadcrumb-item"},Te={class:"breadcrumb-item active fw-bold","aria-current":"page"},Se={class:"row justify-content-center"},ye={class:"col-md-6 align-items-center"},xe=["src","alt"],Me={class:"col-12 col-md-5 col-lg-5"},ke={class:"fw-bold mb-3"},Ce={class:"badge bg-primary mb-2"},Pe={class:"row d-flex flex-column"},Ee={class:"col"},Ie=i("p",{class:"fs-5 text-dark mt-2 mb-1"},"【 商品說明 】",-1),Le={class:"text-muted"},Ve={class:"col"},Ae=i("p",{class:"fs-5 text-dark mt-2 mb-1"},"【 商品規格 】",-1),Be={class:"text-muted"},De={key:0,class:"h4 text-primary fw-bold"},Oe={class:"ms-3"},Re={key:1},Ue={class:"h6"},je={key:0,class:"h4 text-primary fw-bold"},Ne={class:"ms-3"},ze=i("hr",null,null,-1),Fe={class:"row mb-4 mt-2"},qe={class:"col-12"},He=i("option",{value:"",disabled:""},"--請選擇數量--",-1),Ge=["value"],Qe={class:"row my-4"},Xe={class:"col-6"},Ye={key:0},Je=i("i",{class:"bi bi-heart-fill text-danger"},null,-1),Ke={key:1},We=i("i",{class:"bi bi-heart"},null,-1),Ze={class:"col-6"},$e=i("i",{class:"bi bi-cart-check"},null,-1);function et(u,e,m,v,o,y){const T=C("LoadingOverLay"),b=C("RouterLink"),a=C("SwiperComponent"),s=C("SwiperComponent2");return f(),g(L,null,[M(T,{active:o.isLoading,"z-index":1060},null,8,["active"]),i("section",be,[i("nav",_e,[i("ol",we,[i("li",ve,[M(b,{to:"/home"},{default:x(()=>[k("首頁")]),_:1})]),i("li",ge,[M(b,{to:"/products"},{default:x(()=>[k("全部商品")]),_:1})]),i("li",Te,w(o.product.title),1)])]),i("div",Se,[i("div",ye,[o.product.imagesUrl?(f(),U(a,{key:1,product:o.product},null,8,["product"])):(f(),g("img",{key:0,src:o.product.imageUrl,class:"img-fluid mb-3 object-fit-cover",width:"525px",alt:o.product.title},null,8,xe))]),i("article",Me,[i("h2",ke,w(o.product.title),1),i("h5",null,[i("span",Ce,w(o.product.category),1)]),i("div",Pe,[i("div",Ee,[Ie,i("p",Le,w(o.product.description),1)]),i("div",Ve,[Ae,i("p",Be,w(o.product.content),1)])]),o.product.origin_price===o.product.price?(f(),g("div",De,[k(w(o.product.price)+"元",1),i("span",Oe,"/ "+w(o.product.unit),1)])):(f(),g("div",Re,[i("del",Ue,"原價 "+w(o.product.origin_price)+" 元",1),o.product.price?(f(),g("div",je,[k(" 現在只要 NT$ "+w(o.product.price)+" 元",1),i("span",Ne,"/ "+w(o.product.unit),1)])):J("",!0)])),ze,i("div",Fe,[i("div",qe,[K(i("select",{name:"productQty",id:"productQty",class:"form-select mr-3","onUpdate:modelValue":e[0]||(e[0]=t=>o.product.qty=t)},[He,(f(),g(L,null,R(5,t=>i("option",{key:t,value:t},w(t)+" "+w(o.product.unit),9,Ge)),64))],512),[[W,o.product.qty]])])]),i("div",Qe,[i("div",Xe,[i("button",{class:"btn btn-outline-primary w-100",type:"button",onClick:e[1]||(e[1]=F(t=>u.setTrack(o.product.id),["prevent"]))},[u.trackList.includes(o.product.id)?(f(),g("span",Ye,[Je,k(" 已加入收藏 ")])):(f(),g("span",Ke,[We,k(" 加入收藏 ")]))])]),i("div",Ze,[i("button",{class:"btn btn-primary w-100",type:"button",onClick:e[2]||(e[2]=F(t=>u.addToCart(o.product.id,o.product.qty),["prevent"]))},[$e,k(" 加入購物車 ")])])])])])]),M(s,{onClick:y.handleClick},null,8,["onClick"])],64)}const nt=X(fe,[["render",et]]);export{nt as default};