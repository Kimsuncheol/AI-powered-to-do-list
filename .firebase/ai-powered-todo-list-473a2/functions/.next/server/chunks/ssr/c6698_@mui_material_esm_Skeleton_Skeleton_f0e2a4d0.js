module.exports=[50419,a=>{"use strict";var b=a.i(56760),c=a.i(69310),d=a.i(24658),e=a.i(81675),f=a.i(20384),g=a.i(11872),h=a.i(35972),i=a.i(69301),j=a.i(25931);function k(a){return(0,j.default)("MuiSkeleton",a)}(0,i.default)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var l=a.i(92208);let m=e.keyframes`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,n=e.keyframes`
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
`,o="string"!=typeof m?e.css`
        animation: ${m} 2s ease-in-out 0.5s infinite;
      `:null,p="string"!=typeof n?e.css`
        &::after {
          animation: ${n} 2s linear 0.5s infinite;
        }
      `:null,q=(0,f.styled)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(a,b)=>{let{ownerState:c}=a;return[b.root,b[c.variant],!1!==c.animation&&b[c.animation],c.hasChildren&&b.withChildren,c.hasChildren&&!c.width&&b.fitContent,c.hasChildren&&!c.height&&b.heightAuto]}})((0,g.default)(({theme:a})=>{let b=String(a.shape.borderRadius).match(/[\d.\-+]*\s*(.*)/)[1]||"px",c=parseFloat(a.shape.borderRadius);return{display:"block",backgroundColor:a.vars?a.vars.palette.Skeleton.bg:a.alpha(a.palette.text.primary,"light"===a.palette.mode?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${c}${b}/${Math.round(c/.6*10)/10}${b}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(a.vars||a).shape.borderRadius}},{props:({ownerState:a})=>a.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:a})=>a.hasChildren&&!a.width,style:{maxWidth:"fit-content"}},{props:({ownerState:a})=>a.hasChildren&&!a.height,style:{height:"auto"}},{props:{animation:"pulse"},style:o||{animation:`${m} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(a.vars||a).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:p||{"&::after":{animation:`${n} 2s linear 0.5s infinite`}}}]}})),r=b.forwardRef(function(a,b){let e=(0,h.useDefaultProps)({props:a,name:"MuiSkeleton"}),{animation:f="pulse",className:g,component:i="span",height:j,style:m,variant:n="text",width:o,...p}=e,r={...e,animation:f,component:i,variant:n,hasChildren:!!p.children},s=(a=>{let{classes:b,variant:c,animation:e,hasChildren:f,width:g,height:h}=a;return(0,d.default)({root:["root",c,e,f&&"withChildren",f&&!g&&"fitContent",f&&!h&&"heightAuto"]},k,b)})(r);return(0,l.jsx)(q,{as:i,ref:b,className:(0,c.default)(s.root,g),ownerState:r,...p,style:{width:o,height:j,...m}})});a.s(["default",0,r],50419)}];

//# sourceMappingURL=c6698_%40mui_material_esm_Skeleton_Skeleton_f0e2a4d0.js.map