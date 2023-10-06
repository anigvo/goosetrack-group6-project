"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[215],{4215:function(n,e,t){t.r(e),t.d(e,{default:function(){return Fe}});var r,i=t(9439),o=t(2791),a=t(7689),l=t(168),c=t(6088),d=["title","titleId"];function s(){return s=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},s.apply(this,arguments)}function u(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function p(n,e){var t=n.title,i=n.titleId,a=u(n,d);return o.createElement("svg",s({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":i},a),t?o.createElement("title",{id:i},t):null,r||(r=o.createElement("g",{id:"plus"},o.createElement("path",{id:"Icon",d:"M12 5V19M5 12H19",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}))))}var h,x,f,g,m,b=o.forwardRef(p),k=(t.p,c.Z.button(h||(h=(0,l.Z)(["\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    padding-top: 16px;\n    padding-bottom: 16px;\n    gap: 8px;\n    color: ",";\n    background-color: ",";\n    border: 1px dashed ",";\n    border-radius: 8px;\n    font-family: 'Inter', sans-serif;\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 1.28;\n    cursor: pointer;\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    &:hover, &:focus {\n        background-color: ",";\n    }\n"])),(function(n){return n.theme.mainFont}),(function(n){return n.theme.addTaskBtnBackground}),(function(n){return n.theme.addTaskBtnBorder}),(function(n){return n.theme.addTaskBtnHover}))),y=(0,c.Z)(b)(x||(x=(0,l.Z)(["\nstroke: ",";\nwidth: 24px;\nheight: 24px;\n"])),(function(n){return n.theme.mainFont})),v=t(1674),w=t(4165),j=t(5861),Z=t(4942),C=t(1413),B=c.Z.div(f||(f=(0,l.Z)(["\n  font-family: Inter, sans-serif;\n  width: 267px;\n  max-height: 200px;\n  background-color: ","; \n  margin-top: 10px;\n\n\n\n  input{\n    outline: none;\n  }\n\n  form {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n\n    label {\n      font-size: 12px;\n      color: ",'; \n      font-weight: 500;\n      \n    }\n\n    input[type="text"],\n    select {\n      min-width: 126px;\n      min-height: 42px;\n      margin-top: 8px;\n      padding-top: 10px;\n      padding-bottom: 10px;\n      padding-left: 10px;\n      border: 1px solid ',"; \n      border-radius: 4px;\n      font-size: 14px;\n      color: ","; \n      background-color: ",';  \n      font-weight: 600;\n      -webkit-appearance: none; \n      -moz-appearance: none;\n      appearance: none;\n      background-repeat: no-repeat;\n      background-position: right center;\n      padding-right: 70px; \n      outline: none;\n\n    }\n\n    input[type="text"] {\n    @media (min-width: 767px) {\n      min-width: 340px;\n      min-height: 46px;\n    }}\n\n    select {\n      @media (min-width: 767px) {\n        min-width: 163px;\n        padding: 15px\n      }}\n\n    \n\n    button[type="submit"] {\n      min-width: 135px;\n      height: 42px;\n      padding: 15px auto;\n      border-radius: 8px;\n      background-color: ',";\n      color: ",'; \n      border: none;\n      cursor: pointer;\n      font-size: 14px;\n      margin-top: 10px;\n    }\n\n\n  }\n\n  button[type="button"] {\n    min-width: 118px;\n    height: 42px;\n    padding: 15px auto;\n    border-radius: 8px;\n    background-color: ',";\n    color: ",'; \n    border: none;\n    cursor: pointer;\n    font-size: 14px;\n    margin-top: 10px;\n\n    @media (min-width: 767px) {\n      min-width: 144px;\n      min-height: 48px;\n    }\n\n  }\n\n\n  button[type="submit"].addBtn {\n    @media (min-width: 767px) {\n      min-width: 182px;\n      min-height: 48px;\n    }\n  }\n\n  button[type="button"].cancelBtn{\n    background-color: ','; \n    color: #111111; \n    }\n\n  input[type="checkbox"] {\n    display: none;\n  }\n  \n  input[type="checkbox"] + span::before {\n    content: "";\n    display: inline-block;\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    border: 2px solid #000; \n    background-color: ',"; \n    margin-right: 10px; \n\n  }\n  input.lowCheck:checked + span::before {\n    border: 3px solid #BFDFFF; \n  }\n  \n  input.midCheck:checked + span::before {\n    border: 3px solid #FFDCA0; \n  }\n  \n  input.highCheck:checked + span::before {\n    border: 3px solid #FFA0B3; \n  }\n  \n\n\n  input.lowCheck + span::before {\n    border: 2px solid ","; \n    background-color: ","; \n  }\n  input.midCheck + span::before {\n    border: 2px solid ","; \n    background-color: ",";  \n  }\n  input.highCheck + span::before {\n    border: 2px solid ",";   \n    background-color: ",'; \n    \n  }\n\n  input.lowCheck + span::before,\n  input.midCheck + span::before,\n  input.highCheck + span::before { \n  content: "";\n  display: inline-block;\n  width: 10px; \n  height: 10px; \n  border-radius: 50%;\n  margin-right: 5px; \n  font-weight:600;\n  cursor: pointer;\n\n\n}\n\nspan.Check {\n  font-size: 12px;\n  @media (min-width: 767px) {\n    font-size: 14px;\n  }\n}\n\n\nspan.button-content {\n  display: flex;\n  align-items: center; \n  justify-content: center;\n  gap: 4px;\n  }\n\n\n\n\n'])),(function(n){return n.theme.modalBackground}),(function(n){return n.theme.userNameTextColor}),(function(n){return n.theme.userInputBorderColor}),(function(n){return n.theme.userNameTextColor}),(function(n){return n.theme.modalInputBackground}),(function(n){return n.theme.btnBackgroundColor}),(function(n){return n.theme.modalEditActiveIconColor}),(function(n){return n.theme.btnBackgroundColor}),(function(n){return n.theme.modalEditActiveIconColor}),(function(n){return n.theme.modalCancelBtnTaskBackground}),(function(n){return n.theme.modalEditActiveIconColor}),(function(n){return n.theme.taskLowPriority}),(function(n){return n.theme.taskLowPriority}),(function(n){return n.theme.taskMediumPriority}),(function(n){return n.theme.taskMediumPriority}),(function(n){return n.theme.taskHighPriority}),(function(n){return n.theme.taskHighPriority})),O=c.Z.div(g||(g=(0,l.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 15px;\n\n"]))),S=(0,c.Z)(b)(m||(m=(0,l.Z)(["\nstroke: ",";\nwidth: 20px;\nheight: 20px;\n"])),(function(n){return n.theme.btnTextColor})),E=t(5552),I=t(4690),P=t(184);var z,L=function(n){var e=n.taskToEdit,t=n.onCancel,r=(0,o.useState)({title:"",start:"09:00",end:"14:00",priority:[],date:"",category:"to-do",isEditing:!1}),a=(0,i.Z)(r,2),l=a[0],c=a[1];(0,o.useEffect)((function(){if(e){var n=e.title,t=e.start,r=e.end,i=e.priority,o=e.date,a=e.category;c({title:n,start:t,end:r,priority:i,date:o,category:a,isEditing:!0})}if(!l.date||(s=new Date(l.date),!(0,I.default)(s,new Date))){var d=(new Date).toISOString().split("T")[0];c((function(n){return(0,C.Z)((0,C.Z)({},n),{},{date:d})}))}var s}),[e,l.date]);var d=function(n){var e=n.target,t=e.name,r=e.value;"end"===t&&r<l.start?alert('\u0427\u0430\u0441 "end" \u043d\u0435 \u043c\u043e\u0436\u0435 \u0431\u0443\u0442\u0438 \u043c\u0435\u043d\u0448\u0435 \u0437\u0430 \u0447\u0430\u0441 "start"'):(c((function(n){return(0,C.Z)((0,C.Z)({},n),{},(0,Z.Z)({},t,r))})),"start"===t&&s(r))},s=function(n){var e=n.split(":").map(Number),t=(0,i.Z)(e,2),r=t[0],o=t[1],a=r+1;a>23&&(a=23);var l="".concat(a.toString().padStart(2,"0"),":").concat(o.toString().padStart(2,"0"));c((function(n){return(0,C.Z)((0,C.Z)({},n),{},{end:l})}))},u=function(){var n=(0,j.Z)((0,w.Z)().mark((function n(r){var i;return(0,w.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),p()){n.next=3;break}return n.abrupt("return");case 3:if(i={title:l.title,start:l.start,end:l.end,priority:l.priority,date:l.date,category:l.category},!l.isEditing){n.next=16;break}return n.prev=5,n.next=8,(0,E.xJ)(i,e.id);case 8:t(),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(5),console.error("Error updating task:",n.t0);case 14:n.next=25;break;case 16:return n.prev=16,n.next=19,(0,E.vr)(i);case 19:t(),n.next=25;break;case 22:n.prev=22,n.t1=n.catch(16),console.error("Error creating task:",n.t1);case 25:case"end":return n.stop()}}),n,null,[[5,11],[16,22]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=l.title,e=l.start,t=l.end,r=l.priority,i=l.date,o=l.category;if(!n||n.length>250)return alert("\u041d\u0430\u0437\u0432\u0430 \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u0432\u0456\u0434 1 \u0434\u043e 250 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432"),!1;var a=/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;if(!e.match(a)||!t.match(a)||e>=t)return alert("\u041d\u0435\u043a\u043e\u0440\u0435\u043a\u0442\u043d\u0438\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u0447\u0430\u0441\u0443 \u0430\u0431\u043e \u043f\u043e\u0447\u0430\u0442\u043e\u043a \u0431\u0456\u043b\u044c\u0448\u0435 \u0430\u0431\u043e \u0440\u0456\u0432\u043d\u0438\u0439 \u043a\u0456\u043d\u0446\u044e"),!1;if(!["low","medium","high"].includes(r))return alert("\u041d\u0435\u043a\u043e\u0440\u0435\u043a\u0442\u043d\u0438\u0439 \u043f\u0440\u0456\u043e\u0440\u0438\u0442\u0435\u0442"),!1;return i.match(/^\d{4}-\d{2}-\d{2}$/)?!!["to-do","in-progress","done"].includes(o)||(alert("\u041d\u0435\u043a\u043e\u0440\u0435\u043a\u0442\u043d\u0430 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044f"),!1):(alert("\u041d\u0435\u043a\u043e\u0440\u0435\u043a\u0442\u043d\u0438\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u0434\u0430\u0442\u0438"),!1)};return(0,P.jsx)(B,{children:(0,P.jsxs)("form",{onSubmit:u,children:[(0,P.jsxs)("div",{children:[(0,P.jsx)("label",{children:"Title"}),(0,P.jsx)("input",{placeholder:"Enter text",type:"text",name:"title",value:l.title,onChange:d,required:!0,maxLength:"250"})]}),(0,P.jsxs)(O,{children:[(0,P.jsxs)("div",{children:[(0,P.jsx)("label",{children:"Start"}),(0,P.jsx)("select",{name:"start",value:l.start,onChange:d,required:!0,children:Array.from({length:24},(function(n,e){return(0,P.jsx)("option",{value:"".concat(e.toString().padStart(2,"0"),":00"),children:"".concat(e.toString().padStart(2,"0"),":00")},e)}))})]}),(0,P.jsxs)("div",{children:[(0,P.jsx)("label",{children:"End"}),(0,P.jsx)("select",{name:"end",value:l.end,onChange:d,required:!0,children:Array.from({length:24},(function(n,e){return(0,P.jsx)("option",{value:"".concat(e.toString().padStart(2,"0"),":00"),children:"".concat(e.toString().padStart(2,"0"),":00")},e)}))})]})]}),(0,P.jsx)("div",{children:(0,P.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"17px"},children:[(0,P.jsxs)("label",{children:[(0,P.jsx)("input",{className:"lowCheck",type:"checkbox",name:"priority",value:"low",checked:"low"===l.priority,onChange:function(){return d({target:{name:"priority",value:"low"}})}}),(0,P.jsx)("span",{className:"Check",children:"Low"})]}),(0,P.jsxs)("label",{children:[(0,P.jsx)("input",{className:"midCheck",type:"checkbox",name:"priority",value:"medium",checked:"medium"===l.priority,onChange:function(){return d({target:{name:"priority",value:"medium"}})}}),(0,P.jsx)("span",{className:"Check",children:"Medium"})]}),(0,P.jsxs)("label",{children:[(0,P.jsx)("input",{className:"highCheck",type:"checkbox",name:"priority",value:"high",checked:"high"===l.priority,onChange:function(){return d({target:{name:"priority",value:"high"}})}}),(0,P.jsx)("span",{className:"Check",children:"High"})]})]})}),(0,P.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",gap:"15px",marginTop:"10px"},children:[(0,P.jsx)("button",{className:"addBtn",type:"submit",children:l.isEditing?"Edit":(0,P.jsxs)("span",{className:"button-content",children:[(0,P.jsx)(S,{})," Add"]})}),(0,P.jsx)("button",{className:"cancelBtn",type:"button",onClick:t,children:"Cancel"})]})]})})},T=t(4164),D=function(n){var e=n.isOpen,t=n.onClose,r=(0,o.useState)({maxWidth:"303px",maxHeight:"336px",minWidth:"303px",minHeight:"336px",padding:"28px 15px 28px 15px"}),a=(0,i.Z)(r,2),l=a[0],c=a[1];return(0,o.useEffect)((function(){var n=function(){var n=window.innerWidth>767;c(n?{maxWidth:"396px",maxHeight:"360px",minWidth:"396px",minHeight:"360px",padding:"40px 25px"}:{maxWidth:"303px",maxHeight:"336px",minWidth:"303px",minHeight:"336px",padding:"28px 15px 28px 15px"})};return window.addEventListener("resize",n),n(),function(){window.removeEventListener("resize",n)}}),[]),e&&T.createPortal((0,P.jsx)(v.Z,{customStyles:l,isOpen:e,onClose:t,children:(0,P.jsx)(L,{onCancel:t})}),document.getElementById("modal-root"))},N=function(){var n=(0,o.useState)(!1),e=(0,i.Z)(n,2),t=e[0],r=e[1];return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(k,{onClick:function(){r(!0)},children:[(0,P.jsx)(y,{}),"Add task"]}),t&&(0,P.jsx)(D,{isOpen:t,onClose:function(){r(!1)}})]})},F=["title","titleId"];function H(){return H=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},H.apply(this,arguments)}function M(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function W(n,e){var t=n.title,r=n.titleId,i=M(n,F);return o.createElement("svg",H({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},i),t?o.createElement("title",{id:r},t):null,z||(z=o.createElement("path",{d:"M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}var A,_,R,G,q,$,J,V,U,X,K,Q,Y,nn,en,tn=o.forwardRef(W),rn=(t.p,t(821)),on=c.Z.button(A||(A=(0,l.Z)(["\n    background-color: transparent;\n    border: none;\n    padding: 0;\n    cursor: pointer;\n"]))),an=(0,c.Z)(tn)(_||(_=(0,l.Z)(["\n    stroke: ",";\n    width: 22px;\n    height: 22px;\n    cursor: pointer;\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    &:hover, &:focus {\n            stroke: ",";\n    }\n    ","\n"])),(function(n){return n.theme.mainFont}),(function(n){return n.theme.btnHoverBackground}),(0,rn.B)("tablet","")(R||(R=(0,l.Z)(["\n        width: 24px;\n        height: 24px;\n    "])))),ln=c.Z.p(G||(G=(0,l.Z)(["\n    font-size: 18px;\n    font-weight: 700;\n    line-height: 1.11; \n    ","\n"])),(0,rn.B)("tablet","")(q||(q=(0,l.Z)(["\n        font-size: 20px;\n        line-height: 1.2;\n    "])))),cn=c.Z.div($||($=(0,l.Z)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    margin-bottom: 24px;\n    ","\n"])),(0,rn.B)("tablet","")(J||(J=(0,l.Z)(["\n        margin-bottom: 28px;\n    "])))),dn=function(n){var e=n.groupName,t=(0,o.useState)(!1),r=(0,i.Z)(t,2),a=r[0],l=r[1];return(0,P.jsxs)(cn,{children:[(0,P.jsx)(ln,{children:e}),(0,P.jsx)(on,{onClick:function(){return l(!0)},children:(0,P.jsx)(an,{})}),a&&(0,P.jsx)(D,{isOpen:a,onClose:function(){return l(!1)}})]})},sn=c.Z.li(V||(V=(0,l.Z)(["\n    border-radius: 8px;\n    padding: 14px 13px 18px;\n    background-color: ",";\n    border: 1px solid ",";\n    display: flex;\n    flex-direction: column;\n    gap: 28px;\n"])),(function(n){return n.theme.taskBackground}),(function(n){return n.theme.taskBorderColor})),un=c.Z.p(U||(U=(0,l.Z)(["\ntext-overflow: ellipsis;\noverflow: hidden;\nwhite-space: nowrap;\nfont-size: 14px;\nfont-weight: 500;\nline-height: 1.28;\n"]))),pn=c.Z.img(X||(X=(0,l.Z)(["\nborder: 1.8px solid ",";\nborder-radius: 50%;\nwidth: 32px;\nheight: 32px;\nobject-fit: cover;\n"])),(function(n){return n.theme.userAvatarBorder})),hn=c.Z.p(K||(K=(0,l.Z)(["\ntext-transform: capitalize;\ncolor: ",";\nbackground-color: ",";\nfont-size: 10px;\nfont-weight: 600;\nline-height: 1.2;\npadding: 4px 12px;\nborder-radius: 4px;\n"])),(function(n){return n.theme.taskPriorityTextColor}),(function(n){switch(n.priority){case"low":return n.theme.taskLowPriority;case"medium":return n.theme.taskMediumPriority;case"high":return n.theme.taskHighPriority;default:return n.theme.mainFont}})),xn=c.Z.div(Q||(Q=(0,l.Z)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: end;\n"]))),fn=c.Z.div(Y||(Y=(0,l.Z)(["\ndisplay: flex;\nflex-direction: row;\nalign-items: end;\ngap: 8px;\n"]))),gn=t(2554),mn=t(9962),bn=t(4031),kn=["title","titleId"];function yn(){return yn=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},yn.apply(this,arguments)}function vn(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function wn(n,e){var t=n.title,r=n.titleId,i=vn(n,kn);return o.createElement("svg",yn({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},i),t?o.createElement("title",{id:r},t):null,nn||(nn=o.createElement("g",{clipPath:"url(#clip0_3288_961)"},o.createElement("path",{d:"M2.22534 4.66665C3.37804 2.67398 5.53252 1.33331 8.00013 1.33331C11.682 1.33331 14.6668 4.31808 14.6668 7.99998C14.6668 11.6819 11.682 14.6666 8.00013 14.6666C5.53252 14.6666 3.37804 13.326 2.22534 11.3333",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M8 10.6666L10.6667 7.99998L8 5.33331",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M1.33325 8L10.6666 8",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}))),en||(en=o.createElement("defs",null,o.createElement("clipPath",{id:"clip0_3288_961"},o.createElement("rect",{width:16,height:16,fill:"white"})))))}var jn,Zn,Cn,Bn,On,Sn,En,In,Pn,zn,Ln,Tn,Dn,Nn,Fn,Hn,Mn,Wn,An,_n,Rn,Gn,qn,$n,Jn,Vn,Un,Xn,Kn,Qn,Yn=o.forwardRef(wn),ne=(t.p,t(2333)),ee=c.Z.div(jn||(jn=(0,l.Z)(["\n    position: relative;\n"]))),te=c.Z.ul(Zn||(Zn=(0,l.Z)(["\ndisplay: flex;\nflex-direction: row;\nalign-items: end;\ngap: 10px;\nposition: relative;\n"]))),re=c.Z.div(Cn||(Cn=(0,l.Z)(["\n    background-color: transparent;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n"]))),ie=(0,c.Z)(ne.E.div)(Bn||(Bn=(0,l.Z)(["\n    background-color: ",";\n    border-radius: 8px;\n    padding: 14px;\n    position: absolute;\n    top: 26px;\n    left: 50%;\n    z-index: 99;\n    transform: translateX(-50%);\n    min-width: 115px;\n    box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.10);\n    border: 1px solid ",";\n    ","\n"])),(function(n){return n.theme.taskBackground}),(function(n){return n.theme.toolBorder}),(0,rn.B)("tablet","")(On||(On=(0,l.Z)(["\n        padding: 20px 24px;\n        min-width: 147px;\n    "])))),oe=c.Z.ul(Sn||(Sn=(0,l.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 14px;\n"]))),ae=c.Z.li(En||(En=(0,l.Z)(["\n    color: ",";\nfont-size: 12px;\nfont-weight: 500;\nline-height: 1.16;\ndisplay: flex;\nflex-direction: row;\nalign-items: center;\njustify-content: space-between;\ncursor: pointer;\ntransition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n&:hover, &:focus, &:active {\n    color: ",";\n    & > svg {\n        stroke: ",";\n    }\n}\n"])),(function(n){return n.theme.calendarTextColor}),(function(n){return n.theme.btnBackgroundColor}),(function(n){return n.theme.btnBackgroundColor})),le=function(n){var e=n.theme;return(0,gn.iv)(In||(In=(0,l.Z)(["\ntransition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\ncursor: pointer;\nstroke: ",";\nwidth: 16px;\nheight: 16px;\n"])),e.mainFont)},ce=(0,c.Z)(mn.r)(Pn||(Pn=(0,l.Z)(["\n    ","\n"])),le),de=(0,c.Z)(bn.r)(zn||(zn=(0,l.Z)(["\n    ","\n"])),le),se=(0,c.Z)(Yn)(Ln||(Ln=(0,l.Z)(["\n    ","\n"])),le),ue=t(6382),pe=t(3791),he=t(9434),xe=t(8427),fe=t(5218),ge={initial:{opacity:0},isOn:{opacity:1,transition:{type:"spring",stiffness:100}},exit:{opacity:0}},me=function(n){var e=n.currentGroup,t=n.id,r=(0,he.I0)(),a=(0,o.useState)(!1),l=(0,i.Z)(a,2),c=l[0],d=l[1],s=(0,o.useState)(!1),u=(0,i.Z)(s,2),p=u[0],h=u[1],x=["To do","In progress","Done"],f=x.indexOf(e);x.splice(f,1);return(0,P.jsxs)(ee,{children:[(0,P.jsxs)(te,{children:[(0,P.jsx)("li",{onClick:function(){return d((function(n){return!n}))},children:(0,P.jsx)(se,{})},"change priority"),(0,P.jsx)("li",{onClick:function(){return h(!0)},children:(0,P.jsx)(de,{})},"edit"),(0,P.jsx)("li",{onClick:function(){r((0,xe.CS)(t)),fe.ZP.success("Task deleted successfully")},children:(0,P.jsx)(ce,{})},"delete"),p&&(0,P.jsx)(D,{isOpen:p,onClose:function(){return h(!1)},id:t})]}),(0,P.jsx)(pe.M,{children:c&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(re,{onClick:function(n){n.target===n.currentTarget&&d(!1)}}),(0,P.jsx)(ie,{initial:"initial",animate:"isOn",exit:"exit",variants:ge,children:(0,P.jsx)(oe,{children:x.map((function(n){return(0,P.jsxs)(ae,{onClick:function(){return function(n){var e={category:n.split(" ").join("-").toLowerCase()};r((0,xe.IP)({task:e,id:t}))}(n)},children:[n,(0,P.jsx)(se,{})]},(0,ue.x0)())}))})})]})})]})},be=t(2286),ke=function(n){var e=n.id,t=n.text,r=n.priority,i=n.currentGroup,o=(0,he.v9)(be.SL);return(0,P.jsxs)(sn,{children:[(0,P.jsx)(un,{children:t}),(0,P.jsxs)(xn,{children:[(0,P.jsxs)(fn,{children:[(0,P.jsx)(pn,{src:o}),(0,P.jsx)(hn,{priority:r,children:r})]}),(0,P.jsx)(me,{currentGroup:i,id:e})]})]})},ye=c.Z.ul(Tn||(Tn=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 14px;\n  overflow-y: ",";\n\n  height: ",";\n  margin-bottom: 10px;\n  padding-right: 6px;\n\n  &::-webkit-scrollbar {\n    background-color: ",";\n    border-radius: 12px;\n    width: 6px;\n  }\n  &::-webkit-scrollbar-thumb {\n    background-color: ",";\n    width: 6px;\n    border-radius: 12px;\n  }\n"])),(function(n){return n.tasksLength>2&&"auto"}),(function(n){return n.tasksLength>2?window.innerWidth>767?"40vh":"30vh":"fit-content"}),(function(n){return n.theme.taskScrollBarBackground}),(function(n){return n.theme.taskScrollbarColor})),ve=function(n){var e=n.tasks,t=n.groupName;return(0,P.jsx)(ye,{tasksLength:e.length,children:e.map((function(n){return(0,P.jsx)(ke,{id:n._id,currentGroup:t,priority:n.priority,text:n.title},n._id)}))})},we=c.Z.div(Dn||(Dn=(0,l.Z)(["\n    display: flex;\n    flex-direction: column;\n    min-width: 100%;\n    background-color: ",";\n    padding: 18px;\n    border: 1px solid ",";\n    border-radius: 8px;\n    height: fit-content;\n    ","\n    ","\n"])),(function(n){return n.theme.calendarBackground}),(function(n){return n.theme.calendarBorderColor}),(0,rn.B)("tablet","")(Nn||(Nn=(0,l.Z)(["\n        min-width: calc(50% - 8px);\n    "]))),(0,rn.B)("desktop","")(Fn||(Fn=(0,l.Z)(["\n        min-width: calc((100% - 2 * 27px) / 3)\n    "])))),je=function(n){var e=n.groupName,t=n.tasks;return(0,P.jsxs)(we,{children:[(0,P.jsx)(dn,{groupName:e}),t.length>0&&(0,P.jsx)(ve,{tasks:t,groupName:e}),(0,P.jsx)(N,{})]})},Ze=c.Z.ul(Hn||(Hn=(0,l.Z)(["\n    display: flex;\n    overflow-x: scroll;\n    gap: 16px;\n    flex-direction: row;\n    padding-bottom: 34px;\n    &::-webkit-scrollbar {\n        background-color: ",";\n        border-radius: 12px;\n        height: 12px;\n        ","\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: ",";\n        height: 12px;\n        border-radius: 12px;\n        ","\n    }\n    ","\n"])),(function(n){return n.theme.taskScrollBarBackground}),(0,rn.B)("tablet","")(Mn||(Mn=(0,l.Z)(["\n            height: 14px;\n        "]))),(function(n){return n.theme.taskScrollbarColor}),(0,rn.B)("tablet","")(Wn||(Wn=(0,l.Z)(["\n            height: 14px;\n        "]))),(0,rn.B)("desktop","")(An||(An=(0,l.Z)(["\n        gap: 27px;\n        overflow: auto;\n        padding-bottom: 0px;\n    "])))),Ce=function(){var n=(0,he.v9)(be.RO),e=n.todo,t=n.inProgress,r=n.done;return(0,P.jsxs)(Ze,{children:[(0,P.jsx)(je,{tasks:e,groupName:"To do"},"to do"),(0,P.jsx)(je,{tasks:t,groupName:"In progress"},"in progress"),(0,P.jsx)(je,{tasks:r,groupName:"Done"},"done")]})},Be=t(3433),Oe=t(3629),Se=t(1951),Ee=c.Z.div(_n||(_n=(0,l.Z)(["\n  text-align: center;\n  padding-top: 14px;\n  padding-bottom: 14px;\n  list-style: none;\n  border: 1px solid ",";\n  border-radius: 8px;\n  background-color: ",";\n  text-transform: uppercase;\n  color: ",";\n  margin-bottom: 14px;\n\n  ","\n  ","\n"])),(function(n){return n.theme.calendarBorder}),(function(n){return n.theme.calendarBackground}),(function(n){return n.theme.calendarTextColor}),(0,rn.B)("tablet","")(Rn||(Rn=(0,l.Z)(["\n    margin-bottom: 18px;\n        padding-top: 10px;\n    padding-bottom: 10px;\n    "]))),(0,rn.B)("desktop","")(Gn||(Gn=(0,l.Z)(["\n    margin-bottom: 16px;\n    "])))),Ie=c.Z.ul(qn||(qn=(0,l.Z)(["\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  grid-gap: 1px;\n  &:not(:last-child) {\n    margin-bottom: 6px;\n    ","\n  }\n"])),(0,rn.B)("tablet","")($n||($n=(0,l.Z)(["\n    margin-bottom: 4px;\n    "])))),Pe=c.Z.li(Jn||(Jn=(0,l.Z)(["\n  font-weight: 600;\n  font-family: 'Inter', sans-serif;\n  font-size: 16px;\n  line-height: 1.12;\n  ","\n"])),(0,rn.B)("tablet","")(Vn||(Vn=(0,l.Z)(["\n  font-size: 14px;\n  line-height: 1.28;\n    "])))),ze=c.Z.li(Un||(Un=(0,l.Z)(["\n  font-weight: 700;\n  font-family: 'Inter', sans-serif;\n  font-size: 12px;\n  line-height: 1.16;\n  background-color: ",";\n  color: ",";\n  padding: 4px 6px;\n  border-radius: 8px;\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    background-color: ",";\n  }\n\n  ","\n"])),(function(n){return n.isCurrentDay?n.theme.btnBackgroundColor:n.theme.calendarBackground}),(function(n){return n.isCurrentDay?n.theme.btnTextColor:n.theme.calendarTextColor}),(function(n){return n.isCurrentDay?n.theme.btnBackgroundColor:n.theme.calendarBorder}),(0,rn.B)("tablet","")(Xn||(Xn=(0,l.Z)(["\n  padding: 4px 8px;\n  font-size: 16px;\n  line-height: 1.12;\n    "])))),Le=c.Z.div(Kn||(Kn=(0,l.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),Te=t(9778),De=function(n){var e=n.today,t=n.pickHandler,r=(0,a.s0)(),i=(0,he.I0)(),o=(0,Oe.default)(e,{weekStartsOn:1,locale:"en-US"}),l=(0,Be.Z)(Array(7)).map((function(){var n=new Date(o);return o.setDate(o.getDate()+1),n})),c=function(n){var e=Number(n.target.textContent),o=new Date;o.setDate(e),r("/calendar/day/".concat(e)),i((0,Te.$r)(o.getDate())),t(o)};return(0,P.jsxs)(Ee,{children:[(0,P.jsx)(Ie,{children:window.innerWidth<767?["Mo","Tu","We","Th","Fr","Sa","Su"].map((function(n,e){return(0,P.jsx)(Pe,{children:n},e)})):["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((function(n,e){return(0,P.jsx)(Pe,{children:n},e)}))}),(0,P.jsx)(Ie,{children:l.map((function(n){return(0,P.jsx)(Le,{onClick:c,children:(0,P.jsx)(ze,{isCurrentDay:(t=n,(0,I.default)(t,e)),children:(0,Se.default)(n,"d")})},(0,Se.default)(n,"ddMMyyyy"));var t}))})]})},Ne=c.Z.div(Qn||(Qn=(0,l.Z)(["\n  width: 100%;\n"]))),Fe=function(){var n=(0,a.bx)(),e=(0,i.Z)(n,5),t=e[0],r=e[1],l=e[2],c=e[3],d=e[4],s=(0,he.I0)(),u=(0,he.v9)(be.J0);return(0,o.useEffect)((function(){c("day"),s((0,xe.hy)("day"))}),[c,s,u]),(0,P.jsxs)(Ne,{children:[(0,P.jsx)(De,{startOfWeekDate:t,daysToAdd:r,today:l,changePeriod:c,pickHandler:d}),(0,P.jsx)(Ce,{})]})}},3629:function(n,e,t){t.r(e),t.d(e,{default:function(){return l}});var r=t(8527),i=t(9297),o=t(4522),a=t(4408);function l(n,e){var t,l,c,d,s,u,p,h;(0,o.Z)(1,arguments);var x=(0,a.j)(),f=(0,i.Z)(null!==(t=null!==(l=null!==(c=null!==(d=null===e||void 0===e?void 0:e.weekStartsOn)&&void 0!==d?d:null===e||void 0===e||null===(s=e.locale)||void 0===s||null===(u=s.options)||void 0===u?void 0:u.weekStartsOn)&&void 0!==c?c:x.weekStartsOn)&&void 0!==l?l:null===(p=x.locale)||void 0===p||null===(h=p.options)||void 0===h?void 0:h.weekStartsOn)&&void 0!==t?t:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var g=(0,r.default)(n),m=g.getDay(),b=(m<f?7:0)+m-f;return g.setDate(g.getDate()-b),g.setHours(0,0,0,0),g}}}]);
//# sourceMappingURL=215.0c76d896.chunk.js.map