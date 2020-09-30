(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[0],{12:function(e,t,a){e.exports={summaryCard:"HospitalBedsSummary_summaryCard__3Rgeu",eachCard:"HospitalBedsSummary_eachCard__LQ_Sz"}},13:function(e,t,a){e.exports={summaryCard:"StatsSummary_summaryCard__RkJug",eachCard:"StatsSummary_eachCard__8FrfQ"}},14:function(e,t,a){e.exports={covid:"Navigation_covid__56it-",india:"Navigation_india__1_xSd",navLinks:"Navigation_navLinks__3hlP8"}},18:function(e,t,a){e.exports={tableWrapper:"StateTable_tableWrapper__10mbN",flTable:"StateTable_flTable__Yo6Ih"}},19:function(e,t,a){e.exports={tableWrapper:"HospitalBedsStats_tableWrapper__3mVOz",flTable:"HospitalBedsStats_flTable__2hi8h"}},20:function(e,t,a){e.exports={tableWrapper:"Helpline_tableWrapper__2dRWk",flTable:"Helpline_flTable__224eL"}},26:function(e,t,a){e.exports=a(37)},31:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(23),c=a.n(r),o=(a(31),a(14)),i=a.n(o),u=a(11),s=function(){return l.a.createElement("div",{className:i.a.home},l.a.createElement("nav",null,l.a.createElement(u.b,{to:"/"},l.a.createElement("span",{className:i.a.covid},"Covid19 ",l.a.createElement("br",null)," India")),l.a.createElement("ul",{className:i.a.navLinks},l.a.createElement(u.b,{to:"/testing-stats"},l.a.createElement("li",null,"Testing Stats")),l.a.createElement(u.b,{to:"/hospital-beds"},l.a.createElement("li",null,"Hospitals and Beds")),l.a.createElement(u.b,{to:"/helpline-info"},l.a.createElement("li",null,"Contact and Helpline")),l.a.createElement(u.b,{to:"/notifications"},l.a.createElement("li",null,"Notifications")))))},m=a(18),d=a.n(m),E=a(25),f=a(10),h=function(e,t){switch(t.type){case"STORE_STATE_DATA":case"STORE_TESTING_DATA":case"STORE_HOSPITAL_DATA":case"STORE_HELPLINE DATA":case"STORE_NOTIFICATION_DATA":return Object(f.a)(Object(f.a)({},e),{},{data:t.payload});default:return e}},p=Object(n.createContext)(),v=function(e){var t=Object(n.useReducer)(h,{data:""}),a=Object(E.a)(t,2),r=a[0],c=a[1];return l.a.createElement(p.Provider,{value:{fetchData:r,dispatch:c}},e.children)},b=a(13),_=a.n(b),y=function(){var e=Object(n.useContext)(p).fetchData;if(e.data){var t=e.data.data.summary;if("undefined"!==typeof t)return l.a.createElement("div",{className:_.a.summaryCard},l.a.createElement("div",{className:_.a.eachCard},l.a.createElement("h5",{style:{color:"Red"}},"Confirmed"),l.a.createElement("h1",{style:{color:"Red"}},t.confirmedCasesIndian)),l.a.createElement("div",{className:_.a.eachCard},l.a.createElement("h5",{style:{color:"DodgerBlue"}},"Active"),l.a.createElement("h1",{style:{color:"DodgerBlue"}},t.confirmedCasesIndian-t.discharged-t.deaths)),l.a.createElement("div",{className:_.a.eachCard},l.a.createElement("h5",{style:{color:"Green"}},"Recovered"),l.a.createElement("h1",{style:{color:"Green"}},t.discharged)),l.a.createElement("div",{className:_.a.eachCard},l.a.createElement("h5",{style:{color:"Grey"}},"Deaths"),l.a.createElement("h1",{style:{color:"Grey"}},t.deaths)))}return null};function T(){var e=Object(n.useContext)(p),t=e.fetchData,a=e.dispatch;Object(n.useEffect)((function(){fetch("https://api.rootnet.in/covid19-in/stats/latest").then((function(e){return e.json()})).then((function(e){return a({type:"STORE_STATE_DATA",payload:e})}))}),[]);var r=t.data.data,c=null;if("undefined"!==typeof r){var o=r.regional;c=l.a.createElement("table",{className:d.a.flTable},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"State/UT"),l.a.createElement("th",null,"Confirmed"),l.a.createElement("th",null,"Active"),l.a.createElement("th",null,"Recovered"),l.a.createElement("th",null,"Deceased"))),l.a.createElement("tbody",null,o&&o.length>0&&o.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,e.loc),l.a.createElement("td",null,e.totalConfirmed),l.a.createElement("td",null,e.totalConfirmed-e.discharged-e.deaths),l.a.createElement("td",null,e.discharged),l.a.createElement("td",null,e.deaths))}))))}return l.a.createElement(l.a.Fragment,null,l.a.createElement(y,null),l.a.createElement("div",{className:d.a.tableWrapper},c))}var C=a(3),N=a(39),S=a(40),O=a(41),g=a(42),A=a(43),j=a(44);function H(){var e=Object(n.useContext)(p),t=e.fetchData,a=e.dispatch;Object(n.useEffect)((function(){fetch("https://api.rootnet.in/covid19-in/stats/testing/latest").then((function(e){return e.json()})).then((function(e){return a({type:"STORE_TESTING_DATA",payload:e})}))}),[]);var r=t.data.data;return"undefined"!==typeof r?l.a.createElement(N.a,null,l.a.createElement(S.a,{top:!0,width:"20%",src:"testing.jpg",alt:"Card image cap"}),l.a.createElement(O.a,null,l.a.createElement(g.a,null,"Testing Statistics as of ",r.day),l.a.createElement(A.a,null,"Total Samples Tested : ",r.totalSamplesTested),l.a.createElement(j.a,{onClick:function(){return e=r.source,void window.open(e,"_blank");var e}},"Source"))):null}var k=a(19),D=a.n(k),x=a(12),R=a.n(x),B=function(){var e=Object(n.useContext)(p).fetchData.data.data;if("undefined"!==typeof e){var t=e.summary;if("undefined"!==typeof t)return l.a.createElement("div",{className:R.a.summaryCard},l.a.createElement("div",{className:R.a.eachCard},l.a.createElement("h5",null,"Total Hospitals"),l.a.createElement("h3",null,t.totalHospitals)),l.a.createElement("div",{className:R.a.eachCard},l.a.createElement("h5",null,"Total No. of Beds"),l.a.createElement("h3",null,t.totalBeds)),l.a.createElement("div",{className:R.a.eachCard},l.a.createElement("h5",null,"Rural Hospitals"),l.a.createElement("h3",null,t.ruralHospitals)),l.a.createElement("div",{className:R.a.eachCard},l.a.createElement("h5",null,"Rural Beds"),l.a.createElement("h3",null,t.ruralBeds)),l.a.createElement("div",{className:R.a.eachCard},l.a.createElement("h5",null,"Urban Hospitals"),l.a.createElement("h3",null,t.urbanHospitals)),l.a.createElement("div",{className:R.a.eachCard},l.a.createElement("h5",null,"Urban Beds"),l.a.createElement("h3",null,t.urbanBeds)))}return null};function w(){var e=Object(n.useContext)(p),t=e.fetchData,a=e.dispatch;Object(n.useEffect)((function(){fetch("https://api.rootnet.in/covid19-in/hospitals/beds").then((function(e){return e.json()})).then((function(e){return a({type:"STORE_HOSPITAL_DATA",payload:e})}))}),[]);var r=t.data.data,c=null;if("undefined"!==typeof r){var o=r.regional;c=l.a.createElement("table",{className:D.a.flTable},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"State"),l.a.createElement("th",null,"Total Hospitals"),l.a.createElement("th",null,"Total Beds"),l.a.createElement("th",null,"Rural Hospitals"),l.a.createElement("th",null,"Rural Beds"),l.a.createElement("th",null,"Urban Hospitals"),l.a.createElement("th",null,"Urban Beds"))),l.a.createElement("tbody",null,o&&o.length>0&&o.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,e.state),l.a.createElement("td",null,e.totalHospitals),l.a.createElement("td",null,e.totalBeds),l.a.createElement("td",null,e.ruralHospitals),l.a.createElement("td",null,e.ruralBeds),l.a.createElement("td",null,e.urbanHospitals),l.a.createElement("td",null,e.urbanBeds))}))))}return l.a.createElement(l.a.Fragment,null,l.a.createElement(B,null),l.a.createElement("div",{className:D.a.tableWrapper},c))}var I=a(20),L=a.n(I),W=function(){var e=Object(n.useContext)(p).fetchData.data.data;if("undefined"!==typeof e){var t=e.contacts;if("undefined"!==typeof t){var a=t.primary;return l.a.createElement("div",null,l.a.createElement("p",null,"Email : ",a.email),l.a.createElement("p",null,"Facebook : ",l.a.createElement("a",{href:a.facebook},"Facebook")),l.a.createElement("p",null,"Number : ",a.number),l.a.createElement("p",null,"Toll-Free Number : ",a["number-tollfree"]),l.a.createElement("p",null,"Twitter : ",l.a.createElement("a",{href:a.twitter},"Twitter")),l.a.createElement("p",null,"Media : ",l.a.createElement("a",{href:a.media[0]},"Media")))}}return null},F=function(){var e=Object(n.useContext)(p),t=e.fetchData,a=e.dispatch;Object(n.useEffect)((function(){fetch("https://api.rootnet.in/covid19-in/contacts").then((function(e){return e.json()})).then((function(e){return a({type:"STORE_HELPLINE DATA",payload:e})}))}),[]);var r=t.data.data,c=null;if("undefined"!==typeof r){var o=r.contacts;if("undefined"!==typeof o){var i=o.regional;"undefined"!==typeof i&&(c=l.a.createElement("table",{className:L.a.flTable},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Location"),l.a.createElement("th",null,"Number"))),l.a.createElement("tbody",null,i&&i.length>0&&i.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,e.loc),l.a.createElement("td",null,e.number))})))))}}return l.a.createElement(l.a.Fragment,null,l.a.createElement(W,null),l.a.createElement("div",{className:L.a.tableWrapper},c))},G=function(){var e=Object(n.useContext)(p),t=e.fetchData,a=e.dispatch,r=null;Object(n.useEffect)((function(){fetch("https://api.rootnet.in/covid19-in/notifications").then((function(e){return e.json()})).then((function(e){return a({type:"STORE_NOTIFICATION_DATA",payload:e})}))}),[]);var c=t.data.data;if("undefined"!==typeof c){var o=c.notifications;"undefined"!==typeof o&&(r=o&&o.length>0&&o.map((function(e,t){return l.a.createElement("div",{key:t},l.a.createElement("p",null,"Title : ",e.title),l.a.createElement("span",{onClick:function(){return t=e.link,void window.open(t,"_blank");var t}},"Link : ",l.a.createElement("u",{style:{color:"blue",cursor:"pointer"}},e.link)))})))}return l.a.createElement("div",null,r)};var P=function(){return l.a.createElement(u.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(v,null,l.a.createElement(s,null),l.a.createElement(C.c,null,l.a.createElement(C.a,{path:"/testing-stats",exact:!0,component:H}),l.a.createElement(C.a,{path:"/hospital-beds",exact:!0,component:w}),l.a.createElement(C.a,{path:"/helpline-info",exact:!0,component:F}),l.a.createElement(C.a,{path:"/notifications",exact:!0,component:G}),l.a.createElement(C.a,{path:"/",exact:!0,component:T})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.f7fe7f16.chunk.js.map