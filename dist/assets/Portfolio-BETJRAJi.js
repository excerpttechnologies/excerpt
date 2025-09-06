import{r as n,j as e,L as j}from"./index-Doui5iQ5.js";const S=()=>{const[s,h]=n.useState("All"),[o,p]=n.useState(!1),[c,r]=n.useState(0),l=[{id:1,title:"RGVK",category:"Static",type:"Tourism",image:"portfolio/rgvk.PNG",link:"https://rgvkindia.com/",className:"hideOnMd"},{id:2,title:"Car Captain",category:"E-com",type:"E-Commerce",image:"portfolio/car.PNG",link:"https://carcaptain.in/",className:""},{id:3,title:"DTECH",category:"CRM",type:"Civil",image:"portfolio/dtech.PNG",link:"https://dtechwale.com/",className:"hideOnMd"},{id:4,title:"RoyalHood",category:"E-com",type:"E-Commerce",image:"portfolio/royalhood.PNG",link:"https://royalhood.in/",className:""},{id:5,title:"ANANTA SAUKHYAM",category:"Health",type:"Wellness",image:"portfolio/ananta.PNG",link:"https://anantasaukhyam.com/",className:"hideOnMd"},{id:6,title:"DYAVASANDRA INDUSTRIAL ESTATE ASSOCIATION",category:"CRM",type:"Industrial Association",image:"portfolio/diea.PNG",link:"",className:"hideOnMd"},{id:7,title:"AUTOMET ENGINEERING",category:"Static",type:"Automobile",image:"portfolio/automet.PNG",link:"http://www.autometengg.com/",className:"hideOnMd"},{id:8,title:"GIFCO AUTO FILTERS INDIA",category:"Static",type:"Automobile",image:"portfolio/gifco.PNG",link:"http://gifcoindia.com/",className:"hideOnMd"},{id:9,title:"Shaw Tech Training Services",category:"LMS",type:"Educational",image:"portfolio/stts.PNG",link:"https://sttsonline.com/",className:"hideOnMd"},{id:10,title:"Mech Mold",category:"Static",type:"Industrial",image:"portfolio/mech.PNG",link:"https://mechmold.com/",className:"hideOnMd"},{id:11,title:"IT DESK MAHADEVPURA",category:"LMS",type:"Educational",image:"images/p5.png",link:"https://itdeskmahadevpura.com/",className:""},{id:12,title:"CAD DESK MAHADEVPURA",category:"LMS",type:"Educational",image:"images/p4.png",link:"http://caddeskmahadevpura.com/",className:""},{id:13,title:"Terra Clenz",category:"E-com",type:"E-Commerce",image:"portfolio/terra.PNG",link:"https://terraclenz.com/",className:""},{id:14,title:"Cad desk",category:"CRM",type:"CRM",image:"portfolio/cad.PNG",link:"https://caddesk.in/",className:""},{id:15,title:"JBK Academy",category:"CRM",type:"CRM",image:"portfolio/jbk.PNG",link:"https://jbkadmin.jbkacademy.in/",className:""},{id:16,title:"Triicons",category:"CRM",type:"CRM",image:"portfolio/triicons.PNG",link:"https://triicons.com/",className:""},{id:17,title:"City Hospitality Solutions",category:"CRM",type:"CRM",image:"portfolio/city.PNG",link:"https://crm.cityhospitalitysolutions.com",className:""},{id:18,title:"Jyothi Cloud ERP",category:"ERP",type:"ERP",image:"portfolio/erp.PNG",link:"https://erp.etpl.ai",className:""},{id:19,title:"BDM Technology",category:"Static",type:"Educational",image:"portfolio/bdm.PNG",link:"https://bdmtech.in/",className:""},{id:20,title:"Darklick",category:"Static",type:"Product",image:"portfolio/dark.PNG",link:"http://darklick.com/",className:"hideOnMd"},{id:21,title:"Lynx industries",category:"Static",type:"Industrial",image:"portfolio/lynx.PNG",link:"http://lynxindustries.in/",className:"hideOnMd"},{id:22,title:"P and S Industries",category:"Static",type:"Industrial",image:"portfolio/ps.PNG",link:"http://pandsindustries.in",className:"hideOnMd"},{id:23,title:" Sri Engineering",category:"Static",type:"Industrial",image:"portfolio/srii.PNG",link:"https://sriengineering.net/",className:"hideOnMd"},{id:24,title:"Sai Shanti Vidya Niketan",category:"Static",type:"Educational",image:"portfolio/ssvn.PNG",link:"http://saishantividyaniketan.in/",className:"hideOnMd"},{id:25,title:"Umang Marketing & Engineering Services",category:"Static",type:"Industrial",image:"portfolio/umang.PNG",link:"https://umangmarketing.com/",className:"hideOnMd"},{id:26,title:"Upstreams",category:"Static",type:"Industrial",image:"portfolio/upst.PNG",link:"https://upstreamhotels.in/",className:"hideOnMd"},{id:27,title:"Terra Batteries",category:"Static",type:"Ecommerce",image:"portfolio/terrabat.PNG",link:"https://terrabatteries.com/",className:"hideOnMd"}],a=l.slice(0,8);n.useEffect(()=>{const t=setInterval(()=>{r(i=>(i+1)%a.length)},4e3);return()=>clearInterval(t)},[a.length]);const g=["All",...new Set(l.map(t=>t.category))],d=s==="All"?l:l.filter(t=>t.category===s),m=6,f=o?d:d.slice(0,m),x=d.length>m,y=t=>{const i=()=>e.jsxs("div",{className:`news-card position-relative ${t.id===2?"news-card-dyavasandra":""}`,style:t.id===2?{height:"330px"}:{},children:[e.jsx("div",{className:"img-wrapper mb-30",children:e.jsx("img",{src:t.image,alt:t.title})}),e.jsxs("div",{className:"content",children:[t.id===2||t.id===7||t.id===8||t.id===9||t.id===11||t.id===12||t.id===13?e.jsx("hh5",{className:"heading-5 mb-15",children:t.title}):e.jsx("h5",{className:"heading-5 mb-15",children:t.title}),e.jsx("div",{className:"paragraph mb-25",children:t.type})]}),e.jsx("div",{className:"circle-1 position-absolute"}),e.jsx("div",{className:"circle-2 position-absolute"})]});return e.jsx("div",{className:`col-md-6 col-lg-4 ${t.className}`,children:t.link?t.link.startsWith("http")?e.jsx(j,{to:t.link,className:"link-to-external-website",target:"_blank",children:e.jsx(i,{})}):e.jsx("a",{href:t.link,target:"_blank",children:e.jsx(i,{})}):e.jsx("a",{href:"",children:e.jsx(i,{})})},t.id)},N=()=>{p(!o)},u=t=>{r(t)},b=()=>{r(t=>(t+1)%a.length)},k=()=>{r(t=>(t-1+a.length)%a.length)};return e.jsxs(e.Fragment,{children:[e.jsx("style",{jsx:!0,children:`
                .portfolio-slider {
                    position: relative;
                    width: 100%;
                    height: 400px;
                    overflow: hidden;
                    border-radius: 15px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    margin-bottom: 60px;
                }

                .slider-container {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    transform: translateX(-${c*100}%);
                }

                .slide {
                    min-width: 100%;
                    height: 100%;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                }

                .slide-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.3s ease;
                }

                .slide-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(45deg, rgba(0, 17, 255, 0.8), rgba(0, 17, 255, 0.4));
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    color: white;
                    text-align: center;
                    padding: 20px;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .slide:hover .slide-overlay {
                    opacity: 1;
                }

                .slide:hover .slide-image {
                    transform: scale(1.05);
                }

                .slide-title {
                    font-size: 2.5rem;
                    font-weight: bold;
                    margin-bottom: 10px;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
                }

                .slide-type {
                    font-size: 1.2rem;
                    font-weight: 300;
                    opacity: 0.9;
                }

                .slider-nav {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    background: rgba(255, 255, 255, 0.9);
                    border: none;
                    border-radius: 50%;
                    width: 50px;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    z-index: 10;
                    font-size: 20px;
                    color: #0011ffff;
                }

                .slider-nav:hover {
                    background: #0011ffff;
                    color: white;
                    transform: translateY(-50%) scale(1.1);
                }

                .slider-nav.prev {
                    left: 20px;
                }

                .slider-nav.next {
                    right: 20px;
                }

                .slider-dots {
                    position: absolute;
                    bottom: 20px;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    gap: 12px;
                    z-index: 10;
                }

                .dot {
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.5);
                    cursor: pointer;
                    transition: all 0.3s ease;
                    border: 2px solid transparent;
                }

                .dot.active {
                    background: white;
                    transform: scale(1.2);
                    border-color: #0011ffff;
                }

                .dot:hover {
                    background: rgba(255, 255, 255, 0.8);
                    transform: scale(1.1);
                }

                .slider-progress {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    height: 4px;
                    background: #0011ffff;
                    transition: width 4s linear;
                    z-index: 10;
                    width: ${(c+1)/a.length*100}%;
                }

                @media (max-width: 768px) {
                    .portfolio-slider {
                        height: 250px;
                        margin-bottom: 40px;
                    }

                    .slide-title {
                        font-size: 1.5rem;
                    }

                    .slide-type {
                        font-size: 1rem;
                    }

                    .slider-nav {
                        width: 40px;
                        height: 40px;
                        font-size: 16px;
                    }

                    .slider-nav.prev {
                        left: 10px;
                    }

                    .slider-nav.next {
                        right: 10px;
                    }
                }

                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .slide-content {
                    animation: slideIn 0.6s ease-out;
                }
            `}),e.jsxs("div",{children:[e.jsx("section",{style:{backgroundImage:"url(images/00.jpg)",backgroundColor:"rgb(255, 255, 255)"},className:"sub-header position-relative",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"page-info ",children:[e.jsx("h2",{className:"heading-2",style:{color:"white",textAlign:"center"},children:"Our Portfolio"}),e.jsxs("h6",{className:"heading-6",children:[e.jsx("a",{href:"/",children:"Home"})," / ",e.jsx("a",{href:"#",children:"Portfolio"})]})]})})}),e.jsxs("section",{id:"projects",children:[e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"portfolio-slider",children:[e.jsx("div",{className:"slider-container",children:a.map((t,i)=>e.jsxs("div",{className:"slide",children:[e.jsx("img",{src:t.image,alt:t.title,className:"slide-image"}),e.jsx("div",{className:"slide-overlay",children:e.jsxs("div",{className:"slide-content",children:[e.jsx("h3",{className:"slide-title",children:t.title}),e.jsx("p",{className:"slide-type",children:t.type})]})})]},t.id))}),e.jsx("button",{className:"slider-nav prev",onClick:k,children:"‹"}),e.jsx("button",{className:"slider-nav next",onClick:b,children:"›"}),e.jsx("div",{className:"slider-dots",children:a.map((t,i)=>e.jsx("span",{className:`dot ${i===c?"active":""}`,onClick:()=>u(i)},i))}),e.jsx("div",{className:"slider-progress"})]}),e.jsx("div",{className:"portfolio-tabs d-flex  mb-50",style:{marginTop:"-70px"},children:e.jsx("div",{className:"tab-wrapper d-flex",children:g.map(t=>e.jsx("button",{className:`tab-btn ${s===t?"active":""}`,onClick:()=>{h(t),p(!1)},style:{padding:"12px 24px",margin:"5px 8px",border:"none",borderRadius:"25px",backgroundColor:s===t?"#0011ffff":"transparent",color:s===t?"white":"#333",cursor:"pointer",fontWeight:"500",transition:"all 0.3s ease",fontSize:"16px",textTransform:"uppercase",letterSpacing:"1px",minWidth:"120px",whiteSpace:"nowrap"},onMouseEnter:i=>{s!==t&&(i.target.style.backgroundColor="#f8f9fa",i.target.style.color="#0011ffff")},onMouseLeave:i=>{s!==t&&(i.target.style.backgroundColor="transparent",i.target.style.color="#333")},children:t},t))})})]}),e.jsx("section",{id:"latest-news",className:"home__latest--news",children:e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"row g-4",children:f.map(t=>y(t))}),x&&e.jsx("div",{className:"d-flex justify-content-center mt-50",children:e.jsx("button",{onClick:N,style:{padding:"15px 30px",border:"2px solid #0011ffff",borderRadius:"30px",backgroundColor:o?"#0011ffff":"transparent",color:o?"white":"#0011ffff",cursor:"pointer",fontWeight:"600",fontSize:"16px",textTransform:"uppercase",letterSpacing:"1px",transition:"all 0.3s ease",minWidth:"180px"},onMouseEnter:t=>{o||(t.target.style.backgroundColor="#0011ffff",t.target.style.color="white")},onMouseLeave:t=>{o||(t.target.style.backgroundColor="transparent",t.target.style.color="#0011ffff")},children:o?"Show Less":"Read More"})})]})}),e.jsx("div",{className:"space100"})]}),e.jsx("section",{style:{backgroundImage:"url(images/Newimage/digital-marketing-banner1.jpg)",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"},id:"newsletter",className:"portfolio__newsletter",children:e.jsxs("div",{className:"container newsletter-Wrapper",children:[e.jsxs("div",{className:"text",children:[e.jsx("h3",{children:"Join to Our Team For More Info"}),e.jsx("p",{children:"Excerpt Technologies PVT LTD"})]}),e.jsx("form",{className:"form",action:"",children:e.jsxs("div",{className:"email-wrapper",children:[e.jsx("input",{type:"email",name:"email",id:"email",placeholder:"Enter your email"}),e.jsx("a",{href:"#",type:"submit",className:"subscribe-btn",children:e.jsx("span",{children:"Reach US "})})]})})]})}),e.jsx("div",{className:"space100"})]})]})};export{S as default};
