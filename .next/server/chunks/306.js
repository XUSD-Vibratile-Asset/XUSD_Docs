exports.id=306,exports.ids=[306],exports.modules={6231:(e,t,s)=>{Promise.resolve().then(s.bind(s,7733))},88:(e,t,s)=>{Promise.resolve().then(s.bind(s,5671)),Promise.resolve().then(s.bind(s,7454)),Promise.resolve().then(s.bind(s,5813)),Promise.resolve().then(s.bind(s,8720)),Promise.resolve().then(s.bind(s,5685)),Promise.resolve().then(s.bind(s,7890)),Promise.resolve().then(s.t.bind(s,2481,23)),Promise.resolve().then(s.t.bind(s,9404,23))},6486:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2994,23)),Promise.resolve().then(s.t.bind(s,6114,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,9671,23)),Promise.resolve().then(s.t.bind(s,1868,23)),Promise.resolve().then(s.t.bind(s,4759,23))},6211:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,9404,23))},7733:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});var a=s(326),r=s(772);function o({error:e,reset:t}){return(0,a.jsxs)("div",{className:"min-h-[99vh] px-2 py-8 flex flex-col gap-3 items-start",children:[(0,a.jsxs)("div",{children:[a.jsx("h2",{className:"text-5xl font-bold",children:"Oops!"}),a.jsx("p",{className:"text-muted-foreground",children:"Something went wrong!"})]}),a.jsx(r.z,{onClick:()=>t(),children:"Try again"})]})}s(7577)},5671:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var a=s(326),r=s(7863),o=s(434),i=s(5047);function n({absolute:e,className:t="",activeClassName:s="",disabled:n,children:l,...d}){let c=(0,i.usePathname)(),m=e?d.href.toString().split("/")[1]==c.split("/")[1]:c===d.href;return n?a.jsx("div",{className:(0,r.cn)(t,"cursor-not-allowed"),children:l}):a.jsx(o.default,{className:(0,r.cn)(t,m&&s),...d,children:l})}},7454:(e,t,s)=>{"use strict";s.d(t,{default:()=>j});var a=s(326),r=s(8307),o=s(3320),i=s(6283),n=s(7577),l=s(7863);let d=n.forwardRef(({className:e,type:t,...s},r)=>a.jsx("input",{type:t,className:(0,l.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:r,...s}));d.displayName="Input";var c=s(8958);let m=c.fC,f=c.xz,u=c.h_,x=c.x8,h=n.forwardRef(({className:e,...t},s)=>a.jsx(c.aV,{ref:s,className:(0,l.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t}));h.displayName=c.aV.displayName;let p=n.forwardRef(({className:e,children:t,...s},r)=>(0,a.jsxs)(u,{children:[a.jsx(h,{}),(0,a.jsxs)(c.VY,{ref:r,className:(0,l.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...s,children:[t,(0,a.jsxs)(c.x8,{className:"absolute right-4 top-3.5 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[a.jsx("div",{className:"rounded-sm text-xs border py-1 px-2 hover:bg-muted",children:"Esc"}),a.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));p.displayName=c.VY.displayName;let g=({className:e,...t})=>a.jsx("div",{className:(0,l.cn)("flex flex-col space-y-1.5 text-center sm:text-left",e),...t});g.displayName="DialogHeader",n.forwardRef(({className:e,...t},s)=>a.jsx(c.Dx,{ref:s,className:(0,l.cn)("text-lg font-semibold leading-none tracking-tight",e),...t})).displayName=c.Dx.displayName,n.forwardRef(({className:e,...t},s)=>a.jsx(c.dk,{ref:s,className:(0,l.cn)("text-sm text-muted-foreground",e),...t})).displayName=c.dk.displayName;let v=[{title:"XUSD EcoStable System",href:"xusd-start",items:[{title:"XUSD",href:"/whatisxusd"},{title:"Quick Start",href:"/quickStart"},{title:"PulseChain",href:"/pulsechain"}]},{title:"Launch Stages",href:"launch",items:[{title:"Overview",href:"/launchOverview"}]},{title:"Dynamic Vibratile Credit",href:"dynamicVibe",items:[{title:"Overview",href:"/vibeoverview"},{title:"Vibes",href:"/vibes"},{title:"Vibe Classes",href:"/classes"},{title:"Manual",href:"/manual"},{title:"Dev Resources",href:"/vibedev"}]},{title:"XUSD LitPass",href:"creditreport",items:[{title:"Overview",href:"/litoverview"},{title:"Buy",href:"/obtain"}]},{title:"When Over Peg",href:"peg",items:[{title:"Peg Control",href:"/pegcontrol"}]},{title:"Community Contribution",href:"community",items:[{title:"Community Rewards",href:"/communityrewards"}]},{title:"Telegram Bots",href:"tgbots",items:[{title:"Telegram Notifications",href:"/tgbots"}]}].map(({href:e,items:t})=>t.map(t=>({title:t.title,href:e+t.href}))).flat();var b=s(5685),y=s(5671);function j(){let[e,t]=(0,n.useState)(""),[s,l]=(0,n.useState)(!1),c=(0,n.useMemo)(()=>v.filter(t=>t.title.toLowerCase().includes(e.toLowerCase())),[e]);return a.jsx("div",{children:(0,a.jsxs)(m,{open:s,onOpenChange:e=>{e||t(""),l(e)},children:[a.jsx(f,{asChild:!0,children:(0,a.jsxs)("div",{className:"relative flex-1 max-w-md cursor-pointer",children:[a.jsx(r.Z,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500 dark:text-neutral-400"}),a.jsx(d,{className:"w-full rounded-md bg-muted border h-9 pl-10 pr-4 text-sm shadow-sm ",placeholder:"Search documentation...",type:"search"}),(0,a.jsxs)("div",{className:"sm:flex hidden absolute top-1/2 -translate-y-1/2 right-2 text-xs font-medium font-mono items-center gap-0.5 dark:bg-neutral-700 bg-zinc-200 p-1 rounded-sm",children:[a.jsx(o.Z,{className:"w-3 h-3"}),a.jsx("span",{children:"k"})]})]})}),(0,a.jsxs)(p,{className:"p-0 max-w-[650px] sm:top-[38%] top-[45%]",children:[a.jsx(g,{children:a.jsx("input",{value:e,onChange:e=>t(e.target.value),placeholder:"Type something to search...",autoFocus:!0,className:"h-14 px-4 bg-transparent border-b text-[15px] outline-none"})}),0==c.length&&e&&(0,a.jsxs)("p",{className:"text-muted-foreground mx-auto mt-2 text-sm",children:["No results found for"," ",a.jsx("span",{className:"text-primary",children:`"${e}"`})]}),a.jsx(b.ScrollArea,{className:"max-h-[350px]",children:a.jsx("div",{className:"flex flex-col items-start overflow-y-auto sm:px-3 px-1 pb-4 gap-0.5",children:c.map(e=>a.jsx(x,{onChange:e=>console.log(e),asChild:!0,children:(0,a.jsxs)(y.default,{className:"dark:hover:bg-neutral-900 hover:bg-neutral-100 w-full p-2.5 px-3 rounded-sm text-[15px] flex items-center gap-2.5",href:`/docs/${e.href}`,activeClassName:"dark:bg-neutral-900 bg-neutral-100",children:[a.jsx(i.Z,{className:"h-[1.1rem] w-[1.1rem]"})," ",e.title]})},e.href))})})]})]})})}},5813:(e,t,s)=>{"use strict";s.d(t,{ThemeProvider:()=>o});var a=s(326);s(7577);var r=s(4831);function o({children:e,...t}){return a.jsx(r.f,{...t,children:e})}},8720:(e,t,s)=>{"use strict";s.d(t,{ModeToggle:()=>v});var a=s(326),r=s(7577),o=s(850),i=s(2607),n=s(4831),l=s(772),d=s(4756),c=s(9183),m=s(2933),f=s(3982),u=s(7863);let x=d.fC,h=d.xz;d.ZA,d.Uv,d.Tr,d.Ee,r.forwardRef(({className:e,inset:t,children:s,...r},o)=>(0,a.jsxs)(d.fF,{ref:o,className:(0,u.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",t&&"pl-8",e),...r,children:[s,a.jsx(c.Z,{className:"ml-auto h-4 w-4"})]})).displayName=d.fF.displayName,r.forwardRef(({className:e,...t},s)=>a.jsx(d.tu,{ref:s,className:(0,u.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...t})).displayName=d.tu.displayName;let p=r.forwardRef(({className:e,sideOffset:t=4,...s},r)=>a.jsx(d.Uv,{children:a.jsx(d.VY,{ref:r,sideOffset:t,className:(0,u.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...s})}));p.displayName=d.VY.displayName;let g=r.forwardRef(({className:e,inset:t,...s},r)=>a.jsx(d.ck,{ref:r,className:(0,u.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t&&"pl-8",e),...s}));function v(){let{setTheme:e}=(0,n.F)();return(0,a.jsxs)(x,{children:[a.jsx(h,{asChild:!0,children:(0,a.jsxs)(l.z,{variant:"ghost",size:"icon",children:[a.jsx(o.Z,{className:"h-[1.1rem] w-[1.1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),a.jsx(i.Z,{className:"absolute h-[1.1rem] w-[1.1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}),a.jsx("span",{className:"sr-only",children:"Toggle theme"})]})}),(0,a.jsxs)(p,{align:"end",children:[a.jsx(g,{onClick:()=>e("light"),children:"Light"}),a.jsx(g,{onClick:()=>e("dark"),children:"Dark"}),a.jsx(g,{onClick:()=>e("system"),children:"System"})]})]})}g.displayName=d.ck.displayName,r.forwardRef(({className:e,children:t,checked:s,...r},o)=>(0,a.jsxs)(d.oC,{ref:o,className:(0,u.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),checked:s,...r,children:[a.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:a.jsx(d.wU,{children:a.jsx(m.Z,{className:"h-4 w-4"})})}),t]})).displayName=d.oC.displayName,r.forwardRef(({className:e,children:t,...s},r)=>(0,a.jsxs)(d.Rk,{ref:r,className:(0,u.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...s,children:[a.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:a.jsx(d.wU,{children:a.jsx(f.Z,{className:"h-2 w-2 fill-current"})})}),t]})).displayName=d.Rk.displayName,r.forwardRef(({className:e,inset:t,...s},r)=>a.jsx(d.__,{ref:r,className:(0,u.cn)("px-2 py-1.5 text-sm font-semibold",t&&"pl-8",e),...s})).displayName=d.__.displayName,r.forwardRef(({className:e,...t},s)=>a.jsx(d.Z0,{ref:s,className:(0,u.cn)("-mx-1 my-1 h-px bg-muted",e),...t})).displayName=d.Z0.displayName},772:(e,t,s)=>{"use strict";s.d(t,{z:()=>d});var a=s(326),r=s(7577),o=s(4214),i=s(8671),n=s(7863);let l=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-9 w-9",xs:"h-7 rounded-md px-2"}},defaultVariants:{variant:"default",size:"default"}}),d=r.forwardRef(({className:e,variant:t,size:s,asChild:r=!1,...i},d)=>{let c=r?o.g7:"button";return a.jsx(c,{className:(0,n.cn)(l({variant:t,size:s,className:e})),ref:d,...i})});d.displayName="Button"},5685:(e,t,s)=>{"use strict";s.d(t,{ScrollArea:()=>n});var a=s(326),r=s(7577),o=s(8691),i=s(7863);let n=r.forwardRef(({className:e,children:t,...s},r)=>(0,a.jsxs)(o.fC,{ref:r,className:(0,i.cn)("relative overflow-hidden",e),...s,children:[a.jsx(o.l_,{className:"h-full w-full rounded-[inherit]",children:t}),a.jsx(l,{}),a.jsx(o.Ns,{})]}));n.displayName=o.fC.displayName;let l=r.forwardRef(({className:e,orientation:t="vertical",...s},r)=>a.jsx(o.gb,{ref:r,orientation:t,className:(0,i.cn)("flex touch-none select-none transition-colors","vertical"===t&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===t&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",e),...s,children:a.jsx(o.q4,{className:"relative flex-1 rounded-full bg-border"})}));l.displayName=o.gb.displayName},7890:(e,t,s)=>{"use strict";s.r(t),s.d(t,{Sheet:()=>d,SheetClose:()=>m,SheetContent:()=>h,SheetDescription:()=>b,SheetFooter:()=>g,SheetHeader:()=>p,SheetOverlay:()=>u,SheetPortal:()=>f,SheetTitle:()=>v,SheetTrigger:()=>c});var a=s(326),r=s(7577),o=s(8958),i=s(8671),n=s(4019),l=s(7863);let d=o.fC,c=o.xz,m=o.x8,f=o.h_,u=r.forwardRef(({className:e,...t},s)=>a.jsx(o.aV,{className:(0,l.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t,ref:s}));u.displayName=o.aV.displayName;let x=(0,i.j)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),h=r.forwardRef(({side:e="right",className:t,children:s,...r},i)=>(0,a.jsxs)(f,{children:[a.jsx(u,{}),(0,a.jsxs)(o.VY,{ref:i,className:(0,l.cn)(x({side:e}),t),...r,children:[s,(0,a.jsxs)(o.x8,{className:"absolute right-4 top-7 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[a.jsx(n.Z,{className:"h-4 w-4"}),a.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));h.displayName=o.VY.displayName;let p=({className:e,...t})=>a.jsx("div",{className:(0,l.cn)("flex flex-col space-y-2 text-center sm:text-left",e),...t});p.displayName="SheetHeader";let g=({className:e,...t})=>a.jsx("div",{className:(0,l.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",e),...t});g.displayName="SheetFooter";let v=r.forwardRef(({className:e,...t},s)=>a.jsx(o.Dx,{ref:s,className:(0,l.cn)("text-lg font-semibold text-foreground",e),...t}));v.displayName=o.Dx.displayName;let b=r.forwardRef(({className:e,...t},s)=>a.jsx(o.dk,{ref:s,className:(0,l.cn)("text-sm text-muted-foreground",e),...t}));b.displayName=o.dk.displayName},7863:(e,t,s)=>{"use strict";s.d(t,{cn:()=>o});var a=s(1135),r=s(1009);function o(...e){return(0,r.m6)((0,a.W)(e))}},6083:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>i,__esModule:()=>o,default:()=>n});var a=s(8570);let r=(0,a.createProxy)(String.raw`/workspaces/XUSD_Docs/app/error.tsx`),{__esModule:o,$$typeof:i}=r;r.default;let n=(0,a.createProxy)(String.raw`/workspaces/XUSD_Docs/app/error.tsx#default`)},2734:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>p,metadata:()=>h});var a=s(9510),r=s(8570);let o=(0,r.createProxy)(String.raw`/workspaces/XUSD_Docs/components/theme-provider.tsx`),{__esModule:i,$$typeof:n}=o;o.default;let l=(0,r.createProxy)(String.raw`/workspaces/XUSD_Docs/components/theme-provider.tsx#ThemeProvider`);var d=s(3773),c=s(2547),m=s.n(c),f=s(4700),u=s.n(f),x=s(3878);s(7272);let h={title:"XUSD Documents",metadataBase:new URL("https://docs-xusd.vercel.app/"),description:"The Comprehensive documents surrounding the innovative XUSD protocol on pulsechain."};function p({children:e}){return a.jsx("html",{lang:"en",suppressHydrationWarning:!0,children:a.jsx("body",{className:`${m().variable} ${u().variable} font-regular`,suppressHydrationWarning:!0,children:(0,a.jsxs)(l,{attribute:"class",defaultTheme:"system",enableSystem:!0,disableTransitionOnChange:!0,children:[a.jsx(d.wp,{}),a.jsx("main",{className:"sm:container mx-auto w-[85vw] h-auto",children:e}),a.jsx(x.$,{})]})})})}},6560:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var a=s(9510),r=s(2946),o=s(7371);function i(){return(0,a.jsxs)("div",{className:"min-h-[99vh] px-2 py-8 flex flex-col gap-3 items-start",children:[(0,a.jsxs)("div",{children:[a.jsx("h2",{className:"text-5xl font-bold",children:"404"}),a.jsx("p",{className:"text-muted-foreground",children:"Page not found"})]}),a.jsx(o.default,{href:"/",className:(0,r.d)({}),children:"Back to homepage"})]})}},8569:(e,t,s)=>{"use strict";s.d(t,{ZP:()=>n});var a=s(8570);let r=(0,a.createProxy)(String.raw`/workspaces/XUSD_Docs/components/anchor.tsx`),{__esModule:o,$$typeof:i}=r;r.default;let n=(0,a.createProxy)(String.raw`/workspaces/XUSD_Docs/components/anchor.tsx#default`)},3878:(e,t,s)=>{"use strict";s.d(t,{$:()=>o,a:()=>i});var a=s(9510),r=s(9137);function o(){return a.jsx("footer",{className:"border-t w-full h-16",children:(0,a.jsxs)("div",{className:"container flex items-center sm:justify-between justify-center sm:gap-0 gap-4 h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3",children:[(0,a.jsxs)("div",{className:"flex items-center gap-3",children:[a.jsx(r.Z,{className:"sm:block hidden w-5 h-5 text-muted-foreground fill-current"}),(0,a.jsxs)("p",{className:"text-center",children:["XUSD "," "]})]}),a.jsx("div",{className:"gap-4 items-center hidden md:flex",children:a.jsx(i,{})})]})})}function i(){return a.jsx(a.Fragment,{})}},8259:(e,t,s)=>{"use strict";s.d(t,{m:()=>u,u:()=>f});var a=s(9510),r=s(2805),o=s(8569),i=s(1179),n=s(4468),l=s(3773),d=s(2946),c=s(44),m=s(3878);function f(){return a.jsx("aside",{className:"md:flex hidden flex-[0.9] min-w-[230px] sticky top-16 flex-col h-[92.75vh] overflow-y-auto",children:a.jsx(i.x,{className:"py-4",children:a.jsx(x,{})})})}function u(){return(0,a.jsxs)(n.yo,{children:[a.jsx(n.aM,{asChild:!0,children:a.jsx(d.z,{variant:"ghost",size:"icon",className:"lg:hidden flex",children:a.jsx(c.Z,{})})}),(0,a.jsxs)(n.ue,{className:"flex flex-col gap-4 px-0",side:"left",children:[a.jsx(n.Tu,{children:a.jsx(n.sw,{className:"px-5",asChild:!0,children:a.jsx(l.TR,{})})}),(0,a.jsxs)(i.x,{className:"flex flex-col gap-4",children:[a.jsx("div",{className:"flex flex-col gap-2 mt-3 mx-2 px-5",children:a.jsx(l.Ml,{isSheet:!0})}),a.jsx("div",{className:"mx-2 px-5",children:a.jsx(x,{isSheet:!0})}),a.jsx("div",{className:"p-6 pb-4 flex gap-2",children:a.jsx(m.a,{})})]})]})]})}function x({isSheet:e=!1}){return a.jsx(a.Fragment,{children:r.Z.map(({href:t,items:s,title:r})=>(0,a.jsxs)("div",{className:"flex flex-col gap-3 mt-5",children:[a.jsx("h4",{className:"font-medium sm:text-sm",children:r}),a.jsx("div",{className:"flex flex-col gap-3 sm:text-sm dark:text-neutral-300/85 text-neutral-800 ml-0.5",children:s.map(s=>{let r=`/docs/${t}${s.href}`,i=a.jsx(o.ZP,{activeClassName:"font-medium text-primary",href:r,children:s.title},r);return e?a.jsx(n.sw,{asChild:!0,children:i},r):i})})]},t))})}},3773:(e,t,s)=>{"use strict";s.d(t,{TR:()=>S,Ml:()=>k,wp:()=>N});var a=s(9510),r=s(8570);let o=(0,r.createProxy)(String.raw`/workspaces/XUSD_Docs/components/theme-toggle.tsx`),{__esModule:i,$$typeof:n}=o;o.default;let l=(0,r.createProxy)(String.raw`/workspaces/XUSD_Docs/components/theme-toggle.tsx#ModeToggle`);var d=s(8068),c=s(429),m=s(7371),f=s(7710),u=s(2946);let x=(0,r.createProxy)(String.raw`/workspaces/XUSD_Docs/components/search.tsx`),{__esModule:h,$$typeof:p}=x;x.default;let g=(0,r.createProxy)(String.raw`/workspaces/XUSD_Docs/components/search.tsx#default`);var v=s(8569),b=s(8259),y=s(2805),j=s(4468);let w=[{title:"Documentation",href:`/docs/${y.f[0].href}`},{title:"Website",href:"#"}];function N(){return a.jsx("nav",{className:"w-full border-b h-16 sticky top-0 z-50 lg:px-4 px-2 backdrop-filter backdrop-blur-xl bg-opacity-5",children:(0,a.jsxs)("div",{className:"sm:p-3 p-2 max-w-[1530px] mx-auto h-full flex items-center justify-between gap-2",children:[(0,a.jsxs)("div",{className:"flex items-center gap-5",children:[a.jsx(b.m,{}),(0,a.jsxs)("div",{className:"flex items-center gap-8",children:[a.jsx("div",{className:"sm:flex hidden",children:a.jsx(S,{})}),a.jsx("div",{className:"lg:flex hidden items-center gap-5 text-sm font-medium text-muted-foreground",children:a.jsx(k,{})})]})]}),a.jsx("div",{className:"flex items-center gap-3",children:(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[a.jsx(g,{}),(0,a.jsxs)("div",{className:"flex",children:[a.jsx(m.default,{href:"https://github.com/surfacing8671/DBURN",className:(0,u.d)({variant:"ghost",size:"icon"}),children:a.jsx(d.Z,{className:"h-[1.1rem] w-[1.1rem]"})}),a.jsx(m.default,{href:"#",className:(0,u.d)({variant:"ghost",size:"icon"}),children:a.jsx(c.Z,{className:"h-[1.1rem] w-[1.1rem]"})}),a.jsx(l,{})]})]})})]})})}function S(){return(0,a.jsxs)(m.default,{href:"/",className:"flex items-center gap-2.5",children:[a.jsx(f.default,{src:"/logo.png",width:60,height:60,alt:"mooo"}),a.jsx("h2",{className:"text-md font-bold",children:"XUSD Docs"})]})}function k({isSheet:e=!1}){return a.jsx(a.Fragment,{children:w.map(t=>{let s=a.jsx(v.ZP,{activeClassName:"text-black dark:text-white font-semibold",absolute:!0,href:t.href,children:t.title},t.title+t.href);return e?a.jsx(j.sw,{asChild:!0,children:s},t.title+t.href):s})})}},2946:(e,t,s)=>{"use strict";s.d(t,{d:()=>l,z:()=>d});var a=s(9510),r=s(1159),o=s(3025),i=s(791),n=s(650);let l=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-9 w-9",xs:"h-7 rounded-md px-2"}},defaultVariants:{variant:"default",size:"default"}}),d=r.forwardRef(({className:e,variant:t,size:s,asChild:r=!1,...i},d)=>{let c=r?o.g7:"button";return a.jsx(c,{className:(0,n.cn)(l({variant:t,size:s,className:e})),ref:d,...i})});d.displayName="Button"},1179:(e,t,s)=>{"use strict";s.d(t,{x:()=>n});var a=s(8570);let r=(0,a.createProxy)(String.raw`/workspaces/XUSD_Docs/components/ui/scroll-area.tsx`),{__esModule:o,$$typeof:i}=r;r.default;let n=(0,a.createProxy)(String.raw`/workspaces/XUSD_Docs/components/ui/scroll-area.tsx#ScrollArea`);(0,a.createProxy)(String.raw`/workspaces/XUSD_Docs/components/ui/scroll-area.tsx#ScrollBar`)},4468:(e,t,s)=>{"use strict";s.d(t,{Tu:()=>m,aM:()=>l,sw:()=>d,ue:()=>c,yo:()=>n});var a=s(8570);let r=(0,a.createProxy)(String.raw`/workspaces/XUSD_Docs/components/ui/sheet.tsx`),{__esModule:o,$$typeof:i}=r;r.default;let n=(0,a.createProxy)(String.raw`/workspaces/XUSD_Docs/components/ui/sheet.tsx#Sheet`);(0,a.createProxy)(String.raw`/workspaces/XUSD_Docs/components/ui/sheet.tsx#SheetPortal`),(0,a.createProxy)(String.raw`/workspaces/XUSD_Docs/components/ui/sheet.tsx#SheetOverlay`);let l=(0,a.createProxy)(String.raw`/workspaces/XUSD_Docs/components/ui/sheet.tsx#SheetTrigger`),d=(0,a.createProxy)(String.raw`/workspaces/XUSD_Docs/components/ui/sheet.tsx#SheetClose`),c=(0,a.createProxy)(String.raw`/workspaces/XUSD_Docs/components/ui/sheet.tsx#SheetContent`),m=(0,a.createProxy)(String.raw`/workspaces/XUSD_Docs/components/ui/sheet.tsx#SheetHeader`);(0,a.createProxy)(String.raw`/workspaces/XUSD_Docs/components/ui/sheet.tsx#SheetFooter`),(0,a.createProxy)(String.raw`/workspaces/XUSD_Docs/components/ui/sheet.tsx#SheetTitle`),(0,a.createProxy)(String.raw`/workspaces/XUSD_Docs/components/ui/sheet.tsx#SheetDescription`)},2805:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a,f:()=>r});let a=[{title:"XUSD EcoStable System",href:"xusd-start",items:[{title:"XUSD",href:"/whatisxusd"},{title:"Quick Start",href:"/quickStart"},{title:"PulseChain",href:"/pulsechain"}]},{title:"Launch Stages",href:"launch",items:[{title:"Overview",href:"/launchOverview"}]},{title:"Dynamic Vibratile Credit",href:"dynamicVibe",items:[{title:"Overview",href:"/vibeoverview"},{title:"Vibes",href:"/vibes"},{title:"Vibe Classes",href:"/classes"},{title:"Manual",href:"/manual"},{title:"Dev Resources",href:"/vibedev"}]},{title:"XUSD LitPass",href:"creditreport",items:[{title:"Overview",href:"/litoverview"},{title:"Buy",href:"/obtain"}]},{title:"When Over Peg",href:"peg",items:[{title:"Peg Control",href:"/pegcontrol"}]},{title:"Community Contribution",href:"community",items:[{title:"Community Rewards",href:"/communityrewards"}]},{title:"Telegram Bots",href:"tgbots",items:[{title:"Telegram Notifications",href:"/tgbots"}]}],r=a.map(({href:e,items:t})=>t.map(t=>({title:t.title,href:e+t.href}))).flat()},650:(e,t,s)=>{"use strict";s.d(t,{cn:()=>o});var a=s(5761),r=s(2386);function o(...e){return(0,r.m6)((0,a.W)(e))}},7481:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});var a=s(6621);let r=e=>[{type:"image/x-icon",sizes:"2000x2000",url:(0,a.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},4362:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});var a=s(6621);let r=e=>[{type:"image/png",width:2e3,height:2e3,url:(0,a.fillMetadataSegment)(".",e.params,"opengraph-image.png")+"?ffdbb399718e1fc7"}]},7272:()=>{}};