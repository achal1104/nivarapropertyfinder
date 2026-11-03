// // export const LS=(k,v)=>{try{if(v===undefined)return JSON.parse(localStorage.getItem(k));localStorage.setItem(k,JSON.stringify(v))}catch(e){return null}};
// // export const fmt=n=>'₹'+Number(n).toLocaleString('en-IN'),T=()=>new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
// // export const iso=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
// // export const dl=s=>new Date(s+'T00:00').toLocaleDateString('en-IN',{day:'numeric',month:'long',year:'numeric'});
// // export const sha=async s=>[...new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s)))].map(b=>b.toString(16).padStart(2,'0')).join('');
// // export const AM=['Lift','Security','Balcony','Gym','Swimming Pool','Power Backup','Water Supply','Air Conditioning','Washing Machine','Refrigerator','Gated Society','Pet Friendly'];
// // export const ALL=['Bachelor','Working Professional','Couple','Family','Students'];
// // // Sample listings = stand-in for the MySQL Property table (verified + available flags are what the matcher reads)
// // export const mk=(id,name,city,loc,rent,bhk,furn,park,am,days,ten,h)=>({id,name,city,loc,rent,dep:rent*3,maint:Math.round(rent*.06/100)*100,bhk,furn,park,am,days,ten,h,ok:true});
// // export const P=[
// // mk(1,'Skyline Residency','Pune','Hinjewadi',22000,'2 BHK','Semi-Furnished','Both',['Lift','Security','Power Backup','Gated Society','Balcony','Water Supply'],0,ALL,210),
// // mk(2,'Greenview Heights','Pune','Hinjewadi',28000,'2 BHK','Fully Furnished','Both',['Lift','Gym','Swimming Pool','Security','Air Conditioning','Washing Machine','Refrigerator','Gated Society'],10,ALL,150),
// // mk(3,'Palm Court','Pune','Baner',15000,'1 BHK','Fully Furnished','Two Wheeler',['Lift','Security','Power Backup','Washing Machine'],0,['Bachelor','Working Professional','Couple'],30),
// // mk(4,'Orchid Nest','Pune','Kothrud',12000,'1 BHK','Unfurnished','Two Wheeler',['Water Supply','Balcony','Pet Friendly'],20,ALL,330),
// // mk(5,'Wakad Elite','Pune','Wakad',35000,'3 BHK','Semi-Furnished','Both',['Lift','Gym','Security','Gated Society','Power Backup'],30,['Family','Working Professional'],260),
// // mk(6,'Lakeview Towers','Mumbai','Powai',55000,'2 BHK','Fully Furnished','Four Wheeler',['Lift','Gym','Swimming Pool','Security','Air Conditioning'],5,['Family','Couple','Working Professional'],195),
// // mk(7,'Sea Breeze','Mumbai','Andheri',38000,'1 BHK','Semi-Furnished','Two Wheeler',['Lift','Security','Power Backup'],0,['Couple','Working Professional','Bachelor'],20),
// // mk(8,'Tech Park Residency','Bangalore','Whitefield',30000,'2 BHK','Semi-Furnished','Both',['Lift','Gym','Security','Gated Society','Power Backup'],0,ALL,280),
// // mk(9,'Koramangala Studio','Bangalore','Koramangala',18000,'Studio Apartment','Fully Furnished','Two Wheeler',['Security','Air Conditioning','Refrigerator','Washing Machine'],15,['Bachelor','Working Professional','Couple'],170),
// // mk(10,'Dharampeth Villa','Nagpur','Dharampeth',25000,'3 BHK','Semi-Furnished','Both',['Security','Balcony','Water Supply','Pet Friendly','Power Backup'],0,['Family'],120),
// // mk(11,'Nest Homes','Nagpur','Manish Nagar',12000,'2 BHK','Unfurnished','Both',['Lift','Water Supply','Security'],10,ALL,70),
// // mk(12,'Gachibowli Grand','Hyderabad','Gachibowli',32000,'3 BHK','Fully Furnished','Both',['Lift','Gym','Swimming Pool','Security','Gated Society'],0,['Family','Working Professional'],240)];
// // export const BUD={'Under ₹10k':[0,1e4],'₹10k–20k':[1e4,2e4],'₹20k–35k':[2e4,35e3],'₹35k–60k':[35e3,6e4],'₹60k+':[6e4,1e8]};
// // export const rng=b=>BUD[b]||[0,parseInt(String(b).replace(/\D/g,''))||1e8];
// // export const STEPS=[
// // {k:'city',l:'City',t:'s',q:'Which city are you looking for a property in?',o:['Pune','Mumbai','Bangalore','Hyderabad','Delhi NCR','Chennai','Nagpur','Other']},
// // {k:'locality',l:'Locality',t:'m',q:a=>`Which area or locality in ${a.city} do you prefer? Pick suggestions, or type a locality / landmark. You can add several.`,o:a=>[...new Set(P.filter(p=>p.city===a.city).map(p=>p.loc))]},
// // {k:'tenant',l:'Staying',t:'s',q:'Who will be staying in the property?',o:['Bachelor','Working Professional','Couple','Family','Students','Other']},
// // {k:'bhk',l:'Type',t:'s',q:a=>a.tenant==='Family'?'Since a family will be staying, 2 BHK or larger usually works well. What type of property are you looking for?':'What type of property are you looking for?',o:['1 RK','1 BHK','2 BHK','3 BHK','4 BHK','Independent House','Studio Apartment']},
// // {k:'budget',l:'Budget',t:'s',ph:'Or type a custom max, e.g. 25000',q:'What is your monthly rental budget?',o:Object.keys(BUD)},
// // {k:'furn',l:'Furnishing',t:'s',q:'What furnishing type do you prefer?',o:['Unfurnished','Semi-Furnished','Fully Furnished','No Preference']},
// // {k:'park',l:'Parking',t:'s',q:'Do you need parking?',o:['Two Wheeler','Four Wheeler','Both','No Parking Required']},
// // {k:'am',l:'Amenities',t:'m',q:'Which amenities do you need? Select all that apply.',o:AM,nt:1},
// // {k:'move',l:'Move-in',t:'s',q:'When do you want to move in?',o:['Immediately','Within 15 Days','Within 30 Days','Within 2 Months','Flexible']},
// // {k:'extra',l:'Notes',t:'x',q:'Any additional requirements? Type freely, or skip.'}];
// // export const ACK=['Great choice!','Noted 👍','Perfect.','Got it!','Sounds good.'];
// // export const SLOTS=['09:30','10:00','10:30','11:00','11:30','12:00','14:00','14:30','15:00','16:00','16:30','17:00','18:00','18:30'];
// // export const tl=t=>{const[h,m]=t.split(':');return(+h%12||12)+':'+m+(+h<12?' AM':' PM')};
// // export function score(p,a){if(!p.ok||p.city!==a.city)return 0;let s=10;const L=a.locality||[];
// //  if(!L.length||L.some(l=>{l=l.toLowerCase();const x=p.loc.toLowerCase();return x.includes(l)||l.includes(x)}))s+=25;
// //  if(!a.bhk||a.bhk===p.bhk)s+=20;const[lo,hi]=rng(a.budget||'₹60k+');if(p.rent>=lo&&p.rent<=hi)s+=20;else if(p.rent<=hi*1.15)s+=8;
// //  if(!a.furn||a.furn==='No Preference'||a.furn===p.furn)s+=8;if(!a.park||a.park==='No Parking Required'||p.park==='Both'||p.park===a.park)s+=5;
// //  const A=a.am||[];s+=A.length?Math.round(7*A.filter(x=>p.am.includes(x)).length/A.length):7;
// //  if(!a.tenant||a.tenant==='Other'||p.ten.includes(a.tenant))s+=5;else s-=20;return Math.max(0,Math.min(100,s))}
// export const LS=(k,v)=>{try{if(v===undefined)return JSON.parse(localStorage.getItem(k));localStorage.setItem(k,JSON.stringify(v))}catch(e){return null}};
// export const fmt=n=>'₹'+Number(n).toLocaleString('en-IN'),T=()=>new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
// export const iso=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
// export const dl=s=>new Date(s+'T00:00').toLocaleDateString('en-IN',{day:'numeric',month:'long',year:'numeric'});
// export const sha=async s=>[...new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s)))].map(b=>b.toString(16).padStart(2,'0')).join('');
// export const AM=['Lift','Security','Balcony','Gym','Swimming Pool','Power Backup','Water Supply','Air Conditioning','Washing Machine','Refrigerator','Gated Society','Pet Friendly'];
// export const ALL=['Bachelor','Working Professional','Couple','Family','Students'];
// // Sample listings = stand-in for the MySQL Property table (verified + available flags are what the matcher reads)
// export const mk=(id,name,city,loc,rent,bhk,furn,park,am,days,ten,h)=>({id,name,city,loc,rent,dep:rent*3,maint:Math.round(rent*.06/100)*100,bhk,furn,park,am,days,ten,h,ok:true});
// export const P=[
// mk(1,'Skyline Residency','Pune','Hinjewadi',22000,'2 BHK','Semi-Furnished','Both',['Lift','Security','Power Backup','Gated Society','Balcony','Water Supply'],0,ALL,210),
// mk(2,'Greenview Heights','Pune','Hinjewadi',28000,'2 BHK','Fully Furnished','Both',['Lift','Gym','Swimming Pool','Security','Air Conditioning','Washing Machine','Refrigerator','Gated Society'],10,ALL,150),
// mk(3,'Palm Court','Pune','Baner',15000,'1 BHK','Fully Furnished','Two Wheeler',['Lift','Security','Power Backup','Washing Machine'],0,['Bachelor','Working Professional','Couple'],30),
// mk(4,'Orchid Nest','Pune','Kothrud',12000,'1 BHK','Unfurnished','Two Wheeler',['Water Supply','Balcony','Pet Friendly'],20,ALL,330),
// mk(5,'Wakad Elite','Pune','Wakad',35000,'3 BHK','Semi-Furnished','Both',['Lift','Gym','Security','Gated Society','Power Backup'],30,['Family','Working Professional'],260),
// mk(6,'Lakeview Towers','Mumbai','Powai',55000,'2 BHK','Fully Furnished','Four Wheeler',['Lift','Gym','Swimming Pool','Security','Air Conditioning'],5,['Family','Couple','Working Professional'],195),
// mk(7,'Sea Breeze','Mumbai','Andheri',38000,'1 BHK','Semi-Furnished','Two Wheeler',['Lift','Security','Power Backup'],0,['Couple','Working Professional','Bachelor'],20),
// mk(8,'Tech Park Residency','Bangalore','Whitefield',30000,'2 BHK','Semi-Furnished','Both',['Lift','Gym','Security','Gated Society','Power Backup'],0,ALL,280),
// mk(9,'Koramangala Studio','Bangalore','Koramangala',18000,'Studio Apartment','Fully Furnished','Two Wheeler',['Security','Air Conditioning','Refrigerator','Washing Machine'],15,['Bachelor','Working Professional','Couple'],170),
// mk(10,'Dharampeth Villa','Nagpur','Dharampeth',25000,'3 BHK','Semi-Furnished','Both',['Security','Balcony','Water Supply','Pet Friendly','Power Backup'],0,['Family'],120),
// mk(11,'Nest Homes','Nagpur','Manish Nagar',12000,'2 BHK','Unfurnished','Both',['Lift','Water Supply','Security'],10,ALL,70),
// mk(12,'Gachibowli Grand','Hyderabad','Gachibowli',32000,'3 BHK','Fully Furnished','Both',['Lift','Gym','Swimming Pool','Security','Gated Society'],0,['Family','Working Professional'],240)];
// export const A1=['Lift','Security','Power Backup','Water Supply'],A2=[...A1,'Gym','Gated Society','Balcony'],A3=['Water Supply','Security','Balcony','Pet Friendly'],A4=[...A2,'Swimming Pool','Air Conditioning','Washing Machine','Refrigerator'];
// const T3=['Bachelor','Working Professional','Couple'],T2=['Family','Working Professional'];
// P.push(
// mk(13,'Bandra Bay Apartments','Mumbai','Bandra',62000,'2 BHK','Fully Furnished','Four Wheeler',A4,5,T2,300),
// mk(14,'Goregaon Greens','Mumbai','Goregaon',32000,'1 BHK','Semi-Furnished','Two Wheeler',A2,0,ALL,140),
// mk(15,'Thane Skyview','Mumbai','Thane',24000,'2 BHK','Unfurnished','Both',A1,15,ALL,100),
// mk(16,'HSR Habitat','Bangalore','HSR Layout',34000,'2 BHK','Semi-Furnished','Both',A2,0,ALL,225),
// mk(17,'Indiranagar Loft','Bangalore','Indiranagar',42000,'2 BHK','Fully Furnished','Two Wheeler',A4,10,T2,35),
// mk(18,'Electronic City Nest','Bangalore','Electronic City',16000,'1 BHK','Unfurnished','Two Wheeler',A1,0,T3,185),
// mk(19,'Hitech Heights','Hyderabad','Hitech City',36000,'2 BHK','Fully Furnished','Both',A4,0,ALL,205),
// mk(20,'Madhapur Meadows','Hyderabad','Madhapur',22000,'1 BHK','Semi-Furnished','Two Wheeler',A2,5,T3,160),
// mk(21,'Kondapur Court','Hyderabad','Kondapur',27000,'2 BHK','Semi-Furnished','Both',A2,0,ALL,15),
// mk(22,'Kukatpally Homes','Hyderabad','Kukatpally',14000,'1 BHK','Unfurnished','Two Wheeler',A1,0,ALL,300),
// mk(23,'Sadar Residency','Nagpur','Sadar',18000,'2 BHK','Semi-Furnished','Both',A2,0,ALL,110),
// mk(24,'Pratap Nagar Palms','Nagpur','Pratap Nagar',14000,'2 BHK','Unfurnished','Two Wheeler',A1,7,ALL,60),
// mk(25,'Wardha Road Studio','Nagpur','Wardha Road',9000,'1 RK','Fully Furnished','Two Wheeler',A3,0,T3,250),
// mk(26,'Dwarka Dale','Delhi NCR','Dwarka',26000,'2 BHK','Semi-Furnished','Both',A2,0,ALL,200),
// mk(27,'Noida Sector 62 Suites','Delhi NCR','Noida Sector 62',21000,'1 BHK','Fully Furnished','Two Wheeler',A4,0,T3,175),
// mk(28,'Gurgaon Grand','Delhi NCR','Gurgaon Sector 56',45000,'3 BHK','Fully Furnished','Four Wheeler',A4,10,T2,25),
// mk(29,'Saket Square','Delhi NCR','Saket',38000,'2 BHK','Semi-Furnished','Two Wheeler',A2,0,ALL,320),
// mk(30,'Vasant Kunj Villas','Delhi NCR','Vasant Kunj',70000,'4 BHK','Fully Furnished','Both',A4,20,['Family'],90),
// mk(31,'Velachery View','Chennai','Velachery',20000,'2 BHK','Semi-Furnished','Both',A2,0,ALL,190),
// mk(32,'OMR Oasis','Chennai','OMR',28000,'2 BHK','Fully Furnished','Both',A4,0,T2,215),
// mk(33,'Anna Nagar Arcade','Chennai','Anna Nagar',24000,'3 BHK','Unfurnished','Two Wheeler',A1,10,['Family'],45),
// mk(34,'Adyar Riverside','Chennai','Adyar',33000,'2 BHK','Fully Furnished','Both',A4,0,ALL,170),
// mk(35,'T Nagar Studio','Chennai','T Nagar',13000,'Studio Apartment','Fully Furnished','Two Wheeler',A3,0,T3,320));
// export const BUD={'Under ₹10k':[0,1e4],'₹10k–20k':[1e4,2e4],'₹20k–35k':[2e4,35e3],'₹35k–60k':[35e3,6e4],'₹60k+':[6e4,1e8]};
// export const rng=b=>BUD[b]||[0,parseInt(String(b).replace(/\D/g,''))||1e8];
// export const STEPS=[
// {k:'city',l:'City',t:'s',q:'Which city are you looking for a property in?',o:['Pune','Mumbai','Bangalore','Hyderabad','Delhi NCR','Chennai','Nagpur','Other']},
// {k:'locality',l:'Locality',t:'m',q:a=>`Which area or locality in ${a.city} do you prefer? Pick suggestions, or type a locality / landmark. You can add several.`,o:a=>[...new Set(P.filter(p=>p.city===a.city).map(p=>p.loc))]},
// {k:'tenant',l:'Staying',t:'s',q:'Who will be staying in the property?',o:['Bachelor','Working Professional','Couple','Family','Students','Other']},
// {k:'bhk',l:'Type',t:'s',q:a=>a.tenant==='Family'?'Since a family will be staying, 2 BHK or larger usually works well. What type of property are you looking for?':'What type of property are you looking for?',o:['1 RK','1 BHK','2 BHK','3 BHK','4 BHK','Independent House','Studio Apartment']},
// {k:'budget',l:'Budget',t:'s',ph:'Or type a custom max, e.g. 25000',q:'What is your monthly rental budget?',o:Object.keys(BUD)},
// {k:'furn',l:'Furnishing',t:'s',q:'What furnishing type do you prefer?',o:['Unfurnished','Semi-Furnished','Fully Furnished','No Preference']},
// {k:'park',l:'Parking',t:'s',q:'Do you need parking?',o:['Two Wheeler','Four Wheeler','Both','No Parking Required']},
// {k:'am',l:'Amenities',t:'m',q:'Which amenities do you need? Select all that apply.',o:AM,nt:1},
// {k:'move',l:'Move-in',t:'s',q:'When do you want to move in?',o:['Immediately','Within 15 Days','Within 30 Days','Within 2 Months','Flexible']},
// {k:'extra',l:'Notes',t:'x',q:'Any additional requirements? Type freely, or skip.'}];
// export const ACK=['Great choice!','Noted 👍','Perfect.','Got it!','Sounds good.'];
// export const SLOTS=['09:30','10:00','10:30','11:00','11:30','12:00','14:00','14:30','15:00','16:00','16:30','17:00','18:00','18:30'];
// export const tl=t=>{const[h,m]=t.split(':');return(+h%12||12)+':'+m+(+h<12?' AM':' PM')};
// export function score(p,a){if(!p.ok||p.city!==a.city)return 0;let s=10;const L=a.locality||[];
//  if(!L.length||L.some(l=>{l=l.toLowerCase();const x=p.loc.toLowerCase();return x.includes(l)||l.includes(x)}))s+=25;
//  if(!a.bhk||a.bhk===p.bhk)s+=20;const[lo,hi]=rng(a.budget||'₹60k+');if(p.rent>=lo&&p.rent<=hi)s+=20;else if(p.rent<=hi*1.15)s+=8;
//  if(!a.furn||a.furn==='No Preference'||a.furn===p.furn)s+=8;if(!a.park||a.park==='No Parking Required'||p.park==='Both'||p.park===a.park)s+=5;
//  const A=a.am||[];s+=A.length?Math.round(7*A.filter(x=>p.am.includes(x)).length/A.length):7;
//  if(!a.tenant||a.tenant==='Other'||p.ten.includes(a.tenant))s+=5;else s-=20;return Math.max(0,Math.min(100,s))}


export const LS=(k,v)=>{try{if(v===undefined)return JSON.parse(localStorage.getItem(k));localStorage.setItem(k,JSON.stringify(v))}catch(e){return null}};
export const fmt=n=>'₹'+Number(n).toLocaleString('en-IN'),T=()=>new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
export const iso=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
export const dl=s=>new Date(s+'T00:00').toLocaleDateString('en-IN',{day:'numeric',month:'long',year:'numeric'});
export const sha=async s=>[...new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s)))].map(b=>b.toString(16).padStart(2,'0')).join('');
export const AM=['Lift','Security','Balcony','Gym','Swimming Pool','Power Backup','Water Supply','Air Conditioning','Washing Machine','Refrigerator','Gated Society','Pet Friendly'];
export const ALL=['Bachelor','Working Professional','Couple','Family','Students'];
// Sample listings = stand-in for the MySQL Property table (verified + available flags are what the matcher reads)
export const mk=(id,name,city,loc,rent,bhk,furn,park,am,days,ten,h)=>({id,name,city,loc,rent,dep:rent*3,maint:Math.round(rent*.06/100)*100,bhk,furn,park,am,days,ten,h,ok:true});
export const P=[
mk(1,'Skyline Residency','Pune','Hinjewadi',22000,'2 BHK','Semi-Furnished','Both',['Lift','Security','Power Backup','Gated Society','Balcony','Water Supply'],0,ALL,210),
mk(2,'Greenview Heights','Pune','Hinjewadi',28000,'2 BHK','Fully Furnished','Both',['Lift','Gym','Swimming Pool','Security','Air Conditioning','Washing Machine','Refrigerator','Gated Society'],10,ALL,150),
mk(3,'Palm Court','Pune','Baner',15000,'1 BHK','Fully Furnished','Two Wheeler',['Lift','Security','Power Backup','Washing Machine'],0,['Bachelor','Working Professional','Couple'],30),
mk(4,'Orchid Nest','Pune','Kothrud',12000,'1 BHK','Unfurnished','Two Wheeler',['Water Supply','Balcony','Pet Friendly'],20,ALL,330),
mk(5,'Wakad Elite','Pune','Wakad',35000,'3 BHK','Semi-Furnished','Both',['Lift','Gym','Security','Gated Society','Power Backup'],30,['Family','Working Professional'],260),
mk(6,'Lakeview Towers','Mumbai','Powai',55000,'2 BHK','Fully Furnished','Four Wheeler',['Lift','Gym','Swimming Pool','Security','Air Conditioning'],5,['Family','Couple','Working Professional'],195),
mk(7,'Sea Breeze','Mumbai','Andheri',38000,'1 BHK','Semi-Furnished','Two Wheeler',['Lift','Security','Power Backup'],0,['Couple','Working Professional','Bachelor'],20),
mk(8,'Tech Park Residency','Bangalore','Whitefield',30000,'2 BHK','Semi-Furnished','Both',['Lift','Gym','Security','Gated Society','Power Backup'],0,ALL,280),
mk(9,'Koramangala Studio','Bangalore','Koramangala',18000,'Studio Apartment','Fully Furnished','Two Wheeler',['Security','Air Conditioning','Refrigerator','Washing Machine'],15,['Bachelor','Working Professional','Couple'],170),
mk(10,'Dharampeth Villa','Nagpur','Dharampeth',25000,'3 BHK','Semi-Furnished','Both',['Security','Balcony','Water Supply','Pet Friendly','Power Backup'],0,['Family'],120),
mk(11,'Nest Homes','Nagpur','Manish Nagar',12000,'2 BHK','Unfurnished','Both',['Lift','Water Supply','Security'],10,ALL,70),
mk(12,'Gachibowli Grand','Hyderabad','Gachibowli',32000,'3 BHK','Fully Furnished','Both',['Lift','Gym','Swimming Pool','Security','Gated Society'],0,['Family','Working Professional'],240)];
export const A1=['Lift','Security','Power Backup','Water Supply'],A2=[...A1,'Gym','Gated Society','Balcony'],A3=['Water Supply','Security','Balcony','Pet Friendly'],A4=[...A2,'Swimming Pool','Air Conditioning','Washing Machine','Refrigerator'];
const T3=['Bachelor','Working Professional','Couple'],T2=['Family','Working Professional'];
P.push(
mk(13,'Bandra Bay Apartments','Mumbai','Bandra',62000,'2 BHK','Fully Furnished','Four Wheeler',A4,5,T2,300),
mk(14,'Goregaon Greens','Mumbai','Goregaon',32000,'1 BHK','Semi-Furnished','Two Wheeler',A2,0,ALL,140),
mk(15,'Thane Skyview','Mumbai','Thane',24000,'2 BHK','Unfurnished','Both',A1,15,ALL,100),
mk(16,'HSR Habitat','Bangalore','HSR Layout',34000,'2 BHK','Semi-Furnished','Both',A2,0,ALL,225),
mk(17,'Indiranagar Loft','Bangalore','Indiranagar',42000,'2 BHK','Fully Furnished','Two Wheeler',A4,10,T2,35),
mk(18,'Electronic City Nest','Bangalore','Electronic City',16000,'1 BHK','Unfurnished','Two Wheeler',A1,0,T3,185),
mk(19,'Hitech Heights','Hyderabad','Hitech City',36000,'2 BHK','Fully Furnished','Both',A4,0,ALL,205),
mk(20,'Madhapur Meadows','Hyderabad','Madhapur',22000,'1 BHK','Semi-Furnished','Two Wheeler',A2,5,T3,160),
mk(21,'Kondapur Court','Hyderabad','Kondapur',27000,'2 BHK','Semi-Furnished','Both',A2,0,ALL,15),
mk(22,'Kukatpally Homes','Hyderabad','Kukatpally',14000,'1 BHK','Unfurnished','Two Wheeler',A1,0,ALL,300),
mk(23,'Sadar Residency','Nagpur','Sadar',18000,'2 BHK','Semi-Furnished','Both',A2,0,ALL,110),
mk(24,'Pratap Nagar Palms','Nagpur','Pratap Nagar',14000,'2 BHK','Unfurnished','Two Wheeler',A1,7,ALL,60),
mk(25,'Wardha Road Studio','Nagpur','Wardha Road',9000,'1 RK','Fully Furnished','Two Wheeler',A3,0,T3,250),
mk(26,'Dwarka Dale','Delhi NCR','Dwarka',26000,'2 BHK','Semi-Furnished','Both',A2,0,ALL,200),
mk(27,'Noida Sector 62 Suites','Delhi NCR','Noida Sector 62',21000,'1 BHK','Fully Furnished','Two Wheeler',A4,0,T3,175),
mk(28,'Gurgaon Grand','Delhi NCR','Gurgaon Sector 56',45000,'3 BHK','Fully Furnished','Four Wheeler',A4,10,T2,25),
mk(29,'Saket Square','Delhi NCR','Saket',38000,'2 BHK','Semi-Furnished','Two Wheeler',A2,0,ALL,320),
mk(30,'Vasant Kunj Villas','Delhi NCR','Vasant Kunj',70000,'4 BHK','Fully Furnished','Both',A4,20,['Family'],90),
mk(31,'Velachery View','Chennai','Velachery',20000,'2 BHK','Semi-Furnished','Both',A2,0,ALL,190),
mk(32,'OMR Oasis','Chennai','OMR',28000,'2 BHK','Fully Furnished','Both',A4,0,T2,215),
mk(33,'Anna Nagar Arcade','Chennai','Anna Nagar',24000,'3 BHK','Unfurnished','Two Wheeler',A1,10,['Family'],45),
mk(34,'Adyar Riverside','Chennai','Adyar',33000,'2 BHK','Fully Furnished','Both',A4,0,ALL,170),
mk(35,'T Nagar Studio','Chennai','T Nagar',13000,'Studio Apartment','Fully Furnished','Two Wheeler',A3,0,T3,320));
P.push(
mk(36,'Rajiv Gandhi Infotech Residency','Pune','Hinjewadi',19000,'1 BHK','Fully Furnished','Two Wheeler',A2,0,T3,40),
mk(37,'Phase 2 Pearl','Pune','Hinjewadi',25000,'2 BHK','Semi-Furnished','Both',A2,5,ALL,185),
mk(38,'Hinjewadi Hillside','Pune','Hinjewadi',38000,'3 BHK','Fully Furnished','Both',A4,0,T2,230),
mk(39,'Maan Road Meadows','Pune','Hinjewadi',14000,'1 BHK','Unfurnished','Two Wheeler',A1,0,ALL,95),
mk(40,'Baner Boulevard','Pune','Baner',30000,'2 BHK','Fully Furnished','Both',A4,0,T2,270),
mk(41,'Pashan Link Homes','Pune','Baner',21000,'2 BHK','Semi-Furnished','Both',A2,10,ALL,120),
mk(42,'Wakad Walk','Pune','Wakad',23000,'2 BHK','Semi-Furnished','Both',A2,0,ALL,75),
mk(43,'Kothrud Kunj','Pune','Kothrud',27000,'2 BHK','Semi-Furnished','Both',A2,0,ALL,310),
mk(44,'Karve Road Court','Pune','Kothrud',17000,'1 BHK','Fully Furnished','Two Wheeler',A2,0,T3,20));
export function locOk(p,a){const L=a.locality||[];return !L.length||L.some(l=>{l=l.toLowerCase();const x=p.loc.toLowerCase();return x.includes(l)||l.includes(x)})}
export const BUD={'Under ₹10k':[0,1e4],'₹10k–20k':[1e4,2e4],'₹20k–35k':[2e4,35e3],'₹35k–60k':[35e3,6e4],'₹60k+':[6e4,1e8]};
export const rng=b=>BUD[b]||[0,parseInt(String(b).replace(/\D/g,''))||1e8];
export const STEPS=[
{k:'city',l:'City',t:'s',q:'Which city are you looking for a property in?',o:['Pune','Mumbai','Bangalore','Hyderabad','Delhi NCR','Chennai','Nagpur','Other']},
{k:'locality',l:'Locality',t:'m',q:a=>`Which area or locality in ${a.city} do you prefer? Pick suggestions, or type a locality / landmark. You can add several.`,o:a=>[...new Set(P.filter(p=>p.city===a.city).map(p=>p.loc))]},
{k:'tenant',l:'Staying',t:'s',q:'Who will be staying in the property?',o:['Bachelor','Working Professional','Couple','Family','Students','Other']},
{k:'bhk',l:'Type',t:'s',q:a=>a.tenant==='Family'?'Since a family will be staying, 2 BHK or larger usually works well. What type of property are you looking for?':'What type of property are you looking for?',o:['1 RK','1 BHK','2 BHK','3 BHK','4 BHK','Independent House','Studio Apartment']},
{k:'budget',l:'Budget',t:'s',ph:'Or type a custom max, e.g. 25000',q:'What is your monthly rental budget?',o:Object.keys(BUD)},
{k:'furn',l:'Furnishing',t:'s',q:'What furnishing type do you prefer?',o:['Unfurnished','Semi-Furnished','Fully Furnished','No Preference']},
{k:'park',l:'Parking',t:'s',q:'Do you need parking?',o:['Two Wheeler','Four Wheeler','Both','No Parking Required']},
{k:'am',l:'Amenities',t:'m',q:'Which amenities do you need? Select all that apply.',o:AM,nt:1},
{k:'move',l:'Move-in',t:'s',q:'When do you want to move in?',o:['Immediately','Within 15 Days','Within 30 Days','Within 2 Months','Flexible']},
{k:'extra',l:'Notes',t:'x',q:'Any additional requirements? Type freely, or skip.'}];
export const ACK=['Great choice!','Noted 👍','Perfect.','Got it!','Sounds good.'];
export const SLOTS=['09:30','10:00','10:30','11:00','11:30','12:00','14:00','14:30','15:00','16:00','16:30','17:00','18:00','18:30'];
export const tl=t=>{const[h,m]=t.split(':');return(+h%12||12)+':'+m+(+h<12?' AM':' PM')};
export function score(p,a){if(!p.ok||p.city!==a.city)return 0;let s=10;const L=a.locality||[];
 if(!L.length||L.some(l=>{l=l.toLowerCase();const x=p.loc.toLowerCase();return x.includes(l)||l.includes(x)}))s+=25;
 if(!a.bhk||a.bhk===p.bhk)s+=20;const[lo,hi]=rng(a.budget||'₹60k+');if(p.rent>=lo&&p.rent<=hi)s+=20;else if(p.rent<=hi*1.15)s+=8;
 if(!a.furn||a.furn==='No Preference'||a.furn===p.furn)s+=8;if(!a.park||a.park==='No Parking Required'||p.park==='Both'||p.park===a.park)s+=5;
 const A=a.am||[];s+=A.length?Math.round(7*A.filter(x=>p.am.includes(x)).length/A.length):7;
 if(!a.tenant||a.tenant==='Other'||p.ten.includes(a.tenant))s+=5;else s-=20;return Math.max(0,Math.min(100,s))}