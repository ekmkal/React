(this.webpackJsonphackyourweather=this.webpackJsonphackyourweather||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},16:function(e){e.exports=JSON.parse("{}")},19:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(8),s=c.n(r),i=(c(14),c(15),c(16),c(0)),j=function(e){var t=e.city,c=e.country,n=e.weatherMain,a=e.weatherDesc,r=e.maxTemp,s=e.minTemp,j=e.lat,h=e.lon;return Object(i.jsxs)("div",{className:"cityBox",children:[Object(i.jsxs)("h2",{className:"cityName",children:[t,", ",c]}),Object(i.jsxs)("div",{className:"cityWeather",children:[Object(i.jsx)("h3",{children:n}),Object(i.jsx)("p",{children:a})]}),Object(i.jsxs)("p",{children:["max temp: ",r]}),Object(i.jsxs)("p",{children:["min temp: ",s]}),Object(i.jsxs)("p",{children:["location: ",j,", ",h]})]})},h=function(e){var t=e.cityWeather;return Object(i.jsx)("div",{children:t.map((function(e){return Object(i.jsx)(j,{city:e.name,country:e.sys.country,weatherMain:e.weather[0].main,weatherDesc:e.weather[0].description,maxTemp:e.main.temp_max,minTemp:e.main.temp_min,lat:e.coord.lat,lon:e.coord.lon},e.id)}))})},o=c(6),u=c.n(o),l=c(7),d=c(9),b=c(2),p=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)([]),s=Object(b.a)(r,2),j=s[0],o=s[1],p=Object(n.useState)(!1),m=Object(b.a)(p,2),O=m[0],x=m[1],f=Object(n.useState)(!1),v=Object(b.a)(f,2),y=v[0],g=v[1],w=Object(n.useState)(""),N=Object(b.a)(w,2),S=N[0],k=N[1],C=function(){var e=Object(d.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),g(!1),x(!0),e.prev=3,e.next=6,fetch("\n                https://api.openweathermap.org/data/2.5/weather?q=".concat(c,"&units=metric&appid=").concat("e8cf928279ca9daa33a1a754eec6e10d","\n            "));case 6:return n=e.sent,e.next=9,n.json();case 9:a=e.sent,j.find((function(e){return e.id===a.id}))||200!==a.cod?o(Object(l.a)(j)):o([].concat(Object(l.a)(j),[a])),404===n.status?k(a.message.charAt(0).toUpperCase()+a.message.slice(1)):k(""),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),g(!0);case 17:x(!1);case 19:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"searchBar",children:[Object(i.jsxs)("form",{onSubmit:C,children:[Object(i.jsx)("input",{className:"textInput",type:"text",value:c,placeholder:"Search City",onChange:function(e){a(e.target.value)}}),Object(i.jsx)("input",{className:"submit",type:"submit",value:"Search"})]}),Object(i.jsxs)("div",{children:[0===j.length&&!1===y&&""===S&&Object(i.jsx)("h3",{children:"No city search yet!"}),!0===y&&Object(i.jsx)("h3",{children:"An error occured, try again!"}),""!==S&&Object(i.jsxs)("h3",{children:[S,"!"]}),!0===O&&Object(i.jsx)("div",{className:"loader"})]})]}),j.length>0&&Object(i.jsx)(h,{cityWeather:j})]})};var m=function(){return Object(i.jsxs)("div",{className:"app",children:[Object(i.jsx)("h1",{className:"mainHeader",children:"Weather"}),Object(i.jsx)(p,{})]})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,20)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(m,{})}),document.getElementById("root")),O()}},[[19,1,2]]]);
//# sourceMappingURL=main.6fc97cd5.chunk.js.map