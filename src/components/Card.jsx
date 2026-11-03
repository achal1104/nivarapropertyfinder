import {useState,useEffect,useRef} from 'react';
import {html} from '../html.js';
import {LS,fmt,T,iso,dl,sha,AM,P,BUD,rng,STEPS,ACK,SLOTS,tl,score} from '../lib/data.js';
import {Pic,Ic,I,Logo} from './ui.jsx';
export default function Card({p,s,saved,onView,onBook,onSave}){return html`<div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_20px_44px_-22px_rgba(23,43,77,.45)] hover:-translate-y-1.5 hover:shadow-[0_26px_50px_-20px_rgba(23,43,77,.55)] transition duration-300 w-72 shrink-0 up">
 <div className="relative"><div className="grid grid-cols-3 gap-0.5 h-36"><${Pic} p=${p} c="col-span-2"/><div className="grid grid-rows-2 gap-0.5"><${Pic} p=${p} i=${1}/><${Pic} p=${p} i=${2}/></div></div>
 <span className="absolute top-2 left-2 bg-gradient-to-r from-[#C8A25A] to-[#E8CE91] text-navy shadow-md text-xs font-extrabold px-2.5 py-1 rounded-full">${s}% Match</span>
 <button onClick=${onSave} className=${'absolute top-2 right-2 w-8 h-8 rounded-full bg-white/90 grid place-items-center '+(saved?'text-red-500':'text-navy')}><${Ic} d=${I.heart}/></button></div>
 <div className="p-4"><div className="font-bold">${p.name}</div><div className="text-xs text-slate-500 flex items-center gap-1 mt-0.5"><${Ic} d=${I.pin} c="w-3 h-3"/>${p.loc}, ${p.city}</div>
 <div className="mt-2 flex items-baseline gap-2"><b className="text-lg text-[#A8832F]">${fmt(p.rent)}</b><span className="text-xs text-slate-500">/mo · Deposit ${fmt(p.dep)}</span></div>
 <div className="flex flex-wrap gap-1 mt-2 text-[11px]">${[p.bhk,p.furn,p.park+' parking',p.days?`Available in ${p.days}d`:'Available now'].map(x=>html`<span key=${x} className="bg-ivory rounded-full px-2 py-0.5">${x}</span>`)}</div>
 <div className="text-[11px] text-slate-500 mt-2 line-clamp-1">${p.am.join(' · ')}</div><div className="text-xs font-semibold text-em mt-2">${s>=90?'Perfect for your requirements.':s>=75?'Strong match for your needs.':'Worth a look.'}</div>
 <div className="grid grid-cols-2 gap-2 mt-3"><button onClick=${onView} className="border border-navy/20 rounded-xl py-2 text-sm font-bold hover:bg-ivory">View Details</button><button onClick=${onBook} className="bg-navy text-white rounded-xl py-2 text-sm font-bold hover:opacity-90">Book Visit</button></div></div></div>`}

