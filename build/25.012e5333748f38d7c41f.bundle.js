(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{635:function(e,t,a){"use strict";var n=a(0),r=a(202);t.a=Object(r.a)(n.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete")},721:function(e){e.exports=JSON.parse('{"data":[{"label":"Alaska Standard Time(GMT-9)","value":"Alaska Standard Time(GMT-9)"},{"label":"Alaska Daylight Time(GMT-8)","value":"Alaska Daylight Time(GMT-8)"},{"label":"Aleutian-Hawaii (GMT-10)","value":"Aleutian-Hawaii (GMT-10)"},{"label":"Atlantic Standard Time (GMT-4)","value":"Atlantic Standard Time (GMT-4)"},{"label":"Atlantic Daylight Time (GMT-3)","value":"Atlantic Daylight Time (GMT-3)"},{"label":"Azores (GMT-1)","value":"Azores (GMT-1)"},{"label":"Baku (GMT +4)","value":"Baku (GMT +4)"},{"label":"Bangkok (GMT +7)","value":"Bangkok (GMT +7)"},{"label":"Brazilia (GMT-3)","value":"Brazilia (GMT-3)"},{"label":"Central Standard Time (GMT-6)","value":"Central Standard Time (GMT-6)"},{"label":"Central Daylight Time (GMT-5)","value":"Central Daylight Time (GMT-5)"},{"label":"Dhakar (GMT +6)","value":"Dhakar (GMT +6)"},{"label":"Eastern Standard Time (GMT-5)","value":"Eastern Standard Time (GMT-5)"},{"label":"Eniwetok (GMT-12)","value":"Eniwetok (GMT-12)"},{"label":"Fiji (GMT +12)","value":"Fiji (GMT +12)"},{"label":"Greenwich Mean Time (GMT)","value":"Greenwich Mean Time (GMT)"},{"label":"Hawaii-Aleutian (GMT-10)","value":"Hawaii-Aleutian (GMT-10)"},{"label":"Hong Kong (GMT +8)","value":"Hong Kong (GMT +8)"},{"label":"Israel (GMT +2)","value":"Israel (GMT +2)"},{"label":"London (GMT)","value":"London (GMT)"},{"label":"Magadan (GMT +11)","value":"Magadan (GMT +11)"},{"label":"Mid-Atlantic (GMT-2)","value":"Mid-Atlantic (GMT-2)"},{"label":"Moscow (GMT +3)","value":"Moscow (GMT +3)"},{"label":"Mountain Standard Time (GMT-7)","value":"Mountain Standard Time (GMT-7)"},{"label":"Mountain Daylight Time (GMT-6)","value":"Mountain Daylight Time (GMT-6)"},{"label":"New Delhi (GMT +5)","value":"New Delhi (GMT +5)"},{"label":"New York (GMT -5 EST)","value":"New York (GMT -5 EST)"},{"label":"Pacific Standard Time (GMT-8)","value":"Pacific Standard Time (GMT-8)"},{"label":"Pacific Daylight Time (GMT-7)","value":"Pacific Daylight Time (GMT-7)"},{"label":"Rome (GMT +1)","value":"Rome (GMT +1)"},{"label":"Samoa (GMT-11)","value":"Samoa (GMT-11)"},{"label":"San Francisco (GMT -8 PST)","value":"San Francisco (GMT -8 PST)"},{"label":"Sydney (GMT +10)","value":"Sydney (GMT +10)"},{"label":"Tokyo (GMT +9)","value":"Tokyo (GMT +9)"},{"label":"Wellington (GMT +12)","value":"Wellington (GMT +12)"}]}')},731:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(41),o=a(127),c=a(149),i=a(726),u=a(725),s=a(629),m=function(e){var t={};return e.name&&""!==e.name.trim()||(t.name="Required"),e.description&&""!==e.description.trim()||(t.description="Required"),t},b=a(56),d=a.n(b),f=a(1),p=a(78),y=a(55),T="https://hichy-api.hnhlabs.technology",v=a(721);function M(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?M(Object(a),!0).forEach((function(t){g(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):M(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function E(e){var t=function(e){var t=e.input,a=e.label,n=e.type,l=e.placeholder,o=e.meta,c=o.touched,i=o.error,u=o.warning;return r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"form-label"},a),r.a.createElement("div",{className:"input-holder"},r.a.createElement("input",G({},t,{type:n,placeholder:l,className:"input-field"})),r.a.createElement("div",null,c&&(i&&r.a.createElement("span",{className:"text-danger"},i)||u&&r.a.createElement("span",null,u)))))},a=e.handleSubmit;return r.a.createElement("form",{onSubmit:a((function(t){var a=e.createPolicy,n=e.handleModal;a(h(h({},t),{},{timeZone:t.timeZone.label})),n(!1)}))},r.a.createElement("div",{className:"shortmodal-body"},r.a.createElement("div",{className:"body-container"},r.a.createElement(i.a,{name:"name",label:"Policy Name",type:"text",placeholder:"Policy Name",component:t}),r.a.createElement(i.a,{name:"description",label:"Description",type:"text",placeholder:"",component:t}),r.a.createElement(i.a,{name:"timeZone",label:"Timezone",component:function(e){var t=e.input,a=e.options,n=e.label,l=e.meta,o=l.touched,c=l.error,i=l.warning;return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",null," ",n," "),r.a.createElement(s.a,G({},t,{onChange:function(e){return t.onChange(e)},onBlur:function(){return t.onBlur(t.value)},options:a})),o&&(c&&r.a.createElement("span",{className:"text-danger"},c)||i&&r.a.createElement("span",null,i)))},className:"custom-selectbox",options:v.data}))),r.a.createElement("div",{className:"shortmodal-footer"},r.a.createElement("div",{className:"btn-row"},r.a.createElement("button",{className:"btn btn-save",type:"submit"},"Save"))))}E=Object(u.a)({form:"CreatePolicyForm",validate:m})(E);var w={createPolicy:function(e){return function(t,a){t({type:f.E}),d.a.post("".concat(T,"/policy"),e,Object(y.a)(a)).then((function(e){t({type:f.F,payload:e.data}),t(Object(p.b)("New Policy was created",200,"success",2e3,"top-right"))})).catch((function(e){t({type:f.D,payload:e}),t(Object(p.b)(e.response.data.msg,e.response.status,"error"))}))}}},O=Object(l.b)((function(e){return{}}),w)(E),S=a(631),j=a(635);function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==a)return;var n,r,l=[],o=!0,c=!1;try{for(a=a.call(e);!(o=(n=a.next()).done)&&(l.push(n.value),!t||l.length!==t);o=!0);}catch(e){c=!0,r=e}finally{try{o||null==a.return||a.return()}finally{if(c)throw r}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return P(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return P(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function k(e){var t=e.columns,a=e.data,n=e.noItemMessage,l=Object(S.useTable)({columns:t,data:a}),o=l.getTableProps,c=l.getTableBodyProps,i=l.rows,u=l.prepareRow;return r.a.createElement("table",A({cellSpacing:"0",cellPadding:"0"},o(),{className:"table"}),r.a.createElement("thead",{className:"t-head"},r.a.createElement("tr",{className:"table-row"},r.a.createElement("th",{className:"table-headline"}," Name "),r.a.createElement("th",{className:"table-headline"}," Actions   "))),r.a.createElement("tbody",A({className:"t-body"},c()),i.length>0?i.map((function(e,t){return u(e),r.a.createElement("tr",A({className:"table-row",key:t},e.getRowProps()),e.cells.map((function(e,t){return r.a.createElement("td",A({className:"table-data",key:t},e.getCellProps()),e.render("Cell"))})))})):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"container"}," ",n," "))))}var D={deletePolicy:function(e){return function(t){t({type:f.gb}),d.a.delete("".concat(T,"/policy/").concat(e)).then((function(a){t({type:f.hb,payload:e})})).catch((function(e){t({type:f.fb,payload:e}),400!==e.response.status&&401!==e.response.status||t(Object(p.b)(e.response.data.message,e.response.status,"dark",2e3,"top-right"))}))}}},C=Object(l.b)((function(e){return{}}),D)((function(e){var t=e.items,a=e.deletePolicy,l=e.noItemMessage,o=N(Object(n.useState)(10),2),c=o[0],i=(o[1],N(Object(n.useState)(0),2)),u=i[0],s=i[1],m=N(Object(n.useState)(1),2),b=m[0],d=m[1],f=N(Object(n.useState)([]),2),p=f[0],y=f[1],T=N(Object(n.useState)(1),2),v=T[0],M=T[1];Object(n.useEffect)((function(){y(t),M(Math.ceil(t.length/c))}),[c,t]);var h=r.a.useMemo((function(){return[{Header:"All Policies",columns:[{Header:"Name",accessor:"name",filterable:!0},{Header:"Actions",accessor:"_id",Cell:function(e){var t=e.cell.value;return r.a.createElement("div",{className:"action--tray"},r.a.createElement("button",{className:"icon__delete",onClick:function(){return a(t)}}," ",r.a.createElement(j.a,null)))},filterable:!0}]}]}),[]),g=r.a.useMemo((function(){return p.slice(u,b*c)}),[c,b,u,p]);return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"table-container"},r.a.createElement(k,{columns:h,data:g,deletePolicy:a,noItemMessage:l}),r.a.createElement("div",{className:"page-nav-bar"},r.a.createElement("div",{className:"page__counter"},r.a.createElement("div",{className:"btn-page-label"},b," of ",v),r.a.createElement("button",{disabled:1===b,onClick:function(){b>=2&&(s(u-c),d(b-1))},className:"btn btn-left"},r.a.createElement("i",{className:"fa fa-arrow-left","aria-hidden":"true"})),r.a.createElement("button",{disabled:b===v,onClick:function(){b<v&&(s(u+c),d(b+1))},className:"btn btn-right"},r.a.createElement("i",{className:"fa fa-arrow-right","aria-hidden":"true"}))))))}));function I(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==a)return;var n,r,l=[],o=!0,c=!1;try{for(a=a.call(e);!(o=(n=a.next()).done)&&(l.push(n.value),!t||l.length!==t);o=!0);}catch(e){c=!0,r=e}finally{try{o||null==a.return||a.return()}finally{if(c)throw r}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return B(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return B(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var H={getAllPolicy:function(){return function(e,t){e({type:f.zb}),d.a.get("".concat(T,"/policy"),Object(y.a)(t)).then((function(t){e({type:f.Ab,payload:t.data})})).catch((function(t){e({type:f.yb,payload:t}),e(Object(p.b)("An error occured",400,"error"))}))}}};t.default=Object(l.b)((function(e){return{policyList:e.policy?e.policy.policyList:[]}}),H)((function(e){var t=I(Object(n.useState)(!1),2),a=t[0],l=t[1];Object(n.useEffect)((function(){return e.getAllPolicy(),function(){}}),[]);var i=function(e){l(e)},u=e.policyList;return r.a.createElement(o.a,{headerTitle:"Policy",isBottom:!0,createBtnLabel:"Create",onClick:function(){return i(!0)}},r.a.createElement(c.a,{title:"Create Policy",modal:a,setModal:function(e){return i(e)}},r.a.createElement(O,{handleModal:i})),r.a.createElement(C,{noItemMessage:"No policy are created yet",items:u,limit:10}))}))}}]);