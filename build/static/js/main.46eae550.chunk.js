(this["webpackJsonpcovid-status-trackerapp"]=this["webpackJsonpcovid-status-trackerapp"]||[]).push([[0],{39:function(e,a,t){e.exports=t(68)},44:function(e,a,t){},68:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(18),r=t.n(l),s=(t(44),t(8)),m=t(9),d=t(11),o=t(10),i=(t(45),t(16)),u=function(e){Object(d.a)(t,e);var a=Object(o.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("nav",{className:"navbar navbar-expand-sm bg-info navbar-dark"},c.a.createElement("ul",{className:"navbar-nav"},c.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/SARS-CoV-2_without_background.png/220px-SARS-CoV-2_without_background.png",style:E}),c.a.createElement("li",{className:"nav-item active"},c.a.createElement(i.b,{className:"nav-link",to:"/"},c.a.createElement("h4",null,"COVID 19"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement(i.b,{className:"nav-link",to:"/india"},"INDIA")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(i.b,{className:"nav-link",to:"/uae"},"UAE")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(i.b,{className:"nav-link",to:"/world"},"WORLD")))))}}]),t}(n.Component),E={height:"40px",weight:"40px"},h=t(3),v=t(14),p=t.n(v),b=t(71),N=t(72),g=t(73),y=function(e){Object(d.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).state={stateData:{}},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://api.covid19india.org/state_district_wise.json").then((function(a){e.setState({stateData:a.data})}))}},{key:"render",value:function(){var e=this,a=Object.keys(this.state.stateData);return c.a.createElement("div",null,c.a.createElement(b.a,null,a.map((function(a,t){var n=e.state.stateData[a].districtData,l=(Object.keys(n),0),r=0,s=0,m=0,d=[];for(var o in n){l+=n[o].active,r+=n[o].confirmed,s+=n[o].deceased,m+=n[o].recovered;var i=n[o];i.district_name=o,d.push(i)}return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement(N.a,null,c.a.createElement(N.a.Header,{className:"text-left"},c.a.createElement(b.a.Toggle,{as:g.a,variant:"badge",className:"text-left",eventKey:t},c.a.createElement("strong",null,a),"    - ",c.a.createElement("kbd",{className:"bg-info"},"Total Cases:",r)," | ",c.a.createElement("kbd",{className:"badge-warning"},"Active:",l)," | ",c.a.createElement("kbd",{className:"badge-success"}," Recovered:",m)," | ",c.a.createElement("kbd",{className:"badge-danger"},"Death:",s))),c.a.createElement(b.a.Collapse,{eventKey:t},c.a.createElement(N.a.Body,null,c.a.createElement("table",{className:"table table-striped"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"SI.NO"),c.a.createElement("th",{scope:"col"},"District"),c.a.createElement("th",{scope:"col"},"Confirmed"),c.a.createElement("th",{scope:"col"},"Active"),c.a.createElement("th",{scope:"col"},"Recovered"),c.a.createElement("th",{scope:"col"},"Deaths"))),c.a.createElement("tbody",null,d.map((function(e,a){return c.a.createElement("tr",null,c.a.createElement("td",null,a+1),c.a.createElement("td",null,e.district_name),c.a.createElement("td",null,e.confirmed),c.a.createElement("td",null,e.active),c.a.createElement("td",null,e.recovered),c.a.createElement("td",null,e.deceased))})))))))))}))))}}]),t}(n.Component),f=function(e){Object(d.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).state={indiaData:[]},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://corona.lmao.ninja/v2/countries/india").then((function(a){e.setState({indiaData:a.data}),console.log(e.state.indiaData)}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"justify-content-center text-center"},c.a.createElement("img",{className:"rounded",src:"https://www.countryflags.io/in/shiny/64.png",alt:"india","data-holder-rendered":"true"}),c.a.createElement("h4",{className:"text-center text-muted"}," ",c.a.createElement("kbd",null,"INDIA")),c.a.createElement("div",{className:"card p-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-3"},c.a.createElement("div",{className:"badge badge-info"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},"TOTAL CASES"),c.a.createElement("h3",null,this.state.indiaData.cases),c.a.createElement("p",{className:"card-text"},c.a.createElement("kbd",null,"Today:",this.state.indiaData.todayCases))))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement("div",{className:"badge badge-warning"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},"ACTIVE CASES"),c.a.createElement("h3",null,this.state.indiaData.active),c.a.createElement("p",{className:"card-text text-warning"},this.state.indiaData.active)))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement("div",{className:"badge badge-success"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},"RECOVERED"),c.a.createElement("h3",null,this.state.indiaData.recovered),c.a.createElement("p",{className:"card-text"},c.a.createElement("kbd",null,"Today:",this.state.indiaData.todayRecovered))))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement("div",{className:"badge badge-danger"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},"DEATHS"),c.a.createElement("h3",null,this.state.indiaData.deaths),c.a.createElement("p",{className:"card-text"},c.a.createElement("kbd",null,"Today:",this.state.indiaData.todayDeaths))))))),c.a.createElement(y,null))}}]),t}(n.Component),D=function(e){Object(d.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).state={uaeData:[]},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://corona.lmao.ninja/v2/countries/uae").then((function(a){e.setState({uaeData:a.data})}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12 text-center"},c.a.createElement("img",{className:"rounded",src:"https://www.countryflags.io/AE/shiny/64.png",alt:"india","data-holder-rendered":"true"}),c.a.createElement("h4",{className:"text-center text-muted"}," ",c.a.createElement("kbd",null,"UAE")),c.a.createElement("div",{className:"card p-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-3"},c.a.createElement("div",{className:"badge badge-info"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},"TOTAL CASES"),c.a.createElement("h3",null,this.state.uaeData.cases),c.a.createElement("p",{className:"card-text"},c.a.createElement("kbd",null,"Today:",this.state.uaeData.todayCases))))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement("div",{className:"badge badge-warning"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},"ACTIVE CASES"),c.a.createElement("h3",null,this.state.uaeData.active),c.a.createElement("p",{className:"card-text text-warning"},this.state.uaeData.active)))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement("div",{className:"badge badge-success"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},"RECOVERED"),c.a.createElement("h3",null,this.state.uaeData.recovered),c.a.createElement("p",{className:"card-text"},c.a.createElement("kbd",null,"Today:",this.state.uaeData.todayRecovered))))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement("div",{className:"badge badge-danger"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},"DEATHS"),c.a.createElement("h3",null,this.state.uaeData.deaths),c.a.createElement("p",{className:"card-text"},c.a.createElement("kbd",null,"Today:",this.state.uaeData.todayDeaths)))))))))}}]),t}(n.Component),k=function(e){Object(d.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).state={data:[]},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://corona.lmao.ninja/v2/countries").then((function(a){console.log(a.data),e.setState({data:a.data})}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12 text-center"},c.a.createElement("img",{className:"rounded",src:"https://cdn.totalcomputersusa.com/butyoudontlooksick.com/uploads/2010/05/world-globe.jpg",alt:"india",style:w,"data-holder-rendered":"true"}),c.a.createElement("h4",{className:"text-center text-muted"}," ",c.a.createElement("kbd",null,"WORLD")),c.a.createElement("div",{className:"card"},c.a.createElement("table",{className:"table table-striped"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"SI.NO"),c.a.createElement("th",{scope:"col"},"Country"),c.a.createElement("th",{scope:"col"}),c.a.createElement("th",{scope:"col"},"Total Cases"),c.a.createElement("th",{scope:"col"},"Recovered"),c.a.createElement("th",{scope:"col"},"Death"))),c.a.createElement("tbody",null,this.state.data.map((function(e,a){return c.a.createElement("tr",null,c.a.createElement("th",{scope:"row"},a+1),c.a.createElement("td",null,e.country),c.a.createElement("td",null,c.a.createElement("img",{src:e.countryInfo.flag,style:w,alt:"world"})," "),c.a.createElement("td",null,e.cases),c.a.createElement("td",null,e.recovered),c.a.createElement("td",null,e.deaths))})))))))}}]),t}(n.Component),w={height:"65px",width:"65px",marginLeft:"10px"},O=function(e){Object(d.a)(t,e);var a=Object(o.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(i.a,null,c.a.createElement(u,null),c.a.createElement(h.a,{exact:!0,path:"/",component:f}),c.a.createElement(h.a,{exact:!0,path:"/india",component:f}),c.a.createElement(h.a,{exact:!0,path:"/uae",component:D}),c.a.createElement(h.a,{exact:!0,path:"/world",component:k})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.46eae550.chunk.js.map