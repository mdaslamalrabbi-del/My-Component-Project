
const G=[
["Base","Alert Banner,Alert Info,Avatar,Avatar Initial,Avatar Placeholder,Badge Schedule,Button,Button Caret,Button Dropdown,Button Icon,Button Icon Small,Button Open With,Button Send,Button Skip,Chip,Chip Group,Divider,Icon Tile,Icon Tile Small,Legend Item,Scrollbar,Step Indicator,Toast Error,Tooltip,Waveform,Inline Code,Context Chip"],
["Forms","Checkbox Row,Drop Zone,Input,Input Search,Input Search Filter,Instructions Field,Instructions Setting,Model Select,Radio,Radio Card,Select,Select Sort,Select Time,Textarea,Textarea Chat,Textarea Instructions,Time Range,Toggle,Toggle Accent,Toggle Base,Toggle Switch,Text Field,Select Option,Select Menu,Checkbox,Checkbox Field"],
["Navigation","File Tree,File Tree Expanded,Header Bar,Header Bar Project,Mode Switch,Mode Switch Item,Nav Item,Nav Item Settings,Pane Header,Segmented Control,Sidebar,Sidebar Settings,Tab Bar,Tab Pill,Tab Underline,Top Nav,Header Toggle,Pill Toggle,Pane Tab,Pane Toolbar"],
["Overlays","Date Picker,Dialog Confirm,Dialog Import Memory,Dialog Settings Form,Dropdown Item,Dropdown Menu,Dropdown Microphone,File Picker,Menu,Menu Item,Modal Backdrop,Permission Alert,Permission Prompt,Suggestion List"],
["Data display","Accordion,Activity Group,Activity Step,Analytics Card,Analytics Card Large,Catalog Item,Code View,Connector Actions,Description Card,Details,Feature List Item,History Item,Line Chart,List Title,Markdown Line,Markdown Preview,Memory Update,Meta Row,Permission Group Expanded,Permission Group Row,Permission List,Permission Row,Plugin Details,Plugin Row,Preview Card,Project List Item,Project Progress Item,Pull Request Row,Settings Row,Step,Sub Step,Suggestion Item,Suggestion List,Table Connections,Table Connectors,Table Header Connectors,Table Invoices,Table Row,Table Row Connector,Table Row Files,Table Uploads,Task Row,Terminal Output,Timeline Row,Usage Summary,Code Line,Diff Summary,Step Row,Stat Tile,Heatmap Cell,Usage Stats Card,Table Row Simple,List Item,Changed File Row,Inline Comment"],
["Application blocks","Activity Panel,Auth Flow,Chat Message,Command Output,Composer,Composer Zone,Composer Zone Compact,Connector Hero,Context Panel,Preview Panel,Pricing Card,Settings General,Task Card,Template Item,Usage Dashboard,Usage Dashboard Alt,User Message,Promo Banner,Message Actions,Command Bar,Changed Files Card,Browser Pane,Editor Pane,File Diff"],
["Brand and icons","App Icon Folder,App Icon Generic,App Icon Music,App Icon iCloud,App Logo Tile,Logo Google,Logo Google Tile,Logo Mastercard,Logo Visa,Plan Illustration,Window Controls,iCloud Glyph,Icon Connector,Icon Eye Slash Circle,Icon Hand Circle,Icon Memory Recover,Icon Model Settings,Icon Reflect,Gutter Button Add Comment"]
].map(([n,s])=>({n,items:s.split(",")}));
const slug=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
let SC=null;
G.forEach(g=>{const par=m=>g.items.filter(x=>x!==m&&m.startsWith(x+" ")).sort((a,b)=>b.length-a.length)[0];g.root={};g.fam={};
 g.items.forEach(n=>{let r=n,q=par(n);while(q){r=q;q=par(r)}g.root[n]=r;const NEST={"Tab Pill":"Tab Bar","Tab Underline":"Tab Bar"};if(NEST[n]&&g.items.includes(NEST[n]))g.root[n]=NEST[n]});
 g.roots=g.items.filter(n=>g.root[n]===n);
 g.roots.forEach(r=>{g.fam[r]=[r,...g.items.filter(n=>n!==r&&g.root[n]===r)]})});
const FW=[["next","Next.js"],["rn","React Native"],["flutter","Flutter"],["vue","Vue"]];
const D={
 button:{d:"Triggers an action. Four variants and three sizes, matching the Button component set in Figma.",
  ctl:[{k:"variant",o:["primary","secondary","ghost","danger"]},{k:"size",o:["sm","md","lg"]},{k:"disabled",b:1}],
  p:{variant:"primary",size:"md",disabled:false},
  v:p=>`<button class="b ${p.variant} ${p.size}" ${p.disabled?"disabled":""}>Save changes</button>`,
  props:[["variant",'"primary" | "secondary" | "ghost" | "danger"','"primary"'],["size",'"sm" | "md" | "lg"','"md"'],["disabled","boolean","false"]]},
 input:{d:"A single-line text field with default, error and disabled states.",
  ctl:[{k:"size",o:["md","lg"]},{k:"error",b:1},{k:"disabled",b:1}],
  p:{size:"md",error:false,disabled:false},
  v:p=>`<input class="in ${p.size} ${p.error?"error":""}" placeholder="Project name" ${p.disabled?"disabled":""} aria-invalid="${p.error}">`,
  props:[["size",'"md" | "lg"','"md"'],["error","boolean","false"],["disabled","boolean","false"]]},
 toggle:{d:"An on/off switch. Exposes role=switch for assistive technology.",
  ctl:[{k:"on",b:1},{k:"disabled",b:1}],
  p:{on:true,disabled:false},
  v:p=>`<button class="tg" role="switch" aria-checked="${p.on}" ${p.disabled?"disabled":""} data-tg></button>`,
  props:[["checked","boolean","false"],["onChange","(next: boolean) => void","-"],["disabled","boolean","false"]]}
};
const FIG="https://www.figma.com/design/1s07efKRvaR9XlBI1WXfX6/Puku-SH--Copy-?node-id=";
const PL=(l,on)=>`<span class="pl ${on?"s":""}">${l}</span>`;
const li=a=>a.map(v=>`<span>${v}</span>`).join("");
D.button.fig="405:8245";D.input.fig="784:140412";D.toggle.fig="989:301490";
D["analytics-card"]={d:"Token usage over time with a model breakdown. Built from the Figma component, with colors and spacing taken from its layout data.",fig:"1024:292801",
 props:[["bars","{ h: number; on: boolean }[]","-"],["yLabels","string[]","-"],["xLabels","string[]","-"],["models","{ name; usage; share }[]","-"],["activeTab",'"Overview" | "Models"','"Overview"'],["activeRange",'"All" | "30d" | "7d"','"All"']],
 sec:[{id:"analytics",t:"Default analytics card",d:"A 485px card. Pills in the header switch the tab and the date range.",
  ctl:[{k:"tab",o:["Overview","Models"]},{k:"range",o:["All","30d","7d"]}],p:{tab:"Overview",range:"All"},
  v:p=>{const B=[4,2,148,75,130,4,75,75,68,4,50,159,4,8,8,6,4],O=[0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0];
   return `<div class="ac"><div class="row">${["Overview","Models"].map(t=>PL(t,t==p.tab)).join("")}<span class="sp"></span>${["All","30d","7d"].map(t=>PL(t,t==p.range)).join("")}</div>
<div class="mc"><div class="ch"><div class="y">${li(["400.0M","300.0M","200.0M","100.0M","0"])}</div><div class="bars">${B.map((h,i)=>`<i class="${O[i]?"on":""}" style="height:${h}px"></i>`).join("")}</div></div><div class="x">${li(["Jul 9","Jul 13","Jul 16","Jul 19","Jul 22","Jul 25","Jul 27","Jul 29"])}</div></div>
<ul>${[["glm-52","1.4B in · 18.0M out","99.1%"],["MiniMax-M3-W8A8","12.6M in · 117.5k out","0.9%"]].map(m=>`<li><span><s></s>${m[0]}</span><span><em>${m[1]}</em><b>${m[2]}</b></span></li>`).join("")}</ul></div>`}},
 {id:"tabpill",t:"Tab pill",d:"The pill used in the card header: 20px tall, 6px side padding, 4px radius.",
  ctl:[{k:"selected",b:1}],p:{selected:true},v:p=>`<div class="ac" style="width:auto">${PL("Overview",p.selected)}</div>`}]};
const R={"analytics-card":["Stat Tile","Usage Stats Card","Description Card","Preview Card","Usage Summary","Line Chart","Heatmap Cell"]};
const SZ={24:{h:24,fs:12,r:6,g:4,ic:16,t:12,o:10,b:4,y:4},32:{h:32,fs:14,r:8,g:6,ic:16,t:12,o:8,b:8,y:8},36:{h:36,fs:14,r:8,g:8,ic:18,t:14,o:12,b:8,y:9},40:{h:40,fs:14,r:8,g:8,ic:20,t:16,o:14,b:8,y:10},48:{h:48,fs:16,r:8,g:8,ic:24,t:20,o:16,b:10,y:12}};
const SV=(n,d)=>`<svg width="${n}" height="${n}" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color:#d2cfd9"><path d="${d}"/></svg>`;
const ICL=n=>SV(n,"M12.5 4 6.5 10l6 6"),ICR=n=>SV(n,"M7.5 4l6 6-6 6"),ICD=n=>SV(n,"M4 7.5l6 6 6-6");
function FB(o){const s=SZ[o.size],only=o.only,k=only?s.y:o.l&&o.r?s.b:o.l||o.r?s.o:s.t,st=o.state||"";
 return `<button class="fb ${s.h==24?"z24":""} ${only?"io":""} ${st=="h"?"h":st=="a"?"a":""} ${st=="d"?"d":""}" ${st=="d"?"disabled":""} style="height:${s.h}px;${only?`width:${s.h}px;`:""}padding:0 ${k}px;gap:${s.g}px;font-size:${s.fs}px;border-radius:${only?8:s.r}px" ${only?'aria-label="Open menu"':""}>${only?ICD(s.ic):`${o.l?ICL(s.ic):""}Button${o.r?ICR(s.ic):""}`}</button>`}
const STS=[["Default",""],["Hover","h"],["Active","a"],["Disabled","d"]];
const rowStates=o=>`<div class="bm">${STS.map(([t,c])=>`<figure class="bf">${FB({...o,state:c})}<figcaption>${t}</figcaption></figure>`).join("")}</div>`;
const SIZEOPT={k:"size",o:["24","32","36","40","48"]};
const U=(fw,o)=>{const sz=o.size?(fw=="flutter"?`, size: ButtonSize.px${o.size}`:fw=="vue"?` :size="${o.size}"`:fw=="rn"?` size={${o.size}}`:` size={${o.size}}`):"";
 if(fw=="next")return "// Usage\n"+(o.only?`<Button iconOnly={<ChevronDown size={20} />} aria-label="Open menu"${sz} />`:`<Button${sz}${o.l?" iconLeft={<ChevronLeft size={20} />}":""}${o.r?" iconRight={<ChevronRight size={20} />}":""}>Button</Button>`);
 if(fw=="rn")return "// Usage\n"+(o.only?`<Button iconOnly={<ChevronDown size={20} color="#D2CFD9" />}${sz} onPress={open} />`:`<Button title="Button"${sz}${o.l?' iconLeft={<ChevronLeft size={20} color="#D2CFD9" />}':""}${o.r?' iconRight={<ChevronRight size={20} color="#D2CFD9" />}':""} onPress={go} />`);
 if(fw=="flutter")return "// Usage\n"+(o.only?`PukuButton(iconOnly: const Icon(Icons.expand_more, size: 20)${sz}, onPressed: open)`:`PukuButton(label: "Button"${sz}${o.l?", iconLeft: const Icon(Icons.chevron_left, size: 20)":""}${o.r?", iconRight: const Icon(Icons.chevron_right, size: 20)":""}, onPressed: go)`);
 return "<!-- Usage -->\n"+(o.only?`<Button icon-only${sz} aria-label="Open menu"><ChevronDown :size="20" /></Button>`:`<Button${sz}>${o.l?'<template #left><ChevronLeft :size="20" /></template>':""}Button${o.r?'<template #right><ChevronRight :size="20" /></template>':""}</Button>`)};
const BT=(id,t,d,o)=>({id,cid:"btn2",t,d,ctl:[SIZEOPT],p:{size:"40"},v:p=>rowStates({...o,size:+p.size}),use:fw=>U(fw,o)});
D.button={d:"A neutral button with four states and five layouts, read from the Base/Button component set in Figma. Sizes are 24, 32 and 40 in Figma; 36 and 48 are proposed additions.",fig:"405:8245",
 props:[["size","24 | 32 | 36 | 40 | 48","40"],["iconLeft","ReactNode","-"],["iconRight","ReactNode","-"],["iconOnly","ReactNode","-"],["disabled","boolean","false"],["children","ReactNode","-"]],
 mini:()=>FB({size:32}),
 sec:[BT("btn-text","Text only","Label only. Padding 16 / 12 / 12 for 40 / 32 / 24. Hover and Active use the #27272A fill with a #333137 outline; Disabled drops to #6C6A64 text.",{}),
 BT("btn-left","Icon left","Leading icon, then the label. Padding 14 / 8 / 10. Icons are 20px at 40 and 16px below.",{l:1}),
 BT("btn-right","Icon right","Label, then a trailing icon. Same padding as icon left.",{r:1}),
 BT("btn-both","Icon left and right","Both icons. Padding 8 / 8 / 4.",{l:1,r:1}),
 BT("btn-icon","Icon only","A square button that is as wide as it is tall, with a #27272A outline. Always add an aria-label.",{only:1}),
 {id:"btn-sizes",cid:"btn2",t:"Sizes",d:"24, 32 and 40 are in Figma. 36 and 48 are not in the file; their padding and icon sizes are proposed to fit between and above the others.",
  p:{},v:()=>`<table class="bt"><tr><th></th><th>Text</th><th>Icon left</th><th>Icon right</th><th>Both</th><th>Icon only</th></tr>${[24,32,36,40,48].map(n=>`<tr><td>${n}px${n==36||n==48?" (proposed)":""}</td><td>${FB({size:n})}</td><td>${FB({size:n,l:1})}</td><td>${FB({size:n,r:1})}</td><td>${FB({size:n,l:1,r:1})}</td><td>${FB({size:n,only:1})}</td></tr>`).join("")}</table>`,
  use:fw=>[24,32,36,40,48].map(n=>U(fw,{size:n}).replace(/^(\/\/ Usage|<!-- Usage -->)\n/,"")).join("\n").replace(/^/,fw=="vue"?"<!-- Usage -->\n":"// Usage\n")}]};
const SVG=(n,vb,inner,sw,cls)=>`<svg class="${cls||""}" viewBox="0 0 ${vb} ${vb}" width="${n}" height="${n}" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
const C10=SVG(10,10,'<path d="M1.875 3.75 5 6.875 8.125 3.75"/>',.75),C12=SVG(12,12,'<path d="M2.25 4.5 6 8.25 9.75 4.5"/>',.75),C16=SVG(16,16,'<path d="M3 6l5 5 5-5"/>',1);
const FOLD=SVG(12,12,'<path d="M1.5 9V3.1c0-.3.2-.5.5-.5h2.2l1 1.1H9c.3 0 .5.2.5.5v.9"/><path d="M1.5 9l1-3.3c.1-.2.3-.4.5-.4h7.7c.3 0 .5.3.4.6L9.9 8.8c-.1.2-.3.2-.5.2z"/>',.75);
const CLK=SVG(8,8,'<circle cx="4" cy="4" r="3"/><path d="M4 2.2V4l1.1.7"/>',.75);
const fig2=(a,c)=>`<figure class="bf">${a}<figcaption>${c}</figcaption></figure>`;
const CHIP=(o)=>`<span class="ch ${o.o?"o":""}">${o.l?FOLD:""}${o.t||""}${o.r?C12:""}</span>`;
D["badge-schedule"]={d:"A small green badge with a clock icon and a schedule label. 18px tall, 4px radius.",fig:"989:301469",
 props:[["label","string","-"]],mini:()=>`<span class="bs">${CLK}Weekly</span>`,
 sec:[{id:"badgeschedule",t:"Default badge",d:"Fill #1B4721 with #3FB950 text and icon. Padding 4px left and 6px right, 4px gap.",p:{},v:()=>`<span class="bs">${CLK}Every Monday at ~8:00 AM</span>`}]};
D["button-caret"]={d:"A bare 10px caret that turns into a tall pill while pressed.",fig:"565:37616",
 props:[["pressed","boolean","false"],["onClick","() => void","-"]],
 sec:[{id:"caret",t:"Caret button",d:"Default is the caret alone in #A1A1AA. Pressed is a 10 by 16 pill with a #272729 fill. Hold the mouse down on the first one to see it.",p:{},
  v:()=>`<div class="bm">${fig2(`<button class="bc" aria-label="Toggle">${C10}</button>`,"Default")}${fig2(`<button class="bc p" aria-label="Toggle">${C10}</button>`,"Pressed")}</div>`}]};
D["button-dropdown"]={d:"A light 32px button with a label and a trailing caret.",fig:"989:302177",
 props:[["label","string",'"New task"'],["onClick","() => void","-"]],
 sec:[{id:"dropdown",t:"Dropdown button",d:"Fill #F7F5FA with #121113 text, 14px Inter. Padding 12px left, 10px right, 6px gap, 8px radius.",p:{},v:()=>`<button class="bd">New task${C12}</button>`}]};
D["button-open-with"]={d:"A dark button with optional carets on both sides of a label. Two sizes.",fig:"845:245879",
 props:[["text","string","-"],["size",'"large" | "default"','"large"'],["showLeft","boolean","true"],["showRight","boolean","true"]],
 sec:[{id:"openwith",t:"Open with button",d:"Large is 32px tall with 16px carets and an 8px radius. Default is 24px tall with 12px carets and a 6px radius. Text is 12px Inter Medium.",
  ctl:[{k:"size",o:["Large","Default"]},{k:"left",b:1},{k:"right",b:1}],p:{size:"Large",left:true,right:true},
  v:p=>`<button class="ow ${p.size=="Large"?"l":"s"}">${p.left?C16:""}<span>Open in TextEdit</span>${p.right?C16:""}</button>`}]};
D["button-send"]={d:"A 32px square button with three states: send, pause and disabled.",fig:"745:186162",
 props:[["state",'"send" | "pause" | "disabled"','"send"'],["onClick","() => void","-"]],
 sec:[{id:"send",t:"Send button",d:"Send has a #9C86FF fill and a blue to violet gradient outline. Pause and Disabled use #272729 with a stop square or a muted arrow.",p:{},
  v:()=>`<div class="bm">${fig2(`<button class="snd send" aria-label="Send">${SVG(16,16,'<path d="M8 2.5v11M3.5 7 8 2.5 12.5 7"/>',1,"a")}</button>`,"Send")}${fig2(`<button class="snd" aria-label="Stop">${SVG(20,20,'<rect x="3.125" y="3.125" width="13.75" height="13.75" rx="2"/>',1.25,"b")}</button>`,"Pause")}${fig2(`<button class="snd dis" disabled aria-label="Send">${SVG(20,20,'<path d="M10 3.125v13.75M4.375 8.75 10 3.125l5.625 5.625"/>',1.25,"b")}</button>`,"Disabled")}</div>`}]};
D["button-skip"]={d:"A small 24px button, either filled or text only, with optional carets.",fig:"499:8681",
 props:[["kind",'"button" | "text"','"button"'],["showLeft","boolean","false"],["showRight","boolean","false"],["children","ReactNode",'"Skip"']],
 sec:[{id:"skip",t:"Skip button",d:"Button has a #272729 fill and 12px regular text. Text has no fill and uses Inter Medium. Padding 12px, radius 6px.",
  ctl:[{k:"type",o:["Button","Text"]},{k:"left",b:1},{k:"right",b:1}],p:{type:"Button",left:false,right:false},
  v:p=>`<button class="sk ${p.type=="Text"?"t":""}">${p.left?C10:""}Skip${p.right?C10:""}</button>`}]};
D.chip={d:"A compact 20px label with optional leading and trailing icons.",fig:"599:54014",
 props:[["label","string","-"],["leftIcon","boolean","true"],["rightIcon","boolean","true"],["outlined","boolean","false"]],
 mini:()=>CHIP({l:1,r:1,t:"Cowork Demo"}),
 sec:[{id:"chip",t:"Default chip",d:"Fill #272729, 4px radius, 11px Inter Medium text in #D2CFD9. Icons are 12px. Turn on outlined to add the #333137 border used inside chip groups.",
  ctl:[{k:"left",b:1},{k:"label",b:1},{k:"right",b:1},{k:"outlined",b:1}],p:{left:true,label:true,right:true,outlined:false},
  v:p=>CHIP({l:p.left,r:p.right,o:p.outlined,t:p.label?"Cowork Demo":""})}]};
D["chip-group"]={d:"A line of text with chips inline, separated by commas.",fig:"1113:540664",
 props:[["prefix","string","-"],["items","string[]","-"],["suffix","string","-"]],
 sec:[{id:"chipgroup",t:"Chip group",d:"Outlined chips with no icons, 2px gap, with 13px white text around them.",p:{},
  v:()=>`<div class="cg"><span class="tx">Files:</span>${["server.py","requirements.txt","README.md","README.md","README.md"].map((t,i,a)=>CHIP({o:1,t})+(i<a.length-1?'<span class="tx">,</span>':"")).join("")}<span class="tx">(no existing files touched)</span></div>`}]};
const WV="M0 3"+" q2.5 -1.6 5 0"+" t5 0".repeat(59);
const DLINE=(w,extra)=>`<div class="dvl" style="width:${w};height:1px;${extra||""}"></div>`;
const NODES=SVG(16,16,'<circle cx="7.5" cy="3" r="1.5"/><circle cx="2.5" cy="7.5" r="1.5"/><circle cx="10" cy="13" r="1.5"/><circle cx="13" cy="4.5" r="1.5"/><path d="M9 3.4l2.7.7M6.2 3.8 3.6 6.5M3.3 8.8 8.9 12M10.9 11.7l1.5-5.7"/>',1);
const CASE=SVG(20,20,'<rect x="2.5" y="6" width="15" height="10.5" rx="1.5"/><path d="M7 6V4.5c0-.6.4-1 1-1h4c.6 0 1 .4 1 1V6M2.5 11h15"/>',1.25);
const WARN=SVG(16,16,'<path d="M8 2.2 14.3 13.2H1.7z"/><path d="M8 6.5v3M8 11.4v.1"/>',1);
const XX=SVG(16,16,'<path d="M3.5 3.5l9 9M12.5 3.5l-9 9"/>',1);
const CHK=SVG(8,8,'<path d="M1.6 4.2 3.2 5.8 6.4 2.4"/>',1.1);
const glyph=(a,c)=>`<figure class="bf">${a}<figcaption>${c}</figcaption></figure>`;
D.divider={d:"A 1px line in #272729 in four forms: full width, inset, vertical and wavy.",fig:"716:105746",
 props:[["type",'"default" | "padded" | "vertical" | "wave"','"default"'],["className","string",'""']],
 sec:[{id:"divider",t:"Divider types",d:"Default fills its width. With padding is inset by 8px on each side. Horizontal is the vertical rule: 24px tall with 8px above and below. Wave is a soft squiggle. All use #272729, so they are faint on a dark canvas, as in Figma.",p:{},
  v:()=>`<div style="display:flex;flex-direction:column;gap:22px;width:100%;max-width:420px;align-items:flex-start"><div style="width:100%">${DLINE("100%")}</div><div style="width:100%;padding:0 8px;box-sizing:border-box">${DLINE("100%")}</div><div style="display:flex;gap:24px;align-items:center;width:100%"><div style="height:40px;padding:8px 0;box-sizing:border-box"><div class="dvl" style="width:1px;height:24px"></div></div><svg class="dvw" width="100%" height="6" viewBox="0 0 300 6" preserveAspectRatio="none" fill="none" style="flex:1"><path d="${WV}" stroke="#4a4a52"/></svg></div></div>`}]};
D.scrollbar={d:"A 6px scrollbar thumb with a default and a hover color.",fig:"883:128446",
 props:[["state",'"default" | "hover"','"default"']],
 sec:[{id:"scrollbar",t:"Scrollbar thumb",d:"Default is #333137. Hover is #D2CFD9. The thumb is 6px wide with a 4px radius. Hover over the first one.",p:{},
  v:()=>`<div class="bm">${glyph('<div class="sbt" style="height:160px"></div>',"Default")}${glyph('<div class="sbt h" style="height:160px"></div>',"Hover")}</div>`}]};
D["step-indicator"]={d:"Three 12px glyphs used to show progress: a done check, a caret separator and a number.",fig:"481:32986",
 props:[["status",'"done" | "caret" | "number"','"done"'],["number","number","-"]],
 sec:[{id:"stepindicator",t:"Step indicator",d:"Done is a #A1A1AA circle with a dark check. The caret separates steps. The number is 11px Inter in #A1A1AA.",
  ctl:[{k:"number",o:["1","2","3","4"]}],p:{number:"2"},
  v:p=>`<div class="bm" style="gap:36px">${glyph(`<span class="stp dn">${CHK}</span>`,"Done")}${glyph(`<span class="stp">${SVG(12,12,'<path d="M4.5 2.25 8.25 6 4.5 9.75"/>',.75)}</span>`,"Caret")}${glyph(`<span class="stp n">${p.number}</span>`,"Number")}</div>`}]};
D["toast-error"]={d:"A red error message with an icon and a dismiss button. 32px tall.",fig:"745:202879",
 props:[["message","string","-"],["onDismiss","() => void","-"]],
 sec:[{id:"toasterror",t:"Error toast",d:"Fill #5A1A1A with #FF9492 text and icons. Padding 8px, 12px gap, 6px radius, text 12px Inter SemiBold.",p:{},
  v:()=>`<div class="te" role="alert">${WARN}<span>File access was denied</span><button aria-label="Dismiss">${XX}</button></div>`}]};
D.tooltip={d:"A small dark box with a short message. 189px wide in Figma.",fig:"645:99721",
 props:[["children","ReactNode","-"],["width","number","189"]],
 sec:[{id:"tooltip",t:"Tooltip",d:"Fill #181715 with a 1px #272729 outline and 6px radius. Text is 11px Inter Medium in #D2CFD9, with 8px padding.",p:{},
  v:()=>`<div class="tt" role="tooltip">Connection has expired. You can reconnect to re-authenticate.</div>`}]};
D["icon-tile"]={d:"A 40px rounded square that holds one 16px icon.",fig:"518:32383",
 props:[["children","ReactNode","-"]],mini:()=>`<span class="it">${NODES}</span><span class="it s" style="margin-left:8px">${CASE}</span>`,
 sec:[{id:"icontile",t:"Icon tile",d:"Fill #272729, 8px radius, icon in #D2CFD9. The icon in Figma is swappable; this one is the artifacts icon.",p:{},v:()=>`<span class="it">${NODES}</span>`}]};
D["icon-tile-small"]={d:"A 36px version of the icon tile with a 20px icon.",fig:"806:192624",
 props:[["children","ReactNode","-"]],
 sec:[{id:"icontilesmall",t:"Small icon tile",d:"Same fill and radius as the large tile, with 8px padding around a 20px icon. The default icon in Figma is a circle; the screenshot shows it swapped for a briefcase.",p:{},v:()=>`<span class="it s">${CASE}</span>`}]};
D["inline-code"]={d:"A tiny 16px chip for code inside text, in an accent or a normal tone.",fig:"989:302185",
 props:[["children","ReactNode","-"],["tone",'"accent" | "normal"','"accent"']],
 sec:[{id:"inlinecode",t:"Inline code",d:"Fill #272729 with 4px padding and radius. Accent text is #FF9492. Normal text is #D2CFD9. Set in 12px Inter, as in the file.",
  ctl:[{k:"code",o:["g","npm i","useState","x = 1"]}],p:{code:"g"},
  v:p=>`<div class="icp"><span class="icd a">${p.code}</span><span class="icd">${p.code}</span></div>`}]};
D["legend-item"]={d:"A colored dot followed by a label and an optional value.",fig:"1001:441118",
 props:[["color","string",'"#9C86FF"'],["label","string","-"],["value","string","-"]],
 sec:[{id:"legenditem",t:"Legend item",d:"A 10px dot in #9C86FF, then a #D2CFD9 label and a muted #A1A1AA value, in 14px Inter. 12px between the dot and text.",p:{},
  v:()=>`<div class="lg"><i></i><span>Cowork tasks<b>Cowork tasks</b></span></div>`}]};
D["alert-banner"]={d:"An inline notice with a trailing toggle. 44px tall, 1px border, 8px radius, 14px side padding.",fig:"989:302146",
 props:[["message","string","-"],["action","string","-"],["checked","boolean","false"],["onCheckedChange","(next: boolean) => void","-"]],
 sec:[{id:"alertbanner",t:"Default alert banner",d:"Info icon, message, then an action label with a toggle. The toggle is the Forms/Toggle component; only its off state has been read from Figma, so the on color is a placeholder.",
  ctl:[{k:"checked",b:1}],p:{checked:false},
  v:p=>`<div class="ab"><svg viewBox="0 0 16 16" fill="none" stroke="#a1a1aa"><circle cx="8" cy="8" r="6"/><path d="M8 7.5V11M8 5.2v.3" stroke-linecap="round"/></svg><p>Tasks set to run on your computer only run while it’s awake and online.</p><svg viewBox="0 0 16 16" fill="none" stroke="#a1a1aa"><circle cx="8" cy="8" r="3.5"/><path d="M8 1v1.5M8 13.5V15M1 8h1.5M13.5 8H15M3 3l1 1M12 12l1 1M3 13l1-1M12 4l1-1" stroke-linecap="round"/></svg><span class="act">Keep awake</span><button class="abt ${p.checked?"on":""}" role="switch" aria-checked="${p.checked}" data-ab></button></div>`}]};
D["alert-info"]={d:"A filled notice with a leading icon. 12px padding, 16px gap, 12px radius, no border.",fig:"988:395667",
 props:[["children","ReactNode | string","-"]],
 sec:[{id:"alertinfo",t:"Default alert info",d:"Use for a short warning or hint that sits above a form or list.",
  p:{},v:p=>`<div class="ai"><svg viewBox="0 0 26 26" fill="none" stroke="#d2cfd9" stroke-width="1.5"><circle cx="13" cy="13" r="9.5"/><path d="M13 12v5.5M13 8.8v.4" stroke-linecap="round"/></svg><p>Only use connectors from developers you trust. Anthropic does not control which tools developers make available and cannot verify that they will work as intended or that they won’t change.</p></div>`}]};
R["alert-banner"]=["Alert Info","Toast Error","Permission Alert","Toggle"];R["alert-info"]=["Alert Banner","Toast Error","Permission Alert","Description Card"];
D.avatar={d:"A 46px circle filled with the black base color. Use it as the empty avatar.",fig:"784:123475",
 props:[["size","number","46"],["className","string",'""']],
 mini:()=>'<span class="av" style="margin-right:8px"></span><span class="avi">S</span>',
 sec:[{id:"avatar",t:"Default avatar",d:"Solid black circle, 46px. The ring in the preview is only there so it shows on a dark canvas.",p:{},v:p=>'<span class="av"></span>'}]};
D["avatar-initial"]={d:"A 32px circle with one letter in Inter SemiBold 12px. Two themes: Dark and Light.",fig:"981:385044",
 props:[["initial","string","-"],["theme",'"dark" | "light"','"dark"']],
 mini:()=>'<span class="avi" style="margin-right:8px">S</span><span class="avi light">S</span>',
 sec:[{id:"avatarinitial",t:"Initial avatar",d:"Dark is #272729 with white text. Light is #F7F5FA with #121113 text.",
  ctl:[{k:"theme",o:["Dark","Light"]},{k:"initial",o:["S","A","M","K"]}],p:{theme:"Dark",initial:"S"},
  v:p=>`<span class="avi ${p.theme=="Light"?"light":""}">${p.initial}</span>`}]};
D["avatar-placeholder"]={d:"A 46px circle that holds a photo. In Figma it is an image fill, so pass your own image URL.",fig:"784:124137",
 props:[["src","string","-"],["alt","string","-"],["size","number","46"]],
 mini:()=>'<svg class="avp" viewBox="0 0 46 46"><defs><linearGradient id="pg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7fd0e8"/><stop offset="1" stop-color="#f3c9a5"/></linearGradient><clipPath id="pc"><circle cx="23" cy="23" r="23"/></clipPath></defs><g clip-path="url(#pc)"><rect width="46" height="46" fill="url(#pg)"/><circle cx="23" cy="19" r="8" fill="#8a5a44"/><path d="M6 46c2-12 10-15 17-15s15 3 17 15z" fill="#2f3a3f"/></g></svg>',
 sec:[{id:"avatarplaceholder",t:"Photo avatar",d:"The Figma file stores the photo as an image fill. The preview shows a stand-in picture because the real image is not copied into this page.",p:{},v:p=>'<svg class="avp" viewBox="0 0 46 46"><defs><linearGradient id="pg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7fd0e8"/><stop offset="1" stop-color="#f3c9a5"/></linearGradient><clipPath id="pc"><circle cx="23" cy="23" r="23"/></clipPath></defs><g clip-path="url(#pc)"><rect width="46" height="46" fill="url(#pg)"/><circle cx="23" cy="19" r="8" fill="#8a5a44"/><path d="M6 46c2-12 10-15 17-15s15 3 17 15z" fill="#2f3a3f"/></g></svg>'}]};

const WFH=[4,12,8,4,6];
const FOLDER='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>';
const BRANCHI='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3v12"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>';
const wfv=n=>`<span class="wfp" aria-hidden="true">${Array.from({length:n},(_,i)=>`<i style="height:${WFH[i%5]}px"></i>`).join("")}</span>`;
const ccv=(t,on)=>`<span class="cch">${t=="branch"?BRANCHI:FOLDER}${t!="icon"?"<span>samiis-portfolio</span>":""}${t=="branch"?`<span class="dv"></span><button data-ab aria-pressed="${!!on}"><span class="cb ${on?"on":""}"></span>worktree</button>`:""}</span>`;
D["waveform"]={d:"A row of 35 thin vertical bars in a repeating pattern, used as a decorative sound or activity indicator.",fig:"619:57270",
 props:[["bars","number","35"],["color","string",'"#A1A1AA"']],mini:()=>wfv(35),
 sec:[{id:"waveform",t:"Waveform",d:"144px wide and 12px tall. Bars are 1px lines with 4px gaps and 4px side padding. Heights repeat 4, 12, 8, 4, 6 seven times. Color is #A1A1AA (neutral 200).",
  ctl:[{k:"bars",o:["35","20","12"]}],p:{bars:"35"},v:p=>wfv(+p.bars)}]};
D["context-chip"]={d:"A compact 24px chip that shows where a task runs: a folder, or a branch with a worktree checkbox.",fig:"989:297066",
 props:[["type",'"default" | "icon" | "branch"','"default"'],["label","string",'"samiis-portfolio"'],["icon","ReactNode","folder"],["checked","boolean","false"],["toggleLabel","string",'"worktree"']],
 mini:()=>`<span class="ccb">${ccv("default")}${ccv("icon")}</span>`,
 sec:[{id:"contextchip",t:"Context chip",d:"Three types from Figma. Default is a folder and a label. Icon is the folder alone. Branch adds a branch icon, a 1px divider and a checkbox labelled worktree. Fill #27272A, 4px radius, 6px padding and gap. The label is 13px Inter in #D2CFD9.",
  ctl:[{k:"type",o:["default","icon","branch"]},{k:"checked",b:1}],p:{type:"default",checked:false},
  v:p=>`<span class="ccb">${ccv(p.type,p.checked)}</span>`},
  {id:"contextbar",t:"All three in a bar",d:"The set sits inside a bar with #202022 fill, 12px padding, 8px gap and 5px radius.",p:{checked:false},v:p=>`<span class="ccb">${ccv("default")}${ccv("icon")}${ccv("branch",p.checked)}</span>`,cid:"contextchip"}]};

const IC={g:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M20 12h-8M19.2 7A9 9 0 1 0 21 12"/></svg>',
 chk:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
 eye:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3l18 18M10.6 6.1A9.8 9.8 0 0 1 12 6c5 0 8.5 4 9.5 6a12 12 0 0 1-2.6 3.3M6.6 7.7A12.3 12.3 0 0 0 2.5 12c1 2 4.5 6 9.5 6 1.5 0 2.8-.4 4-.9M9.9 9.9a3 3 0 0 0 4.2 4.2"/></svg>',
 docs:'<svg viewBox="0 0 64 32" width="64" height="32"><g fill="#121113" stroke="#27272A"><rect x="2" y="9" width="20" height="22" rx="2"/><rect x="42" y="7" width="20" height="22" rx="2"/><rect x="14" y="1" width="36" height="28" rx="3" stroke="#333137"/></g><g stroke="#333137" stroke-width="2" stroke-linecap="round"><path d="M20 9h24M20 15h24M20 21h16"/></g></svg>',
 bars:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M8 17v-4M12 17V8M16 17v-6"/></svg>',
 folder:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',
 sliders:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/></svg>',
 branch:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3v12"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>',
 cloud:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a4.5 4.5 0 0 1-.6-8.96A6 6 0 0 1 18 10a4 4 0 0 1 0 8z"/></svg>',
 mic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>',
 chip:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9.5 9.5h5v5h-5z"/></svg>',
 shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 3v6c0 4.5-3.2 7.6-8 9-4.8-1.4-8-4.5-8-9V6z"/><path d="M9 12l2 2 4-4"/></svg>',
 dn:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg>'};
const fxi=(size,state,label)=>`<div class="fx-f"><label>Full name</label><div class="fx-b ${size} ${state=="disabled"?"disabled":""}">${IC.g}<input ${state=="filled"?'value="Enter your Email"':'placeholder="Enter your Email"'} ${state=="disabled"?"disabled":""} aria-label="Email"></div><small>Please enter your official billing name</small></div>`;
const CBT='I agree to Puku’s <a href="#">Consumer Terms</a> and <a href="#">Acceptable Use Policy</a> and confirm that I am at least 18 years of age.';
const cbr=(t,on)=>t=="icon"?`<div class="cbr"><span class="ci">${IC.eye}</span><p style="padding-top:5px">Ad-free chats: We won’t show you ads or let advertisers influence what Claude says.</p></div>`:`<div class="cbr"><button data-ab role="checkbox" aria-checked="${!!on}" class="${on?"on":""}">${on?IC.chk:""}</button><p>${CBT}</p></div>`;
const dz=t=>t=="file"?`<div class="dz"><span class="tl" style="width:auto;background:none">${IC.docs}</span>Add PDFs, documents, or other text to reference in this project.</div>`:`<div class="dz"><span class="tl">${IC.bars}</span>View and open files created during this task.</div>`;
const ifd=(t,on)=>`<div class="ifd"><label>Instructions</label><div class="cd"><div class="tp"><textarea rows="2" placeholder="Describe what Puku should do in each session"></textarea>${t=="cloud"?`<div class="bar c"><span>${IC.mic}${IC.dn}</span><span>${IC.chip}Opus 4.8${IC.dn}</span></div>`:`<div class="bar l"><span>${IC.shield}Manual</span><span>Default${IC.dn}</span></div>`}</div><div class="ft">${t=="cloud"?`<span>${IC.branch}Select a repository</span><span style="color:#D2CFD9">${IC.cloud}puku-cli</span>`:`<span>${IC.folder}Select folder</span><button data-ab aria-pressed="${!!on}"><i class="cb ${on?"on":""}"></i>Worktree</button>`}</div></div></div>`;
D.input={d:"A labelled text field with an icon, helper text, two sizes and default, filled and disabled states.",fig:"784:140412",
 props:[["label","string","-"],["helper","string","-"],["size",'"lg" | "sm"','"lg"'],["icon","ReactNode","-"],["disabled","boolean","false"]],
 mini:()=>fxi("lg","filled"),
 sec:[{id:"input",t:"Input",d:"Large is 40px tall with an 8px radius. Small is 32px with a 6px radius. Fill #202022, border #27272A, label 13px Medium white, helper 13px #A1A1AA. Measured from the Figma screenshot.",
   ctl:[{k:"size",o:["lg","sm"]},{k:"state",o:["default","filled","disabled"]}],p:{size:"lg",state:"filled"},v:p=>fxi(p.size,p.state)},
  {id:"inputall",t:"All sizes and states",d:"Large on the left, small on the right. The top row shows the empty and disabled look, the bottom row shows a filled field.",p:{},cid:"input",
   v:()=>`<div class="fx-g">${fxi("lg","disabled")}${fxi("sm","default")}${fxi("lg","filled")}${fxi("sm","filled")}</div>`}]};
D["checkbox-row"]={d:"A checkbox or an icon beside a line of text that can contain links, used for consent and short notes.",fig:"696:58200",
 props:[["type",'"checkbox" | "icon"','"checkbox"'],["checked","boolean","false"],["onCheckedChange","(v: boolean) => void","-"],["icon","ReactNode","-"],["children","ReactNode","-"]],
 mini:()=>cbr("checkbox",true),
 sec:[{id:"checkboxrow",t:"Checkbox row",d:"Two types. Checkbox has a 16px box with a 3px radius and 12px gap to the text. Icon swaps the box for a 32px round tile. Text is 13px in #A1A1AA with links underlined in #BEB0FF.",
   ctl:[{k:"type",o:["checkbox","icon"]},{k:"checked",b:1}],p:{type:"checkbox",checked:false},v:p=>cbr(p.type,p.checked)},
  {id:"checkboxrowboth",t:"Both types stacked",d:"The Figma set shows the consent row above the note row, 16px apart.",p:{checked:false},cid:"checkboxrow",v:p=>`<div style="display:flex;flex-direction:column;gap:16px">${cbr("checkbox",p.checked)}${cbr("icon")}</div>`}]};
D["drop-zone"]={d:"A card where people add files. It comes in two parts: one that accepts files and one that is an empty prompt.",fig:"612:52608",
 props:[["variant",'"file" | "empty"','"file"'],["children","ReactNode","caption"],["icon","ReactNode","-"],["accept","string","-"],["onFiles","(files: File[]) => void","-"]],
 mini:()=>dz("file"),
 sec:[{id:"dropzonefile",t:"File",d:"Accepts dropped or picked files. Shows a stack of documents above the caption. Card is 262px wide, #181715 fill, #27272A border and 12px radius.",p:{},cid:"dropzone",v:()=>dz("file")},
  {id:"dropzoneempty",t:"Empty",d:"The empty component. Same card with a 40px black tile and a chart icon. Use it as a button that opens something.",p:{},cid:"dropzone",v:()=>dz("empty")}]};
D["input-search-filter"]={d:"A search field with a folder icon and a filter button, with no border or fill.",fig:"599:54314",
 props:[["value","string","-"],["onChange","(v: string) => void","-"],["onFilter","() => void","-"],["placeholder","string",'"Search Projects"']],
 sec:[{id:"searchfilter",t:"Input search filter",d:"Folder icon, 16px Medium text in #4A4850 and a sliders button on the right. Text turns #D2CFD9 when you type. Measured from the Figma screenshot.",
   p:{},v:()=>`<div class="sfl">${IC.folder}<input placeholder="Search Projects" aria-label="Search Projects"><button aria-label="Filter">${IC.sliders}</button></div>`}]};
D["instructions-field"]={d:"A large text area for session instructions, with option controls under the text and a footer that picks where it runs.",fig:"1101:532192",
 props:[["type",'"cloud" | "local"','"cloud"'],["value","string","-"],["onChange","(v: string) => void","-"],["label","string",'"Instructions"'],["worktree","boolean","false"]],
 mini:()=>ifd("cloud"),
 sec:[{id:"instructionscloud",t:"Cloud",d:"Voice and model picker sit bottom right. The #202022 footer holds the repository on the left and the environment on the right.",p:{},cid:"instructions",v:()=>ifd("cloud")},
  {id:"instructionslocal",t:"Local",d:"A permission mode on the left and a default picker on the right. The footer has a folder picker and a Worktree checkbox.",p:{checked:false},cid:"instructions",v:p=>ifd("local",p.checked)}]};

const CH=(on,dis)=>`<button class="ckb ${on?"on":""} ${dis?"dis":""}" role="checkbox" aria-checked="${!!on}" ${dis?"disabled":'data-ab'}>${on?IC.chk:""}</button>`;
const RB=on=>`<button class="rdb ${on?"on":""}" role="radio" aria-checked="${!!on}" data-ab>${on?"<i></i>":""}</button>`;
const SEL_OPTS=["Designer","Developer","Product manager","Founder"];
const selv=(p)=>{const sz=p.size||"lg",filled=p.filled;return `<div class="sl"><button class="${sz} ${filled?"":"ph"}" aria-haspopup="listbox" aria-expanded="${!!p.open}" data-op><span class="lead">${p.icon?IC.g:""}${filled?"Developer":"Select your role"}</span>${IC.dn}</button>${p.open?`<div class="sm2" role="listbox">${SEL_OPTS.map(o=>`<div class="so ${o=="Developer"&&filled?"s":""}" role="option">${o}</div>`).join("")}</div>`:""}</div>`};
const smv=sel=>`<div class="sm2" role="listbox">${["United States","Canada","United Kingdom"].map(o=>`<div class="so ${o==sel?"s":""}" role="option">${o}</div>`).join("")}</div>`;
const tfv=p=>`<div class="tf ${p.error?"e":""} ${p.disabled?"d":""}"><label>Email</label><div class="bx">${p.icon?IC.g:""}<input placeholder="you@example.com" ${p.disabled?"disabled":""} aria-invalid="${!!p.error}">${p.trail?IC.eye:""}</div><p>${p.error?"Enter a valid email address":"We will only use this for receipts"}</p></div>`;
const rcv=(on,badge)=>`<div class="rc ${on?"on":""}" data-ab role="radio" aria-checked="${!!on}"><div class="tp">${RB(on).replace(" data-ab","")}${badge?'<span class="bd">Save 17%</span>':""}</div><div><span class="tt">Pro plan</span><div class="pr">$20</div><div class="nt">per month, billed yearly</div></div></div>`;
const isv=()=>`<div class="is"><div><h4>Instructions for Claude</h4><p>Claude will keep these in mind for this and any of your associated accounts across chats and Cowork within Anthropic’s guidelines. <a href="#">Learn more</a></p></div><div class="ac"><button>Edit</button></div></div>`;
D["instructions-setting"]={d:"A settings row with a title, a short description and an action area on the right.",fig:"784:123019",
 props:[["title","string",'"Instructions for Claude"'],["children","ReactNode","description"],["action","ReactNode","-"]],mini:isv,
 sec:[{id:"instrsetting",t:"Instructions setting",d:"Up to 771px wide with a 24px gap. The title is 14px semibold white and the description is 14px in #A1A1AA, 12px below. The action area is 278px wide on the right.",p:{},cid:"instrsetting",v:isv}]};
D["model-select"]={d:"A compact 20px button that shows the chosen model and an optional effort level.",fig:"619:55564",
 props:[["model","string","-"],["effort","string","-"],["selected","boolean","false"],["onClick","() => void","-"]],
 mini:()=>`<button class="msb">Sonnet 5 <span>High</span></button>`,
 sec:[{id:"modelselect",t:"Model select",d:"20px tall, 4px padding and radius, 12px text. The effort level sits after the model in #A1A1AA. Fill #27272A on hover or when selected.",
  ctl:[{k:"effort",o:["High","Medium","Low","none"]},{k:"checked",b:1}],p:{effort:"High",checked:false},
  v:p=>`<button class="msb ${p.checked?"s":""}" data-ab aria-pressed="${!!p.checked}">Sonnet 5 ${p.effort!="none"?`<span>${p.effort}</span>`:""}</button>`}]};
D.radio={d:"A 22px round choice control. The selected state shows a blue dot on a white ring.",fig:"696:62247",
 props:[["checked","boolean","false"],["onChange","(v: boolean) => void","-"],["label","string","-"],["value","string","-"],["name","string","-"]],
 mini:()=>`<span class="rd">${RB(1)}Monthly</span>`,
 sec:[{id:"radio",t:"Radio",d:"22px circle with a 1px #D2CFD9 border. Selected: white fill, #0075FF border and a 13px #0075FF dot. Focus ring is #9C86FF.",
  ctl:[{k:"checked",b:1}],p:{checked:true},v:p=>`<span class="rd">${RB(p.checked)}Monthly</span>`},
  {id:"radiogroup",t:"Group",d:"Radios share a name and only one can be selected at a time.",p:{},cid:"radio",v:()=>`<div style="display:flex;flex-direction:column;gap:12px"><span class="rd">${RB(1).replace(" data-ab","")}Monthly</span><span class="rd">${RB(0).replace(" data-ab","")}Yearly</span></div>`}]};
D["radio-card"]={d:"A bordered card that works as a radio, for choosing a plan.",fig:"696:62278",
 props:[["checked","boolean","false"],["onChange","() => void","-"],["title","string","-"],["price","string","-"],["note","string","-"],["badge","string","-"]],
 mini:()=>rcv(1,1),
 sec:[{id:"radiocard",t:"Radio card",d:"257px wide, 12px radius and 16px padding. Default fill #181715 with a #333137 border. Selected fill black with a #9C86FF border. The optional badge is #1B4721 with #3FB950 text.",
  ctl:[{k:"checked",b:1},{k:"badge",b:1}],p:{checked:true,badge:true},v:p=>rcv(p.checked,p.badge)}]};
D.select={d:"A dropdown field that opens a menu of options. Select Sort, Select Time, Select Option and Select Menu are its parts.",fig:"696:59027",
 props:[["options","{ value: string; label: string }[]","-"],["value","string","-"],["onChange","(v: string) => void","-"],["placeholder","string",'"Select your role"'],["size",'"lg" | "sm"','"lg"'],["leading","ReactNode","-"],["searchable","boolean","false"]],
 mini:()=>selv({filled:0}),
 sec:[{id:"select",t:"Select",d:"Large is 40px tall with an 8px radius. Small is 32px with a 6px radius. Fill #202022, border #27272A and 14px text. The placeholder is #6C6A64. The menu opens 4px below.",
  ctl:[{k:"size",o:["lg","sm"]},{k:"filled",b:1},{k:"icon",b:1},{k:"open",b:1}],p:{size:"lg",filled:false,icon:false,open:false},v:p=>selv(p)}]};
D["select-sort"]={d:"A small pill that shows what a list is sorted by.",fig:"989:302170",
 props:[["label","string",'"Sort by"'],["value","string",'"Next run"'],["onClick","() => void","-"]],
 mini:()=>`<button class="ssr"><span>Sort by</span><span>Next run</span>${IC.dn}</button>`,
 sec:[{id:"selectsort",t:"Select sort",d:"32px tall, #27272A fill, 8px radius. The label is #A1A1AA and the value is white.",ctl:[{k:"value",o:["Next run","Name","Last edited"]}],p:{value:"Next run"},
  v:p=>`<button class="ssr"><span>Sort by</span><span>${p.value}</span>${IC.dn}</button>`}]};
D["select-time"]={d:"A native select with a chevron, for a time or a number.",fig:"791:158883",
 props:[["value","string","-"],["onChange","(v: string) => void","-"],["options","string[]","-"],["type",'"time" | "number"','"number"']],
 mini:()=>`<span class="stm t">9:00 AM${IC.dn}</span>`,
 sec:[{id:"selecttime",t:"Select time",d:"32px tall with #202022 fill and an 8px radius. Time is 84px wide with 14px text. Number is 96px wide with 11px text.",ctl:[{k:"type",o:["time","number"]}],p:{type:"time"},
  v:p=>p.type=="time"?`<span class="stm t">9:00 AM${IC.dn}</span>`:`<span class="stm n">30${IC.dn}</span>`}]};
D.textarea={d:"A multi-line text field. Textarea Chat and Textarea Instructions are variations of it.",fig:"883:245929",
 props:[["rows","number","3"],["placeholder","string","-"],["value","string","-"],["onChange","(e) => void","-"],["disabled","boolean","false"]],
 mini:()=>`<textarea class="tax" placeholder="Write a note" rows="2"></textarea>`,
 sec:[{id:"textarea",t:"Textarea",d:"Minimum height 93px, 12px padding, 8px radius. Fill #27272A, text white, placeholder #6C6A64. The border shows as #333137 on focus.",
  ctl:[{k:"disabled",b:1}],p:{disabled:false},v:p=>`<textarea class="tax" placeholder="Write a note" rows="3" ${p.disabled?"disabled":""}></textarea>`}]};
D["text-field"]={d:"A labelled single-line field with helper text, error and disabled states.",fig:"1171:784810",
 props:[["label","string","-"],["helper","string","-"],["error","boolean","false"],["leading","ReactNode","-"],["trailing","ReactNode","-"],["disabled","boolean","false"]],
 mini:()=>tfv({}),
 sec:[{id:"textfield",t:"Text field",d:"360px wide and 40px tall with a 6px radius. Fill #27272A, border #333137, label 13px Medium. The error state uses #F85149 for the border and helper. Disabled uses #202022 and #6C6A64.",
  ctl:[{k:"icon",b:1},{k:"trail",b:1},{k:"error",b:1},{k:"disabled",b:1}],p:{icon:false,trail:false,error:false,disabled:false},v:p=>tfv(p)}]};
D["select-option"]={d:"One row inside a select menu.",fig:"1171:785469",
 props:[["children","ReactNode","-"],["selected","boolean","false"],["onSelect","() => void","-"]],
 mini:()=>`<div class="sm2" style="width:200px"><div class="so s">United States</div></div>`,
 sec:[{id:"selectoption",t:"Select option",d:"26px tall with 12px side padding, 4px radius and 14px text. Hover or selected fill is #27272A.",ctl:[{k:"selected",b:1}],p:{selected:true},
  v:p=>`<div class="sm2" style="width:240px"><div class="so ${p.selected?"s":""}" role="option">United States</div></div>`}]};
D["select-menu"]={d:"The list that opens under a select, made of select options.",fig:"1171:785470",
 props:[["items","{ value: string; label: string }[]","-"],["value","string","-"],["onChange","(v: string) => void","-"]],
 mini:()=>smv("United States"),
 sec:[{id:"selectmenu",t:"Select menu",d:"360px wide, 4px padding, 6px radius. Fill #202022 with a #333137 border.",ctl:[{k:"sel",o:["United States","Canada","United Kingdom"]}],p:{sel:"United States"},v:p=>smv(p.sel)}]};
D.checkbox={d:"A 20px checkbox. Checkbox Field adds a text label beside it.",fig:"1171:785482",
 props:[["checked","boolean","false"],["onCheckedChange","(v: boolean) => void","-"],["disabled","boolean","false"]],
 mini:()=>CH(1),
 sec:[{id:"checkbox",t:"Checkbox",d:"20px square with a 6px radius. Unchecked: #27272A fill and #333137 border. Checked: #9C86FF fill with a white tick. Disabled drops to 50% opacity.",
  ctl:[{k:"checked",b:1},{k:"disabled",b:1}],p:{checked:true,disabled:false},v:p=>CH(p.checked,p.disabled)}]};
D["checkbox-field"]={d:"A checkbox with a label.",fig:"1171:785494",
 props:[["label","string","-"],["checked","boolean","false"],["onCheckedChange","(v: boolean) => void","-"]],
 mini:()=>`<div class="ckf">${CH(1)}<span>Save payment details</span></div>`,
 sec:[{id:"checkboxfield",t:"Checkbox field",d:"360px wide with a 12px gap between the box and the 14px white label.",ctl:[{k:"checked",b:1}],p:{checked:false},
  v:p=>`<div class="ckf">${CH(p.checked)}<span>Save payment details for future purchases</span></div>`}]};

const FLG='<span class="flag"><i></i></span>';
const BRANDS='<span class="brand">VISA<span class="mc"><i></i><i></i></span></span>';
const ROLES=["Product management","Software engineer","Engineering","Human resources","Finance","Sales","Operations","Data science"];
const CHK2='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
const SRCH='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>';
const sel2=(o={})=>`<div class="sl ${o.blk?"blk":""}"><button class="${o.sm?"sm":"lg"} ${o.fo?"fo":""} ${o.val?"":"ph"}"><span class="lead">${o.flag?FLG:""}${o.val||"Select your role"}</span>${IC.dn}</button></div>`;
const menuk=(sr)=>`<div class="sm2 k ${sr?"sr":""}" role="listbox">${sr?`<div class="q">${SRCH}Search</div>`:""}${ROLES.map((r,i)=>`<div class="so ${i==0?"s":""}" role="option">${r}${i==0||!sr?CHK2:""}</div>`).join("")}</div>`;
const menuc=()=>`<div class="sm2 k" role="listbox">${ROLES.map((r,i)=>`<div class="so ${i==0?"s":""}" role="option">${r}${CHK2}</div>`).join("")}</div>`;
const sugv=()=>`<div class="sug"><div class="sl"><button class="sm"><span class="lead">Finance</span>${IC.dn}</button></div>${[["Stress-test my model",IC.sliders],["Explain a finance concept",IC.bars],["Frame a budget variance",IC.docs.replace(/width="64" height="32"/,'width="16" height="16"')]].map(([t,i])=>`<div class="si">${i}${t}</div>`).join("")}</div>`;
const cnv=(lab,flag,brands)=>`<div class="cnf">${lab?`<label>${lab}</label>`:""}<div class="bx"><input inputmode="numeric" placeholder="1234 1234 1234 1234" aria-label="Card number">${flag?FLG:""}${brands?BRANDS:""}</div></div>`;
D.select.sec=[
 {id:"select",t:"Select",d:"Large is 40px tall with an 8px radius. Small is 32px with a 6px radius. Fill #202022, border #27272A and 14px text. The placeholder is #6C6A64 and the chevron is #A1A1AA. Focus changes the border to #9C86FF. The menu opens 4px below.",
  ctl:[{k:"size",o:["lg","sm"]},{k:"filled",b:1},{k:"icon",b:1},{k:"open",b:1}],p:{size:"lg",filled:false,icon:false,open:false},v:p=>selv(p)},
 {id:"selectstates",t:"Default and focused",d:"Collapsed fields in the three looks from Figma: default, focused with a purple border, and the black version used inside cards.",p:{},cid:"select",
  v:()=>`<div class="sg">${sel2({})}${sel2({fo:1})}${sel2({blk:1})}${sel2({sm:1})}</div>`},
 {id:"selectopen",t:"Open menu with checkmarks",d:"Eight roles in a 240px menu with 4px padding. The chosen row has a #27272A fill and a check on the right. A thin scrollbar shows when the list is longer than the box.",p:{},cid:"select",
  v:()=>`<div style="display:flex;flex-direction:column;gap:6px">${sel2({fo:1})}${menuc()}</div>`},
 {id:"selectsearch",t:"Searchable menu",d:"The same list with a 32px search field on top. Search sits on a #27272A bar with a magnifier icon. Rows are 26px tall.",p:{},cid:"selectsearch",v:()=>menuk(1)},
 {id:"selectsuggest",t:"With suggestions",d:"A small select sits above a stack of 40px suggestion rows. Each row has a 16px icon and 13px text on #202022.",p:{},cid:"select",v:sugv},
 {id:"selectcountry",t:"Country select",d:"The select shows a flag before the label. The label reads as the country name and its card code, for example Bangladesh (BD BIN).",p:{},cid:"selectcard",
  v:()=>`<div class="sg">${sel2({flag:1,val:"Bangladesh (BD BIN)"})}</div>`},
 {id:"selectcard",t:"Card number input",d:"A card number field with a flag on the right, a label above it, or with Visa and Mastercard marks. The brand marks in this preview are simple drawings, not the official logos.",p:{},cid:"selectcard",
  v:()=>`<div class="sg">${cnv("",1,0)}${cnv("Card number",0,1)}<div class="cnf"><label>Card number</label>${sel2({blk:1})}</div></div>`}];
D.select.mini=()=>sel2({fo:1});
// radio
D.radio.sec=[
 {id:"radio",t:"Radio",d:"22px circle with a 1px #D2CFD9 border. Selected: white fill, #0075FF border and a 13px #0075FF dot. Focus ring is #9C86FF.",ctl:[{k:"checked",b:1}],p:{checked:true},v:p=>`<span class="rd">${RB(p.checked)}Monthly</span>`},
 {id:"radiostates",t:"Unchecked and checked",d:"Both states side by side, as in Figma.",p:{},cid:"radio",v:()=>`<div style="display:flex;gap:80px"><span class="rd">${RB(0).replace(" data-ab","")}</span><span class="rd">${RB(1).replace(" data-ab","")}</span></div>`},
 {id:"radiogroup",t:"Group",d:"Radios share a name and only one can be selected at a time.",p:{},cid:"radio",v:()=>`<div style="display:flex;flex-direction:column;gap:12px"><span class="rd">${RB(1).replace(" data-ab","")}Monthly</span><span class="rd">${RB(0).replace(" data-ab","")}Yearly</span></div>`}];
// radio card
const rcv2=(on)=>`<div class="rc ${on?"on":""}" data-ab role="radio" aria-checked="${!!on}" style="width:262px"><div class="tp">${RB(on).replace(" data-ab","")}<span class="bd">Save 17%</span></div><div><span class="tt" style="font-weight:400;margin-bottom:12px;font-size:12px">Pro annual</span><div class="pr" style="font:500 16px/22px Inter,system-ui,sans-serif">USD 200.00</div><div class="nt" style="color:#6C6A64">Billed yearly</div></div></div>`;
D["radio-card"].mini=()=>rcv2(1);
D["radio-card"].sec=[
 {id:"radiocard",t:"Radio card",d:"About 262px wide with a 12px radius and 16px padding. Default fill #181715. Selected fill black with a #9C86FF border. The badge is #1B4721 with #3FB950 text. Contents: Pro annual, USD 200.00, Billed yearly.",ctl:[{k:"checked",b:1}],p:{checked:true},v:p=>rcv2(p.checked)},
 {id:"radiocardpair",t:"Selected and default",d:"The two states stacked with a 40px gap.",p:{},cid:"radiocard",v:()=>`<div style="display:flex;flex-direction:column;gap:32px">${rcv2(1).replace(' data-ab','')}${rcv2(0).replace(' data-ab','')}</div>`}];
// select time
const stv=(k)=>k=="time"?`<span class="stm t" style="width:auto;font-size:20px;padding:0 10px 0 14px;height:40px">9:30 PM${IC.dn}</span>`:`<span class="stm n ${k=="focus"?"f":""}" style="width:124px;height:36px;font-size:13px">01${IC.dn}</span>`;
D["select-time"].sec=[
 {id:"selecttime",t:"Select time",d:"32px to 40px tall with #202022 fill. The time version shows hours and the period. The number version shows two digits with a 16px chevron. Focus draws a #9C86FF 1px ring.",ctl:[{k:"type",o:["time","number","focus"]}],p:{type:"time"},v:p=>stv(p.type)},
 {id:"selecttimeall",t:"Time, number and focused",d:"The Figma set shows the time next to a number select, with a focused number select to the right.",p:{},cid:"selecttime",v:()=>`<div style="display:flex;align-items:center;gap:40px"><div style="display:flex">${stv("time")}${stv("n")}</div>${stv("focus")}</div>`}];
D["select-sort"].sec=[
 {id:"selectsort",t:"Select sort",d:"A #27272A pill with a muted label, a white value and a chevron. 32px tall at the base size; the Figma frame also shows a 48px version with 20px text.",ctl:[{k:"value",o:["Next run","Name","Last edited"]}],p:{value:"Next run"},v:p=>`<button class="ssr"><span>Sort by</span><span>${p.value}</span>${IC.dn}</button>`},
 {id:"selectsortbig",t:"Large",d:"The larger display in the Figma frame.",p:{},cid:"selectsort",v:()=>`<button class="ssr big"><span>Sort by</span><span>Next run</span>${IC.dn}</button>`}];
// textarea
D.textarea.sec=[
 {id:"textarea",t:"Textarea",d:"Minimum height 93px, 12px padding, 8px radius. Fill #27272A with a #333137 edge, text white, placeholder #6C6A64. The Figma frame shows it full width.",ctl:[{k:"filled",b:1},{k:"disabled",b:1}],p:{filled:false,disabled:false},
  v:p=>`<textarea class="tax" placeholder="e.g. ask clarifying questions before giving detailed answers" rows="3" ${p.disabled?"disabled":""}>${p.filled?"My pet name is gerald.":""}</textarea>`},
 {id:"textareaboth",t:"Filled and empty",d:"The filled state on top and the placeholder state under it.",p:{},cid:"textarea",
  v:()=>`<div style="display:flex;flex-direction:column;gap:24px;width:min(560px,100%)"><textarea class="tax" style="width:100%" rows="3">My pet name is gerald.</textarea><textarea class="tax" style="width:100%" rows="3" placeholder="e.g. ask clarifying questions before giving detailed answers"></textarea></div>`}];
// text field
const tf2=(st)=>`<div class="tf ${st=="error"?"e":""} ${st=="disabled"?"d":""} ${st=="focus"?"fc":""}" style="width:200px"><label>Full name</label><div class="bx"><input ${st=="filled"||st=="error"?'value="e.g. Jane Doe"':'placeholder="e.g. Jane Doe"'} ${st=="disabled"?"disabled":""} aria-invalid="${st=="error"}"></div><p>Please enter your official billing name</p></div>`;
D["text-field"].mini=()=>tf2("filled");
D["text-field"].sec=[
 {id:"textfield",t:"Text field",d:"40px tall with a 6px radius. Fill #27272A, border #333137, label 13px Medium. Focus: #9C86FF border and a purple caret. Error: #F85149 border and helper. Disabled: #202022 with #6C6A64 text.",ctl:[{k:"icon",b:1},{k:"trail",b:1},{k:"error",b:1},{k:"disabled",b:1}],p:{icon:false,trail:false,error:false,disabled:false},v:p=>tfv(p)},
 {id:"textfieldstates",t:"Five states",d:"Default, focused, filled, error and disabled, left to right as in Figma. The label is Full name and the helper reads Please enter your official billing name.",p:{},cid:"textfield",
  v:()=>`<div style="display:flex;flex-wrap:wrap;gap:24px">${["default","focus","filled","error","disabled"].map(tf2).join("")}</div>`}];
// select option
D["select-option"].sec=[
 {id:"selectoption",t:"Select option",d:"26px tall with 12px side padding, 4px radius and 14px text. Selected or hovered fill is #27272A.",ctl:[{k:"selected",b:1}],p:{selected:true},v:p=>`<div class="sm2" style="width:240px"><div class="so ${p.selected?"s":""}" role="option">United States</div></div>`},
 {id:"selectoptionpair",t:"Default and selected",d:"The plain row beside the selected row, as in Figma.",p:{},cid:"selectoption",v:()=>`<div style="display:flex;gap:40px;align-items:center"><div class="so" style="width:160px">United States</div><div class="so s" style="width:240px">United States</div></div>`}];
// checkbox
D.checkbox.sec=[
 {id:"checkbox",t:"Checkbox",d:"20px square with a 6px radius. Unchecked: #27272A fill and #333137 border. Checked: #9C86FF fill with a white tick. Disabled drops to 50% opacity.",ctl:[{k:"checked",b:1},{k:"disabled",b:1}],p:{checked:true,disabled:false},v:p=>CH(p.checked,p.disabled)},
 {id:"checkboxpair",t:"Unchecked and checked",d:"Both states 24px apart.",p:{},cid:"checkbox",v:()=>`<div style="display:flex;gap:24px">${CH(0).replace(" data-ab","")}${CH(1).replace(" data-ab","")}</div>`}];
D["checkbox-field"].sec=[
 {id:"checkboxfield",t:"Checkbox field",d:"360px wide with a 12px gap between the box and the 14px white label.",ctl:[{k:"checked",b:1}],p:{checked:false},v:p=>`<div class="ckf">${CH(p.checked)}<span>Save payment details for future purchases</span></div>`},
 {id:"checkboxfieldpair",t:"Both states",d:"Unchecked above checked, 24px apart.",p:{},cid:"checkboxfield",v:()=>`<div style="display:flex;flex-direction:column;gap:24px"><div class="ckf">${CH(0).replace(" data-ab","")}<span>Save payment details for future purchases</span></div><div class="ckf">${CH(1).replace(" data-ab","")}<span>Save payment details for future purchases</span></div></div>`}];
// model select
D["model-select"].sec=[
 {id:"modelselect",t:"Model select",d:"20px tall, 4px padding and radius, 12px text. The effort level sits after the model in #A1A1AA. Fill #27272A when selected.",ctl:[{k:"effort",o:["High","Medium","Low","none"]},{k:"checked",b:1}],p:{effort:"High",checked:false},
  v:p=>`<button class="msb ${p.checked?"s":""}" data-ab aria-pressed="${!!p.checked}">Sonnet 5 ${p.effort!="none"?`<span>${p.effort}</span>`:""}</button>`},
 {id:"modelselectpair",t:"Default and selected",d:"Two rows 12px apart. The second has the #27272A selected fill.",p:{},cid:"modelselect",v:()=>`<div style="display:flex;flex-direction:column;gap:12px;align-items:flex-start"><button class="msb">Sonnet 5 <span>High</span></button><button class="msb s">Sonnet 5 <span>High</span></button></div>`}];
D["instructions-setting"].sec[0].d="Up to 771px wide with a 24px gap. The title is 14px semibold white and the description is 14px in #A1A1AA, 12px below. The action area is a 266px slot on the right; Figma leaves it empty, so you pass your own control.";

const UPA='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
const FILEI='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4"/></svg>';
const tsw=(cls,on,dis)=>`<button class="t7 ${cls||""}" role="switch" aria-checked="${!!on}" ${dis?"disabled":"data-tg"}></button>`;
const tgv=p=>tsw("",p.on,p.disabled);
const tcv=(st)=>{const has=st=="Text";return `<div class="tcx">${st=="Processing"?'<span class="st" role="status">Sifting through memory</span>':""}<div class="bx"><input ${has?'value="My dogs name is doggo"':'placeholder="Write a message…"'} aria-label="Message"><button class="${has?"on":""}" aria-label="Send">${UPA}</button></div></div>`};
const tiv=(t)=>t=="Footer"?`<div class="tix ft"><textarea placeholder="e.g. ask clarifying questions before giving detailed answers"></textarea><div class="fr"><span>${FILEI}Project or Folder ${IC.dn}</span><span>${FILEI}Project or Folder ${IC.dn}</span></div></div>`:`<div class="tix"><div class="hd"><div><h4>Instructions for Claude</h4><p>Claude will keep these in mind for this and any of your associated accounts across chats and Cowork within Anthropic’s guidelines. Learn more</p></div><span class="av"></span></div><textarea placeholder="e.g. ask clarifying questions before giving detailed answers"></textarea><hr></div>`;
const trv=(nd)=>`<div class="trg"><div class="g"><span class="day">Sunday</span><div class="p"><span class="stm t" style="width:96px;font-size:16px;height:32px">9:30 PM${IC.dn}</span><span>To</span><span class="stm t" style="width:84px;font-size:12px;height:32px">7:00 AM${IC.dn}</span></div></div>${nd?"<span>next day</span>":""}</div>`;
D.toggle={d:"An on/off switch for settings. Exposes role=switch. Toggle Accent, Toggle Base and Toggle Switch are variations.",fig:"989:301490",
 props:[["checked","boolean","false"],["onChange","(v: boolean) => void","-"],["disabled","boolean","false"],["label","string","-"]],
 mini:()=>`<div class="tgr">${tsw("",0,1).replace("disabled","")}${tsw("",1,1).replace("disabled","")}</div>`,
 sec:[{id:"toggle",t:"Toggle",d:"28px by 16px pill with an 8px radius and a 12px white knob, 2px from the edge. Off is #333137 and on is #9C86FF.",ctl:[{k:"on",b:1}],p:{on:true},v:p=>tgv(p)},
  {id:"togglepair",t:"Off and on",d:"Both states side by side on the dark tile used in Figma.",p:{},cid:"toggle",v:()=>`<div class="lt dk"><div class="tgr">${tsw("",0,1).replace("disabled","")}${tsw("",1,1).replace("disabled","")}</div></div>`}]};
D["toggle-accent"]={d:"A larger toggle with a light off colour.",fig:"883:242156",
 props:[["checked","boolean","false"],["onChange","(v: boolean) => void","-"],["disabled","boolean","false"],["label","string","-"]],
 mini:()=>tsw("a",1,1).replace("disabled",""),
 sec:[{id:"toggleaccent",t:"Toggle accent",d:"36px by 20px pill (the component adds 2px on top, so the frame is 36 by 22) with a 16px white knob and 2px padding. On is #9C86FF and off is #D2CFD9.",ctl:[{k:"on",b:1}],p:{on:true},v:p=>`<button class="t7 a" role="switch" aria-checked="${!!p.on}" data-tg></button>`},
  {id:"toggleaccentpair",t:"On and off",d:"On above off, 16px apart.",p:{},cid:"toggleaccent",v:()=>`<div style="display:flex;flex-direction:column;gap:16px"><button class="t7 a" role="switch" aria-checked="true"></button><button class="t7 a" role="switch" aria-checked="false"></button></div>`}]};
const tbg=(sz,on,dis)=>`<button class="t7 b ${sz}" role="switch" aria-checked="${!!on}" ${dis?"disabled":""}></button>`;
D["toggle-base"]={d:"The base switch in three sizes and three states. It uses a blue accent and sits on light surfaces.",fig:"699:66187",
 props:[["checked","boolean","false"],["onChange","(v: boolean) => void","-"],["disabled","boolean","false"],["size",'"sm" | "md" | "lg"','"md"']],
 mini:()=>`<div class="lt">${tbg("",1,0)}</div>`,
 sec:[{id:"togglebase",t:"Toggle base",d:"Small is 24 by 16 with a 12px knob. Regular is 32 by 20 with a 16px knob. Large is 40 by 24 with a 20px knob. Off #E6E8EA, on #2D68FE, knob white. Disabled is 70% opacity with a grey knob.",
  ctl:[{k:"size",o:["sm","md","lg"]},{k:"on",b:1},{k:"disabled",b:1}],p:{size:"md",on:true,disabled:false},
  v:p=>`<div class="lt"><button class="t7 b ${p.size=="md"?"":p.size}" role="switch" aria-checked="${!!p.on}" ${p.disabled?"disabled":"data-tg"}></button></div>`},
  {id:"togglebasegrid",t:"All sizes and states",d:"Rows are small, regular and large. Columns are off, disabled and on, as in Figma.",p:{},cid:"togglebase",
   v:()=>`<div class="lt" style="grid-template-columns:repeat(3,auto);gap:14px 40px">${["sm","","lg"].map(z=>[tbg(z,0,0),tbg(z,0,1),tbg(z,1,0)].join("")).join("")}</div>`}]};
D["toggle-switch"]={d:"A compact 24px switch that wraps Toggle Base and adds a small marker in the off state.",fig:"628:63530",
 props:[["checked","boolean","false"],["onChange","(v: boolean) => void","-"],["disabled","boolean","false"],["label","string","-"]],
 mini:()=>`<div class="lt">${tbg("sm ax",0,0)}</div>`,
 sec:[{id:"toggleswitch",t:"Toggle switch",d:"24px by 18px frame around a small Toggle Base (24 by 16). Off is #E6E8EA and on is #2D68FE. In the off state a 6px ring in #B3B3B3 appears opposite the knob as an accessibility cue.",
  ctl:[{k:"on",b:1}],p:{on:false},v:p=>`<div class="lt"><button class="t7 b sm ax" role="switch" aria-checked="${!!p.on}" data-tg></button></div>`}]};
D["textarea-chat"]={d:"The message box for chat. The send button turns purple once there is text. A status line shows above it while the model is working.",fig:"883:250231",
 props:[["value","string","-"],["onChange","(v: string) => void","-"],["onSend","() => void","-"],["processing","string","-"],["placeholder","string",'"Write a message…"']],
 mini:()=>tcv("Text"),
 sec:[{id:"textareachat",t:"Textarea chat",d:"794px wide and 66px tall with a 16px radius, 16px padding and 24px gap. Fill #181715 with a #27272A border. Text is 14px. The send button is 32px with an 8px radius: #27272A when empty and #9C86FF when there is text.",
  ctl:[{k:"state",o:["Empty","Text","Processing"]}],p:{state:"Empty"},v:p=>tcv(p.state)},
  {id:"textareachatall",t:"Three states",d:"Empty, with text, and processing, as in Figma. The processing line reads Sifting through memory, 13px in #A1A1AA, 16px above the box.",p:{},cid:"textareachat",
   v:()=>`<div style="display:flex;flex-direction:column;gap:28px;width:100%">${tcv("Empty")}${tcv("Text")}${tcv("Processing")}</div>`}]};
D["textarea-instructions"]={d:"A settings block with a title, a description, a text area and dividers. A second type puts a footer row under a black text area.",fig:"985:254916",
 props:[["variant",'"default" | "footer"','"default"'],["title","string",'"Instructions for Claude"'],["description","ReactNode","-"],["value","string","-"],["onChange","(v: string) => void","-"],["action","ReactNode","-"],["footer","ReactNode","-"]],
 mini:()=>tiv("Footer"),
 sec:[{id:"textareainstructions",t:"Textarea instructions",d:"771px wide. Header with a 14px title, a 13px description and an optional action on the right. Below it a 93px textarea (#27272A fill, 8px radius, 12px padding) and a 1px #27272A divider.",
  ctl:[{k:"type",o:["Default","Footer"]}],p:{type:"Default"},v:p=>tiv(p.type)},
  {id:"textareainstructionsboth",t:"Default and footer",d:"The footer type uses a black textarea inside a #27272A card. The 40px footer holds two Project or Folder pickers, one at each edge.",p:{},cid:"textareainstructions",
   v:()=>`<div style="display:flex;flex-direction:column;gap:32px;width:100%">${tiv("Default")}${tiv("Footer")}</div>`}]};
D["time-range"]={d:"A start and end time for a day, with a note when the end falls on the next day.",fig:"981:385102",
 props:[["day","string","-"],["start","string","-"],["end","string","-"],["onStart","(v: string) => void","-"],["onEnd","(v: string) => void","-"],["times","string[]","-"],["nextDay","boolean","false"]],
 mini:()=>trv(0),
 sec:[{id:"timerange",t:"Time range",d:"A 32px tall row with 48px between the groups. The day label is 14px Medium in #A1A1AA and 92px wide. The two selects are 96px and 84px wide with an 8px gap around the word To.",
  ctl:[{k:"next",b:1}],p:{next:true},v:p=>trv(p.next)}]};

const sv=p=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" ${p.c?'class="c"':""}>${p.d}</svg>`;
const NV={gear:sv({d:'<circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1.2l2-1.5-2-3.4-2.3 1a7 7 0 0 0-2-1.2L14.2 3h-4l-.4 2.7a7 7 0 0 0-2 1.2l-2.3-1-2 3.4 2 1.5a7 7 0 0 0 0 2.4l-2 1.5 2 3.4 2.3-1a7 7 0 0 0 2 1.2l.4 2.7h4l.4-2.7a7 7 0 0 0 2-1.2l2.3 1 2-3.4-2-1.5c.1-.4.1-.8.1-1.2z"/>'}),
 laptop:sv({d:'<rect x="5" y="5" width="14" height="10" rx="1.5"/><path d="M3 19h18"/>'}),
 term:sv({d:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 10l3 2-3 2M12 15h4"/>'}),
 share:sv({d:'<path d="M12 15V4M8 8l4-4 4 4M5 13v6h14v-6"/>'}),
 globe:sv({d:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>'}),
 dots:sv({d:'<circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/>'}),
 side:sv({d:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M15 4v16"/>'}),
 back:sv({d:'<path d="M19 12H5M11 6l-6 6 6 6"/>'}),fwd:sv({d:'<path d="M5 12h14M13 6l6 6-6 6"/>'}),
 x:sv({d:'<path d="M6 6l12 12M18 6L6 18"/>'}),plus:sv({d:'<path d="M12 5v14M5 12h14"/>'}),
 search:sv({d:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>'}),
 dn:sv({d:'<path d="M6 9l6 6 6-6"/>',c:1}),dnl:sv({d:'<path d="M6 9l6 6 6-6"/>'})};
const nvi=(st,label,icon)=>`<div class="nvi ${st}">${st=="ind"||st=="fl"||!icon?"":`<i>${icon}</i>`}<span>${label}</span></div>`;
const NST={default:"",active:"a",active2:"a2",light:"lt",indented:"ind"};
const nvv=p=>nvi(NST[p.state],"General",NV.gear);
const ftTree=(open)=>`<div class="ftr">${nvi("","<span>.claude-plugin</span>".replace(/<\/?span>/g,""),IC.folder)}${open?`${nvi("ind","marketplace.json")}${nvi("ind","plugin.json")}`:""}</div>`;
const ftx=()=>`<div class="ftx">${nvi("",".claude-plugin",IC.folder)}${nvi("ind","marketplace.json")}${nvi("ind","plugin.json")}${nvi("","agents",IC.folder)}${nvi("","skills",IC.folder)}${nvi("fl","LICENSE")}${nvi("fl","README.md")}</div>`;
const hbv=()=>`<div class="hbr"><div class="hbt">${NV.laptop}Thesis research report${NV.dn}</div><span class="hbb">Test Folder</span><span class="hbs"></span><div class="hba">${NV.term}${NV.share}${NV.globe}${NV.dots}</div></div>`;
const hpv=t=>`<div class="hpj">${t=="task"?`<div class="hpt">New task${NV.dnl}</div>`:`<div class="hpc">Projects <span>/</span> <b>PUKU</b></div>`}${t=="actions"?`<div class="hpa">${NV.term}${NV.share}${NV.globe}${NV.dots}</div>`:NV.side}</div>`;
const msv=(items,act,lg)=>`<div class="msw ${lg?"lg":""}" role="tablist">${items.map(i=>`<button class="msi ${i==act?"on":""}" role="tab" aria-selected="${i==act}">${i}</button>`).join("")}</div>`;
const msiv=(st)=>{const ic=st.startsWith("Icon"),lg=st.startsWith("Large"),on=st.endsWith("Active")||st=="Default";return `<div class="msw ${lg?"lg":""}" style="padding:0;background:none"><button class="msi ${ic?"ic":""} ${on?"on":""}">${ic?NV.dnl:"Chat"}</button></div>`};
const phv=t=>t=="plan"?`<div class="phd pl"><b>Plan</b>${NV.x}</div>`:`<div class="phd"><div class="r1"><span style="color:#fff">New Tab</span><span>${NV.plus}</span><span style="flex:1"></span>${NV.x}</div><div class="r2"><div class="pnv">${NV.back}${NV.fwd}</div><div class="purl">${NV.search}<input placeholder="Type a URL" aria-label="URL"></div></div></div>`;
const htv=on=>`<button class="htg ${on?"on":""}" aria-pressed="${!!on}" aria-label="Browser" data-ab>${NV.globe}</button>`;
const ptv=(on,pv)=>`<div class="ptb ${on?"on":""} ${pv?"pv":""}" role="tab" aria-selected="${!!on}">${NV.globe}<span>All Rituals — Terrene</span><i class="x">${NV.x}</i></div>`;
const fgp=[["name","string","-"],["state",'"default" | "active" | "active2" | "light" | "indented"','"default"'],["icon","ReactNode","-"],["trailing","ReactNode","-"],["onClick","() => void","-"]];
D["nav-item"]={d:"One row in the sidebar. It comes in six looks: default, active, active 2, light active, trailing icon and indented. Nav Item Settings is a wrapper around it.",fig:"405:6994",
 props:[["label","string","-"],["state",'"default" | "active" | "active2" | "light" | "indented"','"default"'],["icon","ReactNode","-"],["trailing","ReactNode","-"],["onClick","() => void","-"]],
 mini:()=>nvi("a","General",NV.gear),
 sec:[{id:"navitem",t:"Nav item",d:"240px by 32px, 6px radius, 8px padding and a 10px gap. Text is 14px Regular. Default is #A1A1AA. Active is #181715 with #D2CFD9 text. Active 2 is #27272A with white text. Light active is white with #333137 text. Indented adds 34px of left padding and no icon.",
  ctl:[{k:"state",o:["default","active","active2","light","indented"]}],p:{state:"active"},v:p=>nvv(p)},
  {id:"navitemall",t:"All looks",d:"Default, active, light active, active 2, trailing icon and indented, as in Figma.",p:{},cid:"navitem",
   v:()=>`<div class="nvc">${nvi("","General",NV.gear)}${nvi("a","General",NV.gear)}${nvi("lt","General",NV.gear)}${nvi("a2","General",NV.gear)}${nvi("","General",NV.gear)}${nvi("ind","General")}</div>`}]};
D["nav-item-settings"]={d:"A settings navigation entry. A 278px wrapper around an active nav item.",fig:"784:123070",
 props:[["label","string",'"General"'],["icon","ReactNode","-"],["active","boolean","false"],["onClick","() => void","-"]],
 mini:()=>`<div class="nvs">${nvi("a2","General",NV.gear)}</div>`,
 sec:[{id:"navitemsettings",t:"Nav item settings",d:"A 278px wide column holding a nav item. The active item is 167px wide with a #27272A fill, a gear icon and white text.",ctl:[{k:"active",b:1}],p:{active:true},v:p=>`<div class="nvs">${nvi(p.active?"a2":"","General",NV.gear)}</div>`}]};
D["file-tree"]={d:"A folder and its files as stacked nav items. File Tree Expanded shows a full project.",fig:"922:431193",
 props:[["nodes","{ name: string; children?: Node[] }[]","-"],["defaultOpen","string[]","[]"]],
 mini:()=>ftTree(1),
 sec:[{id:"filetree",t:"File tree",d:"240px wide. A folder row has a 16px folder icon. Files inside it are indented by 34px. All text is 14px in #A1A1AA. The second type is a single folder row.",ctl:[{k:"open",b:1}],p:{open:true},v:p=>ftTree(p.open)},
  {id:"filetreeall",t:"Default and single folder",d:"The open folder with its two files, and the closed folder agents below it.",p:{},cid:"filetree",v:()=>`<div class="nvc">${ftTree(1)}${nvi("","agents",IC.folder)}</div>`}]};
D["file-tree-expanded"]={d:"A full project tree: an open folder, closed folders, and top-level files in white.",fig:"922:435977",
 props:[["nodes","Node[]","-"],["defaultOpen","string[]",'[".claude-plugin"]']],
 mini:ftx,
 sec:[{id:"filetreeexpanded",t:"File tree expanded",d:"240px wide with a 2px gap. Folders are muted. LICENSE and README.md are 14px Medium in white with no icon.",p:{},v:ftx}]};
D["header-bar"]={d:"The top bar of a task: an icon and title with a folder badge on the left and four action icons on the right.",fig:"1044:482380",
 props:[["title","string","-"],["folder","string","-"],["actions","ReactNode","-"],["onTitleClick","() => void","-"]],
 mini:hbv,
 sec:[{id:"headerbar",t:"Header bar",d:"50px tall on #121113 with 20px left and 16px right padding. The title is 14px white with a 16px icon. The badge is #27272A with a 4px radius and 11px text. Four 16px icons sit on the right with a 16px gap.",p:{},v:hbv}]};
D["header-bar-project"]={d:"The 56px bar over a project page. It has three types: new task, breadcrumb, and breadcrumb with actions.",fig:"550:28595",
 props:[["type",'"task" | "breadcrumb" | "breadcrumbActions"','"task"'],["title","string",'"New task"'],["parent","string",'"Projects"'],["current","string","-"],["onToggleSidebar","() => void","-"],["actions","ReactNode","-"]],
 mini:()=>hpv("task"),
 sec:[{id:"headerbarproject",t:"Header bar project",d:"842px by 56px with 24px side padding. The title is 16px Medium white. The breadcrumb parent is 14px #A1A1AA and the current page is 16px Medium white. The border under the bar comes from your screenshot.",
  ctl:[{k:"type",o:["task","breadcrumb","actions"]}],p:{type:"task"},v:p=>hpv(p.type)},
  {id:"headerbarprojectall",t:"All three types",d:"New task, breadcrumb, and breadcrumb with actions, stacked.",p:{},cid:"headerbarproject",v:()=>`<div class="nvc" style="width:100%">${hpv("task")}${hpv("crumb")}${hpv("actions")}</div>`}]};
D["header-toggle"]={d:"A 26px icon button that switches a panel on and off.",fig:"989:303268",
 props:[["pressed","boolean","false"],["onChange","(v: boolean) => void","-"],["label","string","-"],["children","ReactNode","icon"]],
 mini:()=>htv(1),
 sec:[{id:"headertoggle",t:"Header toggle",d:"26px square with a 6px radius and a 16px globe icon. Off has no fill. On has a #171329 fill and a #9C86FF icon.",ctl:[{k:"checked",b:1}],p:{checked:true},v:p=>htv(p.checked)},
  {id:"headertogglepair",t:"Off and on",d:"Both states side by side on the dark tile.",p:{},cid:"headertoggle",v:()=>`<div class="tgr" style="gap:24px">${htv(0).replace(" data-ab","")}${htv(1).replace(" data-ab","")}</div>`}]};
D["mode-switch"]={d:"A segmented control on a dark track. It comes in a small and a large size with two, three or four items. Mode Switch Item is one segment.",fig:"547:26811",
 props:[["items","string[]","-"],["value","string","-"],["onChange","(v: string) => void","-"],["large","boolean","false"]],
 mini:()=>msv(["Chat","Cowork"],"Chat"),
 sec:[{id:"modeswitch",t:"Mode switch",d:"Small: 2px padding, 22px items, 12px text. Large: 4px padding, 26px items, 14px text. The track is #121113 with a 6px radius. The active item is #27272A with white text; inactive items use #D2CFD9.",
  ctl:[{k:"size",o:["small","large"]},{k:"items",o:["2","3","4"]},{k:"active",o:["1","2","3","4"]}],p:{size:"small",items:"2",active:"1"},
  v:p=>{const all=["Chat","Cowork","Code","Chat"].slice(0,+p.items);return msv(all.map((x,i)=>x),all[Math.min(+p.active,all.length)-1],p.size=="large")}},
  {id:"modeswitchall",t:"All sizes and counts",d:"Small and large, with two, three and four items, as in Figma.",p:{},cid:"modeswitch",
   v:()=>`<div class="nvc">${msv(["Chat","Cowork"],"Chat")}${msv(["Chat","Cowork"],"Cowork")}${msv(["Chat","Cowork","Code"],"Chat")}${msv(["Chat","Cowork"],"Chat",1)}${msv(["Chat","Cowork"],"Cowork",1)}${msv(["Chat","Cowork","Code"],"Chat",1)}${msv(["Chat","Cowork","Code","Cowork"],"Chat")}</div>`}]};
D["mode-switch-item"]={d:"One segment of a mode switch, in six states.",fig:"845:244977",
 props:[["label","string","-"],["icon","ReactNode","-"],["active","boolean","false"],["large","boolean","false"],["onClick","() => void","-"]],
 mini:()=>msiv("Default"),
 sec:[{id:"modeswitchitem",t:"Mode switch item",d:"Default is 52 by 22 with 12px text. Large is 64 by 26 with 14px text. The icon versions are 40 by 24 with a 16px chevron. Active fill is #27272A.",
  ctl:[{k:"state",o:["Default","Inactive","Icon Active","Icon Inactive","Large Active","Large Inactive"]}],p:{state:"Default"},v:p=>msiv(p.state)},
  {id:"modeswitchitemall",t:"All six states",d:"Each state on the dark track.",p:{},cid:"modeswitchitem",v:()=>`<div class="nvg">${["Default","Inactive","Icon Active","Icon Inactive","Large Active","Large Inactive"].map(x=>`<div class="msw" style="padding:6px">${msiv(x).replace(/<div[^>]*>|<\/div>/g,"")}</div>`).join("")}</div>`}]};
D["pane-header"]={d:"The header over a side pane. The browser type has tabs, back and forward buttons and a URL field. The plan type is a title with a close button.",fig:"1044:485560",
 props:[["type",'"browser" | "plan"','"browser"'],["tabs","ReactNode","-"],["url","string","-"],["onUrl","(v: string) => void","-"],["onBack","() => void","-"],["onForward","() => void","-"],["onClose","() => void","-"]],
 mini:()=>phv("plan"),
 sec:[{id:"paneheader",t:"Pane header",d:"Browser is 579px by 80px with 16px side padding and an 8px gap, on #27272A. The URL field is 32px tall. Plan is 580px by 40px with a 14px semibold title.",ctl:[{k:"type",o:["browser","plan"]}],p:{type:"browser"},v:p=>phv(p.type)},
  {id:"paneheaderboth",t:"Browser and plan",d:"Both types, 60px apart as in the Figma frame.",p:{},cid:"paneheader",v:()=>`<div class="nvc" style="gap:48px;width:100%">${phv("browser")}${phv("plan")}</div>`}]};
D["pane-tab"]={d:"A tab in a pane with a globe icon, a label and a close button. A preview style shows the label in italics.",fig:"1129:568999",
 props:[["label","string","-"],["icon","ReactNode","-"],["active","boolean","false"],["preview","boolean","false"],["onSelect","() => void","-"],["onClose","() => void","-"]],
 mini:()=>ptv(1,0),
 sec:[{id:"panetab",t:"Pane tab",d:"22px tall with a 6px radius, 6px left and 8px right padding. Active has a #27272A fill and white text. Inactive text is #D2CFD9. The preview style uses italic text. Icons are 12px.",
  ctl:[{k:"active",b:1},{k:"preview",b:1}],p:{active:true,preview:false},v:p=>ptv(p.active,p.preview)},
  {id:"panetabgrid",t:"Active, inactive and preview",d:"The four combinations, as in Figma.",p:{},cid:"panetab",v:()=>`<div class="nvg" style="gap:12px 24px">${ptv(1,0)}${ptv(0,0)}${ptv(1,1)}${ptv(0,1)}</div>`}]};

const HOME=sv({d:'<path d="M4 11l8-7 8 7v8a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1z"/>'});
const SB={code:sv({d:'<path d="M9 8l-4 4 4 4M15 8l4 4-4 4"/>'}),home:HOME,bolt:sv({d:'<path d="M13 3L5 14h6l-1 7 8-11h-6z"/>'}),clock:sv({d:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'}),
 brief:sv({d:'<rect x="4" y="8" width="16" height="11" rx="2"/><path d="M9 8V6h6v2"/>'}),art:sv({d:'<path d="M5 18l4-6 3 3 4-7M17 8h3"/>'}),sl:sv({d:'<path d="M6 4v16M12 4v16M18 4v16M4 9h4M10 14h4M16 8h4"/>'}),
 list:sv({d:'<path d="M9 7h10M9 12h10M9 17h10M5 7h.01M5 12h.01M5 17h.01"/>'}),pal:sv({d:'<path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 1.4-2-.6-1 0-2 1.2-2H17a4 4 0 0 0 4-4c0-5-4-10-9-10z"/>'}),leaf:sv({d:'<path d="M12 20c0-6 2-10 7-12-1 6-3 10-7 12zM12 20c0-4-2-7-6-8 0 4 2 7 6 8z"/>'}),
 new:NV.plus,side:NV.side,srch:NV.search,gear:NV.gear,dn:NV.dnl};
const SEGST=["Selected","Unselected","Icon Selected","Icon Unselected"];
const sgb=(st,label)=>{const ic=st.startsWith("Icon"),on=st.endsWith("Selected")&&!st.endsWith("Unselected");return `<button class="sgb ${on?"on":""} ${ic?"ic":""}" role="tab" aria-selected="${on}" aria-label="${label||"Home"}">${SB.home}${ic?"":`<span>${label||"Home"}</span>`}</button>`};
const sgv=(p)=>`<div class="sgc" role="tablist">${sgb(p.state)}</div>`;
const sgAll=()=>`<div class="sgc" style="padding:32px;gap:24px;width:343px;max-width:100%">${sgb("Selected")}${sgb("Unselected")}<span style="flex-basis:100%;height:0"></span>${sgb("Icon Selected")}${sgb("Icon Unselected")}</div>`;
const sgTabs=(a,b)=>`<div class="sgc" role="tablist" style="padding:4px;gap:4px"><button class="sgb ${a?"on":""}">${SB.home}<span>Home</span></button><button class="sgb ${a?"":"on"}">${SB.code}<span>Code</span></button></div>`;
const sbMode=(tab,rail)=>rail?`<div class="md"><span class="rb ${tab=="home"?"on":""}">${SB.home}</span><span class="rb ${tab=="code"?"on":""}">${SB.code}</span></div>`:`<div class="md"><div class="sgc" role="tablist"><button class="sgb ${tab=="home"?"on":""}">${SB.home}<span>Home</span></button><button class="sgb ${tab=="code"?"on":""}">${SB.code}<span>Code</span></button></div></div>`;
const sbUser=rail=>`<div class="ft"><i class="av"></i>${rail?"":`<b>Shajal Ahamed</b>${SB.dn}`}</div>`;
const sbTop=()=>`<div class="tp"><div class="dots"><i style="background:#FF5F57"></i><i style="background:#FEBC2E"></i><i style="background:#28C840"></i></div><div class="ti">${SB.side}${SB.srch}</div></div>`;
const sbl=t=>`<div class="lb">${t}${SB.dn}</div>`;
const sbHome=()=>`${nvi("","New",SB.new)}${nvi("","Projects",SB.brief)}${nvi("","Artifacts",SB.art)}${nvi("","Scheduled",SB.clock)}${nvi("","Customize",SB.sl)}${sbl("Scheduled")}<div class="nvi"><i>${NV.gear}</i><span>General</span><em class="sbtg" style="font-style:normal">Weekly</em></div><div class="nvi"><i>${NV.gear}</i><span>Puku chat worker di…</span><em class="sbtg" style="font-style:normal">Daily</em></div>${sbl("Pinned")}${nvi("","Ask CP Axtra Devs",SB.list)}${sbl("Recents")}<div class="nvi sbrc"><i>${NV.gear}</i><span>New scheduled task</span></div>${["Content ideas","Claude cowork features an…","Claude cowork features an…","Accessing connectors"].map(x=>nvi("",x,SB.list)).join("")}`;
const sbDefault=()=>`<div class="sbx">${sbTop()}${sbMode("home")}<div class="bd2">${sbHome()}</div><div class="sbdz">${nvi("","Design",SB.pal)}</div>${sbUser()}</div>`;
const sbRail=()=>`<div class="sbx rl">${sbMode("home",1)}<div class="bd2"><span class="sep"></span>${[SB.new,SB.brief,SB.art,SB.clock,SB.sl].map(i=>`<span class="rb">${i}</span>`).join("")}<span class="sep"></span>${[NV.gear,NV.gear,SB.list].map(i=>`<span class="rb">${i}</span>`).join("")}<span class="rb on">${NV.gear}</span>${[1,2,3,4,5].map(()=>`<span class="rb">${SB.list}</span>`).join("")}</div><div class="sbdz" style="border:0;padding:0 0 4px"><span class="rb">${SB.pal}</span></div>${sbUser(1)}</div>`;
const sbCode=()=>`<div class="sbx">${sbTop()}${sbMode("code")}<div class="bd2">${nvi("","New",SB.new)}${nvi("","Artifacts",SB.art)}${nvi("","Routines",SB.bolt)}${nvi("","Customize",SB.sl)}${nvi("","More",SB.dn)}<div class="sbem">Sessions you start will show up here${SB.leaf}</div></div>${sbUser()}</div>`;
const sbv=p=>p.mode=="responsive"?sbRail():p.mode=="code"?sbCode():sbDefault();
const sbAll=()=>`<div class="sgw" style="gap:24px;align-items:flex-start;flex-wrap:nowrap;overflow:auto">${sbDefault()}${sbRail()}${sbCode()}</div>`;
const SI={pref:NV.gear,acc:sv({d:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="10" r="3"/><path d="M6.5 18c1-3 3-4 5.500-4s4.500 1 5.500 4"/>'}),priv:sv({d:'<rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>'}),bill:sv({d:'<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 10h18"/>'}),cap:SB.brief,mem:sv({d:'<path d="M4 12a8 8 0 1 0 3-6.200M4 4v4h4"/><path d="M9 13h6"/>'}),ref:sv({d:'<path d="M5 17a7 7 0 0 1 14 0zM3 20h18M12 5v3"/>'}),moon:sv({d:'<path d="M20 14A8 8 0 1 1 10 4a6 6 0 0 0 10 10z"/>'}),code:SB.code,mon:NV.laptop,plug:sv({d:'<path d="M9 3v5M15 3v5M6 8h12v4a6 6 0 0 1-12 0zM12 18v3"/>'}),wr:sv({d:'<path d="M14 6a4 4 0 0 0 5 5l-9 9a2 2 0 0 1-3-3z"/>'}),grid:sv({d:'<rect x="4" y="10" width="6" height="6"/><rect x="4" y="4" width="6" height="4"/><rect x="12" y="4" width="6" height="6"/><rect x="12" y="12" width="6" height="6"/>'})};
const SSG=[["Settings",[["Preference",SI.pref],["Account",SI.acc],["Privacy",SI.priv],["Billing",SI.bill],["Capabilities",SI.cap],["Memory",SI.mem],["Reflect",SI.ref],["Time and focus",SI.moon],["Puku Code",SI.code]]],["Desktop App",[["General",SI.mon],["Extensions",SI.plug],["Developer",SI.wr]]],["Customize",[["Skills",SI.mon],["Connectors",SI.grid],["Plugins",SI.plug]]]];
const ssv=p=>`<div class="sst"><div class="sch">${SB.srch}<input placeholder="Search" aria-label="Search settings"></div>${SSG.map(([t,it])=>`<div class="lb">${t}</div>${it.map(([l,i])=>nvi(l==(p&&p.active||"Preference")?"a2":"",l,i)).join("")}`).join("")}</div>`;
D["segmented-control"]={d:"A tab-style switch with a text and icon version. Each item is either selected or unselected.",fig:"3:823",
 props:[["items","{ value: string; label: string; icon?: ReactNode }[]","-"],["value","string","-"],["onChange","(v: string) => void","-"],["iconOnly","boolean","false"]],
 mini:()=>sgb("Selected"),
 sec:[{id:"segmentedcontrol",t:"Segmented control",d:"Items are 32px tall with an 8px radius and a 6px gap. Selected has a #27272A fill, a #333137 border and white text. Unselected has no fill and #A09D96 text. Text is 14px Medium. Icon items are 32px square. The tile is #1F1E1B with a 12px radius and 32px padding.",
  ctl:[{k:"state",o:SEGST}],p:{state:"Selected"},v:p=>sgv(p)},
  {id:"segmentedcontrolall",t:"All four states",d:"Selected, unselected, icon selected and icon unselected, laid out as in Figma.",p:{},cid:"segmentedcontrol",v:sgAll},
  {id:"segmentedcontroltabs",t:"As a two-tab switch",d:"Two items used as a tab switch, as in the sidebar header.",p:{home:true},ctl:[{k:"home",b:1}],cid:"segmentedcontrol",v:p=>sgTabs(p.home)}]};
D.sidebar={d:"The app sidebar. It comes in three modes: the full 264px sidebar, a 56px icon rail, and a code view with an empty state. Sidebar Settings is the settings version.",fig:"820:3375",
 props:[["mode",'"default" | "responsive" | "code"','"default"'],["tab",'"home" | "code"','"home"'],["onTab","(t) => void","-"],["user","{ name: string; avatar: string }","-"],["children","ReactNode","nav items"]],
 mini:()=>`<div class="sbx rl" style="height:780px">${sbMode("home",1)}</div>`,
 sec:[{id:"sidebar",t:"Sidebar",d:"264px wide, #181715 with a #27272A border. A window-control row sits on top, then the Home and Code switch, a list of nav items with section labels, a Design row and the user at the bottom. The icon rail is 56px wide. The code mode shows four items and the text Sessions you start will show up here.",
  ctl:[{k:"mode",o:["default","responsive","code"]}],p:{mode:"default"},v:p=>sbv(p)},
  {id:"sidebarall",t:"All three modes",d:"Default, responsive and code side by side, as in Figma. Scroll sideways on narrow screens.",p:{},cid:"sidebar",v:sbAll}]};
D["sidebar-settings"]={d:"A 192px sidebar for settings pages, with a search field and grouped nav items.",fig:"778:118618",
 props:[["sections","{ title: string; items: { id: string; label: string }[] }[]","-"],["active","string","-"],["onSelect","(id: string) => void","-"]],
 mini:()=>`<div class="sst" style="height:500px"><div class="sch">${SB.srch}<span>Search</span></div></div>`,
 sec:[{id:"sidebarsettings",t:"Sidebar settings",d:"192px wide on #181715 with a #27272A border and 12px gap. It has a 32px search field on #27272A, then three groups. Group labels are 12px uppercase. The active item uses the Nav Item Active 2 look.",ctl:[{k:"active",o:SSG.flatMap(g=>g[1].map(i=>i[0]))}],p:{active:"Preference"},v:p=>ssv(p)}]};

const tbc=(t,n)=>`${t}${n!=null?`<i>· ${n}</i>`:""}`;
const TBS=[["overview","Overview"],["contents","Contents"],["skills","Skills",8],["connectors","Connectors",1]];
const tbv=p=>`<div class="tbr" role="tablist">${TBS.map(([id,l,n])=>`<button class="tbt ${id==p.active?"on":""}" role="tab" aria-selected="${id==p.active}">${tbc(l,p.counts?n:null)}</button>`).join("")}</div>`;
const tuv=p=>`<button class="tul ${p.active?"on":""}" role="tab" aria-selected="${!!p.active}">${tbc("Wingspan",p.count?(p.active?8:1):null)}</button>`;
const tpv=p=>`<div class="tpw" role="tablist"><button class="tpp ${p.active?"on":""}" role="tab" aria-selected="${!!p.active}">Chats and tasks</button></div>`;
const tnk=(a,on)=>`<div class="tnk">${a.map((x,i)=>`<span class="${i==on?"on":""}">${x}</span>`).join("")}</div>`;
const tnv=p=>{const bk=`<button class="tnb">${NV.back}Go Back</button>`;return `<div class="tnv">${p.back=="top"?bk:""}<h1 class="tnh">Customize</h1><div class="tnr">${tnk(["Skill","Connectors","Plugins"],{skill:0,connectors:1,plugins:2}[p.tab])}<span class="tnd"></span>${tnk(["Yours","Discover"],p.filter=="Yours"?0:1)}<label class="tnq">${NV.search}<input placeholder="Search skills and plugins"></label><span class="tni">${SB.sl}</span><span class="tni">${sv({d:'<path d="M4 7h10M4 12h7M4 17h5M17 18V7M14 10l3-3 3 3"/>'})}</span><span class="tna">Add ${NV.plus}</span></div>${p.back=="bottom"?bk:""}</div>`};
D["tab-bar"]={d:"A horizontal tab row with an underline on the active tab. Some tabs show a count. Tab Pill and Tab Underline are the other two tab styles.",fig:"922:324303",
 props:[["tabs","{ id: string; label: string; count?: number }[]","-"],["value","string","-"],["onChange","(id: string) => void","-"]],
 mini:()=>tbv({active:"overview"}),
 sec:[{id:"tabbar",t:"Tab bar",d:"Tabs are 14px Medium with 12px side padding. The active tab is white with a 2px white underline. Inactive tabs are dim gray. A count shows after a dot. A thin line runs under the whole row. Colors and sizes are read from your screenshot.",
  ctl:[{k:"active",o:["overview","contents","skills","connectors"]},{k:"counts",b:1}],p:{active:"overview",counts:true},v:p=>tbv(p)}]};
D["tab-underline"]={d:"One underlined tab, with an active and an inactive look. It can show a count.",fig:"922:324281",
 props:[["label","string","-"],["count","number","-"],["active","boolean","false"],["onClick","() => void","-"]],
 mini:()=>tuv({active:true,count:true}),
 sec:[{id:"tabunderline",t:"Tab underline",d:"14px text with 12px by 8px padding and a 2px underline. Active text is #D2CFD9 with a #A1A1AA underline. Inactive text is a dim gray with no line.",
  ctl:[{k:"active",b:1},{k:"count",b:1}],p:{active:true,count:true},v:p=>tuv(p)},
  {id:"tabunderlineall",t:"Active and inactive",d:"Wingspan 8 active, Wingspan 1 inactive, as in Figma.",p:{},cid:"tabunderline",v:()=>`<div class="tulw">${tuv({active:true,count:true})}${tuv({active:false,count:true})}</div>`}]};
D["tab-pill"]={d:"A tab shaped like a pill. The active one has a dark fill and the inactive one has none.",fig:"29:2694",
 props:[["label","string","-"],["active","boolean","false"],["onClick","() => void","-"]],
 mini:()=>tpv({active:true}),
 sec:[{id:"tabpill",t:"Tab pill",d:"14px white text, 12px by 6px padding and an 8px radius. Active has a dark #141311 fill. Inactive has no fill. The tile behind it is #1C1B19 with a 12px radius.",
  ctl:[{k:"active",b:1}],p:{active:true},v:p=>tpv(p)},
  {id:"tabpillall",t:"Active and inactive",d:"Both states side by side on the tile, as in Figma.",p:{},cid:"tabpill",v:()=>`<div class="tpw"><button class="tpp on">Chats and tasks</button><button class="tpp">Chats and tasks</button></div>`}]};
D["top-nav"]={d:"The header for a page like Customize. It has a Go Back button, a title, two segmented groups, a search field, two icon buttons and an Add button.",fig:"1010:615692",
 props:[["title","string","-"],["tabs","string[]","-"],["tab","string","-"],["filters","string[]","-"],["filter","string","-"],["query","string","-"],["backPosition",'"top" | "bottom"','"top"'],["onBack","() => void","-"],["onAdd","() => void","-"]],
 mini:()=>tnv({back:"none",tab:"skill",filter:"Discover"}),
 sec:[{id:"topnav",t:"Top nav",d:"A Go Back button (32px, #27272A, 12px text), a 20px semibold title, then a row: a three-item switch, a divider, a two-item switch, a search field, two 32px icon buttons and a white Add button. Go Back can sit above the title or below the row.",
  ctl:[{k:"back",o:["top","bottom"]},{k:"tab",o:["skill","connectors","plugins"]},{k:"filter",o:["Yours","Discover"]}],p:{back:"top",tab:"skill",filter:"Discover"},v:p=>tnv(p)},
  {id:"topnavall",t:"Both layouts",d:"Go Back on top and Go Back at the bottom, as in the Figma frame.",p:{},cid:"topnav",v:()=>`<div class="nvc" style="gap:32px;width:100%">${tnv({back:"top",tab:"skill",filter:"Discover"})}${tnv({back:"bottom",tab:"skill",filter:"Discover"})}</div>`}]};

const main=document.getElementById("main"),nav=document.getElementById("nav");
const esc=s=>s.replace(/[&<>]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]));
function buildNav(f=""){f=f.toLowerCase();
 nav.innerHTML=`<a href="#/" data-r="">Introduction</a><a href="#/tokens" data-r="tokens">Design tokens</a>`+G.map((g,gi)=>{
  const it=g.roots.filter(r=>g.fam[r].some(n=>n.toLowerCase().includes(f)));if(!it.length)return"";
  return `<h4>${g.n}<span>${it.length}</span></h4>`+it.map(n=>{const k=g.fam[n].length-1;return `<a href="#/c/${gi}/${slug(n)}" data-r="c/${gi}/${slug(n)}">${n}${k?`<small>+${k}</small>`:""}${D[slug(n)]?"<b title='Code available'></b>":""}</a>`}).join("")}).join("");
 mark()}
function mark(){const r=location.hash.slice(2);nav.querySelectorAll("a").forEach(a=>a.classList.toggle("on",a.dataset.r===r))}
function home(){const total=G.reduce((a,g)=>a+g.items.length,0);
 main.innerHTML=`<h1>Puku Design System</h1><p class="lead">Every component from the Figma library, with copy-ready code for Next.js, React Native, Flutter and Vue.</p>
 <div class="stats"><div><strong>${total}</strong><span>components from Figma</span></div><div><strong>261</strong><span>design tokens</span></div><div><strong>4</strong><span>frameworks</span></div><div><strong>${Object.keys(D).length}</strong><span>with code today</span></div></div>
 <h2>How to use it</h2><ol class="st"><li>Pick a component in the sidebar. Components with a green dot have code ready.</li><li>Try the variants in Preview, then switch to Code.</li><li>Choose your framework and press Copy.</li><li>Add the shared tokens once, and every component picks up your theme.</li></ol>
 <h2>Start here</h2><p><a href="#/c/0/button">Button</a>, <a href="#/c/1/input">Input</a> and <a href="#/c/1/toggle">Toggle</a> are ready. The rest are listed from Figma and waiting for their variant specs.</p>`}
const TK={"P":[["color/primary/50","c","#F3F0FF","#F1EEFE","color/primary"],["color/primary/100","c","#E6E0FF","#E3DCFD","color/primary"],["color/primary/200","c","#D1C7FF","#CBC0FC","color/primary"],["color/primary/300","c","#BEB0FF","#B6A8FB","color/primary"],["color/primary/400","c","#AE9CFF","#A593FA","color/primary"],["color/primary/500 (Primary)","c","#9C86FF","#937DFA","color/primary"],["color/primary/600","c","#7F64F7","#755CF0","color/primary"],["color/primary/700","c","#5F41E8","#563DDE","color/primary"],["color/primary/800","c","#331E8F","#2E1E80","color/primary"],["color/primary/900","c","#171329","#171424","color/primary"],["color/base/white","c","#FFFFFF","#FFFFFF","color/base"],["color/base/black","c","#000000","#000000","color/base"],["color/neutral/50","c","#F7F5FA","#F6F3F9","color/neutral"],["color/neutral/100","c","#D2CFD9","#CCC9D3","color/neutral"],["color/neutral/200","c","#A1A1AA","#9797A0","color/neutral"],["color/neutral/300","c","#6C6A64","#615F5A","color/neutral"],["color/neutral/400","c","#4A4850","#413F46","color/neutral"],["color/neutral/500","c","#333137","#2D2B30","color/neutral"],["color/neutral/600","c","#27272A","#232325","color/neutral"],["color/neutral/700","c","#202022","#1D1D1F","color/neutral"],["color/neutral/800","c","#181715","#171615","color/neutral"],["color/neutral/900","c","#121113","#131214","color/neutral"],["color/success/300","c","#7EE787","#73E382","color/success"],["color/success/500","c","#3FB950","#38B04E","color/success"],["color/success/700","c","#1B4721","#1A3E20","color/success"],["color/warning/300","c","#F0C674","#EDBE71","color/warning"],["color/warning/500","c","#D29922","#CB8E30","color/warning"],["color/warning/700","c","#4D3A0E","#433314","color/warning"],["color/error/300","c","#FF9492","#FE8989","color/error"],["color/error/500","c","#F85149","#F64746","color/error"],["color/error/700","c","#5A1A1A","#4F191A","color/error"],["color/chrome/close","c","#FF5F57","#FE5452","color/chrome"],["color/chrome/minimize","c","#FEBC2E","#FDB33D","color/chrome"],["color/chrome/zoom","c","#28C840","#26C043","color/chrome"],["color/glow/start","c","#0718D2","#151EC6","color/glow"],["color/glow/mid","c","#D08BFF","#CA82FA","color/glow"],["color/glow/end","c","#A4ABFF","#9BA2FB","color/glow"],["spacing/0","n",0,null,"spacing"],["spacing/2","n",2,null,"spacing"],["spacing/4","n",4,null,"spacing"],["spacing/6","n",6,null,"spacing"],["spacing/8","n",8,null,"spacing"],["spacing/10","n",10,null,"spacing"],["spacing/12","n",12,null,"spacing"],["spacing/14","n",14,null,"spacing"],["spacing/16","n",16,null,"spacing"],["spacing/18","n",18,null,"spacing"],["spacing/20","n",20,null,"spacing"],["spacing/24","n",24,null,"spacing"],["spacing/32","n",32,null,"spacing"],["spacing/40","n",40,null,"spacing"],["spacing/44","n",44,null,"spacing"],["spacing/48","n",48,null,"spacing"],["spacing/56","n",56,null,"spacing"],["spacing/60","n",60,null,"spacing"],["radius/none","n",0,null,"radius"],["radius/xs","n",4,null,"radius"],["radius/sm","n",6,null,"radius"],["radius/md","n",8,null,"radius"],["radius/lg s","n",12,null,"radius"],["radius/lg m","n",16,null,"radius"],["radius/lg l","n",20,null,"radius"],["radius/full","n",999,null,"radius"],["size/icon/xs","n",12,null,"size/icon"],["size/icon/sm","n",16,null,"size/icon"],["size/icon/md","n",18,null,"size/icon"],["size/icon/lg","n",20,null,"size/icon"],["size/icon/xl","n",24,null,"size/icon"],["size/control/xs","n",24,null,"size/control"],["size/control/sm","n",28,null,"size/control"],["size/control/md","n",32,null,"size/control"],["size/control/lg","n",40,null,"size/control"],["size/control/xl","n",48,null,"size/control"],["size/control/2xl","n",56,null,"size/control"],["size/layout/sidebar","n",264,null,"size/layout"],["size/layout/panel","n",334,null,"size/layout"],["size/layout/window","n",1440,null,"size/layout"],["border-width/0","n",0,null,"border-width"],["border-width/05","n",0.5,null,"border-width"],["border-width/1","n",1,null,"border-width"],["border-width/1-5","n",1.5,null,"border-width"],["opacity/0","n",0,null,"opacity"],["opacity/5","n",0.05,null,"opacity"],["opacity/30","n",0.3,null,"opacity"],["opacity/70","n",0.7,null,"opacity"],["opacity/80","n",0.8,null,"opacity"],["opacity/85","n",0.85,null,"opacity"],["opacity/100","n",1,null,"opacity"],["New Color/dark/action-disabled","c","#151614","#151614","New Color/dark"],["New Color/dark/action-hover","c","#A8ABF8","#A8ABF8","New Color/dark"],["New Color/dark/action-pressed","c","#A8ABF8","#A8ABF8","New Color/dark"],["New Color/dark/action-primary","c","#A8ABF8","#A8ABF8","New Color/dark"],["New Color/dark/action-secondary","c","#1A1B19","#1A1B19","New Color/dark"],["New Color/dark/action-secondary-hover","c","#21221E","#21221E","New Color/dark"],["New Color/dark/background-canvas","c","#111211","#111211","New Color/dark"],["New Color/dark/background-nav-active","c","#21221E","#21221E","New Color/dark"],["New Color/dark/background-primary","c","#151614","#151614","New Color/dark"],["New Color/dark/background-secondary","c","#1A1B19","#1A1B19","New Color/dark"],["New Color/dark/background-tertiary","c","#111211","#111211","New Color/dark"],["New Color/dark/border-default","c","#2E2F29","#2E2F29","New Color/dark"],["New Color/dark/border-focus","c","#A8ABF8","#A8ABF8","New Color/dark"],["New Color/dark/border-hairline","c","#2E2F29","#2E2F29","New Color/dark"],["New Color/dark/border-strong","c","#2E2F29","#2E2F29","New Color/dark"],["New Color/dark/border-subtle","c","#2E2F29","#2E2F29","New Color/dark"],["New Color/dark/icon-accent","c","#21213F","#21213F","New Color/dark"],["New Color/dark/icon-disabled","c","#929789","#929789","New Color/dark"],["New Color/dark/icon-emphasis","c","#EBEBE2","#EBEBE2","New Color/dark"],["New Color/dark/icon-inverse","c","#111211","#111211","New Color/dark"],["New Color/dark/icon-inverse-strong","c","#111211","#111211","New Color/dark"],["New Color/dark/icon-on-accent","c","#21213F","#21213F","New Color/dark"],["New Color/dark/icon-primary","c","#EBEBE2","#EBEBE2","New Color/dark"],["New Color/dark/icon-secondary","c","#929789","#929789","New Color/dark"],["New Color/dark/icon-tertiary","c","#929789","#929789","New Color/dark"],["New Color/dark/status-complete","c","#89BF98","#89BF98","New Color/dark"],["New Color/dark/status-error","c","#FE868F","#FE868F","New Color/dark"],["New Color/dark/status-error-subtle","c","#1A1B19","#1A1B19","New Color/dark"],["New Color/dark/status-success","c","#89BF98","#89BF98","New Color/dark"],["New Color/dark/status-success-subtle","c","#1A1B19","#1A1B19","New Color/dark"],["New Color/dark/status-warning","c","#E4A780","#E4A780","New Color/dark"],["New Color/dark/status-warning-subtle","c","#1A1B19","#1A1B19","New Color/dark"],["New Color/dark/surface-control","c","#21221E","#21221E","New Color/dark"],["New Color/dark/surface-default","c","#151614","#151614","New Color/dark"],["New Color/dark/surface-elevated","c","#1A1B19","#1A1B19","New Color/dark"],["New Color/dark/surface-overlay","c","#1A1B19","#1A1B19","New Color/dark"],["New Color/dark/surface-sunken","c","#111211","#111211","New Color/dark"],["New Color/dark/text-accent","c","#A8ABF8","#A8ABF8","New Color/dark"],["New Color/dark/text-disabled","c","#929789","#929789","New Color/dark"],["New Color/dark/text-emphasis","c","#EBEBE2","#EBEBE2","New Color/dark"],["New Color/dark/text-inverse","c","#111211","#111211","New Color/dark"],["New Color/dark/text-inverse-strong","c","#111211","#111211","New Color/dark"],["New Color/dark/text-on-accent","c","#21213F","#21213F","New Color/dark"],["New Color/dark/text-primary","c","#EBEBE2","#EBEBE2","New Color/dark"],["New Color/dark/text-secondary","c","#929789","#929789","New Color/dark"],["New Color/dark/text-tertiary","c","#929789","#929789","New Color/dark"],["New Color/dark-dashboard/main","c","#151614","#151614","New Color/dark-dashboard"],["New Color/dark-dashboard/sidebar","c","#111211","#111211","New Color/dark-dashboard"],["New Color/dark-dashboard/panel","c","#1A1B19","#1A1B19","New Color/dark-dashboard"],["New Color/dark-dashboard/hover","c","#21221E","#21221E","New Color/dark-dashboard"],["New Color/dark-dashboard/selected","c","#21221E","#21221E","New Color/dark-dashboard"],["New Color/dark-dashboard/border","c","#2E2F29","#2E2F29","New Color/dark-dashboard"],["New Color/dark-dashboard/text","c","#EBEBE2","#EBEBE2","New Color/dark-dashboard"],["New Color/dark-dashboard/muted","c","#929789","#929789","New Color/dark-dashboard"],["New Color/dark-dashboard/accent","c","#A8ABF8","#A8ABF8","New Color/dark-dashboard"],["New Color/dark-dashboard/accent-ink","c","#21213F","#21213F","New Color/dark-dashboard"],["New Color/dark-dashboard/danger","c","#FE868F","#FE868F","New Color/dark-dashboard"],["New Color/dark-dashboard/success","c","#89BF98","#89BF98","New Color/dark-dashboard"],["New Color/dark-dashboard/warning","c","#E4A780","#E4A780","New Color/dark-dashboard"],["New Color/decoration/glow-warm","c","#381508","#381508","New Color/decoration"],["New Color/decoration/glow-cyan","c","#179EEF","#179EEF","New Color/decoration"],["New Color/decoration/glow-deep","c","#020F1A","#020F1A","New Color/decoration"],["New Color/light-dashboard/main","c","#EFEEE6","#EFEEE6","New Color/light-dashboard"],["New Color/light-dashboard/sidebar","c","#E6E6DC","#E6E6DC","New Color/light-dashboard"],["New Color/light-dashboard/panel","c","#F9F9F4","#F9F9F4","New Color/light-dashboard"],["New Color/light-dashboard/hover","c","#E0E1D7","#E0E1D7","New Color/light-dashboard"],["New Color/light-dashboard/selected","c","#C7CCBC","#C7CCBC","New Color/light-dashboard"],["New Color/light-dashboard/border","c","#C2C6B9","#C2C6B9","New Color/light-dashboard"],["New Color/light-dashboard/text","c","#24271F","#24271F","New Color/light-dashboard"],["New Color/light-dashboard/muted","c","#575C50","#575C50","New Color/light-dashboard"],["New Color/light-dashboard/accent","c","#4146C4","#4146C4","New Color/light-dashboard"],["New Color/light-dashboard/accent-ink","c","#F9F9FF","#F9F9FF","New Color/light-dashboard"],["New Color/light-dashboard/danger","c","#AB2239","#AB2239","New Color/light-dashboard"],["New Color/light-dashboard/success","c","#2C603A","#2C603A","New Color/light-dashboard"],["New Color/light-dashboard/warning","c","#7F411E","#7F411E","New Color/light-dashboard"],["New Color/light-chart/teal","c","#266C77","#266C77","New Color/light-chart"],["New Color/light-chart/ochre","c","#786532","#786532","New Color/light-chart"],["New Color/light-chart/violet","c","#7A498C","#7A498C","New Color/light-chart"],["New Color/light-chart/blue","c","#336399","#336399","New Color/light-chart"]],"S":[["Icon/primary","c",[["#FFFFFF","color/base/white"],["#121113","color/neutral/900"],["#EBEBE2","New Color/dark/icon-primary"]],"Icon"],["Icon/secondary","c",[["#D2CFD9","color/neutral/100"],["#333137","color/neutral/500"],["#929789","New Color/dark/icon-secondary"]],"Icon"],["Icon/tertiary","c",[["#A1A1AA","color/neutral/200"],["#6C6A64","color/neutral/300"],["#929789","New Color/dark/icon-tertiary"]],"Icon"],["Icon/disabled","c",[["#6C6A64","color/neutral/300"],["#A1A1AA","color/neutral/200"],["#929789","New Color/dark/icon-disabled"]],"Icon"],["Icon/inverse","c",[["#121113","color/neutral/900"],["#FFFFFF","color/base/white"],["#111211","New Color/dark/icon-inverse"]],"Icon"],["Icon/on-accent","c",[["#FFFFFF","color/base/white"],["#FFFFFF","color/base/white"],["#21213F","New Color/dark/icon-on-accent"]],"Icon"],["Icon/accent","c",[["#9C86FF","color/primary/500 (Primary)"],["#5F41E8","color/primary/700"],["#A8ABF8","New Color/dark/border-focus"]],"Icon"],["Icon/inverse-strong","c",[["#121113","color/neutral/900"],["#FFFFFF","color/base/white"],["#111211","New Color/dark/icon-inverse-strong"]],"Icon"],["Icon/emphasis","c",[["#F7F5FA","color/neutral/50"],["#121113","color/neutral/900"],["#EBEBE2","New Color/dark/icon-emphasis"]],"Icon"],["background/canvas","c",[["#000000","color/base/black"],["#F3F0FF","color/primary/50"],["#111211","New Color/dark/background-canvas"]],"background"],["background/primary","c",[["#181715","color/neutral/800"],["#FFFFFF","color/base/white"],["#151614","New Color/dark/background-primary"]],"background"],["background/secondary","c",[["#202022","color/neutral/700"],["#F7F5FA","background/tertiary"],["#1A1B19","New Color/dark/background-secondary"]],"background"],["background/tertiary","c",[["#121113","color/neutral/900"],["#F7F5FA","color/neutral/50"],["#111211","New Color/dark/background-tertiary"]],"background"],["background/nav-active","c",[["#181715","color/neutral/800"],["#D2CFD9","color/neutral/100"],["#21221E","New Color/dark/background-nav-active"]],"background"],["surface/default","c",[["#181715","color/neutral/800"],["#FFFFFF","color/base/white"],["#151614","New Color/dark/surface-default"]],"surface"],["surface/elevated","c",[["#27272A","color/neutral/600"],["#F3F0FF","color/primary/50"],["#21221E","New Color/dark/surface-control"]],"surface"],["surface/overlay","c",[["#27272A","color/neutral/600"],["#FFFFFF","color/base/white"],["#1A1B19","New Color/dark/surface-overlay"]],"surface"],["surface/Black","c",[["#000000","color/base/black"],["#FFFFFF","color/base/white"],["#000000","color/base/black"]],"surface"],["surface/control","c",[["#27272A","color/neutral/600"],["#FFFFFF","surface/default"],["#21221E","New Color/dark/surface-control"]],"surface"],["text/primary","c",[["#FFFFFF","color/base/white"],["#121113","color/neutral/900"],["#EBEBE2","New Color/dark/text-primary"]],"text"],["text/secondary","c",[["#D2CFD9","color/neutral/100"],["#333137","color/neutral/500"],["#929789","New Color/dark/text-secondary"]],"text"],["text/tertiary","c",[["#A1A1AA","color/neutral/200"],["#6C6A64","color/neutral/300"],["#929789","New Color/dark/text-tertiary"]],"text"],["text/disabled","c",[["#6C6A64","color/neutral/300"],["#A1A1AA","color/neutral/200"],["#929789","New Color/dark/text-disabled"]],"text"],["text/inverse","c",[["#121113","color/neutral/900"],["#FFFFFF","color/base/white"],["#111211","New Color/dark/text-inverse"]],"text"],["text/inverse-strong","c",[["#121113","color/neutral/900"],["#FFFFFF","color/base/white"],["#111211","New Color/dark/text-inverse-strong"]],"text"],["text/on-accent","c",[["#FFFFFF","color/base/white"],["#FFFFFF","color/base/white"],["#21213F","New Color/dark/text-on-accent"]],"text"],["text/accent","c",[["#9C86FF","color/primary/500 (Primary)"],["#5F41E8","color/primary/700"],["#A8ABF8","New Color/dark/text-accent"]],"text"],["text/emphasis","c",[["#F7F5FA","color/neutral/50"],["#121113","color/neutral/900"],["#EBEBE2","New Color/dark/text-emphasis"]],"text"],["border/subtle","c",[["#27272A","color/neutral/600"],["#F7F5FA","color/neutral/50"],["#2E2F29","New Color/dark/border-subtle"]],"border"],["border/default","c",[["#27272A","color/neutral/600"],["#D2CFD9","color/neutral/100"],["#2E2F29","New Color/dark/border-default"]],"border"],["border/strong","c",[["#333137","color/neutral/500"],["#A1A1AA","color/neutral/200"],["#2E2F29","New Color/dark/border-strong"]],"border"],["border/focus","c",[["#9C86FF","color/primary/500 (Primary)"],["#7F64F7","color/primary/600"],["#A8ABF8","New Color/dark/border-focus"]],"border"],["border/hairline","c",[["#D2CFD9","color/neutral/100"],["#D2CFD9","color/neutral/100"],["#2E2F29","New Color/dark/border-hairline"]],"border"],["action/primary","c",[["#9C86FF","color/primary/500 (Primary)"],["#7F64F7","color/primary/600"],["#A8ABF8","New Color/dark/action-primary"]],"action"],["action/hover","c",[["#AE9CFF","color/primary/400"],["#5F41E8","color/primary/700"],["#A8ABF8","New Color/dark/action-hover"]],"action"],["action/pressed","c",[["#7F64F7","color/primary/600"],["#331E8F","color/primary/800"],["#A8ABF8","New Color/dark/action-pressed"]],"action"],["action/disabled","c",[["#4A4850","color/neutral/400"],["#D2CFD9","color/neutral/100"],["#151614","New Color/dark/action-disabled"]],"action"],["action/secondary","c",[["#27272A","color/neutral/600"],["#F7F5FA","color/neutral/50"],["#1A1B19","New Color/dark/action-secondary"]],"action"],["action/secondary-hover","c",[["#27272A","color/neutral/600"],["#D2CFD9","color/neutral/100"],["#21221E","New Color/dark/action-secondary-hover"]],"action"],["status/success","c",[["#3FB950","color/success/500"],["#3FB950","color/success/500"],["#89BF98","New Color/dark/status-success"]],"status"],["status/success-subtle","c",[["#1B4721","color/success/700"],["#1B4721","color/success/700"],["#1A1B19","New Color/dark/status-success-subtle"]],"status"],["status/warning","c",[["#D29922","color/warning/500"],["#4D3A0E","color/warning/700"],["#E4A780","New Color/dark/status-warning"]],"status"],["status/warning-subtle","c",[["#4D3A0E","color/warning/700"],["#F0C674","color/warning/300"],["#1A1B19","New Color/dark/status-warning-subtle"]],"status"],["status/error","c",[["#F85149","color/error/500"],["#5A1A1A","color/error/700"],["#FE868F","New Color/dark/status-error"]],"status"],["status/error-subtle","c",[["#5A1A1A","color/error/700"],["#FF9492","color/error/300"],["#1A1B19","New Color/dark/status-error-subtle"]],"status"],["status/complete","c",[["#F7F5FA","color/neutral/50"],["#121113","color/neutral/900"],["#89BF98","New Color/dark/status-complete"]],"status"],["typography/body/size","n",[[14,"font-size/14"],[14,"font-size/14"],[14,"font-size/14"]],"typography"],["typography/body/line-height","n",[[22,"line-height/22"],[22,"line-height/22"],[22,"line-height/22"]],"typography"],["typography/meta/size","n",[[12,"font-size/12"],[12,"font-size/12"],[12,"font-size/12"]],"typography"],["typography/meta/line-height","n",[[16,"line-height/16"],[16,"line-height/16"],[16,"line-height/16"]],"typography"],["typography/title/size","n",[[16,"font-size/16"],[16,"font-size/16"],[16,"font-size/16"]],"typography"],["typography/title/line-height","n",[[22,"line-height/22"],[22,"line-height/22"],[22,"line-height/22"]],"typography"],["radius/control","n",[[6,"radius/sm"],[6,"radius/sm"],[6,"radius/sm"]],"radius"],["radius/button","n",[[8,"radius/md"],[8,"radius/md"],[8,"radius/md"]],"radius"],["radius/card s","n",[[12,"radius/lg s"],[12,"radius/lg s"],[12,"radius/lg s"]],"radius"],["radius/card m","n",[[16,"radius/lg m"],[16,"radius/lg m"],[16,"radius/lg m"]],"radius"],["radius/card l","n",[[20,"radius/lg l"],[20,"radius/lg l"],[20,"radius/lg l"]],"radius"],["border-width/default","n",[[1,"border-width/1"],[1,"border-width/1"],[1,"border-width/1"]],"border-width"],["border-width/icon","n",[[1.5,"border-width/1-5"],[1.5,"border-width/1-5"],[1.5,"border-width/1-5"]],"border-width"]]};
const cssn=n=>n.toLowerCase().replace(/[ \/()]+/g,"-").replace(/-+$/,"");
const flash=(b,t)=>{const o=b.dataset.o||b.textContent;b.dataset.o=o;b.textContent=t;setTimeout(()=>b.textContent=o,1200)};
const clip=async(txt,b)=>{try{await navigator.clipboard.writeText(txt);flash(b,"Copied")}catch(e){const a=document.createElement("textarea");a.value=txt;document.body.appendChild(a);a.select();try{document.execCommand("copy");flash(b,"Copied")}catch(_){flash(b,"Press Ctrl+C")}a.remove()}};
let TT={tab:"prim",pg:"All",pm:"both",sm:0,sg:"All"};
const SMODES=["Dark","Light","New Color Mood"];
function tokens(){
 const cnt=[167,59,35,0];
 const tabs=[["prim","Primitives"],["sem","Semantic"],["typo","Typography"],["theme","Theme"]];
 main.innerHTML=`<h1>Design tokens</h1><p class="lead">Every variable from the Figma file. Select a tab, then click any value to copy it.</p>
 <div class="tk-tabs" role="tablist">${tabs.map(([k,l],i)=>`<button role="tab" data-tt="${k}" class="${TT.tab==k?"on":""}">${l}<small>${cnt[i]}</small></button>`).join("")}</div><div id="tkb"></div>`;
 main.querySelectorAll("[data-tt]").forEach(b=>b.onclick=()=>{TT.tab=b.dataset.tt;tokens()});
 const el=document.getElementById("tkb");
 if(TT.tab=="prim")tkPrim(el);else if(TT.tab=="sem")tkSem(el);else if(TT.tab=="typo")tkTypo(el);else el.innerHTML=`<p class="note">The Theme collection has one mode (Mode 1) and no variables yet. Nothing to import.</p>`;
}
const sw=(v,x)=>`<i class="sw" style="background:${v}"></i>`;
function chips(list,cur,key){return `<div class="tk-chips">${list.map(g=>`<button data-${key}="${g[0]}" class="${cur==g[0]?"on":""}">${g[1]}</button>`).join("")}</div>`}
function tkPrim(el){
 const gs=[];TK.P.forEach(r=>{if(!gs.includes(r[4]))gs.push(r[4])});
 const lab=g=>g.replace("color/","").replace("New Color/","New · ");
 const cl=[["All","All ("+TK.P.length+")"]].concat(gs.map(g=>[g,lab(g)+" ("+TK.P.filter(r=>r[4]==g).length+")"]));
 const rows=TK.P.filter(r=>TT.pg=="All"||r[4]==TT.pg);
 const hasColor=rows.some(r=>r[1]=="c");
 const modes=[["both","Compare"],["v","Value"],["n","New Color"]];
 el.innerHTML=`<p class="sd">Raw values. The <b>Value</b> mode is the original palette; <b>New Color</b> is the revised one. Semantic tokens point at these.</p>`+chips(cl,TT.pg,"pg")+
 (hasColor?`<div class="tk-bar"><div class="seg">${modes.map(([k,l])=>`<button data-pm="${k}" class="${TT.pm==k?"on":""}">${l}</button>`).join("")}</div><button class="ib" data-cssall>Copy as CSS</button></div>`:"")+
 `<div class="tw"><table class="tk"><tr><th>Name</th>${hasColor&&TT.pm!="n"?"<th>Value</th>":(!hasColor?"<th>Value</th>":"")}${hasColor&&TT.pm!="v"?"<th>New Color</th>":""}</tr>${rows.map(r=>{
  if(r[1]=="n")return `<tr><td>${r[0]}</td><td><button class="cp" data-c="${r[2]}">${r[2]}</button></td></tr>`;
  const a=`<td><button class="cp" data-c="${r[2]}">${sw(r[2])}${r[2].slice(1)}</button></td>`,b=`<td><button class="cp" data-c="${r[3]}">${sw(r[3])}${r[3].slice(1)}</button></td>`;
  return `<tr><td>${r[0]}</td>${TT.pm!="n"?a:""}${TT.pm!="v"?b:""}</tr>`}).join("")}</table></div>`;
 el.querySelectorAll("[data-pg]").forEach(b=>b.onclick=()=>{TT.pg=b.dataset.pg;tokens()});
 el.querySelectorAll("[data-pm]").forEach(b=>b.onclick=()=>{TT.pm=b.dataset.pm;tokens()});
 el.querySelectorAll(".cp").forEach(b=>b.onclick=()=>clip(b.dataset.c,b));
 const ca=el.querySelector("[data-cssall]");if(ca)ca.onclick=()=>clip(":root {\n"+rows.filter(r=>r[1]=="c").map(r=>`  --${cssn(r[0])}: ${TT.pm=="n"?r[3]:r[2]};`).join("\n")+"\n}",ca);
}
function tkSem(el){
 const gs=[];TK.S.forEach(r=>{if(!gs.includes(r[3]))gs.push(r[3])});
 const cl=[["All","All ("+TK.S.length+")"]].concat(gs.map(g=>[g,g+" ("+TK.S.filter(r=>r[3]==g).length+")"]));
 const m=TT.sm,rows=TK.S.filter(r=>TT.sg=="All"||r[3]==TT.sg);
 const g=n=>{const r=TK.S.find(x=>x[0]==n);return r[2][m][0]};
 el.innerHTML=`<p class="sd">What components use. Each token has one value per mode and points to a primitive.</p>
 <div class="tk-tabs sub" role="tablist">${SMODES.map((x,i)=>`<button data-sm="${i}" class="${m==i?"on":""}">${x}</button>`).join("")}</div>
 <div class="tk-demo" style="background:${g("background/canvas")};border-color:${g("border/default")}"><div style="background:${g("surface/default")};border:1px solid ${g("border/default")};color:${g("text/primary")}"><strong>Preview</strong><span style="color:${g("text/secondary")}">Secondary text on the default surface</span><div><button style="background:${g("action/primary")};color:${g("text/on-accent")}">Primary</button><button style="background:${g("action/secondary")};color:${g("text/primary")}">Secondary</button><em style="color:${g("status/success")}">Success</em><em style="color:${g("status/warning")}">Warning</em><em style="color:${g("status/error")}">Error</em></div></div></div>`+
 chips(cl,TT.sg,"sg")+`<div class="tk-bar"><span class="sd" style="margin:0">${rows.length} tokens in ${SMODES[m]}</span><span><button class="ib" data-css>Copy CSS</button> <button class="ib" data-json>Copy JSON</button></span></div>
 <div class="tw"><table class="tk"><tr><th>Name</th><th>CSS variable</th><th>${SMODES[m]}</th><th>Points to</th></tr>${rows.map(r=>{const v=r[2][m];const c=r[1]=="c";
  return `<tr><td>${r[0]}</td><td><code>--${cssn(r[0])}</code></td><td><button class="cp" data-c="${c?v[0]:v[0]}">${c?sw(v[0]):""}${c?v[0].slice(1):v[0]}</button></td><td class="al">${v[1]}</td></tr>`}).join("")}</table></div>`;
 el.querySelectorAll("[data-sm]").forEach(b=>b.onclick=()=>{TT.sm=+b.dataset.sm;tokens()});
 el.querySelectorAll("[data-sg]").forEach(b=>b.onclick=()=>{TT.sg=b.dataset.sg;tokens()});
 el.querySelectorAll(".cp").forEach(b=>b.onclick=()=>clip(b.dataset.c,b));
 el.querySelector("[data-css]").onclick=e=>clip(":root {\n"+rows.map(r=>`  --${cssn(r[0])}: ${r[2][m][0]}${r[1]=="n"?"px":""};`).join("\n")+"\n}",e.target);
 el.querySelector("[data-json]").onclick=e=>clip(JSON.stringify(Object.fromEntries(rows.map(r=>[r[0],r[2][m][0]])),null,2),e.target);
}
function tkTypo(el){
 const sizes=[[10,14,"Disclaimer"],[11,16,"Overline, mono"],[12,16,"Meta, section headers"],[13,18,"Tool labels, mono counter"],[14,22,"Body default"],[15,22,"Added, not in approved design"],[16,22,"Page title"],[18,26,"Title / paragraph tier"],[20,28,"Title / paragraph tier"],[24,32,"Title / paragraph tier"],[32,40,"Title H4"],[40,48,"Title H3"],[48,56,"Title H2"],[56,64,"Title H1"]];
 const lh=[14,16,18,20,22,24,26,28,32,40,48,56,64];
 const wt=[["regular","Regular",400,"Extracted"],["medium","Medium",500,"Extracted"],["semibold","Semi Bold",600,"Overline only"],["bold","Bold",700,"Reserved, not used in approved design"]];
 el.innerHTML=`<p class="sd">35 variables: two font families, 14 sizes, 13 line heights, 2 letter spacings and 4 weights. Pairings come from the variable descriptions in Figma.</p>
 <h2>Font families</h2><div class="tk-fam"><div><span class="al">font-family/Inter</span><p style="font:500 34px/1.2 Inter,system-ui">Aa Inter</p><p style="font:400 14px/22px Inter,system-ui">The base family, used for everything except counters and keys.</p></div><div><span class="al">font-family/JetBrains Mono</span><p style="font:500 34px/1.2 'JetBrains Mono',ui-monospace,monospace">Aa Mono</p><p style="font:400 14px/22px 'JetBrains Mono',ui-monospace,monospace">Esc key and counters.</p></div></div>
 <h2>Size and line height</h2><div class="tw"><table class="tk"><tr><th>Token</th><th>Size</th><th>Line height</th><th>Use</th><th>Sample</th></tr>${sizes.map(([s,l,u])=>`<tr><td><code>font-size/${s}</code></td><td><button class="cp" data-c="${s}">${s}px</button></td><td><code>line-height/${l}</code> · ${l}px</td><td class="al">${u}</td><td><span style="font:400 ${Math.min(s,40)}px/1.2 Inter,system-ui;white-space:nowrap">Design system</span></td></tr>`).join("")}</table></div>
 <h2>Line heights</h2><p class="sd">${lh.map(x=>`<code>line-height/${x}</code>`).join(" ")}</p>
 <h2>Weight</h2><div class="tw"><table class="tk"><tr><th>Token</th><th>Figma style</th><th>CSS</th><th>Note</th><th>Sample</th></tr>${wt.map(([k,s,n,d])=>`<tr><td><code>weight/${k}</code></td><td>${s}</td><td><button class="cp" data-c="${n}">${n}</button></td><td class="al">${d}</td><td><span style="font:${n} 16px Inter,system-ui">Design system</span></td></tr>`).join("")}</table></div>
 <h2>Letter spacing</h2><div class="tw"><table class="tk"><tr><th>Token</th><th>Value</th><th>Note</th></tr><tr><td><code>letter-spacing/0</code></td><td>0</td><td class="al">Everything except the overline</td></tr><tr><td><code>letter-spacing/overline</code></td><td>0.88px</td><td class="al">11px Semi Bold overline label</td></tr></table></div>
 <h2>Semantic text styles</h2><div class="tw"><table class="tk"><tr><th>Style</th><th>Size</th><th>Line height</th><th>Sample</th></tr>${[["body",14,22],["meta",12,16],["title",16,22]].map(([k,s,l])=>`<tr><td><code>typography/${k}</code></td><td>${s}px</td><td>${l}px</td><td><span style="font:400 ${s}px/${l}px Inter,system-ui">The quick brown fox</span></td></tr>`).join("")}</table></div>`;
 el.querySelectorAll(".cp").forEach(b=>b.onclick=()=>clip(b.dataset.c,b));
}
function relHTML(gi,name){const g=G[gi],l=R[slug(name)];let pr;
 if(l)pr=l.map(n=>{const j=Math.max(0,G.findIndex(x=>x.items.includes(n)));return [j,G[j].root[n]]});
 else{const rs=g.roots,i=rs.indexOf(name);pr=rs.filter((n,k)=>n!==name&&Math.abs(k-i)<=4).slice(0,8).map(n=>[gi,n])}
 pr=pr.filter(([j,n],k,a)=>a.findIndex(y=>y[1]==n&&y[0]==j)==k&&!(j==gi&&n==name));
 return `<h2 id="related">Related components</h2><p class="sd">Other components that appear alongside ${name}.</p><div class="rel">`+pr.map(([j,n])=>{const dd=D[slug(n)],c=G[j].fam[n].length;return `<a href="#/c/${j}/${slug(n)}">${dd&&dd.mini?`<div class="mini">${dd.mini()}</div>`:""}<strong>${n}</strong><span>${dd?"Code ready":"Spec pending"}${c>1?` · ${c} components`:""}</span></a>`}).join("")+`</div>`}
function famBlock(n,root,inits){const s=slug(n),d=D[s];
 if(d&&!d.sec)d.sec=[{id:s,t:"Default "+n.toLowerCase(),d:"Change the props below to see each state.",ctl:d.ctl,p:d.p,v:d.v}];
 const lv=root?2:3;
 const secs=d?d.sec.map(x=>{inits.push([x,d.fig]);return `<section class="sec" id="sec-${x.id}"><h${lv}>${x.t}</h${lv}><p class="sd">${x.d||""}</p><div class="box"></div></section>`}).join(""):"";
 const props=d?`<h${lv} id="${root?"props":"props-"+s}">${root?"Props":n+" props"}</h${lv}><div class="tw"><table><tr><th>Prop</th><th>Type</th><th>Default</th></tr>${d.props.map(r=>`<tr><td><code>${r[0]}</code></td><td><code>${esc(r[1])}</code></td><td><code>${esc(r[2])}</code></td></tr>`).join("")}</table></div>`:"";
 if(root)return d?secs+props:`<p class="note" style="margin-top:20px">The name and group are imported. Variants, props and measurements still need to be read from Figma before preview and code can be generated for this component.</p>`;
 return `<section class="fam" id="fam-${s}"><h2 class="fh">${n}</h2>${d?`<p class="sd">${d.d}</p>${secs}${props}`:`<span class="pill">Spec not imported yet</span><p class="note" style="margin-top:12px">Part of the ${root?"":""}family. Its variants and measurements still need to be read from Figma.</p>`}</section>`}
function secInit(x,box,fig){
 let tab="preview",fw="next",view="100%",rtl=false,dark=true;const p={...x.p};
 const paint=()=>{
  const ctl=(x.ctl||[]).map(c=>c.b?`<label><input type="checkbox" data-k="${c.k}" ${p[c.k]?"checked":""}> ${c.k}</label>`:`<label>${c.k}<select data-k="${c.k}">${c.o.map(o=>`<option ${p[c.k]===o?"selected":""}>${o}</option>`).join("")}</select></label>`).join("");
  const code=document.getElementById((x.cid||x.id)+"."+fw).textContent.trim().replace(/<\\\/script>/g,"</scr"+"ipt>")+(x.use?"\n\n"+x.use(fw):"");
  box.innerHTML=`<div class="tb"><div class="tl">${fig?`<a class="ib" target="_blank" rel="noopener" href="${FIG}${fig.replace(":","-")}">Open in Figma</a>`:""}<div class="seg"><button data-t="preview" class="${tab=="preview"?"on":""}">Preview</button><button data-t="code" class="${tab=="code"?"on":""}">Code</button></div></div>
  <div class="tc">${tab=="preview"?[["100%","Desktop"],["768px","Tablet"],["375px","Mobile"]].map(([w,l])=>`<button data-v="${w}" class="${view==w?"on":""}">${l}</button>`).join(""):""}</div>
  <div class="tr"><button data-rtl class="${rtl?"on":""}">RTL</button><button data-th>${dark?"Dark":"Light"}</button></div></div>`+
  (tab=="preview"?`<div class="pv ${dark?"d":"l"}"><div class="frame" style="width:${view}" dir="${rtl?"rtl":"ltr"}">${x.v(p)}</div></div>${ctl?`<div class="ctl">${ctl}</div>`:""}`
  :`<div class="fw">${FW.map(([k,l])=>`<button data-f="${k}" class="${fw==k?"on":""}">${l}</button>`).join("")}</div><div class="codewrap"><button class="copy">Copy</button><pre><code>${esc(code)}</code></pre></div>`);
  box.querySelectorAll("[data-t]").forEach(b=>b.onclick=()=>{tab=b.dataset.t;paint()});
  box.querySelectorAll("[data-v]").forEach(b=>b.onclick=()=>{view=b.dataset.v;paint()});
  box.querySelectorAll("[data-f]").forEach(b=>b.onclick=()=>{fw=b.dataset.f;paint()});
  box.querySelector("[data-rtl]").onclick=()=>{rtl=!rtl;paint()};
  box.querySelector("[data-th]").onclick=()=>{dark=!dark;paint()};
  box.querySelectorAll("[data-k]").forEach(i=>i.onchange=()=>{p[i.dataset.k]=i.type=="checkbox"?i.checked:i.value;paint()});
  const t=box.querySelector("[data-tg]");if(t)t.onclick=()=>{p.on=!p.on;paint()};const ab=box.querySelector("[data-ab]");if(ab)ab.onclick=()=>{p.checked=!p.checked;paint()};
  const cp=box.querySelector(".copy");if(cp)cp.onclick=async()=>{try{await navigator.clipboard.writeText(code);cp.textContent="Copied"}catch(e){const r=document.createRange();r.selectNodeContents(box.querySelector("code"));getSelection().removeAllRanges();getSelection().addRange(r);cp.textContent="Press Ctrl+C"}setTimeout(()=>cp.textContent="Copy",1800)};
 };paint()}
function comp(gi,s){const g=G[gi],name=g&&g.items.find(n=>slug(n)===s),toc=document.getElementById("toc");
 if(!name){main.innerHTML="<h1>Not found</h1><p><a href='#/'>Back to start</a></p>";return}
 const root=g.root[name];
 if(root!==name){SC="fam-"+s;try{history.replaceState(null,"","#/c/"+gi+"/"+slug(root))}catch(e){}}
 const d=D[slug(root)],kids=g.fam[root].slice(1),inits=[];
 const body=famBlock(root,true,inits)+kids.map(k=>famBlock(k,false,inits)).join("");
 main.innerHTML=`<p class="crumb">${g.n}</p><h1>${root}</h1><p class="lead">${d?d.d:g.n+" component from the Figma library."}</p>${d?'<span class="pill ok">Code ready</span>':'<span class="pill">Spec not imported yet</span>'}${kids.length?`<span class="pill">${kids.length} nested</span>`:""}`+body+relHTML(gi,root);
 inits.forEach(([x,f])=>secInit(x,main.querySelector("#sec-"+x.id+" .box"),f));
 if(d&&!d.sec)d.sec=[];
 toc.innerHTML=`<h5>On this page</h5>`+(d?d.sec.map(x=>`<button data-s="sec-${x.id}">${x.t}</button>`).join("")+`<button data-s="props">Props</button>`:"")+kids.map(k=>`<button data-s="fam-${slug(k)}">${k}</button>`).join("")+`<button data-s="related">Related components</button>`;
 tocBind(toc)}
function tocBind(toc){const bs=[...toc.querySelectorAll("button")];bs.forEach(b=>b.onclick=()=>document.getElementById(b.dataset.s).scrollIntoView({behavior:matchMedia("(prefers-reduced-motion:reduce)").matches?"auto":"smooth"}));
 if(bs[0])bs[0].classList.add("on");
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)bs.forEach(b=>b.classList.toggle("on",b.dataset.s==e.target.id))}),{rootMargin:"-80px 0px -60% 0px"});
 bs.forEach(b=>{const t=document.getElementById(b.dataset.s);if(t)io.observe(t)})}
function route(){const r=location.hash.slice(2).split("/");document.getElementById("toc").innerHTML="";document.body.classList.remove("nav");
 if(r[0]=="c")comp(+r[1],r[2]);else if(r[0]=="tokens")tokens();else home();mark();scrollTo(0,0);if(SC){const e=document.getElementById(SC);SC=null;if(e)e.scrollIntoView()}}
addEventListener("hashchange",route);
document.getElementById("q").oninput=e=>buildNav(e.target.value);
document.getElementById("menu").onclick=()=>document.body.classList.toggle("nav");
document.getElementById("theme").onclick=()=>{const h=document.documentElement,dark=h.dataset.theme?h.dataset.theme=="dark":matchMedia("(prefers-color-scheme:dark)").matches;h.dataset.theme=dark?"light":"dark"};
buildNav();route();
