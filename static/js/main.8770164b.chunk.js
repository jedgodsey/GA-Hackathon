(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,s){},14:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s(1),i=s.n(a),n=s(7),o=s.n(n),r=(s(13),s(2)),l=s(3),d=s(5),j=s(4),b=s.p+"static/media/bee.96043ff7.svg",g=function(e){return Object(c.jsxs)("div",{class:"container",children:[Object(c.jsx)("img",{src:b,className:"logo"}),Object(c.jsx)("h1",{class:"log-in-header text-center mt-5 mb-5",children:"Login to Bizzee"}),Object(c.jsxs)("form",{onSubmit:e.toggleView,children:[Object(c.jsx)("div",{class:"log-in text-center mt-5",children:Object(c.jsx)("input",{class:"username",type:"text",placeholder:"USERNAME"})}),Object(c.jsx)("div",{class:"text-center",children:Object(c.jsx)("input",{class:"password mt-5",type:"password",placeholder:"PASSWORD"})}),Object(c.jsx)("div",{class:"text-center",children:Object(c.jsx)("input",{class:"log-in-btn mt-5 align-middle",type:"submit",value:"Log-In"})})]})]})},m=(i.a.Component,s.p+"static/media/Redo_Button.9785f128.svg"),p=s.p+"static/media/Go_Button.645550cb.svg",h=s.p+"static/media/Start_Activity_Button.ed710082.svg",u=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("img",{src:b,className:"logo"}),Object(c.jsxs)("div",{className:"row ",children:[Object(c.jsxs)("div",{className:"col-6 content-left selection-area",children:[Object(c.jsx)("h3",{children:" find an activity"}),Object(c.jsxs)("div",{className:"d-flex taskDir p-3",children:[Object(c.jsxs)("div",{className:"dropdown p-3",children:[Object(c.jsx)("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"suprise me!"}),Object(c.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton",children:[Object(c.jsx)("a",{className:"dropdown-item",href:"#",children:"house"}),Object(c.jsx)("a",{className:"dropdown-item",href:"#",children:"community"}),Object(c.jsx)("a",{className:"dropdown-item",href:"#",children:"self care"}),Object(c.jsx)("a",{className:"dropdown-item",href:"#",children:"family"}),Object(c.jsx)("a",{className:"dropdown-item",href:"#",children:"fitness"})]})]}),Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:p,class:"p-3",onClick:this.props.selector})})]}),Object(c.jsx)("h3",{children:"OR"}),Object(c.jsx)("h4",{className:"teal-text",onClick:this.props.toggleView,children:this.props.view?"Select Another Task":"go to dashboard"})]}),Object(c.jsx)("div",{className:"col-6 content-right",children:Object(c.jsxs)("div",{className:"d-flex taskPopUp",children:[Object(c.jsx)("div",{className:"taskDir h1",id:"task",children:this.props.task}),Object(c.jsxs)("div",{className:"did-it p-3",children:[this.props.options.length>0?Object(c.jsx)("img",{src:h,class:"p-3",onClick:this.props.onTaskComplete}):null,Object(c.jsx)("img",{src:m,onClick:this.props.selector})]})]})})]})]})}}]),s}(i.a.Component),O=s.p+"static/media/02_2_1Profile_Card.537fdba3.svg",x=s.p+"static/media/Stats_Icon.3fac5fdb.svg",v=s.p+"static/media/Profile_Icon.bac372d9.svg",f=s.p+"static/media/Find_an_Activity_Button.6770ea37.svg",w=function(e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"tab-container",children:[Object(c.jsx)("img",{src:f,id:"find-button",onClick:e.toggleView}),Object(c.jsx)("div",{className:"tab light-tab",onClick:e.toggleDummy,children:Object(c.jsx)("img",{src:x,className:"tab-icon"})}),Object(c.jsx)("div",{className:"tab dark-tab",children:Object(c.jsx)("img",{src:v,className:"tab-icon"})})]}),Object(c.jsx)("div",{className:"dummy-background",children:Object(c.jsx)("img",{src:O})})]})},k=s.p+"static/media/statsPic.45e9d8a8.svg",y=function(e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"tab-container",children:[Object(c.jsx)("img",{src:f,id:"find-button",onClick:e.toggleView}),Object(c.jsx)("div",{className:"tab dark-tab",children:Object(c.jsx)("img",{src:x,className:"tab-icon"})}),Object(c.jsx)("div",{className:"tab light-tab",onClick:e.toggleDummy,children:Object(c.jsx)("img",{src:v,className:"tab-icon"})})]}),Object(c.jsx)("div",{className:"dummy-background",children:Object(c.jsx)("img",{src:k})})]})},N=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(r.a)(this,s);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={showProfile:!1},e.toggleDummy=function(){var t=!e.state.showProfile;e.setState({showProfile:t})},e}return Object(l.a)(s,[{key:"render",value:function(){return Object(c.jsx)(c.Fragment,{children:this.state.showProfile?Object(c.jsx)(w,{toggleView:this.props.toggleView,toggleDummy:this.toggleDummy}):Object(c.jsx)(y,{toggleView:this.props.toggleView,toggleDummy:this.toggleDummy})})}}]),s}(i.a.Component),C=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(r.a)(this,s);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={view:!1,score:0,options:["go for a run!","vacuum the living room","write a blog post","clean the fridge"],task:"",pending:[],completed:[]},e.onTaskComplete=function(){var t=e.state.completed.concat(e.state.task),s=e.state.pending.filter((function(t){return t!==e.state.task}));e.setState({score:e.state.score+1,completed:t,pending:s,task:""})},e.selector=function(){var t=e.state.options[0],s=e.state.pending.concat(t),c=e.state.options.filter((function(e){return e!==t}));return e.setState({task:t,options:c,pending:s}),t},e.toggleView=function(t){t.preventDefault(),e.setState({view:!e.state.view})},e}return Object(l.a)(s,[{key:"render",value:function(){return Object(c.jsx)(c.Fragment,{children:this.state.view?Object(c.jsx)(N,{toggleView:this.toggleView}):Object(c.jsx)(u,{onTaskComplete:this.onTaskComplete,selector:this.selector,toggleView:this.toggleView,task:this.state.task,options:this.state.options,view:this.state.view})})}}]),s}(i.a.Component),V=(i.a.Component,function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(r.a)(this,s);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={view:!1},e.toggleView=function(t){t.preventDefault(),e.setState({view:!e.state.view}),console.log(!e.state)},e}return Object(l.a)(s,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"App",children:this.state.view?Object(c.jsx)(C,{toggleView:this.toggleView}):Object(c.jsx)(g,{toggleView:this.toggleView})})}}]),s}(i.a.Component)),S=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,15)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,n=t.getTTFB;s(e),c(e),a(e),i(e),n(e)}))};o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(V,{})}),document.getElementById("root")),S()}},[[14,1,2]]]);
//# sourceMappingURL=main.8770164b.chunk.js.map