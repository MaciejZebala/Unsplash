(this.webpackJsonpnoteapp=this.webpackJsonpnoteapp||[]).push([[0],{73:function(t,n,e){"use strict";e.r(n);var i,r,c,a,o,s,l,d=e(0),u=e.n(d),p=e(16),h=e.n(p),b=e(18),g=e(5),m=e(12),j=e(3),f=e(2),x=e.p+"static/media/landscape.5c346393.jpg",O=f.d.h1(i||(i=Object(j.a)(["\n\tfont-size: ",";\n\tfont-weight: ",";\n"])),(function(t){var n=t.theme;return t.big?n.fontSize.xl:n.fontSize.l}),(function(t){return t.theme.bold})),v=f.d.p(r||(r=Object(j.a)(["\n\tfont-size: ",";\n\tfont-weight: ",";\n\twidth: 60%;\n"])),(function(t){return t.theme.fontSize.s}),(function(t){return t.theme.light})),y=e(27),w=e(22),k=e.n(w),z=e(42),S=e(17),C=e.p+"static/media/magnifier.c8fb929d.svg",E=f.d.input(c||(c=Object(j.a)(["\n\twidth: 100%;\n\theight: 45px;\n\tpadding: 10px 20px 10px 40px;\n\tfont-size: ",";\n\tbackground-image: url(",");\n\tbackground-size: 15px;\n\tbackground-position: 15px 50%;\n\tbackground-repeat: no-repeat;\n\tfont-weight: ",";\n\tbackground-color: ",";\n\tborder: none;\n\tborder-radius: 25px;\n\t::placeholder {\n\t\ttext-transform: uppercase;\n\t\tletter-spacing: 1px;\n\t\tcolor: ",";\n\t}\n\t","\n"])),(function(t){return t.theme.fontSize.xs}),C,(function(t){return t.theme.regular}),(function(t){return t.theme.grey100}),(function(t){return t.theme.grey300}),(function(t){return t.radius&&Object(f.c)(a||(a=Object(j.a)(["\n\t\t\tborder-radius: 50px;\n\t\t"])))})),T=e(23),A=e.n(T),D="FETCH_DATA",R="DATA_ERROR",_="SET_AUTOCOMPLETE",I="CLEAR_AUTOCOMPLETE",L=function(t){return function(n){A.a.get("https://api.unsplash.com/search/photos?page=1&query=".concat(t,"&client_id=").concat("H_DVdroThQ-P1jRiQrgEFRvon4D5dWJXJgSCeChyir0")).then((function(t){var e=t.data;n({type:D,payload:e.results})})).catch((function(t){n({type:R,payload:console.log(t)})}))}},M=e(1),P=f.d.div(o||(o=Object(j.a)(["\n\tpadding: 5px 10px;\n\tmargin: 2px 0;\n\tcolor: black;\n\tcursor: pointer;\n\t&:hover {\n\t\tbackground-color: rgb(224, 224, 224);\n\t}\n"]))),F=f.d.div(s||(s=Object(j.a)(["\n\twidth: ",";\n"])),(function(t){return t?"80%":"100%"})),J=f.d.ul(l||(l=Object(j.a)(["\n\tlist-style: none;\n\tbackground-color: white;\n"]))),U=function(t){var n=t.small,e=Object(m.b)(),i=Object(g.f)(),r=Object(d.useState)(""),c=Object(S.a)(r,2),a=c[0],o=c[1],s=Object(m.c)((function(t){return t.autoComplete})),l=function(){var t=Object(z.a)(k.a.mark((function t(n){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0===n.length){t.next=5;break}return t.next=3,i.push("/gallery/".concat(n));case 3:e(L(n)),o("");case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();return Object(M.jsxs)(F,Object(y.a)(Object(y.a)({},n),{},{children:[Object(M.jsx)(E,{placeholder:"Search",onChange:function(t){var n;o(t.target.value),a.length>=2&&e((n=a,function(t){A.a.get("/autocomplete/".concat(n)).then((function(n){var e=n.data;t({type:_,payload:e})})).catch((function(n){t({type:R,payload:console.log(n)})}))}))},value:a,onKeyPress:function(t){return"Enter"===t.key&&l(a)}}),a.length>2&&Object(M.jsx)(J,{children:0!==s.autocomplete.length?s.autocomplete.map((function(t){return Object(M.jsx)(P,{onClick:function(){l(t.query)},role:"button",children:t.query},t.priority)})):Object(M.jsx)(P,{children:"No results"})})]}))};U.defaultProps={small:!1};var q,N,H,Q,B,K,V,W,X,G,Y,Z,$,tt,nt,et,it,rt,ct=U,at=f.d.div(q||(q=Object(j.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: flex-start;\n\twidth: 50%;\n\theight: 60%;\n\tpadding: 20px 20px;\n\tcolor: ",";\n\t> * {\n\t\tmargin-bottom: 30px;\n\t}\n"])),(function(t){return t.theme.white})),ot=function(){return Object(M.jsxs)(at,{children:[Object(M.jsx)(O,{big:!0,children:"Unsplash"}),Object(M.jsx)(v,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nemo ducimus fuga repellendus illum"}),Object(M.jsx)(ct,{}),Object(M.jsx)(v,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nemo ducimus fuga repellendus illum"})]})},st=f.d.div(N||(N=Object(j.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\twidth: 100vw;\n\theight: 100vh;\n\tbackground-image: url(",");\n\tbox-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.2);\n\tbackground-blend-mode: multiply;\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n\tbackground-position: center;\n"])),x),lt=function(){return Object(M.jsx)(M.Fragment,{children:Object(M.jsx)(st,{children:Object(M.jsx)(ot,{})})})},dt={note:"hsl(49, 100%, 58%)",twitter:"hsl(196, 83%, 75%)",article:"hsl(106, 47%, 64%)",grey100:"hsl(0, 0%, 96%)",grey200:"hsl(0, 0%, 90%)",grey300:"hsl(0, 0%, 70%)",black:"hsl(0, 0%, 0%)",white:"hsl(255, 100%, 100%)",light:300,bold:600,fontSize:{xxs:"1rem",xs:"1.2rem",s:"1.6rem",m:"2.1rem",l:"3.5rem",xl:"4rem"}},ut=Object(f.b)(H||(H=Object(j.a)(["\n    @import url('https://fonts.googleapis.com/css?family=Montserrat:300,600');\n\n    *,*::before,*::after{\n        box-sizing: border-box;\n        margin: 0;\n        padding: 0;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n    }\n\n    html {\n        font-size: 62.5%;\n    }\n\n    body {\n        font-size: 1.6rem;\n        font-family: \"Montserrat\", sans-serif;\n    }\n"]))),pt=function(t){var n=t.children;return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(ut,{}),Object(M.jsx)(f.a,{theme:dt,children:n})]})},ht=e.p+"static/media/close.17a94979.svg",bt=f.d.button(Q||(Q=Object(j.a)(["\n\twidth: 40px;\n\theight: 40px;\n\tborder-radius: 20px;\n\tbackground-image: url(",");\n\tbackground-repeat: no-repeat;\n\tbackground-position: 50% 50%;\n\tbackground-size: 40%;\n\tborder: none;\n\tbackground-color: ",";\n\tcursor: pointer;\n"])),ht,(function(t){return t.active?"white":"transparent"})),gt=e.p+"static/media/pin.72e55ebe.svg",mt=e.p+"static/media/user.78b64d9f.svg",jt=f.d.div(B||(B=Object(j.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbackground-color: rgba(0, 0, 0, 0.5);\n"]))),ft=f.d.img(K||(K=Object(j.a)(["\n\tmin-width: 45%;\n\tmax-width: 75%;\n\tmax-height: 75%;\n"]))),xt=f.d.div(V||(V=Object(j.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\twidth: 70%;\n\theight: 85%;\n\tbackground-color: white;\n"]))),Ot=f.d.div(W||(W=Object(j.a)(["\n\tposition: absolute;\n\tdisplay: flex;\n\twidth: 60%;\n\ttop: 30px;\n\tmargin-left: 40px;\n"]))),vt=f.d.nav(X||(X=Object(j.a)(["\n\tposition: relative;\n\twidth: 100%;\n\theight: 15%;\n"]))),yt=Object(f.d)(bt)(G||(G=Object(j.a)(["\n\twidth: 55px;\n\tposition: absolute;\n\ttop: 20px;\n\tright: 35px;\n"]))),wt=Object(f.d)(v)(Y||(Y=Object(j.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\n\t:before {\n\t\tcontent: '';\n\t\tdisplay: block;\n\t\tmargin-right: 15px;\n\t\tbackground-image: url(",");\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-position: 50% 50%;\n\t\twidth: 30px;\n\t\theight: 25px;\n\t}\n"])),(function(t){return 0===t.index?mt:gt})),kt=function(t){var n=t.selectedImg,e=t.setSelectedImg,i=t.imgDetails;return Object(M.jsx)(jt,{children:Object(M.jsxs)(xt,{children:[Object(M.jsxs)(vt,{children:[Object(M.jsx)(Ot,{children:i.map((function(t,n){return Object(M.jsx)(wt,{index:n,children:t||"No Data"})}))}),Object(M.jsx)(yt,{onClick:function(){e(null)}})]}),Object(M.jsx)(ft,{src:"".concat(n),alt:""})]})})},zt=f.d.div(Z||(Z=Object(j.a)(["\n\tmin-height: 1400px;\n"]))),St=f.d.div($||($=Object(j.a)(["\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr 1fr;\n\t/* grid-template-columns: repeat(3, auto); */\n\t/* grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n\tgrid-template-rows: minmax(50px, auto);\n\tgap: 24px;\n\tjustify-items: space-evenly; */\n\tgap: 24px;\n\twidth: 90vw;\n\t/* max-width: 1320px; */\n\t/* height: 90vh; */\n\tmargin: 20px auto;\n\t/* overflow-y: auto; */\n\t/* padding: 0 12px; */\n\n\t@media (max-width: 700px) {\n\t\tgrid-template-columns: repeat(2, auto);\n\t}\n\t@media (max-width: 450px) {\n\t\tgrid-template-columns: repeat(1, auto);\n\t}\n"]))),Ct=f.d.div(tt||(tt=Object(j.a)(["\n\toverflow: hidden;\n\theight: 0;\n\tpadding: 50% 0;\n\tposition: relative;\n"]))),Et=f.d.img(nt||(nt=Object(j.a)(["\n\twidth: 100%;\n\tmin-height: 100%;\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n"]))),Tt=f.d.nav(et||(et=Object(j.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-around;\n\twidth: 100%;\n\tmargin: 40px 0;\n\t@media (max-width: 700px) {\n\t\tflex-direction: column;\n\t}\n"]))),At=f.d.a(it||(it=Object(j.a)(["\n\ttext-decoration: none;\n\tfont-size: ",";\n\tcolor: ",";\n"])),(function(t){return t.theme.fontSize.l}),(function(t){return t.theme.black})),Dt=f.d.div(rt||(rt=Object(j.a)(["\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\tfont-size: ",";\n\tcolor: ",";\n"])),(function(t){return t.theme.fontSize.xl}),(function(t){return t.theme.grey300})),Rt=function(){var t=Object(d.useState)(null),n=Object(S.a)(t,2),e=n[0],i=n[1],r=Object(d.useState)([]),c=Object(S.a)(r,2),a=c[0],o=c[1],s=Object(m.c)((function(t){return t.img})),l=Object(m.b)(),u=Object(g.g)().data;Object(d.useEffect)((function(){l((function(t){t({type:I})})),l(L(u))}),[l]);var p=s.img;return Object(M.jsxs)(zt,{children:[Object(M.jsxs)(Tt,{children:[Object(M.jsx)(At,{href:"/",children:"Unsplash"}),Object(M.jsx)(ct,{small:!0})]}),Object(M.jsx)(St,{children:p.length>0&&p.map((function(t){var n=t.urls,e=t.id,r=t.description,c=t.user;return Object(M.jsx)(Ct,{onClick:function(){i(n.regular),o([c.name,c.location])},children:Object(M.jsx)(Et,{src:"".concat(n.regular),alt:"".concat(r)})},e)}))}),0===p.length&&Object(M.jsx)(Dt,{children:"No Results :( "}),e&&Object(M.jsx)(kt,{selectedImg:e,setSelectedImg:i,imgDetails:a})]})},_t=e(14),It=e(44),Lt={img:[],autocomplete:[]},Mt=Object(_t.c)({img:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Lt,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case D:return{img:n.payload};default:return t}},autoComplete:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Lt,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case _:return{autocomplete:n.payload};case I:return{autocomplete:[]};default:return t}}}),Pt=Object(_t.d)(Mt,Object(_t.a)(It.a)),Ft=function(){return Object(M.jsx)(m.a,{store:Pt,children:Object(M.jsx)(pt,{children:Object(M.jsx)(b.a,{children:Object(M.jsxs)(g.c,{children:[Object(M.jsx)(g.a,{exact:!0,path:"/",component:lt}),Object(M.jsx)(g.a,{exact:!0,path:"/gallery/:data",component:Rt})]})})})})};h.a.render(Object(M.jsx)(u.a.StrictMode,{children:Object(M.jsx)(Ft,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.43795735.chunk.js.map