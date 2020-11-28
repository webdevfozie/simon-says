(function(t){function e(e){for(var i,a,c=e[0],r=e[1],u=e[2],f=0,d=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);l&&l(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,c=1;c<n.length;c++){var r=n[c];0!==s[r]&&(i=!1)}i&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},s={app:0},o=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=r;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("audio",{attrs:{id:"1",src:"https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"}}),n("audio",{attrs:{id:"2",src:"https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"}}),n("audio",{attrs:{id:"3",src:"https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"}}),n("audio",{attrs:{id:"4",src:"https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"}}),n("div",{staticClass:"container"},[n("h1",{staticClass:"game-title"},[t._v("Simon the game")]),n("div",{staticClass:"game-field",class:{"btn-lock":t.btnLock}},[n("ul",[n("li",{staticClass:"btn red",attrs:{id:"top-right",data:"1"},on:{click:function(e){++t.pressCount,t.check(e)}}}),n("li",{staticClass:"btn blue",attrs:{id:"top-left",data:"2"},on:{click:function(e){++t.pressCount,t.check(e)}}}),n("li",{staticClass:"btn yellow",attrs:{id:"bottom-left",data:"3"},on:{click:function(e){++t.pressCount,t.check(e)}}}),n("li",{staticClass:"btn green",attrs:{id:"bottom-right",data:"4"},on:{click:function(e){++t.pressCount,t.check(e)}}})])]),n("div",{staticClass:"game-menu"},[n("div",{staticClass:"game-info"},[n("h2",{staticClass:"info-title"},[t._v("Round: "+t._s(t.round))])]),n("button",{staticClass:"btn-start",attrs:{type:"button"},on:{click:function(e){return t.startGame()}}},[t._v("Начать")]),n("div",{staticClass:"lose",class:{flash:t.lose}},[t._v("Вы проиграли на "+t._s(t.round)+" раунде!")]),n("h2",{staticClass:"settings-title"},[t._v("Уровень сложности:")]),n("div",{staticClass:"game-settings"},[n("label",{staticClass:"settings-item",attrs:{for:"easy"}},[n("input",{staticClass:"difficult",attrs:{type:"radio",name:"difficult",id:"easy"},on:{change:function(e){return t.changeDifficult(1500)}}}),t._v(" Легкий ")]),n("label",{staticClass:"settings-item",attrs:{for:"medium"}},[n("input",{staticClass:"difficult",attrs:{type:"radio",name:"difficult",id:"medium",checked:""},on:{change:function(e){return t.changeDifficult(1e3)}}}),t._v(" Средний ")]),n("label",{staticClass:"settings-item",attrs:{for:"hard"}},[n("input",{staticClass:"difficult",attrs:{type:"radio",name:"difficult",id:"hard"},on:{change:function(e){return t.changeDifficult(400)}}}),t._v(" Сложный ")])])])])])},o=[],a=(n("4160"),n("159b"),{data:function(){return{round:0,pressCount:0,userSequence:[],simonSequence:[],timeout:1e3,btnLock:!0,lose:!1}},methods:{startGame:function(){this.clear(),this.play()},play:function(){var t=Math.floor(4*Math.random())+1+"";this.simonSequence.push(t),this.replay(),this.round++,this.pressCount=0},replay:function(){var t=this,e=document.querySelectorAll(".btn");this.btnLock=!0;for(var n=function(n){setTimeout((function(){e.forEach((function(e){t.simonSequence[n]===e.getAttribute("data")&&setTimeout((function(){t.playSound(e),e.classList.add("flash"),setTimeout((function(){e.classList.remove("flash")}),t.timeout)}),n*t.timeout)}))}),n*t.timeout)},i=0;i<this.simonSequence.length;i++)n(i);setTimeout((function(){t.btnLock=!1}),this.simonSequence.length*this.timeout)},playSound:function(t){var e=document.getElementById(t.getAttribute("data"));e.currentTime=0,e.play()},check:function(t){var e=this,n=t.target;this.btnLock||(this.playSound(n),n.getAttribute("data")!==this.simonSequence[this.pressCount-1]&&(this.lose=!0),this.pressCount===this.simonSequence.length&&(this.userSequence.push(n.getAttribute("data")),JSON.stringify(this.userSequence)===JSON.stringify(this.simonSequence)?setTimeout((function(){e.play()}),this.timeout):this.lose=!0))},clear:function(){this.round=0,this.userSequence=[],this.simonSequence=[],this.lose=!1},changeDifficult:function(t){this.timeout=t}}}),c=a,r=(n("cf25"),n("2877")),u=Object(r["a"])(c,s,o,!1,null,null,null),l=u.exports;n("b429");i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(l)}}).$mount("#app"),i["a"].config.devtools=!0},cf25:function(t,e,n){"use strict";n("fea6")},fea6:function(t,e,n){}});
//# sourceMappingURL=app.012fc12b.js.map