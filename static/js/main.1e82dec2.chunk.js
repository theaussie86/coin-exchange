(this["webpackJsonpcoin-exchange"]=this["webpackJsonpcoin-exchange"]||[]).push([[0],{32:function(e,n,t){},56:function(e,n,t){"use strict";t.r(n);var c,a,r=t(1),i=t.n(r),s=t(23),o=t.n(s),l=(t(32),t(27)),j=t(5),h=t.n(j),u=t(10),b=t(7),d=t(3),f=t(4),O=t(0),x=f.a.section(c||(c=Object(d.a)(["\n    font-size: 2rem;\n    text-align: left;\n    padding: 1.5rem 0 1.5rem 5rem;\n"])));function p(e){var n=e.showBalance?"Hide Balance":"Show Balance";return Object(O.jsxs)(x,{children:[e.showBalance&&Object(O.jsxs)(O.Fragment,{children:["Balance: $",e.amount]}),Object(O.jsx)("button",{onClick:e.handleBalanceVisibility,children:n})]})}var m,v=f.a.td(a||(a=Object(d.a)(["\n    border: 1px solid #cccccc;\n    width: 16vh;\n"])));function g(e){return Object(O.jsxs)("tr",{children:[Object(O.jsx)(v,{children:e.name}),Object(O.jsx)(v,{children:e.ticker}),Object(O.jsxs)(v,{children:["$",e.price]}),e.showBalance&&Object(O.jsx)(v,{children:e.balance}),Object(O.jsx)(v,{children:Object(O.jsx)("form",{action:"#",method:"POST",children:Object(O.jsx)("button",{onClick:function(n){n.preventDefault(),e.handleRefresh(e.id)},children:"Refresh"})})})]})}var k=f.a.table(m||(m=Object(d.a)(["\n    margin: 50px auto;\n    display: inline-block;\n    font-size: 1.4rem;\n"])));function w(e){return Object(O.jsxs)(k,{className:"coin-table",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Name"}),Object(O.jsx)("th",{children:"Ticker"}),Object(O.jsx)("th",{children:"Price"}),e.showBalance&&Object(O.jsx)("th",{children:"Balance"}),Object(O.jsx)("th",{children:"Actions"})]})}),Object(O.jsx)("tbody",{children:e.coinData.map((function(n){return Object(O.jsx)(g,{handleRefresh:e.handleRefresh,showBalance:e.showBalance,name:n.name,ticker:n.ticker,price:n.price,id:n.key},n.key)}))})]})}var B,y,S,D=t.p+"static/media/logo.6ce24c58.svg",F=f.a.h1(B||(B=Object(d.a)(["\n    font-size: 4rem;\n    color: white;\n"]))),C=f.a.img(y||(y=Object(d.a)(["\n    height: 8rem;\n    pointer-events: none;\n"]))),P=f.a.header(S||(S=Object(d.a)(["\n    background-color: #282c34;\n    min-height: 20vh;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-start;\n"])));function R(){return Object(O.jsxs)(P,{children:[Object(O.jsx)(C,{src:D,alt:"logo"}),Object(O.jsx)(F,{children:"Coin Exchange"})]})}var T,z=t(6),E=t.n(z),q=f.a.div(T||(T=Object(d.a)(["\n  text-align: center;\n  background-color: #25375a;\n  color: #cccccc;\n"]))),I="https://api.coinpaprika.com/v1/tickers/",J=function(e){return parseFloat(e.toFixed(4))};var L=function(){var e=Object(r.useState)(1e4),n=Object(b.a)(e,2),t=n[0],c=(n[1],Object(r.useState)([])),a=Object(b.a)(c,2),i=a[0],s=a[1],o=Object(r.useState)(!0),j=Object(b.a)(o,2),d=j[0],f=j[1],x=function(){var e=Object(u.a)(h.a.mark((function e(){var n,t,c,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("https://api.coinpaprika.com/v1/coins");case 3:return n=e.sent,t=n.data.slice(0,5).map((function(e){return e.id})),e.next=7,Promise.all(t.map((function(e){return E.a.get(I+e)})));case 7:c=e.sent,a=c.map((function(e){var n=e.data;return{key:n.id,name:n.name,ticker:n.symbol,balance:null,price:J(n.quotes.USD.price)}})),s(a),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){0===i.length&&x()}));var m=function(){var e=Object(u.a)(h.a.mark((function e(n){var t,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get(I+n);case 2:t=e.sent,c=i.map((function(e){var c=Object(l.a)({},e);if(n===e.key){var a=t.data.quotes.USD.price;c.price=J(a)}return c})),s({coinData:c});case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(O.jsxs)(q,{children:[Object(O.jsx)(R,{}),Object(O.jsx)(p,{amount:t,handleBalanceVisibility:function(){f((function(e){return!e}))},showBalance:d}),Object(O.jsx)(w,{showBalance:d,coinData:i,handleRefresh:m})]})},N=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,57)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),c(e),a(e),r(e),i(e)}))};o.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(L,{})}),document.getElementById("root")),N()}},[[56,1,2]]]);
//# sourceMappingURL=main.1e82dec2.chunk.js.map