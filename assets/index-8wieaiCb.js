(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const Co="182",wr={ROTATE:0,DOLLY:1,PAN:2},yr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Cm=0,Du=1,Rm=2,Ua=1,Jf=2,ho=3,gi=0,Ye=1,wn=2,Ui=0,Er=1,Nu=2,Fu=3,Uu=4,Pm=5,Ts=100,Im=101,Lm=102,Dm=103,Nm=104,Fm=200,Um=201,Bm=202,Om=203,Rc=204,Pc=205,zm=206,km=207,Vm=208,Gm=209,Hm=210,Wm=211,Xm=212,qm=213,Ym=214,Ic=0,Lc=1,Dc=2,Tr=3,Nc=4,Fc=5,Uc=6,Bc=7,Bh=0,$m=1,jm=2,fi=0,Qf=1,tp=2,ep=3,Oh=4,np=5,ip=6,sp=7,rp=300,Fs=301,Cr=302,Oc=303,zc=304,ll=306,kc=1e3,Fi=1001,Vc=1002,qe=1003,Zm=1004,Uo=1005,Qe=1006,yl=1007,Ls=1008,En=1009,op=1010,ap=1011,bo=1012,zh=1013,xi=1014,Zn=1015,zi=1016,kh=1017,Vh=1018,wo=1020,lp=35902,cp=35899,hp=1021,up=1022,Kn=1023,ki=1026,Ds=1027,Gh=1028,Hh=1029,Rr=1030,Wh=1031,Xh=1033,Ba=33776,Oa=33777,za=33778,ka=33779,Gc=35840,Hc=35841,Wc=35842,Xc=35843,qc=36196,Yc=37492,$c=37496,jc=37488,Zc=37489,Kc=37490,Jc=37491,Qc=37808,th=37809,eh=37810,nh=37811,ih=37812,sh=37813,rh=37814,oh=37815,ah=37816,lh=37817,ch=37818,hh=37819,uh=37820,dh=37821,fh=36492,ph=36494,mh=36495,gh=36283,xh=36284,_h=36285,vh=36286,Km=3200,qh=0,Jm=1,ns="",Dn="srgb",Pr="srgb-linear",Ya="linear",ae="srgb",Ws=7680,Bu=519,Qm=512,tg=513,eg=514,Yh=515,ng=516,ig=517,$h=518,sg=519,Ou=35044,zu="300 es",ui=2e3,$a=2001;function dp(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ja(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function rg(){const s=ja("canvas");return s.style.display="block",s}const ku={};function Vu(...s){const t="THREE."+s.shift();console.log(t,...s)}function Ft(...s){const t="THREE."+s.shift();console.warn(t,...s)}function Jt(...s){const t="THREE."+s.shift();console.error(t,...s)}function Eo(...s){const t=s.join(" ");t in ku||(ku[t]=!0,Ft(...s))}function og(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}class Bs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gu=1234567;const go=Math.PI/180,Ir=180/Math.PI;function Br(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(je[s&255]+je[s>>8&255]+je[s>>16&255]+je[s>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]).toLowerCase()}function Ot(s,t,e){return Math.max(t,Math.min(e,s))}function jh(s,t){return(s%t+t)%t}function ag(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function lg(s,t,e){return s!==t?(e-s)/(t-s):0}function xo(s,t,e){return(1-e)*s+e*t}function cg(s,t,e,n){return xo(s,t,1-Math.exp(-e*n))}function hg(s,t=1){return t-Math.abs(jh(s,t*2)-t)}function ug(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function dg(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function fg(s,t){return s+Math.floor(Math.random()*(t-s+1))}function pg(s,t){return s+Math.random()*(t-s)}function mg(s){return s*(.5-Math.random())}function gg(s){s!==void 0&&(Gu=s);let t=Gu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function xg(s){return s*go}function _g(s){return s*Ir}function vg(s){return(s&s-1)===0&&s!==0}function yg(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Mg(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Sg(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*d,l*u,a*c);break;case"YZY":s.set(l*u,a*h,l*d,a*c);break;case"ZXZ":s.set(l*d,l*u,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*h,a*c);break;default:Ft("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function vr(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function rn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Za={DEG2RAD:go,RAD2DEG:Ir,generateUUID:Br,clamp:Ot,euclideanModulo:jh,mapLinear:ag,inverseLerp:lg,lerp:xo,damp:cg,pingpong:hg,smoothstep:ug,smootherstep:dg,randInt:fg,randFloat:pg,randFloatSpread:mg,seededRandom:gg,degToRad:xg,radToDeg:_g,isPowerOfTwo:vg,ceilPowerOfTwo:yg,floorPowerOfTwo:Mg,setQuaternionFromProperEuler:Sg,normalize:rn,denormalize:vr};class Pt{constructor(t=0,e=0){Pt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ot(this.x,t.x,e.x),this.y=Ot(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ot(this.x,t,e),this.y=Ot(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ot(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ot(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}let ei=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a<=0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a>=1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*_;m<0&&(u=-u,f=-f,g=-g,_=-_,m=-m);let p=1-a;if(m<.9995){const x=Math.acos(m),y=Math.sin(x);p=Math.sin(p*x)/y,a=Math.sin(a*x)/y,l=l*p+u*a,c=c*p+f*a,h=h*p+g*a,d=d*p+_*a}else{l=l*p+u*a,c=c*p+f*a,h=h*p+g*a,d=d*p+_*a;const x=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=x,c*=x,h*=x,d*=x}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-a*f,t[e+2]=c*g+h*f+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),u=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Ft("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ot(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Hu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Hu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ot(this.x,t.x,e.x),this.y=Ot(this.y,t.y,e.y),this.z=Ot(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ot(this.x,t,e),this.y=Ot(this.y,t,e),this.z=Ot(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ot(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ml.copy(this).projectOnVector(t),this.sub(Ml)}reflect(t){return this.sub(Ml.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ot(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ml=new N,Hu=new ei;class kt{constructor(t,e,n,i,r,o,a,l,c){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],x=i[1],y=i[4],v=i[7],M=i[2],w=i[5],E=i[8];return r[0]=o*_+a*x+l*M,r[3]=o*m+a*y+l*w,r[6]=o*p+a*v+l*E,r[1]=c*_+h*x+d*M,r[4]=c*m+h*y+d*w,r[7]=c*p+h*v+d*E,r[2]=u*_+f*x+g*M,r[5]=u*m+f*y+g*w,r[8]=u*p+f*v+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,g=e*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Sl.makeScale(t,e)),this}rotate(t){return this.premultiply(Sl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Sl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Sl=new kt,Wu=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xu=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bg(){const s={enabled:!0,workingColorSpace:Pr,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ae&&(i.r=Bi(i.r),i.g=Bi(i.g),i.b=Bi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ae&&(i.r=Ar(i.r),i.g=Ar(i.g),i.b=Ar(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ns?Ya:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Eo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Eo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Pr]:{primaries:t,whitePoint:n,transfer:Ya,toXYZ:Wu,fromXYZ:Xu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Dn},outputColorSpaceConfig:{drawingBufferColorSpace:Dn}},[Dn]:{primaries:t,whitePoint:n,transfer:ae,toXYZ:Wu,fromXYZ:Xu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Dn}}}),s}const Qt=bg();function Bi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ar(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Xs;class wg{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Xs===void 0&&(Xs=ja("canvas")),Xs.width=t.width,Xs.height=t.height;const i=Xs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Xs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ja("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Bi(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Bi(e[n]/255)*255):e[n]=Bi(e[n]);return{data:e,width:t.width,height:t.height}}else return Ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Eg=0;class Zh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=Br(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(bl(i[o].image)):r.push(bl(i[o]))}else r=bl(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function bl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?wg.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ft("Texture: Unable to serialize Texture."),{})}let Ag=0;const wl=new N;class ln extends Bs{constructor(t=ln.DEFAULT_IMAGE,e=ln.DEFAULT_MAPPING,n=Fi,i=Fi,r=Qe,o=Ls,a=Kn,l=En,c=ln.DEFAULT_ANISOTROPY,h=ns){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=Br(),this.name="",this.source=new Zh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wl).x}get height(){return this.source.getSize(wl).y}get depth(){return this.source.getSize(wl).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Ft(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Ft(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case kc:t.x=t.x-Math.floor(t.x);break;case Fi:t.x=t.x<0?0:1;break;case Vc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case kc:t.y=t.y-Math.floor(t.y);break;case Fi:t.y=t.y<0?0:1;break;case Vc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=rp;ln.DEFAULT_ANISOTROPY=1;class le{constructor(t=0,e=0,n=0,i=1){le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,v=(f+1)/2,M=(p+1)/2,w=(h+u)/4,E=(d+_)/4,C=(g+m)/4;return y>v&&y>M?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=w/n,r=E/n):v>M?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=w/i,r=C/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=E/r,i=C/r),this.set(n,i,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(d-_)/x,this.z=(u-h)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ot(this.x,t.x,e.x),this.y=Ot(this.y,t.y,e.y),this.z=Ot(this.z,t.z,e.z),this.w=Ot(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ot(this.x,t,e),this.y=Ot(this.y,t,e),this.z=Ot(this.z,t,e),this.w=Ot(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ot(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tg extends Bs{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);const i={width:t,height:e,depth:n.depth},r=new ln(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Qe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Zh(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pi extends Tg{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class fp extends ln{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=qe,this.minFilter=qe,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cg extends ln{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=qe,this.minFilter=qe,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ue{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Wn):Wn.fromBufferAttribute(r,o),Wn.applyMatrix4(t.matrixWorld),this.expandByPoint(Wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Bo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bo.copy(n.boundingBox)),Bo.applyMatrix4(t.matrixWorld),this.union(Bo)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Wn),Wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gr),Oo.subVectors(this.max,Gr),qs.subVectors(t.a,Gr),Ys.subVectors(t.b,Gr),$s.subVectors(t.c,Gr),Wi.subVectors(Ys,qs),Xi.subVectors($s,Ys),ms.subVectors(qs,$s);let e=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-ms.z,ms.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,ms.z,0,-ms.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-ms.y,ms.x,0];return!El(e,qs,Ys,$s,Oo)||(e=[1,0,0,0,1,0,0,0,1],!El(e,qs,Ys,$s,Oo))?!1:(zo.crossVectors(Wi,Xi),e=[zo.x,zo.y,zo.z],El(e,qs,Ys,$s,Oo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const yi=[new N,new N,new N,new N,new N,new N,new N,new N],Wn=new N,Bo=new Ue,qs=new N,Ys=new N,$s=new N,Wi=new N,Xi=new N,ms=new N,Gr=new N,Oo=new N,zo=new N,gs=new N;function El(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){gs.fromArray(s,r);const a=i.x*Math.abs(gs.x)+i.y*Math.abs(gs.y)+i.z*Math.abs(gs.z),l=t.dot(gs),c=e.dot(gs),h=n.dot(gs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Rg=new Ue,Hr=new N,Al=new N;class Or{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Rg.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Hr.subVectors(t,this.center);const e=Hr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Hr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Al.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Hr.copy(t.center).add(Al)),this.expandByPoint(Hr.copy(t.center).sub(Al))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Mi=new N,Tl=new N,ko=new N,qi=new N,Cl=new N,Vo=new N,Rl=new N;let Os=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Mi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mi.copy(this.origin).addScaledVector(this.direction,e),Mi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Tl.copy(t).add(e).multiplyScalar(.5),ko.copy(e).sub(t).normalize(),qi.copy(this.origin).sub(Tl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ko),a=qi.dot(this.direction),l=-qi.dot(ko),c=qi.lengthSq(),h=Math.abs(1-o*o);let d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Tl).addScaledVector(ko,u),f}intersectSphere(t,e){Mi.subVectors(t.center,this.origin);const n=Mi.dot(this.direction),i=Mi.dot(Mi)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Mi)!==null}intersectTriangle(t,e,n,i,r){Cl.subVectors(e,t),Vo.subVectors(n,t),Rl.crossVectors(Cl,Vo);let o=this.direction.dot(Rl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qi.subVectors(this.origin,t);const l=a*this.direction.dot(Vo.crossVectors(qi,Vo));if(l<0)return null;const c=a*this.direction.dot(Cl.cross(qi));if(c<0||l+c>o)return null;const h=-a*qi.dot(Rl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class Xt{constructor(t,e,n,i,r,o,a,l,c,h,d,u,f,g,_,m){Xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,d,u,f,g,_,m)}set(t,e,n,i,r,o,a,l,c,h,d,u,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,i=1/js.setFromMatrixColumn(t,0).length(),r=1/js.setFromMatrixColumn(t,1).length(),o=1/js.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=o*h,f=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,g=c*h,_=c*d;e[0]=u+_*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,g=c*h,_=c*d;e[0]=u-_*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,f=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-_*d}else if(t.order==="XZY"){const u=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Pg,t,Ig)}lookAt(t,e,n){const i=this.elements;return Mn.subVectors(t,e),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Yi.crossVectors(n,Mn),Yi.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Yi.crossVectors(n,Mn)),Yi.normalize(),Go.crossVectors(Mn,Yi),i[0]=Yi.x,i[4]=Go.x,i[8]=Mn.x,i[1]=Yi.y,i[5]=Go.y,i[9]=Mn.y,i[2]=Yi.z,i[6]=Go.z,i[10]=Mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],x=n[3],y=n[7],v=n[11],M=n[15],w=i[0],E=i[4],C=i[8],S=i[12],b=i[1],R=i[5],L=i[9],P=i[13],D=i[2],B=i[6],U=i[10],k=i[14],H=i[3],q=i[7],K=i[11],Q=i[15];return r[0]=o*w+a*b+l*D+c*H,r[4]=o*E+a*R+l*B+c*q,r[8]=o*C+a*L+l*U+c*K,r[12]=o*S+a*P+l*k+c*Q,r[1]=h*w+d*b+u*D+f*H,r[5]=h*E+d*R+u*B+f*q,r[9]=h*C+d*L+u*U+f*K,r[13]=h*S+d*P+u*k+f*Q,r[2]=g*w+_*b+m*D+p*H,r[6]=g*E+_*R+m*B+p*q,r[10]=g*C+_*L+m*U+p*K,r[14]=g*S+_*P+m*k+p*Q,r[3]=x*w+y*b+v*D+M*H,r[7]=x*E+y*R+v*B+M*q,r[11]=x*C+y*L+v*U+M*K,r[15]=x*S+y*P+v*k+M*Q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15],x=l*f-c*u,y=a*f-c*d,v=a*u-l*d,M=o*f-c*h,w=o*u-l*h,E=o*d-a*h;return e*(_*x-m*y+p*v)-n*(g*x-m*M+p*w)+i*(g*y-_*M+p*E)-r*(g*v-_*w+m*E)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],x=d*m*c-_*u*c+_*l*f-a*m*f-d*l*p+a*u*p,y=g*u*c-h*m*c-g*l*f+o*m*f+h*l*p-o*u*p,v=h*_*c-g*d*c+g*a*f-o*_*f-h*a*p+o*d*p,M=g*d*l-h*_*l-g*a*u+o*_*u+h*a*m-o*d*m,w=e*x+n*y+i*v+r*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return t[0]=x*E,t[1]=(_*u*r-d*m*r-_*i*f+n*m*f+d*i*p-n*u*p)*E,t[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*p+n*l*p)*E,t[3]=(d*l*r-a*u*r-d*i*c+n*u*c+a*i*f-n*l*f)*E,t[4]=y*E,t[5]=(h*m*r-g*u*r+g*i*f-e*m*f-h*i*p+e*u*p)*E,t[6]=(g*l*r-o*m*r-g*i*c+e*m*c+o*i*p-e*l*p)*E,t[7]=(o*u*r-h*l*r+h*i*c-e*u*c-o*i*f+e*l*f)*E,t[8]=v*E,t[9]=(g*d*r-h*_*r-g*n*f+e*_*f+h*n*p-e*d*p)*E,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*p+e*a*p)*E,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*f-e*a*f)*E,t[12]=M*E,t[13]=(h*_*i-g*d*i+g*n*u-e*_*u-h*n*m+e*d*m)*E,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*m-e*a*m)*E,t[15]=(o*d*i-h*a*i+h*n*l-e*d*l-o*n*u+e*a*u)*E,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,g=r*d,_=o*h,m=o*d,p=a*d,x=l*c,y=l*h,v=l*d,M=n.x,w=n.y,E=n.z;return i[0]=(1-(_+p))*M,i[1]=(f+v)*M,i[2]=(g-y)*M,i[3]=0,i[4]=(f-v)*w,i[5]=(1-(u+p))*w,i[6]=(m+x)*w,i[7]=0,i[8]=(g+y)*E,i[9]=(m-x)*E,i[10]=(1-(u+_))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;if(t.x=i[12],t.y=i[13],t.z=i[14],this.determinant()===0)return n.set(1,1,1),e.identity(),this;let r=js.set(i[0],i[1],i[2]).length();const o=js.set(i[4],i[5],i[6]).length(),a=js.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),Xn.copy(this);const c=1/r,h=1/o,d=1/a;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=h,Xn.elements[5]*=h,Xn.elements[6]*=h,Xn.elements[8]*=d,Xn.elements[9]*=d,Xn.elements[10]*=d,e.setFromRotationMatrix(Xn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=ui,l=!1){const c=this.elements,h=2*r/(e-t),d=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===ui)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===$a)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=ui,l=!1){const c=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i);let g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===ui)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===$a)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const js=new N,Xn=new Xt,Pg=new N(0,0,0),Ig=new N(1,1,1),Yi=new N,Go=new N,Mn=new N,qu=new Xt,Yu=new ei;class kn{constructor(t=0,e=0,n=0,i=kn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ot(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return qu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yu.setFromEuler(this),this.setFromQuaternion(Yu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kn.DEFAULT_ORDER="XYZ";class Kh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Lg=0;const $u=new N,Zs=new ei,Si=new Xt,Ho=new N,Wr=new N,Dg=new N,Ng=new ei,ju=new N(1,0,0),Zu=new N(0,1,0),Ku=new N(0,0,1),Ju={type:"added"},Fg={type:"removed"},Ks={type:"childadded",child:null},Pl={type:"childremoved",child:null};class be extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lg++}),this.uuid=Br(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=be.DEFAULT_UP.clone();const t=new N,e=new kn,n=new ei,i=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xt},normalMatrix:{value:new kt}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zs.setFromAxisAngle(t,e),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(t,e){return Zs.setFromAxisAngle(t,e),this.quaternion.premultiply(Zs),this}rotateX(t){return this.rotateOnAxis(ju,t)}rotateY(t){return this.rotateOnAxis(Zu,t)}rotateZ(t){return this.rotateOnAxis(Ku,t)}translateOnAxis(t,e){return $u.copy(t).applyQuaternion(this.quaternion),this.position.add($u.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ju,t)}translateY(t){return this.translateOnAxis(Zu,t)}translateZ(t){return this.translateOnAxis(Ku,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ho.copy(t):Ho.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(Wr,Ho,this.up):Si.lookAt(Ho,Wr,this.up),this.quaternion.setFromRotationMatrix(Si),i&&(Si.extractRotation(i.matrixWorld),Zs.setFromRotationMatrix(Si),this.quaternion.premultiply(Zs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ju),Ks.child=t,this.dispatchEvent(Ks),Ks.child=null):Jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Fg),Pl.child=t,this.dispatchEvent(Pl),Pl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Si.multiply(t.parent.matrixWorld)),t.applyMatrix4(Si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ju),Ks.child=t,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,t,Dg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,Ng,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}be.DEFAULT_UP=new N(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qn=new N,bi=new N,Il=new N,wi=new N,Js=new N,Qs=new N,Qu=new N,Ll=new N,Dl=new N,Nl=new N,Fl=new le,Ul=new le,Bl=new le;class ye{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),qn.subVectors(t,e),i.cross(qn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){qn.subVectors(i,e),bi.subVectors(n,e),Il.subVectors(t,e);const o=qn.dot(qn),a=qn.dot(bi),l=qn.dot(Il),c=bi.dot(bi),h=bi.dot(Il),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wi.x),l.addScaledVector(o,wi.y),l.addScaledVector(a,wi.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return Fl.setScalar(0),Ul.setScalar(0),Bl.setScalar(0),Fl.fromBufferAttribute(t,e),Ul.fromBufferAttribute(t,n),Bl.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Fl,r.x),o.addScaledVector(Ul,r.y),o.addScaledVector(Bl,r.z),o}static isFrontFacing(t,e,n,i){return qn.subVectors(n,e),bi.subVectors(t,e),qn.cross(bi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qn.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),qn.cross(bi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ye.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ye.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return ye.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return ye.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ye.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Js.subVectors(i,n),Qs.subVectors(r,n),Ll.subVectors(t,n);const l=Js.dot(Ll),c=Qs.dot(Ll);if(l<=0&&c<=0)return e.copy(n);Dl.subVectors(t,i);const h=Js.dot(Dl),d=Qs.dot(Dl);if(h>=0&&d<=h)return e.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Js,o);Nl.subVectors(t,r);const f=Js.dot(Nl),g=Qs.dot(Nl);if(g>=0&&f<=g)return e.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Qs,a);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Qu.subVectors(r,i),a=(d-h)/(d-h+(f-g)),e.copy(i).addScaledVector(Qu,a);const p=1/(m+_+u);return o=_*p,a=u*p,e.copy(n).addScaledVector(Js,o).addScaledVector(Qs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const pp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},Wo={h:0,s:0,l:0};function Ol(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Dt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Dn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Qt.workingColorSpace){if(t=jh(t,1),e=Ot(e,0,1),n=Ot(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ol(o,r,t+1/3),this.g=Ol(o,r,t),this.b=Ol(o,r,t-1/3)}return Qt.colorSpaceToWorking(this,i),this}setStyle(t,e=Dn){function n(r){r!==void 0&&parseFloat(r)<1&&Ft("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ft("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Ft("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Dn){const n=pp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ft("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bi(t.r),this.g=Bi(t.g),this.b=Bi(t.b),this}copyLinearToSRGB(t){return this.r=Ar(t.r),this.g=Ar(t.g),this.b=Ar(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Dn){return Qt.workingToColorSpace(Ze.copy(this),t),Math.round(Ot(Ze.r*255,0,255))*65536+Math.round(Ot(Ze.g*255,0,255))*256+Math.round(Ot(Ze.b*255,0,255))}getHexString(t=Dn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.workingToColorSpace(Ze.copy(this),e);const n=Ze.r,i=Ze.g,r=Ze.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.workingToColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=Dn){Qt.workingToColorSpace(Ze.copy(this),t);const e=Ze.r,n=Ze.g,i=Ze.b;return t!==Dn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL($i),this.setHSL($i.h+t,$i.s+e,$i.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL($i),t.getHSL(Wo);const n=xo($i.h,Wo.h,e),i=xo($i.s,Wo.s,e),r=xo($i.l,Wo.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ze=new Dt;Dt.NAMES=pp;let Ug=0,zs=class extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ug++}),this.uuid=Br(),this.name="",this.type="Material",this.blending=Er,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rc,this.blendDst=Pc,this.blendEquation=Ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=Tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Ft(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Ft(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Er&&(n.blending=this.blending),this.side!==gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Rc&&(n.blendSrc=this.blendSrc),this.blendDst!==Pc&&(n.blendDst=this.blendDst),this.blendEquation!==Ts&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Tr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ws&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ws&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ws&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};class Nn extends zs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=Bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const De=new N,Xo=new Pt;let Bg=0;class $e{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ou,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Xo.fromBufferAttribute(this,e),Xo.applyMatrix3(t),this.setXY(e,Xo.x,Xo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=vr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=rn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vr(e,this.array)),e}setX(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vr(e,this.array)),e}setY(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vr(e,this.array)),e}setW(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),i=rn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),i=rn(i,this.array),r=rn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ou&&(t.usage=this.usage),t}}class mp extends $e{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class gp extends $e{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Re extends $e{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Og=0;const Rn=new Xt,zl=new be,tr=new N,Sn=new Ue,Xr=new Ue,He=new N;class hn extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=Br(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dp(t)?gp:mp)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Rn.makeRotationFromQuaternion(t),this.applyMatrix4(Rn),this}rotateX(t){return Rn.makeRotationX(t),this.applyMatrix4(Rn),this}rotateY(t){return Rn.makeRotationY(t),this.applyMatrix4(Rn),this}rotateZ(t){return Rn.makeRotationZ(t),this.applyMatrix4(Rn),this}translate(t,e,n){return Rn.makeTranslation(t,e,n),this.applyMatrix4(Rn),this}scale(t,e,n){return Rn.makeScale(t,e,n),this.applyMatrix4(Rn),this}lookAt(t){return zl.lookAt(t),zl.updateMatrix(),this.applyMatrix4(zl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Re(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ue);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Or);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Xr.setFromBufferAttribute(a),this.morphTargetsRelative?(He.addVectors(Sn.min,Xr.min),Sn.expandByPoint(He),He.addVectors(Sn.max,Xr.max),Sn.expandByPoint(He)):(Sn.expandByPoint(Xr.min),Sn.expandByPoint(Xr.max))}Sn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)He.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(He));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)He.fromBufferAttribute(a,c),l&&(tr.fromBufferAttribute(t,c),He.add(tr)),i=Math.max(i,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $e(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new N,l[C]=new N;const c=new N,h=new N,d=new N,u=new Pt,f=new Pt,g=new Pt,_=new N,m=new N;function p(C,S,b){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,b),u.fromBufferAttribute(r,C),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,b),h.sub(c),d.sub(c),f.sub(u),g.sub(u);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(R),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(R),a[C].add(_),a[S].add(_),a[b].add(_),l[C].add(m),l[S].add(m),l[b].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let C=0,S=x.length;C<S;++C){const b=x[C],R=b.start,L=b.count;for(let P=R,D=R+L;P<D;P+=3)p(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const y=new N,v=new N,M=new N,w=new N;function E(C){M.fromBufferAttribute(i,C),w.copy(M);const S=a[C];y.copy(S),y.sub(M.multiplyScalar(M.dot(S))).normalize(),v.crossVectors(w,S);const R=v.dot(l[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,R)}for(let C=0,S=x.length;C<S;++C){const b=x[C],R=b.start,L=b.count;for(let P=R,D=R+L;P<D;P+=3)E(t.getX(P+0)),E(t.getX(P+1)),E(t.getX(P+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,d=new N;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new $e(u,h,d)}if(this.index===null)return Ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new hn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const td=new Xt,xs=new Os,qo=new Or,ed=new N,Yo=new N,$o=new N,jo=new N,kl=new N,Zo=new N,nd=new N,Ko=new N;class Zt extends be{constructor(t=new hn,e=new Nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Zo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(kl.fromBufferAttribute(d,t),o?Zo.addScaledVector(kl,h):Zo.addScaledVector(kl.sub(e),h))}e.add(Zo)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qo.copy(n.boundingSphere),qo.applyMatrix4(r),xs.copy(t.ray).recast(t.near),!(qo.containsPoint(xs.origin)===!1&&(xs.intersectSphere(qo,ed)===null||xs.origin.distanceToSquared(ed)>(t.far-t.near)**2))&&(td.copy(r).invert(),xs.copy(t.ray).applyMatrix4(td),!(n.boundingBox!==null&&xs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,xs)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,M=y;v<M;v+=3){const w=a.getX(v),E=a.getX(v+1),C=a.getX(v+2);i=Jo(this,p,t,n,c,h,d,w,E,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);i=Jo(this,o,t,n,c,h,d,x,y,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,M=y;v<M;v+=3){const w=v,E=v+1,C=v+2;i=Jo(this,p,t,n,c,h,d,w,E,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=m,y=m+1,v=m+2;i=Jo(this,o,t,n,c,h,d,x,y,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function zg(s,t,e,n,i,r,o,a){let l;if(t.side===Ye?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===gi,a),l===null)return null;Ko.copy(a),Ko.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Ko);return c<e.near||c>e.far?null:{distance:c,point:Ko.clone(),object:s}}function Jo(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Yo),s.getVertexPosition(l,$o),s.getVertexPosition(c,jo);const h=zg(s,t,e,n,Yo,$o,jo,nd);if(h){const d=new N;ye.getBarycoord(nd,Yo,$o,jo,d),i&&(h.uv=ye.getInterpolatedAttribute(i,a,l,c,d,new Pt)),r&&(h.uv1=ye.getInterpolatedAttribute(r,a,l,c,d,new Pt)),o&&(h.normal=ye.getInterpolatedAttribute(o,a,l,c,d,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new N,materialIndex:0};ye.getNormal(Yo,$o,jo,u.normal),h.face=u,h.barycoord=d}return h}class hs extends hn{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Re(c,3)),this.setAttribute("normal",new Re(h,3)),this.setAttribute("uv",new Re(d,2));function g(_,m,p,x,y,v,M,w,E,C,S){const b=v/E,R=M/C,L=v/2,P=M/2,D=w/2,B=E+1,U=C+1;let k=0,H=0;const q=new N;for(let K=0;K<U;K++){const Q=K*R-P;for(let et=0;et<B;et++){const yt=et*b-L;q[_]=yt*x,q[m]=Q*y,q[p]=D,c.push(q.x,q.y,q.z),q[_]=0,q[m]=0,q[p]=w>0?1:-1,h.push(q.x,q.y,q.z),d.push(et/E),d.push(1-K/C),k+=1}}for(let K=0;K<C;K++)for(let Q=0;Q<E;Q++){const et=u+Q+B*K,yt=u+Q+B*(K+1),Yt=u+(Q+1)+B*(K+1),qt=u+(Q+1)+B*K;l.push(et,yt,qt),l.push(yt,Yt,qt),H+=6}a.addGroup(f,H,S),f+=H,u+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Lr(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function on(s){const t={};for(let e=0;e<s.length;e++){const n=Lr(s[e]);for(const i in n)t[i]=n[i]}return t}function kg(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function xp(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const Vg={clone:Lr,merge:on};var Gg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends zs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gg,this.fragmentShader=Hg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Lr(t.uniforms),this.uniformsGroups=kg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class _p extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ji=new N,id=new Pt,sd=new Pt;class gn extends _p{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ir*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(go*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ir*2*Math.atan(Math.tan(go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ji.x,ji.y).multiplyScalar(-t/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-t/ji.z)}getViewSize(t,e){return this.getViewBounds(t,id,sd),e.subVectors(sd,id)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(go*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const er=-90,nr=1;class Wg extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new gn(er,nr,t,e);i.layers=this.layers,this.add(i);const r=new gn(er,nr,t,e);r.layers=this.layers,this.add(r);const o=new gn(er,nr,t,e);o.layers=this.layers,this.add(o);const a=new gn(er,nr,t,e);a.layers=this.layers,this.add(a);const l=new gn(er,nr,t,e);l.layers=this.layers,this.add(l);const c=new gn(er,nr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===ui)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===$a)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class vp extends ln{constructor(t=[],e=Fs,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class yp extends pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new vp(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new hs(5,5,5),r=new _i({name:"CubemapFromEquirect",uniforms:Lr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ye,blending:Ui});r.uniforms.tEquirect.value=e;const o=new Zt(i,r),a=e.minFilter;return e.minFilter===Ls&&(e.minFilter=Qe),new Wg(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}class On extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xg={type:"move"};class Vl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new On,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new On,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new On,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Xg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new On;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Jh{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Dt(t),this.near=e,this.far=n}clone(){return new Jh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Mp extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Sp extends ln{constructor(t=null,e=1,n=1,i,r,o,a,l,c=qe,h=qe,d,u){super(null,o,a,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rd extends $e{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ir=new Xt,od=new Xt,Qo=[],ad=new Ue,qg=new Xt,qr=new Zt,Yr=new Or;class Yg extends Zt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new rd(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,qg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ue),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ir),ad.copy(t.boundingBox).applyMatrix4(ir),this.boundingBox.union(ad)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Or),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ir),Yr.copy(t.boundingSphere).applyMatrix4(ir),this.boundingSphere.union(Yr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(qr.geometry=this.geometry,qr.material=this.material,qr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yr.copy(this.boundingSphere),Yr.applyMatrix4(n),t.ray.intersectsSphere(Yr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ir),od.multiplyMatrices(n,ir),qr.matrixWorld=od,qr.raycast(t,Qo);for(let o=0,a=Qo.length;o<a;o++){const l=Qo[o];l.instanceId=r,l.object=this,e.push(l)}Qo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new rd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Sp(new Float32Array(i*this.count),i,this.count,Gh,Zn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Gl=new N,$g=new N,jg=new kt;let Fn=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Gl.subVectors(n,e).cross($g.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Gl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||jg.getNormalMatrix(t),i=this.coplanarPoint(Gl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const _s=new Or,Zg=new Pt(.5,.5),ta=new N;class Qh{constructor(t=new Fn,e=new Fn,n=new Fn,i=new Fn,r=new Fn,o=new Fn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ui,n=!1){const i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],x=r[12],y=r[13],v=r[14],M=r[15];if(i[0].setComponents(c-o,f-h,p-g,M-x).normalize(),i[1].setComponents(c+o,f+h,p+g,M+x).normalize(),i[2].setComponents(c+a,f+d,p+_,M+y).normalize(),i[3].setComponents(c-a,f-d,p-_,M-y).normalize(),n)i[4].setComponents(l,u,m,v).normalize(),i[5].setComponents(c-l,f-u,p-m,M-v).normalize();else if(i[4].setComponents(c-l,f-u,p-m,M-v).normalize(),e===ui)i[5].setComponents(c+l,f+u,p+m,M+v).normalize();else if(e===$a)i[5].setComponents(l,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(t){_s.center.set(0,0,0);const e=Zg.distanceTo(t.center);return _s.radius=.7071067811865476+e,_s.applyMatrix4(t.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ta.x=i.normal.x>0?t.max.x:t.min.x,ta.y=i.normal.y>0?t.max.y:t.min.y,ta.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ta)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class tu extends zs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ka=new N,Ja=new N,ld=new Xt,$r=new Os,ea=new Or,Hl=new N,cd=new N;class Kg extends be{constructor(t=new hn,e=new tu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Ka.fromBufferAttribute(e,i-1),Ja.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Ka.distanceTo(Ja);t.setAttribute("lineDistance",new Re(n,1))}else Ft("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(i),ea.radius+=r,t.ray.intersectsSphere(ea)===!1)return;ld.copy(i).invert(),$r.copy(t.ray).applyMatrix4(ld);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=h.getX(_),x=h.getX(_+1),y=na(this,t,$r,l,p,x,_);y&&e.push(y)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=na(this,t,$r,l,_,m,g-1);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=na(this,t,$r,l,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){const _=na(this,t,$r,l,g-1,f,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function na(s,t,e,n,i,r,o){const a=s.geometry.attributes.position;if(Ka.fromBufferAttribute(a,i),Ja.fromBufferAttribute(a,r),e.distanceSqToSegment(Ka,Ja,Hl,cd)>n)return;Hl.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Hl);if(!(c<t.near||c>t.far))return{distance:c,point:cd.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const hd=new N,ud=new N;class bp extends Kg{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)hd.fromBufferAttribute(e,i),ud.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+hd.distanceTo(ud);t.setAttribute("lineDistance",new Re(n,1))}else Ft("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ao extends ln{constructor(t,e,n=xi,i,r,o,a=qe,l=qe,c,h=ki,d=1){if(h!==ki&&h!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Zh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Jg extends Ao{constructor(t,e=xi,n=Fs,i,r,o=qe,a=qe,l,c=ki){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class wp extends ln{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Qa extends hn{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],u=[],f=[];let g=0;const _=[],m=n/2;let p=0;x(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Re(d,3)),this.setAttribute("normal",new Re(u,3)),this.setAttribute("uv",new Re(f,2));function x(){const v=new N,M=new N;let w=0;const E=(e-t)/n;for(let C=0;C<=r;C++){const S=[],b=C/r,R=b*(e-t)+t;for(let L=0;L<=i;L++){const P=L/i,D=P*l+a,B=Math.sin(D),U=Math.cos(D);M.x=R*B,M.y=-b*n+m,M.z=R*U,d.push(M.x,M.y,M.z),v.set(B,E,U).normalize(),u.push(v.x,v.y,v.z),f.push(P,1-b),S.push(g++)}_.push(S)}for(let C=0;C<i;C++)for(let S=0;S<r;S++){const b=_[S][C],R=_[S+1][C],L=_[S+1][C+1],P=_[S][C+1];(t>0||S!==0)&&(h.push(b,R,P),w+=3),(e>0||S!==r-1)&&(h.push(R,L,P),w+=3)}c.addGroup(p,w,0),p+=w}function y(v){const M=g,w=new Pt,E=new N;let C=0;const S=v===!0?t:e,b=v===!0?1:-1;for(let L=1;L<=i;L++)d.push(0,m*b,0),u.push(0,b,0),f.push(.5,.5),g++;const R=g;for(let L=0;L<=i;L++){const D=L/i*l+a,B=Math.cos(D),U=Math.sin(D);E.x=S*U,E.y=m*b,E.z=S*B,d.push(E.x,E.y,E.z),u.push(0,b,0),w.x=B*.5+.5,w.y=U*.5*b+.5,f.push(w.x,w.y),g++}for(let L=0;L<i;L++){const P=M+L,D=R+L;v===!0?h.push(D,D+1,P):h.push(D+1,D,P),C+=3}c.addGroup(p,C,v===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qa(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class zr extends hn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const x=p*u-o;for(let y=0;y<c;y++){const v=y*d-r;g.push(v,-x,0),_.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const y=x+c*p,v=x+c*(p+1),M=x+1+c*(p+1),w=x+1+c*p;f.push(y,v,w),f.push(v,M,w)}this.setIndex(f),this.setAttribute("position",new Re(g,3)),this.setAttribute("normal",new Re(_,3)),this.setAttribute("uv",new Re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zr(t.width,t.height,t.widthSegments,t.heightSegments)}}class _o extends hn{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new N,u=new N,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const x=[],y=p/n;let v=0;p===0&&o===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let M=0;M<=e;M++){const w=M/e;d.x=-t*Math.cos(i+w*r)*Math.sin(o+y*a),d.y=t*Math.cos(o+y*a),d.z=t*Math.sin(i+w*r)*Math.sin(o+y*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(w+v,1-y),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const y=h[p][x+1],v=h[p][x],M=h[p+1][x],w=h[p+1][x+1];(p!==0||o>0)&&f.push(y,v,w),(p!==n-1||l<Math.PI)&&f.push(v,M,w)}this.setIndex(f),this.setAttribute("position",new Re(g,3)),this.setAttribute("normal",new Re(_,3)),this.setAttribute("uv",new Re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _o(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class tl extends hn{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new N,d=new N,u=new N;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*r,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(_),d.y=(t+e*Math.cos(m))*Math.sin(_),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,x=(i+1)*f+g;o.push(_,m,x),o.push(m,p,x)}this.setIndex(o),this.setAttribute("position",new Re(a,3)),this.setAttribute("normal",new Re(l,3)),this.setAttribute("uv",new Re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tl(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Qg extends _i{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Us extends zs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qh,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class t0 extends zs{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qh,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=Bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class e0 extends zs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Km,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class n0 extends zs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class cl extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class i0 extends cl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Wl=new Xt,dd=new N,fd=new N;class eu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qh,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;dd.setFromMatrixPosition(t.matrixWorld),e.position.copy(dd),fd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fd),e.updateMatrixWorld(),Wl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wl,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class s0 extends eu{constructor(){super(new gn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=Ir*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class r0 extends cl{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new s0}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class o0 extends eu{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0}}class Ep extends cl{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new o0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class nu extends _p{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class a0 extends eu{constructor(){super(new nu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ap extends cl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new a0}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class l0 extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class c0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const pd=new Xt;class h0{constructor(t,e,n=0,i=1/0){this.ray=new Os(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Kh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Jt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return pd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pd),this}intersectObject(t,e=!0,n=[]){return yh(t,this,n,e),n.sort(md),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)yh(t[i],this,n,e);return n.sort(md),n}}function md(s,t){return s.distance-t.distance}function yh(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)yh(r[o],t,e,!0)}}class gd{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Ot(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ot(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const xd=new N,ia=new N,sr=new N,rr=new N,Xl=new N,u0=new N,d0=new N;class Vn{constructor(t=new N,e=new N){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){xd.subVectors(t,this.start),ia.subVectors(this.end,this.start);const n=ia.dot(ia);let r=ia.dot(xd)/n;return e&&(r=Ot(r,0,1)),r}closestPointToPoint(t,e,n){const i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(t,e=u0,n=d0){const i=10000000000000001e-32;let r,o;const a=this.start,l=t.start,c=this.end,h=t.end;sr.subVectors(c,a),rr.subVectors(h,l),Xl.subVectors(a,l);const d=sr.dot(sr),u=rr.dot(rr),f=rr.dot(Xl);if(d<=i&&u<=i)return e.copy(a),n.copy(l),e.sub(n),e.dot(e);if(d<=i)r=0,o=f/u,o=Ot(o,0,1);else{const g=sr.dot(Xl);if(u<=i)o=0,r=Ot(-g/d,0,1);else{const _=sr.dot(rr),m=d*u-_*_;m!==0?r=Ot((_*f-g*u)/m,0,1):r=0,o=(_*r+f)/u,o<0?(o=0,r=Ot(-g/d,0,1)):o>1&&(o=1,r=Ot((_-g)/d,0,1))}}return e.copy(a).add(sr.multiplyScalar(r)),n.copy(l).add(rr.multiplyScalar(o)),e.sub(n),e.dot(e)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class f0 extends bp{constructor(t=10,e=10,n=4473924,i=8947848){n=new Dt(n),i=new Dt(i);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let u=0,f=0,g=-a;u<=e;u++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=u===r?n:i;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}const h=new hn;h.setAttribute("position",new Re(l,3)),h.setAttribute("color",new Re(c,3));const d=new tu({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const sa=new Ue;class p0 extends bp{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new hn;r.setIndex(new $e(n,1)),r.setAttribute("position",new $e(i,3)),super(r,new tu({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&sa.setFromObject(this.object),sa.isEmpty())return;const t=sa.min,e=sa.max,n=this.geometry.attributes.position,i=n.array;i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=t.x,i[4]=e.y,i[5]=e.z,i[6]=t.x,i[7]=t.y,i[8]=e.z,i[9]=e.x,i[10]=t.y,i[11]=e.z,i[12]=e.x,i[13]=e.y,i[14]=t.z,i[15]=t.x,i[16]=e.y,i[17]=t.z,i[18]=t.x,i[19]=t.y,i[20]=t.z,i[21]=e.x,i[22]=t.y,i[23]=t.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class m0 extends Bs{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Ft("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function _d(s,t,e,n){const i=g0(n);switch(e){case hp:return s*t;case Gh:return s*t/i.components*i.byteLength;case Hh:return s*t/i.components*i.byteLength;case Rr:return s*t*2/i.components*i.byteLength;case Wh:return s*t*2/i.components*i.byteLength;case up:return s*t*3/i.components*i.byteLength;case Kn:return s*t*4/i.components*i.byteLength;case Xh:return s*t*4/i.components*i.byteLength;case Ba:case Oa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case za:case ka:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Hc:case Xc:return Math.max(s,16)*Math.max(t,8)/4;case Gc:case Wc:return Math.max(s,8)*Math.max(t,8)/2;case qc:case Yc:case jc:case Zc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case $c:case Kc:case Jc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Qc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case th:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case eh:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case nh:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ih:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case sh:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case rh:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case oh:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case ah:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case lh:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ch:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case hh:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case uh:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case dh:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case fh:case ph:case mh:return Math.ceil(s/4)*Math.ceil(t/4)*16;case gh:case xh:return Math.ceil(s/4)*Math.ceil(t/4)*8;case _h:case vh:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function g0(s){switch(s){case En:case op:return{byteLength:1,components:1};case bo:case ap:case zi:return{byteLength:2,components:1};case kh:case Vh:return{byteLength:2,components:4};case xi:case zh:case Zn:return{byteLength:4,components:1};case lp:case cp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Co}}));typeof window<"u"&&(window.__THREE__?Ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Co);function Tp(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function x0(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var _0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,v0=`#ifdef USE_ALPHAHASH
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
#endif`,y0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,M0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,b0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,w0=`#ifdef USE_AOMAP
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
#endif`,E0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,A0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,T0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,C0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,R0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,P0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,I0=`#ifdef USE_IRIDESCENCE
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
#endif`,L0=`#ifdef USE_BUMPMAP
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
#endif`,D0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,B0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,O0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,z0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,k0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,V0=`#define PI 3.141592653589793
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
} // validated`,G0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,H0=`vec3 transformedNormal = objectNormal;
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
#endif`,W0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,X0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,q0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Y0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$0="gl_FragColor = linearToOutputTexel( gl_FragColor );",j0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Z0=`#ifdef USE_ENVMAP
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
#endif`,K0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,J0=`#ifdef USE_ENVMAP
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
#endif`,Q0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tx=`#ifdef USE_ENVMAP
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
#endif`,ex=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ix=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rx=`#ifdef USE_GRADIENTMAP
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
}`,ox=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ax=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cx=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,hx=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,ux=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,px=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,gx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xx=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,_x=`#if defined( RE_IndirectDiffuse )
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
#endif`,vx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ex=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ax=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tx=`#if defined( USE_POINTS_UV )
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
#endif`,Cx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Px=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ix=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,Nx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ux=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kx=`#ifdef USE_NORMALMAP
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
#endif`,Vx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Yx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$x=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,t_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,e_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,n_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,i_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,s_=`#ifdef USE_SKINNING
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
#endif`,r_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,o_=`#ifdef USE_SKINNING
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
#endif`,a_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,l_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,c_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,h_=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,u_=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,d_=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,f_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const x_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,__=`uniform sampler2D t2D;
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
}`,v_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,M_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b_=`#include <common>
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
}`,w_=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,E_=`#define DISTANCE
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
}`,A_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,T_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,C_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R_=`uniform float scale;
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
}`,P_=`uniform vec3 diffuse;
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
}`,I_=`#include <common>
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
}`,L_=`uniform vec3 diffuse;
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
}`,D_=`#define LAMBERT
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
}`,N_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,F_=`#define MATCAP
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
}`,U_=`#define MATCAP
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
}`,B_=`#define NORMAL
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
}`,O_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,z_=`#define PHONG
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
}`,k_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
}`,V_=`#define STANDARD
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
}`,G_=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,H_=`#define TOON
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
}`,W_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,X_=`uniform float size;
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
}`,q_=`uniform vec3 diffuse;
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
}`,Y_=`#include <common>
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
}`,$_=`uniform vec3 color;
uniform float opacity;
#include <common>
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
}`,j_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Z_=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:_0,alphahash_pars_fragment:v0,alphamap_fragment:y0,alphamap_pars_fragment:M0,alphatest_fragment:S0,alphatest_pars_fragment:b0,aomap_fragment:w0,aomap_pars_fragment:E0,batching_pars_vertex:A0,batching_vertex:T0,begin_vertex:C0,beginnormal_vertex:R0,bsdfs:P0,iridescence_fragment:I0,bumpmap_pars_fragment:L0,clipping_planes_fragment:D0,clipping_planes_pars_fragment:N0,clipping_planes_pars_vertex:F0,clipping_planes_vertex:U0,color_fragment:B0,color_pars_fragment:O0,color_pars_vertex:z0,color_vertex:k0,common:V0,cube_uv_reflection_fragment:G0,defaultnormal_vertex:H0,displacementmap_pars_vertex:W0,displacementmap_vertex:X0,emissivemap_fragment:q0,emissivemap_pars_fragment:Y0,colorspace_fragment:$0,colorspace_pars_fragment:j0,envmap_fragment:Z0,envmap_common_pars_fragment:K0,envmap_pars_fragment:J0,envmap_pars_vertex:Q0,envmap_physical_pars_fragment:hx,envmap_vertex:tx,fog_vertex:ex,fog_pars_vertex:nx,fog_fragment:ix,fog_pars_fragment:sx,gradientmap_pars_fragment:rx,lightmap_pars_fragment:ox,lights_lambert_fragment:ax,lights_lambert_pars_fragment:lx,lights_pars_begin:cx,lights_toon_fragment:ux,lights_toon_pars_fragment:dx,lights_phong_fragment:fx,lights_phong_pars_fragment:px,lights_physical_fragment:mx,lights_physical_pars_fragment:gx,lights_fragment_begin:xx,lights_fragment_maps:_x,lights_fragment_end:vx,logdepthbuf_fragment:yx,logdepthbuf_pars_fragment:Mx,logdepthbuf_pars_vertex:Sx,logdepthbuf_vertex:bx,map_fragment:wx,map_pars_fragment:Ex,map_particle_fragment:Ax,map_particle_pars_fragment:Tx,metalnessmap_fragment:Cx,metalnessmap_pars_fragment:Rx,morphinstance_vertex:Px,morphcolor_vertex:Ix,morphnormal_vertex:Lx,morphtarget_pars_vertex:Dx,morphtarget_vertex:Nx,normal_fragment_begin:Fx,normal_fragment_maps:Ux,normal_pars_fragment:Bx,normal_pars_vertex:Ox,normal_vertex:zx,normalmap_pars_fragment:kx,clearcoat_normal_fragment_begin:Vx,clearcoat_normal_fragment_maps:Gx,clearcoat_pars_fragment:Hx,iridescence_pars_fragment:Wx,opaque_fragment:Xx,packing:qx,premultiplied_alpha_fragment:Yx,project_vertex:$x,dithering_fragment:jx,dithering_pars_fragment:Zx,roughnessmap_fragment:Kx,roughnessmap_pars_fragment:Jx,shadowmap_pars_fragment:Qx,shadowmap_pars_vertex:t_,shadowmap_vertex:e_,shadowmask_pars_fragment:n_,skinbase_vertex:i_,skinning_pars_vertex:s_,skinning_vertex:r_,skinnormal_vertex:o_,specularmap_fragment:a_,specularmap_pars_fragment:l_,tonemapping_fragment:c_,tonemapping_pars_fragment:h_,transmission_fragment:u_,transmission_pars_fragment:d_,uv_pars_fragment:f_,uv_pars_vertex:p_,uv_vertex:m_,worldpos_vertex:g_,background_vert:x_,background_frag:__,backgroundCube_vert:v_,backgroundCube_frag:y_,cube_vert:M_,cube_frag:S_,depth_vert:b_,depth_frag:w_,distance_vert:E_,distance_frag:A_,equirect_vert:T_,equirect_frag:C_,linedashed_vert:R_,linedashed_frag:P_,meshbasic_vert:I_,meshbasic_frag:L_,meshlambert_vert:D_,meshlambert_frag:N_,meshmatcap_vert:F_,meshmatcap_frag:U_,meshnormal_vert:B_,meshnormal_frag:O_,meshphong_vert:z_,meshphong_frag:k_,meshphysical_vert:V_,meshphysical_frag:G_,meshtoon_vert:H_,meshtoon_frag:W_,points_vert:X_,points_frag:q_,shadow_vert:Y_,shadow_frag:$_,sprite_vert:j_,sprite_frag:Z_},dt={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},ci={basic:{uniforms:on([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:on([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:on([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:on([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:on([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:on([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:on([dt.points,dt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:on([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:on([dt.common,dt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:on([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:on([dt.sprite,dt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distance:{uniforms:on([dt.common,dt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distance_vert,fragmentShader:Vt.distance_frag},shadow:{uniforms:on([dt.lights,dt.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};ci.physical={uniforms:on([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const ra={r:0,b:0,g:0},vs=new kn,K_=new Xt;function J_(s,t,e,n,i,r,o){const a=new Dt(0);let l=r===!0?0:1,c,h,d=null,u=0,f=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function _(y){let v=!1;const M=g(y);M===null?p(a,l):M&&M.isColor&&(p(M,1),v=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(y,v){const M=g(v);M&&(M.isCubeTexture||M.mapping===ll)?(h===void 0&&(h=new Zt(new hs(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:Lr(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),vs.copy(v.backgroundRotation),vs.x*=-1,vs.y*=-1,vs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(K_.makeRotationFromEuler(vs)),h.material.toneMapped=Qt.getTransfer(M.colorSpace)!==ae,(d!==M||u!==M.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=M,u=M.version,f=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Zt(new zr(2,2),new _i({name:"BackgroundMaterial",uniforms:Lr(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(M.colorSpace)!==ae,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||u!==M.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,d=M,u=M.version,f=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,v){y.getRGB(ra,xp(s)),n.buffers.color.setClear(ra.r,ra.g,ra.b,v,o)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:_,addToRenderList:m,dispose:x}}function Q_(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,o=!1;function a(b,R,L,P,D){let B=!1;const U=d(P,L,R);r!==U&&(r=U,c(r.object)),B=f(b,P,L,D),B&&g(b,P,L,D),D!==null&&t.update(D,s.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,v(b,R,L,P),D!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function l(){return s.createVertexArray()}function c(b){return s.bindVertexArray(b)}function h(b){return s.deleteVertexArray(b)}function d(b,R,L){const P=L.wireframe===!0;let D=n[b.id];D===void 0&&(D={},n[b.id]=D);let B=D[R.id];B===void 0&&(B={},D[R.id]=B);let U=B[P];return U===void 0&&(U=u(l()),B[P]=U),U}function u(b){const R=[],L=[],P=[];for(let D=0;D<e;D++)R[D]=0,L[D]=0,P[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:L,attributeDivisors:P,object:b,attributes:{},index:null}}function f(b,R,L,P){const D=r.attributes,B=R.attributes;let U=0;const k=L.getAttributes();for(const H in k)if(k[H].location>=0){const K=D[H];let Q=B[H];if(Q===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(Q=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(Q=b.instanceColor)),K===void 0||K.attribute!==Q||Q&&K.data!==Q.data)return!0;U++}return r.attributesNum!==U||r.index!==P}function g(b,R,L,P){const D={},B=R.attributes;let U=0;const k=L.getAttributes();for(const H in k)if(k[H].location>=0){let K=B[H];K===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(K=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(K=b.instanceColor));const Q={};Q.attribute=K,K&&K.data&&(Q.data=K.data),D[H]=Q,U++}r.attributes=D,r.attributesNum=U,r.index=P}function _(){const b=r.newAttributes;for(let R=0,L=b.length;R<L;R++)b[R]=0}function m(b){p(b,0)}function p(b,R){const L=r.newAttributes,P=r.enabledAttributes,D=r.attributeDivisors;L[b]=1,P[b]===0&&(s.enableVertexAttribArray(b),P[b]=1),D[b]!==R&&(s.vertexAttribDivisor(b,R),D[b]=R)}function x(){const b=r.newAttributes,R=r.enabledAttributes;for(let L=0,P=R.length;L<P;L++)R[L]!==b[L]&&(s.disableVertexAttribArray(L),R[L]=0)}function y(b,R,L,P,D,B,U){U===!0?s.vertexAttribIPointer(b,R,L,D,B):s.vertexAttribPointer(b,R,L,P,D,B)}function v(b,R,L,P){_();const D=P.attributes,B=L.getAttributes(),U=R.defaultAttributeValues;for(const k in B){const H=B[k];if(H.location>=0){let q=D[k];if(q===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(q=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(q=b.instanceColor)),q!==void 0){const K=q.normalized,Q=q.itemSize,et=t.get(q);if(et===void 0)continue;const yt=et.buffer,Yt=et.type,qt=et.bytesPerElement,j=Yt===s.INT||Yt===s.UNSIGNED_INT||q.gpuType===zh;if(q.isInterleavedBufferAttribute){const nt=q.data,_t=nt.stride,zt=q.offset;if(nt.isInstancedInterleavedBuffer){for(let St=0;St<H.locationSize;St++)p(H.location+St,nt.meshPerAttribute);b.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let St=0;St<H.locationSize;St++)m(H.location+St);s.bindBuffer(s.ARRAY_BUFFER,yt);for(let St=0;St<H.locationSize;St++)y(H.location+St,Q/H.locationSize,Yt,K,_t*qt,(zt+Q/H.locationSize*St)*qt,j)}else{if(q.isInstancedBufferAttribute){for(let nt=0;nt<H.locationSize;nt++)p(H.location+nt,q.meshPerAttribute);b.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let nt=0;nt<H.locationSize;nt++)m(H.location+nt);s.bindBuffer(s.ARRAY_BUFFER,yt);for(let nt=0;nt<H.locationSize;nt++)y(H.location+nt,Q/H.locationSize,Yt,K,Q*qt,Q/H.locationSize*nt*qt,j)}}else if(U!==void 0){const K=U[k];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(H.location,K);break;case 3:s.vertexAttrib3fv(H.location,K);break;case 4:s.vertexAttrib4fv(H.location,K);break;default:s.vertexAttrib1fv(H.location,K)}}}}x()}function M(){C();for(const b in n){const R=n[b];for(const L in R){const P=R[L];for(const D in P)h(P[D].object),delete P[D];delete R[L]}delete n[b]}}function w(b){if(n[b.id]===void 0)return;const R=n[b.id];for(const L in R){const P=R[L];for(const D in P)h(P[D].object),delete P[D];delete R[L]}delete n[b.id]}function E(b){for(const R in n){const L=n[R];if(L[b.id]===void 0)continue;const P=L[b.id];for(const D in P)h(P[D].object),delete P[D];delete L[b.id]}}function C(){S(),o=!0,r!==i&&(r=i,c(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function tv(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(s.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,n,1)}function l(c,h,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*u[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ev(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==Kn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const C=E===zi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==En&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Zn&&!C)}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Ft("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,maxSamples:M,samples:w}}function nv(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new Fn,a=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const x=r?0:n,y=x*4;let v=p.clippingState||null;l.value=v,v=h(g,u,y,f);for(let M=0;M!==y;++M)v[M]=e[M];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,x=u.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=f;y!==_;++y,v+=4)o.copy(d[y]).applyMatrix4(x,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function iv(s){let t=new WeakMap;function e(o,a){return a===Oc?o.mapping=Fs:a===zc&&(o.mapping=Cr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Oc||a===zc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new yp(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const ss=4,vd=[.125,.215,.35,.446,.526,.582],Cs=20,sv=256,jr=new nu,yd=new Dt;let ql=null,Yl=0,$l=0,jl=!1;const rv=new N;class Mh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){const{size:o=256,position:a=rv}=r;ql=this._renderer.getRenderTarget(),Yl=this._renderer.getActiveCubeFace(),$l=this._renderer.getActiveMipmapLevel(),jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ql,Yl,$l),this._renderer.xr.enabled=jl,t.scissorTest=!1,or(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Fs||t.mapping===Cr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ql=this._renderer.getRenderTarget(),Yl=this._renderer.getActiveCubeFace(),$l=this._renderer.getActiveMipmapLevel(),jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Qe,minFilter:Qe,generateMipmaps:!1,type:zi,format:Kn,colorSpace:Pr,depthBuffer:!1},i=Md(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Md(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ov(r)),this._blurMaterial=lv(r,t,e),this._ggxMaterial=av(r,t,e)}return i}_compileMaterial(t){const e=new Zt(new hn,t);this._renderer.compile(e,jr)}_sceneToCubeUV(t,e,n,i,r){const l=new gn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(yd),d.toneMapping=fi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Zt(new hs,new Nn({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const x=t.background;x?x.isColor&&(m.color.copy(x),t.background=null,p=!0):(m.color.copy(yd),p=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[y],r.y,r.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[y]));const M=this._cubeSize;or(i,v*M,y>2?M:0,M,M),d.setRenderTarget(i),p&&d.render(_,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=x}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Fs||t.mapping===Cr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=bd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sd());const r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;or(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,jr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=0+c*1.25,f=d*u,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-ss?n-g+ss:0),p=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,or(r,m,p,3*_,2*_),i.setRenderTarget(r),i.render(a,jr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,or(t,m,p,3*_,2*_),i.setRenderTarget(t),i.render(a,jr)}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Jt("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[i];d.material=c;const u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Cs-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Cs;m>Cs&&Ft(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Cs}`);const p=[];let x=0;for(let E=0;E<Cs;++E){const C=E/_,S=Math.exp(-C*C/2);p.push(S),E===0?x+=S:E<m&&(x+=2*S)}for(let E=0;E<p.length;E++)p[E]=p[E]/x;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:y}=this;u.dTheta.value=g,u.mipInt.value=y-n;const v=this._sizeLods[i],M=3*v*(i>y-ss?i-y+ss:0),w=4*(this._cubeSize-v);or(e,M,w,3*v,2*v),l.setRenderTarget(e),l.render(d,jr)}}function ov(s){const t=[],e=[],n=[];let i=s;const r=s-ss+1+vd.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-ss?l=vd[o-s+ss-1]:o===0&&(l=0),e.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*f),y=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let w=0;w<f;w++){const E=w%3*2/3-1,C=w>2?0:-1,S=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];x.set(S,_*g*w),y.set(u,m*g*w);const b=[w,w,w,w,w,w];v.set(b,p*g*w)}const M=new hn;M.setAttribute("position",new $e(x,_)),M.setAttribute("uv",new $e(y,m)),M.setAttribute("faceIndex",new $e(v,p)),n.push(new Zt(M,null)),i>ss&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Md(s,t,e){const n=new pi(s,t,e);return n.texture.mapping=ll,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function or(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function av(s,t,e){return new _i({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:sv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function lv(s,t,e){const n=new Float32Array(Cs),i=new N(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:hl(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Sd(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hl(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function bd(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function hl(){return`

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
	`}function cv(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Oc||l===zc,h=l===Fs||l===Cr;if(c||h){let d=t.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Mh(s)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new Mh(s)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function hv(s){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Eo("WebGLRenderer: "+n+" extension not supported."),i}}}function uv(s,t,e,n){const i={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete i[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)t.update(u[f],s.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let y=0,v=x.length;y<v;y+=3){const M=x[y+0],w=x[y+1],E=x[y+2];u.push(M,w,w,E,E,M)}}else if(g!==void 0){const x=g.array;_=g.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const M=y+0,w=y+1,E=y+2;u.push(M,w,w,E,E,M)}}else return;const m=new(dp(u)?gp:mp)(u,1);m.version=_;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function dv(s,t,e){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){s.drawElements(n,f,r,u*o),e.update(f,n,1)}function c(u,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,u*o,g),e.update(f,n,g))}function h(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function d(u,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,_,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x]*_[x];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function fv(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:Jt("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function pv(s,t,e){const n=new WeakMap,i=new le;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let b=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",b)};var f=b;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let M=a.attributes.position.count*v,w=1;M>t.maxTextureSize&&(w=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const E=new Float32Array(M*w*4*d),C=new fp(E,M,w,d);C.type=Zn,C.needsUpdate=!0;const S=v*4;for(let R=0;R<d;R++){const L=p[R],P=x[R],D=y[R],B=M*w*4*R;for(let U=0;U<L.count;U++){const k=U*S;g===!0&&(i.fromBufferAttribute(L,U),E[B+k+0]=i.x,E[B+k+1]=i.y,E[B+k+2]=i.z,E[B+k+3]=0),_===!0&&(i.fromBufferAttribute(P,U),E[B+k+4]=i.x,E[B+k+5]=i.y,E[B+k+6]=i.z,E[B+k+7]=0),m===!0&&(i.fromBufferAttribute(D,U),E[B+k+8]=i.x,E[B+k+9]=i.y,E[B+k+10]=i.z,E[B+k+11]=D.itemSize===4?i.w:1)}}u={count:d,texture:C,size:new Pt(M,w)},n.set(a,u),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function mv(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const gv={[Qf]:"LINEAR_TONE_MAPPING",[tp]:"REINHARD_TONE_MAPPING",[ep]:"CINEON_TONE_MAPPING",[Oh]:"ACES_FILMIC_TONE_MAPPING",[ip]:"AGX_TONE_MAPPING",[sp]:"NEUTRAL_TONE_MAPPING",[np]:"CUSTOM_TONE_MAPPING"};function xv(s,t,e,n,i){const r=new pi(t,e,{type:s,depthBuffer:n,stencilBuffer:i}),o=new pi(t,e,{type:zi,depthBuffer:!1,stencilBuffer:!1}),a=new hn;a.setAttribute("position",new Re([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Re([0,2,0,0,2,0],2));const l=new Qg({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Zt(a,l),h=new nu(-1,1,1,-1,0,1);let d=null,u=null,f=!1,g,_=null,m=[],p=!1;this.setSize=function(x,y){r.setSize(x,y),o.setSize(x,y);for(let v=0;v<m.length;v++){const M=m[v];M.setSize&&M.setSize(x,y)}},this.setEffects=function(x){m=x,p=m.length>0&&m[0].isRenderPass===!0;const y=r.width,v=r.height;for(let M=0;M<m.length;M++){const w=m[M];w.setSize&&w.setSize(y,v)}},this.begin=function(x,y){if(f||x.toneMapping===fi&&m.length===0)return!1;if(_=y,y!==null){const v=y.width,M=y.height;(r.width!==v||r.height!==M)&&this.setSize(v,M)}return p===!1&&x.setRenderTarget(r),g=x.toneMapping,x.toneMapping=fi,!0},this.hasRenderPass=function(){return p},this.end=function(x,y){x.toneMapping=g,f=!0;let v=r,M=o;for(let w=0;w<m.length;w++){const E=m[w];if(E.enabled!==!1&&(E.render(x,M,v,y),E.needsSwap!==!1)){const C=v;v=M,M=C}}if(d!==x.outputColorSpace||u!==x.toneMapping){d=x.outputColorSpace,u=x.toneMapping,l.defines={},Qt.getTransfer(d)===ae&&(l.defines.SRGB_TRANSFER="");const w=gv[u];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=v.texture,x.setRenderTarget(_),x.render(c,h),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Cp=new ln,Sh=new Ao(1,1),Rp=new fp,Pp=new Cg,Ip=new vp,wd=[],Ed=[],Ad=new Float32Array(16),Td=new Float32Array(9),Cd=new Float32Array(4);function kr(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=wd[i];if(r===void 0&&(r=new Float32Array(i),wd[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ve(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ge(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ul(s,t){let e=Ed[t];e===void 0&&(e=new Int32Array(t),Ed[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function _v(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function vv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;s.uniform2fv(this.addr,t),Ge(e,t)}}function yv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;s.uniform3fv(this.addr,t),Ge(e,t)}}function Mv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;s.uniform4fv(this.addr,t),Ge(e,t)}}function Sv(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(Ve(e,n))return;Cd.set(n),s.uniformMatrix2fv(this.addr,!1,Cd),Ge(e,n)}}function bv(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(Ve(e,n))return;Td.set(n),s.uniformMatrix3fv(this.addr,!1,Td),Ge(e,n)}}function wv(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(Ve(e,n))return;Ad.set(n),s.uniformMatrix4fv(this.addr,!1,Ad),Ge(e,n)}}function Ev(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Av(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;s.uniform2iv(this.addr,t),Ge(e,t)}}function Tv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;s.uniform3iv(this.addr,t),Ge(e,t)}}function Cv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;s.uniform4iv(this.addr,t),Ge(e,t)}}function Rv(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Pv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;s.uniform2uiv(this.addr,t),Ge(e,t)}}function Iv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;s.uniform3uiv(this.addr,t),Ge(e,t)}}function Lv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;s.uniform4uiv(this.addr,t),Ge(e,t)}}function Dv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Sh.compareFunction=e.isReversedDepthBuffer()?$h:Yh,r=Sh):r=Cp,e.setTexture2D(t||r,i)}function Nv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Pp,i)}function Fv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Ip,i)}function Uv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Rp,i)}function Bv(s){switch(s){case 5126:return _v;case 35664:return vv;case 35665:return yv;case 35666:return Mv;case 35674:return Sv;case 35675:return bv;case 35676:return wv;case 5124:case 35670:return Ev;case 35667:case 35671:return Av;case 35668:case 35672:return Tv;case 35669:case 35673:return Cv;case 5125:return Rv;case 36294:return Pv;case 36295:return Iv;case 36296:return Lv;case 35678:case 36198:case 36298:case 36306:case 35682:return Dv;case 35679:case 36299:case 36307:return Nv;case 35680:case 36300:case 36308:case 36293:return Fv;case 36289:case 36303:case 36311:case 36292:return Uv}}function Ov(s,t){s.uniform1fv(this.addr,t)}function zv(s,t){const e=kr(t,this.size,2);s.uniform2fv(this.addr,e)}function kv(s,t){const e=kr(t,this.size,3);s.uniform3fv(this.addr,e)}function Vv(s,t){const e=kr(t,this.size,4);s.uniform4fv(this.addr,e)}function Gv(s,t){const e=kr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Hv(s,t){const e=kr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Wv(s,t){const e=kr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Xv(s,t){s.uniform1iv(this.addr,t)}function qv(s,t){s.uniform2iv(this.addr,t)}function Yv(s,t){s.uniform3iv(this.addr,t)}function $v(s,t){s.uniform4iv(this.addr,t)}function jv(s,t){s.uniform1uiv(this.addr,t)}function Zv(s,t){s.uniform2uiv(this.addr,t)}function Kv(s,t){s.uniform3uiv(this.addr,t)}function Jv(s,t){s.uniform4uiv(this.addr,t)}function Qv(s,t,e){const n=this.cache,i=t.length,r=ul(e,i);Ve(n,r)||(s.uniform1iv(this.addr,r),Ge(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Sh:o=Cp;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function ty(s,t,e){const n=this.cache,i=t.length,r=ul(e,i);Ve(n,r)||(s.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Pp,r[o])}function ey(s,t,e){const n=this.cache,i=t.length,r=ul(e,i);Ve(n,r)||(s.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Ip,r[o])}function ny(s,t,e){const n=this.cache,i=t.length,r=ul(e,i);Ve(n,r)||(s.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Rp,r[o])}function iy(s){switch(s){case 5126:return Ov;case 35664:return zv;case 35665:return kv;case 35666:return Vv;case 35674:return Gv;case 35675:return Hv;case 35676:return Wv;case 5124:case 35670:return Xv;case 35667:case 35671:return qv;case 35668:case 35672:return Yv;case 35669:case 35673:return $v;case 5125:return jv;case 36294:return Zv;case 36295:return Kv;case 36296:return Jv;case 35678:case 36198:case 36298:case 36306:case 35682:return Qv;case 35679:case 36299:case 36307:return ty;case 35680:case 36300:case 36308:case 36293:return ey;case 36289:case 36303:case 36311:case 36292:return ny}}class sy{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Bv(e.type)}}class ry{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=iy(e.type)}}class oy{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Zl=/(\w+)(\])?(\[|\.)?/g;function Rd(s,t){s.seq.push(t),s.map[t.id]=t}function ay(s,t,e){const n=s.name,i=n.length;for(Zl.lastIndex=0;;){const r=Zl.exec(n),o=Zl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Rd(e,c===void 0?new sy(a,s,t):new ry(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new oy(a),Rd(e,d)),e=d}}}class Va{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);ay(a,l,this)}const i=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Pd(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const ly=37297;let cy=0;function hy(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Id=new kt;function uy(s){Qt._getMatrix(Id,Qt.workingColorSpace,s);const t=`mat3( ${Id.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(s)){case Ya:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return Ft("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Ld(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+hy(s.getShaderSource(t),a)}else return r}function dy(s,t){const e=uy(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const fy={[Qf]:"Linear",[tp]:"Reinhard",[ep]:"Cineon",[Oh]:"ACESFilmic",[ip]:"AgX",[sp]:"Neutral",[np]:"Custom"};function py(s,t){const e=fy[t];return e===void 0?(Ft("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const oa=new N;function my(){Qt.getLuminanceCoefficients(oa);const s=oa.x.toFixed(4),t=oa.y.toFixed(4),e=oa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gy(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(uo).join(`
`)}function xy(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function _y(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function uo(s){return s!==""}function Dd(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nd(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const vy=/^[ \t]*#include +<([\w\d./]+)>/gm;function bh(s){return s.replace(vy,My)}const yy=new Map;function My(s,t){let e=Vt[t];if(e===void 0){const n=yy.get(t);if(n!==void 0)e=Vt[n],Ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return bh(e)}const Sy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fd(s){return s.replace(Sy,by)}function by(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ud(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const wy={[Ua]:"SHADOWMAP_TYPE_PCF",[ho]:"SHADOWMAP_TYPE_VSM"};function Ey(s){return wy[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Ay={[Fs]:"ENVMAP_TYPE_CUBE",[Cr]:"ENVMAP_TYPE_CUBE",[ll]:"ENVMAP_TYPE_CUBE_UV"};function Ty(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Ay[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const Cy={[Cr]:"ENVMAP_MODE_REFRACTION"};function Ry(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Cy[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Py={[Bh]:"ENVMAP_BLENDING_MULTIPLY",[$m]:"ENVMAP_BLENDING_MIX",[jm]:"ENVMAP_BLENDING_ADD"};function Iy(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Py[s.combine]||"ENVMAP_BLENDING_NONE"}function Ly(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Dy(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Ey(e),c=Ty(e),h=Ry(e),d=Iy(e),u=Ly(e),f=gy(e),g=xy(r),_=i.createProgram();let m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(uo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(uo).join(`
`),p.length>0&&(p+=`
`)):(m=[Ud(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(uo).join(`
`),p=[Ud(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fi?"#define TONE_MAPPING":"",e.toneMapping!==fi?Vt.tonemapping_pars_fragment:"",e.toneMapping!==fi?py("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,dy("linearToOutputTexel",e.outputColorSpace),my(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(uo).join(`
`)),o=bh(o),o=Dd(o,e),o=Nd(o,e),a=bh(a),a=Dd(a,e),a=Nd(a,e),o=Fd(o),a=Fd(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===zu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===zu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=x+m+o,v=x+p+a,M=Pd(i,i.VERTEX_SHADER,y),w=Pd(i,i.FRAGMENT_SHADER,v);i.attachShader(_,M),i.attachShader(_,w),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(R){if(s.debug.checkShaderErrors){const L=i.getProgramInfoLog(_)||"",P=i.getShaderInfoLog(M)||"",D=i.getShaderInfoLog(w)||"",B=L.trim(),U=P.trim(),k=D.trim();let H=!0,q=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,M,w);else{const K=Ld(i,M,"vertex"),Q=Ld(i,w,"fragment");Jt("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+B+`
`+K+`
`+Q)}else B!==""?Ft("WebGLProgram: Program Info Log:",B):(U===""||k==="")&&(q=!1);q&&(R.diagnostics={runnable:H,programLog:B,vertexShader:{log:U,prefix:m},fragmentShader:{log:k,prefix:p}})}i.deleteShader(M),i.deleteShader(w),C=new Va(i,_),S=_y(i,_)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(_,ly)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cy++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=w,this}let Ny=0;class Fy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Uy(t),e.set(t,n)),n}}class Uy{constructor(t){this.id=Ny++,this.code=t,this.usedTimes=0}}function By(s,t,e,n,i,r,o){const a=new Kh,l=new Fy,c=new Set,h=[],d=new Map,u=i.logarithmicDepthBuffer;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,b,R,L,P){const D=L.fog,B=P.geometry,U=S.isMeshStandardMaterial?L.environment:null,k=(S.isMeshStandardMaterial?e:t).get(S.envMap||U),H=k&&k.mapping===ll?k.image.height:null,q=g[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&Ft("WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const K=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Q=K!==void 0?K.length:0;let et=0;B.morphAttributes.position!==void 0&&(et=1),B.morphAttributes.normal!==void 0&&(et=2),B.morphAttributes.color!==void 0&&(et=3);let yt,Yt,qt,j;if(q){const re=ci[q];yt=re.vertexShader,Yt=re.fragmentShader}else yt=S.vertexShader,Yt=S.fragmentShader,l.update(S),qt=l.getVertexShaderID(S),j=l.getFragmentShaderID(S);const nt=s.getRenderTarget(),_t=s.state.buffers.depth.getReversed(),zt=P.isInstancedMesh===!0,St=P.isBatchedMesh===!0,$t=!!S.map,we=!!S.matcap,Kt=!!k,se=!!S.aoMap,de=!!S.lightMap,Gt=!!S.bumpMap,Ie=!!S.normalMap,O=!!S.displacementMap,Le=!!S.emissiveMap,ie=!!S.metalnessMap,me=!!S.roughnessMap,Et=S.anisotropy>0,F=S.clearcoat>0,T=S.dispersion>0,V=S.iridescence>0,Z=S.sheen>0,tt=S.transmission>0,$=Et&&!!S.anisotropyMap,Tt=F&&!!S.clearcoatMap,lt=F&&!!S.clearcoatNormalMap,wt=F&&!!S.clearcoatRoughnessMap,Ut=V&&!!S.iridescenceMap,rt=V&&!!S.iridescenceThicknessMap,ht=Z&&!!S.sheenColorMap,bt=Z&&!!S.sheenRoughnessMap,At=!!S.specularMap,ct=!!S.specularColorMap,Ht=!!S.specularIntensityMap,z=tt&&!!S.transmissionMap,mt=tt&&!!S.thicknessMap,ot=!!S.gradientMap,gt=!!S.alphaMap,st=S.alphaTest>0,J=!!S.alphaHash,at=!!S.extensions;let Bt=fi;S.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Bt=s.toneMapping);const ge={shaderID:q,shaderType:S.type,shaderName:S.name,vertexShader:yt,fragmentShader:Yt,defines:S.defines,customVertexShaderID:qt,customFragmentShaderID:j,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:St,batchingColor:St&&P._colorsTexture!==null,instancing:zt,instancingColor:zt&&P.instanceColor!==null,instancingMorph:zt&&P.morphTexture!==null,outputColorSpace:nt===null?s.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Pr,alphaToCoverage:!!S.alphaToCoverage,map:$t,matcap:we,envMap:Kt,envMapMode:Kt&&k.mapping,envMapCubeUVHeight:H,aoMap:se,lightMap:de,bumpMap:Gt,normalMap:Ie,displacementMap:O,emissiveMap:Le,normalMapObjectSpace:Ie&&S.normalMapType===Jm,normalMapTangentSpace:Ie&&S.normalMapType===qh,metalnessMap:ie,roughnessMap:me,anisotropy:Et,anisotropyMap:$,clearcoat:F,clearcoatMap:Tt,clearcoatNormalMap:lt,clearcoatRoughnessMap:wt,dispersion:T,iridescence:V,iridescenceMap:Ut,iridescenceThicknessMap:rt,sheen:Z,sheenColorMap:ht,sheenRoughnessMap:bt,specularMap:At,specularColorMap:ct,specularIntensityMap:Ht,transmission:tt,transmissionMap:z,thicknessMap:mt,gradientMap:ot,opaque:S.transparent===!1&&S.blending===Er&&S.alphaToCoverage===!1,alphaMap:gt,alphaTest:st,alphaHash:J,combine:S.combine,mapUv:$t&&_(S.map.channel),aoMapUv:se&&_(S.aoMap.channel),lightMapUv:de&&_(S.lightMap.channel),bumpMapUv:Gt&&_(S.bumpMap.channel),normalMapUv:Ie&&_(S.normalMap.channel),displacementMapUv:O&&_(S.displacementMap.channel),emissiveMapUv:Le&&_(S.emissiveMap.channel),metalnessMapUv:ie&&_(S.metalnessMap.channel),roughnessMapUv:me&&_(S.roughnessMap.channel),anisotropyMapUv:$&&_(S.anisotropyMap.channel),clearcoatMapUv:Tt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:lt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ut&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:bt&&_(S.sheenRoughnessMap.channel),specularMapUv:At&&_(S.specularMap.channel),specularColorMapUv:ct&&_(S.specularColorMap.channel),specularIntensityMapUv:Ht&&_(S.specularIntensityMap.channel),transmissionMapUv:z&&_(S.transmissionMap.channel),thicknessMapUv:mt&&_(S.thicknessMap.channel),alphaMapUv:gt&&_(S.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Ie||Et),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!B.attributes.uv&&($t||gt),fog:!!D,useFog:S.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:_t,skinning:P.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:et,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:Bt,decodeVideoTexture:$t&&S.map.isVideoTexture===!0&&Qt.getTransfer(S.map.colorSpace)===ae,decodeVideoTextureEmissive:Le&&S.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(S.emissiveMap.colorSpace)===ae,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===wn,flipSided:S.side===Ye,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:at&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&S.extensions.multiDraw===!0||St)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ge.vertexUv1s=c.has(1),ge.vertexUv2s=c.has(2),ge.vertexUv3s=c.has(3),c.clear(),ge}function p(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)b.push(R),b.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(x(b,S),y(b,S),b.push(s.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function x(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function y(S,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const b=g[S.type];let R;if(b){const L=ci[b];R=Vg.clone(L.uniforms)}else R=S.uniforms;return R}function M(S,b){let R=d.get(b);return R!==void 0?++R.usedTimes:(R=new Dy(s,b,S,r),h.push(R),d.set(b,R)),R}function w(S){if(--S.usedTimes===0){const b=h.indexOf(S);h[b]=h[h.length-1],h.pop(),d.delete(S.cacheKey),S.destroy()}}function E(S){l.remove(S)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:M,releaseProgram:w,releaseShaderCache:E,programs:h,dispose:C}}function Oy(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function zy(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Bd(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Od(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(d,u,f,g,_,m){let p=s[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},s[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),t++,p}function a(d,u,f,g,_,m){const p=o(d,u,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(d,u,f,g,_,m){const p=o(d,u,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(d,u){e.length>1&&e.sort(d||zy),n.length>1&&n.sort(u||Bd),i.length>1&&i.sort(u||Bd)}function h(){for(let d=t,u=s.length;d<u;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function ky(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Od,s.set(n,[o])):i>=r.length?(o=new Od,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Vy(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Dt};break;case"SpotLight":e={position:new N,direction:new N,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":e={color:new Dt,position:new N,halfWidth:new N,halfHeight:new N};break}return s[t.id]=e,e}}}function Gy(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Hy=0;function Wy(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Xy(s){const t=new Vy,e=Gy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const i=new N,r=new Xt,o=new Xt;function a(c){let h=0,d=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,x=0,y=0,v=0,M=0,w=0,E=0;c.sort(Wy);for(let S=0,b=c.length;S<b;S++){const R=c[S],L=R.color,P=R.intensity,D=R.distance;let B=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Rr?B=R.shadow.map.texture:B=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=L.r*P,d+=L.g*P,u+=L.b*P;else if(R.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(R.sh.coefficients[U],P);E++}else if(R.isDirectionalLight){const U=t.get(R);if(U.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const k=R.shadow,H=e.get(R);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=B,n.directionalShadowMatrix[f]=R.shadow.matrix,x++}n.directional[f]=U,f++}else if(R.isSpotLight){const U=t.get(R);U.position.setFromMatrixPosition(R.matrixWorld),U.color.copy(L).multiplyScalar(P),U.distance=D,U.coneCos=Math.cos(R.angle),U.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),U.decay=R.decay,n.spot[_]=U;const k=R.shadow;if(R.map&&(n.spotLightMap[M]=R.map,M++,k.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[_]=k.matrix,R.castShadow){const H=e.get(R);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=B,v++}_++}else if(R.isRectAreaLight){const U=t.get(R);U.color.copy(L).multiplyScalar(P),U.halfWidth.set(R.width*.5,0,0),U.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=U,m++}else if(R.isPointLight){const U=t.get(R);if(U.color.copy(R.color).multiplyScalar(R.intensity),U.distance=R.distance,U.decay=R.decay,R.castShadow){const k=R.shadow,H=e.get(R);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,H.shadowCameraNear=k.camera.near,H.shadowCameraFar=k.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=B,n.pointShadowMatrix[g]=R.shadow.matrix,y++}n.point[g]=U,g++}else if(R.isHemisphereLight){const U=t.get(R);U.skyColor.copy(R.color).multiplyScalar(P),U.groundColor.copy(R.groundColor).multiplyScalar(P),n.hemi[p]=U,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==x||C.numPointShadows!==y||C.numSpotShadows!==v||C.numSpotMaps!==M||C.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+M-w,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=E,C.directionalLength=f,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=x,C.numPointShadows=y,C.numSpotShadows=v,C.numSpotMaps=M,C.numLightProbes=E,n.version=Hy++)}function l(c,h){let d=0,u=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const y=c[p];if(y.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(y.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const v=n.point[u];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),u++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function zd(s){const t=new Xy(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function qy(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new zd(s),t.set(i,[a])):r>=o.length?(a=new zd(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Yy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$y=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,jy=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],Zy=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],kd=new Xt,Zr=new N,Kl=new N;function Ky(s,t,e){let n=new Qh;const i=new Pt,r=new Pt,o=new le,a=new e0,l=new n0,c={},h=e.maxTextureSize,d={[gi]:Ye,[Ye]:gi,[wn]:wn},u=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:Yy,fragmentShader:$y}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new hn;g.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Zt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ua;let p=this.type;this.render=function(w,E,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;w.type===Jf&&(Ft("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),w.type=Ua);const S=s.getRenderTarget(),b=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),L=s.state;L.setBlending(Ui),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const P=p!==this.type;P&&E.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(B=>B.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,B=w.length;D<B;D++){const U=w[D],k=U.shadow;if(k===void 0){Ft("WebGLShadowMap:",U,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const H=k.getFrameExtents();if(i.multiply(H),r.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/H.x),i.x=r.x*H.x,k.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/H.y),i.y=r.y*H.y,k.mapSize.y=r.y)),k.map===null||P===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===ho){if(U.isPointLight){Ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new pi(i.x,i.y,{format:Rr,type:zi,minFilter:Qe,magFilter:Qe,generateMipmaps:!1}),k.map.texture.name=U.name+".shadowMap",k.map.depthTexture=new Ao(i.x,i.y,Zn),k.map.depthTexture.name=U.name+".shadowMapDepth",k.map.depthTexture.format=ki,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=qe,k.map.depthTexture.magFilter=qe}else{U.isPointLight?(k.map=new yp(i.x),k.map.depthTexture=new Jg(i.x,xi)):(k.map=new pi(i.x,i.y),k.map.depthTexture=new Ao(i.x,i.y,xi)),k.map.depthTexture.name=U.name+".shadowMap",k.map.depthTexture.format=ki;const K=s.state.buffers.depth.getReversed();this.type===Ua?(k.map.depthTexture.compareFunction=K?$h:Yh,k.map.depthTexture.minFilter=Qe,k.map.depthTexture.magFilter=Qe):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=qe,k.map.depthTexture.magFilter=qe)}k.camera.updateProjectionMatrix()}const q=k.map.isWebGLCubeRenderTarget?6:1;for(let K=0;K<q;K++){if(k.map.isWebGLCubeRenderTarget)s.setRenderTarget(k.map,K),s.clear();else{K===0&&(s.setRenderTarget(k.map),s.clear());const Q=k.getViewport(K);o.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),L.viewport(o)}if(U.isPointLight){const Q=k.camera,et=k.matrix,yt=U.distance||Q.far;yt!==Q.far&&(Q.far=yt,Q.updateProjectionMatrix()),Zr.setFromMatrixPosition(U.matrixWorld),Q.position.copy(Zr),Kl.copy(Q.position),Kl.add(jy[K]),Q.up.copy(Zy[K]),Q.lookAt(Kl),Q.updateMatrixWorld(),et.makeTranslation(-Zr.x,-Zr.y,-Zr.z),kd.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),k._frustum.setFromProjectionMatrix(kd,Q.coordinateSystem,Q.reversedDepth)}else k.updateMatrices(U);n=k.getFrustum(),v(E,C,k.camera,U,this.type)}k.isPointLightShadow!==!0&&this.type===ho&&x(k,C),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(S,b,R)};function x(w,E){const C=t.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new pi(i.x,i.y,{format:Rr,type:zi})),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(E,null,C,u,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(E,null,C,f,_,null)}function y(w,E,C,S){let b=null;const R=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)b=R;else if(b=C.isPointLight===!0?l:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const L=b.uuid,P=E.uuid;let D=c[L];D===void 0&&(D={},c[L]=D);let B=D[P];B===void 0&&(B=b.clone(),D[P]=B,E.addEventListener("dispose",M)),b=B}if(b.visible=E.visible,b.wireframe=E.wireframe,S===ho?b.side=E.shadowSide!==null?E.shadowSide:E.side:b.side=E.shadowSide!==null?E.shadowSide:d[E.side],b.alphaMap=E.alphaMap,b.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,b.map=E.map,b.clipShadows=E.clipShadows,b.clippingPlanes=E.clippingPlanes,b.clipIntersection=E.clipIntersection,b.displacementMap=E.displacementMap,b.displacementScale=E.displacementScale,b.displacementBias=E.displacementBias,b.wireframeLinewidth=E.wireframeLinewidth,b.linewidth=E.linewidth,C.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const L=s.properties.get(b);L.light=C}return b}function v(w,E,C,S,b){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===ho)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const P=t.update(w),D=w.material;if(Array.isArray(D)){const B=P.groups;for(let U=0,k=B.length;U<k;U++){const H=B[U],q=D[H.materialIndex];if(q&&q.visible){const K=y(w,q,S,b);w.onBeforeShadow(s,w,E,C,P,K,H),s.renderBufferDirect(C,null,P,K,w,H),w.onAfterShadow(s,w,E,C,P,K,H)}}}else if(D.visible){const B=y(w,D,S,b);w.onBeforeShadow(s,w,E,C,P,B,null),s.renderBufferDirect(C,null,P,B,w,null),w.onAfterShadow(s,w,E,C,P,B,null)}}const L=w.children;for(let P=0,D=L.length;P<D;P++)v(L[P],E,C,S,b)}function M(w){w.target.removeEventListener("dispose",M);for(const C in c){const S=c[C],b=w.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}const Jy={[Ic]:Lc,[Dc]:Uc,[Nc]:Bc,[Tr]:Fc,[Lc]:Ic,[Uc]:Dc,[Bc]:Nc,[Fc]:Tr};function Qy(s,t){function e(){let z=!1;const mt=new le;let ot=null;const gt=new le(0,0,0,0);return{setMask:function(st){ot!==st&&!z&&(s.colorMask(st,st,st,st),ot=st)},setLocked:function(st){z=st},setClear:function(st,J,at,Bt,ge){ge===!0&&(st*=Bt,J*=Bt,at*=Bt),mt.set(st,J,at,Bt),gt.equals(mt)===!1&&(s.clearColor(st,J,at,Bt),gt.copy(mt))},reset:function(){z=!1,ot=null,gt.set(-1,0,0,0)}}}function n(){let z=!1,mt=!1,ot=null,gt=null,st=null;return{setReversed:function(J){if(mt!==J){const at=t.get("EXT_clip_control");J?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT),mt=J;const Bt=st;st=null,this.setClear(Bt)}},getReversed:function(){return mt},setTest:function(J){J?nt(s.DEPTH_TEST):_t(s.DEPTH_TEST)},setMask:function(J){ot!==J&&!z&&(s.depthMask(J),ot=J)},setFunc:function(J){if(mt&&(J=Jy[J]),gt!==J){switch(J){case Ic:s.depthFunc(s.NEVER);break;case Lc:s.depthFunc(s.ALWAYS);break;case Dc:s.depthFunc(s.LESS);break;case Tr:s.depthFunc(s.LEQUAL);break;case Nc:s.depthFunc(s.EQUAL);break;case Fc:s.depthFunc(s.GEQUAL);break;case Uc:s.depthFunc(s.GREATER);break;case Bc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}gt=J}},setLocked:function(J){z=J},setClear:function(J){st!==J&&(mt&&(J=1-J),s.clearDepth(J),st=J)},reset:function(){z=!1,ot=null,gt=null,st=null,mt=!1}}}function i(){let z=!1,mt=null,ot=null,gt=null,st=null,J=null,at=null,Bt=null,ge=null;return{setTest:function(re){z||(re?nt(s.STENCIL_TEST):_t(s.STENCIL_TEST))},setMask:function(re){mt!==re&&!z&&(s.stencilMask(re),mt=re)},setFunc:function(re,ii,vi){(ot!==re||gt!==ii||st!==vi)&&(s.stencilFunc(re,ii,vi),ot=re,gt=ii,st=vi)},setOp:function(re,ii,vi){(J!==re||at!==ii||Bt!==vi)&&(s.stencilOp(re,ii,vi),J=re,at=ii,Bt=vi)},setLocked:function(re){z=re},setClear:function(re){ge!==re&&(s.clearStencil(re),ge=re)},reset:function(){z=!1,mt=null,ot=null,gt=null,st=null,J=null,at=null,Bt=null,ge=null}}}const r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,x=null,y=null,v=null,M=null,w=null,E=new Dt(0,0,0),C=0,S=!1,b=null,R=null,L=null,P=null,D=null;const B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,k=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(H)[1]),U=k>=1):H.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),U=k>=2);let q=null,K={};const Q=s.getParameter(s.SCISSOR_BOX),et=s.getParameter(s.VIEWPORT),yt=new le().fromArray(Q),Yt=new le().fromArray(et);function qt(z,mt,ot,gt){const st=new Uint8Array(4),J=s.createTexture();s.bindTexture(z,J),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let at=0;at<ot;at++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(mt,0,s.RGBA,1,1,gt,0,s.RGBA,s.UNSIGNED_BYTE,st):s.texImage2D(mt+at,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,st);return J}const j={};j[s.TEXTURE_2D]=qt(s.TEXTURE_2D,s.TEXTURE_2D,1),j[s.TEXTURE_CUBE_MAP]=qt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[s.TEXTURE_2D_ARRAY]=qt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),j[s.TEXTURE_3D]=qt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),nt(s.DEPTH_TEST),o.setFunc(Tr),Gt(!1),Ie(Du),nt(s.CULL_FACE),se(Ui);function nt(z){h[z]!==!0&&(s.enable(z),h[z]=!0)}function _t(z){h[z]!==!1&&(s.disable(z),h[z]=!1)}function zt(z,mt){return d[z]!==mt?(s.bindFramebuffer(z,mt),d[z]=mt,z===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=mt),z===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=mt),!0):!1}function St(z,mt){let ot=f,gt=!1;if(z){ot=u.get(mt),ot===void 0&&(ot=[],u.set(mt,ot));const st=z.textures;if(ot.length!==st.length||ot[0]!==s.COLOR_ATTACHMENT0){for(let J=0,at=st.length;J<at;J++)ot[J]=s.COLOR_ATTACHMENT0+J;ot.length=st.length,gt=!0}}else ot[0]!==s.BACK&&(ot[0]=s.BACK,gt=!0);gt&&s.drawBuffers(ot)}function $t(z){return g!==z?(s.useProgram(z),g=z,!0):!1}const we={[Ts]:s.FUNC_ADD,[Im]:s.FUNC_SUBTRACT,[Lm]:s.FUNC_REVERSE_SUBTRACT};we[Dm]=s.MIN,we[Nm]=s.MAX;const Kt={[Fm]:s.ZERO,[Um]:s.ONE,[Bm]:s.SRC_COLOR,[Rc]:s.SRC_ALPHA,[Hm]:s.SRC_ALPHA_SATURATE,[Vm]:s.DST_COLOR,[zm]:s.DST_ALPHA,[Om]:s.ONE_MINUS_SRC_COLOR,[Pc]:s.ONE_MINUS_SRC_ALPHA,[Gm]:s.ONE_MINUS_DST_COLOR,[km]:s.ONE_MINUS_DST_ALPHA,[Wm]:s.CONSTANT_COLOR,[Xm]:s.ONE_MINUS_CONSTANT_COLOR,[qm]:s.CONSTANT_ALPHA,[Ym]:s.ONE_MINUS_CONSTANT_ALPHA};function se(z,mt,ot,gt,st,J,at,Bt,ge,re){if(z===Ui){_===!0&&(_t(s.BLEND),_=!1);return}if(_===!1&&(nt(s.BLEND),_=!0),z!==Pm){if(z!==m||re!==S){if((p!==Ts||v!==Ts)&&(s.blendEquation(s.FUNC_ADD),p=Ts,v=Ts),re)switch(z){case Er:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Nu:s.blendFunc(s.ONE,s.ONE);break;case Fu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Uu:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Jt("WebGLState: Invalid blending: ",z);break}else switch(z){case Er:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Nu:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Fu:Jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Uu:Jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Jt("WebGLState: Invalid blending: ",z);break}x=null,y=null,M=null,w=null,E.set(0,0,0),C=0,m=z,S=re}return}st=st||mt,J=J||ot,at=at||gt,(mt!==p||st!==v)&&(s.blendEquationSeparate(we[mt],we[st]),p=mt,v=st),(ot!==x||gt!==y||J!==M||at!==w)&&(s.blendFuncSeparate(Kt[ot],Kt[gt],Kt[J],Kt[at]),x=ot,y=gt,M=J,w=at),(Bt.equals(E)===!1||ge!==C)&&(s.blendColor(Bt.r,Bt.g,Bt.b,ge),E.copy(Bt),C=ge),m=z,S=!1}function de(z,mt){z.side===wn?_t(s.CULL_FACE):nt(s.CULL_FACE);let ot=z.side===Ye;mt&&(ot=!ot),Gt(ot),z.blending===Er&&z.transparent===!1?se(Ui):se(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);const gt=z.stencilWrite;a.setTest(gt),gt&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Le(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?nt(s.SAMPLE_ALPHA_TO_COVERAGE):_t(s.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(z){b!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),b=z)}function Ie(z){z!==Cm?(nt(s.CULL_FACE),z!==R&&(z===Du?s.cullFace(s.BACK):z===Rm?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):_t(s.CULL_FACE),R=z}function O(z){z!==L&&(U&&s.lineWidth(z),L=z)}function Le(z,mt,ot){z?(nt(s.POLYGON_OFFSET_FILL),(P!==mt||D!==ot)&&(s.polygonOffset(mt,ot),P=mt,D=ot)):_t(s.POLYGON_OFFSET_FILL)}function ie(z){z?nt(s.SCISSOR_TEST):_t(s.SCISSOR_TEST)}function me(z){z===void 0&&(z=s.TEXTURE0+B-1),q!==z&&(s.activeTexture(z),q=z)}function Et(z,mt,ot){ot===void 0&&(q===null?ot=s.TEXTURE0+B-1:ot=q);let gt=K[ot];gt===void 0&&(gt={type:void 0,texture:void 0},K[ot]=gt),(gt.type!==z||gt.texture!==mt)&&(q!==ot&&(s.activeTexture(ot),q=ot),s.bindTexture(z,mt||j[z]),gt.type=z,gt.texture=mt)}function F(){const z=K[q];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function T(){try{s.compressedTexImage2D(...arguments)}catch(z){Jt("WebGLState:",z)}}function V(){try{s.compressedTexImage3D(...arguments)}catch(z){Jt("WebGLState:",z)}}function Z(){try{s.texSubImage2D(...arguments)}catch(z){Jt("WebGLState:",z)}}function tt(){try{s.texSubImage3D(...arguments)}catch(z){Jt("WebGLState:",z)}}function $(){try{s.compressedTexSubImage2D(...arguments)}catch(z){Jt("WebGLState:",z)}}function Tt(){try{s.compressedTexSubImage3D(...arguments)}catch(z){Jt("WebGLState:",z)}}function lt(){try{s.texStorage2D(...arguments)}catch(z){Jt("WebGLState:",z)}}function wt(){try{s.texStorage3D(...arguments)}catch(z){Jt("WebGLState:",z)}}function Ut(){try{s.texImage2D(...arguments)}catch(z){Jt("WebGLState:",z)}}function rt(){try{s.texImage3D(...arguments)}catch(z){Jt("WebGLState:",z)}}function ht(z){yt.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),yt.copy(z))}function bt(z){Yt.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),Yt.copy(z))}function At(z,mt){let ot=c.get(mt);ot===void 0&&(ot=new WeakMap,c.set(mt,ot));let gt=ot.get(z);gt===void 0&&(gt=s.getUniformBlockIndex(mt,z.name),ot.set(z,gt))}function ct(z,mt){const gt=c.get(mt).get(z);l.get(mt)!==gt&&(s.uniformBlockBinding(mt,gt,z.__bindingPointIndex),l.set(mt,gt))}function Ht(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},q=null,K={},d={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,x=null,y=null,v=null,M=null,w=null,E=new Dt(0,0,0),C=0,S=!1,b=null,R=null,L=null,P=null,D=null,yt.set(0,0,s.canvas.width,s.canvas.height),Yt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:nt,disable:_t,bindFramebuffer:zt,drawBuffers:St,useProgram:$t,setBlending:se,setMaterial:de,setFlipSided:Gt,setCullFace:Ie,setLineWidth:O,setPolygonOffset:Le,setScissorTest:ie,activeTexture:me,bindTexture:Et,unbindTexture:F,compressedTexImage2D:T,compressedTexImage3D:V,texImage2D:Ut,texImage3D:rt,updateUBOMapping:At,uniformBlockBinding:ct,texStorage2D:lt,texStorage3D:wt,texSubImage2D:Z,texSubImage3D:tt,compressedTexSubImage2D:$,compressedTexSubImage3D:Tt,scissor:ht,viewport:bt,reset:Ht}}function tM(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pt,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(F,T){return f?new OffscreenCanvas(F,T):ja("canvas")}function _(F,T,V){let Z=1;const tt=Et(F);if((tt.width>V||tt.height>V)&&(Z=V/Math.max(tt.width,tt.height)),Z<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const $=Math.floor(Z*tt.width),Tt=Math.floor(Z*tt.height);d===void 0&&(d=g($,Tt));const lt=T?g($,Tt):d;return lt.width=$,lt.height=Tt,lt.getContext("2d").drawImage(F,0,0,$,Tt),Ft("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+$+"x"+Tt+")."),lt}else return"data"in F&&Ft("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),F;return F}function m(F){return F.generateMipmaps}function p(F){s.generateMipmap(F)}function x(F){return F.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?s.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(F,T,V,Z,tt=!1){if(F!==null){if(s[F]!==void 0)return s[F];Ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let $=T;if(T===s.RED&&(V===s.FLOAT&&($=s.R32F),V===s.HALF_FLOAT&&($=s.R16F),V===s.UNSIGNED_BYTE&&($=s.R8)),T===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&($=s.R8UI),V===s.UNSIGNED_SHORT&&($=s.R16UI),V===s.UNSIGNED_INT&&($=s.R32UI),V===s.BYTE&&($=s.R8I),V===s.SHORT&&($=s.R16I),V===s.INT&&($=s.R32I)),T===s.RG&&(V===s.FLOAT&&($=s.RG32F),V===s.HALF_FLOAT&&($=s.RG16F),V===s.UNSIGNED_BYTE&&($=s.RG8)),T===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&($=s.RG8UI),V===s.UNSIGNED_SHORT&&($=s.RG16UI),V===s.UNSIGNED_INT&&($=s.RG32UI),V===s.BYTE&&($=s.RG8I),V===s.SHORT&&($=s.RG16I),V===s.INT&&($=s.RG32I)),T===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&($=s.RGB8UI),V===s.UNSIGNED_SHORT&&($=s.RGB16UI),V===s.UNSIGNED_INT&&($=s.RGB32UI),V===s.BYTE&&($=s.RGB8I),V===s.SHORT&&($=s.RGB16I),V===s.INT&&($=s.RGB32I)),T===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&($=s.RGBA8UI),V===s.UNSIGNED_SHORT&&($=s.RGBA16UI),V===s.UNSIGNED_INT&&($=s.RGBA32UI),V===s.BYTE&&($=s.RGBA8I),V===s.SHORT&&($=s.RGBA16I),V===s.INT&&($=s.RGBA32I)),T===s.RGB&&(V===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),V===s.UNSIGNED_INT_10F_11F_11F_REV&&($=s.R11F_G11F_B10F)),T===s.RGBA){const Tt=tt?Ya:Qt.getTransfer(Z);V===s.FLOAT&&($=s.RGBA32F),V===s.HALF_FLOAT&&($=s.RGBA16F),V===s.UNSIGNED_BYTE&&($=Tt===ae?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function v(F,T){let V;return F?T===null||T===xi||T===wo?V=s.DEPTH24_STENCIL8:T===Zn?V=s.DEPTH32F_STENCIL8:T===bo&&(V=s.DEPTH24_STENCIL8,Ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===xi||T===wo?V=s.DEPTH_COMPONENT24:T===Zn?V=s.DEPTH_COMPONENT32F:T===bo&&(V=s.DEPTH_COMPONENT16),V}function M(F,T){return m(F)===!0||F.isFramebufferTexture&&F.minFilter!==qe&&F.minFilter!==Qe?Math.log2(Math.max(T.width,T.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?T.mipmaps.length:1}function w(F){const T=F.target;T.removeEventListener("dispose",w),C(T),T.isVideoTexture&&h.delete(T)}function E(F){const T=F.target;T.removeEventListener("dispose",E),b(T)}function C(F){const T=n.get(F);if(T.__webglInit===void 0)return;const V=F.source,Z=u.get(V);if(Z){const tt=Z[T.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&S(F),Object.keys(Z).length===0&&u.delete(V)}n.remove(F)}function S(F){const T=n.get(F);s.deleteTexture(T.__webglTexture);const V=F.source,Z=u.get(V);delete Z[T.__cacheKey],o.memory.textures--}function b(F){const T=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(T.__webglFramebuffer[Z]))for(let tt=0;tt<T.__webglFramebuffer[Z].length;tt++)s.deleteFramebuffer(T.__webglFramebuffer[Z][tt]);else s.deleteFramebuffer(T.__webglFramebuffer[Z]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[Z])}else{if(Array.isArray(T.__webglFramebuffer))for(let Z=0;Z<T.__webglFramebuffer.length;Z++)s.deleteFramebuffer(T.__webglFramebuffer[Z]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Z=0;Z<T.__webglColorRenderbuffer.length;Z++)T.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[Z]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const V=F.textures;for(let Z=0,tt=V.length;Z<tt;Z++){const $=n.get(V[Z]);$.__webglTexture&&(s.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(V[Z])}n.remove(F)}let R=0;function L(){R=0}function P(){const F=R;return F>=i.maxTextures&&Ft("WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+i.maxTextures),R+=1,F}function D(F){const T=[];return T.push(F.wrapS),T.push(F.wrapT),T.push(F.wrapR||0),T.push(F.magFilter),T.push(F.minFilter),T.push(F.anisotropy),T.push(F.internalFormat),T.push(F.format),T.push(F.type),T.push(F.generateMipmaps),T.push(F.premultiplyAlpha),T.push(F.flipY),T.push(F.unpackAlignment),T.push(F.colorSpace),T.join()}function B(F,T){const V=n.get(F);if(F.isVideoTexture&&ie(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&V.__version!==F.version){const Z=F.image;if(Z===null)Ft("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Ft("WebGLRenderer: Texture marked for update but image is incomplete");else{j(V,F,T);return}}else F.isExternalTexture&&(V.__webglTexture=F.sourceTexture?F.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+T)}function U(F,T){const V=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&V.__version!==F.version){j(V,F,T);return}else F.isExternalTexture&&(V.__webglTexture=F.sourceTexture?F.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+T)}function k(F,T){const V=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&V.__version!==F.version){j(V,F,T);return}e.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+T)}function H(F,T){const V=n.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&V.__version!==F.version){nt(V,F,T);return}e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+T)}const q={[kc]:s.REPEAT,[Fi]:s.CLAMP_TO_EDGE,[Vc]:s.MIRRORED_REPEAT},K={[qe]:s.NEAREST,[Zm]:s.NEAREST_MIPMAP_NEAREST,[Uo]:s.NEAREST_MIPMAP_LINEAR,[Qe]:s.LINEAR,[yl]:s.LINEAR_MIPMAP_NEAREST,[Ls]:s.LINEAR_MIPMAP_LINEAR},Q={[Qm]:s.NEVER,[sg]:s.ALWAYS,[tg]:s.LESS,[Yh]:s.LEQUAL,[eg]:s.EQUAL,[$h]:s.GEQUAL,[ng]:s.GREATER,[ig]:s.NOTEQUAL};function et(F,T){if(T.type===Zn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Qe||T.magFilter===yl||T.magFilter===Uo||T.magFilter===Ls||T.minFilter===Qe||T.minFilter===yl||T.minFilter===Uo||T.minFilter===Ls)&&Ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(F,s.TEXTURE_WRAP_S,q[T.wrapS]),s.texParameteri(F,s.TEXTURE_WRAP_T,q[T.wrapT]),(F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY)&&s.texParameteri(F,s.TEXTURE_WRAP_R,q[T.wrapR]),s.texParameteri(F,s.TEXTURE_MAG_FILTER,K[T.magFilter]),s.texParameteri(F,s.TEXTURE_MIN_FILTER,K[T.minFilter]),T.compareFunction&&(s.texParameteri(F,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(F,s.TEXTURE_COMPARE_FUNC,Q[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===qe||T.minFilter!==Uo&&T.minFilter!==Ls||T.type===Zn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");s.texParameterf(F,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function yt(F,T){let V=!1;F.__webglInit===void 0&&(F.__webglInit=!0,T.addEventListener("dispose",w));const Z=T.source;let tt=u.get(Z);tt===void 0&&(tt={},u.set(Z,tt));const $=D(T);if($!==F.__cacheKey){tt[$]===void 0&&(tt[$]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,V=!0),tt[$].usedTimes++;const Tt=tt[F.__cacheKey];Tt!==void 0&&(tt[F.__cacheKey].usedTimes--,Tt.usedTimes===0&&S(T)),F.__cacheKey=$,F.__webglTexture=tt[$].texture}return V}function Yt(F,T,V){return Math.floor(Math.floor(F/V)/T)}function qt(F,T,V,Z){const $=F.updateRanges;if($.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,V,Z,T.data);else{$.sort((rt,ht)=>rt.start-ht.start);let Tt=0;for(let rt=1;rt<$.length;rt++){const ht=$[Tt],bt=$[rt],At=ht.start+ht.count,ct=Yt(bt.start,T.width,4),Ht=Yt(ht.start,T.width,4);bt.start<=At+1&&ct===Ht&&Yt(bt.start+bt.count-1,T.width,4)===ct?ht.count=Math.max(ht.count,bt.start+bt.count-ht.start):(++Tt,$[Tt]=bt)}$.length=Tt+1;const lt=s.getParameter(s.UNPACK_ROW_LENGTH),wt=s.getParameter(s.UNPACK_SKIP_PIXELS),Ut=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let rt=0,ht=$.length;rt<ht;rt++){const bt=$[rt],At=Math.floor(bt.start/4),ct=Math.ceil(bt.count/4),Ht=At%T.width,z=Math.floor(At/T.width),mt=ct,ot=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ht),s.pixelStorei(s.UNPACK_SKIP_ROWS,z),e.texSubImage2D(s.TEXTURE_2D,0,Ht,z,mt,ot,V,Z,T.data)}F.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,lt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,wt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ut)}}function j(F,T,V){let Z=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Z=s.TEXTURE_3D);const tt=yt(F,T),$=T.source;e.bindTexture(Z,F.__webglTexture,s.TEXTURE0+V);const Tt=n.get($);if($.version!==Tt.__version||tt===!0){e.activeTexture(s.TEXTURE0+V);const lt=Qt.getPrimaries(Qt.workingColorSpace),wt=T.colorSpace===ns?null:Qt.getPrimaries(T.colorSpace),Ut=T.colorSpace===ns||lt===wt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);let rt=_(T.image,!1,i.maxTextureSize);rt=me(T,rt);const ht=r.convert(T.format,T.colorSpace),bt=r.convert(T.type);let At=y(T.internalFormat,ht,bt,T.colorSpace,T.isVideoTexture);et(Z,T);let ct;const Ht=T.mipmaps,z=T.isVideoTexture!==!0,mt=Tt.__version===void 0||tt===!0,ot=$.dataReady,gt=M(T,rt);if(T.isDepthTexture)At=v(T.format===Ds,T.type),mt&&(z?e.texStorage2D(s.TEXTURE_2D,1,At,rt.width,rt.height):e.texImage2D(s.TEXTURE_2D,0,At,rt.width,rt.height,0,ht,bt,null));else if(T.isDataTexture)if(Ht.length>0){z&&mt&&e.texStorage2D(s.TEXTURE_2D,gt,At,Ht[0].width,Ht[0].height);for(let st=0,J=Ht.length;st<J;st++)ct=Ht[st],z?ot&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,ct.width,ct.height,ht,bt,ct.data):e.texImage2D(s.TEXTURE_2D,st,At,ct.width,ct.height,0,ht,bt,ct.data);T.generateMipmaps=!1}else z?(mt&&e.texStorage2D(s.TEXTURE_2D,gt,At,rt.width,rt.height),ot&&qt(T,rt,ht,bt)):e.texImage2D(s.TEXTURE_2D,0,At,rt.width,rt.height,0,ht,bt,rt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){z&&mt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,gt,At,Ht[0].width,Ht[0].height,rt.depth);for(let st=0,J=Ht.length;st<J;st++)if(ct=Ht[st],T.format!==Kn)if(ht!==null)if(z){if(ot)if(T.layerUpdates.size>0){const at=_d(ct.width,ct.height,T.format,T.type);for(const Bt of T.layerUpdates){const ge=ct.data.subarray(Bt*at/ct.data.BYTES_PER_ELEMENT,(Bt+1)*at/ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,Bt,ct.width,ct.height,1,ht,ge)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,ct.width,ct.height,rt.depth,ht,ct.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,st,At,ct.width,ct.height,rt.depth,0,ct.data,0,0);else Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?ot&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,ct.width,ct.height,rt.depth,ht,bt,ct.data):e.texImage3D(s.TEXTURE_2D_ARRAY,st,At,ct.width,ct.height,rt.depth,0,ht,bt,ct.data)}else{z&&mt&&e.texStorage2D(s.TEXTURE_2D,gt,At,Ht[0].width,Ht[0].height);for(let st=0,J=Ht.length;st<J;st++)ct=Ht[st],T.format!==Kn?ht!==null?z?ot&&e.compressedTexSubImage2D(s.TEXTURE_2D,st,0,0,ct.width,ct.height,ht,ct.data):e.compressedTexImage2D(s.TEXTURE_2D,st,At,ct.width,ct.height,0,ct.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?ot&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,ct.width,ct.height,ht,bt,ct.data):e.texImage2D(s.TEXTURE_2D,st,At,ct.width,ct.height,0,ht,bt,ct.data)}else if(T.isDataArrayTexture)if(z){if(mt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,gt,At,rt.width,rt.height,rt.depth),ot)if(T.layerUpdates.size>0){const st=_d(rt.width,rt.height,T.format,T.type);for(const J of T.layerUpdates){const at=rt.data.subarray(J*st/rt.data.BYTES_PER_ELEMENT,(J+1)*st/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,rt.width,rt.height,1,ht,bt,at)}T.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,ht,bt,rt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,At,rt.width,rt.height,rt.depth,0,ht,bt,rt.data);else if(T.isData3DTexture)z?(mt&&e.texStorage3D(s.TEXTURE_3D,gt,At,rt.width,rt.height,rt.depth),ot&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,ht,bt,rt.data)):e.texImage3D(s.TEXTURE_3D,0,At,rt.width,rt.height,rt.depth,0,ht,bt,rt.data);else if(T.isFramebufferTexture){if(mt)if(z)e.texStorage2D(s.TEXTURE_2D,gt,At,rt.width,rt.height);else{let st=rt.width,J=rt.height;for(let at=0;at<gt;at++)e.texImage2D(s.TEXTURE_2D,at,At,st,J,0,ht,bt,null),st>>=1,J>>=1}}else if(Ht.length>0){if(z&&mt){const st=Et(Ht[0]);e.texStorage2D(s.TEXTURE_2D,gt,At,st.width,st.height)}for(let st=0,J=Ht.length;st<J;st++)ct=Ht[st],z?ot&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,ht,bt,ct):e.texImage2D(s.TEXTURE_2D,st,At,ht,bt,ct);T.generateMipmaps=!1}else if(z){if(mt){const st=Et(rt);e.texStorage2D(s.TEXTURE_2D,gt,At,st.width,st.height)}ot&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ht,bt,rt)}else e.texImage2D(s.TEXTURE_2D,0,At,ht,bt,rt);m(T)&&p(Z),Tt.__version=$.version,T.onUpdate&&T.onUpdate(T)}F.__version=T.version}function nt(F,T,V){if(T.image.length!==6)return;const Z=yt(F,T),tt=T.source;e.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+V);const $=n.get(tt);if(tt.version!==$.__version||Z===!0){e.activeTexture(s.TEXTURE0+V);const Tt=Qt.getPrimaries(Qt.workingColorSpace),lt=T.colorSpace===ns?null:Qt.getPrimaries(T.colorSpace),wt=T.colorSpace===ns||Tt===lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const Ut=T.isCompressedTexture||T.image[0].isCompressedTexture,rt=T.image[0]&&T.image[0].isDataTexture,ht=[];for(let J=0;J<6;J++)!Ut&&!rt?ht[J]=_(T.image[J],!0,i.maxCubemapSize):ht[J]=rt?T.image[J].image:T.image[J],ht[J]=me(T,ht[J]);const bt=ht[0],At=r.convert(T.format,T.colorSpace),ct=r.convert(T.type),Ht=y(T.internalFormat,At,ct,T.colorSpace),z=T.isVideoTexture!==!0,mt=$.__version===void 0||Z===!0,ot=tt.dataReady;let gt=M(T,bt);et(s.TEXTURE_CUBE_MAP,T);let st;if(Ut){z&&mt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,Ht,bt.width,bt.height);for(let J=0;J<6;J++){st=ht[J].mipmaps;for(let at=0;at<st.length;at++){const Bt=st[at];T.format!==Kn?At!==null?z?ot&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,at,0,0,Bt.width,Bt.height,At,Bt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,at,Ht,Bt.width,Bt.height,0,Bt.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,at,0,0,Bt.width,Bt.height,At,ct,Bt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,at,Ht,Bt.width,Bt.height,0,At,ct,Bt.data)}}}else{if(st=T.mipmaps,z&&mt){st.length>0&&gt++;const J=Et(ht[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,Ht,J.width,J.height)}for(let J=0;J<6;J++)if(rt){z?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ht[J].width,ht[J].height,At,ct,ht[J].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ht,ht[J].width,ht[J].height,0,At,ct,ht[J].data);for(let at=0;at<st.length;at++){const ge=st[at].image[J].image;z?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,at+1,0,0,ge.width,ge.height,At,ct,ge.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,at+1,Ht,ge.width,ge.height,0,At,ct,ge.data)}}else{z?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,At,ct,ht[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ht,At,ct,ht[J]);for(let at=0;at<st.length;at++){const Bt=st[at];z?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,at+1,0,0,At,ct,Bt.image[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,at+1,Ht,At,ct,Bt.image[J])}}}m(T)&&p(s.TEXTURE_CUBE_MAP),$.__version=tt.version,T.onUpdate&&T.onUpdate(T)}F.__version=T.version}function _t(F,T,V,Z,tt,$){const Tt=r.convert(V.format,V.colorSpace),lt=r.convert(V.type),wt=y(V.internalFormat,Tt,lt,V.colorSpace),Ut=n.get(T),rt=n.get(V);if(rt.__renderTarget=T,!Ut.__hasExternalTextures){const ht=Math.max(1,T.width>>$),bt=Math.max(1,T.height>>$);tt===s.TEXTURE_3D||tt===s.TEXTURE_2D_ARRAY?e.texImage3D(tt,$,wt,ht,bt,T.depth,0,Tt,lt,null):e.texImage2D(tt,$,wt,ht,bt,0,Tt,lt,null)}e.bindFramebuffer(s.FRAMEBUFFER,F),Le(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,tt,rt.__webglTexture,0,O(T)):(tt===s.TEXTURE_2D||tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,tt,rt.__webglTexture,$),e.bindFramebuffer(s.FRAMEBUFFER,null)}function zt(F,T,V){if(s.bindRenderbuffer(s.RENDERBUFFER,F),T.depthBuffer){const Z=T.depthTexture,tt=Z&&Z.isDepthTexture?Z.type:null,$=v(T.stencilBuffer,tt),Tt=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Le(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,O(T),$,T.width,T.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,O(T),$,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,$,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Tt,s.RENDERBUFFER,F)}else{const Z=T.textures;for(let tt=0;tt<Z.length;tt++){const $=Z[tt],Tt=r.convert($.format,$.colorSpace),lt=r.convert($.type),wt=y($.internalFormat,Tt,lt,$.colorSpace);Le(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,O(T),wt,T.width,T.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,O(T),wt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,wt,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function St(F,T,V){const Z=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,F),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const tt=n.get(T.depthTexture);if(tt.__renderTarget=T,(!tt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Z){if(tt.__webglInit===void 0&&(tt.__webglInit=!0,T.depthTexture.addEventListener("dispose",w)),tt.__webglTexture===void 0){tt.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,tt.__webglTexture),et(s.TEXTURE_CUBE_MAP,T.depthTexture);const Ut=r.convert(T.depthTexture.format),rt=r.convert(T.depthTexture.type);let ht;T.depthTexture.format===ki?ht=s.DEPTH_COMPONENT24:T.depthTexture.format===Ds&&(ht=s.DEPTH24_STENCIL8);for(let bt=0;bt<6;bt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,ht,T.width,T.height,0,Ut,rt,null)}}else B(T.depthTexture,0);const $=tt.__webglTexture,Tt=O(T),lt=Z?s.TEXTURE_CUBE_MAP_POSITIVE_X+V:s.TEXTURE_2D,wt=T.depthTexture.format===Ds?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===ki)Le(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,wt,lt,$,0,Tt):s.framebufferTexture2D(s.FRAMEBUFFER,wt,lt,$,0);else if(T.depthTexture.format===Ds)Le(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,wt,lt,$,0,Tt):s.framebufferTexture2D(s.FRAMEBUFFER,wt,lt,$,0);else throw new Error("Unknown depthTexture format")}function $t(F){const T=n.get(F),V=F.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==F.depthTexture){const Z=F.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Z){const tt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Z.removeEventListener("dispose",tt)};Z.addEventListener("dispose",tt),T.__depthDisposeCallback=tt}T.__boundDepthTexture=Z}if(F.depthTexture&&!T.__autoAllocateDepthBuffer)if(V)for(let Z=0;Z<6;Z++)St(T.__webglFramebuffer[Z],F,Z);else{const Z=F.texture.mipmaps;Z&&Z.length>0?St(T.__webglFramebuffer[0],F,0):St(T.__webglFramebuffer,F,0)}else if(V){T.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[Z]),T.__webglDepthbuffer[Z]===void 0)T.__webglDepthbuffer[Z]=s.createRenderbuffer(),zt(T.__webglDepthbuffer[Z],F,!1);else{const tt=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=T.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,$)}}else{const Z=F.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),zt(T.__webglDepthbuffer,F,!1);else{const tt=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,$)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function we(F,T,V){const Z=n.get(F);T!==void 0&&_t(Z.__webglFramebuffer,F,F.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&$t(F)}function Kt(F){const T=F.texture,V=n.get(F),Z=n.get(T);F.addEventListener("dispose",E);const tt=F.textures,$=F.isWebGLCubeRenderTarget===!0,Tt=tt.length>1;if(Tt||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=T.version,o.memory.textures++),$){V.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer[lt]=[];for(let wt=0;wt<T.mipmaps.length;wt++)V.__webglFramebuffer[lt][wt]=s.createFramebuffer()}else V.__webglFramebuffer[lt]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer=[];for(let lt=0;lt<T.mipmaps.length;lt++)V.__webglFramebuffer[lt]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(Tt)for(let lt=0,wt=tt.length;lt<wt;lt++){const Ut=n.get(tt[lt]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=s.createTexture(),o.memory.textures++)}if(F.samples>0&&Le(F)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let lt=0;lt<tt.length;lt++){const wt=tt[lt];V.__webglColorRenderbuffer[lt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[lt]);const Ut=r.convert(wt.format,wt.colorSpace),rt=r.convert(wt.type),ht=y(wt.internalFormat,Ut,rt,wt.colorSpace,F.isXRRenderTarget===!0),bt=O(F);s.renderbufferStorageMultisample(s.RENDERBUFFER,bt,ht,F.width,F.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,V.__webglColorRenderbuffer[lt])}s.bindRenderbuffer(s.RENDERBUFFER,null),F.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),zt(V.__webglDepthRenderbuffer,F,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),et(s.TEXTURE_CUBE_MAP,T);for(let lt=0;lt<6;lt++)if(T.mipmaps&&T.mipmaps.length>0)for(let wt=0;wt<T.mipmaps.length;wt++)_t(V.__webglFramebuffer[lt][wt],F,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,wt);else _t(V.__webglFramebuffer[lt],F,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(T)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let lt=0,wt=tt.length;lt<wt;lt++){const Ut=tt[lt],rt=n.get(Ut);let ht=s.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(ht=F.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ht,rt.__webglTexture),et(ht,Ut),_t(V.__webglFramebuffer,F,Ut,s.COLOR_ATTACHMENT0+lt,ht,0),m(Ut)&&p(ht)}e.unbindTexture()}else{let lt=s.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(lt=F.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(lt,Z.__webglTexture),et(lt,T),T.mipmaps&&T.mipmaps.length>0)for(let wt=0;wt<T.mipmaps.length;wt++)_t(V.__webglFramebuffer[wt],F,T,s.COLOR_ATTACHMENT0,lt,wt);else _t(V.__webglFramebuffer,F,T,s.COLOR_ATTACHMENT0,lt,0);m(T)&&p(lt),e.unbindTexture()}F.depthBuffer&&$t(F)}function se(F){const T=F.textures;for(let V=0,Z=T.length;V<Z;V++){const tt=T[V];if(m(tt)){const $=x(F),Tt=n.get(tt).__webglTexture;e.bindTexture($,Tt),p($),e.unbindTexture()}}}const de=[],Gt=[];function Ie(F){if(F.samples>0){if(Le(F)===!1){const T=F.textures,V=F.width,Z=F.height;let tt=s.COLOR_BUFFER_BIT;const $=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Tt=n.get(F),lt=T.length>1;if(lt)for(let Ut=0;Ut<T.length;Ut++)e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ut,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ut,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer);const wt=F.texture.mipmaps;wt&&wt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let Ut=0;Ut<T.length;Ut++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(tt|=s.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(tt|=s.STENCIL_BUFFER_BIT)),lt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Tt.__webglColorRenderbuffer[Ut]);const rt=n.get(T[Ut]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,rt,0)}s.blitFramebuffer(0,0,V,Z,0,0,V,Z,tt,s.NEAREST),l===!0&&(de.length=0,Gt.length=0,de.push(s.COLOR_ATTACHMENT0+Ut),F.depthBuffer&&F.resolveDepthBuffer===!1&&(de.push($),Gt.push($),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Gt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,de))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),lt)for(let Ut=0;Ut<T.length;Ut++){e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ut,s.RENDERBUFFER,Tt.__webglColorRenderbuffer[Ut]);const rt=n.get(T[Ut]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ut,s.TEXTURE_2D,rt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&l){const T=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function O(F){return Math.min(i.maxSamples,F.samples)}function Le(F){const T=n.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ie(F){const T=o.render.frame;h.get(F)!==T&&(h.set(F,T),F.update())}function me(F,T){const V=F.colorSpace,Z=F.format,tt=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||V!==Pr&&V!==ns&&(Qt.getTransfer(V)===ae?(Z!==Kn||tt!==En)&&Ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Jt("WebGLTextures: Unsupported texture color space:",V)),T}function Et(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(c.width=F.naturalWidth||F.width,c.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(c.width=F.displayWidth,c.height=F.displayHeight):(c.width=F.width,c.height=F.height),c}this.allocateTextureUnit=P,this.resetTextureUnits=L,this.setTexture2D=B,this.setTexture2DArray=U,this.setTexture3D=k,this.setTextureCube=H,this.rebindTextures=we,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Le,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function eM(s,t){function e(n,i=ns){let r;const o=Qt.getTransfer(i);if(n===En)return s.UNSIGNED_BYTE;if(n===kh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Vh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===lp)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===cp)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===op)return s.BYTE;if(n===ap)return s.SHORT;if(n===bo)return s.UNSIGNED_SHORT;if(n===zh)return s.INT;if(n===xi)return s.UNSIGNED_INT;if(n===Zn)return s.FLOAT;if(n===zi)return s.HALF_FLOAT;if(n===hp)return s.ALPHA;if(n===up)return s.RGB;if(n===Kn)return s.RGBA;if(n===ki)return s.DEPTH_COMPONENT;if(n===Ds)return s.DEPTH_STENCIL;if(n===Gh)return s.RED;if(n===Hh)return s.RED_INTEGER;if(n===Rr)return s.RG;if(n===Wh)return s.RG_INTEGER;if(n===Xh)return s.RGBA_INTEGER;if(n===Ba||n===Oa||n===za||n===ka)if(o===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ba)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ba)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Oa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===za)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ka)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Gc||n===Hc||n===Wc||n===Xc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Gc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Hc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qc||n===Yc||n===$c||n===jc||n===Zc||n===Kc||n===Jc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===qc||n===Yc)return o===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$c)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===jc)return r.COMPRESSED_R11_EAC;if(n===Zc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Kc)return r.COMPRESSED_RG11_EAC;if(n===Jc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Qc||n===th||n===eh||n===nh||n===ih||n===sh||n===rh||n===oh||n===ah||n===lh||n===ch||n===hh||n===uh||n===dh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Qc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===th)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===eh)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===nh)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ih)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===sh)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===rh)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oh)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ah)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===lh)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ch)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hh)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===uh)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===dh)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fh||n===ph||n===mh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===fh)return o===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ph)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===mh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gh||n===xh||n===_h||n===vh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===gh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===xh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_h)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===wo?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const nM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iM=`
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

}`;class sM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new wp(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new _i({vertexShader:nM,fragmentShader:iM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Zt(new zr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rM extends Bs{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new sM,p={},x=e.getContextAttributes();let y=null,v=null;const M=[],w=[],E=new Pt;let C=null;const S=new gn;S.viewport=new le;const b=new gn;b.viewport=new le;const R=[S,b],L=new l0;let P=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let nt=M[j];return nt===void 0&&(nt=new Vl,M[j]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(j){let nt=M[j];return nt===void 0&&(nt=new Vl,M[j]=nt),nt.getGripSpace()},this.getHand=function(j){let nt=M[j];return nt===void 0&&(nt=new Vl,M[j]=nt),nt.getHandSpace()};function B(j){const nt=w.indexOf(j.inputSource);if(nt===-1)return;const _t=M[nt];_t!==void 0&&(_t.update(j.inputSource,j.frame,c||o),_t.dispatchEvent({type:j.type,data:j.inputSource}))}function U(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",k);for(let j=0;j<M.length;j++){const nt=w[j];nt!==null&&(w[j]=null,M[j].disconnect(nt))}P=null,D=null,m.reset();for(const j in p)delete p[j];t.setRenderTarget(y),f=null,u=null,d=null,i=null,v=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&Ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&Ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(y=t.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",U),i.addEventListener("inputsourceschange",k),x.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,zt=null,St=null;x.depth&&(St=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=x.stencil?Ds:ki,zt=x.stencil?wo:xi);const $t={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer($t),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new pi(u.textureWidth,u.textureHeight,{format:Kn,type:En,depthTexture:new Ao(u.textureWidth,u.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const _t={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,_t),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new pi(f.framebufferWidth,f.framebufferHeight,{format:Kn,type:En,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),qt.setContext(i),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(j){for(let nt=0;nt<j.removed.length;nt++){const _t=j.removed[nt],zt=w.indexOf(_t);zt>=0&&(w[zt]=null,M[zt].disconnect(_t))}for(let nt=0;nt<j.added.length;nt++){const _t=j.added[nt];let zt=w.indexOf(_t);if(zt===-1){for(let $t=0;$t<M.length;$t++)if($t>=w.length){w.push(_t),zt=$t;break}else if(w[$t]===null){w[$t]=_t,zt=$t;break}if(zt===-1)break}const St=M[zt];St&&St.connect(_t)}}const H=new N,q=new N;function K(j,nt,_t){H.setFromMatrixPosition(nt.matrixWorld),q.setFromMatrixPosition(_t.matrixWorld);const zt=H.distanceTo(q),St=nt.projectionMatrix.elements,$t=_t.projectionMatrix.elements,we=St[14]/(St[10]-1),Kt=St[14]/(St[10]+1),se=(St[9]+1)/St[5],de=(St[9]-1)/St[5],Gt=(St[8]-1)/St[0],Ie=($t[8]+1)/$t[0],O=we*Gt,Le=we*Ie,ie=zt/(-Gt+Ie),me=ie*-Gt;if(nt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(me),j.translateZ(ie),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),St[10]===-1)j.projectionMatrix.copy(nt.projectionMatrix),j.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const Et=we+ie,F=Kt+ie,T=O-me,V=Le+(zt-me),Z=se*Kt/F*Et,tt=de*Kt/F*Et;j.projectionMatrix.makePerspective(T,V,Z,tt,Et,F),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Q(j,nt){nt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(nt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let nt=j.near,_t=j.far;m.texture!==null&&(m.depthNear>0&&(nt=m.depthNear),m.depthFar>0&&(_t=m.depthFar)),L.near=b.near=S.near=nt,L.far=b.far=S.far=_t,(P!==L.near||D!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),P=L.near,D=L.far),L.layers.mask=j.layers.mask|6,S.layers.mask=L.layers.mask&3,b.layers.mask=L.layers.mask&5;const zt=j.parent,St=L.cameras;Q(L,zt);for(let $t=0;$t<St.length;$t++)Q(St[$t],zt);St.length===2?K(L,S,b):L.projectionMatrix.copy(S.projectionMatrix),et(j,L,zt)};function et(j,nt,_t){_t===null?j.matrix.copy(nt.matrixWorld):(j.matrix.copy(_t.matrixWorld),j.matrix.invert(),j.matrix.multiply(nt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(nt.projectionMatrix),j.projectionMatrixInverse.copy(nt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ir*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(j){return p[j]};let yt=null;function Yt(j,nt){if(h=nt.getViewerPose(c||o),g=nt,h!==null){const _t=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let zt=!1;_t.length!==L.cameras.length&&(L.cameras.length=0,zt=!0);for(let Kt=0;Kt<_t.length;Kt++){const se=_t[Kt];let de=null;if(f!==null)de=f.getViewport(se);else{const Ie=d.getViewSubImage(u,se);de=Ie.viewport,Kt===0&&(t.setRenderTargetTextures(v,Ie.colorTexture,Ie.depthStencilTexture),t.setRenderTarget(v))}let Gt=R[Kt];Gt===void 0&&(Gt=new gn,Gt.layers.enable(Kt),Gt.viewport=new le,R[Kt]=Gt),Gt.matrix.fromArray(se.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(se.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(de.x,de.y,de.width,de.height),Kt===0&&(L.matrix.copy(Gt.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),zt===!0&&L.cameras.push(Gt)}const St=i.enabledFeatures;if(St&&St.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const Kt=d.getDepthInformation(_t[0]);Kt&&Kt.isValid&&Kt.texture&&m.init(Kt,i.renderState)}if(St&&St.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let Kt=0;Kt<_t.length;Kt++){const se=_t[Kt].camera;if(se){let de=p[se];de||(de=new wp,p[se]=de);const Gt=d.getCameraImage(se);de.sourceTexture=Gt}}}}for(let _t=0;_t<M.length;_t++){const zt=w[_t],St=M[_t];zt!==null&&St!==void 0&&St.update(zt,nt,c||o)}yt&&yt(j,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}const qt=new Tp;qt.setAnimationLoop(Yt),this.setAnimationLoop=function(j){yt=j},this.dispose=function(){}}}const ys=new kn,oM=new Xt;function aM(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,xp(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ye&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ye&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p),y=x.envMap,v=x.envMapRotation;y&&(m.envMap.value=y,ys.copy(v),ys.x*=-1,ys.y*=-1,ys.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),m.envMapRotation.value.setFromMatrix4(oM.makeRotationFromEuler(ys)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ye&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function lM(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const v=y.program;n.uniformBlockBinding(x,v)}function c(x,y){let v=i[x.id];v===void 0&&(g(x),v=h(x),i[x.id]=v,x.addEventListener("dispose",m));const M=y.program;n.updateUBOMapping(x,M);const w=t.render.frame;r[x.id]!==w&&(u(x),r[x.id]=w)}function h(x){const y=d();x.__bindingPointIndex=y;const v=s.createBuffer(),M=x.__size,w=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,M,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,v),v}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return Jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const y=i[x.id],v=x.uniforms,M=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let w=0,E=v.length;w<E;w++){const C=Array.isArray(v[w])?v[w]:[v[w]];for(let S=0,b=C.length;S<b;S++){const R=C[S];if(f(R,w,S,M)===!0){const L=R.__offset,P=Array.isArray(R.value)?R.value:[R.value];let D=0;for(let B=0;B<P.length;B++){const U=P[B],k=_(U);typeof U=="number"||typeof U=="boolean"?(R.__data[0]=U,s.bufferSubData(s.UNIFORM_BUFFER,L+D,R.__data)):U.isMatrix3?(R.__data[0]=U.elements[0],R.__data[1]=U.elements[1],R.__data[2]=U.elements[2],R.__data[3]=0,R.__data[4]=U.elements[3],R.__data[5]=U.elements[4],R.__data[6]=U.elements[5],R.__data[7]=0,R.__data[8]=U.elements[6],R.__data[9]=U.elements[7],R.__data[10]=U.elements[8],R.__data[11]=0):(U.toArray(R.__data,D),D+=k.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,y,v,M){const w=x.value,E=y+"_"+v;if(M[E]===void 0)return typeof w=="number"||typeof w=="boolean"?M[E]=w:M[E]=w.clone(),!0;{const C=M[E];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return M[E]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(x){const y=x.uniforms;let v=0;const M=16;for(let E=0,C=y.length;E<C;E++){const S=Array.isArray(y[E])?y[E]:[y[E]];for(let b=0,R=S.length;b<R;b++){const L=S[b],P=Array.isArray(L.value)?L.value:[L.value];for(let D=0,B=P.length;D<B;D++){const U=P[D],k=_(U),H=v%M,q=H%k.boundary,K=H+q;v+=q,K!==0&&M-K<k.storage&&(v+=M-K),L.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=v,v+=k.storage}}}const w=v%M;return w>0&&(v+=M-w),x.__size=v,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?Ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ft("WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){const y=x.target;y.removeEventListener("dispose",m);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(const x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}const cM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let si=null;function hM(){return si===null&&(si=new Sp(cM,16,16,Rr,zi),si.name="DFG_LUT",si.minFilter=Qe,si.magFilter=Qe,si.wrapS=Fi,si.wrapT=Fi,si.generateMipmaps=!1,si.needsUpdate=!0),si}class uM{constructor(t={}){const{canvas:e=rg(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=En}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const _=f,m=new Set([Xh,Wh,Hh]),p=new Set([En,xi,bo,wo,kh,Vh]),x=new Uint32Array(4),y=new Int32Array(4);let v=null,M=null;const w=[],E=[];let C=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let b=!1;this._outputColorSpace=Dn;let R=0,L=0,P=null,D=-1,B=null;const U=new le,k=new le;let H=null;const q=new Dt(0);let K=0,Q=e.width,et=e.height,yt=1,Yt=null,qt=null;const j=new le(0,0,Q,et),nt=new le(0,0,Q,et);let _t=!1;const zt=new Qh;let St=!1,$t=!1;const we=new Xt,Kt=new N,se=new le,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function Ie(){return P===null?yt:1}let O=n;function Le(I,G){return e.getContext(I,G)}try{const I={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Co}`),e.addEventListener("webglcontextlost",Bt,!1),e.addEventListener("webglcontextrestored",ge,!1),e.addEventListener("webglcontextcreationerror",re,!1),O===null){const G="webgl2";if(O=Le(G,I),O===null)throw Le(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw Jt("WebGLRenderer: "+I.message),I}let ie,me,Et,F,T,V,Z,tt,$,Tt,lt,wt,Ut,rt,ht,bt,At,ct,Ht,z,mt,ot,gt,st;function J(){ie=new hv(O),ie.init(),ot=new eM(O,ie),me=new ev(O,ie,t,ot),Et=new Qy(O,ie),me.reversedDepthBuffer&&u&&Et.buffers.depth.setReversed(!0),F=new fv(O),T=new Oy,V=new tM(O,ie,Et,T,me,ot,F),Z=new iv(S),tt=new cv(S),$=new x0(O),gt=new Q_(O,$),Tt=new uv(O,$,F,gt),lt=new mv(O,Tt,$,F),Ht=new pv(O,me,V),bt=new nv(T),wt=new By(S,Z,tt,ie,me,gt,bt),Ut=new aM(S,T),rt=new ky,ht=new qy(ie),ct=new J_(S,Z,tt,Et,lt,g,l),At=new Ky(S,lt,me),st=new lM(O,F,me,Et),z=new tv(O,ie,F),mt=new dv(O,ie,F),F.programs=wt.programs,S.capabilities=me,S.extensions=ie,S.properties=T,S.renderLists=rt,S.shadowMap=At,S.state=Et,S.info=F}J(),_!==En&&(C=new xv(_,e.width,e.height,i,r));const at=new rM(S,O);this.xr=at,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const I=ie.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=ie.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return yt},this.setPixelRatio=function(I){I!==void 0&&(yt=I,this.setSize(Q,et,!1))},this.getSize=function(I){return I.set(Q,et)},this.setSize=function(I,G,Y=!0){if(at.isPresenting){Ft("WebGLRenderer: Can't change size while VR device is presenting.");return}Q=I,et=G,e.width=Math.floor(I*yt),e.height=Math.floor(G*yt),Y===!0&&(e.style.width=I+"px",e.style.height=G+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,I,G)},this.getDrawingBufferSize=function(I){return I.set(Q*yt,et*yt).floor()},this.setDrawingBufferSize=function(I,G,Y){Q=I,et=G,yt=Y,e.width=Math.floor(I*Y),e.height=Math.floor(G*Y),this.setViewport(0,0,I,G)},this.setEffects=function(I){if(_===En){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let G=0;G<I.length;G++)if(I[G].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(U)},this.getViewport=function(I){return I.copy(j)},this.setViewport=function(I,G,Y,X){I.isVector4?j.set(I.x,I.y,I.z,I.w):j.set(I,G,Y,X),Et.viewport(U.copy(j).multiplyScalar(yt).round())},this.getScissor=function(I){return I.copy(nt)},this.setScissor=function(I,G,Y,X){I.isVector4?nt.set(I.x,I.y,I.z,I.w):nt.set(I,G,Y,X),Et.scissor(k.copy(nt).multiplyScalar(yt).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(I){Et.setScissorTest(_t=I)},this.setOpaqueSort=function(I){Yt=I},this.setTransparentSort=function(I){qt=I},this.getClearColor=function(I){return I.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor(...arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha(...arguments)},this.clear=function(I=!0,G=!0,Y=!0){let X=0;if(I){let W=!1;if(P!==null){const ut=P.texture.format;W=m.has(ut)}if(W){const ut=P.texture.type,xt=p.has(ut),ft=ct.getClearColor(),Mt=ct.getClearAlpha(),Ct=ft.r,Nt=ft.g,It=ft.b;xt?(x[0]=Ct,x[1]=Nt,x[2]=It,x[3]=Mt,O.clearBufferuiv(O.COLOR,0,x)):(y[0]=Ct,y[1]=Nt,y[2]=It,y[3]=Mt,O.clearBufferiv(O.COLOR,0,y))}else X|=O.COLOR_BUFFER_BIT}G&&(X|=O.DEPTH_BUFFER_BIT),Y&&(X|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Bt,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",re,!1),ct.dispose(),rt.dispose(),ht.dispose(),T.dispose(),Z.dispose(),tt.dispose(),lt.dispose(),gt.dispose(),st.dispose(),wt.dispose(),at.dispose(),at.removeEventListener("sessionstart",Au),at.removeEventListener("sessionend",Tu),fs.stop()};function Bt(I){I.preventDefault(),Vu("WebGLRenderer: Context Lost."),b=!0}function ge(){Vu("WebGLRenderer: Context Restored."),b=!1;const I=F.autoReset,G=At.enabled,Y=At.autoUpdate,X=At.needsUpdate,W=At.type;J(),F.autoReset=I,At.enabled=G,At.autoUpdate=Y,At.needsUpdate=X,At.type=W}function re(I){Jt("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function ii(I){const G=I.target;G.removeEventListener("dispose",ii),vi(G)}function vi(I){ym(I),T.remove(I)}function ym(I){const G=T.get(I).programs;G!==void 0&&(G.forEach(function(Y){wt.releaseProgram(Y)}),I.isShaderMaterial&&wt.releaseShaderCache(I))}this.renderBufferDirect=function(I,G,Y,X,W,ut){G===null&&(G=de);const xt=W.isMesh&&W.matrixWorld.determinant()<0,ft=Sm(I,G,Y,X,W);Et.setMaterial(X,xt);let Mt=Y.index,Ct=1;if(X.wireframe===!0){if(Mt=Tt.getWireframeAttribute(Y),Mt===void 0)return;Ct=2}const Nt=Y.drawRange,It=Y.attributes.position;let Wt=Nt.start*Ct,ce=(Nt.start+Nt.count)*Ct;ut!==null&&(Wt=Math.max(Wt,ut.start*Ct),ce=Math.min(ce,(ut.start+ut.count)*Ct)),Mt!==null?(Wt=Math.max(Wt,0),ce=Math.min(ce,Mt.count)):It!=null&&(Wt=Math.max(Wt,0),ce=Math.min(ce,It.count));const Ee=ce-Wt;if(Ee<0||Ee===1/0)return;gt.setup(W,X,ft,Y,Mt);let Ae,fe=z;if(Mt!==null&&(Ae=$.get(Mt),fe=mt,fe.setIndex(Ae)),W.isMesh)X.wireframe===!0?(Et.setLineWidth(X.wireframeLinewidth*Ie()),fe.setMode(O.LINES)):fe.setMode(O.TRIANGLES);else if(W.isLine){let Lt=X.linewidth;Lt===void 0&&(Lt=1),Et.setLineWidth(Lt*Ie()),W.isLineSegments?fe.setMode(O.LINES):W.isLineLoop?fe.setMode(O.LINE_LOOP):fe.setMode(O.LINE_STRIP)}else W.isPoints?fe.setMode(O.POINTS):W.isSprite&&fe.setMode(O.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Eo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),fe.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))fe.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Lt=W._multiDrawStarts,oe=W._multiDrawCounts,te=W._multiDrawCount,vn=Mt?$.get(Mt).bytesPerElement:1,Hs=T.get(X).currentProgram.getUniforms();for(let yn=0;yn<te;yn++)Hs.setValue(O,"_gl_DrawID",yn),fe.render(Lt[yn]/vn,oe[yn])}else if(W.isInstancedMesh)fe.renderInstances(Wt,Ee,W.count);else if(Y.isInstancedBufferGeometry){const Lt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,oe=Math.min(Y.instanceCount,Lt);fe.renderInstances(Wt,Ee,oe)}else fe.render(Wt,Ee)};function Eu(I,G,Y){I.transparent===!0&&I.side===wn&&I.forceSinglePass===!1?(I.side=Ye,I.needsUpdate=!0,Fo(I,G,Y),I.side=gi,I.needsUpdate=!0,Fo(I,G,Y),I.side=wn):Fo(I,G,Y)}this.compile=function(I,G,Y=null){Y===null&&(Y=I),M=ht.get(Y),M.init(G),E.push(M),Y.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(M.pushLight(W),W.castShadow&&M.pushShadow(W))}),I!==Y&&I.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(M.pushLight(W),W.castShadow&&M.pushShadow(W))}),M.setupLights();const X=new Set;return I.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const ut=W.material;if(ut)if(Array.isArray(ut))for(let xt=0;xt<ut.length;xt++){const ft=ut[xt];Eu(ft,Y,W),X.add(ft)}else Eu(ut,Y,W),X.add(ut)}),M=E.pop(),X},this.compileAsync=function(I,G,Y=null){const X=this.compile(I,G,Y);return new Promise(W=>{function ut(){if(X.forEach(function(xt){T.get(xt).currentProgram.isReady()&&X.delete(xt)}),X.size===0){W(I);return}setTimeout(ut,10)}ie.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let xl=null;function Mm(I){xl&&xl(I)}function Au(){fs.stop()}function Tu(){fs.start()}const fs=new Tp;fs.setAnimationLoop(Mm),typeof self<"u"&&fs.setContext(self),this.setAnimationLoop=function(I){xl=I,at.setAnimationLoop(I),I===null?fs.stop():fs.start()},at.addEventListener("sessionstart",Au),at.addEventListener("sessionend",Tu),this.render=function(I,G){if(G!==void 0&&G.isCamera!==!0){Jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;const Y=at.enabled===!0&&at.isPresenting===!0,X=C!==null&&(P===null||Y)&&C.begin(S,P);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(at.cameraAutoUpdate===!0&&at.updateCamera(G),G=at.getCamera()),I.isScene===!0&&I.onBeforeRender(S,I,G,P),M=ht.get(I,E.length),M.init(G),E.push(M),we.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),zt.setFromProjectionMatrix(we,ui,G.reversedDepth),$t=this.localClippingEnabled,St=bt.init(this.clippingPlanes,$t),v=rt.get(I,w.length),v.init(),w.push(v),at.enabled===!0&&at.isPresenting===!0){const xt=S.xr.getDepthSensingMesh();xt!==null&&_l(xt,G,-1/0,S.sortObjects)}_l(I,G,0,S.sortObjects),v.finish(),S.sortObjects===!0&&v.sort(Yt,qt),Gt=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,Gt&&ct.addToRenderList(v,I),this.info.render.frame++,St===!0&&bt.beginShadows();const W=M.state.shadowsArray;if(At.render(W,I,G),St===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(X&&C.hasRenderPass())===!1){const xt=v.opaque,ft=v.transmissive;if(M.setupLights(),G.isArrayCamera){const Mt=G.cameras;if(ft.length>0)for(let Ct=0,Nt=Mt.length;Ct<Nt;Ct++){const It=Mt[Ct];Ru(xt,ft,I,It)}Gt&&ct.render(I);for(let Ct=0,Nt=Mt.length;Ct<Nt;Ct++){const It=Mt[Ct];Cu(v,I,It,It.viewport)}}else ft.length>0&&Ru(xt,ft,I,G),Gt&&ct.render(I),Cu(v,I,G)}P!==null&&L===0&&(V.updateMultisampleRenderTarget(P),V.updateRenderTargetMipmap(P)),X&&C.end(S),I.isScene===!0&&I.onAfterRender(S,I,G),gt.resetDefaultState(),D=-1,B=null,E.pop(),E.length>0?(M=E[E.length-1],St===!0&&bt.setGlobalState(S.clippingPlanes,M.state.camera)):M=null,w.pop(),w.length>0?v=w[w.length-1]:v=null};function _l(I,G,Y,X){if(I.visible===!1)return;if(I.layers.test(G.layers)){if(I.isGroup)Y=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(G);else if(I.isLight)M.pushLight(I),I.castShadow&&M.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||zt.intersectsSprite(I)){X&&se.setFromMatrixPosition(I.matrixWorld).applyMatrix4(we);const xt=lt.update(I),ft=I.material;ft.visible&&v.push(I,xt,ft,Y,se.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||zt.intersectsObject(I))){const xt=lt.update(I),ft=I.material;if(X&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),se.copy(I.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),se.copy(xt.boundingSphere.center)),se.applyMatrix4(I.matrixWorld).applyMatrix4(we)),Array.isArray(ft)){const Mt=xt.groups;for(let Ct=0,Nt=Mt.length;Ct<Nt;Ct++){const It=Mt[Ct],Wt=ft[It.materialIndex];Wt&&Wt.visible&&v.push(I,xt,Wt,Y,se.z,It)}}else ft.visible&&v.push(I,xt,ft,Y,se.z,null)}}const ut=I.children;for(let xt=0,ft=ut.length;xt<ft;xt++)_l(ut[xt],G,Y,X)}function Cu(I,G,Y,X){const{opaque:W,transmissive:ut,transparent:xt}=I;M.setupLightsView(Y),St===!0&&bt.setGlobalState(S.clippingPlanes,Y),X&&Et.viewport(U.copy(X)),W.length>0&&No(W,G,Y),ut.length>0&&No(ut,G,Y),xt.length>0&&No(xt,G,Y),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function Ru(I,G,Y,X){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[X.id]===void 0){const Wt=ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[X.id]=new pi(1,1,{generateMipmaps:!0,type:Wt?zi:En,minFilter:Ls,samples:me.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace})}const ut=M.state.transmissionRenderTarget[X.id],xt=X.viewport||U;ut.setSize(xt.z*S.transmissionResolutionScale,xt.w*S.transmissionResolutionScale);const ft=S.getRenderTarget(),Mt=S.getActiveCubeFace(),Ct=S.getActiveMipmapLevel();S.setRenderTarget(ut),S.getClearColor(q),K=S.getClearAlpha(),K<1&&S.setClearColor(16777215,.5),S.clear(),Gt&&ct.render(Y);const Nt=S.toneMapping;S.toneMapping=fi;const It=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),M.setupLightsView(X),St===!0&&bt.setGlobalState(S.clippingPlanes,X),No(I,Y,X),V.updateMultisampleRenderTarget(ut),V.updateRenderTargetMipmap(ut),ie.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let ce=0,Ee=G.length;ce<Ee;ce++){const Ae=G[ce],{object:fe,geometry:Lt,material:oe,group:te}=Ae;if(oe.side===wn&&fe.layers.test(X.layers)){const vn=oe.side;oe.side=Ye,oe.needsUpdate=!0,Pu(fe,Y,X,Lt,oe,te),oe.side=vn,oe.needsUpdate=!0,Wt=!0}}Wt===!0&&(V.updateMultisampleRenderTarget(ut),V.updateRenderTargetMipmap(ut))}S.setRenderTarget(ft,Mt,Ct),S.setClearColor(q,K),It!==void 0&&(X.viewport=It),S.toneMapping=Nt}function No(I,G,Y){const X=G.isScene===!0?G.overrideMaterial:null;for(let W=0,ut=I.length;W<ut;W++){const xt=I[W],{object:ft,geometry:Mt,group:Ct}=xt;let Nt=xt.material;Nt.allowOverride===!0&&X!==null&&(Nt=X),ft.layers.test(Y.layers)&&Pu(ft,G,Y,Mt,Nt,Ct)}}function Pu(I,G,Y,X,W,ut){I.onBeforeRender(S,G,Y,X,W,ut),I.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),W.onBeforeRender(S,G,Y,X,I,ut),W.transparent===!0&&W.side===wn&&W.forceSinglePass===!1?(W.side=Ye,W.needsUpdate=!0,S.renderBufferDirect(Y,G,X,W,I,ut),W.side=gi,W.needsUpdate=!0,S.renderBufferDirect(Y,G,X,W,I,ut),W.side=wn):S.renderBufferDirect(Y,G,X,W,I,ut),I.onAfterRender(S,G,Y,X,W,ut)}function Fo(I,G,Y){G.isScene!==!0&&(G=de);const X=T.get(I),W=M.state.lights,ut=M.state.shadowsArray,xt=W.state.version,ft=wt.getParameters(I,W.state,ut,G,Y),Mt=wt.getProgramCacheKey(ft);let Ct=X.programs;X.environment=I.isMeshStandardMaterial?G.environment:null,X.fog=G.fog,X.envMap=(I.isMeshStandardMaterial?tt:Z).get(I.envMap||X.environment),X.envMapRotation=X.environment!==null&&I.envMap===null?G.environmentRotation:I.envMapRotation,Ct===void 0&&(I.addEventListener("dispose",ii),Ct=new Map,X.programs=Ct);let Nt=Ct.get(Mt);if(Nt!==void 0){if(X.currentProgram===Nt&&X.lightsStateVersion===xt)return Lu(I,ft),Nt}else ft.uniforms=wt.getUniforms(I),I.onBeforeCompile(ft,S),Nt=wt.acquireProgram(ft,Mt),Ct.set(Mt,Nt),X.uniforms=ft.uniforms;const It=X.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(It.clippingPlanes=bt.uniform),Lu(I,ft),X.needsLights=wm(I),X.lightsStateVersion=xt,X.needsLights&&(It.ambientLightColor.value=W.state.ambient,It.lightProbe.value=W.state.probe,It.directionalLights.value=W.state.directional,It.directionalLightShadows.value=W.state.directionalShadow,It.spotLights.value=W.state.spot,It.spotLightShadows.value=W.state.spotShadow,It.rectAreaLights.value=W.state.rectArea,It.ltc_1.value=W.state.rectAreaLTC1,It.ltc_2.value=W.state.rectAreaLTC2,It.pointLights.value=W.state.point,It.pointLightShadows.value=W.state.pointShadow,It.hemisphereLights.value=W.state.hemi,It.directionalShadowMap.value=W.state.directionalShadowMap,It.directionalShadowMatrix.value=W.state.directionalShadowMatrix,It.spotShadowMap.value=W.state.spotShadowMap,It.spotLightMatrix.value=W.state.spotLightMatrix,It.spotLightMap.value=W.state.spotLightMap,It.pointShadowMap.value=W.state.pointShadowMap,It.pointShadowMatrix.value=W.state.pointShadowMatrix),X.currentProgram=Nt,X.uniformsList=null,Nt}function Iu(I){if(I.uniformsList===null){const G=I.currentProgram.getUniforms();I.uniformsList=Va.seqWithValue(G.seq,I.uniforms)}return I.uniformsList}function Lu(I,G){const Y=T.get(I);Y.outputColorSpace=G.outputColorSpace,Y.batching=G.batching,Y.batchingColor=G.batchingColor,Y.instancing=G.instancing,Y.instancingColor=G.instancingColor,Y.instancingMorph=G.instancingMorph,Y.skinning=G.skinning,Y.morphTargets=G.morphTargets,Y.morphNormals=G.morphNormals,Y.morphColors=G.morphColors,Y.morphTargetsCount=G.morphTargetsCount,Y.numClippingPlanes=G.numClippingPlanes,Y.numIntersection=G.numClipIntersection,Y.vertexAlphas=G.vertexAlphas,Y.vertexTangents=G.vertexTangents,Y.toneMapping=G.toneMapping}function Sm(I,G,Y,X,W){G.isScene!==!0&&(G=de),V.resetTextureUnits();const ut=G.fog,xt=X.isMeshStandardMaterial?G.environment:null,ft=P===null?S.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Pr,Mt=(X.isMeshStandardMaterial?tt:Z).get(X.envMap||xt),Ct=X.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Nt=!!Y.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),It=!!Y.morphAttributes.position,Wt=!!Y.morphAttributes.normal,ce=!!Y.morphAttributes.color;let Ee=fi;X.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ee=S.toneMapping);const Ae=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,fe=Ae!==void 0?Ae.length:0,Lt=T.get(X),oe=M.state.lights;if(St===!0&&($t===!0||I!==B)){const nn=I===B&&X.id===D;bt.setState(X,I,nn)}let te=!1;X.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==oe.state.version||Lt.outputColorSpace!==ft||W.isBatchedMesh&&Lt.batching===!1||!W.isBatchedMesh&&Lt.batching===!0||W.isBatchedMesh&&Lt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Lt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Lt.instancing===!1||!W.isInstancedMesh&&Lt.instancing===!0||W.isSkinnedMesh&&Lt.skinning===!1||!W.isSkinnedMesh&&Lt.skinning===!0||W.isInstancedMesh&&Lt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Lt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Lt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Lt.instancingMorph===!1&&W.morphTexture!==null||Lt.envMap!==Mt||X.fog===!0&&Lt.fog!==ut||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==bt.numPlanes||Lt.numIntersection!==bt.numIntersection)||Lt.vertexAlphas!==Ct||Lt.vertexTangents!==Nt||Lt.morphTargets!==It||Lt.morphNormals!==Wt||Lt.morphColors!==ce||Lt.toneMapping!==Ee||Lt.morphTargetsCount!==fe)&&(te=!0):(te=!0,Lt.__version=X.version);let vn=Lt.currentProgram;te===!0&&(vn=Fo(X,G,W));let Hs=!1,yn=!1,Vr=!1;const xe=vn.getUniforms(),dn=Lt.uniforms;if(Et.useProgram(vn.program)&&(Hs=!0,yn=!0,Vr=!0),X.id!==D&&(D=X.id,yn=!0),Hs||B!==I){Et.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),xe.setValue(O,"projectionMatrix",I.projectionMatrix),xe.setValue(O,"viewMatrix",I.matrixWorldInverse);const fn=xe.map.cameraPosition;fn!==void 0&&fn.setValue(O,Kt.setFromMatrixPosition(I.matrixWorld)),me.logarithmicDepthBuffer&&xe.setValue(O,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&xe.setValue(O,"isOrthographic",I.isOrthographicCamera===!0),B!==I&&(B=I,yn=!0,Vr=!0)}if(Lt.needsLights&&(oe.state.directionalShadowMap.length>0&&xe.setValue(O,"directionalShadowMap",oe.state.directionalShadowMap,V),oe.state.spotShadowMap.length>0&&xe.setValue(O,"spotShadowMap",oe.state.spotShadowMap,V),oe.state.pointShadowMap.length>0&&xe.setValue(O,"pointShadowMap",oe.state.pointShadowMap,V)),W.isSkinnedMesh){xe.setOptional(O,W,"bindMatrix"),xe.setOptional(O,W,"bindMatrixInverse");const nn=W.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),xe.setValue(O,"boneTexture",nn.boneTexture,V))}W.isBatchedMesh&&(xe.setOptional(O,W,"batchingTexture"),xe.setValue(O,"batchingTexture",W._matricesTexture,V),xe.setOptional(O,W,"batchingIdTexture"),xe.setValue(O,"batchingIdTexture",W._indirectTexture,V),xe.setOptional(O,W,"batchingColorTexture"),W._colorsTexture!==null&&xe.setValue(O,"batchingColorTexture",W._colorsTexture,V));const Cn=Y.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&Ht.update(W,Y,vn),(yn||Lt.receiveShadow!==W.receiveShadow)&&(Lt.receiveShadow=W.receiveShadow,xe.setValue(O,"receiveShadow",W.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(dn.envMap.value=Mt,dn.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&G.environment!==null&&(dn.envMapIntensity.value=G.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=hM()),yn&&(xe.setValue(O,"toneMappingExposure",S.toneMappingExposure),Lt.needsLights&&bm(dn,Vr),ut&&X.fog===!0&&Ut.refreshFogUniforms(dn,ut),Ut.refreshMaterialUniforms(dn,X,yt,et,M.state.transmissionRenderTarget[I.id]),Va.upload(O,Iu(Lt),dn,V)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Va.upload(O,Iu(Lt),dn,V),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&xe.setValue(O,"center",W.center),xe.setValue(O,"modelViewMatrix",W.modelViewMatrix),xe.setValue(O,"normalMatrix",W.normalMatrix),xe.setValue(O,"modelMatrix",W.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const nn=X.uniformsGroups;for(let fn=0,vl=nn.length;fn<vl;fn++){const ps=nn[fn];st.update(ps,vn),st.bind(ps,vn)}}return vn}function bm(I,G){I.ambientLightColor.needsUpdate=G,I.lightProbe.needsUpdate=G,I.directionalLights.needsUpdate=G,I.directionalLightShadows.needsUpdate=G,I.pointLights.needsUpdate=G,I.pointLightShadows.needsUpdate=G,I.spotLights.needsUpdate=G,I.spotLightShadows.needsUpdate=G,I.rectAreaLights.needsUpdate=G,I.hemisphereLights.needsUpdate=G}function wm(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(I,G,Y){const X=T.get(I);X.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),T.get(I.texture).__webglTexture=G,T.get(I.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Y,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,G){const Y=T.get(I);Y.__webglFramebuffer=G,Y.__useDefaultFramebuffer=G===void 0};const Em=O.createFramebuffer();this.setRenderTarget=function(I,G=0,Y=0){P=I,R=G,L=Y;let X=null,W=!1,ut=!1;if(I){const ft=T.get(I);if(ft.__useDefaultFramebuffer!==void 0){Et.bindFramebuffer(O.FRAMEBUFFER,ft.__webglFramebuffer),U.copy(I.viewport),k.copy(I.scissor),H=I.scissorTest,Et.viewport(U),Et.scissor(k),Et.setScissorTest(H),D=-1;return}else if(ft.__webglFramebuffer===void 0)V.setupRenderTarget(I);else if(ft.__hasExternalTextures)V.rebindTextures(I,T.get(I.texture).__webglTexture,T.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const Nt=I.depthTexture;if(ft.__boundDepthTexture!==Nt){if(Nt!==null&&T.has(Nt)&&(I.width!==Nt.image.width||I.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");V.setupDepthRenderbuffer(I)}}const Mt=I.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(ut=!0);const Ct=T.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Ct[G])?X=Ct[G][Y]:X=Ct[G],W=!0):I.samples>0&&V.useMultisampledRTT(I)===!1?X=T.get(I).__webglMultisampledFramebuffer:Array.isArray(Ct)?X=Ct[Y]:X=Ct,U.copy(I.viewport),k.copy(I.scissor),H=I.scissorTest}else U.copy(j).multiplyScalar(yt).floor(),k.copy(nt).multiplyScalar(yt).floor(),H=_t;if(Y!==0&&(X=Em),Et.bindFramebuffer(O.FRAMEBUFFER,X)&&Et.drawBuffers(I,X),Et.viewport(U),Et.scissor(k),Et.setScissorTest(H),W){const ft=T.get(I.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+G,ft.__webglTexture,Y)}else if(ut){const ft=G;for(let Mt=0;Mt<I.textures.length;Mt++){const Ct=T.get(I.textures[Mt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Mt,Ct.__webglTexture,Y,ft)}}else if(I!==null&&Y!==0){const ft=T.get(I.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ft.__webglTexture,Y)}D=-1},this.readRenderTargetPixels=function(I,G,Y,X,W,ut,xt,ft=0){if(!(I&&I.isWebGLRenderTarget)){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=T.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&xt!==void 0&&(Mt=Mt[xt]),Mt){Et.bindFramebuffer(O.FRAMEBUFFER,Mt);try{const Ct=I.textures[ft],Nt=Ct.format,It=Ct.type;if(!me.textureFormatReadable(Nt)){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!me.textureTypeReadable(It)){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=I.width-X&&Y>=0&&Y<=I.height-W&&(I.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ft),O.readPixels(G,Y,X,W,ot.convert(Nt),ot.convert(It),ut))}finally{const Ct=P!==null?T.get(P).__webglFramebuffer:null;Et.bindFramebuffer(O.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(I,G,Y,X,W,ut,xt,ft=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=T.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&xt!==void 0&&(Mt=Mt[xt]),Mt)if(G>=0&&G<=I.width-X&&Y>=0&&Y<=I.height-W){Et.bindFramebuffer(O.FRAMEBUFFER,Mt);const Ct=I.textures[ft],Nt=Ct.format,It=Ct.type;if(!me.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!me.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Wt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Wt),O.bufferData(O.PIXEL_PACK_BUFFER,ut.byteLength,O.STREAM_READ),I.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ft),O.readPixels(G,Y,X,W,ot.convert(Nt),ot.convert(It),0);const ce=P!==null?T.get(P).__webglFramebuffer:null;Et.bindFramebuffer(O.FRAMEBUFFER,ce);const Ee=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await og(O,Ee,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Wt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ut),O.deleteBuffer(Wt),O.deleteSync(Ee),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,G=null,Y=0){const X=Math.pow(2,-Y),W=Math.floor(I.image.width*X),ut=Math.floor(I.image.height*X),xt=G!==null?G.x:0,ft=G!==null?G.y:0;V.setTexture2D(I,0),O.copyTexSubImage2D(O.TEXTURE_2D,Y,0,0,xt,ft,W,ut),Et.unbindTexture()};const Am=O.createFramebuffer(),Tm=O.createFramebuffer();this.copyTextureToTexture=function(I,G,Y=null,X=null,W=0,ut=null){ut===null&&(W!==0?(Eo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ut=W,W=0):ut=0);let xt,ft,Mt,Ct,Nt,It,Wt,ce,Ee;const Ae=I.isCompressedTexture?I.mipmaps[ut]:I.image;if(Y!==null)xt=Y.max.x-Y.min.x,ft=Y.max.y-Y.min.y,Mt=Y.isBox3?Y.max.z-Y.min.z:1,Ct=Y.min.x,Nt=Y.min.y,It=Y.isBox3?Y.min.z:0;else{const Cn=Math.pow(2,-W);xt=Math.floor(Ae.width*Cn),ft=Math.floor(Ae.height*Cn),I.isDataArrayTexture?Mt=Ae.depth:I.isData3DTexture?Mt=Math.floor(Ae.depth*Cn):Mt=1,Ct=0,Nt=0,It=0}X!==null?(Wt=X.x,ce=X.y,Ee=X.z):(Wt=0,ce=0,Ee=0);const fe=ot.convert(G.format),Lt=ot.convert(G.type);let oe;G.isData3DTexture?(V.setTexture3D(G,0),oe=O.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(V.setTexture2DArray(G,0),oe=O.TEXTURE_2D_ARRAY):(V.setTexture2D(G,0),oe=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,G.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,G.unpackAlignment);const te=O.getParameter(O.UNPACK_ROW_LENGTH),vn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Hs=O.getParameter(O.UNPACK_SKIP_PIXELS),yn=O.getParameter(O.UNPACK_SKIP_ROWS),Vr=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ae.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ae.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ct),O.pixelStorei(O.UNPACK_SKIP_ROWS,Nt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,It);const xe=I.isDataArrayTexture||I.isData3DTexture,dn=G.isDataArrayTexture||G.isData3DTexture;if(I.isDepthTexture){const Cn=T.get(I),nn=T.get(G),fn=T.get(Cn.__renderTarget),vl=T.get(nn.__renderTarget);Et.bindFramebuffer(O.READ_FRAMEBUFFER,fn.__webglFramebuffer),Et.bindFramebuffer(O.DRAW_FRAMEBUFFER,vl.__webglFramebuffer);for(let ps=0;ps<Mt;ps++)xe&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,T.get(I).__webglTexture,W,It+ps),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,T.get(G).__webglTexture,ut,Ee+ps)),O.blitFramebuffer(Ct,Nt,xt,ft,Wt,ce,xt,ft,O.DEPTH_BUFFER_BIT,O.NEAREST);Et.bindFramebuffer(O.READ_FRAMEBUFFER,null),Et.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(W!==0||I.isRenderTargetTexture||T.has(I)){const Cn=T.get(I),nn=T.get(G);Et.bindFramebuffer(O.READ_FRAMEBUFFER,Am),Et.bindFramebuffer(O.DRAW_FRAMEBUFFER,Tm);for(let fn=0;fn<Mt;fn++)xe?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Cn.__webglTexture,W,It+fn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Cn.__webglTexture,W),dn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,nn.__webglTexture,ut,Ee+fn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,nn.__webglTexture,ut),W!==0?O.blitFramebuffer(Ct,Nt,xt,ft,Wt,ce,xt,ft,O.COLOR_BUFFER_BIT,O.NEAREST):dn?O.copyTexSubImage3D(oe,ut,Wt,ce,Ee+fn,Ct,Nt,xt,ft):O.copyTexSubImage2D(oe,ut,Wt,ce,Ct,Nt,xt,ft);Et.bindFramebuffer(O.READ_FRAMEBUFFER,null),Et.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else dn?I.isDataTexture||I.isData3DTexture?O.texSubImage3D(oe,ut,Wt,ce,Ee,xt,ft,Mt,fe,Lt,Ae.data):G.isCompressedArrayTexture?O.compressedTexSubImage3D(oe,ut,Wt,ce,Ee,xt,ft,Mt,fe,Ae.data):O.texSubImage3D(oe,ut,Wt,ce,Ee,xt,ft,Mt,fe,Lt,Ae):I.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ut,Wt,ce,xt,ft,fe,Lt,Ae.data):I.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ut,Wt,ce,Ae.width,Ae.height,fe,Ae.data):O.texSubImage2D(O.TEXTURE_2D,ut,Wt,ce,xt,ft,fe,Lt,Ae);O.pixelStorei(O.UNPACK_ROW_LENGTH,te),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,vn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Hs),O.pixelStorei(O.UNPACK_SKIP_ROWS,yn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Vr),ut===0&&G.generateMipmaps&&O.generateMipmap(oe),Et.unbindTexture()},this.initRenderTarget=function(I){T.get(I).__webglFramebuffer===void 0&&V.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?V.setTextureCube(I,0):I.isData3DTexture?V.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?V.setTexture2DArray(I,0):V.setTexture2D(I,0),Et.unbindTexture()},this.resetState=function(){R=0,L=0,P=null,Et.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}class Jn{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new A);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new A);const n=this.elements,i=t.x,r=t.y,o=t.z;return e.x=n[0]*i+n[1]*r+n[2]*o,e.y=n[3]*i+n[4]*r+n[5]*o,e.z=n[6]*i+n[7]*r+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new Jn);const n=this.elements,i=t.elements,r=e.elements,o=n[0],a=n[1],l=n[2],c=n[3],h=n[4],d=n[5],u=n[6],f=n[7],g=n[8],_=i[0],m=i[1],p=i[2],x=i[3],y=i[4],v=i[5],M=i[6],w=i[7],E=i[8];return r[0]=o*_+a*x+l*M,r[1]=o*m+a*y+l*w,r[2]=o*p+a*v+l*E,r[3]=c*_+h*x+d*M,r[4]=c*m+h*y+d*w,r[5]=c*p+h*v+d*E,r[6]=u*_+f*x+g*M,r[7]=u*m+f*y+g*w,r[8]=u*p+f*v+g*E,e}scale(t,e){e===void 0&&(e=new Jn);const n=this.elements,i=e.elements;for(let r=0;r!==3;r++)i[3*r+0]=t.x*n[3*r+0],i[3*r+1]=t.y*n[3*r+1],i[3*r+2]=t.z*n[3*r+2];return e}solve(t,e){e===void 0&&(e=new A);const n=3,i=4,r=[];let o,a;for(o=0;o<n*i;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+i*a]=this.elements[o+3*a];r[3]=t.x,r[7]=t.y,r[11]=t.z;let l=3;const c=l;let h;const d=4;let u;do{if(o=c-l,r[o+i*o]===0){for(a=o+1;a<c;a++)if(r[o+i*a]!==0){h=d;do u=d-h,r[u+i*o]+=r[u+i*a];while(--h);break}}if(r[o+i*o]!==0)for(a=o+1;a<c;a++){const f=r[o+i*a]/r[o+i*o];h=d;do u=d-h,r[u+i*a]=u<=o?0:r[u+i*a]-r[u+i*o]*f;while(--h)}}while(--l);if(e.z=r[2*i+3]/r[2*i+2],e.y=(r[1*i+3]-r[1*i+2]*e.z)/r[1*i+1],e.x=(r[0*i+3]-r[0*i+2]*e.z-r[0*i+1]*e.y)/r[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";for(let n=0;n<9;n++)t+=this.elements[n]+",";return t}reverse(t){t===void 0&&(t=new Jn);const e=3,n=6,i=dM;let r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)i[r+n*o]=this.elements[r+3*o];i[3]=1,i[9]=0,i[15]=0,i[4]=0,i[10]=1,i[16]=0,i[5]=0,i[11]=0,i[17]=1;let a=3;const l=a;let c;const h=n;let d;do{if(r=l-a,i[r+n*r]===0){for(o=r+1;o<l;o++)if(i[r+n*o]!==0){c=h;do d=h-c,i[d+n*r]+=i[d+n*o];while(--c);break}}if(i[r+n*r]!==0)for(o=r+1;o<l;o++){const u=i[r+n*o]/i[r+n*r];c=h;do d=h-c,i[d+n*o]=d<=r?0:i[d+n*o]-i[d+n*r]*u;while(--c)}}while(--a);r=2;do{o=r-1;do{const u=i[r+n*o]/i[r+n*r];c=n;do d=n-c,i[d+n*o]=i[d+n*o]-i[d+n*r]*u;while(--c)}while(o--)}while(--r);r=2;do{const u=1/i[r+n*r];c=n;do d=n-c,i[d+n*r]=i[d+n*r]*u;while(--c)}while(r--);r=2;do{o=2;do{if(d=i[e+o+n*r],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(r,o,d)}while(o--)}while(r--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,r=t.w,o=e+e,a=n+n,l=i+i,c=e*o,h=e*a,d=e*l,u=n*a,f=n*l,g=i*l,_=r*o,m=r*a,p=r*l,x=this.elements;return x[0]=1-(u+g),x[1]=h-p,x[2]=d+m,x[3]=h+p,x[4]=1-(c+g),x[5]=f-_,x[6]=d-m,x[7]=f+_,x[8]=1-(c+u),this}transpose(t){t===void 0&&(t=new Jn);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const dM=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class A{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new A);const n=t.x,i=t.y,r=t.z,o=this.x,a=this.y,l=this.z;return e.x=a*r-l*i,e.y=l*n-o*r,e.z=o*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new A(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new A(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Jn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const r=1/i;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new A);const e=this.x,n=this.y,i=this.z;let r=Math.sqrt(e*e+n*n+i*i);return r>0?(r=1/r,t.x=e*r,t.y=n*r,t.z=i*r):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z;return Math.sqrt((r-e)*(r-e)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z;return(r-e)*(r-e)+(o-n)*(o-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new A);const n=this.x,i=this.y,r=this.z;return e.x=t*n,e.y=t*i,e.z=t*r,e}vmul(t,e){return e===void 0&&(e=new A),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new A),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new A),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=fM,r=1/n;i.set(this.x*r,this.y*r,this.z*r);const o=pM;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,r=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=r+(t.y-r)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(Vd),Vd.almostEquals(t,e)}clone(){return new A(this.x,this.y,this.z)}}A.ZERO=new A(0,0,0);A.UNIT_X=new A(1,0,0);A.UNIT_Y=new A(0,1,0);A.UNIT_Z=new A(0,0,1);const fM=new A,pM=new A,Vd=new A;class Tn{constructor(t){t===void 0&&(t={}),this.lowerBound=new A,this.upperBound=new A,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const r=this.lowerBound,o=this.upperBound,a=n;r.copy(t[0]),a&&a.vmult(r,r),o.copy(r);for(let l=1;l<t.length;l++){let c=t[l];a&&(a.vmult(c,Gd),c=Gd),c.x>o.x&&(o.x=c.x),c.x<r.x&&(r.x=c.x),c.y>o.y&&(o.y=c.y),c.y<r.y&&(r.y=c.y),c.z>o.z&&(o.z=c.z),c.z<r.z&&(r.z=c.z)}return e&&(e.vadd(r,r),e.vadd(o,o)),i&&(r.x-=i,r.y-=i,r.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new Tn().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,r=t.upperBound,o=i.x<=n.x&&n.x<=r.x||e.x<=r.x&&r.x<=n.x,a=i.y<=n.y&&n.y<=r.y||e.y<=r.y&&r.y<=n.y,l=i.z<=n.z&&n.z<=r.z||e.z<=r.z&&r.z<=n.z;return o&&a&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,r=t.upperBound;return e.x<=i.x&&n.x>=r.x&&e.y<=i.y&&n.y>=r.y&&e.z<=i.z&&n.z>=r.z}getCorners(t,e,n,i,r,o,a,l){const c=this.lowerBound,h=this.upperBound;t.copy(c),e.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),i.set(c.x,h.y,h.z),r.set(h.x,c.y,h.z),o.set(c.x,h.y,c.z),a.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(t,e){const n=Hd,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,r,o,a,l,c,h,d);for(let u=0;u!==8;u++){const f=n[u];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=Hd,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,r,o,a,l,c,h,d);for(let u=0;u!==8;u++){const f=n[u];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,r=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*r,h=(this.upperBound.y-n.y)*r,d=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,l),Math.min(c,h)),Math.min(d,u)),g=Math.min(Math.min(Math.max(a,l),Math.max(c,h)),Math.max(d,u));return!(g<0||f>g)}}const Gd=new A,Hd=[new A,new A,new A,new A,new A,new A,new A,new A];class Wd{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const r=i;i=n,n=r}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:r}=e;if(r>i){const o=r;r=i,i=o}this.matrix[(i*(i+1)>>1)+r-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class Lp{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,r=n.length;i<r;i++)n[i].call(this,t)}return this}}class Ce{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new A),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=mM,i=gM;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new Ce);const n=this.x,i=this.y,r=this.z,o=this.w,a=t.x,l=t.y,c=t.z,h=t.w;return e.x=n*h+o*a+i*c-r*l,e.y=i*h+o*l+r*a-n*c,e.z=r*h+o*c+n*l-i*a,e.w=o*h-n*a-i*l-r*c,e}inverse(t){t===void 0&&(t=new Ce);const e=this.x,n=this.y,i=this.z,r=this.w;this.conjugate(t);const o=1/(e*e+n*n+i*i+r*r);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new Ce),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new A);const n=t.x,i=t.y,r=t.z,o=this.x,a=this.y,l=this.z,c=this.w,h=c*n+a*r-l*i,d=c*i+l*n-o*r,u=c*r+o*i-a*n,f=-o*n-a*i-l*r;return e.x=h*c+f*-o+d*-l-u*-a,e.y=d*c+f*-a+u*-o-h*-l,e.z=u*c+f*-l+h*-a-d*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,r;const o=this.x,a=this.y,l=this.z,c=this.w;switch(e){case"YZX":const h=o*a+l*c;if(h>.499&&(n=2*Math.atan2(o,c),i=Math.PI/2,r=0),h<-.499&&(n=-2*Math.atan2(o,c),i=-Math.PI/2,r=0),n===void 0){const d=o*o,u=a*a,f=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*u-2*f),i=Math.asin(2*h),r=Math.atan2(2*o*c-2*a*l,1-2*d-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=r}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const r=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=l*o*a+r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a-l*c*h):i==="YXZ"?(this.x=l*o*a+r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a+l*c*h):i==="ZXY"?(this.x=l*o*a-r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a-l*c*h):i==="ZYX"?(this.x=l*o*a-r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a+l*c*h):i==="YZX"?(this.x=l*o*a+r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a-l*c*h):i==="XZY"&&(this.x=l*o*a-r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a+l*c*h),this}clone(){return new Ce(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new Ce);const i=this.x,r=this.y,o=this.z,a=this.w;let l=t.x,c=t.y,h=t.z,d=t.w,u,f,g,_,m;return f=i*l+r*c+o*h+a*d,f<0&&(f=-f,l=-l,c=-c,h=-h,d=-d),1-f>1e-6?(u=Math.acos(f),g=Math.sin(u),_=Math.sin((1-e)*u)/g,m=Math.sin(e*u)/g):(_=1-e,m=e),n.x=_*i+m*l,n.y=_*r+m*c,n.z=_*o+m*h,n.w=_*a+m*d,n}integrate(t,e,n,i){i===void 0&&(i=new Ce);const r=t.x*n.x,o=t.y*n.y,a=t.z*n.z,l=this.x,c=this.y,h=this.z,d=this.w,u=e*.5;return i.x+=u*(r*d+o*h-a*c),i.y+=u*(o*d+a*l-r*h),i.z+=u*(a*d+r*c-o*l),i.w+=u*(-r*l-o*c-a*h),i}}const mM=new A,gM=new A,xM={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class vt{constructor(t){t===void 0&&(t={}),this.id=vt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}vt.idCounter=0;vt.types=xM;class ee{constructor(t){t===void 0&&(t={}),this.position=new A,this.quaternion=new Ce,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return ee.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return ee.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new A),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new A),n.vsub(t,i),e.conjugate(Xd),Xd.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new A),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new A),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new A),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const Xd=new Ce;class vo extends vt{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:r,boundingSphereRadius:o}=t;super({type:vt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new A;for(let r=0;r!==t.length;r++){const o=t[r],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;e[o[l]].vsub(e[o[c]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new A;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],r=this.vertices[n[1]],o=this.vertices[n[2]];vo.computeNormal(i,r,o,e)}static computeNormal(t,e,n,i){const r=new A,o=new A;e.vsub(t,o),n.vsub(e,r),r.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,r,o,a,l,c){const h=new A;let d=-1,u=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),r.vmult(h,h);const _=h.dot(o);_>u&&(u=_,d=g)}const f=[];for(let g=0;g<n.faces[d].length;g++){const _=n.vertices[n.faces[d][g]],m=new A;m.copy(_),r.vmult(m,m),i.vadd(m,m),f.push(m)}d>=0&&this.clipFaceAgainstHull(o,t,e,f,a,l,c)}findSeparatingAxis(t,e,n,i,r,o,a,l){const c=new A,h=new A,d=new A,u=new A,f=new A,g=new A;let _=Number.MAX_VALUE;const m=this;if(m.uniqueAxes)for(let p=0;p!==m.uniqueAxes.length;p++){n.vmult(m.uniqueAxes[p],c);const x=m.testSepAxis(c,t,e,n,i,r);if(x===!1)return!1;x<_&&(_=x,o.copy(c))}else{const p=a?a.length:m.faces.length;for(let x=0;x<p;x++){const y=a?a[x]:x;c.copy(m.faceNormals[y]),n.vmult(c,c);const v=m.testSepAxis(c,t,e,n,i,r);if(v===!1)return!1;v<_&&(_=v,o.copy(c))}}if(t.uniqueAxes)for(let p=0;p!==t.uniqueAxes.length;p++){r.vmult(t.uniqueAxes[p],h);const x=m.testSepAxis(h,t,e,n,i,r);if(x===!1)return!1;x<_&&(_=x,o.copy(h))}else{const p=l?l.length:t.faces.length;for(let x=0;x<p;x++){const y=l?l[x]:x;h.copy(t.faceNormals[y]),r.vmult(h,h);const v=m.testSepAxis(h,t,e,n,i,r);if(v===!1)return!1;v<_&&(_=v,o.copy(h))}}for(let p=0;p!==m.uniqueEdges.length;p++){n.vmult(m.uniqueEdges[p],u);for(let x=0;x!==t.uniqueEdges.length;x++)if(r.vmult(t.uniqueEdges[x],f),u.cross(f,g),!g.almostZero()){g.normalize();const y=m.testSepAxis(g,t,e,n,i,r);if(y===!1)return!1;y<_&&(_=y,o.copy(g))}}return i.vsub(e,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,r,o){const a=this;vo.project(a,t,n,i,Jl),vo.project(e,t,r,o,Ql);const l=Jl[0],c=Jl[1],h=Ql[0],d=Ql[1];if(l<d||h<c)return!1;const u=l-d,f=h-c;return u<f?u:f}calculateLocalInertia(t,e){const n=new A,i=new A;this.computeLocalAABB(i,n);const r=n.x-i.x,o=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*r*2*r+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,r,o,a){const l=new A,c=new A,h=new A,d=new A,u=new A,f=new A,g=new A,_=new A,m=this,p=[],x=i,y=p;let v=-1,M=Number.MAX_VALUE;for(let b=0;b<m.faces.length;b++){l.copy(m.faceNormals[b]),n.vmult(l,l);const R=l.dot(t);R<M&&(M=R,v=b)}if(v<0)return;const w=m.faces[v];w.connectedFaces=[];for(let b=0;b<m.faces.length;b++)for(let R=0;R<m.faces[b].length;R++)w.indexOf(m.faces[b][R])!==-1&&b!==v&&w.connectedFaces.indexOf(b)===-1&&w.connectedFaces.push(b);const E=w.length;for(let b=0;b<E;b++){const R=m.vertices[w[b]],L=m.vertices[w[(b+1)%E]];R.vsub(L,c),h.copy(c),n.vmult(h,h),e.vadd(h,h),d.copy(this.faceNormals[v]),n.vmult(d,d),e.vadd(d,d),h.cross(d,u),u.negate(u),f.copy(R),n.vmult(f,f),e.vadd(f,f);const P=w.connectedFaces[b];g.copy(this.faceNormals[P]);const D=this.getPlaneConstantOfFace(P);_.copy(g),n.vmult(_,_);const B=D-_.dot(e);for(this.clipFaceAgainstPlane(x,y,_,B);x.length;)x.shift();for(;y.length;)x.push(y.shift())}g.copy(this.faceNormals[v]);const C=this.getPlaneConstantOfFace(v);_.copy(g),n.vmult(_,_);const S=C-_.dot(e);for(let b=0;b<x.length;b++){let R=_.dot(x[b])+S;if(R<=r&&(console.log(`clamped: depth=${R} to minDist=${r}`),R=r),R<=o){const L=x[b];if(R<=1e-6){const P={point:L,normal:_,depth:R};a.push(P)}}}}clipFaceAgainstPlane(t,e,n,i){let r,o;const a=t.length;if(a<2)return e;let l=t[t.length-1],c=t[0];r=n.dot(l)+i;for(let h=0;h<a;h++){if(c=t[h],o=n.dot(c)+i,r<0)if(o<0){const d=new A;d.copy(c),e.push(d)}else{const d=new A;l.lerp(c,r/(r-o),d),e.push(d)}else if(o<0){const d=new A;l.lerp(c,r/(r-o),d),e.push(d),e.push(c)}l=c,r=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new A);const n=this.vertices,i=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)e.vmult(n[r],i[r]),t.vadd(i[r],i[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const r=n[i];r.x<t.x?t.x=r.x:r.x>e.x&&(e.x=r.x),r.y<t.y?t.y=r.y:r.y>e.y&&(e.y=r.y),r.z<t.z?t.z=r.z:r.z>e.z&&(e.z=r.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new A);const n=this.faceNormals,i=this.worldFaceNormals;for(let r=0;r!==e;r++)t.vmult(n[r],i[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const r=this.vertices;let o,a,l,c,h,d,u=new A;for(let f=0;f<r.length;f++){u.copy(r[f]),e.vmult(u,u),t.vadd(u,u);const g=u;(o===void 0||g.x<o)&&(o=g.x),(c===void 0||g.x>c)&&(c=g.x),(a===void 0||g.y<a)&&(a=g.y),(h===void 0||g.y>h)&&(h=g.y),(l===void 0||g.z<l)&&(l=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(o,a,l),i.set(c,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new A);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let r=0;r<n;r++){const o=i[r];e.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){const o=this.faceNormals[r];e.vmult(o,o)}}if(t)for(let r=0;r<n;r++){const o=i[r];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,r=new A;this.getAveragePointLocal(r);for(let o=0;o<this.faces.length;o++){let a=i[o];const l=e[n[o][0]],c=new A;t.vsub(l,c);const h=a.dot(c),d=new A;r.vsub(l,d);const u=a.dot(d);if(h<0&&u>0||h>0&&u<0)return!1}return-1}static project(t,e,n,i,r){const o=t.vertices.length,a=_M;let l=0,c=0;const h=vM,d=t.vertices;h.setZero(),ee.vectorToLocalFrame(n,i,e,a),ee.pointToLocalFrame(n,i,h,h);const u=h.dot(a);c=l=d[0].dot(a);for(let f=1;f<o;f++){const g=d[f].dot(a);g>l&&(l=g),g<c&&(c=g)}if(c-=u,l-=u,c>l){const f=c;c=l,l=f}r[0]=l,r[1]=c}}const Jl=[],Ql=[];new A;const _M=new A,vM=new A;class us extends vt{constructor(t){super({type:vt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=A,r=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new vo({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new A),us.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let r=0;r!==n.length;r++)e.vmult(n[r],n[r]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,r=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<r.length;o++)Zi.set(r[o][0],r[o][1],r[o][2]),e.vmult(Zi,Zi),t.vadd(Zi,Zi),n(Zi.x,Zi.y,Zi.z)}calculateWorldAABB(t,e,n,i){const r=this.halfExtents;ri[0].set(r.x,r.y,r.z),ri[1].set(-r.x,r.y,r.z),ri[2].set(-r.x,-r.y,r.z),ri[3].set(-r.x,-r.y,-r.z),ri[4].set(r.x,-r.y,-r.z),ri[5].set(r.x,r.y,-r.z),ri[6].set(-r.x,r.y,-r.z),ri[7].set(r.x,-r.y,r.z);const o=ri[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const l=ri[a];e.vmult(l,l),t.vadd(l,l);const c=l.x,h=l.y,d=l.z;c>i.x&&(i.x=c),h>i.y&&(i.y=h),d>i.z&&(i.z=d),c<n.x&&(n.x=c),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}const Zi=new A,ri=[new A,new A,new A,new A,new A,new A,new A,new A],iu={DYNAMIC:1,STATIC:2,KINEMATIC:4},su={AWAKE:0,SLEEPY:1,SLEEPING:2};class pt extends Lp{constructor(t){t===void 0&&(t={}),super(),this.id=pt.idCounter++,this.index=-1,this.world=null,this.vlambda=new A,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new A,this.previousPosition=new A,this.interpolatedPosition=new A,this.initPosition=new A,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new A,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new A,this.force=new A;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?pt.STATIC:pt.DYNAMIC,typeof t.type==typeof pt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=pt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new A,this.quaternion=new Ce,this.initQuaternion=new Ce,this.previousQuaternion=new Ce,this.interpolatedQuaternion=new Ce,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new A,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new A,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new A,this.invInertia=new A,this.invInertiaWorld=new Jn,this.invMassSolve=0,this.invInertiaSolve=new A,this.invInertiaWorldSolve=new Jn,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new A(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new A(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new Tn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new A,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=pt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===pt.SLEEPING&&this.dispatchEvent(pt.wakeupEvent)}sleep(){this.sleepState=pt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===pt.AWAKE&&n<i?(this.sleepState=pt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(pt.sleepyEvent)):e===pt.SLEEPY&&n>i?this.wakeUp():e===pt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(pt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===pt.SLEEPING||this.type===pt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new A),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new A),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new A),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new A),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new A,r=new Ce;return e&&i.copy(e),n&&r.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let r=0;r!==n;r++){const o=t[r];o.updateBoundingSphereRadius();const a=e[r].length(),l=o.boundingSphereRadius;a+l>i&&(i=a+l)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,r=yM,o=MM,a=this.quaternion,l=this.aabb,c=SM;for(let h=0;h!==i;h++){const d=t[h];a.vmult(e[h],r),r.vadd(this.position,r),a.mult(n[h],o),d.calculateWorldAABB(r,o,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=bM,i=wM;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new A),this.type!==pt.DYNAMIC)return;this.sleepState===pt.SLEEPING&&this.wakeUp();const n=EM;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new A),this.type!==pt.DYNAMIC)return;const n=AM,i=TM;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===pt.DYNAMIC&&(this.sleepState===pt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new A),this.type!==pt.DYNAMIC)return;this.sleepState===pt.SLEEPING&&this.wakeUp();const n=e,i=CM;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const r=RM;n.cross(t,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new A),this.type!==pt.DYNAMIC)return;const n=PM,i=IM;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=LM;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),us.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new A;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===pt.DYNAMIC||this.type===pt.KINEMATIC)||this.sleepState===pt.SLEEPING)return;const i=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,f=h*t;i.x+=a.x*f*u.x,i.y+=a.y*f*u.y,i.z+=a.z*f*u.z;const g=d.elements,_=this.angularFactor,m=l.x*_.x,p=l.y*_.y,x=l.z*_.z;r.x+=t*(g[0]*m+g[1]*p+g[2]*x),r.y+=t*(g[3]*m+g[4]*p+g[5]*x),r.z+=t*(g[6]*m+g[7]*p+g[8]*x),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}pt.idCounter=0;pt.COLLIDE_EVENT_NAME="collide";pt.DYNAMIC=iu.DYNAMIC;pt.STATIC=iu.STATIC;pt.KINEMATIC=iu.KINEMATIC;pt.AWAKE=su.AWAKE;pt.SLEEPY=su.SLEEPY;pt.SLEEPING=su.SLEEPING;pt.wakeupEvent={type:"wakeup"};pt.sleepyEvent={type:"sleepy"};pt.sleepEvent={type:"sleep"};const yM=new A,MM=new Ce,SM=new Tn,bM=new Jn,wM=new Jn;new Jn;const EM=new A,AM=new A,TM=new A,CM=new A,RM=new A,PM=new A,IM=new A,LM=new A;class Dp{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!((t.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&t.collisionFilterMask)===0||((t.type&pt.STATIC)!==0||t.sleepState===pt.SLEEPING)&&((e.type&pt.STATIC)!==0||e.sleepState===pt.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const r=DM;e.position.vsub(t.position,r);const o=(t.boundingRadius+e.boundingRadius)**2;r.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=NM,i=FM,r=UM,o=t.length;for(let a=0;a!==o;a++)i[a]=t[a],r[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const l=i[a].id,c=r[a].id,h=l<c?`${l},${c}`:`${c},${l}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];t.push(i[c]),e.push(r[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new A;t.position.vsub(e.position,n);const i=t.shapes[0],r=e.shapes[0];return Math.pow(i.boundingSphereRadius+r.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const DM=new A;new A;new Ce;new A;const NM={keys:[]},FM=[],UM=[];new A;new A;new A;class BM extends Dp{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,r=i.length;let o,a;for(let l=0;l!==r;l++)for(let c=0;c!==l;c++)o=i[l],a=i[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const r=t.bodies[i];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(e)&&n.push(r)}return n}}class el{constructor(){this.rayFromWorld=new A,this.rayToWorld=new A,this.hitNormalWorld=new A,this.hitPointWorld=new A,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,r,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=r,this.body=o,this.distance=a}}let Np,Fp,Up,Bp,Op,zp,kp;const ru={CLOSEST:1,ANY:2,ALL:4};Np=vt.types.SPHERE;Fp=vt.types.PLANE;Up=vt.types.BOX;Bp=vt.types.CYLINDER;Op=vt.types.CONVEXPOLYHEDRON;zp=vt.types.HEIGHTFIELD;kp=vt.types.TRIMESH;class Ne{get[Np](){return this._intersectSphere}get[Fp](){return this._intersectPlane}get[Up](){return this._intersectBox}get[Bp](){return this._intersectConvex}get[Op](){return this._intersectConvex}get[zp](){return this._intersectHeightfield}get[kp](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new A),e===void 0&&(e=new A),this.from=t.clone(),this.to=e.clone(),this.direction=new A,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Ne.ANY,this.result=new el,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||Ne.ANY,this.result=e.result||new el,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(qd),tc.length=0,t.broadphase.aabbQuery(t,qd,tc),this.intersectBodies(tc),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||(this.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&this.collisionFilterMask)===0)return;const i=OM,r=zM;for(let o=0,a=t.shapes.length;o<a;o++){const l=t.shapes[o];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],r),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(l,r,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const r=this.from;if(QM(r,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,r){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,r)}_intersectPlane(t,e,n,i,r){const o=this.from,a=this.to,l=this.direction,c=new A(0,0,1);e.vmult(c,c);const h=new A;o.vsub(n,h);const d=h.dot(c);a.vsub(n,h);const u=h.dot(c);if(d*u>0||o.distanceTo(a)<d)return;const f=c.dot(l);if(Math.abs(f)<this.precision)return;const g=new A,_=new A,m=new A;o.vsub(n,g);const p=-c.dot(g)/f;l.scale(p,_),o.vadd(_,m),this.reportIntersection(c,m,r,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,r=this.from;e.x=Math.min(i.x,r.x),e.y=Math.min(i.y,r.y),e.z=Math.min(i.z,r.z),n.x=Math.max(i.x,r.x),n.y=Math.max(i.y,r.y),n.z=Math.max(i.z,r.z)}_intersectHeightfield(t,e,n,i,r){t.data,t.elementSize;const o=kM;o.from.copy(this.from),o.to.copy(this.to),ee.pointToLocalFrame(n,e,o.from,o.from),ee.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const a=VM;let l,c,h,d;l=c=0,h=d=t.data.length-1;const u=new Tn;o.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),d=Math.min(d,a[1]+1);for(let f=l;f<h;f++)for(let g=c;g<d;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,g,u),!!u.overlapsRay(o)){if(t.getConvexTrianglePillar(f,g,!1),ee.pointToWorldFrame(n,e,t.pillarOffset,aa),this._intersectConvex(t.pillarConvex,e,aa,i,r,Yd),this.result.shouldStop)return;t.getConvexTrianglePillar(f,g,!0),ee.pointToWorldFrame(n,e,t.pillarOffset,aa),this._intersectConvex(t.pillarConvex,e,aa,i,r,Yd)}}}_intersectSphere(t,e,n,i,r){const o=this.from,a=this.to,l=t.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,u=h**2-4*c*d,f=GM,g=HM;if(!(u<0))if(u===0)o.lerp(a,u,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,r,i,-1);else{const _=(-h-Math.sqrt(u))/(2*c),m=(-h+Math.sqrt(u))/(2*c);if(_>=0&&_<=1&&(o.lerp(a,_,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,r,i,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,r,i,-1))}}_intersectConvex(t,e,n,i,r,o){const a=WM,l=$d,c=o&&o.faceList||null,h=t.faces,d=t.vertices,u=t.faceNormals,f=this.direction,g=this.from,_=this.to,m=g.distanceTo(_),p=c?c.length:h.length,x=this.result;for(let y=0;!x.shouldStop&&y<p;y++){const v=c?c[y]:y,M=h[v],w=u[v],E=e,C=n;l.copy(d[M[0]]),E.vmult(l,l),l.vadd(C,l),l.vsub(g,l),E.vmult(w,a);const S=f.dot(a);if(Math.abs(S)<this.precision)continue;const b=a.dot(l)/S;if(!(b<0)){f.scale(b,pn),pn.vadd(g,pn),Yn.copy(d[M[0]]),E.vmult(Yn,Yn),C.vadd(Yn,Yn);for(let R=1;!x.shouldStop&&R<M.length-1;R++){oi.copy(d[M[R]]),ai.copy(d[M[R+1]]),E.vmult(oi,oi),E.vmult(ai,ai),C.vadd(oi,oi),C.vadd(ai,ai);const L=pn.distanceTo(g);!(Ne.pointInTriangle(pn,Yn,oi,ai)||Ne.pointInTriangle(pn,oi,Yn,ai))||L>m||this.reportIntersection(a,pn,r,i,v)}}}}_intersectTrimesh(t,e,n,i,r,o){const a=XM,l=KM,c=JM,h=$d,d=qM,u=YM,f=$M,g=ZM,_=jM,m=t.indices;t.vertices;const p=this.from,x=this.to,y=this.direction;c.position.copy(n),c.quaternion.copy(e),ee.vectorToLocalFrame(n,e,y,d),ee.pointToLocalFrame(n,e,p,u),ee.pointToLocalFrame(n,e,x,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,f.vsub(u,d),d.normalize();const v=u.distanceSquared(f);t.tree.rayQuery(this,c,l);for(let M=0,w=l.length;!this.result.shouldStop&&M!==w;M++){const E=l[M];t.getNormal(E,a),t.getVertex(m[E*3],Yn),Yn.vsub(u,h);const C=d.dot(a),S=a.dot(h)/C;if(S<0)continue;d.scale(S,pn),pn.vadd(u,pn),t.getVertex(m[E*3+1],oi),t.getVertex(m[E*3+2],ai);const b=pn.distanceSquared(u);!(Ne.pointInTriangle(pn,oi,Yn,ai)||Ne.pointInTriangle(pn,Yn,oi,ai))||b>v||(ee.vectorToWorldFrame(e,a,_),ee.pointToWorldFrame(n,e,pn,g),this.reportIntersection(_,g,r,i,E))}l.length=0}reportIntersection(t,e,n,i,r){const o=this.from,a=this.to,l=o.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case Ne.ALL:this.hasHit=!0,c.set(o,a,t,e,n,i,l),c.hasHit=!0,this.callback(c);break;case Ne.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l));break;case Ne.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,Rs),n.vsub(e,Kr),t.vsub(e,ec);const r=Rs.dot(Rs),o=Rs.dot(Kr),a=Rs.dot(ec),l=Kr.dot(Kr),c=Kr.dot(ec);let h,d;return(h=l*a-o*c)>=0&&(d=r*c-o*a)>=0&&h+d<r*l-o*o}}Ne.CLOSEST=ru.CLOSEST;Ne.ANY=ru.ANY;Ne.ALL=ru.ALL;const qd=new Tn,tc=[],Kr=new A,ec=new A,OM=new A,zM=new Ce,pn=new A,Yn=new A,oi=new A,ai=new A;new A;new el;const Yd={faceList:[0]},aa=new A,kM=new Ne,VM=[],GM=new A,HM=new A,WM=new A;new A;new A;const $d=new A,XM=new A,qM=new A,YM=new A,$M=new A,jM=new A,ZM=new A;new Tn;const KM=[],JM=new ee,Rs=new A,la=new A;function QM(s,t,e){e.vsub(s,Rs);const n=Rs.dot(t);return t.scale(n,la),la.vadd(s,la),e.distanceTo(la)}class Mr extends Dp{static checkBounds(t,e,n){let i,r;n===0?(i=t.position.x,r=e.position.x):n===1?(i=t.position.y,r=e.position.y):n===2&&(i=t.position.z,r=e.position.z);const o=t.boundingRadius,a=e.boundingRadius,l=i+o;return r-a<l}static insertionSortX(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.x<=i.aabb.lowerBound.x);r--)t[r+1]=t[r];t[r+1]=i}return t}static insertionSortY(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.y<=i.aabb.lowerBound.y);r--)t[r+1]=t[r];t[r+1]=i}return t}static insertionSortZ(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.z<=i.aabb.lowerBound.z);r--)t[r+1]=t[r];t[r+1]=i}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;const e=this.axisList;this._addBodyHandler=n=>{e.push(n.body)},this._removeBodyHandler=n=>{const i=e.indexOf(n.body);i!==-1&&e.splice(i,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,n){const i=this.axisList,r=i.length,o=this.axisIndex;let a,l;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==r;a++){const c=i[a];for(l=a+1;l<r;l++){const h=i[l];if(this.needBroadphaseCollision(c,h)){if(!Mr.checkBounds(c,h,o))break;this.intersectionTest(c,h,e,n)}}}}sortList(){const t=this.axisList,e=this.axisIndex,n=t.length;for(let i=0;i!==n;i++){const r=t[i];r.aabbNeedsUpdate&&r.updateAABB()}e===0?Mr.insertionSortX(t):e===1?Mr.insertionSortY(t):e===2&&Mr.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,n=0,i=0,r=0,o=0;const a=this.axisList,l=a.length,c=1/l;for(let f=0;f!==l;f++){const g=a[f],_=g.position.x;t+=_,e+=_*_;const m=g.position.y;n+=m,i+=m*m;const p=g.position.z;r+=p,o+=p*p}const h=e-t*t*c,d=i-n*n*c,u=o-r*r*c;h>d?h>u?this.axisIndex=0:this.axisIndex=2:d>u?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);const i=this.axisIndex;let r="x";i===1&&(r="y"),i===2&&(r="z");const o=this.axisList;e.lowerBound[r],e.upperBound[r];for(let a=0;a<o.length;a++){const l=o[a];l.aabbNeedsUpdate&&l.updateAABB(),l.aabb.overlaps(e)&&n.push(l)}return n}}class tS{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class jd{constructor(){this.spatial=new A,this.rotational=new A}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class Ro{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=Ro.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new jd,this.jacobianElementB=new jd,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,r=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*r*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*t-i*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.position,o=i.position;return t.spatial.dot(r)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.velocity,o=i.velocity,a=n.angularVelocity,l=i.angularVelocity;return t.multiplyVectors(r,a)+e.multiplyVectors(o,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.vlambda,o=i.vlambda,a=n.wlambda,l=i.wlambda;return t.multiplyVectors(r,a)+e.multiplyVectors(o,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.force,o=n.torque,a=i.force,l=i.torque,c=n.invMassSolve,h=i.invMassSolve;return r.scale(c,Zd),a.scale(h,Kd),n.invInertiaWorldSolve.vmult(o,Jd),i.invInertiaWorldSolve.vmult(l,Qd),t.multiplyVectors(Zd,Jd)+e.multiplyVectors(Kd,Qd)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=r+o;return a.vmult(t.rotational,ca),c+=ca.dot(t.rotational),l.vmult(e.rotational,ca),c+=ca.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,r=this.bj,o=eS;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),r.vlambda.addScaledVector(r.invMassSolve*t,n.spatial,r.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),r.invInertiaWorldSolve.vmult(n.rotational,o),r.wlambda.addScaledVector(t,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Ro.idCounter=0;const Zd=new A,Kd=new A,Jd=new A,Qd=new A,ca=new A,eS=new A;class nS extends Ro{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new A,this.rj=new A,this.ni=new A}computeB(t){const e=this.a,n=this.b,i=this.bi,r=this.bj,o=this.ri,a=this.rj,l=iS,c=sS,h=i.velocity,d=i.angularVelocity;i.force,i.torque;const u=r.velocity,f=r.angularVelocity;r.force,r.torque;const g=rS,_=this.jacobianElementA,m=this.jacobianElementB,p=this.ni;o.cross(p,l),a.cross(p,c),p.negate(_.spatial),l.negate(_.rotational),m.spatial.copy(p),m.rotational.copy(c),g.copy(r.position),g.vadd(a,g),g.vsub(i.position,g),g.vsub(o,g);const x=p.dot(g),y=this.restitution+1,v=y*u.dot(p)-y*h.dot(p)+f.dot(c)-d.dot(l),M=this.computeGiMf();return-x*e-v*n-t*M}getImpactVelocityAlongNormal(){const t=oS,e=aS,n=lS,i=cS,r=hS;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,r),this.ni.dot(r)}}const iS=new A,sS=new A,rS=new A,oS=new A,aS=new A,lS=new A,cS=new A,hS=new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;class tf extends Ro{constructor(t,e,n){super(t,e,-n,n),this.ri=new A,this.rj=new A,this.t=new A}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,r=uS,o=dS,a=this.t;n.cross(a,r),i.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),r.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const h=this.computeGW(),d=this.computeGiMf();return-h*e-t*d}}const uS=new A,dS=new A;class Po{constructor(t,e,n){n=tS.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Po.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Po.idCounter=0;class Io{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=Io.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}Io.idCounter=0;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new Ne;new A;new A;new A;new A(1,0,0),new A(0,1,0),new A(0,0,1);new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;class fS extends vt{constructor(){super({type:vt.types.PLANE}),this.worldNormal=new A,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,e){return e===void 0&&(e=new A),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,i){Ei.set(0,0,1),e.vmult(Ei,Ei);const r=Number.MAX_VALUE;n.set(-r,-r,-r),i.set(r,r,r),Ei.x===1?i.x=t.x:Ei.x===-1&&(n.x=t.x),Ei.y===1?i.y=t.y:Ei.y===-1&&(n.y=t.y),Ei.z===1?i.z=t.z:Ei.z===-1&&(n.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const Ei=new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new Tn;new A;new Tn;new A;new A;new A;new A;new A;new A;new A;new Tn;new A;new ee;new Tn;class pS{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class mS extends pS{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=e.bodies,c=l.length,h=t;let d,u,f,g,_,m;if(a!==0)for(let v=0;v!==c;v++)l[v].updateSolveMassProperties();const p=xS,x=_S,y=gS;p.length=a,x.length=a,y.length=a;for(let v=0;v!==a;v++){const M=o[v];y[v]=0,x[v]=M.computeB(h),p[v]=1/M.computeC()}if(a!==0){for(let w=0;w!==c;w++){const E=l[w],C=E.vlambda,S=E.wlambda;C.set(0,0,0),S.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let w=0;w!==a;w++){const E=o[w];d=x[w],u=p[w],m=y[w],_=E.computeGWlambda(),f=u*(d-_-E.eps*m),m+f<E.minForce?f=E.minForce-m:m+f>E.maxForce&&(f=E.maxForce-m),y[w]+=f,g+=f>0?f:-f,E.addToWlambda(f)}if(g*g<r)break}for(let w=0;w!==c;w++){const E=l[w],C=E.velocity,S=E.angularVelocity;E.vlambda.vmul(E.linearFactor,E.vlambda),C.vadd(E.vlambda,C),E.wlambda.vmul(E.angularFactor,E.wlambda),S.vadd(E.wlambda,S)}let v=o.length;const M=1/h;for(;v--;)o[v].multiplier=y[v]*M}return n}}const gS=[],xS=[],_S=[];class vS{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class yS extends vS{constructor(){super(...arguments),this.type=A}constructObject(){return new A}}const ve={sphereSphere:vt.types.SPHERE,spherePlane:vt.types.SPHERE|vt.types.PLANE,boxBox:vt.types.BOX|vt.types.BOX,sphereBox:vt.types.SPHERE|vt.types.BOX,planeBox:vt.types.PLANE|vt.types.BOX,convexConvex:vt.types.CONVEXPOLYHEDRON,sphereConvex:vt.types.SPHERE|vt.types.CONVEXPOLYHEDRON,planeConvex:vt.types.PLANE|vt.types.CONVEXPOLYHEDRON,boxConvex:vt.types.BOX|vt.types.CONVEXPOLYHEDRON,sphereHeightfield:vt.types.SPHERE|vt.types.HEIGHTFIELD,boxHeightfield:vt.types.BOX|vt.types.HEIGHTFIELD,convexHeightfield:vt.types.CONVEXPOLYHEDRON|vt.types.HEIGHTFIELD,sphereParticle:vt.types.PARTICLE|vt.types.SPHERE,planeParticle:vt.types.PLANE|vt.types.PARTICLE,boxParticle:vt.types.BOX|vt.types.PARTICLE,convexParticle:vt.types.PARTICLE|vt.types.CONVEXPOLYHEDRON,cylinderCylinder:vt.types.CYLINDER,sphereCylinder:vt.types.SPHERE|vt.types.CYLINDER,planeCylinder:vt.types.PLANE|vt.types.CYLINDER,boxCylinder:vt.types.BOX|vt.types.CYLINDER,convexCylinder:vt.types.CONVEXPOLYHEDRON|vt.types.CYLINDER,heightfieldCylinder:vt.types.HEIGHTFIELD|vt.types.CYLINDER,particleCylinder:vt.types.PARTICLE|vt.types.CYLINDER,sphereTrimesh:vt.types.SPHERE|vt.types.TRIMESH,planeTrimesh:vt.types.PLANE|vt.types.TRIMESH};class MS{get[ve.sphereSphere](){return this.sphereSphere}get[ve.spherePlane](){return this.spherePlane}get[ve.boxBox](){return this.boxBox}get[ve.sphereBox](){return this.sphereBox}get[ve.planeBox](){return this.planeBox}get[ve.convexConvex](){return this.convexConvex}get[ve.sphereConvex](){return this.sphereConvex}get[ve.planeConvex](){return this.planeConvex}get[ve.boxConvex](){return this.boxConvex}get[ve.sphereHeightfield](){return this.sphereHeightfield}get[ve.boxHeightfield](){return this.boxHeightfield}get[ve.convexHeightfield](){return this.convexHeightfield}get[ve.sphereParticle](){return this.sphereParticle}get[ve.planeParticle](){return this.planeParticle}get[ve.boxParticle](){return this.boxParticle}get[ve.convexParticle](){return this.convexParticle}get[ve.cylinderCylinder](){return this.convexConvex}get[ve.sphereCylinder](){return this.sphereConvex}get[ve.planeCylinder](){return this.planeConvex}get[ve.boxCylinder](){return this.boxConvex}get[ve.convexCylinder](){return this.convexConvex}get[ve.heightfieldCylinder](){return this.heightfieldCylinder}get[ve.particleCylinder](){return this.particleCylinder}get[ve.sphereTrimesh](){return this.sphereTrimesh}get[ve.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new yS,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new nS(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,h=i.material||e.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(a.restitution=c.restitution*h.restitution),a.si=r||n,a.sj=o||i,a}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,r=t.si,o=t.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const h=r.material||n.material,d=o.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(c=h.friction*d.friction),c>0){const u=c*(a.frictionGravity||a.gravity).length();let f=n.invMass+i.invMass;f>0&&(f=1/f);const g=this.frictionEquationPool,_=g.length?g.pop():new tf(n,i,u*f),m=g.length?g.pop():new tf(n,i,u*f);return _.bi=m.bi=n,_.bj=m.bj=i,_.minForce=m.minForce=-u*f,_.maxForce=m.maxForce=u*f,_.ri.copy(t.ri),_.rj.copy(t.rj),m.ri.copy(t.ri),m.rj.copy(t.rj),t.ni.tangents(_.t,m.t),_.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),_.enabled=m.enabled=t.enabled,e.push(_,m),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Ms.setZero(),ar.setZero(),lr.setZero();const r=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==r?(Ms.vadd(e.ni,Ms),ar.vadd(e.ri,ar),lr.vadd(e.rj,lr)):(Ms.vsub(e.ni,Ms),ar.vadd(e.rj,ar),lr.vadd(e.ri,lr));const o=1/t;ar.scale(o,n.ri),lr.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Ms.normalize(),Ms.tangents(n.t,i.t)}getContacts(t,e,n,i,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const l=wS,c=ES,h=SS,d=bS;for(let u=0,f=t.length;u!==f;u++){const g=t[u],_=e[u];let m=null;g.material&&_.material&&(m=n.getContactMaterial(g.material,_.material)||null);const p=g.type&pt.KINEMATIC&&_.type&pt.STATIC||g.type&pt.STATIC&&_.type&pt.KINEMATIC||g.type&pt.KINEMATIC&&_.type&pt.KINEMATIC;for(let x=0;x<g.shapes.length;x++){g.quaternion.mult(g.shapeOrientations[x],l),g.quaternion.vmult(g.shapeOffsets[x],h),h.vadd(g.position,h);const y=g.shapes[x];for(let v=0;v<_.shapes.length;v++){_.quaternion.mult(_.shapeOrientations[v],c),_.quaternion.vmult(_.shapeOffsets[v],d),d.vadd(_.position,d);const M=_.shapes[v];if(!(y.collisionFilterMask&M.collisionFilterGroup&&M.collisionFilterMask&y.collisionFilterGroup)||h.distanceTo(d)>y.boundingSphereRadius+M.boundingSphereRadius)continue;let w=null;y.material&&M.material&&(w=n.getContactMaterial(y.material,M.material)||null),this.currentContactMaterial=w||m||n.defaultContactMaterial;const E=y.type|M.type,C=this[E];if(C){let S=!1;y.type<M.type?S=C.call(this,y,M,h,d,l,c,g,_,y,M,p):S=C.call(this,M,y,d,h,c,l,_,g,y,M,p),S&&p&&(n.shapeOverlapKeeper.set(y.id,M.id),n.bodyOverlapKeeper.set(g.id,_.id))}}}}}sphereSphere(t,e,n,i,r,o,a,l,c,h,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;const u=this.createContactEquation(a,l,t,e,c,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(l.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,i,r,o,a,l,c,h,d){const u=this.createContactEquation(a,l,t,e,c,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(i,ha),u.ni.scale(u.ni.dot(ha),ef),ha.vsub(ef,u.rj),-ha.dot(u.ni)<=t.radius){if(d)return!0;const f=u.ri,g=u.rj;f.vadd(n,f),f.vsub(a.position,f),g.vadd(i,g),g.vsub(l.position,g),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,i,r,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,r,o,a,l,t,e,d)}sphereBox(t,e,n,i,r,o,a,l,c,h,d){const u=this.v3pool,f=KS;n.vsub(i,ua),e.getSideNormals(f,o);const g=t.radius;let _=!1;const m=QS,p=tb,x=eb;let y=null,v=0,M=0,w=0,E=null;for(let U=0,k=f.length;U!==k&&_===!1;U++){const H=$S;H.copy(f[U]);const q=H.length();H.normalize();const K=ua.dot(H);if(K<q+g&&K>0){const Q=jS,et=ZS;Q.copy(f[(U+1)%3]),et.copy(f[(U+2)%3]);const yt=Q.length(),Yt=et.length();Q.normalize(),et.normalize();const qt=ua.dot(Q),j=ua.dot(et);if(qt<yt&&qt>-yt&&j<Yt&&j>-Yt){const nt=Math.abs(K-q-g);if((E===null||nt<E)&&(E=nt,M=qt,w=j,y=q,m.copy(H),p.copy(Q),x.copy(et),v++,d))return!0}}}if(v){_=!0;const U=this.createContactEquation(a,l,t,e,c,h);m.scale(-g,U.ri),U.ni.copy(m),U.ni.negate(U.ni),m.scale(y,m),p.scale(M,p),m.vadd(p,m),x.scale(w,x),m.vadd(x,U.rj),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),U.rj.vadd(i,U.rj),U.rj.vsub(l.position,U.rj),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}let C=u.get();const S=JS;for(let U=0;U!==2&&!_;U++)for(let k=0;k!==2&&!_;k++)for(let H=0;H!==2&&!_;H++)if(C.set(0,0,0),U?C.vadd(f[0],C):C.vsub(f[0],C),k?C.vadd(f[1],C):C.vsub(f[1],C),H?C.vadd(f[2],C):C.vsub(f[2],C),i.vadd(C,S),S.vsub(n,S),S.lengthSquared()<g*g){if(d)return!0;_=!0;const q=this.createContactEquation(a,l,t,e,c,h);q.ri.copy(S),q.ri.normalize(),q.ni.copy(q.ri),q.ri.scale(g,q.ri),q.rj.copy(C),q.ri.vadd(n,q.ri),q.ri.vsub(a.position,q.ri),q.rj.vadd(i,q.rj),q.rj.vsub(l.position,q.rj),this.result.push(q),this.createFrictionEquationsFromContact(q,this.frictionResult)}u.release(C),C=null;const b=u.get(),R=u.get(),L=u.get(),P=u.get(),D=u.get(),B=f.length;for(let U=0;U!==B&&!_;U++)for(let k=0;k!==B&&!_;k++)if(U%3!==k%3){f[k].cross(f[U],b),b.normalize(),f[U].vadd(f[k],R),L.copy(n),L.vsub(R,L),L.vsub(i,L);const H=L.dot(b);b.scale(H,P);let q=0;for(;q===U%3||q===k%3;)q++;D.copy(n),D.vsub(P,D),D.vsub(R,D),D.vsub(i,D);const K=Math.abs(H),Q=D.length();if(K<f[q].length()&&Q<g){if(d)return!0;_=!0;const et=this.createContactEquation(a,l,t,e,c,h);R.vadd(P,et.rj),et.rj.copy(et.rj),D.negate(et.ni),et.ni.normalize(),et.ri.copy(et.rj),et.ri.vadd(i,et.ri),et.ri.vsub(n,et.ri),et.ri.normalize(),et.ri.scale(g,et.ri),et.ri.vadd(n,et.ri),et.ri.vsub(a.position,et.ri),et.rj.vadd(i,et.rj),et.rj.vsub(l.position,et.rj),this.result.push(et),this.createFrictionEquationsFromContact(et,this.frictionResult)}}u.release(b,R,L,P,D)}planeBox(t,e,n,i,r,o,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,r,o,a,l,t,e,d)}convexConvex(t,e,n,i,r,o,a,l,c,h,d,u,f){const g=gb;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,r,i,o,g,u,f)){const _=[],m=xb;t.clipAgainstHull(n,r,e,i,o,g,-100,100,_);let p=0;for(let x=0;x!==_.length;x++){if(d)return!0;const y=this.createContactEquation(a,l,t,e,c,h),v=y.ri,M=y.rj;g.negate(y.ni),_[x].normal.negate(m),m.scale(_[x].depth,m),_[x].point.vadd(m,v),M.copy(_[x].point),v.vsub(n,v),M.vsub(i,M),v.vadd(n,v),v.vsub(a.position,v),M.vadd(i,M),M.vsub(l.position,M),this.result.push(y),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(y,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(t,e,n,i,r,o,a,l,c,h,d){const u=this.v3pool;n.vsub(i,nb);const f=e.faceNormals,g=e.faces,_=e.vertices,m=t.radius;let p=!1;for(let x=0;x!==_.length;x++){const y=_[x],v=ob;o.vmult(y,v),i.vadd(v,v);const M=rb;if(v.vsub(n,M),M.lengthSquared()<m*m){if(d)return!0;p=!0;const w=this.createContactEquation(a,l,t,e,c,h);w.ri.copy(M),w.ri.normalize(),w.ni.copy(w.ri),w.ri.scale(m,w.ri),v.vsub(i,w.rj),w.ri.vadd(n,w.ri),w.ri.vsub(a.position,w.ri),w.rj.vadd(i,w.rj),w.rj.vsub(l.position,w.rj),this.result.push(w),this.createFrictionEquationsFromContact(w,this.frictionResult);return}}for(let x=0,y=g.length;x!==y&&p===!1;x++){const v=f[x],M=g[x],w=ab;o.vmult(v,w);const E=lb;o.vmult(_[M[0]],E),E.vadd(i,E);const C=cb;w.scale(-m,C),n.vadd(C,C);const S=hb;C.vsub(E,S);const b=S.dot(w),R=ub;if(n.vsub(E,R),b<0&&R.dot(w)>0){const L=[];for(let P=0,D=M.length;P!==D;P++){const B=u.get();o.vmult(_[M[P]],B),i.vadd(B,B),L.push(B)}if(YS(L,w,n)){if(d)return!0;p=!0;const P=this.createContactEquation(a,l,t,e,c,h);w.scale(-m,P.ri),w.negate(P.ni);const D=u.get();w.scale(-b,D);const B=u.get();w.scale(-m,B),n.vsub(i,P.rj),P.rj.vadd(B,P.rj),P.rj.vadd(D,P.rj),P.rj.vadd(i,P.rj),P.rj.vsub(l.position,P.rj),P.ri.vadd(n,P.ri),P.ri.vsub(a.position,P.ri),u.release(D),u.release(B),this.result.push(P),this.createFrictionEquationsFromContact(P,this.frictionResult);for(let U=0,k=L.length;U!==k;U++)u.release(L[U]);return}else for(let P=0;P!==M.length;P++){const D=u.get(),B=u.get();o.vmult(_[M[(P+1)%M.length]],D),o.vmult(_[M[(P+2)%M.length]],B),i.vadd(D,D),i.vadd(B,B);const U=ib;B.vsub(D,U);const k=sb;U.unit(k);const H=u.get(),q=u.get();n.vsub(D,q);const K=q.dot(k);k.scale(K,H),H.vadd(D,H);const Q=u.get();if(H.vsub(n,Q),K>0&&K*K<U.lengthSquared()&&Q.lengthSquared()<m*m){if(d)return!0;const et=this.createContactEquation(a,l,t,e,c,h);H.vsub(i,et.rj),H.vsub(n,et.ni),et.ni.normalize(),et.ni.scale(m,et.ri),et.rj.vadd(i,et.rj),et.rj.vsub(l.position,et.rj),et.ri.vadd(n,et.ri),et.ri.vsub(a.position,et.ri),this.result.push(et),this.createFrictionEquationsFromContact(et,this.frictionResult);for(let yt=0,Yt=L.length;yt!==Yt;yt++)u.release(L[yt]);u.release(D),u.release(B),u.release(H),u.release(Q),u.release(q);return}u.release(D),u.release(B),u.release(H),u.release(Q),u.release(q)}for(let P=0,D=L.length;P!==D;P++)u.release(L[P])}}}planeConvex(t,e,n,i,r,o,a,l,c,h,d){const u=db,f=fb;f.set(0,0,1),r.vmult(f,f);let g=0;const _=pb;for(let m=0;m!==e.vertices.length;m++)if(u.copy(e.vertices[m]),o.vmult(u,u),i.vadd(u,u),u.vsub(n,_),f.dot(_)<=0){if(d)return!0;const x=this.createContactEquation(a,l,t,e,c,h),y=mb;f.scale(f.dot(_),y),u.vsub(y,y),y.vsub(n,x.ri),x.ni.copy(f),u.vsub(i,x.rj),x.ri.vadd(n,x.ri),x.ri.vsub(a.position,x.ri),x.rj.vadd(i,x.rj),x.rj.vsub(l.position,x.rj),this.result.push(x),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,i,r,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,r,o,a,l,t,e,d)}sphereHeightfield(t,e,n,i,r,o,a,l,c,h,d){const u=e.data,f=t.radius,g=e.elementSize,_=Rb,m=Cb;ee.pointToLocalFrame(i,o,n,m);let p=Math.floor((m.x-f)/g)-1,x=Math.ceil((m.x+f)/g)+1,y=Math.floor((m.y-f)/g)-1,v=Math.ceil((m.y+f)/g)+1;if(x<0||v<0||p>u.length||y>u[0].length)return;p<0&&(p=0),x<0&&(x=0),y<0&&(y=0),v<0&&(v=0),p>=u.length&&(p=u.length-1),x>=u.length&&(x=u.length-1),v>=u[0].length&&(v=u[0].length-1),y>=u[0].length&&(y=u[0].length-1);const M=[];e.getRectMinMax(p,y,x,v,M);const w=M[0],E=M[1];if(m.z-f>E||m.z+f<w)return;const C=this.result;for(let S=p;S<x;S++)for(let b=y;b<v;b++){const R=C.length;let L=!1;if(e.getConvexTrianglePillar(S,b,!1),ee.pointToWorldFrame(i,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(L=this.sphereConvex(t,e.pillarConvex,n,_,r,o,a,l,t,e,d)),d&&L||(e.getConvexTrianglePillar(S,b,!0),ee.pointToWorldFrame(i,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(L=this.sphereConvex(t,e.pillarConvex,n,_,r,o,a,l,t,e,d)),d&&L))return!0;if(C.length-R>2)return}}boxHeightfield(t,e,n,i,r,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,r,o,a,l,t,e,d)}convexHeightfield(t,e,n,i,r,o,a,l,c,h,d){const u=e.data,f=e.elementSize,g=t.boundingSphereRadius,_=Ab,m=Tb,p=Eb;ee.pointToLocalFrame(i,o,n,p);let x=Math.floor((p.x-g)/f)-1,y=Math.ceil((p.x+g)/f)+1,v=Math.floor((p.y-g)/f)-1,M=Math.ceil((p.y+g)/f)+1;if(y<0||M<0||x>u.length||v>u[0].length)return;x<0&&(x=0),y<0&&(y=0),v<0&&(v=0),M<0&&(M=0),x>=u.length&&(x=u.length-1),y>=u.length&&(y=u.length-1),M>=u[0].length&&(M=u[0].length-1),v>=u[0].length&&(v=u[0].length-1);const w=[];e.getRectMinMax(x,v,y,M,w);const E=w[0],C=w[1];if(!(p.z-g>C||p.z+g<E))for(let S=x;S<y;S++)for(let b=v;b<M;b++){let R=!1;if(e.getConvexTrianglePillar(S,b,!1),ee.pointToWorldFrame(i,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(R=this.convexConvex(t,e.pillarConvex,n,_,r,o,a,l,null,null,d,m,null)),d&&R||(e.getConvexTrianglePillar(S,b,!0),ee.pointToWorldFrame(i,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(R=this.convexConvex(t,e.pillarConvex,n,_,r,o,a,l,null,null,d,m,null)),d&&R))return!0}}sphereParticle(t,e,n,i,r,o,a,l,c,h,d){const u=Mb;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;const g=this.createContactEquation(l,a,e,t,c,h);u.normalize(),g.rj.copy(u),g.rj.scale(t.radius,g.rj),g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,i,r,o,a,l,c,h,d){const u=_b;u.set(0,0,1),a.quaternion.vmult(u,u);const f=vb;if(i.vsub(a.position,f),u.dot(f)<=0){if(d)return!0;const _=this.createContactEquation(l,a,e,t,c,h);_.ni.copy(u),_.ni.negate(_.ni),_.ri.set(0,0,0);const m=yb;u.scale(u.dot(i),m),i.vsub(m,m),_.rj.copy(m),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}boxParticle(t,e,n,i,r,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,r,o,a,l,t,e,d)}convexParticle(t,e,n,i,r,o,a,l,c,h,d){let u=-1;const f=bb,g=wb;let _=null;const m=Sb;if(m.copy(i),m.vsub(n,m),r.conjugate(nf),nf.vmult(m,m),t.pointIsInside(m)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,r),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(r);for(let p=0,x=t.faces.length;p!==x;p++){const y=[t.worldVertices[t.faces[p][0]]],v=t.worldFaceNormals[p];i.vsub(y[0],sf);const M=-v.dot(sf);if(_===null||Math.abs(M)<Math.abs(_)){if(d)return!0;_=M,u=p,f.copy(v)}}if(u!==-1){const p=this.createContactEquation(l,a,e,t,c,h);f.scale(_,g),g.vadd(i,g),g.vsub(n,g),p.rj.copy(g),f.negate(p.ni),p.ri.set(0,0,0);const x=p.ri,y=p.rj;x.vadd(i,x),x.vsub(l.position,x),y.vadd(n,y),y.vsub(a.position,y),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,r,o,a,l,c,h,d){return this.convexHeightfield(e,t,i,n,o,r,l,a,c,h,d)}particleCylinder(t,e,n,i,r,o,a,l,c,h,d){return this.convexParticle(e,t,i,n,o,r,l,a,c,h,d)}sphereTrimesh(t,e,n,i,r,o,a,l,c,h,d){const u=DS,f=NS,g=FS,_=US,m=BS,p=OS,x=GS,y=LS,v=PS,M=HS;ee.pointToLocalFrame(i,o,n,m);const w=t.radius;x.lowerBound.set(m.x-w,m.y-w,m.z-w),x.upperBound.set(m.x+w,m.y+w,m.z+w),e.getTrianglesInAABB(x,M);const E=IS,C=t.radius*t.radius;for(let P=0;P<M.length;P++)for(let D=0;D<3;D++)if(e.getVertex(e.indices[M[P]*3+D],E),E.vsub(m,v),v.lengthSquared()<=C){if(y.copy(E),ee.pointToWorldFrame(i,o,y,E),E.vsub(n,v),d)return!0;let B=this.createContactEquation(a,l,t,e,c,h);B.ni.copy(v),B.ni.normalize(),B.ri.copy(B.ni),B.ri.scale(t.radius,B.ri),B.ri.vadd(n,B.ri),B.ri.vsub(a.position,B.ri),B.rj.copy(E),B.rj.vsub(l.position,B.rj),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}for(let P=0;P<M.length;P++)for(let D=0;D<3;D++){e.getVertex(e.indices[M[P]*3+D],u),e.getVertex(e.indices[M[P]*3+(D+1)%3],f),f.vsub(u,g),m.vsub(f,p);const B=p.dot(g);m.vsub(u,p);let U=p.dot(g);if(U>0&&B<0&&(m.vsub(u,p),_.copy(g),_.normalize(),U=p.dot(_),_.scale(U,p),p.vadd(u,p),p.distanceTo(m)<t.radius)){if(d)return!0;const H=this.createContactEquation(a,l,t,e,c,h);p.vsub(m,H.ni),H.ni.normalize(),H.ni.scale(t.radius,H.ri),H.ri.vadd(n,H.ri),H.ri.vsub(a.position,H.ri),ee.pointToWorldFrame(i,o,p,p),p.vsub(l.position,H.rj),ee.vectorToWorldFrame(o,H.ni,H.ni),ee.vectorToWorldFrame(o,H.ri,H.ri),this.result.push(H),this.createFrictionEquationsFromContact(H,this.frictionResult)}}const S=zS,b=kS,R=VS,L=RS;for(let P=0,D=M.length;P!==D;P++){e.getTriangleVertices(M[P],S,b,R),e.getNormal(M[P],L),m.vsub(S,p);let B=p.dot(L);if(L.scale(B,p),m.vsub(p,p),B=p.distanceTo(m),Ne.pointInTriangle(p,S,b,R)&&B<t.radius){if(d)return!0;let U=this.createContactEquation(a,l,t,e,c,h);p.vsub(m,U.ni),U.ni.normalize(),U.ni.scale(t.radius,U.ri),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),ee.pointToWorldFrame(i,o,p,p),p.vsub(l.position,U.rj),ee.vectorToWorldFrame(o,U.ni,U.ni),ee.vectorToWorldFrame(o,U.ri,U.ri),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}}M.length=0}planeTrimesh(t,e,n,i,r,o,a,l,c,h,d){const u=new A,f=AS;f.set(0,0,1),r.vmult(f,f);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,u);const _=new A;_.copy(u),ee.pointToWorldFrame(i,o,_,u);const m=TS;if(u.vsub(n,m),f.dot(m)<=0){if(d)return!0;const x=this.createContactEquation(a,l,t,e,c,h);x.ni.copy(f);const y=CS;f.scale(m.dot(f),y),u.vsub(y,y),x.ri.copy(y),x.ri.vsub(a.position,x.ri),x.rj.copy(u),x.rj.vsub(l.position,x.rj),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}}}const Ms=new A,ar=new A,lr=new A,SS=new A,bS=new A,wS=new Ce,ES=new Ce,AS=new A,TS=new A,CS=new A,RS=new A,PS=new A;new A;const IS=new A,LS=new A,DS=new A,NS=new A,FS=new A,US=new A,BS=new A,OS=new A,zS=new A,kS=new A,VS=new A,GS=new Tn,HS=[],ha=new A,ef=new A,WS=new A,XS=new A,qS=new A;function YS(s,t,e){let n=null;const i=s.length;for(let r=0;r!==i;r++){const o=s[r],a=WS;s[(r+1)%i].vsub(o,a);const l=XS;a.cross(t,l);const c=qS;e.vsub(o,c);const h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const ua=new A,$S=new A,jS=new A,ZS=new A,KS=[new A,new A,new A,new A,new A,new A],JS=new A,QS=new A,tb=new A,eb=new A,nb=new A,ib=new A,sb=new A,rb=new A,ob=new A,ab=new A,lb=new A,cb=new A,hb=new A,ub=new A;new A;new A;const db=new A,fb=new A,pb=new A,mb=new A,gb=new A,xb=new A,_b=new A,vb=new A,yb=new A,Mb=new A,nf=new Ce,Sb=new A;new A;const bb=new A,sf=new A,wb=new A,Eb=new A,Ab=new A,Tb=[0],Cb=new A,Rb=new A;class rf{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let r=0;for(;n>i[r];)r++;if(n!==i[r]){for(let o=i.length-1;o>=r;o--)i[o+1]=i[o];i[r]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,r=n.length,o=i.length;let a=0;for(let l=0;l<r;l++){let c=!1;const h=n[l];for(;h>i[a];)a++;c=h===i[a],c||of(t,h)}a=0;for(let l=0;l<o;l++){let c=!1;const h=i[l];for(;h>n[a];)a++;c=n[a]===h,c||of(e,h)}}}function of(s,t){s.push((t&4294901760)>>16,t&65535)}const nc=(s,t)=>s<t?`${s}-${t}`:`${t}-${s}`;class Pb{constructor(){this.data={keys:[]}}get(t,e){const n=nc(t,e);return this.data[n]}set(t,e,n){const i=nc(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=nc(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class Ib extends Lp{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new A,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new A,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new BM,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new mS,this.constraints=[],this.narrowphase=new MS(this),this.collisionMatrix=new Wd,this.collisionMatrixPrevious=new Wd,this.bodyOverlapKeeper=new rf,this.shapeOverlapKeeper=new rf,this.contactmaterials=[],this.contactMaterialTable=new Pb,this.defaultMaterial=new Io("default"),this.defaultContactMaterial=new Po(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof el?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=Ne.ALL,n.from=t,n.to=e,n.callback=i,ic.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=Ne.ANY,n.from=t,n.to=e,n.result=i,ic.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=Ne.CLOSEST,n.from=t,n.to=e,n.result=i,ic.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof pt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let r=0;r!==n.length;r++)n[r].index=r;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let r=0;r<i.length;r++){const o=i[r];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=Oe.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=Oe.now();let r=0;for(;this.accumulator>=t&&r<n&&(this.internalStep(t),this.accumulator-=t,r++,!(Oe.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=Ub,i=Bb,r=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,d=pt.DYNAMIC;let u=-1/0;const f=this.constraints,g=Fb;l.length();const _=l.x,m=l.y,p=l.z;let x=0;for(c&&(u=Oe.now()),x=0;x!==r;x++){const P=o[x];if(P.type===d){const D=P.force,B=P.mass;D.x+=B*_,D.y+=B*m,D.z+=B*p}}for(let P=0,D=this.subsystems.length;P!==D;P++)this.subsystems[P].update();c&&(u=Oe.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(h.broadphase=Oe.now()-u);let y=f.length;for(x=0;x!==y;x++){const P=f[x];if(!P.collideConnected)for(let D=n.length-1;D>=0;D-=1)(P.bodyA===n[D]&&P.bodyB===i[D]||P.bodyB===n[D]&&P.bodyA===i[D])&&(n.splice(D,1),i.splice(D,1))}this.collisionMatrixTick(),c&&(u=Oe.now());const v=Nb,M=e.length;for(x=0;x!==M;x++)v.push(e[x]);e.length=0;const w=this.frictionEquations.length;for(x=0;x!==w;x++)g.push(this.frictionEquations[x]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,v,this.frictionEquations,g),c&&(h.narrowphase=Oe.now()-u),c&&(u=Oe.now()),x=0;x<this.frictionEquations.length;x++)a.addEquation(this.frictionEquations[x]);const E=e.length;for(let P=0;P!==E;P++){const D=e[P],B=D.bi,U=D.bj,k=D.si,H=D.sj;let q;if(B.material&&U.material?q=this.getContactMaterial(B.material,U.material)||this.defaultContactMaterial:q=this.defaultContactMaterial,q.friction,B.material&&U.material&&(B.material.friction>=0&&U.material.friction>=0&&B.material.friction*U.material.friction,B.material.restitution>=0&&U.material.restitution>=0&&(D.restitution=B.material.restitution*U.material.restitution)),a.addEquation(D),B.allowSleep&&B.type===pt.DYNAMIC&&B.sleepState===pt.SLEEPING&&U.sleepState===pt.AWAKE&&U.type!==pt.STATIC){const K=U.velocity.lengthSquared()+U.angularVelocity.lengthSquared(),Q=U.sleepSpeedLimit**2;K>=Q*2&&(B.wakeUpAfterNarrowphase=!0)}if(U.allowSleep&&U.type===pt.DYNAMIC&&U.sleepState===pt.SLEEPING&&B.sleepState===pt.AWAKE&&B.type!==pt.STATIC){const K=B.velocity.lengthSquared()+B.angularVelocity.lengthSquared(),Q=B.sleepSpeedLimit**2;K>=Q*2&&(U.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(B,U,!0),this.collisionMatrixPrevious.get(B,U)||(Jr.body=U,Jr.contact=D,B.dispatchEvent(Jr),Jr.body=B,U.dispatchEvent(Jr)),this.bodyOverlapKeeper.set(B.id,U.id),this.shapeOverlapKeeper.set(k.id,H.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=Oe.now()-u,u=Oe.now()),x=0;x!==r;x++){const P=o[x];P.wakeUpAfterNarrowphase&&(P.wakeUp(),P.wakeUpAfterNarrowphase=!1)}for(y=f.length,x=0;x!==y;x++){const P=f[x];P.update();for(let D=0,B=P.equations.length;D!==B;D++){const U=P.equations[D];a.addEquation(U)}}a.solve(t,this),c&&(h.solve=Oe.now()-u),a.removeAllEquations();const C=Math.pow;for(x=0;x!==r;x++){const P=o[x];if(P.type&d){const D=C(1-P.linearDamping,t),B=P.velocity;B.scale(D,B);const U=P.angularVelocity;if(U){const k=C(1-P.angularDamping,t);U.scale(k,U)}}}this.dispatchEvent(Db),c&&(u=Oe.now());const b=this.stepnumber%(this.quatNormalizeSkip+1)===0,R=this.quatNormalizeFast;for(x=0;x!==r;x++)o[x].integrate(t,b,R);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=Oe.now()-u),this.stepnumber+=1,this.dispatchEvent(Lb);let L=!0;if(this.allowSleep)for(L=!1,x=0;x!==r;x++){const P=o[x];P.sleepTick(this.time),P.sleepState!==pt.SLEEPING&&(L=!0)}this.hasActiveBodies=L}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(Ai,Ti),t){for(let r=0,o=Ai.length;r<o;r+=2)Qr.bodyA=this.getBodyById(Ai[r]),Qr.bodyB=this.getBodyById(Ai[r+1]),this.dispatchEvent(Qr);Qr.bodyA=Qr.bodyB=null}if(e){for(let r=0,o=Ti.length;r<o;r+=2)to.bodyA=this.getBodyById(Ti[r]),to.bodyB=this.getBodyById(Ti[r+1]),this.dispatchEvent(to);to.bodyA=to.bodyB=null}Ai.length=Ti.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(Ai,Ti),n){for(let r=0,o=Ai.length;r<o;r+=2){const a=this.getShapeById(Ai[r]),l=this.getShapeById(Ai[r+1]);Ci.shapeA=a,Ci.shapeB=l,a&&(Ci.bodyA=a.body),l&&(Ci.bodyB=l.body),this.dispatchEvent(Ci)}Ci.bodyA=Ci.bodyB=Ci.shapeA=Ci.shapeB=null}if(i){for(let r=0,o=Ti.length;r<o;r+=2){const a=this.getShapeById(Ti[r]),l=this.getShapeById(Ti[r+1]);Ri.shapeA=a,Ri.shapeB=l,a&&(Ri.bodyA=a.body),l&&(Ri.bodyB=l.body),this.dispatchEvent(Ri)}Ri.bodyA=Ri.bodyB=Ri.shapeA=Ri.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new Tn;const ic=new Ne,Oe=globalThis.performance||{};if(!Oe.now){let s=Date.now();Oe.timing&&Oe.timing.navigationStart&&(s=Oe.timing.navigationStart),Oe.now=()=>Date.now()-s}new A;const Lb={type:"postStep"},Db={type:"preStep"},Jr={type:pt.COLLIDE_EVENT_NAME,body:null,contact:null},Nb=[],Fb=[],Ub=[],Bb=[],Ai=[],Ti=[],Qr={type:"beginContact",bodyA:null,bodyB:null},to={type:"endContact",bodyA:null,bodyB:null},Ci={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Ri={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},af={type:"change"},ou={type:"start"},Vp={type:"end"},da=new Os,lf=new Fn,Ob=Math.cos(70*Za.DEG2RAD),Be=new N,mn=2*Math.PI,ue={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},sc=1e-6;class zb extends m0{constructor(t,e=null){super(t,e),this.state=ue.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:wr.ROTATE,MIDDLE:wr.DOLLY,RIGHT:wr.PAN},this.touches={ONE:yr.ROTATE,TWO:yr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new ei,this._lastTargetPosition=new N,this._quat=new ei().setFromUnitVectors(t.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new gd,this._sphericalDelta=new gd,this._scale=1,this._panOffset=new N,this._rotateStart=new Pt,this._rotateEnd=new Pt,this._rotateDelta=new Pt,this._panStart=new Pt,this._panEnd=new Pt,this._panDelta=new Pt,this._dollyStart=new Pt,this._dollyEnd=new Pt,this._dollyDelta=new Pt,this._dollyDirection=new N,this._mouse=new Pt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Vb.bind(this),this._onPointerDown=kb.bind(this),this._onPointerUp=Gb.bind(this),this._onContextMenu=jb.bind(this),this._onMouseWheel=Xb.bind(this),this._onKeyDown=qb.bind(this),this._onTouchStart=Yb.bind(this),this._onTouchMove=$b.bind(this),this._onMouseDown=Hb.bind(this),this._onMouseMove=Wb.bind(this),this._interceptControlDown=Zb.bind(this),this._interceptControlUp=Kb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(af),this.update(),this.state=ue.NONE}update(t=null){const e=this.object.position;Be.copy(e).sub(this.target),Be.applyQuaternion(this._quat),this._spherical.setFromVector3(Be),this.autoRotate&&this.state===ue.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=mn:n>Math.PI&&(n-=mn),i<-Math.PI?i+=mn:i>Math.PI&&(i-=mn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Be.setFromSpherical(this._spherical),Be.applyQuaternion(this._quatInverse),e.copy(this.target).add(Be),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Be.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Be.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(da.origin.copy(this.object.position),da.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(da.direction))<Ob?this.object.lookAt(this.target):(lf.setFromNormalAndCoplanarPoint(this.object.up,this.target),da.intersectPlane(lf,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>sc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>sc||this._lastTargetPosition.distanceToSquared(this.target)>sc?(this.dispatchEvent(af),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?mn/60*this.autoRotateSpeed*t:mn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Be.setFromMatrixColumn(e,0),Be.multiplyScalar(-t),this._panOffset.add(Be)}_panUp(t,e){this.screenSpacePanning===!0?Be.setFromMatrixColumn(e,1):(Be.setFromMatrixColumn(e,0),Be.crossVectors(this.object.up,Be)),Be.multiplyScalar(t),this._panOffset.add(Be)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Be.copy(i).sub(this.target);let r=Be.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(mn*this._rotateDelta.x/e.clientHeight),this._rotateUp(mn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(mn*this._rotateDelta.x/e.clientHeight),this._rotateUp(mn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Pt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function kb(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function Vb(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Gb(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Vp),this.state=ue.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Hb(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case wr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ue.DOLLY;break;case wr.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ue.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ue.ROTATE}break;case wr.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ue.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ue.PAN}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(ou)}function Wb(s){switch(this.state){case ue.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ue.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ue.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Xb(s){this.enabled===!1||this.enableZoom===!1||this.state!==ue.NONE||(s.preventDefault(),this.dispatchEvent(ou),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Vp))}function qb(s){this.enabled!==!1&&this._handleKeyDown(s)}function Yb(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case yr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=ue.TOUCH_ROTATE;break;case yr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=ue.TOUCH_PAN;break;default:this.state=ue.NONE}break;case 2:switch(this.touches.TWO){case yr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ue.TOUCH_DOLLY_PAN;break;case yr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ue.TOUCH_DOLLY_ROTATE;break;default:this.state=ue.NONE}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(ou)}function $b(s){switch(this._trackPointer(s),this.state){case ue.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ue.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ue.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ue.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ue.NONE}}function jb(s){this.enabled!==!1&&s.preventDefault()}function Zb(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Kb(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const eo=new N;function Pn(s,t,e,n,i,r){const o=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;eo.copy(t),eo[n]=0,eo.normalize();const c=.5*o/(o+a),h=1-eo.angleTo(s)/l;return Math.sign(eo[e])===1?h*c:a/(o+a)+c+c*(1-h)}class Lo extends hs{constructor(t=1,e=1,n=1,i=2,r=.1){const o=i*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new N,c=new N,h=new N(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,g=d.length/6,_=new N,m=.5/o;for(let p=0,x=0;p<d.length;p+=3,x+=2)switch(l.fromArray(d,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[p+0]=h.x*Math.sign(l.x)+c.x*r,d[p+1]=h.y*Math.sign(l.y)+c.y*r,d[p+2]=h.z*Math.sign(l.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/g)){case 0:_.set(1,0,0),f[x+0]=Pn(_,c,"z","y",r,n),f[x+1]=1-Pn(_,c,"y","z",r,e);break;case 1:_.set(-1,0,0),f[x+0]=1-Pn(_,c,"z","y",r,n),f[x+1]=1-Pn(_,c,"y","z",r,e);break;case 2:_.set(0,1,0),f[x+0]=1-Pn(_,c,"x","z",r,t),f[x+1]=Pn(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),f[x+0]=1-Pn(_,c,"x","z",r,t),f[x+1]=1-Pn(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),f[x+0]=1-Pn(_,c,"x","y",r,t),f[x+1]=1-Pn(_,c,"y","x",r,e);break;case 5:_.set(0,0,-1),f[x+0]=Pn(_,c,"x","y",r,t),f[x+1]=1-Pn(_,c,"y","x",r,e);break}}static fromJSON(t){return new Lo(t.width,t.height,t.depth,t.segments,t.radius)}}class Jb extends Mp{constructor(){super(),this.name="RoomEnvironment";const t=new hs;t.deleteAttribute("uv");const e=new Us({side:Ye}),n=new Us,i=new Ep(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new Zt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new Yg(t,n,6),a=new be;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const l=new Zt(t,cr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new Zt(t,cr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const h=new Zt(t,cr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const d=new Zt(t,cr(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);const u=new Zt(t,cr(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);const f=new Zt(t,cr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function cr(s){return new t0({color:0,emissive:16777215,emissiveIntensity:s})}const Gp=0,Qb=1,tw=2,cf=2,rc=1.25,hf=1,tn=32,ze=tn/4,Hp=65535,Ga=Math.pow(2,-24),au=Symbol("SKIP_GENERATION"),Wp={strategy:Gp,maxDepth:40,maxLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[au]:!1};function Te(s,t,e){return e.min.x=t[s],e.min.y=t[s+1],e.min.z=t[s+2],e.max.x=t[s+3],e.max.y=t[s+4],e.max.z=t[s+5],e}function uf(s){let t=-1,e=-1/0;for(let n=0;n<3;n++){const i=s[n+3]-s[n];i>e&&(e=i,t=n)}return t}function df(s,t){t.set(s)}function ff(s,t,e){let n,i;for(let r=0;r<3;r++){const o=r+3;n=s[r],i=t[r],e[r]=n<i?n:i,n=s[o],i=t[o],e[o]=n>i?n:i}}function fa(s,t,e){for(let n=0;n<3;n++){const i=t[s+2*n],r=t[s+2*n+1],o=i-r,a=i+r;o<e[n]&&(e[n]=o),a>e[n+3]&&(e[n+3]=a)}}function no(s){const t=s[3]-s[0],e=s[4]-s[1],n=s[5]-s[2];return 2*(t*e+e*n+n*t)}function ke(s,t){return t[s+15]===Hp}function en(s,t){return t[s+6]}function an(s,t){return t[s+14]}function We(s){return s+ze}function Xe(s,t){const e=t[s+6];return s+e*ze}function lu(s,t){return t[s+7]}function oc(s,t,e,n,i){let r=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,h=-1/0,d=1/0,u=1/0,f=1/0,g=-1/0,_=-1/0,m=-1/0;const p=s.offset||0;for(let x=(t-p)*6,y=(t+e-p)*6;x<y;x+=6){const v=s[x+0],M=s[x+1],w=v-M,E=v+M;w<r&&(r=w),E>l&&(l=E),v<d&&(d=v),v>g&&(g=v);const C=s[x+2],S=s[x+3],b=C-S,R=C+S;b<o&&(o=b),R>c&&(c=R),C<u&&(u=C),C>_&&(_=C);const L=s[x+4],P=s[x+5],D=L-P,B=L+P;D<a&&(a=D),B>h&&(h=B),L<f&&(f=L),L>m&&(m=L)}n[0]=r,n[1]=o,n[2]=a,n[3]=l,n[4]=c,n[5]=h,i[0]=d,i[1]=u,i[2]=f,i[3]=g,i[4]=_,i[5]=m}const Di=32,ew=(s,t)=>s.candidate-t.candidate,Ki=new Array(Di).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),pa=new Float32Array(6);function nw(s,t,e,n,i,r){let o=-1,a=0;if(r===Gp)o=uf(t),o!==-1&&(a=(t[o]+t[o+3])/2);else if(r===Qb)o=uf(s),o!==-1&&(a=iw(e,n,i,o));else if(r===tw){const l=no(s);let c=rc*i;const h=e.offset||0,d=(n-h)*6,u=(n+i-h)*6;for(let f=0;f<3;f++){const g=t[f],p=(t[f+3]-g)/Di;if(i<Di/4){const x=[...Ki];x.length=i;let y=0;for(let M=d;M<u;M+=6,y++){const w=x[y];w.candidate=e[M+2*f],w.count=0;const{bounds:E,leftCacheBounds:C,rightCacheBounds:S}=w;for(let b=0;b<3;b++)S[b]=1/0,S[b+3]=-1/0,C[b]=1/0,C[b+3]=-1/0,E[b]=1/0,E[b+3]=-1/0;fa(M,e,E)}x.sort(ew);let v=i;for(let M=0;M<v;M++){const w=x[M];for(;M+1<v&&x[M+1].candidate===w.candidate;)x.splice(M+1,1),v--}for(let M=d;M<u;M+=6){const w=e[M+2*f];for(let E=0;E<v;E++){const C=x[E];w>=C.candidate?fa(M,e,C.rightCacheBounds):(fa(M,e,C.leftCacheBounds),C.count++)}}for(let M=0;M<v;M++){const w=x[M],E=w.count,C=i-w.count,S=w.leftCacheBounds,b=w.rightCacheBounds;let R=0;E!==0&&(R=no(S)/l);let L=0;C!==0&&(L=no(b)/l);const P=hf+rc*(R*E+L*C);P<c&&(o=f,c=P,a=w.candidate)}}else{for(let v=0;v<Di;v++){const M=Ki[v];M.count=0,M.candidate=g+p+v*p;const w=M.bounds;for(let E=0;E<3;E++)w[E]=1/0,w[E+3]=-1/0}for(let v=d;v<u;v+=6){let E=~~((e[v+2*f]-g)/p);E>=Di&&(E=Di-1);const C=Ki[E];C.count++,fa(v,e,C.bounds)}const x=Ki[Di-1];df(x.bounds,x.rightCacheBounds);for(let v=Di-2;v>=0;v--){const M=Ki[v],w=Ki[v+1];ff(M.bounds,w.rightCacheBounds,M.rightCacheBounds)}let y=0;for(let v=0;v<Di-1;v++){const M=Ki[v],w=M.count,E=M.bounds,S=Ki[v+1].rightCacheBounds;w!==0&&(y===0?df(E,pa):ff(E,pa,pa)),y+=w;let b=0,R=0;y!==0&&(b=no(pa)/l);const L=i-y;L!==0&&(R=no(S)/l);const P=hf+rc*(b*y+R*L);P<c&&(o=f,c=P,a=M.candidate)}}}}else console.warn(`BVH: Invalid build strategy value ${r} used.`);return{axis:o,pos:a}}function iw(s,t,e,n){let i=0;const r=s.offset;for(let o=t,a=t+e;o<a;o++)i+=s[(o-r)*6+n*2];return i/e}class ac{constructor(){this.boundingData=new Float32Array(6)}}function sw(s,t,e,n,i,r){let o=n,a=n+i-1;const l=r.pos,c=r.axis*2,h=e.offset||0;for(;;){for(;o<=a&&e[(o-h)*6+c]<l;)o++;for(;o<=a&&e[(a-h)*6+c]>=l;)a--;if(o<a){for(let d=0;d<t;d++){let u=s[o*t+d];s[o*t+d]=s[a*t+d],s[a*t+d]=u}for(let d=0;d<6;d++){const u=o-h,f=a-h,g=e[u*6+d];e[u*6+d]=e[f*6+d],e[f*6+d]=g}o++,a--}else return o}}let Xp,Ha,wh,qp;const rw=Math.pow(2,32);function Eh(s){return"count"in s?1:1+Eh(s.left)+Eh(s.right)}function ow(s,t,e){return Xp=new Float32Array(e),Ha=new Uint32Array(e),wh=new Uint16Array(e),qp=new Uint8Array(e),Ah(s,t)}function Ah(s,t){const e=s/4,n=s/2,i="count"in t,r=t.boundingData;for(let o=0;o<6;o++)Xp[e+o]=r[o];if(i)return t.buffer?(qp.set(new Uint8Array(t.buffer),s),s+t.buffer.byteLength):(Ha[e+6]=t.offset,wh[n+14]=t.count,wh[n+15]=Hp,s+tn);{const{left:o,right:a,splitAxis:l}=t,c=s+tn;let h=Ah(c,o);const d=s/tn,f=h/tn-d;if(f>rw)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");return Ha[e+6]=f,Ha[e+7]=l,Ah(h,a)}}function aw(s,t,e,n,i,r){const{maxDepth:o,verbose:a,maxLeafSize:l,strategy:c,onProgress:h}=i,d=s.primitiveBuffer,u=s.primitiveBufferStride,f=new Float32Array(6);let g=!1;const _=new ac;return oc(t,e,n,_.boundingData,f),p(_,e,n,f),_;function m(x){h&&h((x-r.offset)/r.count)}function p(x,y,v,M=null,w=0){if(!g&&w>=o&&(g=!0,a&&console.warn(`BVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`)),v<=l||w>=o)return m(y+v),x.offset=y,x.count=v,x;const E=nw(x.boundingData,M,t,y,v,c);if(E.axis===-1)return m(y+v),x.offset=y,x.count=v,x;const C=sw(d,u,t,y,v,E);if(C===y||C===y+v)m(y+v),x.offset=y,x.count=v;else{x.splitAxis=E.axis;const S=new ac,b=y,R=C-y;x.left=S,oc(t,b,R,S.boundingData,f),p(S,b,R,f,w+1);const L=new ac,P=C,D=v-R;x.right=L,oc(t,P,D,L.boundingData,f),p(L,P,D,f,w+1)}return x}}function lw(s,t){const e=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,n=s.getRootRanges(t.range),i=n[0],r=n[n.length-1],o={offset:i.offset,count:r.offset+r.count-i.offset},a=new Float32Array(6*o.count);a.offset=o.offset,s.computePrimitiveBounds(o.offset,o.count,a),s._roots=n.map(l=>{const c=aw(s,a,l.offset,l.count,t,o),h=Eh(c),d=new e(tn*h);return ow(0,c,d),d})}class cu{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}class cw{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const t=[];let e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}}const Me=new cw;let rs,Sr;const hr=[],ma=new cu(()=>new Ue);function hw(s,t,e,n,i,r){rs=ma.getPrimitive(),Sr=ma.getPrimitive(),hr.push(rs,Sr),Me.setBuffer(s._roots[t]);const o=Th(0,s.geometry,e,n,i,r);Me.clearBuffer(),ma.releasePrimitive(rs),ma.releasePrimitive(Sr),hr.pop(),hr.pop();const a=hr.length;return a>0&&(Sr=hr[a-1],rs=hr[a-2]),o}function Th(s,t,e,n,i=null,r=0,o=0){const{float32Array:a,uint16Array:l,uint32Array:c}=Me;let h=s*2;if(ke(h,l)){const g=en(s,c),_=an(h,l);return Te(s,a,rs),n(g,_,!1,o,r+s/ze,rs)}else{let L=function(D){const{uint16Array:B,uint32Array:U}=Me;let k=D*2;for(;!ke(k,B);)D=We(D),k=D*2;return en(D,U)},P=function(D){const{uint16Array:B,uint32Array:U}=Me;let k=D*2;for(;!ke(k,B);)D=Xe(D,U),k=D*2;return en(D,U)+an(k,B)};var u=L,f=P;const g=We(s),_=Xe(s,c);let m=g,p=_,x,y,v,M;if(i&&(v=rs,M=Sr,Te(m,a,v),Te(p,a,M),x=i(v),y=i(M),y<x)){m=_,p=g;const D=x;x=y,y=D,v=M}v||(v=rs,Te(m,a,v));const w=ke(m*2,l),E=e(v,w,x,o+1,r+m/ze);let C;if(E===cf){const D=L(m),U=P(m)-D;C=n(D,U,!0,o+1,r+m/ze,v)}else C=E&&Th(m,t,e,n,i,r,o+1);if(C)return!0;M=Sr,Te(p,a,M);const S=ke(p*2,l),b=e(M,S,y,o+1,r+p/ze);let R;if(b===cf){const D=L(p),U=P(p)-D;R=n(D,U,!0,o+1,r+p/ze,M)}else R=b&&Th(p,t,e,n,i,r,o+1);return!!R}}const yo=new Me.constructor,nl=new Me.constructor,es=new cu(()=>new Ue),ur=new Ue,dr=new Ue,lc=new Ue,cc=new Ue;let hc=!1;function uw(s,t,e,n){if(hc)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");hc=!0;const i=s._roots,r=t._roots;let o,a=0,l=0;const c=new Xt().copy(e).invert();for(let h=0,d=i.length;h<d;h++){yo.setBuffer(i[h]),l=0;const u=es.getPrimitive();Te(0,yo.float32Array,u),u.applyMatrix4(c);for(let f=0,g=r.length;f<g&&(nl.setBuffer(r[f]),o=$n(0,0,e,c,n,a,l,0,0,u),nl.clearBuffer(),l+=r[f].byteLength/tn,!o);f++);if(es.releasePrimitive(u),yo.clearBuffer(),a+=i[h].byteLength/tn,o)break}return hc=!1,o}function $n(s,t,e,n,i,r=0,o=0,a=0,l=0,c=null,h=!1){let d,u;h?(d=nl,u=yo):(d=yo,u=nl);const f=d.float32Array,g=d.uint32Array,_=d.uint16Array,m=u.float32Array,p=u.uint32Array,x=u.uint16Array,y=s*2,v=t*2,M=ke(y,_),w=ke(v,x);let E=!1;if(w&&M)h?E=i(en(t,p),an(t*2,x),en(s,g),an(s*2,_),l,o+t/ze,a,r+s/ze):E=i(en(s,g),an(s*2,_),en(t,p),an(t*2,x),a,r+s/ze,l,o+t/ze);else if(w){const C=es.getPrimitive();Te(t,m,C),C.applyMatrix4(e);const S=We(s),b=Xe(s,g);Te(S,f,ur),Te(b,f,dr);const R=C.intersectsBox(ur),L=C.intersectsBox(dr);E=R&&$n(t,S,n,e,i,o,r,l,a+1,C,!h)||L&&$n(t,b,n,e,i,o,r,l,a+1,C,!h),es.releasePrimitive(C)}else{const C=We(t),S=Xe(t,p);Te(C,m,lc),Te(S,m,cc);const b=c.intersectsBox(lc),R=c.intersectsBox(cc);if(b&&R)E=$n(s,C,e,n,i,r,o,a,l+1,c,h)||$n(s,S,e,n,i,r,o,a,l+1,c,h);else if(b)if(M)E=$n(s,C,e,n,i,r,o,a,l+1,c,h);else{const L=es.getPrimitive();L.copy(lc).applyMatrix4(e);const P=We(s),D=Xe(s,g);Te(P,f,ur),Te(D,f,dr);const B=L.intersectsBox(ur),U=L.intersectsBox(dr);E=B&&$n(C,P,n,e,i,o,r,l,a+1,L,!h)||U&&$n(C,D,n,e,i,o,r,l,a+1,L,!h),es.releasePrimitive(L)}else if(R)if(M)E=$n(s,S,e,n,i,r,o,a,l+1,c,h);else{const L=es.getPrimitive();L.copy(cc).applyMatrix4(e);const P=We(s),D=Xe(s,g);Te(P,f,ur),Te(D,f,dr);const B=L.intersectsBox(ur),U=L.intersectsBox(dr);E=B&&$n(S,P,n,e,i,o,r,l,a+1,L,!h)||U&&$n(S,D,n,e,i,o,r,l,a+1,L,!h),es.releasePrimitive(L)}}return E}const pf=new Ue,fr=new Float32Array(6);class dw{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(t){t={...Wp,...t},lw(this,t)}getRootRanges(){throw new Error("BVH: getRootRanges() not implemented")}writePrimitiveBounds(){throw new Error("BVH: writePrimitiveBounds() not implemented")}writePrimitiveRangeBounds(t,e,n,i){let r=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,h=-1/0;for(let d=t,u=t+e;d<u;d++){this.writePrimitiveBounds(d,fr,0);const[f,g,_,m,p,x]=fr;f<r&&(r=f),m>l&&(l=m),g<o&&(o=g),p>c&&(c=p),_<a&&(a=_),x>h&&(h=x)}return n[i+0]=r,n[i+1]=o,n[i+2]=a,n[i+3]=l,n[i+4]=c,n[i+5]=h,n}computePrimitiveBounds(t,e,n){const i=n.offset||0;for(let r=t,o=t+e;r<o;r++){this.writePrimitiveBounds(r,fr,0);const[a,l,c,h,d,u]=fr,f=(a+h)/2,g=(l+d)/2,_=(c+u)/2,m=(h-a)/2,p=(d-l)/2,x=(u-c)/2,y=(r-i)*6;n[y+0]=f,n[y+1]=m+(Math.abs(f)+m)*Ga,n[y+2]=g,n[y+3]=p+(Math.abs(g)+p)*Ga,n[y+4]=_,n[y+5]=x+(Math.abs(_)+x)*Ga}return n}shiftPrimitiveOffsets(t){const e=this._indirectBuffer;if(e)for(let n=0,i=e.length;n<i;n++)e[n]+=t;else{const n=this._roots;for(let i=0;i<n.length;i++){const r=n[i],o=new Uint32Array(r),a=new Uint16Array(r),l=r.byteLength/tn;for(let c=0;c<l;c++){const h=ze*c,d=2*h;ke(d,a)&&(o[h+6]+=t)}}}}traverse(t,e=0){const n=this._roots[e],i=new Uint32Array(n),r=new Uint16Array(n);o(0);function o(a,l=0){const c=a*2,h=ke(c,r);if(h){const d=i[a+6],u=r[c+14];t(l,h,new Float32Array(n,a*4,6),d,u)}else{const d=We(a),u=Xe(a,i),f=lu(a,i);t(l,h,new Float32Array(n,a*4,6),f)||(o(d,l+1),o(u,l+1))}}}refit(){const t=this._roots;for(let e=0,n=t.length;e<n;e++){const i=t[e],r=new Uint32Array(i),o=new Uint16Array(i),a=new Float32Array(i),l=i.byteLength/tn;for(let c=l-1;c>=0;c--){const h=c*ze,d=h*2;if(ke(d,o)){const f=en(h,r),g=an(d,o);this.writePrimitiveRangeBounds(f,g,fr,0),a.set(fr,h)}else{const f=We(h),g=Xe(h,r);for(let _=0;_<3;_++){const m=a[f+_],p=a[f+_+3],x=a[g+_],y=a[g+_+3];a[h+_]=m<x?m:x,a[h+_+3]=p>y?p:y}}}}}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{Te(0,new Float32Array(n),pf),t.union(pf)}),t}shapecast(t){let{boundsTraverseOrder:e,intersectsBounds:n,intersectsRange:i,intersectsPrimitive:r,scratchPrimitive:o,iterate:a}=t;if(i&&r){const d=i;i=(u,f,g,_,m)=>d(u,f,g,_,m)?!0:a(u,f,this,r,g,_,o)}else i||(r?i=(d,u,f,g)=>a(d,u,this,r,f,g,o):i=(d,u,f)=>f);let l=!1,c=0;const h=this._roots;for(let d=0,u=h.length;d<u;d++){const f=h[d];if(l=hw(this,d,n,i,e,c),l)break;c+=f.byteLength/tn}return l}bvhcast(t,e,n){let{intersectsRanges:i}=n;return uw(this,t,e,i)}}function fw(){return typeof SharedArrayBuffer<"u"}function hu(s){return s.index?s.index.count:s.attributes.position.count}function dl(s){return hu(s)/3}function pw(s,t=ArrayBuffer){return s>65535?new Uint32Array(new t(4*s)):new Uint16Array(new t(2*s))}function mw(s,t){if(!s.index){const e=s.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=pw(e,n);s.setIndex(new $e(i,1));for(let r=0;r<e;r++)i[r]=r}}function gw(s,t,e){const n=hu(s)/e,i=t||s.drawRange,r=i.start/e,o=(i.start+i.count)/e,a=Math.max(0,r),l=Math.min(n,o)-a;return{offset:Math.floor(a),count:Math.floor(l)}}function xw(s,t){return s.groups.map(e=>({offset:e.start/t,count:e.count/t}))}function mf(s,t,e){const n=gw(s,t,e),i=xw(s,e);if(!i.length)return[n];const r=[],o=n.offset,a=n.offset+n.count,l=hu(s)/e,c=[];for(const u of i){const{offset:f,count:g}=u,_=f,m=isFinite(g)?g:l-f,p=f+m;_<a&&p>o&&(c.push({pos:Math.max(o,_),isStart:!0}),c.push({pos:Math.min(a,p),isStart:!1}))}c.sort((u,f)=>u.pos!==f.pos?u.pos-f.pos:u.type==="end"?-1:1);let h=0,d=null;for(const u of c){const f=u.pos;h!==0&&f!==d&&r.push({offset:d,count:f-d}),h+=u.isStart?1:-1,d=f}return r}function _w(s,t){const e=s[s.length-1],n=e.offset+e.count>2**16,i=s.reduce((c,h)=>c+h.count,0),r=n?4:2,o=t?new SharedArrayBuffer(i*r):new ArrayBuffer(i*r),a=n?new Uint32Array(o):new Uint16Array(o);let l=0;for(let c=0;c<s.length;c++){const{offset:h,count:d}=s[c];for(let u=0;u<d;u++)a[l+u]=h+u;l+=d}return a}class vw extends dw{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(t){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(t){}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(e.useSharedArrayBuffer&&!fw())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=t,this.resolvePrimitiveIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,e={...Wp,...e},e[au]||this.init(e)}init(t){const{geometry:e,primitiveStride:n}=this;if(t.indirect){const i=mf(e,t.range,n),r=_w(i,t.useSharedArrayBuffer);this._indirectBuffer=r}else mw(e,t);super.init(t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new Ue))}getRootRanges(t){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:mf(this.geometry,t,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}}class Vi{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,i=-1/0;for(let r=0,o=t.length;r<o;r++){const l=t[r][e];n=l<n?l:n,i=l>i?l:i}this.min=n,this.max=i}setFromPoints(t,e){let n=1/0,i=-1/0;for(let r=0,o=e.length;r<o;r++){const a=e[r],l=t.dot(a);n=l<n?l:n,i=l>i?l:i}this.min=n,this.max=i}isSeparated(t){return this.min>t.max||t.min>this.max}}Vi.prototype.setFromBox=(function(){const s=new N;return function(e,n){const i=n.min,r=n.max;let o=1/0,a=-1/0;for(let l=0;l<=1;l++)for(let c=0;c<=1;c++)for(let h=0;h<=1;h++){s.x=i.x*l+r.x*(1-l),s.y=i.y*c+r.y*(1-c),s.z=i.z*h+r.z*(1-h);const d=e.dot(s);o=Math.min(d,o),a=Math.max(d,a)}this.min=o,this.max=a}})();const yw=(function(){const s=new N,t=new N,e=new N;return function(i,r,o){const a=i.start,l=s,c=r.start,h=t;e.subVectors(a,c),s.subVectors(i.end,i.start),t.subVectors(r.end,r.start);const d=e.dot(h),u=h.dot(l),f=h.dot(h),g=e.dot(l),m=l.dot(l)*f-u*u;let p,x;m!==0?p=(d*u-g*f)/m:p=0,x=(d+p*u)/f,o.x=p,o.y=x}})(),uu=(function(){const s=new Pt,t=new N,e=new N;return function(i,r,o,a){yw(i,r,s);let l=s.x,c=s.y;if(l>=0&&l<=1&&c>=0&&c<=1){i.at(l,o),r.at(c,a);return}else if(l>=0&&l<=1){c<0?r.at(0,a):r.at(1,a),i.closestPointToPoint(a,!0,o);return}else if(c>=0&&c<=1){l<0?i.at(0,o):i.at(1,o),r.closestPointToPoint(o,!0,a);return}else{let h;l<0?h=i.start:h=i.end;let d;c<0?d=r.start:d=r.end;const u=t,f=e;if(i.closestPointToPoint(d,!0,t),r.closestPointToPoint(h,!0,e),u.distanceToSquared(d)<=f.distanceToSquared(h)){o.copy(u),a.copy(d);return}else{o.copy(h),a.copy(f);return}}}})(),Mw=(function(){const s=new N,t=new N,e=new Fn,n=new Vn;return function(r,o){const{radius:a,center:l}=r,{a:c,b:h,c:d}=o;if(n.start=c,n.end=h,n.closestPointToPoint(l,!0,s).distanceTo(l)<=a||(n.start=c,n.end=d,n.closestPointToPoint(l,!0,s).distanceTo(l)<=a)||(n.start=h,n.end=d,n.closestPointToPoint(l,!0,s).distanceTo(l)<=a))return!0;const _=o.getPlane(e);if(Math.abs(_.distanceToPoint(l))<=a){const p=_.projectPoint(l,t);if(o.containsPoint(p))return!0}return!1}})(),Sw=["x","y","z"],Ni=1e-15,gf=Ni*Ni;function In(s){return Math.abs(s)<Ni}class Gn extends ye{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new N),this.satBounds=new Array(4).fill().map(()=>new Vi),this.points=[this.a,this.b,this.c],this.plane=new Fn,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new Vn,this.needsUpdate=!0}intersectsSphere(t){return Mw(t,this)}update(){const t=this.a,e=this.b,n=this.c,i=this.points,r=this.satAxes,o=this.satBounds,a=r[0],l=o[0];this.getNormal(a),l.setFromPoints(a,i);const c=r[1],h=o[1];c.subVectors(t,e),h.setFromPoints(c,i);const d=r[2],u=o[2];d.subVectors(e,n),u.setFromPoints(d,i);const f=r[3],g=o[3];f.subVectors(n,t),g.setFromPoints(f,i);const _=c.length(),m=d.length(),p=f.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,_<Ni?m<Ni||p<Ni?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(n)):m<Ni?p<Ni?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(t)):p<Ni&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(e)),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}}Gn.prototype.closestPointToSegment=(function(){const s=new N,t=new N,e=new Vn;return function(i,r=null,o=null){const{start:a,end:l}=i,c=this.points;let h,d=1/0;for(let u=0;u<3;u++){const f=(u+1)%3;e.start.copy(c[u]),e.end.copy(c[f]),uu(e,i,s,t),h=s.distanceToSquared(t),h<d&&(d=h,r&&r.copy(s),o&&o.copy(t))}return this.closestPointToPoint(a,s),h=a.distanceToSquared(s),h<d&&(d=h,r&&r.copy(s),o&&o.copy(a)),this.closestPointToPoint(l,s),h=l.distanceToSquared(s),h<d&&(d=h,r&&r.copy(s),o&&o.copy(l)),Math.sqrt(d)}})();Gn.prototype.intersectsTriangle=(function(){const s=new Gn,t=new Vi,e=new Vi,n=new N,i=new N,r=new N,o=new N,a=new Vn,l=new Vn,c=new N,h=new Pt,d=new Pt;function u(y,v,M,w){const E=n;!y.isDegenerateIntoPoint&&!y.isDegenerateIntoSegment?E.copy(y.plane.normal):E.copy(v.plane.normal);const C=y.satBounds,S=y.satAxes;for(let L=1;L<4;L++){const P=C[L],D=S[L];if(t.setFromPoints(D,v.points),P.isSeparated(t)||(o.copy(E).cross(D),t.setFromPoints(o,y.points),e.setFromPoints(o,v.points),t.isSeparated(e)))return!1}const b=v.satBounds,R=v.satAxes;for(let L=1;L<4;L++){const P=b[L],D=R[L];if(t.setFromPoints(D,y.points),P.isSeparated(t)||(o.crossVectors(E,D),t.setFromPoints(o,y.points),e.setFromPoints(o,v.points),t.isSeparated(e)))return!1}return M&&(w||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),M.start.set(0,0,0),M.end.set(0,0,0)),!0}function f(y,v,M,w,E,C,S,b,R,L,P){let D=S/(S-b);L.x=w+(E-w)*D,P.start.subVectors(v,y).multiplyScalar(D).add(y),D=S/(S-R),L.y=w+(C-w)*D,P.end.subVectors(M,y).multiplyScalar(D).add(y)}function g(y,v,M,w,E,C,S,b,R,L,P){if(E>0)f(y.c,y.a,y.b,w,v,M,R,S,b,L,P);else if(C>0)f(y.b,y.a,y.c,M,v,w,b,S,R,L,P);else if(b*R>0||S!=0)f(y.a,y.b,y.c,v,M,w,S,b,R,L,P);else if(b!=0)f(y.b,y.a,y.c,M,v,w,b,S,R,L,P);else if(R!=0)f(y.c,y.a,y.b,w,v,M,R,S,b,L,P);else return!0;return!1}function _(y,v,M,w){const E=v.degenerateSegment,C=y.plane.distanceToPoint(E.start),S=y.plane.distanceToPoint(E.end);return In(C)?In(S)?u(y,v,M,w):(M&&(M.start.copy(E.start),M.end.copy(E.start)),y.containsPoint(E.start)):In(S)?(M&&(M.start.copy(E.end),M.end.copy(E.end)),y.containsPoint(E.end)):y.plane.intersectLine(E,n)!=null?(M&&(M.start.copy(n),M.end.copy(n)),y.containsPoint(n)):!1}function m(y,v,M){const w=v.a;return In(y.plane.distanceToPoint(w))&&y.containsPoint(w)?(M&&(M.start.copy(w),M.end.copy(w)),!0):!1}function p(y,v,M){const w=y.degenerateSegment,E=v.a;return w.closestPointToPoint(E,!0,n),E.distanceToSquared(n)<gf?(M&&(M.start.copy(E),M.end.copy(E)),!0):!1}function x(y,v,M,w){if(y.isDegenerateIntoSegment)if(v.isDegenerateIntoSegment){const E=y.degenerateSegment,C=v.degenerateSegment,S=i,b=r;E.delta(S),C.delta(b);const R=n.subVectors(C.start,E.start),L=S.x*b.y-S.y*b.x;if(In(L))return!1;const P=(R.x*b.y-R.y*b.x)/L,D=-(S.x*R.y-S.y*R.x)/L;if(P<0||P>1||D<0||D>1)return!1;const B=E.start.z+S.z*P,U=C.start.z+b.z*D;return In(B-U)?(M&&(M.start.copy(E.start).addScaledVector(S,P),M.end.copy(E.start).addScaledVector(S,P)),!0):!1}else return v.isDegenerateIntoPoint?p(y,v,M):_(v,y,M,w);else{if(y.isDegenerateIntoPoint)return v.isDegenerateIntoPoint?v.a.distanceToSquared(y.a)<gf?(M&&(M.start.copy(y.a),M.end.copy(y.a)),!0):!1:v.isDegenerateIntoSegment?p(v,y,M):m(v,y,M);if(v.isDegenerateIntoPoint)return m(y,v,M);if(v.isDegenerateIntoSegment)return _(y,v,M,w)}}return function(v,M=null,w=!1){this.needsUpdate&&this.update(),v.isExtendedTriangle?v.needsUpdate&&v.update():(s.copy(v),s.update(),v=s);const E=x(this,v,M,w);if(E!==void 0)return E;const C=this.plane,S=v.plane;let b=S.distanceToPoint(this.a),R=S.distanceToPoint(this.b),L=S.distanceToPoint(this.c);In(b)&&(b=0),In(R)&&(R=0),In(L)&&(L=0);const P=b*R,D=b*L;if(P>0&&D>0)return!1;let B=C.distanceToPoint(v.a),U=C.distanceToPoint(v.b),k=C.distanceToPoint(v.c);In(B)&&(B=0),In(U)&&(U=0),In(k)&&(k=0);const H=B*U,q=B*k;if(H>0&&q>0)return!1;i.copy(C.normal),r.copy(S.normal);const K=i.cross(r);let Q=0,et=Math.abs(K.x);const yt=Math.abs(K.y);yt>et&&(et=yt,Q=1),Math.abs(K.z)>et&&(Q=2);const qt=Sw[Q],j=this.a[qt],nt=this.b[qt],_t=this.c[qt],zt=v.a[qt],St=v.b[qt],$t=v.c[qt];if(g(this,j,nt,_t,P,D,b,R,L,h,a))return u(this,v,M,w);if(g(v,zt,St,$t,H,q,B,U,k,d,l))return u(this,v,M,w);if(h.y<h.x){const we=h.y;h.y=h.x,h.x=we,c.copy(a.start),a.start.copy(a.end),a.end.copy(c)}if(d.y<d.x){const we=d.y;d.y=d.x,d.x=we,c.copy(l.start),l.start.copy(l.end),l.end.copy(c)}return h.y<d.x||d.y<h.x?!1:(M&&(d.x>h.x?M.start.copy(l.start):M.start.copy(a.start),d.y<h.y?M.end.copy(l.end):M.end.copy(a.end)),!0)}})();Gn.prototype.distanceToPoint=(function(){const s=new N;return function(e){return this.closestPointToPoint(e,s),e.distanceTo(s)}})();Gn.prototype.distanceToTriangle=(function(){const s=new N,t=new N,e=["a","b","c"],n=new Vn,i=new Vn;return function(o,a=null,l=null){const c=a||l?n:null;if(this.intersectsTriangle(o,c))return(a||l)&&(a&&c.getCenter(a),l&&c.getCenter(l)),0;let h=1/0;for(let d=0;d<3;d++){let u;const f=e[d],g=o[f];this.closestPointToPoint(g,s),u=g.distanceToSquared(s),u<h&&(h=u,a&&a.copy(s),l&&l.copy(g));const _=this[f];o.closestPointToPoint(_,s),u=_.distanceToSquared(s),u<h&&(h=u,a&&a.copy(_),l&&l.copy(s))}for(let d=0;d<3;d++){const u=e[d],f=e[(d+1)%3];n.set(this[u],this[f]);for(let g=0;g<3;g++){const _=e[g],m=e[(g+1)%3];i.set(o[_],o[m]),uu(n,i,s,t);const p=s.distanceToSquared(t);p<h&&(h=p,a&&a.copy(s),l&&l.copy(t))}}return Math.sqrt(h)}})();class un{constructor(t,e,n){this.isOrientedBox=!0,this.min=new N,this.max=new N,this.matrix=new Xt,this.invMatrix=new Xt,this.points=new Array(8).fill().map(()=>new N),this.satAxes=new Array(3).fill().map(()=>new N),this.satBounds=new Array(3).fill().map(()=>new Vi),this.alignedSatBounds=new Array(3).fill().map(()=>new Vi),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}un.prototype.update=(function(){return function(){const t=this.matrix,e=this.min,n=this.max,i=this.points;for(let c=0;c<=1;c++)for(let h=0;h<=1;h++)for(let d=0;d<=1;d++){const u=1*c|2*h|4*d,f=i[u];f.x=c?n.x:e.x,f.y=h?n.y:e.y,f.z=d?n.z:e.z,f.applyMatrix4(t)}const r=this.satBounds,o=this.satAxes,a=i[0];for(let c=0;c<3;c++){const h=o[c],d=r[c],u=1<<c,f=i[u];h.subVectors(a,f),d.setFromPoints(h,i)}const l=this.alignedSatBounds;l[0].setFromPointsField(i,"x"),l[1].setFromPointsField(i,"y"),l[2].setFromPointsField(i,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();un.prototype.intersectsBox=(function(){const s=new Vi;return function(e){this.needsUpdate&&this.update();const n=e.min,i=e.max,r=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(s.min=n.x,s.max=i.x,a[0].isSeparated(s)||(s.min=n.y,s.max=i.y,a[1].isSeparated(s))||(s.min=n.z,s.max=i.z,a[2].isSeparated(s)))return!1;for(let l=0;l<3;l++){const c=o[l],h=r[l];if(s.setFromBox(c,e),h.isSeparated(s))return!1}return!0}})();un.prototype.intersectsTriangle=(function(){const s=new Gn,t=new Array(3),e=new Vi,n=new Vi,i=new N;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(s.copy(o),s.update(),o=s);const a=this.satBounds,l=this.satAxes;t[0]=o.a,t[1]=o.b,t[2]=o.c;for(let u=0;u<3;u++){const f=a[u],g=l[u];if(e.setFromPoints(g,t),f.isSeparated(e))return!1}const c=o.satBounds,h=o.satAxes,d=this.points;for(let u=0;u<3;u++){const f=c[u],g=h[u];if(e.setFromPoints(g,d),f.isSeparated(e))return!1}for(let u=0;u<3;u++){const f=l[u];for(let g=0;g<4;g++){const _=h[g];if(i.crossVectors(f,_),e.setFromPoints(i,t),n.setFromPoints(i,d),e.isSeparated(n))return!1}}return!0}})();un.prototype.closestPointToPoint=(function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}})();un.prototype.distanceToPoint=(function(){const s=new N;return function(e){return this.closestPointToPoint(e,s),e.distanceTo(s)}})();un.prototype.distanceToBox=(function(){const s=["x","y","z"],t=new Array(12).fill().map(()=>new Vn),e=new Array(12).fill().map(()=>new Vn),n=new N,i=new N;return function(o,a=0,l=null,c=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(l||c)&&(o.getCenter(i),this.closestPointToPoint(i,n),o.closestPointToPoint(n,i),l&&l.copy(n),c&&c.copy(i)),0;const h=a*a,d=o.min,u=o.max,f=this.points;let g=1/0;for(let m=0;m<8;m++){const p=f[m];i.copy(p).clamp(d,u);const x=p.distanceToSquared(i);if(x<g&&(g=x,l&&l.copy(p),c&&c.copy(i),x<h))return Math.sqrt(x)}let _=0;for(let m=0;m<3;m++)for(let p=0;p<=1;p++)for(let x=0;x<=1;x++){const y=(m+1)%3,v=(m+2)%3,M=p<<y|x<<v,w=1<<m|p<<y|x<<v,E=f[M],C=f[w];t[_].set(E,C);const b=s[m],R=s[y],L=s[v],P=e[_],D=P.start,B=P.end;D[b]=d[b],D[R]=p?d[R]:u[R],D[L]=x?d[L]:u[R],B[b]=u[b],B[R]=p?d[R]:u[R],B[L]=x?d[L]:u[R],_++}for(let m=0;m<=1;m++)for(let p=0;p<=1;p++)for(let x=0;x<=1;x++){i.x=m?u.x:d.x,i.y=p?u.y:d.y,i.z=x?u.z:d.z,this.closestPointToPoint(i,n);const y=i.distanceToSquared(n);if(y<g&&(g=y,l&&l.copy(n),c&&c.copy(i),y<h))return Math.sqrt(y)}for(let m=0;m<12;m++){const p=t[m];for(let x=0;x<12;x++){const y=e[x];uu(p,y,n,i);const v=n.distanceToSquared(i);if(v<g&&(g=v,l&&l.copy(n),c&&c.copy(i),v<h))return Math.sqrt(v)}}return Math.sqrt(g)}})();class bw extends cu{constructor(){super(()=>new Gn)}}const zn=new bw,io=new N,uc=new N;function ww(s,t,e={},n=0,i=1/0){const r=n*n,o=i*i;let a=1/0,l=null;if(s.shapecast({boundsTraverseOrder:h=>(io.copy(t).clamp(h.min,h.max),io.distanceToSquared(t)),intersectsBounds:(h,d,u)=>u<a&&u<o,intersectsTriangle:(h,d)=>{h.closestPointToPoint(t,io);const u=t.distanceToSquared(io);return u<a&&(uc.copy(io),a=u,l=d),u<r}}),a===1/0)return null;const c=Math.sqrt(a);return e.point?e.point.copy(uc):e.point=uc.clone(),e.distance=c,e.faceIndex=l,e}const ga=parseInt(Co)>=169,Ew=parseInt(Co)<=161,Ss=new N,bs=new N,ws=new N,xa=new Pt,_a=new Pt,va=new Pt,xf=new N,_f=new N,vf=new N,so=new N;function Aw(s,t,e,n,i,r,o,a){let l;if(r===Ye?l=s.intersectTriangle(n,e,t,!0,i):l=s.intersectTriangle(t,e,n,r!==wn,i),l===null)return null;const c=s.origin.distanceTo(i);return c<o||c>a?null:{distance:c,point:i.clone()}}function yf(s,t,e,n,i,r,o,a,l,c,h){Ss.fromBufferAttribute(t,r),bs.fromBufferAttribute(t,o),ws.fromBufferAttribute(t,a);const d=Aw(s,Ss,bs,ws,so,l,c,h);if(d){if(n){xa.fromBufferAttribute(n,r),_a.fromBufferAttribute(n,o),va.fromBufferAttribute(n,a),d.uv=new Pt;const f=ye.getInterpolation(so,Ss,bs,ws,xa,_a,va,d.uv);ga||(d.uv=f)}if(i){xa.fromBufferAttribute(i,r),_a.fromBufferAttribute(i,o),va.fromBufferAttribute(i,a),d.uv1=new Pt;const f=ye.getInterpolation(so,Ss,bs,ws,xa,_a,va,d.uv1);ga||(d.uv1=f),Ew&&(d.uv2=d.uv1)}if(e){xf.fromBufferAttribute(e,r),_f.fromBufferAttribute(e,o),vf.fromBufferAttribute(e,a),d.normal=new N;const f=ye.getInterpolation(so,Ss,bs,ws,xf,_f,vf,d.normal);d.normal.dot(s.direction)>0&&d.normal.multiplyScalar(-1),ga||(d.normal=f)}const u={a:r,b:o,c:a,normal:new N,materialIndex:0};if(ye.getNormal(Ss,bs,ws,u.normal),d.face=u,d.faceIndex=r,ga){const f=new N;ye.getBarycoord(so,Ss,bs,ws,f),d.barycoord=f}}return d}function Mf(s){return s&&s.isMaterial?s.side:s}function fl(s,t,e,n,i,r,o){const a=n*3;let l=a+0,c=a+1,h=a+2;const{index:d,groups:u}=s;s.index&&(l=d.getX(l),c=d.getX(c),h=d.getX(h));const{position:f,normal:g,uv:_,uv1:m}=s.attributes;if(Array.isArray(t)){const p=n*3;for(let x=0,y=u.length;x<y;x++){const{start:v,count:M,materialIndex:w}=u[x];if(p>=v&&p<v+M){const E=Mf(t[w]),C=yf(e,f,g,_,m,l,c,h,E,r,o);if(C)if(C.faceIndex=n,C.face.materialIndex=w,i)i.push(C);else return C}}}else{const p=Mf(t),x=yf(e,f,g,_,m,l,c,h,p,r,o);if(x)if(x.faceIndex=n,x.face.materialIndex=0,i)i.push(x);else return x}return null}function Fe(s,t,e,n){const i=s.a,r=s.b,o=s.c;let a=t,l=t+1,c=t+2;e&&(a=e.getX(a),l=e.getX(l),c=e.getX(c)),i.x=n.getX(a),i.y=n.getY(a),i.z=n.getZ(a),r.x=n.getX(l),r.y=n.getY(l),r.z=n.getZ(l),o.x=n.getX(c),o.y=n.getY(c),o.z=n.getZ(c)}function Tw(s,t,e,n,i,r,o,a){const{geometry:l,_indirectBuffer:c}=s;for(let h=n,d=n+i;h<d;h++)fl(l,t,e,h,r,o,a)}function Cw(s,t,e,n,i,r,o){const{geometry:a,_indirectBuffer:l}=s;let c=1/0,h=null;for(let d=n,u=n+i;d<u;d++){let f;f=fl(a,t,e,d,null,r,o),f&&f.distance<c&&(h=f,c=f.distance)}return h}function Rw(s,t,e,n,i,r,o){const{geometry:a}=e,{index:l}=a,c=a.attributes.position;for(let h=s,d=t+s;h<d;h++){let u;if(u=h,Fe(o,u*3,l,c),o.needsUpdate=!0,n(o,u,i,r))return!0}return!1}function Pw(s,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=s.geometry,n=e.index?e.index.array:null,i=e.attributes.position;let r,o,a,l,c=0;const h=s._roots;for(let u=0,f=h.length;u<f;u++)r=h[u],o=new Uint32Array(r),a=new Uint16Array(r),l=new Float32Array(r),d(0,c),c+=r.byteLength;function d(u,f,g=!1){const _=u*2;if(ke(_,a)){const m=en(u,o),p=an(_,a);let x=1/0,y=1/0,v=1/0,M=-1/0,w=-1/0,E=-1/0;for(let C=3*m,S=3*(m+p);C<S;C++){let b=n[C];const R=i.getX(b),L=i.getY(b),P=i.getZ(b);R<x&&(x=R),R>M&&(M=R),L<y&&(y=L),L>w&&(w=L),P<v&&(v=P),P>E&&(E=P)}return l[u+0]!==x||l[u+1]!==y||l[u+2]!==v||l[u+3]!==M||l[u+4]!==w||l[u+5]!==E?(l[u+0]=x,l[u+1]=y,l[u+2]=v,l[u+3]=M,l[u+4]=w,l[u+5]=E,!0):!1}else{const m=We(u),p=Xe(u,o);let x=g,y=!1,v=!1;if(t){if(!x){const b=m/ze+f/tn,R=p/ze+f/tn;y=t.has(b),v=t.has(R),x=!y&&!v}}else y=!0,v=!0;const M=x||y,w=x||v;let E=!1;M&&(E=d(m,f,x));let C=!1;w&&(C=d(p,f,x));const S=E||C;if(S)for(let b=0;b<3;b++){const R=m+b,L=p+b,P=l[R],D=l[R+3],B=l[L],U=l[L+3];l[u+b]=P<B?P:B,l[u+b+3]=D>U?D:U}return S}}}function as(s,t,e,n,i){let r,o,a,l,c,h;const d=1/e.direction.x,u=1/e.direction.y,f=1/e.direction.z,g=e.origin.x,_=e.origin.y,m=e.origin.z;let p=t[s],x=t[s+3],y=t[s+1],v=t[s+3+1],M=t[s+2],w=t[s+3+2];return d>=0?(r=(p-g)*d,o=(x-g)*d):(r=(x-g)*d,o=(p-g)*d),u>=0?(a=(y-_)*u,l=(v-_)*u):(a=(v-_)*u,l=(y-_)*u),r>l||a>o||((a>r||isNaN(r))&&(r=a),(l<o||isNaN(o))&&(o=l),f>=0?(c=(M-m)*f,h=(w-m)*f):(c=(w-m)*f,h=(M-m)*f),r>h||c>o)?!1:((c>r||r!==r)&&(r=c),(h<o||o!==o)&&(o=h),r<=i&&o>=n)}function Iw(s,t,e,n,i,r,o,a){const{geometry:l,_indirectBuffer:c}=s;for(let h=n,d=n+i;h<d;h++){let u=c?c[h]:h;fl(l,t,e,u,r,o,a)}}function Lw(s,t,e,n,i,r,o){const{geometry:a,_indirectBuffer:l}=s;let c=1/0,h=null;for(let d=n,u=n+i;d<u;d++){let f;f=fl(a,t,e,l?l[d]:d,null,r,o),f&&f.distance<c&&(h=f,c=f.distance)}return h}function Dw(s,t,e,n,i,r,o){const{geometry:a}=e,{index:l}=a,c=a.attributes.position;for(let h=s,d=t+s;h<d;h++){let u;if(u=e.resolveTriangleIndex(h),Fe(o,u*3,l,c),o.needsUpdate=!0,n(o,u,i,r))return!0}return!1}function Nw(s,t,e,n,i,r,o){Me.setBuffer(s._roots[t]),Ch(0,s,e,n,i,r,o),Me.clearBuffer()}function Ch(s,t,e,n,i,r,o){const{float32Array:a,uint16Array:l,uint32Array:c}=Me,h=s*2;if(ke(h,l)){const u=en(s,c),f=an(h,l);Tw(t,e,n,u,f,i,r,o)}else{const u=We(s);as(u,a,n,r,o)&&Ch(u,t,e,n,i,r,o);const f=Xe(s,c);as(f,a,n,r,o)&&Ch(f,t,e,n,i,r,o)}}const Fw=["x","y","z"];function Uw(s,t,e,n,i,r){Me.setBuffer(s._roots[t]);const o=Rh(0,s,e,n,i,r);return Me.clearBuffer(),o}function Rh(s,t,e,n,i,r){const{float32Array:o,uint16Array:a,uint32Array:l}=Me;let c=s*2;if(ke(c,a)){const d=en(s,l),u=an(c,a);return Cw(t,e,n,d,u,i,r)}else{const d=lu(s,l),u=Fw[d],g=n.direction[u]>=0;let _,m;g?(_=We(s),m=Xe(s,l)):(_=Xe(s,l),m=We(s));const x=as(_,o,n,i,r)?Rh(_,t,e,n,i,r):null;if(x){const M=x.point[u];if(g?M<=o[m+d]:M>=o[m+d+3])return x}const v=as(m,o,n,i,r)?Rh(m,t,e,n,i,r):null;return x&&v?x.distance<=v.distance?x:v:x||v||null}}const ya=new Ue,pr=new Gn,mr=new Gn,ro=new Xt,Sf=new un,Ma=new un;function Bw(s,t,e,n){Me.setBuffer(s._roots[t]);const i=Ph(0,s,e,n);return Me.clearBuffer(),i}function Ph(s,t,e,n,i=null){const{float32Array:r,uint16Array:o,uint32Array:a}=Me;let l=s*2;if(i===null&&(e.boundingBox||e.computeBoundingBox(),Sf.set(e.boundingBox.min,e.boundingBox.max,n),i=Sf),ke(l,o)){const h=t.geometry,d=h.index,u=h.attributes.position,f=e.index,g=e.attributes.position,_=en(s,a),m=an(l,o);if(ro.copy(n).invert(),e.boundsTree)return Te(s,r,Ma),Ma.matrix.copy(ro),Ma.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:x=>Ma.intersectsBox(x),intersectsTriangle:x=>{x.a.applyMatrix4(n),x.b.applyMatrix4(n),x.c.applyMatrix4(n),x.needsUpdate=!0;for(let y=_*3,v=(m+_)*3;y<v;y+=3)if(Fe(mr,y,d,u),mr.needsUpdate=!0,x.intersectsTriangle(mr))return!0;return!1}});{const p=dl(e);for(let x=_*3,y=(m+_)*3;x<y;x+=3){Fe(pr,x,d,u),pr.a.applyMatrix4(ro),pr.b.applyMatrix4(ro),pr.c.applyMatrix4(ro),pr.needsUpdate=!0;for(let v=0,M=p*3;v<M;v+=3)if(Fe(mr,v,f,g),mr.needsUpdate=!0,pr.intersectsTriangle(mr))return!0}}}else{const h=We(s),d=Xe(s,a);return Te(h,r,ya),!!(i.intersectsBox(ya)&&Ph(h,t,e,n,i)||(Te(d,r,ya),i.intersectsBox(ya)&&Ph(d,t,e,n,i)))}}const Sa=new Xt,dc=new un,oo=new un,Ow=new N,zw=new N,kw=new N,Vw=new N;function Gw(s,t,e,n={},i={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),dc.set(t.boundingBox.min,t.boundingBox.max,e),dc.needsUpdate=!0;const a=s.geometry,l=a.attributes.position,c=a.index,h=t.attributes.position,d=t.index,u=zn.getPrimitive(),f=zn.getPrimitive();let g=Ow,_=zw,m=null,p=null;i&&(m=kw,p=Vw);let x=1/0,y=null,v=null;return Sa.copy(e).invert(),oo.matrix.copy(Sa),s.shapecast({boundsTraverseOrder:M=>dc.distanceToBox(M),intersectsBounds:(M,w,E)=>E<x&&E<o?(w&&(oo.min.copy(M.min),oo.max.copy(M.max),oo.needsUpdate=!0),!0):!1,intersectsRange:(M,w)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:C=>oo.distanceToBox(C),intersectsBounds:(C,S,b)=>b<x&&b<o,intersectsRange:(C,S)=>{for(let b=C,R=C+S;b<R;b++){Fe(f,3*b,d,h),f.a.applyMatrix4(e),f.b.applyMatrix4(e),f.c.applyMatrix4(e),f.needsUpdate=!0;for(let L=M,P=M+w;L<P;L++){Fe(u,3*L,c,l),u.needsUpdate=!0;const D=u.distanceToTriangle(f,g,m);if(D<x&&(_.copy(g),p&&p.copy(m),x=D,y=L,v=b),D<r)return!0}}}});{const E=dl(t);for(let C=0,S=E;C<S;C++){Fe(f,3*C,d,h),f.a.applyMatrix4(e),f.b.applyMatrix4(e),f.c.applyMatrix4(e),f.needsUpdate=!0;for(let b=M,R=M+w;b<R;b++){Fe(u,3*b,c,l),u.needsUpdate=!0;const L=u.distanceToTriangle(f,g,m);if(L<x&&(_.copy(g),p&&p.copy(m),x=L,y=b,v=C),L<r)return!0}}}}}),zn.releasePrimitive(u),zn.releasePrimitive(f),x===1/0?null:(n.point?n.point.copy(_):n.point=_.clone(),n.distance=x,n.faceIndex=y,i&&(i.point?i.point.copy(p):i.point=p.clone(),i.point.applyMatrix4(Sa),_.applyMatrix4(Sa),i.distance=_.sub(i.point).length(),i.faceIndex=v),n)}function Hw(s,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=s.geometry,n=e.index?e.index.array:null,i=e.attributes.position;let r,o,a,l,c=0;const h=s._roots;for(let u=0,f=h.length;u<f;u++)r=h[u],o=new Uint32Array(r),a=new Uint16Array(r),l=new Float32Array(r),d(0,c),c+=r.byteLength;function d(u,f,g=!1){const _=u*2;if(ke(_,a)){const m=en(u,o),p=an(_,a);let x=1/0,y=1/0,v=1/0,M=-1/0,w=-1/0,E=-1/0;for(let C=m,S=m+p;C<S;C++){const b=3*s.resolveTriangleIndex(C);for(let R=0;R<3;R++){let L=b+R;L=n?n[L]:L;const P=i.getX(L),D=i.getY(L),B=i.getZ(L);P<x&&(x=P),P>M&&(M=P),D<y&&(y=D),D>w&&(w=D),B<v&&(v=B),B>E&&(E=B)}}return l[u+0]!==x||l[u+1]!==y||l[u+2]!==v||l[u+3]!==M||l[u+4]!==w||l[u+5]!==E?(l[u+0]=x,l[u+1]=y,l[u+2]=v,l[u+3]=M,l[u+4]=w,l[u+5]=E,!0):!1}else{const m=We(u),p=Xe(u,o);let x=g,y=!1,v=!1;if(t){if(!x){const b=m/ze+f/tn,R=p/ze+f/tn;y=t.has(b),v=t.has(R),x=!y&&!v}}else y=!0,v=!0;const M=x||y,w=x||v;let E=!1;M&&(E=d(m,f,x));let C=!1;w&&(C=d(p,f,x));const S=E||C;if(S)for(let b=0;b<3;b++){const R=m+b,L=p+b,P=l[R],D=l[R+3],B=l[L],U=l[L+3];l[u+b]=P<B?P:B,l[u+b+3]=D>U?D:U}return S}}}function Ww(s,t,e,n,i,r,o){Me.setBuffer(s._roots[t]),Ih(0,s,e,n,i,r,o),Me.clearBuffer()}function Ih(s,t,e,n,i,r,o){const{float32Array:a,uint16Array:l,uint32Array:c}=Me,h=s*2;if(ke(h,l)){const u=en(s,c),f=an(h,l);Iw(t,e,n,u,f,i,r,o)}else{const u=We(s);as(u,a,n,r,o)&&Ih(u,t,e,n,i,r,o);const f=Xe(s,c);as(f,a,n,r,o)&&Ih(f,t,e,n,i,r,o)}}const Xw=["x","y","z"];function qw(s,t,e,n,i,r){Me.setBuffer(s._roots[t]);const o=Lh(0,s,e,n,i,r);return Me.clearBuffer(),o}function Lh(s,t,e,n,i,r){const{float32Array:o,uint16Array:a,uint32Array:l}=Me;let c=s*2;if(ke(c,a)){const d=en(s,l),u=an(c,a);return Lw(t,e,n,d,u,i,r)}else{const d=lu(s,l),u=Xw[d],g=n.direction[u]>=0;let _,m;g?(_=We(s),m=Xe(s,l)):(_=Xe(s,l),m=We(s));const x=as(_,o,n,i,r)?Lh(_,t,e,n,i,r):null;if(x){const M=x.point[u];if(g?M<=o[m+d]:M>=o[m+d+3])return x}const v=as(m,o,n,i,r)?Lh(m,t,e,n,i,r):null;return x&&v?x.distance<=v.distance?x:v:x||v||null}}const ba=new Ue,gr=new Gn,xr=new Gn,ao=new Xt,bf=new un,wa=new un;function Yw(s,t,e,n){Me.setBuffer(s._roots[t]);const i=Dh(0,s,e,n);return Me.clearBuffer(),i}function Dh(s,t,e,n,i=null){const{float32Array:r,uint16Array:o,uint32Array:a}=Me;let l=s*2;if(i===null&&(e.boundingBox||e.computeBoundingBox(),bf.set(e.boundingBox.min,e.boundingBox.max,n),i=bf),ke(l,o)){const h=t.geometry,d=h.index,u=h.attributes.position,f=e.index,g=e.attributes.position,_=en(s,a),m=an(l,o);if(ao.copy(n).invert(),e.boundsTree)return Te(s,r,wa),wa.matrix.copy(ao),wa.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:x=>wa.intersectsBox(x),intersectsTriangle:x=>{x.a.applyMatrix4(n),x.b.applyMatrix4(n),x.c.applyMatrix4(n),x.needsUpdate=!0;for(let y=_,v=m+_;y<v;y++)if(Fe(xr,3*t.resolveTriangleIndex(y),d,u),xr.needsUpdate=!0,x.intersectsTriangle(xr))return!0;return!1}});{const p=dl(e);for(let x=_,y=m+_;x<y;x++){const v=t.resolveTriangleIndex(x);Fe(gr,3*v,d,u),gr.a.applyMatrix4(ao),gr.b.applyMatrix4(ao),gr.c.applyMatrix4(ao),gr.needsUpdate=!0;for(let M=0,w=p*3;M<w;M+=3)if(Fe(xr,M,f,g),xr.needsUpdate=!0,gr.intersectsTriangle(xr))return!0}}}else{const h=We(s),d=Xe(s,a);return Te(h,r,ba),!!(i.intersectsBox(ba)&&Dh(h,t,e,n,i)||(Te(d,r,ba),i.intersectsBox(ba)&&Dh(d,t,e,n,i)))}}const Ea=new Xt,fc=new un,lo=new un,$w=new N,jw=new N,Zw=new N,Kw=new N;function Jw(s,t,e,n={},i={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),fc.set(t.boundingBox.min,t.boundingBox.max,e),fc.needsUpdate=!0;const a=s.geometry,l=a.attributes.position,c=a.index,h=t.attributes.position,d=t.index,u=zn.getPrimitive(),f=zn.getPrimitive();let g=$w,_=jw,m=null,p=null;i&&(m=Zw,p=Kw);let x=1/0,y=null,v=null;return Ea.copy(e).invert(),lo.matrix.copy(Ea),s.shapecast({boundsTraverseOrder:M=>fc.distanceToBox(M),intersectsBounds:(M,w,E)=>E<x&&E<o?(w&&(lo.min.copy(M.min),lo.max.copy(M.max),lo.needsUpdate=!0),!0):!1,intersectsRange:(M,w)=>{if(t.boundsTree){const E=t.boundsTree;return E.shapecast({boundsTraverseOrder:C=>lo.distanceToBox(C),intersectsBounds:(C,S,b)=>b<x&&b<o,intersectsRange:(C,S)=>{for(let b=C,R=C+S;b<R;b++){const L=E.resolveTriangleIndex(b);Fe(f,3*L,d,h),f.a.applyMatrix4(e),f.b.applyMatrix4(e),f.c.applyMatrix4(e),f.needsUpdate=!0;for(let P=M,D=M+w;P<D;P++){const B=s.resolveTriangleIndex(P);Fe(u,3*B,c,l),u.needsUpdate=!0;const U=u.distanceToTriangle(f,g,m);if(U<x&&(_.copy(g),p&&p.copy(m),x=U,y=P,v=b),U<r)return!0}}}})}else{const E=dl(t);for(let C=0,S=E;C<S;C++){Fe(f,3*C,d,h),f.a.applyMatrix4(e),f.b.applyMatrix4(e),f.c.applyMatrix4(e),f.needsUpdate=!0;for(let b=M,R=M+w;b<R;b++){const L=s.resolveTriangleIndex(b);Fe(u,3*L,c,l),u.needsUpdate=!0;const P=u.distanceToTriangle(f,g,m);if(P<x&&(_.copy(g),p&&p.copy(m),x=P,y=b,v=C),P<r)return!0}}}}}),zn.releasePrimitive(u),zn.releasePrimitive(f),x===1/0?null:(n.point?n.point.copy(_):n.point=_.clone(),n.distance=x,n.faceIndex=y,i&&(i.point?i.point.copy(p):i.point=p.clone(),i.point.applyMatrix4(Ea),_.applyMatrix4(Ea),i.distance=_.sub(i.point).length(),i.faceIndex=v),n)}function wf(s,t,e){return s===null?null:(s.point.applyMatrix4(t.matrixWorld),s.distance=s.point.distanceTo(e.ray.origin),s.object=t,s)}const Aa=new un,Ta=new Os,Ef=new N,Af=new Xt,Tf=new N,pc=["getX","getY","getZ"];class il extends vw{static serialize(t,e={}){e={cloneBuffers:!0,...e};const n=t.geometry,i=t._roots,r=t._indirectBuffer,o=n.getIndex(),a={version:1,roots:null,index:null,indirectBuffer:null};return e.cloneBuffers?(a.roots=i.map(l=>l.slice()),a.index=o?o.array.slice():null,a.indirectBuffer=r?r.slice():null):(a.roots=i,a.index=o?o.array:null,a.indirectBuffer=r),a}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};const{index:i,roots:r,indirectBuffer:o}=t;t.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),l(r));const a=new il(e,{...n,[au]:!0});if(a._roots=r,a._indirectBuffer=o||null,n.setIndex){const c=e.getIndex();if(c===null){const h=new $e(t.index,1,!1);e.setIndex(h)}else c.array!==i&&(c.array.set(i),c.needsUpdate=!0)}return a;function l(c){for(let h=0;h<c.length;h++){const d=c[h],u=new Uint32Array(d),f=new Uint16Array(d);for(let g=0,_=d.byteLength/tn;g<_;g++){const m=ze*g,p=2*m;ke(p,f)||(u[m+6]=u[m+6]/ze-g)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(t,e={}){e.maxLeafTris&&(console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use maxLeafSize, instead.'),e={...e,maxLeafSize:e.maxLeafTris}),super(t,e)}shiftTriangleOffsets(t){return super.shiftPrimitiveOffsets(t)}writePrimitiveBounds(t,e,n){const i=this.geometry,r=this._indirectBuffer,o=i.attributes.position,a=i.index?i.index.array:null,c=(r?r[t]:t)*3;let h=c+0,d=c+1,u=c+2;a&&(h=a[h],d=a[d],u=a[u]);for(let f=0;f<3;f++){const g=o[pc[f]](h),_=o[pc[f]](d),m=o[pc[f]](u);let p=g;_<p&&(p=_),m<p&&(p=m);let x=g;_>x&&(x=_),m>x&&(x=m),e[n+f]=p,e[n+f+3]=x}return e}computePrimitiveBounds(t,e,n){const i=this.geometry,r=this._indirectBuffer,o=i.attributes.position,a=i.index?i.index.array:null,l=o.normalized;if(t<0||e+t-n.offset>n.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");const c=o.array,h=o.offset||0;let d=3;o.isInterleavedBufferAttribute&&(d=o.data.stride);const u=["getX","getY","getZ"],f=n.offset;for(let g=t,_=t+e;g<_;g++){const p=(r?r[g]:g)*3,x=(g-f)*6;let y=p+0,v=p+1,M=p+2;a&&(y=a[y],v=a[v],M=a[M]),l||(y=y*d+h,v=v*d+h,M=M*d+h);for(let w=0;w<3;w++){let E,C,S;l?(E=o[u[w]](y),C=o[u[w]](v),S=o[u[w]](M)):(E=c[y+w],C=c[v+w],S=c[M+w]);let b=E;C<b&&(b=C),S<b&&(b=S);let R=E;C>R&&(R=C),S>R&&(R=S);const L=(R-b)/2,P=w*2;n[x+P+0]=b+L,n[x+P+1]=L+(Math.abs(b)+L)*Ga}}return n}raycastObject3D(t,e,n=[]){const{material:i}=t;if(i===void 0)return;Af.copy(t.matrixWorld).invert(),Ta.copy(e.ray).applyMatrix4(Af),Tf.setFromMatrixScale(t.matrixWorld),Ef.copy(Ta.direction).multiply(Tf);const r=Ef.length(),o=e.near/r,a=e.far/r;if(e.firstHitOnly===!0){let l=this.raycastFirst(Ta,i,o,a);l=wf(l,t,e),l&&n.push(l)}else{const l=this.raycast(Ta,i,o,a);for(let c=0,h=l.length;c<h;c++){const d=wf(l[c],t,e);d&&n.push(d)}}return n}refit(t=null){return(this.indirect?Hw:Pw)(this,t)}raycast(t,e=gi,n=0,i=1/0){const r=this._roots,o=[],a=this.indirect?Ww:Nw;for(let l=0,c=r.length;l<c;l++)a(this,l,e,t,o,n,i);return o}raycastFirst(t,e=gi,n=0,i=1/0){const r=this._roots;let o=null;const a=this.indirect?qw:Uw;for(let l=0,c=r.length;l<c;l++){const h=a(this,l,e,t,n,i);h!=null&&(o==null||h.distance<o.distance)&&(o=h)}return o}intersectsGeometry(t,e){let n=!1;const i=this._roots,r=this.indirect?Yw:Bw;for(let o=0,a=i.length;o<a&&(n=r(this,o,t,e),!n);o++);return n}shapecast(t){const e=zn.getPrimitive(),n=super.shapecast({...t,intersectsPrimitive:t.intersectsTriangle,scratchPrimitive:e,iterate:this.indirect?Dw:Rw});return zn.releasePrimitive(e),n}bvhcast(t,e,n){let{intersectsRanges:i,intersectsTriangles:r}=n;const o=zn.getPrimitive(),a=this.geometry.index,l=this.geometry.attributes.position,c=this.indirect?g=>{const _=this.resolveTriangleIndex(g);Fe(o,_*3,a,l)}:g=>{Fe(o,g*3,a,l)},h=zn.getPrimitive(),d=t.geometry.index,u=t.geometry.attributes.position,f=t.indirect?g=>{const _=t.resolveTriangleIndex(g);Fe(h,_*3,d,u)}:g=>{Fe(h,g*3,d,u)};if(r){if(!(t instanceof il))throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');const g=(_,m,p,x,y,v,M,w)=>{for(let E=p,C=p+x;E<C;E++){f(E),h.a.applyMatrix4(e),h.b.applyMatrix4(e),h.c.applyMatrix4(e),h.needsUpdate=!0;for(let S=_,b=_+m;S<b;S++)if(c(S),o.needsUpdate=!0,r(o,h,S,E,y,v,M,w))return!0}return!1};if(i){const _=i;i=function(m,p,x,y,v,M,w,E){return _(m,p,x,y,v,M,w,E)?!0:g(m,p,x,y,v,M,w,E)}}else i=g}return super.bvhcast(t,e,{intersectsRanges:i})}intersectsBox(t,e){return Aa.set(t.min,t.max,e),Aa.needsUpdate=!0,this.shapecast({intersectsBounds:n=>Aa.intersectsBox(n),intersectsTriangle:n=>Aa.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},i={},r=0,o=1/0){return(this.indirect?Jw:Gw)(this,t,e,n,i,r,o)}closestPointToPoint(t,e={},n=0,i=1/0){return ww(this,t,e,n,i)}}const Yp=1e-6,Qw=Yp*.5,$p=Math.pow(10,-Math.log10(Yp)),tE=Qw*$p;function di(s){return~~(s*$p+tE)}function eE(s){return`${di(s.x)},${di(s.y)}`}function Cf(s){return`${di(s.x)},${di(s.y)},${di(s.z)}`}function nE(s){return`${di(s.x)},${di(s.y)},${di(s.z)},${di(s.w)}`}function iE(s,t,e){e.direction.subVectors(t,s).normalize();const n=s.dot(e.direction);return e.origin.copy(s).addScaledVector(e.direction,-n),e}function jp(){return typeof SharedArrayBuffer<"u"}function sE(s){if(s.buffer instanceof SharedArrayBuffer)return s;const t=s.constructor,e=s.buffer,n=new SharedArrayBuffer(e.byteLength),i=new Uint8Array(e);return new Uint8Array(n).set(i,0),new t(n)}function rE(s,t=ArrayBuffer){return s>65535?new Uint32Array(new t(4*s)):new Uint16Array(new t(2*s))}function oE(s,t){if(!s.index){const e=s.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=rE(e,n);s.setIndex(new $e(i,1));for(let r=0;r<e;r++)i[r]=r}}function aE(s){return s.index?s.index.count:s.attributes.position.count}function du(s){return aE(s)/3}const lE=1e-8,cE=new N;function hE(s){return~~(s/3)}function uE(s){return s%3}function Rf(s,t){return s.start-t.start}function Pf(s,t){return cE.subVectors(t,s.origin).dot(s.direction)}function dE(s,t,e,n=lE){s.sort(Rf),t.sort(Rf);for(let a=0;a<s.length;a++){const l=s[a];for(let c=0;c<t.length;c++){const h=t[c];if(!(h.start>l.end)){if(l.end<h.start||h.end<l.start)continue;if(l.start<=h.start&&l.end>=h.end)r(h.end,l.end)||s.splice(a+1,0,{start:h.end,end:l.end,index:l.index}),l.end=h.start,h.start=0,h.end=0;else if(l.start>=h.start&&l.end<=h.end)r(l.end,h.end)||t.splice(c+1,0,{start:l.end,end:h.end,index:h.index}),h.end=l.start,l.start=0,l.end=0;else if(l.start<=h.start&&l.end<=h.end){const d=l.end;l.end=h.start,h.start=d}else if(l.start>=h.start&&l.end>=h.end){const d=h.end;h.end=l.start,l.start=d}else throw new Error}if(e.has(l.index)||e.set(l.index,[]),e.has(h.index)||e.set(h.index,[]),e.get(l.index).push(h.index),e.get(h.index).push(l.index),o(h)&&(t.splice(c,1),c--),o(l)){s.splice(a,1),a--;break}}}i(s),i(t);function i(a){for(let l=0;l<a.length;l++)o(a[l])&&(a.splice(l,1),l--)}function r(a,l){return Math.abs(l-a)<n}function o(a){return Math.abs(a.end-a.start)<n}}const If=1e-5,Lf=1e-4;class fE{constructor(){this._rays=[]}addRay(t){this._rays.push(t)}findClosestRay(t){const e=this._rays,n=t.clone();n.direction.multiplyScalar(-1);let i=1/0,r=null;for(let l=0,c=e.length;l<c;l++){const h=e[l];if(o(h,t)&&o(h,n))continue;const d=a(h,t),u=a(h,n),f=Math.min(d,u);f<i&&(i=f,r=h)}return r;function o(l,c){const h=l.origin.distanceTo(c.origin)>If;return l.direction.angleTo(c.direction)>Lf||h}function a(l,c){const h=l.origin.distanceTo(c.origin),d=l.direction.angleTo(c.direction);return h/If+d/Lf}}}const mc=new N,gc=new N,Ca=new Os;function pE(s,t,e){const n=s.attributes,i=s.index,r=n.position,o=new Map,a=new Map,l=Array.from(t),c=new fE;for(let h=0,d=l.length;h<d;h++){const u=l[h],f=hE(u),g=uE(u);let _=3*f+g,m=3*f+(g+1)%3;i&&(_=i.getX(_),m=i.getX(m)),mc.fromBufferAttribute(r,_),gc.fromBufferAttribute(r,m),iE(mc,gc,Ca);let p,x=c.findClosestRay(Ca);x===null&&(x=Ca.clone(),c.addRay(x)),a.has(x)||a.set(x,{forward:[],reverse:[],ray:x}),p=a.get(x);let y=Pf(x,mc),v=Pf(x,gc);y>v&&([y,v]=[v,y]),Ca.direction.dot(x.direction)<0?p.reverse.push({start:y,end:v,index:u}):p.forward.push({start:y,end:v,index:u})}return a.forEach(({forward:h,reverse:d},u)=>{dE(h,d,o,e),h.length===0&&d.length===0&&a.delete(u)}),{disjointConnectivityMap:o,fragmentMap:a}}const mE=new Pt,xc=new N,gE=new le,_c=["","",""];class xE{constructor(t=null){this.data=null,this.disjointConnections=null,this.unmatchedDisjointEdges=null,this.unmatchedEdges=-1,this.matchedEdges=-1,this.useDrawRange=!0,this.useAllAttributes=!1,this.matchDisjointEdges=!1,this.degenerateEpsilon=1e-8,t&&this.updateFrom(t)}getSiblingTriangleIndex(t,e){const n=this.data[t*3+e];return n===-1?-1:~~(n/3)}getSiblingEdgeIndex(t,e){const n=this.data[t*3+e];return n===-1?-1:n%3}getDisjointSiblingTriangleIndices(t,e){const n=t*3+e,i=this.disjointConnections.get(n);return i?i.map(r=>~~(r/3)):[]}getDisjointSiblingEdgeIndices(t,e){const n=t*3+e,i=this.disjointConnections.get(n);return i?i.map(r=>r%3):[]}isFullyConnected(){return this.unmatchedEdges===0}updateFrom(t){const{useAllAttributes:e,useDrawRange:n,matchDisjointEdges:i,degenerateEpsilon:r}=this,o=e?y:x,a=new Map,{attributes:l}=t,c=e?Object.keys(l):null,h=t.index,d=l.position;let u=du(t);const f=u;let g=0;n&&(g=t.drawRange.start,t.drawRange.count!==1/0&&(u=~~(t.drawRange.count/3)));let _=this.data;(!_||_.length<3*f)&&(_=new Int32Array(3*f)),_.fill(-1);let m=0,p=new Set;for(let v=g,M=u*3+g;v<M;v+=3){const w=v;for(let E=0;E<3;E++){let C=w+E;h&&(C=h.getX(C)),_c[E]=o(C)}for(let E=0;E<3;E++){const C=(E+1)%3,S=_c[E],b=_c[C],R=`${b}_${S}`;if(a.has(R)){const L=w+E,P=a.get(R);_[L]=P,_[P]=L,a.delete(R),m+=2,p.delete(P)}else{const L=`${S}_${b}`,P=w+E;a.set(L,P),p.add(P)}}}if(i){const{fragmentMap:v,disjointConnectivityMap:M}=pE(t,p,r);p.clear(),v.forEach(({forward:w,reverse:E})=>{w.forEach(({index:C})=>p.add(C)),E.forEach(({index:C})=>p.add(C))}),this.unmatchedDisjointEdges=v,this.disjointConnections=M,m=u*3-p.size}this.matchedEdges=m,this.unmatchedEdges=p.size,this.data=_;function x(v){return xc.fromBufferAttribute(d,v),Cf(xc)}function y(v){let M="";for(let w=0,E=c.length;w<E;w++){const C=l[c[w]];let S;switch(C.itemSize){case 1:S=di(C.getX(v));break;case 2:S=eE(mE.fromBufferAttribute(C,v));break;case 3:S=Cf(xc.fromBufferAttribute(C,v));break;case 4:S=nE(gE.fromBufferAttribute(C,v));break}M!==""&&(M+="|"),M+=S}return M}}}class sl extends Zt{constructor(...t){super(...t),this.isBrush=!0,this._previousMatrix=new Xt,this._previousMatrix.elements.fill(0)}markUpdated(){this._previousMatrix.copy(this.matrix)}isDirty(){const{matrix:t,_previousMatrix:e}=this,n=t.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!0;return!1}prepareGeometry(){const t=this.geometry,e=t.attributes,n=jp();if(n)for(const i in e){const r=e[i];if(r.isInterleavedBufferAttribute)throw new Error("Brush: InterleavedBufferAttributes are not supported.");r.array=sE(r.array)}if(t.boundsTree||(oE(t,{useSharedArrayBuffer:n}),t.boundsTree=new il(t,{maxLeafTris:3,indirect:!0,useSharedArrayBuffer:n})),t.halfEdges||(t.halfEdges=new xE(t)),!t.groupIndices){const i=du(t),r=new Uint16Array(i),o=t.groups;for(let a=0,l=o.length;a<l;a++){const{start:c,count:h}=o[a];for(let d=c/3,u=(c+h)/3;d<u;d++)r[d]=a}t.groupIndices=r}}disposeCacheData(){const{geometry:t}=this;t.halfEdges=null,t.boundsTree=null,t.groupIndices=null}}const _E=1e-14,vc=new N,Df=new N,Nf=new N;function is(s,t=_E){vc.subVectors(s.b,s.a),Df.subVectors(s.c,s.a),Nf.subVectors(s.b,s.c);const e=vc.angleTo(Df),n=vc.angleTo(Nf),i=Math.PI-e-n;return Math.abs(e)<t||Math.abs(n)<t||Math.abs(i)<t||s.a.distanceToSquared(s.b)<t||s.a.distanceToSquared(s.c)<t||s.b.distanceToSquared(s.c)<t}const yc=1e-10,co=1e-10,vE=1e-10,Pi=new Vn,Pe=new Vn,Ii=new N,Mc=new N,Ff=new N,Ra=new Fn,Sc=new Gn;class yE{constructor(){this._pool=[],this._index=0}getTriangle(){return this._index>=this._pool.length&&this._pool.push(new ye),this._pool[this._index++]}clear(){this._index=0}reset(){this._pool.length=0,this._index=0}}class ME{constructor(){this.trianglePool=new yE,this.triangles=[],this.normal=new N,this.coplanarTriangleUsed=!1}initialize(t){this.reset();const{triangles:e,trianglePool:n,normal:i}=this;if(Array.isArray(t))for(let r=0,o=t.length;r<o;r++){const a=t[r];if(r===0)a.getNormal(i);else if(Math.abs(1-a.getNormal(Ii).dot(i))>yc)throw new Error("Triangle Splitter: Cannot initialize with triangles that have different normals.");const l=n.getTriangle();l.copy(a),e.push(l)}else{t.getNormal(i);const r=n.getTriangle();r.copy(t),e.push(r)}}splitByTriangle(t){const{normal:e,triangles:n}=this;if(t.getNormal(Mc).normalize(),Math.abs(1-Math.abs(Mc.dot(e)))<vE){this.coplanarTriangleUsed=!0;for(let r=0,o=n.length;r<o;r++){const a=n[r];a.coplanarCount=0}const i=[t.a,t.b,t.c];for(let r=0;r<3;r++){const o=(r+1)%3,a=i[r],l=i[o];Ii.subVectors(l,a).normalize(),Ff.crossVectors(Mc,Ii),Ra.setFromNormalAndCoplanarPoint(Ff,a),this.splitByPlane(Ra,t)}}else t.getPlane(Ra),this.splitByPlane(Ra,t)}splitByPlane(t,e){const{triangles:n,trianglePool:i}=this;Sc.copy(e),Sc.needsUpdate=!0;for(let r=0,o=n.length;r<o;r++){const a=n[r];if(!Sc.intersectsTriangle(a,Pi,!0))continue;const{a:l,b:c,c:h}=a;let d=0,u=-1,f=!1,g=[],_=[];const m=[l,c,h];for(let p=0;p<3;p++){const x=(p+1)%3;Pi.start.copy(m[p]),Pi.end.copy(m[x]);const y=t.distanceToPoint(Pi.start),v=t.distanceToPoint(Pi.end);if(Math.abs(y)<co&&Math.abs(v)<co){f=!0;break}if(y>0?g.push(p):_.push(p),Math.abs(y)<co)continue;let M=!!t.intersectLine(Pi,Ii);!M&&Math.abs(v)<co&&(Ii.copy(Pi.end),M=!0),M&&!(Ii.distanceTo(Pi.start)<yc)&&(Ii.distanceTo(Pi.end)<yc&&(u=p),d===0?Pe.start.copy(Ii):Pe.end.copy(Ii),d++)}if(!f&&d===2&&Pe.distance()>co)if(u!==-1){u=(u+1)%3;let p=0;p===u&&(p=(p+1)%3);let x=p+1;x===u&&(x=(x+1)%3);const y=i.getTriangle();y.a.copy(m[x]),y.b.copy(Pe.end),y.c.copy(Pe.start),is(y)||n.push(y),a.a.copy(m[p]),a.b.copy(Pe.start),a.c.copy(Pe.end),is(a)&&(n.splice(r,1),r--,o--)}else{const p=g.length>=2?_[0]:g[0];if(p===0){let w=Pe.start;Pe.start=Pe.end,Pe.end=w}const x=(p+1)%3,y=(p+2)%3,v=i.getTriangle(),M=i.getTriangle();m[x].distanceToSquared(Pe.start)<m[y].distanceToSquared(Pe.end)?(v.a.copy(m[x]),v.b.copy(Pe.start),v.c.copy(Pe.end),M.a.copy(m[x]),M.b.copy(m[y]),M.c.copy(Pe.start)):(v.a.copy(m[y]),v.b.copy(Pe.start),v.c.copy(Pe.end),M.a.copy(m[x]),M.b.copy(m[y]),M.c.copy(Pe.end)),a.a.copy(m[p]),a.b.copy(Pe.end),a.c.copy(Pe.start),is(v)||n.push(v),is(M)||n.push(M),is(a)&&(n.splice(r,1),r--,o--)}else d===3&&console.warn("TriangleClipper: Coplanar clip not handled")}}reset(){this.triangles.length=0,this.trianglePool.clear(),this.coplanarTriangleUsed=!1}}function SE(s){return s=~~s,s+4-s%4}class Uf{constructor(t,e=500){this.expansionFactor=1.5,this.type=t,this.length=0,this.array=null,this.setSize(e)}setType(t){if(this.length!==0)throw new Error("TypeBackedArray: Cannot change the type while there is used data in the buffer.");const e=this.array.buffer;this.array=new t(e),this.type=t}setSize(t){if(this.array&&t===this.array.length)return;const e=this.type,n=jp()?SharedArrayBuffer:ArrayBuffer,i=new e(new n(SE(t*e.BYTES_PER_ELEMENT)));this.array&&i.set(this.array,0),this.array=i}expand(){const{array:t,expansionFactor:e}=this;this.setSize(t.length*e)}push(...t){let{array:e,length:n}=this;n+t.length>e.length&&(this.expand(),e=this.array);for(let i=0,r=t.length;i<r;i++)e[n+i]=t[i];this.length+=t.length}clear(){this.length=0}}class bE{constructor(){this.groupAttributes=[{}],this.groupCount=0}getType(t){return this.groupAttributes[0][t].type}getItemSize(t){return this.groupAttributes[0][t].itemSize}getNormalized(t){return this.groupAttributes[0][t].normalized}getCount(t){if(this.groupCount<=t)return 0;const e=this.getGroupAttrArray("position",t);return e.length/e.itemSize}getTotalLength(t){const{groupCount:e,groupAttributes:n}=this;let i=0;for(let r=0;r<e;r++){const o=n[r];i+=o[t].length}return i}getGroupAttrSet(t=0){const{groupAttributes:e}=this;if(e[t])return this.groupCount=Math.max(this.groupCount,t+1),e[t];const n=e[0];for(this.groupCount=Math.max(this.groupCount,t+1);t>=e.length;){const i={};e.push(i);for(const r in n){const o=n[r],a=new Uf(o.type);a.itemSize=o.itemSize,a.normalized=o.normalized,i[r]=a}}return e[t]}getGroupAttrArray(t,e=0){const{groupAttributes:n}=this;if(!n[0][t])throw new Error(`TypedAttributeData: Attribute with "${t}" has not been initialized`);return this.getGroupAttrSet(e)[t]}initializeArray(t,e,n,i){const{groupAttributes:r}=this,a=r[0][t];if(a){if(a.type!==e)for(let l=0,c=r.length;l<c;l++){const h=r[l][t];h.setType(e),h.itemSize=n,h.normalized=i}}else for(let l=0,c=r.length;l<c;l++){const h=new Uf(e);h.itemSize=n,h.normalized=i,r[l][t]=h}}clear(){this.groupCount=0;const{groupAttributes:t}=this;t.forEach(e=>{for(const n in e)e[n].clear()})}delete(t){this.groupAttributes.forEach(e=>{delete e[t]})}reset(){this.groupAttributes=[],this.groupCount=0}}class Bf{constructor(){this.intersectionSet={},this.ids=[]}add(t,e){const{intersectionSet:n,ids:i}=this;n[t]||(n[t]=[],i.push(t)),n[t].push(e)}}const fu=0,wE=1,EE=2,AE=3,TE=4,Zp=5,Kp=6,Ln=new Os,Of=new Xt,sn=new ye,Li=new N,zf=new le,kf=new le,Vf=new le,bc=new le,Pa=new le,Ia=new le,Gf=new Vn,wc=new N,Ec=1e-8,CE=1e-15,Ps=-1,Is=1,Wa=-2,Xa=2,Mo=0,Es=1,pu=2,RE=1e-14;let qa=null;function Hf(s){qa=s}function Jp(s,t){s.getMidpoint(Ln.origin),s.getNormal(Ln.direction);const e=t.raycastFirst(Ln,wn);return!!(e&&Ln.direction.dot(e.face.normal)>0)?Ps:Is}function PE(s,t){function e(){return Math.random()-.5}s.getNormal(wc),Ln.direction.copy(wc),s.getMidpoint(Ln.origin);const n=3;let i=0,r=1/0;for(let o=0;o<n;o++){Ln.direction.x+=e()*Ec,Ln.direction.y+=e()*Ec,Ln.direction.z+=e()*Ec,Ln.direction.multiplyScalar(-1);const a=t.raycastFirst(Ln,wn);if(a&&Ln.direction.dot(a.face.normal)>0&&i++,a!==null&&(r=Math.min(r,a.distance)),r<=CE)return a.face.normal.dot(wc)>0?Xa:Wa;if(i/n>.5||(o-i+1)/n>.5)break}return i/n>.5?Ps:Is}function IE(s,t){const e=new Bf,n=new Bf;return Of.copy(s.matrixWorld).invert().multiply(t.matrixWorld),s.geometry.boundsTree.bvhcast(t.geometry.boundsTree,Of,{intersectsTriangles(i,r,o,a){if(!is(i)&&!is(r)){let l=i.intersectsTriangle(r,Gf,!0);if(!l){const c=i.plane,h=r.plane,d=c.normal,u=h.normal;d.dot(u)===1&&Math.abs(c.constant-h.constant)<RE&&(l=!0)}if(l){let c=s.geometry.boundsTree.resolveTriangleIndex(o),h=t.geometry.boundsTree.resolveTriangleIndex(a);e.add(c,h),n.add(h,c),qa&&(qa.addEdge(Gf),qa.addIntersectingTriangles(o,i,a,r))}}return!1}}),{aIntersections:e,bIntersections:n}}function LE(s,t,e,n,i,r,o=!1){const a=e.attributes,l=e.index,c=s*3,h=l.getX(c+0),d=l.getX(c+1),u=l.getX(c+2);for(const f in r){const g=a[f],_=r[f];if(!(f in a))throw new Error(`CSG Operations: Attribute ${f} not available on geometry.`);const m=g.itemSize;f==="position"?(sn.a.fromBufferAttribute(g,h).applyMatrix4(n),sn.b.fromBufferAttribute(g,d).applyMatrix4(n),sn.c.fromBufferAttribute(g,u).applyMatrix4(n),Ac(sn.a,sn.b,sn.c,t,3,_,o)):f==="normal"?(sn.a.fromBufferAttribute(g,h).applyNormalMatrix(i),sn.b.fromBufferAttribute(g,d).applyNormalMatrix(i),sn.c.fromBufferAttribute(g,u).applyNormalMatrix(i),o&&(sn.a.multiplyScalar(-1),sn.b.multiplyScalar(-1),sn.c.multiplyScalar(-1)),Ac(sn.a,sn.b,sn.c,t,3,_,o,!0)):(zf.fromBufferAttribute(g,h),kf.fromBufferAttribute(g,d),Vf.fromBufferAttribute(g,u),Ac(zf,kf,Vf,t,m,_,o))}}function DE(s,t,e,n,i,r,o,a=!1){Tc(s,n,i,r,o,a),Tc(a?e:t,n,i,r,o,a),Tc(a?t:e,n,i,r,o,a)}function Qp(s,t,e=!1){switch(s){case fu:if(t===Is||t===Xa&&!e)return Es;break;case wE:if(e){if(t===Ps)return Mo}else if(t===Is||t===Wa)return Es;break;case EE:if(e){if(t===Is||t===Wa)return Es}else if(t===Ps)return Mo;break;case TE:if(t===Ps)return Mo;if(t===Is)return Es;break;case AE:if(t===Ps||t===Xa&&!e)return Es;break;case Zp:if(!e&&(t===Is||t===Wa))return Es;break;case Kp:if(!e&&(t===Ps||t===Xa))return Es;break;default:throw new Error(`Unrecognized CSG operation enum "${s}".`)}return pu}function Ac(s,t,e,n,i,r,o=!1,a=!1){const l=c=>{r.push(c.x),i>1&&r.push(c.y),i>2&&r.push(c.z),i>3&&r.push(c.w)};bc.set(0,0,0,0).addScaledVector(s,n.a.x).addScaledVector(t,n.a.y).addScaledVector(e,n.a.z),Pa.set(0,0,0,0).addScaledVector(s,n.b.x).addScaledVector(t,n.b.y).addScaledVector(e,n.b.z),Ia.set(0,0,0,0).addScaledVector(s,n.c.x).addScaledVector(t,n.c.y).addScaledVector(e,n.c.z),a&&(bc.normalize(),Pa.normalize(),Ia.normalize()),l(bc),o?(l(Ia),l(Pa)):(l(Pa),l(Ia))}function Tc(s,t,e,n,i,r=!1){for(const o in i){const a=t[o],l=i[o];if(!(o in t))throw new Error(`CSG Operations: Attribute ${o} no available on geometry.`);const c=a.itemSize;o==="position"?(Li.fromBufferAttribute(a,s).applyMatrix4(e),l.push(Li.x,Li.y,Li.z)):o==="normal"?(Li.fromBufferAttribute(a,s).applyNormalMatrix(n),r&&Li.multiplyScalar(-1),l.push(Li.x,Li.y,Li.z)):(l.push(a.getX(s)),c>1&&l.push(a.getY(s)),c>2&&l.push(a.getZ(s)),c>3&&l.push(a.getW(s)))}}class NE{constructor(t){this.triangle=new ye().copy(t),this.intersects={}}addTriangle(t,e){this.intersects[t]=new ye().copy(e)}getIntersectArray(){const t=[],{intersects:e}=this;for(const n in e)t.push(e[n]);return t}}class Wf{constructor(){this.data={}}addTriangleIntersection(t,e,n,i){const{data:r}=this;r[t]||(r[t]=new NE(e)),r[t].addTriangle(n,i)}getTrianglesAsArray(t=null){const{data:e}=this,n=[];if(t!==null)t in e&&n.push(e[t].triangle);else for(const i in e)n.push(e[i].triangle);return n}getTriangleIndices(){return Object.keys(this.data).map(t=>parseInt(t))}getIntersectionIndices(t){const{data:e}=this;return e[t]?Object.keys(e[t].intersects).map(n=>parseInt(n)):[]}getIntersectionsAsArray(t=null,e=null){const{data:n}=this,i=new Set,r=[],o=a=>{if(n[a])if(e!==null)n[a].intersects[e]&&r.push(n[a].intersects[e]);else{const l=n[a].intersects;for(const c in l)i.has(c)||(i.add(c),r.push(l[c]))}};if(t!==null)o(t);else for(const a in n)o(a);return r}reset(){this.data={}}}class FE{constructor(){this.enabled=!1,this.triangleIntersectsA=new Wf,this.triangleIntersectsB=new Wf,this.intersectionEdges=[]}addIntersectingTriangles(t,e,n,i){const{triangleIntersectsA:r,triangleIntersectsB:o}=this;r.addTriangleIntersection(t,e,n,i),o.addTriangleIntersection(n,i,t,e)}addEdge(t){this.intersectionEdges.push(t.clone())}reset(){this.triangleIntersectsA.reset(),this.triangleIntersectsB.reset(),this.intersectionEdges=[]}init(){this.enabled&&(this.reset(),Hf(this))}complete(){this.enabled&&Hf(null)}}const os=new Xt,rl=new kt,As=new ye,La=new ye,Ji=new ye,Da=new ye,jn=[],Ns=[];function UE(s){for(const t of s)return t}function BE(s,t,e,n,i,r={}){const{useGroups:o=!0}=r,{aIntersections:a,bIntersections:l}=IE(s,t),c=[];let h=null,d;return d=o?0:-1,Xf(s,t,a,e,!1,n,i,d),qf(s,t,a,e,!1,i,d),e.findIndex(f=>f!==Kp&&f!==Zp)!==-1&&(d=o?s.geometry.groups.length||1:-1,Xf(t,s,l,e,!0,n,i,d),qf(t,s,l,e,!0,i,d)),jn.length=0,Ns.length=0,{groups:c,materials:h}}function Xf(s,t,e,n,i,r,o,a=0){const l=s.matrixWorld.determinant()<0;os.copy(t.matrixWorld).invert().multiply(s.matrixWorld),rl.getNormalMatrix(s.matrixWorld).multiplyScalar(l?-1:1);const c=s.geometry.groupIndices,h=s.geometry.index,d=s.geometry.attributes.position,u=t.geometry.boundsTree,f=t.geometry.index,g=t.geometry.attributes.position,_=e.ids,m=e.intersectionSet;for(let p=0,x=_.length;p<x;p++){const y=_[p],v=a===-1?0:c[y]+a,M=3*y,w=h.getX(M+0),E=h.getX(M+1),C=h.getX(M+2);As.a.fromBufferAttribute(d,w).applyMatrix4(os),As.b.fromBufferAttribute(d,E).applyMatrix4(os),As.c.fromBufferAttribute(d,C).applyMatrix4(os),r.reset(),r.initialize(As);const S=m[y];for(let R=0,L=S.length;R<L;R++){const P=3*S[R],D=f.getX(P+0),B=f.getX(P+1),U=f.getX(P+2);La.a.fromBufferAttribute(g,D),La.b.fromBufferAttribute(g,B),La.c.fromBufferAttribute(g,U),r.splitByTriangle(La)}const b=r.triangles;for(let R=0,L=b.length;R<L;R++){const P=b[R],D=r.coplanarTriangleUsed?PE(P,u):Jp(P,u);jn.length=0,Ns.length=0;for(let B=0,U=n.length;B<U;B++){const k=Qp(n[B],D,i);k!==pu&&(Ns.push(k),jn.push(o[B].getGroupAttrSet(v)))}if(jn.length!==0){As.getBarycoord(P.a,Da.a),As.getBarycoord(P.b,Da.b),As.getBarycoord(P.c,Da.c);for(let B=0,U=jn.length;B<U;B++){const k=jn[B],q=Ns[B]===Mo;LE(y,Da,s.geometry,s.matrixWorld,rl,k,l!==q)}}}}return _.length}function qf(s,t,e,n,i,r,o=0){const a=s.matrixWorld.determinant()<0;os.copy(t.matrixWorld).invert().multiply(s.matrixWorld),rl.getNormalMatrix(s.matrixWorld).multiplyScalar(a?-1:1);const l=t.geometry.boundsTree,c=s.geometry.groupIndices,h=s.geometry.index,d=s.geometry.attributes,u=d.position,f=[],g=s.geometry.halfEdges,_=new Set,m=du(s.geometry);for(let p=0,x=m;p<x;p++)p in e.intersectionSet||_.add(p);for(;_.size>0;){const p=UE(_);_.delete(p),f.push(p);const x=3*p,y=h.getX(x+0),v=h.getX(x+1),M=h.getX(x+2);Ji.a.fromBufferAttribute(u,y).applyMatrix4(os),Ji.b.fromBufferAttribute(u,v).applyMatrix4(os),Ji.c.fromBufferAttribute(u,M).applyMatrix4(os);const w=Jp(Ji,l);Ns.length=0,jn.length=0;for(let E=0,C=n.length;E<C;E++){const S=Qp(n[E],w,i);S!==pu&&(Ns.push(S),jn.push(r[E]))}for(;f.length>0;){const E=f.pop();for(let C=0;C<3;C++){const S=g.getSiblingTriangleIndex(E,C);S!==-1&&_.has(S)&&(f.push(S),_.delete(S))}if(jn.length!==0){const C=3*E,S=h.getX(C+0),b=h.getX(C+1),R=h.getX(C+2),L=o===-1?0:c[E]+o;if(Ji.a.fromBufferAttribute(u,S),Ji.b.fromBufferAttribute(u,b),Ji.c.fromBufferAttribute(u,R),!is(Ji))for(let P=0,D=jn.length;P<D;P++){const B=Ns[P],U=jn[P].getGroupAttrSet(L),k=B===Mo;DE(S,b,R,d,s.matrixWorld,rl,U,k!==a)}}}}}function OE(s){for(let t=0;t<s.length-1;t++){const e=s[t],n=s[t+1];if(e.materialIndex===n.materialIndex){const i=e.start,r=n.start+n.count;n.start=i,n.count=r-i,s.splice(t,1),t--}}}function zE(s,t,e,n){e.clear();const i=s.attributes;for(let r=0,o=n.length;r<o;r++){const a=n[r],l=i[a];e.initializeArray(a,l.array.constructor,l.itemSize,l.normalized)}for(const r in e.attributes)n.includes(r)||e.delete(r);for(const r in t.attributes)n.includes(r)||(t.deleteAttribute(r),t.dispose())}function kE(s,t,e){let n=!1,i=-1;const r=s.attributes,o=t.groupAttributes[0];for(const l in o){const c=t.getTotalLength(l),h=t.getType(l),d=t.getItemSize(l),u=t.getNormalized(l);let f=r[l];(!f||f.array.length<c)&&(f=new $e(new h(c),d,u),s.setAttribute(l,f),n=!0);let g=0;for(let _=0,m=Math.min(e.length,t.groupCount);_<m;_++){const p=e[_].index,{array:x,type:y,length:v}=t.groupAttributes[p][l],M=new y(x.buffer,0,v);f.array.set(M,g),g+=M.length}f.needsUpdate=!0,i=c/f.itemSize}if(s.index){const l=s.index.array;if(l.length<i)s.index=null,n=!0;else for(let c=0,h=l.length;c<h;c++)l[c]=c}let a=0;s.clearGroups();for(let l=0,c=Math.min(e.length,t.groupCount);l<c;l++){const{index:h,materialIndex:d}=e[l],u=t.getCount(h);u!==0&&(s.addGroup(a,u,d),a+=u)}s.setDrawRange(0,i),s.boundsTree=null,n&&s.dispose()}function Yf(s,t){let e=t;return Array.isArray(t)||(e=[],s.forEach(n=>{e[n.materialIndex]=t})),e}class tm{constructor(){this.triangleSplitter=new ME,this.attributeData=[],this.attributes=["position","uv","normal"],this.useGroups=!0,this.consolidateGroups=!0,this.debug=new FE}getGroupRanges(t){return!this.useGroups||t.groups.length===0?[{start:0,count:1/0,materialIndex:0}]:t.groups.map(e=>({...e}))}evaluate(t,e,n,i=new sl){let r=!0;if(Array.isArray(n)||(n=[n]),Array.isArray(i)||(i=[i],r=!1),i.length!==n.length)throw new Error("Evaluator: operations and target array passed as different sizes.");t.prepareGeometry(),e.prepareGeometry();const{triangleSplitter:o,attributeData:a,attributes:l,useGroups:c,consolidateGroups:h,debug:d}=this;for(;a.length<i.length;)a.push(new bE);i.forEach((p,x)=>{zE(t.geometry,p.geometry,a[x],l)}),d.init(),BE(t,e,n,o,a,{useGroups:c}),d.complete();const u=this.getGroupRanges(t.geometry),f=Yf(u,t.material),g=this.getGroupRanges(e.geometry),_=Yf(g,e.material);g.forEach(p=>p.materialIndex+=f.length);let m=[...u,...g].map((p,x)=>({...p,index:x}));if(c){const p=[...f,..._];h&&(m=m.map(y=>{const v=p[y.materialIndex];return y.materialIndex=p.indexOf(v),y}).sort((y,v)=>y.materialIndex-v.materialIndex));const x=[];for(let y=0,v=p.length;y<v;y++){let M=!1;for(let w=0,E=m.length;w<E;w++){const C=m[w];C.materialIndex===y&&(M=!0,C.materialIndex=x.length)}M&&x.push(p[y])}i.forEach(y=>{y.material=x})}else m=[{start:0,count:1/0,index:0,materialIndex:0}],i.forEach(p=>{p.material=f[0]});return i.forEach((p,x)=>{const y=p.geometry;kE(y,a[x],m),h&&OE(y.groups)}),r?i:i[0]}evaluateHierarchy(t,e=new sl){t.updateMatrixWorld(!0);const n=(r,o)=>{const a=r.children;for(let l=0,c=a.length;l<c;l++){const h=a[l];h.isOperationGroup?n(h,o):o(h)}},i=r=>{const o=r.children;let a=!1;for(let c=0,h=o.length;c<h;c++){const d=o[c];a=i(d)||a}const l=r.isDirty();if(l&&r.markUpdated(),a&&!r.isOperationGroup){let c;return n(r,h=>{c?c=this.evaluate(c,h,h.operation):c=this.evaluate(r,h,h.operation)}),r._cachedGeometry=c.geometry,r._cachedMaterials=c.material,!0}else return a||l};return i(t),e.geometry=t._cachedGeometry,e.material=t._cachedMaterials,e}reset(){this.triangleSplitter.reset()}}class mi{constructor(t,e,n,i,r="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),mi.nextNameID=mi.nextNameID||0,this.$name.id=`lil-gui-name-${++mi.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("lil-disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class VE extends mi{constructor(t,e,n){super(t,e,n,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Nh(s){let t,e;return(t=s.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const GE={isPrimitive:!0,match:s=>typeof s=="string",fromHexString:Nh,toHexString:Nh},To={isPrimitive:!0,match:s=>typeof s=="number",fromHexString:s=>parseInt(s.substring(1),16),toHexString:s=>"#"+s.toString(16).padStart(6,0)},HE={isPrimitive:!1,match:s=>Array.isArray(s)||ArrayBuffer.isView(s),fromHexString(s,t,e=1){const n=To.fromHexString(s);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([s,t,e],n=1){n=255/n;const i=s*n<<16^t*n<<8^e*n<<0;return To.toHexString(i)}},WE={isPrimitive:!1,match:s=>Object(s)===s,fromHexString(s,t,e=1){const n=To.fromHexString(s);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:s,g:t,b:e},n=1){n=255/n;const i=s*n<<16^t*n<<8^e*n<<0;return To.toHexString(i)}},XE=[GE,To,HE,WE];function qE(s){return XE.find(t=>t.match(s))}class YE extends mi{constructor(t,e,n,i){super(t,e,n,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=qE(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=Nh(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Cc extends mi{constructor(t,e,n){super(t,e,n,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class $E extends mi{constructor(t,e,n,i,r,o){super(t,e,n,"lil-number"),this._initInput(),this.min(i),this.max(r);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let x=parseFloat(this.$input.value);isNaN(x)||(this._stepExplicit&&(x=this._snap(x)),this.setValue(this._clamp(x)))},n=x=>{const y=parseFloat(this.$input.value);isNaN(y)||(this._snapClampSetValue(y+x),this.$input.value=this.getValue())},i=x=>{x.key==="Enter"&&this.$input.blur(),x.code==="ArrowUp"&&(x.preventDefault(),n(this._step*this._arrowKeyMultiplier(x))),x.code==="ArrowDown"&&(x.preventDefault(),n(this._step*this._arrowKeyMultiplier(x)*-1))},r=x=>{this._inputFocused&&(x.preventDefault(),n(this._step*this._normalizeMouseWheel(x)))};let o=!1,a,l,c,h,d;const u=5,f=x=>{a=x.clientX,l=c=x.clientY,o=!0,h=this.getValue(),d=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",_)},g=x=>{if(o){const y=x.clientX-a,v=x.clientY-l;Math.abs(v)>u?(x.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(y)>u&&_()}if(!o){const y=x.clientY-c;d-=y*this._step*this._arrowKeyMultiplier(x),h+d>this._max?d=this._max-h:h+d<this._min&&(d=this._min-h),this._snapClampSetValue(h+d)}c=x.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",_)},m=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const t=(p,x,y,v,M)=>(p-x)/(y-x)*(M-v)+v,e=p=>{const x=this.$slider.getBoundingClientRect();let y=t(p,x.left,x.right,this._min,this._max);this._snapClampSetValue(y)},n=p=>{this._setDraggingStyle(!0),e(p.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",r)},i=p=>{e(p.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r)};let o=!1,a,l;const c=p=>{p.preventDefault(),this._setDraggingStyle(!0),e(p.touches[0].clientX),o=!1},h=p=>{p.touches.length>1||(this._hasScrollBar?(a=p.touches[0].clientX,l=p.touches[0].clientY,o=!0):c(p),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",u))},d=p=>{if(o){const x=p.touches[0].clientX-a,y=p.touches[0].clientY-l;Math.abs(x)>Math.abs(y)?c(p):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u))}else p.preventDefault(),e(p.touches[0].clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u)},f=this._callOnFinishChange.bind(this),g=400;let _;const m=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const y=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+y),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(f,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",t),document.body.classList.toggle("lil-dragging",t),document.body.classList.toggle(`lil-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){let e=0;return this._hasMin?e=this._min:this._hasMax&&(e=this._max),t-=e,t=Math.round(t/this._step)*this._step,t+=e,t=parseFloat(t.toPrecision(15)),t}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class jE extends mi{constructor(t,e,n,i){super(t,e,n,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const n=document.createElement("option");n.textContent=e,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class ZE extends mi{constructor(t,e,n){super(t,e,n,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var KE=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.lil-root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.lil-root > .lil-children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.lil-allow-touch-styles, .lil-gui.lil-allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.lil-force-touch-styles, .lil-gui.lil-force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.lil-auto-place, .lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-controller.lil-disabled {
  opacity: 0.5;
}
.lil-controller.lil-disabled, .lil-controller.lil-disabled * {
  pointer-events: none !important;
}
.lil-controller > .lil-name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-controller .lil-widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-controller.lil-string input {
  color: var(--string-color);
}
.lil-controller.lil-boolean {
  cursor: pointer;
}
.lil-controller.lil-color .lil-display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-controller.lil-color .lil-display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-controller.lil-color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-controller.lil-color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-controller.lil-option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-controller.lil-option .lil-display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-display.lil-focus {
    background: var(--focus-color);
  }
}
.lil-controller.lil-option .lil-display.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-option .lil-display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-controller.lil-option .lil-widget,
.lil-controller.lil-option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-widget:hover .lil-display {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number input {
  color: var(--number-color);
}
.lil-controller.lil-number.lil-has-slider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-controller.lil-number .lil-slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-controller.lil-number .lil-slider:hover {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number .lil-slider.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-number .lil-slider.lil-active .lil-fill {
  opacity: 0.95;
}
.lil-controller.lil-number .lil-fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-dragging * {
  cursor: ew-resize !important;
}
.lil-dragging.lil-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .lil-title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .lil-title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .lil-title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-dragging) .lil-gui .lil-title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .lil-title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.lil-root > .lil-title:focus {
  text-decoration: none !important;
}
.lil-gui.lil-closed > .lil-title:before {
  content: "▸";
}
.lil-gui.lil-closed > .lil-children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.lil-closed:not(.lil-transition) > .lil-children {
  display: none;
}
.lil-gui.lil-transition > .lil-children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .lil-children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.lil-root > .lil-children > .lil-gui > .lil-title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.lil-root > .lil-children > .lil-gui.lil-closed > .lil-title {
  border-bottom-color: transparent;
}
.lil-gui + .lil-controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .lil-title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .lil-children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .lil-controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .lil-controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .lil-controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .lil-controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .lil-controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAALkAAsAAAAABtQAAAKVAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDMgqBBIEbATYCJAMUCwwABCAFhAoHgQQbHAbIDiUFEYVARAAAYQTVWNmz9MxhEgodq49wYRUFKE8GWNiUBxI2LBRaVnc51U83Gmhs0Q7JXWMiz5eteLwrKwuxHO8VFxUX9UpZBs6pa5ABRwHA+t3UxUnH20EvVknRerzQgX6xC/GH6ZUvTcAjAv122dF28OTqCXrPuyaDER30YBA1xnkVutDDo4oCi71Ca7rrV9xS8dZHbPHefsuwIyCpmT7j+MnjAH5X3984UZoFFuJ0yiZ4XEJFxjagEBeqs+e1iyK8Xf/nOuwF+vVK0ur765+vf7txotUi0m3N0m/84RGSrBCNrh8Ee5GjODjF4gnWP+dJrH/Lk9k4oT6d+gr6g/wssA2j64JJGP6cmx554vUZnpZfn6ZfX2bMwPPrlANsB86/DiHjhl0OP+c87+gaJo/gY084s3HoYL/ZkWHTRfBXvvoHnnkHvngKun4KBE/ede7tvq3/vQOxDXB1/fdNz6XbPdcr0Vhpojj9dG+owuSKFsslCi1tgEjirjXdwMiov2EioadxmqTHUCIwo8NgQaeIasAi0fTYSPTbSmwbMOFduyh9wvBrESGY0MtgRjtgQR8Q1bRPohn2UoCRZf9wyYANMXFeJTysqAe0I4mrherOekFdKMrYvJjLvOIUM9SuwYB5DVZUwwVjJJOaUnZCmcEkIZZrKqNvRGRMvmFZsmhP4VMKCSXBhSqUBxgMS7h0cZvEd71AWkEhGWaeMFcNnpqyJkyXgYL7PQ1MoSq0wDAkRtJIijkZSmqYTiSImfLiSWXIZwhRh3Rug2X0kk1Dgj+Iu43u5p98ghopcpSo0Uyc8SnjlYX59WUeaMoDqmVD2TOWD9a4pCRAzf2ECgwGcrHjPOWY9bNxq/OL3I/QjwEAAAA=") format("woff2");
}`;function JE(s){const t=document.createElement("style");t.innerHTML=s;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let $f=!1;class mu{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:i,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),l&&this.domElement.classList.add("lil-allow-touch-styles"),!$f&&a&&(JE(KE),$f=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=o}add(t,e,n,i,r){if(Object(n)===n)return new jE(this,t,e,n);const o=t[e];switch(typeof o){case"number":return new $E(this,t,e,n,i,r);case"boolean":return new VE(this,t,e);case"string":return new ZE(this,t,e);case"function":return new Cc(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,o)}addColor(t,e,n=1){return new YE(this,t,e,n)}addFolder(t){const e=new mu({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof Cc||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Cc)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("lil-transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!t),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const QE=["Foundation","Classic","Challenge","Dimension","Mastery"],tA=[{level:1,world:0,worldName:"Orientation",shapes:["MONO","I2","I3","L3","O","I4","T","L","J","S","Z"],mode:"2D",targetScore:999999,spawnDelay:0,gridSize:8,prefillPercent:.7,prefillHeight:1,description:"Fill the gaps to clear lines!"}];function em(s){return tA.find(t=>t.level===s)||null}function eA(s){const t=em(s);return t?t.world:0}function nA(s){switch(s){case 1:return 1;case 2:return 3;case 3:return 6;case 4:return 10;default:return s*3}}const iA=100;function sA(s){return iA*s*nA(s)}const rA=[{x:0,y:0,z:0}],oA=[{x:0,y:0,z:0},{x:1,y:0,z:0}],aA=[{x:0,y:0,z:0},{x:1,y:0,z:0},{x:2,y:0,z:0}],lA=[{x:0,y:0,z:0},{x:1,y:0,z:0},{x:1,y:0,z:1}],cA=[{x:0,y:0,z:0},{x:1,y:0,z:0},{x:2,y:0,z:0},{x:3,y:0,z:0}],hA=[{x:0,y:0,z:0},{x:1,y:0,z:0},{x:0,y:0,z:1},{x:1,y:0,z:1}],uA=[{x:0,y:0,z:0},{x:1,y:0,z:0},{x:2,y:0,z:0},{x:1,y:0,z:1}],dA=[{x:0,y:0,z:0},{x:1,y:0,z:0},{x:2,y:0,z:0},{x:2,y:0,z:1}],fA=[{x:0,y:0,z:0},{x:1,y:0,z:0},{x:2,y:0,z:0},{x:0,y:0,z:1}],pA=[{x:0,y:0,z:0},{x:1,y:0,z:0},{x:1,y:0,z:1},{x:2,y:0,z:1}],mA=[{x:0,y:0,z:1},{x:1,y:0,z:1},{x:1,y:0,z:0},{x:2,y:0,z:0}],gA=[{x:1,y:0,z:0},{x:2,y:0,z:0},{x:0,y:0,z:1},{x:1,y:0,z:1},{x:1,y:0,z:2}],xA=[{x:0,y:0,z:0},{x:1,y:0,z:0},{x:2,y:0,z:0},{x:3,y:0,z:0},{x:4,y:0,z:0}],_A=[{x:0,y:0,z:0},{x:1,y:0,z:0},{x:2,y:0,z:0},{x:3,y:0,z:0},{x:3,y:0,z:1}],vA=[{x:0,y:0,z:0},{x:1,y:0,z:0},{x:1,y:0,z:1},{x:2,y:0,z:1},{x:3,y:0,z:1}],yA=[{x:0,y:0,z:0},{x:1,y:0,z:0},{x:0,y:0,z:1},{x:1,y:0,z:1},{x:0,y:0,z:2}],MA=[{x:0,y:0,z:0},{x:1,y:0,z:0},{x:2,y:0,z:0},{x:1,y:0,z:1},{x:1,y:0,z:2}],SA=[{x:0,y:0,z:0},{x:2,y:0,z:0},{x:0,y:0,z:1},{x:1,y:0,z:1},{x:2,y:0,z:1}],bA=[{x:0,y:0,z:0},{x:0,y:0,z:1},{x:0,y:0,z:2},{x:1,y:0,z:2},{x:2,y:0,z:2}],wA=[{x:0,y:0,z:0},{x:0,y:0,z:1},{x:1,y:0,z:1},{x:1,y:0,z:2},{x:2,y:0,z:2}],EA=[{x:1,y:0,z:0},{x:0,y:0,z:1},{x:1,y:0,z:1},{x:2,y:0,z:1},{x:1,y:0,z:2}],AA=[{x:0,y:0,z:0},{x:1,y:0,z:0},{x:2,y:0,z:0},{x:3,y:0,z:0},{x:1,y:0,z:1}],TA=[{x:0,y:0,z:0},{x:1,y:0,z:0},{x:1,y:0,z:1},{x:1,y:0,z:2},{x:2,y:0,z:2}],CA=[{x:0,y:0,z:0},{x:0,y:1,z:0}],RA=[{x:0,y:0,z:0},{x:1,y:0,z:0},{x:0,y:1,z:0}],PA=[{x:0,y:0,z:0},{x:1,y:0,z:0},{x:0,y:0,z:1},{x:0,y:1,z:0}],IA=[{x:0,y:0,z:0},{x:1,y:0,z:0},{x:2,y:0,z:0},{x:1,y:1,z:0}],LA=[{x:0,y:0,z:0},{x:1,y:0,z:0},{x:2,y:0,z:0},{x:2,y:1,z:0}],DA=[{x:0,y:0,z:0},{x:1,y:0,z:0},{x:1,y:1,z:0},{x:2,y:1,z:0}],NA=[{x:0,y:0,z:0},{x:0,y:1,z:0},{x:0,y:2,z:0},{x:0,y:3,z:0}],FA=[{x:0,y:0,z:0},{x:1,y:0,z:0},{x:0,y:0,z:1},{x:0,y:1,z:0}],UA=[{x:0,y:0,z:0},{x:1,y:0,z:0},{x:2,y:0,z:0},{x:0,y:1,z:0},{x:2,y:1,z:0}],BA=[{x:0,y:0,z:0},{x:1,y:0,z:0},{x:1,y:1,z:0},{x:2,y:1,z:0},{x:2,y:2,z:0}],OA=[{x:0,y:0,z:0},{x:1,y:0,z:0},{x:0,y:0,z:1},{x:1,y:0,z:1},{x:0,y:1,z:0},{x:1,y:1,z:0},{x:0,y:1,z:1},{x:1,y:1,z:1}],zA=[{x:1,y:0,z:0},{x:0,y:0,z:1},{x:1,y:0,z:1},{x:2,y:0,z:1},{x:1,y:0,z:2},{x:1,y:1,z:1}],kA={MONO:rA,I2:oA,I3:aA,L3:lA,I4:cA,O:hA,T:uA,L:dA,J:fA,S:pA,Z:mA,F:gA,I5:xA,L5:_A,N:vA,P:yA,T5:MA,U:SA,V:bA,W:wA,X:EA,Y:AA,Z5:TA},VA={I2_3D:CA,L2_3D:RA,V3_3D:PA,T_3D:IA,L_3D:LA,S_3D:DA,TOWER:NA,CORNER_3D:FA,BRIDGE_3D:UA,STAIRS_3D:BA,CUBE_3D:OA,PLUS_3D:zA},GA={...kA,...VA};function HA(s){return GA[s]||null}function jf(s){const t=s[Math.floor(Math.random()*s.length)];return{id:t,coords:HA(t)}}function WA(s){const t=s.reduce((n,i)=>({x:n.x+i.x,y:n.y+i.y,z:n.z+i.z}),{x:0,y:0,z:0}),e=s.length;return t.x/=e,t.y/=e,t.z/=e,s.map(n=>({x:n.x-t.x,y:n.y-t.y,z:n.z-t.z}))}const jt=8,ts=20,ls=.5;class XA{constructor(){this.grid=this.createEmptyGrid(),this.blockCells=new Map,this.blockIdCounter=0}createEmptyGrid(){const t=[];for(let e=0;e<jt;e++){t[e]=[];for(let n=0;n<ts;n++){t[e][n]=[];for(let i=0;i<jt;i++)t[e][n][i]=null}}return t}clear(){this.grid=this.createEmptyGrid(),this.blockCells.clear(),this.blockIdCounter=0}generateBlockId(){return`block_${++this.blockIdCounter}`}worldToGrid(t,e,n){const i=Math.floor(t+jt/2),r=Math.floor(e-ls),o=Math.floor(n+jt/2);return this.isValidGridCoord(i,r,o)?{x:i,y:r,z:o}:null}gridToWorld(t,e,n){return{x:t-jt/2+.5,y:e+ls+.5,z:n-jt/2+.5}}isValidGridCoord(t,e,n){return t>=0&&t<jt&&e>=0&&e<ts&&n>=0&&n<jt}getCell(t,e,n){return this.isValidGridCoord(t,e,n)?this.grid[t][e][n]:null}setCell(t,e,n,i){return this.isValidGridCoord(t,e,n)?(this.grid[t][e][n]=i,!0):!1}isOccupied(t,e,n){return this.getCell(t,e,n)!==null}registerBlock(t,e){const n=[];for(const i of e){const r=this.worldToGrid(i.x,i.y,i.z);if(!r){console.warn(`Block ${t} cube out of bounds:`,i);continue}const o=this.getCell(r.x,r.y,r.z);o&&o.blockId!==t&&console.warn(`Cell already occupied by ${o.blockId}`),n.push(r)}return n.forEach((i,r)=>{this.setCell(i.x,i.y,i.z,{blockId:t,shapeIndex:r})}),this.blockCells.set(t,n),!0}unregisterBlock(t){const e=this.blockCells.get(t);if(e){for(const n of e){const i=this.getCell(n.x,n.y,n.z);i&&i.blockId===t&&this.setCell(n.x,n.y,n.z,null)}this.blockCells.delete(t)}}updateBlockPosition(t,e){this.unregisterBlock(t),this.registerBlock(t,e)}getBlockCells(t){return this.blockCells.get(t)||[]}isLayerComplete(t){if(t<0||t>=ts)return!1;for(let e=0;e<jt;e++)for(let n=0;n<jt;n++)if(!this.grid[e][t][n])return!1;return!0}getCompleteLayers(){const t=[];for(let e=0;e<ts;e++)this.isLayerComplete(e)&&t.push(e);return t}getBlocksInLayer(t){const e=new Set;for(let n=0;n<jt;n++)for(let i=0;i<jt;i++){const r=this.grid[n][t][i];r&&e.add(r.blockId)}return e}getBlockCellsInLayer(t,e){return(this.blockCells.get(t)||[]).filter(i=>i.y===e)}getBlockCellsNotInLayers(t,e){const n=this.blockCells.get(t)||[],i=new Set(e);return n.filter(r=>!i.has(r.y))}clearLayers(t){const e=new Map,n=new Set(t);for(const i of t)for(let r=0;r<jt;r++)for(let o=0;o<jt;o++)this.grid[r][i][o]=null;for(const[i,r]of this.blockCells){const o=r.filter(a=>!n.has(a.y));o.length===0?this.blockCells.delete(i):this.blockCells.set(i,o),e.set(i,o)}return e}dropCellsAbove(t){if(t.length===0)return;const e=[...t].sort((n,i)=>n-i);for(let n=e[0]+1;n<ts;n++){const i=e.filter(o=>o<n).length;if(i===0)continue;const r=n-i;for(let o=0;o<jt;o++)for(let a=0;a<jt;a++){const l=this.grid[o][n][a];if(l){this.grid[o][r][a]=l,this.grid[o][n][a]=null;const c=this.blockCells.get(l.blockId);if(c){const h=c.findIndex(d=>d.x===o&&d.y===n&&d.z===a);h!==-1&&(c[h].y=r)}}}}}findConnectedComponents(t){if(t.length===0)return[];if(t.length===1)return[t];const e=new Set,n=[],i=a=>`${a.x},${a.y},${a.z}`,r=new Set(t.map(i)),o=a=>{const l=[],c=[a];for(e.add(i(a));c.length>0;){const h=c.shift();l.push(h);const d=[{x:h.x+1,y:h.y,z:h.z},{x:h.x-1,y:h.y,z:h.z},{x:h.x,y:h.y+1,z:h.z},{x:h.x,y:h.y-1,z:h.z},{x:h.x,y:h.y,z:h.z+1},{x:h.x,y:h.y,z:h.z-1}];for(const u of d){const f=i(u);r.has(f)&&!e.has(f)&&(e.add(f),c.push(u))}}return l};for(const a of t)if(!e.has(i(a))){const l=o(a);n.push(l)}return n}getStats(){let t=0,e=0;for(let n=0;n<jt;n++)for(let i=0;i<ts;i++)for(let r=0;r<jt;r++)this.grid[n][i][r]&&(t++,e=Math.max(e,i+1));return{occupiedCells:t,maxHeight:e,totalCells:jt*ts*jt,blockCount:this.blockCells.size}}debugPrintLayer(t){let e=`Layer Y=${t}:
`;for(let n=jt-1;n>=0;n--){let i="";for(let r=0;r<jt;r++){const o=this.grid[r][t][n];i+=o?"#":"."}e+=i+`
`}console.log(e)}}const he=new XA;class qA{constructor(){this.state={level:1,score:0,linesCleared:0,isPlaying:!1,isPaused:!1,isGameOver:!1,spawnTimerId:null},this.onScoreChange=null,this.onLevelChange=null,this.onLinesChange=null,this.onGameOver=null,this.onLayerClear=null,this.onBlockSplit=null,this.spawnBlockFn=null,this.createBlockFromCellsFn=null,this.removeBlockFn=null,this.dropBlockFn=null}init(t=1){this.state={level:t,score:0,linesCleared:0,isPlaying:!0,isPaused:!1,isGameOver:!1,spawnTimerId:null},he.clear(),this.notifyLevelChange(),this.notifyScoreChange(),this.notifyLinesChange(),this.startAutoSpawn()}getLevelConfig(){return em(this.state.level)}getCurrentWorld(){return eA(this.state.level)}getCurrentWorldName(){return QE[this.getCurrentWorld()]}getNextShape(){const t=this.getLevelConfig();return console.log("getNextShape - level config:",t),t?(console.log("Using level shapes:",t.shapes),jf(t.shapes)):(console.log("No level config, using fallback shapes"),jf(["I4","O","T","L","J","S","Z"]))}addScore(t){this.state.score+=t,this.notifyScoreChange(),this.checkLevelProgress()}checkLevelProgress(){const t=this.getLevelConfig();t&&this.state.score>=t.targetScore&&this.advanceLevel()}advanceLevel(){if(this.state.level>=50){this.gameWin();return}this.state.level++,this.notifyLevelChange(),this.stopAutoSpawn(),this.startAutoSpawn()}startAutoSpawn(){const t=this.getLevelConfig();!t||t.spawnDelay<=0||(this.state.spawnTimerId=setInterval(()=>{!this.state.isPaused&&this.state.isPlaying&&this.spawnBlockFn&&this.spawnBlockFn()},t.spawnDelay))}stopAutoSpawn(){this.state.spawnTimerId&&(clearInterval(this.state.spawnTimerId),this.state.spawnTimerId=null)}pause(){this.state.isPaused=!0,this.stopAutoSpawn()}resume(){this.state.isPaused=!1,this.startAutoSpawn()}gameOver(){this.state.isPlaying=!1,this.state.isGameOver=!0,this.stopAutoSpawn(),this.onGameOver&&this.onGameOver({win:!1,score:this.state.score,level:this.state.level})}gameWin(){this.state.isPlaying=!1,this.stopAutoSpawn(),this.onGameOver&&this.onGameOver({win:!0,score:this.state.score,level:this.state.level})}checkGameOverCondition(){return he.getStats().maxHeight>=ts-2?(this.gameOver(),!0):!1}registerLandedBlock(t,e){he.registerBlock(t,e);const n=he.getCompleteLayers();n.length>0&&this.clearLayers(n),this.checkGameOverCondition()}clearLayers(t){console.log(`Clearing ${t.length} layers:`,t);const e=new Set;for(const r of t)he.getBlocksInLayer(r).forEach(a=>e.add(a));const n=new Map;for(const r of e){const o=he.getBlockCellsNotInLayers(r,t),a=he.findConnectedComponents(o);n.set(r,{remainingCells:o,components:a,needsSplit:a.length>1,fullyCleared:o.length===0})}he.clearLayers(t),he.dropCellsAbove(t);const i=sA(t.length);return this.addScore(i),this.state.linesCleared+=t.length,this.notifyLinesChange(),this.onLayerClear&&this.onLayerClear({layers:t,score:i,totalLines:this.state.linesCleared}),{clearedLayers:t,affectedBlocks:n,dropAmount:t.length,score:i}}processSplits(t){const e=[];for(const[n,i]of t)i.fullyCleared?e.push({type:"remove",blockId:n}):i.needsSplit?(e.push({type:"split",blockId:n,components:i.components.map((r,o)=>({newBlockId:`${n}_split_${o}`,cells:r.map(a=>he.gridToWorld(a.x,a.y,a.z))}))}),this.onBlockSplit&&this.onBlockSplit({blockId:n,componentCount:i.components.length})):e.push({type:"shrink",blockId:n,cells:i.remainingCells.map(r=>he.gridToWorld(r.x,r.y,r.z))});return e}getBlockWorldPositions(t,e){const n=[],i=t.position;for(let r=0;r<t.shapes.length;r++){const o=t.shapeOffsets[r],a=e.vmult(o);n.push({x:i.x+a.x,y:i.y+a.y,z:i.z+a.z})}return n}notifyScoreChange(){this.onScoreChange&&this.onScoreChange(this.state.score,this.getLevelConfig()?.targetScore||0)}notifyLevelChange(){this.onLevelChange&&this.onLevelChange(this.state.level,this.getCurrentWorld(),this.getCurrentWorldName())}notifyLinesChange(){this.onLinesChange&&this.onLinesChange(this.state.linesCleared)}getScore(){return this.state.score}getLevel(){return this.state.level}getLinesCleared(){return this.state.linesCleared}isPlaying(){return this.state.isPlaying}isPaused(){return this.state.isPaused}isGameOver(){return this.state.isGameOver}}const Je=new qA,YA=1/60;A.prototype.approxEquals=function(s,t){return this.distanceTo(s)<t};const pe={opacity:.712,roughness:.527,metalness:0,emissiveIntensity:5,transmission:0,thickness:5,depthWrite:!1,envMapIntensity:1,maxCells:8,palette:"Jewel",blockMode:"2D",selectionLightIntensity:50,saveToClipboard:()=>{const s={...pe,lights:typeof cs<"u"?cs:{}};delete s.saveToClipboard;const t=JSON.stringify(s,null,2);navigator.clipboard.writeText(t).then(()=>{alert("Full Configuration (Main + Lights) copied to clipboard!")})}},Gi={Pastel:null,Vivid:[16726832,16749824,16763904,3458905,31487,5789398,11490014,51134],Rainbow:[15087942,16032353,15320170,2792847,2508371,6966419,1671876,9095462],Neon:[16711808,16731392,16770560,65382,52479,10040319,16724838,65484],Candy:[16739179,16770669,5164484,9822675,15958401,11179738,16562899,11065578],Jewel:[12082268,12883306,13940858,5933690,4876938,8018570,9071258,5933706],Mineral:[8228501,11121593,13094609,15461355,5794162,9413549,12109260,7044485],Botanical:[6254945,7179124,9410425,15723224,13683136,8035198,11060386,4873547],Clay:[9272168,10784892,13153958,15851209,13613463,12099467,13943984,10126965],Autumn:[13468991,14596231,16032864,13789470,9127187,15245388,13204794,10903086],Forest:[2263842,3050327,3978097,7048739,5597999,4881482,1993502,4021821],Earth:[9127187,10506797,7029795,9139029,7356948,9723960,8215114,6044974],Moss:[4873507,8165982,9083483,11386764,6192460,7048007,10005880,4017450],Stone:[6908265,8421504,11119017,9143938,7372944,10132122,5921370,7895160],Ocean:[1994618,3050379,4889499,3569032,6266528,4033164,1728362,5147533],Sunset:[13391104,14708768,13935988,12687979,12088115,15238204,14052140,12879952],Driftwood:[10259325,11905176,12892589,9141611,10918023,11378320,8220771,13221812],Slate:[7372944,7833753,11584734,8952234,6122878,10136766,5070190,8820132],Midnight:[3100495,3556687,4871528,4020826,2899536,1980986,3820894,2768719]},Qn=new mu;Qn.hide();window.addEventListener("keydown",s=>{s.ctrlKey&&s.altKey&&s.shiftKey&&s.key.toLowerCase()==="d"&&(s.preventDefault(),Qn._hidden?Qn.show():Qn.hide())});Qn.add(pe,"palette",Object.keys(Gi)).name("Base Palette").onChange($A);Qn.add(pe,"blockMode",["2D","3D"]).name("Block Mode");Qn.add(pe,"maxCells",1,8,1).name("Max Polyomino Cubes");Qn.add(pe,"saveToClipboard").name("💾 Save All Config");const Hi=Qn.addFolder("Block Material");Hi.add(pe,"opacity",0,1).onChange(ks);Hi.add(pe,"roughness",0,1).onChange(ks);Hi.add(pe,"metalness",0,1).onChange(ks);Hi.add(pe,"emissiveIntensity",0,5).onChange(ks);Hi.add(pe,"transmission",0,1).onChange(ks);Hi.add(pe,"thickness",0,5).onChange(ks);Hi.add(pe,"depthWrite").onChange(ks);Hi.add(pe,"selectionLightIntensity",0,50).name("Selection Light").onChange(s=>{Un&&(Un.intensity=s)});Hi.open();function ks(){it&&it.mesh&&it.mesh.traverse(s=>{s.isMesh&&s.material.isMeshPhysicalMaterial&&(s.material.opacity=pe.opacity,s.material.roughness=pe.roughness,s.material.metalness=pe.metalness,s.material.emissiveIntensity=pe.emissiveIntensity,s.material.transmission=pe.transmission,s.material.thickness=pe.thickness,s.material.depthWrite=pe.depthWrite,s.material.needsUpdate=!0)})}function $A(){const s=pe.palette;An.forEach(t=>{if(!t.mesh||!t.mesh.userData||!t.mesh.userData.isBlock)return;let e;if(s==="Pastel"||!Gi[s]){const n=Math.random(),i=.4+Math.random()*.2,r=.5+Math.random()*.2;e=new Dt().setHSL(n,i,r)}else{const n=Gi[s],i=n[Math.floor(Math.random()*n.length)];e=new Dt(i)}t.mesh.traverse(n=>{n.isMesh&&n.material&&(n.material.color.copy(e),n.material.emissive.copy(e))})})}const ne=new Mp;ne.background=new Dt(1381658);ne.fog=new Jh(1381658,20,50);const cn=new gn(75,window.innerWidth/window.innerHeight,.1,100);cn.position.set(8,12,12);cn.lookAt(0,0,0);const Hn=new uM({antialias:!0});Hn.setSize(window.innerWidth,window.innerHeight);Hn.setPixelRatio(window.devicePixelRatio);Hn.shadowMap.enabled=!0;Hn.shadowMap.type=Jf;Hn.toneMapping=Oh;Hn.toneMappingExposure=.096;document.body.appendChild(Hn.domElement);const jA=new Mh(Hn);ne.environment=jA.fromScene(new Jb,.04).texture;ne.environmentIntensity=1.212;const nm=new i0(14544639,2236962,1.398);ne.add(nm);const _n=new Ap(16774634,5);_n.position.set(10,15,10);_n.castShadow=!0;_n.shadow.mapSize.width=2048;_n.shadow.mapSize.height=2048;_n.shadow.radius=4;_n.shadow.bias=-1e-4;_n.shadow.camera.near=.5;_n.shadow.camera.far=100;_n.shadow.camera.left=-15;_n.shadow.camera.right=15;_n.shadow.camera.top=15;_n.shadow.camera.bottom=-15;ne.add(_n);const gu=new Ap(15463935,3.56);gu.position.set(-10,5,8);ne.add(gu);const ds=new r0(16777215,2.76);ds.position.set(0,12,-15);ds.angle=.8;ds.penumbra=.5;ds.decay=0;ds.distance=0;const xu=new be;xu.position.set(0,4,0);ne.add(xu);ds.target=xu;ne.add(ds);const cs={exposure:.096,ambientIntensity:1.398,keyIntensity:5,fillIntensity:3.56,rimIntensity:2.76,envIntensity:1.212},Vs=Qn.addFolder("✨ Studio Lighting");Vs.add(cs,"exposure",0,.2).name("Tone Exposure").onChange(s=>{Hn.toneMappingExposure=s});Vs.add(cs,"ambientIntensity",0,5).name("Global Ambient").onChange(s=>{nm.intensity=s});Vs.add(cs,"keyIntensity",0,20).name("Key (Front-Top)").onChange(s=>{_n.intensity=s});Vs.add(cs,"fillIntensity",0,20).name("Fill (Side)").onChange(s=>{gu.intensity=s});Vs.add(cs,"rimIntensity",0,20).name("Rim (Back)").onChange(s=>{ds.intensity=s});Vs.add(cs,"envIntensity",0,10).name("Env Reflection").onChange(s=>{ne.environmentIntensity=s});Vs.open();const ni=new Ib;ni.gravity.set(0,-25,0);ni.broadphase=new Mr(ni);const Dr=new Io("default"),ZA=new Po(Dr,Dr,{friction:0,restitution:0});ni.addContactMaterial(ZA);const ti=new zb(cn,Hn.domElement);ti.enableDamping=!0;ti.maxPolarAngle=Math.PI/2-.1;ti.addEventListener("start",()=>{_u=!0,pl=performance.now()});ti.addEventListener("end",()=>{_u=!1,pl=performance.now()});ti.addEventListener("change",()=>{pl=performance.now()});const Ke={autoZoom:!0,padding:2,minDistance:8,maxDistance:60,smoothing:.008,recoveryDelay:3,recoverySmoothingMultiplier:.1,verticalBias:.3};let pl=0,_u=!1;const Gs=Qn.addFolder("📷 Dynamic Camera");Gs.add(Ke,"autoZoom").name("Auto Zoom");Gs.add(Ke,"padding",0,5).name("Edge Padding");Gs.add(Ke,"minDistance",5,20).name("Min Distance");Gs.add(Ke,"maxDistance",20,100).name("Max Distance");Gs.add(Ke,"smoothing",.001,.05).name("Smoothing");Gs.add(Ke,"recoveryDelay",.5,10).name("Recovery Delay (s)");Gs.open();function KA(){const s=new Ue,t=new N(-xn/2,0,-xn/2),e=new N(xn/2,Nr,xn/2);s.set(t,e);for(const n of An)if(n.mesh&&n.mesh.userData&&n.mesh.userData.isBlock){const i=new Ue().setFromObject(n.mesh);s.union(i)}return s}function JA(s){const t=Za.degToRad(cn.fov),e=2*Math.atan(Math.tan(t/2)*cn.aspect),n=s/Math.sin(t/2),i=s/Math.sin(e/2);return Math.max(n,i)}function QA(){if(!Ke.autoZoom||_u)return;const s=(performance.now()-pl)/1e3;if(s<Ke.recoveryDelay)return;const t=Math.min(1,(s-Ke.recoveryDelay)/Ke.recoveryDelay),e=Ke.smoothing*Za.lerp(Ke.recoverySmoothingMultiplier,1,t*t),n=KA(),i=new N,r=new N;n.getCenter(i),n.getSize(r);const a=Math.sqrt(r.x*r.x+r.y*r.y+r.z*r.z)/2+Ke.padding;let l=JA(a);l=Za.clamp(l,Ke.minDistance,Ke.maxDistance);const c=new N(i.x,i.y*Ke.verticalBias,i.z);ti.target.lerp(c,e);const h=new N().subVectors(cn.position,ti.target).normalize(),d=new N().copy(ti.target).addScaledVector(h,l);cn.position.lerp(d,e)}const An=[];function vu(s,t){return ne.add(s),ni.addBody(t),An.push({mesh:s,body:t}),{mesh:s,body:t}}const tT=new zr(100,100),eT=new Us({color:3355443,metalness:0,roughness:1}),yu=new Zt(tT,eT);yu.rotation.x=-Math.PI*.5;yu.receiveShadow=!0;ne.add(yu);const im=new pt({type:pt.STATIC,shape:new fS});im.quaternion.setFromEuler(-Math.PI*.5,0,0);ni.addBody(im);const xn=8,Nr=.5,nT=new hs(xn,Nr,xn),iT=new Us({color:4473941,metalness:.2,roughness:.8}),Mu=new Zt(nT,iT);Mu.position.y=Nr/2;Mu.receiveShadow=!0;ne.add(Mu);const sT=new pt({type:pt.STATIC,shape:new us(new A(xn/2,Nr/2,xn/2)),position:new A(0,Nr/2,0),material:Dr});ni.addBody(sT);const sm=new f0(xn,8,8947848,5592405);sm.position.y=Nr+.01;ne.add(sm);const fo=1,Qi=20,Na=xn/2+fo/2,rT=[{size:[xn,Qi,fo],pos:[0,Qi/2,-Na]},{size:[xn,Qi,fo],pos:[0,Qi/2,Na]},{size:[fo,Qi,xn],pos:[-Na,Qi/2,0]},{size:[fo,Qi,xn],pos:[Na,Qi/2,0]}];rT.forEach(s=>{const t=new pt({mass:0,position:new A(...s.pos),shape:new us(new A(s.size[0]/2,s.size[1]/2,s.size[2]/2))});ni.addBody(t)});let it=null,Un=null,_e="move";const Rt={container:document.getElementById("ui-container"),controls:document.getElementById("selected-controls"),btnSpawn:document.getElementById("btn-spawn"),btnDrop:document.getElementById("btn-drop"),moveBtns:document.querySelectorAll(".btn-move"),rotBtns:document.querySelectorAll(".btn-rot"),score:document.getElementById("score-display"),indicator:document.getElementById("mode-indicator"),worldName:document.getElementById("world-name"),levelDisplay:document.getElementById("level-display"),linesDisplay:document.getElementById("lines-display"),clearFeedback:document.getElementById("clear-feedback"),clearText:document.getElementById("clear-text"),gameOverOverlay:document.getElementById("game-over-overlay"),gameOverTitle:document.getElementById("game-over-title"),finalScore:document.getElementById("final-score"),finalLevel:document.getElementById("final-level"),finalLines:document.getElementById("final-lines"),btnRestart:document.getElementById("btn-restart")};Je.onScoreChange=(s,t)=>{Rt.score&&(Rt.score.innerText=`Score: ${s}`)};Je.onLevelChange=(s,t,e)=>{Rt.levelDisplay&&(Rt.levelDisplay.innerText=`Level ${s}`,Rt.levelDisplay.classList.add("level-up"),setTimeout(()=>Rt.levelDisplay.classList.remove("level-up"),500)),Rt.worldName&&(Rt.worldName.innerText=e)};Je.onLinesChange=s=>{Rt.linesDisplay&&(Rt.linesDisplay.innerText=`Lines: ${s}`)};Je.onLayerClear=({layers:s,score:t,totalLines:e})=>{rm(t,s.length),om(s)};Je.onGameOver=({win:s,score:t,level:e})=>{Rt.gameOverOverlay&&(Rt.gameOverOverlay.classList.remove("hidden"),Rt.gameOverTitle&&(Rt.gameOverTitle.innerText=s?"Victory!":"Game Over",Rt.gameOverTitle.className=s?"win":""),Rt.finalScore&&(Rt.finalScore.innerText=`Score: ${t}`),Rt.finalLevel&&(Rt.finalLevel.innerText=`Level: ${e}`),Rt.finalLines&&(Rt.finalLines.innerText=`Lines Cleared: ${Je.getLinesCleared()}`))};Je.spawnBlockFn=()=>um();function rm(s,t){!Rt.clearFeedback||!Rt.clearText||(Rt.clearText.innerText=`+${s}`,Rt.clearFeedback.classList.remove("hidden","multi-clear"),t>1&&Rt.clearFeedback.classList.add("multi-clear"),setTimeout(()=>{Rt.clearFeedback.classList.add("hidden")},1e3))}function om(s){s.forEach(t=>{const e=t+ls+.5,n=new zr(jt,jt),i=new Nn({color:16771899,transparent:!0,opacity:.8,side:wn,depthWrite:!1}),r=new Zt(n,i);r.rotation.x=-Math.PI/2,r.position.y=e,ne.add(r);const o=performance.now(),a=500;function l(){const c=performance.now()-o,h=Math.min(1,c/a);r.material.opacity=.8*(1-h),r.scale.y=1+h*.5,h<1?requestAnimationFrame(l):(ne.remove(r),n.dispose(),i.dispose())}l()})}function am(){Je.init(1);const s=Je.getLevelConfig();s&&s.prefillPercent>0&&oT(s.prefillPercent,s.prefillHeight||3)}function oT(s,t){const e=jt*jt*t,n=Math.floor(e*s),i=[];for(let o=0;o<jt;o++)for(let a=0;a<jt;a++)for(let l=0;l<t;l++)i.push({x:o,y:l,z:a});for(let o=i.length-1;o>0;o--){const a=Math.floor(Math.random()*(o+1));[i[o],i[a]]=[i[a],i[o]]}const r=i.slice(0,n);for(const o of r)aT(o.x,o.y,o.z)}function aT(s,t,e){const i=new A(.49,.49,.49),r=s-jt/2+.5,o=t+ls+.5,a=e-jt/2+.5;let l;const c=pe.palette,h=0;if(c==="Pastel"||!Gi[c]){const x=h/8;l=new Dt().setHSL(x,.5,.6)}else{const x=Gi[c],y=x[h%x.length];l=new Dt(y)}l.multiplyScalar(.7);const d=new Us({color:l,emissive:l.clone().multiplyScalar(.3),metalness:.1,roughness:.6,flatShading:!1}),u=1*1.02,f=new Lo(u,u,u,4,.08),g=new Zt(f,d);g.castShadow=!0,g.receiveShadow=!0;const _=new On;_.position.set(r,o,a),_.add(g);const m=new pt({mass:0,type:pt.STATIC,position:new A(r,o,a),material:Dr});m.addShape(new us(i));const p=he.generateBlockId();_.userData={isBlock:!0,body:m,blockId:p,isPrefill:!0,refOffset:new A(0,0,0),minOffset:new A(-.5,-.5,-.5),maxOffset:new A(.5,.5,.5)},vu(_,m),he.registerBlock(p,[{x:r,y:o,z:a}])}Rt.btnRestart&&Rt.btnRestart.addEventListener("click",()=>{for(Rt.gameOverOverlay&&Rt.gameOverOverlay.classList.add("hidden");An.length>0;){const s=An.pop();s.mesh&&ne.remove(s.mesh),s.body&&ni.removeBody(s.body)}it=null,am()});const ml=new p0(new be,16776960);ne.add(ml);ml.visible=!1;const hi=new On;ne.add(hi);const lm=Su("x",16724838),cm=Su("y",3407718),hm=Su("z",3368703);hi.add(lm.group);hi.add(cm.group);hi.add(hm.group);hi.visible=!1;const _r={x:lm,y:cm,z:hm};function Su(s,t){const e=new On,n=new Dt(t),i=n.clone().multiplyScalar(1.5),r=2.5,o=1.8,a=.06,l=new Qa(.04,.04,r*2,16),c=new Nn({color:n,transparent:!0,opacity:.9,depthTest:!1,toneMapped:!1}),h=new Zt(l,c),d=new Qa(.12,.12,r*2,16),u=new Nn({color:i,transparent:!0,opacity:.25,depthTest:!1,toneMapped:!1}),f=new Zt(d,u),g=new _o(.12,16,16),_=new Nn({color:i,transparent:!0,opacity:.95,depthTest:!1,toneMapped:!1}),m=new Zt(g,_),p=new Zt(g,_.clone());s==="x"?(h.rotation.z=Math.PI/2,f.rotation.z=Math.PI/2,m.position.set(-r,0,0),p.position.set(r,0,0)):s==="y"?(m.position.set(0,-r,0),p.position.set(0,r,0)):(h.rotation.x=Math.PI/2,f.rotation.x=Math.PI/2,m.position.set(0,0,-r),p.position.set(0,0,r)),e.add(h),e.add(f),e.add(m),e.add(p);const x=Math.PI*1.6,y=new tl(o,a,12,64,x),v=new Nn({color:n,depthTest:!1,toneMapped:!1,transparent:!0,opacity:.95}),M=new Zt(y,v),w=new tl(o,a*2.5,8,48,x),E=new Nn({color:i,depthTest:!1,toneMapped:!1,transparent:!0,opacity:.2}),C=new Zt(w,E);s==="x"?(M.rotation.y=Math.PI/2,C.rotation.y=Math.PI/2):s==="y"&&(M.rotation.x=Math.PI/2,C.rotation.x=Math.PI/2),e.add(M),e.add(C);const S=new _o(.08,12,12),b=new Nn({color:16777215,depthTest:!1,toneMapped:!1}),R=new Zt(S,b),L=new _o(.16,8,8),P=new Nn({color:i,depthTest:!1,toneMapped:!1,transparent:!0,opacity:.5}),D=new Zt(L,P),B=new On;return B.add(R),B.add(D),s==="x"?(R.position.set(0,o,0),D.position.set(0,o,0)):(R.position.set(o,0,0),D.position.set(o,0,0)),e.add(B),{group:e,spinGroup:B,torus:M,torusGlow:C,type:s,ringRadius:o}}let Zf=0;function bu(s=0){if(!it){hi.visible=!1;return}if(hi.position.copy(it.mesh.position),hi.visible=!0,_r.x.group.visible=_e==="rotate-x",_r.y.group.visible=_e==="rotate-y",_r.z.group.visible=_e==="rotate-z",_e==="move"&&(hi.visible=!1),hi.visible&&s>0){Zf+=s;const e=Zf*1.5*Math.PI*2;let n=null;if(_e==="rotate-x"?n=_r.x:_e==="rotate-y"?n=_r.y:_e==="rotate-z"&&(n=_r.z),n){const i=n.ringRadius;n.type==="x"?n.spinGroup.children.forEach(o=>{o.position.set(0,i*Math.cos(e),i*Math.sin(e))}):n.type==="y"?n.spinGroup.children.forEach(o=>{o.position.set(i*Math.cos(e),0,i*Math.sin(e))}):n.spinGroup.children.forEach(o=>{o.position.set(i*Math.cos(e),i*Math.sin(e),0)});const r=.15+.1*Math.sin(e*2);n.torusGlow&&n.torusGlow.material&&(n.torusGlow.material.opacity=r)}}}function um(){if(Je.isGameOver())return;const s=Je.getNextShape();console.log("Spawning shape:",s);const{id:t,coords:e}=s;e&&e.length>0?(console.log(`Using predefined shape: ${t} with ${e.length} cubes`),lT(new N(.5,10,.5),e,t)):(console.log("Fallback to random polyomino - shapeCoords:",e),cT(new N(.5,10,.5)))}function lT(s,t,e){const n=t.length,i=1,r=new A(.49,.49,.49);let o;const a=pe.palette,l=Math.min(n-1,7);if(a==="Pastel"||!Gi[a]){const q=l/8;o=new Dt().setHSL(q,.5,.6)}else{const q=Gi[a],K=q[l%q.length];o=new Dt(K)}const c=new Us({color:o,emissive:o,metalness:.1,roughness:.5,flatShading:!1}),h=WA(t),d=new On;d.position.copy(s);const u=n*1,f=new pt({mass:u,position:new A(s.x,s.y,s.z),material:Dr,linearDamping:.01,angularDamping:.1,fixedRotation:!0});f.angularFactor.set(0,0,0),f.linearFactor.set(1,1,1);const g=he.generateBlockId(),_=i*1.05,m=new Lo(_,_,_,4,.08),p=new tm;let x=null;h.forEach(q=>{const K=q.x*i,Q=q.y*i,et=q.z*i,yt=new A(K,Q,et);f.addShape(new us(r),yt);const Yt=new sl(m);Yt.position.set(K,Q,et),Yt.updateMatrixWorld(),x===null?x=Yt:x=p.evaluate(x,Yt,fu)});const y=x.geometry;y.computeVertexNormals();const v=new Zt(y,c);v.castShadow=!0,v.receiveShadow=!0,d.add(v);let M=1/0,w=1/0,E=1/0,C=-1/0,S=-1/0,b=-1/0;h.forEach(q=>{const K=q.x*i,Q=q.y*i,et=q.z*i,yt=i*.5;M=Math.min(M,K-yt),w=Math.min(w,Q-yt),E=Math.min(E,et-yt),C=Math.max(C,K+yt),S=Math.max(S,Q+yt),b=Math.max(b,et+yt)});const R=new A(M,w,E),L=new A(C,S,b),P=h[0],D=P.x*i,B=P.y*i,U=P.z*i,k=new A(D,B,U);d.userData={isBlock:!0,body:f,refOffset:k,minOffset:R,maxOffset:L,blockId:g,shapeId:e,cubeCount:n,localCoords:h},vu(d,f);const H=Do(f.position,f.quaternion,k);f.position.copy(H),d.position.copy(H)}function cT(s){const t=Math.floor(Math.random()*pe.maxCells)+1,e=1,n=new A(.49,.49,.49);let i;const r=pe.palette,o=t-1;if(r==="Pastel"||!Gi[r]){const H=o/8;i=new Dt().setHSL(H,.5,.6)}else{const H=Gi[r],q=H[o%H.length];i=new Dt(q)}const a=new Us({color:i,emissive:i,metalness:.1,roughness:.5,flatShading:!1}),l=[{x:0,y:0,z:0}],c=pe.blockMode==="2D"?[{x:1,y:0,z:0},{x:-1,y:0,z:0},{x:0,y:0,z:1},{x:0,y:0,z:-1}]:[{x:1,y:0,z:0},{x:-1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:-1,z:0},{x:0,y:0,z:1},{x:0,y:0,z:-1}];for(;l.length<t;){const H=l[Math.floor(Math.random()*l.length)],q=c[Math.floor(Math.random()*c.length)],K={x:H.x+q.x,y:H.y+q.y,z:H.z+q.z};l.some(Q=>Q.x===K.x&&Q.y===K.y&&Q.z===K.z)||l.push(K)}const h=l.reduce((H,q)=>({x:H.x+q.x,y:H.y+q.y,z:H.z+q.z}),{x:0,y:0,z:0});h.x/=t,h.y/=t,h.z/=t;const d=new On;d.position.copy(s);const u=t*1,f=new pt({mass:u,position:new A(s.x,s.y,s.z),material:Dr,linearDamping:.01,angularDamping:.1,fixedRotation:!0});f.angularFactor.set(0,0,0),f.linearFactor.set(1,1,1);const g=e*1.05,_=new Lo(g,g,g,4,.08),m=new tm;let p=null;l.forEach(H=>{const q=(H.x-h.x)*e,K=(H.y-h.y)*e,Q=(H.z-h.z)*e,et=new A(q,K,Q);f.addShape(new us(n),et);const yt=new sl(_);yt.position.set(q,K,Q),yt.updateMatrixWorld(),p===null?p=yt:p=m.evaluate(p,yt,fu)});const x=p.geometry;x.computeVertexNormals();const y=new Zt(x,a);y.castShadow=!0,y.receiveShadow=!0,d.add(y);let v=1/0,M=1/0,w=1/0,E=-1/0,C=-1/0,S=-1/0;l.forEach(H=>{const q=(H.x-h.x)*e,K=(H.y-h.y)*e,Q=(H.z-h.z)*e,et=e*.5;v=Math.min(v,q-et),M=Math.min(M,K-et),w=Math.min(w,Q-et),E=Math.max(E,q+et),C=Math.max(C,K+et),S=Math.max(S,Q+et)});const b=new A(v,M,w),R=new A(E,C,S),L=l[0],P=(L.x-h.x)*e,D=(L.y-h.y)*e,B=(L.z-h.z)*e,U=new A(P,D,B);d.userData={isBlock:!0,body:f,refOffset:U,minOffset:b,maxOffset:R},vu(d,f);const k=Do(f.position,f.quaternion,U);f.position.copy(k),d.position.copy(k)}function Do(s,t,e){const n=new A().copy(e);t.vmult(n,n);const i=s.vadd(n),r=Math.round(i.x-.5)+.5,o=Math.round(i.z-.5)+.5,a=r-n.x,l=o-n.z;return new A(a,s.y,l)}function wu(s,t,e,n){const i=[new A(e.x,e.y,e.z),new A(n.x,e.y,e.z),new A(e.x,n.y,e.z),new A(n.x,n.y,e.z),new A(e.x,e.y,n.z),new A(n.x,e.y,n.z),new A(e.x,n.y,n.z),new A(n.x,n.y,n.z)];let r=1/0,o=-1/0,a=1/0,l=-1/0;i.forEach(u=>{const f=new A().copy(u);t.vmult(f,f),f.vadd(s,f),r=Math.min(r,f.x),o=Math.max(o,f.x),a=Math.min(a,f.z),l=Math.max(l,f.z)});const c=4;let h=0,d=0;return o>c&&(h=c-o),r<-c&&(h=-c-r),l>c&&(d=c-l),a<-c&&(d=-c-a),new A(s.x+h,s.y,s.z+d)}function dm(){it?Rt.controls.classList.remove("hidden"):Rt.controls.classList.add("hidden")}let Bn=null;function hT(s){if(it&&it.mesh===s)return;it&&Fr();const t=An.find(o=>o.mesh===s);if(!t)return;let e=16777215;s.traverse(o=>{o.isMesh&&e===16777215&&(e=o.material.color.getHex())});const n=[];s.traverse(o=>{o.isMesh&&n.push({mesh:o,originalMaterial:o.material})});const i=new Dt(e).multiplyScalar(1.5),r=new Nn({color:i,side:Ye,transparent:!0,opacity:.8,depthTest:!0});Bn=new On,s.traverse(o=>{if(o.isMesh){const a=new Zt(o.geometry.clone(),r);a.scale.setScalar(1.08),a.position.copy(o.position),a.rotation.copy(o.rotation),Bn.add(a)}}),Bn.position.copy(s.position),Bn.quaternion.copy(s.quaternion),ne.add(Bn),it={mesh:s,body:t.body,originalMass:1,userData:s.userData,targetPosition:new A().copy(t.body.position),materialCache:n,outlineColor:e},Un&&ne.remove(Un),Un=new Ep(e,pe.selectionLightIntensity,0,0),Un.position.copy(s.position),ne.add(Un),it.body.type=pt.DYNAMIC,it.body.mass=1,it.body.updateMassProperties(),it.body.wakeUp(),_e="move",Rt.indicator&&(Rt.indicator.innerText="✥",Rt.indicator.classList.remove("hidden")),Rt.indicator&&(Rt.indicator.innerText="✥",Rt.indicator.classList.remove("hidden")),dm(),fm()}function Fr(){if(!it)return;Un&&(ne.remove(Un),Un=null),Bn&&(ne.remove(Bn),Bn.traverse(i=>{i.isMesh&&(i.geometry.dispose(),i.material.dispose())}),Bn=null),Se&&(ne.remove(Se),Se=null);const s=it.targetPosition,t=it.body.quaternion,e=gl(s,t);it.body.position.copy(e),it.mesh.position.copy(e),it.body.quaternion.copy(t),it.mesh.quaternion.copy(t),it.body.mass=0,it.body.type=pt.STATIC,it.body.updateMassProperties(),it.body.velocity.set(0,0,0),it.body.angularVelocity.set(0,0,0);const n=it.userData.blockId;if(n){const i=uT(it.body,t);console.log("=== BLOCK LANDING ==="),console.log("Block ID:",n),console.log("World positions:",i),i.forEach((l,c)=>{const h=he.worldToGrid(l.x,l.y,l.z);console.log(`  Cube ${c}: world(${l.x.toFixed(2)}, ${l.y.toFixed(2)}, ${l.z.toFixed(2)}) -> grid`,h)}),he.registerBlock(n,i);const r=he.getStats();console.log("Grid stats:",r),console.log("=== LAYER 0 STATUS ==="),he.debugPrintLayer(0);let o=0;for(let l=0;l<jt;l++)for(let c=0;c<jt;c++)he.getCell(l,0,c)&&o++;console.log(`Layer 0: ${o} / ${jt*jt} cells filled`);const a=he.getCompleteLayers();console.log("Complete layers:",a),a.length>0&&(console.log("*** CLEARING LAYERS! ***"),dT(a))}Rt.indicator&&Rt.indicator.classList.add("hidden"),it=null,dm(),bu()}function uT(s,t){const e=[],n=s.position;for(let i=0;i<s.shapes.length;i++){const r=s.shapeOffsets[i],o=new A;t.vmult(r,o);let a=n.x+o.x,l=n.y+o.y,c=n.z+o.z;a=Math.round(a-.5)+.5,c=Math.round(c-.5)+.5,l=Math.round(l-ls-.5)+ls+.5,e.push({x:a,y:l,z:c})}return e}function dT(s){console.log("=== LAYER CLEAR START ==="),console.log("Clearing layers:",s),console.log("Grid before clear:"),he.debugPrintLayer(0);const t=new Set;for(const i of s)he.getBlocksInLayer(i).forEach(o=>t.add(o));const e=new Map;for(const i of t){const r=he.getBlockCellsNotInLayers(i,s),o=he.findConnectedComponents(r);e.set(i,{remainingCells:r,components:o,needsSplit:o.length>1,fullyCleared:r.length===0})}he.clearLayers(s),he.dropCellsAbove(s),console.log("Grid after clear:"),he.debugPrintLayer(0),console.log("Grid stats after clear:",he.getStats()),console.log("=== LAYER CLEAR END ===");const n=Je.state?100*s.length*(s.length===1?1:s.length===2?3:s.length===3?6:10):0;Je.state&&(Je.addScore(n),Je.state.linesCleared+=s.length,Je.notifyLinesChange()),rm(n,s.length),om(s),fT(e,s)}function fT(s,t){t.length;for(const[n,i]of s){const r=An.findIndex(a=>a.mesh?.userData?.blockId===n);if(r===-1)continue;const o=An[r];if(i.fullyCleared)ne.remove(o.mesh),ni.removeBody(o.body),An.splice(r,1);else{const a=Math.min(...i.remainingCells.map(c=>c.y)),l=t.filter(c=>c<a).length;if(l>0){const c=l;o.body.position.y-=c,o.mesh.position.y-=c}}}const e=Math.min(...t);for(const n of An){if(!n.mesh?.userData?.blockId||s.has(n.mesh.userData.blockId))continue;const i=n.body.position.y;if(i>e+ls+1){const r=t.filter(o=>o+ls<i).length;r>0&&(n.body.position.y-=r,n.mesh.position.y-=r)}}}let Se=null;function fm(){if(!it){Se&&(ne.remove(Se),Se=null);return}if(!Se||Se.userData.sourceId!==it.mesh.uuid){Se&&ne.remove(Se),Se=new On,Se.position.copy(it.mesh.position),Se.quaternion.copy(it.mesh.quaternion),Se.scale.copy(it.mesh.scale),it.mesh.children.forEach(a=>{const l=a.clone();Se.add(l)}),Se.userData.sourceId=it.mesh.uuid,Se.userData.isGhost=!0;let r=16777215;if(it.materialCache&&it.materialCache.length>0){const a=it.materialCache[0].originalMaterial;a&&a.color&&(r=a.color.getHex())}const o=new Nn({color:r,transparent:!0,opacity:.5,depthWrite:!1});Se.traverse(a=>{a.isMesh&&(a.material=o,a.castShadow=!1,a.receiveShadow=!1)}),ne.add(Se)}const s=it.targetPosition,t=it.body.quaternion,e=new A(s.x,.5,s.z),n=gl(e,t);Se.position.set(n.x,n.y,n.z),Se.quaternion.copy(it.mesh.quaternion);const i=Se.position.distanceTo(it.mesh.position);Se.visible=i>.1}const Ur=new h0,Oi=new Pt,Fh=new Fn,ol=new N,pm=new N;let al=!1,po=0,mo=0,So=!1,Uh=!1;function pT(s,t){Oi.x=s/window.innerWidth*2-1,Oi.y=-(t/window.innerHeight)*2+1,Ur.setFromCamera(Oi,cn);const e=An.map(n=>n.mesh);return Ur.intersectObjects(e,!0)}function mm(s){if(s.target.closest("button")||s.target.closest(".lil-gui"))return;let t,e;s.touches?(s.preventDefault(),t=s.touches[0].clientX,e=s.touches[0].clientY,Uh=!0):(t=s.clientX,e=s.clientY,Uh=!1);const n=pT(t,e);if(n.length>0){let i=n[0].object;for(;i.parent&&!i.userData.isBlock&&i!==ne;)i=i.parent;i.userData.isBlock?((!it||it.mesh!==i)&&hT(i),al=!0,po=t,mo=e,So=!1,Fh.setFromNormalAndCoplanarPoint(new N(0,1,0),it.mesh.position),Oi.x=t/window.innerWidth*2-1,Oi.y=-(e/window.innerHeight)*2+1,Ur.setFromCamera(Oi,cn),Ur.ray.intersectPlane(Fh,ol)&&pm.subVectors(it.mesh.position,ol),ti.enabled=!1):Fr()}else Fr()}function gm(s){if(!al||!it)return;let t,e;s.touches?(s.preventDefault(),t=s.touches[0].clientX,e=s.touches[0].clientY):(t=s.clientX,e=s.clientY);const n=t-po,i=e-mo,r=Uh?25:10;if(!So&&Math.hypot(n,i)>r&&(So=!0),!!So){if(_e==="move"){if(Oi.x=t/window.innerWidth*2-1,Oi.y=-(e/window.innerHeight)*2+1,Ur.setFromCamera(Oi,cn),Ur.ray.intersectPlane(Fh,ol)){const o=new N().addVectors(ol,pm),a=new A(o.x,it.mesh.position.y,o.z);let l=Do(a,it.body.quaternion,it.userData.refOffset);it.userData.minOffset&&it.userData.maxOffset&&(l=wu(l,it.body.quaternion,it.userData.minOffset,it.userData.maxOffset)),it.targetPosition.approxEquals(l,.01)||br(l.x-it.targetPosition.x,0,l.z-it.targetPosition.z),ml.update()}}else if(_e.startsWith("rotate")){if(_e==="rotate-y"&&Math.abs(n)>30){const a=Math.sign(n);bn(new A(0,1,0),a*Math.PI/2),po=t,mo=e}else if(_e==="rotate-x"&&Math.abs(i)>30){const a=Math.sign(i);bn(new A(1,0,0),a*Math.PI/2),po=t,mo=e}else if(_e==="rotate-z"&&Math.abs(n)>30){const a=Math.sign(n);bn(new A(0,0,1),-a*Math.PI/2),po=t,mo=e}}}}function xm(){al&&!So&&it&&(_e==="move"?_e="rotate-x":_e==="rotate-x"?_e="rotate-y":_e==="rotate-y"?_e="rotate-z":_e="move",Rt.indicator&&(_e==="move"?(Rt.indicator.innerText="✥",Rt.indicator.classList.remove("hidden")):Rt.indicator.classList.add("hidden")),bu(),console.log("Switched to",_e)),al=!1,ti.enabled=!0}window.addEventListener("mousedown",mm);window.addEventListener("mousemove",gm);window.addEventListener("mouseup",xm);window.addEventListener("touchstart",mm,{passive:!1});window.addEventListener("touchmove",gm,{passive:!1});window.addEventListener("touchend",xm);window.addEventListener("wheel",s=>{if(!it||!_e.startsWith("rotate"))return;s.preventDefault();const t=s.deltaY>0?1:-1;_e==="rotate-x"?bn(new A(1,0,0),t*Math.PI/2):_e==="rotate-y"?bn(new A(0,1,0),t*Math.PI/2):_e==="rotate-z"&&bn(new A(0,0,1),t*Math.PI/2)},{passive:!1});Rt.container.addEventListener("touchstart",s=>{s.target.closest("button")&&s.stopPropagation()},{passive:!1});Rt.container.addEventListener("mousedown",s=>{s.target.closest("button")&&s.stopPropagation()});Rt.btnSpawn.addEventListener("click",um);Rt.btnDrop&&Rt.btnDrop.addEventListener("click",Fr);Rt.moveBtns.forEach(s=>{s.addEventListener("click",t=>{t.stopPropagation();const e=t.target.closest("button").dataset.key,n=1;switch(e){case"ArrowUp":br(0,0,-n);break;case"ArrowDown":br(0,0,n);break;case"ArrowLeft":br(-n,0,0);break;case"ArrowRight":br(n,0,0);break}})});Rt.rotBtns&&Rt.rotBtns.forEach(s=>{s.addEventListener("click",t=>{t.stopPropagation();const e=t.target.closest("button"),n=e.dataset.axis,i=parseInt(e.dataset.dir);let r=new A(0,1,0);n==="x"&&r.set(1,0,0),n==="z"&&r.set(0,0,1),bn(r,Math.PI/2*i)})});function Fa(s,t){if(!it)return;const e=1,n=new N;cn.getWorldDirection(n),n.y=0,n.normalize();const i=new N;i.crossVectors(n,new N(0,1,0));const r=new N;r.addScaledVector(n,t),r.addScaledVector(i,s);let o=new N,a=-1/0;const l=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1)];if(r.lengthSq()>.1){r.normalize();for(const c of l){const h=r.dot(c);h>a&&(a=h,o.copy(c))}}else return;br(o.x*e,0,o.z*e)}let li=null;function _m(s,t){if(!it)return;const e=new N().copy(it.mesh.position),n=new N(s.x,s.y,s.z),i=new ei().copy(it.mesh.quaternion),r=new ei(t.x,t.y,t.z,t.w);li={startPos:e,endPos:n,startRot:i,endRot:r,startTime:performance.now(),duration:350},it.targetPosition.copy(s),it.body.quaternion.copy(t),it.body.position.copy(s)}function mT(s,t,e){if(!e||!e.shapes)return!1;try{const n=[];for(let i=0;i<e.shapes.length;i++){const r=e.shapeOffsets[i],o=t.vmult(r),a=s.vadd(o);n.push(a)}for(const i of An)if(!(!i.body||i.body===e)&&!(i.body.position.distanceTo(s)>10))for(let r=0;r<i.body.shapes.length;r++){const o=i.body.shapeOffsets[r],a=i.body.quaternion.vmult(o),l=i.body.position.vadd(a);for(const c of n)if(c.distanceTo(l)<.9)return!0}}catch(n){return console.warn("Overlap Check Error:",n),!1}return!1}function gT(s,t){let e=1/0;for(let i=0;i<s.shapes.length;i++){const r=s.shapeOffsets[i],o=t.vmult(r);o.y<e&&(e=o.y)}const n=1-e;return console.log(`CalcBaseY: minY=${e.toFixed(2)}, ProposedY=${n.toFixed(2)}`),n}function gl(s,t){const e=gT(it.body,t),n=new A(s.x,e,s.z);let i=0;const r=20;for(;mT(n,t,it.body)&&i<r;)n.y+=1,i++;return n}function xT(){if(!li||!it)return;let t=(performance.now()-li.startTime)/li.duration;t>1&&(t=1);const e=t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;it.mesh.position.lerpVectors(li.startPos,li.endPos,e),it.mesh.quaternion.slerpQuaternions(li.startRot,li.endRot,e),it.body.position.set(it.mesh.position.x,it.mesh.position.y,it.mesh.position.z),it.body.quaternion.set(it.mesh.quaternion.x,it.mesh.quaternion.y,it.mesh.quaternion.z,it.mesh.quaternion.w),t===1&&(li=null)}function br(s,t,e){if(!it)return;const n=it.targetPosition,i=new A(n.x+s,n.y+t,n.z+e);if(it.userData.minOffset&&it.userData.maxOffset){const o=wu(i,it.body.quaternion,it.userData.minOffset,it.userData.maxOffset);i.copy(o)}const r=gl(i,it.body.quaternion);_m(r,it.body.quaternion)}function bn(s,t){if(!it)return;const e=new Ce;e.setFromAxisAngle(s,t);let n=e.mult(it.body.quaternion);const i=new ei(n.x,n.y,n.z,n.w),r=new kn().setFromQuaternion(i);r.x=Math.round(r.x/(Math.PI/2))*(Math.PI/2),r.y=Math.round(r.y/(Math.PI/2))*(Math.PI/2),r.z=Math.round(r.z/(Math.PI/2))*(Math.PI/2);const o=new ei().setFromEuler(r);n=new Ce(o.x,o.y,o.z,o.w);const a=it.targetPosition.clone();let l=Do(a,n,it.userData.refOffset);it.userData.minOffset&&(l=wu(l,n,it.userData.minOffset,it.userData.maxOffset));const c=gl(l,n);_m(c,n)}window.addEventListener("keydown",s=>{if(!it)return;const t=1;switch(s.key){case"w":Fa(0,t);break;case"s":Fa(0,-t);break;case"a":Fa(-t,0);break;case"d":Fa(t,0);break;case"ArrowUp":bn(new A(1,0,0),-Math.PI/2);break;case"ArrowDown":bn(new A(1,0,0),Math.PI/2);break;case"ArrowLeft":bn(new A(0,1,0),Math.PI/2);break;case"ArrowRight":bn(new A(0,1,0),-Math.PI/2);break;case"q":bn(new A(0,0,1),Math.PI/2);break;case"e":bn(new A(0,0,1),-Math.PI/2);break;case"Enter":Fr();break;case"Escape":Fr();break}});const _T=new c0;let Kf=0;function vm(){const s=_T.getElapsedTime(),t=s-Kf;Kf=s,ni.step(YA,t,3);for(const e of An){if(it&&e.body===it.body){if(e.body.velocity.set(0,0,0),e.body.angularVelocity.set(0,0,0),li?xT():(e.mesh.position.copy(e.body.position),e.mesh.quaternion.copy(e.body.quaternion)),Rt.indicator){const n=e.mesh.position.clone();n.y+=1.5,n.project(cn);const i=(n.x*.5+.5)*window.innerWidth,r=(-(n.y*.5)+.5)*window.innerHeight;Rt.indicator.style.transform=`translate(-50%, -50%) translate(${i}px, ${r}px)`}Un&&Un.position.copy(e.mesh.position),Bn&&(Bn.position.copy(e.mesh.position),Bn.quaternion.copy(e.mesh.quaternion)),bu(t);try{fm()}catch(n){console.error("Ghost Error:",n)}}else{const n=e.body.velocity.length(),i=Math.abs(e.body.velocity.y);if(n<.5&&i<.1&&e.body.mass>0&&e.mesh.userData&&e.mesh.userData.refOffset){const r=Do(e.body.position,e.body.quaternion,e.mesh.userData.refOffset),o=.1;e.body.position.x+=(r.x-e.body.position.x)*o,e.body.position.z+=(r.z-e.body.position.z)*o,e.body.velocity.x*=.5,e.body.velocity.z*=.5}}e.mesh.position.copy(e.body.position),e.mesh.quaternion.copy(e.body.quaternion)}it&&ml.update(),QA(),ti.update(),Hn.render(ne,cn),requestAnimationFrame(vm)}window.addEventListener("resize",()=>{cn.aspect=window.innerWidth/window.innerHeight,cn.updateProjectionMatrix(),Hn.setSize(window.innerWidth,window.innerHeight)});am();vm();
