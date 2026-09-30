import {Heart,Search,ShoppingBag,UserRound,Menu,X} from 'lucide-react'
import {useEffect,useState} from 'react'
type Props={cartCount:number;onCart:()=>void;onBrands?:()=>void}
export default function Header({cartCount,onCart,onBrands}:Props){
 const [scrolled,setScrolled]=useState(false); const [mobile,setMobile]=useState(false)
 useEffect(()=>{const fn=()=>setScrolled(scrollY>50);addEventListener('scroll',fn);return()=>removeEventListener('scroll',fn)},[])
 return <header className={`site-header ${scrolled?'is-scrolled':''}`}>
  <div className="header-inner">
   <button className="mobile-menu" aria-label="منو" onClick={()=>setMobile(true)}><Menu/></button>
   <a className="wordmark" href="#">ARKA<span>آرکا</span></a>
   <nav className="desktop-nav"><a href="#shop">فروشگاه</a><button className="nav-button" onClick={onBrands}>برندها</button><a href="#collections">کالکشن‌ها</a><a href="#new">جدیدترین‌ها</a><a href="#journal">مجله</a><a href="#about">درباره ما</a></nav>
   <div className="header-actions">
    <button aria-label="جستجو"><Search/></button><button aria-label="حساب کاربری"><UserRound/></button><button aria-label="علاقه‌مندی‌ها"><Heart/></button>
    <button className="cart-trigger" aria-label="سبد خرید" onClick={onCart}><ShoppingBag/>{cartCount>0&&<b>{cartCount}</b>}</button>
   </div>
  </div>
  {mobile&&<div className="mobile-nav"><div className="mobile-nav-top"><span>ARKA</span><button onClick={()=>setMobile(false)} aria-label="بستن"><X/></button></div><div className="mobile-links"><a href="#shop" onClick={()=>setMobile(false)}>فروشگاه</a><button className="nav-button" onClick={()=>{setMobile(false);onBrands?.()}}>برندها</button><a href="#collections" onClick={()=>setMobile(false)}>کالکشن‌ها</a><a href="#new" onClick={()=>setMobile(false)}>جدیدترین‌ها</a><a href="#journal" onClick={()=>setMobile(false)}>مجله</a><a href="#about" onClick={()=>setMobile(false)}>درباره آرکا</a></div><div className="mobile-utility"><span>جستجو</span><span>حساب کاربری</span><span>علاقه‌مندی‌ها</span><span>سبد خرید</span></div></div>}
 </header>
}