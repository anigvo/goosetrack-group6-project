"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[273],{9163:function(e,n,t){t.d(n,{g:function(){return U}});var r,o=t(9439),i=t(2791),a=t(9513),l=t.n(a),c=(t(8639),["title","titleId"]);function d(){return d=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},d.apply(this,arguments)}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function s(e,n){var t=e.title,o=e.titleId,a=u(e,c);return i.createElement("svg",d({width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":o},a),t?i.createElement("title",{id:o},t):null,r||(r=i.createElement("g",{strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"},i.createElement("path",{d:"M11.25 13.5L6.75 9L11.25 4.5"}))))}var h,f=i.forwardRef(s),p=(t.p,["title","titleId"]);function g(){return g=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},g.apply(this,arguments)}function x(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function b(e,n){var t=e.title,r=e.titleId,o=x(e,p);return i.createElement("svg",g({width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":r},o),t?i.createElement("title",{id:r},t):null,h||(h=i.createElement("g",{strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"},i.createElement("path",{d:"M6.75 13.5L11.25 9L6.75 4.5"}))))}var m,y,v,w,D,j,k,Z=i.forwardRef(b),M=(t.p,t(168)),O=t(6088),S=t(821),C=O.Z.button(m||(m=(0,M.Z)(["\n  &:hover,\n  &:focus {\n    background-color: ",";\n  }\n  text-transform: uppercase;\n  width: 157px;\n  height: 30px;\n  background-color: ",";\n  padding: 6px 12px;\n  border: 0;\n  border-radius: 8px;\n  color: ",";\n  font-size: 14px;\n  line-height: 1.28;\n  font-weight: 700;\n  cursor: pointer;\n  text-align: center;\n  font-family: 'Inter', sans-serif;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  ","\n"])),(function(e){return e.theme.btnHoverBackground}),(function(e){return e.theme.btnBackgroundColor}),(function(e){return e.theme.btnTextColor}),(0,S.B)("tablet","")(y||(y=(0,M.Z)(["\n  margin-right: 8px;\n        width: 170px;\n        height: 34px;\n        font-size: 16px;\n        line-height: 1.12;\n        padding: 8px 12px;\n    "])))),B=O.Z.button(v||(v=(0,M.Z)(["\n  background-color: transparent;\n  border: 0;\n  padding: 0;\n  cursor: ",";\n  & > svg {\n    width: 16px;\n    height: 16px;\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    stroke: ",";\n    ","\n  }\n"])),(function(e){return e.disabledStyle?"auto":"pointer"}),(function(e){return e.disabledStyle?e.theme.btnCalendarArrowDisabled:e.theme.btnCalendarArrowEnabled}),(0,S.B)("tablet","")(w||(w=(0,M.Z)(["\n    width: 18px;\n    height: 18px;\n    "])))),T=O.Z.div(D||(D=(0,M.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 18px;\n  padding-right: 18px;\n  padding-top: 15px;\n"]))),F=O.Z.p(j||(j=(0,M.Z)(["\n  color: ",";\n\n  font-size: 20px;\n  line-height: 1.2;\n  font-family: 'Inter', sans-serif;\n  font-weight: 600;\n  ","\n"])),(function(e){return e.theme.btnTextColor}),(0,S.B)("tablet","")(k||(k=(0,M.Z)(["\n font-size: 24px;\n  line-height: 1.16;\n    "])))),P=t(736),H=t(7689),z=t(184);(0,a.registerLocale)("en-GB",P.Z);var E,Y,L,I,W,A,G,_,N=function(e){var n=e.selectedDate,t=e.setSelectedDate,r=e.filterMonth,o=e.setFilterMonth,i=e.filterYear,a=e.setFilterYear,c=e.handlePrevMonth,d=e.handleNextMonth,u=e.changePeriod,s=e.pickHandler,h=(0,H.s0)(),p=function(e){t(e)};return(0,z.jsx)(l(),{selected:n,onChange:p,onMonthChange:function(e){var n=e.getMonth(),l=e.getFullYear();n===r&&l===i||(o(n),a(l),t(e))},onSelect:function(e){p(e);var n=e,r=n.getDate();h("/calendar/day/".concat(r)),t(n),u("day"),s(n)},closeOnScroll:!0,locale:"en-GB",filterDate:function(e){var n=r,t=i,o=e.getMonth(),a=e.getFullYear();return o===n&&a===t},renderCustomHeader:function(e){var t=e.date,r=e.decreaseMonth,o=e.increaseMonth,i=(new Date).getMonth(),a=t.getMonth(),l=(new Date).getFullYear(),u=t.getFullYear();return(0,z.jsxs)(T,{children:[(0,z.jsx)(B,{onClick:function(){r(),c()},disabled:a===i&&u===l,disabledStyle:a===i&&u===l,children:(0,z.jsx)(f,{})}),(0,z.jsx)(F,{children:n.toLocaleDateString("en-GB",{month:"long",year:"numeric"})}),(0,z.jsx)(B,{onClick:function(){o(),d()},children:(0,z.jsx)(Z,{})})]})},customInput:(0,z.jsx)(C,{type:"button",children:n.toLocaleDateString("en-GB",{month:"long",year:"numeric"})})})},J=O.Z.div(E||(E=(0,M.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 18px;\n  ","\n"])),(0,S.B)("tablet","")(Y||(Y=(0,M.Z)(["\n        justify-content: baseline;\n        margin-bottom: 0;\n    "])))),R=O.Z.div(L||(L=(0,M.Z)(["\n  display: flex;\n"]))),$=O.Z.button(I||(I=(0,M.Z)(["\n  & > svg {\n    width: 16px;\n    height: 16px;\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    stroke: ",";\n    ","\n  }\n  &:hover,\n  &:focus {\n    background-color: ",";\n  }\n  width: 36px;\n  height: 30px;\n  cursor: ",";\n  background-color: ",";\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  border: 1px solid ",";\n  border-bottom-left-radius: ",";\n  border-top-left-radius: ",";\n  border-bottom-right-radius: ",";\n  border-top-right-radius: ",";\n  ","\n"])),(function(e){return e.disabledStyle?e.theme.arrowDisabledColor:e.theme.arrowEnabledColor}),(0,S.B)("tablet","")(W||(W=(0,M.Z)(["\n    width: 18px;\n    height: 18px;\n    "]))),(function(e){return!e.disabledStyle&&e.theme.calendarBorderColor}),(function(e){return e.disabledStyle?"auto":"pointer"}),(function(e){return e.theme.calendarBackground}),(function(e){return e.theme.arrowDisabledColor}),(function(e){return"left"===e.direction?"8px":"0px"}),(function(e){return"left"===e.direction?"8px":"0px"}),(function(e){return"right"===e.direction?"8px":"0px"}),(function(e){return"right"===e.direction?"8px":"0px"}),(0,S.B)("tablet","")(A||(A=(0,M.Z)(["\n    width: 38px;\n    height: 34px;\n    "])))),q=O.Z.button(G||(G=(0,M.Z)(["\n  text-transform: uppercase;\n  width: 157px;\n  height: 30px;\n  background-color: ",";\n  padding: 6px 12px;\n  border: 0;\n  border-radius: 8px;\n  color: ",";\n  font-size: 14px;\n  line-height: 1.28;\n  font-weight: 700;\n  text-align: center;\n  font-family: 'Inter', sans-serif;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  ","\n"])),(function(e){return e.theme.btnBackgroundColor}),(function(e){return e.theme.btnTextColor}),(0,S.B)("tablet","")(_||(_=(0,M.Z)(["\n  margin-right: 8px;\n        width: 170px;\n        height: 34px;\n        font-size: 16px;\n        line-height: 1.12;\n        padding: 8px 12px;\n    "])))),K=t(9434),Q=t(9778),U=function(e){var n=e.prevHandler,t=e.nextHandler,r=e.pickHandler,a=e.today,l=e.periodType,c=e.currentDateDay,d=e.currentDateMonth,u=e.changePeriod,s=(0,K.I0)(),h=(0,i.useState)(new Date(a)),p=(0,o.Z)(h,2),g=p[0],x=p[1],b=(0,i.useState)(g.getMonth()),m=(0,o.Z)(b,2),y=m[0],v=m[1],w=(0,i.useState)(g.getFullYear()),D=(0,o.Z)(w,2),j=D[0],k=D[1],M=(0,i.useState)(new Date(g.getFullYear(),g.getMonth()+1,0)),O=(0,o.Z)(M,2),S=O[0],C=O[1],B=c,T=d,F=(new Date).getFullYear();(0,i.useEffect)((function(){console.log(g),console.log(l)}));var P=function(){var e=new Date(g);e.setMonth(e.getMonth()-1),x(e),v(e.getMonth()),k(e.getFullYear()),s((0,Q.lW)(e.getMonth())),n()},H=function(){var e=new Date(g);e.setMonth(e.getMonth()+1),x(e),v(e.getMonth()),k(e.getFullYear()),s((0,Q.lW)(e.getMonth())),t()};return(0,z.jsxs)(J,{children:["month"===l?(0,z.jsx)(N,{selectedDate:g,setSelectedDate:x,filterMonth:y,setFilterMonth:v,filterYear:j,setFilterYear:k,handlePrevMonth:P,handleNextMonth:H,changePeriod:u,currentDay:B,pickHandler:r}):(0,z.jsx)(q,{children:g.toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"})}),(0,z.jsxs)(R,{children:["month"===l?(0,z.jsx)($,{direction:"left",type:"button",onClick:P,disabled:y===T&&j===F,disabledStyle:y===T&&j===F,children:(0,z.jsx)(f,{})}):(0,z.jsx)($,{direction:"left",type:"button",onClick:function(){var e=new Date(g);e.setDate(e.getDate()-1),x(e),v(e.getMonth()),C(new Date(e.getFullYear(),e.getMonth()+1,0)),s((0,Q.$r)(e.getDate())),n()},disabled:1===g.getDate(),disabledStyle:1===g.getDate(),children:(0,z.jsx)(f,{})}),"month"===l?(0,z.jsx)($,{direction:"right",type:"button",onClick:H,children:(0,z.jsx)(Z,{})}):(0,z.jsx)($,{direction:"right",type:"button",onClick:function(){var e=new Date(g);e.setDate(e.getDate()+1),x(e),v(e.getMonth()),C(new Date(e.getFullYear(),e.getMonth()+1,0)),s((0,Q.$r)(e.getDate())),t()},disabled:S.getDate()===g.getDate(),disabledStyle:S.getDate()===g.getDate(),children:(0,z.jsx)(Z,{})})]})]})}},8273:function(e,n,t){t.r(n),t.d(n,{default:function(){return E}});var r,o,i,a,l,c=t(9439),d=t(2791),u=t(7689),s=t(9163),h=t(168),f=t(6088),p=t(821),g=t(1087),x=f.Z.div(r||(r=(0,h.Z)(["\n  display: flex;\n  \n"]))),b=(0,f.Z)(g.OL)(o||(o=(0,h.Z)(["\n  &:hover,\n  &:focus,\n  &.active {\n    background-color: ",";\n    color: ",";\n  }\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 76px;\n  height: 34px;\n  cursor: pointer;\n  font-size: 14px;\n  line-height: 1.28;\n  text-align: center;\n  font-weight: 500;\n  border: none;\n  font-family: 'Inter', sans-serif;\n  cursor: pointer;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  color: ",";\n  border: 1px solid ",";\n  background-color: ",";\n  border: 0;\n  border-left: ",";\n  border-right: ",";\n  border-bottom-left-radius: ",";\n  border-top-left-radius: ",";\n  border-bottom-right-radius: ",";\n  border-top-right-radius: ",";\n  ","\n"])),(function(e){return e.theme.periodTypeBackgroundOutline}),(function(e){return e.theme.periodTypeTextOutline}),(function(e){return e.theme.periodTypeText}),(function(e){return e.theme.arrowDisabledColor}),(function(e){return e.theme.periodTypeBackground}),(function(e){return"right"===e.direction?"1px solid ".concat(e.theme.periodTypeBorderline):"0px"}),(function(e){return"left"===e.direction?"1px solid ".concat(e.theme.periodTypeBorderline):"0px"}),(function(e){return"left"===e.direction?"8px":"0px"}),(function(e){return"left"===e.direction?"8px":"0px"}),(function(e){return"right"===e.direction?"8px":"0px"}),(function(e){return"right"===e.direction?"8px":"0px"}),(0,p.B)("tablet","")(i||(i=(0,h.Z)(["\n        font-size: 16px;\n        line-height: 1.12;\n    "])))),m=t(9434),y=t(6351),v=t(184),w=function(e){var n=e.changePeriod,t=(0,m.v9)(y.dc),r=(0,m.v9)(y.J0);return(0,v.jsxs)(x,{children:[(0,v.jsx)(b,{direction:"left",to:"month/".concat(t),onClick:function(){return n("month")},children:"Month"}),(0,v.jsx)(b,{direction:"right",to:"day/".concat(r),onClick:function(){return n("day")},children:"Day"})]})},D=f.Z.div(a||(a=(0,h.Z)(["\nmargin-bottom: 24px;\n  ","\n"])),(0,p.B)("tablet","")(l||(l=(0,h.Z)(["\n        margin-bottom: 32px;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        font-size: 16px;\n        line-height: 1.12;\n        margin-bottom: 32px;\n    "])))),j=function(e){var n=e.prevHandler,t=e.nextHandler,r=e.pickHandler,o=e.today,i=e.currentDateMonth,a=e.periodType,l=e.changePeriod,c=e.currentDateDay;return(0,v.jsxs)(D,{children:[(0,v.jsx)(s.g,{prevHandler:n,nextHandler:t,pickHandler:r,today:o,periodType:a,changePeriod:l,currentDateDay:c,currentDateMonth:i}),(0,v.jsx)(w,{currentDateMonth:i,currentDateDay:c,changePeriod:l})]})},k=t(2124),Z=t(5719),M=t(4888),O=t(3629),S=t(2122),C=t(8527),B=t(4522);function T(e){return(0,B.Z)(1,arguments),1===(0,C.default)(e).getDay()}function F(e){return(0,B.Z)(1,arguments),2===(0,C.default)(e).getDay()}var P=t(1104),H=t(9040),z=t(690),E=function(e){var n=e.updatePageName,t=(0,u.s0)(),r=(0,m.v9)(y.dc),o=(0,m.v9)(y.J0);(0,d.useEffect)((function(){n("Calendar")}),[n]);var i=(0,d.useState)("month"),a=(0,c.Z)(i,2),l=a[0],s=a[1],h=(0,d.useState)(r),f=(0,c.Z)(h,1)[0],p=(0,d.useState)(o),g=(0,c.Z)(p,1)[0],x=(0,d.useState)((0,k.default)(new Date,r)),b=(0,c.Z)(x,2),w=b[0],D=b[1];(0,d.useEffect)((function(){"month"===l?t("/calendar/month/".concat(r)):"day"===l&&t("/calendar/day/".concat(o))}),[t,r,o,l]);var E=function(){var e=(0,Z.default)(w),n=(0,M.default)(w),t=(0,O.default)(e,{weekStartsOn:1}),r=35;return 28===(0,S.Z)(w)||29===(0,S.Z)(w)?T(e)?{startOfWeekDate:t,daysToAdd:28}:((0,S.Z)(w),{startOfWeekDate:t,daysToAdd:35}):(F(n)&&T(e)?r=35:(function(e){return(0,B.Z)(1,arguments),0===(0,C.default)(e).getDay()}(e)||T(n)||F(n))&&(r=42),{startOfWeekDate:t,daysToAdd:r})}(),Y=E.startOfWeekDate,L=E.daysToAdd;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(j,{prevHandler:function(){return D("month"===l?function(e){return(0,P.default)(e,-1)}:function(e){return(0,H.default)(e,-1)})},nextHandler:function(){return D("month"===l?function(e){return(0,P.default)(e,1)}:function(e){return(0,H.default)(e,1)})},pickHandler:function(e){return D(e)},today:w,currentDateMonth:f,currentDateDay:g,periodType:l,changePeriod:s}),(0,v.jsx)(d.Suspense,{fallback:(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(z.a,{})}),children:(0,v.jsx)(u.j3,{context:[Y,L,w,s]})})]})}}}]);
//# sourceMappingURL=273.5dadde00.chunk.js.map