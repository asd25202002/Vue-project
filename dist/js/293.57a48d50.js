(self["webpackChunkcat_house"]=self["webpackChunkcat_house"]||[]).push([[293],{7972:function(e,t,i){i(1703),i(6699),
/*!
  * Bootstrap modal.js v5.2.0 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
function(t,s){e.exports=s(i(1437),i(4130),i(7317),i(7547),i(1884),i(632),i(5160),i(9069))}(0,(function(e,t,i,s,o,n,a,l){"use strict";const d=e=>e&&"object"===typeof e&&"default"in e?e:{default:e},c=d(t),u=d(i),r=d(s),p=d(o),h=d(n),m=d(a),_="modal",g="bs.modal",b=`.${g}`,f=".data-api",v="Escape",C=`hide${b}`,k=`hidePrevented${b}`,w=`hidden${b}`,y=`show${b}`,x=`shown${b}`,M=`resize${b}`,D=`mousedown.dismiss${b}`,$=`keydown.dismiss${b}`,T=`click${b}${f}`,L="modal-open",P="fade",E="show",A="modal-static",V=".modal.show",U=".modal-dialog",j=".modal-body",W='[data-bs-toggle="modal"]',z={backdrop:!0,focus:!0,keyboard:!0},I={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class N extends p.default{constructor(e,t){super(e,t),this._dialog=u.default.findOne(U,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new r.default,this._addEventListeners()}static get Default(){return z}static get DefaultType(){return I}static get NAME(){return _}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||this._isTransitioning)return;const t=c.default.trigger(this._element,y,{relatedTarget:e});t.defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(L),this._adjustDialog(),this._backdrop.show((()=>this._showElement(e))))}hide(){if(!this._isShown||this._isTransitioning)return;const e=c.default.trigger(this._element,C);e.defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(E),this._queueCallback((()=>this._hideModal()),this._element,this._isAnimated()))}dispose(){for(const e of[window,this._dialog])c.default.off(e,b);this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new h.default({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new m.default({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const i=u.default.findOne(j,this._dialog);i&&(i.scrollTop=0),e.reflow(this._element),this._element.classList.add(E);const s=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,c.default.trigger(this._element,x,{relatedTarget:t})};this._queueCallback(s,this._dialog,this._isAnimated())}_addEventListeners(){c.default.on(this._element,$,(e=>{if(e.key===v)return this._config.keyboard?(e.preventDefault(),void this.hide()):void this._triggerBackdropTransition()})),c.default.on(window,M,(()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()})),c.default.on(this._element,D,(e=>{e.target===e.currentTarget&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())}))}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(L),this._resetAdjustments(),this._scrollBar.reset(),c.default.trigger(this._element,w)}))}_isAnimated(){return this._element.classList.contains(P)}_triggerBackdropTransition(){const e=c.default.trigger(this._element,k);if(e.defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight,i=this._element.style.overflowY;"hidden"===i||this._element.classList.contains(A)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(A),this._queueCallback((()=>{this._element.classList.remove(A),this._queueCallback((()=>{this._element.style.overflowY=i}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,i=this._scrollBar.getWidth(),s=i>0;if(s&&!t){const t=e.isRTL()?"paddingLeft":"paddingRight";this._element.style[t]=`${i}px`}if(!s&&t){const t=e.isRTL()?"paddingRight":"paddingLeft";this._element.style[t]=`${i}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,t){return this.each((function(){const i=N.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof i[e])throw new TypeError(`No method named "${e}"`);i[e](t)}}))}}return c.default.on(document,T,W,(function(t){const i=e.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),c.default.one(i,y,(t=>{t.defaultPrevented||c.default.one(i,w,(()=>{e.isVisible(this)&&this.focus()}))}));const s=u.default.findOne(V);s&&N.getInstance(s).hide();const o=N.getOrCreateInstance(i);o.toggle(this)})),l.enableDismissTrigger(N),e.defineJQueryPlugin(N),N}))},1339:function(e,t,i){"use strict";var s=i(7972),o=i.n(s);t["Z"]={methods:{showModal(){this.modal.show()},hideModal(){this.modal.hide()}},mounted(){this.modal=new(o())(this.$refs.modal)}}},4570:function(e,t,i){"use strict";i.d(t,{Z:function(){return x}});var s=i(3396),o=i(7139),n=i(9242);const a={class:"modal fade",id:"delModal",tabindex:"-1",ref:"modal"},l={class:"modal-dialog modal-xl modal-fullscreen-md-down"},d={class:"modal-content"},c={class:"modal-header bg-danger text-white"},u={class:"modal-title",id:"exampleModalLabel"},r=(0,s._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),p={class:"modal-body"},h=(0,s.Uk)(" 是否刪除 "),m={class:"text-danger"},_=(0,s._)("strong",null,"[刪除後將無法復原]",-1),g=(0,s.Uk)("。 "),b={class:"modal-footer"},f=(0,s._)("button",{type:"button",class:"btn btn-outline-muted","data-bs-dismiss":"modal"},"取消",-1);function v(e,t,i,v,C,k){return(0,s.wg)(),(0,s.iD)("div",a,[(0,s._)("div",l,[(0,s._)("div",d,[(0,s._)("div",c,[(0,s._)("h5",u,"刪除 "+(0,o.zw)(i.item.title),1),r]),(0,s._)("div",p,[h,(0,s._)("strong",m,(0,o.zw)(i.item.title),1),_,g]),(0,s._)("div",b,[f,(0,s._)("button",{type:"button",class:"btn btn-danger",onClick:t[0]||(t[0]=(0,n.iM)((t=>e.$emit("del-item")),["prevent"]))},"確認刪除")])])])],512)}var C=i(1339),k={props:{item:{type:Object}},data(){return{modal:{}}},mixins:[C.Z]},w=i(89);const y=(0,w.Z)(k,[["render",v]]);var x=y},9948:function(e,t,i){"use strict";i.d(t,{Z:function(){return f}});var s=i(3396),o=i(7139),n=i(9242);const a={class:"row"},l={"aria-label":"分頁列"},d={class:"pagination justify-content-center"},c=(0,s._)("span",{"aria-hidden":"true"},"«",-1),u=[c],r=["onClick"],p=(0,s._)("span",{"aria-hidden":"true"},"»",-1),h=[p];function m(e,t,i,c,p,m){return(0,s.wg)(),(0,s.iD)("div",a,[(0,s._)("nav",l,[(0,s._)("ul",d,[(0,s._)("li",{class:(0,o.C_)(["page-item",{disabled:!1===i.pages.has_pre}])},[(0,s._)("a",{class:"page-link link-dark",href:"#","aria-label":"上一頁",onClick:t[0]||(t[0]=(0,n.iM)((e=>m.updatePage(i.pages.current_page-1)),["prevent"]))},u)],2),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.pages.total_pages,(e=>((0,s.wg)(),(0,s.iD)("li",{class:(0,o.C_)(["page-item",{active:e===i.pages.current_page}]),key:e},[(0,s._)("a",{class:"page-link",href:"#",onClick:(0,n.iM)((t=>m.updatePage(e)),["prevent"])},(0,o.zw)(e),9,r)],2)))),128)),(0,s._)("li",{class:(0,o.C_)(["page-item",{disabled:!1===i.pages.has_next}])},[(0,s._)("a",{class:"page-link link-dark",href:"#","aria-label":"下一頁",onClick:t[1]||(t[1]=(0,n.iM)((e=>m.updatePage(i.pages.current_page+1)),["prevent"]))},h)],2)])])])}var _={props:["pages"],methods:{updatePage(e){this.$emit("emit-pages",e)}}},g=i(89);const b=(0,g.Z)(_,[["render",m]]);var f=b},4293:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return le}});var s=i(3396),o=i(9242),n=i(7139);const a={class:"row g-3"},l={class:"col-lg-10 text-center"},d={class:"row"},c={class:"col-10"},u=(0,s._)("div",{class:"col-2 d-grid"},[(0,s._)("button",{type:"submit",class:"btn btn-outline-secondary"},[(0,s._)("i",{class:"bi bi-search"})])],-1),r={class:"col-lg-2 text-end"},p={class:"row my-4"},h={class:"table table-hover align-middle"},m=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"活動名稱"),(0,s._)("th",null,"折扣百分比"),(0,s._)("th",null,"到期日"),(0,s._)("th",{class:"text-center"},"狀態"),(0,s._)("th",{class:"text-center"},"編輯")])],-1),_={class:"text-center"},g={key:0,class:"text-success"},b={key:1,class:"text-muted"},f={class:"text-center"},v={class:"btn-group"},C=["onClick"],k=["onClick"];function w(e,t,i,w,y,x){const M=(0,s.up)("VLoading"),D=(0,s.up)("CouponsModal"),$=(0,s.up)("DelModal"),T=(0,s.up)("Pagination");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(M,{active:y.isLoading},null,8,["active"]),(0,s._)("div",a,[(0,s._)("div",l,[(0,s._)("div",d,[(0,s._)("div",c,[(0,s.wy)((0,s._)("input",{type:"search",class:"form-control me-2",placeholder:"請輸入產品名稱","aria-label":"產品收尋輸入框","onUpdate:modelValue":t[0]||(t[0]=e=>y.search=e)},null,512),[[o.nr,y.search]])]),u])]),(0,s._)("div",r,[(0,s._)("button",{class:"btn btn-outline-secondary",onClick:t[1]||(t[1]=(0,o.iM)((e=>x.openCouponsModal(!0)),["prevent"]))}," 新增優惠卷 ")])]),(0,s._)("div",p,[(0,s._)("table",h,[m,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(x.filterCoupons,(t=>((0,s.wg)(),(0,s.iD)("tr",{key:t.id},[(0,s._)("td",null,(0,n.zw)(t.title),1),(0,s._)("td",null,(0,n.zw)(t.percent),1),(0,s._)("td",null,(0,n.zw)(e.$filters.date(t.due_date)),1),(0,s._)("td",_,[t.is_enabled?((0,s.wg)(),(0,s.iD)("span",g,"啟用")):((0,s.wg)(),(0,s.iD)("span",b,"未啟用"))]),(0,s._)("td",f,[(0,s._)("div",v,[(0,s._)("button",{type:"button",class:"btn btn-outline-success",onClick:(0,o.iM)((e=>x.openCouponsModal(!1,t)),["prevent"])},"編輯",8,C),(0,s._)("button",{type:"button",class:"btn btn-outline-danger",onClick:(0,o.iM)((e=>x.openDelCouponsModal(t)),["prevent"])},"刪除",8,k)])])])))),128))])])]),(0,s.Wm)(D,{ref:"couponModal",coupon:y.tempCoupon,onUpdateCoupon:x.updateCoupon},null,8,["coupon","onUpdateCoupon"]),(0,s.Wm)($,{ref:"delModal",item:y.tempCoupon,onDelItem:x.delCoupon},null,8,["item","onDelItem"]),(0,s.Wm)(T,{pages:y.pagination,onEmitPages:x.getCoupons},null,8,["pages","onEmitPages"])],64)}const y={class:"modal fade",id:"couponsModal",tabindex:"-1","data-bs-backdrop":"static",ref:"modal"},x={class:"modal-dialog modal-xl modal-fullscreen-md-down"},M={class:"modal-content"},D=(0,s._)("div",{class:"modal-header bg-dark text-white"},[(0,s._)("h5",{class:"modal-title",id:"couponModalLabel"},"新增優惠卷"),(0,s._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),$={class:"modal-body"},T={class:"container-fluid"},L=(0,s._)("legend",{class:"h3"},"優惠卷資訊",-1),P={class:"col-6"},E={class:"input-group mb-3"},A=(0,s._)("label",{for:"inputCouponName",class:"input-group-text"},"名稱",-1),V=(0,s._)("div",{class:"valid-feedback text-end"},[(0,s._)("i",{class:"bi bi-check-circle"}),(0,s.Uk)("活動名稱格式正確 ")],-1),U={class:"col-6"},j={class:"input-group mb-3"},W=(0,s._)("label",{for:"inputCouponCode",class:"input-group-text"},"優惠碼",-1),z=(0,s._)("div",{class:"valid-feedback text-end"},[(0,s._)("i",{class:"bi bi-check-circle"}),(0,s.Uk)("優惠碼格式正確 ")],-1),I={class:"col-6"},N={class:"input-group mb-3"},Z=(0,s._)("label",{for:"inputCouponDue_date",class:"input-group-text"},"到日期",-1),B=(0,s._)("div",{name:"couponDue_date",class:"invalid-feedback text-end"}," 到日期不能為空 ",-1),S=(0,s._)("div",{class:"valid-feedback text-end"},[(0,s._)("i",{class:"bi bi-check-circle"}),(0,s.Uk)("到日期格式正確 ")],-1),q={class:"col-6"},O={class:"input-group mb-3"},H=(0,s._)("label",{for:"inputCouponPercent",class:"input-group-text"},"折扣百分比",-1),R=(0,s._)("div",{class:"valid-feedback text-end"},[(0,s._)("i",{class:"bi bi-check-circle"}),(0,s.Uk)("折扣百分比格式正確 ")],-1),Y={class:"col mb-3 text-end"},F=(0,s._)("label",{for:"inputCouponIsEnabled",class:"form-check-label"},"是否啟用",-1),K={class:"modal-footer"},Q=(0,s._)("button",{type:"button",class:"btn btn-outline-muted","data-bs-dismiss":"modal"},"取消",-1);function J(e,t,i,a,l,d){const c=(0,s.up)("VField"),u=(0,s.up)("ErrorMessage"),r=(0,s.up)("V-form");return(0,s.wg)(),(0,s.iD)("div",y,[(0,s._)("div",x,[(0,s._)("div",M,[D,(0,s._)("div",$,[(0,s._)("div",T,[(0,s.Wm)(r,{class:"row g-4"},{default:(0,s.w5)((({errors:e})=>[L,(0,s._)("div",P,[(0,s._)("div",E,[A,(0,s.Wm)(c,{type:"text",name:"couponName",id:"inputCouponName",class:(0,n.C_)(["form-control",{"is-invalid":e["couponName"]||!l.tempCoupon.title,"is-valid":l.tempCoupon.title}]),placeholder:"請輸入活動名稱",rules:"required","aria-label":"活動名稱輸入框",modelValue:l.tempCoupon.title,"onUpdate:modelValue":t[0]||(t[0]=e=>l.tempCoupon.title=e)},null,8,["class","modelValue"]),(0,s.Wm)(u,{name:"couponName",class:"invalid-feedback text-end"}),V])]),(0,s._)("div",U,[(0,s._)("div",j,[W,(0,s.Wm)(c,{type:"text",name:"couponCode",id:"inputCouponCode",class:(0,n.C_)(["form-control",{"is-invalid":e["couponCode"]||!l.tempCoupon.code,"is-valid":l.tempCoupon.code&&!e["couponCode"]}]),placeholder:"請輸入優惠碼",rules:"alpha_num|required","aria-label":"優惠碼輸入框",modelValue:l.tempCoupon.code,"onUpdate:modelValue":t[1]||(t[1]=e=>l.tempCoupon.code=e)},null,8,["class","modelValue"]),(0,s.Wm)(u,{name:"couponCode",class:"invalid-feedback text-end"}),z])]),(0,s._)("div",I,[(0,s._)("div",N,[Z,(0,s.wy)((0,s._)("input",{type:"date",name:"couponDue_date",id:"inputCouponDue_date",class:(0,n.C_)(["form-control",{"is-invalid":!l.tempCoupon.due_date,"is-valid":l.tempCoupon.due_date}]),placeholder:"請輸入到日期","aria-label":"到日期輸入框","onUpdate:modelValue":t[2]||(t[2]=e=>l.due_date=e),required:""},null,2),[[o.nr,l.due_date]]),B,S])]),(0,s._)("div",q,[(0,s._)("div",O,[H,(0,s.Wm)(c,{type:"number",name:"couponPercent",id:"inputCouponPercent",class:(0,n.C_)(["form-control",{"is-invalid":e["couponPercent"]||!l.tempCoupon.percent,"is-valid":l.tempCoupon.percent}]),placeholder:"請輸入折扣百分比",rules:"numeric|required","aria-label":"折扣百分比輸入框",modelValue:l.tempCoupon.percent,"onUpdate:modelValue":t[3]||(t[3]=e=>l.tempCoupon.percent=e)},null,8,["class","modelValue"]),(0,s.Wm)(u,{name:"couponPercent",class:"invalid-feedback text-end"}),R])]),(0,s._)("div",Y,[(0,s.wy)((0,s._)("input",{type:"checkbox",name:"couponIsEnabled",id:"inputCouponIsEnabled",class:"form-check-input","true-value":1,"false-value":0,"onUpdate:modelValue":t[4]||(t[4]=e=>l.tempCoupon.is_enabled=e)},null,512),[[o.e8,l.tempCoupon.is_enabled]]),F])])),_:1})])]),(0,s._)("div",K,[Q,(0,s._)("button",{type:"button",class:"btn btn-dark",onClick:t[5]||(t[5]=(0,o.iM)((t=>e.$emit("update-coupon",l.tempCoupon)),["prevent"]))},"確定")])])])],512)}var G=i(1339),X={props:{coupon:{type:Object,default(){return{}}}},data(){return{modal:{},tempCoupon:{},due_date:{}}},watch:{coupon(){this.tempCoupon=this.coupon;const e=new Date(1e3*this.tempCoupon.due_date).toISOString().split("T");[this.due_date]=e},due_date(){this.tempCoupon.due_date=Math.floor(new Date(this.due_date)/1e3)}},mixins:[G.Z]},ee=i(89);const te=(0,ee.Z)(X,[["render",J]]);var ie=te,se=i(4570),oe=i(9948),ne={data(){return{coupons:[],pagination:{},tempCoupon:{},search:"",isLoading:!1,isNew:!1}},components:{CouponsModal:ie,DelModal:se.Z,Pagination:oe.Z},inject:["toastMessagesMixin"],methods:{getCoupons(e=1){this.isLoading=!0;const t=`https://vue3-course-api.hexschool.io/api/yui-api/admin/coupons?page=${e}`;this.$http.get(t).then((e=>{this.isLoading=!1,e.data.success&&(this.coupons=e.data.coupons,this.pagination=e.data.pagination)}))},openCouponsModal(e,t){this.tempCoupon=e?{due_date:(new Date).getTime()/1e3}:{...t},this.isNew=e;const i=this.$refs.couponModal;i.showModal()},openDelCouponsModal(e){this.tempCoupon={...e};const t=this.$refs.delModal;t.showModal()},delCoupon(){const e=`https://vue3-course-api.hexschool.io/api/yui-api/admin/coupon/${this.tempCoupon.id}`;this.isLoading=!0,this.$http.delete(e).then((e=>{this.toastMessagesMixin(e,"刪除",this.tempCoupon.title);const t=this.$refs.delModal;t.hideModal(),this.getCoupons(this.pagination.currentPage)}))},updateCoupon(e){this.tempCoupon=e,this.tempCoupon.percent=parseInt(this.tempCoupon.percent,10);let t="https://vue3-course-api.hexschool.io/api/yui-api/admin/coupon",i="post";this.isNew||(t=`https://vue3-course-api.hexschool.io/api/yui-api/admin/coupon/${e.id}`,i="put");const s=this.$refs.couponModal;this.isLoading=!0,this.$http[i](t,{data:this.tempCoupon}).then((t=>{this.toastMessagesMixin(t,"上傳",e.title),s.hideModal(),this.getCoupons()}))}},computed:{filterCoupons(){return this.coupons.filter((e=>{const t=e.title.match(this.search);return t}))}},created(){this.getCoupons()}};const ae=(0,ee.Z)(ne,[["render",w]]);var le=ae}}]);
//# sourceMappingURL=293.57a48d50.js.map