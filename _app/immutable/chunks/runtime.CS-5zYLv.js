var Fn=Array.isArray,Pn=Array.from,Ln=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,Xt=Object.getOwnPropertyDescriptors,Mn=Object.prototype,Hn=Array.prototype,Qt=Object.getPrototypeOf;function Yn(t){return typeof t=="function"}const jn=()=>{};function Bn(t){return t()}function wt(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,Tt=4,B=8,ut=16,m=32,W=64,nt=128,S=256,K=512,h=1024,I=2048,b=4096,C=8192,q=16384,tn=32768,At=65536,Un=1<<17,nn=1<<19,mt=1<<20,ht=Symbol("$state"),Vn=Symbol("legacy props"),Gn=Symbol("");function gt(t){return t===this.v}function rn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function It(t){return!rn(t,this.v)}function en(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function sn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ln(t){throw new Error("https://svelte.dev/e/effect_orphan")}function an(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Kn(){throw new Error("https://svelte.dev/e/hydration_failed")}function $n(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Zn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function zn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function un(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function on(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let X=!1;function Jn(){X=!0}function ot(t){return{f:0,v:t,reactions:null,equals:gt,version:0}}function Wn(t){return kt(ot(t))}function fn(t,n=!1){var e;const r=ot(t);return n||(r.equals=It),X&&i!==null&&i.l!==null&&((e=i.l).s??(e.s=[])).push(r),r}function Xn(t,n=!1){return kt(fn(t,n))}function kt(t){return o!==null&&o.f&y&&(A===null?kn([t]):A.push(t)),t}function _n(t,n){return o!==null&&ct()&&o.f&(y|ut)&&(A===null||!A.includes(t))&&on(),cn(t,n)}function cn(t,n){return t.equals(n)||(t.v=n,t.version=Kt(),Rt(t,I),ct()&&u!==null&&u.f&h&&!(u.f&m)&&(v!==null&&v.includes(t)?(T(u,I),tt(u)):g===null?Rn([t]):g.push(t))),n}function Rt(t,n){var r=t.reactions;if(r!==null)for(var e=ct(),s=r.length,l=0;l<s;l++){var a=r[l],f=a.f;f&I||!e&&a===u||(T(a,n),f&(h|S)&&(f&y?Rt(a,b):tt(a)))}}function St(t){console.warn("https://svelte.dev/e/hydration_mismatch")}const Qn=1,tr=2,nr=4,rr=8,er=16,sr=1,lr=2,ar=4,ur=8,or=16,ir=4,fr=1,_r=2,vn="[",pn="[!",hn="]",xt={},cr=Symbol();let R=!1;function vr(t){R=t}let w;function M(t){if(t===null)throw St(),xt;return w=t}function pr(){return M(x(w))}function hr(t){if(R){if(x(w)!==null)throw St(),xt;w=t}}function dr(t=1){if(R){for(var n=t,r=w;n--;)r=x(r);w=r}}function Er(){for(var t=0,n=w;;){if(n.nodeType===8){var r=n.data;if(r===hn){if(t===0)return n;t-=1}else(r===vn||r===pn)&&(t+=1)}var e=x(n);n.remove(),n=e}}var dt,Ot,Dt;function yr(){if(dt===void 0){dt=window;var t=Element.prototype,n=Node.prototype;Ot=pt(n,"firstChild").get,Dt=pt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function rt(t=""){return document.createTextNode(t)}function et(t){return Ot.call(t)}function x(t){return Dt.call(t)}function wr(t,n){if(!R)return et(t);var r=et(w);if(r===null)r=w.appendChild(rt());else if(n&&r.nodeType!==3){var e=rt();return r==null||r.before(e),M(e),e}return M(r),r}function Tr(t,n){if(!R){var r=et(t);return r instanceof Comment&&r.data===""?x(r):r}return w}function Ar(t,n=1,r=!1){let e=R?w:t;for(var s;n--;)s=e,e=x(e);if(!R)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var a=rt();return e===null?s==null||s.after(a):e.before(a),M(a),a}return M(e),e}function mr(t){t.textContent=""}function dn(t){var n=y|I;u===null?n|=S:u.f|=mt;var r=o!==null&&o.f&y?o:null;const e={children:null,ctx:i,deps:null,equals:gt,f:n,fn:t,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function gr(t){const n=dn(t);return n.equals=It,n}function Nt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?it(e):P(e)}}}function En(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function Ct(t){var n,r=u;J(En(t));try{Nt(t),n=$t(t)}finally{J(r)}return n}function bt(t){var n=Ct(t),r=(O||t.f&S)&&t.deps!==null?b:h;T(t,r),t.equals(n)||(t.v=n,t.version=Kt())}function it(t){Nt(t),j(t,0),T(t,q),t.v=t.children=t.deps=t.ctx=t.reactions=null}function qt(t){u===null&&o===null&&ln(),o!==null&&o.f&S&&sn(),_t&&en()}function yn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function F(t,n,r,e=!0){var s=(t&W)!==0,l=u,a={ctx:i,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|I,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var f=D;try{Et(!0),U(a),a.f|=tn}catch(_){throw P(a),_}finally{Et(f)}}else n!==null&&tt(a);var p=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&mt)===0;if(!p&&!s&&e&&(l!==null&&yn(a,l),o!==null&&o.f&y)){var d=o;(d.children??(d.children=[])).push(a)}return a}function Ir(t){const n=F(B,null,!1);return T(n,h),n.teardown=t,n}function kr(t){qt();var n=u!==null&&(u.f&m)!==0&&i!==null&&!i.m;if(n){var r=i;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:o})}else{var e=Ft(t);return e}}function Rr(t){return qt(),ft(t)}function Sr(t){const n=F(W,t,!0);return()=>{P(n)}}function Ft(t){return F(Tt,t,!1)}function xr(t,n){var r=i,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=ft(()=>{t(),!e.ran&&(e.ran=!0,_n(r.l.r2,!0),bn(n))})}function Or(){var t=i;ft(()=>{if(Cn(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&h&&T(r,b),L(r)&&U(r),n.ran=!1}t.l.r2.v=!1}})}function ft(t){return F(B,t,!0)}function Dr(t){return wn(t)}function wn(t,n=0){return F(B|ut|n,t,!0)}function Nr(t,n=!0){return F(B|m,t,!0,n)}function Pt(t){var n=t.teardown;if(n!==null){const r=_t,e=o;yt(!0),z(null);try{n.call(null)}finally{yt(r),z(e)}}}function Lt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)it(n[r])}}function Mt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;P(r,n),r=e}}function Tn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&m||P(n),n=r}}function P(t,n=!0){var r=!1;if((n||t.f&nn)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:x(e);e.remove(),e=l}r=!0}Mt(t,n&&!r),Lt(t),j(t,0),T(t,q);var a=t.transitions;if(a!==null)for(const p of a)p.stop();Pt(t);var f=t.parent;f!==null&&f.first!==null&&Ht(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Ht(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Cr(t,n){var r=[];Yt(t,r,!0),An(r,()=>{P(t),n&&n()})}function An(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Yt(t,n,r){if(!(t.f&C)){if(t.f^=C,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&At)!==0||(e.f&m)!==0;Yt(e,n,l?r:!1),e=s}}}function br(t){jt(t,!0)}function jt(t,n){if(t.f&C){L(t)&&U(t),t.f^=C;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&At)!==0||(r.f&m)!==0;jt(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}const mn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let $=!1,Z=!1,st=[],lt=[];function Bt(){$=!1;const t=st.slice();st=[],wt(t)}function Ut(){Z=!1;const t=lt.slice();lt=[],wt(t)}function qr(t){$||($=!0,queueMicrotask(Bt)),st.push(t)}function Fr(t){Z||(Z=!0,mn(Ut)),lt.push(t)}function gn(){$&&Bt(),Z&&Ut()}const Vt=0,In=1;let V=!1,G=Vt,H=!1,Y=null,D=!1,_t=!1;function Et(t){D=t}function yt(t){_t=t}let k=[],N=0;let o=null;function z(t){o=t}let u=null;function J(t){u=t}let A=null;function kn(t){A=t}let v=null,E=0,g=null;function Rn(t){g=t}let Gt=0,O=!1,i=null;function Kt(){return++Gt}function ct(){return!X||i!==null&&i.l===null}function L(t){var a,f;var n=t.f;if(n&I)return!0;if(n&b){var r=t.deps,e=(n&S)!==0;if(r!==null){var s;if(n&K){for(s=0;s<r.length;s++)((a=r[s]).reactions??(a.reactions=[])).push(t);t.f^=K}for(s=0;s<r.length;s++){var l=r[s];if(L(l)&&bt(l),e&&u!==null&&!O&&!((f=l==null?void 0:l.reactions)!=null&&f.includes(t))&&(l.reactions??(l.reactions=[])).push(t),l.version>t.version)return!0}}e||T(t,h)}return!1}function Sn(t,n){for(var r=n;r!==null;){if(r.f&nt)try{r.fn(t);return}catch{r.f^=nt}r=r.parent}throw V=!1,t}function xn(t){return(t.f&q)===0&&(t.parent===null||(t.parent.f&nt)===0)}function Q(t,n,r,e){if(V){if(r===null&&(V=!1),xn(n))throw t;return}r!==null&&(V=!0);{Sn(t,n);return}}function $t(t){var vt;var n=v,r=E,e=g,s=o,l=O,a=A,f=i,p=t.f;v=null,E=0,g=null,o=p&(m|W)?null:t,O=!D&&(p&S)!==0,A=null,i=t.ctx;try{var d=(0,t.fn)(),_=t.deps;if(v!==null){var c;if(j(t,E),_!==null&&E>0)for(_.length=E+v.length,c=0;c<v.length;c++)_[E+c]=v[c];else t.deps=_=v;if(!O)for(c=E;c<_.length;c++)((vt=_[c]).reactions??(vt.reactions=[])).push(t)}else _!==null&&E<_.length&&(j(t,E),_.length=E);return d}finally{v=n,E=r,g=e,o=s,O=l,A=a,i=f}}function On(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&y&&(v===null||!v.includes(n))&&(T(n,b),n.f&(S|K)||(n.f^=K),j(n,0))}function j(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)On(t,r[e])}function U(t){var n=t.f;if(!(n&q)){T(t,h);var r=u,e=i;u=t;try{n&ut?Tn(t):Mt(t),Lt(t),Pt(t);var s=$t(t);t.teardown=typeof s=="function"?s:null,t.version=Gt}catch(l){Q(l,t,r,e||t.ctx)}finally{u=r}}}function Zt(){if(N>1e3){N=0;try{an()}catch(t){if(Y!==null)Q(t,Y,null);else throw t}}N++}function zt(t){var n=t.length;if(n!==0){Zt();var r=D;D=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&h||(s.f^=h);var l=[];Jt(s,l),Dn(l)}}finally{D=r}}}function Dn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(q|C)))try{L(e)&&(U(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ht(e):e.fn=null))}catch(s){Q(s,e,null,e.ctx)}}}function Nn(){if(H=!1,N>1001)return;const t=k;k=[],zt(t),H||(N=0,Y=null)}function tt(t){G===Vt&&(H||(H=!0,queueMicrotask(Nn))),Y=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(W|m)){if(!(r&h))return;n.f^=h}}k.push(n)}function Jt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&m)!==0,a=l&&(s&h)!==0,f=r.next;if(!a&&!(s&C))if(s&B){if(l)r.f^=h;else try{L(r)&&U(r)}catch(c){Q(c,r,null,r.ctx)}var p=r.first;if(p!==null){r=p;continue}}else s&Tt&&e.push(r);if(f===null){let c=r.parent;for(;c!==null;){if(t===c)break t;var d=c.next;if(d!==null){r=d;continue t}c=c.parent}}r=f}for(var _=0;_<e.length;_++)p=e[_],n.push(p),Jt(p,n)}function Wt(t){var n=G,r=k;try{Zt();const s=[];G=In,k=s,H=!1,zt(r);var e=t==null?void 0:t();return gn(),(k.length>0||s.length>0)&&Wt(),N=0,Y=null,e}finally{G=n,k=r}}async function Pr(){await Promise.resolve(),Wt()}function Cn(t){var _;var n=t.f,r=(n&y)!==0;if(r&&n&q){var e=Ct(t);return it(t),e}if(o!==null){A!==null&&A.includes(t)&&un();var s=o.deps;v===null&&s!==null&&s[E]===t?E++:v===null?v=[t]:v.push(t),g!==null&&u!==null&&u.f&h&&!(u.f&m)&&g.includes(t)&&(T(u,I),tt(u))}else if(r&&t.deps===null)for(var l=t,a=l.parent,f=l;a!==null;)if(a.f&y){var p=a;f=p,a=p.parent}else{var d=a;(_=d.deriveds)!=null&&_.includes(f)||(d.deriveds??(d.deriveds=[])).push(f);break}return r&&(l=t,L(l)&&bt(l)),t.v}function bn(t){const n=o;try{return o=null,t()}finally{o=n}}const qn=~(I|b|h);function T(t,n){t.f=t.f&qn|n}function Lr(t,n=!1,r){i={p:i,c:null,e:null,m:!1,s:t,x:null,l:null},X&&!n&&(i.l={s:null,u:null,r1:[],r2:ot(!1)})}function Mr(t){const n=i;if(n!==null){const a=n.e;if(a!==null){var r=u,e=o;n.e=null;try{for(var s=0;s<a.length;s++){var l=a[s];J(l.effect),z(l.reaction),Ft(l.fn)}}finally{J(r),z(e)}}i=n.p,n.m=!0}return{}}function Hr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ht in t)at(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ht in r&&at(r)}}}function at(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{at(t[e],n)}catch{}const r=Qt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Xt(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}export{lr as $,Zn as A,pt as B,u as C,zn as D,Qt as E,Fn as F,wn as G,At as H,pn as I,Er as J,M as K,vr as L,br as M,Nr as N,Cr as O,w as P,Ft as Q,ft as R,ht as S,qr as T,cr as U,$n as V,Un as W,m as X,W as Y,J as Z,X as _,pr as a,ur as a0,Vn as a1,gr as a2,ar as a3,It as a4,sr as a5,or as a6,Wt as a7,Ln as a8,Pr as a9,rr as aA,Fr as aB,Gn as aC,Xt as aD,ut as aE,tn as aF,Yn as aG,ir as aH,ct as aI,xr as aJ,Or as aK,Xn as aL,dr as aM,rn as aN,Wn as aa,z as ab,o as ac,et as ad,rt as ae,fr as af,_r as ag,yr as ah,vn as ai,x as aj,xt as ak,hn as al,St as am,Kn as an,mr as ao,Pn as ap,Sr as aq,C as ar,cn as as,Yt as at,An as au,P as av,tr as aw,nr as ax,Qn as ay,er as az,Mr as b,wr as c,Ir as d,_n as e,Tr as f,Cn as g,R as h,Rr as i,kr as j,i as k,wt as l,fn as m,jn as n,Bn as o,Lr as p,Hr as q,hr as r,Ar as s,Dr as t,bn as u,dn as v,Jn as w,Mn as x,Hn as y,ot as z};
