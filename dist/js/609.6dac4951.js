"use strict";(self["webpackChunkcat_house"]=self["webpackChunkcat_house"]||[]).push([[609],{8609:function(e,s,a){a.r(s),a.d(s,{default:function(){return V}});var t=a(3396),n=a(7139);const l={class:"my-4"},r=(0,t._)("hr",null,null,-1),o={class:"container my-5"},i=(0,t._)("div",{class:"mb-3 text-center fs-3"},"後台管理",-1),c=(0,t._)("div",{class:"mb-4 text-center fs-5"},"歡迎使用後台管理服務",-1),u={class:"mb-3 fs-5"},d=(0,t._)("label",{for:"inputUserEmail",class:"form-label"},"帳號",-1),m=(0,t._)("span",{class:"text-danger"},"*",-1),p={class:"mb-4 fs-5"},h=(0,t._)("label",{for:"inputUserPassword",class:"form-label"},"密碼",-1),f=(0,t._)("span",{class:"text-danger"},"*",-1),_=(0,t._)("div",{class:"form-text"},"提醒您在公共場所登入時，須小心。",-1),b=(0,t._)("div",{class:"mb-4 text-end"},[(0,t._)("button",{type:"submit",class:"btn btn-outline-success"},"登入")],-1),v=(0,t._)("div",{class:"text-center fs-1"},[(0,t._)("strong",null,"注意事項")],-1),x=(0,t._)("div",{class:"text-center fs-5"},[(0,t.Uk)("此處為供使用者管理產品、訂單、優惠卷等所使用，若忘記帳密請點選 "),(0,t._)("a",{href:"./index.html"}," 忘記密碼")],-1);function k(e,s,a,k,w,g){const $=(0,t.up)("VField"),V=(0,t.up)("ErrorMessage"),U=(0,t.up)("V-form");return(0,t.wg)(),(0,t.iD)("main",l,[r,(0,t._)("div",o,[i,c,(0,t.Wm)(U,{class:"mx-auto logo",onSubmit:g.signIn},{default:(0,t.w5)((({errors:e})=>[(0,t._)("div",u,[d,m,(0,t.Wm)($,{type:"email",name:"email",id:"inputUserEmail",class:(0,n.C_)(["form-control",{"is-invalid":e["email"]}]),placeholder:"name@example.com",rules:"email|required","aria-label":"電子郵件帳號輸入框",modelValue:w.user.username,"onUpdate:modelValue":s[0]||(s[0]=e=>w.user.username=e)},null,8,["class","modelValue"]),(0,t.Wm)(V,{name:"email",class:"invalid-feedback"})]),(0,t._)("div",p,[h,f,(0,t.Wm)($,{type:"password",name:"password",id:"inputUserPassword",class:(0,n.C_)(["form-control",{"is-invalid":e["password"]}]),placeholder:"password",rules:"required","aria-label":"密碼輸入框",modelValue:w.user.password,"onUpdate:modelValue":s[1]||(s[1]=e=>w.user.password=e)},null,8,["class","modelValue"]),(0,t.Wm)(V,{name:"password",class:"invalid-feedback"})]),_,b])),_:1},8,["onSubmit"]),v,x])])}var w={data(){return{user:{username:"",password:""}}},methods:{signIn(){const e="https://vue3-course-api.hexschool.io/admin/signin";this.$http.post(e,this.user).then((e=>{if(e.data.success){const{token:s,expired:a}=e.data;document.cookie=`hexToken=${s}; expires=${new Date(a)}`,this.$router.push({name:"admin"})}}))},checkSignIn(){const e=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=e;const s="https://vue3-course-api.hexschool.io/api/user/check";this.$http.post(s).then((e=>{e.data.success?this.$router.push({name:"admin"}):this.$router.push({name:"login"})}))}},created(){this.checkSignIn()}},g=a(89);const $=(0,g.Z)(w,[["render",k]]);var V=$}}]);
//# sourceMappingURL=609.6dac4951.js.map