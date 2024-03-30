import{p as w,m as u,_ as f,r as a,o as _,c as m,b as s,a as o,e as n,f as r,t as C,h as k,n as V,d as S,q as F,s as N,F as E}from"./index-ScBNamNi.js";import{t as y}from"./toastMessage-C11o2i5Q.js";import{C as M}from"./collapse-Cm_YVWPz.js";import{c as x}from"./cartStore-CNg7mac8.js";import{t as $}from"./trackStore-CTF9Smll.js";import{S as R}from"./sweetalert2.all-DYvzZ1P1.js";import{T as B}from"./ToastModal-DLPe3ifa.js";import"./selector-engine-Ai5Yzi1s.js";const I={computed:{...w($,["trackList"]),...w(x,["carts"])},methods:{...u(y,["pushMessage"]),...u(x,["getCart"]),...u($,["getTrack"]),openCollapse(){this.collapse.show()},closeCollapse(){this.collapse.hide()}},mounted(){this.getCart(),this.getTrack(),this.collapse=new M(this.$refs.collapse,{toggle:!1})}},z={class:"navbar navbar-expand-lg navbar-dark bg-primary sticky-top py-2"},Y={class:"container-fluid"},q=s("i",{class:"bi bi-cup-hot ff-minor"},null,-1),D=s("span",{class:"ms-2 fw-bold ff-minor"},"Eco-Coffee",-1),H=s("span",{class:"navbar-toggler-icon ff-minor"},null,-1),U=[H],W={id:"lokiNavbar",ref:"collapse",class:"collapse navbar-collapse"},X={class:"navbar-nav me-auto mb-2 mb-lg-0"},A={class:"nav navbar-nav d-flex me-2"},O=s("i",{class:"bi bi-heart-fill icon"},null,-1),j={key:0,class:"badge rounded-pill bg-danger",style:{transform:"translateX(-2px) translateY(-18px)"}},G=s("span",{class:"visually-hidden"},"unread messages",-1),J=s("i",{class:"bi bi-cart icon"},null,-1),K={key:0,class:"badge rounded-pill bg-danger",style:{transform:"translateX(-2px) translateY(-18px)"}},P=s("span",{class:"visually-hidden"},"unread messages",-1),Q=s("i",{class:"bi bi-person-circle icon"},null,-1);function Z(d,i,b,v,c,t){const e=a("RouterLink"),p=a("router-link");return _(),m("nav",z,[s("div",Y,[o(e,{to:"/",onClick:t.closeCollapse,class:"fs-4 navbar-brand align-items-center me-2"},{default:n(()=>[q,D]),_:1},8,["onClick"]),s("button",{class:"navbar-toggler","data-bs-toggle":"collapse",onClick:i[0]||(i[0]=(...l)=>t.openCollapse&&t.openCollapse(...l)),"data-bs-target":"#lokiNavbar"},U),s("div",W,[s("div",X,[o(e,{to:"/about",onClick:t.closeCollapse,class:"nav-item nav-link"},{default:n(()=>[r("了解公平貿易")]),_:1},8,["onClick"]),o(e,{to:"/products",onClick:t.closeCollapse,class:"nav-item nav-link"},{default:n(()=>[r("產品列表")]),_:1},8,["onClick"]),o(e,{to:"/articles",onClick:t.closeCollapse,class:"nav-item nav-link"},{default:n(()=>[r("部落格")]),_:1},8,["onClick"])]),s("div",A,[o(e,{to:"/track",onClick:t.closeCollapse,class:"btn btn-primary d-flex align-items-center nav-item nav-link position-relative me-1"},{default:n(()=>{var l;return[O,d.trackList.length>0?(_(),m("span",j,[r(C((l=this.trackList)==null?void 0:l.length)+" ",1),G])):k("",!0)]}),_:1},8,["onClick"]),o(e,{to:"/cart",onClick:t.closeCollapse,class:"btn btn-primary nav-item nav-link position-relative d-flex align-items-center me-1"},{default:n(()=>{var l;return[J,d.carts.length>0?(_(),m("span",K,[r(C((l=this.carts)==null?void 0:l.length)+" ",1),P])):k("",!0)]}),_:1},8,["onClick"]),o(p,{to:"/login",class:"nav-item nav-link me-1"},{default:n(()=>[Q]),_:1})])],512)])])}const ss=f(I,[["render",Z]]),os={data(){return{email:"",coupon:"coupon2024",isLoading:!1}},methods:{subscribe(){this.isLoading=!0,this.emil="",setTimeout(()=>{this.isLoading=!1,this.$refs.form.resetForm()},1e3),R.fire({icon:"success",title:"成功訂閱",text:`恭喜獲得優惠碼: ${this.coupon}`,showConfirmButton:!0,allowOutsideClick:!0})}}},ts={class:"border-2 bg-primary border-top mt-5 footer"},es={class:"container text-white text-center"},as={class:"row d-lg-none d-md-none"},ls=s("i",{class:"bi bi-cup-hot"},null,-1),ns=s("span",{class:"ms-2 fw-bold text-white ff-minor"},"Eco-Coffee",-1),is=s("p",{class:"mb-0 text-center"},[s("small",null,"無商業用途，僅供學習使用")],-1),cs={class:"footer__wrapper d-none d-sm-block"},rs={class:"row"},ds={class:"col-md-4 mb-3"},_s={class:"footer-block"},ms=s("p",{class:"h4 fw-bold mb-3"},"首次下單可享 15% 優惠",-1),ps=s("p",null,"訂閱獲取優惠卷 & 最新商品",-1),hs={class:"mb-3"},us=s("label",{for:"email",class:"form-label"},"Email",-1),fs={class:"w-auto"},bs=["disabled"],vs={class:"spinner-border spinner-border-sm me-2",role:"status","aria-hidden":"true"},gs={class:"col-md-4 mb-3"},ks={class:"footer-block-center"},ws=s("p",{class:"h4 fw-bold mb-4"},"相關連結",-1),Cs={class:"footerul ps-6"},xs={class:"mb-3"},$s=s("li",{class:"mb-3"},[s("a",{class:"text-white",href:"#"},"常見問題")],-1),ys={class:"footerul"},Ts={class:"mb-3"},Ls=s("li",{class:"mb-3"},[s("a",{class:"text-white",href:"#"},"聯絡我們")],-1),Vs=N('<div class="col-md-4 mb-3"><div class="footer-block-center"><p class="h4 fw-bold mb-4">聯絡我們</p><div class="row"><div class="col-4 text-end"><a class="text-white" href="https://www.instagram.com/accounts/login/"><i class="bi bi-instagram footer-icon"></i></a></div><div class="col-4"><a class="text-white" href="https://www.facebook.com/?locale=zh_TW"><i class="bi bi-facebook footer-icon"></i></a></div><div class="col-4 text-start"><a class="text-white" href="https://mail.google.com/mail/"><i class="bi bi-envelope-heart footer-icon"></i></a></div></div></div></div>',1),Ss=s("p",{class:"mb-0 text-center"},[s("small",null,"無商業用途，僅供學習使用")],-1);function Fs(d,i,b,v,c,t){const e=a("RouterLink"),p=a("VeeField"),l=a("ErrorMessage"),g=a("VeeForm"),h=a("router-link");return _(),m("footer",ts,[s("div",es,[s("div",as,[o(e,{to:"/",class:"fs-2 navbar-brand pt-4 pb-1"},{default:n(()=>[ls,ns]),_:1}),is]),s("div",cs,[s("div",rs,[s("div",ds,[s("div",_s,[ms,ps,o(g,{ref:"form",onSubmit:t.subscribe},{default:n(({errors:T})=>[s("div",hs,[us,o(p,{id:"email",name:"email",type:"email",class:V(["form-control",{"is-invalid":T.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:c.email,"onUpdate:modelValue":i[0]||(i[0]=L=>c.email=L)},null,8,["class","modelValue"]),o(l,{name:"email",class:"invalid-feedback"})]),s("div",fs,[s("button",{type:"submit",class:"btn btn-secondary d-flex align-items-center py-2 px-6 px-sm-10 text-white fw-semibold",disabled:c.isLoading},[S(s("span",vs,null,512),[[F,c.isLoading]]),r(" 訂閱 ")],8,bs)])]),_:1},8,["onSubmit"])])]),s("div",gs,[s("div",ks,[ws,s("ul",Cs,[s("li",xs,[o(h,{to:"/products",class:"text-white"},{default:n(()=>[r("商品一覽")]),_:1})]),$s]),s("ul",ys,[s("li",Ts,[o(h,{to:"/articles",class:"text-white"},{default:n(()=>[r("最新消息")]),_:1})]),Ls])])]),Vs]),Ss])])])}const Ns=f(os,[["render",Fs]]),Es={data(){return{showTopIcon:!1}},mounted(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll(){const d=window.innerHeight/2;window.scrollY>d?this.showTopIcon=!0:this.showTopIcon=!1},scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}}},Ms=s("i",{class:"bi bi-arrow-up text-light",style:{"font-size":"2rem"},"aria-hidden":"true"},null,-1),Rs=[Ms];function Bs(d,i,b,v,c,t){return c.showTopIcon?(_(),m("div",{key:0,onClick:i[0]||(i[0]=(...e)=>t.scrollToTop&&t.scrollToTop(...e))},Rs)):k("",!0)}const Is=f(Es,[["render",Bs]]),zs={data(){return{}},methods:{...u(y,["pushMessage"])},components:{NavbarLayout:ss,FooterLayout:Ns,ToastModal:B,TopComponent:Is}};function Ys(d,i,b,v,c,t){const e=a("NavbarLayout"),p=a("ToastModal"),l=a("RouterView"),g=a("TopComponent"),h=a("FooterLayout");return _(),m(E,null,[o(e),o(p),o(l),o(g,{class:"top ps-2"}),o(h)],64)}const js=f(zs,[["render",Ys]]);export{js as default};