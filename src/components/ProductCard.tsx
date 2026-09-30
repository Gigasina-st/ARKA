import {Heart,Plus} from 'lucide-react'
import type {Product} from '../types'
const toman=(n:number)=>new Intl.NumberFormat('fa-IR').format(n)+' تومان'
export default function ProductCard({product,onAdd}:{product:Product;onAdd:(p:Product)=>void}){
 return <article className="product-card">
  <div className="product-media"><img src={product.image} alt={product.alt} loading="lazy"/><button className="wishlist" aria-label="افزودن به علاقه‌مندی‌ها"><Heart/></button><button className="quick-add" onClick={()=>onAdd(product)}><Plus/>افزودن به سبد</button></div>
  <div className="product-meta"><span className="eyebrow">{product.brand}</span><h3>{product.name}</h3><div className="product-bottom"><span>{toman(product.price)}</span>{product.oldPrice&&<del>{toman(product.oldPrice)}</del>}</div></div>
 </article>
}