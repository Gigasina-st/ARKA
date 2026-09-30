import {Heart,Plus,ArrowLeft} from 'lucide-react'
import type {Product} from '../types'
const toman=(n:number)=>new Intl.NumberFormat('fa-IR').format(n)+' تومان'
export default function ProductCard({product,onAdd,onOpen}:{product:Product;onAdd:(p:Product)=>void;onOpen?:(p:Product)=>void}){
 return <article className="product-card">
  <div className="product-media" onClick={()=>onOpen?.(product)} role={onOpen?'button':undefined} tabIndex={onOpen?0:undefined} onKeyDown={e=>{if(onOpen&&(e.key==='Enter'||e.key===' '))onOpen(product)}}>
   <img src={product.image} alt={product.alt} loading="lazy"/>
   <button className="wishlist" aria-label="افزودن به علاقه‌مندی‌ها" onClick={e=>e.stopPropagation()}><Heart/></button>
   <button className="quick-add" onClick={e=>{e.stopPropagation();onAdd(product)}}><Plus/>افزودن به سبد</button>
   {onOpen&&<span className="view-product">مشاهده محصول <ArrowLeft/></span>}
  </div>
  <div className="product-meta" onClick={()=>onOpen?.(product)}>
   <span className="eyebrow">{product.brand}</span><h3>{product.name}</h3>
   <div className="product-bottom"><span>{toman(product.price)}</span>{product.oldPrice&&<del>{toman(product.oldPrice)}</del>}</div>
  </div>
 </article>
}
