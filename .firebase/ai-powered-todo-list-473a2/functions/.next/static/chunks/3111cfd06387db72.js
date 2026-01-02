(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,10865,t=>{"use strict";t.i(25380);var e=t.i(85447),a=t.i(48856),i=t.i(59575),r=t.i(97588),n=t.i(64128),o=t.i(82680),s=t.i(81035),l=t.i(5873),d=t.i(9273);function h(t){return(0,d.default)("MuiSkeleton",t)}(0,l.default)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var p=t.i(55997);let u=r.keyframes`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,f=r.keyframes`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,m="string"!=typeof u?r.css`
        animation: ${u} 2s ease-in-out 0.5s infinite;
      `:null,c="string"!=typeof f?r.css`
        &::after {
          animation: ${f} 2s linear 0.5s infinite;
        }
      `:null,g=(0,n.styled)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:a}=t;return[e.root,e[a.variant],!1!==a.animation&&e[a.animation],a.hasChildren&&e.withChildren,a.hasChildren&&!a.width&&e.fitContent,a.hasChildren&&!a.height&&e.heightAuto]}})((0,o.default)(({theme:t})=>{let e=String(t.shape.borderRadius).match(/[\d.\-+]*\s*(.*)/)[1]||"px",a=parseFloat(t.shape.borderRadius);return{display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:t.alpha(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${a}${e}/${Math.round(a/.6*10)/10}${e}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:({ownerState:t})=>t.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:t})=>t.hasChildren&&!t.width,style:{maxWidth:"fit-content"}},{props:({ownerState:t})=>t.hasChildren&&!t.height,style:{height:"auto"}},{props:{animation:"pulse"},style:m||{animation:`${u} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(t.vars||t).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:c||{"&::after":{animation:`${f} 2s linear 0.5s infinite`}}}]}})),y=e.forwardRef(function(t,e){let r=(0,s.useDefaultProps)({props:t,name:"MuiSkeleton"}),{animation:n="pulse",className:o,component:l="span",height:d,style:u,variant:f="text",width:m,...c}=r,y={...r,animation:n,component:l,variant:f,hasChildren:!!c.children},b=(t=>{let{classes:e,variant:a,animation:r,hasChildren:n,width:o,height:s}=t;return(0,i.default)({root:["root",a,r,n&&"withChildren",n&&!o&&"fitContent",n&&!s&&"heightAuto"]},h,e)})(y);return(0,p.jsx)(g,{as:l,ref:e,className:(0,a.default)(b.root,o),ownerState:y,...c,style:{width:m,height:d,...u}})});t.s(["default",0,y],10865)}]);