const KEY='arka-wishlist'
export function getWishlist():number[]{try{return JSON.parse(localStorage.getItem(KEY)||'[]')}catch{return[]}}
export function isWishlisted(id:number){return getWishlist().includes(id)}
export function toggleWishlist(id:number){const current=getWishlist();const next=current.includes(id)?current.filter(x=>x!==id):[...current,id];localStorage.setItem(KEY,JSON.stringify(next));window.dispatchEvent(new Event('arka-wishlist-change'));return next.includes(id)}
