// import {useState,useEffect,useRef} from 'react';
// import {html} from '../html.js';
// import {LS,fmt,T,iso,dl,sha,AM,P,BUD,rng,STEPS,ACK,SLOTS,tl,score} from '../lib/data.js';
// import {Pic,Ic,I,Logo} from './ui.jsx';
// export default function Auth({onIn}){
//  const[m,setM]=useState('login'),[f,setF]=useState({}),[err,setErr]=useState(''),[ld,setLd]=useState(false),[show,setShow]=useState(false);
//  const u=k=>e=>setF({...f,[k]:e.target.value});
//  const go=async e=>{e.preventDefault();setErr('');setLd(true);const us=LS('nm_users')||[];
//   try{if(m==='register'){
//    if(!f.name||!/^\S+@\S+\.\S+$/.test(f.email||''))throw'Enter your name and a valid email.';if(!/^[6-9]\d{9}$/.test(f.mobile||''))throw'Enter a valid 10-digit Indian mobile number.';
//    if((f.pw||'').length<6)throw'Password must be at least 6 characters.';if(f.pw!==f.pw2)throw'Passwords do not match.';
//    if(us.some(x=>x.email===f.email.toLowerCase()||x.mobile===f.mobile))throw'An account with this email or mobile already exists.';
//    const nu={id:Date.now(),name:f.name,email:f.email.toLowerCase(),mobile:f.mobile,h:await sha(f.pw)};LS('nm_users',[...us,nu]);LS('nm_sess',nu.id);onIn(nu)
//   }else{const id=(f.id||'').toLowerCase(),h=await sha(f.pw||'');const x=us.find(x=>(x.email===id||x.mobile===id)&&x.h===h);if(!x)throw'Invalid credentials. New here? Register first.';LS('nm_sess',x.id);onIn(x)}}
//   catch(x){setErr(String(x))}setLd(false)};
//  const inp='w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-navy bg-white';
//  const fld=(k,l,t='text',ph='')=>html`<label className="block"><span className="text-xs font-semibold text-slate-500">${l}</span><input className=${inp+' mt-1'} type=${t} placeholder=${ph} value=${f[k]||''} onChange=${u(k)}/></label>`;
//  return html`<div className="min-h-full grid lg:grid-cols-2 bg-white">
//  <div className="hidden lg:flex relative flex-col justify-between p-10 text-white overflow-hidden" style=${{background:'var(--hero)'}}>
//   <${Logo} dark=${1}/><div className="absolute right-[-60px] top-24 w-[420px] h-[420px] rounded-full border border-white/10"/><div className="absolute right-10 top-40 w-[260px] h-[260px] rounded-full border border-white/10"/>
//   <div className="relative"><h2 className="text-5xl font-extrabold leading-tight">Find your<br/><span className="text-[#E3C887]">sweet home</span></h2><p className="mt-4 text-white/80 text-lg max-w-sm">Chat with your personal AI agent and schedule a visit in just a few clicks.</p>
//   <div className="mt-8 flex gap-3">${[['10','smart questions'],['6','best matches'],['1 tap','WhatsApp confirm']].map(([a,b])=>html`<div key=${a} className="rounded-2xl px-4 py-3 bg-white/10 border border-white/20 backdrop-blur"><div className="text-xl font-extrabold">${a}</div><div className="text-[11px] text-white/70">${b}</div></div>`)}</div></div></div>
//  <div className="flex flex-col justify-center px-3 sm:px-16 py-4 lg:py-10 bg-gradient-to-b from-white to-ivory"><div className="max-w-md w-full mx-auto up bg-white rounded-3xl overflow-hidden p-6 sm:p-7 shadow-[0_30px_60px_-30px_rgba(23,43,77,.35)] border border-slate-100">
//   <div className="lg:hidden -mx-6 -mt-6 sm:-mx-7 sm:-mt-7 mb-6 px-6 pt-6 pb-7 text-white" style=${{background:'var(--hero)'}}><${Logo} dark=${1}/><div className="mt-6 text-[2rem] font-extrabold leading-[1.1]">Find your<br/><span className="text-[#E3C887]">sweet home</span></div><p className="text-white/75 text-sm mt-2">Chat with your AI agent and book a visit in a few clicks.</p></div>
//   <h1 className="text-3xl font-extrabold">${m==='login'?'Welcome back!':'Create your account'}</h1><p className="text-slate-500 mt-1 mb-6 text-sm">${m==='login'?'Sign in to continue with your AI assistant.':'Takes under a minute.'}</p>
//   <form onSubmit=${go} className="space-y-4">
//    ${m==='register'?html`${fld('name','Full Name')}${fld('mobile','Mobile Number','tel','10-digit number')}${fld('email','Email','email')}`:fld('id','Email or Mobile Number')}
//    <div className="block"><span className="text-xs font-semibold text-slate-500">Password</span><div className="relative mt-1"><input className=${inp+' pr-16'} type=${show?'text':'password'} value=${f.pw||''} onChange=${u('pw')}/><button type="button" onClick=${()=>setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400">${show?'Hide':'Show'}</button></div></div>
//    ${m==='register'&&fld('pw2','Confirm Password','password')}
//    ${m==='login'&&html`<div className="text-right text-xs"><a href="#" onClick=${e=>{e.preventDefault();setErr('Password reset needs the email service on the backend. Not wired in this demo.')}} className="text-slate-500">Forgot password?</a></div>`}
//    ${m==='register'&&html`<p className="text-xs text-slate-500">By registering you opt in to WhatsApp booking updates on this number.</p>`}
//    ${err&&html`<div className="text-sm text-red-600 bg-red-50 rounded-xl px-3 py-2">${err}</div>`}
//    <button disabled=${ld} className="w-full bg-gradient-to-r from-navy to-[#2a4a85] text-white rounded-xl py-3.5 font-bold shadow-lg shadow-navy/30 hover:opacity-95 disabled:opacity-60">${ld?'Please wait…':m==='login'?'Login':'Register & Start Chat'}</button></form>
//   <p className="text-center text-sm text-slate-500 mt-6">${m==='login'?"Don't have an account? ":'Already registered? '}<button className="text-em font-bold" onClick=${()=>{setM(m==='login'?'register':'login');setErr('')}}>${m==='login'?'Register':'Login'}</button></p>
//  </div></div></div>`}

import {useState,useEffect,useRef} from 'react';
import {html} from '../html.js';
import {LS,fmt,T,iso,dl,sha,AM,P,BUD,rng,STEPS,ACK,SLOTS,tl,score} from '../lib/data.js';
import {Pic,Ic,I,Logo} from './ui.jsx';
export default function Auth({onIn}){
 const[m,setM]=useState('login'),[f,setF]=useState({}),[err,setErr]=useState(''),[ld,setLd]=useState(false),[show,setShow]=useState(false);
 const u=k=>e=>setF({...f,[k]:e.target.value});
 const go=async e=>{e.preventDefault();setErr('');setLd(true);const us=LS('nm_users')||[];
  try{if(m==='register'){
   if(!f.name||!/^\S+@\S+\.\S+$/.test(f.email||''))throw'Enter your name and a valid email.';if(!/^[6-9]\d{9}$/.test(f.mobile||''))throw'Enter a valid 10-digit Indian mobile number.';
   if((f.pw||'').length<6)throw'Password must be at least 6 characters.';if(f.pw!==f.pw2)throw'Passwords do not match.';
   if(us.some(x=>x.email===f.email.toLowerCase()||x.mobile===f.mobile))throw'An account with this email or mobile already exists.';
   const nu={id:Date.now(),name:f.name,email:f.email.toLowerCase(),mobile:f.mobile,h:await sha(f.pw)};LS('nm_users',[...us,nu]);LS('nm_sess',nu.id);onIn(nu)
  }else{const id=(f.id||'').toLowerCase(),h=await sha(f.pw||'');const x=us.find(x=>(x.email===id||x.mobile===id)&&x.h===h);if(!x)throw'Invalid credentials. New here? Register first.';LS('nm_sess',x.id);onIn(x)}}
  catch(x){setErr(String(x))}setLd(false)};
 const inp='w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-navy bg-white';
 const fld=(k,l,t='text',ph='')=>html`<label className="block"><span className="text-xs font-semibold text-slate-500">${l}</span><input className=${inp+' mt-1'} type=${t} placeholder=${ph} value=${f[k]||''} onChange=${u(k)}/></label>`;
 return html`<div className="auth-root min-h-full grid lg:grid-cols-2 bg-white">
 <div className="hidden lg:flex relative flex-col justify-between p-10 text-white overflow-hidden" style=${{background:'var(--hero)'}}>
  <${Logo} dark=${1}/><div className="absolute right-[-60px] top-24 w-[420px] h-[420px] rounded-full border border-white/10"/><div className="absolute right-10 top-40 w-[260px] h-[260px] rounded-full border border-white/10"/>
  <div className="relative"><h2 className="text-5xl font-extrabold leading-tight">Find your<br/><span className="text-[#E3C887]">sweet home</span></h2><p className="mt-4 text-white/80 text-lg max-w-sm">Chat with your personal AI agent and schedule a visit in just a few clicks.</p>
  <div className="mt-8 flex gap-3">${[['10','smart questions'],['6','best matches'],['1 tap','WhatsApp confirm']].map(([a,b])=>html`<div key=${a} className="rounded-2xl px-4 py-3 bg-white/10 border border-white/20 backdrop-blur"><div className="text-xl font-extrabold">${a}</div><div className="text-[11px] text-white/70">${b}</div></div>`)}</div></div></div>
 <div className="auth-pane flex flex-col lg:justify-center px-3 sm:px-16 pb-8 lg:py-10 bg-gradient-to-b from-white to-ivory">
  <div className="lg:hidden text-white max-w-md w-full mx-auto px-3 pt-[max(2rem,env(safe-area-inset-top))] pb-6"><${Logo} dark=${1}/><div className="mt-7 text-[2.15rem] font-extrabold leading-[1.1]">Find your<br/><span className="text-[#F3CFC0]">sweet home</span></div><p className="text-white/80 text-sm mt-2 max-w-xs">Chat with your AI agent and book a visit in a few clicks.</p><div className="flex gap-2 mt-5 text-[11px] font-semibold">${['\ud83d\udcac AI chat','\ud83c\udfe0 Verified homes','\ud83d\udcf2 WhatsApp confirm'].map(x=>html`<span key=${x} className="rounded-full px-3 py-1.5 bg-white/10 border border-white/20 backdrop-blur">${x}</span>`)}</div></div>
  <div className="max-w-md w-full mx-auto up bg-white rounded-3xl overflow-hidden p-6 sm:p-7 shadow-[0_30px_60px_-30px_rgba(23,43,77,.35)] lg:border lg:border-slate-100 border border-white/60 shadow-2xl">
  <h1 className="text-3xl font-extrabold">${m==='login'?'Welcome back!':'Create your account'}</h1><p className="text-slate-500 mt-1 mb-6 text-sm">${m==='login'?'Sign in to continue with your AI assistant.':'Takes under a minute.'}</p>
  <form onSubmit=${go} className="space-y-4">
   ${m==='register'?html`${fld('name','Full Name')}${fld('mobile','Mobile Number','tel','10-digit number')}${fld('email','Email','email')}`:fld('id','Email or Mobile Number')}
   <div className="block"><span className="text-xs font-semibold text-slate-500">Password</span><div className="relative mt-1"><input className=${inp+' pr-16'} type=${show?'text':'password'} value=${f.pw||''} onChange=${u('pw')}/><button type="button" onClick=${()=>setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400">${show?'Hide':'Show'}</button></div></div>
   ${m==='register'&&fld('pw2','Confirm Password','password')}
   ${m==='login'&&html`<div className="text-right text-xs"><a href="#" onClick=${e=>{e.preventDefault();setErr('Password reset needs the email service on the backend. Not wired in this demo.')}} className="text-slate-500">Forgot password?</a></div>`}
   ${m==='register'&&html`<p className="text-xs text-slate-500">By registering you opt in to WhatsApp booking updates on this number.</p>`}
   ${err&&html`<div className="text-sm text-red-600 bg-red-50 rounded-xl px-3 py-2">${err}</div>`}
   <button disabled=${ld} className="w-full bg-gradient-to-r from-navy to-[#2a4a85] text-white rounded-xl py-3.5 font-bold shadow-lg shadow-navy/30 hover:opacity-95 disabled:opacity-60">${ld?'Please wait…':m==='login'?'Login':'Register & Start Chat'}</button></form>
  <p className="text-center text-sm text-slate-500 mt-6">${m==='login'?"Don't have an account? ":'Already registered? '}<button className="text-em font-bold" onClick=${()=>{setM(m==='login'?'register':'login');setErr('')}}>${m==='login'?'Register':'Login'}</button></p>
 </div></div></div>`}