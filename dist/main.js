(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,"body{\n    margin:0;\n    width: 100%;\n    height:100%;\n    background-color:rgb(255, 255, 255);\n}\n\n\n/**************************header section******************/\n.headerContainer{\n    display:flex;\n    background-color: rgb(228, 116, 116);\n    align-items: center;\n    width: 100%;\n    \n}\n    h1 {\n        color:white;\n        text-align: center;\n        background-color: rgb(228, 116, 116);\n        font-size: 40px;\n        margin: 0px;\n    }\n    .logo{\n        width:50px;\n        height:50px;\n        margin: 5px;\n\n    }\n\n\n/*******************************body section******************************/\n.bodyContainer{\n\n    display: flex;\n    flex-direction: row;\n    width:100%;\n\n}\n    /**************************body Section/side panel**********************/\n    .optionList{\n        width: 250px;\n        background-color: rgb(250, 250, 250);\n        height: inherit;\n        min-height: 90vh;\n        min-width: 120px;\n        max-width: 120px;\n        padding: 20px 0px 0px 50px;\n        display:flex;\n        flex-direction: column;\n    }\n        .optionListItems{\n            color:rgb(51, 53, 52);\n            font-size: 18px;\n            padding: 9px 0px 8px 10px;\n            border-radius:15px;\n            width: 100px;\n            transition: 0.5s;\n            transform: translate(-30px);\n        }\n        .optionListItems:hover{\n            background: rgb(228, 116, 116);\n            scale:1.1;\n            transition: 0.1s;\n            cursor: pointer;\n            font-weight: bold;\n            color: white;\n        }\n        .bodylistProjectContainer{\n            display:flex;\n            flex-direction: row;\n            justify-content: start;\n            width: 100px;\n            color:rgb(51, 53, 52);\n            margin-top: 15px;\n            padding: 8px 0px 8px 10px;\n            border-radius:15px;\n            transition: 0.1s;\n            transform: translate(-30px);\n        }\n        .bodylistProjectContainer:hover{\n            background: rgb(228, 116, 116);\n            scale:1.1;\n            transition: 0.1s;\n            cursor: pointer;\n            font-weight: bold;\n            width:100px;\n            color: White;\n        }\n            .bodylistProject{\n                padding-right: 8px;\n                font-size: 16px;\n            }\n            .optionListItemsProjectArrow{\n                scale: 1.5;\n                text-align: center;\n                transform:rotate(180deg);\n            }\n            .projectItemBox{\n                margin: 5px;\n                display:flex;\n                flex-direction: column;\n                justify-content: space-evenly;\n                transform: translate(-20px);\n            }\n                .projectItemContainer{\n                    display: flex;\n                    justify-content: space-between;\n                    align-items: center;\n                }\n                    .projectItemName{\n                        margin: 5px;\n                        font-size: 12px;\n                        padding:8px;\n                        border-radius: 15px;\n                        transition: 0.3s;\n                    }\n                    .projectItemName:hover{\n                        scale: 1.1;\n                        cursor: pointer;\n                        background:rgb(228, 116, 116);\n                        color:white;\n                        transition: 0.3s;\n                    }\n                    .projectItemRemove{\n                        justify-self: center;\n                        margin: 5px;\n                        padding:8px;\n                        border-radius: 15px;\n                        transition: 0.3s;\n                    }\n                    .projectItemRemove:hover{\n                        scale:1.1;\n                        cursor: pointer;\n                        background:rgb(228, 116, 116);\n                        color:white;\n                        transition: 0.3s;\n                    }\n                .optionListItemsProjectAdd{\n                    color:rgb(163, 73, 73);\n                    margin: 5px;\n                    transform: translate(-20px);\n                    font-size: 12px;\n                }\n                .optionListItemsProjectAdd:hover{\n                    cursor: pointer;\n                    scale: 1.1;\n                    font-weight: bold;\n                }\n        .newTaskButtonImg{\n            text-align: center;\n            color: white;\n            border-radius: 15px;\n            position: fixed;\n            bottom: 35px;\n            left:70px;\n            background:rgb(237, 130, 130);\n            font-weight: bold;\n            font-size:40px;\n            padding: 5px 20px 5px 20px;\n            transform: translate(-20px);\n        }\n        .newTaskButtonImg:hover{\n            scale: 1.1;\n            transition: 0.05s;\n            cursor: pointer;\n        }\n    /**********************************body Section / Main Body List*********************************/\n    .bodyList{\n        display:flex;\n        flex-direction: column;\n        max-width: 80vw;\n        height: auto;\n        margin:10px;\n        margin-bottom: 30px;\n\n    }\n        .bodyTaskListContainer{\n            border-radius: 15px;\n            background: rgb(238, 133, 133);\n            display:flex;\n            justify-content: space-between;\n            align-items: center;\n            width:auto;\n            margin: 10px;\n            padding: 10px;\n            color: white;\n            font-weight: bold;\n        }\n        @media(max-width: 650px){\n            .bodyTaskListContainer{\n                border-radius: 15px;\n                background: rgb(238, 133, 133);\n                display:flex;\n                justify-content: space-between;\n                align-items: center;\n                width:auto;\n                margin: 10px;\n                padding: 10px;\n                color: white;\n                font-weight: bold;\n                flex-flow: column;\n            }\n            .bodyTaskListDescription{\n                margin: 10px;\n                width: auto;\n                max-width: 150px;\n                height:auto;\n                overflow-wrap: break-word;\n            }\n        }\n            .bodyTaskListTitle{\n                margin: 10px;\n            }\n            .bodyTaskListDuedate{\n                margin: 10px;\n            }\n            .bodyTaskListPriority{\n                margin: 10px;\n            }\n            .bodyTaskListDescription{\n                margin: 10px;\n                width: auto;\n                min-width: 150px;\n                height:auto;\n                overflow-wrap: break-word;\n            }\n            .bodyTaskListCloseForm{\n                font-size: 20px;\n                margin: 10px;\n                transition: 0.2s;\n                padding:10px;\n            }\n            .bodyTaskListCloseForm:hover{\n                cursor:pointer;\n                scale: 1.5;\n                transition: 0.2s;\n                padding:10px;\n            }\n            \n\n\n/***********************************form section**************************************/\n.formContainer{\n    border: 1px solid rgba(0, 0, 0, 0.419);\n    border-radius: 5px;\n    background: rgb(255, 255, 255);\n    display: flex;\n    flex-direction: column;\n    position:fixed;\n    top:40%;\n    left:50%;\n    transform: translate(-50%,-50%) scale(0); \n    transition: 0.5s;\n    z-index: 10;\n}\n.formContainer.active{\n    transform: translate(-50%,-50%) scale(1);\n    transition: 0.3s;\n\n}\n    .formHeader{\n        display:flex;\n        flex-direction: row;\n        justify-content: space-between;\n        padding: 15px;\n        border-bottom: solid rgba(0, 0, 0, 0.323) 1px;\n    }\n        .formName{\n            font-weight: bold;\n            color:rgba(39, 35, 35, 0.926)\n        }\n        .closeForm{\n            font-size: 20px;\n        }\n        .closeForm:hover{\n            scale: 1.1;\n            transition: 0.1s;\n            font-weight: bold;\n            cursor: pointer;\n        }\n            \n    .formContent{\n        padding: 10px;\n        display:grid;\n        grid-template-columns: repeat(2fr, 1fr);\n        grid-template-rows: repeat(3fr, 1fr);\n        grid-column-gap: 0px;\n        grid-row-gap: 0px; \n\n    }\n        .formTitle { \n            grid-area: 1 / 1 / 2 / 2;\n            margin:10px;\n            width:150px;\n            border: solid rgba(0, 0, 0, 0.323) 1px;\n            border-radius: 3px;\n         }\n        .project { \n            grid-area: 2/ 1 / 3/ 2;\n            margin:10px;\n            width:150px;\n            background-color: white;\n            border: solid rgba(0, 0, 0, 0.323) 1px;\n            border-radius: 3px;\n            color: rgba(22, 20, 20, 0.734);\n         }\n        .dueDate { \n            grid-area: 1 / 2 / 2 / 3; \n            margin:10px;\n            width:150px;\n            border: solid rgba(0, 0, 0, 0.323) 1px;\n            border-radius: 3px;\n        }\n        .priority { \n            grid-area: 2 / 2 / 3 / 3; \n            margin:10px;\n            width:160px;\n            background-color: white;\n            border: solid rgba(0, 0, 0, 0.323) 1px;\n            border-radius: 3px;\n            color: rgba(22, 20, 20, 0.734);\n        }\n        .formDescription { \n            grid-area: 3 / 1 / 4 / 3; \n            margin:10px;\n            resize: vertical;\n            overflow: auto;\n            border: solid rgba(0, 0, 0, 0.323) 1px;\n            border-radius: 3px;\n        } \n\n    .formFooter{\n        display:flex;\n        justify-content: right;\n        margin:10px;\n    \n    }\n        .formCloseButton{\n            margin:5px;\n            background: white;\n            color: rgba(22, 20, 20, 0.734);\n            border:1px solid rgba(0, 0, 0, 0.316);\n            border-radius: 5px;\n            font-size: 15px;\n            padding: 10px;\n        }\n        .formCloseButton:hover{\n            cursor: pointer;\n            background: grey;\n            color:white;\n            transition: 0.1s;\n        }\n        .formSubmitButton{\n            margin: 5px;\n            background: rgb(248, 126, 126);\n            color: white;\n            border: none;\n            border-radius: 5px;\n            font-size: 15px;\n            padding: 10px;\n        }\n        .formSubmitButton:hover{\n            cursor: pointer;\n            background: rgb(255, 0, 0);\n            color:white;\n            transition: 0.5s;\n        }\n/*********************************project form section************************/\n.projectFormContainer{\n    border: 1px solid rgba(0, 0, 0, 0.419);\n    border-radius: 5px;\n    background: rgb(255, 255, 255);\n    display: flex;\n    flex-direction: column;\n    position:fixed;\n    top:40%;\n    left:50%;\n    transform: translate(-50%,-50%) scale(0); \n    transition: 0.5s;\n    z-index: 10;\n    width:300px;\n}\n.projectFormContainer.active{\ntransform: translate(-50%,-50%) scale(1);\ntransition: 0.3s;\n}\n    .projectFormHeader{\n        display:flex;\n        flex-direction: row;\n        justify-content: space-between;\n        padding: 15px;\n        border-bottom: solid rgba(0, 0, 0, 0.323) 1px;\n    }\n        .projectFormName{\n            font-weight: bold;\n            color:rgba(39, 35, 35, 0.926)\n        }\n        .projectCloseForm{\n            font-size: 20px;\n        }\n        .projectCloseForm:hover{\n            scale: 1.1;\n            transition: 0.1s;\n            font-weight: bold;\n            cursor: pointer;\n        }\n    .projectFormContent{\n        padding: 10px;\n        display:grid;\n        grid-template-columns: repeat(2fr, 1fr);\n        grid-template-rows: repeat(3fr, 1fr);\n        grid-column-gap: 0px;\n        grid-row-gap: 0px; \n    }\n        .projectFormTitle { \n            grid-area: 1 / 1 / 2 / 2;\n            margin:10px;\n            width:250px;\n            border: solid rgba(0, 0, 0, 0.323) 1px;\n            border-radius: 3px;\n            justify-self: center;\n            }\n\n    .projectFormFooter{\n        display:flex;\n        justify-content: flex-end;\n    }\n        .projectFormCloseButton{\n            margin:5px;\n            background: white;\n            color: rgba(22, 20, 20, 0.734);\n            border:1px solid rgba(0, 0, 0, 0.316);\n            border-radius: 5px;\n            font-size: 15px;\n            padding: 10px;\n        }\n        .projectFormCloseButton:hover{\n            cursor: pointer;\n            background: grey;\n            color:white;\n            transition: 0.1s;\n        }\n        .projectFormSubmitButton{\n            margin: 5px;\n            background: rgb(248, 126, 126);\n            color: white;\n            border: none;\n            border-radius: 5px;\n            font-size: 15px;\n            padding: 10px;\n        }\n        .projectFormSubmitButton:hover{\n            cursor: pointer;\n            background: rgb(255, 0, 0);\n            color:white;\n            transition: 0.5s;\n        }\n\n\n\n\n\n/***********************************footer section****************************/\n.footerContainer{\n    text-align: center;\n    width:100%;\n    height: 15px;\n    background:rgb(203, 248, 218);\n    padding: 5px 10px 10px 10px;\n    position:fixed;\n    bottom: 0;\n    display:flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n}\n    .footer{\n        text-align: center;\n        font-size: 15px;\n        margin-right: 10px;\n        margin-top: 10px;\n    }\n    .gitLogo{\n        width: 20px;\n        height: 20px;\n        margin-top: 8px;\n    }\n        .gitLogo:hover{\n            cursor: pointer;\n            scale: 1.2;\n        }\n",""]);const i=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);o&&r[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],s=0;s<e.length;s++){var d=e[s],c=o.base?d[0]+o.base:d[0],l=i[c]||0,p="".concat(c," ").concat(l);i[c]=l+1;var m=n(p),u={css:d[1],media:d[2],sourceMap:d[3]};-1!==m?(t[m].references++,t[m].updater(u)):t.push({identifier:p,updater:r(u,o),references:1}),a.push(p)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=n(i[a]);t[s].references--}for(var d=o(e,r),c=0;c<i.length;c++){var l=n(i[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=d}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},810:(e,t,n)=>{e.exports=n.p+"b039b2d83982c8256af3.png"},221:(e,t,n)=>{e.exports=n.p+"60a4abb9d427ea5195ed.png"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e=n(810),t=n(221);const o=[],r=function(){class e{constructor(e,t,n,o,r){this.title=e,this.description=t,this.duedate=n,this.priority=r,this.project=o}}return function(){const t=document.createElement("form"),n=document.createElement("div"),r=document.createElement("div"),i=document.createElement("div"),a=document.createElement("div"),s=document.createElement("input"),d=document.createElement("textarea"),c=document.createElement("input"),l=document.createElement("select"),p=document.createElement("option"),m=document.createElement("option"),u=document.createElement("option"),x=document.createElement("option"),f=document.createElement("select"),g=document.createElement("div"),b=document.createElement("button"),L=document.createElement("button");function h(e){e.preventDefault(),t.classList.remove("active")}function v(){const e=document.querySelector(".bodyList");e.innerHTML="",o.forEach((t=>{const n=document.createElement("div"),r=document.createElement("div"),i=document.createElement("div"),a=document.createElement("div"),s=document.createElement("div"),d=document.createElement("div");n.classList.add("bodyTaskListContainer"),r.classList.add("bodyTaskListTitle"),i.classList.add("bodyTaskListPriority"),a.classList.add("bodyTaskListPriority"),s.classList.add("bodyTaskListDescription"),d.classList.add("bodyTaskListCloseForm"),r.textContent=`Title: ${t.title}`,i.textContent=`Due: ${t.duedate}`,a.textContent=`Priority: ${t.priority}`,s.textContent=`Description: ${t.description}`,d.innerHTML="&times",n.append(r,s,a,i,d),e.append(n),d.addEventListener("click",(function(){let e=o.indexOf(t);o.splice(e,1),v()}))}))}return t.classList.add("formContainer"),n.classList.add("formHeader"),r.classList.add("formName"),i.classList.add("closeForm"),a.classList.add("formContent"),s.classList.add("formTitle"),d.classList.add("formDescription"),c.classList.add("dueDate"),l.classList.add("priority"),f.classList.add("project"),g.classList.add("formFooter"),b.classList.add("formCloseButton"),L.classList.add("formSubmitButton"),r.textContent="Create New Task",i.innerHTML="&times",s.placeholder="Title",c.setAttribute("onfocus","this.type='date'"),c.placeholder="Expected Due Date",p.textContent="Very High",m.textContent="High",u.textContent="Medium",x.textContent="Low",b.textContent="Close",L.textContent="Add Task",p.value="Very High",m.value="High",u.value="Medium",x.value="low",d.placeholder="Description",g.append(b,L),l.append(p,m,u,x),n.append(r,i),a.append(s,d,c,l,f),t.append(n,a,g),i.addEventListener("click",h),b.addEventListener("click",h),L.addEventListener("click",(n=>{n.preventDefault(),function(){let t=s.value,n=c.value,r=d.value,i=f.value,a=l.value,p=new e(t,r,n,i,a);o.unshift(p)}(),v(),t.reset(),t.classList.remove("active")})),t}()};let i=["this is a very long project Name","testing"];const a=function(){const e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("div"),r=document.createElement("div"),a=document.createElement("div"),s=document.createElement("input"),d=document.createElement("div"),c=document.createElement("button"),l=document.createElement("button");function p(){e.classList.remove("active")}function m(){const e=document.querySelector(".bodyList"),t=document.querySelector(".projectItemBox");t.innerHTML="",i.forEach((n=>{const r=document.createElement("div"),a=document.createElement("div"),s=document.createElement("div");r.classList.add("projectItemContainer"),a.classList.add("projectItemName"),s.classList.add("projectItemRemove"),a.textContent=`${n}`,s.innerHTML="&times",r.append(a,s),t.append(r),s.addEventListener("click",(function(){let t=i.indexOf(n);i.splice(t,1);for(let e=0;e<o.length;e++)o[e].project===a.textContent&&(o.splice(e--,1),console.log(o));e.innerHTML="",m()})),a.addEventListener("click",(function(){let t=[];for(let e=0;e<o.length;e++)o[e].project===a.textContent&&t.push(o[e]);e.innerHTML="",function n(){e.innerHTML="",t.forEach((r=>{const i=document.createElement("div"),a=document.createElement("div"),s=document.createElement("div"),d=document.createElement("div"),c=document.createElement("div"),l=document.createElement("div");i.classList.add("bodyTaskListContainer"),a.classList.add("bodyTaskListTitle"),s.classList.add("bodyTaskListPriority"),d.classList.add("bodyTaskListPriority"),c.classList.add("bodyTaskListDescription"),l.classList.add("bodyTaskListCloseForm"),a.textContent=`Title: ${r.title}`,s.textContent=`Due: ${r.duedate}`,d.textContent=`Priority: ${r.priority}`,c.textContent=`Description: ${r.description}`,l.innerHTML="&times",i.append(a,c,d,s,l),e.append(i),l.addEventListener("click",(function(){let e=o.indexOf(r),i=t.indexOf(r);o.splice(e,1),t.splice(i,1),n()}))}))}()}))}))}return e.classList.add("projectFormContainer"),t.classList.add("projectFormHeader"),n.classList.add("projectFormName"),r.classList.add("projectCloseForm"),a.classList.add("projectFormContent"),s.classList.add("projectFormTitle"),d.classList.add("projectFormFooter"),c.classList.add("projectFormCloseButton"),l.classList.add("projectFormSubmitButton"),n.textContent="Add New Project",r.innerHTML="&times",s.placeholder="Project Name",c.textContent="Close",l.textContent="Add Project",d.append(c,l),a.append(s),t.append(n,r),e.append(t,a,d),r.addEventListener("click",p),c.addEventListener("click",p),l.addEventListener("click",(function(){let t=s.value;i.push(t),m(),e.classList.remove("active"),s.value=""})),e};var s=n(379),d=n.n(s),c=n(795),l=n.n(c),p=n(569),m=n.n(p),u=n(565),x=n.n(u),f=n(216),g=n.n(f),b=n(589),L=n.n(b),h=n(426),v={};v.styleTagTransform=L(),v.setAttributes=x(),v.insert=m().bind(null,"head"),v.domAPI=l(),v.insertStyleElement=g(),d()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals,function(){const n=document.querySelector("#content");(function(){const e=document.createElement("div"),o=document.createElement("h1"),r=new Image;o.textContent="#TO-DO",r.src=t,e.classList.add("headerContainer"),r.classList.add("logo"),o.classList.add("title"),e.append(r,o),n.append(e)})(),function(){const e=document.createElement("div"),t=document.createElement("div");e.classList.add("bodyContainer"),t.classList.add("bodyList"),e.append(function(){const e=document.createElement("div"),t=document.createElement("ul"),n=document.createElement("ul"),r=document.createElement("ul"),i=document.createElement("div"),a=document.createElement("div"),s=document.createElement("div"),d=document.createElement("div"),c=document.createElement("div"),l=document.createElement("div");return t.textContent="Home",n.textContent="Today",r.textContent="Week",s.textContent="Projects",c.textContent="+ New Project",d.innerHTML="&#9662",l.innerHTML="&#43",e.classList.add("optionList"),t.classList.add("optionListItems"),n.classList.add("optionListItems"),r.classList.add("optionListItems"),i.classList.add("bodylistProjectContainer"),a.classList.add("projectItemBox"),s.classList.add("bodylistProject"),d.classList.add("optionListItemsProjectArrow"),c.classList.add("optionListItemsProjectAdd"),l.classList.add("newTaskButtonImg"),l.addEventListener("click",(function(){document.querySelector(".formContainer").classList.add("active");const e=document.querySelector(".project"),t=document.createElement("option");t.textContent="None",t.value="None",e.innerHTML="",e.append(t),document.querySelectorAll(".projectItemBox > .projectItemContainer >.projectItemName").forEach((t=>{const n=document.createElement("option");n.textContent=t.textContent,e.append(n)}))})),c.addEventListener("click",(function(){document.querySelector(".projectFormContainer").classList.add("active")})),i.onclick=function(){"rotate(0deg)"===d.style.transform?(d.style.transform="rotate(180deg)",d.style.transition="0.3s",e.removeChild(a),e.removeChild(c)):(d.style.transform="rotate(0deg)",d.style.transition="0.3s",e.append(a,c))},t.addEventListener("click",(function e(){const t=document.querySelector(".bodyList");t.innerHTML="",o.forEach((n=>{const r=document.createElement("div"),i=document.createElement("div"),a=document.createElement("div"),s=document.createElement("div"),d=document.createElement("div"),c=document.createElement("div");r.classList.add("bodyTaskListContainer"),i.classList.add("bodyTaskListTitle"),a.classList.add("bodyTaskListPriority"),s.classList.add("bodyTaskListPriority"),d.classList.add("bodyTaskListDescription"),c.classList.add("bodyTaskListCloseForm"),i.textContent=`Title: ${n.title}`,a.textContent=`Due: ${n.duedate}`,s.textContent=`Priority: ${n.priority}`,d.textContent=`Description: ${n.description}`,c.innerHTML="&times",r.append(i,d,s,a,c),t.append(r),c.addEventListener("click",(function(){let t=o.indexOf(n);o.splice(t,1),e()}))}))})),n.addEventListener("click",(function e(){const t=document.querySelector(".bodyList");t.innerHTML="";let n=new Date,r=String(n.getDate()).padStart(2,"0"),i=String(n.getMonth()+1).padStart(2,"0"),a=n.getFullYear();n=a+"-"+i+"-"+r;let s=[];for(let e=0;e<o.length;e++)o[e].duedate===n&&s.push(o[e]);s.forEach((n=>{const r=document.createElement("div"),i=document.createElement("div"),a=document.createElement("div"),d=document.createElement("div"),c=document.createElement("div"),l=document.createElement("div");r.classList.add("bodyTaskListContainer"),i.classList.add("bodyTaskListTitle"),a.classList.add("bodyTaskListPriority"),d.classList.add("bodyTaskListPriority"),c.classList.add("bodyTaskListDescription"),l.classList.add("bodyTaskListCloseForm"),i.textContent=`Title: ${n.title}`,a.textContent=`Due: ${n.duedate}`,d.textContent=`Priority: ${n.priority}`,c.textContent=`Description: ${n.description}`,l.innerHTML="&times",r.append(i,c,d,a,l),t.append(r),l.addEventListener("click",(function(){let t=o.indexOf(n),r=s.indexOf(n);o.splice(t,1),s.splice(r,1),e()}))}))})),r.addEventListener("click",(function e(){const t=document.querySelector(".bodyList");t.innerHTML="";let n=new Date;function r(e){let t=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0");return e.getFullYear()+"-"+n+"-"+t}let i=r(new Date(n.getTime()+2592e5)),a=r(new Date(n.getTime()+1728e5)),s=r(new Date(n.getTime()+864e5)),d=r(n),c=r(new Date(n.getTime()-864e5)),l=r(new Date(n.getTime()-1728e5)),p=r(new Date(n.getTime()-2592e5));console.log(i),console.log(a),console.log(s),console.log(d),console.log(c),console.log(l),console.log(p);let m=[];for(let e=0;e<o.length;e++)o[e].duedate!==i&&o[e].duedate!==a&&o[e].duedate!==s&&o[e].duedate!==d&&o[e].duedate!==c&&o[e].duedate!==l&&o[e].duedate!==p||m.push(o[e]);m.forEach((n=>{const r=document.createElement("div"),i=document.createElement("div"),a=document.createElement("div"),s=document.createElement("div"),d=document.createElement("div"),c=document.createElement("div");r.classList.add("bodyTaskListContainer"),i.classList.add("bodyTaskListTitle"),a.classList.add("bodyTaskListPriority"),s.classList.add("bodyTaskListPriority"),d.classList.add("bodyTaskListDescription"),c.classList.add("bodyTaskListCloseForm"),i.textContent=`Title: ${n.title}`,a.textContent=`Due: ${n.duedate}`,s.textContent=`Priority: ${n.priority}`,d.textContent=`Description: ${n.description}`,c.innerHTML="&times",r.append(i,d,s,a,c),t.append(r),c.addEventListener("click",(function(){let t=o.indexOf(n),r=m.indexOf(n);o.splice(t,1),m.splice(r,1),e()}))}))})),i.append(s,d),e.append(t,n,r,l,i),e}(),r(),a(),t),n.append(e)}(),function(){const t=document.createElement("div"),o=document.createElement("div"),r=new Image;o.textContent="Copyright © 2021 NDC",r.src=e,r.onclick=function(){window.location.href="https://github.com/NDCsGitHub"},t.classList.add("footerContainer"),r.classList.add("gitLogo"),o.classList.add("footer"),t.append(o,r),n.append(t)}()}()})()})();