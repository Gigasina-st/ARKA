import {useEffect,useState} from 'react'
import {ArrowLeft,ArrowUpLeft,ChevronLeft} from 'lucide-react'
import Header from './components/Header'
import ProductCard from './components/ProductCard'
import SectionTitle from './components/SectionTitle'
import CartDrawer from './components/CartDrawer'
import Footer from './components/Footer'
import ProductDetail from './components/ProductDetail'
import BrandsPage,{BrandDetail} from './components/BrandsPage'
import {products,brands,articles} from './data'
import type {Product} from './types'

export default function App(){
 const [page,setPage]=useState<'home'|'brands'|'brand'|'product'>('home')
 const [selectedProduct,setSelectedProduct]=useState<Product|null>(null)
 const [selectedBrand,setSelectedBrand]=useState('')
 const goHome=()=>{setPage('home');setSelectedProduct(null);window.history.pushState({},'',window.location.pathname+window.location.search);window.scrollTo(0,0)}
 const openBrands=()=>{setPage('brands');setSelectedProduct(null);window.history.pushState({},'',window.location.pathname+window.location.search);window.scrollTo(0,0)}
 const openBrand=(name:string)=>{setSelectedBrand(name);setPage('brand');window.scrollTo(0,0)}
 const selected=brands.find(b=>b.name===selectedBrand)
 const openProduct=(product:Product)=>{setSelectedProduct(product);setPage('product');window.history.pushState({},'',`#/product/${product.id}`);window.scrollTo(0,0)}
 useEffect(()=>{const onPop=()=>{const hash=window.location.hash;const prefix='#/product/';if(hash.startsWith(prefix)){const id=Number(hash.slice(prefix.length));const p=products.find(x=>x.id===id);if(p){setSelectedProduct(p);setPage('product');return}}setSelectedProduct(null);setPage('home')};onPop();addEventListener('popstate',onPop);addEventListener('hashchange',onPop);return()=>{removeEventListener('popstate',onPop);removeEventListener('hashchange',onPop)}},[])
 const [cartOpen,setCartOpen]=useState(false)
 const [cart,setCart]=useState<{product:Product;qty:number;color?:string;size?:string}[]>([])
 const add=(product:Product,options:{color?:string;size?:string;qty?:number}={})=>setCart(c=>{const qty=options.qty??1;const x=c.find(i=>i.product.id===product.id&&i.color===options.color&&i.size===options.size);return x?c.map(i=>i===x?{...i,qty:i.qty+qty}:i):[...c,{product,qty,color:options.color,size:options.size}]})
 const remove=(id:number)=>setCart(c=>c.filter(i=>i.product.id!==id))
 const change=(id:number,d:number)=>setCart(c=>c.map(i=>i.product.id===id?{...i,qty:Math.max(1,i.qty+d)}:i))
 const count=cart.reduce((s,i)=>s+i.qty,0)
 return <div id="top">
  <Header cartCount={count} onCart={()=>setCartOpen(true)} onBrands={openBrands}/>
  {page==='home'&&<main>
   <section className="hero">
    <img className="hero-image" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=2200&q=90" alt="کمپین فشن آرکا"/>
    <div className="hero-overlay"/>
    <div className="hero-content"><span className="hero-kicker">ARKA / EDIT 01</span><h1>انتخابی<br/><em>فراتر از مد</em></h1><p>مجموعه‌ای از برندهایی که تعریف تازه‌ای از سبک معاصر ارائه می‌کنند.</p><div className="hero-actions"><a className="light-btn" href="#collections">مشاهده کالکشن <ArrowLeft/></a><a className="hero-link" href="#brands">اکتشاف برندها <span>←</span></a></div></div>
    <div className="hero-index">۰۱ / ۰۴</div>
    <div className="hero-scroll">اسکرول کنید <span/></div>
   </section>

   <section className="intro container"><div className="intro-number">01</div><div className="intro-copy"><span className="eyebrow">THE ARKA EDIT</span><h2>برای کسانی که<br/><i>انتخاب می‌کنند.</i></h2><p>آرکا مجموعه‌ای منتخب از نام‌های مستقل و نگاه‌های متفاوت است؛ فضایی برای کشف قطعاتی که قرار نیست فقط یک فصل دوام بیاورند.</p><a className="underlined" href="#about">درباره رویکرد آرکا <ArrowLeft/></a></div></section>

   <section className="editorial-feature container" id="collections"><div className="feature-main"><img src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1500&q=85" alt="کالکشن پاییزه"/><div className="feature-caption"><span>COLLECTION 01</span><h2>سکوتِ فرم</h2><a href="#shop">مشاهده کالکشن <ArrowLeft/></a></div></div><div className="feature-side"><img src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=900&q=85" alt="جزئیات کالکشن"/><p>فرم‌های خالص، بافت‌های آرام و رنگ‌هایی که به زمان وابسته نیستند.</p><a className="underlined" href="#shop">اکتشاف <ArrowLeft/></a></div></section>

   <section className="section container" id="new"><SectionTitle eyebrow="NEW ARRIVALS" title="تازه‌واردها" link="مشاهده همه"/><div className="product-grid">{products.slice(0,4).map(p=><ProductCard key={p.id} product={p} onAdd={add} onOpen={openProduct}/>)}</div></section>

   <section className="edit-section"><div className="container"><SectionTitle eyebrow="THE EDIT" title="انتخاب سردبیر"/><div className="edit-grid"><a className="edit-card edit-large" href="#shop"><img src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1400&q=85" alt="استایل مینیمال"/><div><span>01 — MINIMAL</span><h3>کمتر، اما دقیق‌تر.</h3><ArrowUpLeft/></div></a><a className="edit-card" href="#shop"><img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85" alt="استایل شهری"/><div><span>02 — CITY</span><h3>ریتم شهر</h3><ArrowUpLeft/></div></a><a className="edit-card" href="#shop"><img src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1000&q=85" alt="اکسسوری"/><div><span>03 — DETAILS</span><h3>جزئیات ماندگار</h3><ArrowUpLeft/></div></a></div></div></section>

   <section className="section brands-section container" id="brands"><SectionTitle eyebrow="CURATED NAMES" title="برندهای منتخب" link="مشاهده همه"/><div className="brand-grid">{brands.slice(0,6).map((b,i)=><a className={`brand-card ${i===0?'brand-wide':''}`} href="#shop" key={b.name}><img src={b.image} alt={b.name}/><div className="brand-card-overlay"><span>{String(i+1).padStart(2,'0')}</span><div><h3>{b.name}</h3><p>{b.story}</p></div><ChevronLeft/></div></a>)}</div></section>

   <section className="campaign"><img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=2200&q=90" alt="کمپین آرکا"/><div className="campaign-content"><span>ARKA / CAMPAIGN</span><h2>زیبایی،<br/><i>در جزئیات است.</i></h2><a href="#shop">دیدن مجموعه <ArrowLeft/></a></div></section>

   <section className="philosophy container" id="about"><div className="philosophy-art"><img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=85" alt="فلسفه آرکا"/><span>ARKA / 2026</span></div><div className="philosophy-copy"><span className="eyebrow">OUR PHILOSOPHY</span><h2>انتخاب،<br/>خودِ <i>سبک</i> است.</h2><p>ما باور داریم سبک از جایی شروع می‌شود که انتخاب‌ها آگاهانه می‌شوند. آرکا فضایی است برای برندهایی که چیزی برای گفتن دارند و آدم‌هایی که به جزئیات اهمیت می‌دهند.</p><a className="underlined" href="#about">بیشتر درباره آرکا <ArrowLeft/></a></div></section>

   <section className="section journal container" id="journal"><SectionTitle eyebrow="JOURNAL" title="مجله آرکا" link="مشاهده همه"/><div className="article-grid">{articles.map((a,i)=><article className={`article-card ${i===0?'article-feature':''}`} key={a.title}><a href="#journal"><div><img src={a.image} alt={a.title}/><span className="article-arrow"><ArrowUpLeft/></span></div><span className="eyebrow">{a.category}</span><h3>{a.title}</h3><p>{a.excerpt}</p></a></article>)}</div></section>

   <section className="newsletter container"><div><span className="eyebrow">STAY IN THE EDIT</span><h2>آرکا را<br/><i>دنبال کنید.</i></h2></div><div className="newsletter-form"><p>انتخاب‌های سردبیر، کالکشن‌های تازه و روایت‌های آرکا را مستقیماً دریافت کنید.</p><form onSubmit={e=>e.preventDefault()}><input type="email" placeholder="ایمیل شما" aria-label="ایمیل شما"/><button type="submit">عضویت <ArrowLeft/></button></form><small>با عضویت، از اخبار و پیشنهادهای منتخب آرکا باخبر می‌شوید.</small></div></section>
  </main>}
  {page==='brands'&&<BrandsPage onAdd={add} onOpenBrand={openBrand} onOpenProduct={openProduct}/>} 
  {page==='brand'&&selected&&<BrandDetail brand={selected} onAdd={add} onOpenProduct={openProduct} onBack={openBrands}/>} 
  {page==='product'&&selectedProduct&&<ProductDetail product={selectedProduct} onAdd={(p,options)=>add(p,options)} onOpenProduct={openProduct} onBack={goHome}/>}  
  <Footer/>
  {cartOpen&&<CartDrawer items={cart} onClose={()=>setCartOpen(false)} onRemove={remove} onChange={change}/>}
 </div>
}
