import{d as r,j as e,R as l,u as C,r as g,e as w}from"./index-D4xi0YhR.js";import{C as S,H as F}from"./heart-C-sq1fOW.js";import"./createLucideIcon-BxCgLdW1.js";const B=r.button`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1.5rem;
    background-color: rgb(255 247 237);
    color: rgb(234 88 12);
    border-radius: 9999px;
    font-weight: 500;
    font-size: 0.875rem;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: rgb(254 215 170);
    }
`,D=r.div`
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 9999px;
    background-color: rgb(255 237 213);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem;
    color: rgb(234 88 12);
`,z=({category:o,icon:n="",onClick:i,className:c})=>e.jsxs(B,{onClick:i,className:c,children:[e.jsx(D,{style:{backgroundImage:`url(${n})`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}),o]}),I=r.button`
    padding: 0.5rem;
    border-radius: 9999px;
    background-color: rgba(255, 255, 255, 0.8);
    margin-right: 100%;
    margin-top: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: rgba(255, 255, 255, 1);
    }
`,O=({onClick:o})=>e.jsx(I,{onClick:o,children:e.jsx(S,{size:24})}),E=r.div`
    position: relative;
    background-color: white;
    border-radius: 0.75rem;
    overflow: hidden;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`,L=r.div`
    position: relative;
    width: 100%;
    height: 8rem;
`,A=r.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`,H=r.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0.75rem;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
`,W=r.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.25rem;
`,M=r.img`
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 9999px;
`,X=r.h3`
    font-size: 0.875rem;
    font-weight: 500;
    color: white;
`,G=r.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0.25rem;
  border-radius: 9999px;
  background-color: rgba(255, 255, 255, 0.8);
  transition: background-color 0.2s;

  &:hover {
    background-color: white;
  }
`,K=({storeImageSrc:o,storeName:n,storeLogoSrc:i,onFavoriteClick:c})=>e.jsx(E,{children:e.jsxs(L,{children:[e.jsx(A,{src:o,alt:n}),e.jsx(H,{children:e.jsxs(W,{children:[e.jsx(M,{src:i,alt:n}),e.jsx(X,{children:n})]})}),e.jsx(G,{onClick:c,children:e.jsx(F,{size:16,color:"#374151"})})]})}),T=l.memo(K),U=r.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 16px;
`,N=r.button`
    width: 8px;
    height: 8px;
    border-radius: 10PX;
    transition: all 0.3s ease;
    background-color: ${o=>o.isActive?"#FB923C":"#D1D5DB"};
    border: none;
    padding: 0;
    cursor: pointer;

    &:hover {
        background-color: ${o=>o.isActive?"#FB923C":"#9CA3AF"};
    }
`,P=({total:o,current:n,onDotClick:i})=>e.jsx(U,{children:Array.from({length:o}).map((c,a)=>e.jsx(N,{isActive:a===n,onClick:()=>i==null?void 0:i(a),"aria-label":`Go to slide ${a+1}`},a))}),Q=r.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #f9fafb;
    max-width: 100%;
`,R=r.header`
    position: relative;
    width: 100%;
    height: 12rem;
`,$=r.div`
    position: absolute;
    inset: 0;
    &::after {
        content: '';
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.3);
    }
`,q=r.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`,V=r.div`
    position: relative;
    padding: 1rem;
`,Y=r.h1`
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: -1.5rem;
`,Z=r.div`
    padding: 0 1rem 1.5rem;
    border: solid 5px red;
    margin-top: -20px;
    z-index: 1;
    border-radius: 20px;
    background: wheat;
`,_=r.h1`
    border: none;
    border-top: 5px solid #d1d5db; 
    margin: 1rem auto; 
    width: 20%;
    border-radius: 5px;
    text-align: center; 
`,p=r.h2`
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: left; 
    text-align: left;
`,J=r.div`
    background: linear-gradient(135deg,
    #FFF5E9 0%,
    #FFE8D9 25%,
    #FFDCC6 50%,
    #FFE8D9 75%,
    #FFF5E9 100%
    );
    border-radius: 1.5rem;
    padding: 2rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    max-width: 42rem;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg,
        rgba(255,255,255,0.1) 0%,
        rgba(255,255,255,0.3) 50%,
        rgba(255,255,255,0.1) 100%
        );
        pointer-events: none;
    }
`,ee=r.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`,re=r.div`
    flex: 1;
`,te=r.div`
    display: flex;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    align-items: center;
`,oe=r.img`
    width: 5rem;
    height: 2rem;
`,ne=r.span`
    font-size: 0.875rem;
`,ie=r.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: relative;
  z-index: 2;
`,ae=r.h3`
    font-weight: 600;
    margin-bottom: 0.25rem;
`,se=r.p`
    color: #f97316;
    font-weight: 500;
`,ce=r.button`
    margin-top: 0.75rem;
    padding: 0.5rem 1rem;
    background-color: #fb923c;
    color: white;
    border-radius: 9999px;
    font-size: 0.875rem;
`,de=r.div`
    margin-top: 2rem;
`,le=r.div`
    display: flex;
    gap: 1rem;
    overflow-x: auto;
    padding-bottom: 0.5rem;

    &::-webkit-scrollbar {
        display: none;
    }
`,ge=r.div`
    margin-top: 1.5rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
`,me=r.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`,h=r.span`
  padding: 0.25rem 0.5rem;
  background-color: #ffedd5;
  color: #ea580c;
  border-radius: 9999px;
  font-size: 0.75rem;
`,xe=()=>{const n=C(),[i,c]=g.useState(0),[a,m]=g.useState([]),u=l.useCallback(t=>{c(t)},[]),x=t=>{n(`/landing/${t}`)},b=()=>{n("/")},f=l.useCallback(t=>{const d=a.filter(k=>k.category.name.includes(t));m(d)},[a]),j=l.useCallback(t=>{console.log(`${t} added to favorites!`)},[]),{data:s,error:v,isLoading:y}=w();return g.useEffect(()=>{if(s!=null&&s.offers.length){const t=s==null?void 0:s.offers.map(d=>d==null?void 0:d.merchant);m(t)}},[s]),y?e.jsx("div",{children:"Loading..."}):v?e.jsx("div",{children:"Error: "}):e.jsxs(Q,{children:[e.jsxs(R,{children:[e.jsx($,{children:e.jsx(q,{src:"https://s3-alpha-sig.figma.com/img/c862/cfa0/8b479bf669f459c69f7c87c13c641f94?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kmIeL5gKdbiM5L3gMgngdznYtLU-~uEGEQ9yaLc1ghNoBjlz3DbOteu-mleBD5sOUL6y5P7fktwuXM7UFMJ6PHOal-6M60zWvyb9m1~v9YAsFIxEPzEXpHU~vOMZexXxL9pWUqimc1pOYDaaNnjeY~gCbdXX1LldylAauoQSHlOpWZHNPy7tOxEExahenb2D1dqcR5gaumbKB~XSORMuFxDPFdRCyka2CAOXx9Qy-SyL6idDGpQkDXuUZjbUq9lu77W9D--kHiyQqiWAFyyI78aZrtS8UA43GX9tzX0cK4jK~7sArDg-30XOUfFNnaeWugzM2wWrFsfCzVXgLKakKA__",alt:"Tokyo cityscape"})}),e.jsxs(V,{children:[e.jsx(O,{onClick:()=>b()}),e.jsx(Y,{children:"Tokyo"})]})]}),e.jsxs(Z,{children:[e.jsx(_,{}),e.jsx(p,{children:"Special Offers!"}),e.jsx(J,{children:e.jsxs(ee,{children:[e.jsxs(re,{children:[e.jsxs(te,{children:[e.jsx(oe,{src:"/api/placeholder/30/30",alt:"SK-II"}),e.jsx(ne,{children:"SK-II"})]}),e.jsx(ae,{children:"Get Special Offer"}),e.jsx(se,{children:"Up to 9% discount"}),e.jsx(ce,{children:"View More"})]}),e.jsx(ie,{src:"/api/placeholder/30/30",alt:"Beauty product",style:{width:"6rem",height:"100%"}})]})}),e.jsx(P,{total:3,current:i,onDotClick:u}),e.jsxs(de,{children:[e.jsx(p,{children:"Explore Tokyo's Best Category"}),e.jsx(le,{children:a.map(t=>e.jsx(z,{category:t.category.name,icon:t.image,onClick:()=>f(t.category.name)},t.category.name))})]}),e.jsx(ge,{children:a.map(t=>e.jsxs("div",{onClick:()=>x(t.id),children:[e.jsx(T,{storeImageSrc:t.image,storeName:t.category.name,storeLogoSrc:t.image,discountText:t.discount,onFavoriteClick:()=>j(t.image)},t.category.name),e.jsxs(me,{children:[e.jsx(h,{children:"Desert"}),e.jsx(h,{children:"Exclusive"})]})]}))})]})]})};export{xe as default};
