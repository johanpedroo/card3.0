(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(21)},16:function(e,t,n){},17:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(1),r=n.n(i),c=(n(16),n(4)),s=n(5),l=n(8),u=n(6),m=n(9),d=(n(17),n(2)),f=n(7),g=n.n(f),h=Object(d.SortableElement)(function(e){var t=e.value;return a.a.createElement("li",{className:"item",style:{listStyle:"none"}},a.a.createElement("img",{src:"./image/mm_".concat(t,".png"),alt:t}))}),p=Object(d.SortableContainer)(function(e){var t=e.items;return a.a.createElement("ul",{className:"list horizontalList"},t.map(function(e,t){return a.a.createElement(h,{key:"item-".concat(t),index:t,value:e})}))}),v=function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={items:["meta","curiosidade","liberdade","status","aceitacao","relacao","honra","maestria","poder","ordem"],openImg:!1},n.onSortEnd=function(e){var t=e.oldIndex,o=e.newIndex;t===o&&setTimeout(function(){return n.setState({openImg:n.state.items[t]})},200),n.setState(function(e){var n=e.items;return{items:g()(n,t,o)}})},n.closeImg=function(){setTimeout(function(){n.setState({openImg:!1})},200)},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(p,{axis:"xy",items:this.state.items,onTouchStart:this.closeImg,onSortEnd:this.onSortEnd}),this.state.openImg&&a.a.createElement("div",{className:"background",onTouchStart:this.closeImg,onClick:this.closeImg},a.a.createElement("img",{className:"img-open",src:"./image/mm_".concat(this.state.openImg,".png"),alt:this.state.openImg})))}}]),t}(o.Component),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(a.a.createElement(v,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/card3.0",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/card3.0","/service-worker.js");w?(function(e,t){fetch(e).then(function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):b(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):b(t,e)})}}()}},[[10,1,2]]]);
//# sourceMappingURL=main.287b6dda.chunk.js.map