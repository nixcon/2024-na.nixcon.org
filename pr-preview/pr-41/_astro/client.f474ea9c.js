const r=()=>{};const f=e=>(s,t,n,{client:i})=>{if(!e.hasAttribute("ssr"))return;const l={};for(const[o,c]of Object.entries(n))l[o]=a(o,c);try{const o=new s({target:e,props:{...t,$$slots:l,$$scope:{ctx:[]}},hydrate:i!=="only",$$inline:!0});element.addEventListener("astro:unmount",()=>o.$destroy(),{once:!0})}catch{}finally{}};function a(e,s){let t;return[()=>({m(n){t=n,n.insertAdjacentHTML("beforeend",`<astro-slot${e==="default"?"":` name="${e}"`}>${s}</astro-slot>`)},c:r,l:r,d(){if(!t)return;const n=t.querySelector(`astro-slot${e==="default"?":not([name])":`[name="${e}"]`}`);n&&n.remove()}}),r,r]}export{f as default};