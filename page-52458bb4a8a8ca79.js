(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9460:function(e,r,t){Promise.resolve().then(t.bind(t,3709)),Promise.resolve().then(t.bind(t,655))},3709:function(e,r,t){"use strict";t.d(r,{default:function(){return L}});var a=t(7437),l=t(1444),s=t(207),c=t(5587);function n(){let e=(0,l.v9)(s.P4),r=(0,l.v9)(s.WV),t=(0,l.v9)(s.El),n=(0,l.v9)(s.ug),i=(0,l.v9)(s.tz),o=(0,l.v9)(s.TJ),p=(0,l.v9)(s.V5),m=(0,l.v9)(c.CG),d=(0,l.I0)();return(0,a.jsxs)("div",{className:"bg-gray-800 grid text-white grid-cols-12 gap-2 px-4",children:[(0,a.jsx)("div",{className:"col-span-12 mx-auto pb-5 ",children:(0,a.jsx)("h1",{className:"text-2xl font-bold",children:p})}),(0,a.jsxs)("div",{className:"col-span-12 xl:col-span-8 gap-2 grid grid-cols-12  text-black",children:[(0,a.jsxs)("label",{className:"input input-bordered col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-2 flex items-center text-black w-full",children:["Customer Name:",(0,a.jsx)("input",{type:"text",value:e,onChange:e=>d((0,s.BT)(e.target.value)),className:"grow pl-2  bg-gray-900"})]}),(0,a.jsxs)("label",{className:"input input-bordered col-span-12 md:col-span-6 lg:col-span-5  flex items-center w-full",children:["Plate #:",(0,a.jsx)("input",{type:"text",value:r,onChange:e=>d((0,s.h6)(e.target.value.toUpperCase())),className:"grow pl-2 bg-gray-900"})]}),(0,a.jsxs)("label",{className:"input input-bordered col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-2 flex items-center w-full",children:["Make/Model:",(0,a.jsx)("input",{type:"text",value:t,onChange:e=>d((0,s.jm)(e.target.value)),className:"grow pl-2 bg-gray-900"})]}),(0,a.jsxs)("label",{className:"input input-bordered col-span-12 md:col-span-6 lg:col-span-5 flex items-center w-full",children:["Repair Cost:",(0,a.jsx)("input",{type:"text",value:o,onChange:e=>{isNaN(Number(e.target.value))||d((0,s.CS)(Number(e.target.value)))},className:"grow pl-2 bg-gray-900"})]}),(0,a.jsxs)("label",{className:"input input-bordered col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-2 flex items-center w-full",children:["State ID:",(0,a.jsx)("input",{type:"text",value:n,onChange:e=>{isNaN(Number(e.target.value))||d((0,s.j3)(e.target.value))},className:"grow pl-2 bg-gray-900"})]}),(0,a.jsxs)("label",{className:"input input-bordered col-span-12 md:col-span-6 lg:col-span-5 flex items-center w-full",children:["Search:",(0,a.jsx)("input",{type:"text",value:m,onChange:e=>d((0,c.Cy)(e.target.value)),className:"grow pl-2 bg-gray-900"})]})]}),(0,a.jsx)("div",{className:"col-span-12 xl:col-span-4  text-black",children:(0,a.jsxs)("div",{className:"grid grid-cols-12 px-4 gap-2 w-full",children:[(0,a.jsx)("button",{className:"btn col-span-12 lg:col-span-5 lg:col-start-2 xl:col-span-8",onClick:()=>d((0,c.N8)()),children:"Reset Parts"}),(0,a.jsx)("button",{className:"btn col-span-12 lg:col-span-5 xl:col-span-8 bg-gray-900 text-white",onClick:()=>{d((0,c.i0)()),d((0,s.p7)())},children:"Clear All"})]})}),(0,a.jsx)("div",{className:"col-span-12 xl:col-span-3 mx-auto xl:col-start-5",children:(0,a.jsx)("div",{className:"flex items-center justify-between p-4 align-middle",children:(0,a.jsx)("div",{className:"flex gap-3 text-black",children:(0,a.jsxs)("label",{className:"mr-2 text-white flex",children:[(0,a.jsx)("input",{type:"checkbox",checked:i,onChange:e=>d((0,s.pX)(e.target.checked)),className:"toggle toggle-success"}),(0,a.jsx)("span",{className:"pl-4",children:"Is for Mech?"})]})})})})]})}var i=t(2265);function o(e){return new Intl.NumberFormat(void 0,{style:"currency",currency:"USD",maximumFractionDigits:0}).format(e).replace("US","")}let p=(e,r)=>"Customer Name: ".concat(e," ").concat(r?"[MECH]":"","\n"),m=e=>"Vehicle | [Make/Model]: ".concat(e,"\n"),d=e=>"Plate: ".concat(e,"\n"),u=e=>"Upgrades Purchased: ".concat(e,"\n"),x=e=>"Price Charged: ".concat(e,"\n"),h=e=>"SHOP: ".concat(e,"\n"),g=(e,r,t,a,l,s,c)=>"".concat(p(e,c)).concat(m(r)).concat(d(t)).concat(u(a)).concat(x(l)).concat(h(s)),v=(e,r)=>"".concat(r).concat(e>1?"x"+e:""),f=(e,r)=>"".concat(r).concat(e>1?"x"+e:""),b=(e,r,t,a)=>{if(2===a.size)return a.forEach((a,l)=>{l.name===r&&(e=e.replace("$1","".concat(a>1?"x"+a:""))),l.name===t&&(e=e.replace("$2","".concat(a>1?"x"+a:"")))}),e;{let e="";return a.forEach((r,t)=>{f(r,t.report),e+=f(r,t.report)}),e}},k=(e,r)=>e.price?r?e.price:e.price+e.markup:0;function y(){let[e,r]=(0,i.useState)(""),[t,n]=(0,i.useState)(0),[p,m]=(0,i.useState)([]),[d,u]=(0,i.useState)(0),[x,h]=(0,i.useState)([]),y=(0,l.I0)(),j=(0,l.v9)(c.t8),N=(0,l.v9)(c.j3),C=(0,l.v9)(s.P4),P=(0,l.v9)(s.tz),w=(0,l.v9)(s.El),S=(0,l.v9)(s.WV),R=(0,l.v9)(s.TJ),T=(0,l.v9)(s.V5),B=(0,l.v9)(s.ug),E=()=>{j.forEach(e=>{h(r=>[...r,{partName:e.name,isComplete:!1}]),u(r=>r+k(e,P))})};(0,i.useEffect)(()=>{let e=0,t=[],a=[],l=new Map,s=new Map,c=new Map,i=[];u(0),h([]),E(),N.forEach((r,n)=>{let o=n.name;n.report;let p=v(r,o),m=f(r,n.report);"Respray"===n.type?i.push(m):"Left Fender"==n.name||"Right Fender"==n.name?l.set(n,r):"Front Bumper"==n.name||"Rear Bumper"==n.name?s.set(n,r):"Trim A"==n.name||"Trim B"==n.name?c.set(n,r):a.push(m);let d=k(n,P)*r;t.push({partName:p,partPrice:d}),e+=d}),t.push({partName:"Repair",partPrice:R}),n(e+=R);let p=b("L$1/R$2 Fender","Left Fender","Right Fender",l),d=b("F$1/R$2 Bumper","Front Bumper","Rear Bumper",s),x=b("Trim A$1/B$2","Trim A","Trim B",c);p.length&&a.push(p),d.length&&a.push(d),x.length&&a.push(x),i.length>0&&a.push(i.join("/")+" Respray"),m([...t.sort((e,r)=>e.partName.localeCompare(r.partName))]),r(g(C,w,S,a.sort().join(", "),o(e),T,P))},[j,C,w,P,S,R,T,N,j]);let F=()=>{j.forEach(e=>{y((0,c.tu)(e))}),y((0,c.N8)())};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"px-4 grid grid-cols-12 pb-5 bg-gray-800 text-white mx-auto",children:[(0,a.jsxs)("div",{className:"text-center xl:order-1 col-span-12 xl:col-span-1 xl:col-start-2 grid grid-cols-1",children:[(0,a.jsxs)("div",{children:["Selected Parts Cost: ",o(d)]}),(0,a.jsxs)("div",{children:["State ID: ",B]})]}),(0,a.jsx)("div",{className:"divider divider-neutral col-span-12 xl:hidden"}),(0,a.jsxs)("div",{className:"gap-2 col-span-12 order-last xl:order-2 xl:col-span-2 xl:col-start-3 xl:px-4 xl:gap-0 h-full grid grid-cols-2 ",children:[(0,a.jsx)("button",{className:"btn col-span-2 w-full bg-gray-900 text-white",onClick:()=>document.getElementById("workList").showModal(),children:"Cashout"}),(0,a.jsx)("button",{className:"btn col-span-2 w-full",onClick:()=>document.getElementById("reportModal").showModal(),children:"Show Itemized"}),(0,a.jsx)("button",{className:"btn col-span-2 w-full bg-gray-900 text-white",onClick:()=>{navigator.clipboard.writeText("```"+e+"```")},children:"Copy to Clipboard"})]}),(0,a.jsx)("div",{className:"order-3 col-span-12 pb-3 px-4 xl:px-0 xl:col-span-4 xl:col-start-5",children:(0,a.jsx)("pre",{className:" text-wrap",children:e})})]}),(0,a.jsxs)("dialog",{id:"reportModal",className:"modal text-black",children:[(0,a.jsxs)("div",{className:"modal-box w-11/12 max-w-5xl text-wrap",children:[(0,a.jsx)("form",{method:"dialog",children:(0,a.jsx)("button",{className:"btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black",children:"✕"})}),(0,a.jsx)("h3",{className:"font-bold text-lg text-black",children:"Itemized Purchases"}),(0,a.jsx)("div",{className:"xl:w-2/5",children:p.map((e,r)=>(0,a.jsxs)("div",{className:"grid grid-cols-2",children:[(0,a.jsx)("div",{className:"text-black",children:e.partName}),(0,a.jsx)("div",{className:"text-black",children:o(e.partPrice)})]},r))}),(0,a.jsx)("ul",{}),(0,a.jsxs)("h3",{className:"font-bold text-black",children:["Total Cost: ",o(t)]})]}),(0,a.jsx)("form",{method:"dialog",className:"modal-backdrop",children:(0,a.jsx)("button",{children:"close"})})]}),(0,a.jsx)("dialog",{id:"workList",className:"modal text-black",children:(0,a.jsxs)("div",{className:"modal-box w-11/12 max-w-5xl text-wrap",children:[(0,a.jsx)("h3",{className:"font-bold text-lg text-black",children:"Select Work List"}),(0,a.jsx)("div",{className:"gap-1 xl:w-2/5",children:x.map((e,r)=>(0,a.jsxs)("div",{className:"grid grid-cols-12",children:[(0,a.jsx)("input",{className:"checkbox col-span-1",type:"checkbox"}),(0,a.jsx)("div",{className:"col-span-11 text-black",children:e.partName})]},r))}),(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-2 mt-2",children:[(0,a.jsx)("button",{className:"btn btn-sm btn-success col-span-1",onClick:()=>{document.getElementById("workList").close(),F()},children:"Complete Work"}),(0,a.jsx)("button",{className:"btn btn-sm btn-error col-span-1",onClick:()=>{document.getElementById("workList").close()},children:"Cancel"})]})]})})]})}let j=[{name:"Arch Cover",type:"Cosmetic",price:400,markup:100,report:"Arch Cover"},{name:"Aerial",type:"Cosmetic",price:400,markup:100,report:"Aerial"},{name:"Custom Tires",type:"Cosmetic",price:600,markup:100,report:"Custom Tires"},{name:"Dial",type:"Cosmetic",price:400,markup:100,report:"Dial"},{name:"Dashboard",type:"Cosmetic",price:400,markup:100,report:"Dashboard"},{name:"Door Speaker",type:"Cosmetic",price:400,markup:100,report:"Door Speaker"},{name:"Engine Block",type:"Cosmetic",price:400,markup:100,report:"Engine Block"},{name:"Exhaust",type:"Cosmetic",price:400,markup:100,report:"Exhaust"},{name:"Front Bumper",type:"Cosmetic",price:400,markup:100,report:"F Bumper"},{name:"Grille",type:"Cosmetic",price:400,markup:100,report:"Grille"},{name:"Hood",type:"Cosmetic",price:400,markup:100,report:"Hood"},{name:"Left Fender",type:"Cosmetic",price:400,markup:100,report:"L Fender"},{name:"Livery",type:"Cosmetic",price:400,markup:100,report:"Livery"},{name:"Ornaments",type:"Cosmetic",price:400,markup:100,report:"Ornaments"},{name:"Old Livery",type:"Cosmetic",price:100,markup:100,report:"Old Livery"},{name:"Fuel Tank",type:"Cosmetic",price:400,markup:100,report:"Fuel Tank"},{name:"Plate Index",type:"Cosmetic",price:1e3,markup:100,report:"Plate Index"},{name:"Rear Bumper",type:"Cosmetic",price:400,markup:100,report:"R Bumper"},{name:"Right Fender",type:"Cosmetic",price:400,markup:100,report:"R Fender"},{name:"Rims",type:"Cosmetic",price:400,markup:100,report:"Rims"},{name:"Rims Color",type:"Cosmetic",price:1e3,markup:100,report:"Rim Color"},{name:"Roof",type:"Cosmetic",price:400,markup:100,report:"Roof"},{name:"Roll Cage",type:"Cosmetic",price:400,markup:100,report:"Roll Cage"},{name:"Seats",type:"Cosmetic",price:400,markup:100,report:"Seats"},{name:"Side Skirt",type:"Cosmetic",price:400,markup:100,report:"Side Skirt"},{name:"Spoiler",type:"Cosmetic",price:400,markup:100,report:"Spoiler"},{name:"Steering Wheel",type:"Cosmetic",price:400,markup:100,report:"Steering Wheel"},{name:"Strut",type:"Cosmetic",price:400,markup:100,report:"Strut"},{name:"Speaker",type:"Cosmetic",price:400,markup:100,report:"Speaker"},{name:"Tint",type:"Cosmetic",price:400,markup:100,report:"Tint"},{name:"Trunk",type:"Cosmetic",price:400,markup:100,report:"Trunk"},{name:"Trim A",type:"Cosmetic",price:400,markup:100,report:"Trim A"},{name:"Trim B",type:"Cosmetic",price:400,markup:100,report:"Trim B"},{name:"Tire Smoke",type:"Cosmetic",price:400,markup:100,report:"Tire Smoke"},{name:"Vanity Plate",type:"Cosmetic",price:400,markup:100,report:"Vanity Plate"},{name:"Window",type:"Cosmetic",price:400,markup:100,report:"Window"},{name:"Plaque",type:"Cosmetic",price:400,markup:100,report:"Plaque"},{name:"Hydraulics",type:"Cosmetic",price:400,markup:100,report:"Hydraulic"},{name:"Shifter Leaver",type:"Cosmetic",price:400,markup:100,report:"Shifter Leaver"},{name:"Air Filter",type:"Cosmetic",price:400,markup:100,report:"Air Filter"}],N=[{name:"Turbo",type:"Performance",levels:[{level:1,price:1e4}],markup:1e3,report:"Turbo"},{name:"Armor",type:"Performance",report:"Armor",markup:1e3,levels:[{level:2,price:3250},{level:3,price:5500},{level:4,price:9450},{level:5,price:13250},{level:6,price:18500}]},{name:"Brakes",type:"Performance",report:"Brakes",markup:1e3,levels:[{level:2,price:3250},{level:3,price:5500},{level:4,price:9450},{level:5,price:13250}]},{name:"Engine",type:"Performance",report:"Engine",markup:1e3,levels:[{level:2,price:3250},{level:3,price:5500},{level:4,price:9450},{level:5,price:13250},{level:6,price:18500}]},{name:"Suspension",type:"Performance",report:"Suspension",markup:1e3,levels:[{level:2,price:3250},{level:3,price:5500},{level:4,price:9450},{level:5,price:13250},{level:6,price:18500}]},{name:"Transmission",type:"Performance",report:"Transmission",markup:1e3,levels:[{level:2,price:3250},{level:3,price:5500},{level:4,price:9450},{level:5,price:13250}]}],C=[{name:"Primary Respray",type:"Respray",price:1e3,markup:100,report:"P"},{name:"Secondary Respray",type:"Respray",price:1e3,markup:100,report:"S"},{name:"Pearlescent Respray",type:"Respray",price:1e3,markup:100,report:"Pearl"},{name:"Interior Respray",type:"Respray",price:1e3,markup:100,report:"I"},{name:"Dashboard Color",type:"Respray",price:1e3,markup:100,report:"D"}];var P=t(3784),w=t.n(P);function S(){return(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("div",{className:"font-bold underline text-2xl pb-2 text-black",children:"Cosmetics"}),(0,a.jsx)("div",{className:"grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4",children:j.sort((e,r)=>e.name.localeCompare(r.name)).map((e,r)=>(0,a.jsx)(R,{part:e},r))})]})}function R(e){let[r,t]=(0,i.useState)(e.part),[s,n]=(0,i.useState)(!1),[p,m]=(0,i.useState)(!1),d=(0,l.I0)(),u=(0,l.v9)(c.t8),x=(0,l.v9)(c.CG);return(0,i.useEffect)(()=>{0===u.length&&n(!1),r.name.toLowerCase().includes(x.toLowerCase())?m(!0):m(!1)},[u,x]),(0,a.jsxs)("button",{className:"btn grid h-full p-2 "+(s?"btn-success":"")+(p&&!1==s&&x?w().glowingborder:""),onClick:()=>{s?(n(!1),d((0,c.Bw)(r))):(n(!0),d((0,c.tK)(r)),p&&d((0,c.wQ)()))},children:[(0,a.jsx)("div",{className:"text-sm",children:r.name}),(0,a.jsx)("div",{className:"text-xs",children:o(r.price?r.price+r.markup:0)})]})}function T(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"font-bold underline text-2xl pb-2 text-black",children:"Performance"}),(0,a.jsx)("div",{className:"grid grid-cols-1 w-full ",children:N.map((e,r)=>(0,a.jsx)(B,{part:e},r))})]})}function B(e){let[r,t]=(0,i.useState)(e.part),[s,n]=(0,i.useState)(!1),o=(0,l.v9)(c.t8);return(0,i.useEffect)(()=>{if(0===o.length){n(!1);return}},[o]),(0,a.jsxs)("div",{className:"col-span-1 grid grid-cols-1 h-full pb-1 text-black",children:[(0,a.jsx)("div",{className:"text-lg col-span-1 font-bold xl:text-base pb-1 text-black",children:r.name}),(0,a.jsx)("div",{className:"text-xs",children:r.levels?(0,a.jsx)("div",{className:"grid col-span-1 grid-cols-3 h-full mx-2 gap-1",children:r.levels.map((e,t)=>(0,a.jsx)("div",{className:"col-auto grid",children:(0,a.jsx)(E,{index:t,part:r,level:e,isParentSelected:s,setParentSelected:n})},t))}):(0,a.jsx)(a.Fragment,{})})]})}function E(e){let{part:r,level:t,index:s,isParentSelected:n,setParentSelected:p}=e,[m,d]=(0,i.useState)(!1),[u,x]=(0,i.useState)({name:r.name+" Level:"+t.level,price:t.price,markup:r.markup,type:r.type,report:r.report}),h=(0,l.v9)(c.t8),g=(0,l.I0)();return(0,i.useEffect)(()=>{if(0===h.length){d(!1);return}},[h]),(0,a.jsxs)("button",{style:{display:"grid !important"},className:"btn btn-lg xl:btn grid grid-cols-1 h-full p-1 text-sm  "+(m?"btn-success":""),onClick:()=>{n?!m||(p(!1),d(!1),g((0,c.Bw)(u))):(p(!0),d(!0),g((0,c.tK)(u)))},children:[(0,a.jsxs)("div",{className:"col-span-1",children:["Level ",t.level]}),(0,a.jsx)("div",{className:"col-span-1",children:o(u.price?u.price+u.markup:0)})]},s)}function F(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"font-bold underline text-2xl pb-3 text-black",children:"Respray"}),(0,a.jsx)("div",{className:"grid grid-cols-2 gap-3 pb-4 xl:grid-cols-1 text-black ",children:C.map((e,r)=>(0,a.jsx)("div",{className:"mx-auto w-full col-span-1 lg:col-span-2 text-black",children:(0,a.jsx)(M,{part:e})},r))})]})}function M(e){let[r,t]=(0,i.useState)(e.part),[s,n]=(0,i.useState)(!1),p=(0,l.I0)(),m=(0,l.v9)(c.t8);return(0,i.useEffect)(()=>{if(0===m.length){n(!1);return}},[m]),(0,a.jsxs)("button",{className:"btn grid h-full p-2 w-full "+(s?"btn-success":""),onClick:()=>{s?(n(!1),p((0,c.Bw)(r))):(n(!0),p((0,c.tK)(r)))},children:[(0,a.jsx)("div",{className:"text-sm",children:r.name}),(0,a.jsx)("div",{className:"text-xs",children:o(r.price?r.price+r.markup:0)})]})}function L(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"grid grid-cols-1 bg-gray-800",children:[(0,a.jsx)("div",{className:"col-span-1 pt-4",children:(0,a.jsx)(n,{})}),(0,a.jsx)("div",{className:"col-span-1",children:(0,a.jsxs)("div",{className:"grid grid-cols-12 gap-4 h-full w-full pt-4 px-2 pb-4 bg-slate-300",children:[(0,a.jsx)("div",{className:"col-span-12 xl:col-span-7 text-center h-full",children:(0,a.jsx)(S,{})}),(0,a.jsx)("div",{className:"divider divider-neutral col-span-12 xl:hidden"}),(0,a.jsx)("div",{className:"col-span-12 lg:col-span-8 xl:col-span-3 text-center h-full",children:(0,a.jsx)(T,{})}),(0,a.jsx)("div",{className:"divider divider-neutral col-span-12 lg:hidden"}),(0,a.jsx)("div",{className:"col-span-12 lg:col-span-4 lg:pr-4 xl:col-span-2 text-center",children:(0,a.jsx)(F,{})})]})}),(0,a.jsx)("div",{className:"col-span-1 pt-4",children:(0,a.jsx)(y,{})})]})})}},655:function(e,r,t){"use strict";t.d(r,{default:function(){return p}});var a=t(7437),l=t(2265),s=t(1444),c=t(1404),n=t(207),i=t(5587);(0,t(4643).MD)();let o=()=>(0,c.xC)({reducer:{customer:n.ZP,parts:i.ZP}});function p(e){let{children:r}=e,t=(0,l.useRef)();return t.current||(t.current=o()),(0,a.jsx)(s.zt,{store:t.current,children:r})}},207:function(e,r,t){"use strict";t.d(r,{BT:function(){return l},CS:function(){return p},El:function(){return x},P4:function(){return d},TJ:function(){return f},V5:function(){return g},WV:function(){return u},h6:function(){return s},j3:function(){return n},jm:function(){return c},p7:function(){return m},pX:function(){return o},tz:function(){return v},ug:function(){return h}});let a=(0,t(1404).oM)({name:"customer",initialState:{name:"",plate:"",makemodel:"",stateid:"",shopname:"Hayes",isMech:!1,repairPrice:0},reducers:{setname:(e,r)=>{e.name=r.payload},setplate:(e,r)=>{e.plate=r.payload},setmakemodel:(e,r)=>{e.makemodel=r.payload},setstateid:(e,r)=>{e.stateid=r.payload},setshopname:(e,r)=>{e.shopname=r.payload},setMech:(e,r)=>{e.isMech=r.payload},setRepairPrice:(e,r)=>{e.repairPrice=r.payload},resetAll:e=>{e.name="",e.plate="",e.makemodel="",e.stateid="",e.isMech=!1,e.repairPrice=0}}}),{setname:l,setplate:s,setmakemodel:c,setstateid:n,setshopname:i,setMech:o,setRepairPrice:p,resetAll:m}=a.actions,d=e=>e.customer.name,u=e=>e.customer.plate,x=e=>e.customer.makemodel,h=e=>e.customer.stateid,g=e=>e.customer.shopname,v=e=>e.customer.isMech,f=e=>e.customer.repairPrice;r.ZP=a.reducer},5587:function(e,r,t){"use strict";t.d(r,{Bw:function(){return n},CG:function(){return v},Cy:function(){return d},N8:function(){return i},i0:function(){return m},j3:function(){return g},t8:function(){return h},tK:function(){return c},tu:function(){return u},wQ:function(){return x}});var a=t(1404);let l={selectedParts:[],completedParts:new Map,search:""},s=(0,a.oM)({name:"parts",initialState:l,reducers:{AddToSelectedParts:(e,r)=>{e.selectedParts.push(r.payload)},RemoveFromSelectedParts:(e,r)=>{e.selectedParts=e.selectedParts.filter(e=>e.name!==r.payload.name)},ClearSelectedParts:e=>{e.selectedParts=[]},AddCompletedPart:(e,r)=>{if(e.completedParts.has(r.payload)){var t;let a=null!==(t=e.completedParts.get(r.payload))&&void 0!==t?t:0;e.completedParts.set(r.payload,a+1)}else e.completedParts.set(r.payload,1)},AddCompletedParts:e=>{e.selectedParts.forEach(r=>{if(e.completedParts.has(r)){var t;let a=null!==(t=e.completedParts.get(r))&&void 0!==t?t:0;e.completedParts.set(r,a+1)}else e.completedParts.set(r,1)})},ClearCompletedParts:e=>{e.completedParts=new Map},ResetAllParts:e=>{e.selectedParts=[],e.completedParts=new Map},UpdateSearch:(e,r)=>{e.search=r.payload},ResetSearch:e=>{e.search=""}}}),{AddToSelectedParts:c,RemoveFromSelectedParts:n,ClearSelectedParts:i,AddCompletedParts:o,ClearCompletedParts:p,ResetAllParts:m,UpdateSearch:d,AddCompletedPart:u,ResetSearch:x}=s.actions,h=e=>e.parts.selectedParts,g=e=>e.parts.completedParts,v=e=>e.parts.search;r.ZP=s.reducer},3784:function(e){e.exports={glowingborder:"Cosmetics_glowingborder__9mV6_"}}},function(e){e.O(0,[143,642,971,23,744],function(){return e(e.s=9460)}),_N_E=e.O()}]);