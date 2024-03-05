import{m as v,_ as U,o as n,c as d,b as t,d as c,v as u,f as L,h as y,F as M,j as x,k,r as _,a as g,t as f}from"./index-63o2KDvu.js";import{t as C}from"./toastMessage-D24-VtmM.js";import{P as E}from"./PaginationComponent-BcU4CHQF.js";import{m as T,D}from"./DeleteModal-D83h-wLQ.js";import"./selector-engine-LhMgsu_x.js";var I={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"hedy-api-path",BASE_URL:"/undefined/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:N,VITE_PATH:R}=I,$={props:{product:Object,isNew:Boolean},data(){return{status:{},modal:"",tempProduct:{}}},emits:["update-product"],mixins:[T],watch:{product(){this.tempProduct=this.product,this.tempProduct.imagesUrl||(this.tempProduct.imagesUrl=[]),this.tempProduct.imageUrl||(this.tempProduct.imageUrl="")}},methods:{...v(C,["pushMessage"]),uploadFile(){const i=this.$refs.fileInput.files[0],o=new FormData;o.append("file-to-upload",i);const l=`${N}/api/${R}/admin/upload`;this.status.fileUploading=!0,this.$http.post(l,o,{headers:{"Content-Type":"multipart/form-data"}}).then(a=>{this.status.fileUploading=!1,this.tempProduct.imageUrl=a.data.imageUrl,this.$refs.fileInput.value="",this.pushMessage({style:"success",title:"圖片上傳結果",content:a.data.message})}).catch(a=>{this.status.fileUploading=!1,this.pushMessage({style:"danger",title:"圖片上傳結果",content:a.response.data.message})})}}},A={class:"modal fade",id:"myModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},F={class:"modal-dialog modal-xl",role:"document"},O={class:"modal-content border-0"},S={class:"modal-header bg-dark text-white"},B={class:"modal-title",id:"exampleModalLabel"},H={key:0},j={key:1},z=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),q={class:"modal-body"},G={class:"row"},J={class:"col-sm-4"},K={class:"mb-3"},Q=t("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),W={class:"mb-3"},X={for:"customFile",class:"form-label"},Y={key:0,class:"fas fa-spinner fa-spin"},Z=["src"],tt={key:0,class:"mt-5"},et=["onUpdate:modelValue"],ot=["src"],st=["onClick"],lt={key:0},it={class:"col-sm-8"},nt={class:"mb-3"},dt=t("label",{for:"title",class:"form-label"},"標題",-1),at={class:"row gx-2"},ct={class:"mb-3 col-md-6"},rt=t("label",{for:"category",class:"form-label"},"分類",-1),pt={class:"mb-3 col-md-6"},ut=t("label",{for:"price",class:"form-label"},"單位",-1),mt={class:"row gx-2"},ht={class:"mb-3 col-md-6"},_t=t("label",{for:"origin_price",class:"form-label"},"原價",-1),gt={class:"mb-3 col-md-6"},ft=t("label",{for:"price",class:"form-label"},"售價",-1),bt=t("hr",null,null,-1),Pt={class:"mb-3"},yt=t("label",{for:"description",class:"form-label"},"產品描述",-1),vt={class:"mb-3"},Ut=t("label",{for:"content",class:"form-label"},"說明內容",-1),Mt={class:"mb-3"},xt={class:"form-check"},Ct=t("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),Vt={class:"modal-footer"},wt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Lt(i,o,l,a,e,r){return n(),d("div",A,[t("div",F,[t("div",O,[t("div",S,[t("h5",B,[l.isNew?(n(),d("span",H,"新增產品")):(n(),d("span",j,"編輯產品"))]),z]),t("div",q,[t("div",G,[t("div",J,[t("div",K,[Q,c(t("input",{type:"text",class:"form-control",id:"image","onUpdate:modelValue":o[0]||(o[0]=s=>e.tempProduct.imageUrl=s),placeholder:"請輸入圖片連結"},null,512),[[u,e.tempProduct.imageUrl]])]),t("div",W,[t("label",X,[L("或 上傳圖片 "),e.status.fileUploading?(n(),d("i",Y)):y("",!0)]),t("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:o[1]||(o[1]=(...s)=>r.uploadFile&&r.uploadFile(...s))},null,544)]),t("img",{class:"img-fluid",src:e.tempProduct.imageUrl},null,8,Z),e.tempProduct.imagesUrl?(n(),d("div",tt,[(n(!0),d(M,null,x(e.tempProduct.imagesUrl,(s,m)=>(n(),d("div",{class:"mb-3",key:m},[c(t("input",{type:"url",class:"form-control form-control","onUpdate:modelValue":h=>e.tempProduct.imagesUrl[m]=h,placeholder:"請輸入連結"},null,8,et),[[u,e.tempProduct.imagesUrl[m]]]),t("div",null,[t("img",{class:"img-fluid",src:s},null,8,ot)]),t("button",{type:"button",class:"btn btn-outline-danger",onClick:h=>e.tempProduct.imagesUrl.splice(m,1)}," 移除 ",8,st)]))),128)),e.tempProduct.imagesUrl[e.tempProduct.imagesUrl.length-1]||!e.tempProduct.imagesUrl.length?(n(),d("div",lt,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm d-block w-100",onClick:o[2]||(o[2]=s=>e.tempProduct.imagesUrl.push(""))}," 新增圖片 ")])):y("",!0)])):y("",!0)]),t("div",it,[t("div",nt,[dt,c(t("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":o[3]||(o[3]=s=>e.tempProduct.title=s),placeholder:"請輸入標題"},null,512),[[u,e.tempProduct.title]])]),t("div",at,[t("div",ct,[rt,c(t("input",{type:"text",class:"form-control",id:"category","onUpdate:modelValue":o[4]||(o[4]=s=>e.tempProduct.category=s),placeholder:"請輸入分類"},null,512),[[u,e.tempProduct.category]])]),t("div",pt,[ut,c(t("input",{type:"text",class:"form-control",id:"unit","onUpdate:modelValue":o[5]||(o[5]=s=>e.tempProduct.unit=s),placeholder:"請輸入單位"},null,512),[[u,e.tempProduct.unit]])])]),t("div",mt,[t("div",ht,[_t,c(t("input",{type:"number",class:"form-control",id:"origin_price",min:"0","onUpdate:modelValue":o[6]||(o[6]=s=>e.tempProduct.origin_price=s),placeholder:"請輸入原價"},null,512),[[u,e.tempProduct.origin_price,void 0,{number:!0}]])]),t("div",gt,[ft,c(t("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":o[7]||(o[7]=s=>e.tempProduct.price=s),min:"0",placeholder:"請輸入售價"},null,512),[[u,e.tempProduct.price,void 0,{number:!0}]])])]),bt,t("div",Pt,[yt,c(t("textarea",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":o[8]||(o[8]=s=>e.tempProduct.description=s),placeholder:"請輸入產品描述"},null,512),[[u,e.tempProduct.description]])]),t("div",vt,[Ut,c(t("textarea",{type:"text",class:"form-control",id:"content","onUpdate:modelValue":o[9]||(o[9]=s=>e.tempProduct.content=s),placeholder:"請輸入產品說明內容"},null,512),[[u,e.tempProduct.content]])]),t("div",Mt,[t("div",xt,[c(t("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":o[10]||(o[10]=s=>e.tempProduct.is_enabled=s),"true-value":1,"false-value":0,id:"is_enabled"},null,512),[[k,e.tempProduct.is_enabled]]),Ct])])])])]),t("div",Vt,[wt,t("button",{type:"button",class:"btn btn-primary",onClick:o[11]||(o[11]=s=>i.$emit("update-product",e.tempProduct))}," 確認 ")])])])],512)}const kt=U($,[["render",Lt]]);var Et={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"hedy-api-path",BASE_URL:"/undefined/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:b,VITE_PATH:P}=Et,Tt={data(){return{products:[],pagination:{},isNew:!1,MyModal:null,DeleteModal:null,tempProduct:{imagesUrl:[]},isLoading:!1,state:{fileUploading:!1}}},methods:{...v(C,["pushMessage"]),getProducts(i=1){const o=`${b}/api/${P}/admin/products?page=${i}`;this.isLoading=!0,this.axios.get(o).then(l=>{const{products:a,pagination:e}=l.data;this.pagination=e,this.products=a,this.isLoading=!1,this.pushMessage({style:"success",title:"成功取得產品資訊",content:l.data.message})}).catch(l=>{this.isLoading=!1,this.pushMessage({style:"danger",title:"取得產品資訊失敗",content:l.response.data.message})})},openModal(i,o){i==="new"?(this.tempProduct={imagesUrl:[]},this.isNew=!0,this.$refs.myModal.openModal()):i==="edit"?(this.tempProduct={...o},this.isNew=!1,this.$refs.myModal.openModal()):i==="delete"&&(this.tempProduct=o,this.$refs.deleteModal.openModal())},updateProduct(){let i=`${b}/api/${P}/admin/product/${this.tempProduct.id}`;this.isLoading=!0;let o="put",l="更新產品";this.isNew&&(i=`${b}/api/${P}/admin/product`,o="post",l="新增產品");const a=this.$refs.myModal;this.axios[o](i,{data:this.tempProduct}).then(e=>{this.isLoading=!1,this.pushMessage({style:"success",title:l,content:e.data.message}),this.getProducts(),a.hideModal(),this.tempProduct={}}).catch(e=>{this.isLoading=!1,this.pushMessage({style:"danger",title:l,content:e.response.data.message})})},delProduct(){const i=`${b}/api/${P}/admin/product/${this.tempProduct.id}`;this.isLoading=!0,this.axios.delete(i).then(o=>{this.isLoading=!1,this.pushMessage({style:"success",title:"刪除產品",content:o.data.message}),this.$refs.deleteModal.hideModal(),this.getProducts()}).catch(o=>{this.isLoading=!1,this.pushMessage({style:"danger",title:"刪除產品",content:o.response.data.message})})}},mounted(){this.getProducts()},components:{PaginationComponent:E,MyModal:kt,DeleteModal:D}},Dt=t("h2",null,"後台產品列表",-1),It={class:"container"},Nt={class:"text-end mt-4"},Rt={class:"table mt-4"},$t=t("thead",null,[t("tr",null,[t("th",{width:"120"}," 分類 "),t("th",null,"產品名稱"),t("th",{width:"120"}," 原價 "),t("th",{width:"120"}," 售價 "),t("th",{width:"100"}," 是否啟用 "),t("th",{width:"120"}," 編輯 ")])],-1),At={width:"150"},Ft={width:"120"},Ot={class:"text-end"},St={class:"text-end"},Bt={key:0,class:"text-success"},Ht={key:1},jt={class:"btn-group"},zt=["onClick"],qt=["onClick"];function Gt(i,o,l,a,e,r){const s=_("LoadingOverLay"),m=_("PaginationComponent"),h=_("MyModal"),V=_("DeleteModal");return n(),d("div",null,[g(s,{active:e.isLoading,"z-index":1060},null,8,["active"]),Dt,t("div",It,[t("div",Nt,[t("button",{type:"button",class:"btn btn-primary",onClick:o[0]||(o[0]=p=>r.openModal("new"))}," 建立新的產品 ")]),t("table",Rt,[$t,t("tbody",null,[(n(!0),d(M,null,x(e.products,p=>(n(),d("tr",{key:p.id},[t("td",At,f(p.category),1),t("td",Ft,f(p.title),1),t("td",Ot,f(p.origin_price),1),t("td",St,f(p.price),1),t("td",null,[p.is_enabled?(n(),d("span",Bt,"啟用")):(n(),d("span",Ht,"未啟用"))]),t("td",null,[t("div",jt,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:w=>r.openModal("edit",p)}," 編輯 ",8,zt),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:w=>r.openModal("delete",p)}," 刪除 ",8,qt)])])]))),128))])]),g(m,{pagination:e.pagination,onEmitPages:r.getProducts},null,8,["pagination","onEmitPages"])]),g(h,{product:e.tempProduct,onUpdateProduct:r.updateProduct,"is-new":e.isNew,ref:"myModal"},null,8,["product","onUpdateProduct","is-new"]),g(V,{item:e.tempProduct,onDelItem:r.delProduct,ref:"deleteModal"},null,8,["item","onDelItem"])])}const Yt=U(Tt,[["render",Gt]]);export{Yt as default};