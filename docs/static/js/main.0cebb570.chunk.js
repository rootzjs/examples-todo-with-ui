(this["webpackJsonpexaples-todo-with-ui"]=this["webpackJsonpexaples-todo-with-ui"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),c=(n(2),n(8)),i=n.n(c),s=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),o(e),c(e),i(e),s(e)}))},a=n(9),r=n(1),d=n(3),l=(n(15),null),u=Object(d.createNode)("AddTodo",(function(e){var t=e.actions;return Object(o.jsxs)("div",{className:"add-todo-container",children:[Object(o.jsx)("input",{type:"text",className:"add-todo-input",placeholder:"What have you planned to do today ?",ref:function(e){l=e},onKeyUp:function(e){13!==e.keyCode&&13!==e.which||(t.ADD_TODO(l),l.value="",l.focus())}}),Object(o.jsx)("button",{className:"add-todo-btn",onClick:function(){t.ADD_TODO(l),l.value="",l.focus()},children:"Add"})]})})),O=Object(r.a)(u,2),b=O[0],j=O[1];b.useContract("TodoList","ADD_TODO",(function(e,t){var n=Object(r.a)(t,1)[0];return{todos:[].concat(Object(a.a)(e.todos),[{name:n.value,isCompleted:!1}])}}));var T=j(b),m=n(7),f=(n(16),Object(d.createNode)("TodoList",(function(e){var t=e.state,n=e.actions,c=[],i="";switch(t.visibilityFilter){case"ALL":0===(c=t.todos.filter((function(e){return e}))).length&&(i="There are no Todos added yet");break;case"ACTIVE":0===(c=t.todos.filter((function(e){return!e.isCompleted}))).length&&(i="It seems, you have conquered all");break;case"COMPLETED":0===(c=t.todos.filter((function(e){return e.isCompleted}))).length&&(i="It seems, You haven't completed any");break;default:c=t.todos.filter((function(e){return e}))}return Object(o.jsx)("div",{className:"todo-list-container",children:c.length>0?c.map((function(e,t){return Object(o.jsx)("div",{className:"todos-list",children:Object(o.jsxs)("label",{htmlFor:e.name+t,className:"todo ".concat(e.isCompleted&&"todo-completed"),children:[e.name,Object(o.jsx)("input",{type:"checkbox",id:e.name+t,checked:e.isCompleted,className:"todo-checkbox",onChange:function(){return n.SET_VISIBIITY_FILTER(e.name)}}),Object(o.jsx)("span",{className:"checkmark"})]})},e.name+t)})):Object(o.jsx)("div",{className:"todo-empty-message",children:i})})}))),h=Object(r.a)(f,2),C=h[0],E=h[1];C.state({todos:[],visibilityFilter:"ALL"}),C.useAction("SET_VISIBIITY_FILTER",(function(e,t){var n=Object(r.a)(t,1)[0];return{todos:e.todos.map((function(e){return e.name===n?Object(m.a)(Object(m.a)({},e),{},{isCompleted:!e.isCompleted}):e}))}}));var v=E(C),p=(n(17),Object(d.createNode)("FilterTodos",(function(e){var t=e.state,n=e.actions;return Object(o.jsxs)("div",{className:"filter-todo-container",children:[Object(o.jsx)("button",{id:"0",className:"0"===t.selected?"btn-selected":"",onClick:function(e){return n.SHOW_ALL_TODOS(n,e.currentTarget.id)},children:"All"}),Object(o.jsx)("button",{id:"1",className:"1"===t.selected?"btn-selected":"",onClick:function(e){return n.SHOW_ACTIVE_TODOS(n,e.currentTarget.id)},children:"Active"}),Object(o.jsx)("button",{id:"2",className:"2"===t.selected?"btn-selected":"",onClick:function(e){return n.SHOW_COMPLETED_TODOS(n,e.currentTarget.id)},children:"Completed"})]})}))),D=Object(r.a)(p,2),L=D[0],x=D[1];L.state({selected:"0"}),L.useContract("TodoList","SHOW_ALL_TODOS",(function(e,t){var n=Object(r.a)(t,2),o=n[0],c=n[1];return o.UPDATE_SELECTED(c),{visibilityFilter:"ALL"}})),L.useContract("TodoList","SHOW_ACTIVE_TODOS",(function(e,t){var n=Object(r.a)(t,2),o=n[0],c=n[1];return o.UPDATE_SELECTED(c),{visibilityFilter:"ACTIVE"}})),L.useContract("TodoList","SHOW_COMPLETED_TODOS",(function(e,t){var n=Object(r.a)(t,2),o=n[0],c=n[1];return o.UPDATE_SELECTED(c),{visibilityFilter:"COMPLETED"}})),L.useAction("UPDATE_SELECTED",(function(e,t){return{selected:Object(r.a)(t,1)[0]}}));var _=x(L),A=(n(18),function(){return Object(o.jsx)("div",{className:"todo-root",children:Object(o.jsxs)("div",{className:"todo-container",children:[Object(o.jsx)(T,{}),Object(o.jsx)(v,{}),Object(o.jsx)(_,{})]})})});n(19);i.a.render(Object(o.jsx)(A,{}),document.getElementById("root")),s()}],[[20,1,2]]]);
//# sourceMappingURL=main.0cebb570.chunk.js.map