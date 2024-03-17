import{m as U,_ as M,o as i,c as d,b as t,d as c,v as u,f as L,h as y,F as v,i as x,j as k,r as _,a as f,t as g}from"./index-aaLPSl0K.js";import{t as w}from"./toastMessage-DNINzTwN.js";import{P as E}from"./PaginationComponent-DMoHCQB1.js";import{m as T,D}from"./DeleteModal-DD65ws53.js";import"./selector-engine-CpNFR6Jg.js";var I={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"hedy-api-path",BASE_URL:"/Eco-Coffee/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:N,VITE_PATH:R}=I,$={props:{product:Object,isNew:Boolean},data(){return{status:{},modal:"",tempProduct:{}}},emits:["update-product"],mixins:[T],watch:{product(){this.tempProduct=this.product,this.tempProduct.imagesUrl||(this.tempProduct.imagesUrl=[]),this.tempProduct.imageUrl||(this.tempProduct.imageUrl="")}},methods:{...U(w,["pushMessage"]),uploadFile(){const n=this.$refs.fileInput.files[0],s=new FormData;s.append("file-to-upload",n);const l=`${N}/api/${R}/admin/upload`;this.status.fileUploading=!0,this.$http.post(l,s,{headers:{"Content-Type":"multipart/form-data"}}).then(a=>{this.status.fileUploading=!1,this.tempProduct.imageUrl=a.data.imageUrl,this.$refs.fileInput.value="",this.pushMessage({style:"success",title:"圖片上傳結果",content:a.data.message})}).catch(a=>{this.status.fileUploading=!1,this.pushMessage({style:"danger",title:"圖片上傳結果",content:a.response.data.message})})}}},A={class:"modal fade",id:"myModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},F={class:"modal-dialog modal-xl",role:"document"},O={class:"modal-content border-0"},S={class:"modal-header bg-dark text-white"},B={class:"modal-title",id:"exampleModalLabel"},H={key:0},j={key:1},z=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),q={class:"modal-body"},G={class:"row"},J={class:"col-sm-4"},K={class:"mb-3"},Q=t("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),W={class:"mb-3"},X={for:"customFile",class:"form-label"},Y={key:0,class:"fas fa-spinner fa-spin"},Z=["src"],tt={key:0,class:"mt-5"},et=["onUpdate:modelValue"],st=["src"],ot=["onClick"],lt={key:0},nt={class:"col-sm-8"},it={class:"mb-3"},dt=t("label",{for:"title",class:"form-label"},"標題",-1),at={class:"row gx-2"},ct={class:"mb-3 col-md-6"},rt=t("label",{for:"category",class:"form-label"},"分類",-1),pt={class:"mb-3 col-md-6"},ut=t("label",{for:"price",class:"form-label"},"單位",-1),mt={class:"row gx-2"},ht={class:"mb-3 col-md-6"},_t=t("label",{for:"origin_price",class:"form-label"},"原價",-1),ft={class:"mb-3 col-md-6"},gt=t("label",{for:"price",class:"form-label"},"售價",-1),bt=t("hr",null,null,-1),Pt={class:"mb-3"},yt=t("label",{for:"description",class:"form-label"},"產品描述",-1),vt={class:"mb-3"},Ut=t("label",{for:"content",class:"form-label"},"說明內容",-1),Mt={class:"mb-3"},xt={class:"form-check"},wt=t("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),Ct={class:"modal-footer"},Vt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Lt(n,s,l,a,e,r){return i(),d("div",A,[t("div",F,[t("div",O,[t("div",S,[t("h5",B,[l.isNew?(i(),d("span",H,"新增產品")):(i(),d("span",j,"編輯產品"))]),z]),t("div",q,[t("div",G,[t("div",J,[t("div",K,[Q,c(t("input",{type:"text",class:"form-control",id:"image","onUpdate:modelValue":s[0]||(s[0]=o=>e.tempProduct.imageUrl=o),placeholder:"請輸入圖片連結"},null,512),[[u,e.tempProduct.imageUrl]])]),t("div",W,[t("label",X,[L("或 上傳圖片 "),e.status.fileUploading?(i(),d("i",Y)):y("",!0)]),t("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:s[1]||(s[1]=(...o)=>r.uploadFile&&r.uploadFile(...o))},null,544)]),t("img",{class:"img-fluid",src:e.tempProduct.imageUrl},null,8,Z),e.tempProduct.imagesUrl?(i(),d("div",tt,[(i(!0),d(v,null,x(e.tempProduct.imagesUrl,(o,m)=>(i(),d("div",{class:"mb-3",key:m},[c(t("input",{type:"url",class:"form-control form-control","onUpdate:modelValue":h=>e.tempProduct.imagesUrl[m]=h,placeholder:"請輸入連結"},null,8,et),[[u,e.tempProduct.imagesUrl[m]]]),t("div",null,[t("img",{class:"img-fluid",src:o},null,8,st)]),t("button",{type:"button",class:"btn btn-outline-danger",onClick:h=>e.tempProduct.imagesUrl.splice(m,1)}," 移除 ",8,ot)]))),128)),e.tempProduct.imagesUrl[e.tempProduct.imagesUrl.length-1]||!e.tempProduct.imagesUrl.length?(i(),d("div",lt,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm d-block w-100",onClick:s[2]||(s[2]=o=>e.tempProduct.imagesUrl.push(""))}," 新增圖片 ")])):y("",!0)])):y("",!0)]),t("div",nt,[t("div",it,[dt,c(t("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":s[3]||(s[3]=o=>e.tempProduct.title=o),placeholder:"請輸入標題"},null,512),[[u,e.tempProduct.title]])]),t("div",at,[t("div",ct,[rt,c(t("input",{type:"text",class:"form-control",id:"category","onUpdate:modelValue":s[4]||(s[4]=o=>e.tempProduct.category=o),placeholder:"請輸入分類"},null,512),[[u,e.tempProduct.category]])]),t("div",pt,[ut,c(t("input",{type:"text",class:"form-control",id:"unit","onUpdate:modelValue":s[5]||(s[5]=o=>e.tempProduct.unit=o),placeholder:"請輸入單位"},null,512),[[u,e.tempProduct.unit]])])]),t("div",mt,[t("div",ht,[_t,c(t("input",{type:"number",class:"form-control",id:"origin_price",min:"0","onUpdate:modelValue":s[6]||(s[6]=o=>e.tempProduct.origin_price=o),placeholder:"請輸入原價"},null,512),[[u,e.tempProduct.origin_price,void 0,{number:!0}]])]),t("div",ft,[gt,c(t("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":s[7]||(s[7]=o=>e.tempProduct.price=o),min:"0",placeholder:"請輸入售價"},null,512),[[u,e.tempProduct.price,void 0,{number:!0}]])])]),bt,t("div",Pt,[yt,c(t("textarea",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":s[8]||(s[8]=o=>e.tempProduct.description=o),placeholder:"請輸入產品描述"},null,512),[[u,e.tempProduct.description]])]),t("div",vt,[Ut,c(t("textarea",{type:"text",class:"form-control",id:"content","onUpdate:modelValue":s[9]||(s[9]=o=>e.tempProduct.content=o),placeholder:"請輸入產品說明內容"},null,512),[[u,e.tempProduct.content]])]),t("div",Mt,[t("div",xt,[c(t("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":s[10]||(s[10]=o=>e.tempProduct.is_enabled=o),"true-value":1,"false-value":0,id:"is_enabled"},null,512),[[k,e.tempProduct.is_enabled]]),wt])])])])]),t("div",Ct,[Vt,t("button",{type:"button",class:"btn btn-primary",onClick:s[11]||(s[11]=o=>n.$emit("update-product",e.tempProduct))}," 確認 ")])])])],512)}const kt=M($,[["render",Lt]]);var Et={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"hedy-api-path",BASE_URL:"/Eco-Coffee/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:b,VITE_PATH:P}=Et,Tt={data(){return{products:[],pagination:{},isNew:!1,MyModal:null,DeleteModal:null,tempProduct:{imagesUrl:[]},isLoading:!1,state:{fileUploading:!1}}},methods:{...U(w,["pushMessage"]),getProducts(n=1){const s=`${b}/api/${P}/admin/products?page=${n}`;this.isLoading=!0,this.axios.get(s).then(l=>{const{products:a,pagination:e}=l.data;this.pagination=e,this.products=a,this.isLoading=!1,this.pushMessage({style:"success",title:"成功取得產品資訊",content:l.data.message})}).catch(l=>{this.isLoading=!1,this.pushMessage({style:"danger",title:"取得產品資訊失敗",content:l.response.data.message})})},openModal(n,s){n==="new"?(this.tempProduct={imagesUrl:[]},this.isNew=!0,this.$refs.myModal.openModal()):n==="edit"?(this.tempProduct={...s},this.isNew=!1,this.$refs.myModal.openModal()):n==="delete"&&(this.tempProduct=s,this.$refs.deleteModal.openModal())},updateProduct(){let n=`${b}/api/${P}/admin/product/${this.tempProduct.id}`;this.isLoading=!0;let s="put",l="更新產品";this.isNew&&(n=`${b}/api/${P}/admin/product`,s="post",l="新增產品");const a=this.$refs.myModal;this.axios[s](n,{data:this.tempProduct}).then(e=>{this.isLoading=!1,this.pushMessage({style:"success",title:l,content:e.data.message}),this.getProducts(),a.hideModal(),this.tempProduct={}}).catch(e=>{this.isLoading=!1,this.pushMessage({style:"danger",title:l,content:e.response.data.message})})},delProduct(){const n=`${b}/api/${P}/admin/product/${this.tempProduct.id}`;this.isLoading=!0,this.axios.delete(n).then(s=>{this.isLoading=!1,this.pushMessage({style:"success",title:"刪除產品",content:s.data.message}),this.$refs.deleteModal.hideModal(),this.getProducts()}).catch(s=>{this.isLoading=!1,this.pushMessage({style:"danger",title:"刪除產品",content:s.response.data.message})})}},mounted(){this.getProducts()},components:{PaginationComponent:E,MyModal:kt,DeleteModal:D}},Dt={class:"container"},It={class:"text-end mt-3"},Nt={class:"table table-responsive table-striped mt-4"},Rt=t("thead",null,[t("tr",null,[t("th",{width:"120",class:"d-none d-sm-table-cell"}," 分類 "),t("th",null,"產品名稱"),t("th",{width:"100",class:"d-none d-sm-table-cell"}," 原價 "),t("th",{width:"100"}," 售價 "),t("th",{width:"100",class:"text-nowrap"}," 是否啟用 "),t("th",{width:"120",class:"text-nowrap"}," 編輯 ")])],-1),$t={width:"150",class:"d-none d-sm-table-cell"},At={width:"120"},Ft={class:"text-end d-none d-sm-table-cell"},Ot={class:"text-end"},St={style:{"white-space":"nowrap"}},Bt={key:0,class:"text-success"},Ht={key:1},jt={class:"btn-group"},zt=["onClick"],qt=["onClick"],Gt={class:"d-flex justify-content-center"};function Jt(n,s,l,a,e,r){const o=_("LoadingOverLay"),m=_("PaginationComponent"),h=_("MyModal"),C=_("DeleteModal");return i(),d(v,null,[f(o,{active:e.isLoading,"z-index":1060},null,8,["active"]),t("div",Dt,[t("div",It,[t("button",{type:"button",class:"btn btn-primary",onClick:s[0]||(s[0]=p=>r.openModal("new"))}," 建立新的產品 ")]),t("table",Nt,[Rt,t("tbody",null,[(i(!0),d(v,null,x(e.products,p=>(i(),d("tr",{key:p.id},[t("td",$t,g(p.category),1),t("td",At,g(p.title),1),t("td",Ft,g(p.origin_price),1),t("td",Ot,g(p.price),1),t("td",St,[p.is_enabled?(i(),d("span",Bt,"啟用")):(i(),d("span",Ht,"未啟用"))]),t("td",null,[t("div",jt,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:V=>r.openModal("edit",p)}," 編輯 ",8,zt),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:V=>r.openModal("delete",p)}," 刪除 ",8,qt)])])]))),128))])]),t("div",Gt,[f(m,{pagination:e.pagination,onEmitPages:r.getProducts},null,8,["pagination","onEmitPages"])])]),f(h,{product:e.tempProduct,onUpdateProduct:r.updateProduct,"is-new":e.isNew,ref:"myModal"},null,8,["product","onUpdateProduct","is-new"]),f(C,{item:e.tempProduct,onDelItem:r.delProduct,ref:"deleteModal"},null,8,["item","onDelItem"])],64)}const Zt=M(Tt,[["render",Jt]]);export{Zt as default};
