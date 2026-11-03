import {useState,useEffect,useRef} from 'react';
import {html} from '../html.js';
import {LS,fmt,T,iso,dl,sha,AM,P,BUD,rng,STEPS,ACK,SLOTS,tl,score} from '../lib/data.js';
import {Pic,Ic,I,Logo} from './ui.jsx';
export default function Cal({onPick}){
 const[o,setO]=useState(0),now=new Date();now.setHours(0,0,0,0);const f=new Date(now.getFullYear(),now.getMonth()+o,1),n=new Date(f.getFullYear(),f.getMonth()+1,0).getDate(),max=new Date(now.getTime()+60*864e5);
 const cells=[...Array(f.getDay()).fill(null),...Array.from({length:n},(_,i)=>new Date(f.getFullYear(),f.getMonth(),i+1))];
 return html`<div className="bg-white rounded-2xl border border-slate-200 p-4 max-w-sm up"><div className="flex items-center justify-between mb-2"><b className="text-sm">${f.toLocaleDateString('en-IN',{month:'long',year:'numeric'})}</b>
  <div className="flex gap-1"><button disabled=${o<1} onClick=${()=>setO(o-1)} className="w-8 h-8 rounded-lg hover:bg-ivory disabled:opacity-30">‹</button><button disabled=${o>1} onClick=${()=>setO(o+1)} className="w-8 h-8 rounded-lg hover:bg-ivory disabled:opacity-30">›</button></div></div>
  <div className="grid grid-cols-7 gap-1 text-center text-[11px] text-slate-400 mb-1">${'SMTWTFS'.split('').map((d,i)=>html`<div key=${i}>${d}</div>`)}</div>
  <div className="grid grid-cols-7 gap-1">${cells.map((d,i)=>d?html`<button key=${i} disabled=${d<now||d>max} onClick=${()=>onPick(iso(d))} className=${'h-9 rounded-full text-sm font-semibold hover:bg-em hover:text-white disabled:text-slate-300 disabled:hover:bg-transparent '+(+d==+now?'ring-1 ring-em':'')}>${d.getDate()}</button>`:html`<div key=${i}/>`)}</div></div>`}

