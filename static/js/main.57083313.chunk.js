(this["webpackJsonpEvening Academy"]=this["webpackJsonpEvening Academy"]||[]).push([[0],{21:function(e,t,r){var n={"./chrome_extensions_how_they_work.md":[29,3],"./js_create_an_image_slider.md":[30,4],"./react_all_about_hooks.md":[31,5],"./react_pinterest_clone.md":[32,6],"./test.md":[33,7]};function c(e){if(!r.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],c=t[0];return r.e(t[1]).then((function(){return r(c)}))}c.keys=function(){return Object.keys(n)},c.id=21,e.exports=c},27:function(e,t,r){},28:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),a=r(13),i=r.n(a),s=r(4),o=r(2),d=r(7),j=r(14),l=r(1);function h(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),c=t[0],a=t[1];Object(n.useEffect)((function(){r(21)("./".concat("test.md")).then((function(e){fetch(e.default).then((function(e){return e.text()})).then((function(e){return a(e)}))})).catch((function(e){return console.log(e)}))}),[]);var i=Object(l.jsx)(j.a,{children:c});return Object(l.jsx)("article",{children:i})}function b(){return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("h2",{children:"\u041e\u0431\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u0432\u044f\u0437\u044c"}),Object(l.jsxs)("p",{children:["Github: ",Object(l.jsx)("a",{href:"https://github.com/andron13",children:"andron13"})]}),Object(l.jsxs)("p",{children:["Telegram: ",Object(l.jsx)("a",{href:"https://t.me/ptchom",children:"ptchom"})]}),Object(l.jsx)("p",{children:"\u041c\u0435\u043d\u044f \u0442\u0440\u0443\u0434\u043d\u043e \u043d\u0430\u0439\u0442\u0438, \u043b\u0435\u0433\u043a\u043e \u043f\u043e\u0442\u0435\u0440\u044f\u0442\u044c \u0438 \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0437\u0430\u0431\u044b\u0442\u044c"})]})}var u=r(6),f=Object(u.a)({main:{gridArea:"main",background:{color:"hsl(0, 0%, 95%);"},padding:{}}});function m(){var e=f();return Object(l.jsx)("main",{className:e.main,children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/",element:Object(l.jsx)(h,{})}),Object(l.jsx)(o.a,{path:"/contact",element:Object(l.jsx)(b,{})})]})})}function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=String(e.getDate()).padStart(2,"0"),r=String(e.getMonth()+1).padStart(2,"0"),n=e.getFullYear();return t+"."+r+"."+n}function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;return String(e.getHours()).padStart(2,"0")+":"+String(e.getMinutes()).padStart(2,"0")+":"+String(e.getSeconds()).padStart(2,"0")}function p(){var e=Object(n.useState)(O()),t=Object(d.a)(e,2),r=t[0],c=t[1],a=Object(n.useState)(x()),i=Object(d.a)(a,2),s=i[0],o=i[1];return function(e,t){var r=Object(n.useRef)();Object(n.useEffect)((function(){r.current=e}),[e]),Object(n.useEffect)((function(){if(null!==t){var e=setInterval((function(){r.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){c(O()),o(x())}),1e3),Object(l.jsx)("section",{className:"timer",children:Object(l.jsxs)("p",{children:["\u0421\u0435\u0439\u0447\u0430\u0441: ",s," / ",r]})})}var g=Object(u.a)({sidebar:{gridArea:"sidebar",background:{color:"hsl(0, 0%, 95%);"},padding:{left:"1rem",right:"1rem"}}});function v(){var e=g();return Object(l.jsxs)("aside",{className:e.sidebar,children:[Object(l.jsx)("h3",{children:"\u0421\u0430\u0439\u0442 \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435"}),Object(l.jsx)(p,{})]})}var y=Object(u.a)({appNav:{"& ul":{display:"flex",gap:"2rem",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",margin:0}}});function w(){var e=y();return Object(l.jsx)("nav",{className:e.appNav,children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(s.c,{to:"/",children:"Home"})}),Object(l.jsx)("li",{children:Object(l.jsx)(s.c,{to:"/about",children:"about"})}),Object(l.jsx)("li",{children:Object(l.jsx)(s.c,{to:"/contact",children:"contact"})}),Object(l.jsx)("li",{children:Object(l.jsx)(s.c,{to:"/list",children:"list"})}),Object(l.jsx)("li",{children:Object(l.jsx)(s.c,{to:"/test",children:"test"})})]})})}var S=Object(u.a)({header:{gridArea:"header",padding:{top:"0.5rem",right:"1rem",bottom:"0.5rem",left:"1rem"},border:{width:1,style:"solid",color:"hsl(0, 0%, 90%);"},display:"flex",alignItems:"center",justifyContent:"start","& h1":{flexBasis:"30%"}}});function _(){var e=S();return Object(l.jsxs)("header",{className:e.header,children:[Object(l.jsx)("h1",{children:Object(l.jsx)(s.c,{to:"/",children:"\u0412\u0435\u0447\u0435\u0440\u043d\u044f\u044f\xa0\u0430\u043a\u0430\u0434\u0435\u043c\u0438\u044f"})}),Object(l.jsx)(w,{})]})}var N=Object(u.a)({footer:{gridArea:"footer",display:"flex",justifyContent:"space-evenly",background:"#343434",color:"white;",fontSize:"1.2rem",padding:{top:"1rem",right:"1rem",bottom:"1rem",left:"1rem"},border:{radius:"0 0 1rem 1rem"},"& a.footer-link":{color:"white"}}});function k(){var e=N();return Object(l.jsxs)("footer",{className:e.footer,children:[Object(l.jsxs)("div",{children:["\xa9by ",Object(l.jsx)(s.b,{className:"footer-link",to:"/contact",children:"andron13"})]}),Object(l.jsxs)("div",{children:["2021 - ",(new Date).getFullYear()]}),Object(l.jsx)("div",{children:Object(l.jsx)("a",{className:"footer-link",href:"http://evening.academy/",children:"evening.academy"})})]})}var A=Object(u.a)({myApp:{maxWidth:"130rem",minWidth:"30rem",width:"85vw",background:{color:"hsl(0, 0%, 95%);"},margin:{top:"0",right:"auto",bottom:0,left:"auto"},padding:{top:"0",right:"0",bottom:"0",left:"0"},"& header.header":{color:"red"},display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gridTemplateAreas:'\n          "header header header"\n          "main main sidebar"\n          "footer footer footer"\n        ',gap:"1rem;"}});function E(){var e=A();return Object(l.jsxs)("div",{className:e.myApp,children:[Object(l.jsx)(_,{}),Object(l.jsx)(m,{}),Object(l.jsx)(v,{}),Object(l.jsx)(k,{})]})}r(27);i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(s.a,{children:Object(l.jsx)(E,{})})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.57083313.chunk.js.map