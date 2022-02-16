var B=Object.defineProperty;var H=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var C=(e,n,o)=>n in e?B(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,g=(e,n)=>{for(var o in n||(n={}))R.call(n,o)&&C(e,o,n[o]);if(H)for(var o of H(n))W.call(n,o)&&C(e,o,n[o]);return e};import{W as M,s as i,L as u,j as t,F as m,a as r,b as D,c as P,r as N,m as l,u as V,d as U,e as z,R as E,f as b,g as G,h as _,B as K}from"./vendor.4219fd9f.js";const Q=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))d(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&d(h)}).observe(document,{childList:!0,subtree:!0});function o(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerpolicy&&(c.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?c.credentials="include":s.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function d(s){if(s.ep)return;s.ep=!0;const c=o(s);fetch(s.href,c)}};Q();const Y=M`
  *{
    box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  }
`,T=i.div`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 50px;
  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`;i.h1`
  font-size: clamp(2.3rem, 6vw, 4.5rem);
  margin-bottom: 2rem;
  color: ${({inverse:e})=>e?"$403ae3":"#fff"};
  width: 100%;
  letter-spacing: 4px;
  text-align: center;
`;i.h2`
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  margin: ${({margin:e})=>e||""};
  margin-bottom: ${({mb:e})=>e||""};
  margin-top: ${({mt:e})=>e||""};
  color: ${({inverse:e})=>e?"$403ae3":"#fff"};
  letter-spacing: 0.4rem;
  line-height: 1.06;
  text-align: center;
  width: ${({width:e})=>e||"100%"};
`;i.span`
  color: ${({color:e})=>e||""};
  font-size: ${({size:e})=>e||""};
  font-weight: ${({weight:e})=>e||""};
  letter-spacing: ${({spacing:e})=>e||""};
  padding: ${({padding:e})=>e||""};
  margin: ${({margin:e})=>e||""};
  margin-bottom: ${({mb:e})=>e||""};
  margin-top: ${({mt:e})=>e||""};
`;const A=i.section`
  padding: ${({padding:e})=>e||"140px 0"};
  margin: ${({margin:e})=>e||""};
  background: ${({inverse:e})=>e?"white":"#071c2f"};
  position: ${({position:e})=>e||""};
  width: ${({width:e})=>e||"auto"};
  min-width: ${({minWidth:e})=>e||"auto"};
  max-width: ${({maxWidth:e})=>e||"auto"};
  height: ${({height:e})=>e||"auto"};
  max-height: ${({maxHeight:e})=>e||"auto"};
  min-height: ${({minHeight:e})=>e||"auto"};
  @media screen and (max-width: 768px) {
    padding: ${({smPadding:e})=>e||"70px 0"};
  }
`;i.div`
  display: flex;
  justify-content: ${({justify:e})=>e||""};
  align-items: ${({align:e})=>e||""};
  gap: ${({gap:e})=>e||""};
  padding: ${({padding:e})=>e||""};
  margin: ${({margin:e})=>e||""};
  position: ${({position:e})=>e||""};
  width: ${({width:e})=>e||"auto"};
  min-width: ${({minWidth:e})=>e||"auto"};
  max-width: ${({maxWidth:e})=>e||"auto"};
  height: ${({height:e})=>e||"auto"};
  max-height: ${({maxHeight:e})=>e||"auto"};
  min-height: ${({minHeight:e})=>e||"auto"};
  flex-wrap: ${({wrap:e})=>e||""};
`;i.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({justify:e})=>e||""};
  align-items: ${({align:e})=>e||""};
  gap: ${({gap:e})=>e||""};
  padding: ${({padding:e})=>e||""};
  margin: ${({margin:e})=>e||""};
  position: ${({position:e})=>e||""};
  width: ${({width:e})=>e||"auto"};
  min-width: ${({minWidth:e})=>e||"auto"};
  max-width: ${({maxWidth:e})=>e||"auto"};
  height: ${({height:e})=>e||"auto"};
  max-height: ${({maxHeight:e})=>e||"auto"};
  min-height: ${({minHeight:e})=>e||"auto"};
`;const J=i.button`
  border-radius: 4px;
  background: none;
  white-space: nowrap;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  outline: none;
  border: 2px solid #fff;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  &:before {
    background: #fff;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.6s ease;
    width: 100%;
    height: 0%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:hover:before {
    height: 500%;
  }
  &:hover {
    color: black;
  }
`,X=i.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-top: -80; */
  height: 80px;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 11;
  //trasparent
  background: linear-gradient(
    90deg,
    rgba(189, 189, 189, 0.5046393557422969) 0%,
    rgba(80, 230, 255, 1) 50%,
    rgba(0, 255, 222, 1) 100%
  );

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`,Z=i.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`,ee=i(u)`
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`,te=i.img`
  width: 45%;

  @media screen and (max-width: 960px) {
    width: 35%;
  }
`,ie=i.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
    transform: translate (-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`,ne=i.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`,w=i.li`
  height: 80px;
`,v=i(u)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &active {
    border-bottom: 3px solid #01bf71;
  }
`,oe=i.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`,re=i(u)`
  border-radius: 50px;
  background: red;
  white-space: nowrap;
  padding: 10px 22px;
  color: black;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: gray;
  }
`;var ae="/assets/cropped-logo_coralio-7.png-7-180x180.edd4cdfd.png";const se=({toggle:e})=>t(m,{children:t(X,{children:r(Z,{children:[t(ee,{to:"/",children:t(te,{src:ae})}),t(ie,{onClick:e,children:t(D,{})}),r(ne,{children:[t(w,{children:t(v,{to:"/about",children:"About"})}),t(w,{children:t(v,{to:"/about",children:"About"})}),t(w,{children:t(v,{to:"/about",children:"About"})}),t(w,{children:t(v,{to:"/about",children:"About"})})]}),t(oe,{children:t(re,{to:"/login",children:"Login"})})]})})}),ce=i.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({isOpen:e})=>e?"100%":"0"};
  top: ${({isOpen:e})=>e?"0":"-100%"};
`,de=i(P)`
  color: #fff;
`,le=i.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background-color: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`,pe=i.div`
  color: #fff;
`,y=i(u)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: red;
    transition: 0.2s ease-in-out;
  }
`,ue=i.div`
  display: flex;
  justify-content: center;
`,me=i.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`,he=i(u)`
  border-radius: 50px;
  background: red;
  white-space: nowrap;
  padding: 16px 64px;
  color: aqua;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: al 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: aqua;
  }
`,xe=({isOpen:e,toggle:n})=>t(m,{children:r(ce,{isOpen:e,onClick:n,children:[t(le,{onClick:n,children:t(de,{})}),r(pe,{children:[r(me,{children:[t(y,{to:"about",onClick:n,children:"About"}),t(y,{to:"about",children:"About"}),t(y,{to:"about",children:"About"}),t(y,{to:"about",children:"About"})]}),t(ue,{children:t(he,{to:"/sginin",children:"sgin in"})})]})]})}),ge=()=>{const[e,n]=N.exports.useState(!1),o=()=>{n(!e)};return r(m,{children:[t(xe,{isOpen:e,toggle:o}),t(se,{toggle:o})]})},q=()=>t("div",{children:"About"}),fe=i.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 960px) {
    height: 600px;
  }

  @media screen and (max-width: 460px) {
    height: 600px;
  }
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`,be=i.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  @media screen and (max-width: 960px) {
  }
`,we=i.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  @media screen and (max-width: 960px) {
    /* height: 90%; */
  }
  @media screen and (max-width: 460px) {
    /* height: 50%; */
  }
`,ve=i.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15% 0;
  /* check text al */
  /* margin-top: 20%; */
`,ye=i.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`,ke=i.h2`
  color: #fff;
  font-size: 40px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
  @media screen and (max-width: 480px) {
    font-size: 28px;
  }
`,$e=i.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`,ze=i.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,qe=({title:e,subtitle:n,description:o,buttonLabel:d,video:s})=>t(m,{children:r(fe,{children:[t(be,{children:t(we,{autoPlay:!0,loop:!0,muted:!0,src:s,type:"video/mp4"})}),r(ve,{children:[t(ye,{children:e}),t(ke,{children:n}),t($e,{children:o}),t(ze,{children:t(J,{children:d})})]})]})}),Le=i.h2`
  text-align: center;
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  line-height: 1.06;
  letter-spacing: 0.4rem;
  margin: auto;
`,Fe=i.div`
  position: relative;
  padding: 0 0 20px;
  margin-bottom: 4rem;
`,Se=i.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 4rem;
  grid-gap: 2rem;
  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 3rem;
  }
  @media screen and (max-width: 568px) {
    grid-template-columns: repeat(1, 1fr);
  }
`,He=i(l.div)`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background: #f3f3f3;
  padding: 10px;
  box-shadow: 0 0 32px 8px #d0d0d0;
  border-radius: 20px;
`,Ce=i.div`
  margin-bottom: 1rem;
  border-radius: 50%;
  border: 2px solid #000;
  padding: 30px;
`,je=i.h3`
  font-weight: 600;
  font-size: 1.3rem;
  letter-spacing: 2px;
  @media screen and (max-width: 768px) {
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: 1.3px;
  }
`,Ne=i.p`
  margin: 1rem 0 auto;
  text-align: center;
  font-size: 0.9rem;
  line-height: 1.73;
  letter-spacing: 0.5px;
  color: #626881;
  @media screen and (max-width: 768px) {
    display: none;
  }
`,Te=[{name:"caract\xE9ristique1",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nemo tenetur fuga maxime. Velit nostrum voluptas ullam eaque maiores. Perferendis esse culpa suscipit et adipisci soluta rem recusandae odit sapiente?",imgClass:"one"},{name:"caract\xE9ristique2",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum quidem unde, cum recusandae voluptatibus qui similique? Nobis repudiandae aperiam corrupti, corporis molestias perspiciatis animi eveniet nostrum aliquam, saepe iusto nemo.",imgClass:"two"},{name:"caract\xE9ristique3",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eius ipsum blanditiis provident harum assumenda cum labore eos! Tempora minima omnis a sint beatae dicta. Rem, aut! Delectus, qui harum.",imgClass:"three"},{name:"caract\xE9ristique4",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, inventore quidem et beatae sint, nobis, minus odit ipsum suscipit omnis sequi. Voluptatem, distinctio incidunt in aut excepturi veniam et consectetur!",imgClass:"four"},{name:"caract\xE9ristique5",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem beatae laboriosam rem vero enim quidem recusandae assumenda eum explicabo dolores voluptate, exercitationem minima nam voluptates ad nesciunt, ipsa quae reiciendis.",imgClass:"five"},{name:"caract\xE9ristique6",description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis dolores impedit sequi autem dicta, expedita id eaque deserunt quisquam quis? Voluptatum, aspernatur accusamus cum maxime doloremque ea impedit quas aperiam. ",imgClass:"six"}],Ae=()=>{const e={y:40,opacity:0},n={y:0,opacity:1};return t(A,{smPadding:"50px 10px",position:"relative",inverse:!0,id:"about",children:r(T,{children:[t(Fe,{children:t(Le,{children:"CE QUE NOUS OFFRONS"})}),t(Se,{children:Te.map((o,d)=>r(He,{initial:e,animate:n,transition:{duration:1+d*.2},whileHover:{scale:1.1,transition:{duration:1}},whileTap:{scale:.9},children:[t(Ce,{className:o.imgClass,children:o.icon}),t(je,{children:o.name}),t(Ne,{children:o.description})]},d))})]})})},Ie=i.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({reverse:e})=>e?"row-reverse":"row"};
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`,j=i(l.div)`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  z-index: 10;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    max-width: 100% !important;
    flex-basis: 100%;
    justify-content: center;
    align-items: center;
  }
`,Oe=i.div`
  max-width: 540px;
  padding-top: 0;
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
    > h1,
    p {
      text-align: center;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  > img {
    width: 300px;
    margin-left: -3px;
  }
`,Be=i(l.div)`
  display: flex;
  justify-content: 'flex-end';
  max-height: 700px;
  justify-content: center;
  position: relative;
`,Re=i(l.div)`
  font-size: 0.9rem;
  line-height: 16px;
  font-weight: 550;
  letter-spacing: 1.4px;
  margin-bottom: 1.3rem;
  color: #979797;
`,We=i(l.img)`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  object-fit: cover;
  max-height: 700px;
  z-index: 1;
`,Me=i(l.h2)`
  margin-bottom: 24px;
  font-size: 3rem;
  line-height: 1.1;
  font-weight: 600;
  color: ${({inverse:e})=>e?"#0c4577":"white"};
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`,De=i(l.p)`
  max-width: 440px;
  margin-bottom: 35px;
  line-height: 24px;
  color: ${({inverse:e})=>e?"#6a6a6a":"white"};
`,Pe=i(l.button)`
  height: 3rem;
  padding: 16px 32px;
  font-weight: 700;
  font-size: 0.8rem;
  line-height: 18px;
  letter-spacing: 1.54px;
  text-transform: uppercase;
  cursor: pointer;
  background: none;
  color: ${({inverse:e})=>e?"#0c4577":"white"};
  border-radius: 4px;
  white-space: nowrap;
  padding: ${({big:e})=>e?"12px 64px":"10px 20px"};
  font-size: ${({fontBig:e})=>e?"20px":"16px"};
  outline: none;
  border: 2px solid ${({inverse:e})=>e?"#0c4577":"white"};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  &:before {
    background: ${({inverse:e})=>e?"#0c4577":"white"};
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.6s ease;
    width: 100%;
    height: 0%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:hover:before {
    height: 500%;
  }
  &:hover {
    color: ${({inverse:e})=>e?"white":"black"};
  }
`,L=({primary:e,topLine:n,headline:o,description:d,buttonLabel:s,img:c,alt:h,inverse:f,reverse:I})=>{const x={opacity:0,y:30},p=V(),{ref:O,inView:S}=U({threshold:.2});return N.exports.useEffect(()=>{S&&p.start({opacity:1,y:0})},[S,p]),t(A,{inverse:f,ref:O,children:t(T,{children:r(Ie,{reverse:I,children:[t(j,{children:r(Oe,{children:[t(Re,{initial:x,transition:{delay:.3,duration:.6},animate:p,children:n.text}),t(Me,{initial:x,transition:{delay:.5,duration:.6},animate:p,inverse:f,children:o}),t(De,{initial:x,transition:{delay:.7,duration:.6},animate:p,inverse:f,children:d}),t(Pe,{initial:x,transition:{delay:1,duration:.6},animate:p,inverse:f,primary:e,children:s})]})}),t(j,{initial:x,transition:{delay:.5,duration:.6},animate:p,children:t(Be,{children:t(We,{src:c,alt:h,whileHover:{rotate:2,scale:1.02},transition:{duration:.5}})})})]})})})},Ve=i.footer`
  background-color: #101522;
`,Ue=i.div`
  padding: 48px 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`,Ee=i.div`
  display: flex;
  justify-content: center;
  @media (max-width: 820px) {
    padding-top: 32px;
  } ;
`,Ge=i.div`
  display: flex;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  } ;
`,k=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`,$=i.h1`
  font-size: 14px;
  margin-bottom: 16px;
`,a=i(u)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  &:hover {
    color: #01bf71;
    transition: all 0.3s ease-out;
  }
`,_e=i.section`
  max-width: 1000px;
  width: 100%;
`,Ke=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  } ;
`,Qe=i(u)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`,Ye=i.small`
  color: #fff;
  margin-bottom: 16px;
`,Je=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`,F=i.a`
  color: #fff;
  font-size: 24px;
`,Xe=i.img`
  width: 80px;
`;var Ze="/assets/favicon.e09c60c2.png";const et=()=>t(m,{children:t(Ve,{children:r(Ue,{children:[t(Ee,{children:r(Ge,{children:[r(k,{children:[t($,{children:"About US"}),t(a,{to:"/",children:"How it work"}),t(a,{to:"/",children:"How it work"}),t(a,{to:"/",children:"How it work"}),t(a,{to:"/",children:"How it work"}),t(a,{to:"/",children:"How it work"})]}),r(k,{children:[t($,{children:"About US"}),t(a,{to:"/",children:"How it work"}),t(a,{to:"/",children:"How it work"}),t(a,{to:"/",children:"How it work"}),t(a,{to:"/",children:"How it work"}),t(a,{to:"/",children:"How it work"})]}),r(k,{children:[t($,{children:"About US"}),t(a,{to:"/",children:"How it work"}),t(a,{to:"/",children:"How it work"}),t(a,{to:"/",children:"How it work"}),t(a,{to:"/",children:"How it work"}),t(a,{to:"/",children:"How it work"})]}),r(k,{children:[t($,{children:"About US"}),t(a,{to:"/",children:"How it work"}),t(a,{to:"/",children:"How it work"}),t(a,{to:"/",children:"How it work"}),t(a,{to:"/",children:"How it work"}),t(a,{to:"/",children:"How it work"})]})]})}),t(_e,{children:r(Ke,{children:[t(Qe,{to:"/",children:t(Xe,{src:Ze})}),r(Ye,{children:["\xA9 ",new Date().getFullYear()," Coral-IO. Site Web par NassimDev"]}),r(Je,{children:[t(F,{href:"/",target:"_blank","aria-label":"Facebook",children:t(z,{})}),t(F,{href:"/",target:"_blank","aria-label":"Facebook",children:t(z,{})}),t(F,{href:"/",target:"_blank","aria-label":"Facebook",children:t(z,{})})]})]})})]})})}),tt={video:"../../assets/video1.mp4",title:"Coral-IO",subtitle:"Prenez la route du succ\xE8s",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum consequuntur sint sequi temporibus, ratione consequatur, debitis tempore, porro eius quae neque quo nesciunt. Omnis ut, vel vitae voluptatem tempore necessitatibus?",buttonLabel:"Rejoingez nous"},it={reverse:!0,inverse:!0,topLine:{text:"subtitle"},headline:"Title",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum consequuntur sint sequi temporibus, ratione consequatur, debitis tempore, porro eius quae neque quo nesciunt. Omnis ut, vel vitae voluptatem tempore necessitatibus?",buttonLabel:"Go To",imgStart:"start",img:"../../assets/prod1.svg",start:"true"},nt={reverse:!1,inverse:!1,topLine:{text:"subtitle"},headline:"Title",description:"Nous faisons intervenir nos experts sur plusieurs secteurs d\u2019activit\xE9 (Bancaire, Assurance, Industriel, t\xE9l\xE9com \u2026 ) pour accompagner nos clients et partenaires dans le d\xE9veloppement et la r\xE9alisation de leurs projets informatiques en toute agilit\xE9.",buttonLabel:"Go To",linkTo:"/more",imgStart:"start",img:"../../assets/processing.svg",start:"true"},ot={reverse:!0,inverse:!0,topLine:{text:"subtitle"},headline:"Title ",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore dolore at cupiditate ratione totam corrupti possimus consequatur ad maiores laudantium pariatur veritatis accusamus quo nesciunt, ab eius ea accusantium eaque!",buttonLabel:"Go To",linkTo:"/download",imgStart:"",img:"../../assets/certificate.svg",start:"true"},rt=()=>r(m,{children:[t(qe,g({},tt)),t(Ae,{}),t(L,g({},it)),t(L,g({},nt)),t(L,g({},ot)),t(et,{})]});function at(){return r("div",{children:[t(Y,{}),t(ge,{}),r(E,{children:[t(b,{path:"/",element:t(rt,{})}),t(b,{path:"/about",element:t(q,{})}),t(b,{path:"/about",element:t(q,{})}),t(b,{path:"/about",element:t(q,{})})]})]})}G.render(t(_.StrictMode,{children:t(K,{children:t(at,{})})}),document.getElementById("root"));
