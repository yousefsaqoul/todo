(this.webpackJsonptodos=this.webpackJsonptodos||[]).push([[0],{19:function(e,t,o){},20:function(e,t,o){"use strict";o.r(t);var n=o(1),d=o.n(n),c=o(9),i=o.n(c),s=o(4),a=o(2),r=o(3),l=o.n(r),j=o(0),u=function(e){var t=e.todo,o=t.id,n=t.title,d=t.done;return Object(j.jsxs)("div",{className:d?"todos-todo done":"todos-todo",children:[Object(j.jsx)("div",{className:"todos-todo_icon",onClick:function(){return e.changeDoneBoleen(o)},children:Object(j.jsx)(l.a,{icon:d?"check-circle":"circle"})}),Object(j.jsxs)("div",{className:"todos-todo_text",children:[n," "]}),Object(j.jsxs)("div",{className:"todos-todo_cta",children:[Object(j.jsx)("div",{className:"todos-todo_cta-edit",onClick:function(){return e.editTodo(e.todo)},children:Object(j.jsx)(l.a,{icon:"edit",size:"20"})}),Object(j.jsx)("div",{className:"todos-todo_cta-delete",onClick:function(){return e.deleteTodos(o)},children:Object(j.jsx)(l.a,{icon:"trash-2",size:"20"})})]})]})},b=function(e){return Object(j.jsxs)("div",{className:"todos-list",children:[e.todos.map((function(t){return Object(j.jsx)(u,{todo:t,changeDoneBoleen:e.changeDoneBoleen,deleteTodos:e.deleteTodos,editTodo:e.editTodo},t.id)})),0===e.todos.length?Object(j.jsx)("h3",{className:"no-todos",children:"es gibt keine Aufgabe"}):null]})},O=function(e){var t=Object(n.useState)(""),o=Object(a.a)(t,2),d=o[0],c=o[1],i=Object(n.useState)(!1),s=Object(a.a)(i,2),r=s[0],u=s[1];"edit"!==e.mode||r||(c(e.todos[0].title),u(!0));var b="add..";return"edit"===e.mode&&(b="Edit"),Object(j.jsxs)("div",{className:"todos-form",children:[Object(j.jsx)("div",{className:"todos-form_icon",onClick:e.showUncompleteHandler,children:Object(j.jsx)(l.a,{icon:"filter",size:"20"})}),Object(j.jsx)("div",{className:"todos-form_form",children:Object(j.jsx)("input",{type:"text",value:d,placeholder:"Add New Todo ...",onChange:function(e){c(e.target.value)}})}),Object(j.jsx)("div",{className:"todos-form_submit",children:Object(j.jsx)("button",{className:"btn",onClick:function(){var t=d;return c(""),u(!1),e.addTodoHandler(t)},disabled:!d.trim(),children:b})})]})},h=function(){var e=Object(n.useState)([{id:1,title:"Home Work",done:!1},{id:2,title:"React Study",done:!0},{id:3,title:"Build an application",done:!1},{id:4,title:"Watch a lesson on YouTube",done:!0}]),t=Object(a.a)(e,2),o=t[0],d=t[1],c=Object(n.useState)({}),i=Object(a.a)(c,2),r=i[0],l=i[1],u=Object(n.useState)("add"),h=Object(a.a)(u,2),m=h[0],f=h[1],x=Object(s.a)(o);"not-done"===m&&(x=x.filter((function(e){return!e.done})));return Object(j.jsx)("main",{children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"todos",children:[Object(j.jsx)(O,{addTodoHandler:function(e){if("edit"!==m){var t={id:Date.now(),title:e,done:!1},n=[].concat(Object(s.a)(o),[t]);d(n)}else{var c=Object(s.a)(o).map((function(t){return t.id===r.id?(t.title=e,t):t}));d(c),l({}),f("add")}},showUncompleteHandler:function(){f("not-done"===m?"add":"not-done")},todos:"edit"!==m?x:[r],mode:m}),Object(j.jsx)(b,{todos:"edit"!==m?x:[r],changeDoneBoleen:function(e){var t=Object(s.a)(o).map((function(t){return t.id===e?(t.done=!t.done,t):t}));d(t)},deleteTodos:function(e){var t=Object(s.a)(o).filter((function(t){return t.id!==e}));d(t)},editTodo:function(e){f("edit"),l(e)}})]})})})},m=function(){return Object(j.jsx)("header",{children:Object(j.jsx)("h1",{children:"Todos List"})})};var f=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(m,{}),Object(j.jsx)(h,{})]})};o(19);i.a.render(Object(j.jsx)(d.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.86ff6a59.chunk.js.map