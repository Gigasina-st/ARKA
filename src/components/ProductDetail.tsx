import {useMemo,useState} from 'react'
import {ArrowLeft,ChevronLeft,ChevronRight,Heart,Minus,Plus,Share2} from 'lucide-react'
import ProductCard from './ProductCard'
import SectionTitle from './SectionTitle'
import type {Product} from '../types'
import {products} from '../data'

const toman=(n:number)=>new Intl.NumberFormat('fa-IR').format(n)+' تومان'

type Props={product:Product;onAdd:(p:Product,options?:{color?:string;size?:string;qty?:number})=>void;onOpenProduct:(p:Product)=>void;onBack:()=>void}

export default function ProductDetail({product,onAdd,onOpenProduct,onBack}:Props){
 const gallery=useMemo(()=>product.gallery?.length?product.gallery:[product.image],[product])
 const [active,setActive]=useState(0)
 const [color,setColor]=useState(product.colors[0]??'')
 const [size,setSize]=useState(product.sizes?.[0]??'')
 const [liked,setLiked]=useState(false)
 const [sizeGuideOpen,setSizeGuideOpen]=useState(false)
 const [qty,setQty]=useState(1)
 const [copied,setCopied]=useState(false)
 const related=products.filter(p=>p.id!==product.id&&(p.brand===product.brand||p.category===product.category)).slice(0,4)

 const addToCart=()=>onAdd(product,{color,size,qty})
 const share=async()=>{
  const url=window.location.href
  try{if(navigator.share)await navigator.share({title:`آرکا | ${product.name}`,text:`مشاهده ${product.name} از برند ${product.brand}`,url});else{await navigator.clipboard.writeText(url);setCopied(true);setTimeout(()=>setCopied(false),1800)}}catch{}
 }

 return <main className="product-detail-page">
  <div className="container product-breadcrumb"><button onClick={onBack}>فروشگاه</button><ChevronLeft/><button>{product.category}</button><ChevronLeft/><span>{product.name}</span></div>
  <section className="product-detail container">
   <div className="product-gallery">
    <div className="gallery-main">
     <img src={gallery[active]} alt={product.alt}/>
     {gallery.length>1&&<><button className="gallery-prev" aria-label="تصویر قبلی" onClick={()=>setActive((active-1+gallery.length)%gallery.length)}><ChevronRight/></button><button className="gallery-next" aria-label="تصویر بعدی" onClick={()=>setActive((active+1)%gallery.length)}><ChevronLeft/></button></>}
    </div>
    {gallery.length>1&&<div className="gallery-thumbs">{gallery.map((src,i)=><button className={i===active?'active':''} key={src+i} onClick={()=>setActive(i)}><img src={src} alt={`نمای ${i+1} ${product.name}`}/></button>)}</div>}
   </div>

   <div className="product-info">
    <div className="product-info-top"><span className="eyebrow">{product.brand}</span><button className={`detail-wishlist ${liked?'liked':''}`} onClick={()=>setLiked(!liked)} aria-label="علاقه‌مندی"><Heart/></button></div>
    <h1>{product.name}</h1>
    <div className="detail-price">{toman(product.price)} {product.oldPrice&&<del>{toman(product.oldPrice)}</del>}</div>
    {product.stock&&product.stock<5?<p className="stock-note">تنها {new Intl.NumberFormat('fa-IR').format(product.stock)} عدد باقی مانده</p>:<p className="stock-note available">موجود</p>}
    <p className="detail-description">{product.description}</p>

    {product.colors.length>0&&<div className="variant-block"><div className="variant-label"><span>رنگ</span><strong>{color}</strong></div><div className="swatches">{product.colors.map(c=><button key={c} className={c===color?'selected':''} onClick={()=>setColor(c)} aria-label={`رنگ ${c}`}><span style={{background:swatchColor(c)}}/></button>)}</div></div>}
    {product.sizes&&<div className="variant-block"><div className="variant-label"><span>سایز</span><button className="size-guide" onClick={()=>setSizeGuideOpen(true)}>راهنمای سایز</button></div><div className="sizes">{product.sizes.map(s=><button key={s} className={s===size?'selected':''} onClick={()=>setSize(s)}>{s}</button>)}</div></div>}

    <div className="detail-actions"><div className="quantity"><button onClick={()=>setQty(Math.max(1,qty-1))} aria-label="کاهش"><Minus/></button><span>{new Intl.NumberFormat('fa-IR').format(qty)}</span><button onClick={()=>setQty(Math.min(product.stock??99,qty+1))} aria-label="افزایش"><Plus/></button></div><button className="add-detail" onClick={addToCart}>افزودن به سبد <ArrowLeft/></button></div>
    <button className="share-btn" onClick={share}><Share2/>{copied?'لینک کپی شد':'اشتراک‌گذاری محصول'}</button>

    <div className="detail-accordions"><div><span>جنس و متریال</span><p>{product.material}</p></div><div><span>جزئیات محصول</span><ul>{product.details?.map(d=><li key={d}>{d}</li>)}</ul></div><div><span>شناسه محصول</span><p>{product.sku}</p></div></div>
   </div>
  </section>

  <section className="product-story container"><div><span className="eyebrow">THE ARKA NOTE</span><h2>جزئیاتی که<br/><i>دیده می‌شوند.</i></h2></div><p>{product.description} در آرکا هر قطعه بخشی از یک انتخاب آگاهانه است؛ محصولی که قرار است در کمد شما بماند، نه فقط یک فصل از آن عبور کند.</p></section>

  {related.length>0&&<section className="section container related-products"><SectionTitle eyebrow="YOU MAY ALSO LIKE" title="پیشنهاد آرکا"/><div className="product-grid">{related.map(p=><ProductCard key={p.id} product={p} onAdd={onAdd} onOpen={onOpenProduct}/>)}</div></section>}
 {sizeGuideOpen&&<div className="size-guide-modal" role="dialog" aria-modal="true" aria-label="راهنمای سایز"><button className="size-guide-close" onClick={()=>setSizeGuideOpen(false)} aria-label="بستن">×</button><span className="eyebrow">ARKA SIZE GUIDE</span><h2>راهنمای سایز</h2><p>برای انتخاب دقیق‌تر، اندازه‌های خود را با جدول زیر مقایسه کنید.</p><div className="size-table"><div><span>سایز</span><span>دور سینه</span><span>دور کمر</span><span>قد پیشنهادی</span></div>{[['۳۶','۸۴–۸۸','۶۶–۷۰','۱۶۰–۱۶۵'],['۳۸','۸۸–۹۲','۷۰–۷۴','۱۶۵–۱۷۰'],['۴۰','۹۲–۹۶','۷۴–۷۸','۱۷۰–۱۷۵'],['۴۲','۹۶–۱۰۰','۷۸–۸۲','۱۷۵–۱۸۰'],['۴۴','۱۰۰–۱۰۴','۸۲–۸۶','۱۸۰–۱۸۵']].map(row=><div key={row[0]}>{row.map(x=><span key={x}>{x}</span>)}</div>)}</div><small>اعداد تقریبی هستند و بر حسب سانتی‌متر ارائه شده‌اند.</small></div>}
 </main>
}

function swatchColor(color:string){
 const map:Record<string,string>={'مشکی':'#171613','استخوانی':'#e8e1d5','قهوه‌ای':'#6b4935','شیری':'#eee9df','ذغالی':'#4c4a47','کرم':'#cbbba2','دودی':'#686765','زیتونی':'#66705a'}
 return map[color]??'#aaa'
}
