import React from 'react';
import {createRoot} from 'react-dom/client';
import {useState} from 'react';
import './index.css';
import {html} from './html.js';
import {LS} from './lib/data.js';
import App from './components/App.jsx';
import Auth from './components/Auth.jsx';
document.documentElement.dataset.t='plum';
function Root(){const[u,setU]=useState(()=>{const id=LS('nm_sess');return(LS('nm_users')||[]).find(x=>x.id===id)||null});
 return u?html`<${App} key=${u.id} user=${u} out=${()=>{LS('nm_sess',null);setU(null)}}/>`:html`<${Auth} onIn=${setU}/>`}

createRoot(document.getElementById('root')).render(html`<${Root}/>`);
