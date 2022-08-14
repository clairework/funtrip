"use strict";(self["webpackChunkebookstore"]=self["webpackChunkebookstore"]||[]).push([[330],{3559:function(e,t,a){a.r(t),a.d(t,{default:function(){return ae}});var o=a(6252),l=a(3577),s=a(9963);const i=(0,o._)("div",{class:"spinner-border text-primary m-5",role:"status"},[(0,o._)("span",{class:"visually-hidden"},"Loading...")],-1),n={class:"container"},d=(0,o._)("h2",{class:"text-primaryDark text-center fw-bold me-4 p-2 pt-4"},"優惠券管理",-1),p={class:"d-flex justify-content-between align-items-center mb-4"},c=(0,o._)("div",{class:"d-flex align-items-center"},null,-1),r={class:"table-responsive"},u={class:"table text-nowrap caption-top table-hover text-primaryDark"},h=(0,o._)("thead",null,[(0,o._)("tr",{class:"text-nowrap"},[(0,o._)("th",{scope:"col"},"優惠碼"),(0,o._)("th",{scope:"col"},"名稱"),(0,o._)("th",{scope:"col"},"折扣百分比"),(0,o._)("th",{scope:"col"},"到期日"),(0,o._)("th",{scope:"col"},"是否啟用"),(0,o._)("th",{scope:"col"},"編輯"),(0,o._)("th",{scope:"col"},"刪除")])],-1),m={class:"ps-2"},_={class:"switch"},b=["onUpdate:modelValue","onChange"],w=(0,o._)("span",{class:"slider"},null,-1),f=["onClick"],g=(0,o._)("i",{class:"bi bi-pencil-square cursor-pointer text-primaryDark fs-4 me-6"},null,-1),v=[g],M=["onClick"],C=(0,o._)("i",{class:"bi bi-trash cursor-pointer text-primaryDark fs-4"},null,-1),x=[C];function y(e,t,a,g,C,y){const D=(0,o.up)("LoadingView"),k=(0,o.up)("CouponModal"),L=(0,o.up)("DelModal");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(D,{class:"loading",active:C.isLoading},{default:(0,o.w5)((()=>[i])),_:1},8,["active"]),(0,o._)("div",n,[d,(0,o._)("div",p,[c,(0,o._)("div",{class:"btn btn-primary text-white rounded-2",onClick:t[0]||(t[0]=e=>y.openModal("isCreateNew"))}," 新增優惠券 ")]),(0,o._)("div",r,[(0,o._)("table",u,[h,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(C.coupons,(t=>((0,o.wg)(),(0,o.iD)("tr",{key:t.id},[(0,o._)("td",null,(0,l.zw)(t.code),1),(0,o._)("td",null,(0,l.zw)(t.title),1),(0,o._)("td",null,(0,l.zw)(t.percent)+" %",1),(0,o._)("td",null,(0,l.zw)(e.$filters.date(t.due_date)),1),(0,o._)("td",m,[(0,o._)("label",_,[(0,o.wy)((0,o._)("input",{type:"checkbox","onUpdate:modelValue":e=>t.is_enabled=e,onChange:e=>y.updateCoupon(t,!1),"true-value":1,"false-value":0},null,40,b),[[s.e8,t.is_enabled]]),w])]),(0,o._)("td",null,[(0,o._)("div",{class:"editBtn d-flex align-items-center",onClick:e=>y.openModal("edit",t)},v,8,f)]),(0,o._)("td",null,[(0,o._)("div",{class:"delBtn d-flex align-items-center",onClick:e=>y.openModal("delete",t)},x,8,M)])])))),128))])])])]),(0,o.Wm)(k,{ref:"couponModal",temp:C.temp,isCreateNew:C.isCreateNew,onUpdateCoupons:y.updateCoupon},null,8,["temp","isCreateNew","onUpdateCoupons"]),(0,o.Wm)(L,{ref:"delModal",temp:C.temp,onDelItem:y.delCouponItem},null,8,["temp","onDelItem"])],64)}var D=a(8262),k=a(6294);const L={class:"modal fade",ref:"modal",tabindex:"-1"},$={class:"modal-dialog modal-dialog-centered modal"},N={class:"modal-content background-transparent"},U=(0,o._)("div",{class:"modal-header bg-primaryLight text-center p-3"},[(0,o._)("h4",{class:"modal-title text-white"},"新增優惠券")],-1),V={class:"modal-body bg-white p-6"},I={class:"row"},Z={class:"mb-3 col"},z=(0,o._)("label",{for:"code",class:"form-label"},"優惠碼",-1),W={class:"mb-3 col"},B=(0,o._)("label",{for:"title",class:"form-label"},"名稱",-1),H={class:"row"},S={class:"mb-3 col"},T=(0,o._)("label",{for:"percent",class:"form-label"},"折扣百分比",-1),Y={class:"mb-3 col"},j=(0,o._)("label",{for:"due_date",class:"form-label"},"到期日",-1),q=(0,o._)("p",{class:"fw-bold fs-4 mb-2"},"是否啟用",-1),K={class:"switch"},O=(0,o._)("span",{class:"slider"},null,-1),A={class:"modal-footer flex-nowrap bg-white"},E=(0,o._)("button",{type:"button",class:"btn btn-outline-primary","data-bs-dismiss":"modal"},"取消",-1);function F(e,t,a,l,i,n){return(0,o.wg)(),(0,o.iD)("div",L,[(0,o._)("div",$,[(0,o._)("div",N,[U,(0,o._)("div",V,[(0,o._)("div",I,[(0,o._)("div",Z,[z,(0,o.wy)((0,o._)("input",{id:"code",type:"text",min:"0",class:"form-control",placeholder:"請輸入優惠碼","onUpdate:modelValue":t[0]||(t[0]=t=>e.tempModalData.code=t)},null,512),[[s.nr,e.tempModalData.code,void 0,{trim:!0}]])]),(0,o._)("div",W,[B,(0,o.wy)((0,o._)("input",{id:"title",type:"text",min:"0",class:"form-control",placeholder:"請輸入名稱","onUpdate:modelValue":t[1]||(t[1]=t=>e.tempModalData.title=t)},null,512),[[s.nr,e.tempModalData.title,void 0,{trim:!0}]])])]),(0,o._)("div",H,[(0,o._)("div",S,[T,(0,o.wy)((0,o._)("input",{id:"percent",type:"text",min:"0",class:"form-control",placeholder:"請輸入折扣百分比","onUpdate:modelValue":t[2]||(t[2]=t=>e.tempModalData.percent=t)},null,512),[[s.nr,e.tempModalData.percent,void 0,{number:!0}]])]),(0,o._)("div",Y,[j,(0,o.wy)((0,o._)("input",{id:"due_date",type:"date",min:"0",class:"form-control",placeholder:"到期日","onUpdate:modelValue":t[3]||(t[3]=e=>i.due_date=e)},null,512),[[s.nr,i.due_date]])])]),q,(0,o._)("label",K,[(0,o.wy)((0,o._)("input",{type:"checkbox","onUpdate:modelValue":t[4]||(t[4]=t=>e.tempModalData.is_enabled=t),"true-value":1,"false-value":0},null,512),[[s.e8,e.tempModalData.is_enabled]]),O])]),(0,o._)("div",A,[E,(0,o._)("button",{type:"button",class:"btn btn-primary text-white",onClick:t[5]||(t[5]=t=>e.$emit("update-Coupons",e.tempModalData,a.isCreateNew))},"確定")])])])],512)}var G=a(1339),J={mixins:[G.Z],props:["isCreateNew"],data(){return{due_date:""}},watch:{temp:{handler(){const e=new Date(1e3*this.tempModalData.due_date).toISOString().split("T");this.due_date=e[0]},deep:!0},due_date(){this.tempModalData.due_date=Math.floor(new Date(this.due_date)/1e3)}}},P=a(3744);const Q=(0,P.Z)(J,[["render",F]]);var R=Q,X=a(5252),ee={data(){return{temp:{},coupons:{},isCreateNew:!0,isLoading:!1}},components:{CouponModal:R,DelModal:X.Z},methods:{...(0,D.nv)(k.Z,["pushMsg"]),getCoupons(){this.isLoading=!0,this.$http.get("https://vue3-course-api.hexschool.io/api/claire-api/admin/coupons").then((e=>{this.coupons=e.data.coupons,this.isLoading=!1})).catch((()=>{this.isLoading=!1}))},openModal(e,t){"isCreateNew"===e?(this.temp={due_date:(new Date).getTime()/1e3,is_enabled:0},this.isCreateNew=!0,this.$refs.couponModal.openModal()):"edit"===e?(this.temp={...t},this.isCreateNew=!1,this.$refs.couponModal.openModal()):"delete"===e&&(this.temp={...t},this.$refs.delModal.openModal())},updateCoupon(e,t){let a="https://vue3-course-api.hexschool.io/api/claire-api/admin/coupon",o="post";!1===t&&(o="put",a=`https://vue3-course-api.hexschool.io/api/claire-api/admin/coupon/${e.id}`),this.isLoading=!0,this.$http[o](a,{data:e}).then((e=>{this.isLoading=!1,this.pushMsg(e,"更新","已成功更新優惠券"),this.$refs.couponModal.hideModal(),this.getCoupons()})).catch((()=>{this.isLoading=!1,this.pushMsg(!1,"更新","更新優惠券失敗")}))},delCouponItem(e){this.isLoading=!0,this.$http.delete(`https://vue3-course-api.hexschool.io/api/claire-api/admin/coupon/${e.id}`).then((e=>{this.pushMsg(e,"更新","已成功刪除優惠券"),this.isLoading=!1,this.$refs.delModal.hideModal(),this.getCoupons()})).catch((()=>{this.pushMsg(!1,"更新","刪除優惠券失敗"),this.isLoading=!1}))}},mounted(){this.getCoupons()}};const te=(0,P.Z)(ee,[["render",y]]);var ae=te}}]);
//# sourceMappingURL=330.f47b38c0.js.map