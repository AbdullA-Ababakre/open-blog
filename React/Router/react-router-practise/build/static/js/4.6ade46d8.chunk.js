(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{33:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,c=void 0;try{for(var a,i=t[Symbol.iterator]();!(r=(a=i.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(s){o=!0,c=s}finally{try{r||null==i.return||i.return()}finally{if(o)throw c}}return n}}(t,e)||function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(e,"a",(function(){return o}))},39:function(t,e,n){t.exports={comments:"Comments_comments__iZX-v"}},40:function(t,e,n){t.exports={form:"NewCommentForm_form__2Te8b",loading:"NewCommentForm_loading__2veC2",control:"NewCommentForm_control__3NVeP",actions:"NewCommentForm_actions__2fwWP"}},41:function(t,e,n){t.exports={quote:"HighlightedQuote_quote__nE9T6"}},44:function(t,e,n){"use strict";n.r(e);var r=n(2),o=n(8),c=n(33),a=n(0),i=n(39),s=n.n(i),u=n(40),l=n.n(u),m=n(1),d=function(t){var e=Object(a.useRef)(),n=function(t){t.preventDefault()};return Object(m.jsxs)("form",{className:l.a.form,onSubmit:n,children:[Object(m.jsxs)("div",{className:l.a.control,onSubmit:n,children:[Object(m.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(m.jsx)("textarea",{id:"comment",rows:"5",ref:e})]}),Object(m.jsx)("div",{className:l.a.actions,children:Object(m.jsx)("button",{className:"btn",children:"Add Comment"})})]})},b=function(){var t=Object(a.useState)(!1),e=Object(c.a)(t,2),n=e[0],r=e[1];return Object(m.jsxs)("section",{className:s.a.comments,children:[Object(m.jsx)("h2",{children:"User Comments"}),!n&&Object(m.jsx)("button",{className:"btn",onClick:function(){r(!0)},children:"Add a Comment"}),n&&Object(m.jsx)(d,{}),Object(m.jsx)("p",{children:"Comments..."})]})},j=n(41),f=n.n(j),h=function(t){return Object(m.jsxs)("figure",{className:f.a.quote,children:[Object(m.jsx)("p",{children:t.text}),Object(m.jsx)("figcaption",{children:t.author})]})},x=[{id:"q1",author:"Abdulla",text:"learning react is fun"},{id:"q2",author:"AbdullaAbabakre",text:"learning react is Great"},{id:"q3",author:"AbdullaAbabakreAmat",text:"learning react is greater"}];e.default=function(){var t=Object(r.j)(),e=x.find((function(e){return e.id===t.quoteId}));return e?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(h,{text:e.text,author:e.author}),Object(m.jsx)(r.c,{path:"/quotes/".concat(t.quoteId),exact:!0,children:Object(m.jsx)("div",{className:"centered",children:Object(m.jsx)(o.b,{className:"btn--flat",to:"/quotes/".concat(t.quoteId,"/comments"),children:"Load Comments"})})}),Object(m.jsx)(r.c,{path:"/quotes/".concat(t.quoteId,"/comments"),children:Object(m.jsx)(b,{})})]}):Object(m.jsx)("p",{children:"No Quote Found"})}}}]);
//# sourceMappingURL=4.6ade46d8.chunk.js.map