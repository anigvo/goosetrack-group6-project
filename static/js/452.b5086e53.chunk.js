"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[452],{8191:function(e,t,n){n.r(t),n.d(t,{default:function(){return he}});var r,o=n(9439),i=n(2791),a=n(7689),l=n(9513),d=n.n(l),c=(n(8639),["title","titleId"]);function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function h(e,t){var n=e.title,o=e.titleId,a=s(e,c);return i.createElement("svg",u({width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":o},a),n?i.createElement("title",{id:o},n):null,r||(r=i.createElement("g",{strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"},i.createElement("path",{d:"M11.25 13.5L6.75 9L11.25 4.5"}))))}var f,p=i.forwardRef(h),g=(n.p,["title","titleId"]);function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function y(e,t){var n=e.title,r=e.titleId,o=b(e,g);return i.createElement("svg",x({width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},o),n?i.createElement("title",{id:r},n):null,f||(f=i.createElement("g",{strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"},i.createElement("path",{d:"M6.75 13.5L11.25 9L6.75 4.5"}))))}var m,v,j,w,D,Z,k=i.forwardRef(y),O=(n.p,n(168)),M=n(6088),S=n(821),C=M.Z.button(m||(m=(0,O.Z)(["\n  &:hover,\n  &:focus {\n    background-color: ",";\n  }\n  text-transform: uppercase;\n  width: 157px;\n  height: 30px;\n  background-color: ",";\n  padding: 6px 12px;\n  border: 0;\n  border-radius: 8px;\n  color: ",";\n  font-size: 14px;\n  line-height: 1.28;\n  font-weight: 700;\n  cursor: pointer;\n  text-align: center;\n  font-family: 'Inter', sans-serif;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  ","\n"])),(function(e){return e.theme.btnHoverBackground}),(function(e){return e.theme.btnBackgroundColor}),(function(e){return e.theme.btnTextColor}),(0,S.B)("tablet","")(v||(v=(0,O.Z)(["\n  margin-right: 8px;\n        width: 170px;\n        height: 34px;\n        font-size: 16px;\n        line-height: 1.12;\n        padding: 8px 12px;\n    "])))),B=M.Z.button(j||(j=(0,O.Z)(["\n  background-color: transparent;\n  border: 0;\n  padding: 0;\n  cursor: ",";\n  & > svg {\n    width: 16px;\n    height: 16px;\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    stroke: ",";\n    ","\n  }\n"])),(function(e){return e.disabledStyle?"auto":"pointer"}),(function(e){return e.disabledStyle?e.theme.btnCalendarArrowDisabled:e.theme.btnCalendarArrowEnabled}),(0,S.B)("tablet","")(w||(w=(0,O.Z)(["\n    width: 18px;\n    height: 18px;\n    "])))),T=M.Z.div(D||(D=(0,O.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 18px;\n  padding-right: 18px;\n  padding-top: 15px;\n"]))),F=M.Z.p(Z||(Z=(0,O.Z)(["\n  color: ",";\n  font-size: 24px;\n  line-height: 1.16;\n  font-family: 'Inter', sans-serif;\n  font-weight: 600;\n"])),(function(e){return e.theme.btnTextColor})),E=n(736),L=n(184);(0,l.registerLocale)("en-GB",E.Z);var Y,z,H,I,P,G,A,W,N,_,R,U=function(e){var t=e.selectedDate,n=e.setSelectedDate,r=e.filterMonth,a=e.setFilterMonth,l=e.filterYear,c=e.setFilterYear,u=e.handlePrevMonth,s=e.handleNextMonth,h=e.filterDay,f=e.setFilterDay,g=e.periodType,x=e.handlePrevDay,b=e.handleNextDay,y=(0,i.useState)(t),m=(0,o.Z)(y,2),v=m[0],j=m[1];console.log(g),console.log(typeof g),(0,i.useEffect)((function(){j(t)}),[t]);var w=function(e){n(e)},D=function(e){var t=r,n=l,o=e.getMonth(),i=e.getFullYear();return o===t&&i===n},Z=function(e){var t=e.date,n=e.decreaseMonth,r=e.increaseMonth,o=(new Date).getMonth(),i=t.getMonth(),a=(new Date).getFullYear(),l=t.getFullYear(),d=(new Date).getDate(),c=t.getDate();return"month"===g?(0,L.jsxs)(T,{children:[(0,L.jsx)(B,{onClick:function(){n(),u()},disabled:i===o&&l===a,disabledStyle:i===o&&l===a,children:(0,L.jsx)(p,{})}),(0,L.jsx)(F,{children:v.toLocaleDateString("en-GB",{month:"long",year:"numeric"})}),(0,L.jsx)(B,{onClick:function(){r(),s()},children:(0,L.jsx)(k,{})})]}):(0,L.jsxs)(T,{children:[(0,L.jsx)(B,{onClick:function(){x()},disabled:c===d,disabledStyle:c===d,children:(0,L.jsx)(p,{})}),(0,L.jsx)(F,{children:v.toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"})}),(0,L.jsx)(B,{onClick:function(){b()},children:(0,L.jsx)(k,{})})]})};return"month"===g?(0,L.jsx)(d(),{selected:v,onChange:w,onMonthChange:function(e){var t=e.getMonth(),n=e.getFullYear();t===r&&n===l||(a(t),c(n),j(e))},locale:"en-GB",customInput:(0,L.jsx)(C,{type:"button",children:v.toLocaleDateString("en-GB",{month:"long",year:"numeric"})}),filterDate:D,renderCustomHeader:Z}):(0,L.jsx)(d(),{selected:v,onChange:w,onDayChange:function(e){var t=e.getDate();t!==h&&(f(t),j(e))},locale:"en-GB",customInput:(0,L.jsx)(C,{type:"button",children:v.toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"})}),filterDate:D,renderCustomHeader:Z})},q=M.Z.div(Y||(Y=(0,O.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 18px;\n  ","\n"])),(0,S.B)("tablet","")(z||(z=(0,O.Z)(["\n        justify-content: baseline;\n        margin-bottom: 0;\n    "])))),J=M.Z.div(H||(H=(0,O.Z)(["\n  display: flex;\n"]))),K=M.Z.button(I||(I=(0,O.Z)(["\n  & > svg {\n    width: 16px;\n    height: 16px;\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    stroke: ",";\n    ","\n  }\n  &:hover,\n  &:focus {\n    background-color: ",";\n  }\n  width: 36px;\n  height: 30px;\n  cursor: ",";\n  background-color: ",";\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  border: 1px solid ",";\n  border-bottom-left-radius: ",";\n  border-top-left-radius: ",";\n  border-bottom-right-radius: ",";\n  border-top-right-radius: ",";\n  ","\n"])),(function(e){return e.disabledStyle?e.theme.arrowDisabledColor:e.theme.arrowEnabledColor}),(0,S.B)("tablet","")(P||(P=(0,O.Z)(["\n    width: 18px;\n    height: 18px;\n    "]))),(function(e){return!e.disabledStyle&&e.theme.calendarBorderColor}),(function(e){return e.disabledStyle?"auto":"pointer"}),(function(e){return e.theme.calendarBackground}),(function(e){return e.theme.arrowDisabledColor}),(function(e){return"left"===e.direction?"8px":"0px"}),(function(e){return"left"===e.direction?"8px":"0px"}),(function(e){return"right"===e.direction?"8px":"0px"}),(function(e){return"right"===e.direction?"8px":"0px"}),(0,S.B)("tablet","")(G||(G=(0,O.Z)(["\n    width: 38px;\n    height: 34px;\n    "])))),Q=function(e){var t=e.prevHandler,n=e.nextHandler,r=e.today,a=e.periodType,l=(0,i.useState)(new Date(r)),d=(0,o.Z)(l,2),c=d[0],u=d[1],s=(0,i.useState)(c.getDay()),h=(0,o.Z)(s,2),f=h[0],g=h[1],x=(0,i.useState)(c.getMonth()),b=(0,o.Z)(x,2),y=b[0],m=b[1],v=(0,i.useState)(c.getFullYear()),j=(0,o.Z)(v,2),w=j[0],D=j[1],Z=(new Date).getDay(),O=(new Date).getMonth(),M=(new Date).getFullYear(),S=function(){var e=new Date(c);e.setMonth(e.getMonth()-1),u(e),m(e.getMonth()),D(e.getFullYear()),t()},C=function(){var e=new Date(c);e.setMonth(e.getMonth()+1),u(e),m(e.getMonth()),D(e.getFullYear()),n()},B=function(){var e=new Date(c);e.setDate(e.getDate()-1),u(e),m(e.getMonth()),t()},T=function(){var e=new Date(c);e.setDate(e.getDate()+1),u(e),m(e.getMonth()),n()};return(0,L.jsxs)(q,{children:[(0,L.jsx)(U,{selectedDate:c,setSelectedDate:u,filterMonth:y,setFilterMonth:m,filterYear:w,setFilterYear:D,handlePrevMonth:S,handleNextMonth:C,filterDay:f,setFilterDay:g,currentDay:Z,handlePrevDay:B,handleNextDay:T,periodType:a}),(0,L.jsxs)(J,{children:["month"===a?(0,L.jsx)(K,{direction:"left",type:"button",onClick:S,disabled:y===O&&w===M,disabledStyle:y===O&&w===M,children:(0,L.jsx)(p,{})}):(0,L.jsx)(K,{direction:"left",type:"button",onClick:B,disabled:f===Z,disabledStyle:f===Z,children:(0,L.jsx)(p,{})}),"month"===a?(0,L.jsx)(K,{direction:"right",type:"button",onClick:C,children:(0,L.jsx)(k,{})}):(0,L.jsx)(K,{direction:"right",type:"button",onClick:T,children:(0,L.jsx)(k,{})})]})]})},V=n(1087),X=M.Z.div(A||(A=(0,O.Z)(["\n  display: flex;\n  \n"]))),$=(0,M.Z)(V.OL)(W||(W=(0,O.Z)(["\n  &:hover,\n  &:focus {\n    background-color: ",";\n    color: ",";\n  }\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 76px;\n  height: 34px;\n  cursor: pointer;\n  font-size: 14px;\n  line-height: 1.28;\n  text-align: center;\n  font-weight: 500;\n  border: none;\n  font-family: 'Inter', sans-serif;\n  cursor: pointer;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  color: ",";\n  border: 1px solid ",";\n  background-color: ",";\n  border: 0;\n  border-left: ",";\n  border-right: ",";\n  border-bottom-left-radius: ",";\n  border-top-left-radius: ",";\n  border-bottom-right-radius: ",";\n  border-top-right-radius: ",";\n  ","\n"])),(function(e){return e.theme.periodTypeBackgroundOutline}),(function(e){return e.theme.periodTypeTextOutline}),(function(e){return e.theme.periodTypeText}),(function(e){return e.theme.arrowDisabledColor}),(function(e){return e.theme.periodTypeBackground}),(function(e){return"right"===e.direction?"1px solid ".concat(e.theme.periodTypeBorderline):"0px"}),(function(e){return"left"===e.direction?"1px solid ".concat(e.theme.periodTypeBorderline):"0px"}),(function(e){return"left"===e.direction?"8px":"0px"}),(function(e){return"left"===e.direction?"8px":"0px"}),(function(e){return"right"===e.direction?"8px":"0px"}),(function(e){return"right"===e.direction?"8px":"0px"}),(0,S.B)("tablet","")(N||(N=(0,O.Z)(["\n        font-size: 16px;\n        line-height: 1.12;\n    "])))),ee=function(e){var t=e.currentDateMonth,n="month/".concat(t);return(0,L.jsxs)(X,{children:[(0,L.jsx)($,{direction:"left",to:n,children:"Month"}),(0,L.jsx)($,{direction:"right",to:"day/:currentDay",children:"Day"})]})},te=M.Z.div(_||(_=(0,O.Z)(["\nmargin-bottom: 24px;\n  ","\n"])),(0,S.B)("tablet","")(R||(R=(0,O.Z)(["\n        margin-bottom: 32px;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        font-size: 16px;\n        line-height: 1.12;\n        margin-bottom: 32px;\n    "])))),ne=function(e){var t=e.prevHandler,n=e.nextHandler,r=e.today,o=e.currentDateMonth,i=e.periodType;return(0,L.jsxs)(te,{children:[(0,L.jsx)(Q,{prevHandler:t,nextHandler:n,today:r,periodType:i}),(0,L.jsx)(ee,{currentDateMonth:o})]})},re=n(2124),oe=n(5719),ie=n(4888),ae=n(3629),le=n(2122),de=n(9911),ce=n(9522),ue=n(8360),se=n(1104),he=function(e){var t=e.updatePageName;(0,i.useEffect)((function(){t("Calendar")}),[t]);var n=(0,a.UO)().currentDate,r=(0,i.useState)("month"),l=(0,o.Z)(r,2),d=l[0],c=l[1],u=(0,i.useState)(n),s=(0,o.Z)(u,1)[0],h=(0,i.useState)((0,re.default)(new Date,s)),f=(0,o.Z)(h,2),p=f[0],g=f[1];console.log(p);var x=function(){var e=(0,oe.default)(p),t=(0,ie.default)(p),n=(0,ae.default)(e,{weekStartsOn:1}),r=35;return 28===(0,le.Z)(p)||29===(0,le.Z)(p)?(0,de.Z)(e)?{startOfWeekDate:n,daysToAdd:28}:((0,le.Z)(p),{startOfWeekDate:n,daysToAdd:35}):((0,ce.Z)(t)&&(0,de.Z)(e)?r=35:((0,ue.Z)(e)||(0,de.Z)(t)||(0,ce.Z)(t))&&(r=42),{startOfWeekDate:n,daysToAdd:r})}(),b=x.startOfWeekDate,y=x.daysToAdd;return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(ne,{prevHandler:function(){g((function(e){return(0,se.default)(e,-1)}))},nextHandler:function(){g((function(e){return(0,se.default)(e,1)}))},today:p,currentDateMonth:s,periodType:d}),(0,L.jsx)(i.Suspense,{children:(0,L.jsx)(a.j3,{context:[b,y,p,c]})})]})}}}]);
//# sourceMappingURL=452.b5086e53.chunk.js.map