import{j as D}from"./jsx-runtime-DRTy3Uxn.js";import{r as v}from"./index-BBkUAzwr.js";const x="_button_1f7vo_166",E="_effect_3D_1f7vo_177",R="_effect_bubbly_1f7vo_190",C="_ripple_1f7vo_248",N="_rippleEffect_1f7vo_1",L="_topBubbles_1f7vo_1",T="_bottomBubbles_1f7vo_1",r={button:x,effect_3D:E,effect_bubbly:R,ripple:C,rippleEffect:N,topBubbles:L,bottomBubbles:T},i=m=>{const{children:_,effect:o,onClick:p,...B}=m,y=v.useMemo(()=>{const e=[r.button];return o&&e.push(r[`effect_${o}`]),o==="bubbly"&&e.push("bubbly-button"),e},[o]),g=e=>{o==="bubbly"&&f(e),o==="ripple"&&h(e),p&&p(e)},f=e=>{e.preventDefault;const t=e.currentTarget;t.classList.remove("animate"),t.classList.add("animate"),setTimeout(()=>{t.classList.remove("animate")},700);const s=document.getElementsByClassName("bubbly-button");for(let n=0;n<s.length;n++)s[n].addEventListener("click",f,!1)},h=e=>{const t=e.currentTarget,s=document.createElement("span"),n=Math.max(t.clientWidth,t.clientHeight),b=n/2;s.style.width=s.style.height=`${n}px`,s.style.left=`${e.clientX-t.offsetLeft-b}px`,s.style.top=`${e.clientY-t.offsetTop-b}px`,s.classList.add(r.ripple);const d=t.getElementsByClassName(r.ripple)[0];d&&d.remove(),t.appendChild(s)};return D.jsx("button",{...B,className:y.join(" "),onClick:g,children:_})};i.displayName="Button";i.defaultProps={effect:"default"};i.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},effect:{required:!1,tsType:{name:"union",raw:'"3D" | "ripple" | "bubbly" | "default"',elements:[{name:"literal",value:'"3D"'},{name:"literal",value:'"ripple"'},{name:"literal",value:'"bubbly"'},{name:"literal",value:'"default"'}]},description:"",defaultValue:{value:'"default"',computed:!1}}}};const S={title:"Components/Button",component:i,parameters:{layout:"centered"},tags:["autodocs"]},a={args:{children:"Default Button"}},l={args:{children:"3D Button",effect:"3D"}},c={args:{children:"Ripple Button",effect:"ripple"}},u={args:{children:"Bubbly Button",effect:"bubbly"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Default Button'
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: '3D Button',
    effect: '3D'
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Ripple Button',
    effect: 'ripple'
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Bubbly Button',
    effect: 'bubbly'
  }
}`,...u.parameters?.docs?.source}}};const $=["Default","Button3D","ButtonRipple","ButtonBubbly"];export{l as Button3D,u as ButtonBubbly,c as ButtonRipple,a as Default,$ as __namedExportsOrder,S as default};
