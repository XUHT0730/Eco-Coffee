import{_ as G,r as C,o as h,c as S,a as x,e as y,b as i,F as A,i as j,g as R,p as Y,m as N,t as T,f as k,h as J,w as z}from"./index-ScBNamNi.js";import{c as K}from"./cartStore-CNg7mac8.js";import{t as F}from"./trackStore-CTF9Smll.js";import{g as Q,i as W,e as Z,n as O,a as D,N as $,b as ee,c as te,S as se}from"./SwiperComponent2-DFqBL4uK.js";import"./sweetalert2.all-DYvzZ1P1.js";function ie(u){let{swiper:e,extendParams:m,on:w}=u;m({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let o=!1,M=!1;e.thumbs={swiper:null};function g(){const s=e.thumbs.swiper;if(!s||s.destroyed)return;const t=s.clickedIndex,c=s.clickedSlide;if(c&&c.classList.contains(e.params.thumbs.slideThumbActiveClass)||typeof t>"u"||t===null)return;let d;s.params.loop?d=parseInt(s.clickedSlide.getAttribute("data-swiper-slide-index"),10):d=t,e.params.loop?e.slideToLoop(d):e.slideTo(d)}function b(){const{thumbs:s}=e.params;if(o)return!1;o=!0;const t=e.constructor;if(s.swiper instanceof t)e.thumbs.swiper=s.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper.update();else if(W(s.swiper)){const c=Object.assign({},s.swiper);Object.assign(c,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new t(c),M=!0}return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",g),!0}function l(s){const t=e.thumbs.swiper;if(!t||t.destroyed)return;const c=t.params.slidesPerView==="auto"?t.slidesPerViewDynamic():t.params.slidesPerView;let d=1;const a=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(d=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(d=1),d=Math.floor(d),t.slides.forEach(f=>f.classList.remove(a)),t.params.loop||t.params.virtual&&t.params.virtual.enabled)for(let f=0;f<d;f+=1)Z(t.slidesEl,`[data-swiper-slide-index="${e.realIndex+f}"]`).forEach(n=>{n.classList.add(a)});else for(let f=0;f<d;f+=1)t.slides[e.realIndex+f]&&t.slides[e.realIndex+f].classList.add(a);const p=e.params.thumbs.autoScrollOffset,P=p&&!t.params.loop;if(e.realIndex!==t.realIndex||P){const f=t.activeIndex;let n,E;if(t.params.loop){const r=t.slides.filter(I=>I.getAttribute("data-swiper-slide-index")===`${e.realIndex}`)[0];n=t.slides.indexOf(r),E=e.activeIndex>e.previousIndex?"next":"prev"}else n=e.realIndex,E=n>e.previousIndex?"next":"prev";P&&(n+=E==="next"?p:-1*p),t.visibleSlidesIndexes&&t.visibleSlidesIndexes.indexOf(n)<0&&(t.params.centeredSlides?n>f?n=n-Math.floor(c/2)+1:n=n+Math.floor(c/2)-1:n>f&&t.params.slidesPerGroup,t.slideTo(n,s?0:void 0))}}w("beforeInit",()=>{const{thumbs:s}=e.params;if(!(!s||!s.swiper))if(typeof s.swiper=="string"||s.swiper instanceof HTMLElement){const t=Q(),c=()=>{const a=typeof s.swiper=="string"?t.querySelector(s.swiper):s.swiper;if(a&&a.swiper)s.swiper=a.swiper,b(),l(!0);else if(a){const p=P=>{s.swiper=P.detail[0],a.removeEventListener("init",p),b(),l(!0),s.swiper.update(),e.update()};a.addEventListener("init",p)}return a},d=()=>{if(e.destroyed)return;c()||requestAnimationFrame(d)};requestAnimationFrame(d)}else b(),l(!0)}),w("slideChange update resize observerUpdate",()=>{l()}),w("setTransition",(s,t)=>{const c=e.thumbs.swiper;!c||c.destroyed||c.setTransition(t)}),w("beforeDestroy",()=>{const s=e.thumbs.swiper;!s||s.destroyed||M&&s.destroy()}),Object.assign(e.thumbs,{init:b,update:l})}function oe(u){let{swiper:e,extendParams:m,emit:w,once:o}=u;m({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function M(){if(e.params.cssMode)return;const l=e.getTranslate();e.setTranslate(l),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function g(){if(e.params.cssMode)return;const{touchEventsData:l,touches:s}=e;l.velocities.length===0&&l.velocities.push({position:s[e.isHorizontal()?"startX":"startY"],time:l.touchStartTime}),l.velocities.push({position:s[e.isHorizontal()?"currentX":"currentY"],time:O()})}function b(l){let{currentPos:s}=l;if(e.params.cssMode)return;const{params:t,wrapperEl:c,rtlTranslate:d,snapGrid:a,touchEventsData:p}=e,f=O()-p.touchStartTime;if(s<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(s>-e.maxTranslate()){e.slides.length<a.length?e.slideTo(a.length-1):e.slideTo(e.slides.length-1);return}if(t.freeMode.momentum){if(p.velocities.length>1){const _=p.velocities.pop(),v=p.velocities.pop(),X=_.position-v.position,U=_.time-v.time;e.velocity=X/U,e.velocity/=2,Math.abs(e.velocity)<t.freeMode.minimumVelocity&&(e.velocity=0),(U>150||O()-_.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=t.freeMode.momentumVelocityRatio,p.velocities.length=0;let n=1e3*t.freeMode.momentumRatio;const E=e.velocity*n;let r=e.translate+E;d&&(r=-r);let I=!1,L;const V=Math.abs(e.velocity)*20*t.freeMode.momentumBounceRatio;let B;if(r<e.maxTranslate())t.freeMode.momentumBounce?(r+e.maxTranslate()<-V&&(r=e.maxTranslate()-V),L=e.maxTranslate(),I=!0,p.allowMomentumBounce=!0):r=e.maxTranslate(),t.loop&&t.centeredSlides&&(B=!0);else if(r>e.minTranslate())t.freeMode.momentumBounce?(r-e.minTranslate()>V&&(r=e.minTranslate()+V),L=e.minTranslate(),I=!0,p.allowMomentumBounce=!0):r=e.minTranslate(),t.loop&&t.centeredSlides&&(B=!0);else if(t.freeMode.sticky){let _;for(let v=0;v<a.length;v+=1)if(a[v]>-r){_=v;break}Math.abs(a[_]-r)<Math.abs(a[_-1]-r)||e.swipeDirection==="next"?r=a[_]:r=a[_-1],r=-r}if(B&&o("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(d?n=Math.abs((-r-e.translate)/e.velocity):n=Math.abs((r-e.translate)/e.velocity),t.freeMode.sticky){const _=Math.abs((d?-r:r)-e.translate),v=e.slidesSizesGrid[e.activeIndex];_<v?n=t.speed:_<2*v?n=t.speed*1.5:n=t.speed*2.5}}else if(t.freeMode.sticky){e.slideToClosest();return}t.freeMode.momentumBounce&&I?(e.updateProgress(L),e.setTransition(n),e.setTranslate(r),e.transitionStart(!0,e.swipeDirection),e.animating=!0,D(c,()=>{!e||e.destroyed||!p.allowMomentumBounce||(w("momentumBounce"),e.setTransition(t.speed),setTimeout(()=>{e.setTranslate(L),D(c,()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(w("_freeModeNoMomentumRelease"),e.updateProgress(r),e.setTransition(n),e.setTranslate(r),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,D(c,()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(r),e.updateActiveIndex(),e.updateSlidesClasses()}else if(t.freeMode.sticky){e.slideToClosest();return}else t.freeMode&&w("_freeModeNoMomentumRelease");(!t.freeMode.momentum||f>=t.longSwipesMs)&&(w("_freeModeStaticRelease"),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:M,onTouchMove:g,onTouchEnd:b}})}const re={props:{product:Object},data(){return{thumbsSwiper:null,modules:[$,ie,oe]}},methods:{setThumbsSwiper(u){this.thumbsSwiper=u}},components:{Swiper:ee,SwiperSlide:te}},ne=["src","alt"],ae=["src","alt"],le=["src","alt"],ce=["src","alt"];function de(u,e,m,w,o,M){const g=C("SwiperSlide"),b=C("Swiper");return h(),S(A,null,[x(b,{loop:!1,spaceBetween:10,navigation:!1,thumbs:{swiper:o.thumbsSwiper},modules:o.modules,class:"mySwiper2"},{default:y(()=>[x(g,null,{default:y(()=>[i("img",{src:m.product.imageUrl,alt:m.product.title},null,8,ne)]),_:1}),(h(!0),S(A,null,j(m.product.imagesUrl,(l,s)=>(h(),R(g,{key:s},{default:y(()=>[i("img",{src:m.product.imagesUrl[s],alt:m.product.title},null,8,ae)]),_:2},1024))),128))]),_:1},8,["thumbs","modules"]),x(b,{onSwiper:M.setThumbsSwiper,loop:!1,spaceBetween:10,slidesPerView:6,freeMode:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0,modules:o.modules,class:"mySwiper01"},{default:y(()=>[x(g,null,{default:y(()=>[i("img",{src:m.product.imageUrl,alt:m.product.title},null,8,le)]),_:1}),(h(!0),S(A,null,j(m.product.imagesUrl,(l,s)=>(h(),R(g,{key:s},{default:y(()=>[i("img",{src:m.product.imagesUrl[s],alt:m.product.title,class:"object-fit-cover"},null,8,ce)]),_:2},1024))),128))]),_:1},8,["onSwiper","modules"])],64)}const ue=G(re,[["render",de]]);var me={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"hedy-api-path",BASE_URL:"/Eco-Coffee/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:H,VITE_PATH:q}=me,pe={data(){return{isLoading:!1,thumbsSwiper:null,product:{},products:[],id:""}},computed:{...Y(F,["trackList"])},methods:{...N(K,["addToCart"]),...N(F,["getTrack","setTrack"]),setThumbsSwiper(u){this.thumbsSwiper=u},getProducts(){const u=`${H}/api/${q}/products/all`;this.isLoading=!0,this.axios.get(u).then(e=>{this.products=e.data.products,this.isLoading=!1}).catch(e=>{this.isLoading=!1,this.pushMessage({style:"danger",title:"取得產品資訊失敗",content:e.response.data.message})})},getProduct(){const u=`${H}/api/${q}/product/${this.id}`;this.isLoading=!0,this.axios.get(u).then(e=>{this.product=e.data.product,this.isLoading=!1}).catch(()=>{this.isLoading=!1})}},components:{SwiperComponent:ue,SwiperComponent2:se},created(){this.id=this.$route.params.productId,this.getProducts(),this.getProduct(),this.getTrack()}},fe={class:"container"},he={"aria-label":"breadcrumb"},be={class:"breadcrumb mt-3"},_e={class:"breadcrumb-item"},we={class:"breadcrumb-item"},ge={class:"breadcrumb-item active fw-bold","aria-current":"page"},ve={class:"row justify-content-center"},Te={class:"col-md-6 align-items-center"},Se=["src","alt"],ye={class:"col-12 col-md-5 col-lg-5"},xe={class:"fw-bold mb-3"},Me={class:"badge bg-primary mb-2"},ke={class:"row d-flex flex-column"},Ce={class:"col"},Pe=i("p",{class:"fs-5 text-dark mt-2 mb-1"},"【 商品說明 】",-1),Ee={class:"text-muted"},Ie={class:"col"},Le=i("p",{class:"fs-5 text-dark mt-2 mb-1"},"【 商品規格 】",-1),Ve={class:"text-muted"},Ae={key:0,class:"h4 text-primary fw-bold"},Be={class:"ms-3"},Oe={key:1},De={class:"h6"},Re={key:0,class:"h4 text-primary fw-bold"},Ue={class:"ms-3"},je=i("hr",null,null,-1),Ne={class:"row my-4"},ze={class:"col-6"},Fe={key:0},He=i("i",{class:"bi bi-heart-fill text-danger"},null,-1),qe=[He],Ge={key:1},Xe=i("i",{class:"bi bi-heart"},null,-1),Ye=[Xe],Je={class:"col-6"},Ke=i("i",{class:"bi bi-cart-check"},null,-1);function Qe(u,e,m,w,o,M){const g=C("LoadingOverLay"),b=C("RouterLink"),l=C("SwiperComponent"),s=C("SwiperComponent2");return h(),S(A,null,[x(g,{active:o.isLoading,"z-index":1060},null,8,["active"]),i("section",fe,[i("nav",he,[i("ol",be,[i("li",_e,[x(b,{to:"/home"},{default:y(()=>[k("首頁")]),_:1})]),i("li",we,[x(b,{to:"/products"},{default:y(()=>[k("全部商品")]),_:1})]),i("li",ge,T(o.product.title),1)])]),i("div",ve,[i("div",Te,[o.product.imagesUrl?(h(),R(l,{key:1,product:o.product},null,8,["product"])):(h(),S("img",{key:0,src:o.product.imageUrl,class:"img-fluid mb-3 object-fit-cover",width:"525px",alt:o.product.title},null,8,Se))]),i("article",ye,[i("h2",xe,T(o.product.title),1),i("h5",null,[i("span",Me,T(o.product.category),1)]),i("div",ke,[i("div",Ce,[Pe,i("p",Ee,T(o.product.description),1)]),i("div",Ie,[Le,i("p",Ve,T(o.product.content),1)])]),o.product.origin_price===o.product.price?(h(),S("div",Ae,[k(T(o.product.price)+"元",1),i("span",Be,"/ "+T(o.product.unit),1)])):(h(),S("div",Oe,[i("del",De,"原價 "+T(o.product.origin_price)+" 元",1),o.product.price?(h(),S("div",Re,[k(" 現在只要 NT$ "+T(o.product.price)+" 元",1),i("span",Ue,"/ "+T(o.product.unit),1)])):J("",!0)])),je,i("div",Ne,[i("div",ze,[i("button",{class:"btn btn-outline-primary w-100",type:"button",onClick:e[0]||(e[0]=z(t=>u.setTrack(o.product.id),["prevent"]))},[u.trackList.includes(o.product.id)?(h(),S("span",Fe,qe)):(h(),S("span",Ge,Ye)),k(" 加入收藏 ")])]),i("div",Je,[i("button",{class:"btn btn-primary w-100",type:"button",onClick:e[1]||(e[1]=z(t=>u.addToCart(o.product.id),["prevent"]))},[Ke,k(" 加入購物車 ")])])])])])]),x(s)],64)}const st=G(pe,[["render",Qe]]);export{st as default};
