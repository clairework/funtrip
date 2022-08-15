"use strict";(self["webpackChunkebookstore"]=self["webpackChunkebookstore"]||[]).push([[828],{9054:function(a,t,s){var o=s(8262);t["Z"]=(0,o.Q_)("goAnchor",{state:()=>({anchorActive:!1}),actions:{clickAnchor(){this.$router.push("/"),this.anchorActive=!0,this.goAnchor()},goAnchor(){this.anchorActive=!1,setTimeout((()=>{const a=document.querySelector("#cta");document.documentElement.scrollTop=a.offsetTop-150}),800)}}})},5522:function(a,t,s){s.d(t,{Z:function(){return g}});var o=s(6252),e=s(3577);const l={class:"toast-container position-fixed top-85 top-md-10 start-50 translate-middle z-index-3000"},n={class:"toast-header"},r={class:"me-auto"},c=["onClick"],i={class:"toast-body d-flex flex-column align-items-center text-dark"};function d(a,t,s,d,p,u){return(0,o.wg)(),(0,o.iD)("div",l,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.messages,((t,s)=>((0,o.wg)(),(0,o.iD)("div",{class:"toast show",role:"alert","aria-live":"assertive","aria-atomic":"true",key:s},[(0,o._)("div",n,[(0,o._)("span",{class:(0,e.C_)([`bg-${t.style}`,"p-2 rounded me-2 d-inline-block"])},null,2),(0,o._)("strong",r,(0,e.zw)(t.title),1),(0,o._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close",onClick:t=>a.clearToast(s)},null,8,c)]),(0,o._)("div",i,[(0,o._)("i",{class:(0,e.C_)(["fa-solid fa-2x mb-3",`${t.icon} text-${t.style}`])},null,2),(0,o.Uk)(" "+(0,e.zw)(t.content),1)])])))),128))])}var p=s(8262),u=s(6294),m={methods:{...(0,p.nv)(u.Z,["toastShow","clearToast","statusMsg"])},computed:{...(0,p.rn)(u.Z,["messages"])},mounted(){}},f=s(3744);const v=(0,f.Z)(m,[["render",d]]);var g=v},7828:function(a,t,s){s.r(t),s.d(t,{default:function(){return pt}});var o=s(6252);function e(a,t,s,e,l,n){const r=(0,o.up)("FrontNavbar"),c=(0,o.up)("ToastMsg"),i=(0,o.up)("GoTop"),d=(0,o.up)("RouterView"),p=(0,o.up)("FooterComponent");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(r),(0,o.Wm)(c),(0,o.Wm)(i),(0,o.Wm)(d),(0,o.Wm)(p)],64)}var l=s(3577),n=s(1412);const r={class:"sticky-top",id:"top"},c={class:"navbar navbar-expand-lg navbar-white bg-white-70 box-shadow"},i={class:"container"},d=(0,o._)("h1",{class:"logo"},[(0,o._)("img",{src:n,alt:"放假趣"})],-1),p={class:"cart dropdown ms-auto cursor-pointer order-lg-3 fs-6"},u={class:"text-primaryDark",id:"cartDropdown","data-bs-toggle":"dropdown","aria-expanded":"false"},m={class:"d-flex"},f=(0,o._)("i",{class:"fa-solid fa-cart-shopping"},null,-1),v={key:0,class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"},g=(0,o._)("span",{class:"d-none d-md-block"},"購物車",-1),_={class:"dropdown-menu dropdown-menu-end rounded-4"},b={key:0},w=(0,o._)("i",{class:"fa-solid fa-x text-secondaryDark"},null,-1),k=[w],h={key:1},y=(0,o._)("i",{class:"fa-solid fa-bars text-secondaryDark"},null,-1),C=[y],x={class:"collapse navbar-collapse",id:"navbar"},D={class:"navbar-nav ms-auto"},T=(0,o._)("i",{class:"fa-solid fa-house-chimney me-2"},null,-1),Z=(0,o.Uk)("首頁 "),W=(0,o._)("i",{class:"fa-solid fa-clipboard me-2"},null,-1),U=(0,o.Uk)("行程列表 "),q=(0,o._)("i",{class:"fa-solid fa-heart me-2"},null,-1),L=(0,o.Uk)("我的收藏 "),A=(0,o._)("i",{class:"fa-solid fa-magnifying-glass me-2"},null,-1),B=(0,o.Uk)("查詢訂單 ");function I(a,t,s,e,n,w){const y=(0,o.up)("router-link"),I=(0,o.up)("CartList");return(0,o.wg)(),(0,o.iD)("div",r,[(0,o._)("nav",c,[(0,o._)("div",i,[(0,o.Wm)(y,{class:"navbar-brand",to:"/"},{default:(0,o.w5)((()=>[d])),_:1}),(0,o._)("div",p,[(0,o._)("div",u,[(0,o._)("div",m,[(0,o._)("div",{class:(0,l.C_)(["position-relative me-2 me-md-3",{bounced:a.isBounced}])},[f,0!=a.cartData.carts.length?((0,o.wg)(),(0,o.iD)("span",v,(0,l.zw)(a.cartData.carts.length),1)):(0,o.kq)("",!0)],2),g])]),(0,o._)("div",_,[(0,o.Wm)(I,{onGetCartList:a.getCartList},null,8,["onGetCartList"])])]),(0,o._)("button",{class:"navbar-toggler box-shadow-none px-2",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbar","aria-controls":"navbar","aria-expanded":"false","aria-label":"Toggle navigation",onClick:t[0]||(t[0]=a=>n.navIconChange=!n.navIconChange)},[n.navIconChange?((0,o.wg)(),(0,o.iD)("span",b,k)):((0,o.wg)(),(0,o.iD)("span",h,C))]),(0,o._)("div",x,[(0,o._)("ul",D,[(0,o._)("li",{class:"nav-item me-md-3 py-1 fs-6",onClick:t[1]||(t[1]=(...a)=>w.navCollapseBack&&w.navCollapseBack(...a))},[(0,o.Wm)(y,{class:"nav-link",to:"/"},{default:(0,o.w5)((()=>[T,Z])),_:1})]),(0,o._)("li",{class:"nav-item me-md-3 py-1 fs-6",onClick:t[2]||(t[2]=(...a)=>w.navCollapseBack&&w.navCollapseBack(...a))},[(0,o.Wm)(y,{class:"nav-link",to:"/list"},{default:(0,o.w5)((()=>[W,U])),_:1})]),(0,o._)("li",{class:"nav-item me-md-3 py-1 fs-6",onClick:t[3]||(t[3]=(...a)=>w.navCollapseBack&&w.navCollapseBack(...a))},[(0,o.Wm)(y,{class:"nav-link",to:"/favorite"},{default:(0,o.w5)((()=>[q,L])),_:1})]),(0,o._)("li",{class:"nav-item me-md-3 py-1 fs-6",onClick:t[4]||(t[4]=(...a)=>w.navCollapseBack&&w.navCollapseBack(...a))},[(0,o.Wm)(y,{class:"nav-link",to:"/orderSearch"},{default:(0,o.w5)((()=>[A,B])),_:1})])])])])])])}var z=s(9963);const $=a=>((0,o.dD)("data-v-68d7c7d0"),a=a(),(0,o.Cn)(),a),M={ref:"cart",class:"cursor-default bg-white pt-0"},F=$((()=>(0,o._)("div",{class:"py-3 d-flex flex-column align-items-center"},[(0,o._)("p",{class:"fs-3 fw-bold text-dark letter-md-spacing border-primary"},"購物車")],-1))),S={class:"overflow-auto h-100 max-h-70vh p-2"},Y={class:"h-100"},N={key:0,class:"d-flex justify-content-end p-2"},G=(0,o.Uk)("清空購物車 "),V=$((()=>(0,o._)("i",{class:"fas fa-spinner fa-pulse ms-1"},null,-1))),j=[V],E={key:1,class:"w-100 d-flex flex-column align-items-center py-5"},H=$((()=>(0,o._)("i",{class:"fa-solid fa-triangle-exclamation text-primaryDark fa-2x mb-3"},null,-1))),R=$((()=>(0,o._)("p",{class:"fw-bold mb-4"},"購物車內沒有商品",-1))),K=[H,R],O={class:"d-flex align-items-center"},P=["src","alt"],Q={class:"w-100 me-4"},J={class:"fw-bold"},X={class:"fw-bold text-primaryDark"},aa={key:0,class:"text-danger fs-small"},ta={class:"input-group"},sa={class:"input-group w-80 w-md-60"},oa=["onClick"],ea=$((()=>(0,o._)("i",{class:"fa-solid fa-minus"},null,-1))),la=[ea],na=["max","onUpdate:modelValue","onChange"],ra=["onClick"],ca=$((()=>(0,o._)("i",{class:"fa-solid fa-plus text-white"},null,-1))),ia=[ca],da=["onClick"],pa=$((()=>(0,o._)("i",{class:"bi bi-trash text-primaryDark h3 cursor-pointer"},null,-1))),ua=[pa],ma={class:"p-3"},fa={class:"input-group mb-3"},va={key:0,type:"text",class:"form-control",placeholder:"已套用優惠券",disabled:""},ga={class:"text-end mb-3"},_a=(0,o.Uk)(" 小計 : "),ba={class:"text-primary fw-bold"},wa={key:0,class:"text-secondaryDark fw-bold text-end mb-3"},ka=(0,o.Uk)("確認結帳");function ha(a,t,s,e,n,r){const c=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",M,[(0,o._)("div",{class:"cart-popup",onClick:t[4]||(t[4]=(...a)=>r.dropdownMenu&&r.dropdownMenu(...a))},[F,(0,o._)("div",S,[(0,o._)("ul",Y,[a.cartData.carts.length?((0,o.wg)(),(0,o.iD)("div",N,[(0,o._)("div",{class:"btn btn-light text-primaryDark fw-bold",onClick:t[0]||(t[0]=t=>a.delAllCart(a.cartData.carts))},[G,(0,o.wy)((0,o._)("span",null,j,512),[[z.F8,a.isLoadingItem===a.cartData.carts.id]])])])):(0,o.kq)("",!0),0===a.cartData.carts.length?((0,o.wg)(),(0,o.iD)("div",E,K)):(0,o.kq)("",!0),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.cartData.carts,(t=>((0,o.wg)(),(0,o.iD)("li",{class:"d-flex justify-content-between align-items-center border-bottom-1 border-primaryLight p-3 ms-4 me-6",key:t.id},[(0,o._)("div",O,[(0,o.Wm)(c,{class:"overflow-hidden cursor-pointer me-4",to:`/product/${t.product.id}`},{default:(0,o.w5)((()=>[(0,o._)("img",{class:"imgbox_small",src:t.product.imageUrl,alt:t.product.title},null,8,P)])),_:2},1032,["to"]),(0,o._)("div",Q,[(0,o._)("p",J,(0,l.zw)(t.product.title),1),(0,o._)("p",X,[(0,o.Uk)("NT$ "+(0,l.zw)(t.product.price)+" ",1),t.qty>=t.product.inventory?((0,o.wg)(),(0,o.iD)("span",aa,"選取已達上限")):(0,o.kq)("",!0)]),(0,o._)("div",ta,[(0,o._)("div",sa,[(0,o._)("button",{class:(0,l.C_)(["btn btn-outline-primary",{disabled:t.qty<=1}]),type:"button",onClick:s=>a.updateCart(t,t.qty--)},la,10,oa),(0,o.wy)((0,o._)("input",{type:"number",class:"form-control text-center box-shadow-none fs-small",min:"1",max:t.product.inventory,"onUpdate:modelValue":a=>t.qty=a,onChange:s=>a.updateCart(t),readonly:""},null,40,na),[[z.nr,t.qty,void 0,{lazy:!0}]]),(0,o._)("button",{class:(0,l.C_)(["btn btn-primary",{disabled:t.qty>=t.product.inventory}]),type:"button",onClick:s=>a.updateCart(t,t.qty++)},ia,10,ra)])])])]),(0,o._)("div",{class:"delCartItem",onClick:s=>a.delCartItem(t)},ua,8,da)])))),128))]),(0,o.wy)((0,o._)("div",ma,[(0,o._)("div",fa,[a.cartData.final_total!==a.cartData.total?((0,o.wg)(),(0,o.iD)("input",va)):(0,o.wy)(((0,o.wg)(),(0,o.iD)("input",{key:1,type:"text",class:"form-control",placeholder:"輸入優惠券","onUpdate:modelValue":t[1]||(t[1]=t=>a.coupon_code=t),"aria-label":"coupon","aria-describedby":"coupon"},null,512)),[[z.nr,a.coupon_code]]),(0,o._)("button",{class:(0,l.C_)(["btn btn-primary text-white",{disabled:a.cartData.final_total!==a.cartData.total}]),type:"button",id:"coupon",onClick:t[2]||(t[2]=(...t)=>a.addCouponCode&&a.addCouponCode(...t))},"套用優惠券",2)]),(0,o._)("p",ga,[_a,(0,o._)("span",ba,"NT$ "+(0,l.zw)(a.cartData.total),1)]),a.cartData.final_total!==a.cartData.total?((0,o.wg)(),(0,o.iD)("p",wa," 應付金額 : NT$"+(0,l.zw)(n.final_total),1)):(0,o.kq)("",!0),(0,o.Wm)(c,{to:"/checkorder",class:"btn btn-primaryDark w-100",onClick:t[3]||(t[3]=a=>this.$refs.cart.click())},{default:(0,o.w5)((()=>[ka])),_:1})],512),[[z.F8,a.cartData.carts.length]])])])],512)}var ya=s(8262),Ca=s(4677),xa=s(6294),Da={data(){return{final_total:""}},watch:{cartData:{handler(){this.final_total=Math.round(this.cartData.final_total)},deep:!0}},computed:{...(0,ya.rn)(Ca.Z,["cartData","coupon_code"]),...(0,ya.rn)(xa.Z,["isLoadingItem"])},methods:{...(0,ya.nv)(Ca.Z,["getCartList","updateCart","delCartItem","delAllCart","addCouponCode"]),dropdownMenu(a){a.stopPropagation()}},mounted(){this.getCartList()}},Ta=s(3744);const Za=(0,Ta.Z)(Da,[["render",ha],["__scopeId","data-v-68d7c7d0"]]);var Wa=Za,Ua=s(9054),qa=s(206),La={data(){return{navIconChange:!1}},components:{CartList:Wa},mixins:[qa.Z],computed:{...(0,ya.rn)(Ca.Z,["cartData"]),...(0,ya.rn)(xa.Z,["isBounced"]),...(0,ya.rn)(Ua.Z,["anchorActive"])},methods:{...(0,ya.nv)(Ca.Z,["getCartList"]),...(0,ya.nv)(Ua.Z,["clickAnchor"]),navCollapseBack(){if(window.matchMedia("(max-width: 767px)").matches){const a=document.querySelector(".navbar-toggler");a.click()}}}};const Aa=(0,Ta.Z)(La,[["render",I]]);var Ba=Aa;const Ia={class:"text-white bg-primaryOne"},za={class:"container"},$a={class:"row row-cols-1 row-cols-lg-2 pt-3"},Ma={class:"col-md-6 col-lg-8 text-lg-start text-center"},Fa=(0,o._)("h1",{class:"logo"},[(0,o._)("img",{src:n,alt:"放假趣"})],-1),Sa=(0,o._)("div",{class:"py-2 ms-2"},[(0,o._)("div",{class:"pt-4 pb-3"},[(0,o._)("p",{class:""}," © 2022 FunTrip All Rights Reserved. "),(0,o._)("span",{class:"text-primaryDark"}," 本網站僅供個人學習使用，無商業行為 ")])],-1),Ya={class:"col-md-6 col-lg-4 mb-3 mb-lg-3 text-lg-left"},Na=(0,o._)("h3",{class:"text-center fw-bolder py-2"},"聯絡我們",-1),Ga={class:"d-flex text-dark justify-content-center"},Va={class:"d-flex flex-column"},ja={class:""},Ea=(0,o.Uk)(" 桃園市桃園區中山路 "),Ha={class:""},Ra=(0,o.Uk)(" funtrip123@gmail.com "),Ka={class:""},Oa=(0,o.Uk)(" +886 908112333 "),Pa={class:"border-top py-3 ms-2 text-center"},Qa=(0,o._)("i",{class:"fas fa-user-cog text-dark fs-6"},null,-1),Ja=(0,o._)("span",{class:"fs-5 ms-3"},"管理員登入",-1);function Xa(a,t){const s=(0,o.up)("router-link"),e=(0,o.up)("font-awesome-icon");return(0,o.wg)(),(0,o.iD)("footer",Ia,[(0,o._)("div",za,[(0,o._)("div",$a,[(0,o._)("div",Ma,[(0,o.Wm)(s,{class:"w-2",to:"/"},{default:(0,o.w5)((()=>[Fa])),_:1}),Sa]),(0,o._)("div",Ya,[Na,(0,o._)("div",Ga,[(0,o._)("div",Va,[(0,o._)("span",ja,[(0,o.Wm)(e,{icon:["fas","house"],class:"px-3"}),Ea]),(0,o._)("span",Ha,[(0,o.Wm)(e,{icon:["fas","envelope"],class:"px-3"}),Ra]),(0,o._)("span",Ka,[(0,o.Wm)(e,{icon:["fas","phone"],class:"px-3"}),Oa])])])])]),(0,o._)("div",Pa,[(0,o.Wm)(s,{class:"me-4 fs-6",to:"/login"},{default:(0,o.w5)((()=>[Qa,Ja])),_:1})])])])}const at={},tt=(0,Ta.Z)(at,[["render",Xa]]);var st=tt,ot=s(5522);const et={id:"goTop"};function lt(a,t,s,e,l,n){const r=(0,o.up)("font-awesome-icon");return(0,o.wg)(),(0,o.iD)("div",et,[l.scY>300?((0,o.wg)(),(0,o.iD)("button",{key:0,type:"button",class:"goTop btn btn-primaryDark",onClick:t[0]||(t[0]=(...a)=>n.toTop&&n.toTop(...a))},[(0,o.Wm)(r,{icon:["fas","chevron-up"],class:"text-white"})])):(0,o.kq)("",!0)])}var nt={name:"goTop",data(){return{scTimer:0,scY:0}},methods:{handleScroll(){this.scTimer||(this.scTimer=setTimeout((()=>{this.scY=window.scrollY,clearTimeout(this.scTimer),this.scTimer=0}),100))},toTop(){window.scrollTo({top:0,behavior:"smooth"})}},mounted(){window.addEventListener("scroll",this.handleScroll)},unmounted(){window.removeEventListener("scroll",this.handleScroll)}};const rt=(0,Ta.Z)(nt,[["render",lt]]);var ct=rt,it={components:{FrontNavbar:Ba,FooterComponent:st,ToastMsg:ot.Z,GoTop:ct}};const dt=(0,Ta.Z)(it,[["render",e]]);var pt=dt},1412:function(a,t,s){a.exports=s.p+"img/logo01.8dec2bc3.png"}}]);
//# sourceMappingURL=828.3f0d0576.js.map