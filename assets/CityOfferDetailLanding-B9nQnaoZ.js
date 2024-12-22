import{d as i,u as R,a as X,b as F,r as a,j as e}from"./index-DzTPXaNx.js";import{C as L,H as W}from"./heart-DVc6msTI.js";import"./createLucideIcon-Bz2oFEsg.js";const H=i.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: 12px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 20;
    background: linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%);
    height: 56px;
`,C=i.button`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.95);
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);

    &:active {
        background: rgba(255, 255, 255, 0.85);
    }

    svg {
        width: 20px;
        height: 20px;
        color: #1a1a1a;
    }
`,G=i.h1`
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  position: absolute;
  top: 1.25rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
`,A=i.div`
  position: relative;
  width: 100%;
  max-width: 100vw;
  margin: 0 auto;
  height: 100vh;

  @media (min-width: 768px) {
    max-width: 32rem;
    height: auto;
  }
`,Y=i.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #000;
    touch-action: pan-y pinch-zoom;

    @media (min-width: 768px) {
        height: 24rem;
    }
`,_=i.div`
    position: absolute;
    width: 100%;
    height: 100%;
    transition: transform ${o=>o.$sliding?"0ms":"300ms"} ease-in-out;
    transform: translateX(${o=>o.$offset}px);
    display: flex;
    align-items: center;
    justify-content: center;
`,q=i.img`
    width: 100%;
    height: 100%;
    object-fit: contain;

    @media (max-width: 767px) {
        max-height: 100vh;
        object-position: center;
    }

    @media (min-width: 768px) {
        object-fit: cover;
    }
`,J=i.div`
    position: fixed;
    bottom: 6rem;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    z-index: 10;

    @media (min-width: 768px) {
        position: absolute;
    }
`,K=i.button`
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 9999px;
    transition: background-color 200ms;
    background-color: ${o=>o.$active?"white":"rgb(156 163 175)"};
    border: none;
    padding: 0;
    cursor: pointer;
`,Q=i.div`
    position: fixed;
    bottom: 10rem;
    left: 0;
    right: 0;
    padding: 0 1rem;
    background: linear-gradient(to top, rgba(0,0,0,0.5), transparent);

    @media (min-width: 768px) {
        position: absolute;
        background: none;
    }
`,U=i.div`
    display: flex;
    gap: 0.5rem;
    overflow-x: auto;
    padding: 0.5rem 0;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
`,V=i.button`
    flex-shrink: 0;
    position: relative;
    border: none;
    padding: 0;
    cursor: pointer;
    ${o=>o.$active&&"outline: 2px solid white; outline-offset: 2px;"}
`,Z=i.img`
    width: 3.5rem;
    height: 3.5rem;
    object-fit: cover;
    border-radius: 0.5rem;

    @media (min-width: 768px) {
        width: 4rem;
        height: 4rem;
    }
`,tt=i.div`
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`,et=i.span`
    color: white;
    font-size: 0.875rem;
`,it=i.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 1rem;
    backdrop-filter: blur(4px);

    @media (min-width: 768px) {
        position: absolute;
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: none;
    }
`,nt=i.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    max-width: 32rem;
    margin: 0 auto;
`,ot=i.div`
    width: 2rem;
    height: 2rem;
    border-radius: 9999px;
    background-color: rgb(229 231 235);
    flex-shrink: 0;
`,rt=i.div`
    flex: 1;
`,st=i.p`
    font-weight: 500;
    margin: 0;
`,at=i.p`
    font-size: 0.875rem;
    margin: 0.25rem 0 0;
`,S=i.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    backdrop-filter: blur(4px);

    &:hover {
        background: rgba(0, 0, 0, 0.7);
    }

    ${o=>o.$position==="left"?"left: 1rem;":"right: 1rem;"}

    @media (max-width: 767px) {
    display: none;
}
`,ht=()=>{const o=R(),{id:T}=X(),r=F(t=>t.images.items),[c,d]=a.useState(0),[h,b]=a.useState(null),[v,w]=a.useState(null),[j,u]=a.useState(!1),[I,m]=a.useState(0),f=a.useRef(null),[p,D]=a.useState(!1);a.useEffect(()=>{const t=r.findIndex(n=>n.id===Number(T));x(t)},[]);const k=50,x=t=>{j||d(t)},z=t=>{b(t.touches[0].clientX),u(!0),m(0)},B=t=>{var $;if(!h)return;const n=t.touches[0].clientX,l=h-n,s=(($=f.current)==null?void 0:$.offsetWidth)||0,g=Math.max(Math.min(l,s),-s);m(-g),w(n)},E=()=>{if(!h||!v){u(!1),m(0);return}const t=h-v,n=t>k,l=t<-k;n&&c<r.length-1?d(s=>s+1):l&&c>0&&d(s=>s-1),b(null),w(null),u(!1),m(0)},M=()=>{d(t=>t>0?t-1:r.length-1)},N=()=>{d(t=>t<r.length-1?t+1:0)},O=()=>{o("/")},P=()=>{D(!p)},y=t=>{var g;const n=(t-c)*100,l=((g=f.current)==null?void 0:g.offsetWidth)||0,s=I/l*100;return`${n+s}%`};return e.jsxs(A,{children:[e.jsxs(H,{children:[e.jsx(C,{onClick:O,"aria-label":"Go back",children:e.jsx(L,{size:24})}),e.jsx(C,{onClick:P,"aria-label":p?"Remove from favorites":"Add to favorites",children:e.jsx(W,{fill:p?"#000":"none"})})]}),e.jsx(G,{children:"Dessert"}),e.jsx(Y,{ref:f,onTouchStart:z,onTouchMove:B,onTouchEnd:E,children:r.map((t,n)=>e.jsx(_,{$sliding:j,$offset:parseFloat(y(n)),style:{transform:`translateX(${y(n)})`},children:e.jsx(q,{src:t.images,alt:t.name,draggable:"false"})},t.id))}),e.jsx(S,{onClick:M,$position:"left","aria-label":"Previous image",children:"←"}),e.jsx(S,{onClick:N,$position:"right","aria-label":"Next image",children:"→"}),e.jsx(J,{children:r.map((t,n)=>e.jsx(K,{$active:c===n,onClick:()=>x(n),"aria-label":`Go to slide ${n+1}`},n))}),e.jsx(Q,{children:e.jsx(U,{children:r.map((t,n)=>e.jsxs(V,{onClick:()=>x(n),$active:c===n,children:[e.jsx(Z,{src:t.images,alt:t.name}),n===r.length-1&&e.jsx(tt,{children:e.jsxs(et,{children:["+",r.length-10]})})]},t.id))})}),e.jsx(it,{children:e.jsxs(nt,{children:[e.jsx(ot,{}),e.jsxs(rt,{children:[e.jsx(st,{children:"Parfaiteria Bel"}),e.jsx(at,{children:"Enjoy an instant 10% discount on purchases of ¥8,000 with your card"})]})]})})]})};export{ht as default};
