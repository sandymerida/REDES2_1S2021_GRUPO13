(this.webpackJsonppr4front=this.webpackJsonppr4front||[]).push([[0],{56:function(e,t,n){},57:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(13),i=n.n(a),s=(n(56),n(14)),o=(n.p,n(57),n(120)),d=n(19),j=n.n(d),l=n(26),u=n(27),b=n.n(u),O=n(121),h=n(125),p=n(122),x=n(111),v=n(123),f=n(2);function g(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),i=Object(s.a)(a,2),d=i[0],u=i[1],g=Object(r.useState)(""),m=Object(s.a)(g,2),S=m[0],C=m[1],_=Object(r.useState)(""),T=Object(s.a)(_,2),y=T[0],E=T[1];function R(){return(R=Object(l.a)(j.a.mark((function e(t){var r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n+" "+d+" "+S),r={carnet:n,nombre:d,curso:S,detalle:y},e.next=4,b.a.post(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).BACK||"http://172.35.73.40:3001/",r);case 4:a=e.sent,console.log(a.data),c(""),u(""),C(""),E("");case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("h2",{children:"Ingreso de reportes de practicantes"}),Object(f.jsxs)(O.a,{children:[Object(f.jsx)(h.a,{htmlFor:"mi-campo",children:"Carnet"}),Object(f.jsx)(p.a,{id:"mi-campo","aria-describedby":"mi-texto-de-ayuda",onChange:function(e){return c(e.target.value)}}),Object(f.jsx)(x.a,{id:"mi-texto-de-ayuda",children:"Ingrese nombre completo"}),Object(f.jsx)(p.a,{id:"mi-campo2","aria-describedby":"mi-texto-de-ayuda",onChange:function(e){return u(e.target.value)}}),Object(f.jsx)(x.a,{id:"mi-texto-de-ayuda",children:"Ingrese el nombre de la clase"}),Object(f.jsx)(p.a,{id:"mi-campo3","aria-describedby":"mi-texto-de-ayuda",onChange:function(e){return C(e.target.value)}}),Object(f.jsx)(x.a,{id:"mi-texto-de-ayuda",children:"Curso/proyecto"}),Object(f.jsx)(v.a,{"aria-label":"empty textarea",placeholder:"Cuerpo del reporte...",onChange:function(e){return E(e.target.value)}}),Object(f.jsx)(o.a,{variant:"contained",color:"primary",onClick:function(e){return R.apply(this,arguments)},children:"Registrar"})]})]})}var m=n(112),S=n(115),C=n(119),_=n(118),T=n(113),y=n(116),E=n(117),R=n(114),A=n(24),D=Object(m.a)({table:{minWidth:650}});var N,F,H,K,P;N="201504231",F="jose",H="fasdfas",K="dfasdf",P="4.0";function I(){var e,t=Object(r.useState)([]),n=Object(s.a)(t,2),c=n[0],a=n[1],i=Object(r.useState)([]),d=Object(s.a)(i,2),u=d[0],O=d[1],h=D(),p=Object(r.useState)(!1),x=Object(s.a)(p,2),v=x[0],g=x[1],m=function(){return g(!1)},N=function(){var e=Object(l.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.next=3,b.a.get(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).BACK||"http://172.35.73.40:3001/"+t.currentTarget.value).then((function(e){return e.data,e.data})).catch((function(e){console.log(e)}));case 3:n=e.sent,O(n),console.log(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).BACK||"http://172.35.73.40:3001/").then((function(e){return e.data,e.data})).catch((function(e){console.log(e)}));case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){return e=setInterval((function(){return F()}),3e3),function(){return clearInterval(e)}}),[]),Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("h2",{children:"Lista de reportes"}),Object(f.jsxs)(A.a,{show:v,onHide:m,children:[Object(f.jsx)(A.a.Header,{closeButton:!0,children:Object(f.jsx)(A.a.Title,{children:"Informacion Registro"})}),Object(f.jsxs)(A.a.Body,{children:[Object(f.jsxs)("p",{children:["Carnet: ",u.carnet]}),Object(f.jsxs)("p",{children:["Nombre: ",u.nombre]}),Object(f.jsxs)("p",{children:["Curso: ",u.curso]}),Object(f.jsxs)("p",{children:["Detalle: ",u.detalle]}),Object(f.jsxs)("p",{children:["servidor: ",u.servidor]}),Object(f.jsx)("p",{children:"Fecha"})," ",u.updatedAt]}),Object(f.jsxs)(A.a.Footer,{children:[Object(f.jsx)(o.a,{variant:"secondary",onClick:m,children:"Close"}),Object(f.jsx)("p",{children:Object(f.jsxs)("b",{children:["Solicitud atendida por el servidor",u.servidoractual]})})]})]}),Object(f.jsx)(T.a,{component:R.a,children:Object(f.jsxs)(S.a,{className:h.table,size:"small","aria-label":"a dense table",children:[Object(f.jsx)(y.a,{children:Object(f.jsxs)(E.a,{children:[Object(f.jsx)(_.a,{children:"Carnet"}),Object(f.jsx)(_.a,{align:"right",children:"Nombre"}),Object(f.jsx)(_.a,{align:"right",children:"Proyecto"}),Object(f.jsx)(_.a,{align:"right",children:"fecha"}),Object(f.jsx)(_.a,{align:"right",children:"Servidor"}),Object(f.jsx)(_.a,{align:"right",children:"Ver"})]})}),Object(f.jsx)(C.a,{children:c&&c.map((function(e,t){return Object(f.jsxs)(E.a,{children:[Object(f.jsx)(_.a,{component:"th",scope:"row",children:e.carnet}),Object(f.jsx)(_.a,{align:"right",children:e.nombre}),Object(f.jsx)(_.a,{align:"right",children:e.curso}),Object(f.jsx)(_.a,{align:"right",children:e.updatedAt}),Object(f.jsx)(_.a,{align:"right",children:e.servidor}),Object(f.jsx)(_.a,{align:"right",children:Object(f.jsx)(o.a,{value:e._id,variant:"primary",onClick:N,children:"Ver"})})]},t)}))})]})})]})}n(83);var k=function(){var e=Object(r.useState)(0),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)("header",{className:"App-header",children:[Object(f.jsx)("h1",{children:"Herramienta de control"}),Object(f.jsxs)("div",{children:[Object(f.jsx)(o.a,{variant:"contained",color:"primary",onClick:function(e){return c(1)},children:"Nuevo Reporte"}),Object(f.jsx)(o.a,{variant:"contained",color:"secondary",onClick:function(e){return c(0)},children:"Listado Reportes"}),Object(f.jsx)("div",{id:"rcorners3",children:0==n?Object(f.jsx)(I,{}):Object(f.jsx)(g,{})})]})]})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,126)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};i.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(k,{})}),document.getElementById("root")),w()}},[[84,1,2]]]);
//# sourceMappingURL=main.3d66bdcb.chunk.js.map