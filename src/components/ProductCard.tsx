import {Heart,Plus,ArrowLeft} from 'lucide-react'
import {useEffect,useState} from 'react'
import {isWishlisted,toggleWishlist} from '../utils/wishlist'
import type {Product} from '../types'
const toman=(n:number)=>new Intl.NumberFormat('fa-IR').format(n)+' تومان'
export default function ProductCard({product,onAdd,onOpen}:{product:Product;onAdd:(p:Product)=>void;onOpen?:(p:Product)=>void}){
 const [liked,setLiked]=useState(false)
 useEffect(()=>{const sync=()=>setLiked(isWishlisted(product.id));sync();addEventListener('arka-wishlist-change',sync);return()=>removeEventListener('arka-wishlist-change',sync)},[product.id])
 const wish=()=>setLiked(toggleWishlist(product.id))
 return <article className="product-card">
  <div className="product-media" onClick={()=>onOpen?.(product)} role={onOpen?'button':undefined} tabIndex={onOpen?0:undefined} onKeyDown={e=>{if(onOpen&&(e.key==='Enter'||e.key===' '))onOpen(product)}}>
   <img src={product.image} alt={product.alt} loading="lazy"/>
   <button className={`wishlist ${liked?'liked':''}`} aria-label={liked?'حذف از علاقه‌مندی‌ها':'افزودن به علاقه‌مندی‌ها'} onClick={e=>{e.stopPropagation();wish()}}><Heart/></button>
   <button className="quick-add" onClick={e=>{e.stopPropagation();onAdd(product)}}><Plus/>افزودن به سبد</button>
   {onOpen&&<span className="view-product">مشاهده محصول <ArrowLeft/></span>}
  </div>
  <div className="product-meta" onClick={()=>onOpen?.(product)}>
   <span className="eyebrow">{product.brand}</span><h3>{product.name}</h3>
   <div className="product-bottom"><span>{toman(product.price)}</span>{product.oldPrice&&<del>{toman(product.oldPrice)}</del>}</div>
  </div>
 </article>
}
