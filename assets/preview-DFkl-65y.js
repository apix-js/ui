function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./DocsRenderer-K4EAMTCU-Bc7dtupm.js","./iframe-Drm15wsL.js","./index-BBkUAzwr.js","./react-18-DbYDx2YM.js","./jsx-runtime-DRTy3Uxn.js","./index-J1TP6alb.js","./_getPrototype-DWkuimXY.js","./index-DrFu-skq.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a}from"./iframe-Drm15wsL.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),n={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-K4EAMTCU-Bc7dtupm.js").then(r=>r.D),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url);return new e},stories:{filter:e=>(e.tags||[]).filter(r=>_[r]).length===0&&!e.parameters.docs?.disable}}};export{n as parameters};
