/*! For license information please see main.bundle.js.LICENSE.txt */
(self.webpackChunkwallet=self.webpackChunkwallet||[]).push([[179],{424:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(81),a=r.n(n),i=r(645),o=r.n(i)()(a());o.push([e.id,"textarea {\r\n    width: 100%;\r\n    height: 400px;\r\n}",""]);const s=o},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(n)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(o[l]=!0)}for(var u=0;u<e.length;u++){var c=[].concat(e[u]);n&&o[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),r&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=r):c[2]=r),a&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=a):c[4]="".concat(a)),t.push(c))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},493:(e,t,r)=>{var n;e=r.nmd(e),function(){"use strict";var a;try{a="undefined"!=typeof Intl&&void 0!==Intl.Collator?Intl.Collator("generic",{sensitivity:"base"}):null}catch(e){console.log("Collator could not be initialized and wouldn't be used")}var i=r(811),o=[],s=[],l={get:function(e,t,r){if(r&&a&&r.useCollator){var n,l,u,c,f,h,m=e.length,d=t.length;if(0===m)return d;if(0===d)return m;for(u=0;u<d;++u)o[u]=u,s[u]=t.charCodeAt(u);for(o[d]=d,u=0;u<m;++u){for(l=u+1,c=0;c<d;++c)n=l,h=0===a.compare(e.charAt(u),String.fromCharCode(s[c])),(l=o[c]+(h?0:1))>(f=n+1)&&(l=f),l>(f=o[c+1]+1)&&(l=f),o[c]=n;o[c]=l}return l}return i.distance(e,t)}};null!==r.amdD&&r.amdO?void 0===(n=function(){return l}.call(t,r,t,e))||(e.exports=n):null!==e&&void 0!==t&&e.exports===t?e.exports=l:"undefined"!=typeof self&&"function"==typeof self.postMessage&&"function"==typeof self.importScripts?self.Levenshtein=l:"undefined"!=typeof window&&null!==window&&(window.Levenshtein=l)}()},811:(e,t,r)=>{"use strict";r.r(t),r.d(t,{closest:()=>i,distance:()=>a});const n=new Uint32Array(65536),a=(e,t)=>{if(e.length<t.length){const r=t;t=e,e=r}return 0===t.length?e.length:e.length<=32?((e,t)=>{const r=e.length,a=t.length,i=1<<r-1;let o=-1,s=0,l=r,u=r;for(;u--;)n[e.charCodeAt(u)]|=1<<u;for(u=0;u<a;u++){let e=n[t.charCodeAt(u)];const r=e|s;e|=(e&o)+o^o,s|=~(e|o),o&=e,s&i&&l++,o&i&&l--,s=s<<1|1,o=o<<1|~(r|s),s&=r}for(u=r;u--;)n[e.charCodeAt(u)]=0;return l})(e,t):((e,t)=>{const r=t.length,a=e.length,i=[],o=[],s=Math.ceil(r/32),l=Math.ceil(a/32);for(let e=0;e<s;e++)o[e]=-1,i[e]=0;let u=0;for(;u<l-1;u++){let s=0,l=-1;const c=32*u,f=Math.min(32,a)+c;for(let t=c;t<f;t++)n[e.charCodeAt(t)]|=1<<t;for(let e=0;e<r;e++){const r=n[t.charCodeAt(e)],a=o[e/32|0]>>>e&1,u=i[e/32|0]>>>e&1,c=r|s,f=((r|u)&l)+l^l|r|u;let h=s|~(f|l),m=l&f;h>>>31^a&&(o[e/32|0]^=1<<e),m>>>31^u&&(i[e/32|0]^=1<<e),h=h<<1|a,m=m<<1|u,l=m|~(c|h),s=h&c}for(let t=c;t<f;t++)n[e.charCodeAt(t)]=0}let c=0,f=-1;const h=32*u,m=Math.min(32,a-h)+h;for(let t=h;t<m;t++)n[e.charCodeAt(t)]|=1<<t;let d=a;for(let e=0;e<r;e++){const r=n[t.charCodeAt(e)],s=o[e/32|0]>>>e&1,l=i[e/32|0]>>>e&1,u=r|c,h=((r|l)&f)+f^f|r|l;let m=c|~(h|f),p=f&h;d+=m>>>a-1&1,d-=p>>>a-1&1,m>>>31^s&&(o[e/32|0]^=1<<e),p>>>31^l&&(i[e/32|0]^=1<<e),m=m<<1|s,p=p<<1|l,f=p|~(u|m),c=m&u}for(let t=h;t<m;t++)n[e.charCodeAt(t)]=0;return d})(e,t)},i=(e,t)=>{let r=1/0,n=0;for(let i=0;i<t.length;i++){const o=a(e,t[i]);o<r&&(r=o,n=i)}return t[n]}},77:function(e,t,r){var n,a;n=function(){var e,t,r,n,a,i={},o={},s={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},l={currentLocale:s.currentLocale,zeroFormat:s.zeroFormat,nullFormat:s.nullFormat,defaultFormat:s.defaultFormat,scalePercentBy100:s.scalePercentBy100};function u(e,t){this._input=e,this._value=t}return(e=function(r){var n,a,o,s;if(e.isNumeral(r))n=r.value();else if(0===r||void 0===r)n=0;else if(null===r||t.isNaN(r))n=null;else if("string"==typeof r)if(l.zeroFormat&&r===l.zeroFormat)n=0;else if(l.nullFormat&&r===l.nullFormat||!r.replace(/[^0-9]+/g,"").length)n=null;else{for(a in i)if((s="function"==typeof i[a].regexps.unformat?i[a].regexps.unformat():i[a].regexps.unformat)&&r.match(s)){o=i[a].unformat;break}n=(o=o||e._.stringToNumber)(r)}else n=Number(r)||null;return new u(r,n)}).version="2.0.6",e.isNumeral=function(e){return e instanceof u},e._=t={numberToFormat:function(t,r,n){var a,i,s,l,u,c,f,h,m=o[e.options.currentLocale],d=!1,p=!1,g="",b=1e12,v=1e9,y=1e6,w="",_=!1;if(t=t||0,i=Math.abs(t),e._.includes(r,"(")?(d=!0,r=r.replace(/[\(|\)]/g,"")):(e._.includes(r,"+")||e._.includes(r,"-"))&&(u=e._.includes(r,"+")?r.indexOf("+"):t<0?r.indexOf("-"):-1,r=r.replace(/[\+|\-]/g,"")),e._.includes(r,"a")&&(a=!!(a=r.match(/a(k|m|b|t)?/))&&a[1],e._.includes(r," a")&&(g=" "),r=r.replace(new RegExp(g+"a[kmbt]?"),""),i>=b&&!a||"t"===a?(g+=m.abbreviations.trillion,t/=b):i<b&&i>=v&&!a||"b"===a?(g+=m.abbreviations.billion,t/=v):i<v&&i>=y&&!a||"m"===a?(g+=m.abbreviations.million,t/=y):(i<y&&i>=1e3&&!a||"k"===a)&&(g+=m.abbreviations.thousand,t/=1e3)),e._.includes(r,"[.]")&&(p=!0,r=r.replace("[.]",".")),s=t.toString().split(".")[0],l=r.split(".")[1],c=r.indexOf(","),h=(r.split(".")[0].split(",")[0].match(/0/g)||[]).length,l?(e._.includes(l,"[")?(l=(l=l.replace("]","")).split("["),w=e._.toFixed(t,l[0].length+l[1].length,n,l[1].length)):w=e._.toFixed(t,l.length,n),s=w.split(".")[0],w=e._.includes(w,".")?m.delimiters.decimal+w.split(".")[1]:"",p&&0===Number(w.slice(1))&&(w="")):s=e._.toFixed(t,0,n),g&&!a&&Number(s)>=1e3&&g!==m.abbreviations.trillion)switch(s=String(Number(s)/1e3),g){case m.abbreviations.thousand:g=m.abbreviations.million;break;case m.abbreviations.million:g=m.abbreviations.billion;break;case m.abbreviations.billion:g=m.abbreviations.trillion}if(e._.includes(s,"-")&&(s=s.slice(1),_=!0),s.length<h)for(var x=h-s.length;x>0;x--)s="0"+s;return c>-1&&(s=s.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+m.delimiters.thousands)),0===r.indexOf(".")&&(s=""),f=s+w+(g||""),d?f=(d&&_?"(":"")+f+(d&&_?")":""):u>=0?f=0===u?(_?"-":"+")+f:f+(_?"-":"+"):_&&(f="-"+f),f},stringToNumber:function(e){var t,r,n,a=o[l.currentLocale],i=e,s={thousand:3,million:6,billion:9,trillion:12};if(l.zeroFormat&&e===l.zeroFormat)r=0;else if(l.nullFormat&&e===l.nullFormat||!e.replace(/[^0-9]+/g,"").length)r=null;else{for(t in r=1,"."!==a.delimiters.decimal&&(e=e.replace(/\./g,"").replace(a.delimiters.decimal,".")),s)if(n=new RegExp("[^a-zA-Z]"+a.abbreviations[t]+"(?:\\)|(\\"+a.currency.symbol+")?(?:\\))?)?$"),i.match(n)){r*=Math.pow(10,s[t]);break}r*=(e.split("-").length+Math.min(e.split("(").length-1,e.split(")").length-1))%2?1:-1,e=e.replace(/[^0-9\.]+/g,""),r*=Number(e)}return r},isNaN:function(e){return"number"==typeof e&&isNaN(e)},includes:function(e,t){return-1!==e.indexOf(t)},insert:function(e,t,r){return e.slice(0,r)+t+e.slice(r)},reduce:function(e,t){if(null===this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof t)throw new TypeError(t+" is not a function");var r,n=Object(e),a=n.length>>>0,i=0;if(3===arguments.length)r=arguments[2];else{for(;i<a&&!(i in n);)i++;if(i>=a)throw new TypeError("Reduce of empty array with no initial value");r=n[i++]}for(;i<a;i++)i in n&&(r=t(r,n[i],i,n));return r},multiplier:function(e){var t=e.toString().split(".");return t.length<2?1:Math.pow(10,t[1].length)},correctionFactor:function(){return Array.prototype.slice.call(arguments).reduce((function(e,r){var n=t.multiplier(r);return e>n?e:n}),1)},toFixed:function(e,t,r,n){var a,i,o,s,l=e.toString().split("."),u=t-(n||0);return a=2===l.length?Math.min(Math.max(l[1].length,u),t):u,o=Math.pow(10,a),s=(r(e+"e+"+a)/o).toFixed(a),n>t-a&&(i=new RegExp("\\.?0{1,"+(n-(t-a))+"}$"),s=s.replace(i,"")),s}},e.options=l,e.formats=i,e.locales=o,e.locale=function(e){return e&&(l.currentLocale=e.toLowerCase()),l.currentLocale},e.localeData=function(e){if(!e)return o[l.currentLocale];if(e=e.toLowerCase(),!o[e])throw new Error("Unknown locale : "+e);return o[e]},e.reset=function(){for(var e in s)l[e]=s[e]},e.zeroFormat=function(e){l.zeroFormat="string"==typeof e?e:null},e.nullFormat=function(e){l.nullFormat="string"==typeof e?e:null},e.defaultFormat=function(e){l.defaultFormat="string"==typeof e?e:"0.0"},e.register=function(e,t,r){if(t=t.toLowerCase(),this[e+"s"][t])throw new TypeError(t+" "+e+" already registered.");return this[e+"s"][t]=r,r},e.validate=function(t,r){var n,a,i,o,s,l,u,c;if("string"!=typeof t&&(t+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",t)),(t=t.trim()).match(/^\d+$/))return!0;if(""===t)return!1;try{u=e.localeData(r)}catch(t){u=e.localeData(e.locale())}return i=u.currency.symbol,s=u.abbreviations,n=u.delimiters.decimal,a="."===u.delimiters.thousands?"\\.":u.delimiters.thousands,!(null!==(c=t.match(/^[^\d]+/))&&(t=t.substr(1),c[0]!==i)||null!==(c=t.match(/[^\d]+$/))&&(t=t.slice(0,-1),c[0]!==s.thousand&&c[0]!==s.million&&c[0]!==s.billion&&c[0]!==s.trillion)||(l=new RegExp(a+"{2}"),t.match(/[^\d.,]/g)||(o=t.split(n)).length>2||(o.length<2?!o[0].match(/^\d+.*\d$/)||o[0].match(l):1===o[0].length?!o[0].match(/^\d+$/)||o[0].match(l)||!o[1].match(/^\d+$/):!o[0].match(/^\d+.*\d$/)||o[0].match(l)||!o[1].match(/^\d+$/))))},e.fn=u.prototype={clone:function(){return e(this)},format:function(t,r){var n,a,o,s=this._value,u=t||l.defaultFormat;if(r=r||Math.round,0===s&&null!==l.zeroFormat)a=l.zeroFormat;else if(null===s&&null!==l.nullFormat)a=l.nullFormat;else{for(n in i)if(u.match(i[n].regexps.format)){o=i[n].format;break}a=(o=o||e._.numberToFormat)(s,u,r)}return a},value:function(){return this._value},input:function(){return this._input},set:function(e){return this._value=Number(e),this},add:function(e){var r=t.correctionFactor.call(null,this._value,e);return this._value=t.reduce([this._value,e],(function(e,t,n,a){return e+Math.round(r*t)}),0)/r,this},subtract:function(e){var r=t.correctionFactor.call(null,this._value,e);return this._value=t.reduce([e],(function(e,t,n,a){return e-Math.round(r*t)}),Math.round(this._value*r))/r,this},multiply:function(e){return this._value=t.reduce([this._value,e],(function(e,r,n,a){var i=t.correctionFactor(e,r);return Math.round(e*i)*Math.round(r*i)/Math.round(i*i)}),1),this},divide:function(e){return this._value=t.reduce([this._value,e],(function(e,r,n,a){var i=t.correctionFactor(e,r);return Math.round(e*i)/Math.round(r*i)})),this},difference:function(t){return Math.abs(e(this._value).subtract(t).value())}},e.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(e){var t=e%10;return 1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th"},currency:{symbol:"$"}}),e.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(t,r,n){var a,i=e._.includes(r," BPS")?" ":"";return t*=1e4,r=r.replace(/\s?BPS/,""),a=e._.numberToFormat(t,r,n),e._.includes(a,")")?((a=a.split("")).splice(-1,0,i+"BPS"),a=a.join("")):a=a+i+"BPS",a},unformat:function(t){return+(1e-4*e._.stringToNumber(t)).toFixed(15)}}),n={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},a="("+(a=(r={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}).suffixes.concat(n.suffixes.filter((function(e){return r.suffixes.indexOf(e)<0}))).join("|")).replace("B","B(?!PS)")+")",e.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(a)},format:function(t,a,i){var o,s,l,u=e._.includes(a,"ib")?n:r,c=e._.includes(a," b")||e._.includes(a," ib")?" ":"";for(a=a.replace(/\s?i?b/,""),o=0;o<=u.suffixes.length;o++)if(s=Math.pow(u.base,o),l=Math.pow(u.base,o+1),null===t||0===t||t>=s&&t<l){c+=u.suffixes[o],s>0&&(t/=s);break}return e._.numberToFormat(t,a,i)+c},unformat:function(t){var a,i,o=e._.stringToNumber(t);if(o){for(a=r.suffixes.length-1;a>=0;a--){if(e._.includes(t,r.suffixes[a])){i=Math.pow(r.base,a);break}if(e._.includes(t,n.suffixes[a])){i=Math.pow(n.base,a);break}}o*=i||1}return o}}),e.register("format","currency",{regexps:{format:/(\$)/},format:function(t,r,n){var a,i,o=e.locales[e.options.currentLocale],s={before:r.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:r.match(/([\+|\-|\)|\s|\$]*)$/)[0]};for(r=r.replace(/\s?\$\s?/,""),a=e._.numberToFormat(t,r,n),t>=0?(s.before=s.before.replace(/[\-\(]/,""),s.after=s.after.replace(/[\-\)]/,"")):t<0&&!e._.includes(s.before,"-")&&!e._.includes(s.before,"(")&&(s.before="-"+s.before),i=0;i<s.before.length;i++)switch(s.before[i]){case"$":a=e._.insert(a,o.currency.symbol,i);break;case" ":a=e._.insert(a," ",i+o.currency.symbol.length-1)}for(i=s.after.length-1;i>=0;i--)switch(s.after[i]){case"$":a=i===s.after.length-1?a+o.currency.symbol:e._.insert(a,o.currency.symbol,-(s.after.length-(1+i)));break;case" ":a=i===s.after.length-1?a+" ":e._.insert(a," ",-(s.after.length-(1+i)+o.currency.symbol.length-1))}return a}}),e.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(t,r,n){var a=("number"!=typeof t||e._.isNaN(t)?"0e+0":t.toExponential()).split("e");return r=r.replace(/e[\+|\-]{1}0/,""),e._.numberToFormat(Number(a[0]),r,n)+"e"+a[1]},unformat:function(t){var r=e._.includes(t,"e+")?t.split("e+"):t.split("e-"),n=Number(r[0]),a=Number(r[1]);return a=e._.includes(t,"e-")?a*=-1:a,e._.reduce([n,Math.pow(10,a)],(function(t,r,n,a){var i=e._.correctionFactor(t,r);return t*i*(r*i)/(i*i)}),1)}}),e.register("format","ordinal",{regexps:{format:/(o)/},format:function(t,r,n){var a=e.locales[e.options.currentLocale],i=e._.includes(r," o")?" ":"";return r=r.replace(/\s?o/,""),i+=a.ordinal(t),e._.numberToFormat(t,r,n)+i}}),e.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(t,r,n){var a,i=e._.includes(r," %")?" ":"";return e.options.scalePercentBy100&&(t*=100),r=r.replace(/\s?\%/,""),a=e._.numberToFormat(t,r,n),e._.includes(a,")")?((a=a.split("")).splice(-1,0,i+"%"),a=a.join("")):a=a+i+"%",a},unformat:function(t){var r=e._.stringToNumber(t);return e.options.scalePercentBy100?.01*r:r}}),e.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(e,t,r){var n=Math.floor(e/60/60),a=Math.floor((e-60*n*60)/60),i=Math.round(e-60*n*60-60*a);return n+":"+(a<10?"0"+a:a)+":"+(i<10?"0"+i:i)},unformat:function(e){var t=e.split(":"),r=0;return 3===t.length?(r+=60*Number(t[0])*60,r+=60*Number(t[1]),r+=Number(t[2])):2===t.length&&(r+=60*Number(t[0]),r+=Number(t[1])),Number(r)}}),e},void 0===(a=n.call(t,r,t,e))||(e.exports=a)},379:e=>{"use strict";var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var i={},o=[],s=0;s<e.length;s++){var l=e[s],u=n.base?l[0]+n.base:l[0],c=i[u]||0,f="".concat(u," ").concat(c);i[u]=c+1;var h=r(f),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==h)t[h].references++,t[h].updater(m);else{var d=a(m,n);n.byIndex=s,t.splice(s,0,{identifier:f,updater:d,references:1})}o.push(f)}return o}function a(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,a){var i=n(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var s=r(i[o]);t[s].references--}for(var l=n(e,a),u=0;u<i.length;u++){var c=r(i[u]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}i=l}}},569:e=>{"use strict";var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{"use strict";e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,a&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},968:(e,t,r)=>{"use strict";var n=r(379),a=r.n(n),i=r(795),o=r.n(i),s=r(569),l=r.n(s),u=r(565),c=r.n(u),f=r(216),h=r.n(f),m=r(589),d=r.n(m),p=r(424),g={};g.styleTagTransform=d(),g.setAttributes=c(),g.insert=l().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=h(),a()(p.Z,g),p.Z&&p.Z.locals&&p.Z.locals;var b=r(77),v=r.n(b);class y{raw;constructor(e){this.raw=e}isValid(){return this.trimmed().split(";").length>=7&&this.trimmed().startsWith("20")}parse(){let e=function(e,t=";"){var r=new RegExp("(\\"+t+'|\\r?\\n|\\r|^)(?:"([^"]*(?:""[^"]*)*)"|([^"\\'+t+"\\r\\n]*))","gi");const n=[[]];let a;for(;a=r.exec(e);){const e=a[1];e.length&&e!=t&&n.push([]),a[2]?n[n.length-1].push(a[2].replace(new RegExp('""',"g"),'"')):n[n.length-1].push(a[3])}return n}(this.trimmed())[0];if(9==e.length){let t=_.asString(e[3]),r=_.asDate(e[0]),n=_.substringAfter(t,"DATA TRANSAKCJI: "),a=null!=n?_.asDate(n):r;return{raw:this.raw,operationDate:r,accountingDate:_.asDate(e[1]),operationType:_.asString(e[2]),title:t,senderAndReceiver:_.asString(e[4]),accountNumber:_.asString(e[5]),amount:_.asNumber(e[6]),balanceAfterOperation:_.asNumber(e[7]),transactionDate:a}}{let t=_.asDate(e[0]);return{raw:this.raw,operationDate:t,accountingDate:t,operationType:"Undefined: mBank Export",title:_.asString(e[1]),senderAndReceiver:"Undefined: mBank Export",accountNumber:_.asString(e[2]),amount:_.asNumber(e[4]),balanceAfterOperation:_.asNumber("0"),transactionDate:t}}}trimmed(){return this.raw.trim()}}class w{entries;constructor(e=[]){this.entries=e}addLines(e){e.split(/\r?\n/).forEach((e=>{let t=new y(e);t.isValid()&&this.entries.push(t.parse())}))}}class _{static asString(e){return(e||"").replace(/\s+/g," ").trim()}static asInt(e){return Number.parseInt(_.asString(e))}static asNumber(e){return v()(e.replaceAll("zł","").replaceAll(" ","").replaceAll(" ","").replaceAll(",",".").trim())}static asDate(e){let t=new Date(e);return{year:t.getFullYear(),month:t.getMonth()+1,day:t.getDate()}}static asDateOrNull(e){return e.length>6?_.asDate(e):null}static substringAfter(e,t){return e.includes(t)?e.substring(e.indexOf(t)+t.length):null}}class x{entries;constructor(e=[]){this.entries=e}addLines(e){e.split(/\r?\n/).slice(1).forEach((e=>{let t=new F(e);t.isValid()&&this.entries.push(t.parse())}))}}class F{input;constructor(e){this.input=e}isValid(){return this.input.split("\t").length>=7}parse(){let e=this.input.split("\t");return{year:_.asInt(e[0]),month:_.asInt(e[1]),date:_.asDateOrNull(e[2]),description:_.asString(e[3]),amount:_.asNumber(e[4]),group:_.asString(e[5]),category:_.asString(e[6]),code:_.asString(e[7])}}}var M=r(493),N=r.n(M);class ${merger;constructor(e){this.merger=e}think(e){let t=new w;t.addLines(e);let r=t.entries.map((e=>this.explain(e)));return{output:r.map((e=>e.tsv)).join("\n"),details:r.map((e=>e.details)).join("\n======\n")}}explain(e){let t=new Map;[...this.merger.mapping.values()].forEach((r=>{r.history.forEach((n=>{let a=N().get(e.title,n.title);null==t.get(a)?t.set(a,[r]):t.get(a).push(r)}))}));let r=[...t.keys()].sort(((e,t)=>e-t)),n=r.map((e=>`${e} => ${t.get(e)?.map((e=>e.summary())).join("\n - - - \n")}`)).join("\n = = = = =\n"),a=t.get(r[0]),i=null!=a&&a.length>0?a[0].wallet[0]:null;return{tsv:this.tsv(i,e),match:i,details:`Trying to match: ${e.raw}\nMatched output line: ${this.tsv(i,e)}\n___\n${n}`}}tsv(e,t){let r=t.transactionDate;return[t.transactionDate?.year,t.transactionDate?.month,`${r.year}-${this.leadingZero(r.month)}-${this.leadingZero(r.day)}`,e?.description||`Unable to match: ${t.title}, ${t.senderAndReceiver}`,t.amount.format("0.00").replace(".",","),e?.group||"Inne",`FROM: ${t.title}`].join("\t")}leadingZero=e=>e>=10?String(e):"0"+String(e);static of(e,t){let r=new w;r.addLines(e);let n=new x;return n.addLines(t),new $(new S(r,n))}}class S{mapping=new Map;constructor(e,t){e.entries.forEach((e=>this.keyHistory(e).forEach((t=>this.getOrCreateMapping(t).addHistory(e))))),t.entries.forEach((e=>this.getOrCreateMapping(this.keyWallet(e)).addWallet(e))),this.mapping=new Map([...this.mapping.entries()].filter((e=>e[1].history.length>0&&e[1].wallet.length>0)))}keyHistory(e){let t=[this.keyPlain(e.accountingDate,e.amount),this.keyPlain(e.operationDate,e.amount)];return null!=e.transactionDate&&t.push(this.keyPlain(e.transactionDate,e.amount)),t}keyWallet(e){return this.keyPlain({year:e.year,month:e.month,day:e.date?.day||1},e.amount)}keyPlain(e,t){return`${e.year}_${e.month}_${e.day}_${t.format("+0.00")}`}getOrCreateMapping(e){let t=this.mapping.get(e);return null!=t||(t=new k(e),this.mapping.set(e,t)),t}summary=()=>[...this.mapping.values()].map((e=>e.summary())).join("\n");summaryMultiMatchOnly=()=>[...this.mapping.values()].filter((e=>e.wallet.length>1)).map((e=>e.summary())).join("\n")}class k{key;history;wallet;constructor(e,t=[],r=[]){this.key=e,this.history=t,this.wallet=r}addHistory(e){this.history.push(e)}addWallet(e){if(this.wallet.length>0){let t=this.wallet[0];if(t.description==e.description&&t.group==e.group)return}this.wallet.push(e)}summary=()=>`\n${this.key}:\n${this.history.map((e=>` from << ${e.title}\n   ${JSON.stringify(e)}\n`)).join("")}\n${this.wallet.map((e=>` to >> ${e.description} (${e.group})\n   ${JSON.stringify(e)}\n`)).join("")}\n`.trim()}addEventListener("load",(()=>{B("history"),B("gdocs"),document.getElementById("onSave").addEventListener("click",(()=>{E("history"),E("gdocs")})),document.getElementById("onThink").addEventListener("click",(()=>{A("target").value=$.of(A("history").value,A("gdocs").value).think(A("source").value).output}))}));const B=e=>{let t=window.localStorage.getItem(e)??"";A(e).value=t,console.log(`Loaded: ${e}`)},E=e=>{let t=A(e).value;localStorage.setItem(e,t??""),console.log(`Saved: ${e}`)},A=e=>document.getElementById(e)}},e=>{e(e.s=968)}]);