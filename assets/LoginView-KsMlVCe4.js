import{_ as f,m as h,r as a,o as g,c as v,a as n,b as s,w,d as c,v as m,e as b,F as L,f as x}from"./index-ScBNamNi.js";import{t as y}from"./toastMessage-C11o2i5Q.js";import{T}from"./ToastModal-DLPe3ifa.js";var V={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"hedy-api-path",BASE_URL:"/Eco-Coffee/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:E}=V,M={data(){return{isLoading:!1,user:{username:"",password:""}}},methods:{...h(y,["pushMessage"]),logIn(){const i=`${E}/admin/signin`;this.isLoading=!0,this.axios.post(i,this.user).then(e=>{const{token:r,expired:d}=e.data;document.cookie=`myToken=${r}; expires=${new Date(d)}; path=/`,this.isLoading=!1,this.$router.push("/admin/products")}).catch(e=>{this.isLoading=!1,this.pushMessage({style:"danger",title:"登入失敗",content:e.response.data.message})})}},components:{ToastModal:T}},k={class:"container mt-5"},R={class:"row justify-content-center"},I=s("h1",{class:"h3 mb-3 font-weight-normal"},"請先登入",-1),U={class:"form-floating mb-3"},D=s("label",{for:"username"},"Email address",-1),B={class:"form-floating"},O=s("label",{for:"password"},"Password",-1),P={class:"row"},S={class:"col"},A=s("div",{class:"col"},[s("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"submit"}," 登入 ")],-1);function C(i,e,r,d,o,l){const p=a("LoadingOverLay"),u=a("ToastModal"),_=a("RouterLink");return g(),v(L,null,[n(p,{active:o.isLoading,"z-index":1060},null,8,["active"]),s("div",k,[n(u),s("div",R,[I,s("div",null,[s("form",{id:"form",class:"form-signin",onSubmit:e[2]||(e[2]=w((...t)=>l.logIn&&l.logIn(...t),["prevent"]))},[s("div",U,[c(s("input",{type:"email",class:"form-control",id:"username",placeholder:"name@example.com","onUpdate:modelValue":e[0]||(e[0]=t=>o.user.username=t),required:"",autofocus:""},null,512),[[m,o.user.username]]),D]),s("div",B,[c(s("input",{type:"password",class:"form-control",id:"password",placeholder:"Password","onUpdate:modelValue":e[1]||(e[1]=t=>o.user.password=t),required:""},null,512),[[m,o.user.password]]),O]),s("div",P,[s("div",S,[n(_,{to:"/",type:"button",class:"btn btn-lg btn-dark w-100 mt-3"},{default:b(()=>[x(" 回到前台 ")]),_:1})]),A])],32)])])])],64)}const j=f(M,[["render",C]]);export{j as default};