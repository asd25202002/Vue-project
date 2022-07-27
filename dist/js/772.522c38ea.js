(self["webpackChunkcat_house"]=self["webpackChunkcat_house"]||[]).push([[772],{7972:function(t,e,i){i(1703),i(6699),
/*!
  * Bootstrap modal.js v5.2.0 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
function(e,s){t.exports=s(i(1437),i(4130),i(7317),i(7547),i(1884),i(632),i(5160),i(9069))}(0,(function(t,e,i,s,a,l,n,d){"use strict";const o=t=>t&&"object"===typeof t&&"default"in t?t:{default:t},r=o(e),u=o(i),c=o(s),h=o(a),_=o(l),p=o(n),m="modal",g="bs.modal",f=`.${g}`,b=".data-api",w="Escape",y=`hide${f}`,k=`hidePrevented${f}`,v=`hidden${f}`,O=`show${f}`,D=`shown${f}`,M=`resize${f}`,x=`mousedown.dismiss${f}`,$=`keydown.dismiss${f}`,C=`click${f}${b}`,L="modal-open",P="fade",z="show",T="modal-static",A=".modal.show",E=".modal-dialog",j=".modal-body",Z='[data-bs-toggle="modal"]',B={backdrop:!0,focus:!0,keyboard:!0},H={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class S extends h.default{constructor(t,e){super(t,e),this._dialog=u.default.findOne(E,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new c.default,this._addEventListeners()}static get Default(){return B}static get DefaultType(){return H}static get NAME(){return m}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||this._isTransitioning)return;const e=r.default.trigger(this._element,O,{relatedTarget:t});e.defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(L),this._adjustDialog(),this._backdrop.show((()=>this._showElement(t))))}hide(){if(!this._isShown||this._isTransitioning)return;const t=r.default.trigger(this._element,y);t.defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(z),this._queueCallback((()=>this._hideModal()),this._element,this._isAnimated()))}dispose(){for(const t of[window,this._dialog])r.default.off(t,f);this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new _.default({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new p.default({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const i=u.default.findOne(j,this._dialog);i&&(i.scrollTop=0),t.reflow(this._element),this._element.classList.add(z);const s=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,r.default.trigger(this._element,D,{relatedTarget:e})};this._queueCallback(s,this._dialog,this._isAnimated())}_addEventListeners(){r.default.on(this._element,$,(t=>{if(t.key===w)return this._config.keyboard?(t.preventDefault(),void this.hide()):void this._triggerBackdropTransition()})),r.default.on(window,M,(()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()})),r.default.on(this._element,x,(t=>{t.target===t.currentTarget&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())}))}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(L),this._resetAdjustments(),this._scrollBar.reset(),r.default.trigger(this._element,v)}))}_isAnimated(){return this._element.classList.contains(P)}_triggerBackdropTransition(){const t=r.default.trigger(this._element,k);if(t.defaultPrevented)return;const e=this._element.scrollHeight>document.documentElement.clientHeight,i=this._element.style.overflowY;"hidden"===i||this._element.classList.contains(T)||(e||(this._element.style.overflowY="hidden"),this._element.classList.add(T),this._queueCallback((()=>{this._element.classList.remove(T),this._queueCallback((()=>{this._element.style.overflowY=i}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,i=this._scrollBar.getWidth(),s=i>0;if(s&&!e){const e=t.isRTL()?"paddingLeft":"paddingRight";this._element.style[e]=`${i}px`}if(!s&&e){const e=t.isRTL()?"paddingRight":"paddingLeft";this._element.style[e]=`${i}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const i=S.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof i[t])throw new TypeError(`No method named "${t}"`);i[t](e)}}))}}return r.default.on(document,C,Z,(function(e){const i=t.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),r.default.one(i,O,(e=>{e.defaultPrevented||r.default.one(i,v,(()=>{t.isVisible(this)&&this.focus()}))}));const s=u.default.findOne(A);s&&S.getInstance(s).hide();const a=S.getOrCreateInstance(i);a.toggle(this)})),d.enableDismissTrigger(S),t.defineJQueryPlugin(S),S}))},1339:function(t,e,i){"use strict";var s=i(7972),a=i.n(s);e["Z"]={methods:{showModal(){this.modal.show()},hideModal(){this.modal.hide()}},mounted(){this.modal=new(a())(this.$refs.modal)}}},4570:function(t,e,i){"use strict";i.d(e,{Z:function(){return D}});var s=i(3396),a=i(7139),l=i(9242);const n={class:"modal fade",id:"delModal",tabindex:"-1",ref:"modal"},d={class:"modal-dialog modal-xl modal-fullscreen-md-down"},o={class:"modal-content"},r={class:"modal-header bg-danger text-white"},u={class:"modal-title",id:"exampleModalLabel"},c=(0,s._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),h={class:"modal-body"},_=(0,s.Uk)(" 是否刪除 "),p={class:"text-danger"},m=(0,s._)("strong",null,"[刪除後將無法復原]",-1),g=(0,s.Uk)("。 "),f={class:"modal-footer"},b=(0,s._)("button",{type:"button",class:"btn btn-outline-muted","data-bs-dismiss":"modal"},"取消",-1);function w(t,e,i,w,y,k){return(0,s.wg)(),(0,s.iD)("div",n,[(0,s._)("div",d,[(0,s._)("div",o,[(0,s._)("div",r,[(0,s._)("h5",u,"刪除 "+(0,a.zw)(i.item.title),1),c]),(0,s._)("div",h,[_,(0,s._)("strong",p,(0,a.zw)(i.item.title),1),m,g]),(0,s._)("div",f,[b,(0,s._)("button",{type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=(0,l.iM)((e=>t.$emit("del-item")),["prevent"]))},"確認刪除")])])])],512)}var y=i(1339),k={props:{item:{type:Object}},data(){return{modal:{}}},mixins:[y.Z]},v=i(89);const O=(0,v.Z)(k,[["render",w]]);var D=O},9948:function(t,e,i){"use strict";i.d(e,{Z:function(){return b}});var s=i(3396),a=i(7139),l=i(9242);const n={class:"row"},d={"aria-label":"分頁列"},o={class:"pagination justify-content-center"},r=(0,s._)("span",{"aria-hidden":"true"},"«",-1),u=[r],c=["onClick"],h=(0,s._)("span",{"aria-hidden":"true"},"»",-1),_=[h];function p(t,e,i,r,h,p){return(0,s.wg)(),(0,s.iD)("div",n,[(0,s._)("nav",d,[(0,s._)("ul",o,[(0,s._)("li",{class:(0,a.C_)(["page-item",{disabled:!1===i.pages.has_pre}])},[(0,s._)("a",{class:"page-link link-dark",href:"#","aria-label":"上一頁",onClick:e[0]||(e[0]=(0,l.iM)((t=>p.updatePage(i.pages.current_page-1)),["prevent"]))},u)],2),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.pages.total_pages,(t=>((0,s.wg)(),(0,s.iD)("li",{class:(0,a.C_)(["page-item",{active:t===i.pages.current_page}]),key:t},[(0,s._)("a",{class:"page-link",href:"#",onClick:(0,l.iM)((e=>p.updatePage(t)),["prevent"])},(0,a.zw)(t),9,c)],2)))),128)),(0,s._)("li",{class:(0,a.C_)(["page-item",{disabled:!1===i.pages.has_next}])},[(0,s._)("a",{class:"page-link link-dark",href:"#","aria-label":"下一頁",onClick:e[1]||(e[1]=(0,l.iM)((t=>p.updatePage(i.pages.current_page+1)),["prevent"]))},_)],2)])])])}var m={props:["pages"],methods:{updatePage(t){this.$emit("emit-pages",t)}}},g=i(89);const f=(0,g.Z)(m,[["render",p]]);var b=f},4772:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return ot}});var s=i(3396),a=i(7139),l=i(9242);const n={class:"table mt-4"},d=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"購買時間"),(0,s._)("th",null,"Email"),(0,s._)("th",null,"購買款項"),(0,s._)("th",null,"應付金額"),(0,s._)("th",null,"是否付款"),(0,s._)("th",null,"編輯")])],-1),o=["textContent"],r={class:"list-unstyled"},u={class:"text-right"},c={class:"form-check form-switch"},h=["id","onUpdate:modelValue","onChange"],_=["for"],p={key:0},m={key:1},g={class:"btn-group"},f=["onClick"],b=["onClick"];function w(t,e,i,w,y,k){const v=(0,s.up)("VLoading"),O=(0,s.up)("OrderModal"),D=(0,s.up)("DelModal"),M=(0,s.up)("Pagination");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(v,{active:y.isLoading},null,8,["active"]),(0,s._)("table",n,[d,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(y.orders,((e,i)=>((0,s.wg)(),(0,s.iD)(s.HY,{key:i},[y.orders.length?((0,s.wg)(),(0,s.iD)("tr",{key:0,class:(0,a.C_)({"text-secondary":!e.is_paid})},[(0,s._)("td",null,(0,a.zw)(t.$filters.date(e.create_at)),1),(0,s._)("td",null,[e.user?((0,s.wg)(),(0,s.iD)("span",{key:0,textContent:(0,a.zw)(e.user.email)},null,8,o)):(0,s.kq)("",!0)]),(0,s._)("td",null,[(0,s._)("ul",r,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.products,((t,e)=>((0,s.wg)(),(0,s.iD)("li",{key:e},(0,a.zw)(t.product.title)+" 數量："+(0,a.zw)(t.qty)+" 盒 ",1)))),128))])]),(0,s._)("td",u,(0,a.zw)(e.total),1),(0,s._)("td",null,[(0,s._)("div",c,[(0,s.wy)((0,s._)("input",{class:"form-check-input",type:"checkbox",id:`paidSwitch${e.id}`,"onUpdate:modelValue":t=>e.is_paid=t,onChange:t=>k.updatePaid(e)},null,40,h),[[l.e8,e.is_paid]]),(0,s._)("label",{class:"form-check-label",for:`paidSwitch${e.id}`},[e.is_paid?((0,s.wg)(),(0,s.iD)("span",p,"已付款")):((0,s.wg)(),(0,s.iD)("span",m,"未付款"))],8,_)])]),(0,s._)("td",null,[(0,s._)("div",g,[(0,s._)("button",{class:"btn btn-outline-primary btn-sm",onClick:t=>k.openModal(!1,e)},"檢視",8,f),(0,s._)("button",{class:"btn btn-outline-danger btn-sm",onClick:t=>k.openDelOrderModal(e)},"刪除",8,b)])])],2)):(0,s.kq)("",!0)],64)))),128))])]),(0,s.Wm)(O,{order:y.tempOrder,ref:"orderModal",onUpdatePaid:k.updatePaid},null,8,["order","onUpdatePaid"]),(0,s.Wm)(D,{item:y.tempOrder,ref:"delModal",onDelItem:k.delOrder},null,8,["item","onDelItem"]),(0,s.Wm)(M,{pages:y.pagination,onEmitPages:k.getOrders},null,8,["pages","onEmitPages"])],64)}const y={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},k={class:"modal-dialog modal-xl",role:"document"},v={class:"modal-content border-0"},O=(0,s._)("div",{class:"modal-header bg-dark text-white"},[(0,s._)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,s._)("span",null,"訂單細節")]),(0,s._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),D={class:"modal-body"},M={class:"row"},x={class:"col-md-4"},$=(0,s._)("h3",null,"用戶資料",-1),C={class:"table"},L={key:0},P=(0,s._)("th",{style:{width:"100px"}},"姓名",-1),z=(0,s._)("th",null,"Email",-1),T=(0,s._)("th",null,"電話",-1),A=(0,s._)("th",null,"地址",-1),E={class:"col-md-8"},j=(0,s._)("h3",null,"訂單細節",-1),Z={class:"table"},B=(0,s._)("th",{style:{width:"100px"}},"訂單編號",-1),H=(0,s._)("th",null,"下單時間",-1),S=(0,s._)("th",null,"付款時間",-1),q={key:0},Y={key:1},U=(0,s._)("th",null,"付款狀態",-1),I={key:0,class:"text-success"},R={key:1,class:"text-muted"},N=(0,s._)("th",null,"總金額",-1),V=(0,s._)("h3",null,"選購商品",-1),W={class:"table"},K=(0,s._)("thead",null,[(0,s._)("tr")],-1),F={class:"text-end"},Q={class:"modal-footer"},J=(0,s._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1);function G(t,e,i,l,n,d){return(0,s.wg)(),(0,s.iD)("div",y,[(0,s._)("div",k,[(0,s._)("div",v,[O,(0,s._)("div",D,[(0,s._)("div",M,[(0,s._)("div",x,[$,(0,s._)("table",C,[n.tempOrder.user?((0,s.wg)(),(0,s.iD)("tbody",L,[(0,s._)("tr",null,[P,(0,s._)("td",null,(0,a.zw)(n.tempOrder.user.name),1)]),(0,s._)("tr",null,[z,(0,s._)("td",null,(0,a.zw)(n.tempOrder.user.email),1)]),(0,s._)("tr",null,[T,(0,s._)("td",null,(0,a.zw)(n.tempOrder.user.tel),1)]),(0,s._)("tr",null,[A,(0,s._)("td",null,(0,a.zw)(n.tempOrder.user.address),1)])])):(0,s.kq)("",!0)])]),(0,s._)("div",E,[j,(0,s._)("table",Z,[(0,s._)("tbody",null,[(0,s._)("tr",null,[B,(0,s._)("td",null,(0,a.zw)(n.tempOrder.id),1)]),(0,s._)("tr",null,[H,(0,s._)("td",null,(0,a.zw)(t.$filters.date(n.tempOrder.create_at)),1)]),(0,s._)("tr",null,[S,(0,s._)("td",null,[n.tempOrder.paid_date?((0,s.wg)(),(0,s.iD)("span",q,(0,a.zw)(t.$filters.date(n.tempOrder.paid_date)),1)):((0,s.wg)(),(0,s.iD)("span",Y,"時間不正確"))])]),(0,s._)("tr",null,[U,(0,s._)("td",null,[n.tempOrder.is_paid?((0,s.wg)(),(0,s.iD)("strong",I,"已付款")):((0,s.wg)(),(0,s.iD)("span",R,"尚未付款"))])]),(0,s._)("tr",null,[N,(0,s._)("td",null,(0,a.zw)(t.$filters.currency(n.tempOrder.total)),1)])])]),V,(0,s._)("table",W,[K,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.tempOrder.products,(e=>((0,s.wg)(),(0,s.iD)("tr",{key:e.id},[(0,s._)("th",null,(0,a.zw)(e.product.title),1),(0,s._)("td",null,(0,a.zw)(e.qty)+" / 盒 ",1),(0,s._)("td",F,(0,a.zw)(t.$filters.currency(e.final_total)),1)])))),128))])])])])]),(0,s._)("div",Q,[J,(0,s._)("button",{type:"button",class:"btn btn-primary",onClick:e[0]||(e[0]=e=>t.$emit("update-order",n.tempOrder))},"確認")])])])],512)}var X=i(1339),tt={name:"orderModal",props:{order:{type:Object,default(){return{}}}},data(){return{status:{},modal:"",tempOrder:{},isPaid:!1}},emits:["update-product"],mixins:[X.Z],inject:["emitter"],watch:{order(){this.tempOrder=this.order,this.isPaid=this.tempOrder.is_paid}}},et=i(89);const it=(0,et.Z)(tt,[["render",G]]);var st=it,at=i(4570),lt=i(9948),nt={data(){return{orders:{},isNew:!1,pagination:{},isLoading:!1,tempOrder:{},currentPage:1}},components:{Pagination:lt.Z,DelModal:at.Z,OrderModal:st},inject:["toastMessagesMixin"],methods:{getOrders(t=1){this.currentPage=t;const e=`https://vue3-course-api.hexschool.io/api/yui-api/admin/orders?page=${t}`;this.isLoading=!0,this.$http.get(e,this.tempProduct).then((t=>{this.orders=t.data.orders,this.pagination=t.data.pagination,this.isLoading=!1,console.log(t)}))},openModal(t,e){this.tempOrder={...e},this.isNew=!1;const i=this.$refs.orderModal;i.showModal()},openDelOrderModal(t){this.tempOrder={...t};const e=this.$refs.delModal;e.showModal()},updatePaid(t){this.isLoading=!0;const e=`https://vue3-course-api.hexschool.io/api/yui-api/admin/order/${t.id}`,i={is_paid:t.is_paid};this.$http.put(e,{data:i}).then((t=>{this.isLoading=!1,this.getOrders(this.currentPage),this.toastMessagesMixin(t,"更新付款狀態")}))},delOrder(){const t=`https://vue3-course-api.hexschool.io/api/yui-api/admin/order/${this.tempOrder.id}`;this.isLoading=!0,this.$http.delete(t).then((t=>{this.toastMessagesMixin(t,"刪除訂單");const e=this.$refs.delModal;e.hideModal(),this.getOrders(this.currentPage)}))}},created(){this.getOrders(),console.log("https://vue3-course-api.hexschool.io/")}};const dt=(0,et.Z)(nt,[["render",w]]);var ot=dt}}]);
//# sourceMappingURL=772.522c38ea.js.map