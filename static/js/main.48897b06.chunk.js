(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{27:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(21),s=n.n(c),r=(n(27),n(2)),o=n(19),i=n(5),l=function(e,t){switch(t.type){case"ADD_INCOME":return Object(i.a)(Object(i.a)({},e),{},{incomeTransactions:[t.payload].concat(Object(o.a)(e.incomeTransactions))});case"ADD_EXPENSE":return Object(i.a)(Object(i.a)({},e),{},{expenseTransactions:[t.payload].concat(Object(o.a)(e.expenseTransactions))});case"DELETE_TRANSACTION":return Object(i.a)(Object(i.a)({},e),{},{incomeTransactions:e.incomeTransactions.filter((function(e){return e.id!==t.payload})),expenseTransactions:e.expenseTransactions.filter((function(e){return e.id!==t.payload}))});default:return e}},u=n(0),j={incomeTransactions:JSON.parse(localStorage.getItem("incomeTransactions"))||[],expenseTransactions:JSON.parse(localStorage.getItem("expenseTransactions"))||[]},d=Object(a.createContext)(j),m=function(e){var t=e.children,n=Object(a.useReducer)(l,j),c=Object(r.a)(n,2),s=c[0],o=c[1];Object(a.useEffect)((function(){localStorage.setItem("incomeTransactions",JSON.stringify(s.incomeTransactions)),localStorage.setItem("expenseTransactions",JSON.stringify(s.expenseTransactions))}));return Object(u.jsx)(d.Provider,{value:{incomeTransactions:s.incomeTransactions,expenseTransactions:s.expenseTransactions,deleteTransaction:function(e){o({type:"DELETE_TRANSACTION",payload:e})},addIncome:function(e){o({type:"ADD_INCOME",payload:e})},addExpense:function(e){o({type:"ADD_EXPENSE",payload:e})}},children:t})};function b(e,t){switch(t.type){case"login":return localStorage.setItem("user",JSON.stringify(t.payload)),t.payload;case"logout":return localStorage.removeItem("user"),null}}var p=JSON.parse(localStorage.getItem("user")),h=Object(a.createContext)(),O=Object(a.createContext)();function x(e){var t=Object(a.useReducer)(b,p),n=Object(r.a)(t,2),c=n[0],s=n[1];return Object(u.jsx)(O.Provider,{value:c,children:Object(u.jsx)(h.Provider,{value:s,children:e.children})})}function f(){return Object(a.useContext)(O)}function v(){return Object(a.useContext)(h)}var g=function(){var e=f();return Object(u.jsx)("div",{className:"header",children:Object(u.jsxs)("h1",{children:["Hi! ",e.name]})})},N=function(){var e=+f().balance,t=Object(a.useContext)(d),n=t.incomeTransactions,c=t.expenseTransactions,s=n.map((function(e){return e.incomeAmount})),r=c.map((function(e){return e.expenseAmount})),o=s.reduce((function(e,t){return e+t}),0).toFixed(2),i=r.reduce((function(e,t){return e+t}),0).toFixed(2);return Object(u.jsxs)("div",{className:"balance",children:[Object(u.jsx)("h2",{children:"Your Balance"}),Object(u.jsxs)("h3",{children:["$",(o-i+e).toFixed(2)]}),Object(u.jsxs)("div",{className:"income-expense",children:[Object(u.jsxs)("div",{className:"plus",children:[Object(u.jsx)("h3",{children:"Income"}),Object(u.jsxs)("p",{children:["+$",o]})]}),Object(u.jsxs)("div",{className:"minus",children:[Object(u.jsx)("h3",{children:"Expenses"}),Object(u.jsxs)("p",{children:["-$",i]})]})]})]})},C=function(e){var t=e.incomeTransaction,n=Object(a.useContext)(d).deleteTransaction;return Object(u.jsxs)("li",{className:"transaction",children:[Object(u.jsx)("span",{className:"transaction-text",children:t.incomeText}),Object(u.jsxs)("span",{className:"transaction-amount",children:["$",t.incomeAmount]}),Object(u.jsx)("button",{onClick:function(){return n(t.id)},className:"delete-btn",children:Object(u.jsx)("i",{className:"fas fa-trash"})})]})},y=function(){var e=f(),t=Object(a.useContext)(d).incomeTransactions;return console.log(t),Object(u.jsxs)("div",{className:"transactions transactions-income",children:[Object(u.jsx)("h2",{children:"Transaction History"}),Object(u.jsx)("ul",{className:"transaction-list",children:t.filter((function(t){return t.account===e.id})).map((function(e){return Object(u.jsx)(C,{incomeTransaction:e},e.id)}))})]})},S=function(e){var t=e.expenseTransaction,n=Object(a.useContext)(d).deleteTransaction;return Object(u.jsxs)("li",{className:"transaction",children:[Object(u.jsx)("span",{className:"transaction-text",children:t.expenseText}),Object(u.jsxs)("span",{className:"transaction-amount",children:["$",t.expenseAmount]}),Object(u.jsx)("button",{onClick:function(){return n(t.id)},className:"delete-btn",children:Object(u.jsx)("i",{className:"fas fa-trash"})})]})},T=function(){var e=f(),t=Object(a.useContext)(d).expenseTransactions;return console.log(t),Object(u.jsxs)("div",{className:"transactions transactions-expense",children:[Object(u.jsx)("h2",{children:"Transaction History"}),Object(u.jsx)("ul",{className:"transaction-list",children:t.filter((function(t){return t.account===e.id})).map((function(e){return Object(u.jsx)(S,{expenseTransaction:e},e.id)}))})]})},A=n(13),_=n(37),w=function(){var e=f(),t=Object(a.useContext)(d),n=t.addIncome,c=t.addExpense,s=Object(a.useState)({incomeText:"",incomeAmount:0}),o=Object(r.a)(s,2),l=o[0],j=o[1],m=l.incomeText,b=l.incomeAmount,p=function(e){j(Object(i.a)(Object(i.a)({},l),{},Object(A.a)({},e.target.name,e.target.value)))},h=Object(a.useState)({expenseText:"",expenseAmount:0}),O=Object(r.a)(h,2),x=O[0],v=O[1],g=x.expenseText,N=x.expenseAmount,C=function(e){v(Object(i.a)(Object(i.a)({},x),{},Object(A.a)({},e.target.name,e.target.value)))};return Object(u.jsxs)("div",{className:"form-wrapper",children:[Object(u.jsx)("form",{onSubmit:function(t){if(t.preventDefault(),""!==m){var a={id:Object(_.a)(),account:e.id,incomeText:m,incomeAmount:1*b};n(a),j({incomeText:"",incomeAmount:0})}},children:Object(u.jsxs)("div",{className:"input-group income",children:[Object(u.jsx)("input",{type:"text",name:"incomeText",value:m,placeholder:"Add Income...",autoComplete:"off",onChange:p}),Object(u.jsx)("input",{type:"number",name:"incomeAmount",value:b,placeholder:"Amount",autoComplete:"off",onChange:p}),Object(u.jsx)("input",{type:"submit",value:"Submit"})]})}),Object(u.jsx)("form",{onSubmit:function(t){if(t.preventDefault(),""!==g){var n={id:Object(_.a)(),expenseText:g,account:e.id,expenseAmount:1*N};c(n),v({expenseText:"",expenseAmount:0})}},children:Object(u.jsxs)("div",{className:"input-group expense",children:[Object(u.jsx)("input",{type:"text",name:"expenseText",value:g,placeholder:"Add Expense...",autoComplete:"off",onChange:C}),Object(u.jsx)("input",{type:"number",name:"expenseAmount",value:N,placeholder:"Amount",autoComplete:"off",onChange:C}),Object(u.jsx)("input",{type:"submit",value:"Submit"})]})})]})},E=n(3),D=function(){var e=v(),t=f();return t?"admin"===t.id?Object(u.jsx)(E.a,{to:"/admin"}):Object(u.jsx)(m,{children:Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)("button",{onClick:function(){e({type:"logout"})},className:"app__signout",children:"SIGN OUT"}),Object(u.jsx)(g,{}),Object(u.jsx)(N,{}),Object(u.jsx)(y,{}),Object(u.jsx)(T,{}),Object(u.jsx)(w,{})]})}):Object(u.jsx)(E.a,{to:"/signin"})},I=function(e){return e.map((function(e){return Object(i.a)({},e)}))};function J(e){var t=JSON.stringify(e);localStorage.setItem("accounts",t)}function P(e,t){switch(t.type){case"add":var n=I(e);return n.find((function(e){return e.email.toLowerCase()===t.payload.email.toLowerCase()}))?(J(e),e):(n.push(t.payload),J(n),n);case"deposit":var a=I(e),c=a.find((function(e){return e.id===t.payload.id}));return c?(c.balance=Number(c.balance)+Number(t.payload.amount),J(a),a):e;case"withdraw":var s=I(e),r=s.find((function(e){return e.id===t.payload.id}));return console.log(r),r&&r.balance>=t.payload.amount?(r.balance=Number(r.balance)-Number(t.payload.amount),J(s),s):e;case"transfer":var o=t.payload,i=o.from,l=o.to,u=o.amount,j=I(e),d=j.find((function(e){return e.id===t.payload.from})),m=j.find((function(e){return e.id===t.payload.to}));return i&&l&&u<=d.balance?(d.balance=Number(d.balance)-Number(u),m.balance=Number(m.balance)+Number(u),j):(J(j),e)}}var k=Object(a.createContext)(),R=Object(a.createContext)(),q=JSON.parse(localStorage.getItem("accounts"))||[{name:"admin",id:"admin",email:"admin@mail.com",password:"123"},{name:"Justin",id:"1",email:"jackie@mail.com",password:"123",balance:1e3},{name:"Rafael",id:"2",email:"rafael@mail.com",password:"123",balance:1e3},{name:"Salas",id:"3",email:"salas@mail.com",password:"123",balance:1e3}];function B(e){var t=Object(a.useReducer)(P,q),n=Object(r.a)(t,2),c=n[0],s=n[1];return Object(u.jsx)(R.Provider,{value:c,children:Object(u.jsx)(k.Provider,{value:s,children:e.children})})}function $(){return Object(a.useContext)(R)}function L(){return Object(a.useContext)(k)}function M(){var e=function(){var e=v(),t=$();console.log(t);var n=Object(E.g)(),c=Object(a.useState)(null),s=Object(r.a)(c,2),o=s[0],i=s[1],l=Object(a.useState)(""),u=Object(r.a)(l,2),j=u[0],d=u[1],m=Object(a.useState)(""),b=Object(r.a)(m,2),p=b[0],h=b[1];return{error:o,email:j,password:p,handlePwChange:function(e){h(e.target.value)},handleEmailChange:function(e){d(e.target.value)},handleSubmit:function(a){i(null),a.preventDefault();var c=t.find((function(e){return e.email===j}));if(console.log(c),!c||c.password!=p)return i("Password is incorrect or user doesn't exist"),d(""),void h("");e({type:"login",payload:c}),n.push("/")}}}(),t=e.error,n=e.email,c=e.password,s=e.handleEmailChange,o=e.handlePwChange,i=e.handleSubmit;return f()?Object(u.jsx)(E.a,{to:"/"}):Object(u.jsx)("div",{className:"signin",children:Object(u.jsxs)("form",{className:"signin__form",onSubmit:i,children:[Object(u.jsx)("h1",{className:"signin-heading",children:"Sign in"}),Object(u.jsx)("p",{className:"signin__error",children:t}),Object(u.jsxs)("div",{className:"input-group income",children:[Object(u.jsx)("input",{required:!0,type:"email",placeholder:"Email",value:n,autoComplete:"off",onChange:s}),Object(u.jsx)("input",{type:"password",placeholder:"Password",autoComplete:"off",value:c,onChange:o}),Object(u.jsx)("input",{type:"submit",value:"Submit"})]})]})})}var W=n(8);function F(){var e=function(){var e=Object(a.useState)(null),t=Object(r.a)(e,2),n=t[0],c=t[1],s=L(),o=Object(a.useState)(""),i=Object(r.a)(o,2),l=i[0],u=i[1],j=Object(a.useState)(""),d=Object(r.a)(j,2),m=d[0],b=d[1];return{error:n,amount:l,account:m,handleAccChange:function(e){b(e.target.value)},handleAmountChange:function(e){u(e.target.value)},handleDeposit:function(e){c(null),e.preventDefault(),s({type:"deposit",payload:{id:m,amount:l}}),u(""),b("")}}}(),t=e.error,n=e.amount,c=e.account,s=e.handleAccChange,o=e.handleAmountChange,i=e.handleDeposit;return Object(u.jsxs)("form",{className:"signin__form",onSubmit:i,children:[Object(u.jsx)("h1",{className:"signin-heading",children:"Deposit"}),Object(u.jsx)("p",{className:"signin__error",children:t}),Object(u.jsxs)("div",{className:"input-group income",children:[Object(u.jsx)("input",{required:!0,type:"text",placeholder:"Account No.",value:c,autoComplete:"off",onChange:s}),Object(u.jsx)("input",{type:"number",placeholder:"Amount",autoComplete:"off",value:n,onChange:o}),Object(u.jsx)("input",{type:"submit",value:"Submit"})]})]})}function H(){var e=function(){var e=Object(a.useState)(null),t=Object(r.a)(e,2),n=t[0],c=t[1],s=L(),o=Object(a.useState)(""),i=Object(r.a)(o,2),l=i[0],u=i[1],j=Object(a.useState)(""),d=Object(r.a)(j,2),m=d[0],b=d[1];return{error:n,amount:l,account:m,handleAccChange:function(e){b(e.target.value)},handleAmountChange:function(e){u(e.target.value)},handleWithdraw:function(e){c(null),e.preventDefault(),s({type:"withdraw",payload:{id:m,amount:l}}),u(""),b("")}}}(),t=e.error,n=e.amount,c=e.account,s=e.handleAccChange,o=e.handleAmountChange,i=e.handleWithdraw;return Object(u.jsxs)("form",{className:"signin__form",onSubmit:i,children:[Object(u.jsx)("h1",{className:"signin-heading",children:"Withdraw"}),Object(u.jsx)("p",{className:"signin__error",children:t}),Object(u.jsxs)("div",{className:"input-group income",children:[Object(u.jsx)("input",{required:!0,type:"text",placeholder:"Account No.",value:c,autoComplete:"off",onChange:s}),Object(u.jsx)("input",{type:"number",placeholder:"Amount",autoComplete:"off",value:n,onChange:o}),Object(u.jsx)("input",{type:"submit",value:"Submit"})]})]})}function G(){var e=function(){var e=L(),t=Object(a.useState)(null),n=Object(r.a)(t,2),c=n[0],s=n[1],o=Object(a.useState)(""),i=Object(r.a)(o,2),l=i[0],u=i[1],j=Object(a.useState)(""),d=Object(r.a)(j,2),m=d[0],b=d[1],p=Object(a.useState)(""),h=Object(r.a)(p,2),O=h[0],x=h[1];return{error:c,amount:m,account:O,receiver:l,handleAccChange:function(e){x(e.target.value)},handleAmountChange:function(e){b(e.target.value)},handleTransfer:function(t){s(null),t.preventDefault(),e({type:"transfer",payload:{from:O,amount:m,to:l}}),b(""),u(""),x("")},handleReceiverChange:function(e){u(e.target.value)}}}(),t=e.error,n=e.amount,c=e.account,s=e.receiver,o=e.handleAccChange,i=e.handleAmountChange,l=e.handleTransfer,j=e.handleReceiverChange;return Object(u.jsxs)("form",{className:"signin__form",onSubmit:l,children:[Object(u.jsx)("h1",{className:"signin-heading",children:"Transfer"}),Object(u.jsx)("p",{className:"signin__error",children:t}),Object(u.jsxs)("div",{className:"input-group income",children:[Object(u.jsx)("input",{required:!0,type:"text",placeholder:"Account No.",value:c,autoComplete:"off",onChange:o}),Object(u.jsx)("input",{required:!0,type:"text",placeholder:"Destination Account No.",value:s,autoComplete:"off",onChange:j}),Object(u.jsx)("input",{type:"number",placeholder:"Amount",autoComplete:"off",value:n,onChange:i}),Object(u.jsx)("input",{type:"submit",value:"Submit"})]})]})}n(34);function U(){var e=$();return Object(u.jsxs)("ul",{className:"accounts",children:[Object(u.jsxs)("li",{className:"account",children:[Object(u.jsx)("div",{className:"account_number",children:"Account#"}),Object(u.jsx)("div",{className:"account_name",children:"Name"}),Object(u.jsx)("div",{className:"account_email",children:"Email"}),Object(u.jsx)("div",{className:"account_balance",children:"Balance"})]}),e.filter((function(e){return"admin"!==e.id})).map((function(e){return Object(u.jsxs)("li",{className:"account",children:[Object(u.jsx)("div",{className:"account_number",children:e.id}),Object(u.jsx)("div",{className:"account_name",children:e.name}),Object(u.jsx)("div",{className:"account_email",children:e.email}),Object(u.jsxs)("div",{className:"account_balance",children:["$",e.balance]})]},e.id)}))]})}function X(){var e=function(){var e=L(),t=Object(a.useState)(null),n=Object(r.a)(t,2),c=n[0],s=n[1],o=Object(a.useState)(""),i=Object(r.a)(o,2),l=i[0],u=i[1],j=Object(a.useState)(""),d=Object(r.a)(j,2),m=d[0],b=d[1],p=Object(a.useState)(""),h=Object(r.a)(p,2),O=h[0],x=h[1];return{error:c,balance:m,name:O,email:l,handleBalanceChange:function(e){return b(e.target.value)},handleEmailChange:function(e){return u(e.target.value)},handleNameChange:function(e){return x(e.target.value)},handleCreate:function(t){s(null),t.preventDefault(),e({type:"add",payload:{email:l,name:O,balance:m,id:Math.floor(1e3+9e3*Math.random()).toString(),password:"123"}}),b(""),x(""),u("")}}}(),t=e.error,n=e.balance,c=e.name,s=e.email,o=e.handleEmailChange,i=e.handleNameChange,l=e.handleCreate,j=e.handleBalanceChange;return Object(u.jsxs)("form",{className:"signin__form",onSubmit:l,children:[Object(u.jsx)("h1",{className:"signin-heading",children:"Create Account"}),Object(u.jsx)("p",{className:"signin__error",children:t}),Object(u.jsxs)("div",{className:"input-group income",children:[Object(u.jsx)("input",{required:!0,type:"email",placeholder:"Email",value:s,autoComplete:"off",onChange:o}),Object(u.jsx)("input",{required:!0,type:"text",placeholder:"Account Name",value:c,autoComplete:"off",onChange:i}),Object(u.jsx)("input",{type:"number",placeholder:"Available Balance",autoComplete:"off",value:n,onChange:j}),Object(u.jsx)("input",{type:"submit",value:"Submit"})]})]})}function Y(){var e=Object(E.h)(),t=(e.path,e.url),n=v(),a=f();return a?"admin"!==a.id?Object(u.jsx)(E.a,{to:"/"}):Object(u.jsxs)("div",{className:"admin",children:[Object(u.jsx)("button",{onClick:function(){n({type:"logout"})},className:"app__signout",children:"SIGN OUT"}),Object(u.jsxs)("nav",{className:"admin__nav",children:[Object(u.jsx)(W.b,{to:"".concat(t,"/deposit"),children:"Deposit"}),Object(u.jsx)(W.b,{to:"".concat(t,"/withdraw"),children:"Withdraw"}),Object(u.jsx)(W.b,{to:"".concat(t,"/transfer"),children:"Transfer"}),Object(u.jsx)(W.b,{to:"".concat(t,"/create"),children:"Create Account"})]}),Object(u.jsx)("div",{className:"admin__accounts",children:Object(u.jsx)(U,{})}),Object(u.jsx)("div",{className:"admin__forms",children:Object(u.jsxs)(E.d,{children:[Object(u.jsx)(E.b,{path:"".concat(t,"/deposit"),component:F}),Object(u.jsx)(E.b,{path:"".concat(t,"/withdraw"),component:H}),Object(u.jsx)(E.b,{path:"".concat(t,"/transfer"),component:G}),Object(u.jsx)(E.b,{path:"".concat(t,"/create"),component:X})]})})]}):Object(u.jsx)(E.a,{to:"/signin"})}var z=function(){return Object(u.jsxs)(E.d,{children:[Object(u.jsx)(E.b,{path:"/signin",component:M}),Object(u.jsx)(E.b,{path:"/admin",component:Y}),Object(u.jsx)(E.b,{exact:!0,path:"/",component:D})]})};s.a.render(Object(u.jsx)(W.a,{basename:"/banking-app",children:Object(u.jsx)(B,{children:Object(u.jsx)(x,{children:Object(u.jsx)(z,{})})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.48897b06.chunk.js.map