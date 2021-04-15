(function(e){function t(t){for(var s,r,a=t[0],i=t[1],u=t[2],m=0,l=[];m<a.length;m++)r=a[m],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&l.push(c[r][0]),c[r]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);d&&d(t);while(l.length)l.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],s=!0,a=1;a<n.length;a++){var i=n[a];0!==c[i]&&(s=!1)}s&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var s={},c={app:0},o=[];function r(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=s,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var d=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2ad0":function(e,t,n){},"309d":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var s=n("7a23"),c=n("bc3a"),o=n.n(c);function r(e,t,n,c,o,r){const a=Object(s["m"])("List"),i=Object(s["m"])("Counter"),u=Object(s["m"])("Message"),d=Object(s["m"])("ToogleSeen");return Object(s["h"])(),Object(s["c"])("div",null,[Object(s["e"])(a),Object(s["e"])(i),Object(s["e"])(u),Object(s["e"])(d)])}const a=Object(s["e"])("p",null,"List",-1);function i(e,t,n,c,o,r){return Object(s["h"])(),Object(s["c"])("div",null,[a,Object(s["e"])("ol",null,[(Object(s["h"])(!0),Object(s["c"])(s["a"],null,Object(s["l"])(e.list,(e,t)=>(Object(s["h"])(),Object(s["c"])("li",{key:e},Object(s["n"])(e.text)+" - "+Object(s["n"])(t),1))),128)),Object(s["e"])("li",null,[Object(s["q"])(Object(s["e"])("input",{"onUpdate:modelValue":t[1]||(t[1]=t=>e.newListItem=t),onKeyup:t[2]||(t[2]=Object(s["r"])(t=>e.addToList(e.newListItem),["enter"]))},null,544),[[s["o"],e.newListItem]]),Object(s["e"])("button",{onClick:t[3]||(t[3]=t=>e.addToList(e.newListItem))},"Add")])])])}var u=n("5502"),d={namespaced:!0,state:()=>({count:""}),mutations:{setCount(e,t){e.count=t}},actions:{Dincrement(e){o.a.post("api/counter/increment").then(t=>{e.commit("setCount",t.data)})},Dincrement10(e){o.a.post("api/counter/increment10").then(t=>{e.commit("setCount",t.data)})},get_counter(e){o.a.get("api/counter").then(t=>{e.commit("setCount",t.data)})}},getters:{}},m={namespaced:!0,state:()=>({message:"Reverse me!"}),mutations:{reverseMessage(e){e.message=e.message.split("").reverse().join("")},updateMessage(e,t){e.message=t}},actions:{},getters:{}},l={namespaced:!0,state:()=>({list:[{text:"First element"},{text:"Second element"}]}),mutations:{addToList(e,t){e.list.push({text:t})}},actions:{},getters:{}},b={namespaced:!0,state:()=>({seen:!0}),mutations:{setSeen(e,t){e.seen=t}},actions:{reverseSeen(e){o.a.post("api/seen").then(t=>{e.commit("setSeen",t.data)})},get_seen(e){o.a.get("api/seen").then(t=>{e.commit("setSeen",t.data)})}},getters:{}},p=Object(u["a"])({modules:{counter:d,message:m,seen:b,listelements:l},state:{},actions:{},mutations:{}}),j=Object(s["f"])({name:"List",data(){return{newListItem:""}},computed:{list(){return p.state.listelements.list}},methods:{addToList(e){const t=e.trim();""!==t&&(p.commit("listelements/addToList",e),this.newListItem="")}}});j.render=i;var O=j;const f=Object(s["s"])("data-v-4d792c4f");Object(s["j"])("data-v-4d792c4f");const v={class:"counter"};Object(s["i"])();const g=f((e,t,n,c,o,r)=>(Object(s["h"])(),Object(s["c"])("div",v,[Object(s["e"])("p",null,"Counter: "+Object(s["n"])(e.count),1),Object(s["e"])("button",{onClick:t[1]||(t[1]=(...t)=>e.increment&&e.increment(...t))}," Increment "),Object(s["e"])("button",{onClick:t[2]||(t[2]=(...t)=>e.increment10&&e.increment10(...t))}," Increment10 ")])));var h=Object(s["f"])({name:"Counter",computed:{count(){return p.state.counter.count}},methods:{increment(){p.dispatch("counter/Dincrement")},increment10(){p.dispatch("counter/Dincrement10")}},mounted(){p.dispatch("counter/get_counter")}});n("d061");h.render=g,h.__scopeId="data-v-4d792c4f";var y=h;const S=Object(s["s"])("data-v-29171f2a");Object(s["j"])("data-v-29171f2a");const w={class:"message"};Object(s["i"])();const _=S((e,t,n,c,o,r)=>(Object(s["h"])(),Object(s["c"])("div",w,[Object(s["e"])("p",null,Object(s["n"])(e.message),1),Object(s["q"])(Object(s["e"])("input",{"onUpdate:modelValue":t[1]||(t[1]=t=>e.message=t)},null,512),[[s["o"],e.message]]),Object(s["e"])("button",{onClick:t[2]||(t[2]=(...t)=>e.reverseMessage&&e.reverseMessage(...t))},"Reverse Message")])));var L=Object(s["f"])({name:"Message",computed:{message:{get(){return p.state.message.message},set(e){p.commit("message/updateMessage",e)}}},methods:{reverseMessage(){p.commit("message/reverseMessage")}}});n("b1d1");L.render=_,L.__scopeId="data-v-29171f2a";var M=L;const C=Object(s["s"])("data-v-0cc34549");Object(s["j"])("data-v-0cc34549");const I={class:"toogleseen"},T={key:0};Object(s["i"])();const k=C((e,t,n,c,o,r)=>(Object(s["h"])(),Object(s["c"])("div",I,[Object(s["e"])("button",{onClick:t[1]||(t[1]=(...t)=>e.reverseSeen&&e.reverseSeen(...t))},"Toogle Seen"),e.seen?(Object(s["h"])(),Object(s["c"])("span",T,"Now you see me")):Object(s["d"])("",!0)])));var x=Object(s["f"])({name:"ToogleSeen",computed:{seen(){return p.state.seen.seen}},methods:{reverseSeen(){p.dispatch("seen/reverseSeen")}},mounted(){p.dispatch("seen/get_seen")}});n("631a");x.render=k,x.__scopeId="data-v-0cc34549";var P=x,D=Object(s["f"])({components:{List:O,Counter:y,Message:M,ToogleSeen:P}});D.render=r;var q=D;Object(s["b"])(q).use(p).mount("#app")},"631a":function(e,t,n){"use strict";n("309d")},b1d1:function(e,t,n){"use strict";n("ee5f")},d061:function(e,t,n){"use strict";n("2ad0")},ee5f:function(e,t,n){}});