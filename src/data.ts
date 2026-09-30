import type {Product,Brand,Article} from './types'

const img=(id:string,w=1200,h=1500)=>`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=85`

export const products:Product[]=[
{id:1,brand:'نُما',name:'کت مینیمال آترا',category:'پوشاک',price:12800000,image:img('1529139575747-1d6f8a2f5e2f'),alt:'کت مینیمال کرم',colors:['مشکی','استخوانی']},
{id:2,brand:'وِرا',name:'کیف دستی نوآ',category:'کیف',price:8900000,oldPrice:10500000,image:img('1584917865442-de89df76afd3'),alt:'کیف چرمی',colors:['قهوه‌ای','مشکی']},
{id:3,brand:'آوان',name:'پیراهن ابریشمی سُها',category:'پوشاک',price:9900000,image:img('1496747611176-843222e1e57c'),alt:'پیراهن ابریشمی',colors:['شیری','ذغالی']},
{id:4,brand:'رَسا',name:'بوت چرم آذر',category:'کفش',price:14600000,image:img('1543163521-1d3e6b4d8f5e'),alt:'بوت چرمی',colors:['مشکی']},
{id:5,brand:'هیراد',name:'شلوار پارچه‌ای رِی',category:'پوشاک',price:7200000,image:img('1506629905607-d9d4b4b4b6d5'),alt:'شلوار پارچه‌ای',colors:['ذغالی','کرم']},
{id:6,brand:'نُما',name:'پیراهن یقه‌بلند ماه',category:'پوشاک',price:6800000,image:img('1515886657613-9f3515b0c78f'),alt:'پیراهن مشکی',colors:['مشکی']},
{id:7,brand:'وِرا',name:'کمربند آرون',category:'اکسسوری',price:3900000,image:img('1553062407-98eeb64c6a62'),alt:'کمربند چرمی',colors:['قهوه‌ای']},
{id:8,brand:'آوان',name:'عینک آفتابی رُخ',category:'اکسسوری',price:5400000,image:img('1511499767150-a48a237f0083'),alt:'عینک آفتابی',colors:['مشکی','دودی']},
{id:9,brand:'رَسا',name:'لوفر نیکا',category:'کفش',price:8700000,image:img('1542291026-7eec264c27ff'),alt:'لوفر',colors:['مشکی','کرم']},
{id:10,brand:'هیراد',name:'ژاکت بافت آرتا',category:'پوشاک',price:6100000,image:img('1434389677669-e08b4cac3105'),alt:'ژاکت بافت',colors:['استخوانی']},
{id:11,brand:'دُرسا',name:'کیف شانه‌ای لیان',category:'کیف',price:7600000,image:img('1594223274512-ad4803739b7d'),alt:'کیف شانه‌ای',colors:['مشکی']},
{id:12,brand:'سایه',name:'روسری ابریشم آینه',category:'اکسسوری',price:2800000,image:img('1529139575747-1d6f8a2f5e2f'),alt:'روسری ابریشمی',colors:['زیتونی','کرم']}
]

export const brands:Brand[]=[
{name:'نُما',story:'سادگی دقیق، برش‌های آرام و نگاه معاصر.',image:img('1529139575747-1d6f8a2f5e2f',1000,1200)},
{name:'وِرا',story:'چرم، فرم و جزئیاتی برای ماندن.',image:img('1490481651871-ab68de25d43d',1000,1200)},
{name:'آوان',story:'لباس‌هایی برای ریتم آرام زندگی شهری.',image:img('1496747611176-843222e1e57c',1000,1200)},
{name:'رَسا',story:'ساختار کلاسیک با زاویه‌ای امروزی.',image:img('1542291026-7eec264c27ff',1000,1200)},
{name:'هیراد',story:'بافت و متریال در زبان مینیمال.',image:img('1434389677669-e08b4cac3105',1000,1200)},
{name:'دُرسا',story:'اکسسوری‌های روزمره با شخصیت مستقل.',image:img('1594223274512-ad4803739b7d',1000,1200)},
{name:'سایه',story:'ظرافتی آرام، الهام‌گرفته از معماری ایرانی.',image:img('1529139575747-1d6f8a2f5e2f',1000,1200)},
{name:'ماهین',story:'تعادل میان فرم، حرکت و نور.',image:img('1515886657613-9f3515b0c78f',1000,1200)}
]

export const articles:Article[]=[
{title:'چگونه یک کمد مینیمال بسازیم؟',category:'راهنمای استایل',image:img('1529139575747-1d6f8a2f5e2f'),excerpt:'انتخاب کمتر، اما دقیق‌تر؛ نگاهی به قطعاتی که فصل‌ها را پشت سر می‌گذارند.'},
{title:'زبان تازه‌ی پوشش معاصر',category:'پیشنهاد سردبیر',image:img('1496747611176-843222e1e57c'),excerpt:'از تناسب و متریال تا سکوت رنگ؛ عناصر یک استایل ماندگار.'},
{title:'پشت صحنه‌ی یک کالکشن',category:'پشت صحنه',image:img('1543163521-1d3e6b4d8f5e'),excerpt:'وقتی ایده، پارچه و دست انسان کنار هم قرار می‌گیرند.'}
]
