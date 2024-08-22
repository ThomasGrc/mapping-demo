var xx=Object.create;var Su=Object.defineProperty,Mx=Object.defineProperties,wx=Object.getOwnPropertyDescriptor,bx=Object.getOwnPropertyDescriptors,Sx=Object.getOwnPropertyNames,Gp=Object.getOwnPropertySymbols,Ex=Object.getPrototypeOf,jp=Object.prototype.hasOwnProperty,Tx=Object.prototype.propertyIsEnumerable;var Wp=(n,e,t)=>e in n?Su(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,fe=(n,e)=>{for(var t in e||={})jp.call(e,t)&&Wp(n,t,e[t]);if(Gp)for(var t of Gp(e))Tx.call(e,t)&&Wp(n,t,e[t]);return n},_t=(n,e)=>Mx(n,bx(e));var Cx=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var Ax=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Sx(e))!jp.call(n,r)&&r!==t&&Su(n,r,{get:()=>e[r],enumerable:!(i=wx(e,r))||i.enumerable});return n};var Dx=(n,e,t)=>(t=n!=null?xx(Ex(n)):{},Ax(e||!n||!n.__esModule?Su(t,"default",{value:n,enumerable:!0}):t,n));var Ra=(n,e,t)=>new Promise((i,r)=>{var s=c=>{try{a(t.next(c))}catch(l){r(l)}},o=c=>{try{a(t.throw(c))}catch(l){r(l)}},a=c=>c.done?i(c.value):Promise.resolve(c.value).then(s,o);a((t=t.apply(n,e)).next())});var lx=Cx((X3,cx)=>{"use strict";function wN(n,e){e||(e={});var t=e.charSet?e.charSet:"01",i=e.color?e.color:"var(--ascii-bg-color,black)",r=e.fontSize?e.fontSize:12,s=e.opacity?e.opacity:1;t=t.replace(/[^\S ]/g,"");var o=document.createElement("link");o.setAttribute("rel","stylesheet"),o.setAttribute("type","text/css"),o.setAttribute("href","https://fonts.googleapis.com/css?family=Inconsolata&text=01"),document.head.appendChild(o);var a=document.createElement("style");a.type="text/css";var c=`
    canvas.ascii-canvas {
      image-rendering: -moz-crisp-edges;
      image-rendering: -webkit-crisp-edges;
      image-rendering: pixelated;
      image-rendering: crisp-edges;
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
    }`;a.styleSheet?a.styleSheet.cssText=c:a.appendChild(document.createTextNode(c)),document.head.appendChild(a);var l=n.domElement;if(l.classList+="ascii-canvas",l.parentNode===null){console.error("THREE.Renderer's canvas.parentNode is null. Make to sure to attach the renderer to a container before initialising the ascii-renderer.");return}var u=document.createElementNS("http://www.w3.org/2000/svg","svg");u.style.width="100vw",u.style.height="100vh",u.style.fontSize=r+"px",u.style.fontFamily='"Inconsolata", monospace',u.style.position="absolute",l.parentNode.appendChild(u),this.svg=u,this.setSize=function(d,h){var m=Math.floor(d/r*2),v=Math.ceil(h/r);n.setSize(m,v),l.style.width=m*r*.5+"px",l.style.height=v*r+"px";var _=0,p,f=[];f.push(`<tspan x="50%" y="${r*.99}px">`);for(var S=0;S<v;S++){for(var M=0;M<m;M++)p=t[_++%t.length],f.push(p!==" "?p:"&nbsp");f.push(`</tspan><tspan x="50%" dy="${r}px">`)}f.push("</tspan>");var E="ascii-mask-"+Math.floor(Math.random()*9999);u.innerHTML=`
        <defs>
          <mask id="${E}" x="0" y="0" width="100%" height="100%" >
            <rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
            <text text-anchor="middle" x="0%" dy="${-r/10}px">`+f.join("")+`</text>
          </mask>
        </defs>
        <rect style="mask:url(#${E});fill:${i};opacity:${s};"
              x="0" y="0" width="100%" height="100%"/></rect>`}}cx.exports=wN});var $p=null;var Eu=1;function tn(n){let e=$p;return $p=n,e}var qp={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Ix(n){if(!(Au(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===Eu)){if(!n.producerMustRecompute(n)&&!Tu(n)){n.dirty=!1,n.lastCleanEpoch=Eu;return}n.producerRecomputeValue(n),n.dirty=!1,n.lastCleanEpoch=Eu}}function Xp(n){return n&&(n.nextProducerIndex=0),tn(n)}function Yp(n,e){if(tn(e),!(!n||n.producerNode===void 0||n.producerIndexOfThis===void 0||n.producerLastReadVersion===void 0)){if(Au(n))for(let t=n.nextProducerIndex;t<n.producerNode.length;t++)Cu(n.producerNode[t],n.producerIndexOfThis[t]);for(;n.producerNode.length>n.nextProducerIndex;)n.producerNode.pop(),n.producerLastReadVersion.pop(),n.producerIndexOfThis.pop()}}function Tu(n){Pa(n);for(let e=0;e<n.producerNode.length;e++){let t=n.producerNode[e],i=n.producerLastReadVersion[e];if(i!==t.version||(Ix(t),i!==t.version))return!0}return!1}function Zp(n){if(Pa(n),Au(n))for(let e=0;e<n.producerNode.length;e++)Cu(n.producerNode[e],n.producerIndexOfThis[e]);n.producerNode.length=n.producerLastReadVersion.length=n.producerIndexOfThis.length=0,n.liveConsumerNode&&(n.liveConsumerNode.length=n.liveConsumerIndexOfThis.length=0)}function Cu(n,e){if(Rx(n),Pa(n),n.liveConsumerNode.length===1)for(let i=0;i<n.producerNode.length;i++)Cu(n.producerNode[i],n.producerIndexOfThis[i]);let t=n.liveConsumerNode.length-1;if(n.liveConsumerNode[e]=n.liveConsumerNode[t],n.liveConsumerIndexOfThis[e]=n.liveConsumerIndexOfThis[t],n.liveConsumerNode.length--,n.liveConsumerIndexOfThis.length--,e<n.liveConsumerNode.length){let i=n.liveConsumerIndexOfThis[e],r=n.liveConsumerNode[e];Pa(r),r.producerIndexOfThis[i]=e}}function Au(n){return n.consumerIsAlwaysLive||(n?.liveConsumerNode?.length??0)>0}function Pa(n){n.producerNode??=[],n.producerIndexOfThis??=[],n.producerLastReadVersion??=[]}function Rx(n){n.liveConsumerNode??=[],n.liveConsumerIndexOfThis??=[]}function Px(){throw new Error}var Nx=Px;function Kp(n){Nx=n}function Re(n){return typeof n=="function"}function zr(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Na=zr(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function so(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var Ct=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let s of t)s.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(Re(i))try{i()}catch(s){e=s instanceof Na?s.errors:[s]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let s of r)try{Jp(s)}catch(o){e=e??[],o instanceof Na?e=[...e,...o.errors]:e.push(o)}}if(e)throw new Na(e)}}add(e){var t;if(e&&e!==this)if(this.closed)Jp(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&so(t,e)}remove(e){let{_finalizers:t}=this;t&&so(t,e),e instanceof n&&e._removeParent(this)}};Ct.EMPTY=(()=>{let n=new Ct;return n.closed=!0,n})();var Du=Ct.EMPTY;function Oa(n){return n instanceof Ct||n&&"closed"in n&&Re(n.remove)&&Re(n.add)&&Re(n.unsubscribe)}function Jp(n){Re(n)?n():n.unsubscribe()}var Mn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Hr={setTimeout(n,e,...t){let{delegate:i}=Hr;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=Hr;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function La(n){Hr.setTimeout(()=>{let{onUnhandledError:e}=Mn;if(e)e(n);else throw n})}function oo(){}var Qp=Iu("C",void 0,void 0);function em(n){return Iu("E",void 0,n)}function tm(n){return Iu("N",n,void 0)}function Iu(n,e,t){return{kind:n,value:e,error:t}}var ir=null;function Gr(n){if(Mn.useDeprecatedSynchronousErrorHandling){let e=!ir;if(e&&(ir={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=ir;if(ir=null,t)throw i}}else n()}function nm(n){Mn.useDeprecatedSynchronousErrorHandling&&ir&&(ir.errorThrown=!0,ir.error=n)}var rr=class extends Ct{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,Oa(e)&&e.add(this)):this.destination=Fx}static create(e,t,i){return new Wr(e,t,i)}next(e){this.isStopped?Pu(tm(e),this):this._next(e)}error(e){this.isStopped?Pu(em(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?Pu(Qp,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},Ox=Function.prototype.bind;function Ru(n,e){return Ox.call(n,e)}var Nu=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){Fa(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){Fa(i)}else Fa(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){Fa(t)}}},Wr=class extends rr{constructor(e,t,i){super();let r;if(Re(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let s;this&&Mn.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&Ru(e.next,s),error:e.error&&Ru(e.error,s),complete:e.complete&&Ru(e.complete,s)}):r=e}this.destination=new Nu(r)}};function Fa(n){Mn.useDeprecatedSynchronousErrorHandling?nm(n):La(n)}function Lx(n){throw n}function Pu(n,e){let{onStoppedNotification:t}=Mn;t&&Hr.setTimeout(()=>t(n,e))}var Fx={closed:!0,next:oo,error:Lx,complete:oo};var jr=typeof Symbol=="function"&&Symbol.observable||"@@observable";function nn(n){return n}function Ou(...n){return Lu(n)}function Lu(n){return n.length===0?nn:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var lt=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let s=kx(t)?t:new Wr(t,i,r);return Gr(()=>{let{operator:o,source:a}=this;s.add(o?o.call(s,a):a?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=im(i),new i((r,s)=>{let o=new Wr({next:a=>{try{t(a)}catch(c){s(c),o.unsubscribe()}},error:s,complete:r});this.subscribe(o)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[jr](){return this}pipe(...t){return Lu(t)(this)}toPromise(t){return t=im(t),new t((i,r)=>{let s;this.subscribe(o=>s=o,o=>r(o),()=>i(s))})}}return n.create=e=>new n(e),n})();function im(n){var e;return(e=n??Mn.Promise)!==null&&e!==void 0?e:Promise}function Ux(n){return n&&Re(n.next)&&Re(n.error)&&Re(n.complete)}function kx(n){return n&&n instanceof rr||Ux(n)&&Oa(n)}function Fu(n){return Re(n?.lift)}function Ke(n){return e=>{if(Fu(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function Je(n,e,t,i,r){return new Uu(n,e,t,i,r)}var Uu=class extends rr{constructor(e,t,i,r,s,o){super(e),this.onFinalize=s,this.shouldUnsubscribe=o,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};function $r(){return Ke((n,e)=>{let t=null;n._refCount++;let i=Je(e,void 0,void 0,void 0,()=>{if(!n||n._refCount<=0||0<--n._refCount){t=null;return}let r=n._connection,s=t;t=null,r&&(!s||r===s)&&r.unsubscribe(),e.unsubscribe()});n.subscribe(i),i.closed||(t=n.connect())})}var qr=class extends lt{constructor(e,t){super(),this.source=e,this.subjectFactory=t,this._subject=null,this._refCount=0,this._connection=null,Fu(e)&&(this.lift=e.lift)}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){let e=this._subject;return(!e||e.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:e}=this;this._subject=this._connection=null,e?.unsubscribe()}connect(){let e=this._connection;if(!e){e=this._connection=new Ct;let t=this.getSubject();e.add(this.source.subscribe(Je(t,void 0,()=>{this._teardown(),t.complete()},i=>{this._teardown(),t.error(i)},()=>this._teardown()))),e.closed&&(this._connection=null,e=Ct.EMPTY)}return e}refCount(){return $r()(this)}};var rm=zr(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var rn=(()=>{class n extends lt{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new Ua(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new rm}next(t){Gr(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){Gr(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){Gr(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:s}=this;return i||r?Du:(this.currentObservers=null,s.push(t),new Ct(()=>{this.currentObservers=null,so(s,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:s}=this;i?t.error(r):s&&t.complete()}asObservable(){let t=new lt;return t.source=this,t}}return n.create=(e,t)=>new Ua(e,t),n})(),Ua=class extends rn{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:Du}};var Ut=class extends rn{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};var dn=new lt(n=>n.complete());function sm(n){return n&&Re(n.schedule)}function om(n){return n[n.length-1]}function am(n){return Re(om(n))?n.pop():void 0}function bi(n){return sm(om(n))?n.pop():void 0}function lm(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(d){o(d)}}function c(u){try{l(i.throw(u))}catch(d){o(d)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function cm(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function sr(n){return this instanceof sr?(this.v=n,this):new sr(n)}function um(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r={},o("next"),o("throw"),o("return"),r[Symbol.asyncIterator]=function(){return this},r;function o(h){i[h]&&(r[h]=function(m){return new Promise(function(v,_){s.push([h,m,v,_])>1||a(h,m)})})}function a(h,m){try{c(i[h](m))}catch(v){d(s[0][3],v)}}function c(h){h.value instanceof sr?Promise.resolve(h.value.v).then(l,u):d(s[0][2],h)}function l(h){a("next",h)}function u(h){a("throw",h)}function d(h,m){h(m),s.shift(),s.length&&a(s[0][0],s[0][1])}}function dm(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof cm=="function"?cm(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}var ka=n=>n&&typeof n.length=="number"&&typeof n!="function";function Ba(n){return Re(n?.then)}function Va(n){return Re(n[jr])}function za(n){return Symbol.asyncIterator&&Re(n?.[Symbol.asyncIterator])}function Ha(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function Bx(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Ga=Bx();function Wa(n){return Re(n?.[Ga])}function ja(n){return um(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:i,done:r}=yield sr(t.read());if(r)return yield sr(void 0);yield yield sr(i)}}finally{t.releaseLock()}})}function $a(n){return Re(n?.getReader)}function Nt(n){if(n instanceof lt)return n;if(n!=null){if(Va(n))return Vx(n);if(ka(n))return zx(n);if(Ba(n))return Hx(n);if(za(n))return hm(n);if(Wa(n))return Gx(n);if($a(n))return Wx(n)}throw Ha(n)}function Vx(n){return new lt(e=>{let t=n[jr]();if(Re(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function zx(n){return new lt(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function Hx(n){return new lt(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,La)})}function Gx(n){return new lt(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function hm(n){return new lt(e=>{jx(n,e).catch(t=>e.error(t))})}function Wx(n){return hm(ja(n))}function jx(n,e){var t,i,r,s;return lm(this,void 0,void 0,function*(){try{for(t=dm(n);i=yield t.next(),!i.done;){let o=i.value;if(e.next(o),e.closed)return}}catch(o){r={error:o}}finally{try{i&&!i.done&&(s=t.return)&&(yield s.call(t))}finally{if(r)throw r.error}}e.complete()})}function Zt(n,e,t,i=0,r=!1){let s=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(s),!r)return s}function qa(n,e=0){return Ke((t,i)=>{t.subscribe(Je(i,r=>Zt(i,n,()=>i.next(r),e),()=>Zt(i,n,()=>i.complete(),e),r=>Zt(i,n,()=>i.error(r),e)))})}function Xa(n,e=0){return Ke((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}function fm(n,e){return Nt(n).pipe(Xa(e),qa(e))}function pm(n,e){return Nt(n).pipe(Xa(e),qa(e))}function mm(n,e){return new lt(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function gm(n,e){return new lt(t=>{let i;return Zt(t,e,()=>{i=n[Ga](),Zt(t,e,()=>{let r,s;try{({value:r,done:s}=i.next())}catch(o){t.error(o);return}s?t.complete():t.next(r)},0,!0)}),()=>Re(i?.return)&&i.return()})}function Ya(n,e){if(!n)throw new Error("Iterable cannot be null");return new lt(t=>{Zt(t,e,()=>{let i=n[Symbol.asyncIterator]();Zt(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function vm(n,e){return Ya(ja(n),e)}function ym(n,e){if(n!=null){if(Va(n))return fm(n,e);if(ka(n))return mm(n,e);if(Ba(n))return pm(n,e);if(za(n))return Ya(n,e);if(Wa(n))return gm(n,e);if($a(n))return vm(n,e)}throw Ha(n)}function xt(n,e){return e?ym(n,e):Nt(n)}function Ee(...n){let e=bi(n);return xt(n,e)}function Xr(n,e){let t=Re(n)?n:()=>n,i=r=>r.error(t());return new lt(e?r=>e.schedule(i,0,r):i)}function ku(n){return!!n&&(n instanceof lt||Re(n.lift)&&Re(n.subscribe))}var Qn=zr(n=>function(){n(this),this.name="EmptyError",this.message="no elements in sequence"});function Qe(n,e){return Ke((t,i)=>{let r=0;t.subscribe(Je(i,s=>{i.next(n.call(e,s,r++))}))})}var{isArray:$x}=Array;function qx(n,e){return $x(e)?n(...e):n(e)}function _m(n){return Qe(e=>qx(n,e))}var{isArray:Xx}=Array,{getPrototypeOf:Yx,prototype:Zx,keys:Kx}=Object;function xm(n){if(n.length===1){let e=n[0];if(Xx(e))return{args:e,keys:null};if(Jx(e)){let t=Kx(e);return{args:t.map(i=>e[i]),keys:t}}}return{args:n,keys:null}}function Jx(n){return n&&typeof n=="object"&&Yx(n)===Zx}function Mm(n,e){return n.reduce((t,i,r)=>(t[i]=e[r],t),{})}function ao(...n){let e=bi(n),t=am(n),{args:i,keys:r}=xm(n);if(i.length===0)return xt([],e);let s=new lt(Qx(i,e,r?o=>Mm(r,o):nn));return t?s.pipe(_m(t)):s}function Qx(n,e,t=nn){return i=>{wm(e,()=>{let{length:r}=n,s=new Array(r),o=r,a=r;for(let c=0;c<r;c++)wm(e,()=>{let l=xt(n[c],e),u=!1;l.subscribe(Je(i,d=>{s[c]=d,u||(u=!0,a--),a||i.next(t(s.slice()))},()=>{--o||i.complete()}))},i)},i)}}function wm(n,e,t){n?Zt(t,n,e):e()}function bm(n,e,t,i,r,s,o,a){let c=[],l=0,u=0,d=!1,h=()=>{d&&!c.length&&!l&&e.complete()},m=_=>l<i?v(_):c.push(_),v=_=>{s&&e.next(_),l++;let p=!1;Nt(t(_,u++)).subscribe(Je(e,f=>{r?.(f),s?m(f):e.next(f)},()=>{p=!0},void 0,()=>{if(p)try{for(l--;c.length&&l<i;){let f=c.shift();o?Zt(e,o,()=>v(f)):v(f)}h()}catch(f){e.error(f)}}))};return n.subscribe(Je(e,m,()=>{d=!0,h()})),()=>{a?.()}}function St(n,e,t=1/0){return Re(e)?St((i,r)=>Qe((s,o)=>e(i,s,r,o))(Nt(n(i,r))),t):(typeof e=="number"&&(t=e),Ke((i,r)=>bm(i,r,n,t)))}function Yr(n=1/0){return St(nn,n)}function Sm(){return Yr(1)}function Zr(...n){return Sm()(xt(n,bi(n)))}function Za(n){return new lt(e=>{Nt(n()).subscribe(e)})}function hn(n,e){return Ke((t,i)=>{let r=0;t.subscribe(Je(i,s=>n.call(e,s,r++)&&i.next(s)))})}function Si(n){return Ke((e,t)=>{let i=null,r=!1,s;i=e.subscribe(Je(t,void 0,void 0,o=>{s=Nt(n(o,Si(n)(e))),i?(i.unsubscribe(),i=null,s.subscribe(t)):r=!0})),r&&(i.unsubscribe(),i=null,s.subscribe(t))})}function Em(n,e,t,i,r){return(s,o)=>{let a=t,c=e,l=0;s.subscribe(Je(o,u=>{let d=l++;c=a?n(c,u,d):(a=!0,u),i&&o.next(c)},r&&(()=>{a&&o.next(c),o.complete()})))}}function or(n,e){return Re(e)?St(n,e,1):St(n,1)}function Ei(n){return Ke((e,t)=>{let i=!1;e.subscribe(Je(t,r=>{i=!0,t.next(r)},()=>{i||t.next(n),t.complete()}))})}function ei(n){return n<=0?()=>dn:Ke((e,t)=>{let i=0;e.subscribe(Je(t,r=>{++i<=n&&(t.next(r),n<=i&&t.complete())}))})}function Bu(n){return Qe(()=>n)}function Ka(n=eM){return Ke((e,t)=>{let i=!1;e.subscribe(Je(t,r=>{i=!0,t.next(r)},()=>i?t.complete():t.error(n())))})}function eM(){return new Qn}function co(n){return Ke((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}function Fn(n,e){let t=arguments.length>=2;return i=>i.pipe(n?hn((r,s)=>n(r,s,i)):nn,ei(1),t?Ei(e):Ka(()=>new Qn))}function Kr(n){return n<=0?()=>dn:Ke((e,t)=>{let i=[];e.subscribe(Je(t,r=>{i.push(r),n<i.length&&i.shift()},()=>{for(let r of i)t.next(r);t.complete()},void 0,()=>{i=null}))})}function Vu(n,e){let t=arguments.length>=2;return i=>i.pipe(n?hn((r,s)=>n(r,s,i)):nn,Kr(1),t?Ei(e):Ka(()=>new Qn))}function zu(n,e){return Ke(Em(n,e,arguments.length>=2,!0))}function Hu(...n){let e=bi(n);return Ke((t,i)=>{(e?Zr(n,t,e):Zr(n,t)).subscribe(i)})}function fn(n,e){return Ke((t,i)=>{let r=null,s=0,o=!1,a=()=>o&&!r&&i.complete();t.subscribe(Je(i,c=>{r?.unsubscribe();let l=0,u=s++;Nt(n(c,u)).subscribe(r=Je(i,d=>i.next(e?e(c,d,u,l++):d),()=>{r=null,a()}))},()=>{o=!0,a()}))})}function Gu(n){return Ke((e,t)=>{Nt(n).subscribe(Je(t,()=>t.complete(),oo)),!t.closed&&e.subscribe(t)})}function Ot(n,e,t){let i=Re(n)||e||t?{next:n,error:e,complete:t}:n;return i?Ke((r,s)=>{var o;(o=i.subscribe)===null||o===void 0||o.call(i);let a=!0;r.subscribe(Je(s,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),s.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),s.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),s.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):nn}function dt(n){for(let e in n)if(n[e]===dt)return e;throw Error("Could not find renamed property on target object.")}function Kt(n){if(typeof n=="string")return n;if(Array.isArray(n))return"["+n.map(Kt).join(", ")+"]";if(n==null)return""+n;if(n.overriddenName)return`${n.overriddenName}`;if(n.name)return`${n.name}`;let e=n.toString();if(e==null)return""+e;let t=e.indexOf(`
`);return t===-1?e:e.substring(0,t)}function Tm(n,e){return n==null||n===""?e===null?"":e:e==null||e===""?n:n+" "+e}var tM=dt({__forward_ref__:dt});function sg(n){return n.__forward_ref__=sg,n.toString=function(){return Kt(this())},n}function mn(n){return og(n)?n():n}function og(n){return typeof n=="function"&&n.hasOwnProperty(tM)&&n.__forward_ref__===sg}function ag(n){return n&&!!n.\u0275providers}var De=class extends Error{constructor(e,t){super(Pd(e,t)),this.code=e}};function Pd(n,e){return`${`NG0${Math.abs(n)}`}${e?": "+e:""}`}var nM=dt({\u0275cmp:dt}),iM=dt({\u0275dir:dt}),rM=dt({\u0275pipe:dt}),sM=dt({\u0275mod:dt}),rc=dt({\u0275fac:dt}),lo=dt({__NG_ELEMENT_ID__:dt}),Cm=dt({__NG_ENV_ID__:dt});function cg(n){return typeof n=="string"?n:n==null?"":String(n)}function oM(n){return typeof n=="function"?n.name||n.toString():typeof n=="object"&&n!=null&&typeof n.type=="function"?n.type.name||n.type.toString():cg(n)}function aM(n,e){let t=e?`. Dependency path: ${e.join(" > ")} > ${n}`:"";throw new De(-200,`Circular dependency in DI detected for ${n}${t}`)}function Nd(n,e){throw new De(-201,!1)}function cM(n,e){n==null&&lM(e,n,null,"!=")}function lM(n,e,t,i){throw new Error(`ASSERTION ERROR: ${n}`+(i==null?"":` [Expected=> ${t} ${i} ${e} <=Actual]`))}function ye(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function So(n){return{providers:n.providers||[],imports:n.imports||[]}}function xc(n){return Am(n,ug)||Am(n,dg)}function lg(n){return xc(n)!==null}function Am(n,e){return n.hasOwnProperty(e)?n[e]:null}function uM(n){let e=n&&(n[ug]||n[dg]);return e||null}function Dm(n){return n&&(n.hasOwnProperty(Im)||n.hasOwnProperty(dM))?n[Im]:null}var ug=dt({\u0275prov:dt}),Im=dt({\u0275inj:dt}),dg=dt({ngInjectableDef:dt}),dM=dt({ngInjectorDef:dt}),He=function(n){return n[n.Default=0]="Default",n[n.Host=1]="Host",n[n.Self=2]="Self",n[n.SkipSelf=4]="SkipSelf",n[n.Optional=8]="Optional",n}(He||{}),ed;function hg(){return ed}function pn(n){let e=ed;return ed=n,e}function fg(n,e,t){let i=xc(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&He.Optional)return null;if(e!==void 0)return e;Nd(n,"Injector")}var uo=globalThis;var Ge=class{constructor(e,t){this._desc=e,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=ye({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};var hM={},ho=hM,td="__NG_DI_FLAG__",sc="ngTempTokenPath",fM="ngTokenPath",pM=/\n/gm,mM="\u0275",Rm="__source",ns;function gM(){return ns}function Ti(n){let e=ns;return ns=n,e}function vM(n,e=He.Default){if(ns===void 0)throw new De(-203,!1);return ns===null?fg(n,void 0,e):ns.get(n,e&He.Optional?null:void 0,e)}function Ie(n,e=He.Default){return(hg()||vM)(mn(n),e)}function ie(n,e=He.Default){return Ie(n,Mc(e))}function Mc(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function nd(n){let e=[];for(let t=0;t<n.length;t++){let i=mn(n[t]);if(Array.isArray(i)){if(i.length===0)throw new De(900,!1);let r,s=He.Default;for(let o=0;o<i.length;o++){let a=i[o],c=yM(a);typeof c=="number"?c===-1?r=a.token:s|=c:r=a}e.push(Ie(r,s))}else e.push(Ie(i))}return e}function pg(n,e){return n[td]=e,n.prototype[td]=e,n}function yM(n){return n[td]}function _M(n,e,t,i){let r=n[sc];throw e[Rm]&&r.unshift(e[Rm]),n.message=xM(`
`+n.message,r,t,i),n[fM]=r,n[sc]=null,n}function xM(n,e,t,i=null){n=n&&n.charAt(0)===`
`&&n.charAt(1)==mM?n.slice(2):n;let r=Kt(e);if(Array.isArray(e))r=e.map(Kt).join(" -> ");else if(typeof e=="object"){let s=[];for(let o in e)if(e.hasOwnProperty(o)){let a=e[o];s.push(o+":"+(typeof a=="string"?JSON.stringify(a):Kt(a)))}r=`{${s.join(", ")}}`}return`${t}${i?"("+i+")":""}[${r}]: ${n.replace(pM,`
  `)}`}function Eo(n){return{toString:n}.toString()}var mg=function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n}(mg||{}),Vn=function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n}(Vn||{}),fo={},Un=[];function gg(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let s=e.length;if(r+s===i||n.charCodeAt(r+s)<=32)return r}t=r+1}}function id(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let s=t[i++],o=t[i++],a=t[i++];n.setAttribute(e,o,a,s)}else{let s=r,o=t[++i];wM(s)?n.setProperty(e,s,o):n.setAttribute(e,s,o),i++}}return i}function MM(n){return n===3||n===4||n===6}function wM(n){return n.charCodeAt(0)===64}function Od(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?Pm(n,t,r,null,e[++i]):Pm(n,t,r,null,null))}}return n}function Pm(n,e,t,i,r){let s=0,o=n.length;if(e===-1)o=-1;else for(;s<n.length;){let a=n[s++];if(typeof a=="number"){if(a===e){o=-1;break}else if(a>e){o=s-1;break}}}for(;s<n.length;){let a=n[s];if(typeof a=="number")break;if(a===t){if(i===null){r!==null&&(n[s+1]=r);return}else if(i===n[s+1]){n[s+2]=r;return}}s++,i!==null&&s++,r!==null&&s++}o!==-1&&(n.splice(o,0,e),s=o+1),n.splice(s++,0,t),i!==null&&n.splice(s++,0,i),r!==null&&n.splice(s++,0,r)}var vg="ng-template";function bM(n,e,t){let i=0,r=!0;for(;i<n.length;){let s=n[i++];if(typeof s=="string"&&r){let o=n[i++];if(t&&s==="class"&&gg(o.toLowerCase(),e,0)!==-1)return!0}else if(s===1){for(;i<n.length&&typeof(s=n[i++])=="string";)if(s.toLowerCase()===e)return!0;return!1}else typeof s=="number"&&(r=!1)}return!1}function yg(n){return n.type===4&&n.value!==vg}function SM(n,e,t){let i=n.type===4&&!t?vg:n.value;return e===i}function EM(n,e,t){let i=4,r=n.attrs||[],s=AM(r),o=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!o&&!wn(i)&&!wn(c))return!1;if(o&&wn(c))continue;o=!1,i=c|i&1;continue}if(!o)if(i&4){if(i=2|i&1,c!==""&&!SM(n,c,t)||c===""&&e.length===1){if(wn(i))return!1;o=!0}}else{let l=i&8?c:e[++a];if(i&8&&n.attrs!==null){if(!bM(n.attrs,l,t)){if(wn(i))return!1;o=!0}continue}let u=i&8?"class":c,d=TM(u,r,yg(n),t);if(d===-1){if(wn(i))return!1;o=!0;continue}if(l!==""){let h;d>s?h="":h=r[d+1].toLowerCase();let m=i&8?h:null;if(m&&gg(m,l,0)!==-1||i&2&&l!==h){if(wn(i))return!1;o=!0}}}}return wn(i)||o}function wn(n){return(n&1)===0}function TM(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let s=!1;for(;r<e.length;){let o=e[r];if(o===n)return r;if(o===3||o===6)s=!0;else if(o===1||o===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(o===4)break;if(o===0){r+=4;continue}}r+=s?1:2}return-1}else return DM(e,n)}function CM(n,e,t=!1){for(let i=0;i<e.length;i++)if(EM(n,e[i],t))return!0;return!1}function AM(n){for(let e=0;e<n.length;e++){let t=n[e];if(MM(t))return e}return n.length}function DM(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function Nm(n,e){return n?":not("+e.trim()+")":e}function IM(n){let e=n[0],t=1,i=2,r="",s=!1;for(;t<n.length;){let o=n[t];if(typeof o=="string")if(i&2){let a=n[++t];r+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+o:i&4&&(r+=" "+o);else r!==""&&!wn(o)&&(e+=Nm(s,r),r=""),i=o,s=s||!wn(i);t++}return r!==""&&(e+=Nm(s,r)),e}function RM(n){return n.map(IM).join(",")}function PM(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let s=n[i];if(typeof s=="string")r===2?s!==""&&e.push(s,n[++i]):r===8&&t.push(s);else{if(!wn(r))break;r=s}i++}return{attrs:e,classes:t}}function Ri(n){return Eo(()=>{let e=bg(n),t=_t(fe({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===mg.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||Vn.Emulated,styles:n.styles||Un,_:null,schemas:n.schemas||null,tView:null,id:""});Sg(t);let i=n.dependencies;return t.directiveDefs=Lm(i,!1),t.pipeDefs=Lm(i,!0),t.id=LM(t),t})}function NM(n){return Ai(n)||_g(n)}function OM(n){return n!==null}function To(n){return Eo(()=>({type:n.type,bootstrap:n.bootstrap||Un,declarations:n.declarations||Un,imports:n.imports||Un,exports:n.exports||Un,transitiveCompileScopes:null,schemas:n.schemas||null,id:n.id||null}))}function Om(n,e){if(n==null)return fo;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],s=r;Array.isArray(r)&&(s=r[1],r=r[0]),t[r]=i,e&&(e[r]=s)}return t}function wc(n){return Eo(()=>{let e=bg(n);return Sg(e),e})}function Ai(n){return n[nM]||null}function _g(n){return n[iM]||null}function xg(n){return n[rM]||null}function Mg(n){let e=Ai(n)||_g(n)||xg(n);return e!==null?e.standalone:!1}function wg(n,e){let t=n[sM]||null;if(!t&&e===!0)throw new Error(`Type ${Kt(n)} does not have '\u0275mod' property.`);return t}function bg(n){let e={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputTransforms:null,inputConfig:n.inputs||fo,exportAs:n.exportAs||null,standalone:n.standalone===!0,signals:n.signals===!0,selectors:n.selectors||Un,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:Om(n.inputs,e),outputs:Om(n.outputs),debugInfo:null}}function Sg(n){n.features?.forEach(e=>e(n))}function Lm(n,e){if(!n)return null;let t=e?xg:NM;return()=>(typeof n=="function"?n():n).map(i=>t(i)).filter(OM)}function LM(n){let e=0,t=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,n.consts,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery].join("|");for(let r of t)e=Math.imul(31,e)+r.charCodeAt(0)<<0;return e+=2147483648,"c"+e}var ii=0,et=1,Ae=2,Bt=3,Sn=4,Tn=5,oc=6,po=7,En=8,ss=9,ti=10,Gt=11,mo=12,Fm=13,us=14,zn=15,bc=16,Jr=17,go=18,Sc=19,Eg=20,Ci=21,Wu=22,cr=23,ni=25,Tg=1;var lr=7,ac=8,cc=9,gn=10,Ld=function(n){return n[n.None=0]="None",n[n.HasTransplantedViews=2]="HasTransplantedViews",n}(Ld||{});function is(n){return Array.isArray(n)&&typeof n[Tg]=="object"}function ri(n){return Array.isArray(n)&&n[Tg]===!0}function Fd(n){return(n.flags&4)!==0}function Ec(n){return n.componentOffset>-1}function Tc(n){return(n.flags&1)===1}function Co(n){return!!n.template}function FM(n){return(n[Ae]&512)!==0}function os(n,e){let t=n.hasOwnProperty(rc);return t?n[rc]:null}var rd=class{constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function Cc(){return Cg}function Cg(n){return n.type.prototype.ngOnChanges&&(n.setInput=kM),UM}Cc.ngInherit=!0;function UM(){let n=Dg(this),e=n?.current;if(e){let t=n.previous;if(t===fo)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function kM(n,e,t,i){let r=this.declaredInputs[t],s=Dg(n)||BM(n,{previous:fo,current:null}),o=s.current||(s.current={}),a=s.previous,c=a[r];o[r]=new rd(c&&c.currentValue,e,a===fo),n[i]=e}var Ag="__ngSimpleChanges__";function Dg(n){return n[Ag]||null}function BM(n,e){return n[Ag]=e}var Um=null;var kn=function(n,e,t){Um?.(n,e,t)},VM="svg",zM="math",HM=!1;function GM(){return HM}function Hn(n){for(;Array.isArray(n);)n=n[ii];return n}function WM(n,e){return Hn(e[n])}function Cn(n,e){return Hn(e[n.index])}function Ig(n,e){return n.data[e]}function hr(n,e){let t=e[n];return is(t)?t:t[ii]}function Ud(n){return(n[Ae]&128)===128}function jM(n){return ri(n[Bt])}function as(n,e){return e==null?null:n[e]}function Rg(n){n[Jr]=0}function $M(n){n[Ae]&1024||(n[Ae]|=1024,Ud(n)&&vo(n))}function qM(n,e){for(;n>0;)e=e[us],n--;return e}function Pg(n){return n[Ae]&9216||n[cr]?.dirty}function sd(n){Pg(n)?vo(n):n[Ae]&64&&(GM()?(n[Ae]|=1024,vo(n)):n[ti].changeDetectionScheduler?.notify())}function vo(n){n[ti].changeDetectionScheduler?.notify();let e=yo(n);for(;e!==null&&!(e[Ae]&8192||(e[Ae]|=8192,!Ud(e)));)e=yo(e)}function Ng(n,e){if((n[Ae]&256)===256)throw new De(911,!1);n[Ci]===null&&(n[Ci]=[]),n[Ci].push(e)}function XM(n,e){if(n[Ci]===null)return;let t=n[Ci].indexOf(e);t!==-1&&n[Ci].splice(t,1)}function yo(n){let e=n[Bt];return ri(e)?e[Bt]:e}var tt={lFrame:zg(null),bindingsEnabled:!0,skipHydrationRootTNode:null};function YM(){return tt.lFrame.elementDepthCount}function ZM(){tt.lFrame.elementDepthCount++}function KM(){tt.lFrame.elementDepthCount--}function Og(){return tt.bindingsEnabled}function JM(){return tt.skipHydrationRootTNode!==null}function QM(n){return tt.skipHydrationRootTNode===n}function ew(){tt.skipHydrationRootTNode=null}function At(){return tt.lFrame.lView}function si(){return tt.lFrame.tView}function Ac(n){return tt.lFrame.contextLView=n,n[En]}function Dc(n){return tt.lFrame.contextLView=null,n}function An(){let n=Lg();for(;n!==null&&n.type===64;)n=n.parent;return n}function Lg(){return tt.lFrame.currentTNode}function tw(){let n=tt.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function fr(n,e){let t=tt.lFrame;t.currentTNode=n,t.isParent=e}function kd(){return tt.lFrame.isParent}function Fg(){tt.lFrame.isParent=!1}function nw(n){return tt.lFrame.bindingIndex=n}function Ug(){return tt.lFrame.bindingIndex++}function iw(){return tt.lFrame.inI18n}function rw(n,e){let t=tt.lFrame;t.bindingIndex=t.bindingRootIndex=n,od(e)}function sw(){return tt.lFrame.currentDirectiveIndex}function od(n){tt.lFrame.currentDirectiveIndex=n}function kg(n){tt.lFrame.currentQueryIndex=n}function ow(n){let e=n[et];return e.type===2?e.declTNode:e.type===1?n[Tn]:null}function Bg(n,e,t){if(t&He.SkipSelf){let r=e,s=n;for(;r=r.parent,r===null&&!(t&He.Host);)if(r=ow(s),r===null||(s=s[us],r.type&10))break;if(r===null)return!1;e=r,n=s}let i=tt.lFrame=Vg();return i.currentTNode=e,i.lView=n,!0}function Bd(n){let e=Vg(),t=n[et];tt.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function Vg(){let n=tt.lFrame,e=n===null?null:n.child;return e===null?zg(n):e}function zg(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function Hg(){let n=tt.lFrame;return tt.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var Gg=Hg;function Vd(){let n=Hg();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function aw(n){return(tt.lFrame.contextLView=qM(n,tt.lFrame.contextLView))[En]}function zd(){return tt.lFrame.selectedIndex}function ur(n){tt.lFrame.selectedIndex=n}function cw(){let n=tt.lFrame;return Ig(n.tView,n.selectedIndex)}function lw(){return tt.lFrame.currentNamespace}var Wg=!0;function Ic(){return Wg}function Rc(n){Wg=n}function uw(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(i){let o=Cg(e);(t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o)}r&&(t.preOrderHooks??=[]).push(0-n,r),s&&((t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s))}function Pc(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let s=n.data[t].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=s;o&&(n.contentHooks??=[]).push(-t,o),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function Qa(n,e,t){jg(n,e,3,t)}function ec(n,e,t,i){(n[Ae]&3)===t&&jg(n,e,t,i)}function ju(n,e){let t=n[Ae];(t&3)===e&&(t&=16383,t+=1,n[Ae]=t)}function jg(n,e,t,i){let r=i!==void 0?n[Jr]&65535:0,s=i??-1,o=e.length-1,a=0;for(let c=r;c<o;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[Jr]+=65536),(a<s||s==-1)&&(dw(n,t,e,c),n[Jr]=(n[Jr]&4294901760)+c+2),c++}function km(n,e){kn(4,n,e);let t=tn(null);try{e.call(n)}finally{tn(t),kn(5,n,e)}}function dw(n,e,t,i){let r=t[i]<0,s=t[i+1],o=r?-t[i]:t[i],a=n[o];r?n[Ae]>>14<n[Jr]>>16&&(n[Ae]&3)===e&&(n[Ae]+=16384,km(a,s)):km(a,s)}var rs=-1,_o=class{constructor(e,t,i){this.factory=e,this.resolving=!1,this.canSeeViewProviders=t,this.injectImpl=i}};function hw(n){return n instanceof _o}function fw(n){return(n.flags&8)!==0}function pw(n){return(n.flags&16)!==0}function $g(n){return n!==rs}function lc(n){return n&32767}function mw(n){return n>>16}function uc(n,e){let t=mw(n),i=e;for(;t>0;)i=i[us],t--;return i}var ad=!0;function Bm(n){let e=ad;return ad=n,e}var gw=256,qg=gw-1,Xg=5,vw=0,Bn={};function yw(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(lo)&&(i=t[lo]),i==null&&(i=t[lo]=vw++);let r=i&qg,s=1<<r;e.data[n+(r>>Xg)]|=s}function Yg(n,e){let t=Zg(n,e);if(t!==-1)return t;let i=e[et];i.firstCreatePass&&(n.injectorIndex=e.length,$u(i.data,n),$u(e,null),$u(i.blueprint,null));let r=Hd(n,e),s=n.injectorIndex;if($g(r)){let o=lc(r),a=uc(r,e),c=a[et].data;for(let l=0;l<8;l++)e[s+l]=a[o+l]|c[o+l]}return e[s+8]=r,s}function $u(n,e){n.push(0,0,0,0,0,0,0,0,e)}function Zg(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function Hd(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=tv(r),i===null)return rs;if(t++,r=r[us],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return rs}function _w(n,e,t){yw(n,e,t)}function Kg(n,e,t){if(t&He.Optional||n!==void 0)return n;Nd(e,"NodeInjector")}function Jg(n,e,t,i){if(t&He.Optional&&i===void 0&&(i=null),!(t&(He.Self|He.Host))){let r=n[ss],s=pn(void 0);try{return r?r.get(e,i,t&He.Optional):fg(e,i,t&He.Optional)}finally{pn(s)}}return Kg(i,e,t)}function Qg(n,e,t,i=He.Default,r){if(n!==null){if(e[Ae]&2048&&!(i&He.Self)){let o=Sw(n,e,t,i,Bn);if(o!==Bn)return o}let s=ev(n,e,t,i,Bn);if(s!==Bn)return s}return Jg(e,t,i,r)}function ev(n,e,t,i,r){let s=ww(t);if(typeof s=="function"){if(!Bg(e,n,i))return i&He.Host?Kg(r,t,i):Jg(e,t,i,r);try{let o;if(o=s(i),o==null&&!(i&He.Optional))Nd(t);else return o}finally{Gg()}}else if(typeof s=="number"){let o=null,a=Zg(n,e),c=rs,l=i&He.Host?e[zn][Tn]:null;for((a===-1||i&He.SkipSelf)&&(c=a===-1?Hd(n,e):e[a+8],c===rs||!zm(i,!1)?a=-1:(o=e[et],a=lc(c),e=uc(c,e)));a!==-1;){let u=e[et];if(Vm(s,a,u.data)){let d=xw(a,e,t,o,i,l);if(d!==Bn)return d}c=e[a+8],c!==rs&&zm(i,e[et].data[a+8]===l)&&Vm(s,a,e)?(o=u,a=lc(c),e=uc(c,e)):a=-1}}return r}function xw(n,e,t,i,r,s){let o=e[et],a=o.data[n+8],c=i==null?Ec(a)&&ad:i!=o&&(a.type&3)!==0,l=r&He.Host&&s===a,u=Mw(a,o,t,c,l);return u!==null?xo(e,o,u,a):Bn}function Mw(n,e,t,i,r){let s=n.providerIndexes,o=e.data,a=s&1048575,c=n.directiveStart,l=n.directiveEnd,u=s>>20,d=i?a:a+u,h=r?a+u:l;for(let m=d;m<h;m++){let v=o[m];if(m<c&&t===v||m>=c&&v.type===t)return m}if(r){let m=o[c];if(m&&Co(m)&&m.type===t)return c}return null}function xo(n,e,t,i){let r=n[t],s=e.data;if(hw(r)){let o=r;o.resolving&&aM(oM(s[t]));let a=Bm(o.canSeeViewProviders);o.resolving=!0;let c,l=o.injectImpl?pn(o.injectImpl):null,u=Bg(n,i,He.Default);try{r=n[t]=o.factory(void 0,s,n,i),e.firstCreatePass&&t>=i.directiveStart&&uw(t,s[t],e)}finally{l!==null&&pn(l),Bm(a),o.resolving=!1,Gg()}}return r}function ww(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(lo)?n[lo]:void 0;return typeof e=="number"?e>=0?e&qg:bw:e}function Vm(n,e,t){let i=1<<n;return!!(t[e+(n>>Xg)]&i)}function zm(n,e){return!(n&He.Self)&&!(n&He.Host&&e)}var ar=class{constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return Qg(this._tNode,this._lView,e,Mc(i),t)}};function bw(){return new ar(An(),At())}function Gd(n){return Eo(()=>{let e=n.prototype.constructor,t=e[rc]||cd(e),i=Object.prototype,r=Object.getPrototypeOf(n.prototype).constructor;for(;r&&r!==i;){let s=r[rc]||cd(r);if(s&&s!==t)return s;r=Object.getPrototypeOf(r)}return s=>new s})}function cd(n){return og(n)?()=>{let e=cd(mn(n));return e&&e()}:os(n)}function Sw(n,e,t,i,r){let s=n,o=e;for(;s!==null&&o!==null&&o[Ae]&2048&&!(o[Ae]&512);){let a=ev(s,o,t,i|He.Self,Bn);if(a!==Bn)return a;let c=s.parent;if(!c){let l=o[Eg];if(l){let u=l.get(t,Bn,i);if(u!==Bn)return u}c=tv(o),o=o[us]}s=c}return r}function tv(n){let e=n[et],t=e.type;return t===2?e.declTNode:t===1?n[Tn]:null}var Ja="__parameters__";function Ew(n){return function(...t){if(n){let i=n(...t);for(let r in i)this[r]=i[r]}}}function nv(n,e,t){return Eo(()=>{let i=Ew(e);function r(...s){if(this instanceof r)return i.apply(this,s),this;let o=new r(...s);return a.annotation=o,a;function a(c,l,u){let d=c.hasOwnProperty(Ja)?c[Ja]:Object.defineProperty(c,Ja,{value:[]})[Ja];for(;d.length<=u;)d.push(null);return(d[u]=d[u]||[]).push(o),c}}return t&&(r.prototype=Object.create(t.prototype)),r.prototype.ngMetadataName=n,r.annotationCls=r,r})}function Tw(n){return typeof n=="function"}function Wd(n,e){n.forEach(t=>Array.isArray(t)?Wd(t,e):e(t))}function iv(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function dc(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}var jd=pg(nv("Optional"),8);var rv=pg(nv("SkipSelf"),4);var cs=new Ge("ENVIRONMENT_INITIALIZER"),sv=new Ge("INJECTOR",-1),ov=new Ge("INJECTOR_DEF_TYPES"),hc=class{get(e,t=ho){if(t===ho){let i=new Error(`NullInjectorError: No provider for ${Kt(e)}!`);throw i.name="NullInjectorError",i}return t}};function Nc(n){return{\u0275providers:n}}function Cw(...n){return{\u0275providers:av(!0,n),\u0275fromNgModule:!0}}function av(n,...e){let t=[],i=new Set,r,s=o=>{t.push(o)};return Wd(e,o=>{let a=o;ld(a,s,[],i)&&(r||=[],r.push(a))}),r!==void 0&&cv(r,s),t}function cv(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];$d(r,s=>{e(s,i)})}}function ld(n,e,t,i){if(n=mn(n),!n)return!1;let r=null,s=Dm(n),o=!s&&Ai(n);if(!s&&!o){let c=n.ngModule;if(s=Dm(c),s)r=c;else return!1}else{if(o&&!o.standalone)return!1;r=n}let a=i.has(r);if(o){if(a)return!1;if(i.add(r),o.dependencies){let c=typeof o.dependencies=="function"?o.dependencies():o.dependencies;for(let l of c)ld(l,e,t,i)}}else if(s){if(s.imports!=null&&!a){i.add(r);let l;try{Wd(s.imports,u=>{ld(u,e,t,i)&&(l||=[],l.push(u))})}finally{}l!==void 0&&cv(l,e)}if(!a){let l=os(r)||(()=>new r);e({provide:r,useFactory:l,deps:Un},r),e({provide:ov,useValue:r,multi:!0},r),e({provide:cs,useValue:()=>Ie(r),multi:!0},r)}let c=s.providers;if(c!=null&&!a){let l=n;$d(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function $d(n,e){for(let t of n)ag(t)&&(t=t.\u0275providers),Array.isArray(t)?$d(t,e):e(t)}var Aw=dt({provide:String,useValue:dt});function lv(n){return n!==null&&typeof n=="object"&&Aw in n}function Dw(n){return!!(n&&n.useExisting)}function Iw(n){return!!(n&&n.useFactory)}function ud(n){return typeof n=="function"}var Oc=new Ge("Set Injector scope."),tc={},Rw={},qu;function qd(){return qu===void 0&&(qu=new hc),qu}var sn=class{},Mo=class extends sn{get destroyed(){return this._destroyed}constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,hd(e,o=>this.processProvider(o)),this.records.set(sv,Qr(void 0,this)),r.has("environment")&&this.records.set(sn,Qr(void 0,this));let s=this.records.get(Oc);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(ov,Un,He.Self))}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{for(let t of this._ngOnDestroyHooks)t.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let t of e)t()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear()}}onDestroy(e){return this.assertNotDestroyed(),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){this.assertNotDestroyed();let t=Ti(this),i=pn(void 0),r;try{return e()}finally{Ti(t),pn(i)}}get(e,t=ho,i=He.Default){if(this.assertNotDestroyed(),e.hasOwnProperty(Cm))return e[Cm](this);i=Mc(i);let r,s=Ti(this),o=pn(void 0);try{if(!(i&He.SkipSelf)){let c=this.records.get(e);if(c===void 0){let l=Uw(e)&&xc(e);l&&this.injectableDefInScope(l)?c=Qr(dd(e),tc):c=null,this.records.set(e,c)}if(c!=null)return this.hydrate(e,c)}let a=i&He.Self?qd():this.parent;return t=i&He.Optional&&t===ho?null:t,a.get(e,t)}catch(a){if(a.name==="NullInjectorError"){if((a[sc]=a[sc]||[]).unshift(Kt(e)),s)throw a;return _M(a,e,"R3InjectorError",this.source)}else throw a}finally{pn(o),Ti(s)}}resolveInjectorInitializers(){let e=Ti(this),t=pn(void 0),i;try{let r=this.get(cs,Un,He.Self);for(let s of r)s()}finally{Ti(e),pn(t)}}toString(){let e=[],t=this.records;for(let i of t.keys())e.push(Kt(i));return`R3Injector[${e.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new De(205,!1)}processProvider(e){e=mn(e);let t=ud(e)?e:mn(e&&e.provide),i=Nw(e);if(!ud(e)&&e.multi===!0){let r=this.records.get(t);r||(r=Qr(void 0,tc,!0),r.factory=()=>nd(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,i)}hydrate(e,t){return t.value===tc&&(t.value=Rw,t.value=t.factory()),typeof t.value=="object"&&t.value&&Fw(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}injectableDefInScope(e){if(!e.providedIn)return!1;let t=mn(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function dd(n){let e=xc(n),t=e!==null?e.factory:os(n);if(t!==null)return t;if(n instanceof Ge)throw new De(204,!1);if(n instanceof Function)return Pw(n);throw new De(204,!1)}function Pw(n){if(n.length>0)throw new De(204,!1);let t=uM(n);return t!==null?()=>t.factory(n):()=>new n}function Nw(n){if(lv(n))return Qr(void 0,n.useValue);{let e=Ow(n);return Qr(e,tc)}}function Ow(n,e,t){let i;if(ud(n)){let r=mn(n);return os(r)||dd(r)}else if(lv(n))i=()=>mn(n.useValue);else if(Iw(n))i=()=>n.useFactory(...nd(n.deps||[]));else if(Dw(n))i=()=>Ie(mn(n.useExisting));else{let r=mn(n&&(n.useClass||n.provide));if(Lw(n))i=()=>new r(...nd(n.deps));else return os(r)||dd(r)}return i}function Qr(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function Lw(n){return!!n.deps}function Fw(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function Uw(n){return typeof n=="function"||typeof n=="object"&&n instanceof Ge}function hd(n,e){for(let t of n)Array.isArray(t)?hd(t,e):t&&ag(t)?hd(t.\u0275providers,e):e(t)}function Pi(n,e){n instanceof Mo&&n.assertNotDestroyed();let t,i=Ti(n),r=pn(void 0);try{return e()}finally{Ti(i),pn(r)}}function kw(n){if(!hg()&&!gM())throw new De(-203,!1)}function Hm(n,e=null,t=null,i){let r=uv(n,e,t,i);return r.resolveInjectorInitializers(),r}function uv(n,e=null,t=null,i,r=new Set){let s=[t||Un,Cw(n)];return i=i||(typeof n=="object"?void 0:Kt(n)),new Mo(s,e||qd(),i||null,r)}var oi=(()=>{let e=class e{static create(i,r){if(Array.isArray(i))return Hm({name:""},r,i,"");{let s=i.name??"";return Hm({name:s},i.parent,i.providers,s)}}};e.THROW_IF_NOT_FOUND=ho,e.NULL=new hc,e.\u0275prov=ye({token:e,providedIn:"any",factory:()=>Ie(sv)}),e.__NG_ELEMENT_ID__=-1;let n=e;return n})();var fd;function dv(n){fd=n}function Bw(){if(fd!==void 0)return fd;if(typeof document<"u")return document;throw new De(210,!1)}var Xd=new Ge("AppId",{providedIn:"root",factory:()=>Vw}),Vw="ng",Yd=new Ge("Platform Initializer"),Ni=new Ge("Platform ID",{providedIn:"platform",factory:()=>"unknown"});var Zd=new Ge("CSP nonce",{providedIn:"root",factory:()=>Bw().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});function hv(n){return n instanceof Function?n():n}function zw(n){return(n??ie(oi)).get(Ni)==="browser"}function fv(n){return(n.flags&128)===128}var pr=function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n}(pr||{}),Hw=/^>|^->|<!--|-->|--!>|<!-$/g,Gw=/(<|>)/g,Ww="\u200B$1\u200B";function jw(n){return n.replace(Hw,e=>e.replace(Gw,Ww))}var pv=new Map,$w=0;function qw(){return $w++}function Xw(n){pv.set(n[Sc],n)}function Yw(n){pv.delete(n[Sc])}var Gm="__ngContext__";function Di(n,e){is(e)?(n[Gm]=e[Sc],Xw(e)):n[Gm]=e}var Zw;function Kd(n,e){return Zw(n,e)}function es(n,e,t,i,r){if(i!=null){let s,o=!1;ri(i)?s=i:is(i)&&(o=!0,i=i[ii]);let a=Hn(i);n===0&&t!==null?r==null?_v(e,t,a):fc(e,t,a,r||null,!0):n===1&&t!==null?fc(e,t,a,r||null,!0):n===2?pb(e,a,o):n===3&&e.destroyNode(a),s!=null&&gb(e,n,s,t,r)}}function Kw(n,e){return n.createText(e)}function Jw(n,e,t){n.setValue(e,t)}function Qw(n,e){return n.createComment(jw(e))}function mv(n,e,t){return n.createElement(e,t)}function eb(n,e){gv(n,e),e[ii]=null,e[Tn]=null}function tb(n,e,t,i,r,s){i[ii]=r,i[Tn]=e,Fc(n,i,t,1,r,s)}function gv(n,e){e[ti].changeDetectionScheduler?.notify(),Fc(n,e,e[Gt],2,null,null)}function nb(n){let e=n[mo];if(!e)return Xu(n[et],n);for(;e;){let t=null;if(is(e))t=e[mo];else{let i=e[gn];i&&(t=i)}if(!t){for(;e&&!e[Sn]&&e!==n;)is(e)&&Xu(e[et],e),e=e[Bt];e===null&&(e=n),is(e)&&Xu(e[et],e),t=e&&e[Sn]}e=t}}function ib(n,e,t,i){let r=gn+i,s=t.length;i>0&&(t[r-1][Sn]=e),i<s-gn?(e[Sn]=t[r],iv(t,gn+i,e)):(t.push(e),e[Sn]=null),e[Bt]=t;let o=e[bc];o!==null&&t!==o&&rb(o,e);let a=e[go];a!==null&&a.insertView(n),sd(e),e[Ae]|=128}function rb(n,e){let t=n[cc],r=e[Bt][Bt][zn];e[zn]!==r&&(n[Ae]|=Ld.HasTransplantedViews),t===null?n[cc]=[e]:t.push(e)}function vv(n,e){let t=n[cc],i=t.indexOf(e);t.splice(i,1)}function pd(n,e){if(n.length<=gn)return;let t=gn+e,i=n[t];if(i){let r=i[bc];r!==null&&r!==n&&vv(r,i),e>0&&(n[t-1][Sn]=i[Sn]);let s=dc(n,gn+e);eb(i[et],i);let o=s[go];o!==null&&o.detachView(s[et]),i[Bt]=null,i[Sn]=null,i[Ae]&=-129}return i}function yv(n,e){if(!(e[Ae]&256)){let t=e[Gt];t.destroyNode&&Fc(n,e,t,3,null,null),nb(e)}}function Xu(n,e){if(!(e[Ae]&256)){e[Ae]&=-129,e[Ae]|=256,e[cr]&&Zp(e[cr]),ob(n,e),sb(n,e),e[et].type===1&&e[Gt].destroy();let t=e[bc];if(t!==null&&ri(e[Bt])){t!==e[Bt]&&vv(t,e);let i=e[go];i!==null&&i.detachView(n)}Yw(e)}}function sb(n,e){let t=n.cleanup,i=e[po];if(t!==null)for(let s=0;s<t.length-1;s+=2)if(typeof t[s]=="string"){let o=t[s+3];o>=0?i[o]():i[-o].unsubscribe(),s+=2}else{let o=i[t[s+1]];t[s].call(o)}i!==null&&(e[po]=null);let r=e[Ci];if(r!==null){e[Ci]=null;for(let s=0;s<r.length;s++){let o=r[s];o()}}}function ob(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof _o)){let s=t[i+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){let a=r[s[o]],c=s[o+1];kn(4,a,c);try{c.call(a)}finally{kn(5,a,c)}}else{kn(4,r,s);try{s.call(r)}finally{kn(5,r,s)}}}}}function ab(n,e,t){return cb(n,e.parent,t)}function cb(n,e,t){let i=e;for(;i!==null&&i.type&40;)e=i,i=e.parent;if(i===null)return t[ii];{let{componentOffset:r}=i;if(r>-1){let{encapsulation:s}=n.data[i.directiveStart+r];if(s===Vn.None||s===Vn.Emulated)return null}return Cn(i,t)}}function fc(n,e,t,i,r){n.insertBefore(e,t,i,r)}function _v(n,e,t){n.appendChild(e,t)}function Wm(n,e,t,i,r){i!==null?fc(n,e,t,i,r):_v(n,e,t)}function lb(n,e,t,i){n.removeChild(e,t,i)}function Jd(n,e){return n.parentNode(e)}function ub(n,e){return n.nextSibling(e)}function db(n,e,t){return fb(n,e,t)}function hb(n,e,t){return n.type&40?Cn(n,t):null}var fb=hb,jm;function Lc(n,e,t,i){let r=ab(n,i,e),s=e[Gt],o=i.parent||e[Tn],a=db(o,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)Wm(s,r,t[c],a,!1);else Wm(s,r,t,a,!1);jm!==void 0&&jm(s,i,e,t,r)}function nc(n,e){if(e!==null){let t=e.type;if(t&3)return Cn(e,n);if(t&4)return md(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return nc(n,i);{let r=n[e.index];return ri(r)?md(-1,r):Hn(r)}}else{if(t&32)return Kd(e,n)()||Hn(n[e.index]);{let i=xv(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=yo(n[zn]);return nc(r,i)}else return nc(n,e.next)}}}return null}function xv(n,e){if(e!==null){let i=n[zn][Tn],r=e.projection;return i.projection[r]}return null}function md(n,e){let t=gn+n+1;if(t<e.length){let i=e[t],r=i[et].firstChild;if(r!==null)return nc(i,r)}return e[lr]}function pb(n,e,t){let i=Jd(n,e);i&&lb(n,i,e,t)}function Qd(n,e,t,i,r,s,o){for(;t!=null;){let a=i[t.index],c=t.type;if(o&&e===0&&(a&&Di(Hn(a),i),t.flags|=2),(t.flags&32)!==32)if(c&8)Qd(n,e,t.child,i,r,s,!1),es(e,n,r,a,s);else if(c&32){let l=Kd(t,i),u;for(;u=l();)es(e,n,r,u,s);es(e,n,r,a,s)}else c&16?mb(n,e,i,t,r,s):es(e,n,r,a,s);t=o?t.projectionNext:t.next}}function Fc(n,e,t,i,r,s){Qd(t,i,n.firstChild,e,r,s,!1)}function mb(n,e,t,i,r,s){let o=t[zn],c=o[Tn].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];es(e,n,r,u,s)}else{let l=c,u=o[Bt];fv(i)&&(l.flags|=128),Qd(n,e,l,u,r,s,!0)}}function gb(n,e,t,i,r){let s=t[lr],o=Hn(t);s!==o&&es(e,n,i,s,r);for(let a=gn;a<t.length;a++){let c=t[a];Fc(c[et],c,n,e,i,s)}}function vb(n,e,t){n.setAttribute(e,"style",t)}function Mv(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function wv(n,e,t){let{mergedAttrs:i,classes:r,styles:s}=t;i!==null&&id(n,e,i),r!==null&&Mv(n,e,r),s!==null&&vb(n,e,s)}var gd=class{};var yb="h",_b="b";var xb=()=>null;function eh(n,e,t=!1){return xb(n,e,t)}var vd=class{},pc=class{};function Mb(n){let e=Error(`No component factory found for ${Kt(n)}.`);return e[wb]=n,e}var wb="ngComponent";var yd=class{resolveComponentFactory(e){throw Mb(e)}},Uc=(()=>{let e=class e{};e.NULL=new yd;let n=e;return n})();function bb(){return kc(An(),At())}function kc(n,e){return new Bc(Cn(n,e))}var Bc=(()=>{let e=class e{constructor(i){this.nativeElement=i}};e.__NG_ELEMENT_ID__=bb;let n=e;return n})();var wo=class{};var Sb=(()=>{let e=class e{};e.\u0275prov=ye({token:e,providedIn:"root",factory:()=>null});let n=e;return n})(),Yu={};function mc(n,e,t,i,r=!1){for(;t!==null;){let s=e[t.index];s!==null&&i.push(Hn(s)),ri(s)&&Eb(s,i);let o=t.type;if(o&8)mc(n,e,t.child,i);else if(o&32){let a=Kd(t,e),c;for(;c=a();)i.push(c)}else if(o&16){let a=xv(e,t);if(Array.isArray(a))i.push(...a);else{let c=yo(e[zn]);mc(c[et],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function Eb(n,e){for(let t=gn;t<n.length;t++){let i=n[t],r=i[et].firstChild;r!==null&&mc(i[et],i,r,e)}n[lr]!==n[ii]&&e.push(n[lr])}var bv=[];function Tb(n){return n[cr]??Cb(n)}function Cb(n){let e=bv.pop()??Object.create(Db);return e.lView=n,e}function Ab(n){n.lView[cr]!==n&&(n.lView=null,bv.push(n))}var Db=_t(fe({},qp),{consumerIsAlwaysLive:!0,consumerMarkedDirty:n=>{vo(n.lView)},consumerOnSignalRead(){this.lView[cr]=this}});function Sv(n){return Tv(n[mo])}function Ev(n){return Tv(n[Sn])}function Tv(n){for(;n!==null&&!ri(n);)n=n[Sn];return n}var Ib="ngOriginalError";function Zu(n){return n[Ib]}var Gn=class{constructor(){this._console=console}handleError(e){let t=this._findOriginalError(e);this._console.error("ERROR",e),t&&this._console.error("ORIGINAL ERROR",t)}_findOriginalError(e){let t=e&&Zu(e);for(;t&&Zu(t);)t=Zu(t);return t||null}},Cv=new Ge("",{providedIn:"root",factory:()=>ie(Gn).handleError.bind(void 0)});var Av=!1,Rb=new Ge("",{providedIn:"root",factory:()=>Av});var Vc={};function mr(n=1){Dv(si(),At(),zd()+n,!1)}function Dv(n,e,t,i){if(!i)if((e[Ae]&3)===3){let s=n.preOrderCheckHooks;s!==null&&Qa(e,s,t)}else{let s=n.preOrderHooks;s!==null&&ec(e,s,0,t)}ur(t)}function Ao(n,e=He.Default){let t=At();if(t===null)return Ie(n,e);let i=An();return Qg(i,t,mn(n),e)}function Iv(){let n="invalid";throw new Error(n)}function Pb(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)ur(~r);else{let s=r,o=t[++i],a=t[++i];rw(o,s);let c=e[s];a(2,c)}}}finally{ur(-1)}}function zc(n,e,t,i,r,s,o,a,c,l,u){let d=e.blueprint.slice();return d[ii]=r,d[Ae]=i|4|128|8|64,(l!==null||n&&n[Ae]&2048)&&(d[Ae]|=2048),Rg(d),d[Bt]=d[us]=n,d[En]=t,d[ti]=o||n&&n[ti],d[Gt]=a||n&&n[Gt],d[ss]=c||n&&n[ss]||null,d[Tn]=s,d[Sc]=qw(),d[oc]=u,d[Eg]=l,d[zn]=e.type==2?n[zn]:d,d}function Do(n,e,t,i,r){let s=n.data[e];if(s===null)s=Nb(n,e,t,i,r),iw()&&(s.flags|=32);else if(s.type&64){s.type=t,s.value=i,s.attrs=r;let o=tw();s.injectorIndex=o===null?-1:o.injectorIndex}return fr(s,!0),s}function Nb(n,e,t,i,r){let s=Lg(),o=kd(),a=o?s:s&&s.parent,c=n.data[e]=kb(n,a,t,e,i,r);return n.firstChild===null&&(n.firstChild=c),s!==null&&(o?s.child==null&&c.parent!==null&&(s.child=c):s.next===null&&(s.next=c,c.prev=s)),c}function Rv(n,e,t,i){if(t===0)return-1;let r=e.length;for(let s=0;s<t;s++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function Pv(n,e,t,i,r){let s=zd(),o=i&2;try{ur(-1),o&&e.length>ni&&Dv(n,e,ni,!1),kn(o?2:0,r),t(i,r)}finally{ur(s),kn(o?3:1,r)}}function th(n,e,t){if(Fd(e)){let i=tn(null);try{let r=e.directiveStart,s=e.directiveEnd;for(let o=r;o<s;o++){let a=n.data[o];a.contentQueries&&a.contentQueries(1,t[o],o)}}finally{tn(i)}}}function nh(n,e,t){Og()&&(jb(n,e,t,Cn(t,e)),(t.flags&64)===64&&Lv(n,e,t))}function ih(n,e,t=Cn){let i=e.localNames;if(i!==null){let r=e.index+1;for(let s=0;s<i.length;s+=2){let o=i[s+1],a=o===-1?t(e,n):n[o];n[r++]=a}}}function Nv(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=rh(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function rh(n,e,t,i,r,s,o,a,c,l,u){let d=ni+i,h=d+r,m=Ob(d,h),v=typeof l=="function"?l():l;return m[et]={type:n,blueprint:m,template:t,queries:null,viewQuery:a,declTNode:e,data:m.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:h,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof s=="function"?s():s,pipeRegistry:typeof o=="function"?o():o,firstChild:null,schemas:c,consts:v,incompleteFirstPass:!1,ssrId:u}}function Ob(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:Vc);return t}function Lb(n,e,t,i){let s=i.get(Rb,Av)||t===Vn.ShadowDom,o=n.selectRootElement(e,s);return Fb(o),o}function Fb(n){Ub(n)}var Ub=()=>null;function kb(n,e,t,i,r,s){let o=e?e.injectorIndex:-1,a=0;return JM()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:s,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function $m(n,e,t,i){for(let r in n)if(n.hasOwnProperty(r)){t=t===null?{}:t;let s=n[r];i===null?qm(t,e,r,s):i.hasOwnProperty(r)&&qm(t,e,i[r],s)}return t}function qm(n,e,t,i){n.hasOwnProperty(t)?n[t].push(e,i):n[t]=[e,i]}function Bb(n,e,t){let i=e.directiveStart,r=e.directiveEnd,s=n.data,o=e.attrs,a=[],c=null,l=null;for(let u=i;u<r;u++){let d=s[u],h=t?t.get(d):null,m=h?h.inputs:null,v=h?h.outputs:null;c=$m(d.inputs,u,c,m),l=$m(d.outputs,u,l,v);let _=c!==null&&o!==null&&!yg(e)?eS(c,u,o):null;a.push(_)}c!==null&&(c.hasOwnProperty("class")&&(e.flags|=8),c.hasOwnProperty("style")&&(e.flags|=16)),e.initialInputs=a,e.inputs=c,e.outputs=l}function Vb(n){return n==="class"?"className":n==="for"?"htmlFor":n==="formaction"?"formAction":n==="innerHtml"?"innerHTML":n==="readonly"?"readOnly":n==="tabindex"?"tabIndex":n}function zb(n,e,t,i,r,s,o,a){let c=Cn(e,t),l=e.inputs,u;!a&&l!=null&&(u=l[i])?(oh(n,t,u,i,r),Ec(e)&&Hb(t,e.index)):e.type&3?(i=Vb(i),r=o!=null?o(r,e.value||"",i):r,s.setProperty(c,i,r)):e.type&12}function Hb(n,e){let t=hr(e,n);t[Ae]&16||(t[Ae]|=64)}function sh(n,e,t,i){if(Og()){let r=i===null?null:{"":-1},s=qb(n,t),o,a;s===null?o=a=null:[o,a]=s,o!==null&&Ov(n,e,t,o,r,a),r&&Xb(t,i,r)}t.mergedAttrs=Od(t.mergedAttrs,t.attrs)}function Ov(n,e,t,i,r,s){for(let l=0;l<i.length;l++)_w(Yg(t,e),n,i[l].type);Zb(t,n.data.length,i.length);for(let l=0;l<i.length;l++){let u=i[l];u.providersResolver&&u.providersResolver(u)}let o=!1,a=!1,c=Rv(n,e,i.length,null);for(let l=0;l<i.length;l++){let u=i[l];t.mergedAttrs=Od(t.mergedAttrs,u.hostAttrs),Kb(n,t,e,c,u),Yb(c,u,r),u.contentQueries!==null&&(t.flags|=4),(u.hostBindings!==null||u.hostAttrs!==null||u.hostVars!==0)&&(t.flags|=64);let d=u.type.prototype;!o&&(d.ngOnChanges||d.ngOnInit||d.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),o=!0),!a&&(d.ngOnChanges||d.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),a=!0),c++}Bb(n,t,s)}function Gb(n,e,t,i,r){let s=r.hostBindings;if(s){let o=n.hostBindingOpCodes;o===null&&(o=n.hostBindingOpCodes=[]);let a=~e.index;Wb(o)!=a&&o.push(a),o.push(t,i,s)}}function Wb(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function jb(n,e,t,i){let r=t.directiveStart,s=t.directiveEnd;Ec(t)&&Jb(e,t,n.data[r+t.componentOffset]),n.firstCreatePass||Yg(t,e),Di(i,e);let o=t.initialInputs;for(let a=r;a<s;a++){let c=n.data[a],l=xo(e,n,a,t);if(Di(l,e),o!==null&&Qb(e,a-r,l,c,t,o),Co(c)){let u=hr(t.index,e);u[En]=xo(e,n,a,t)}}}function Lv(n,e,t){let i=t.directiveStart,r=t.directiveEnd,s=t.index,o=sw();try{ur(s);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];od(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&$b(c,l)}}finally{ur(-1),od(o)}}function $b(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function qb(n,e){let t=n.directiveRegistry,i=null,r=null;if(t)for(let s=0;s<t.length;s++){let o=t[s];if(CM(e,o.selectors,!1))if(i||(i=[]),Co(o))if(o.findHostDirectiveDefs!==null){let a=[];r=r||new Map,o.findHostDirectiveDefs(o,a,r),i.unshift(...a,o);let c=a.length;_d(n,e,c)}else i.unshift(o),_d(n,e,0);else r=r||new Map,o.findHostDirectiveDefs?.(o,i,r),i.push(o)}return i===null?null:[i,r]}function _d(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function Xb(n,e,t){if(e){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let s=t[e[r+1]];if(s==null)throw new De(-301,!1);i.push(e[r],s)}}}function Yb(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;Co(e)&&(t[""]=n)}}function Zb(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function Kb(n,e,t,i,r){n.data[i]=r;let s=r.factory||(r.factory=os(r.type,!0)),o=new _o(s,Co(r),Ao);n.blueprint[i]=o,t[i]=o,Gb(n,e,i,Rv(n,t,r.hostVars,Vc),r)}function Jb(n,e,t){let i=Cn(e,n),r=Nv(t),s=n[ti].rendererFactory,o=16;t.signals?o=4096:t.onPush&&(o=64);let a=Hc(n,zc(n,r,null,o,i,e,null,s.createRenderer(i,t),null,null,null));n[e.index]=a}function Qb(n,e,t,i,r,s){let o=s[e];if(o!==null)for(let a=0;a<o.length;){let c=o[a++],l=o[a++],u=o[a++];Fv(i,t,c,l,u)}}function Fv(n,e,t,i,r){let s=tn(null);try{let o=n.inputTransforms;o!==null&&o.hasOwnProperty(i)&&(r=o[i].call(e,r)),n.setInput!==null?n.setInput(e,r,t,i):e[i]=r}finally{tn(s)}}function eS(n,e,t){let i=null,r=0;for(;r<t.length;){let s=t[r];if(s===0){r+=4;continue}else if(s===5){r+=2;continue}if(typeof s=="number")break;if(n.hasOwnProperty(s)){i===null&&(i=[]);let o=n[s];for(let a=0;a<o.length;a+=2)if(o[a]===e){i.push(s,o[a+1],t[r+1]);break}}r+=2}return i}function Uv(n,e,t,i){return[n,!0,0,e,null,i,null,t,null,null]}function kv(n,e){let t=n.contentQueries;if(t!==null){let i=tn(null);try{for(let r=0;r<t.length;r+=2){let s=t[r],o=t[r+1];if(o!==-1){let a=n.data[o];kg(s),a.contentQueries(2,e[o],o)}}}finally{tn(i)}}}function Hc(n,e){return n[mo]?n[Fm][Sn]=e:n[mo]=e,n[Fm]=e,e}function xd(n,e,t){kg(0);let i=tn(null);try{e(n,t)}finally{tn(i)}}function tS(n){return n[po]||(n[po]=[])}function nS(n){return n.cleanup||(n.cleanup=[])}function Bv(n,e){let t=n[ss],i=t?t.get(Gn,null):null;i&&i.handleError(e)}function oh(n,e,t,i,r){for(let s=0;s<t.length;){let o=t[s++],a=t[s++],c=e[o],l=n.data[o];Fv(l,c,i,a,r)}}function iS(n,e,t){let i=WM(e,n);Jw(n[Gt],i,t)}var rS=100;function sS(n,e=!0){let t=n[ti],i=t.rendererFactory,r=!1;r||i.begin?.();try{oS(n)}catch(s){throw e&&Bv(n,s),s}finally{r||(i.end?.(),t.inlineEffectRunner?.flush())}}function oS(n){Md(n,0);let e=0;for(;Pg(n);){if(e===rS)throw new De(103,!1);e++,Md(n,1)}}function aS(n,e,t,i){let r=e[Ae];if((r&256)===256)return;let s=!1;!s&&e[ti].inlineEffectRunner?.flush(),Bd(e);let o=null,a=null;!s&&cS(n)&&(a=Tb(e),o=Xp(a));try{Rg(e),nw(n.bindingStartIndex),t!==null&&Pv(n,e,t,2,i);let c=(r&3)===3;if(!s)if(c){let d=n.preOrderCheckHooks;d!==null&&Qa(e,d,null)}else{let d=n.preOrderHooks;d!==null&&ec(e,d,0,null),ju(e,0)}if(lS(e),Vv(e,0),n.contentQueries!==null&&kv(n,e),!s)if(c){let d=n.contentCheckHooks;d!==null&&Qa(e,d)}else{let d=n.contentHooks;d!==null&&ec(e,d,1),ju(e,1)}Pb(n,e);let l=n.components;l!==null&&Hv(e,l,0);let u=n.viewQuery;if(u!==null&&xd(2,u,i),!s)if(c){let d=n.viewCheckHooks;d!==null&&Qa(e,d)}else{let d=n.viewHooks;d!==null&&ec(e,d,2),ju(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[Wu]){for(let d of e[Wu])d();e[Wu]=null}s||(e[Ae]&=-73)}catch(c){throw vo(e),c}finally{a!==null&&(Yp(a,o),Ab(a)),Vd()}}function cS(n){return n.type!==2}function Vv(n,e){for(let t=Sv(n);t!==null;t=Ev(t))for(let i=gn;i<t.length;i++){let r=t[i];zv(r,e)}}function lS(n){for(let e=Sv(n);e!==null;e=Ev(e)){if(!(e[Ae]&Ld.HasTransplantedViews))continue;let t=e[cc];for(let i=0;i<t.length;i++){let r=t[i],s=r[Bt];$M(r)}}}function uS(n,e,t){let i=hr(e,n);zv(i,t)}function zv(n,e){Ud(n)&&Md(n,e)}function Md(n,e){let i=n[et],r=n[Ae],s=n[cr],o=!!(e===0&&r&16);if(o||=!!(r&64&&e===0),o||=!!(r&1024),o||=!!(s?.dirty&&Tu(s)),s&&(s.dirty=!1),n[Ae]&=-9217,o)aS(i,n,i.template,n[En]);else if(r&8192){Vv(n,1);let a=i.components;a!==null&&Hv(n,a,1)}}function Hv(n,e,t){for(let i=0;i<e.length;i++)uS(n,e[i],t)}function ah(n){for(n[ti].changeDetectionScheduler?.notify();n;){n[Ae]|=64;let e=yo(n);if(FM(n)&&!e)return n;n=e}return null}var dr=class{get rootNodes(){let e=this._lView,t=e[et];return mc(t,e,t.firstChild,[])}constructor(e,t,i=!0){this._lView=e,this._cdRefInjectingView=t,this.notifyErrorHandler=i,this._appRef=null,this._attachedToViewContainer=!1}get context(){return this._lView[En]}set context(e){this._lView[En]=e}get destroyed(){return(this._lView[Ae]&256)===256}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[Bt];if(ri(e)){let t=e[ac],i=t?t.indexOf(this):-1;i>-1&&(pd(e,i),dc(t,i))}this._attachedToViewContainer=!1}yv(this._lView[et],this._lView)}onDestroy(e){Ng(this._lView,e)}markForCheck(){ah(this._cdRefInjectingView||this._lView)}detach(){this._lView[Ae]&=-129}reattach(){sd(this._lView),this._lView[Ae]|=128}detectChanges(){this._lView[Ae]|=1024,sS(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new De(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,gv(this._lView[et],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new De(902,!1);this._appRef=e,sd(this._lView)}},Gc=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=dS;let n=e;return n})();function dS(n){return hS(An(),At(),(n&16)===16)}function hS(n,e,t){if(Ec(n)&&!t){let i=hr(n.index,e);return new dr(i,i)}else if(n.type&47){let i=e[zn];return new dr(i,e)}return null}var Gv=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=fS,e.__NG_ENV_ID__=i=>i;let n=e;return n})(),wd=class extends Gv{constructor(e){super(),this._lView=e}onDestroy(e){return Ng(this._lView,e),()=>XM(this._lView,e)}};function fS(){return new wd(At())}var Xm=new Set;function ch(n){Xm.has(n)||(Xm.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}var bd=class extends rn{constructor(e=!1){super(),this.__isAsync=e}emit(e){super.next(e)}subscribe(e,t,i){let r=e,s=t||(()=>null),o=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),s=c.error?.bind(c),o=c.complete?.bind(c)}this.__isAsync&&(s=Ku(s),r&&(r=Ku(r)),o&&(o=Ku(o)));let a=super.subscribe({next:r,error:s,complete:o});return e instanceof Ct&&e.add(a),a}};function Ku(n){return e=>{setTimeout(n,void 0,e)}}var bn=bd;function Ym(...n){}function pS(){let n=typeof uo.requestAnimationFrame=="function",e=uo[n?"requestAnimationFrame":"setTimeout"],t=uo[n?"cancelAnimationFrame":"clearTimeout"];if(typeof Zone<"u"&&e&&t){let i=e[Zone.__symbol__("OriginalDelegate")];i&&(e=i);let r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}var gt=class n{constructor({enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:t=!1,shouldCoalesceRunChangeDetection:i=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new bn(!1),this.onMicrotaskEmpty=new bn(!1),this.onStable=new bn(!1),this.onError=new bn(!1),typeof Zone>"u")throw new De(908,!1);Zone.assertZonePatched();let r=this;r._nesting=0,r._outer=r._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(r._inner=r._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(r._inner=r._inner.fork(Zone.longStackTraceZoneSpec)),r.shouldCoalesceEventChangeDetection=!i&&t,r.shouldCoalesceRunChangeDetection=i,r.lastRequestAnimationFrameId=-1,r.nativeRequestAnimationFrame=pS().nativeRequestAnimationFrame,vS(r)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get("isAngularZone")===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new De(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new De(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,e,mS,Ym,Ym);try{return s.runTask(o,t,i)}finally{s.cancelTask(o)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},mS={};function lh(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function gS(n){n.isCheckStableRunning||n.lastRequestAnimationFrameId!==-1||(n.lastRequestAnimationFrameId=n.nativeRequestAnimationFrame.call(uo,()=>{n.fakeTopEventTask||(n.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{n.lastRequestAnimationFrameId=-1,Sd(n),n.isCheckStableRunning=!0,lh(n),n.isCheckStableRunning=!1},void 0,()=>{},()=>{})),n.fakeTopEventTask.invoke()}),Sd(n))}function vS(n){let e=()=>{gS(n)};n._inner=n._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(t,i,r,s,o,a)=>{if(yS(a))return t.invokeTask(r,s,o,a);try{return Zm(n),t.invokeTask(r,s,o,a)}finally{(n.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),Km(n)}},onInvoke:(t,i,r,s,o,a,c)=>{try{return Zm(n),t.invoke(r,s,o,a,c)}finally{n.shouldCoalesceRunChangeDetection&&e(),Km(n)}},onHasTask:(t,i,r,s)=>{t.hasTask(r,s),i===r&&(s.change=="microTask"?(n._hasPendingMicrotasks=s.microTask,Sd(n),lh(n)):s.change=="macroTask"&&(n.hasPendingMacrotasks=s.macroTask))},onHandleError:(t,i,r,s)=>(t.handleError(r,s),n.runOutsideAngular(()=>n.onError.emit(s)),!1)})}function Sd(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.lastRequestAnimationFrameId!==-1?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function Zm(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function Km(n){n._nesting--,lh(n)}function yS(n){return!Array.isArray(n)||n.length!==1?!1:n[0].data?.__ignore_ng_zone__===!0}var ts=function(n){return n[n.EarlyRead=0]="EarlyRead",n[n.Write=1]="Write",n[n.MixedReadWrite=2]="MixedReadWrite",n[n.Read=3]="Read",n}(ts||{}),_S={destroy(){}};function uh(n,e){!e&&kw(uh);let t=e?.injector??ie(oi);if(!zw(t))return _S;ch("NgAfterNextRender");let i=t.get(dh),r=i.handler??=new Td,s=e?.phase??ts.MixedReadWrite,o=()=>{r.unregister(c),a()},a=t.get(Gv).onDestroy(o),c=new Ed(t,s,()=>{o(),n()});return r.register(c),{destroy:o}}var Ed=class{constructor(e,t,i){this.phase=t,this.callbackFn=i,this.zone=e.get(gt),this.errorHandler=e.get(Gn,null,{optional:!0})}invoke(){try{this.zone.runOutsideAngular(this.callbackFn)}catch(e){this.errorHandler?.handleError(e)}}},Td=class{constructor(){this.executingCallbacks=!1,this.buckets={[ts.EarlyRead]:new Set,[ts.Write]:new Set,[ts.MixedReadWrite]:new Set,[ts.Read]:new Set},this.deferredCallbacks=new Set}register(e){(this.executingCallbacks?this.deferredCallbacks:this.buckets[e.phase]).add(e)}unregister(e){this.buckets[e.phase].delete(e),this.deferredCallbacks.delete(e)}execute(){let e=!1;this.executingCallbacks=!0;for(let t of Object.values(this.buckets))for(let i of t)e=!0,i.invoke();this.executingCallbacks=!1;for(let t of this.deferredCallbacks)this.buckets[t.phase].add(t);return this.deferredCallbacks.clear(),e}destroy(){for(let e of Object.values(this.buckets))e.clear();this.deferredCallbacks.clear()}},dh=(()=>{let e=class e{constructor(){this.handler=null,this.internalCallbacks=[]}execute(){let i=[...this.internalCallbacks];this.internalCallbacks.length=0;for(let s of i)s();return!!this.handler?.execute()||i.length>0}ngOnDestroy(){this.handler?.destroy(),this.handler=null,this.internalCallbacks.length=0}};e.\u0275prov=ye({token:e,providedIn:"root",factory:()=>new e});let n=e;return n})();function xS(n,e){let t=hr(e,n),i=t[et];MS(i,t);let r=t[ii];r!==null&&t[oc]===null&&(t[oc]=eh(r,t[ss])),hh(i,t,t[En])}function MS(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function hh(n,e,t){Bd(e);try{let i=n.viewQuery;i!==null&&xd(1,i,t);let r=n.template;r!==null&&Pv(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),n.staticContentQueries&&kv(n,e),n.staticViewQueries&&xd(2,n.viewQuery,t);let s=n.components;s!==null&&wS(e,s)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[Ae]&=-5,Vd()}}function wS(n,e){for(let t=0;t<e.length;t++)xS(n,e[t])}function gc(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,s=0;if(e!==null)for(let o=0;o<e.length;o++){let a=e[o];if(typeof a=="number")s=a;else if(s==1)r=Tm(r,a);else if(s==2){let c=a,l=e[++o];i=Tm(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}var vc=class extends Uc{constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=Ai(e);return new ls(t,this.ngModule)}};function Jm(n){let e=[];for(let t in n)if(n.hasOwnProperty(t)){let i=n[t];e.push({propName:i,templateName:t})}return e}function bS(n){let e=n.toLowerCase();return e==="svg"?VM:e==="math"?zM:null}var Cd=class{constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){i=Mc(i);let r=this.injector.get(e,Yu,i);return r!==Yu||t===Yu?r:this.parentInjector.get(e,t,i)}},ls=class extends pc{get inputs(){let e=this.componentDef,t=e.inputTransforms,i=Jm(e.inputs);if(t!==null)for(let r of i)t.hasOwnProperty(r.propName)&&(r.transform=t[r.propName]);return i}get outputs(){return Jm(this.componentDef.outputs)}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=RM(e.selectors),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!t}create(e,t,i,r){r=r||this.ngModule;let s=r instanceof sn?r:r?.injector;s&&this.componentDef.getStandaloneInjector!==null&&(s=this.componentDef.getStandaloneInjector(s)||s);let o=s?new Cd(e,s):e,a=o.get(wo,null);if(a===null)throw new De(407,!1);let c=o.get(Sb,null),l=o.get(dh,null),u=o.get(gd,null),d={rendererFactory:a,sanitizer:c,inlineEffectRunner:null,afterRenderEventManager:l,changeDetectionScheduler:u},h=a.createRenderer(null,this.componentDef),m=this.componentDef.selectors[0][0]||"div",v=i?Lb(h,i,this.componentDef.encapsulation,o):mv(h,m,bS(m)),_=512;this.componentDef.signals?_|=4096:this.componentDef.onPush||(_|=16);let p=null;v!==null&&(p=eh(v,o,!0));let f=rh(0,null,null,1,0,null,null,null,null,null,null),S=zc(null,f,null,_,null,null,d,h,o,null,p);Bd(S);let M,E;try{let I=this.componentDef,A,T=null;I.findHostDirectiveDefs?(A=[],T=new Map,I.findHostDirectiveDefs(I,A,T),A.push(I)):A=[I];let R=SS(S,v),w=ES(R,v,I,A,S,d,h);E=Ig(f,ni),v&&AS(h,I,v,i),t!==void 0&&DS(E,this.ngContentSelectors,t),M=CS(w,I,A,T,S,[IS]),hh(f,S,null)}finally{Vd()}return new Ad(this.componentType,M,kc(E,S),S,E)}},Ad=class extends vd{constructor(e,t,i,r,s){super(),this.location=i,this._rootLView=r,this._tNode=s,this.previousInputValues=null,this.instance=t,this.hostView=this.changeDetectorRef=new dr(r,void 0,!1),this.componentType=e}setInput(e,t){let i=this._tNode.inputs,r;if(i!==null&&(r=i[e])){if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let s=this._rootLView;oh(s[et],s,r,e,t),this.previousInputValues.set(e,t);let o=hr(this._tNode.index,s);ah(o)}}get injector(){return new ar(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function SS(n,e){let t=n[et],i=ni;return n[i]=e,Do(t,i,2,"#host",null)}function ES(n,e,t,i,r,s,o){let a=r[et];TS(i,n,e,o);let c=null;e!==null&&(c=eh(e,r[ss]));let l=s.rendererFactory.createRenderer(e,t),u=16;t.signals?u=4096:t.onPush&&(u=64);let d=zc(r,Nv(t),null,u,r[n.index],n,s,l,null,null,c);return a.firstCreatePass&&_d(a,n,i.length-1),Hc(r,d),r[n.index]=d}function TS(n,e,t,i){for(let r of n)e.mergedAttrs=Od(e.mergedAttrs,r.hostAttrs);e.mergedAttrs!==null&&(gc(e,e.mergedAttrs,!0),t!==null&&wv(i,t,e))}function CS(n,e,t,i,r,s){let o=An(),a=r[et],c=Cn(o,r);Ov(a,r,o,t,null,i);for(let u=0;u<t.length;u++){let d=o.directiveStart+u,h=xo(r,a,d,o);Di(h,r)}Lv(a,r,o),c&&Di(c,r);let l=xo(r,a,o.directiveStart+o.componentOffset,o);if(n[En]=r[En]=l,s!==null)for(let u of s)u(l,e);return th(a,o,n),l}function AS(n,e,t,i){if(i)id(n,t,["ng-version","17.0.9"]);else{let{attrs:r,classes:s}=PM(e.selectors[0]);r&&id(n,t,r),s&&s.length>0&&Mv(n,t,s.join(" "))}}function DS(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let s=t[r];i.push(s!=null?Array.from(s):null)}}function IS(){let n=An();Pc(At()[et],n)}function Wv(n,e,t){let i=n[e];return Object.is(i,t)?!1:(n[e]=t,!0)}function RS(n,e,t,i){return Wv(n,Ug(),t)?e+cg(t)+i:Vc}function gr(n,e,t){let i=At(),r=Ug();if(Wv(i,r,e)){let s=si(),o=cw();zb(s,o,i,n,e,i[Gt],t,!1)}return gr}function Qm(n,e,t,i,r){let s=e.inputs,o=r?"class":"style";oh(n,t,s[o],o,i)}var hk=new RegExp(`^(\\d+)*(${_b}|${yb})*(.*)`);var PS=()=>null;function eg(n,e){return PS(n,e)}function NS(n,e,t,i){let r=e.tView,o=n[Ae]&4096?4096:16,a=zc(n,r,t,o,null,e,null,null,null,i?.injector??null,i?.dehydratedView??null),c=n[e.index];a[bc]=c;let l=n[go];return l!==null&&(a[go]=l.createEmbeddedView(r)),hh(r,a,t),a}function tg(n,e){return!e||e.firstChild===null||fv(n)}function OS(n,e,t,i=!0){let r=e[et];if(ib(r,e,n,t),i){let o=md(t,n),a=e[Gt],c=Jd(a,n[lr]);c!==null&&tb(r,n[Tn],a,e,c,o)}let s=e[oc];s!==null&&s.firstChild!==null&&(s.firstChild=null)}var Io=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=LS;let n=e;return n})();function LS(){let n=An();return US(n,At())}var FS=Io,jv=class extends FS{constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return kc(this._hostTNode,this._hostLView)}get injector(){return new ar(this._hostTNode,this._hostLView)}get parentInjector(){let e=Hd(this._hostTNode,this._hostLView);if($g(e)){let t=uc(e,this._hostLView),i=lc(e),r=t[et].data[i+8];return new ar(r,t)}else return new ar(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=ng(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-gn}createEmbeddedView(e,t,i){let r,s;typeof i=="number"?r=i:i!=null&&(r=i.index,s=i.injector);let o=eg(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},s,o);return this.insertImpl(a,r,tg(this._hostTNode,o)),a}createComponent(e,t,i,r,s){let o=e&&!Tw(e),a;if(o)a=t;else{let v=t||{};a=v.index,i=v.injector,r=v.projectableNodes,s=v.environmentInjector||v.ngModuleRef}let c=o?e:new ls(Ai(e)),l=i||this.parentInjector;if(!s&&c.ngModule==null){let _=(o?l:this.parentInjector).get(sn,null);_&&(s=_)}let u=Ai(c.componentType??{}),d=eg(this._lContainer,u?.id??null),h=d?.firstChild??null,m=c.create(l,r,h,s);return this.insertImpl(m.hostView,a,tg(this._hostTNode,d)),m}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let r=e._lView;if(jM(r)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let c=r[Bt],l=new jv(c,c[Tn],c[Bt]);l.detach(l.indexOf(e))}}let s=this._adjustIndex(t),o=this._lContainer;return OS(o,r,s,i),e.attachToViewContainerRef(),iv(Ju(o),s,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=ng(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=pd(this._lContainer,t);i&&(dc(Ju(this._lContainer),t),yv(i[et],i))}detach(e){let t=this._adjustIndex(e,-1),i=pd(this._lContainer,t);return i&&dc(Ju(this._lContainer),t)!=null?new dr(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function ng(n){return n[ac]}function Ju(n){return n[ac]||(n[ac]=[])}function US(n,e){let t,i=e[n.index];return ri(i)?t=i:(t=Uv(i,e,null,n),e[n.index]=t,Hc(e,t)),BS(t,e,n,i),new jv(t,n,e)}function kS(n,e){let t=n[Gt],i=t.createComment(""),r=Cn(e,n),s=Jd(t,r);return fc(t,s,i,ub(t,r),!1),i}var BS=HS,VS=()=>!1;function zS(n,e,t){return VS(n,e,t)}function HS(n,e,t,i){if(n[lr])return;let r;t.type&8?r=Hn(i):r=kS(e,t),n[lr]=r}function GS(n,e,t,i,r,s,o,a,c){let l=e.consts,u=Do(e,n,4,o||null,as(l,a));sh(e,t,u,as(l,c)),Pc(e,u);let d=u.tView=rh(2,u,i,r,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,l,null);return e.queries!==null&&(e.queries.template(e,u),d.queries=e.queries.embeddedTView(u)),u}function Ro(n,e,t,i,r,s,o,a){let c=At(),l=si(),u=n+ni,d=l.firstCreatePass?GS(u,l,c,e,t,i,r,s,o):l.data[u];fr(d,!1);let h=WS(l,c,d,n);Ic()&&Lc(l,c,h,d),Di(h,c);let m=Uv(h,c,h,d);return c[u]=m,Hc(c,m),zS(m,d,c),Tc(d)&&nh(l,c,d),o!=null&&ih(c,d,a),Ro}var WS=jS;function jS(n,e,t,i){return Rc(!0),e[Gt].createComment("")}function $S(n,e,t,i,r,s){let o=e.consts,a=as(o,r),c=Do(e,n,2,i,a);return sh(e,t,c,as(o,s)),c.attrs!==null&&gc(c,c.attrs,!1),c.mergedAttrs!==null&&gc(c,c.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,c),c}function Oi(n,e,t,i){let r=At(),s=si(),o=ni+n,a=r[Gt],c=s.firstCreatePass?$S(o,s,r,e,t,i):s.data[o],l=qS(s,r,c,a,e,n);r[o]=l;let u=Tc(c);return fr(c,!0),wv(a,l,c),(c.flags&32)!==32&&Ic()&&Lc(s,r,l,c),YM()===0&&Di(l,r),ZM(),u&&(nh(s,r,c),th(s,c,r)),i!==null&&ih(r,c),Oi}function Li(){let n=An();kd()?Fg():(n=n.parent,fr(n,!1));let e=n;QM(e)&&ew(),KM();let t=si();return t.firstCreatePass&&(Pc(t,n),Fd(n)&&t.queries.elementEnd(n)),e.classesWithoutHost!=null&&fw(e)&&Qm(t,e,At(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&pw(e)&&Qm(t,e,At(),e.stylesWithoutHost,!1),Li}function Wn(n,e,t,i){return Oi(n,e,t,i),Li(),Wn}var qS=(n,e,t,i,r,s)=>(Rc(!0),mv(i,r,lw()));function XS(n,e,t,i,r){let s=e.consts,o=as(s,i),a=Do(e,n,8,"ng-container",o);o!==null&&gc(a,o,!0);let c=as(s,r);return sh(e,t,a,c),e.queries!==null&&e.queries.elementStart(e,a),a}function Po(n,e,t){let i=At(),r=si(),s=n+ni,o=r.firstCreatePass?XS(s,r,i,e,t):r.data[s];fr(o,!0);let a=YS(r,i,o,n);return i[s]=a,Ic()&&Lc(r,i,a,o),Di(a,i),Tc(o)&&(nh(r,i,o),th(r,o,i)),t!=null&&ih(i,o),Po}function No(){let n=An(),e=si();return kd()?Fg():(n=n.parent,fr(n,!1)),e.firstCreatePass&&(Pc(e,n),Fd(n)&&e.queries.elementEnd(n)),No}var YS=(n,e,t,i)=>(Rc(!0),Qw(e[Gt],""));function Wc(){return At()}var yc="en-US";var ZS=yc;function KS(n){cM(n,"Expected localeId to be defined"),typeof n=="string"&&(ZS=n.toLowerCase().replace(/_/g,"-"))}function Oo(n){return!!n&&typeof n.then=="function"}function $v(n){return!!n&&typeof n.subscribe=="function"}function ds(n,e,t,i){let r=At(),s=si(),o=An();return QS(s,r,r[Gt],o,n,e,i),ds}function JS(n,e,t,i){let r=n.cleanup;if(r!=null)for(let s=0;s<r.length-1;s+=2){let o=r[s];if(o===t&&r[s+1]===i){let a=e[po],c=r[s+2];return a.length>c?a[c]:null}typeof o=="string"&&(s+=2)}return null}function QS(n,e,t,i,r,s,o){let a=Tc(i),l=n.firstCreatePass&&nS(n),u=e[En],d=tS(e),h=!0;if(i.type&3||o){let _=Cn(i,e),p=o?o(_):_,f=d.length,S=o?E=>o(Hn(E[i.index])):i.index,M=null;if(!o&&a&&(M=JS(n,e,r,i.index)),M!==null){let E=M.__ngLastListenerFn__||M;E.__ngNextListenerFn__=s,M.__ngLastListenerFn__=s,h=!1}else{s=rg(i,e,u,s,!1);let E=t.listen(p,r,s);d.push(s,E),l&&l.push(r,S,f,f+1)}}else s=rg(i,e,u,s,!1);let m=i.outputs,v;if(h&&m!==null&&(v=m[r])){let _=v.length;if(_)for(let p=0;p<_;p+=2){let f=v[p],S=v[p+1],I=e[f][S].subscribe(s),A=d.length;d.push(s,I),l&&l.push(r,i.index,A,-(A+1))}}}function ig(n,e,t,i){try{return kn(6,e,t),t(i)!==!1}catch(r){return Bv(n,r),!1}finally{kn(7,e,t)}}function rg(n,e,t,i,r){return function s(o){if(o===Function)return i;let a=n.componentOffset>-1?hr(n.index,e):e;ah(a);let c=ig(e,t,i,o),l=s.__ngNextListenerFn__;for(;l;)c=ig(e,t,l,o)&&c,l=l.__ngNextListenerFn__;return r&&c===!1&&o.preventDefault(),c}}function Lo(n=1){return aw(n)}function Fo(n,e=""){let t=At(),i=si(),r=n+ni,s=i.firstCreatePass?Do(i,r,1,e,null):i.data[r],o=eE(i,t,s,e,n);t[r]=o,Ic()&&Lc(i,t,o,s),fr(s,!1)}var eE=(n,e,t,i,r)=>(Rc(!0),Kw(e[Gt],i));function fh(n){return qv("",n,""),fh}function qv(n,e,t){let i=At(),r=RS(i,n,e,t);return r!==Vc&&iS(i,zd(),r),qv}var Ii=class{},bo=class{};var Dd=class extends Ii{constructor(e,t,i){super(),this._parent=t,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new vc(this);let r=wg(e);this._bootstrapComponents=hv(r.bootstrap),this._r3Injector=uv(e,t,[{provide:Ii,useValue:this},{provide:Uc,useValue:this.componentFactoryResolver},...i],Kt(e),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(e)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},Id=class extends bo{constructor(e){super(),this.moduleType=e}create(e){return new Dd(this.moduleType,e,[])}};var _c=class extends Ii{constructor(e){super(),this.componentFactoryResolver=new vc(this),this.instance=null;let t=new Mo([...e.providers,{provide:Ii,useValue:this},{provide:Uc,useValue:this.componentFactoryResolver}],e.parent||qd(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function jc(n,e,t=null){return new _c({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var tE=(()=>{let e=class e{constructor(i){this._injector=i,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(i){if(!i.standalone)return null;if(!this.cachedInjectors.has(i)){let r=av(!1,i.type),s=r.length>0?jc([r],this._injector,`Standalone[${i.type.name}]`):null;this.cachedInjectors.set(i,s)}return this.cachedInjectors.get(i)}ngOnDestroy(){try{for(let i of this.cachedInjectors.values())i!==null&&i.destroy()}finally{this.cachedInjectors.clear()}}};e.\u0275prov=ye({token:e,providedIn:"environment",factory:()=>new e(Ie(sn))});let n=e;return n})();function Fi(n){ch("NgStandalone"),n.getStandaloneInjector=e=>e.get(tE).getOrCreateStandaloneInjector(n)}var ph=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=rE;let n=e;return n})(),nE=ph,iE=class extends nE{constructor(e,t,i){super(),this._declarationLView=e,this._declarationTContainer=t,this.elementRef=i}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,t){return this.createEmbeddedViewImpl(e,t)}createEmbeddedViewImpl(e,t,i){let r=NS(this._declarationLView,this._declarationTContainer,e,{injector:t,dehydratedView:i});return new dr(r)}};function rE(){return sE(An(),At())}function sE(n,e){return n.type&4?new iE(e,n,kc(n,e)):null}var $c=(()=>{let e=class e{log(i){console.log(i)}warn(i){console.warn(i)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=ye({token:e,factory:e.\u0275fac,providedIn:"platform"});let n=e;return n})(),Rd=class{constructor(e,t){this.ngModuleFactory=e,this.componentFactories=t}},qc=(()=>{let e=class e{compileModuleSync(i){return new Id(i)}compileModuleAsync(i){return Promise.resolve(this.compileModuleSync(i))}compileModuleAndAllComponentsSync(i){let r=this.compileModuleSync(i),s=wg(i),o=hv(s.declarations).reduce((a,c)=>{let l=Ai(c);return l&&a.push(new ls(l)),a},[]);return new Rd(r,o)}compileModuleAndAllComponentsAsync(i){return Promise.resolve(this.compileModuleAndAllComponentsSync(i))}clearCache(){}clearCacheFor(i){}getModuleId(i){}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=ye({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var Xc=(()=>{let e=class e{constructor(){this.taskId=0,this.pendingTasks=new Set,this.hasPendingTasks=new Ut(!1)}get _hasPendingTasks(){return this.hasPendingTasks.value}add(){this._hasPendingTasks||this.hasPendingTasks.next(!0);let i=this.taskId++;return this.pendingTasks.add(i),i}remove(i){this.pendingTasks.delete(i),this.pendingTasks.size===0&&this._hasPendingTasks&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this._hasPendingTasks&&this.hasPendingTasks.next(!1)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=ye({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var Xv=new Ge("");var Yc=new Ge("Application Initializer"),Yv=(()=>{let e=class e{constructor(){this.initialized=!1,this.done=!1,this.donePromise=new Promise((i,r)=>{this.resolve=i,this.reject=r}),this.appInits=ie(Yc,{optional:!0})??[]}runInitializers(){if(this.initialized)return;let i=[];for(let s of this.appInits){let o=s();if(Oo(o))i.push(o);else if($v(o)){let a=new Promise((c,l)=>{o.subscribe({complete:c,error:l})});i.push(a)}}let r=()=>{this.done=!0,this.resolve()};Promise.all(i).then(()=>{r()}).catch(s=>{this.reject(s)}),i.length===0&&r(),this.initialized=!0}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=ye({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),Zc=new Ge("appBootstrapListener");function oE(){Kp(()=>{throw new De(600,!1)})}function aE(n){return n.isBoundToModule}function cE(n,e,t){try{let i=t();return Oo(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n.handleError(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n.handleError(i)),i}}var Uo=(()=>{let e=class e{constructor(){this._bootstrapListeners=[],this._runningTick=!1,this._destroyed=!1,this._destroyListeners=[],this._views=[],this.internalErrorHandler=ie(Cv),this.afterRenderEffectManager=ie(dh),this.componentTypes=[],this.components=[],this.isStable=ie(Xc).hasPendingTasks.pipe(Qe(i=>!i)),this._injector=ie(sn)}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(i,r){let s=i instanceof pc;if(!this._injector.get(Yv).done){let m=!s&&Mg(i),v=!1;throw new De(405,v)}let a;s?a=i:a=this._injector.get(Uc).resolveComponentFactory(i),this.componentTypes.push(a.componentType);let c=aE(a)?void 0:this._injector.get(Ii),l=r||a.selector,u=a.create(oi.NULL,[],l,c),d=u.location.nativeElement,h=u.injector.get(Xv,null);return h?.registerApplication(d),u.onDestroy(()=>{this.detachView(u.hostView),Qu(this.components,u),h?.unregisterApplication(d)}),this._loadComponent(u),u}tick(){if(this._runningTick)throw new De(101,!1);try{this._runningTick=!0;for(let i of this._views)i.detectChanges()}catch(i){this.internalErrorHandler(i)}finally{try{let i=this.afterRenderEffectManager.execute()}catch(i){this.internalErrorHandler(i)}this._runningTick=!1}}attachView(i){let r=i;this._views.push(r),r.attachToAppRef(this)}detachView(i){let r=i;Qu(this._views,r),r.detachFromAppRef()}_loadComponent(i){this.attachView(i.hostView),this.tick(),this.components.push(i);let r=this._injector.get(Zc,[]);[...this._bootstrapListeners,...r].forEach(s=>s(i))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(i=>i()),this._views.slice().forEach(i=>i.destroy())}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(i){return this._destroyListeners.push(i),()=>Qu(this._destroyListeners,i)}destroy(){if(this._destroyed)throw new De(406,!1);let i=this._injector;i.destroy&&!i.destroyed&&i.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=ye({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function Qu(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}var lE=(()=>{let e=class e{constructor(){this.zone=ie(gt),this.applicationRef=ie(Uo)}initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=ye({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function uE(n){return[{provide:gt,useFactory:n},{provide:cs,multi:!0,useFactory:()=>{let e=ie(lE,{optional:!0});return()=>e.initialize()}},{provide:cs,multi:!0,useFactory:()=>{let e=ie(pE);return()=>{e.initialize()}}},{provide:Cv,useFactory:dE}]}function dE(){let n=ie(gt),e=ie(Gn);return t=>n.runOutsideAngular(()=>e.handleError(t))}function hE(n){let e=uE(()=>new gt(fE(n)));return Nc([[],e])}function fE(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}var pE=(()=>{let e=class e{constructor(){this.subscription=new Ct,this.initialized=!1,this.zone=ie(gt),this.pendingTasks=ie(Xc)}initialize(){if(this.initialized)return;this.initialized=!0;let i=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(i=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{gt.assertNotInAngularZone(),queueMicrotask(()=>{i!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(i),i=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{gt.assertInAngularZone(),i??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=ye({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function mE(){return typeof $localize<"u"&&$localize.locale||yc}var mh=new Ge("LocaleId",{providedIn:"root",factory:()=>ie(mh,He.Optional|He.SkipSelf)||mE()});var Zv=new Ge("PlatformDestroyListeners");var ic=null;function gE(n=[],e){return oi.create({name:e,providers:[{provide:Oc,useValue:"platform"},{provide:Zv,useValue:new Set([()=>ic=null])},...n]})}function vE(n=[]){if(ic)return ic;let e=gE(n);return ic=e,oE(),yE(e),e}function yE(n){n.get(Yd,null)?.forEach(t=>t())}function Kv(n){try{let{rootComponent:e,appProviders:t,platformProviders:i}=n,r=vE(i),s=[hE(),...t||[]],a=new _c({providers:s,parent:r,debugName:"",runEnvironmentInitializers:!1}).injector,c=a.get(gt);return c.run(()=>{a.resolveInjectorInitializers();let l=a.get(Gn,null),u;c.runOutsideAngular(()=>{u=c.onError.subscribe({next:m=>{l.handleError(m)}})});let d=()=>a.destroy(),h=r.get(Zv);return h.add(d),a.onDestroy(()=>{u.unsubscribe(),h.delete(d)}),cE(l,c,()=>{let m=a.get(Yv);return m.runInitializers(),m.donePromise.then(()=>{let v=a.get(mh,yc);KS(v||yc);let _=a.get(Uo);return e!==void 0&&_.bootstrap(e),_})})})}catch(e){return Promise.reject(e)}}function Jv(n){let e=Ai(n);if(!e)return null;let t=new ls(e);return{get selector(){return t.selector},get type(){return t.componentType},get inputs(){return t.inputs},get outputs(){return t.outputs},get ngContentSelectors(){return t.ngContentSelectors},get isStandalone(){return e.standalone},get isSignal(){return e.signals}}}var gh=null;function hs(){return gh}function ry(n){gh||(gh=n)}var Kc=class{},Wt=new Ge("DocumentToken"),xh=(()=>{let e=class e{historyGo(i){throw new Error("Not implemented")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=ye({token:e,factory:()=>ie(bE),providedIn:"platform"});let n=e;return n})(),sy=new Ge("Location Initialized"),bE=(()=>{let e=class e extends xh{constructor(){super(),this._doc=ie(Wt),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return hs().getBaseHref(this._doc)}onPopState(i){let r=hs().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",i,!1),()=>r.removeEventListener("popstate",i)}onHashChange(i){let r=hs().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",i,!1),()=>r.removeEventListener("hashchange",i)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(i){this._location.pathname=i}pushState(i,r,s){this._history.pushState(i,r,s)}replaceState(i,r,s){this._history.replaceState(i,r,s)}forward(){this._history.forward()}back(){this._history.back()}historyGo(i=0){this._history.go(i)}getState(){return this._history.state}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=ye({token:e,factory:()=>new e,providedIn:"platform"});let n=e;return n})();function Mh(n,e){if(n.length==0)return e;if(e.length==0)return n;let t=0;return n.endsWith("/")&&t++,e.startsWith("/")&&t++,t==2?n+e.substring(1):t==1?n+e:n+"/"+e}function Qv(n){let e=n.match(/#|\?|$/),t=e&&e.index||n.length,i=t-(n[t-1]==="/"?1:0);return n.slice(0,i)+n.slice(t)}function ci(n){return n&&n[0]!=="?"?"?"+n:n}var vr=(()=>{let e=class e{historyGo(i){throw new Error("Not implemented")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=ye({token:e,factory:()=>ie(wh),providedIn:"root"});let n=e;return n})(),oy=new Ge("appBaseHref"),wh=(()=>{let e=class e extends vr{constructor(i,r){super(),this._platformLocation=i,this._removeListenerFns=[],this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??ie(Wt).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(i){this._removeListenerFns.push(this._platformLocation.onPopState(i),this._platformLocation.onHashChange(i))}getBaseHref(){return this._baseHref}prepareExternalUrl(i){return Mh(this._baseHref,i)}path(i=!1){let r=this._platformLocation.pathname+ci(this._platformLocation.search),s=this._platformLocation.hash;return s&&i?`${r}${s}`:r}pushState(i,r,s,o){let a=this.prepareExternalUrl(s+ci(o));this._platformLocation.pushState(i,r,a)}replaceState(i,r,s,o){let a=this.prepareExternalUrl(s+ci(o));this._platformLocation.replaceState(i,r,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(i=0){this._platformLocation.historyGo?.(i)}};e.\u0275fac=function(r){return new(r||e)(Ie(xh),Ie(oy,8))},e.\u0275prov=ye({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),ay=(()=>{let e=class e extends vr{constructor(i,r){super(),this._platformLocation=i,this._baseHref="",this._removeListenerFns=[],r!=null&&(this._baseHref=r)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(i){this._removeListenerFns.push(this._platformLocation.onPopState(i),this._platformLocation.onHashChange(i))}getBaseHref(){return this._baseHref}path(i=!1){let r=this._platformLocation.hash;return r==null&&(r="#"),r.length>0?r.substring(1):r}prepareExternalUrl(i){let r=Mh(this._baseHref,i);return r.length>0?"#"+r:r}pushState(i,r,s,o){let a=this.prepareExternalUrl(s+ci(o));a.length==0&&(a=this._platformLocation.pathname),this._platformLocation.pushState(i,r,a)}replaceState(i,r,s,o){let a=this.prepareExternalUrl(s+ci(o));a.length==0&&(a=this._platformLocation.pathname),this._platformLocation.replaceState(i,r,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(i=0){this._platformLocation.historyGo?.(i)}};e.\u0275fac=function(r){return new(r||e)(Ie(xh),Ie(oy,8))},e.\u0275prov=ye({token:e,factory:e.\u0275fac});let n=e;return n})(),fs=(()=>{let e=class e{constructor(i){this._subject=new bn,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=i;let r=this._locationStrategy.getBaseHref();this._basePath=TE(Qv(ey(r))),this._locationStrategy.onPopState(s=>{this._subject.emit({url:this.path(!0),pop:!0,state:s.state,type:s.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(i=!1){return this.normalize(this._locationStrategy.path(i))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(i,r=""){return this.path()==this.normalize(i+ci(r))}normalize(i){return e.stripTrailingSlash(EE(this._basePath,ey(i)))}prepareExternalUrl(i){return i&&i[0]!=="/"&&(i="/"+i),this._locationStrategy.prepareExternalUrl(i)}go(i,r="",s=null){this._locationStrategy.pushState(s,"",i,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(i+ci(r)),s)}replaceState(i,r="",s=null){this._locationStrategy.replaceState(s,"",i,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(i+ci(r)),s)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(i=0){this._locationStrategy.historyGo?.(i)}onUrlChange(i){return this._urlChangeListeners.push(i),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)})),()=>{let r=this._urlChangeListeners.indexOf(i);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(i="",r){this._urlChangeListeners.forEach(s=>s(i,r))}subscribe(i,r,s){return this._subject.subscribe({next:i,error:r,complete:s})}};e.normalizeQueryParams=ci,e.joinWithSlash=Mh,e.stripTrailingSlash=Qv,e.\u0275fac=function(r){return new(r||e)(Ie(vr))},e.\u0275prov=ye({token:e,factory:()=>SE(),providedIn:"root"});let n=e;return n})();function SE(){return new fs(Ie(vr))}function EE(n,e){if(!n||!e.startsWith(n))return e;let t=e.substring(n.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function ey(n){return n.replace(/\/index.html$/,"")}function TE(n){if(new RegExp("^(https?:)?//").test(n)){let[,t]=n.split(/\/\/[^\/]+/);return t}return n}function cy(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,s]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var Qc=(()=>{let e=class e{constructor(i,r){this._viewContainer=i,this._context=new vh,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=r}set ngIf(i){this._context.$implicit=this._context.ngIf=i,this._updateView()}set ngIfThen(i){ty("ngIfThen",i),this._thenTemplateRef=i,this._thenViewRef=null,this._updateView()}set ngIfElse(i){ty("ngIfElse",i),this._elseTemplateRef=i,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(i,r){return!0}};e.\u0275fac=function(r){return new(r||e)(Ao(Io),Ao(ph))},e.\u0275dir=wc({type:e,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0});let n=e;return n})(),vh=class{constructor(){this.$implicit=null,this.ngIf=null}};function ty(n,e){if(!!!(!e||e.createEmbeddedView))throw new Error(`${n} must be a TemplateRef, but received '${Kt(e)}'.`)}var ko=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=To({type:e}),e.\u0275inj=So({});let n=e;return n})(),bh="browser",CE="server";function AE(n){return n===bh}function Sh(n){return n===CE}var ly=(()=>{let e=class e{};e.\u0275prov=ye({token:e,providedIn:"root",factory:()=>AE(ie(Ni))?new yh(ie(Wt),window):new _h});let n=e;return n})(),yh=class{constructor(e,t){this.document=e,this.window=t,this.offset=()=>[0,0]}setOffset(e){Array.isArray(e)?this.offset=()=>e:this.offset=e}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(e){this.window.scrollTo(e[0],e[1])}scrollToAnchor(e){let t=DE(this.document,e);t&&(this.scrollToElement(t),t.focus())}setHistoryScrollRestoration(e){this.window.history.scrollRestoration=e}scrollToElement(e){let t=e.getBoundingClientRect(),i=t.left+this.window.pageXOffset,r=t.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(i-s[0],r-s[1])}};function DE(n,e){let t=n.getElementById(e)||n.getElementsByName(e)[0];if(t)return t;if(typeof n.createTreeWalker=="function"&&n.body&&typeof n.body.attachShadow=="function"){let i=n.createTreeWalker(n.body,NodeFilter.SHOW_ELEMENT),r=i.currentNode;for(;r;){let s=r.shadowRoot;if(s){let o=s.getElementById(e)||s.querySelector(`[name="${e}"]`);if(o)return o}r=i.nextNode()}}return null}var _h=class{setOffset(e){}getScrollPosition(){return[0,0]}scrollToPosition(e){}scrollToAnchor(e){}setHistoryScrollRestoration(e){}},Jc=class{};var Ch=class extends Kc{constructor(){super(...arguments),this.supportsDOMEvents=!0}},Ah=class n extends Ch{static makeCurrent(){ry(new n)}onAndCancel(e,t,i){return e.addEventListener(t,i),()=>{e.removeEventListener(t,i)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=IE();return t==null?null:RE(t)}resetBaseElement(){Bo=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return cy(document.cookie,e)}},Bo=null;function IE(){return Bo=Bo||document.querySelector("base"),Bo?Bo.getAttribute("href"):null}function RE(n){return new URL(n,document.baseURI).pathname}var PE=(()=>{let e=class e{build(){return new XMLHttpRequest}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=ye({token:e,factory:e.\u0275fac});let n=e;return n})(),Dh=new Ge("EventManagerPlugins"),fy=(()=>{let e=class e{constructor(i,r){this._zone=r,this._eventNameToPlugin=new Map,i.forEach(s=>{s.manager=this}),this._plugins=i.slice().reverse()}addEventListener(i,r,s){return this._findPluginFor(r).addEventListener(i,r,s)}getZone(){return this._zone}_findPluginFor(i){let r=this._eventNameToPlugin.get(i);if(r)return r;if(r=this._plugins.find(o=>o.supports(i)),!r)throw new De(5101,!1);return this._eventNameToPlugin.set(i,r),r}};e.\u0275fac=function(r){return new(r||e)(Ie(Dh),Ie(gt))},e.\u0275prov=ye({token:e,factory:e.\u0275fac});let n=e;return n})(),el=class{constructor(e){this._doc=e}},Eh="ng-app-id",py=(()=>{let e=class e{constructor(i,r,s,o={}){this.doc=i,this.appId=r,this.nonce=s,this.platformId=o,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=Sh(o),this.resetHostNodes()}addStyles(i){for(let r of i)this.changeUsageCount(r,1)===1&&this.onStyleAdded(r)}removeStyles(i){for(let r of i)this.changeUsageCount(r,-1)<=0&&this.onStyleRemoved(r)}ngOnDestroy(){let i=this.styleNodesInDOM;i&&(i.forEach(r=>r.remove()),i.clear());for(let r of this.getAllStyles())this.onStyleRemoved(r);this.resetHostNodes()}addHost(i){this.hostNodes.add(i);for(let r of this.getAllStyles())this.addStyleToHost(i,r)}removeHost(i){this.hostNodes.delete(i)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(i){for(let r of this.hostNodes)this.addStyleToHost(r,i)}onStyleRemoved(i){let r=this.styleRef;r.get(i)?.elements?.forEach(s=>s.remove()),r.delete(i)}collectServerRenderedStyles(){let i=this.doc.head?.querySelectorAll(`style[${Eh}="${this.appId}"]`);if(i?.length){let r=new Map;return i.forEach(s=>{s.textContent!=null&&r.set(s.textContent,s)}),r}return null}changeUsageCount(i,r){let s=this.styleRef;if(s.has(i)){let o=s.get(i);return o.usage+=r,o.usage}return s.set(i,{usage:r,elements:[]}),r}getStyleElement(i,r){let s=this.styleNodesInDOM,o=s?.get(r);if(o?.parentNode===i)return s.delete(r),o.removeAttribute(Eh),o;{let a=this.doc.createElement("style");return this.nonce&&a.setAttribute("nonce",this.nonce),a.textContent=r,this.platformIsServer&&a.setAttribute(Eh,this.appId),i.appendChild(a),a}}addStyleToHost(i,r){let s=this.getStyleElement(i,r),o=this.styleRef,a=o.get(r)?.elements;a?a.push(s):o.set(r,{elements:[s],usage:1})}resetHostNodes(){let i=this.hostNodes;i.clear(),i.add(this.doc.head)}};e.\u0275fac=function(r){return new(r||e)(Ie(Wt),Ie(Xd),Ie(Zd,8),Ie(Ni))},e.\u0275prov=ye({token:e,factory:e.\u0275fac});let n=e;return n})(),Th={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},Rh=/%COMP%/g,my="%COMP%",NE=`_nghost-${my}`,OE=`_ngcontent-${my}`,LE=!0,FE=new Ge("RemoveStylesOnCompDestroy",{providedIn:"root",factory:()=>LE});function UE(n){return OE.replace(Rh,n)}function kE(n){return NE.replace(Rh,n)}function gy(n,e){return e.map(t=>t.replace(Rh,n))}var uy=(()=>{let e=class e{constructor(i,r,s,o,a,c,l,u=null){this.eventManager=i,this.sharedStylesHost=r,this.appId=s,this.removeStylesOnCompDestroy=o,this.doc=a,this.platformId=c,this.ngZone=l,this.nonce=u,this.rendererByCompId=new Map,this.platformIsServer=Sh(c),this.defaultRenderer=new Vo(i,a,l,this.platformIsServer)}createRenderer(i,r){if(!i||!r)return this.defaultRenderer;this.platformIsServer&&r.encapsulation===Vn.ShadowDom&&(r=_t(fe({},r),{encapsulation:Vn.Emulated}));let s=this.getOrCreateRenderer(i,r);return s instanceof tl?s.applyToHost(i):s instanceof zo&&s.applyStyles(),s}getOrCreateRenderer(i,r){let s=this.rendererByCompId,o=s.get(r.id);if(!o){let a=this.doc,c=this.ngZone,l=this.eventManager,u=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,h=this.platformIsServer;switch(r.encapsulation){case Vn.Emulated:o=new tl(l,u,r,this.appId,d,a,c,h);break;case Vn.ShadowDom:return new Ih(l,u,i,r,a,c,this.nonce,h);default:o=new zo(l,u,r,d,a,c,h);break}s.set(r.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}};e.\u0275fac=function(r){return new(r||e)(Ie(fy),Ie(py),Ie(Xd),Ie(FE),Ie(Wt),Ie(Ni),Ie(gt),Ie(Zd))},e.\u0275prov=ye({token:e,factory:e.\u0275fac});let n=e;return n})(),Vo=class{constructor(e,t,i,r){this.eventManager=e,this.doc=t,this.ngZone=i,this.platformIsServer=r,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(e,t){return t?this.doc.createElementNS(Th[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(dy(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(dy(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){e&&e.removeChild(t)}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new De(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let s=Th[r];s?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=Th[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(pr.DashCase|pr.Important)?e.style.setProperty(t,i,r&pr.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&pr.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i){if(typeof e=="string"&&(e=hs().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${t}`);return this.eventManager.addEventListener(e,t,this.decoratePreventDefault(i))}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function dy(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Ih=class extends Vo{constructor(e,t,i,r,s,o,a,c){super(e,s,o,c),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let l=gy(r.id,r.styles);for(let u of l){let d=document.createElement("style");a&&d.setAttribute("nonce",a),d.textContent=u,this.shadowRoot.appendChild(d)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(this.nodeOrShadowRoot(e),t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},zo=class extends Vo{constructor(e,t,i,r,s,o,a,c){super(e,s,o,a),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r,this.styles=c?gy(c,i.styles):i.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},tl=class extends zo{constructor(e,t,i,r,s,o,a,c){let l=r+"-"+i.id;super(e,t,i,s,o,a,c,l),this.contentAttr=UE(l),this.hostAttr=kE(l)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}},BE=(()=>{let e=class e extends el{constructor(i){super(i)}supports(i){return!0}addEventListener(i,r,s){return i.addEventListener(r,s,!1),()=>this.removeEventListener(i,r,s)}removeEventListener(i,r,s){return i.removeEventListener(r,s)}};e.\u0275fac=function(r){return new(r||e)(Ie(Wt))},e.\u0275prov=ye({token:e,factory:e.\u0275fac});let n=e;return n})(),hy=["alt","control","meta","shift"],VE={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},zE={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},HE=(()=>{let e=class e extends el{constructor(i){super(i)}supports(i){return e.parseEventName(i)!=null}addEventListener(i,r,s){let o=e.parseEventName(r),a=e.eventCallback(o.fullKey,s,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>hs().onAndCancel(i,o.domEventName,a))}static parseEventName(i){let r=i.toLowerCase().split("."),s=r.shift();if(r.length===0||!(s==="keydown"||s==="keyup"))return null;let o=e._normalizeKey(r.pop()),a="",c=r.indexOf("code");if(c>-1&&(r.splice(c,1),a="code."),hy.forEach(u=>{let d=r.indexOf(u);d>-1&&(r.splice(d,1),a+=u+".")}),a+=o,r.length!=0||o.length===0)return null;let l={};return l.domEventName=s,l.fullKey=a,l}static matchEventFullKeyCode(i,r){let s=VE[i.key]||i.key,o="";return r.indexOf("code.")>-1&&(s=i.code,o="code."),s==null||!s?!1:(s=s.toLowerCase(),s===" "?s="space":s==="."&&(s="dot"),hy.forEach(a=>{if(a!==s){let c=zE[a];c(i)&&(o+=a+".")}}),o+=s,o===r)}static eventCallback(i,r,s){return o=>{e.matchEventFullKeyCode(o,i)&&s.runGuarded(()=>r(o))}}static _normalizeKey(i){return i==="esc"?"escape":i}};e.\u0275fac=function(r){return new(r||e)(Ie(Wt))},e.\u0275prov=ye({token:e,factory:e.\u0275fac});let n=e;return n})();function vy(n,e){return Kv(fe({rootComponent:n},GE(e)))}function GE(n){return{appProviders:[...XE,...n?.providers??[]],platformProviders:qE}}function WE(){Ah.makeCurrent()}function jE(){return new Gn}function $E(){return dv(document),document}var qE=[{provide:Ni,useValue:bh},{provide:Yd,useValue:WE,multi:!0},{provide:Wt,useFactory:$E,deps:[]}];var XE=[{provide:Oc,useValue:"root"},{provide:Gn,useFactory:jE,deps:[]},{provide:Dh,useClass:BE,multi:!0,deps:[Wt,gt,Ni]},{provide:Dh,useClass:HE,multi:!0,deps:[Wt]},uy,py,fy,{provide:wo,useExisting:uy},{provide:Jc,useClass:PE,deps:[]},[]];function YE(){return new Ph(Ie(Wt))}var Ph=(()=>{let e=class e{constructor(i){this._doc=i}getTitle(){return this._doc.title}setTitle(i){this._doc.title=i||""}};e.\u0275fac=function(r){return new(r||e)(Ie(Wt))},e.\u0275prov=ye({token:e,factory:function(r){let s=null;return r?s=new r:s=YE(),s},providedIn:"root"});let n=e;return n})();var Ue="primary",ia=Symbol("RouteTitle"),Uh=class{constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function ys(n){return new Uh(n)}function KE(n,e,t){let i=t.path.split("/");if(i.length>n.length||t.pathMatch==="full"&&(e.hasChildren()||i.length<n.length))return null;let r={};for(let s=0;s<i.length;s++){let o=i[s],a=n[s];if(o.startsWith(":"))r[o.substring(1)]=a;else if(o!==a.path)return null}return{consumed:n.slice(0,i.length),posParams:r}}function JE(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;++t)if(!jn(n[t],e[t]))return!1;return!0}function jn(n,e){let t=n?kh(n):void 0,i=e?kh(e):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let s=0;s<t.length;s++)if(r=t[s],!Ty(n[r],e[r]))return!1;return!0}function kh(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function Ty(n,e){if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;let t=[...n].sort(),i=[...e].sort();return t.every((r,s)=>i[s]===r)}else return n===e}function zi(n){return ku(n)?n:Oo(n)?xt(Promise.resolve(n)):Ee(n)}var QE={exact:Ay,subset:Dy},Cy={exact:eT,subset:tT,ignored:()=>!0};function yy(n,e,t){return QE[t.paths](n.root,e.root,t.matrixParams)&&Cy[t.queryParams](n.queryParams,e.queryParams)&&!(t.fragment==="exact"&&n.fragment!==e.fragment)}function eT(n,e){return jn(n,e)}function Ay(n,e,t){if(!_r(n.segments,e.segments)||!rl(n.segments,e.segments,t)||n.numberOfChildren!==e.numberOfChildren)return!1;for(let i in e.children)if(!n.children[i]||!Ay(n.children[i],e.children[i],t))return!1;return!0}function tT(n,e){return Object.keys(e).length<=Object.keys(n).length&&Object.keys(e).every(t=>Ty(n[t],e[t]))}function Dy(n,e,t){return Iy(n,e,e.segments,t)}function Iy(n,e,t,i){if(n.segments.length>t.length){let r=n.segments.slice(0,t.length);return!(!_r(r,t)||e.hasChildren()||!rl(r,t,i))}else if(n.segments.length===t.length){if(!_r(n.segments,t)||!rl(n.segments,t,i))return!1;for(let r in e.children)if(!n.children[r]||!Dy(n.children[r],e.children[r],i))return!1;return!0}else{let r=t.slice(0,n.segments.length),s=t.slice(n.segments.length);return!_r(n.segments,r)||!rl(n.segments,r,i)||!n.children[Ue]?!1:Iy(n.children[Ue],e,s,i)}}function rl(n,e,t){return e.every((i,r)=>Cy[t](n[r].parameters,i.parameters))}var Ui=class{constructor(e=new ot([],{}),t={},i=null){this.root=e,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=ys(this.queryParams)),this._queryParamMap}toString(){return rT.serialize(this)}},ot=class{constructor(e,t){this.segments=e,this.children=t,this.parent=null,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return sl(this)}},yr=class{constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap||(this._parameterMap=ys(this.parameters)),this._parameterMap}toString(){return Py(this)}};function nT(n,e){return _r(n,e)&&n.every((t,i)=>jn(t.parameters,e[i].parameters))}function _r(n,e){return n.length!==e.length?!1:n.every((t,i)=>t.path===e[i].path)}function iT(n,e){let t=[];return Object.entries(n.children).forEach(([i,r])=>{i===Ue&&(t=t.concat(e(r,i)))}),Object.entries(n.children).forEach(([i,r])=>{i!==Ue&&(t=t.concat(e(r,i)))}),t}var ra=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=ye({token:e,factory:()=>new Xo,providedIn:"root"});let n=e;return n})(),Xo=class{parse(e){let t=new Vh(e);return new Ui(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${Ho(e.root,!0)}`,i=aT(e.queryParams),r=typeof e.fragment=="string"?`#${sT(e.fragment)}`:"";return`${t}${i}${r}`}},rT=new Xo;function sl(n){return n.segments.map(e=>Py(e)).join("/")}function Ho(n,e){if(!n.hasChildren())return sl(n);if(e){let t=n.children[Ue]?Ho(n.children[Ue],!1):"",i=[];return Object.entries(n.children).forEach(([r,s])=>{r!==Ue&&i.push(`${r}:${Ho(s,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=iT(n,(i,r)=>r===Ue?[Ho(n.children[Ue],!1)]:[`${r}:${Ho(i,!1)}`]);return Object.keys(n.children).length===1&&n.children[Ue]!=null?`${sl(n)}/${t[0]}`:`${sl(n)}/(${t.join("//")})`}}function Ry(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function nl(n){return Ry(n).replace(/%3B/gi,";")}function sT(n){return encodeURI(n)}function Bh(n){return Ry(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function ol(n){return decodeURIComponent(n)}function _y(n){return ol(n.replace(/\+/g,"%20"))}function Py(n){return`${Bh(n.path)}${oT(n.parameters)}`}function oT(n){return Object.entries(n).map(([e,t])=>`;${Bh(e)}=${Bh(t)}`).join("")}function aT(n){let e=Object.entries(n).map(([t,i])=>Array.isArray(i)?i.map(r=>`${nl(t)}=${nl(r)}`).join("&"):`${nl(t)}=${nl(i)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var cT=/^[^\/()?;#]+/;function Nh(n){let e=n.match(cT);return e?e[0]:""}var lT=/^[^\/()?;=#]+/;function uT(n){let e=n.match(lT);return e?e[0]:""}var dT=/^[^=?&#]+/;function hT(n){let e=n.match(dT);return e?e[0]:""}var fT=/^[^&#]+/;function pT(n){let e=n.match(fT);return e?e[0]:""}var Vh=class{constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new ot([],{}):new ot([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(i[Ue]=new ot(e,t)),i}parseSegment(){let e=Nh(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new De(4009,!1);return this.capture(e),new yr(ol(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=uT(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let r=Nh(this.remaining);r&&(i=r,this.capture(i))}e[ol(t)]=ol(i)}parseQueryParam(e){let t=hT(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let o=pT(this.remaining);o&&(i=o,this.capture(i))}let r=_y(t),s=_y(i);if(e.hasOwnProperty(r)){let o=e[r];Array.isArray(o)||(o=[o],e[r]=o),o.push(s)}else e[r]=s}parseParens(e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=Nh(this.remaining),r=this.remaining[i.length];if(r!=="/"&&r!==")"&&r!==";")throw new De(4010,!1);let s;i.indexOf(":")>-1?(s=i.slice(0,i.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=Ue);let o=this.parseChildren();t[s]=Object.keys(o).length===1?o[Ue]:new ot([],o),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new De(4011,!1)}};function Ny(n){return n.segments.length>0?new ot([],{[Ue]:n}):n}function Oy(n){let e={};for(let[i,r]of Object.entries(n.children)){let s=Oy(r);if(i===Ue&&s.segments.length===0&&s.hasChildren())for(let[o,a]of Object.entries(s.children))e[o]=a;else(s.segments.length>0||s.hasChildren())&&(e[i]=s)}let t=new ot(n.segments,e);return mT(t)}function mT(n){if(n.numberOfChildren===1&&n.children[Ue]){let e=n.children[Ue];return new ot(n.segments.concat(e.segments),e.children)}return n}function _s(n){return n instanceof Ui}function gT(n,e,t=null,i=null){let r=Ly(n);return Fy(r,e,t,i)}function Ly(n){let e;function t(s){let o={};for(let c of s.children){let l=t(c);o[c.outlet]=l}let a=new ot(s.url,o);return s===n&&(e=a),a}let i=t(n.root),r=Ny(i);return e??r}function Fy(n,e,t,i){let r=n;for(;r.parent;)r=r.parent;if(e.length===0)return Oh(r,r,r,t,i);let s=vT(e);if(s.toRoot())return Oh(r,r,new ot([],{}),t,i);let o=yT(s,r,n),a=o.processChildren?jo(o.segmentGroup,o.index,s.commands):ky(o.segmentGroup,o.index,s.commands);return Oh(r,o.segmentGroup,a,t,i)}function al(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function Yo(n){return typeof n=="object"&&n!=null&&n.outlets}function Oh(n,e,t,i,r){let s={};i&&Object.entries(i).forEach(([c,l])=>{s[c]=Array.isArray(l)?l.map(u=>`${u}`):`${l}`});let o;n===e?o=t:o=Uy(n,e,t);let a=Ny(Oy(o));return new Ui(a,s,r)}function Uy(n,e,t){let i={};return Object.entries(n.children).forEach(([r,s])=>{s===e?i[r]=t:i[r]=Uy(s,e,t)}),new ot(n.segments,i)}var cl=class{constructor(e,t,i){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=i,e&&i.length>0&&al(i[0]))throw new De(4003,!1);let r=i.find(Yo);if(r&&r!==i.at(-1))throw new De(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function vT(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new cl(!0,0,n);let e=0,t=!1,i=n.reduce((r,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let a={};return Object.entries(s.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:o===0?(s.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?t=!0:a===".."?e++:a!=""&&r.push(a))}),r):[...r,s]},[]);return new cl(t,e,i)}var gs=class{constructor(e,t,i){this.segmentGroup=e,this.processChildren=t,this.index=i}};function yT(n,e,t){if(n.isAbsolute)return new gs(e,!0,0);if(!t)return new gs(e,!1,NaN);if(t.parent===null)return new gs(t,!0,0);let i=al(n.commands[0])?0:1,r=t.segments.length-1+i;return _T(t,r,n.numberOfDoubleDots)}function _T(n,e,t){let i=n,r=e,s=t;for(;s>r;){if(s-=r,i=i.parent,!i)throw new De(4005,!1);r=i.segments.length}return new gs(i,!1,r-s)}function xT(n){return Yo(n[0])?n[0].outlets:{[Ue]:n}}function ky(n,e,t){if(n||(n=new ot([],{})),n.segments.length===0&&n.hasChildren())return jo(n,e,t);let i=MT(n,e,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){let s=new ot(n.segments.slice(0,i.pathIndex),{});return s.children[Ue]=new ot(n.segments.slice(i.pathIndex),n.children),jo(s,0,r)}else return i.match&&r.length===0?new ot(n.segments,{}):i.match&&!n.hasChildren()?zh(n,e,t):i.match?jo(n,0,r):zh(n,e,t)}function jo(n,e,t){if(t.length===0)return new ot(n.segments,{});{let i=xT(t),r={};if(Object.keys(i).some(s=>s!==Ue)&&n.children[Ue]&&n.numberOfChildren===1&&n.children[Ue].segments.length===0){let s=jo(n.children[Ue],e,t);return new ot(n.segments,s.children)}return Object.entries(i).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[s]=ky(n.children[s],e,o))}),Object.entries(n.children).forEach(([s,o])=>{i[s]===void 0&&(r[s]=o)}),new ot(n.segments,r)}}function MT(n,e,t){let i=0,r=e,s={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(i>=t.length)return s;let o=n.segments[r],a=t[i];if(Yo(a))break;let c=`${a}`,l=i<t.length-1?t[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!My(c,l,o))return s;i+=2}else{if(!My(c,{},o))return s;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function zh(n,e,t){let i=n.segments.slice(0,e),r=0;for(;r<t.length;){let s=t[r];if(Yo(s)){let c=wT(s.outlets);return new ot(i,c)}if(r===0&&al(t[0])){let c=n.segments[e];i.push(new yr(c.path,xy(t[0]))),r++;continue}let o=Yo(s)?s.outlets[Ue]:`${s}`,a=r<t.length-1?t[r+1]:null;o&&a&&al(a)?(i.push(new yr(o,xy(a))),r+=2):(i.push(new yr(o,{})),r++)}return new ot(i,{})}function wT(n){let e={};return Object.entries(n).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(e[t]=zh(new ot([],{}),0,i))}),e}function xy(n){let e={};return Object.entries(n).forEach(([t,i])=>e[t]=`${i}`),e}function My(n,e,t){return n==t.path&&jn(e,t.parameters)}var $o="imperative",vn=class{constructor(e,t){this.id=e,this.url=t}},xs=class extends vn{constructor(e,t,i="imperative",r=null){super(e,t),this.type=0,this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},li=class extends vn{constructor(e,t,i){super(e,t),this.urlAfterRedirects=i,this.type=1}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},ki=class extends vn{constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r,this.type=2}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Bi=class extends vn{constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r,this.type=16}},Zo=class extends vn{constructor(e,t,i,r){super(e,t),this.error=i,this.target=r,this.type=3}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},ll=class extends vn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=4}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Hh=class extends vn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=7}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Gh=class extends vn{constructor(e,t,i,r,s){super(e,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=s,this.type=8}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Wh=class extends vn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=5}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},jh=class extends vn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=6}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},$h=class{constructor(e){this.route=e,this.type=9}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},qh=class{constructor(e){this.route=e,this.type=10}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Xh=class{constructor(e){this.snapshot=e,this.type=11}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Yh=class{constructor(e){this.snapshot=e,this.type=12}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Zh=class{constructor(e){this.snapshot=e,this.type=13}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Kh=class{constructor(e){this.snapshot=e,this.type=14}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ul=class{constructor(e,t,i){this.routerEvent=e,this.position=t,this.anchor=i,this.type=15}toString(){let e=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${e}')`}},Ko=class{},Jo=class{constructor(e){this.url=e}};var Jh=class{constructor(){this.outlet=null,this.route=null,this.injector=null,this.children=new sa,this.attachRef=null}},sa=(()=>{let e=class e{constructor(){this.contexts=new Map}onChildOutletCreated(i,r){let s=this.getOrCreateContext(i);s.outlet=r,this.contexts.set(i,s)}onChildOutletDestroyed(i){let r=this.getContext(i);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let i=this.contexts;return this.contexts=new Map,i}onOutletReAttached(i){this.contexts=i}getOrCreateContext(i){let r=this.getContext(i);return r||(r=new Jh,this.contexts.set(i,r)),r}getContext(i){return this.contexts.get(i)||null}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=ye({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),dl=class{constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=Qh(e,this._root);return t?t.children.map(i=>i.value):[]}firstChild(e){let t=Qh(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=ef(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return ef(e,this._root).map(t=>t.value)}};function Qh(n,e){if(n===e.value)return e;for(let t of e.children){let i=Qh(n,t);if(i)return i}return null}function ef(n,e){if(n===e.value)return[e];for(let t of e.children){let i=ef(n,t);if(i.length)return i.unshift(e),i}return[]}var on=class{constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function ms(n){let e={};return n&&n.children.forEach(t=>e[t.value.outlet]=t),e}var hl=class extends dl{constructor(e,t){super(e),this.snapshot=t,df(this,e)}toString(){return this.snapshot.toString()}};function By(n){let e=bT(n),t=new Ut([new yr("",{})]),i=new Ut({}),r=new Ut({}),s=new Ut({}),o=new Ut(""),a=new xr(t,i,s,o,r,Ue,n,e.root);return a.snapshot=e.root,new hl(new on(a,[]),e)}function bT(n){let e={},t={},i={},r="",s=new Qo([],e,i,r,t,Ue,n,null,{});return new fl("",new on(s,[]))}var xr=class{constructor(e,t,i,r,s,o,a,c){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=s,this.outlet=o,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(Qe(l=>l[ia]))??Ee(void 0),this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=this.params.pipe(Qe(e=>ys(e)))),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=this.queryParams.pipe(Qe(e=>ys(e)))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function uf(n,e,t="emptyOnly"){let i,{routeConfig:r}=n;return e!==null&&(t==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?i={params:fe(fe({},e.params),n.params),data:fe(fe({},e.data),n.data),resolve:fe(fe(fe(fe({},n.data),e.data),r?.data),n._resolvedData)}:i={params:fe({},n.params),data:fe({},n.data),resolve:fe(fe({},n.data),n._resolvedData??{})},r&&zy(r)&&(i.resolve[ia]=r.title),i}var Qo=class{get title(){return this.data?.[ia]}constructor(e,t,i,r,s,o,a,c,l){this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s,this.outlet=o,this.component=a,this.routeConfig=c,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=ys(this.params)),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=ys(this.queryParams)),this._queryParamMap}toString(){let e=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},fl=class extends dl{constructor(e,t){super(t),this.url=e,df(this,t)}toString(){return Vy(this._root)}};function df(n,e){e.value._routerState=n,e.children.forEach(t=>df(n,t))}function Vy(n){let e=n.children.length>0?` { ${n.children.map(Vy).join(", ")} } `:"";return`${n.value}${e}`}function Lh(n){if(n.snapshot){let e=n.snapshot,t=n._futureSnapshot;n.snapshot=t,jn(e.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),jn(e.params,t.params)||n.paramsSubject.next(t.params),JE(e.url,t.url)||n.urlSubject.next(t.url),jn(e.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function tf(n,e){let t=jn(n.params,e.params)&&nT(n.url,e.url),i=!n.parent!=!e.parent;return t&&!i&&(!n.parent||tf(n.parent,e.parent))}function zy(n){return typeof n.title=="string"||n.title===null}var hf=(()=>{let e=class e{constructor(){this.activated=null,this._activatedRoute=null,this.name=Ue,this.activateEvents=new bn,this.deactivateEvents=new bn,this.attachEvents=new bn,this.detachEvents=new bn,this.parentContexts=ie(sa),this.location=ie(Io),this.changeDetector=ie(Gc),this.environmentInjector=ie(sn),this.inputBinder=ie(vl,{optional:!0}),this.supportsBindingToComponentInputs=!0}get activatedComponentRef(){return this.activated}ngOnChanges(i){if(i.name){let{firstChange:r,previousValue:s}=i.name;if(r)return;this.isTrackedInParentContexts(s)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(s)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(i){return this.parentContexts.getContext(i)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let i=this.parentContexts.getContext(this.name);i?.route&&(i.attachRef?this.attach(i.attachRef,i.route):this.activateWith(i.route,i.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new De(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new De(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new De(4012,!1);this.location.detach();let i=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(i.instance),i}attach(i,r){this.activated=i,this._activatedRoute=r,this.location.insert(i.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(i.instance)}deactivate(){if(this.activated){let i=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(i)}}activateWith(i,r){if(this.isActivated)throw new De(4013,!1);this._activatedRoute=i;let s=this.location,a=i.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,l=new nf(i,c,s.injector);this.activated=s.createComponent(a,{index:s.length,injector:l,environmentInjector:r??this.environmentInjector}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=wc({type:e,selectors:[["router-outlet"]],inputs:{name:"name"},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0,features:[Cc]});let n=e;return n})(),nf=class{constructor(e,t,i){this.route=e,this.childContexts=t,this.parent=i}get(e,t){return e===xr?this.route:e===sa?this.childContexts:this.parent.get(e,t)}},vl=new Ge(""),wy=(()=>{let e=class e{constructor(){this.outletDataSubscriptions=new Map}bindActivatedRouteToOutletComponent(i){this.unsubscribeFromRouteData(i),this.subscribeToRouteData(i)}unsubscribeFromRouteData(i){this.outletDataSubscriptions.get(i)?.unsubscribe(),this.outletDataSubscriptions.delete(i)}subscribeToRouteData(i){let{activatedRoute:r}=i,s=ao([r.queryParams,r.params,r.data]).pipe(fn(([o,a,c],l)=>(c=fe(fe(fe({},o),a),c),l===0?Ee(c):Promise.resolve(c)))).subscribe(o=>{if(!i.isActivated||!i.activatedComponentRef||i.activatedRoute!==r||r.component===null){this.unsubscribeFromRouteData(i);return}let a=Jv(r.component);if(!a){this.unsubscribeFromRouteData(i);return}for(let{templateName:c}of a.inputs)i.activatedComponentRef.setInput(c,o[c])});this.outletDataSubscriptions.set(i,s)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=ye({token:e,factory:e.\u0275fac});let n=e;return n})();function ST(n,e,t){let i=ea(n,e._root,t?t._root:void 0);return new hl(i,e)}function ea(n,e,t){if(t&&n.shouldReuseRoute(e.value,t.value.snapshot)){let i=t.value;i._futureSnapshot=e.value;let r=ET(n,e,t);return new on(i,r)}else{if(n.shouldAttach(e.value)){let s=n.retrieve(e.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=e.value,o.children=e.children.map(a=>ea(n,a)),o}}let i=TT(e.value),r=e.children.map(s=>ea(n,s));return new on(i,r)}}function ET(n,e,t){return e.children.map(i=>{for(let r of t.children)if(n.shouldReuseRoute(i.value,r.value.snapshot))return ea(n,i,r);return ea(n,i)})}function TT(n){return new xr(new Ut(n.url),new Ut(n.params),new Ut(n.queryParams),new Ut(n.fragment),new Ut(n.data),n.outlet,n.component,n)}var Hy="ngNavigationCancelingError";function Gy(n,e){let{redirectTo:t,navigationBehaviorOptions:i}=_s(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=Wy(!1,0,e);return r.url=t,r.navigationBehaviorOptions=i,r}function Wy(n,e,t){let i=new Error("NavigationCancelingError: "+(n||""));return i[Hy]=!0,i.cancellationCode=e,t&&(i.url=t),i}function CT(n){return jy(n)&&_s(n.url)}function jy(n){return n&&n[Hy]}var AT=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Ri({type:e,selectors:[["ng-component"]],standalone:!0,features:[Fi],decls:1,vars:0,template:function(r,s){r&1&&Wn(0,"router-outlet")},dependencies:[hf],encapsulation:2});let n=e;return n})();function DT(n,e){return n.providers&&!n._injector&&(n._injector=jc(n.providers,e,`Route: ${n.path}`)),n._injector??e}function ff(n){let e=n.children&&n.children.map(ff),t=e?_t(fe({},n),{children:e}):fe({},n);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==Ue&&(t.component=AT),t}function $n(n){return n.outlet||Ue}function IT(n,e){let t=n.filter(i=>$n(i)===e);return t.push(...n.filter(i=>$n(i)!==e)),t}function oa(n){if(!n)return null;if(n.routeConfig?._injector)return n.routeConfig._injector;for(let e=n.parent;e;e=e.parent){let t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var RT=(n,e,t,i)=>Qe(r=>(new rf(e,r.targetRouterState,r.currentRouterState,t,i).activate(n),r)),rf=class{constructor(e,t,i,r,s){this.routeReuseStrategy=e,this.futureState=t,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=s}activate(e){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,e),Lh(this.futureState.root),this.activateChildRoutes(t,i,e)}deactivateChildRoutes(e,t,i){let r=ms(t);e.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,r[o],i),delete r[o]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,i)})}deactivateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(r===s)if(r.component){let o=i.getContext(r.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,i);else s&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=ms(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);if(i&&i.outlet){let o=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:o,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=ms(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(e,t,i){let r=ms(t);e.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],i),this.forwardEvent(new Kh(s.value.snapshot))}),e.children.length&&this.forwardEvent(new Yh(e.value.snapshot))}activateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(Lh(r),r===s)if(r.component){let o=i.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,i);else if(r.component){let o=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),Lh(a.route.value),this.activateChildRoutes(e,null,o.children)}else{let a=oa(r.snapshot);o.attachRef=null,o.route=r,o.injector=a,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(e,null,o.children)}}else this.activateChildRoutes(e,null,i)}},pl=class{constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},vs=class{constructor(e,t){this.component=e,this.route=t}};function PT(n,e,t){let i=n._root,r=e?e._root:null;return Go(i,r,t,[i.value])}function NT(n){let e=n.routeConfig?n.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:n,guards:e}}function ws(n,e){let t=Symbol(),i=e.get(n,t);return i===t?typeof n=="function"&&!lg(n)?n:e.get(n):i}function Go(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=ms(e);return n.children.forEach(o=>{OT(o,s[o.value.outlet],t,i.concat([o.value]),r),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,a])=>qo(a,t.getContext(o),r)),r}function OT(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=n.value,o=e?e.value:null,a=t?t.getContext(n.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let c=LT(o,s,s.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new pl(i)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?Go(n,e,a?a.children:null,i,r):Go(n,e,t,i,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new vs(a.outlet.component,o))}else o&&qo(e,a,r),r.canActivateChecks.push(new pl(i)),s.component?Go(n,null,a?a.children:null,i,r):Go(n,null,t,i,r);return r}function LT(n,e,t){if(typeof t=="function")return t(n,e);switch(t){case"pathParamsChange":return!_r(n.url,e.url);case"pathParamsOrQueryParamsChange":return!_r(n.url,e.url)||!jn(n.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!tf(n,e)||!jn(n.queryParams,e.queryParams);case"paramsChange":default:return!tf(n,e)}}function qo(n,e,t){let i=ms(n),r=n.value;Object.entries(i).forEach(([s,o])=>{r.component?e?qo(o,e.children.getContext(s),t):qo(o,null,t):qo(o,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new vs(e.outlet.component,r)):t.canDeactivateChecks.push(new vs(null,r)):t.canDeactivateChecks.push(new vs(null,r))}function aa(n){return typeof n=="function"}function FT(n){return typeof n=="boolean"}function UT(n){return n&&aa(n.canLoad)}function kT(n){return n&&aa(n.canActivate)}function BT(n){return n&&aa(n.canActivateChild)}function VT(n){return n&&aa(n.canDeactivate)}function zT(n){return n&&aa(n.canMatch)}function $y(n){return n instanceof Qn||n?.name==="EmptyError"}var il=Symbol("INITIAL_VALUE");function Ms(){return fn(n=>ao(n.map(e=>e.pipe(ei(1),Hu(il)))).pipe(Qe(e=>{for(let t of e)if(t!==!0){if(t===il)return il;if(t===!1||t instanceof Ui)return t}return!0}),hn(e=>e!==il),ei(1)))}function HT(n,e){return St(t=>{let{targetSnapshot:i,currentSnapshot:r,guards:{canActivateChecks:s,canDeactivateChecks:o}}=t;return o.length===0&&s.length===0?Ee(_t(fe({},t),{guardsResult:!0})):GT(o,i,r,n).pipe(St(a=>a&&FT(a)?WT(i,s,n,e):Ee(a)),Qe(a=>_t(fe({},t),{guardsResult:a})))})}function GT(n,e,t,i){return xt(n).pipe(St(r=>YT(r.component,r.route,t,e,i)),Fn(r=>r!==!0,!0))}function WT(n,e,t,i){return xt(e).pipe(or(r=>Zr($T(r.route.parent,i),jT(r.route,i),XT(n,r.path,t),qT(n,r.route,t))),Fn(r=>r!==!0,!0))}function jT(n,e){return n!==null&&e&&e(new Zh(n)),Ee(!0)}function $T(n,e){return n!==null&&e&&e(new Xh(n)),Ee(!0)}function qT(n,e,t){let i=e.routeConfig?e.routeConfig.canActivate:null;if(!i||i.length===0)return Ee(!0);let r=i.map(s=>Za(()=>{let o=oa(e)??t,a=ws(s,o),c=kT(a)?a.canActivate(e,n):Pi(o,()=>a(e,n));return zi(c).pipe(Fn())}));return Ee(r).pipe(Ms())}function XT(n,e,t){let i=e[e.length-1],s=e.slice(0,e.length-1).reverse().map(o=>NT(o)).filter(o=>o!==null).map(o=>Za(()=>{let a=o.guards.map(c=>{let l=oa(o.node)??t,u=ws(c,l),d=BT(u)?u.canActivateChild(i,n):Pi(l,()=>u(i,n));return zi(d).pipe(Fn())});return Ee(a).pipe(Ms())}));return Ee(s).pipe(Ms())}function YT(n,e,t,i,r){let s=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!s||s.length===0)return Ee(!0);let o=s.map(a=>{let c=oa(e)??r,l=ws(a,c),u=VT(l)?l.canDeactivate(n,e,t,i):Pi(c,()=>l(n,e,t,i));return zi(u).pipe(Fn())});return Ee(o).pipe(Ms())}function ZT(n,e,t,i){let r=e.canLoad;if(r===void 0||r.length===0)return Ee(!0);let s=r.map(o=>{let a=ws(o,n),c=UT(a)?a.canLoad(e,t):Pi(n,()=>a(e,t));return zi(c)});return Ee(s).pipe(Ms(),qy(i))}function qy(n){return Ou(Ot(e=>{if(_s(e))throw Gy(n,e)}),Qe(e=>e===!0))}function KT(n,e,t,i){let r=e.canMatch;if(!r||r.length===0)return Ee(!0);let s=r.map(o=>{let a=ws(o,n),c=zT(a)?a.canMatch(e,t):Pi(n,()=>a(e,t));return zi(c)});return Ee(s).pipe(Ms(),qy(i))}var ta=class{constructor(e){this.segmentGroup=e||null}},ml=class extends Error{constructor(e){super(),this.urlTree=e}};function ps(n){return Xr(new ta(n))}function JT(n){return Xr(new De(4e3,!1))}function QT(n){return Xr(Wy(!1,3))}var sf=class{constructor(e,t){this.urlSerializer=e,this.urlTree=t}lineralizeSegments(e,t){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return Ee(i);if(r.numberOfChildren>1||!r.children[Ue])return JT(e.redirectTo);r=r.children[Ue]}}applyRedirectCommands(e,t,i){let r=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),e,i);if(t.startsWith("/"))throw new ml(r);return r}applyRedirectCreateUrlTree(e,t,i,r){let s=this.createSegmentGroup(e,t.root,i,r);return new Ui(s,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let i={};return Object.entries(e).forEach(([r,s])=>{if(typeof s=="string"&&s.startsWith(":")){let a=s.substring(1);i[r]=t[a]}else i[r]=s}),i}createSegmentGroup(e,t,i,r){let s=this.createSegments(e,t.segments,i,r),o={};return Object.entries(t.children).forEach(([a,c])=>{o[a]=this.createSegmentGroup(e,c,i,r)}),new ot(s,o)}createSegments(e,t,i,r){return t.map(s=>s.path.startsWith(":")?this.findPosParam(e,s,r):this.findOrReturn(s,i))}findPosParam(e,t,i){let r=i[t.path.substring(1)];if(!r)throw new De(4001,!1);return r}findOrReturn(e,t){let i=0;for(let r of t){if(r.path===e.path)return t.splice(i),r;i++}return e}},of={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function eC(n,e,t,i,r){let s=pf(n,e,t);return s.matched?(i=DT(e,i),KT(i,e,t,r).pipe(Qe(o=>o===!0?s:fe({},of)))):Ee(s)}function pf(n,e,t){if(e.path==="**")return tC(t);if(e.path==="")return e.pathMatch==="full"&&(n.hasChildren()||t.length>0)?fe({},of):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||KE)(t,n,e);if(!r)return fe({},of);let s={};Object.entries(r.posParams??{}).forEach(([a,c])=>{s[a]=c.path});let o=r.consumed.length>0?fe(fe({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function tC(n){return{matched:!0,parameters:n.at(-1)?.parameters??{},consumedSegments:n,remainingSegments:[],positionalParamSegments:{}}}function by(n,e,t,i){return t.length>0&&rC(n,t,i)?{segmentGroup:new ot(e,iC(i,new ot(t,n.children))),slicedSegments:[]}:t.length===0&&sC(n,t,i)?{segmentGroup:new ot(n.segments,nC(n,t,i,n.children)),slicedSegments:t}:{segmentGroup:new ot(n.segments,n.children),slicedSegments:t}}function nC(n,e,t,i){let r={};for(let s of t)if(yl(n,e,s)&&!i[$n(s)]){let o=new ot([],{});r[$n(s)]=o}return fe(fe({},i),r)}function iC(n,e){let t={};t[Ue]=e;for(let i of n)if(i.path===""&&$n(i)!==Ue){let r=new ot([],{});t[$n(i)]=r}return t}function rC(n,e,t){return t.some(i=>yl(n,e,i)&&$n(i)!==Ue)}function sC(n,e,t){return t.some(i=>yl(n,e,i))}function yl(n,e,t){return(n.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function oC(n,e,t,i){return $n(n)!==i&&(i===Ue||!yl(e,t,n))?!1:pf(e,n,t).matched}function aC(n,e,t){return e.length===0&&!n.children[t]}var af=class{};function cC(n,e,t,i,r,s,o="emptyOnly"){return new cf(n,e,t,i,r,o,s).recognize()}var lC=31,cf=class{constructor(e,t,i,r,s,o,a){this.injector=e,this.configLoader=t,this.rootComponentType=i,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.applyRedirects=new sf(this.urlSerializer,this.urlTree),this.absoluteRedirectCount=0,this.allowRedirects=!0}noMatchError(e){return new De(4002,`'${e.segmentGroup}'`)}recognize(){let e=by(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(Qe(t=>{let i=new Qo([],Object.freeze({}),Object.freeze(fe({},this.urlTree.queryParams)),this.urlTree.fragment,{},Ue,this.rootComponentType,null,{}),r=new on(i,t),s=new fl("",r),o=gT(i,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),this.inheritParamsAndData(s._root,null),{state:s,tree:o}}))}match(e){return this.processSegmentGroup(this.injector,this.config,e,Ue).pipe(Si(i=>{if(i instanceof ml)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof ta?this.noMatchError(i):i}))}inheritParamsAndData(e,t){let i=e.value,r=uf(i,t,this.paramsInheritanceStrategy);i.params=Object.freeze(r.params),i.data=Object.freeze(r.data),e.children.forEach(s=>this.inheritParamsAndData(s,i))}processSegmentGroup(e,t,i,r){return i.segments.length===0&&i.hasChildren()?this.processChildren(e,t,i):this.processSegment(e,t,i,i.segments,r,!0).pipe(Qe(s=>s instanceof on?[s]:[]))}processChildren(e,t,i){let r=[];for(let s of Object.keys(i.children))s==="primary"?r.unshift(s):r.push(s);return xt(r).pipe(or(s=>{let o=i.children[s],a=IT(t,s);return this.processSegmentGroup(e,a,o,s)}),zu((s,o)=>(s.push(...o),s)),Ei(null),Vu(),St(s=>{if(s===null)return ps(i);let o=Xy(s);return uC(o),Ee(o)}))}processSegment(e,t,i,r,s,o){return xt(t).pipe(or(a=>this.processSegmentAgainstRoute(a._injector??e,t,a,i,r,s,o).pipe(Si(c=>{if(c instanceof ta)return Ee(null);throw c}))),Fn(a=>!!a),Si(a=>{if($y(a))return aC(i,r,s)?Ee(new af):ps(i);throw a}))}processSegmentAgainstRoute(e,t,i,r,s,o,a){return oC(i,r,s,o)?i.redirectTo===void 0?this.matchSegmentAgainstRoute(e,r,i,s,o):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(e,r,t,i,s,o):ps(r):ps(r)}expandSegmentAgainstRouteUsingRedirect(e,t,i,r,s,o){let{matched:a,consumedSegments:c,positionalParamSegments:l,remainingSegments:u}=pf(t,r,s);if(!a)return ps(t);r.redirectTo.startsWith("/")&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>lC&&(this.allowRedirects=!1));let d=this.applyRedirects.applyRedirectCommands(c,r.redirectTo,l);return this.applyRedirects.lineralizeSegments(r,d).pipe(St(h=>this.processSegment(e,i,t,h.concat(u),o,!1)))}matchSegmentAgainstRoute(e,t,i,r,s){let o=eC(t,i,r,e,this.urlSerializer);return i.path==="**"&&(t.children={}),o.pipe(fn(a=>a.matched?(e=i._injector??e,this.getChildConfig(e,i,r).pipe(fn(({routes:c})=>{let l=i._loadedInjector??e,{consumedSegments:u,remainingSegments:d,parameters:h}=a,m=new Qo(u,h,Object.freeze(fe({},this.urlTree.queryParams)),this.urlTree.fragment,hC(i),$n(i),i.component??i._loadedComponent??null,i,fC(i)),{segmentGroup:v,slicedSegments:_}=by(t,u,d,c);if(_.length===0&&v.hasChildren())return this.processChildren(l,c,v).pipe(Qe(f=>f===null?null:new on(m,f)));if(c.length===0&&_.length===0)return Ee(new on(m,[]));let p=$n(i)===s;return this.processSegment(l,c,v,_,p?Ue:s,!0).pipe(Qe(f=>new on(m,f instanceof on?[f]:[])))}))):ps(t)))}getChildConfig(e,t,i){return t.children?Ee({routes:t.children,injector:e}):t.loadChildren?t._loadedRoutes!==void 0?Ee({routes:t._loadedRoutes,injector:t._loadedInjector}):ZT(e,t,i,this.urlSerializer).pipe(St(r=>r?this.configLoader.loadChildren(e,t).pipe(Ot(s=>{t._loadedRoutes=s.routes,t._loadedInjector=s.injector})):QT(t))):Ee({routes:[],injector:e})}};function uC(n){n.sort((e,t)=>e.value.outlet===Ue?-1:t.value.outlet===Ue?1:e.value.outlet.localeCompare(t.value.outlet))}function dC(n){let e=n.value.routeConfig;return e&&e.path===""}function Xy(n){let e=[],t=new Set;for(let i of n){if(!dC(i)){e.push(i);continue}let r=e.find(s=>i.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...i.children),t.add(r)):e.push(i)}for(let i of t){let r=Xy(i.children);e.push(new on(i.value,r))}return e.filter(i=>!t.has(i))}function hC(n){return n.data||{}}function fC(n){return n.resolve||{}}function pC(n,e,t,i,r,s){return St(o=>cC(n,e,t,i,o.extractedUrl,r,s).pipe(Qe(({state:a,tree:c})=>_t(fe({},o),{targetSnapshot:a,urlAfterRedirects:c}))))}function mC(n,e){return St(t=>{let{targetSnapshot:i,guards:{canActivateChecks:r}}=t;if(!r.length)return Ee(t);let s=new Set(r.map(c=>c.route)),o=new Set;for(let c of s)if(!o.has(c))for(let l of Yy(c))o.add(l);let a=0;return xt(o).pipe(or(c=>s.has(c)?gC(c,i,n,e):(c.data=uf(c,c.parent,n).resolve,Ee(void 0))),Ot(()=>a++),Kr(1),St(c=>a===o.size?Ee(t):dn))})}function Yy(n){let e=n.children.map(t=>Yy(t)).flat();return[n,...e]}function gC(n,e,t,i){let r=n.routeConfig,s=n._resolve;return r?.title!==void 0&&!zy(r)&&(s[ia]=r.title),vC(s,n,e,i).pipe(Qe(o=>(n._resolvedData=o,n.data=uf(n,n.parent,t).resolve,null)))}function vC(n,e,t,i){let r=kh(n);if(r.length===0)return Ee({});let s={};return xt(r).pipe(St(o=>yC(n[o],e,t,i).pipe(Fn(),Ot(a=>{s[o]=a}))),Kr(1),Bu(s),Si(o=>$y(o)?dn:Xr(o)))}function yC(n,e,t,i){let r=oa(e)??i,s=ws(n,r),o=s.resolve?s.resolve(e,t):Pi(r,()=>s(e,t));return zi(o)}function Fh(n){return fn(e=>{let t=n(e);return t?xt(t).pipe(Qe(()=>e)):Ee(e)})}var Zy=(()=>{let e=class e{buildTitle(i){let r,s=i.root;for(;s!==void 0;)r=this.getResolvedTitleForRoute(s)??r,s=s.children.find(o=>o.outlet===Ue);return r}getResolvedTitleForRoute(i){return i.data[ia]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=ye({token:e,factory:()=>ie(_C),providedIn:"root"});let n=e;return n})(),_C=(()=>{let e=class e extends Zy{constructor(i){super(),this.title=i}updateTitle(i){let r=this.buildTitle(i);r!==void 0&&this.title.setTitle(r)}};e.\u0275fac=function(r){return new(r||e)(Ie(Ph))},e.\u0275prov=ye({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),ca=new Ge("",{providedIn:"root",factory:()=>({})}),na=new Ge("ROUTES"),mf=(()=>{let e=class e{constructor(){this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap,this.compiler=ie(qc)}loadComponent(i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Ee(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=zi(i.loadComponent()).pipe(Qe(Ky),Ot(o=>{this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=o}),co(()=>{this.componentLoaders.delete(i)})),s=new qr(r,()=>new rn).pipe($r());return this.componentLoaders.set(i,s),s}loadChildren(i,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return Ee({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let o=xC(r,this.compiler,i,this.onLoadEndListener).pipe(co(()=>{this.childrenLoaders.delete(r)})),a=new qr(o,()=>new rn).pipe($r());return this.childrenLoaders.set(r,a),a}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=ye({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function xC(n,e,t,i){return zi(n.loadChildren()).pipe(Qe(Ky),St(r=>r instanceof bo||Array.isArray(r)?Ee(r):xt(e.compileModuleAsync(r))),Qe(r=>{i&&i(n);let s,o,a=!1;return Array.isArray(r)?(o=r,a=!0):(s=r.create(t).injector,o=s.get(na,[],{optional:!0,self:!0}).flat()),{routes:o.map(ff),injector:s}}))}function MC(n){return n&&typeof n=="object"&&"default"in n}function Ky(n){return MC(n)?n.default:n}var gf=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=ye({token:e,factory:()=>ie(wC),providedIn:"root"});let n=e;return n})(),wC=(()=>{let e=class e{shouldProcessUrl(i){return!0}extract(i){return i}merge(i,r){return i}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=ye({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),Jy=new Ge(""),Qy=new Ge("");function bC(n,e,t){let i=n.get(Qy),r=n.get(Wt);return n.get(gt).runOutsideAngular(()=>{if(!r.startViewTransition||i.skipNextTransition)return i.skipNextTransition=!1,Promise.resolve();let s,o=new Promise(l=>{s=l}),a=r.startViewTransition(()=>(s(),SC(n))),{onViewTransitionCreated:c}=i;return c&&Pi(n,()=>c({transition:a,from:e,to:t})),o})}function SC(n){return new Promise(e=>{uh(e,{injector:n})})}var vf=(()=>{let e=class e{get hasRequestedNavigation(){return this.navigationId!==0}constructor(){this.currentNavigation=null,this.currentTransition=null,this.lastSuccessfulNavigation=null,this.events=new rn,this.transitionAbortSubject=new rn,this.configLoader=ie(mf),this.environmentInjector=ie(sn),this.urlSerializer=ie(ra),this.rootContexts=ie(sa),this.location=ie(fs),this.inputBindingEnabled=ie(vl,{optional:!0})!==null,this.titleStrategy=ie(Zy),this.options=ie(ca,{optional:!0})||{},this.paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly",this.urlHandlingStrategy=ie(gf),this.createViewTransition=ie(Jy,{optional:!0}),this.navigationId=0,this.afterPreactivation=()=>Ee(void 0),this.rootComponentType=null;let i=s=>this.events.next(new $h(s)),r=s=>this.events.next(new qh(s));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=i}complete(){this.transitions?.complete()}handleNavigationRequest(i){let r=++this.navigationId;this.transitions?.next(_t(fe(fe({},this.transitions.value),i),{id:r}))}setupNavigations(i,r,s){return this.transitions=new Ut({id:0,currentUrlTree:r,currentRawUrl:r,extractedUrl:this.urlHandlingStrategy.extract(r),urlAfterRedirects:this.urlHandlingStrategy.extract(r),rawUrl:r,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:$o,restoredState:null,currentSnapshot:s.snapshot,targetSnapshot:null,currentRouterState:s,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(hn(o=>o.id!==0),Qe(o=>_t(fe({},o),{extractedUrl:this.urlHandlingStrategy.extract(o.rawUrl)})),fn(o=>{this.currentTransition=o;let a=!1,c=!1;return Ee(o).pipe(Ot(l=>{this.currentNavigation={id:l.id,initialUrl:l.rawUrl,extractedUrl:l.extractedUrl,trigger:l.source,extras:l.extras,previousNavigation:this.lastSuccessfulNavigation?_t(fe({},this.lastSuccessfulNavigation),{previousNavigation:null}):null}}),fn(l=>{let u=!i.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=l.extras.onSameUrlNavigation??i.onSameUrlNavigation;if(!u&&d!=="reload"){let h="";return this.events.next(new Bi(l.id,this.urlSerializer.serialize(l.rawUrl),h,0)),l.resolve(null),dn}if(this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))return Ee(l).pipe(fn(h=>{let m=this.transitions?.getValue();return this.events.next(new xs(h.id,this.urlSerializer.serialize(h.extractedUrl),h.source,h.restoredState)),m!==this.transitions?.getValue()?dn:Promise.resolve(h)}),pC(this.environmentInjector,this.configLoader,this.rootComponentType,i.config,this.urlSerializer,this.paramsInheritanceStrategy),Ot(h=>{o.targetSnapshot=h.targetSnapshot,o.urlAfterRedirects=h.urlAfterRedirects,this.currentNavigation=_t(fe({},this.currentNavigation),{finalUrl:h.urlAfterRedirects});let m=new ll(h.id,this.urlSerializer.serialize(h.extractedUrl),this.urlSerializer.serialize(h.urlAfterRedirects),h.targetSnapshot);this.events.next(m)}));if(u&&this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)){let{id:h,extractedUrl:m,source:v,restoredState:_,extras:p}=l,f=new xs(h,this.urlSerializer.serialize(m),v,_);this.events.next(f);let S=By(this.rootComponentType).snapshot;return this.currentTransition=o=_t(fe({},l),{targetSnapshot:S,urlAfterRedirects:m,extras:_t(fe({},p),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=m,Ee(o)}else{let h="";return this.events.next(new Bi(l.id,this.urlSerializer.serialize(l.extractedUrl),h,1)),l.resolve(null),dn}}),Ot(l=>{let u=new Hh(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}),Qe(l=>(this.currentTransition=o=_t(fe({},l),{guards:PT(l.targetSnapshot,l.currentSnapshot,this.rootContexts)}),o)),HT(this.environmentInjector,l=>this.events.next(l)),Ot(l=>{if(o.guardsResult=l.guardsResult,_s(l.guardsResult))throw Gy(this.urlSerializer,l.guardsResult);let u=new Gh(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot,!!l.guardsResult);this.events.next(u)}),hn(l=>l.guardsResult?!0:(this.cancelNavigationTransition(l,"",3),!1)),Fh(l=>{if(l.guards.canActivateChecks.length)return Ee(l).pipe(Ot(u=>{let d=new Wh(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(d)}),fn(u=>{let d=!1;return Ee(u).pipe(mC(this.paramsInheritanceStrategy,this.environmentInjector),Ot({next:()=>d=!0,complete:()=>{d||this.cancelNavigationTransition(u,"",2)}}))}),Ot(u=>{let d=new jh(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(d)}))}),Fh(l=>{let u=d=>{let h=[];d.routeConfig?.loadComponent&&!d.routeConfig._loadedComponent&&h.push(this.configLoader.loadComponent(d.routeConfig).pipe(Ot(m=>{d.component=m}),Qe(()=>{})));for(let m of d.children)h.push(...u(m));return h};return ao(u(l.targetSnapshot.root)).pipe(Ei(null),ei(1))}),Fh(()=>this.afterPreactivation()),fn(()=>{let{currentSnapshot:l,targetSnapshot:u}=o,d=this.createViewTransition?.(this.environmentInjector,l.root,u.root);return d?xt(d).pipe(Qe(()=>o)):Ee(o)}),Qe(l=>{let u=ST(i.routeReuseStrategy,l.targetSnapshot,l.currentRouterState);return this.currentTransition=o=_t(fe({},l),{targetRouterState:u}),this.currentNavigation.targetRouterState=u,o}),Ot(()=>{this.events.next(new Ko)}),RT(this.rootContexts,i.routeReuseStrategy,l=>this.events.next(l),this.inputBindingEnabled),ei(1),Ot({next:l=>{a=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new li(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects))),this.titleStrategy?.updateTitle(l.targetRouterState.snapshot),l.resolve(!0)},complete:()=>{a=!0}}),Gu(this.transitionAbortSubject.pipe(Ot(l=>{throw l}))),co(()=>{!a&&!c&&this.cancelNavigationTransition(o,"",1),this.currentNavigation?.id===o.id&&(this.currentNavigation=null)}),Si(l=>{if(c=!0,jy(l))this.events.next(new ki(o.id,this.urlSerializer.serialize(o.extractedUrl),l.message,l.cancellationCode)),CT(l)?this.events.next(new Jo(l.url)):o.resolve(!1);else{this.events.next(new Zo(o.id,this.urlSerializer.serialize(o.extractedUrl),l,o.targetSnapshot??void 0));try{o.resolve(i.errorHandler(l))}catch(u){o.reject(u)}}return dn}))}))}cancelNavigationTransition(i,r,s){let o=new ki(i.id,this.urlSerializer.serialize(i.extractedUrl),r,s);this.events.next(o),i.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){return this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))).toString()!==this.currentTransition?.extractedUrl.toString()&&!this.currentTransition?.extras.skipLocationChange}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=ye({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function EC(n){return n!==$o}var TC=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=ye({token:e,factory:()=>ie(CC),providedIn:"root"});let n=e;return n})(),lf=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}},CC=(()=>{let e=class e extends lf{};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=Gd(e)))(s||e)}})(),e.\u0275prov=ye({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),e0=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=ye({token:e,factory:()=>ie(AC),providedIn:"root"});let n=e;return n})(),AC=(()=>{let e=class e extends e0{constructor(){super(...arguments),this.location=ie(fs),this.urlSerializer=ie(ra),this.options=ie(ca,{optional:!0})||{},this.canceledNavigationResolution=this.options.canceledNavigationResolution||"replace",this.urlHandlingStrategy=ie(gf),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.currentUrlTree=new Ui,this.rawUrlTree=this.currentUrlTree,this.currentPageId=0,this.lastSuccessfulId=-1,this.routerState=By(null),this.stateMemento=this.createStateMemento()}getCurrentUrlTree(){return this.currentUrlTree}getRawUrlTree(){return this.rawUrlTree}restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}getRouterState(){return this.routerState}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(i){return this.location.subscribe(r=>{r.type==="popstate"&&i(r.url,r.state)})}handleRouterEvent(i,r){if(i instanceof xs)this.stateMemento=this.createStateMemento();else if(i instanceof Bi)this.rawUrlTree=r.initialUrl;else if(i instanceof ll){if(this.urlUpdateStrategy==="eager"&&!r.extras.skipLocationChange){let s=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl);this.setBrowserUrl(s,r)}}else i instanceof Ko?(this.currentUrlTree=r.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl),this.routerState=r.targetRouterState,this.urlUpdateStrategy==="deferred"&&(r.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,r))):i instanceof ki&&(i.code===3||i.code===2)?this.restoreHistory(r):i instanceof Zo?this.restoreHistory(r,!0):i instanceof li&&(this.lastSuccessfulId=i.id,this.currentPageId=this.browserPageId)}setBrowserUrl(i,r){let s=this.urlSerializer.serialize(i);if(this.location.isCurrentPathEqualTo(s)||r.extras.replaceUrl){let o=this.browserPageId,a=fe(fe({},r.extras.state),this.generateNgRouterState(r.id,o));this.location.replaceState(s,"",a)}else{let o=fe(fe({},r.extras.state),this.generateNgRouterState(r.id,this.browserPageId+1));this.location.go(s,"",o)}}restoreHistory(i,r=!1){if(this.canceledNavigationResolution==="computed"){let s=this.browserPageId,o=this.currentPageId-s;o!==0?this.location.historyGo(o):this.currentUrlTree===i.finalUrl&&o===0&&(this.resetState(i),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(r&&this.resetState(i),this.resetUrlToCurrentUrlTree())}resetState(i){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,i.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(i,r){return this.canceledNavigationResolution==="computed"?{navigationId:i,\u0275routerPageId:r}:{navigationId:i}}};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=Gd(e)))(s||e)}})(),e.\u0275prov=ye({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),Wo=function(n){return n[n.COMPLETE=0]="COMPLETE",n[n.FAILED=1]="FAILED",n[n.REDIRECTING=2]="REDIRECTING",n}(Wo||{});function t0(n,e){n.events.pipe(hn(t=>t instanceof li||t instanceof ki||t instanceof Zo||t instanceof Bi),Qe(t=>t instanceof li||t instanceof Bi?Wo.COMPLETE:(t instanceof ki?t.code===0||t.code===1:!1)?Wo.REDIRECTING:Wo.FAILED),hn(t=>t!==Wo.REDIRECTING),ei(1)).subscribe(()=>{e()})}function DC(n){throw n}var IC={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},RC={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Vi=(()=>{let e=class e{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}constructor(){this.disposed=!1,this.isNgZoneEnabled=!1,this.console=ie($c),this.stateManager=ie(e0),this.options=ie(ca,{optional:!0})||{},this.pendingTasks=ie(Xc),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.navigationTransitions=ie(vf),this.urlSerializer=ie(ra),this.location=ie(fs),this.urlHandlingStrategy=ie(gf),this._events=new rn,this.errorHandler=this.options.errorHandler||DC,this.navigated=!1,this.routeReuseStrategy=ie(TC),this.onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore",this.config=ie(na,{optional:!0})?.flat()??[],this.componentInputBindingEnabled=!!ie(vl,{optional:!0}),this.eventsSubscription=new Ct,this.isNgZoneEnabled=ie(gt)instanceof gt&&gt.isInAngularZone(),this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:i=>{this.console.warn(i)}}),this.subscribeToNavigationEvents()}subscribeToNavigationEvents(){let i=this.navigationTransitions.events.subscribe(r=>{try{let s=this.navigationTransitions.currentTransition,o=this.navigationTransitions.currentNavigation;if(s!==null&&o!==null){if(this.stateManager.handleRouterEvent(r,o),r instanceof ki&&r.code!==0&&r.code!==1)this.navigated=!0;else if(r instanceof li)this.navigated=!0;else if(r instanceof Jo){let a=this.urlHandlingStrategy.merge(r.url,s.currentRawUrl),c={skipLocationChange:s.extras.skipLocationChange,replaceUrl:this.urlUpdateStrategy==="eager"||EC(s.source)};this.scheduleNavigation(a,$o,null,c,{resolve:s.resolve,reject:s.reject,promise:s.promise})}}NC(r)&&this._events.next(r)}catch(s){this.navigationTransitions.transitionAbortSubject.next(s)}});this.eventsSubscription.add(i)}resetRootComponentType(i){this.routerState.root.component=i,this.navigationTransitions.rootComponentType=i}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),$o,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription||(this.nonRouterCurrentEntryChangeSubscription=this.stateManager.registerNonRouterCurrentEntryChangeListener((i,r)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(i,"popstate",r)},0)}))}navigateToSyncWithBrowser(i,r,s){let o={replaceUrl:!0},a=s?.navigationId?s:null;if(s){let l=fe({},s);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(o.state=l)}let c=this.parseUrl(i);this.scheduleNavigation(c,r,a,o)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(i){this.config=i.map(ff),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(i,r={}){let{relativeTo:s,queryParams:o,fragment:a,queryParamsHandling:c,preserveFragment:l}=r,u=l?this.currentUrlTree.fragment:a,d=null;switch(c){case"merge":d=fe(fe({},this.currentUrlTree.queryParams),o);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=o||null}d!==null&&(d=this.removeEmptyProps(d));let h;try{let m=s?s.snapshot:this.routerState.snapshot.root;h=Ly(m)}catch{(typeof i[0]!="string"||!i[0].startsWith("/"))&&(i=[]),h=this.currentUrlTree.root}return Fy(h,i,d,u??null)}navigateByUrl(i,r={skipLocationChange:!1}){let s=_s(i)?i:this.parseUrl(i),o=this.urlHandlingStrategy.merge(s,this.rawUrlTree);return this.scheduleNavigation(o,$o,null,r)}navigate(i,r={skipLocationChange:!1}){return PC(i),this.navigateByUrl(this.createUrlTree(i,r),r)}serializeUrl(i){return this.urlSerializer.serialize(i)}parseUrl(i){try{return this.urlSerializer.parse(i)}catch{return this.urlSerializer.parse("/")}}isActive(i,r){let s;if(r===!0?s=fe({},IC):r===!1?s=fe({},RC):s=r,_s(i))return yy(this.currentUrlTree,i,s);let o=this.parseUrl(i);return yy(this.currentUrlTree,o,s)}removeEmptyProps(i){return Object.entries(i).reduce((r,[s,o])=>(o!=null&&(r[s]=o),r),{})}scheduleNavigation(i,r,s,o,a){if(this.disposed)return Promise.resolve(!1);let c,l,u;a?(c=a.resolve,l=a.reject,u=a.promise):u=new Promise((h,m)=>{c=h,l=m});let d=this.pendingTasks.add();return t0(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:s,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:i,extras:o,resolve:c,reject:l,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(h=>Promise.reject(h))}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=ye({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function PC(n){for(let e=0;e<n.length;e++)if(n[e]==null)throw new De(4008,!1)}function NC(n){return!(n instanceof Ko)&&!(n instanceof Jo)}var gl=class{};var OC=(()=>{let e=class e{constructor(i,r,s,o,a){this.router=i,this.injector=s,this.preloadingStrategy=o,this.loader=a}setUpPreloading(){this.subscription=this.router.events.pipe(hn(i=>i instanceof li),or(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(i,r){let s=[];for(let o of r){o.providers&&!o._injector&&(o._injector=jc(o.providers,i,`Route: ${o.path}`));let a=o._injector??i,c=o._loadedInjector??a;(o.loadChildren&&!o._loadedRoutes&&o.canLoad===void 0||o.loadComponent&&!o._loadedComponent)&&s.push(this.preloadConfig(a,o)),(o.children||o._loadedRoutes)&&s.push(this.processRoutes(c,o.children??o._loadedRoutes))}return xt(s).pipe(Yr())}preloadConfig(i,r){return this.preloadingStrategy.preload(r,()=>{let s;r.loadChildren&&r.canLoad===void 0?s=this.loader.loadChildren(i,r):s=Ee(null);let o=s.pipe(St(a=>a===null?Ee(void 0):(r._loadedRoutes=a.routes,r._loadedInjector=a.injector,this.processRoutes(a.injector??i,a.routes))));if(r.loadComponent&&!r._loadedComponent){let a=this.loader.loadComponent(r);return xt([o,a]).pipe(Yr())}else return o})}};e.\u0275fac=function(r){return new(r||e)(Ie(Vi),Ie(qc),Ie(sn),Ie(gl),Ie(mf))},e.\u0275prov=ye({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),n0=new Ge(""),LC=(()=>{let e=class e{constructor(i,r,s,o,a={}){this.urlSerializer=i,this.transitions=r,this.viewportScroller=s,this.zone=o,this.options=a,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},a.scrollPositionRestoration=a.scrollPositionRestoration||"disabled",a.anchorScrolling=a.anchorScrolling||"disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(i=>{i instanceof xs?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=i.navigationTrigger,this.restoredId=i.restoredState?i.restoredState.navigationId:0):i instanceof li?(this.lastId=i.id,this.scheduleScrollEvent(i,this.urlSerializer.parse(i.urlAfterRedirects).fragment)):i instanceof Bi&&i.code===0&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(i,this.urlSerializer.parse(i.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(i=>{i instanceof ul&&(i.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0]):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(i.position):i.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(i.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(i,r){this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.zone.run(()=>{this.transitions.events.next(new ul(i,this.lastSource==="popstate"?this.store[this.restoredId]:null,r))})},0)})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}};e.\u0275fac=function(r){Iv()},e.\u0275prov=ye({token:e,factory:e.\u0275fac});let n=e;return n})();function i0(n,...e){return Nc([{provide:na,multi:!0,useValue:n},[],{provide:xr,useFactory:r0,deps:[Vi]},{provide:Zc,multi:!0,useFactory:s0},e.map(t=>t.\u0275providers)])}function r0(n){return n.routerState.root}function la(n,e){return{\u0275kind:n,\u0275providers:e}}function s0(){let n=ie(oi);return e=>{let t=n.get(Uo);if(e!==t.components[0])return;let i=n.get(Vi),r=n.get(o0);n.get(yf)===1&&i.initialNavigation(),n.get(a0,null,He.Optional)?.setUpPreloading(),n.get(n0,null,He.Optional)?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var o0=new Ge("",{factory:()=>new rn}),yf=new Ge("",{providedIn:"root",factory:()=>1});function FC(){return la(2,[{provide:yf,useValue:0},{provide:Yc,multi:!0,deps:[oi],useFactory:e=>{let t=e.get(sy,Promise.resolve());return()=>t.then(()=>new Promise(i=>{let r=e.get(Vi),s=e.get(o0);t0(r,()=>{i(!0)}),e.get(vf).afterPreactivation=()=>(i(!0),s.closed?Ee(void 0):s),r.initialNavigation()}))}}])}function UC(){return la(3,[{provide:Yc,multi:!0,useFactory:()=>{let e=ie(Vi);return()=>{e.setUpLocationChangeListener()}}},{provide:yf,useValue:2}])}var a0=new Ge("");function kC(n){return la(0,[{provide:a0,useExisting:OC},{provide:gl,useExisting:n}])}function BC(){return la(8,[wy,{provide:vl,useExisting:wy}])}function VC(n){let e=[{provide:Jy,useValue:bC},{provide:Qy,useValue:fe({skipNextTransition:!!n?.skipInitialTransition},n)}];return la(9,e)}var Sy=new Ge("ROUTER_FORROOT_GUARD"),zC=[fs,{provide:ra,useClass:Xo},Vi,sa,{provide:xr,useFactory:r0,deps:[Vi]},mf,[]],c0=(()=>{let e=class e{constructor(i){}static forRoot(i,r){return{ngModule:e,providers:[zC,[],{provide:na,multi:!0,useValue:i},{provide:Sy,useFactory:jC,deps:[[Vi,new jd,new rv]]},{provide:ca,useValue:r||{}},r?.useHash?GC():WC(),HC(),r?.preloadingStrategy?kC(r.preloadingStrategy).\u0275providers:[],r?.initialNavigation?$C(r):[],r?.bindToComponentInputs?BC().\u0275providers:[],r?.enableViewTransitions?VC().\u0275providers:[],qC()]}}static forChild(i){return{ngModule:e,providers:[{provide:na,multi:!0,useValue:i}]}}};e.\u0275fac=function(r){return new(r||e)(Ie(Sy,8))},e.\u0275mod=To({type:e}),e.\u0275inj=So({});let n=e;return n})();function HC(){return{provide:n0,useFactory:()=>{let n=ie(ly),e=ie(gt),t=ie(ca),i=ie(vf),r=ie(ra);return t.scrollOffset&&n.setOffset(t.scrollOffset),new LC(r,i,n,e,t)}}}function GC(){return{provide:vr,useClass:ay}}function WC(){return{provide:vr,useClass:wh}}function jC(n){return"guarded"}function $C(n){return[n.initialNavigation==="disabled"?UC().\u0275providers:[],n.initialNavigation==="enabledBlocking"?FC().\u0275providers:[]]}var Ey=new Ge("");function qC(){return[{provide:Ey,useFactory:s0},{provide:Zc,multi:!0,useExisting:Ey}]}var Rp="163",Ur={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},kr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},YC=0,l0=1,ZC=2;var O_=1,KC=2,mi=3,Qi=0,Jt=1,gi=2,Zi=0,Ws=1,u0=2,d0=3,h0=4,JC=5,Ar=100,QC=101,eA=102,tA=103,nA=104,iA=200,rA=201,sA=202,oA=203,Kf=204,Jf=205,aA=206,cA=207,lA=208,uA=209,dA=210,hA=211,fA=212,pA=213,mA=214,gA=0,vA=1,yA=2,Hl=3,_A=4,xA=5,MA=6,wA=7,L_=0,bA=1,SA=2,Ki=0,EA=1,TA=2,CA=3,AA=4,DA=5,IA=6,RA=7;var f0=300,Xs=301,Ys=302,Qf=303,ep=304,fu=306,tp=1e3,Ir=1001,np=1002,_n=1003,PA=1004;var _l=1005;var Nn=1006,_f=1007;var Rr=1008;var Ji=1009,NA=1010,OA=1011,F_=1012,U_=1013,Zs=1014,Yi=1015,Gl=1016,k_=1017,B_=1018,Aa=1020,LA=35902,FA=1021,UA=1022,Yn=1023,kA=1024,BA=1025,js=1026,ya=1027,VA=1028,V_=1029,zA=1030,z_=1031,H_=1033,xf=33776,Mf=33777,wf=33778,bf=33779,p0=35840,m0=35841,g0=35842,v0=35843,G_=36196,y0=37492,_0=37496,x0=37808,M0=37809,w0=37810,b0=37811,S0=37812,E0=37813,T0=37814,C0=37815,A0=37816,D0=37817,I0=37818,R0=37819,P0=37820,N0=37821,Sf=36492,O0=36494,L0=36495,HA=36283,F0=36284,U0=36285,k0=36286;var Wl=2300,jl=2301,Ef=2302,B0=2400,V0=2401,z0=2402;var GA=3200,WA=3201,W_=0,jA=1,Xi="",qn="srgb",er="srgb-linear",Pp="display-p3",pu="display-p3-linear",$l="linear",ht="srgb",ql="rec709",Xl="p3";var bs=7680;var H0=519,$A=512,qA=513,XA=514,j_=515,YA=516,ZA=517,KA=518,JA=519,G0=35044;var W0="300 es",vi=2e3,Yl=2001,Zn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],j0=1234567,ma=Math.PI/180,_a=180/Math.PI;function to(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]).toLowerCase()}function Ht(n,e,t){return Math.max(e,Math.min(t,n))}function Np(n,e){return(n%e+e)%e}function QA(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function eD(n,e,t){return n!==e?(t-n)/(e-n):0}function ga(n,e,t){return(1-t)*n+t*e}function tD(n,e,t,i){return ga(n,e,1-Math.exp(-t*i))}function nD(n,e=1){return e-Math.abs(Np(n,e*2)-e)}function iD(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function rD(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function sD(n,e){return n+Math.floor(Math.random()*(e-n+1))}function oD(n,e){return n+Math.random()*(e-n)}function aD(n){return n*(.5-Math.random())}function cD(n){n!==void 0&&(j0=n);let e=j0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lD(n){return n*ma}function uD(n){return n*_a}function dD(n){return(n&n-1)===0&&n!==0}function hD(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function fD(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function pD(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),h=o((e-i)/2),m=s((i-e)/2),v=o((i-e)/2);switch(r){case"XYX":n.set(a*u,c*d,c*h,a*l);break;case"YZY":n.set(c*h,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*h,a*u,a*l);break;case"XZX":n.set(a*u,c*v,c*m,a*l);break;case"YXY":n.set(c*m,a*u,c*v,a*l);break;case"ZYZ":n.set(c*v,c*m,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Vs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function jt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var $_={DEG2RAD:ma,RAD2DEG:_a,generateUUID:to,clamp:Ht,euclideanModulo:Np,mapLinear:QA,inverseLerp:eD,lerp:ga,damp:tD,pingpong:nD,smoothstep:iD,smootherstep:rD,randInt:sD,randFloat:oD,randFloatSpread:aD,seededRandom:cD,degToRad:lD,radToDeg:uD,isPowerOfTwo:dD,ceilPowerOfTwo:hD,floorPowerOfTwo:fD,setQuaternionFromProperEuler:pD,normalize:jt,denormalize:Vs},_e=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ve=class n{constructor(e,t,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],m=i[5],v=i[8],_=r[0],p=r[3],f=r[6],S=r[1],M=r[4],E=r[7],I=r[2],A=r[5],T=r[8];return s[0]=o*_+a*S+c*I,s[3]=o*p+a*M+c*A,s[6]=o*f+a*E+c*T,s[1]=l*_+u*S+d*I,s[4]=l*p+u*M+d*A,s[7]=l*f+u*E+d*T,s[2]=h*_+m*S+v*I,s[5]=h*p+m*M+v*A,s[8]=h*f+m*E+v*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,h=a*c-u*s,m=l*s-o*c,v=t*d+i*h+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/v;return e[0]=d*_,e[1]=(r*l-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=m*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Tf.makeScale(e,t)),this}rotate(e){return this.premultiply(Tf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Tf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Tf=new Ve;function q_(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Zl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function mD(){let n=Zl("canvas");return n.style.display="block",n}var $0={};function gD(n){n in $0||($0[n]=!0,console.warn(n))}var q0=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),X0=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),xl={[er]:{transfer:$l,primaries:ql,toReference:n=>n,fromReference:n=>n},[qn]:{transfer:ht,primaries:ql,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[pu]:{transfer:$l,primaries:Xl,toReference:n=>n.applyMatrix3(X0),fromReference:n=>n.applyMatrix3(q0)},[Pp]:{transfer:ht,primaries:Xl,toReference:n=>n.convertSRGBToLinear().applyMatrix3(X0),fromReference:n=>n.applyMatrix3(q0).convertLinearToSRGB()}},vD=new Set([er,pu]),ut={enabled:!0,_workingColorSpace:er,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!vD.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=xl[e].toReference,r=xl[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return xl[n].primaries},getTransfer:function(n){return n===Xi?$l:xl[n].transfer}};function $s(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Cf(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ss,ip=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ss===void 0&&(Ss=Zl("canvas")),Ss.width=e.width,Ss.height=e.height;let i=Ss.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ss}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Zl("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=$s(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor($s(t[i]/255)*255):t[i]=$s(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},yD=0,Kl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yD++}),this.uuid=to(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Af(r[o].image)):s.push(Af(r[o]))}else s=Af(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Af(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ip.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var _D=0,Br=(()=>{class n extends Zn{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=Ir,s=Ir,o=Nn,a=Rr,c=Yn,l=Ji,u=n.DEFAULT_ANISOTROPY,d=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_D++}),this.uuid=to(),this.name="",this.source=new Kl(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==f0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case tp:t.x=t.x-Math.floor(t.x);break;case Ir:t.x=t.x<0?0:1;break;case np:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case tp:t.y=t.y-Math.floor(t.y);break;case Ir:t.y=t.y<0?0:1;break;case np:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=f0,n.DEFAULT_ANISOTROPY=1,n})(),Ft=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],m=c[5],v=c[9],_=c[2],p=c[6],f=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(v+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,E=(m+1)/2,I=(f+1)/2,A=(u+h)/4,T=(d+_)/4,R=(v+p)/4;return M>E&&M>I?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=A/i,s=T/i):E>I?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=A/r,s=R/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=T/s,r=R/s),this.set(i,r,s,t),this}let S=Math.sqrt((p-v)*(p-v)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(p-v)/S,this.y=(d-_)/S,this.z=(h-u)/S,this.w=Math.acos((l+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},rp=class extends Zn{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t);let r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);let s=new Br(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Kl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},yi=class extends rp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Jl=class extends Br{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=_n,this.minFilter=_n,this.wrapR=Ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var sp=class extends Br{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=_n,this.minFilter=_n,this.wrapR=Ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var On=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],h=s[o+0],m=s[o+1],v=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=v,e[t+3]=_;return}if(d!==_||c!==h||l!==m||u!==v){let p=1-a,f=c*h+l*m+u*v+d*_,S=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){let I=Math.sqrt(M),A=Math.atan2(I,f*S);p=Math.sin(p*A)/I,a=Math.sin(a*A)/I}let E=a*S;if(c=c*p+h*E,l=l*p+m*E,u=u*p+v*E,d=d*p+_*E,p===1-a){let I=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=I,l*=I,u*=I,d*=I}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],h=s[o+1],m=s[o+2],v=s[o+3];return e[t]=a*v+u*d+c*m-l*h,e[t+1]=c*v+u*h+l*d-a*m,e[t+2]=l*v+u*m+a*h-c*d,e[t+3]=u*v-a*d-c*h-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),h=c(i/2),m=c(r/2),v=c(s/2);switch(o){case"XYZ":this._x=h*u*d+l*m*v,this._y=l*m*d-h*u*v,this._z=l*u*v+h*m*d,this._w=l*u*d-h*m*v;break;case"YXZ":this._x=h*u*d+l*m*v,this._y=l*m*d-h*u*v,this._z=l*u*v-h*m*d,this._w=l*u*d+h*m*v;break;case"ZXY":this._x=h*u*d-l*m*v,this._y=l*m*d+h*u*v,this._z=l*u*v+h*m*d,this._w=l*u*d-h*m*v;break;case"ZYX":this._x=h*u*d-l*m*v,this._y=l*m*d+h*u*v,this._z=l*u*v-h*m*d,this._w=l*u*d+h*m*v;break;case"YZX":this._x=h*u*d+l*m*v,this._y=l*m*d+h*u*v,this._z=l*u*v-h*m*d,this._w=l*u*d-h*m*v;break;case"XZY":this._x=h*u*d-l*m*v,this._y=l*m*d-h*u*v,this._z=l*u*v+h*m*d,this._w=l*u*d+h*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){let m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(i>a&&i>d){let m=2*Math.sqrt(1+i-a-d);this._w=(u-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>d){let m=2*Math.sqrt(1+a-i-d);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+u)/m}else{let m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Y0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Y0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Df.copy(this).projectOnVector(e),this.sub(Df)}reflect(e){return this.sub(Df.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Df=new P,Y0=new On,Pr=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Dn):Dn.fromBufferAttribute(s,o),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ml.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ml.copy(i.boundingBox)),Ml.applyMatrix4(e.matrixWorld),this.union(Ml)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ua),wl.subVectors(this.max,ua),Es.subVectors(e.a,ua),Ts.subVectors(e.b,ua),Cs.subVectors(e.c,ua),Hi.subVectors(Ts,Es),Gi.subVectors(Cs,Ts),Mr.subVectors(Es,Cs);let t=[0,-Hi.z,Hi.y,0,-Gi.z,Gi.y,0,-Mr.z,Mr.y,Hi.z,0,-Hi.x,Gi.z,0,-Gi.x,Mr.z,0,-Mr.x,-Hi.y,Hi.x,0,-Gi.y,Gi.x,0,-Mr.y,Mr.x,0];return!If(t,Es,Ts,Cs,wl)||(t=[1,0,0,0,1,0,0,0,1],!If(t,Es,Ts,Cs,wl))?!1:(bl.crossVectors(Hi,Gi),t=[bl.x,bl.y,bl.z],If(t,Es,Ts,Cs,wl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ui=[new P,new P,new P,new P,new P,new P,new P,new P],Dn=new P,Ml=new Pr,Es=new P,Ts=new P,Cs=new P,Hi=new P,Gi=new P,Mr=new P,ua=new P,wl=new P,bl=new P,wr=new P;function If(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){wr.fromArray(n,s);let a=r.x*Math.abs(wr.x)+r.y*Math.abs(wr.y)+r.z*Math.abs(wr.z),c=e.dot(wr),l=t.dot(wr),u=i.dot(wr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var xD=new Pr,da=new P,Rf=new P,xa=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):xD.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;da.subVectors(e,this.center);let t=da.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(da,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(da.copy(e.center).add(Rf)),this.expandByPoint(da.copy(e.center).sub(Rf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},di=new P,Pf=new P,Sl=new P,Wi=new P,Nf=new P,El=new P,Of=new P,Ma=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,t),di.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Pf.copy(e).add(t).multiplyScalar(.5),Sl.copy(t).sub(e).normalize(),Wi.copy(this.origin).sub(Pf);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Sl),a=Wi.dot(this.direction),c=-Wi.dot(Sl),l=Wi.lengthSq(),u=Math.abs(1-o*o),d,h,m,v;if(u>0)if(d=o*c-a,h=o*a-c,v=s*u,d>=0)if(h>=-v)if(h<=v){let _=1/u;d*=_,h*=_,m=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*c)+l;else h<=-v?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-c),s),m=-d*d+h*(h+2*c)+l):h<=v?(d=0,h=Math.min(Math.max(-s,-c),s),m=h*(h+2*c)+l):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-c),s),m=-d*d+h*(h+2*c)+l);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Pf).addScaledVector(Sl,h),m}intersectSphere(e,t){di.subVectors(e.center,this.origin);let i=di.dot(this.direction),r=di.dot(di)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,t,i,r,s){Nf.subVectors(t,e),El.subVectors(i,e),Of.crossVectors(Nf,El);let o=this.direction.dot(Of),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wi.subVectors(this.origin,e);let c=a*this.direction.dot(El.crossVectors(Wi,El));if(c<0)return null;let l=a*this.direction.dot(Nf.cross(Wi));if(l<0||c+l>o)return null;let u=-a*Wi.dot(Of);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Tt=class n{constructor(e,t,i,r,s,o,a,c,l,u,d,h,m,v,_,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,h,m,v,_,p)}set(e,t,i,r,s,o,a,c,l,u,d,h,m,v,_,p){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=d,f[14]=h,f[3]=m,f[7]=v,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/As.setFromMatrixColumn(e,0).length(),s=1/As.setFromMatrixColumn(e,1).length(),o=1/As.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let h=o*u,m=o*d,v=a*u,_=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=m+v*l,t[5]=h-_*l,t[9]=-a*c,t[2]=_-h*l,t[6]=v+m*l,t[10]=o*c}else if(e.order==="YXZ"){let h=c*u,m=c*d,v=l*u,_=l*d;t[0]=h+_*a,t[4]=v*a-m,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=m*a-v,t[6]=_+h*a,t[10]=o*c}else if(e.order==="ZXY"){let h=c*u,m=c*d,v=l*u,_=l*d;t[0]=h-_*a,t[4]=-o*d,t[8]=v+m*a,t[1]=m+v*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let h=o*u,m=o*d,v=a*u,_=a*d;t[0]=c*u,t[4]=v*l-m,t[8]=h*l+_,t[1]=c*d,t[5]=_*l+h,t[9]=m*l-v,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let h=o*c,m=o*l,v=a*c,_=a*l;t[0]=c*u,t[4]=_-h*d,t[8]=v*d+m,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*d+v,t[10]=h-_*d}else if(e.order==="XZY"){let h=o*c,m=o*l,v=a*c,_=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+_,t[5]=o*u,t[9]=m*d-v,t[2]=v*d-m,t[6]=a*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(MD,e,wD)}lookAt(e,t,i){let r=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),ji.crossVectors(i,an),ji.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),ji.crossVectors(i,an)),ji.normalize(),Tl.crossVectors(an,ji),r[0]=ji.x,r[4]=Tl.x,r[8]=an.x,r[1]=ji.y,r[5]=Tl.y,r[9]=an.y,r[2]=ji.z,r[6]=Tl.z,r[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],m=i[13],v=i[2],_=i[6],p=i[10],f=i[14],S=i[3],M=i[7],E=i[11],I=i[15],A=r[0],T=r[4],R=r[8],w=r[12],y=r[1],N=r[5],F=r[9],D=r[13],G=r[2],W=r[6],Z=r[10],J=r[14],H=r[3],ee=r[7],Q=r[11],pe=r[15];return s[0]=o*A+a*y+c*G+l*H,s[4]=o*T+a*N+c*W+l*ee,s[8]=o*R+a*F+c*Z+l*Q,s[12]=o*w+a*D+c*J+l*pe,s[1]=u*A+d*y+h*G+m*H,s[5]=u*T+d*N+h*W+m*ee,s[9]=u*R+d*F+h*Z+m*Q,s[13]=u*w+d*D+h*J+m*pe,s[2]=v*A+_*y+p*G+f*H,s[6]=v*T+_*N+p*W+f*ee,s[10]=v*R+_*F+p*Z+f*Q,s[14]=v*w+_*D+p*J+f*pe,s[3]=S*A+M*y+E*G+I*H,s[7]=S*T+M*N+E*W+I*ee,s[11]=S*R+M*F+E*Z+I*Q,s[15]=S*w+M*D+E*J+I*pe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],m=e[14],v=e[3],_=e[7],p=e[11],f=e[15];return v*(+s*c*d-r*l*d-s*a*h+i*l*h+r*a*m-i*c*m)+_*(+t*c*m-t*l*h+s*o*h-r*o*m+r*l*u-s*c*u)+p*(+t*l*d-t*a*m-s*o*d+i*o*m+s*a*u-i*l*u)+f*(-r*a*u-t*c*d+t*a*h+r*o*d-i*o*h+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],m=e[11],v=e[12],_=e[13],p=e[14],f=e[15],S=d*p*l-_*h*l+_*c*m-a*p*m-d*c*f+a*h*f,M=v*h*l-u*p*l-v*c*m+o*p*m+u*c*f-o*h*f,E=u*_*l-v*d*l+v*a*m-o*_*m-u*a*f+o*d*f,I=v*d*c-u*_*c-v*a*h+o*_*h+u*a*p-o*d*p,A=t*S+i*M+r*E+s*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/A;return e[0]=S*T,e[1]=(_*h*s-d*p*s-_*r*m+i*p*m+d*r*f-i*h*f)*T,e[2]=(a*p*s-_*c*s+_*r*l-i*p*l-a*r*f+i*c*f)*T,e[3]=(d*c*s-a*h*s-d*r*l+i*h*l+a*r*m-i*c*m)*T,e[4]=M*T,e[5]=(u*p*s-v*h*s+v*r*m-t*p*m-u*r*f+t*h*f)*T,e[6]=(v*c*s-o*p*s-v*r*l+t*p*l+o*r*f-t*c*f)*T,e[7]=(o*h*s-u*c*s+u*r*l-t*h*l-o*r*m+t*c*m)*T,e[8]=E*T,e[9]=(v*d*s-u*_*s-v*i*m+t*_*m+u*i*f-t*d*f)*T,e[10]=(o*_*s-v*a*s+v*i*l-t*_*l-o*i*f+t*a*f)*T,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*m-t*a*m)*T,e[12]=I*T,e[13]=(u*_*r-v*d*r+v*i*h-t*_*h-u*i*p+t*d*p)*T,e[14]=(v*a*r-o*_*r-v*i*c+t*_*c+o*i*p-t*a*p)*T,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*h+t*a*h)*T,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,h=s*l,m=s*u,v=s*d,_=o*u,p=o*d,f=a*d,S=c*l,M=c*u,E=c*d,I=i.x,A=i.y,T=i.z;return r[0]=(1-(_+f))*I,r[1]=(m+E)*I,r[2]=(v-M)*I,r[3]=0,r[4]=(m-E)*A,r[5]=(1-(h+f))*A,r[6]=(p+S)*A,r[7]=0,r[8]=(v+M)*T,r[9]=(p-S)*T,r[10]=(1-(h+_))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=As.set(r[0],r[1],r[2]).length(),o=As.set(r[4],r[5],r[6]).length(),a=As.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],In.copy(this);let l=1/s,u=1/o,d=1/a;return In.elements[0]*=l,In.elements[1]*=l,In.elements[2]*=l,In.elements[4]*=u,In.elements[5]*=u,In.elements[6]*=u,In.elements[8]*=d,In.elements[9]*=d,In.elements[10]*=d,t.setFromRotationMatrix(In),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=vi){let c=this.elements,l=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r),m,v;if(a===vi)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Yl)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=vi){let c=this.elements,l=1/(t-e),u=1/(i-r),d=1/(o-s),h=(t+e)*l,m=(i+r)*u,v,_;if(a===vi)v=(o+s)*d,_=-2*d;else if(a===Yl)v=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},As=new P,In=new Tt,MD=new P(0,0,0),wD=new P(1,1,1),ji=new P,Tl=new P,an=new P,Z0=new Tt,K0=new On,Nr=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],d=s[9],h=s[2],m=s[6],v=s[10];switch(i){case"XYZ":this._y=Math.asin(Ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,v),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,v),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-h,v),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Ht(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(m,v),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(c,v));break;case"XZY":this._z=Math.asin(-Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Z0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Z0,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return K0.setFromEuler(this),this.setFromQuaternion(K0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),Ql=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},bD=0,J0=new P,Ds=new On,hi=new Tt,Cl=new P,ha=new P,SD=new P,ED=new On,Q0=new P(1,0,0),e_=new P(0,1,0),t_=new P(0,0,1),n_={type:"added"},TD={type:"removed"},Is={type:"childadded",child:null},Lf={type:"childremoved",child:null},_i=(()=>{class n extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bD++}),this.uuid=to(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new P,i=new Nr,r=new On,s=new P(1,1,1);function o(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Tt},normalMatrix:{value:new Ve}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ql,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ds.setFromAxisAngle(t,i),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(t,i){return Ds.setFromAxisAngle(t,i),this.quaternion.premultiply(Ds),this}rotateX(t){return this.rotateOnAxis(Q0,t)}rotateY(t){return this.rotateOnAxis(e_,t)}rotateZ(t){return this.rotateOnAxis(t_,t)}translateOnAxis(t,i){return J0.copy(t).applyQuaternion(this.quaternion),this.position.add(J0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Q0,t)}translateY(t){return this.translateOnAxis(e_,t)}translateZ(t){return this.translateOnAxis(t_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Cl.copy(t):Cl.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(ha,Cl,this.up):hi.lookAt(Cl,ha,this.up),this.quaternion.setFromRotationMatrix(hi),s&&(hi.extractRotation(s.matrixWorld),Ds.setFromRotationMatrix(hi),this.quaternion.premultiply(Ds.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(n_),Is.child=t,this.dispatchEvent(Is),Is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(TD),Lf.child=t,this.dispatchEvent(Lf),Lf.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hi.multiply(t.parent.matrixWorld)),t.applyMatrix4(hi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(n_),Is.child=t,this.dispatchEvent(Is),Is.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,t,SD),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,ED,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++){let o=i[r];(o.matrixWorldAutoUpdate===!0||t===!0)&&o.updateMatrixWorld(t)}}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++){let c=s[o];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let h=l[u];o(t.shapes,h)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),h=a(t.shapes),m=a(t.skeletons),v=a(t.animations),_=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),h.length>0&&(r.shapes=h),m.length>0&&(r.skeletons=m),v.length>0&&(r.animations=v),_.length>0&&(r.nodes=_)}return r.object=s,r;function a(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new P(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),Rn=new P,fi=new P,Ff=new P,pi=new P,Rs=new P,Ps=new P,i_=new P,Uf=new P,kf=new P,Bf=new P,zs=class n{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Rn.subVectors(e,t),r.cross(Rn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Rn.subVectors(r,t),fi.subVectors(i,t),Ff.subVectors(e,t);let o=Rn.dot(Rn),a=Rn.dot(fi),c=Rn.dot(Ff),l=fi.dot(fi),u=fi.dot(Ff),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;let h=1/d,m=(l*c-a*u)*h,v=(o*u-a*c)*h;return s.set(1-m-v,v,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,pi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,pi.x),c.addScaledVector(o,pi.y),c.addScaledVector(a,pi.z),c)}static isFrontFacing(e,t,i,r){return Rn.subVectors(i,t),fi.subVectors(e,t),Rn.cross(fi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Rn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;Rs.subVectors(r,i),Ps.subVectors(s,i),Uf.subVectors(e,i);let c=Rs.dot(Uf),l=Ps.dot(Uf);if(c<=0&&l<=0)return t.copy(i);kf.subVectors(e,r);let u=Rs.dot(kf),d=Ps.dot(kf);if(u>=0&&d<=u)return t.copy(r);let h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Rs,o);Bf.subVectors(e,s);let m=Rs.dot(Bf),v=Ps.dot(Bf);if(v>=0&&m<=v)return t.copy(s);let _=m*l-c*v;if(_<=0&&l>=0&&v<=0)return a=l/(l-v),t.copy(i).addScaledVector(Ps,a);let p=u*v-m*d;if(p<=0&&d-u>=0&&m-v>=0)return i_.subVectors(s,r),a=(d-u)/(d-u+(m-v)),t.copy(r).addScaledVector(i_,a);let f=1/(p+_+h);return o=_*f,a=h*f,t.copy(i).addScaledVector(Rs,o).addScaledVector(Ps,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},X_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},Al={h:0,s:0,l:0};function Vf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var $e=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ut.workingColorSpace){return this.r=e,this.g=t,this.b=i,ut.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ut.workingColorSpace){if(e=Np(e,1),t=Ht(t,0,1),i=Ht(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Vf(o,s,e+1/3),this.g=Vf(o,s,e),this.b=Vf(o,s,e-1/3)}return ut.toWorkingColorSpace(this,r),this}setStyle(e,t=qn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qn){let i=X_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}copyLinearToSRGB(e){return this.r=Cf(e.r),this.g=Cf(e.g),this.b=Cf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qn){return ut.fromWorkingColorSpace(zt.copy(this),e),Math.round(Ht(zt.r*255,0,255))*65536+Math.round(Ht(zt.g*255,0,255))*256+Math.round(Ht(zt.b*255,0,255))}getHexString(e=qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.fromWorkingColorSpace(zt.copy(this),t);let i=zt.r,r=zt.g,s=zt.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ut.workingColorSpace){return ut.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=qn){ut.fromWorkingColorSpace(zt.copy(this),e);let t=zt.r,i=zt.g,r=zt.b;return e!==qn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL($i),this.setHSL($i.h+e,$i.s+t,$i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($i),e.getHSL(Al);let i=ga($i.h,Al.h,t),r=ga($i.s,Al.s,t),s=ga($i.l,Al.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zt=new $e;$e.NAMES=X_;var CD=0,Or=class extends Zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:CD++}),this.uuid=to(),this.name="",this.type="Material",this.blending=Ws,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kf,this.blendDst=Jf,this.blendEquation=Ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Hl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=H0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(i.blending=this.blending),this.side!==Qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Kf&&(i.blendSrc=this.blendSrc),this.blendDst!==Jf&&(i.blendDst=this.blendDst),this.blendEquation!==Ar&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Hl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==H0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ks=class extends Or{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nr,this.combine=L_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Et=new P,Dl=new _e,xn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=G0,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return gD("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Dl.fromBufferAttribute(this,t),Dl.applyMatrix3(e),this.setXY(t,Dl.x,Dl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Vs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=jt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vs(t,this.array)),t}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vs(t,this.array)),t}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vs(t,this.array)),t}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array),r=jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array),r=jt(r,this.array),s=jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==G0&&(e.usage=this.usage),e}};var eu=class extends xn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var tu=class extends xn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Yt=class extends xn{constructor(e,t,i){super(new Float32Array(e),t,i)}},AD=0,yn=new Tt,zf=new _i,Ns=new P,cn=new Pr,fa=new Pr,Lt=new P,xi=class n extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:AD++}),this.uuid=to(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(q_(e)?tu:eu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,i){return yn.makeTranslation(e,t,i),this.applyMatrix4(yn),this}scale(e,t,i){return yn.makeScale(e,t,i),this.applyMatrix4(yn),this}lookAt(e){return zf.lookAt(e),zf.updateMatrix(),this.applyMatrix4(zf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(e){let t=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Yt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xa);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];fa.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(cn.min,fa.min),cn.expandByPoint(Lt),Lt.addVectors(cn.max,fa.max),cn.expandByPoint(Lt)):(cn.expandByPoint(fa.min),cn.expandByPoint(fa.max))}cn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Lt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Lt.fromBufferAttribute(a,l),c&&(Ns.fromBufferAttribute(e,l),Lt.add(Ns)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<i.count;R++)a[R]=new P,c[R]=new P;let l=new P,u=new P,d=new P,h=new _e,m=new _e,v=new _e,_=new P,p=new P;function f(R,w,y){l.fromBufferAttribute(i,R),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,y),h.fromBufferAttribute(s,R),m.fromBufferAttribute(s,w),v.fromBufferAttribute(s,y),u.sub(l),d.sub(l),m.sub(h),v.sub(h);let N=1/(m.x*v.y-v.x*m.y);isFinite(N)&&(_.copy(u).multiplyScalar(v.y).addScaledVector(d,-m.y).multiplyScalar(N),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(N),a[R].add(_),a[w].add(_),a[y].add(_),c[R].add(p),c[w].add(p),c[y].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let R=0,w=S.length;R<w;++R){let y=S[R],N=y.start,F=y.count;for(let D=N,G=N+F;D<G;D+=3)f(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let M=new P,E=new P,I=new P,A=new P;function T(R){I.fromBufferAttribute(r,R),A.copy(I);let w=a[R];M.copy(w),M.sub(I.multiplyScalar(I.dot(w))).normalize(),E.crossVectors(A,w);let N=E.dot(c[R])<0?-1:1;o.setXYZW(R,M.x,M.y,M.z,N)}for(let R=0,w=S.length;R<w;++R){let y=S[R],N=y.start,F=y.count;for(let D=N,G=N+F;D<G;D+=3)T(e.getX(D+0)),T(e.getX(D+1)),T(e.getX(D+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);let r=new P,s=new P,o=new P,a=new P,c=new P,l=new P,u=new P,d=new P;if(e)for(let h=0,m=e.count;h<m;h+=3){let v=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,v),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,p),a.add(u),c.add(u),l.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u),m=0,v=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?m=c[_]*a.data.stride+a.offset:m=c[_]*u;for(let f=0;f<u;f++)h[v++]=l[m++]}return new xn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){let h=l[u],m=e(h,i);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){let m=l[d];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],d=s[l];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},r_=new Tt,br=new Ma,Il=new xa,s_=new P,Os=new P,Ls=new P,Fs=new P,Hf=new P,Rl=new P,Pl=new _e,Nl=new _e,Ol=new _e,o_=new P,a_=new P,c_=new P,Ll=new P,Fl=new P,Xt=class extends _i{constructor(e=new xi,t=new Ks){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Rl.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],d=s[c];u!==0&&(Hf.fromBufferAttribute(d,e),o?Rl.addScaledVector(Hf,u):Rl.addScaledVector(Hf.sub(t),u))}t.add(Rl)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Il.copy(i.boundingSphere),Il.applyMatrix4(s),br.copy(e.ray).recast(e.near),!(Il.containsPoint(br.origin)===!1&&(br.intersectSphere(Il,s_)===null||br.origin.distanceToSquared(s_)>(e.far-e.near)**2))&&(r_.copy(s).invert(),br.copy(e.ray).applyMatrix4(r_),!(i.boundingBox!==null&&br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,br)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,_=h.length;v<_;v++){let p=h[v],f=o[p.materialIndex],S=Math.max(p.start,m.start),M=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let E=S,I=M;E<I;E+=3){let A=a.getX(E),T=a.getX(E+1),R=a.getX(E+2);r=Ul(this,f,e,i,l,u,d,A,T,R),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{let v=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=v,f=_;p<f;p+=3){let S=a.getX(p),M=a.getX(p+1),E=a.getX(p+2);r=Ul(this,o,e,i,l,u,d,S,M,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let v=0,_=h.length;v<_;v++){let p=h[v],f=o[p.materialIndex],S=Math.max(p.start,m.start),M=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let E=S,I=M;E<I;E+=3){let A=E,T=E+1,R=E+2;r=Ul(this,f,e,i,l,u,d,A,T,R),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{let v=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let p=v,f=_;p<f;p+=3){let S=p,M=p+1,E=p+2;r=Ul(this,o,e,i,l,u,d,S,M,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}};function DD(n,e,t,i,r,s,o,a){let c;if(e.side===Jt?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Qi,a),c===null)return null;Fl.copy(a),Fl.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Fl);return l<t.near||l>t.far?null:{distance:l,point:Fl.clone(),object:n}}function Ul(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,Os),n.getVertexPosition(c,Ls),n.getVertexPosition(l,Fs);let u=DD(n,e,t,i,Os,Ls,Fs,Ll);if(u){r&&(Pl.fromBufferAttribute(r,a),Nl.fromBufferAttribute(r,c),Ol.fromBufferAttribute(r,l),u.uv=zs.getInterpolation(Ll,Os,Ls,Fs,Pl,Nl,Ol,new _e)),s&&(Pl.fromBufferAttribute(s,a),Nl.fromBufferAttribute(s,c),Ol.fromBufferAttribute(s,l),u.uv1=zs.getInterpolation(Ll,Os,Ls,Fs,Pl,Nl,Ol,new _e)),o&&(o_.fromBufferAttribute(o,a),a_.fromBufferAttribute(o,c),c_.fromBufferAttribute(o,l),u.normal=zs.getInterpolation(Ll,Os,Ls,Fs,o_,a_,c_,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new P,materialIndex:0};zs.getNormal(Os,Ls,Fs,d.normal),u.face=d}return u}var wa=class n extends xi{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],d=[],h=0,m=0;v("z","y","x",-1,-1,i,t,e,o,s,0),v("z","y","x",1,-1,i,t,-e,o,s,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(u,3)),this.setAttribute("uv",new Yt(d,2));function v(_,p,f,S,M,E,I,A,T,R,w){let y=E/T,N=I/R,F=E/2,D=I/2,G=A/2,W=T+1,Z=R+1,J=0,H=0,ee=new P;for(let Q=0;Q<Z;Q++){let pe=Q*N-D;for(let We=0;We<W;We++){let at=We*y-F;ee[_]=at*S,ee[p]=pe*M,ee[f]=G,l.push(ee.x,ee.y,ee.z),ee[_]=0,ee[p]=0,ee[f]=A>0?1:-1,u.push(ee.x,ee.y,ee.z),d.push(We/T),d.push(1-Q/R),J+=1}}for(let Q=0;Q<R;Q++)for(let pe=0;pe<T;pe++){let We=h+pe+W*Q,at=h+pe+W*(Q+1),j=h+(pe+1)+W*(Q+1),te=h+(pe+1)+W*Q;c.push(We,at,te),c.push(at,j,te),H+=6}a.addGroup(m,H,w),m+=H,h+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Js(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function $t(n){let e={};for(let t=0;t<n.length;t++){let i=Js(n[t]);for(let r in i)e[r]=i[r]}return e}function ID(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Y_(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}var RD={clone:Js,merge:$t},PD=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ND=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Kn=class extends Or{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=PD,this.fragmentShader=ND,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Js(e.uniforms),this.uniformsGroups=ID(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},nu=class extends _i{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=vi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},qi=new P,l_=new _e,u_=new _e,qt=class extends nu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=_a*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ma*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _a*2*Math.atan(Math.tan(ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qi.x,qi.y).multiplyScalar(-e/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qi.x,qi.y).multiplyScalar(-e/qi.z)}getViewSize(e,t){return this.getViewBounds(e,l_,u_),t.subVectors(u_,l_)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ma*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Us=-90,ks=1,op=class extends _i{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new qt(Us,ks,e,t);r.layers=this.layers,this.add(r);let s=new qt(Us,ks,e,t);s.layers=this.layers,this.add(s);let o=new qt(Us,ks,e,t);o.layers=this.layers,this.add(o);let a=new qt(Us,ks,e,t);a.layers=this.layers,this.add(a);let c=new qt(Us,ks,e,t);c.layers=this.layers,this.add(c);let l=new qt(Us,ks,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Yl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,h,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},iu=class extends Br{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Xs,super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ap=class extends yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new iu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new wa(5,5,5),s=new Kn({name:"CubemapFromEquirect",uniforms:Js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jt,blending:Zi});s.uniforms.tEquirect.value=t;let o=new Xt(r,s),a=t.minFilter;return t.minFilter===Rr&&(t.minFilter=Nn),new op(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},Gf=new P,OD=new P,LD=new Ve,Pn=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Gf.subVectors(i,t).cross(OD.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Gf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||LD.getNormalMatrix(e),r=this.coplanarPoint(Gf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Sr=new xa,kl=new P,ba=class{constructor(e=new Pn,t=new Pn,i=new Pn,r=new Pn,s=new Pn,o=new Pn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=vi){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],d=r[6],h=r[7],m=r[8],v=r[9],_=r[10],p=r[11],f=r[12],S=r[13],M=r[14],E=r[15];if(i[0].setComponents(c-s,h-l,p-m,E-f).normalize(),i[1].setComponents(c+s,h+l,p+m,E+f).normalize(),i[2].setComponents(c+o,h+u,p+v,E+S).normalize(),i[3].setComponents(c-o,h-u,p-v,E-S).normalize(),i[4].setComponents(c-a,h-d,p-_,E-M).normalize(),t===vi)i[5].setComponents(c+a,h+d,p+_,E+M).normalize();else if(t===Yl)i[5].setComponents(a,d,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Sr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Sr)}intersectsSprite(e){return Sr.center.set(0,0,0),Sr.radius=.7071067811865476,Sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(kl.x=r.normal.x>0?e.max.x:e.min.x,kl.y=r.normal.y>0?e.max.y:e.min.y,kl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(kl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Z_(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function FD(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),a.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){let u=c.array,d=c._updateRange,h=c.updateRanges;if(n.bindBuffer(l,a),d.count===-1&&h.length===0&&n.bufferSubData(l,0,u),h.length!==0){for(let m=0,v=h.length;m<v;m++){let _=h[m];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}d.count!==-1&&(n.bufferSubData(l,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var Qs=class n extends xi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,h=t/c,m=[],v=[],_=[],p=[];for(let f=0;f<u;f++){let S=f*h-o;for(let M=0;M<l;M++){let E=M*d-s;v.push(E,-S,0),_.push(0,0,1),p.push(M/a),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let S=0;S<a;S++){let M=S+l*f,E=S+l*(f+1),I=S+1+l*(f+1),A=S+1+l*f;m.push(M,E,A),m.push(E,I,A)}this.setIndex(m),this.setAttribute("position",new Yt(v,3)),this.setAttribute("normal",new Yt(_,3)),this.setAttribute("uv",new Yt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},UD=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kD=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,BD=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,VD=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zD=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,HD=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,GD=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,WD=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jD=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$D=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,qD=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,XD=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,YD=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ZD=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,KD=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,JD=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,QD=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eI=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tI=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nI=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,iI=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rI=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,sI=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,oI=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,aI=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cI=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,lI=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uI=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dI=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hI=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fI="gl_FragColor = linearToOutputTexel( gl_FragColor );",pI=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,mI=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,gI=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vI=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yI=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_I=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xI=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,MI=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wI=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bI=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,SI=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,EI=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,TI=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,CI=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,AI=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,DI=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,II=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,RI=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,PI=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,NI=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,OI=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,LI=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,FI=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,UI=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kI=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,BI=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,VI=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zI=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HI=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GI=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,WI=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jI=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$I=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qI=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XI=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,YI=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ZI=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,KI=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,JI=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,QI=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,e1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,t1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,n1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,i1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,o1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,a1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,c1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,l1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,u1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,d1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,h1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,f1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,v1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,y1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,x1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,M1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,w1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,b1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,S1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,E1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,T1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,C1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,A1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,D1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,I1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,R1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,P1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,N1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,O1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,L1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,F1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,U1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,k1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,W1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,j1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,X1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Z1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,K1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,J1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,cR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:UD,alphahash_pars_fragment:kD,alphamap_fragment:BD,alphamap_pars_fragment:VD,alphatest_fragment:zD,alphatest_pars_fragment:HD,aomap_fragment:GD,aomap_pars_fragment:WD,batching_pars_vertex:jD,batching_vertex:$D,begin_vertex:qD,beginnormal_vertex:XD,bsdfs:YD,iridescence_fragment:ZD,bumpmap_pars_fragment:KD,clipping_planes_fragment:JD,clipping_planes_pars_fragment:QD,clipping_planes_pars_vertex:eI,clipping_planes_vertex:tI,color_fragment:nI,color_pars_fragment:iI,color_pars_vertex:rI,color_vertex:sI,common:oI,cube_uv_reflection_fragment:aI,defaultnormal_vertex:cI,displacementmap_pars_vertex:lI,displacementmap_vertex:uI,emissivemap_fragment:dI,emissivemap_pars_fragment:hI,colorspace_fragment:fI,colorspace_pars_fragment:pI,envmap_fragment:mI,envmap_common_pars_fragment:gI,envmap_pars_fragment:vI,envmap_pars_vertex:yI,envmap_physical_pars_fragment:II,envmap_vertex:_I,fog_vertex:xI,fog_pars_vertex:MI,fog_fragment:wI,fog_pars_fragment:bI,gradientmap_pars_fragment:SI,lightmap_fragment:EI,lightmap_pars_fragment:TI,lights_lambert_fragment:CI,lights_lambert_pars_fragment:AI,lights_pars_begin:DI,lights_toon_fragment:RI,lights_toon_pars_fragment:PI,lights_phong_fragment:NI,lights_phong_pars_fragment:OI,lights_physical_fragment:LI,lights_physical_pars_fragment:FI,lights_fragment_begin:UI,lights_fragment_maps:kI,lights_fragment_end:BI,logdepthbuf_fragment:VI,logdepthbuf_pars_fragment:zI,logdepthbuf_pars_vertex:HI,logdepthbuf_vertex:GI,map_fragment:WI,map_pars_fragment:jI,map_particle_fragment:$I,map_particle_pars_fragment:qI,metalnessmap_fragment:XI,metalnessmap_pars_fragment:YI,morphinstance_vertex:ZI,morphcolor_vertex:KI,morphnormal_vertex:JI,morphtarget_pars_vertex:QI,morphtarget_vertex:e1,normal_fragment_begin:t1,normal_fragment_maps:n1,normal_pars_fragment:i1,normal_pars_vertex:r1,normal_vertex:s1,normalmap_pars_fragment:o1,clearcoat_normal_fragment_begin:a1,clearcoat_normal_fragment_maps:c1,clearcoat_pars_fragment:l1,iridescence_pars_fragment:u1,opaque_fragment:d1,packing:h1,premultiplied_alpha_fragment:f1,project_vertex:p1,dithering_fragment:m1,dithering_pars_fragment:g1,roughnessmap_fragment:v1,roughnessmap_pars_fragment:y1,shadowmap_pars_fragment:_1,shadowmap_pars_vertex:x1,shadowmap_vertex:M1,shadowmask_pars_fragment:w1,skinbase_vertex:b1,skinning_pars_vertex:S1,skinning_vertex:E1,skinnormal_vertex:T1,specularmap_fragment:C1,specularmap_pars_fragment:A1,tonemapping_fragment:D1,tonemapping_pars_fragment:I1,transmission_fragment:R1,transmission_pars_fragment:P1,uv_pars_fragment:N1,uv_pars_vertex:O1,uv_vertex:L1,worldpos_vertex:F1,background_vert:U1,background_frag:k1,backgroundCube_vert:B1,backgroundCube_frag:V1,cube_vert:z1,cube_frag:H1,depth_vert:G1,depth_frag:W1,distanceRGBA_vert:j1,distanceRGBA_frag:$1,equirect_vert:q1,equirect_frag:X1,linedashed_vert:Y1,linedashed_frag:Z1,meshbasic_vert:K1,meshbasic_frag:J1,meshlambert_vert:Q1,meshlambert_frag:eR,meshmatcap_vert:tR,meshmatcap_frag:nR,meshnormal_vert:iR,meshnormal_frag:rR,meshphong_vert:sR,meshphong_frag:oR,meshphysical_vert:aR,meshphysical_frag:cR,meshtoon_vert:lR,meshtoon_frag:uR,points_vert:dR,points_frag:hR,shadow_vert:fR,shadow_frag:pR,sprite_vert:mR,sprite_frag:gR},se={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Xn={basic:{uniforms:$t([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:$t([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new $e(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:$t([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:$t([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:$t([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new $e(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:$t([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:$t([se.points,se.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:$t([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:$t([se.common,se.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:$t([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:$t([se.sprite,se.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:$t([se.common,se.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:$t([se.lights,se.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Xn.physical={uniforms:$t([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};var Bl={r:0,b:0,g:0},Er=new Nr,vR=new Tt;function yR(n,e,t,i,r,s,o){let a=new $e(0),c=s===!0?0:1,l,u,d=null,h=0,m=null;function v(p,f){let S=!1,M=f.isScene===!0?f.background:null;M&&M.isTexture&&(M=(f.backgroundBlurriness>0?t:e).get(M)),M===null?_(a,c):M&&M.isColor&&(_(M,1),S=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),M&&(M.isCubeTexture||M.mapping===fu)?(u===void 0&&(u=new Xt(new wa(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:Js(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Er.copy(f.backgroundRotation),Er.x*=-1,Er.y*=-1,Er.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(vR.makeRotationFromEuler(Er)),u.material.toneMapped=ut.getTransfer(M.colorSpace)!==ht,(d!==M||h!==M.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=M,h=M.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Xt(new Qs(2,2),new Kn({name:"BackgroundMaterial",uniforms:Js(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=ut.getTransfer(M.colorSpace)!==ht,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||h!==M.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,d=M,h=M.version,m=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function _(p,f){p.getRGB(Bl,Y_(n)),i.buffers.color.setClear(Bl.r,Bl.g,Bl.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(p,f=1){a.set(p),c=f,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,_(a,c)},render:v}}function _R(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null),s=r,o=!1;function a(y,N,F,D,G){let W=!1,Z=d(D,F,N);s!==Z&&(s=Z,l(s.object)),W=m(y,D,F,G),W&&v(y,D,F,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,E(y,N,F,D),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return n.createVertexArray()}function l(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function d(y,N,F){let D=F.wireframe===!0,G=i[y.id];G===void 0&&(G={},i[y.id]=G);let W=G[N.id];W===void 0&&(W={},G[N.id]=W);let Z=W[D];return Z===void 0&&(Z=h(c()),W[D]=Z),Z}function h(y){let N=[],F=[],D=[];for(let G=0;G<t;G++)N[G]=0,F[G]=0,D[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:F,attributeDivisors:D,object:y,attributes:{},index:null}}function m(y,N,F,D){let G=s.attributes,W=N.attributes,Z=0,J=F.getAttributes();for(let H in J)if(J[H].location>=0){let Q=G[H],pe=W[H];if(pe===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(pe=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(pe=y.instanceColor)),Q===void 0||Q.attribute!==pe||pe&&Q.data!==pe.data)return!0;Z++}return s.attributesNum!==Z||s.index!==D}function v(y,N,F,D){let G={},W=N.attributes,Z=0,J=F.getAttributes();for(let H in J)if(J[H].location>=0){let Q=W[H];Q===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(Q=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(Q=y.instanceColor));let pe={};pe.attribute=Q,Q&&Q.data&&(pe.data=Q.data),G[H]=pe,Z++}s.attributes=G,s.attributesNum=Z,s.index=D}function _(){let y=s.newAttributes;for(let N=0,F=y.length;N<F;N++)y[N]=0}function p(y){f(y,0)}function f(y,N){let F=s.newAttributes,D=s.enabledAttributes,G=s.attributeDivisors;F[y]=1,D[y]===0&&(n.enableVertexAttribArray(y),D[y]=1),G[y]!==N&&(n.vertexAttribDivisor(y,N),G[y]=N)}function S(){let y=s.newAttributes,N=s.enabledAttributes;for(let F=0,D=N.length;F<D;F++)N[F]!==y[F]&&(n.disableVertexAttribArray(F),N[F]=0)}function M(y,N,F,D,G,W,Z){Z===!0?n.vertexAttribIPointer(y,N,F,G,W):n.vertexAttribPointer(y,N,F,D,G,W)}function E(y,N,F,D){_();let G=D.attributes,W=F.getAttributes(),Z=N.defaultAttributeValues;for(let J in W){let H=W[J];if(H.location>=0){let ee=G[J];if(ee===void 0&&(J==="instanceMatrix"&&y.instanceMatrix&&(ee=y.instanceMatrix),J==="instanceColor"&&y.instanceColor&&(ee=y.instanceColor)),ee!==void 0){let Q=ee.normalized,pe=ee.itemSize,We=e.get(ee);if(We===void 0)continue;let at=We.buffer,j=We.type,te=We.bytesPerElement,ue=j===n.INT||j===n.UNSIGNED_INT||ee.gpuType===U_;if(ee.isInterleavedBufferAttribute){let ae=ee.data,Pe=ae.stride,Oe=ee.offset;if(ae.isInstancedInterleavedBuffer){for(let qe=0;qe<H.locationSize;qe++)f(H.location+qe,ae.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let qe=0;qe<H.locationSize;qe++)p(H.location+qe);n.bindBuffer(n.ARRAY_BUFFER,at);for(let qe=0;qe<H.locationSize;qe++)M(H.location+qe,pe/H.locationSize,j,Q,Pe*te,(Oe+pe/H.locationSize*qe)*te,ue)}else{if(ee.isInstancedBufferAttribute){for(let ae=0;ae<H.locationSize;ae++)f(H.location+ae,ee.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ae=0;ae<H.locationSize;ae++)p(H.location+ae);n.bindBuffer(n.ARRAY_BUFFER,at);for(let ae=0;ae<H.locationSize;ae++)M(H.location+ae,pe/H.locationSize,j,Q,pe*te,pe/H.locationSize*ae*te,ue)}}else if(Z!==void 0){let Q=Z[J];if(Q!==void 0)switch(Q.length){case 2:n.vertexAttrib2fv(H.location,Q);break;case 3:n.vertexAttrib3fv(H.location,Q);break;case 4:n.vertexAttrib4fv(H.location,Q);break;default:n.vertexAttrib1fv(H.location,Q)}}}}S()}function I(){R();for(let y in i){let N=i[y];for(let F in N){let D=N[F];for(let G in D)u(D[G].object),delete D[G];delete N[F]}delete i[y]}}function A(y){if(i[y.id]===void 0)return;let N=i[y.id];for(let F in N){let D=N[F];for(let G in D)u(D[G].object),delete D[G];delete N[F]}delete i[y.id]}function T(y){for(let N in i){let F=i[N];if(F[y.id]===void 0)continue;let D=F[y.id];for(let G in D)u(D[G].object),delete D[G];delete F[y.id]}}function R(){w(),o=!0,s!==r&&(s=r,l(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:w,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:p,disableUnusedAttributes:S}}function xR(n,e,t){let i;function r(c){i=c}function s(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function o(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),t.update(l,i,u))}function a(c,l,u){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let h=0;h<u;h++)this.render(c[h],l[h]);else{d.multiDrawArraysWEBGL(i,c,0,l,0,u);let h=0;for(let m=0;m<u;m++)h+=l[m];t.update(h,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function MR(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let M=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=t.precision!==void 0?t.precision:"highp",a=s(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);let c=t.logarithmicDepthBuffer===!0,l=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),u=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_TEXTURE_SIZE),h=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),p=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),f=u>0,S=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:c,maxTextures:l,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:h,maxAttributes:m,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:p,vertexTextures:f,maxSamples:S}}function wR(n){let e=this,t=null,i=0,r=!1,s=!1,o=new Pn,a=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,m){let v=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,f=n.get(d);if(!r||v===null||v.length===0||s&&!p)s?u(null):l();else{let S=s?0:i,M=S*4,E=f.clippingState||null;c.value=E,E=u(v,h,M,m);for(let I=0;I!==M;++I)E[I]=t[I];f.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,m,v){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=c.value,v!==!0||p===null){let f=m+_*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<f)&&(p=new Float32Array(f));for(let M=0,E=m;M!==_;++M,E+=4)o.copy(d[M]).applyMatrix4(S,a),o.normal.toArray(p,E),p[E+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function bR(n){let e=new WeakMap;function t(o,a){return a===Qf?o.mapping=Xs:a===ep&&(o.mapping=Ys),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Qf||a===ep)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new ap(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var ru=class extends nu{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Hs=4,d_=[.125,.215,.35,.446,.526,.582],Dr=20,Wf=new ru,h_=new $e,jf=null,$f=0,qf=0,Xf=!1,Cr=(1+Math.sqrt(5))/2,Bs=1/Cr,f_=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Cr,Bs),new P(0,Cr,-Bs),new P(Bs,0,Cr),new P(-Bs,0,Cr),new P(Cr,Bs,0),new P(-Cr,Bs,0)],su=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){jf=this._renderer.getRenderTarget(),$f=this._renderer.getActiveCubeFace(),qf=this._renderer.getActiveMipmapLevel(),Xf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=g_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=m_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(jf,$f,qf),this._renderer.xr.enabled=Xf,e.scissorTest=!1,Vl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xs||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jf=this._renderer.getRenderTarget(),$f=this._renderer.getActiveCubeFace(),qf=this._renderer.getActiveMipmapLevel(),Xf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:Gl,format:Yn,colorSpace:er,depthBuffer:!1},r=p_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=p_(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=SR(s)),this._blurMaterial=ER(s,e,t)}return r}_compileMaterial(e){let t=new Xt(this._lodPlanes[0],e);this._renderer.compile(t,Wf)}_sceneToCubeUV(e,t,i,r){let a=new qt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(h_),u.toneMapping=Ki,u.autoClear=!1;let m=new Ks({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),v=new Xt(new wa,m),_=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(h_),_=!0);for(let f=0;f<6;f++){let S=f%3;S===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):S===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));let M=this._cubeSize;Vl(r,S*M,f>2?M:0,M,M),u.setRenderTarget(r),_&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Xs||e.mapping===Ys;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=g_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=m_());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Xt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;Vl(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Wf)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=f_[(r-1)%f_.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new Xt(this._lodPlanes[r],l),h=l.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Dr-1),_=s/v,p=isFinite(s)?1+Math.floor(u*_):Dr;p>Dr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Dr}`);let f=[],S=0;for(let T=0;T<Dr;++T){let R=T/_,w=Math.exp(-R*R/2);f.push(w),T===0?S+=w:T<p&&(S+=2*w)}for(let T=0;T<f.length;T++)f[T]=f[T]/S;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:M}=this;h.dTheta.value=v,h.mipInt.value=M-i;let E=this._sizeLods[r],I=3*E*(r>M-Hs?r-M+Hs:0),A=4*(this._cubeSize-E);Vl(t,I,A,3*E,2*E),c.setRenderTarget(t),c.render(d,Wf)}};function SR(n){let e=[],t=[],i=[],r=n,s=n-Hs+1+d_.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>n-Hs?c=d_[o-n+Hs-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,v=6,_=3,p=2,f=1,S=new Float32Array(_*v*m),M=new Float32Array(p*v*m),E=new Float32Array(f*v*m);for(let A=0;A<m;A++){let T=A%3*2/3-1,R=A>2?0:-1,w=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];S.set(w,_*v*A),M.set(h,p*v*A);let y=[A,A,A,A,A,A];E.set(y,f*v*A)}let I=new xi;I.setAttribute("position",new xn(S,_)),I.setAttribute("uv",new xn(M,p)),I.setAttribute("faceIndex",new xn(E,f)),e.push(I),r>Hs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function p_(n,e,t){let i=new yi(n,e,t);return i.texture.mapping=fu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function ER(n,e,t){let i=new Float32Array(Dr),r=new P(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:Dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Op(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function m_(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Op(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function g_(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Op(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Op(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function TR(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===Qf||c===ep,u=c===Xs||c===Ys;if(l||u){let d=e.get(a),h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new su(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let m=a.image;return l&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new su(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function CR(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function AR(n,e,t,i){let r={},s=new WeakMap;function o(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let v in h.attributes)e.remove(h.attributes[v]);for(let v in h.morphAttributes){let _=h.morphAttributes[v];for(let p=0,f=_.length;p<f;p++)e.remove(_[p])}h.removeEventListener("dispose",o),delete r[h.id];let m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function c(d){let h=d.attributes;for(let v in h)e.update(h[v],n.ARRAY_BUFFER);let m=d.morphAttributes;for(let v in m){let _=m[v];for(let p=0,f=_.length;p<f;p++)e.update(_[p],n.ARRAY_BUFFER)}}function l(d){let h=[],m=d.index,v=d.attributes.position,_=0;if(m!==null){let S=m.array;_=m.version;for(let M=0,E=S.length;M<E;M+=3){let I=S[M+0],A=S[M+1],T=S[M+2];h.push(I,A,A,T,T,I)}}else if(v!==void 0){let S=v.array;_=v.version;for(let M=0,E=S.length/3-1;M<E;M+=3){let I=M+0,A=M+1,T=M+2;h.push(I,A,A,T,T,I)}}else return;let p=new(q_(h)?tu:eu)(h,1);p.version=_;let f=s.get(d);f&&e.remove(f),s.set(d,p)}function u(d){let h=s.get(d);if(h){let m=d.index;m!==null&&h.version<m.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function DR(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,h){n.drawElements(i,h,s,d*o),t.update(h,i,1)}function l(d,h,m){m!==0&&(n.drawElementsInstanced(i,h,s,d*o,m),t.update(h,i,m))}function u(d,h,m){if(m===0)return;let v=e.get("WEBGL_multi_draw");if(v===null)for(let _=0;_<m;_++)this.render(d[_]/o,h[_]);else{v.multiDrawElementsWEBGL(i,h,0,s,d,0,m);let _=0;for(let p=0;p<m;p++)_+=h[p];t.update(_,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function IR(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function RR(n,e,t){let i=new WeakMap,r=new Ft;function s(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(a);if(h===void 0||h.count!==d){let y=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var m=y;h!==void 0&&h.texture.dispose();let v=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],E=0;v===!0&&(E=1),_===!0&&(E=2),p===!0&&(E=3);let I=a.attributes.position.count*E,A=1;I>e.maxTextureSize&&(A=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);let T=new Float32Array(I*A*4*d),R=new Jl(T,I,A,d);R.type=Yi,R.needsUpdate=!0;let w=E*4;for(let N=0;N<d;N++){let F=f[N],D=S[N],G=M[N],W=I*A*4*N;for(let Z=0;Z<F.count;Z++){let J=Z*w;v===!0&&(r.fromBufferAttribute(F,Z),T[W+J+0]=r.x,T[W+J+1]=r.y,T[W+J+2]=r.z,T[W+J+3]=0),_===!0&&(r.fromBufferAttribute(D,Z),T[W+J+4]=r.x,T[W+J+5]=r.y,T[W+J+6]=r.z,T[W+J+7]=0),p===!0&&(r.fromBufferAttribute(G,Z),T[W+J+8]=r.x,T[W+J+9]=r.y,T[W+J+10]=r.z,T[W+J+11]=G.itemSize===4?r.w:1)}}h={count:d,texture:R,size:new _e(I,A)},i.set(a,h),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let v=0;for(let p=0;p<l.length;p++)v+=l[p];let _=a.morphTargetsRelative?1:1-v;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function PR(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return d}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var ou=class extends Br{constructor(e,t,i,r,s,o,a,c,l,u){if(u=u!==void 0?u:js,u!==js&&u!==ya)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===js&&(i=Zs),i===void 0&&u===ya&&(i=Aa),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:_n,this.minFilter=c!==void 0?c:_n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},K_=new Br,J_=new ou(1,1);J_.compareFunction=j_;var Q_=new Jl,ex=new sp,tx=new iu,v_=[],y_=[],__=new Float32Array(16),x_=new Float32Array(9),M_=new Float32Array(4);function no(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=v_[r];if(s===void 0&&(s=new Float32Array(r),v_[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function It(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function mu(n,e){let t=y_[e];t===void 0&&(t=new Int32Array(e),y_[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function NR(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function OR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2fv(this.addr,e),It(t,e)}}function LR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;n.uniform3fv(this.addr,e),It(t,e)}}function FR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4fv(this.addr,e),It(t,e)}}function UR(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;M_.set(i),n.uniformMatrix2fv(this.addr,!1,M_),It(t,i)}}function kR(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;x_.set(i),n.uniformMatrix3fv(this.addr,!1,x_),It(t,i)}}function BR(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;__.set(i),n.uniformMatrix4fv(this.addr,!1,__),It(t,i)}}function VR(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function zR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2iv(this.addr,e),It(t,e)}}function HR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3iv(this.addr,e),It(t,e)}}function GR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4iv(this.addr,e),It(t,e)}}function WR(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function jR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2uiv(this.addr,e),It(t,e)}}function $R(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3uiv(this.addr,e),It(t,e)}}function qR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4uiv(this.addr,e),It(t,e)}}function XR(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s=this.type===n.SAMPLER_2D_SHADOW?J_:K_;t.setTexture2D(e||s,r)}function YR(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ex,r)}function ZR(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||tx,r)}function KR(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Q_,r)}function JR(n){switch(n){case 5126:return NR;case 35664:return OR;case 35665:return LR;case 35666:return FR;case 35674:return UR;case 35675:return kR;case 35676:return BR;case 5124:case 35670:return VR;case 35667:case 35671:return zR;case 35668:case 35672:return HR;case 35669:case 35673:return GR;case 5125:return WR;case 36294:return jR;case 36295:return $R;case 36296:return qR;case 35678:case 36198:case 36298:case 36306:case 35682:return XR;case 35679:case 36299:case 36307:return YR;case 35680:case 36300:case 36308:case 36293:return ZR;case 36289:case 36303:case 36311:case 36292:return KR}}function QR(n,e){n.uniform1fv(this.addr,e)}function eP(n,e){let t=no(e,this.size,2);n.uniform2fv(this.addr,t)}function tP(n,e){let t=no(e,this.size,3);n.uniform3fv(this.addr,t)}function nP(n,e){let t=no(e,this.size,4);n.uniform4fv(this.addr,t)}function iP(n,e){let t=no(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function rP(n,e){let t=no(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function sP(n,e){let t=no(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function oP(n,e){n.uniform1iv(this.addr,e)}function aP(n,e){n.uniform2iv(this.addr,e)}function cP(n,e){n.uniform3iv(this.addr,e)}function lP(n,e){n.uniform4iv(this.addr,e)}function uP(n,e){n.uniform1uiv(this.addr,e)}function dP(n,e){n.uniform2uiv(this.addr,e)}function hP(n,e){n.uniform3uiv(this.addr,e)}function fP(n,e){n.uniform4uiv(this.addr,e)}function pP(n,e,t){let i=this.cache,r=e.length,s=mu(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||K_,s[o])}function mP(n,e,t){let i=this.cache,r=e.length,s=mu(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||ex,s[o])}function gP(n,e,t){let i=this.cache,r=e.length,s=mu(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||tx,s[o])}function vP(n,e,t){let i=this.cache,r=e.length,s=mu(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Q_,s[o])}function yP(n){switch(n){case 5126:return QR;case 35664:return eP;case 35665:return tP;case 35666:return nP;case 35674:return iP;case 35675:return rP;case 35676:return sP;case 5124:case 35670:return oP;case 35667:case 35671:return aP;case 35668:case 35672:return cP;case 35669:case 35673:return lP;case 5125:return uP;case 36294:return dP;case 36295:return hP;case 36296:return fP;case 35678:case 36198:case 36298:case 36306:case 35682:return pP;case 35679:case 36299:case 36307:return mP;case 35680:case 36300:case 36308:case 36293:return gP;case 36289:case 36303:case 36311:case 36292:return vP}}var cp=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=JR(t.type)}},lp=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yP(t.type)}},up=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},Yf=/(\w+)(\])?(\[|\.)?/g;function w_(n,e){n.seq.push(e),n.map[e.id]=e}function _P(n,e,t){let i=n.name,r=i.length;for(Yf.lastIndex=0;;){let s=Yf.exec(i),o=Yf.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){w_(t,l===void 0?new cp(a,n,e):new lp(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new up(a),w_(t,d)),t=d}}}var qs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);_P(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function b_(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var xP=37297,MP=0;function wP(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function bP(n){let e=ut.getPrimaries(ut.workingColorSpace),t=ut.getPrimaries(n),i;switch(e===t?i="":e===Xl&&t===ql?i="LinearDisplayP3ToLinearSRGB":e===ql&&t===Xl&&(i="LinearSRGBToLinearDisplayP3"),n){case er:case pu:return[i,"LinearTransferOETF"];case qn:case Pp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function S_(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+wP(n.getShaderSource(e),o)}else return r}function SP(n,e){let t=bP(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function EP(n,e){let t;switch(e){case EA:t="Linear";break;case TA:t="Reinhard";break;case CA:t="OptimizedCineon";break;case AA:t="ACESFilmic";break;case IA:t="AgX";break;case RA:t="Neutral";break;case DA:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function TP(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pa).join(`
`)}function CP(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function AP(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function pa(n){return n!==""}function E_(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function T_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var DP=/^[ \t]*#include +<([\w\d./]+)>/gm;function dp(n){return n.replace(DP,RP)}var IP=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function RP(n,e){let t=Be[e];if(t===void 0){let i=IP.get(e);if(i!==void 0)t=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return dp(t)}var PP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function C_(n){return n.replace(PP,NP)}function NP(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function A_(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function OP(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===O_?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===KC?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===mi&&(e="SHADOWMAP_TYPE_VSM"),e}function LP(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Xs:case Ys:e="ENVMAP_TYPE_CUBE";break;case fu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function FP(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ys:e="ENVMAP_MODE_REFRACTION";break}return e}function UP(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case L_:e="ENVMAP_BLENDING_MULTIPLY";break;case bA:e="ENVMAP_BLENDING_MIX";break;case SA:e="ENVMAP_BLENDING_ADD";break}return e}function kP(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function BP(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=OP(t),l=LP(t),u=FP(t),d=UP(t),h=kP(t),m=TP(t),v=CP(s),_=r.createProgram(),p,f,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(pa).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(pa).join(`
`),f.length>0&&(f+=`
`)):(p=[A_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pa).join(`
`),f=[A_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ki?"#define TONE_MAPPING":"",t.toneMapping!==Ki?Be.tonemapping_pars_fragment:"",t.toneMapping!==Ki?EP("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,SP("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(pa).join(`
`)),o=dp(o),o=E_(o,t),o=T_(o,t),a=dp(a),a=E_(a,t),a=T_(a,t),o=C_(o),a=C_(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===W0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===W0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let M=S+p+o,E=S+f+a,I=b_(r,r.VERTEX_SHADER,M),A=b_(r,r.FRAGMENT_SHADER,E);r.attachShader(_,I),r.attachShader(_,A),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(N){if(n.debug.checkShaderErrors){let F=r.getProgramInfoLog(_).trim(),D=r.getShaderInfoLog(I).trim(),G=r.getShaderInfoLog(A).trim(),W=!0,Z=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,I,A);else{let J=S_(r,I,"vertex"),H=S_(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+F+`
`+J+`
`+H)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(D===""||G==="")&&(Z=!1);Z&&(N.diagnostics={runnable:W,programLog:F,vertexShader:{log:D,prefix:p},fragmentShader:{log:G,prefix:f}})}r.deleteShader(I),r.deleteShader(A),R=new qs(r,_),w=AP(r,_)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,xP)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=MP++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=A,this}var VP=0,hp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new fp(e),t.set(e,i)),i}},fp=class{constructor(e){this.id=VP++,this.code=e,this.usedTimes=0}};function zP(n,e,t,i,r,s,o){let a=new Ql,c=new hp,l=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures,m=r.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return l.add(w),w===0?"uv":`uv${w}`}function p(w,y,N,F,D){let G=F.fog,W=D.geometry,Z=w.isMeshStandardMaterial?F.environment:null,J=(w.isMeshStandardMaterial?t:e).get(w.envMap||Z),H=J&&J.mapping===fu?J.image.height:null,ee=v[w.type];w.precision!==null&&(m=r.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));let Q=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,pe=Q!==void 0?Q.length:0,We=0;W.morphAttributes.position!==void 0&&(We=1),W.morphAttributes.normal!==void 0&&(We=2),W.morphAttributes.color!==void 0&&(We=3);let at,j,te,ue;if(ee){let Rt=Xn[ee];at=Rt.vertexShader,j=Rt.fragmentShader}else at=w.vertexShader,j=w.fragmentShader,c.update(w),te=c.getVertexShaderID(w),ue=c.getFragmentShaderID(w);let ae=n.getRenderTarget(),Pe=D.isInstancedMesh===!0,Oe=D.isBatchedMesh===!0,qe=!!w.map,L=!!w.matcap,ze=!!J,be=!!w.aoMap,vt=!!w.lightMap,Se=!!w.bumpMap,st=!!w.normalMap,C=!!w.displacementMap,x=!!w.emissiveMap,z=!!w.metalnessMap,q=!!w.roughnessMap,X=w.anisotropy>0,Y=w.clearcoat>0,xe=w.iridescence>0,K=w.sheen>0,ve=w.transmission>0,Me=X&&!!w.anisotropyMap,re=Y&&!!w.clearcoatMap,ce=Y&&!!w.clearcoatNormalMap,Te=Y&&!!w.clearcoatRoughnessMap,de=xe&&!!w.iridescenceMap,he=xe&&!!w.iridescenceThicknessMap,Xe=K&&!!w.sheenColorMap,Ye=K&&!!w.sheenRoughnessMap,it=!!w.specularMap,nt=!!w.specularColorMap,rt=!!w.specularIntensityMap,me=ve&&!!w.transmissionMap,g=ve&&!!w.thicknessMap,U=!!w.gradientMap,$=!!w.alphaMap,ne=w.alphaTest>0,le=!!w.alphaHash,Ze=!!w.extensions,je=Ki;w.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(je=n.toneMapping);let ft={shaderID:ee,shaderType:w.type,shaderName:w.name,vertexShader:at,fragmentShader:j,defines:w.defines,customVertexShaderID:te,customFragmentShaderID:ue,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:Oe,instancing:Pe,instancingColor:Pe&&D.instanceColor!==null,instancingMorph:Pe&&D.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ae===null?n.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:er,alphaToCoverage:!!w.alphaToCoverage,map:qe,matcap:L,envMap:ze,envMapMode:ze&&J.mapping,envMapCubeUVHeight:H,aoMap:be,lightMap:vt,bumpMap:Se,normalMap:st,displacementMap:h&&C,emissiveMap:x,normalMapObjectSpace:st&&w.normalMapType===jA,normalMapTangentSpace:st&&w.normalMapType===W_,metalnessMap:z,roughnessMap:q,anisotropy:X,anisotropyMap:Me,clearcoat:Y,clearcoatMap:re,clearcoatNormalMap:ce,clearcoatRoughnessMap:Te,iridescence:xe,iridescenceMap:de,iridescenceThicknessMap:he,sheen:K,sheenColorMap:Xe,sheenRoughnessMap:Ye,specularMap:it,specularColorMap:nt,specularIntensityMap:rt,transmission:ve,transmissionMap:me,thicknessMap:g,gradientMap:U,opaque:w.transparent===!1&&w.blending===Ws&&w.alphaToCoverage===!1,alphaMap:$,alphaTest:ne,alphaHash:le,combine:w.combine,mapUv:qe&&_(w.map.channel),aoMapUv:be&&_(w.aoMap.channel),lightMapUv:vt&&_(w.lightMap.channel),bumpMapUv:Se&&_(w.bumpMap.channel),normalMapUv:st&&_(w.normalMap.channel),displacementMapUv:C&&_(w.displacementMap.channel),emissiveMapUv:x&&_(w.emissiveMap.channel),metalnessMapUv:z&&_(w.metalnessMap.channel),roughnessMapUv:q&&_(w.roughnessMap.channel),anisotropyMapUv:Me&&_(w.anisotropyMap.channel),clearcoatMapUv:re&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:ce&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:he&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Xe&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&_(w.sheenRoughnessMap.channel),specularMapUv:it&&_(w.specularMap.channel),specularColorMapUv:nt&&_(w.specularColorMap.channel),specularIntensityMapUv:rt&&_(w.specularIntensityMap.channel),transmissionMapUv:me&&_(w.transmissionMap.channel),thicknessMapUv:g&&_(w.thicknessMap.channel),alphaMapUv:$&&_(w.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(st||X),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!W.attributes.uv&&(qe||$),fog:!!G,useFog:w.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:D.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:We,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:je,useLegacyLights:n._useLegacyLights,decodeVideoTexture:qe&&w.map.isVideoTexture===!0&&ut.getTransfer(w.map.colorSpace)===ht,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===gi,flipSided:w.side===Jt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ze&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ze&&w.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ft.vertexUv1s=l.has(1),ft.vertexUv2s=l.has(2),ft.vertexUv3s=l.has(3),l.clear(),ft}function f(w){let y=[];if(w.shaderID?y.push(w.shaderID):(y.push(w.customVertexShaderID),y.push(w.customFragmentShaderID)),w.defines!==void 0)for(let N in w.defines)y.push(N),y.push(w.defines[N]);return w.isRawShaderMaterial===!1&&(S(y,w),M(y,w),y.push(n.outputColorSpace)),y.push(w.customProgramCacheKey),y.join()}function S(w,y){w.push(y.precision),w.push(y.outputColorSpace),w.push(y.envMapMode),w.push(y.envMapCubeUVHeight),w.push(y.mapUv),w.push(y.alphaMapUv),w.push(y.lightMapUv),w.push(y.aoMapUv),w.push(y.bumpMapUv),w.push(y.normalMapUv),w.push(y.displacementMapUv),w.push(y.emissiveMapUv),w.push(y.metalnessMapUv),w.push(y.roughnessMapUv),w.push(y.anisotropyMapUv),w.push(y.clearcoatMapUv),w.push(y.clearcoatNormalMapUv),w.push(y.clearcoatRoughnessMapUv),w.push(y.iridescenceMapUv),w.push(y.iridescenceThicknessMapUv),w.push(y.sheenColorMapUv),w.push(y.sheenRoughnessMapUv),w.push(y.specularMapUv),w.push(y.specularColorMapUv),w.push(y.specularIntensityMapUv),w.push(y.transmissionMapUv),w.push(y.thicknessMapUv),w.push(y.combine),w.push(y.fogExp2),w.push(y.sizeAttenuation),w.push(y.morphTargetsCount),w.push(y.morphAttributeCount),w.push(y.numDirLights),w.push(y.numPointLights),w.push(y.numSpotLights),w.push(y.numSpotLightMaps),w.push(y.numHemiLights),w.push(y.numRectAreaLights),w.push(y.numDirLightShadows),w.push(y.numPointLightShadows),w.push(y.numSpotLightShadows),w.push(y.numSpotLightShadowsWithMaps),w.push(y.numLightProbes),w.push(y.shadowMapType),w.push(y.toneMapping),w.push(y.numClippingPlanes),w.push(y.numClipIntersection),w.push(y.depthPacking)}function M(w,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),w.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.useLegacyLights&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.alphaToCoverage&&a.enable(20),w.push(a.mask)}function E(w){let y=v[w.type],N;if(y){let F=Xn[y];N=RD.clone(F.uniforms)}else N=w.uniforms;return N}function I(w,y){let N;for(let F=0,D=u.length;F<D;F++){let G=u[F];if(G.cacheKey===y){N=G,++N.usedTimes;break}}return N===void 0&&(N=new BP(n,y,w,s),u.push(N)),N}function A(w){if(--w.usedTimes===0){let y=u.indexOf(w);u[y]=u[u.length-1],u.pop(),w.destroy()}}function T(w){c.remove(w)}function R(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:E,acquireProgram:I,releaseProgram:A,releaseShaderCache:T,programs:u,dispose:R}}function HP(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function GP(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function D_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function I_(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,m,v,_,p){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:m,groupOrder:v,renderOrder:d.renderOrder,z:_,group:p},n[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=m,f.groupOrder=v,f.renderOrder=d.renderOrder,f.z=_,f.group=p),e++,f}function a(d,h,m,v,_,p){let f=o(d,h,m,v,_,p);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):t.push(f)}function c(d,h,m,v,_,p){let f=o(d,h,m,v,_,p);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):t.unshift(f)}function l(d,h){t.length>1&&t.sort(d||GP),i.length>1&&i.sort(h||D_),r.length>1&&r.sort(h||D_)}function u(){for(let d=e,h=n.length;d<h;d++){let m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function WP(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new I_,n.set(i,[o])):r>=s.length?(o=new I_,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function jP(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new $e};break;case"SpotLight":t={position:new P,direction:new P,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function $P(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var qP=0;function XP(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function YP(n){let e=new jP,t=$P(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new P);let r=new P,s=new Tt,o=new Tt;function a(l,u){let d=0,h=0,m=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let v=0,_=0,p=0,f=0,S=0,M=0,E=0,I=0,A=0,T=0,R=0;l.sort(XP);let w=u===!0?Math.PI:1;for(let N=0,F=l.length;N<F;N++){let D=l[N],G=D.color,W=D.intensity,Z=D.distance,J=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=G.r*W*w,h+=G.g*W*w,m+=G.b*W*w;else if(D.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(D.sh.coefficients[H],W);R++}else if(D.isDirectionalLight){let H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity*w),D.castShadow){let ee=D.shadow,Q=t.get(D);Q.shadowBias=ee.bias,Q.shadowNormalBias=ee.normalBias,Q.shadowRadius=ee.radius,Q.shadowMapSize=ee.mapSize,i.directionalShadow[v]=Q,i.directionalShadowMap[v]=J,i.directionalShadowMatrix[v]=D.shadow.matrix,M++}i.directional[v]=H,v++}else if(D.isSpotLight){let H=e.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(G).multiplyScalar(W*w),H.distance=Z,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,i.spot[p]=H;let ee=D.shadow;if(D.map&&(i.spotLightMap[A]=D.map,A++,ee.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[p]=ee.matrix,D.castShadow){let Q=t.get(D);Q.shadowBias=ee.bias,Q.shadowNormalBias=ee.normalBias,Q.shadowRadius=ee.radius,Q.shadowMapSize=ee.mapSize,i.spotShadow[p]=Q,i.spotShadowMap[p]=J,I++}p++}else if(D.isRectAreaLight){let H=e.get(D);H.color.copy(G).multiplyScalar(W),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),i.rectArea[f]=H,f++}else if(D.isPointLight){let H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity*w),H.distance=D.distance,H.decay=D.decay,D.castShadow){let ee=D.shadow,Q=t.get(D);Q.shadowBias=ee.bias,Q.shadowNormalBias=ee.normalBias,Q.shadowRadius=ee.radius,Q.shadowMapSize=ee.mapSize,Q.shadowCameraNear=ee.camera.near,Q.shadowCameraFar=ee.camera.far,i.pointShadow[_]=Q,i.pointShadowMap[_]=J,i.pointShadowMatrix[_]=D.shadow.matrix,E++}i.point[_]=H,_++}else if(D.isHemisphereLight){let H=e.get(D);H.skyColor.copy(D.color).multiplyScalar(W*w),H.groundColor.copy(D.groundColor).multiplyScalar(W*w),i.hemi[S]=H,S++}}f>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=m;let y=i.hash;(y.directionalLength!==v||y.pointLength!==_||y.spotLength!==p||y.rectAreaLength!==f||y.hemiLength!==S||y.numDirectionalShadows!==M||y.numPointShadows!==E||y.numSpotShadows!==I||y.numSpotMaps!==A||y.numLightProbes!==R)&&(i.directional.length=v,i.spot.length=p,i.rectArea.length=f,i.point.length=_,i.hemi.length=S,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=I,i.spotShadowMap.length=I,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=I+A-T,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=R,y.directionalLength=v,y.pointLength=_,y.spotLength=p,y.rectAreaLength=f,y.hemiLength=S,y.numDirectionalShadows=M,y.numPointShadows=E,y.numSpotShadows=I,y.numSpotMaps=A,y.numLightProbes=R,i.version=qP++)}function c(l,u){let d=0,h=0,m=0,v=0,_=0,p=u.matrixWorldInverse;for(let f=0,S=l.length;f<S;f++){let M=l[f];if(M.isDirectionalLight){let E=i.directional[d];E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),d++}else if(M.isSpotLight){let E=i.spot[m];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),m++}else if(M.isRectAreaLight){let E=i.rectArea[v];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),o.identity(),s.copy(M.matrixWorld),s.premultiply(p),o.extractRotation(s),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),v++}else if(M.isPointLight){let E=i.point[h];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),h++}else if(M.isHemisphereLight){let E=i.hemi[_];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(p),_++}}}return{setup:a,setupView:c,state:i}}function R_(n){let e=new YP(n),t=[],i=[];function r(){t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(u){e.setup(t,u)}function c(u){e.setupView(t,u)}return{init:r,state:{lightsArray:t,shadowsArray:i,lights:e,transmissionRenderTarget:null},setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function ZP(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new R_(n),e.set(r,[a])):s>=o.length?(a=new R_(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var pp=class extends Or{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=GA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},mp=class extends Or{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},KP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JP=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function QP(n,e,t){let i=new ba,r=new _e,s=new _e,o=new Ft,a=new pp({depthPacking:WA}),c=new mp,l={},u=t.maxTextureSize,d={[Qi]:Jt,[Jt]:Qi,[gi]:gi},h=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:KP,fragmentShader:JP}),m=h.clone();m.defines.HORIZONTAL_PASS=1;let v=new xi;v.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Xt(v,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=O_;let f=this.type;this.render=function(A,T,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;let w=n.getRenderTarget(),y=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Zi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let D=f!==mi&&this.type===mi,G=f===mi&&this.type!==mi;for(let W=0,Z=A.length;W<Z;W++){let J=A[W],H=J.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);let ee=H.getFrameExtents();if(r.multiply(ee),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ee.x),r.x=s.x*ee.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ee.y),r.y=s.y*ee.y,H.mapSize.y=s.y)),H.map===null||D===!0||G===!0){let pe=this.type!==mi?{minFilter:_n,magFilter:_n}:{};H.map!==null&&H.map.dispose(),H.map=new yi(r.x,r.y,pe),H.map.texture.name=J.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();let Q=H.getViewportCount();for(let pe=0;pe<Q;pe++){let We=H.getViewport(pe);o.set(s.x*We.x,s.y*We.y,s.x*We.z,s.y*We.w),F.viewport(o),H.updateMatrices(J,pe),i=H.getFrustum(),E(T,R,H.camera,J,this.type)}H.isPointLightShadow!==!0&&this.type===mi&&S(H,R),H.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(w,y,N)};function S(A,T){let R=e.update(_);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new yi(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(T,null,R,h,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(T,null,R,m,_,null)}function M(A,T,R,w){let y=null,N=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)y=N;else if(y=R.isPointLight===!0?c:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let F=y.uuid,D=T.uuid,G=l[F];G===void 0&&(G={},l[F]=G);let W=G[D];W===void 0&&(W=y.clone(),G[D]=W,T.addEventListener("dispose",I)),y=W}if(y.visible=T.visible,y.wireframe=T.wireframe,w===mi?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:d[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let F=n.properties.get(y);F.light=R}return y}function E(A,T,R,w,y){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===mi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);let D=e.update(A),G=A.material;if(Array.isArray(G)){let W=D.groups;for(let Z=0,J=W.length;Z<J;Z++){let H=W[Z],ee=G[H.materialIndex];if(ee&&ee.visible){let Q=M(A,ee,w,y);A.onBeforeShadow(n,A,T,R,D,Q,H),n.renderBufferDirect(R,null,D,Q,A,H),A.onAfterShadow(n,A,T,R,D,Q,H)}}}else if(G.visible){let W=M(A,G,w,y);A.onBeforeShadow(n,A,T,R,D,W,null),n.renderBufferDirect(R,null,D,W,A,null),A.onAfterShadow(n,A,T,R,D,W,null)}}let F=A.children;for(let D=0,G=F.length;D<G;D++)E(F[D],T,R,w,y)}function I(A){A.target.removeEventListener("dispose",I);for(let R in l){let w=l[R],y=A.target.uuid;y in w&&(w[y].dispose(),delete w[y])}}}function eN(n){function e(){let g=!1,U=new Ft,$=null,ne=new Ft(0,0,0,0);return{setMask:function(le){$!==le&&!g&&(n.colorMask(le,le,le,le),$=le)},setLocked:function(le){g=le},setClear:function(le,Ze,je,ft,Rt){Rt===!0&&(le*=ft,Ze*=ft,je*=ft),U.set(le,Ze,je,ft),ne.equals(U)===!1&&(n.clearColor(le,Ze,je,ft),ne.copy(U))},reset:function(){g=!1,$=null,ne.set(-1,0,0,0)}}}function t(){let g=!1,U=null,$=null,ne=null;return{setTest:function(le){le?ue(n.DEPTH_TEST):ae(n.DEPTH_TEST)},setMask:function(le){U!==le&&!g&&(n.depthMask(le),U=le)},setFunc:function(le){if($!==le){switch(le){case gA:n.depthFunc(n.NEVER);break;case vA:n.depthFunc(n.ALWAYS);break;case yA:n.depthFunc(n.LESS);break;case Hl:n.depthFunc(n.LEQUAL);break;case _A:n.depthFunc(n.EQUAL);break;case xA:n.depthFunc(n.GEQUAL);break;case MA:n.depthFunc(n.GREATER);break;case wA:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}$=le}},setLocked:function(le){g=le},setClear:function(le){ne!==le&&(n.clearDepth(le),ne=le)},reset:function(){g=!1,U=null,$=null,ne=null}}}function i(){let g=!1,U=null,$=null,ne=null,le=null,Ze=null,je=null,ft=null,Rt=null;return{setTest:function(ct){g||(ct?ue(n.STENCIL_TEST):ae(n.STENCIL_TEST))},setMask:function(ct){U!==ct&&!g&&(n.stencilMask(ct),U=ct)},setFunc:function(ct,wt,bt){($!==ct||ne!==wt||le!==bt)&&(n.stencilFunc(ct,wt,bt),$=ct,ne=wt,le=bt)},setOp:function(ct,wt,bt){(Ze!==ct||je!==wt||ft!==bt)&&(n.stencilOp(ct,wt,bt),Ze=ct,je=wt,ft=bt)},setLocked:function(ct){g=ct},setClear:function(ct){Rt!==ct&&(n.clearStencil(ct),Rt=ct)},reset:function(){g=!1,U=null,$=null,ne=null,le=null,Ze=null,je=null,ft=null,Rt=null}}}let r=new e,s=new t,o=new i,a=new WeakMap,c=new WeakMap,l={},u={},d=new WeakMap,h=[],m=null,v=!1,_=null,p=null,f=null,S=null,M=null,E=null,I=null,A=new $e(0,0,0),T=0,R=!1,w=null,y=null,N=null,F=null,D=null,G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,Z=0,J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(J)[1]),W=Z>=1):J.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),W=Z>=2);let H=null,ee={},Q=n.getParameter(n.SCISSOR_BOX),pe=n.getParameter(n.VIEWPORT),We=new Ft().fromArray(Q),at=new Ft().fromArray(pe);function j(g,U,$,ne){let le=new Uint8Array(4),Ze=n.createTexture();n.bindTexture(g,Ze),n.texParameteri(g,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(g,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let je=0;je<$;je++)g===n.TEXTURE_3D||g===n.TEXTURE_2D_ARRAY?n.texImage3D(U,0,n.RGBA,1,1,ne,0,n.RGBA,n.UNSIGNED_BYTE,le):n.texImage2D(U+je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,le);return Ze}let te={};te[n.TEXTURE_2D]=j(n.TEXTURE_2D,n.TEXTURE_2D,1),te[n.TEXTURE_CUBE_MAP]=j(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[n.TEXTURE_2D_ARRAY]=j(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),te[n.TEXTURE_3D]=j(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ue(n.DEPTH_TEST),s.setFunc(Hl),Se(!1),st(l0),ue(n.CULL_FACE),be(Zi);function ue(g){l[g]!==!0&&(n.enable(g),l[g]=!0)}function ae(g){l[g]!==!1&&(n.disable(g),l[g]=!1)}function Pe(g,U){return u[g]!==U?(n.bindFramebuffer(g,U),u[g]=U,g===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=U),g===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=U),!0):!1}function Oe(g,U){let $=h,ne=!1;if(g){$=d.get(U),$===void 0&&($=[],d.set(U,$));let le=g.textures;if($.length!==le.length||$[0]!==n.COLOR_ATTACHMENT0){for(let Ze=0,je=le.length;Ze<je;Ze++)$[Ze]=n.COLOR_ATTACHMENT0+Ze;$.length=le.length,ne=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,ne=!0);ne&&n.drawBuffers($)}function qe(g){return m!==g?(n.useProgram(g),m=g,!0):!1}let L={[Ar]:n.FUNC_ADD,[QC]:n.FUNC_SUBTRACT,[eA]:n.FUNC_REVERSE_SUBTRACT};L[tA]=n.MIN,L[nA]=n.MAX;let ze={[iA]:n.ZERO,[rA]:n.ONE,[sA]:n.SRC_COLOR,[Kf]:n.SRC_ALPHA,[dA]:n.SRC_ALPHA_SATURATE,[lA]:n.DST_COLOR,[aA]:n.DST_ALPHA,[oA]:n.ONE_MINUS_SRC_COLOR,[Jf]:n.ONE_MINUS_SRC_ALPHA,[uA]:n.ONE_MINUS_DST_COLOR,[cA]:n.ONE_MINUS_DST_ALPHA,[hA]:n.CONSTANT_COLOR,[fA]:n.ONE_MINUS_CONSTANT_COLOR,[pA]:n.CONSTANT_ALPHA,[mA]:n.ONE_MINUS_CONSTANT_ALPHA};function be(g,U,$,ne,le,Ze,je,ft,Rt,ct){if(g===Zi){v===!0&&(ae(n.BLEND),v=!1);return}if(v===!1&&(ue(n.BLEND),v=!0),g!==JC){if(g!==_||ct!==R){if((p!==Ar||M!==Ar)&&(n.blendEquation(n.FUNC_ADD),p=Ar,M=Ar),ct)switch(g){case Ws:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case u0:n.blendFunc(n.ONE,n.ONE);break;case d0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case h0:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",g);break}else switch(g){case Ws:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case u0:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case d0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case h0:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",g);break}f=null,S=null,E=null,I=null,A.set(0,0,0),T=0,_=g,R=ct}return}le=le||U,Ze=Ze||$,je=je||ne,(U!==p||le!==M)&&(n.blendEquationSeparate(L[U],L[le]),p=U,M=le),($!==f||ne!==S||Ze!==E||je!==I)&&(n.blendFuncSeparate(ze[$],ze[ne],ze[Ze],ze[je]),f=$,S=ne,E=Ze,I=je),(ft.equals(A)===!1||Rt!==T)&&(n.blendColor(ft.r,ft.g,ft.b,Rt),A.copy(ft),T=Rt),_=g,R=!1}function vt(g,U){g.side===gi?ae(n.CULL_FACE):ue(n.CULL_FACE);let $=g.side===Jt;U&&($=!$),Se($),g.blending===Ws&&g.transparent===!1?be(Zi):be(g.blending,g.blendEquation,g.blendSrc,g.blendDst,g.blendEquationAlpha,g.blendSrcAlpha,g.blendDstAlpha,g.blendColor,g.blendAlpha,g.premultipliedAlpha),s.setFunc(g.depthFunc),s.setTest(g.depthTest),s.setMask(g.depthWrite),r.setMask(g.colorWrite);let ne=g.stencilWrite;o.setTest(ne),ne&&(o.setMask(g.stencilWriteMask),o.setFunc(g.stencilFunc,g.stencilRef,g.stencilFuncMask),o.setOp(g.stencilFail,g.stencilZFail,g.stencilZPass)),x(g.polygonOffset,g.polygonOffsetFactor,g.polygonOffsetUnits),g.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function Se(g){w!==g&&(g?n.frontFace(n.CW):n.frontFace(n.CCW),w=g)}function st(g){g!==YC?(ue(n.CULL_FACE),g!==y&&(g===l0?n.cullFace(n.BACK):g===ZC?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ae(n.CULL_FACE),y=g}function C(g){g!==N&&(W&&n.lineWidth(g),N=g)}function x(g,U,$){g?(ue(n.POLYGON_OFFSET_FILL),(F!==U||D!==$)&&(n.polygonOffset(U,$),F=U,D=$)):ae(n.POLYGON_OFFSET_FILL)}function z(g){g?ue(n.SCISSOR_TEST):ae(n.SCISSOR_TEST)}function q(g){g===void 0&&(g=n.TEXTURE0+G-1),H!==g&&(n.activeTexture(g),H=g)}function X(g,U,$){$===void 0&&(H===null?$=n.TEXTURE0+G-1:$=H);let ne=ee[$];ne===void 0&&(ne={type:void 0,texture:void 0},ee[$]=ne),(ne.type!==g||ne.texture!==U)&&(H!==$&&(n.activeTexture($),H=$),n.bindTexture(g,U||te[g]),ne.type=g,ne.texture=U)}function Y(){let g=ee[H];g!==void 0&&g.type!==void 0&&(n.bindTexture(g.type,null),g.type=void 0,g.texture=void 0)}function xe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function K(){try{n.compressedTexImage3D.apply(n,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function ve(){try{n.texSubImage2D.apply(n,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function Me(){try{n.texSubImage3D.apply(n,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function re(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function ce(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function Te(){try{n.texStorage2D.apply(n,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function de(){try{n.texStorage3D.apply(n,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function he(){try{n.texImage2D.apply(n,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function Xe(){try{n.texImage3D.apply(n,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function Ye(g){We.equals(g)===!1&&(n.scissor(g.x,g.y,g.z,g.w),We.copy(g))}function it(g){at.equals(g)===!1&&(n.viewport(g.x,g.y,g.z,g.w),at.copy(g))}function nt(g,U){let $=c.get(U);$===void 0&&($=new WeakMap,c.set(U,$));let ne=$.get(g);ne===void 0&&(ne=n.getUniformBlockIndex(U,g.name),$.set(g,ne))}function rt(g,U){let ne=c.get(U).get(g);a.get(U)!==ne&&(n.uniformBlockBinding(U,ne,g.__bindingPointIndex),a.set(U,ne))}function me(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},H=null,ee={},u={},d=new WeakMap,h=[],m=null,v=!1,_=null,p=null,f=null,S=null,M=null,E=null,I=null,A=new $e(0,0,0),T=0,R=!1,w=null,y=null,N=null,F=null,D=null,We.set(0,0,n.canvas.width,n.canvas.height),at.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ue,disable:ae,bindFramebuffer:Pe,drawBuffers:Oe,useProgram:qe,setBlending:be,setMaterial:vt,setFlipSided:Se,setCullFace:st,setLineWidth:C,setPolygonOffset:x,setScissorTest:z,activeTexture:q,bindTexture:X,unbindTexture:Y,compressedTexImage2D:xe,compressedTexImage3D:K,texImage2D:he,texImage3D:Xe,updateUBOMapping:nt,uniformBlockBinding:rt,texStorage2D:Te,texStorage3D:de,texSubImage2D:ve,texSubImage3D:Me,compressedTexSubImage2D:re,compressedTexSubImage3D:ce,scissor:Ye,viewport:it,reset:me}}function tN(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new _e,u=new WeakMap,d,h=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,x){return m?new OffscreenCanvas(C,x):Zl("canvas")}function _(C,x,z){let q=1,X=st(C);if((X.width>z||X.height>z)&&(q=z/Math.max(X.width,X.height)),q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let Y=Math.floor(q*X.width),xe=Math.floor(q*X.height);d===void 0&&(d=v(Y,xe));let K=x?v(Y,xe):d;return K.width=Y,K.height=xe,K.getContext("2d").drawImage(C,0,0,Y,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+Y+"x"+xe+")."),K}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),C;return C}function p(C){return C.generateMipmaps&&C.minFilter!==_n&&C.minFilter!==Nn}function f(C){n.generateMipmap(C)}function S(C,x,z,q,X=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Y=x;if(x===n.RED&&(z===n.FLOAT&&(Y=n.R32F),z===n.HALF_FLOAT&&(Y=n.R16F),z===n.UNSIGNED_BYTE&&(Y=n.R8)),x===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(Y=n.R8UI),z===n.UNSIGNED_SHORT&&(Y=n.R16UI),z===n.UNSIGNED_INT&&(Y=n.R32UI),z===n.BYTE&&(Y=n.R8I),z===n.SHORT&&(Y=n.R16I),z===n.INT&&(Y=n.R32I)),x===n.RG&&(z===n.FLOAT&&(Y=n.RG32F),z===n.HALF_FLOAT&&(Y=n.RG16F),z===n.UNSIGNED_BYTE&&(Y=n.RG8)),x===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(Y=n.RG8UI),z===n.UNSIGNED_SHORT&&(Y=n.RG16UI),z===n.UNSIGNED_INT&&(Y=n.RG32UI),z===n.BYTE&&(Y=n.RG8I),z===n.SHORT&&(Y=n.RG16I),z===n.INT&&(Y=n.RG32I)),x===n.RGB&&z===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),x===n.RGBA){let xe=X?$l:ut.getTransfer(q);z===n.FLOAT&&(Y=n.RGBA32F),z===n.HALF_FLOAT&&(Y=n.RGBA16F),z===n.UNSIGNED_BYTE&&(Y=xe===ht?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function M(C,x){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==_n&&C.minFilter!==Nn?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function E(C){let x=C.target;x.removeEventListener("dispose",E),A(x),x.isVideoTexture&&u.delete(x)}function I(C){let x=C.target;x.removeEventListener("dispose",I),R(x)}function A(C){let x=i.get(C);if(x.__webglInit===void 0)return;let z=C.source,q=h.get(z);if(q){let X=q[x.__cacheKey];X.usedTimes--,X.usedTimes===0&&T(C),Object.keys(q).length===0&&h.delete(z)}i.remove(C)}function T(C){let x=i.get(C);n.deleteTexture(x.__webglTexture);let z=C.source,q=h.get(z);delete q[x.__cacheKey],o.memory.textures--}function R(C){let x=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let X=0;X<x.__webglFramebuffer[q].length;X++)n.deleteFramebuffer(x.__webglFramebuffer[q][X]);else n.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)n.deleteFramebuffer(x.__webglFramebuffer[q]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let z=C.textures;for(let q=0,X=z.length;q<X;q++){let Y=i.get(z[q]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(z[q])}i.remove(C)}let w=0;function y(){w=0}function N(){let C=w;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),w+=1,C}function F(C){let x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function D(C,x){let z=i.get(C);if(C.isVideoTexture&&vt(C),C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){let q=C.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{We(z,C,x);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+x)}function G(C,x){let z=i.get(C);if(C.version>0&&z.__version!==C.version){We(z,C,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+x)}function W(C,x){let z=i.get(C);if(C.version>0&&z.__version!==C.version){We(z,C,x);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+x)}function Z(C,x){let z=i.get(C);if(C.version>0&&z.__version!==C.version){at(z,C,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+x)}let J={[tp]:n.REPEAT,[Ir]:n.CLAMP_TO_EDGE,[np]:n.MIRRORED_REPEAT},H={[_n]:n.NEAREST,[PA]:n.NEAREST_MIPMAP_NEAREST,[_l]:n.NEAREST_MIPMAP_LINEAR,[Nn]:n.LINEAR,[_f]:n.LINEAR_MIPMAP_NEAREST,[Rr]:n.LINEAR_MIPMAP_LINEAR},ee={[$A]:n.NEVER,[JA]:n.ALWAYS,[qA]:n.LESS,[j_]:n.LEQUAL,[XA]:n.EQUAL,[KA]:n.GEQUAL,[YA]:n.GREATER,[ZA]:n.NOTEQUAL};function Q(C,x){if(x.type===Yi&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Nn||x.magFilter===_f||x.magFilter===_l||x.magFilter===Rr||x.minFilter===Nn||x.minFilter===_f||x.minFilter===_l||x.minFilter===Rr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,J[x.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,J[x.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,J[x.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,H[x.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,H[x.minFilter]),x.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,ee[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===_n||x.minFilter!==_l&&x.minFilter!==Rr||x.type===Yi&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function pe(C,x){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",E));let q=x.source,X=h.get(q);X===void 0&&(X={},h.set(q,X));let Y=F(x);if(Y!==C.__cacheKey){X[Y]===void 0&&(X[Y]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),X[Y].usedTimes++;let xe=X[C.__cacheKey];xe!==void 0&&(X[C.__cacheKey].usedTimes--,xe.usedTimes===0&&T(x)),C.__cacheKey=Y,C.__webglTexture=X[Y].texture}return z}function We(C,x,z){let q=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=n.TEXTURE_3D);let X=pe(C,x),Y=x.source;t.bindTexture(q,C.__webglTexture,n.TEXTURE0+z);let xe=i.get(Y);if(Y.version!==xe.__version||X===!0){t.activeTexture(n.TEXTURE0+z);let K=ut.getPrimaries(ut.workingColorSpace),ve=x.colorSpace===Xi?null:ut.getPrimaries(x.colorSpace),Me=x.colorSpace===Xi||K===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let re=_(x.image,!1,r.maxTextureSize);re=Se(x,re);let ce=s.convert(x.format,x.colorSpace),Te=s.convert(x.type),de=S(x.internalFormat,ce,Te,x.colorSpace,x.isVideoTexture);Q(q,x);let he,Xe=x.mipmaps,Ye=x.isVideoTexture!==!0&&de!==G_,it=xe.__version===void 0||X===!0,nt=Y.dataReady,rt=M(x,re);if(x.isDepthTexture)de=n.DEPTH_COMPONENT16,x.type===Yi?de=n.DEPTH_COMPONENT32F:x.type===Zs?de=n.DEPTH_COMPONENT24:x.type===Aa&&(de=n.DEPTH24_STENCIL8),it&&(Ye?t.texStorage2D(n.TEXTURE_2D,1,de,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,de,re.width,re.height,0,ce,Te,null));else if(x.isDataTexture)if(Xe.length>0){Ye&&it&&t.texStorage2D(n.TEXTURE_2D,rt,de,Xe[0].width,Xe[0].height);for(let me=0,g=Xe.length;me<g;me++)he=Xe[me],Ye?nt&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,he.width,he.height,ce,Te,he.data):t.texImage2D(n.TEXTURE_2D,me,de,he.width,he.height,0,ce,Te,he.data);x.generateMipmaps=!1}else Ye?(it&&t.texStorage2D(n.TEXTURE_2D,rt,de,re.width,re.height),nt&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,re.width,re.height,ce,Te,re.data)):t.texImage2D(n.TEXTURE_2D,0,de,re.width,re.height,0,ce,Te,re.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ye&&it&&t.texStorage3D(n.TEXTURE_2D_ARRAY,rt,de,Xe[0].width,Xe[0].height,re.depth);for(let me=0,g=Xe.length;me<g;me++)he=Xe[me],x.format!==Yn?ce!==null?Ye?nt&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,he.width,he.height,re.depth,ce,he.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,me,de,he.width,he.height,re.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?nt&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,he.width,he.height,re.depth,ce,Te,he.data):t.texImage3D(n.TEXTURE_2D_ARRAY,me,de,he.width,he.height,re.depth,0,ce,Te,he.data)}else{Ye&&it&&t.texStorage2D(n.TEXTURE_2D,rt,de,Xe[0].width,Xe[0].height);for(let me=0,g=Xe.length;me<g;me++)he=Xe[me],x.format!==Yn?ce!==null?Ye?nt&&t.compressedTexSubImage2D(n.TEXTURE_2D,me,0,0,he.width,he.height,ce,he.data):t.compressedTexImage2D(n.TEXTURE_2D,me,de,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?nt&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,he.width,he.height,ce,Te,he.data):t.texImage2D(n.TEXTURE_2D,me,de,he.width,he.height,0,ce,Te,he.data)}else if(x.isDataArrayTexture)Ye?(it&&t.texStorage3D(n.TEXTURE_2D_ARRAY,rt,de,re.width,re.height,re.depth),nt&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ce,Te,re.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,de,re.width,re.height,re.depth,0,ce,Te,re.data);else if(x.isData3DTexture)Ye?(it&&t.texStorage3D(n.TEXTURE_3D,rt,de,re.width,re.height,re.depth),nt&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ce,Te,re.data)):t.texImage3D(n.TEXTURE_3D,0,de,re.width,re.height,re.depth,0,ce,Te,re.data);else if(x.isFramebufferTexture){if(it)if(Ye)t.texStorage2D(n.TEXTURE_2D,rt,de,re.width,re.height);else{let me=re.width,g=re.height;for(let U=0;U<rt;U++)t.texImage2D(n.TEXTURE_2D,U,de,me,g,0,ce,Te,null),me>>=1,g>>=1}}else if(Xe.length>0){if(Ye&&it){let me=st(Xe[0]);t.texStorage2D(n.TEXTURE_2D,rt,de,me.width,me.height)}for(let me=0,g=Xe.length;me<g;me++)he=Xe[me],Ye?nt&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,ce,Te,he):t.texImage2D(n.TEXTURE_2D,me,de,ce,Te,he);x.generateMipmaps=!1}else if(Ye){if(it){let me=st(re);t.texStorage2D(n.TEXTURE_2D,rt,de,me.width,me.height)}nt&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce,Te,re)}else t.texImage2D(n.TEXTURE_2D,0,de,ce,Te,re);p(x)&&f(q),xe.__version=Y.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function at(C,x,z){if(x.image.length!==6)return;let q=pe(C,x),X=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+z);let Y=i.get(X);if(X.version!==Y.__version||q===!0){t.activeTexture(n.TEXTURE0+z);let xe=ut.getPrimaries(ut.workingColorSpace),K=x.colorSpace===Xi?null:ut.getPrimaries(x.colorSpace),ve=x.colorSpace===Xi||xe===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let Me=x.isCompressedTexture||x.image[0].isCompressedTexture,re=x.image[0]&&x.image[0].isDataTexture,ce=[];for(let g=0;g<6;g++)!Me&&!re?ce[g]=_(x.image[g],!0,r.maxCubemapSize):ce[g]=re?x.image[g].image:x.image[g],ce[g]=Se(x,ce[g]);let Te=ce[0],de=s.convert(x.format,x.colorSpace),he=s.convert(x.type),Xe=S(x.internalFormat,de,he,x.colorSpace),Ye=x.isVideoTexture!==!0,it=Y.__version===void 0||q===!0,nt=X.dataReady,rt=M(x,Te);Q(n.TEXTURE_CUBE_MAP,x);let me;if(Me){Ye&&it&&t.texStorage2D(n.TEXTURE_CUBE_MAP,rt,Xe,Te.width,Te.height);for(let g=0;g<6;g++){me=ce[g].mipmaps;for(let U=0;U<me.length;U++){let $=me[U];x.format!==Yn?de!==null?Ye?nt&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+g,U,0,0,$.width,$.height,de,$.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+g,U,Xe,$.width,$.height,0,$.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?nt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+g,U,0,0,$.width,$.height,de,he,$.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+g,U,Xe,$.width,$.height,0,de,he,$.data)}}}else{if(me=x.mipmaps,Ye&&it){me.length>0&&rt++;let g=st(ce[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,rt,Xe,g.width,g.height)}for(let g=0;g<6;g++)if(re){Ye?nt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+g,0,0,0,ce[g].width,ce[g].height,de,he,ce[g].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+g,0,Xe,ce[g].width,ce[g].height,0,de,he,ce[g].data);for(let U=0;U<me.length;U++){let ne=me[U].image[g].image;Ye?nt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+g,U+1,0,0,ne.width,ne.height,de,he,ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+g,U+1,Xe,ne.width,ne.height,0,de,he,ne.data)}}else{Ye?nt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+g,0,0,0,de,he,ce[g]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+g,0,Xe,de,he,ce[g]);for(let U=0;U<me.length;U++){let $=me[U];Ye?nt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+g,U+1,0,0,de,he,$.image[g]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+g,U+1,Xe,de,he,$.image[g])}}}p(x)&&f(n.TEXTURE_CUBE_MAP),Y.__version=X.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function j(C,x,z,q,X,Y){let xe=s.convert(z.format,z.colorSpace),K=s.convert(z.type),ve=S(z.internalFormat,xe,K,z.colorSpace);if(!i.get(x).__hasExternalTextures){let re=Math.max(1,x.width>>Y),ce=Math.max(1,x.height>>Y);X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?t.texImage3D(X,Y,ve,re,ce,x.depth,0,xe,K,null):t.texImage2D(X,Y,ve,re,ce,0,xe,K,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),be(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,X,i.get(z).__webglTexture,0,ze(x)):(X===n.TEXTURE_2D||X>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,X,i.get(z).__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function te(C,x,z){if(n.bindRenderbuffer(n.RENDERBUFFER,C),x.depthBuffer&&!x.stencilBuffer){let q=n.DEPTH_COMPONENT24;if(z||be(x)){let X=x.depthTexture;X&&X.isDepthTexture&&(X.type===Yi?q=n.DEPTH_COMPONENT32F:X.type===Zs&&(q=n.DEPTH_COMPONENT24));let Y=ze(x);be(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Y,q,x.width,x.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,Y,q,x.width,x.height)}else n.renderbufferStorage(n.RENDERBUFFER,q,x.width,x.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,C)}else if(x.depthBuffer&&x.stencilBuffer){let q=ze(x);z&&be(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,q,n.DEPTH24_STENCIL8,x.width,x.height):be(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,q,n.DEPTH24_STENCIL8,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,C)}else{let q=x.textures;for(let X=0;X<q.length;X++){let Y=q[X],xe=s.convert(Y.format,Y.colorSpace),K=s.convert(Y.type),ve=S(Y.internalFormat,xe,K,Y.colorSpace),Me=ze(x);z&&be(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,ve,x.width,x.height):be(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Me,ve,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ve,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ue(C,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),D(x.depthTexture,0);let q=i.get(x.depthTexture).__webglTexture,X=ze(x);if(x.depthTexture.format===js)be(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,q,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,q,0);else if(x.depthTexture.format===ya)be(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,q,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function ae(C){let x=i.get(C),z=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!x.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");ue(x.__webglFramebuffer,C)}else if(z){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]=n.createRenderbuffer(),te(x.__webglDepthbuffer[q],C,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),te(x.__webglDepthbuffer,C,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(C,x,z){let q=i.get(C);x!==void 0&&j(q.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&ae(C)}function Oe(C){let x=C.texture,z=i.get(C),q=i.get(x);C.addEventListener("dispose",I);let X=C.textures,Y=C.isWebGLCubeRenderTarget===!0,xe=X.length>1;if(xe||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=x.version,o.memory.textures++),Y){z.__webglFramebuffer=[];for(let K=0;K<6;K++)if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer[K]=[];for(let ve=0;ve<x.mipmaps.length;ve++)z.__webglFramebuffer[K][ve]=n.createFramebuffer()}else z.__webglFramebuffer[K]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer=[];for(let K=0;K<x.mipmaps.length;K++)z.__webglFramebuffer[K]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(xe)for(let K=0,ve=X.length;K<ve;K++){let Me=i.get(X[K]);Me.__webglTexture===void 0&&(Me.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&be(C)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let K=0;K<X.length;K++){let ve=X[K];z.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[K]);let Me=s.convert(ve.format,ve.colorSpace),re=s.convert(ve.type),ce=S(ve.internalFormat,Me,re,ve.colorSpace,C.isXRRenderTarget===!0),Te=ze(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,ce,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,z.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),te(z.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Q(n.TEXTURE_CUBE_MAP,x);for(let K=0;K<6;K++)if(x.mipmaps&&x.mipmaps.length>0)for(let ve=0;ve<x.mipmaps.length;ve++)j(z.__webglFramebuffer[K][ve],C,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ve);else j(z.__webglFramebuffer[K],C,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);p(x)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let K=0,ve=X.length;K<ve;K++){let Me=X[K],re=i.get(Me);t.bindTexture(n.TEXTURE_2D,re.__webglTexture),Q(n.TEXTURE_2D,Me),j(z.__webglFramebuffer,C,Me,n.COLOR_ATTACHMENT0+K,n.TEXTURE_2D,0),p(Me)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let K=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(K=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(K,q.__webglTexture),Q(K,x),x.mipmaps&&x.mipmaps.length>0)for(let ve=0;ve<x.mipmaps.length;ve++)j(z.__webglFramebuffer[ve],C,x,n.COLOR_ATTACHMENT0,K,ve);else j(z.__webglFramebuffer,C,x,n.COLOR_ATTACHMENT0,K,0);p(x)&&f(K),t.unbindTexture()}C.depthBuffer&&ae(C)}function qe(C){let x=C.textures;for(let z=0,q=x.length;z<q;z++){let X=x[z];if(p(X)){let Y=C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,xe=i.get(X).__webglTexture;t.bindTexture(Y,xe),f(Y),t.unbindTexture()}}}function L(C){if(C.samples>0&&be(C)===!1){let x=C.textures,z=C.width,q=C.height,X=n.COLOR_BUFFER_BIT,Y=[],xe=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=i.get(C),ve=x.length>1;if(ve)for(let Me=0;Me<x.length;Me++)t.bindFramebuffer(n.FRAMEBUFFER,K.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,K.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,K.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,K.__webglFramebuffer);for(let Me=0;Me<x.length;Me++){Y.push(n.COLOR_ATTACHMENT0+Me),C.depthBuffer&&Y.push(xe);let re=K.__ignoreDepthValues!==void 0?K.__ignoreDepthValues:!1;if(re===!1&&(C.depthBuffer&&(X|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&K.__isTransmissionRenderTarget!==!0&&(X|=n.STENCIL_BUFFER_BIT)),ve&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,K.__webglColorRenderbuffer[Me]),re===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[xe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[xe])),ve){let ce=i.get(x[Me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ce,0)}n.blitFramebuffer(0,0,z,q,0,0,z,q,X,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Y)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ve)for(let Me=0;Me<x.length;Me++){t.bindFramebuffer(n.FRAMEBUFFER,K.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,K.__webglColorRenderbuffer[Me]);let re=i.get(x[Me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,K.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,K.__webglMultisampledFramebuffer)}}function ze(C){return Math.min(r.maxSamples,C.samples)}function be(C){let x=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function vt(C){let x=o.render.frame;u.get(C)!==x&&(u.set(C,x),C.update())}function Se(C,x){let z=C.colorSpace,q=C.format,X=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==er&&z!==Xi&&(ut.getTransfer(z)===ht?(q!==Yn||X!==Ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),x}function st(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=y,this.setTexture2D=D,this.setTexture2DArray=G,this.setTexture3D=W,this.setTextureCube=Z,this.rebindTextures=Pe,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=L,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=j,this.useMultisampledRTT=be}function nN(n,e){function t(i,r=Xi){let s,o=ut.getTransfer(r);if(i===Ji)return n.UNSIGNED_BYTE;if(i===k_)return n.UNSIGNED_SHORT_4_4_4_4;if(i===B_)return n.UNSIGNED_SHORT_5_5_5_1;if(i===LA)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===NA)return n.BYTE;if(i===OA)return n.SHORT;if(i===F_)return n.UNSIGNED_SHORT;if(i===U_)return n.INT;if(i===Zs)return n.UNSIGNED_INT;if(i===Yi)return n.FLOAT;if(i===Gl)return n.HALF_FLOAT;if(i===FA)return n.ALPHA;if(i===UA)return n.RGB;if(i===Yn)return n.RGBA;if(i===kA)return n.LUMINANCE;if(i===BA)return n.LUMINANCE_ALPHA;if(i===js)return n.DEPTH_COMPONENT;if(i===ya)return n.DEPTH_STENCIL;if(i===VA)return n.RED;if(i===V_)return n.RED_INTEGER;if(i===zA)return n.RG;if(i===z_)return n.RG_INTEGER;if(i===H_)return n.RGBA_INTEGER;if(i===xf||i===Mf||i===wf||i===bf)if(o===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===xf)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Mf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===bf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===xf)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Mf)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wf)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===bf)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===p0||i===m0||i===g0||i===v0)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===p0)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===m0)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===g0)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===v0)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===G_)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===y0||i===_0)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===y0)return o===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===_0)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===x0||i===M0||i===w0||i===b0||i===S0||i===E0||i===T0||i===C0||i===A0||i===D0||i===I0||i===R0||i===P0||i===N0)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===x0)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===M0)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===w0)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===b0)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===S0)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===E0)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===T0)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===C0)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===A0)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===D0)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===I0)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===R0)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===P0)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===N0)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Sf||i===O0||i===L0)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Sf)return o===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===O0)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===L0)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===HA||i===F0||i===U0||i===k0)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Sf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===F0)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===U0)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===k0)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Aa?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var gp=class extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Gs=class extends _i{constructor(){super(),this.isGroup=!0,this.type="Group"}},iN={type:"move"},va=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,i),f=this._getHandJoint(l,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,v=.005;l.inputState.pinching&&h>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(iN)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Gs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},rN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sN=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,vp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new Br,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){let i=t.cameras[0].viewport,r=new Kn({vertexShader:rN,fragmentShader:sN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Xt(new Qs(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}},yp=class extends Zn{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,m=null,v=null,_=new vp,p=t.getContextAttributes(),f=null,S=null,M=[],E=[],I=new _e,A=null,T=new qt;T.layers.enable(1),T.viewport=new Ft;let R=new qt;R.layers.enable(2),R.viewport=new Ft;let w=[T,R],y=new gp;y.layers.enable(1),y.layers.enable(2);let N=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let te=M[j];return te===void 0&&(te=new va,M[j]=te),te.getTargetRaySpace()},this.getControllerGrip=function(j){let te=M[j];return te===void 0&&(te=new va,M[j]=te),te.getGripSpace()},this.getHand=function(j){let te=M[j];return te===void 0&&(te=new va,M[j]=te),te.getHandSpace()};function D(j){let te=E.indexOf(j.inputSource);if(te===-1)return;let ue=M[te];ue!==void 0&&(ue.update(j.inputSource,j.frame,l||o),ue.dispatchEvent({type:j.type,data:j.inputSource}))}function G(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",W);for(let j=0;j<M.length;j++){let te=E[j];te!==null&&(E[j]=null,M[j].disconnect(te))}N=null,F=null,_.reset(),e.setRenderTarget(f),m=null,h=null,d=null,r=null,S=null,at.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=function(j){return Ra(this,null,function*(){if(r=j,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",G),r.addEventListener("inputsourceschange",W),p.xrCompatible!==!0&&(yield t.makeXRCompatible()),A=e.getPixelRatio(),e.getSize(I),r.renderState.layers===void 0){let te={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new yi(m.framebufferWidth,m.framebufferHeight,{format:Yn,type:Ji,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let te=null,ue=null,ae=null;p.depth&&(ae=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=p.stencil?ya:js,ue=p.stencil?Aa:Zs);let Pe={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(Pe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new yi(h.textureWidth,h.textureHeight,{format:Yn,type:Ji,depthTexture:new ou(h.textureWidth,h.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});let Oe=e.properties.get(S);Oe.__ignoreDepthValues=h.ignoreDepthValues}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=yield r.requestReferenceSpace(a),at.setContext(r),at.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function W(j){for(let te=0;te<j.removed.length;te++){let ue=j.removed[te],ae=E.indexOf(ue);ae>=0&&(E[ae]=null,M[ae].disconnect(ue))}for(let te=0;te<j.added.length;te++){let ue=j.added[te],ae=E.indexOf(ue);if(ae===-1){for(let Oe=0;Oe<M.length;Oe++)if(Oe>=E.length){E.push(ue),ae=Oe;break}else if(E[Oe]===null){E[Oe]=ue,ae=Oe;break}if(ae===-1)break}let Pe=M[ae];Pe&&Pe.connect(ue)}}let Z=new P,J=new P;function H(j,te,ue){Z.setFromMatrixPosition(te.matrixWorld),J.setFromMatrixPosition(ue.matrixWorld);let ae=Z.distanceTo(J),Pe=te.projectionMatrix.elements,Oe=ue.projectionMatrix.elements,qe=Pe[14]/(Pe[10]-1),L=Pe[14]/(Pe[10]+1),ze=(Pe[9]+1)/Pe[5],be=(Pe[9]-1)/Pe[5],vt=(Pe[8]-1)/Pe[0],Se=(Oe[8]+1)/Oe[0],st=qe*vt,C=qe*Se,x=ae/(-vt+Se),z=x*-vt;te.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(z),j.translateZ(x),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();let q=qe+x,X=L+x,Y=st-z,xe=C+(ae-z),K=ze*L/X*q,ve=be*L/X*q;j.projectionMatrix.makePerspective(Y,xe,K,ve,q,X),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function ee(j,te){te===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(te.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;_.texture!==null&&(j.near=_.depthNear,j.far=_.depthFar),y.near=R.near=T.near=j.near,y.far=R.far=T.far=j.far,(N!==y.near||F!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),N=y.near,F=y.far,T.near=N,T.far=F,R.near=N,R.far=F,T.updateProjectionMatrix(),R.updateProjectionMatrix(),j.updateProjectionMatrix());let te=j.parent,ue=y.cameras;ee(y,te);for(let ae=0;ae<ue.length;ae++)ee(ue[ae],te);ue.length===2?H(y,T,R):y.projectionMatrix.copy(T.projectionMatrix),Q(j,y,te)};function Q(j,te,ue){ue===null?j.matrix.copy(te.matrixWorld):(j.matrix.copy(ue.matrixWorld),j.matrix.invert(),j.matrix.multiply(te.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(te.projectionMatrix),j.projectionMatrixInverse.copy(te.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=_a*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function(j){c=j,h!==null&&(h.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null};let pe=null;function We(j,te){if(u=te.getViewerPose(l||o),v=te,u!==null){let ue=u.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let ae=!1;ue.length!==y.cameras.length&&(y.cameras.length=0,ae=!0);for(let Oe=0;Oe<ue.length;Oe++){let qe=ue[Oe],L=null;if(m!==null)L=m.getViewport(qe);else{let be=d.getViewSubImage(h,qe);L=be.viewport,Oe===0&&(e.setRenderTargetTextures(S,be.colorTexture,h.ignoreDepthValues?void 0:be.depthStencilTexture),e.setRenderTarget(S))}let ze=w[Oe];ze===void 0&&(ze=new qt,ze.layers.enable(Oe),ze.viewport=new Ft,w[Oe]=ze),ze.matrix.fromArray(qe.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(qe.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(L.x,L.y,L.width,L.height),Oe===0&&(y.matrix.copy(ze.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ae===!0&&y.cameras.push(ze)}let Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){let Oe=d.getDepthInformation(ue[0]);Oe&&Oe.isValid&&Oe.texture&&_.init(e,Oe,r.renderState)}}for(let ue=0;ue<M.length;ue++){let ae=E[ue],Pe=M[ue];ae!==null&&Pe!==void 0&&Pe.update(ae,te,l||o)}_.render(e,y),pe&&pe(j,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),v=null}let at=new Z_;at.setAnimationLoop(We),this.setAnimationLoop=function(j){pe=j},this.dispose=function(){}}},Tr=new Nr,oN=new Tt;function aN(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,Y_(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,S,M,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),d(p,f)):f.isMeshPhongMaterial?(s(p,f),u(p,f)):f.isMeshStandardMaterial?(s(p,f),h(p,f),f.isMeshPhysicalMaterial&&m(p,f,E)):f.isMeshMatcapMaterial?(s(p,f),v(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),_(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?c(p,f,S,M):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Jt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Jt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let S=e.get(f),M=S.envMap,E=S.envMapRotation;if(M&&(p.envMap.value=M,Tr.copy(E),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),p.envMapRotation.value.setFromMatrix4(oN.makeRotationFromEuler(Tr)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;let I=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*I,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,S,M){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*S,p.scale.value=M*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,S){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Jt&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){let S=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function cN(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,M){let E=M.program;i.uniformBlockBinding(S,E)}function l(S,M){let E=r[S.id];E===void 0&&(v(S),E=u(S),r[S.id]=E,S.addEventListener("dispose",p));let I=M.program;i.updateUBOMapping(S,I);let A=e.render.frame;s[S.id]!==A&&(h(S),s[S.id]=A)}function u(S){let M=d();S.__bindingPointIndex=M;let E=n.createBuffer(),I=S.__size,A=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,I,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,E),E}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){let M=r[S.id],E=S.uniforms,I=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let A=0,T=E.length;A<T;A++){let R=Array.isArray(E[A])?E[A]:[E[A]];for(let w=0,y=R.length;w<y;w++){let N=R[w];if(m(N,A,w,I)===!0){let F=N.__offset,D=Array.isArray(N.value)?N.value:[N.value],G=0;for(let W=0;W<D.length;W++){let Z=D[W],J=_(Z);typeof Z=="number"||typeof Z=="boolean"?(N.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,F+G,N.__data)):Z.isMatrix3?(N.__data[0]=Z.elements[0],N.__data[1]=Z.elements[1],N.__data[2]=Z.elements[2],N.__data[3]=0,N.__data[4]=Z.elements[3],N.__data[5]=Z.elements[4],N.__data[6]=Z.elements[5],N.__data[7]=0,N.__data[8]=Z.elements[6],N.__data[9]=Z.elements[7],N.__data[10]=Z.elements[8],N.__data[11]=0):(Z.toArray(N.__data,G),G+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(S,M,E,I){let A=S.value,T=M+"_"+E;if(I[T]===void 0)return typeof A=="number"||typeof A=="boolean"?I[T]=A:I[T]=A.clone(),!0;{let R=I[T];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return I[T]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function v(S){let M=S.uniforms,E=0,I=16;for(let T=0,R=M.length;T<R;T++){let w=Array.isArray(M[T])?M[T]:[M[T]];for(let y=0,N=w.length;y<N;y++){let F=w[y],D=Array.isArray(F.value)?F.value:[F.value];for(let G=0,W=D.length;G<W;G++){let Z=D[G],J=_(Z),H=E%I;H!==0&&I-H<J.boundary&&(E+=I-H),F.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=E,E+=J.storage}}}let A=E%I;return A>0&&(E+=I-A),S.__size=E,S.__cache={},this}function _(S){let M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function p(S){let M=S.target;M.removeEventListener("dispose",p);let E=o.indexOf(M.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function f(){for(let S in r)n.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:c,update:l,dispose:f}}var au=class{constructor(e={}){let{canvas:t=mD(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;let m=new Uint32Array(4),v=new Int32Array(4),_=null,p=null,f=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qn,this._useLegacyLights=!1,this.toneMapping=Ki,this.toneMappingExposure=1;let M=this,E=!1,I=0,A=0,T=null,R=-1,w=null,y=new Ft,N=new Ft,F=null,D=new $e(0),G=0,W=t.width,Z=t.height,J=1,H=null,ee=null,Q=new Ft(0,0,W,Z),pe=new Ft(0,0,W,Z),We=!1,at=new ba,j=!1,te=!1,ue=new Tt,ae=new _e,Pe=new P,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function qe(){return T===null?J:1}let L=i;function ze(b,O){let B=t.getContext(b,O);return B!==null?B:null}try{let b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Rp}`),t.addEventListener("webglcontextlost",U,!1),t.addEventListener("webglcontextrestored",$,!1),t.addEventListener("webglcontextcreationerror",ne,!1),L===null){let O="webgl2";if(L=ze(O,b),L===null)throw ze(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let be,vt,Se,st,C,x,z,q,X,Y,xe,K,ve,Me,re,ce,Te,de,he,Xe,Ye,it,nt,rt;function me(){be=new CR(L),be.init(),vt=new MR(L,be,e),it=new nN(L,be),Se=new eN(L),st=new IR(L),C=new HP,x=new tN(L,be,Se,C,vt,it,st),z=new bR(M),q=new TR(M),X=new FD(L),nt=new _R(L,X),Y=new AR(L,X,st,nt),xe=new PR(L,Y,X,st),he=new RR(L,vt,x),ce=new wR(C),K=new zP(M,z,q,be,vt,nt,ce),ve=new aN(M,C),Me=new WP,re=new ZP(be),de=new yR(M,z,q,Se,xe,h,c),Te=new QP(M,xe,vt),rt=new cN(L,st,vt,Se),Xe=new xR(L,be,st),Ye=new DR(L,be,st),st.programs=K.programs,M.capabilities=vt,M.extensions=be,M.properties=C,M.renderLists=Me,M.shadowMap=Te,M.state=Se,M.info=st}me();let g=new yp(M,L);this.xr=g,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let b=be.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=be.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(b){b!==void 0&&(J=b,this.setSize(W,Z,!1))},this.getSize=function(b){return b.set(W,Z)},this.setSize=function(b,O,B=!0){if(g.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=b,Z=O,t.width=Math.floor(b*J),t.height=Math.floor(O*J),B===!0&&(t.style.width=b+"px",t.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(W*J,Z*J).floor()},this.setDrawingBufferSize=function(b,O,B){W=b,Z=O,J=B,t.width=Math.floor(b*B),t.height=Math.floor(O*B),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(y)},this.getViewport=function(b){return b.copy(Q)},this.setViewport=function(b,O,B,V){b.isVector4?Q.set(b.x,b.y,b.z,b.w):Q.set(b,O,B,V),Se.viewport(y.copy(Q).multiplyScalar(J).round())},this.getScissor=function(b){return b.copy(pe)},this.setScissor=function(b,O,B,V){b.isVector4?pe.set(b.x,b.y,b.z,b.w):pe.set(b,O,B,V),Se.scissor(N.copy(pe).multiplyScalar(J).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(b){Se.setScissorTest(We=b)},this.setOpaqueSort=function(b){H=b},this.setTransparentSort=function(b){ee=b},this.getClearColor=function(b){return b.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor.apply(de,arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha.apply(de,arguments)},this.clear=function(b=!0,O=!0,B=!0){let V=0;if(b){let k=!1;if(T!==null){let oe=T.texture.format;k=oe===H_||oe===z_||oe===V_}if(k){let oe=T.texture.type,ge=oe===Ji||oe===Zs||oe===F_||oe===Aa||oe===k_||oe===B_,we=de.getClearColor(),Ce=de.getClearAlpha(),Le=we.r,Ne=we.g,Fe=we.b;ge?(m[0]=Le,m[1]=Ne,m[2]=Fe,m[3]=Ce,L.clearBufferuiv(L.COLOR,0,m)):(v[0]=Le,v[1]=Ne,v[2]=Fe,v[3]=Ce,L.clearBufferiv(L.COLOR,0,v))}else V|=L.COLOR_BUFFER_BIT}O&&(V|=L.DEPTH_BUFFER_BIT),B&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",U,!1),t.removeEventListener("webglcontextrestored",$,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),Me.dispose(),re.dispose(),C.dispose(),z.dispose(),q.dispose(),xe.dispose(),nt.dispose(),rt.dispose(),K.dispose(),g.dispose(),g.removeEventListener("sessionstart",wt),g.removeEventListener("sessionend",bt),Qt.stop()};function U(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let b=st.autoReset,O=Te.enabled,B=Te.autoUpdate,V=Te.needsUpdate,k=Te.type;me(),st.autoReset=b,Te.enabled=O,Te.autoUpdate=B,Te.needsUpdate=V,Te.type=k}function ne(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function le(b){let O=b.target;O.removeEventListener("dispose",le),Ze(O)}function Ze(b){je(b),C.remove(b)}function je(b){let O=C.get(b).programs;O!==void 0&&(O.forEach(function(B){K.releaseProgram(B)}),b.isShaderMaterial&&K.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,B,V,k,oe){O===null&&(O=Oe);let ge=k.isMesh&&k.matrixWorld.determinant()<0,we=gx(b,O,B,V,k);Se.setMaterial(V,ge);let Ce=B.index,Le=1;if(V.wireframe===!0){if(Ce=Y.getWireframeAttribute(B),Ce===void 0)return;Le=2}let Ne=B.drawRange,Fe=B.attributes.position,yt=Ne.start*Le,en=(Ne.start+Ne.count)*Le;oe!==null&&(yt=Math.max(yt,oe.start*Le),en=Math.min(en,(oe.start+oe.count)*Le)),Ce!==null?(yt=Math.max(yt,0),en=Math.min(en,Ce.count)):Fe!=null&&(yt=Math.max(yt,0),en=Math.min(en,Fe.count));let Pt=en-yt;if(Pt<0||Pt===1/0)return;nt.setup(k,V,we,B,Ce);let Jn,mt=Xe;if(Ce!==null&&(Jn=X.get(Ce),mt=Ye,mt.setIndex(Jn)),k.isMesh)V.wireframe===!0?(Se.setLineWidth(V.wireframeLinewidth*qe()),mt.setMode(L.LINES)):mt.setMode(L.TRIANGLES);else if(k.isLine){let ke=V.linewidth;ke===void 0&&(ke=1),Se.setLineWidth(ke*qe()),k.isLineSegments?mt.setMode(L.LINES):k.isLineLoop?mt.setMode(L.LINE_LOOP):mt.setMode(L.LINE_STRIP)}else k.isPoints?mt.setMode(L.POINTS):k.isSprite&&mt.setMode(L.TRIANGLES);if(k.isBatchedMesh)mt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)mt.renderInstances(yt,Pt,k.count);else if(B.isInstancedBufferGeometry){let ke=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,xu=Math.min(B.instanceCount,ke);mt.renderInstances(yt,Pt,xu)}else mt.render(yt,Pt)};function ft(b,O,B){b.transparent===!0&&b.side===gi&&b.forceSinglePass===!1?(b.side=Jt,b.needsUpdate=!0,Ia(b,O,B),b.side=Qi,b.needsUpdate=!0,Ia(b,O,B),b.side=gi):Ia(b,O,B)}this.compile=function(b,O,B=null){B===null&&(B=b),p=re.get(B),p.init(),S.push(p),B.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),b!==B&&b.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights(M._useLegacyLights);let V=new Set;return b.traverse(function(k){let oe=k.material;if(oe)if(Array.isArray(oe))for(let ge=0;ge<oe.length;ge++){let we=oe[ge];ft(we,B,k),V.add(we)}else ft(oe,B,k),V.add(oe)}),S.pop(),p=null,V},this.compileAsync=function(b,O,B=null){let V=this.compile(b,O,B);return new Promise(k=>{function oe(){if(V.forEach(function(ge){C.get(ge).currentProgram.isReady()&&V.delete(ge)}),V.size===0){k(b);return}setTimeout(oe,10)}be.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Rt=null;function ct(b){Rt&&Rt(b)}function wt(){Qt.stop()}function bt(){Qt.start()}let Qt=new Z_;Qt.setAnimationLoop(ct),typeof self<"u"&&Qt.setContext(self),this.setAnimationLoop=function(b){Rt=b,g.setAnimationLoop(b),b===null?Qt.stop():Qt.start()},g.addEventListener("sessionstart",wt),g.addEventListener("sessionend",bt),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),g.enabled===!0&&g.isPresenting===!0&&(g.cameraAutoUpdate===!0&&g.updateCamera(O),O=g.getCamera()),b.isScene===!0&&b.onBeforeRender(M,b,O,T),p=re.get(b,S.length),p.init(),S.push(p),ue.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),at.setFromProjectionMatrix(ue),te=this.localClippingEnabled,j=ce.init(this.clippingPlanes,te),_=Me.get(b,f.length),_.init(),f.push(_),ln(b,O,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(H,ee),this.info.render.frame++,j===!0&&ce.beginShadows();let B=p.state.shadowsArray;if(Te.render(B,b,O),j===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset(),(g.enabled===!1||g.isPresenting===!1||g.hasDepthSensing()===!1)&&de.render(_,b),p.setupLights(M._useLegacyLights),O.isArrayCamera){let V=O.cameras;for(let k=0,oe=V.length;k<oe;k++){let ge=V[k];Mi(_,b,ge,ge.viewport)}}else Mi(_,b,O);T!==null&&(x.updateMultisampleRenderTarget(T),x.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(M,b,O),nt.resetDefaultState(),R=-1,w=null,S.pop(),S.length>0?p=S[S.length-1]:p=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function ln(b,O,B,V){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)B=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||at.intersectsSprite(b)){V&&Pe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ue);let ge=xe.update(b),we=b.material;we.visible&&_.push(b,ge,we,B,Pe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||at.intersectsObject(b))){let ge=xe.update(b),we=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Pe.copy(b.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Pe.copy(ge.boundingSphere.center)),Pe.applyMatrix4(b.matrixWorld).applyMatrix4(ue)),Array.isArray(we)){let Ce=ge.groups;for(let Le=0,Ne=Ce.length;Le<Ne;Le++){let Fe=Ce[Le],yt=we[Fe.materialIndex];yt&&yt.visible&&_.push(b,ge,yt,B,Pe.z,Fe)}}else we.visible&&_.push(b,ge,we,B,Pe.z,null)}}let oe=b.children;for(let ge=0,we=oe.length;ge<we;ge++)ln(oe[ge],O,B,V)}function Mi(b,O,B,V){let k=b.opaque,oe=b.transmissive,ge=b.transparent;p.setupLightsView(B),j===!0&&ce.setGlobalState(M.clippingPlanes,B),oe.length>0&&Vr(k,oe,O,B),V&&Se.viewport(y.copy(V)),k.length>0&&tr(k,O,B),oe.length>0&&tr(oe,O,B),ge.length>0&&tr(ge,O,B),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Vr(b,O,B,V){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;if(p.state.transmissionRenderTarget===null){p.state.transmissionRenderTarget=new yi(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float")?Gl:Ji,minFilter:Rr,samples:4,stencilBuffer:s});let Le=C.get(p.state.transmissionRenderTarget);Le.__isTransmissionRenderTarget=!0}let oe=p.state.transmissionRenderTarget;M.getDrawingBufferSize(ae),oe.setSize(ae.x,ae.y);let ge=M.getRenderTarget();M.setRenderTarget(oe),M.getClearColor(D),G=M.getClearAlpha(),G<1&&M.setClearColor(16777215,.5),M.clear();let we=M.toneMapping;M.toneMapping=Ki,tr(b,B,V),x.updateMultisampleRenderTarget(oe),x.updateRenderTargetMipmap(oe);let Ce=!1;for(let Le=0,Ne=O.length;Le<Ne;Le++){let Fe=O[Le],yt=Fe.object,en=Fe.geometry,Pt=Fe.material,Jn=Fe.group;if(Pt.side===gi&&yt.layers.test(V.layers)){let mt=Pt.side;Pt.side=Jt,Pt.needsUpdate=!0,kp(yt,B,V,en,Pt,Jn),Pt.side=mt,Pt.needsUpdate=!0,Ce=!0}}Ce===!0&&(x.updateMultisampleRenderTarget(oe),x.updateRenderTargetMipmap(oe)),M.setRenderTarget(ge),M.setClearColor(D,G),M.toneMapping=we}function tr(b,O,B){let V=O.isScene===!0?O.overrideMaterial:null;for(let k=0,oe=b.length;k<oe;k++){let ge=b[k],we=ge.object,Ce=ge.geometry,Le=V===null?ge.material:V,Ne=ge.group;we.layers.test(B.layers)&&kp(we,O,B,Ce,Le,Ne)}}function kp(b,O,B,V,k,oe){b.onBeforeRender(M,O,B,V,k,oe),b.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),k.onBeforeRender(M,O,B,V,b,oe),k.transparent===!0&&k.side===gi&&k.forceSinglePass===!1?(k.side=Jt,k.needsUpdate=!0,M.renderBufferDirect(B,O,V,k,b,oe),k.side=Qi,k.needsUpdate=!0,M.renderBufferDirect(B,O,V,k,b,oe),k.side=gi):M.renderBufferDirect(B,O,V,k,b,oe),b.onAfterRender(M,O,B,V,k,oe)}function Ia(b,O,B){O.isScene!==!0&&(O=Oe);let V=C.get(b),k=p.state.lights,oe=p.state.shadowsArray,ge=k.state.version,we=K.getParameters(b,k.state,oe,O,B),Ce=K.getProgramCacheKey(we),Le=V.programs;V.environment=b.isMeshStandardMaterial?O.environment:null,V.fog=O.fog,V.envMap=(b.isMeshStandardMaterial?q:z).get(b.envMap||V.environment),V.envMapRotation=V.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Le===void 0&&(b.addEventListener("dispose",le),Le=new Map,V.programs=Le);let Ne=Le.get(Ce);if(Ne!==void 0){if(V.currentProgram===Ne&&V.lightsStateVersion===ge)return Vp(b,we),Ne}else we.uniforms=K.getUniforms(b),b.onBuild(B,we,M),b.onBeforeCompile(we,M),Ne=K.acquireProgram(we,Ce),Le.set(Ce,Ne),V.uniforms=we.uniforms;let Fe=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Fe.clippingPlanes=ce.uniform),Vp(b,we),V.needsLights=yx(b),V.lightsStateVersion=ge,V.needsLights&&(Fe.ambientLightColor.value=k.state.ambient,Fe.lightProbe.value=k.state.probe,Fe.directionalLights.value=k.state.directional,Fe.directionalLightShadows.value=k.state.directionalShadow,Fe.spotLights.value=k.state.spot,Fe.spotLightShadows.value=k.state.spotShadow,Fe.rectAreaLights.value=k.state.rectArea,Fe.ltc_1.value=k.state.rectAreaLTC1,Fe.ltc_2.value=k.state.rectAreaLTC2,Fe.pointLights.value=k.state.point,Fe.pointLightShadows.value=k.state.pointShadow,Fe.hemisphereLights.value=k.state.hemi,Fe.directionalShadowMap.value=k.state.directionalShadowMap,Fe.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Fe.spotShadowMap.value=k.state.spotShadowMap,Fe.spotLightMatrix.value=k.state.spotLightMatrix,Fe.spotLightMap.value=k.state.spotLightMap,Fe.pointShadowMap.value=k.state.pointShadowMap,Fe.pointShadowMatrix.value=k.state.pointShadowMatrix),V.currentProgram=Ne,V.uniformsList=null,Ne}function Bp(b){if(b.uniformsList===null){let O=b.currentProgram.getUniforms();b.uniformsList=qs.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function Vp(b,O){let B=C.get(b);B.outputColorSpace=O.outputColorSpace,B.batching=O.batching,B.instancing=O.instancing,B.instancingColor=O.instancingColor,B.instancingMorph=O.instancingMorph,B.skinning=O.skinning,B.morphTargets=O.morphTargets,B.morphNormals=O.morphNormals,B.morphColors=O.morphColors,B.morphTargetsCount=O.morphTargetsCount,B.numClippingPlanes=O.numClippingPlanes,B.numIntersection=O.numClipIntersection,B.vertexAlphas=O.vertexAlphas,B.vertexTangents=O.vertexTangents,B.toneMapping=O.toneMapping}function gx(b,O,B,V,k){O.isScene!==!0&&(O=Oe),x.resetTextureUnits();let oe=O.fog,ge=V.isMeshStandardMaterial?O.environment:null,we=T===null?M.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:er,Ce=(V.isMeshStandardMaterial?q:z).get(V.envMap||ge),Le=V.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ne=!!B.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Fe=!!B.morphAttributes.position,yt=!!B.morphAttributes.normal,en=!!B.morphAttributes.color,Pt=Ki;V.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Pt=M.toneMapping);let Jn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,mt=Jn!==void 0?Jn.length:0,ke=C.get(V),xu=p.state.lights;if(j===!0&&(te===!0||b!==w)){let un=b===w&&V.id===R;ce.setState(V,b,un)}let pt=!1;V.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==xu.state.version||ke.outputColorSpace!==we||k.isBatchedMesh&&ke.batching===!1||!k.isBatchedMesh&&ke.batching===!0||k.isInstancedMesh&&ke.instancing===!1||!k.isInstancedMesh&&ke.instancing===!0||k.isSkinnedMesh&&ke.skinning===!1||!k.isSkinnedMesh&&ke.skinning===!0||k.isInstancedMesh&&ke.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&ke.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&ke.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&ke.instancingMorph===!1&&k.morphTexture!==null||ke.envMap!==Ce||V.fog===!0&&ke.fog!==oe||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==ce.numPlanes||ke.numIntersection!==ce.numIntersection)||ke.vertexAlphas!==Le||ke.vertexTangents!==Ne||ke.morphTargets!==Fe||ke.morphNormals!==yt||ke.morphColors!==en||ke.toneMapping!==Pt||ke.morphTargetsCount!==mt)&&(pt=!0):(pt=!0,ke.__version=V.version);let nr=ke.currentProgram;pt===!0&&(nr=Ia(V,O,k));let zp=!1,ro=!1,Mu=!1,kt=nr.getUniforms(),wi=ke.uniforms;if(Se.useProgram(nr.program)&&(zp=!0,ro=!0,Mu=!0),V.id!==R&&(R=V.id,ro=!0),zp||w!==b){kt.setValue(L,"projectionMatrix",b.projectionMatrix),kt.setValue(L,"viewMatrix",b.matrixWorldInverse);let un=kt.map.cameraPosition;un!==void 0&&un.setValue(L,Pe.setFromMatrixPosition(b.matrixWorld)),vt.logarithmicDepthBuffer&&kt.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&kt.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),w!==b&&(w=b,ro=!0,Mu=!0)}if(k.isSkinnedMesh){kt.setOptional(L,k,"bindMatrix"),kt.setOptional(L,k,"bindMatrixInverse");let un=k.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),kt.setValue(L,"boneTexture",un.boneTexture,x))}k.isBatchedMesh&&(kt.setOptional(L,k,"batchingTexture"),kt.setValue(L,"batchingTexture",k._matricesTexture,x));let wu=B.morphAttributes;if((wu.position!==void 0||wu.normal!==void 0||wu.color!==void 0)&&he.update(k,B,nr),(ro||ke.receiveShadow!==k.receiveShadow)&&(ke.receiveShadow=k.receiveShadow,kt.setValue(L,"receiveShadow",k.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(wi.envMap.value=Ce,wi.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&O.environment!==null&&(wi.envMapIntensity.value=O.environmentIntensity),ro&&(kt.setValue(L,"toneMappingExposure",M.toneMappingExposure),ke.needsLights&&vx(wi,Mu),oe&&V.fog===!0&&ve.refreshFogUniforms(wi,oe),ve.refreshMaterialUniforms(wi,V,J,Z,p.state.transmissionRenderTarget),qs.upload(L,Bp(ke),wi,x)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(qs.upload(L,Bp(ke),wi,x),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&kt.setValue(L,"center",k.center),kt.setValue(L,"modelViewMatrix",k.modelViewMatrix),kt.setValue(L,"normalMatrix",k.normalMatrix),kt.setValue(L,"modelMatrix",k.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let un=V.uniformsGroups;for(let bu=0,_x=un.length;bu<_x;bu++){let Hp=un[bu];rt.update(Hp,nr),rt.bind(Hp,nr)}}return nr}function vx(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function yx(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,O,B){C.get(b.texture).__webglTexture=O,C.get(b.depthTexture).__webglTexture=B;let V=C.get(b);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=B===void 0,V.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,O){let B=C.get(b);B.__webglFramebuffer=O,B.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,B=0){T=b,I=O,A=B;let V=!0,k=null,oe=!1,ge=!1;if(b){let Ce=C.get(b);Ce.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(L.FRAMEBUFFER,null),V=!1):Ce.__webglFramebuffer===void 0?x.setupRenderTarget(b):Ce.__hasExternalTextures&&x.rebindTextures(b,C.get(b.texture).__webglTexture,C.get(b.depthTexture).__webglTexture);let Le=b.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(ge=!0);let Ne=C.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ne[O])?k=Ne[O][B]:k=Ne[O],oe=!0):b.samples>0&&x.useMultisampledRTT(b)===!1?k=C.get(b).__webglMultisampledFramebuffer:Array.isArray(Ne)?k=Ne[B]:k=Ne,y.copy(b.viewport),N.copy(b.scissor),F=b.scissorTest}else y.copy(Q).multiplyScalar(J).floor(),N.copy(pe).multiplyScalar(J).floor(),F=We;if(Se.bindFramebuffer(L.FRAMEBUFFER,k)&&V&&Se.drawBuffers(b,k),Se.viewport(y),Se.scissor(N),Se.setScissorTest(F),oe){let Ce=C.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ce.__webglTexture,B)}else if(ge){let Ce=C.get(b.texture),Le=O||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ce.__webglTexture,B||0,Le)}R=-1},this.readRenderTargetPixels=function(b,O,B,V,k,oe,ge){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=C.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ge!==void 0&&(we=we[ge]),we){Se.bindFramebuffer(L.FRAMEBUFFER,we);try{let Ce=b.texture,Le=Ce.format,Ne=Ce.type;if(Le!==Yn&&it.convert(Le)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Fe=Ne===Gl&&(be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float"));if(Ne!==Ji&&it.convert(Ne)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&Ne!==Yi&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-V&&B>=0&&B<=b.height-k&&L.readPixels(O,B,V,k,it.convert(Le),it.convert(Ne),oe)}finally{let Ce=T!==null?C.get(T).__webglFramebuffer:null;Se.bindFramebuffer(L.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(b,O,B=0){let V=Math.pow(2,-B),k=Math.floor(O.image.width*V),oe=Math.floor(O.image.height*V);x.setTexture2D(O,0),L.copyTexSubImage2D(L.TEXTURE_2D,B,0,0,b.x,b.y,k,oe),Se.unbindTexture()},this.copyTextureToTexture=function(b,O,B,V=0){let k=O.image.width,oe=O.image.height,ge=it.convert(B.format),we=it.convert(B.type);x.setTexture2D(B,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,B.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,B.unpackAlignment),O.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,V,b.x,b.y,k,oe,ge,we,O.image.data):O.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,V,b.x,b.y,O.mipmaps[0].width,O.mipmaps[0].height,ge,O.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,V,b.x,b.y,ge,we,O.image),V===0&&B.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(b,O,B,V,k=0){let oe=Math.round(b.max.x-b.min.x),ge=Math.round(b.max.y-b.min.y),we=b.max.z-b.min.z+1,Ce=it.convert(V.format),Le=it.convert(V.type),Ne;if(V.isData3DTexture)x.setTexture3D(V,0),Ne=L.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)x.setTexture2DArray(V,0),Ne=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,V.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,V.unpackAlignment);let Fe=L.getParameter(L.UNPACK_ROW_LENGTH),yt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),en=L.getParameter(L.UNPACK_SKIP_PIXELS),Pt=L.getParameter(L.UNPACK_SKIP_ROWS),Jn=L.getParameter(L.UNPACK_SKIP_IMAGES),mt=B.isCompressedTexture?B.mipmaps[k]:B.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,mt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,mt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,b.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,b.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,b.min.z),B.isDataTexture||B.isData3DTexture?L.texSubImage3D(Ne,k,O.x,O.y,O.z,oe,ge,we,Ce,Le,mt.data):V.isCompressedArrayTexture?L.compressedTexSubImage3D(Ne,k,O.x,O.y,O.z,oe,ge,we,Ce,mt.data):L.texSubImage3D(Ne,k,O.x,O.y,O.z,oe,ge,we,Ce,Le,mt),L.pixelStorei(L.UNPACK_ROW_LENGTH,Fe),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,yt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,en),L.pixelStorei(L.UNPACK_SKIP_ROWS,Pt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Jn),k===0&&V.generateMipmaps&&L.generateMipmap(Ne),Se.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?x.setTextureCube(b,0):b.isData3DTexture?x.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?x.setTexture2DArray(b,0):x.setTexture2D(b,0),Se.unbindTexture()},this.resetState=function(){I=0,A=0,T=null,Se.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Pp?"display-p3":"srgb",t.unpackColorSpace=ut.workingColorSpace===pu?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}};var cu=class extends _i{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nr,this.environmentIntensity=1,this.environmentRotation=new Nr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var _p=class n extends xi{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let u=[],d=[],h=[],m=[],v=0,_=[],p=i/2,f=0;S(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new Yt(d,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(m,2));function S(){let E=new P,I=new P,A=0,T=(t-e)/i;for(let R=0;R<=s;R++){let w=[],y=R/s,N=y*(t-e)+e;for(let F=0;F<=r;F++){let D=F/r,G=D*c+a,W=Math.sin(G),Z=Math.cos(G);I.x=N*W,I.y=-y*i+p,I.z=N*Z,d.push(I.x,I.y,I.z),E.set(W,T,Z).normalize(),h.push(E.x,E.y,E.z),m.push(D,1-y),w.push(v++)}_.push(w)}for(let R=0;R<r;R++)for(let w=0;w<s;w++){let y=_[w][R],N=_[w+1][R],F=_[w+1][R+1],D=_[w][R+1];u.push(y,N,D),u.push(N,F,D),A+=6}l.addGroup(f,A,0),f+=A}function M(E){let I=v,A=new _e,T=new P,R=0,w=E===!0?e:t,y=E===!0?1:-1;for(let F=1;F<=r;F++)d.push(0,p*y,0),h.push(0,y,0),m.push(.5,.5),v++;let N=v;for(let F=0;F<=r;F++){let G=F/r*c+a,W=Math.cos(G),Z=Math.sin(G);T.x=w*Z,T.y=p*y,T.z=w*W,d.push(T.x,T.y,T.z),h.push(0,y,0),A.x=W*.5+.5,A.y=Z*.5*y+.5,m.push(A.x,A.y),v++}for(let F=0;F<r;F++){let D=I+F,G=N+F;E===!0?u.push(G,G+1,D):u.push(G+1,G,D),R+=3}l.addGroup(f,R,E===!0?1:2),f+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},lu=class n extends _p{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},xp=class n extends xi{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],o=[];a(r),l(i),u(),this.setAttribute("position",new Yt(s,3)),this.setAttribute("normal",new Yt(s.slice(),3)),this.setAttribute("uv",new Yt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let M=new P,E=new P,I=new P;for(let A=0;A<t.length;A+=3)m(t[A+0],M),m(t[A+1],E),m(t[A+2],I),c(M,E,I,S)}function c(S,M,E,I){let A=I+1,T=[];for(let R=0;R<=A;R++){T[R]=[];let w=S.clone().lerp(E,R/A),y=M.clone().lerp(E,R/A),N=A-R;for(let F=0;F<=N;F++)F===0&&R===A?T[R][F]=w:T[R][F]=w.clone().lerp(y,F/N)}for(let R=0;R<A;R++)for(let w=0;w<2*(A-R)-1;w++){let y=Math.floor(w/2);w%2===0?(h(T[R][y+1]),h(T[R+1][y]),h(T[R][y])):(h(T[R][y+1]),h(T[R+1][y+1]),h(T[R+1][y]))}}function l(S){let M=new P;for(let E=0;E<s.length;E+=3)M.x=s[E+0],M.y=s[E+1],M.z=s[E+2],M.normalize().multiplyScalar(S),s[E+0]=M.x,s[E+1]=M.y,s[E+2]=M.z}function u(){let S=new P;for(let M=0;M<s.length;M+=3){S.x=s[M+0],S.y=s[M+1],S.z=s[M+2];let E=p(S)/2/Math.PI+.5,I=f(S)/Math.PI+.5;o.push(E,1-I)}v(),d()}function d(){for(let S=0;S<o.length;S+=6){let M=o[S+0],E=o[S+2],I=o[S+4],A=Math.max(M,E,I),T=Math.min(M,E,I);A>.9&&T<.1&&(M<.2&&(o[S+0]+=1),E<.2&&(o[S+2]+=1),I<.2&&(o[S+4]+=1))}}function h(S){s.push(S.x,S.y,S.z)}function m(S,M){let E=S*3;M.x=e[E+0],M.y=e[E+1],M.z=e[E+2]}function v(){let S=new P,M=new P,E=new P,I=new P,A=new _e,T=new _e,R=new _e;for(let w=0,y=0;w<s.length;w+=9,y+=6){S.set(s[w+0],s[w+1],s[w+2]),M.set(s[w+3],s[w+4],s[w+5]),E.set(s[w+6],s[w+7],s[w+8]),A.set(o[y+0],o[y+1]),T.set(o[y+2],o[y+3]),R.set(o[y+4],o[y+5]),I.copy(S).add(M).add(E).divideScalar(3);let N=p(I);_(A,y+0,S,N),_(T,y+2,M,N),_(R,y+4,E,N)}}function _(S,M,E,I){I<0&&S.x===1&&(o[M]=S.x-1),E.x===0&&E.z===0&&(o[M]=I/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function f(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var uu=class n extends xp{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Sa=class extends Or{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=W_,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function zl(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function lN(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var eo=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Mp=class extends eo{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:B0,endingEnd:B0}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case V0:s=e,a=2*t-i;break;case z0:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case V0:o=e,c=2*i-t;break;case z0:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,m=this._weightNext,v=(i-t)/(r-t),_=v*v,p=_*v,f=-h*p+2*h*_-h*v,S=(1+h)*p+(-1.5-2*h)*_+(-.5+h)*v+1,M=(-1-m)*p+(1.5+m)*_+.5*v,E=m*p-m*_;for(let I=0;I!==a;++I)s[I]=f*o[u+I]+S*o[l+I]+M*o[c+I]+E*o[d+I];return s}},wp=class extends eo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let h=0;h!==a;++h)s[h]=o[l+h]*d+o[c+h]*u;return s}},bp=class extends eo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ln=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=zl(t,this.TimeBufferType),this.values=zl(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:zl(e.times,Array),values:zl(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new bp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Mp(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Wl:t=this.InterpolantFactoryMethodDiscrete;break;case jl:t=this.InterpolantFactoryMethodLinear;break;case Ef:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wl;case this.InterpolantFactoryMethodLinear:return jl;case this.InterpolantFactoryMethodSmooth:return Ef}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&lN(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Ef,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*i,h=d-i,m=d+i;for(let v=0;v!==i;++v){let _=t[d+v];if(_!==t[h+v]||_!==t[m+v]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*i,h=o*i;for(let m=0;m!==i;++m)t[h+m]=t[d+m]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=jl;var Lr=class extends Ln{};Lr.prototype.ValueTypeName="bool";Lr.prototype.ValueBufferType=Array;Lr.prototype.DefaultInterpolation=Wl;Lr.prototype.InterpolantFactoryMethodLinear=void 0;Lr.prototype.InterpolantFactoryMethodSmooth=void 0;var Sp=class extends Ln{};Sp.prototype.ValueTypeName="color";var Ep=class extends Ln{};Ep.prototype.ValueTypeName="number";var Tp=class extends eo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)On.slerpFlat(s,0,o,l-a,o,l,c);return s}},Ea=class extends Ln{InterpolantFactoryMethodLinear(e){return new Tp(this.times,this.values,this.getValueSize(),e)}};Ea.prototype.ValueTypeName="quaternion";Ea.prototype.DefaultInterpolation=jl;Ea.prototype.InterpolantFactoryMethodSmooth=void 0;var Fr=class extends Ln{};Fr.prototype.ValueTypeName="string";Fr.prototype.ValueBufferType=Array;Fr.prototype.DefaultInterpolation=Wl;Fr.prototype.InterpolantFactoryMethodLinear=void 0;Fr.prototype.InterpolantFactoryMethodSmooth=void 0;var Cp=class extends Ln{};Cp.prototype.ValueTypeName="vector";var du=class extends _i{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};var Zf=new Tt,P_=new P,N_=new P,Ap=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ba,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;P_.setFromMatrixPosition(e.matrixWorld),t.position.copy(P_),N_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(N_),t.updateMatrixWorld(),Zf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Zf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Dp=class extends Ap{constructor(){super(new ru(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ta=class extends du{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_i.DEFAULT_UP),this.updateMatrix(),this.target=new _i,this.shadow=new Dp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},hu=class extends du{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Lp="\\[\\]\\.:\\/",uN=new RegExp("["+Lp+"]","g"),Fp="[^"+Lp+"]",dN="[^"+Lp.replace("\\.","")+"]",hN=/((?:WC+[\/:])*)/.source.replace("WC",Fp),fN=/(WCOD+)?/.source.replace("WCOD",dN),pN=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fp),mN=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fp),gN=new RegExp("^"+hN+fN+pN+mN+"$"),vN=["material","materials","bones","map"],Ip=class{constructor(e,t,i){let r=i||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Mt=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(uN,"")}static parseTrackName(t){let i=gN.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);vN.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,o=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=Ip,n})();Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var k3=new Float32Array(1);var Ca=class{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ht(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rp);var _N=.5*(Math.sqrt(3)-1),Da=(3-Math.sqrt(3))/6,V3=1/3,z3=1/6,H3=(Math.sqrt(5)-1)/4,G3=(5-Math.sqrt(5))/20,nx=n=>Math.floor(n)|0,ix=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function rx(n=Math.random){let e=xN(n),t=new Float64Array(e).map(r=>ix[r%12*2]),i=new Float64Array(e).map(r=>ix[r%12*2+1]);return function(s,o){let a=0,c=0,l=0,u=(s+o)*_N,d=nx(s+u),h=nx(o+u),m=(d+h)*Da,v=d-m,_=h-m,p=s-v,f=o-_,S,M;p>f?(S=1,M=0):(S=0,M=1);let E=p-S+Da,I=f-M+Da,A=p-1+2*Da,T=f-1+2*Da,R=d&255,w=h&255,y=.5-p*p-f*f;if(y>=0){let D=R+e[w],G=t[D],W=i[D];y*=y,a=y*y*(G*p+W*f)}let N=.5-E*E-I*I;if(N>=0){let D=R+S+e[w+M],G=t[D],W=i[D];N*=N,c=N*N*(G*E+W*I)}let F=.5-A*A-T*T;if(F>=0){let D=R+1+e[w+1],G=t[D],W=i[D];F*=F,l=F*F*(G*A+W*T)}return 70*(a+c+l)}}function xN(n){let t=new Uint8Array(512);for(let i=0;i<512/2;i++)t[i]=i;for(let i=0;i<512/2-1;i++){let r=i+~~(n()*(256-i)),s=t[i];t[i]=t[r],t[r]=s}for(let i=256;i<512;i++)t[i]=t[i-256];return t}var sx={type:"change"},Up={type:"start"},ox={type:"end"},gu=new Ma,ax=new Pn,MN=Math.cos(70*$_.DEG2RAD),vu=class extends Zn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ur.ROTATE,MIDDLE:Ur.DOLLY,RIGHT:Ur.PAN},this.touches={ONE:kr.ROTATE,TWO:kr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(g){g.addEventListener("keydown",ce),this._domElementKeyEvents=g},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ce),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(sx),i.update(),s=r.NONE},this.update=function(){let g=new P,U=new On().setFromUnitVectors(e.up,new P(0,1,0)),$=U.clone().invert(),ne=new P,le=new On,Ze=new P,je=2*Math.PI;return function(Rt=null){let ct=i.object.position;g.copy(ct).sub(i.target),g.applyQuaternion(U),a.setFromVector3(g),i.autoRotate&&s===r.NONE&&F(y(Rt)),i.enableDamping?(a.theta+=c.theta*i.dampingFactor,a.phi+=c.phi*i.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let wt=i.minAzimuthAngle,bt=i.maxAzimuthAngle;isFinite(wt)&&isFinite(bt)&&(wt<-Math.PI?wt+=je:wt>Math.PI&&(wt-=je),bt<-Math.PI?bt+=je:bt>Math.PI&&(bt-=je),wt<=bt?a.theta=Math.max(wt,Math.min(bt,a.theta)):a.theta=a.theta>(wt+bt)/2?Math.max(wt,a.theta):Math.min(bt,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let Qt=!1;if(i.zoomToCursor&&A||i.object.isOrthographicCamera)a.radius=Q(a.radius);else{let ln=a.radius;a.radius=Q(a.radius*l),Qt=ln!=a.radius}if(g.setFromSpherical(a),g.applyQuaternion($),ct.copy(i.target).add(g),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),i.zoomToCursor&&A){let ln=null;if(i.object.isPerspectiveCamera){let Mi=g.length();ln=Q(Mi*l);let Vr=Mi-ln;i.object.position.addScaledVector(E,Vr),i.object.updateMatrixWorld(),Qt=!!Vr}else if(i.object.isOrthographicCamera){let Mi=new P(I.x,I.y,0);Mi.unproject(i.object);let Vr=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),Qt=Vr!==i.object.zoom;let tr=new P(I.x,I.y,0);tr.unproject(i.object),i.object.position.sub(tr).add(Mi),i.object.updateMatrixWorld(),ln=g.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;ln!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(ln).add(i.object.position):(gu.origin.copy(i.object.position),gu.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(gu.direction))<MN?e.lookAt(i.target):(ax.setFromNormalAndCoplanarPoint(i.object.up,i.target),gu.intersectPlane(ax,i.target))))}else if(i.object.isOrthographicCamera){let ln=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),ln!==i.object.zoom&&(i.object.updateProjectionMatrix(),Qt=!0)}return l=1,A=!1,Qt||ne.distanceToSquared(i.object.position)>o||8*(1-le.dot(i.object.quaternion))>o||Ze.distanceToSquared(i.target)>o?(i.dispatchEvent(sx),ne.copy(i.object.position),le.copy(i.object.quaternion),Ze.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",he),i.domElement.removeEventListener("pointerdown",z),i.domElement.removeEventListener("pointercancel",X),i.domElement.removeEventListener("wheel",K),i.domElement.removeEventListener("pointermove",q),i.domElement.removeEventListener("pointerup",X),i.domElement.getRootNode().removeEventListener("keydown",Me,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",ce),i._domElementKeyEvents=null)};let i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},s=r.NONE,o=1e-6,a=new Ca,c=new Ca,l=1,u=new P,d=new _e,h=new _e,m=new _e,v=new _e,_=new _e,p=new _e,f=new _e,S=new _e,M=new _e,E=new P,I=new _e,A=!1,T=[],R={},w=!1;function y(g){return g!==null?2*Math.PI/60*i.autoRotateSpeed*g:2*Math.PI/60/60*i.autoRotateSpeed}function N(g){let U=Math.abs(g*.01);return Math.pow(.95,i.zoomSpeed*U)}function F(g){c.theta-=g}function D(g){c.phi-=g}let G=function(){let g=new P;return function($,ne){g.setFromMatrixColumn(ne,0),g.multiplyScalar(-$),u.add(g)}}(),W=function(){let g=new P;return function($,ne){i.screenSpacePanning===!0?g.setFromMatrixColumn(ne,1):(g.setFromMatrixColumn(ne,0),g.crossVectors(i.object.up,g)),g.multiplyScalar($),u.add(g)}}(),Z=function(){let g=new P;return function($,ne){let le=i.domElement;if(i.object.isPerspectiveCamera){let Ze=i.object.position;g.copy(Ze).sub(i.target);let je=g.length();je*=Math.tan(i.object.fov/2*Math.PI/180),G(2*$*je/le.clientHeight,i.object.matrix),W(2*ne*je/le.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(G($*(i.object.right-i.object.left)/i.object.zoom/le.clientWidth,i.object.matrix),W(ne*(i.object.top-i.object.bottom)/i.object.zoom/le.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function J(g){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l/=g:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function H(g){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l*=g:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ee(g,U){if(!i.zoomToCursor)return;A=!0;let $=i.domElement.getBoundingClientRect(),ne=g-$.left,le=U-$.top,Ze=$.width,je=$.height;I.x=ne/Ze*2-1,I.y=-(le/je)*2+1,E.set(I.x,I.y,1).unproject(i.object).sub(i.object.position).normalize()}function Q(g){return Math.max(i.minDistance,Math.min(i.maxDistance,g))}function pe(g){d.set(g.clientX,g.clientY)}function We(g){ee(g.clientX,g.clientX),f.set(g.clientX,g.clientY)}function at(g){v.set(g.clientX,g.clientY)}function j(g){h.set(g.clientX,g.clientY),m.subVectors(h,d).multiplyScalar(i.rotateSpeed);let U=i.domElement;F(2*Math.PI*m.x/U.clientHeight),D(2*Math.PI*m.y/U.clientHeight),d.copy(h),i.update()}function te(g){S.set(g.clientX,g.clientY),M.subVectors(S,f),M.y>0?J(N(M.y)):M.y<0&&H(N(M.y)),f.copy(S),i.update()}function ue(g){_.set(g.clientX,g.clientY),p.subVectors(_,v).multiplyScalar(i.panSpeed),Z(p.x,p.y),v.copy(_),i.update()}function ae(g){ee(g.clientX,g.clientY),g.deltaY<0?H(N(g.deltaY)):g.deltaY>0&&J(N(g.deltaY)),i.update()}function Pe(g){let U=!1;switch(g.code){case i.keys.UP:g.ctrlKey||g.metaKey||g.shiftKey?D(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Z(0,i.keyPanSpeed),U=!0;break;case i.keys.BOTTOM:g.ctrlKey||g.metaKey||g.shiftKey?D(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Z(0,-i.keyPanSpeed),U=!0;break;case i.keys.LEFT:g.ctrlKey||g.metaKey||g.shiftKey?F(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Z(i.keyPanSpeed,0),U=!0;break;case i.keys.RIGHT:g.ctrlKey||g.metaKey||g.shiftKey?F(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Z(-i.keyPanSpeed,0),U=!0;break}U&&(g.preventDefault(),i.update())}function Oe(g){if(T.length===1)d.set(g.pageX,g.pageY);else{let U=rt(g),$=.5*(g.pageX+U.x),ne=.5*(g.pageY+U.y);d.set($,ne)}}function qe(g){if(T.length===1)v.set(g.pageX,g.pageY);else{let U=rt(g),$=.5*(g.pageX+U.x),ne=.5*(g.pageY+U.y);v.set($,ne)}}function L(g){let U=rt(g),$=g.pageX-U.x,ne=g.pageY-U.y,le=Math.sqrt($*$+ne*ne);f.set(0,le)}function ze(g){i.enableZoom&&L(g),i.enablePan&&qe(g)}function be(g){i.enableZoom&&L(g),i.enableRotate&&Oe(g)}function vt(g){if(T.length==1)h.set(g.pageX,g.pageY);else{let $=rt(g),ne=.5*(g.pageX+$.x),le=.5*(g.pageY+$.y);h.set(ne,le)}m.subVectors(h,d).multiplyScalar(i.rotateSpeed);let U=i.domElement;F(2*Math.PI*m.x/U.clientHeight),D(2*Math.PI*m.y/U.clientHeight),d.copy(h)}function Se(g){if(T.length===1)_.set(g.pageX,g.pageY);else{let U=rt(g),$=.5*(g.pageX+U.x),ne=.5*(g.pageY+U.y);_.set($,ne)}p.subVectors(_,v).multiplyScalar(i.panSpeed),Z(p.x,p.y),v.copy(_)}function st(g){let U=rt(g),$=g.pageX-U.x,ne=g.pageY-U.y,le=Math.sqrt($*$+ne*ne);S.set(0,le),M.set(0,Math.pow(S.y/f.y,i.zoomSpeed)),J(M.y),f.copy(S);let Ze=(g.pageX+U.x)*.5,je=(g.pageY+U.y)*.5;ee(Ze,je)}function C(g){i.enableZoom&&st(g),i.enablePan&&Se(g)}function x(g){i.enableZoom&&st(g),i.enableRotate&&vt(g)}function z(g){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(g.pointerId),i.domElement.addEventListener("pointermove",q),i.domElement.addEventListener("pointerup",X)),!it(g)&&(Xe(g),g.pointerType==="touch"?Te(g):Y(g)))}function q(g){i.enabled!==!1&&(g.pointerType==="touch"?de(g):xe(g))}function X(g){switch(Ye(g),T.length){case 0:i.domElement.releasePointerCapture(g.pointerId),i.domElement.removeEventListener("pointermove",q),i.domElement.removeEventListener("pointerup",X),i.dispatchEvent(ox),s=r.NONE;break;case 1:let U=T[0],$=R[U];Te({pointerId:U,pageX:$.x,pageY:$.y});break}}function Y(g){let U;switch(g.button){case 0:U=i.mouseButtons.LEFT;break;case 1:U=i.mouseButtons.MIDDLE;break;case 2:U=i.mouseButtons.RIGHT;break;default:U=-1}switch(U){case Ur.DOLLY:if(i.enableZoom===!1)return;We(g),s=r.DOLLY;break;case Ur.ROTATE:if(g.ctrlKey||g.metaKey||g.shiftKey){if(i.enablePan===!1)return;at(g),s=r.PAN}else{if(i.enableRotate===!1)return;pe(g),s=r.ROTATE}break;case Ur.PAN:if(g.ctrlKey||g.metaKey||g.shiftKey){if(i.enableRotate===!1)return;pe(g),s=r.ROTATE}else{if(i.enablePan===!1)return;at(g),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Up)}function xe(g){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;j(g);break;case r.DOLLY:if(i.enableZoom===!1)return;te(g);break;case r.PAN:if(i.enablePan===!1)return;ue(g);break}}function K(g){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(g.preventDefault(),i.dispatchEvent(Up),ae(ve(g)),i.dispatchEvent(ox))}function ve(g){let U=g.deltaMode,$={clientX:g.clientX,clientY:g.clientY,deltaY:g.deltaY};switch(U){case 1:$.deltaY*=16;break;case 2:$.deltaY*=100;break}return g.ctrlKey&&!w&&($.deltaY*=10),$}function Me(g){g.key==="Control"&&(w=!0,i.domElement.getRootNode().addEventListener("keyup",re,{passive:!0,capture:!0}))}function re(g){g.key==="Control"&&(w=!1,i.domElement.getRootNode().removeEventListener("keyup",re,{passive:!0,capture:!0}))}function ce(g){i.enabled===!1||i.enablePan===!1||Pe(g)}function Te(g){switch(nt(g),T.length){case 1:switch(i.touches.ONE){case kr.ROTATE:if(i.enableRotate===!1)return;Oe(g),s=r.TOUCH_ROTATE;break;case kr.PAN:if(i.enablePan===!1)return;qe(g),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case kr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ze(g),s=r.TOUCH_DOLLY_PAN;break;case kr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;be(g),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Up)}function de(g){switch(nt(g),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;vt(g),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Se(g),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;C(g),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;x(g),i.update();break;default:s=r.NONE}}function he(g){i.enabled!==!1&&g.preventDefault()}function Xe(g){T.push(g.pointerId)}function Ye(g){delete R[g.pointerId];for(let U=0;U<T.length;U++)if(T[U]==g.pointerId){T.splice(U,1);return}}function it(g){for(let U=0;U<T.length;U++)if(T[U]==g.pointerId)return!0;return!1}function nt(g){let U=R[g.pointerId];U===void 0&&(U=new _e,R[g.pointerId]=U),U.set(g.pageX,g.pageY)}function rt(g){let U=g.pointerId===T[0]?T[1]:T[0];return R[U]}i.domElement.addEventListener("contextmenu",he),i.domElement.addEventListener("pointerdown",z),i.domElement.addEventListener("pointercancel",X),i.domElement.addEventListener("wheel",K,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",Me,{passive:!0,capture:!0}),this.update()}};var io=(()=>{let e=class e{initAudioCtx(){this.audioCtx=new(window.AudioContext||window.webkitAudioContext),this.analyser=this.audioCtx.createAnalyser(),this.analyser.fftSize=2048}getAudioContext(){return this.audioCtx}getAnalyser(){return this.analyser}startAnalyze(i){this.audioCtx.resume().then(()=>{this.audioCtx.createMediaStreamSource(i).connect(this.analyser)})}logFrequencyData(){let i=new Uint8Array(this.analyser.frequencyBinCount);this.analyser.getByteFrequencyData(i),console.log(i)}getFrequencyData(){let i=new Uint8Array(this.analyser.frequencyBinCount);return this.analyser.getByteFrequencyData(i),i}logTimeDomainData(){let i=new Uint8Array(this.analyser.fftSize);this.analyser.getByteTimeDomainData(i),console.log(i)}pauseAnalyze(){this.audioCtx.suspend()}resumeAnalyze(){this.audioCtx.resume()}resetAnalyser(){this.analyser=this.audioCtx.createAnalyser()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=ye({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var ux=Dx(lx());var yu=(()=>{let e=class e{constructor(){this.audioService=ie(io),this.lightRay=new Array,this.camZoomX=100,this.camZoomY=40,this.camZoomZ=50,this.raymodulo=0,this.isAscii=!1}initThree(i,r=!1,s={camZoomX:100,camZoomY:40,camZoomZ:50}){if(this.scene=new cu,this.camera=new qt(75,window.innerWidth/window.innerHeight,.1,1e3),this.noise2D=rx(Math.random),this.camera.position.set(s.camZoomX??this.camZoomX,s.camZoomY??this.camZoomY,s.camZoomZ??this.camZoomZ),this.renderer=new au,this.renderer.setSize(window.innerWidth,window.innerHeight),document.getElementById(i)?.appendChild(this.renderer.domElement),r){let a="LEZARD.TISANT X KOLLECTIV.ROTUNDA ";this.asciiEffect=new ux.default(this.renderer,{charSet:a,fontSize:22,opacity:1}),this.asciiEffect.setSize(window.innerWidth,window.innerHeight),this.isAscii=!0}this.controls=new vu(this.camera,this.renderer.domElement),this.controls.target.set(0,0,0),this.controls.autoRotate=!0,this.addTerrain(),this.addSphere(),this.animate()}animate(){requestAnimationFrame(()=>this.animate()),this.controls.update(),this.updateTerrain(),this.updateLightRay(),this.renderer.render(this.scene,this.camera)}addTerrain(){let i=new Qs(400,400,20,20),r=new Sa({color:16777215,metalness:.9,roughness:.2,flatShading:!0});this.plane=new Xt(i,r),this.plane.rotation.x=-Math.PI/2,this.plane.position.setY(-20),this.scene.add(this.plane),this.makeRoughGround(this.plane,15)}updateTerrain(){let i=this.plane.geometry.attributes.position,r=10;this.audioData=this.audioService.getFrequencyData();for(let s=0;s<i.count;s++){let o=i.getX(s),a=i.getY(s),c=this.noise2D(o*.1,a*.1)*r+this.audioData[s%this.audioData.length]/20;i.setZ(s,c)}i.needsUpdate=!0,this.plane.geometry.attributes.position=i,this.plane.geometry.computeVertexNormals()}cleanThree(){document.getElementsByTagName("canvas")?.item(0)?.remove(),document.getElementsByTagName("svg")?.item(0)?.remove(),this.renderer.domElement.remove()}handlePadEffectMidi(i,r,s){if(i!==153)return;let c=new Map([[40,()=>{this.cleanThree(),this.controls.autoRotate=!1,this.controls.autoRotateSpeed=0,this.initThree("three-container",this.isAscii=!this.isAscii,{camZoomX:this.camZoomX,camZoomY:this.camZoomY,camZoomZ:this.camZoomZ})}],[41,()=>{this.updateLightColor(this.directionalLight2,16738735),this.updateRayColor(16738735)}],[42,()=>{this.updateLightColor(this.directionalLight2,4913051),this.updateRayColor(4913051)}],[43,()=>{this.updateLightColor(this.directionalLight2,4870399),this.updateRayColor(4870399)}]]).get(r);c&&c()}addSphere(){this.sphereGeometry=new uu(20,2);let i=new Sa({color:16711799,metalness:.7,roughness:.2,flatShading:!0});this.sphere=new Xt(this.sphereGeometry,i),this.sphere.position.set(0,10,0),this.scene.add(this.sphere);let r=new hu(16777215);this.scene.add(r);let s=new Ta(16738735,1);s.position.set(50,50,20),this.scene.add(s),this.directionalLight2=new Ta(16738735,1),s.position.set(-50,-50,-20),this.scene.add(this.directionalLight2);let o=new Ks({color:16777215,transparent:!0,opacity:.5});for(let a=0;a<60;a++){let c=new Xt(new lu(.2,2500,32),o);c.position.set(0,10,0),c.rotation.x=Math.random()*Math.PI*2,c.rotation.y=Math.random()*Math.PI*2,c.rotation.z=Math.random()*Math.PI*2,c.userData.timeOffset=Math.random()*1e3,this.scene.add(c),this.lightRay.push(c)}}updateLightColor(i,r){i.color.set(new $e(r))}updateRayColor(i){this.rayColor=i}updateLightRay(){let i=Date.now()*.1;this.lightRay.forEach((r,s)=>{let o=this.raymodulo%2?0:1,a=Math.abs(Math.sin(i+r.userData.timeOffset));s%2===o?(r.visible=!0,r.material.opacity=a):r.visible=!1,s%3?r.material.color=new $e(16777215):r.material.color=new $e(this.rayColor)}),console.log(this.lightRay),this.raymodulo++}updateSphere(i){let r=this.sphereGeometry.getAttribute("position"),s=r.array,o=r.count,a=new P;for(let c=0;c<o;c++){let l=c*3;a.x+=s[l],a.y+=s[l+1],a.z+=s[l+2]}a.divideScalar(o);for(let c=0;c<o;c++){let l=c*3,u=new P(s[l],s[l+1],s[l+2]),d=u.clone().sub(a).normalize(),h=20+i[c]/255*8;u.copy(a).addScaledVector(d,h),s[l]=u.x,s[l+1]=u.y,s[l+2]=u.z}r.needsUpdate=!0}makeRoughGround(i,r){let s=i.geometry.attributes.position;for(let o=0;o<s.count;o++){let a=s.getX(o),c=s.getY(o),l=this.noise2D(a*.1,c*.1)*r;s.setZ(o,l)}s.needsUpdate=!0,i.geometry.computeVertexNormals()}handleOrbitControlsMidi(i,r,s){let o=new Map([[70,"X"],[71,"Y"],[72,"Z"],[73,{action:h=>this.sphere.position.setY(this.mapRange(h,0,127,-100,40))}],[74,{action:h=>{this.controls.autoRotateSpeed=this.mapRange(h,127,0,-20,20)}}],[77,{action:h=>this.plane.position.setY(this.mapRange(h,0,127,-100,10))}]]),a=0,c=127,l=0,u=100;if(i!==176)return;[70,71,72].includes(r)&&(this.camZoomX=r===70?this.mapRange(s,a,c,l,u):this.camZoomX,this.camZoomY=r===71?this.mapRange(s,a,c,1,u):this.camZoomY,this.camZoomZ=r===72?this.mapRange(s,a,c,l,u):this.camZoomZ,this.camera.position.set(this.camZoomX,this.camZoomY,this.camZoomZ));let d=o.get(r);typeof d=="object"&&d.action&&d.action(s)}mapRange(i,r,s,o,a){return(i-r)*(a-o)/(s-r)+o}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=ye({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var _u=(()=>{let e=class e{initMidi(i){return Ra(this,null,function*(){if(navigator.requestMIDIAccess)try{(yield navigator.requestMIDIAccess()).inputs.forEach(s=>{s.onmidimessage=i})}catch(r){console.error("MIDI Access Error:",r)}})}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=ye({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function bN(n,e){n&1&&(Oi(0,"div",3),Wn(1,"div",4),Li())}function SN(n,e){if(n&1&&(Oi(0,"div",3)(1,"span",5),Fo(2),Li()()),n&2){let t=Lo();mr(2),fh(t.artist)}}function EN(n,e){if(n&1){let t=Wc();Po(0),Oi(1,"button",6),ds("click",function(){Ac(t);let r=Lo();return Dc(r.start())}),Fo(2,"Start Recording"),Li(),No()}}var dx=(()=>{let e=class e{constructor(){this.artist="Trucker",this.showArtist=!1,this.showLogo=!1,this.initAudioNotDone=!0,this.threed=ie(yu),this.midi=ie(_u),this.audioService=ie(io)}ngOnInit(){}start(){this.audioService.initAudioCtx(),navigator.mediaDevices.getUserMedia({audio:!0}).then(i=>this.audioService.startAnalyze(i)),this.updateInterval=setInterval(()=>{this.threed.updateSphere(this.audioService.getFrequencyData())},20),this.initAudioNotDone=!1,this.threed.initThree("three-container"),this.midi.initMidi(i=>this.handleMIDIMessage(i))}ngOnDestroy(){this.audioService.pauseAnalyze(),this.updateInterval&&clearInterval(this.updateInterval)}handleMIDIMessage(i){let[r,s,o]=i.data;console.log(`MIDI message received. Command: ${r}, Note: ${s}, Velocity: ${o}`),console.log(r,s,o),this.threed.handleOrbitControlsMidi(r,s,o),this.threed.handlePadEffectMidi(r,s,o),this.handleArtistMidi(r,s)}handleArtistMidi(i,r){if(![48,50,52,53,55,57,71].includes(r))return;let a=new Map([[48,"Trucker VS Casti"],[50,"Alor"],[52,"Malefond"],[53,"Manta"],[55,"Borderline"],[57,"Slalom"]]);i===144&&(r===71?this.showLogo=!this.showLogo:(this.artist=a.get(r)||"",this.showArtist=!0)),i===128&&r!==71&&(this.artist="",this.showArtist=!1)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Ri({type:e,selectors:[["angular-monorepo-app-home"]],inputs:{artist:"artist",showArtist:"showArtist",showLogo:"showLogo",initAudioNotDone:"initAudioNotDone"},standalone:!0,features:[Fi],decls:4,vars:3,consts:[["id","three-container"],["class","pseudo-container",4,"ngIf"],[4,"ngIf"],[1,"pseudo-container"],["alt","sound",1,"logo"],["id","artist"],[3,"click"]],template:function(r,s){r&1&&(Wn(0,"div",0),Ro(1,bN,2,0,"div",1)(2,SN,3,1,"div",1)(3,EN,3,0,"ng-container",2)),r&2&&(mr(),gr("ngIf",s.showLogo),mr(),gr("ngIf",s.showArtist),mr(),gr("ngIf",s.initAudioNotDone))},dependencies:[Qc,ko],styles:['.pseudo-container[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100vw;height:100vh;color:#fff;display:flex;justify-content:center;align-items:center;font-size:200px}.pseudo-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100vw}.logo[_ngcontent-%COMP%]{border-radius:50%;position:relative;height:700px;width:700px;padding:10px;margin:0 auto;background:url("./media/soundlogo-EV5BS6MG.jpg") center;box-shadow:inset 0 0 73px 29px #000000b3}']});let n=e;return n})();function TN(n,e){if(n&1){let t=Wc();Po(0),Oi(1,"button",2),ds("click",function(){Ac(t);let r=Lo();return Dc(r.start())}),Fo(2,"Start Recording"),Li(),No()}}var hx=(()=>{let e=class e{constructor(){this.artist="Trucker",this.showArtist=!1,this.showLogo=!1,this.initAudioNotDone=!0,this.threed=ie(yu),this.midi=ie(_u),this.audioService=ie(io)}start(){this.audioService.initAudioCtx(),navigator.mediaDevices.getUserMedia({audio:!0}).then(i=>this.audioService.startAnalyze(i)),this.updateInterval=setInterval(()=>{this.threed.updateSphere(this.audioService.getFrequencyData())},20),this.initAudioNotDone=!1,this.threed.initThree("three-container"),this.midi.initMidi(i=>this.handleMIDIMessage(i))}ngOnDestroy(){this.audioService.pauseAnalyze(),this.updateInterval&&clearInterval(this.updateInterval)}handleMIDIMessage(i){let[r,s,o]=i.data;console.log(`MIDI message received. Command: ${r}, Note: ${s}, Velocity: ${o}`),console.log(r,s,o),this.threed.handleOrbitControlsMidi(r,s,o),this.threed.handlePadEffectMidi(r,s,o),this.handleArtistMidi(r,s)}handleArtistMidi(i,r){if(![48,50,52,53,55,57,71].includes(r))return;let a=new Map([[48,"Trucker VS Casti"],[50,"Alor"],[52,"Malefond"],[53,"Manta"],[55,"Borderline"],[57,"Slalom"]]);i===144&&(r===71?this.showLogo=!this.showLogo:(this.artist=a.get(r)||"",this.showArtist=!0)),i===128&&r!==71&&(this.artist="",this.showArtist=!1)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Ri({type:e,selectors:[["angular-monorepo-app-ascii-home"]],inputs:{artist:"artist",showArtist:"showArtist",showLogo:"showLogo",initAudioNotDone:"initAudioNotDone"},standalone:!0,features:[Fi],decls:2,vars:1,consts:[["id","three-container"],[4,"ngIf"],[3,"click"]],template:function(r,s){r&1&&(Wn(0,"div",0),Ro(1,TN,3,0,"ng-container",1)),r&2&&(mr(),gr("ngIf",s.initAudioNotDone))},dependencies:[Qc,ko],styles:['.pseudo-container[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100vw;height:100vh;color:#fff;display:flex;justify-content:center;align-items:center;font-size:200px}.pseudo-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100vw}.logo[_ngcontent-%COMP%]{border-radius:50%;position:relative;height:700px;width:700px;padding:10px;margin:0 auto;background:url("./media/soundlogo-EV5BS6MG.jpg") center;box-shadow:inset 0 0 73px 29px #000000b3}']});let n=e;return n})();var fx=[{path:"",component:dx},{path:"ascii",component:hx}];var px={providers:[i0(fx)]};var mx=(()=>{let e=class e{constructor(){this.title="mapping"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Ri({type:e,selectors:[["angular-monorepo-root"]],standalone:!0,features:[Fi],decls:1,vars:0,template:function(r,s){r&1&&Wn(0,"router-outlet")},dependencies:[c0,hf]});let n=e;return n})();vy(mx,px).catch(n=>console.error(n));
