import{_ as f,o as l,c as i,b as e,d as u,v as r,k as L,t as _,m as x,r as b,a as C,F as k,j as D}from"./index-Bnjvlgro.js";import{t as w}from"./toastMessage-De8WdkPR.js";import{m as $,D as V}from"./DeleteModal-DnyleHfn.js";import"./selector-engine-BF-dsNMO.js";const N={props:{coupon:Object,isNew:Boolean},data(){return{tempCoupon:{},due_date:""}},emits:["update-coupon"],watch:{coupon(){this.tempCoupon=this.coupon;const s=new Date(this.tempCoupon.due_date*1e3).toISOString().split("T");[this.due_date]=s},due_date(){this.tempCoupon.due_date=Math.floor(new Date(this.due_date)/1e3)}},mixins:[$]},T={class:"modal fade",id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},U={class:"modal-dialog",role:"document"},E={class:"modal-content"},I={class:"modal-header"},O={class:"modal-title",id:"exampleModalLabel"},A={key:0},S={key:1},B=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),R={class:"modal-body"},P={class:"mb-3"},j=e("label",{for:"title"},"標題",-1),F={class:"mb-3"},H=e("label",{for:"coupon_code"},"優惠碼",-1),z={class:"mb-3"},q=e("label",{for:"due_date"},"到期日",-1),G={class:"mb-3"},J=e("label",{for:"price"},"折扣百分比",-1),K={class:"mb-3"},Q={class:"form-check"},W=e("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),X={class:"modal-footer"},Y=e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"關閉",-1);function Z(s,t,a,c,o,p){return l(),i("div",T,[e("div",U,[e("div",E,[e("div",I,[e("h5",O,[a.isNew?(l(),i("span",A,"新增優惠卷")):(l(),i("span",S,"編輯優惠卷"))]),B]),e("div",R,[e("div",P,[j,u(e("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":t[0]||(t[0]=n=>o.tempCoupon.title=n),placeholder:"請輸入標題"},null,512),[[r,o.tempCoupon.title]])]),e("div",F,[H,u(e("input",{type:"text",class:"form-control",id:"coupon_code","onUpdate:modelValue":t[1]||(t[1]=n=>o.tempCoupon.code=n),placeholder:"請輸入優惠碼"},null,512),[[r,o.tempCoupon.code]])]),e("div",z,[q,u(e("input",{type:"date",class:"form-control",id:"due_date","onUpdate:modelValue":t[2]||(t[2]=n=>o.due_date=n)},null,512),[[r,o.due_date]])]),e("div",G,[J,u(e("input",{type:"number",class:"form-control",id:"price",min:"0","onUpdate:modelValue":t[3]||(t[3]=n=>o.tempCoupon.percent=n),placeholder:"請輸入折扣百分比"},null,512),[[r,o.tempCoupon.percent,void 0,{number:!0}]])]),e("div",K,[e("div",Q,[u(e("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":t[4]||(t[4]=n=>o.tempCoupon.is_enabled=n),id:"is_enabled"},null,512),[[L,o.tempCoupon.is_enabled]]),W])])]),e("div",X,[Y,e("button",{type:"button",class:"btn btn-primary",onClick:t[5]||(t[5]=n=>s.$emit("update-coupon",o.tempCoupon))},_(a.isNew?"新增優惠卷":"更新優惠券"),1)])])])],512)}const ee=f(N,[["render",Z]]);var te={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"hedy-api-path",BASE_URL:"/Eco-Coffee/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:m,VITE_PATH:h}=te,oe={components:{CouponModal:ee,DeleteModal:V},props:{config:Object},data(){return{coupons:{},tempCoupon:{title:"",is_enabled:0,percent:100,code:""},isLoading:!1,isNew:!1}},methods:{...x(w,["pushMessage"]),openCouponModal(s,t){this.isNew=s,this.isNew?this.tempCoupon={due_date:new Date().getTime()/1e3}:this.tempCoupon={...t},this.$refs.couponModal.openModal()},openDelCouponModal(s){this.tempCoupon={...s},this.$refs.deleteModal.openModal()},getCoupons(){this.isLoading=!0;const s=`${m}/api/${h}/admin/coupons`;this.axios.get(s,this.tempProduct).then(t=>{this.coupons=t.data.coupons,this.isLoading=!1}).catch(t=>{this.isLoading=!1,this.pushMessage({style:"success",title:"取得優惠券",content:t.response.data.message})})},updateCoupon(s){this.isLoading=!0;let t=`${m}/api/${h}/admin/coupon`,a="post",c=s;this.isNew||(t=`${m}/api/${h}/admin/coupon/${this.tempCoupon.id}`,a="put",c=this.tempCoupon),this.axios[a](t,{data:c}).then(o=>{this.isLoading=!1,this.pushMessage({style:"success",title:"新增優惠券",content:o.data.message}),this.getCoupons(),this.$refs.couponModal.hideModal()}).catch(o=>{this.isLoading=!1,this.pushMessage({style:"danger",title:"新增優惠券",content:o.response.data.message})})},delCoupon(){const s=`${m}/api/${h}/admin/coupon/${this.tempCoupon.id}`;this.isLoading=!0,this.axios.delete(s).then(t=>{this.isLoading=!1,this.pushMessage({style:"success",title:"刪除優惠券",content:t.data.message}),this.$refs.deleteModal.hideModal(),this.getCoupons()}).catch(t=>{this.isLoading=!1,this.pushMessage({style:"danger",title:"刪除優惠券",content:t.response.data.message})})}},mounted(){this.getCoupons()}},se={class:"text-end mt-4"},ne={class:"table mt-4"},le=e("thead",null,[e("tr",null,[e("th",null,"名稱"),e("th",null,"折扣百分比"),e("th",null,"到期日"),e("th",null,"是否啟用"),e("th",null,"編輯")])],-1),ie={key:0,class:"text-success"},ae={key:1,class:"text-muted"},de={class:"btn-group"},pe=["onClick"],ue=["onClick"];function ce(s,t,a,c,o,p){const n=b("LoadingOverLay"),g=b("CouponModal"),M=b("DeleteModal");return l(),i("div",null,[C(n,{active:o.isLoading,"z-index":1060},null,8,["active"]),e("div",se,[e("button",{class:"btn btn-primary",type:"button",onClick:t[0]||(t[0]=d=>p.openCouponModal(!0))}," 建立新的優惠券 ")]),e("table",ne,[le,e("tbody",null,[(l(!0),i(k,null,D(o.coupons,(d,v)=>(l(),i("tr",{key:v},[e("td",null,_(d.title),1),e("td",null,_(d.percent)+"%",1),e("td",null,_(s.$filters.date(d.due_date)),1),e("td",null,[d.is_enabled===1?(l(),i("span",ie,"啟用")):(l(),i("span",ae,"未啟用"))]),e("td",null,[e("div",de,[e("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:y=>p.openCouponModal(!1,d)},"編輯",8,pe),e("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:y=>p.openDelCouponModal(d)},"刪除",8,ue)])])]))),128))])]),C(g,{coupon:o.tempCoupon,"is-new":o.isNew,ref:"couponModal",onUpdateCoupon:p.updateCoupon},null,8,["coupon","is-new","onUpdateCoupon"]),C(M,{item:o.tempCoupon,ref:"deleteModal",onDelItem:p.delCoupon},null,8,["item","onDelItem"])])}const be=f(oe,[["render",ce]]);export{be as default};
