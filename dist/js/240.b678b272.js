"use strict";(self["webpackChunkebookstore"]=self["webpackChunkebookstore"]||[]).push([[240],{7240:function(t,e,s){s.r(e),s.d(e,{default:function(){return O}});s(6699);var i=s(6252),a=s(3577),o=s(9963);const c=(0,i._)("div",{class:"spinner-border text-primary m-5",role:"status"},[(0,i._)("span",{class:"visually-hidden"},"Loading...")],-1),r={class:"list-base section_category bg-light"},n={class:"container"},l={class:"row"},d={class:"col-lg-2 mb-3"},g={class:"list-group text-center"},p=["onClick"],u={class:"col-lg-10 section_products bg-light"},h={class:"row row-cols-1 row-cols-md-2 row-cols-lg-3"},v={class:"card h-100 shadow-sm"},m={class:"badge badge-pill badge-secondaryLight"},y=["onClick"],_=["src"],b={class:"px-1 position-absolute top-0 end-0 mt-2 me-2",style:{cursor:"pointer"}},w={class:"card-body"},f={class:"card-text"},k={class:"card-title"},C=["innerHTML"],x={class:"prices d-flex justify-content-between mb-auto"},L={class:"text-decoration-line-through text-gray me-5"},$={class:"fs-5 fw-bolder"},D=["onClick"],M=(0,i._)("span",null,[(0,i._)("i",{class:"fas fa-shopping-cart"})],-1),T=(0,i.Uk)(" 加入購物車 "),Z=[M,T],z=(0,i._)("div",{class:"bg-light",style:{height:"40px"}},null,-1);function A(t,e,s,M,T,A){const H=(0,i.up)("LoadingView"),P=(0,i.up)("ListBanner"),j=(0,i.up)("router-link"),W=(0,i.up)("font-awesome-icon");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(H,{class:"loading",active:T.isLoading},{default:(0,i.w5)((()=>[c])),_:1},8,["active"]),(0,i.Wm)(P,{title:T.title},null,8,["title"]),(0,i._)("section",r,[(0,i._)("div",n,[(0,i._)("div",l,[(0,i._)("div",d,[(0,i._)("div",g,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(T.categories,(t=>((0,i.wg)(),(0,i.iD)("button",{type:"button",class:(0,a.C_)(["list-group-item list-group-item-action fw-bolder py-3 fs-5",T.isActive===t.category?"active":""]),key:t.category,onClick:e=>A.filterCategory(t.category)},(0,a.zw)(t.name),11,p)))),128))])]),(0,i._)("div",u,[(0,i._)("div",h,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(T.products,(e=>((0,i.wg)(),(0,i.iD)("div",{key:e.id,class:"col mb-4"},[(0,i._)("div",v,[(0,i._)("span",m,(0,a.zw)(e.category),1),(0,i._)("div",{class:"img-wrap position-relative ps-0",onClick:(0,o.iM)((t=>A.getProducts(e.category)),["prevent"])},[(0,i.Wm)(j,{to:`/product/${e.id}`},{default:(0,i.w5)((()=>[(0,i._)("img",{src:e.imageUrl,class:"card-img-top w-100"},null,8,_)])),_:2},1032,["to"]),(0,i._)("span",b,[t.favoriteId.includes(e.id)?((0,i.wg)(),(0,i.j4)(W,{key:0,icon:["fa","heart"],class:"fs-4 text-danger","data-bs-toggle":"tooltip","data-bs-placement":"buttom",title:"取消收藏",onClick:(0,o.iM)((s=>t.toggleFavorite(e)),["prevent"])},null,8,["onClick"])):((0,i.wg)(),(0,i.j4)(W,{key:1,icon:["far","heart"],class:"fs-4 text-danger","data-bs-toggle":"tooltip","data-bs-placement":"buttom",title:"加入收藏",onClick:(0,o.iM)((s=>t.toggleFavorite(e)),["prevent"])},null,8,["onClick"]))])],8,y),(0,i._)("div",w,[(0,i._)("div",f,[(0,i._)("h5",k,(0,a.zw)(e.title),1),(0,i._)("p",{class:"card-content",innerHTML:e.content},null,8,C)]),(0,i._)("div",null,[(0,i._)("p",x,[(0,i._)("span",L,"NT$ "+(0,a.zw)(e.origin_price)+"/人",1),(0,i._)("span",$,"NT$ "+(0,a.zw)(e.price)+"/人",1)])])]),(0,i._)("button",{type:"button",class:"btn btn-secondary btn-addTocart",onClick:(0,o.iM)((s=>t.addToCart(e)),["prevent","stop"])},Z,8,D)])])))),128))])])])])]),z],64)}var H=s(206);const P={class:"list-banner"},j={class:"title"},W={class:"container"},Y={class:"row justify-content-end"},B={class:"col-md-6"},F={class:"text-white"};function I(t,e,s,o,c,r){return(0,i.wg)(),(0,i.iD)("section",P,[(0,i._)("div",j,[(0,i._)("div",W,[(0,i._)("div",Y,[(0,i._)("div",B,[(0,i._)("h2",F,(0,a.zw)(s.title),1)])])])])])}var K={props:{title:{type:String,default:""}},data(){return{}}},N=s(3744);const U=(0,N.Z)(K,[["render",I]]);var S=U,V=s(8262),q=s(4677),E=s(6294),G={components:{ListBanner:S},data(){return{products:[],isActive:"",isLoading:"",title:"行程列表",categories:[{category:"",name:"全部"},{category:"亞洲",name:"亞洲"},{category:"歐洲",name:"歐洲"},{category:"非洲",name:"非洲"},{category:"澳洲",name:"澳洲"},{category:"美洲",name:"美洲"}]}},mixins:[H.Z],created(){const{pathCategory:t}=this.$route.params;t&&(this.category=this.$route.params.category,this.isActive=this.category),this.getProducts(t)},methods:{...(0,V.nv)(q.Z,["addToCart"]),...(0,V.nv)(E.Z,["pushMsg"]),filterCategory(t){this.category=t,this.getProducts(t)},getProducts(t){this.isActive="";let e="https://vue3-course-api.hexschool.io/api/claire-api/products/all";t&&(e=`https://vue3-course-api.hexschool.io/v2/api/claire-api/products?category=${t}`,this.isActive=t),this.isLoading=!0,this.$http.get(e).then((t=>{this.products=t.data.products,this.isLoading=!1})).catch((()=>{this.isLoading=!1}))},computed:{...(0,V.rn)(q.Z,["cartData"]),...(0,V.rn)(E.Z,["isLoadingItem"])},mounted(){void 0!==this.$route.params.category&&(this.category=this.$route.params.category,this.isActive=this.category),this.getProducts()}}};const J=(0,N.Z)(G,[["render",A]]);var O=J}}]);
//# sourceMappingURL=240.b678b272.js.map