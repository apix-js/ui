const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DocsRenderer-K4EAMTCU-Du9EHxKR.js","./iframe-CgC73HyU.js","./index-uubelm5h.js","./react-18-BSoDKGi6.js","./index-CMOtJUyO.js","./index-BKOy0JlP.js","./jsx-runtime-QvZ8i92b.js","./index-D-8MO0q_.js","./index-CDeGrb-H.js","./index-DrFu-skq.js"])))=>i.map(i=>d[i]);
import{_ as a}from"./iframe-CgC73HyU.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-K4EAMTCU-Du9EHxKR.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url);return new e},stories:{filter:e=>(e.tags||[]).filter(r=>_[r]).length===0&&!e.parameters.docs?.disable}}};export{d as parameters};