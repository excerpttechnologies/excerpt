import{r as s,j as e,F as f,d as b}from"./index-Doui5iQ5.js";function w(){const[r,i]=s.useState(0),[m,a]=s.useState(!0),n=s.useRef(null),l=[{img:"brochure/ai_chatbot.png",title:"AI Chatbot Services",text:"Intelligent conversational AI solutions to enhance customer engagement and automate support.",link:"/webdesign"},{img:"brochure/crm.jpg",title:"CRM Solutions",text:"Comprehensive customer relationship management systems to streamline your business operations.",link:"/CyberSecurity"},{img:"brochure/digital.jpg",title:"Digital Marketing",text:"Strategic digital marketing campaigns to boost your brand presence and drive growth.",link:"/mobileapplication"},{img:"brochure/dyanamic.jpg",title:"Dynamic Website",text:"Interactive and responsive websites with advanced functionality and user experience.",link:"/Dyanamicwebsite"},{img:"brochure/e-comm.jpg",title:"E-commerce Solutions",text:"Complete online store development with secure payment gateways and inventory management.",link:"/ecommerce"},{img:"brochure/e-learning.jpg",title:"E-learning Solutions",text:"Advanced learning management platforms for effective online education and training.",link:"/Elearning"},{img:"brochure/erp.jpg",title:"ERP Solutions",text:"Enterprise resource planning systems to integrate and optimize business processes.",link:"/erp"},{img:"brochure/geeky.jpg",title:"WhatsApp Bulk Messaging",text:"Automated bulk messaging solutions for effective customer communication via WhatsApp.",link:"/Geekychat"},{img:"brochure/lms-1.png",title:"LMS Solutions",text:"Learning management systems with course creation, tracking, and assessment features.",link:"/lms"},{img:"brochure/powerbi.jpg",title:"Power BI Solutions",text:"Business intelligence and data visualization tools for informed decision-making.",link:"/Dataanalytics"},{img:"brochure/static_web.png",title:"Static Website",text:"Fast-loading, SEO-optimized static websites for professional business presence.",link:"/Staticwebsite"},{img:"brochure/wt-ecom.jpg",title:"WhatsApp E-commerce Solutions",text:"Complete e-commerce integration with WhatsApp for seamless shopping experience.",link:"/Geekychat"}],o=l.length,g=[...l,...l],p=()=>{i(t=>t+1)},c=()=>{n.current&&clearInterval(n.current),n.current=setInterval(p,3e3)},d=()=>{n.current&&(clearInterval(n.current),n.current=null)};s.useEffect(()=>(c(),()=>d()),[]),s.useEffect(()=>{if(r===o){const t=setTimeout(()=>{a(!1),i(0),setTimeout(()=>{a(!0),c()},50)},800);return()=>clearTimeout(t)}},[r,o]);const h=()=>{d(),i(t=>t+1),setTimeout(c,3e3)},x=()=>{d(),r>0?i(r-1):(a(!1),i(o),setTimeout(()=>{a(!0),i(o-1)},50)),setTimeout(c,3e3)};return e.jsxs("div",{children:[e.jsx("style",{children:`
        .slider-container {
          overflow: hidden;
          width: 100%;
          position: relative;
          max-width: 1340px;
          margin: 0 auto;
        }
        .slider-track {
          display: flex;
          transition: ${m?"transform 0.8s ease-in-out":"none"};
          will-change: transform;
        }
        .card {
          min-width: 25%;
          max-width: 25%;
          flex-shrink: 0;
          box-sizing: border-box;
          padding: 0 8px;
        }
        .service-card {
          height: 420px;
          display: flex;
          flex-direction: column;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          background: #fff;
          transition: transform 0.3s ease;
          width: 100%;
        }
        .service-card:hover {
          transform: translateY(-5px);
        }
        .card-image {
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f9f9f9;
          // padding: 15px;
          overflow: hidden;
        }
        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 6px;
          transition: transform 0.3s ease;
        }
        .card-image:hover img {
          transform: scale(1.05);
        }
        .card-content {
          flex: 1;
          padding: 15px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 180px;
        }
        .card-content h5 {
          font-size: 18px;
          margin-bottom: 10px;
          color: #333;
          font-weight: 600;
          line-height: 1.3;
        }
        .card-content p {
          font-size: 14px;
          color: #666;
          flex-grow: 1;
          line-height: 1.4;
          margin-bottom: 15px;
        }
        .card-content a {
          display: inline-block;
          background: #007bff;
          color: #fff;
          text-decoration: none;
          padding: 8px 15px;
          border-radius: 6px;
          font-size: 14px;
          text-align: center;
          transition: all 0.3s;
          font-weight: 500;
          align-self: flex-start;
        }
        .card-content a:hover {
          background: #0056b3;
          transform: translateY(-1px);
        }
        .slider-controls {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          margin-top: 15px;
        }
        .slider-button {
          background: #007bff;
          color: white;
          border: none;
          padding: 10px 15px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 18px;
          transition: all 0.3s;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .slider-button:hover {
          background: #0056b3;
          transform: scale(1.1);
        }
        .slider-button:disabled {
          background: #ccc;
          cursor: not-allowed;
        }
        
        /* Responsive adjustments */
        @media (max-width: 1200px) {
          .card {
            min-width: 33.333%;
            max-width: 33.333%;
          }
        }
        @media (max-width: 768px) {
          .card {
            min-width: 50%;
            max-width: 50%;
          }
          .service-card {
            height: 380px;
          }
          .card-image {
            height: 160px;
          }
          .card-content {
            min-height: 160px;
          }
          .card-content h5 {
            font-size: 16px;
          }
          .card-content p {
            font-size: 13px;
          }
        }
        @media (max-width: 480px) {
          .card {
            min-width: 100%;
            max-width: 100%;
          }
          .service-card {
            height: 360px;
          }
          .card-image {
            height: 150px;
          }
          .card-content {
            min-height: 150px;
          }
        }
        `}),e.jsx("div",{style:{backgroundImage:"url(images/home1/exclusive-service/bg.png)"},className:"ex-service-cards",children:e.jsx("section",{id:"service",className:"service",children:e.jsxs("div",{className:"container",style:{maxWidth:"1340px"},children:[e.jsx("div",{className:"slider-container",children:e.jsx("div",{className:"slider-track",style:{transform:`translateX(-${r*25}%)`},children:g.map((t,u)=>e.jsx("div",{className:"card",children:e.jsxs("div",{className:"service-card",children:[e.jsx("div",{className:"card-image",children:e.jsx("img",{src:t.img,alt:t.title})}),e.jsxs("div",{className:"card-content",children:[e.jsx("h5",{children:t.title}),e.jsx("p",{children:t.text}),e.jsx("a",{href:t.link,children:"Read More"})]})]})},u))})}),e.jsxs("div",{className:"slider-controls",children:[e.jsx("button",{className:"slider-button",onClick:x,children:e.jsx(f,{})}),e.jsx("button",{className:"slider-button",onClick:h,children:e.jsx(b,{})})]}),e.jsx("div",{className:"space120"})]})})})]})}export{w as default};
