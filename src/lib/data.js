export const LS=(k,v)=>{try{if(v===undefined)return JSON.parse(localStorage.getItem(k));localStorage.setItem(k,JSON.stringify(v))}catch(e){return null}};
export const fmt=n=>'₹'+Number(n).toLocaleString('en-IN'),T=()=>new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
// 85,00,000 -> ₹85 Lakh, 1,25,00,000 -> ₹1.25 Cr
export const fmtP=n=>{n=Number(n);const t=x=>String(+x.toFixed(2));return n>=1e7?'₹'+t(n/1e7)+' Cr':n>=1e5?'₹'+t(n/1e5)+' Lakh':fmt(n)};
export const pr=p=>fmtP(p.price);
// "50 lakh", "1.2 cr", "75L", "5000000" -> number
export const parseAmt=s=>{s=String(s).toLowerCase().replace(/[,₹\s]/g,'');const n=parseFloat(s.replace(/[^\d.]/g,''));if(!n)return 0;if(/cr/.test(s))return n*1e7;if(/l(a|k)|\dl$|lac/.test(s))return n*1e5;if(/k/.test(s))return n*1e3;return n};
export const iso=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
export const dl=s=>new Date(s+'T00:00').toLocaleDateString('en-IN',{day:'numeric',month:'long',year:'numeric'});
export const sha=async s=>[...new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s)))].map(b=>b.toString(16).padStart(2,'0')).join('');
export const AM=['Lift','Security','Balcony','Gym','Swimming Pool','Power Backup','Water Supply','Air Conditioning','Washing Machine','Refrigerator','Gated Society','Pet Friendly'];
export const A1=['Lift','Security','Power Backup','Water Supply'],A2=[...A1,'Gym','Gated Society','Balcony'],A3=['Water Supply','Security','Balcony','Pet Friendly'],A4=[...A2,'Swimming Pool','Air Conditioning','Washing Machine','Refrigerator'];
// Properties FOR SALE. Sample data = stand-in for the MySQL Property table; replace with real listings.
// price in rupees, area in sq ft, cond = 'New' | 'Resale', days = days until possession (0 = ready to move)
export const mkb=(id,name,city,loc,price,bhk,furn,park,am,days,cond,area,h)=>({id,name,type:'buy',city,loc,price,area,psf:Math.round(price/area/10)*10,cond,rera:cond==='New',maint:Math.round(area*3/100)*100,bhk,furn,park,am,days,h,ok:true});
export const P=[
mkb(101,'Dharampeth Heritage Flats','Nagpur','Dharampeth',6800000,'2 BHK','Semi-Furnished','Both',A2,0,'Resale',1050,40),
mkb(102,'Manish Nagar Meadows','Nagpur','Manish Nagar',4500000,'2 BHK','Unfurnished','Two Wheeler',A1,0,'Resale',950,75),
mkb(103,'Pratap Nagar Premier','Nagpur','Pratap Nagar',5600000,'3 BHK','Unfurnished','Both',A2,180,'New',1300,200),
mkb(104,'Wardha Road Vista','Nagpur','Wardha Road',3200000,'1 BHK','Unfurnished','Two Wheeler',A1,90,'New',620,160),
mkb(105,'Sadar Signature House','Nagpur','Sadar',12500000,'Independent House','Semi-Furnished','Four Wheeler',A3,0,'Resale',2400,25),
mkb(106,'Hinjewadi Skyline Towers','Pune','Hinjewadi',8500000,'2 BHK','Unfurnished','Both',A2,0,'New',900,210),
mkb(107,'Phase 1 Pinnacle','Pune','Hinjewadi',5800000,'1 BHK','Semi-Furnished','Two Wheeler',A2,0,'Resale',640,150),
mkb(108,'Baner Bliss','Pune','Baner',13500000,'3 BHK','Semi-Furnished','Both',A4,120,'New',1400,300),
mkb(109,'Wakad Wonders','Pune','Wakad',9200000,'2 BHK','Unfurnished','Both',A2,0,'Resale',1000,260),
mkb(110,'Kothrud Courtyard','Pune','Kothrud',11000000,'2 BHK','Semi-Furnished','Both',A2,0,'Resale',1050,330),
mkb(111,'Andheri Arcade','Mumbai','Andheri',16500000,'1 BHK','Semi-Furnished','Two Wheeler',A2,0,'Resale',520,20),
mkb(112,'Powai Panorama','Mumbai','Powai',34000000,'2 BHK','Fully Furnished','Four Wheeler',A4,0,'Resale',950,195),
mkb(113,'Thane Trinity','Mumbai','Thane',12500000,'2 BHK','Unfurnished','Both',A2,365,'New',720,100),
mkb(114,'Goregaon Gardens','Mumbai','Goregaon',21000000,'2 BHK','Semi-Furnished','Two Wheeler',A2,0,'Resale',780,140),
mkb(115,'Whitefield Woods','Bangalore','Whitefield',12500000,'2 BHK','Unfurnished','Both',A4,0,'New',1150,280),
mkb(116,'HSR Heights','Bangalore','HSR Layout',19500000,'3 BHK','Semi-Furnished','Both',A2,0,'Resale',1500,225),
mkb(117,'Electronic City Elite','Bangalore','Electronic City',6500000,'1 BHK','Unfurnished','Two Wheeler',A1,0,'Resale',680,185),
mkb(118,'Gachibowli Grandeur','Hyderabad','Gachibowli',14500000,'3 BHK','Unfurnished','Both',A4,0,'New',1650,240),
mkb(119,'Kondapur Crest','Hyderabad','Kondapur',9800000,'2 BHK','Semi-Furnished','Both',A2,0,'Resale',1150,15),
mkb(120,'Dwarka Daffodils','Delhi NCR','Dwarka',9500000,'2 BHK','Unfurnished','Both',A2,0,'Resale',900,200),
mkb(121,'Noida Sector 62 Residency','Delhi NCR','Noida Sector 62',8200000,'2 BHK','Semi-Furnished','Two Wheeler',A2,0,'Resale',1050,175),
mkb(122,'Velachery Vistas','Chennai','Velachery',9000000,'2 BHK','Unfurnished','Both',A2,0,'Resale',1000,190),
mkb(123,'OMR Orchard','Chennai','OMR',8800000,'2 BHK','Semi-Furnished','Both',A4,150,'New',1020,215)];
export const avail=p=>p.days?`Possession in ${p.days>=60?Math.round(p.days/30)+' months':p.days+' days'}`:'Ready to move';
export function locOk(p,a){const L=a.locality||[];return !L.length||L.some(l=>{l=l.toLowerCase();const x=p.loc.toLowerCase();return x.includes(l)||l.includes(x)})}
export const BUD={'Under ₹30 Lakh':[0,3e6],'₹30L–60L':[3e6,6e6],'₹60L–1 Cr':[6e6,1e7],'₹1 Cr–2 Cr':[1e7,2e7],'₹2 Cr+':[2e7,1e10]};
export const rng=b=>BUD[b]||[0,parseAmt(b)||1e10];
export const STEPS=[
{k:'city',l:'City',t:'s',q:'Which city are you looking to buy a property in?',o:['Pune','Mumbai','Bangalore','Hyderabad','Delhi NCR','Chennai','Nagpur','Other']},
{k:'locality',l:'Locality',t:'m',q:a=>`Which area or locality in ${a.city} do you prefer? Pick suggestions, or type a locality / landmark. You can add several.`,o:a=>[...new Set(P.filter(p=>p.city===a.city).map(p=>p.loc))]},
{k:'tenant',l:'Purpose',t:'s',q:'Who will be living in the property? Or is it an investment?',o:['Family','Working Professional','Couple','Bachelor','Investment','Other']},
{k:'bhk',l:'Type',t:'s',q:'What type of home would you like to buy?',o:['1 BHK','2 BHK','3 BHK','4 BHK','Independent House']},
{k:'budget',l:'Budget',t:'s',ph:'Or type a custom max, e.g. 75 lakh or 1.2 cr',q:'What is your total purchase budget? Pick a range or type a custom maximum like 75 lakh or 1.2 cr.',o:Object.keys(BUD)},
{k:'furn',l:'Furnishing',t:'s',q:'What furnishing type do you prefer?',o:['Unfurnished','Semi-Furnished','Fully Furnished','No Preference']},
{k:'park',l:'Parking',t:'s',q:'Do you need parking?',o:['Two Wheeler','Four Wheeler','Both','No Parking Required']},
{k:'am',l:'Amenities',t:'m',q:'Which amenities do you need? Select all that apply.',o:AM,nt:1},
{k:'move',l:'Possession',t:'s',q:'When would you like possession?',o:['Ready to Move','Within 3 Months','Within 6 Months','1 Year or more','Flexible']},
{k:'extra',l:'Notes',t:'x',q:'Any additional requirements? Type freely, or skip.'}];
export const ACK=['Great choice!','Noted 👍','Perfect.','Got it!','Sounds good.'];
export const SLOTS=['09:30','10:00','10:30','11:00','11:30','12:00','14:00','14:30','15:00','16:00','16:30','17:00','18:00','18:30'];
export const tl=t=>{const[h,m]=t.split(':');return(+h%12||12)+':'+m+(+h<12?' AM':' PM')};
export function score(p,a){if(!p.ok||p.city!==a.city)return 0;let s=10;
 if(locOk(p,a))s+=25;
 if(!a.bhk||a.bhk===p.bhk)s+=20;
 const[lo,hi]=rng(a.budget||'₹2 Cr+');if(p.price>=lo&&p.price<=hi)s+=20;else if(p.price<=hi*1.15)s+=8;
 if(!a.furn||a.furn==='No Preference'||a.furn===p.furn)s+=8;if(!a.park||a.park==='No Parking Required'||p.park==='Both'||p.park===a.park)s+=5;
 const A=a.am||[];s+=A.length?Math.round(7*A.filter(x=>p.am.includes(x)).length/A.length):7;
 if(a.move==='Ready to Move'&&p.days>0)s-=10;
 return Math.max(0,Math.min(100,s+5))}