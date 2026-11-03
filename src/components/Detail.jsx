import {useState,useEffect,useRef} from 'react';
import {html} from '../html.js';
import {LS,fmt,T,iso,dl,sha,AM,P,BUD,rng,STEPS,ACK,SLOTS,tl,score} from '../lib/data.js';
import {Pic,Ic,I,Logo} from './ui.jsx';
export default function Detail({p,onBook,onClose}){return html`<div className="up"><div className="flex justify-between items-center mb-3"><b>Property details</b><button onClick=${onClose} className="text-slate-400"><${Ic} d=${I.x}/></button></div>
 <div className="grid grid-cols-3 gap-1 h-32 rounded-2xl overflow-hidden"><${Pic} p=${p} c="col-span-2"/><div className="grid grid-rows-2 gap-1"><${Pic} p=${p} i=${1}/><${Pic} p=${p} i=${2}/></div></div>
 <div className="text-[10px] text-slate-400 mt-1">Illustrated previews. Real photos plug in via admin upload.</div>
 <h3 className="font-extrabold text-xl mt-2">${p.name}</h3><p className="text-sm text-slate-500">${p.loc}, ${p.city}</p>
 <div className="grid grid-cols-2 gap-2 mt-3 text-sm">${[['Rent',fmt(p.rent)+'/mo'],['Deposit',fmt(p.dep)],['Maintenance',fmt(p.maint)+'/mo'],['BHK',p.bhk],['Furnishing',p.furn],['Parking',p.park],['Available',p.days?`In ${p.days} days`:'Immediately'],['Suits',p.ten.slice(0,2).join(', ')]].map(([a,b])=>html`<div key=${a} className="bg-ivory rounded-xl p-2.5"><div className="text-[11px] text-slate-500">${a}</div><div className="font-bold">${b}</div></div>`)}</div>
 <div className="mt-3 text-sm"><b>Amenities</b><div className="flex flex-wrap gap-1 mt-1">${p.am.map(a=>html`<span key=${a} className="text-xs bg-em/10 text-em rounded-full px-2 py-1 font-semibold">${a}</span>`)}</div></div>
 <div className="mt-3 text-sm bg-ivory rounded-xl p-3"><b>Listed by</b><br/>Nivara Verified Agent Desk</div>
 <a target="_blank" rel="noreferrer" href=${'https://www.google.com/maps/search/'+encodeURIComponent(p.name+' '+p.loc+' '+p.city)} className="mt-3 block text-center text-sm font-bold text-navy border border-navy/20 rounded-xl py-2">Open map location ↗</a>
 <button onClick=${onBook} className="mt-2 w-full bg-em text-white rounded-xl py-3 font-bold">Book Visit</button></div>`}

