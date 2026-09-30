import {ArrowLeft} from 'lucide-react'
import ProductCard from './ProductCard'
import SectionTitle from './SectionTitle'
import {brands,products} from '../data'
import type {Brand,Product} from '../types'

type Props={onAdd:(p:Product)=>void;onOpenBrand:(name:string)=>void;onOpenProduct:(p:Product)=>void}

export default function BrandsPage({onAdd,onOpenBrand,onOpenProduct}:Props){
 return <main className="page-shell">
  <section className="page-hero container"><div><span className="eyebrow">CURATED NAMES</span><h1>برندها</h1><p>نام‌هایی که برای فرم، کیفیت و نگاه مستقل خود انتخاب کرده‌ایم.</p></div><span className="page-index">۰۱ / ۰۸</span></section>
  <section className="section container"><div className="brand-directory">{brands.map((brand,i)=><button className="brand-directory-item" key={brand.name} onClick={()=>onOpenBrand(brand.name)}><span>{String(i+1).padStart(2,'0')}</span><div><h2>{brand.name}</h2><p>{brand.story}</p></div><ArrowLeft/></button>)}</div></section>
  <section className="section container"><SectionTitle eyebrow="FROM THE HOUSES" title="منتخبی از محصولات"/><div className="product-grid">{products.slice(0,8).map(p=><ProductCard key={p.id} product={p} onAdd={onAdd} onOpen={onOpenProduct}/>)}</div></section>
 </main>
}

export function BrandDetail({brand,onAdd,onOpenProduct,onBack}:{brand:Brand;onAdd:(p:Product)=>void;onOpenProduct:(p:Product)=>void;onBack:()=>void}){
 const items=products.filter(p=>p.brand===brand.name)
 return <main className="brand-detail">
  <section className="brand-detail-hero"><img src={brand.image} alt={brand.name}/><div className="brand-detail-overlay"><span className="eyebrow">ARKA / THE HOUSE</span><h1>{brand.name}</h1><p>{brand.story}</p></div></section>
  <section className="brand-story container"><button className="underlined back-btn" onClick={onBack}><ArrowLeft/>بازگشت به برندها</button><div><span className="eyebrow">THE HOUSE</span><h2>هویتی مستقل،<br/><i>نگاهی ماندگار.</i></h2></div><p>این خانه با تمرکز بر کیفیت متریال، تناسب دقیق و طراحی معاصر شکل گرفته است. هر قطعه با هدف ماندگاری در کمد و دوری از مصرف‌گرایی لحظه‌ای انتخاب شده است.</p></section>
  <section className="section container"><SectionTitle eyebrow="THE HOUSE EDIT" title={'منتخب '+brand.name}/><div className="product-grid">{items.map(p=><ProductCard key={p.id} product={p} onAdd={onAdd} onOpen={onOpenProduct}/>)}</div></section>
  <section className="brand-quote"><span>ARKA / {brand.name}</span><h2>«سبک، از انتخاب‌های<br/><i>آگاهانه ساخته می‌شود.</i>»</h2></section>
 </main>
}