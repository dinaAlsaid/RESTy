(this.webpackJsonpresty=this.webpackJsonpresty||[]).push([[0],[,,,,,,,,,,,,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r=n(0),s=n(1),c=n.n(s),a=n(9),u=n.n(a),i=(n(16),n(2)),o=n.n(i),l=n(7),d=n(3),h=n(4),j=n(6),b=n(5),f=(n(18),n(19),function(){return Object(r.jsx)("header",{children:Object(r.jsx)("h1",{children:"RESTy"})})}),p=(n(20),function(){return Object(r.jsx)("footer",{children:Object(r.jsx)("p",{children:"\xa9 Dina AlSaid,2020"})})}),O=(n(21),function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(t){var r;return Object(d.a)(this,n),(r=e.call(this,t)).clickHandler=function(){var t=Object(l.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),""===document.getElementById("url").value){t.next=6;break}return t.next=4,r.setState({url:document.getElementById("url").value});case 4:t.next=8;break;case 6:return t.next=8,r.setState({results:["no url defined"]});case 8:fetch(r.state.url,{method:r.state.method}).then((function(t){return t.json()})).then((function(t){r.props.resultHandler(t)})),document.getElementById("url").value="";case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),r.methodHandler=function(){var t=Object(l.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.next=3,r.setState({method:e.target.value});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),r.state={url:" ",method:"GET"},r}return Object(h.a)(n,[{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{onSubmit:this.clickHandler,"data-testid":"submitForm",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{value:"GET",onClick:this.methodHandler,children:"GET"}),Object(r.jsx)("button",{value:"POST",onClick:this.methodHandler,children:"POST"}),Object(r.jsx)("button",{value:"PUT",onClick:this.methodHandler,children:"PUT"}),Object(r.jsx)("button",{value:"DELETE",onClick:this.methodHandler,children:"DELETE"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{type:"text",id:"url",autoComplete:"false","data-testid":"inputField"}),Object(r.jsx)("input",{type:"submit",value:"GO","data-testid":"submitBtn"})]})]}),Object(r.jsxs)("div",{className:"output",children:[Object(r.jsx)("div",{children:this.state.method}),Object(r.jsx)("div",{"data-testid":"output",children:this.state.url})]})]})}}]),n}(c.a.Component)),x=n(10),m=n.n(x),v=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(d.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).prettyJson=function(){return{Headers:t.props.headers,Response:{count:t.props.count,results:t.props.resArr}}},t}return Object(h.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{children:Object(r.jsx)(m.a,{src:this.prettyJson(),theme:"ashes",enableClipboard:"false"})})}}]),n}(c.a.Component),y=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(t){var r;return Object(d.a)(this,n),(r=e.call(this,t)).resultHandler=function(){var t=Object(l.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.setState({count:e.count,results:e.results,headers:e.headers});case 2:console.log(r.state.results);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),r.state={headers:"no headers",count:"",results:[]},r}return Object(h.a)(n,[{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(f,{}),Object(r.jsx)(O,{resultHandler:this.resultHandler}),Object(r.jsx)(v,{resArr:this.state.results,count:this.state.count,headers:this.state.headers}),Object(r.jsx)(p,{})]})}}]),n}(c.a.Component),k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(e){var n=e.getCLS,r=e.getFID,s=e.getFCP,c=e.getLCP,a=e.getTTFB;n(t),r(t),s(t),c(t),a(t)}))};u.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(y,{})}),document.getElementById("root")),k()}],[[22,1,2]]]);
//# sourceMappingURL=main.afe19acd.chunk.js.map