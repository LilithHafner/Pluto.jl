var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequire94c2;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},e.parcelRequire94c2=n);var r=n("cNaMA");n("eS9BV");var a,l,i,s,u={};a=u,l="Welcome",i=()=>G,s=e=>G=e,Object.defineProperty(a,l,{get:i,set:s,enumerable:!0,configurable:!0}),n("9Ta4i");r=n("cNaMA"),r=n("cNaMA");var c=n("4zMEb");const d=async()=>{let e=await fetch("https://api.github.com/repos/fonsp/Pluto.jl/releases",{method:"GET",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer"});return(await e.json()).reverse()};n("9Ta4i");r=n("cNaMA");var h=n("2ZZ1r");r=n("cNaMA");const p=e=>{const t=`${e}\n`.replace("\r\n","\n"),o=t.indexOf("### A Pluto.jl notebook ###"),n=t.match(/# ... ........-....-....-....-............/g),r=(null==n?void 0:n.length)??0;let a=t.indexOf("# ╔═╡ Cell order:")+17+1;for(let e=1;e<=r;e++)a=t.indexOf("\n",a+1)+1;return t.slice(o,a)},m=({on_start_navigation:e})=>{const t=async t=>{var o;let n;if(console.log(t),(null===(o=((null==t?void 0:t.path)??(null==t?void 0:t.composedPath())).filter((e=>{var t;return null==e||null===(t=e.classList)||void 0===t?void 0:t.contains(".cm-editor")})))||void 0===o?void 0:o.length)>0)return;switch(t.type){case"paste":n=p(t.clipboardData.getData("text/plain"));break;case"dragstart":return void(t.dataTransfer.dropEffect="move");case"dragover":return void t.preventDefault();case"drop":t.preventDefault(),n=t.dataTransfer.types.includes("Files")?await(a=t.dataTransfer.files[0],new Promise(((e,t)=>{const{name:o,type:n}=a,r=new FileReader;r.onerror=()=>t("Failed to read file!"),r.onloadstart=()=>{},r.onprogress=({loaded:e,total:t})=>{},r.onload=()=>{},r.onloadend=()=>e({file:r.result,name:o,type:n}),r.readAsText(a)}))).then((({file:e})=>e)):p(await(r=t.dataTransfer.items[0],new Promise(((e,t)=>{try{r.getAsString((t=>{console.log(t),e(t)}))}catch(e){t(e)}}))))}var r,a;if(!n)return;e("notebook from clipboard",!1),document.body.classList.add("loading");const l=await fetch("./notebookupload",{method:"POST",body:n});if(l.ok)window.location.href=w(await l.text());else{let e=await l.blob();window.location.href=URL.createObjectURL(e)}};return r.useEffect((()=>(document.addEventListener("paste",t),document.addEventListener("drop",t),document.addEventListener("dragstart",t),document.addEventListener("dragover",t),()=>{document.removeEventListener("paste",t),document.removeEventListener("drop",t),document.removeEventListener("dragstart",t),document.removeEventListener("dragover",t)}))),r.html`<span />`};var f=n("1xJnC");const _=({client:e,connected:t,CustomPicker:o,show_samples:n,on_start_navigation:a})=>{const l=o??{text:"Open a notebook",placeholder:"Enter path or URL..."};return r.html`<${m} on_start_navigation=${a} />
        <h2>${l.text}</h2>
        <div id="new" class=${window.plutoDesktop?"desktop_opener":""}>
            <${h.FilePicker}
                key=${l.placeholder}
                client=${e}
                value=""
                on_submit=${async e=>{const t=await f.guess_notebook_location(e);"path"===t.type?(a(t.path_or_url),window.location.href=v(t.path_or_url)):confirm("Are you sure? This will download and run the file at\n\n"+t.path_or_url)&&(a(t.path_or_url),window.location.href=g(t.path_or_url))}}
                on_desktop_submit=${async e=>{var t;null===(t=window.plutoDesktop)||void 0===t||t.fileSystem.openNotebook("path")}}
                button_label=${window.plutoDesktop?"Open File":"Open"}
                placeholder=${l.placeholder}
            />
            ${window.plutoDesktop&&r.html`<${h.FilePicker}
                key=${l.placeholder}
                client=${e}
                value=""
                on_desktop_submit=${async e=>{var t;null===(t=window.plutoDesktop)||void 0===t||t.fileSystem.openNotebook("url",e)}}
                button_label="Open from URL"
                placeholder=${l.placeholder}
            />`}
        </div>`},v=e=>"open?"+new URLSearchParams({path:e}).toString(),g=e=>"open?"+new URLSearchParams({url:e}).toString(),w=e=>"edit?id="+e;var b=n("9Ta4i"),k=(r=n("cNaMA"),r=n("cNaMA"),n("aN0pg"));const $=(e,t=null)=>({transitioning:!1,notebook_id:t,path:e}),y=(e,t)=>e.split(/\/|\\/).slice(-t).join("/"),j=(e,t)=>{let o=1;for(const n of t)if(n!==e)for(;y(e,o)===y(n,o);)o++;return y(e,o)},P=({client:e,connected:t,remote_notebooks:o,CustomRecent:n,on_start_navigation:a})=>{const[l,i]=r.useState(null),s=r.useRef(l);s.current=l;const u=(e,t)=>{i((o=>(null==o?void 0:o.map((o=>o.path==e?{...o,...t}:o)))??null))};r.useEffect((()=>{null!=e&&t&&e.send("get_all_notebooks",{},{}).then((({message:e})=>{const t=e.notebooks.map((e=>$(e.path,e.notebook_id))),o=E(),n=[...b.default.sortBy(t,[e=>b.default.findIndex([...o,...t],(t=>t.path===e.path))]),...b.default.differenceBy(o,t,(e=>e.path))];i(n),document.body.classList.remove("loading")}))}),[null!=e&&t]),r.useEffect((()=>{const e=o;if(null!=s.current){const t=[],o=s.current.map((o=>{let n=null;if(n=o.notebook_id?e.find((e=>e.notebook_id==o.notebook_id)):e.find((e=>e.path==o.path)),null==n)return $(o.path);{const e=$(n.path,n.notebook_id);return t.push(n),e}})),n=e.filter((e=>!t.includes(e))).map((e=>$(e.path,e.notebook_id)));i([...n,...o])}}),[o]);r.useEffect((()=>{document.body.classList.toggle("nosessions",!(null==l||l.length>0))}),[l]);const c=null==l?void 0:l.map((e=>e.path));let d=null==l?r.html`<li><em>Loading...</em></li>`:l.map((t=>{const o=null!=t.notebook_id;return r.html`<li
                      key=${t.path}
                      class=${k.cl({running:o,recent:!o,transitioning:t.transitioning})}
                  >
                      <button onclick=${()=>(t=>{if(t.transitioning)return;if(null!=t.notebook_id){if(null==e)return;confirm("Shut down notebook process?")&&(u(t.path,{running:!1,transitioning:!0}),e.send("shutdown_notebook",{keep_in_session:!1},{notebook_id:t.notebook_id},!1))}else u(t.path,{transitioning:!0}),fetch(v(t.path),{method:"GET"}).then((e=>{if(!e.redirected)throw new Error("file not found maybe? try opening the notebook directly")})).catch((e=>{console.error("Failed to start notebook in background"),console.error(e),u(t.path,{transitioning:!1,notebook_id:null})}))})(t)} title=${o?"Shut down notebook":"Start notebook in background"}>
                          <span class="ionicon"></span>
                      </button>
                      <a
                          href=${o?w(t.notebook_id):v(t.path)}
                          title=${t.path}
                          onClick=${e=>{o||(a(j(t.path,c)),u(t.path,{transitioning:!0}))}}
                          >${j(t.path,c)}</a
                      >
                  </li>`}));return null==n?r.html`
            <h2>My work</h2>
            <ul id="recent" class="show-scrollbar">
                <li class="new">
                    <a
                        href="new"
                        onClick=${e=>{a("new notebook")}}
                        ><button><span class="ionicon"></span></button>Create a <strong>new notebook</strong></a
                    >
                </li>
                ${d}
            </ul>
        `:r.html`<${n} cl=${k.cl} combined=${l} client=${e} recents=${d} />`},E=()=>{const e=localStorage.getItem("recent notebooks"),t=null!=e?JSON.parse(e):[];return(t instanceof Array?t:[]).map((e=>$(e)))};b=n("9Ta4i"),r=n("cNaMA");var L=n("h2NGW"),S=n("jqrYR"),C=n("41Mhf");n("9Ta4i");r=n("cNaMA");const N=({entry:e,source_url:t,direct_html_links:o})=>{var n,a,l,i,s,u;const c=null===(n=e.frontmatter)||void 0===n?void 0:n.title,d=e=>null==t?e:null==e?null:new URL(e,new URL(t,window.location.href)).href,h=o?d(e.html_path):C.with_query_params("editor.html",{statefile:d(e.statefile_path),notebookfile:d(e.notebookfile_path),notebookfile_integrity:`sha256-${S.base64url_to_base64(e.hash)}`,disable_ui:"true",pluto_server_url:".",name:null==c?null:`sample ${c}`}),p=T(e.frontmatter);return r.html`
        <featured-card style=${`--card-color-hue: ${(e=>79*[...e].reduce(((e,t)=>e+t.charCodeAt(0)),0)%360)(e.id)}deg;`}>
            <a class="banner" href=${h}><img src=${d(null==e||null===(a=e.frontmatter)||void 0===a?void 0:a.image)??"data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E"} /></a>
            ${null==(null==p?void 0:p.name)?null:r.html`
                      <div class="author">
                          <a href=${p.url}> <img src=${p.image??"data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E"} /><span>${p.name}</span></a>
                      </div>
                  `}
            <h3><a href=${h} title=${null==e||null===(l=e.frontmatter)||void 0===l?void 0:l.title}>${(null==e||null===(i=e.frontmatter)||void 0===i?void 0:i.title)??e.id}</a></h3>
            <p title=${null==e||null===(s=e.frontmatter)||void 0===s?void 0:s.description}>${null==e||null===(u=e.frontmatter)||void 0===u?void 0:u.description}</p>
        </featured-card>
    `},T=e=>x(e.author)??x({name:e.author_name,url:e.author_url,image:e.author_image}),x=e=>{if(e instanceof Array)return x(e[0]);if(null==e)return null;if("string"==typeof e)return{name:e,url:null,image:null};if(e instanceof Object){let{name:t,image:o,url:n}=e;return null==o&&null!=n&&(o=n+".png?size=48"),{name:t,url:n,image:o}}return null},O=[{title:"Featured Notebooks",description:"These notebooks from the Julia community show off what you can do with Pluto. Give it a try, you might learn something new!",collections:[{title:"Loading...",tags:[]}],notebooks:{}}],A=r.html`
    <div class="featured-source">
        <h1>${O[0].title}</h1>
        <p>Here are a couple of notebooks to get started with Pluto.jl:</p>
        <ul>
            <li>1. <a href="sample/Getting%20started.jl">Getting started</a></li>
            <li>2. <a href="sample/Basic%20mathematics.jl">Basic mathematics</a></li>
            <li>3. <a href="sample/Interactivity.jl">Interactivity</a></li>
            <li>4. <a href="sample/PlutoUI.jl.jl">PlutoUI.jl</a></li>
            <li>5. <a href="sample/Plots.jl.jl">Plots.jl</a></li>
            <li>6. <a href="sample/Tower%20of%20Hanoi.jl">Tower of Hanoi</a></li>
            <li>7. <a href="sample/JavaScript.jl">JavaScript</a></li>
        </ul>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>Tip: <em>Visit this page again when you are connected to the internet to read our online collection of featured notebooks.</em></p>
    </div>
`,R=[{title:"Notebooks",tags:"everything"}],M=({sources:e,direct_html_links:t})=>{const[o,n]=r.useState({});r.useEffect((()=>{if(null!=e){const t=e.map((async({url:e,integrity:t})=>{const o=await(await fetch(new Request(e,{integrity:t??void 0}))).json();if("1"!==o.format_version)throw new Error(`Invalid format version: ${o.format_version}`);n((t=>({...t,[e]:{...o,source_url:e}})))}));Promise.any(t).catch((e=>{console.error("All featured sources failed to load: ",e),l(!0)}))}}),[e]),r.useEffect((()=>{Object.entries(o).length>0&&console.log("Sources:",o)}),[o]);const[a,l]=r.useState(!1);r.useEffect((()=>{setTimeout((()=>{l(!0)}),8e3)}),[]);const i=0===Object.entries(o).length;return i&&a?A:r.html`
              ${(i?O:Object.values(o)).map((e=>{let o=(null==e?void 0:e.collections)??R;return r.html`
                      <div class="featured-source">
                          <h1>${e.title}</h1>
                          <p>${e.description}</p>
                          ${o.map((o=>r.html`
                                  <div class="collection">
                                      <h2>${o.title}</h2>
                                      <p>${o.description}</p>
                                      <div class="card-list">
                                          ${U(Object.values(e.notebooks),o.tags??[]).map((o=>r.html`<${N} entry=${o} source_url=${e.source_url} direct_html_links=${t} />`))}
                                      </div>
                                  </div>
                              `))}
                      </div>
                  `}))}
          `};L.default(M,"pluto-featured",["sources","direct_html_links"]);const U=(e,t)=>{const o="everything"===t?e:e.filter((e=>t.some((t=>{var o;return((null===(o=e.frontmatter)||void 0===o?void 0:o.tags)??[]).includes(t)}))));return b.default.sortBy(o,[e=>{var t;return(e=>isNaN(e)?e:Number(e))(null==e||null===(t=e.frontmatter)||void 0===t?void 0:t.order)},"id"])};var D,q=n("cpCG6"),I={sources:[{url:"https://cdn.jsdelivr.net/gh/JuliaPluto/featured@fa62114/pluto_export.json",integrity:"sha256-mqaCAS0NOcrmgfYmN4284eP44913HWPQfM8OaXj01II="}]};const F=(null===(D=document.head.querySelector("link[rel='pluto-logo-big']"))||void 0===D?void 0:D.getAttribute("href"))??"",G=({launch_params:e})=>{const[t,o]=r.useState([]),[n,a]=r.useState(!1),[l,i]=r.useState({show_samples:!0,CustomPicker:null,CustomRecent:null}),s=r.useRef({});r.useEffect((()=>{const e=a;c.create_pluto_connection({on_unrequested_update:({message:e,type:t})=>{"notebook_list"===t&&o(e.notebooks)},on_connection_status:e,on_reconnect:()=>!0}).then((async e=>{Object.assign(s.current,e),a(!0);try{const t=await q.get_environment(e),{custom_recent:o,custom_filepicker:n,show_samples:a=!0}=t({client:e,editor:void 0,imports:{preact:r}});i((e=>({...e,CustomRecent:o,CustomPicker:n,show_samples:a})))}catch(e){}(e=>{d().then((t=>{const o=e.version_info.pluto,n=t[t.length-1].tag_name;console.log(`Pluto version ${o}`);const r=t.findIndex((e=>e.tag_name===o));-1!==r&&t.slice(r+1).filter((e=>e.body.toLowerCase().includes("recommended update"))).length>0&&(console.log(`Newer version ${n} is available`),e.version_info.dismiss_update_notification||alert("A new version of Pluto.jl is available! 🎉\n\n    You have "+o+", the latest is "+n+'.\n\nYou can update Pluto.jl using the julia package manager:\n    import Pkg; Pkg.update("Pluto")\nAfterwards, exit Pluto.jl and restart julia.'))})).catch((()=>{}))})(e),e.send("current_time"),e.send("completepath",{query:""},{})}))}),[]);const{show_samples:u,CustomRecent:h,CustomPicker:p}=l,[m,f]=r.useState(null),v=(e,t=!0)=>{if(t){const t=t=>{f(e)};window.addEventListener("beforeunload",t),setTimeout((()=>window.removeEventListener("beforeunload",t)),1e3)}else f(e)},g=r.useMemo((()=>e.featured_sources??(e.featured_source_url?[{url:e.featured_source_url,integrity:e.featured_source_integrity}]:I.sources)),[e]);return null!=m?r.html`
            <div class="navigating-away-banner">
                <h2>Loading ${m}...</h2>
            </div>
        `:r.html`
        <section id="title">
            <h1>welcome to <img src=${F} /></h1>
        </section>
        <section id="mywork">
            <div>
                <${P}
                    client=${s.current}
                    connected=${n}
                    remote_notebooks=${t}
                    CustomRecent=${h}
                    on_start_navigation=${v}
                />
            </div>
        </section>
        <section id="open">
            <div>
                <${_}
                    client=${s.current}
                    connected=${n}
                    CustomPicker=${p}
                    show_samples=${u}
                    on_start_navigation=${v}
                />
            </div>
        </section>
        <section id="featured">
            <div>
                <${M} sources=${g} direct_html_links=${e.featured_direct_html_links} />
            </div>
        </section>
    `},B=new URLSearchParams(window.location.search),J={featured_direct_html_links:!!(B.get("featured_direct_html_links")??window.pluto_featured_direct_html_links),featured_sources:window.pluto_featured_sources,featured_source_url:B.get("featured_source_url")??window.pluto_featured_source_url,featured_source_integrity:B.get("featured_source_integrity")??window.pluto_featured_source_integrity};console.log("Launch parameters: ",J),r.render(r.html`<${u.Welcome} launch_params=${J} />`,document.querySelector("#app"));