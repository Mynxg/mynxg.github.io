import a from"./FlipItem-0wRutvYY.js";import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as _,o as d,c as f,d as o,Q as h,S as A,b as m}from"./app-CkSVD5j1.js";function l(t=new Date){const s=t.getHours(),n=t.getMinutes(),i=t.getSeconds();return[...c(s),...c(n),...c(i)]}function c(t){return t>=10?(""+t).split("").map(s=>Number(s)):[0,t]}const T={components:{FlipItem:a},data(){return{timeArr:l()}},mounted(){this.startTimer()},beforeDestroy(){this.stopTimer()},methods:{startTimer(){this.stopTimer(),this.timer=setTimeout(()=>{this.timeArr=l(),this.startTimer()},1e3)},stopTimer(){clearTimeout(this.timer)}}},u=t=>(h("data-v-60a1cdff"),t=t(),A(),t),v={class:"clock-container"},k=u(()=>m("div",{class:"colon"},null,-1)),I=u(()=>m("div",{class:"colon"},null,-1));function S(t,s,n,i,e,g){const r=_("flip-item");return d(),f("div",v,[o(r,{total:2,current:e.timeArr[0]},null,8,["current"]),o(r,{total:9,current:e.timeArr[1]},null,8,["current"]),k,o(r,{total:5,current:e.timeArr[2]},null,8,["current"]),o(r,{total:9,current:e.timeArr[3]},null,8,["current"]),I,o(r,{total:5,current:e.timeArr[4]},null,8,["current"]),o(r,{total:9,current:e.timeArr[5]},null,8,["current"])])}const C=p(T,[["render",S],["__scopeId","data-v-60a1cdff"],["__file","FlipClock.vue"]]);export{C as default};
