!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.moment=t()}(this,function(){"use strict"
function e(){return vs.apply(null,arguments)}function t(e){vs=e}function n(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function s(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function i(e){var t
for(t in e)return!1
return!0}function r(e){return void 0===e}function a(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function o(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function u(e,t){var n,s=[]
for(n=0;n<e.length;++n)s.push(t(e[n],n))
return s}function l(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function d(e,t){for(var n in t)l(t,n)&&(e[n]=t[n])
return l(t,"toString")&&(e.toString=t.toString),l(t,"valueOf")&&(e.valueOf=t.valueOf),e}function h(e,t,n,s){return pt(e,t,n,s,!0).utc()}function c(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function f(e){return null==e._pf&&(e._pf=c()),e._pf}function m(e){if(null==e._isValid){var t=f(e),n=Ms.call(t.parsedDateParts,function(e){return null!=e}),s=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidMonth&&!t.invalidWeekday&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n)
if(e._strict&&(s=s&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return s
e._isValid=s}return e._isValid}function _(e){var t=h(NaN)
return null!=e?d(f(t),e):f(t).userInvalidated=!0,t}function y(e,t){var n,s,i
if(r(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),r(t._i)||(e._i=t._i),r(t._f)||(e._f=t._f),r(t._l)||(e._l=t._l),r(t._strict)||(e._strict=t._strict),r(t._tzm)||(e._tzm=t._tzm),r(t._isUTC)||(e._isUTC=t._isUTC),r(t._offset)||(e._offset=t._offset),r(t._pf)||(e._pf=f(t)),r(t._locale)||(e._locale=t._locale),Ss.length>0)for(n=0;n<Ss.length;n++)s=Ss[n],i=t[s],r(i)||(e[s]=i)
return e}function g(t){y(this,t),this._d=new Date(null!=t._d?t._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),ks===!1&&(ks=!0,e.updateOffset(this),ks=!1)}function p(e){return e instanceof g||null!=e&&null!=e._isAMomentObject}function v(e){return 0>e?Math.ceil(e)||0:Math.floor(e)}function w(e){var t=+e,n=0
return 0!==t&&isFinite(t)&&(n=v(t)),n}function M(e,t,n){var s,i=Math.min(e.length,t.length),r=Math.abs(e.length-t.length),a=0
for(s=0;i>s;s++)(n&&e[s]!==t[s]||!n&&w(e[s])!==w(t[s]))&&a++
return a+r}function S(t){e.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+t)}function k(t,n){var s=!0
return d(function(){if(null!=e.deprecationHandler&&e.deprecationHandler(null,t),s){for(var i,r=[],a=0;a<arguments.length;a++){if(i="","object"==typeof arguments[a]){i+="\n["+a+"] "
for(var o in arguments[0])i+=o+": "+arguments[0][o]+", "
i=i.slice(0,-2)}else i=arguments[a]
r.push(i)}S(t+"\nArguments: "+Array.prototype.slice.call(r).join("")+"\n"+Error().stack),s=!1}return n.apply(this,arguments)},n)}function D(t,n){null!=e.deprecationHandler&&e.deprecationHandler(t,n),Ds[t]||(S(n),Ds[t]=!0)}function Y(e){return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function O(e){var t,n
for(n in e)t=e[n],Y(t)?this[n]=t:this["_"+n]=t
this._config=e,this._dayOfMonthOrdinalParseLenient=RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function x(e,t){var n,i=d({},e)
for(n in t)l(t,n)&&(s(e[n])&&s(t[n])?(i[n]={},d(i[n],e[n]),d(i[n],t[n])):null!=t[n]?i[n]=t[n]:delete i[n])
for(n in e)l(e,n)&&!l(t,n)&&s(e[n])&&(i[n]=d({},i[n]))
return i}function T(e){null!=e&&this.set(e)}function b(e,t,n){var s=this._calendar[e]||this._calendar.sameElse
return Y(s)?s.call(t,n):s}function P(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()]
return t||!n?t:(this._longDateFormat[e]=n.replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e])}function W(){return this._invalidDate}function R(e){return this._ordinal.replace("%d",e)}function C(e,t,n,s){var i=this._relativeTime[n]
return Y(i)?i(e,t,n,s):i.replace(/%d/i,e)}function F(e,t){var n=this._relativeTime[e>0?"future":"past"]
return Y(n)?n(t):n.replace(/%s/i,t)}function U(e,t){var n=e.toLowerCase()
Fs[n]=Fs[n+"s"]=Fs[t]=e}function H(e){return"string"==typeof e?Fs[e]||Fs[e.toLowerCase()]:void 0}function L(e){var t,n,s={}
for(n in e)l(e,n)&&(t=H(n),t&&(s[t]=e[n]))
return s}function G(e,t){Us[e]=t}function V(e){var t=[]
for(var n in e)t.push({unit:n,priority:Us[n]})
return t.sort(function(e,t){return e.priority-t.priority}),t}function N(t,n){return function(s){return null!=s?(A(this,t,s),e.updateOffset(this,n),this):j(this,t)}}function j(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function A(e,t,n){e.isValid()&&e._d["set"+(e._isUTC?"UTC":"")+t](n)}function E(e){return e=H(e),Y(this[e])?this[e]():this}function I(e,t){if("object"==typeof e){e=L(e)
for(var n=V(e),s=0;s<n.length;s++)this[n[s].unit](e[n[s].unit])}else if(e=H(e),Y(this[e]))return this[e](t)
return this}function Z(e,t,n){var s=""+Math.abs(e),i=t-s.length,r=e>=0
return(r?n?"+":"":"-")+(""+Math.pow(10,Math.max(0,i))).substr(1)+s}function z(e,t,n,s){var i=s
"string"==typeof s&&(i=function(){return this[s]()}),e&&(Vs[e]=i),t&&(Vs[t[0]]=function(){return Z(i.apply(this,arguments),t[1],t[2])}),n&&(Vs[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function $(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function q(e){var t,n,s=e.match(Hs)
for(t=0,n=s.length;n>t;t++)Vs[s[t]]?s[t]=Vs[s[t]]:s[t]=$(s[t])
return function(t){var i,r=""
for(i=0;n>i;i++)r+=Y(s[i])?s[i].call(t,e):s[i]
return r}}function J(e,t){return e.isValid()?(t=B(t,e.localeData()),Gs[t]=Gs[t]||q(t),Gs[t](e)):e.localeData().invalidDate()}function B(e,t){function n(e){return t.longDateFormat(e)||e}var s=5
for(Ls.lastIndex=0;s>=0&&Ls.test(e);)e=e.replace(Ls,n),Ls.lastIndex=0,s-=1
return e}function Q(e,t,n){si[e]=Y(t)?t:function(e,s){return e&&n?n:t}}function X(e,t){return l(si,e)?si[e](t._strict,t._locale):RegExp(K(e))}function K(e){return ee(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,s,i){return t||n||s||i}))}function ee(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function te(e,t){var n,s=t
for("string"==typeof e&&(e=[e]),a(t)&&(s=function(e,n){n[t]=w(e)}),n=0;n<e.length;n++)ii[e[n]]=s}function ne(e,t){te(e,function(e,n,s,i){s._w=s._w||{},t(e,s._w,s,i)})}function se(e,t,n){null!=t&&l(ii,e)&&ii[e](t,n._a,n,e)}function ie(e,t){return new Date(Date.UTC(e,t+1,0)).getUTCDate()}function re(e,t){return e?n(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||_i).test(t)?"format":"standalone"][e.month()]:n(this._months)?this._months:this._months.standalone}function ae(e,t){return e?n(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[_i.test(t)?"format":"standalone"][e.month()]:n(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function oe(e,t,n){var s,i,r,a=e.toLocaleLowerCase()
if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0;12>s;++s)r=h([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(r,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(r,"").toLocaleLowerCase()
return n?"MMM"===t?(i=mi.call(this._shortMonthsParse,a),-1!==i?i:null):(i=mi.call(this._longMonthsParse,a),-1!==i?i:null):"MMM"===t?(i=mi.call(this._shortMonthsParse,a),-1!==i?i:(i=mi.call(this._longMonthsParse,a),-1!==i?i:null)):(i=mi.call(this._longMonthsParse,a),-1!==i?i:(i=mi.call(this._shortMonthsParse,a),-1!==i?i:null))}function ue(e,t,n){var s,i,r
if(this._monthsParseExact)return oe.call(this,e,t,n)
for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;12>s;s++){if(i=h([2e3,s]),n&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),n||this._monthsParse[s]||(r="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[s]=RegExp(r.replace(".",""),"i")),n&&"MMMM"===t&&this._longMonthsParse[s].test(e))return s
if(n&&"MMM"===t&&this._shortMonthsParse[s].test(e))return s
if(!n&&this._monthsParse[s].test(e))return s}}function le(e,t){var n
if(!e.isValid())return e
if("string"==typeof t)if(/^\d+$/.test(t))t=w(t)
else if(t=e.localeData().monthsParse(t),!a(t))return e
return n=Math.min(e.date(),ie(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function de(t){return null!=t?(le(this,t),e.updateOffset(this,!0),this):j(this,"Month")}function he(){return ie(this.year(),this.month())}function ce(e){return this._monthsParseExact?(l(this,"_monthsRegex")||me.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(l(this,"_monthsShortRegex")||(this._monthsShortRegex=pi),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function fe(e){return this._monthsParseExact?(l(this,"_monthsRegex")||me.call(this),e?this._monthsStrictRegex:this._monthsRegex):(l(this,"_monthsRegex")||(this._monthsRegex=vi),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function me(){function e(e,t){return t.length-e.length}var t,n,s=[],i=[],r=[]
for(t=0;12>t;t++)n=h([2e3,t]),s.push(this.monthsShort(n,"")),i.push(this.months(n,"")),r.push(this.months(n,"")),r.push(this.monthsShort(n,""))
for(s.sort(e),i.sort(e),r.sort(e),t=0;12>t;t++)s[t]=ee(s[t]),i[t]=ee(i[t])
for(t=0;24>t;t++)r[t]=ee(r[t])
this._monthsRegex=RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=RegExp("^("+i.join("|")+")","i"),this._monthsShortStrictRegex=RegExp("^("+s.join("|")+")","i")}function _e(e){return ye(e)?366:365}function ye(e){return e%4===0&&e%100!==0||e%400===0}function ge(){return ye(this.year())}function pe(e,t,n,s,i,r,a){var o=new Date(e,t,n,s,i,r,a)
return 100>e&&e>=0&&isFinite(o.getFullYear())&&o.setFullYear(e),o}function ve(e){var t=new Date(Date.UTC.apply(null,arguments))
return 100>e&&e>=0&&isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e),t}function we(e,t,n){var s=7+t-n,i=(7+ve(e,0,s).getUTCDay()-t)%7
return-i+s-1}function Me(e,t,n,s,i){var r,a,o=(7+n-s)%7,u=we(e,s,i),l=1+7*(t-1)+o+u
return 0>=l?(r=e-1,a=_e(r)+l):l>_e(e)?(r=e+1,a=l-_e(e)):(r=e,a=l),{year:r,dayOfYear:a}}function Se(e,t,n){var s,i,r=we(e.year(),t,n),a=Math.floor((e.dayOfYear()-r-1)/7)+1
return 1>a?(i=e.year()-1,s=a+ke(i,t,n)):a>ke(e.year(),t,n)?(s=a-ke(e.year(),t,n),i=e.year()+1):(i=e.year(),s=a),{week:s,year:i}}function ke(e,t,n){var s=we(e,t,n),i=we(e+1,t,n)
return(_e(e)-s+i)/7}function De(e){return Se(e,this._week.dow,this._week.doy).week}function Ye(){return this._week.dow}function Oe(){return this._week.doy}function xe(e){var t=this.localeData().week(this)
return null==e?t:this.add(7*(e-t),"d")}function Te(e){var t=Se(this,1,4).week
return null==e?t:this.add(7*(e-t),"d")}function be(e,t){return"string"!=typeof e?e:isNaN(e)?(e=t.weekdaysParse(e),"number"==typeof e?e:null):parseInt(e,10)}function Pe(e,t){return"string"==typeof e?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function We(e,t){return e?n(this._weekdays)?this._weekdays[e.day()]:this._weekdays[this._weekdays.isFormat.test(t)?"format":"standalone"][e.day()]:n(this._weekdays)?this._weekdays:this._weekdays.standalone}function Re(e){return e?this._weekdaysShort[e.day()]:this._weekdaysShort}function Ce(e){return e?this._weekdaysMin[e.day()]:this._weekdaysMin}function Fe(e,t,n){var s,i,r,a=e.toLocaleLowerCase()
if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0;7>s;++s)r=h([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(r,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(r,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(r,"").toLocaleLowerCase()
return n?"dddd"===t?(i=mi.call(this._weekdaysParse,a),-1!==i?i:null):"ddd"===t?(i=mi.call(this._shortWeekdaysParse,a),-1!==i?i:null):(i=mi.call(this._minWeekdaysParse,a),-1!==i?i:null):"dddd"===t?(i=mi.call(this._weekdaysParse,a),-1!==i?i:(i=mi.call(this._shortWeekdaysParse,a),-1!==i?i:(i=mi.call(this._minWeekdaysParse,a),-1!==i?i:null))):"ddd"===t?(i=mi.call(this._shortWeekdaysParse,a),-1!==i?i:(i=mi.call(this._weekdaysParse,a),-1!==i?i:(i=mi.call(this._minWeekdaysParse,a),-1!==i?i:null))):(i=mi.call(this._minWeekdaysParse,a),-1!==i?i:(i=mi.call(this._weekdaysParse,a),-1!==i?i:(i=mi.call(this._shortWeekdaysParse,a),-1!==i?i:null)))}function Ue(e,t,n){var s,i,r
if(this._weekdaysParseExact)return Fe.call(this,e,t,n)
for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;7>s;s++){if(i=h([2e3,1]).day(s),n&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=RegExp("^"+this.weekdays(i,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[s]=RegExp("^"+this.weekdaysShort(i,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[s]=RegExp("^"+this.weekdaysMin(i,"").replace(".",".?")+"$","i")),this._weekdaysParse[s]||(r="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[s]=RegExp(r.replace(".",""),"i")),n&&"dddd"===t&&this._fullWeekdaysParse[s].test(e))return s
if(n&&"ddd"===t&&this._shortWeekdaysParse[s].test(e))return s
if(n&&"dd"===t&&this._minWeekdaysParse[s].test(e))return s
if(!n&&this._weekdaysParse[s].test(e))return s}}function He(e){if(!this.isValid())return null!=e?this:NaN
var t=this._isUTC?this._d.getUTCDay():this._d.getDay()
return null!=e?(e=be(e,this.localeData()),this.add(e-t,"d")):t}function Le(e){if(!this.isValid())return null!=e?this:NaN
var t=(this.day()+7-this.localeData()._week.dow)%7
return null==e?t:this.add(e-t,"d")}function Ge(e){if(!this.isValid())return null!=e?this:NaN
if(null!=e){var t=Pe(e,this.localeData())
return this.day(this.day()%7?t:t-7)}return this.day()||7}function Ve(e){return this._weekdaysParseExact?(l(this,"_weekdaysRegex")||Ae.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(l(this,"_weekdaysRegex")||(this._weekdaysRegex=Yi),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function Ne(e){return this._weekdaysParseExact?(l(this,"_weekdaysRegex")||Ae.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(l(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Oi),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function je(e){return this._weekdaysParseExact?(l(this,"_weekdaysRegex")||Ae.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(l(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=xi),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Ae(){function e(e,t){return t.length-e.length}var t,n,s,i,r,a=[],o=[],u=[],l=[]
for(t=0;7>t;t++)n=h([2e3,1]).day(t),s=this.weekdaysMin(n,""),i=this.weekdaysShort(n,""),r=this.weekdays(n,""),a.push(s),o.push(i),u.push(r),l.push(s),l.push(i),l.push(r)
for(a.sort(e),o.sort(e),u.sort(e),l.sort(e),t=0;7>t;t++)o[t]=ee(o[t]),u[t]=ee(u[t]),l[t]=ee(l[t])
this._weekdaysRegex=RegExp("^("+l.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=RegExp("^("+u.join("|")+")","i"),this._weekdaysShortStrictRegex=RegExp("^("+o.join("|")+")","i"),this._weekdaysMinStrictRegex=RegExp("^("+a.join("|")+")","i")}function Ee(){return this.hours()%12||12}function Ie(){return this.hours()||24}function Ze(e,t){z(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}function ze(e,t){return t._meridiemParse}function $e(e){return"p"===(e+"").toLowerCase().charAt(0)}function qe(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"}function Je(e){return e?e.toLowerCase().replace("_","-"):e}function Be(e){for(var t,n,s,i,r=0;r<e.length;){for(i=Je(e[r]).split("-"),t=i.length,n=Je(e[r+1]),n=n?n.split("-"):null;t>0;){if(s=Qe(i.slice(0,t).join("-")))return s
if(n&&n.length>=t&&M(i,n,!0)>=t-1)break
t--}r++}return null}function Qe(e){var t=null
if(!Ri[e]&&"undefined"!=typeof module&&module&&module.exports)try{t=Ti._abbr,require("./locale/"+e),Xe(t)}catch(n){}return Ri[e]}function Xe(e,t){var n
return e&&(n=r(t)?tt(e):Ke(e,t),n&&(Ti=n)),Ti._abbr}function Ke(e,t){if(null!==t){var n=Wi
if(t.abbr=e,null!=Ri[e])D("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),n=Ri[e]._config
else if(null!=t.parentLocale){if(null==Ri[t.parentLocale])return Ci[t.parentLocale]||(Ci[t.parentLocale]=[]),Ci[t.parentLocale].push({name:e,config:t}),null
n=Ri[t.parentLocale]._config}return Ri[e]=new T(x(n,t)),Ci[e]&&Ci[e].forEach(function(e){Ke(e.name,e.config)}),Xe(e),Ri[e]}return delete Ri[e],null}function et(e,t){if(null!=t){var n,s=Wi
null!=Ri[e]&&(s=Ri[e]._config),t=x(s,t),n=new T(t),n.parentLocale=Ri[e],Ri[e]=n,Xe(e)}else null!=Ri[e]&&(null!=Ri[e].parentLocale?Ri[e]=Ri[e].parentLocale:null!=Ri[e]&&delete Ri[e])
return Ri[e]}function tt(e){var t
if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return Ti
if(!n(e)){if(t=Qe(e))return t
e=[e]}return Be(e)}function nt(){return xs(Ri)}function st(e){var t,n=e._a
return n&&-2===f(e).overflow&&(t=n[ai]<0||n[ai]>11?ai:n[oi]<1||n[oi]>ie(n[ri],n[ai])?oi:n[ui]<0||n[ui]>24||24===n[ui]&&(0!==n[li]||0!==n[di]||0!==n[hi])?ui:n[li]<0||n[li]>59?li:n[di]<0||n[di]>59?di:n[hi]<0||n[hi]>999?hi:-1,f(e)._overflowDayOfYear&&(ri>t||t>oi)&&(t=oi),f(e)._overflowWeeks&&-1===t&&(t=ci),f(e)._overflowWeekday&&-1===t&&(t=fi),f(e).overflow=t),e}function it(e){var t,n,s,i,r,a,o=e._i,u=Fi.exec(o)||Ui.exec(o)
if(u){for(f(e).iso=!0,t=0,n=Li.length;n>t;t++)if(Li[t][1].exec(u[1])){i=Li[t][0],s=Li[t][2]!==!1
break}if(null==i)return void(e._isValid=!1)
if(u[3]){for(t=0,n=Gi.length;n>t;t++)if(Gi[t][1].exec(u[3])){r=(u[2]||" ")+Gi[t][0]
break}if(null==r)return void(e._isValid=!1)}if(!s&&null!=r)return void(e._isValid=!1)
if(u[4]){if(!Hi.exec(u[4]))return void(e._isValid=!1)
a="Z"}e._f=i+(r||"")+(a||""),ht(e)}else e._isValid=!1}function rt(e){var t,n,s,i,r,a,o,u,l={" GMT":" +0000"," EDT":" -0400"," EST":" -0500"," CDT":" -0500"," CST":" -0600"," MDT":" -0600"," MST":" -0700"," PDT":" -0700"," PST":" -0800"},d="YXWVUTSRQPONZABCDEFGHIKLM"
if(t=e._i.replace(/\([^\)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s|\s$/g,""),n=Ni.exec(t)){if(s=n[1]?"ddd"+(5===n[1].length?", ":" "):"",i="D MMM "+(n[2].length>10?"YYYY ":"YY "),r="HH:mm"+(n[4]?":ss":""),n[1]){var h=new Date(n[2]),c=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][h.getDay()]
if(n[1].substr(0,3)!==c)return f(e).weekdayMismatch=!0,void(e._isValid=!1)}switch(n[5].length){case 2:0===u?o=" +0000":(u=d.indexOf(n[5][1].toUpperCase())-12,o=(0>u?" -":" +")+(""+u).replace(/^-?/,"0").match(/..$/)[0]+"00")
break
case 4:o=l[n[5]]
break
default:o=l[" GMT"]}n[5]=o,e._i=n.splice(1).join(""),a=" ZZ",e._f=s+i+r+a,ht(e),f(e).rfc2822=!0}else e._isValid=!1}function at(t){var n=Vi.exec(t._i)
return null!==n?void(t._d=new Date(+n[1])):(it(t),void(t._isValid===!1&&(delete t._isValid,rt(t),t._isValid===!1&&(delete t._isValid,e.createFromInputFallback(t)))))}function ot(e,t,n){return null!=e?e:null!=t?t:n}function ut(t){var n=new Date(e.now())
return t._useUTC?[n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()]:[n.getFullYear(),n.getMonth(),n.getDate()]}function lt(e){var t,n,s,i,r=[]
if(!e._d){for(s=ut(e),e._w&&null==e._a[oi]&&null==e._a[ai]&&dt(e),null!=e._dayOfYear&&(i=ot(e._a[ri],s[ri]),(e._dayOfYear>_e(i)||0===e._dayOfYear)&&(f(e)._overflowDayOfYear=!0),n=ve(i,0,e._dayOfYear),e._a[ai]=n.getUTCMonth(),e._a[oi]=n.getUTCDate()),t=0;3>t&&null==e._a[t];++t)e._a[t]=r[t]=s[t]
for(;7>t;t++)e._a[t]=r[t]=null==e._a[t]?2===t?1:0:e._a[t]
24===e._a[ui]&&0===e._a[li]&&0===e._a[di]&&0===e._a[hi]&&(e._nextDay=!0,e._a[ui]=0),e._d=(e._useUTC?ve:pe).apply(null,r),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[ui]=24)}}function dt(e){var t,n,s,i,r,a,o,u
if(t=e._w,null!=t.GG||null!=t.W||null!=t.E)r=1,a=4,n=ot(t.GG,e._a[ri],Se(vt(),1,4).year),s=ot(t.W,1),i=ot(t.E,1),(1>i||i>7)&&(u=!0)
else{r=e._locale._week.dow,a=e._locale._week.doy
var l=Se(vt(),r,a)
n=ot(t.gg,e._a[ri],l.year),s=ot(t.w,l.week),null!=t.d?(i=t.d,(0>i||i>6)&&(u=!0)):null!=t.e?(i=t.e+r,(t.e<0||t.e>6)&&(u=!0)):i=r}1>s||s>ke(n,r,a)?f(e)._overflowWeeks=!0:null!=u?f(e)._overflowWeekday=!0:(o=Me(n,s,i,r,a),e._a[ri]=o.year,e._dayOfYear=o.dayOfYear)}function ht(t){if(t._f===e.ISO_8601)return void it(t)
if(t._f===e.RFC_2822)return void rt(t)
t._a=[],f(t).empty=!0
var n,s,i,r,a,o=""+t._i,u=o.length,l=0
for(i=B(t._f,t._locale).match(Hs)||[],n=0;n<i.length;n++)r=i[n],s=(o.match(X(r,t))||[])[0],s&&(a=o.substr(0,o.indexOf(s)),a.length>0&&f(t).unusedInput.push(a),o=o.slice(o.indexOf(s)+s.length),l+=s.length),Vs[r]?(s?f(t).empty=!1:f(t).unusedTokens.push(r),se(r,s,t)):t._strict&&!s&&f(t).unusedTokens.push(r)
f(t).charsLeftOver=u-l,o.length>0&&f(t).unusedInput.push(o),t._a[ui]<=12&&f(t).bigHour===!0&&t._a[ui]>0&&(f(t).bigHour=void 0),f(t).parsedDateParts=t._a.slice(0),f(t).meridiem=t._meridiem,t._a[ui]=ct(t._locale,t._a[ui],t._meridiem),lt(t),st(t)}function ct(e,t,n){var s
return null==n?t:null!=e.meridiemHour?e.meridiemHour(t,n):null!=e.isPM?(s=e.isPM(n),s&&12>t&&(t+=12),s||12!==t||(t=0),t):t}function ft(e){var t,n,s,i,r
if(0===e._f.length)return f(e).invalidFormat=!0,void(e._d=new Date(NaN))
for(i=0;i<e._f.length;i++)r=0,t=y({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[i],ht(t),m(t)&&(r+=f(t).charsLeftOver,r+=10*f(t).unusedTokens.length,f(t).score=r,(null==s||s>r)&&(s=r,n=t))
d(e,n||t)}function mt(e){if(!e._d){var t=L(e._i)
e._a=u([t.year,t.month,t.day||t.date,t.hour,t.minute,t.second,t.millisecond],function(e){return e&&parseInt(e,10)}),lt(e)}}function _t(e){var t=new g(st(yt(e)))
return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function yt(e){var t=e._i,s=e._f
return e._locale=e._locale||tt(e._l),null===t||void 0===s&&""===t?_({nullInput:!0}):("string"==typeof t&&(e._i=t=e._locale.preparse(t)),p(t)?new g(st(t)):(o(t)?e._d=t:n(s)?ft(e):s?ht(e):gt(e),m(e)||(e._d=null),e))}function gt(t){var i=t._i
r(i)?t._d=new Date(e.now()):o(i)?t._d=new Date(i.valueOf()):"string"==typeof i?at(t):n(i)?(t._a=u(i.slice(0),function(e){return parseInt(e,10)}),lt(t)):s(i)?mt(t):a(i)?t._d=new Date(i):e.createFromInputFallback(t)}function pt(e,t,r,a,o){var u={}
return(r===!0||r===!1)&&(a=r,r=void 0),(s(e)&&i(e)||n(e)&&0===e.length)&&(e=void 0),u._isAMomentObject=!0,u._useUTC=u._isUTC=o,u._l=r,u._i=e,u._f=t,u._strict=a,_t(u)}function vt(e,t,n,s){return pt(e,t,n,s,!1)}function wt(e,t){var s,i
if(1===t.length&&n(t[0])&&(t=t[0]),!t.length)return vt()
for(s=t[0],i=1;i<t.length;++i)(!t[i].isValid()||t[i][e](s))&&(s=t[i])
return s}function Mt(){var e=[].slice.call(arguments,0)
return wt("isBefore",e)}function St(){var e=[].slice.call(arguments,0)
return wt("isAfter",e)}function kt(e){for(var t in e)if(-1===Ii.indexOf(t)||null!=e[t]&&isNaN(e[t]))return!1
for(var n=!1,s=0;s<Ii.length;++s)if(e[Ii[s]]){if(n)return!1
parseFloat(e[Ii[s]])!==w(e[Ii[s]])&&(n=!0)}return!0}function Dt(){return this._isValid}function Yt(){return It(NaN)}function Ot(e){var t=L(e),n=t.year||0,s=t.quarter||0,i=t.month||0,r=t.week||0,a=t.day||0,o=t.hour||0,u=t.minute||0,l=t.second||0,d=t.millisecond||0
this._isValid=kt(t),this._milliseconds=+d+1e3*l+6e4*u+1e3*o*60*60,this._days=+a+7*r,this._months=+i+3*s+12*n,this._data={},this._locale=tt(),this._bubble()}function xt(e){return e instanceof Ot}function Tt(e){return 0>e?-1*Math.round(-1*e):Math.round(e)}function bt(e,t){z(e,0,0,function(){var e=this.utcOffset(),n="+"
return 0>e&&(e=-e,n="-"),n+Z(~~(e/60),2)+t+Z(~~e%60,2)})}function Pt(e,t){var n=(t||"").match(e)
if(null===n)return null
var s=n[n.length-1]||[],i=(s+"").match(Zi)||["-",0,0],r=+(60*i[1])+w(i[2])
return 0===r?0:"+"===i[0]?r:-r}function Wt(t,n){var s,i
return n._isUTC?(s=n.clone(),i=(p(t)||o(t)?t.valueOf():vt(t).valueOf())-s.valueOf(),s._d.setTime(s._d.valueOf()+i),e.updateOffset(s,!1),s):vt(t).local()}function Rt(e){return 15*-Math.round(e._d.getTimezoneOffset()/15)}function Ct(t,n,s){var i,r=this._offset||0
if(!this.isValid())return null!=t?this:NaN
if(null!=t){if("string"==typeof t){if(t=Pt(ei,t),null===t)return this}else Math.abs(t)<16&&!s&&(t=60*t)
return!this._isUTC&&n&&(i=Rt(this)),this._offset=t,this._isUTC=!0,null!=i&&this.add(i,"m"),r!==t&&(!n||this._changeInProgress?Jt(this,It(t-r,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,e.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?r:Rt(this)}function Ft(e,t){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function Ut(e){return this.utcOffset(0,e)}function Ht(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Rt(this),"m")),this}function Lt(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0)
else if("string"==typeof this._i){var e=Pt(Ks,this._i)
null!=e?this.utcOffset(e):this.utcOffset(0,!0)}return this}function Gt(e){return this.isValid()?(e=e?vt(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function Vt(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Nt(){if(!r(this._isDSTShifted))return this._isDSTShifted
var e={}
if(y(e,this),e=yt(e),e._a){var t=e._isUTC?h(e._a):vt(e._a)
this._isDSTShifted=this.isValid()&&M(e._a,t.toArray())>0}else this._isDSTShifted=!1
return this._isDSTShifted}function jt(){return this.isValid()?!this._isUTC:!1}function At(){return this.isValid()?this._isUTC:!1}function Et(){return this.isValid()?this._isUTC&&0===this._offset:!1}function It(e,t){var n,s,i,r=e,o=null
return xt(e)?r={ms:e._milliseconds,d:e._days,M:e._months}:a(e)?(r={},t?r[t]=e:r.milliseconds=e):(o=zi.exec(e))?(n="-"===o[1]?-1:1,r={y:0,d:w(o[oi])*n,h:w(o[ui])*n,m:w(o[li])*n,s:w(o[di])*n,ms:w(Tt(1e3*o[hi]))*n}):(o=$i.exec(e))?(n="-"===o[1]?-1:1,r={y:Zt(o[2],n),M:Zt(o[3],n),w:Zt(o[4],n),d:Zt(o[5],n),h:Zt(o[6],n),m:Zt(o[7],n),s:Zt(o[8],n)}):null==r?r={}:"object"==typeof r&&("from"in r||"to"in r)&&(i=$t(vt(r.from),vt(r.to)),r={},r.ms=i.milliseconds,r.M=i.months),s=new Ot(r),xt(e)&&l(e,"_locale")&&(s._locale=e._locale),s}function Zt(e,t){var n=e&&parseFloat(e.replace(",","."))
return(isNaN(n)?0:n)*t}function zt(e,t){var n={milliseconds:0,months:0}
return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function $t(e,t){var n
return e.isValid()&&t.isValid()?(t=Wt(t,e),e.isBefore(t)?n=zt(e,t):(n=zt(t,e),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function qt(e,t){return function(n,s){var i,r
return null===s||isNaN(+s)||(D(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),r=n,n=s,s=r),n="string"==typeof n?+n:n,i=It(n,s),Jt(this,i,e),this}}function Jt(t,n,s,i){var r=n._milliseconds,a=Tt(n._days),o=Tt(n._months)
t.isValid()&&(i=null==i?!0:i,r&&t._d.setTime(t._d.valueOf()+r*s),a&&A(t,"Date",j(t,"Date")+a*s),o&&le(t,j(t,"Month")+o*s),i&&e.updateOffset(t,a||o))}function Bt(e,t){var n=e.diff(t,"days",!0)
return-6>n?"sameElse":-1>n?"lastWeek":0>n?"lastDay":1>n?"sameDay":2>n?"nextDay":7>n?"nextWeek":"sameElse"}function Qt(t,n){var s=t||vt(),i=Wt(s,this).startOf("day"),r=e.calendarFormat(this,i)||"sameElse",a=n&&(Y(n[r])?n[r].call(this,s):n[r])
return this.format(a||this.localeData().calendar(r,this,vt(s)))}function Xt(){return new g(this)}function Kt(e,t){var n=p(e)?e:vt(e)
return this.isValid()&&n.isValid()?(t=H(r(t)?"millisecond":t),"millisecond"===t?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf()):!1}function en(e,t){var n=p(e)?e:vt(e)
return this.isValid()&&n.isValid()?(t=H(r(t)?"millisecond":t),"millisecond"===t?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf()):!1}function tn(e,t,n,s){return s=s||"()",("("===s[0]?this.isAfter(e,n):!this.isBefore(e,n))&&(")"===s[1]?this.isBefore(t,n):!this.isAfter(t,n))}function nn(e,t){var n,s=p(e)?e:vt(e)
return this.isValid()&&s.isValid()?(t=H(t||"millisecond"),"millisecond"===t?this.valueOf()===s.valueOf():(n=s.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf())):!1}function sn(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function rn(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function an(e,t,n){var s,i,r,a
return this.isValid()?(s=Wt(e,this),s.isValid()?(i=6e4*(s.utcOffset()-this.utcOffset()),t=H(t),"year"===t||"month"===t||"quarter"===t?(a=on(this,s),"quarter"===t?a/=3:"year"===t&&(a/=12)):(r=this-s,a="second"===t?r/1e3:"minute"===t?r/6e4:"hour"===t?r/36e5:"day"===t?(r-i)/864e5:"week"===t?(r-i)/6048e5:r),n?a:v(a)):NaN):NaN}function on(e,t){var n,s,i=12*(t.year()-e.year())+(t.month()-e.month()),r=e.clone().add(i,"months")
return 0>t-r?(n=e.clone().add(i-1,"months"),s=(t-r)/(r-n)):(n=e.clone().add(i+1,"months"),s=(t-r)/(n-r)),-(i+s)||0}function un(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function ln(){if(!this.isValid())return null
var e=this.clone().utc()
return e.year()<0||e.year()>9999?J(e,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):Y(Date.prototype.toISOString)?this.toDate().toISOString():J(e,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function dn(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)"
var e="moment",t=""
this.isLocal()||(e=0===this.utcOffset()?"moment.utc":"moment.parseZone",t="Z")
var n="["+e+'("]',s=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",i="-MM-DD[T]HH:mm:ss.SSS",r=t+'[")]'
return this.format(n+s+i+r)}function hn(t){t||(t=this.isUtc()?e.defaultFormatUtc:e.defaultFormat)
var n=J(this,t)
return this.localeData().postformat(n)}function cn(e,t){return this.isValid()&&(p(e)&&e.isValid()||vt(e).isValid())?It({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function fn(e){return this.from(vt(),e)}function mn(e,t){return this.isValid()&&(p(e)&&e.isValid()||vt(e).isValid())?It({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function _n(e){return this.to(vt(),e)}function yn(e){var t
return void 0===e?this._locale._abbr:(t=tt(e),null!=t&&(this._locale=t),this)}function gn(){return this._locale}function pn(e){switch(e=H(e)){case"year":this.month(0)
case"quarter":case"month":this.date(1)
case"week":case"isoWeek":case"day":case"date":this.hours(0)
case"hour":this.minutes(0)
case"minute":this.seconds(0)
case"second":this.milliseconds(0)}return"week"===e&&this.weekday(0),"isoWeek"===e&&this.isoWeekday(1),"quarter"===e&&this.month(3*Math.floor(this.month()/3)),this}function vn(e){return e=H(e),void 0===e||"millisecond"===e?this:("date"===e&&(e="day"),this.startOf(e).add(1,"isoWeek"===e?"week":e).subtract(1,"ms"))}function wn(){return this._d.valueOf()-6e4*(this._offset||0)}function Mn(){return Math.floor(this.valueOf()/1e3)}function Sn(){return new Date(this.valueOf())}function kn(){var e=this
return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function Dn(){var e=this
return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function Yn(){return this.isValid()?this.toISOString():null}function On(){return m(this)}function xn(){return d({},f(this))}function Tn(){return f(this).overflow}function bn(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function Pn(e,t){z(0,[e,e.length],0,t)}function Wn(e){return Un.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function Rn(e){return Un.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function Cn(){return ke(this.year(),1,4)}function Fn(){var e=this.localeData()._week
return ke(this.year(),e.dow,e.doy)}function Un(e,t,n,s,i){var r
return null==e?Se(this,s,i).year:(r=ke(e,s,i),t>r&&(t=r),Hn.call(this,e,t,n,s,i))}function Hn(e,t,n,s,i){var r=Me(e,t,n,s,i),a=ve(r.year,0,r.dayOfYear)
return this.year(a.getUTCFullYear()),this.month(a.getUTCMonth()),this.date(a.getUTCDate()),this}function Ln(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)}function Gn(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1
return null==e?t:this.add(e-t,"d")}function Vn(e,t){t[hi]=w(1e3*("0."+e))}function Nn(){return this._isUTC?"UTC":""}function jn(){return this._isUTC?"Coordinated Universal Time":""}function An(e){return vt(1e3*e)}function En(){return vt.apply(null,arguments).parseZone()}function In(e){return e}function Zn(e,t,n,s){var i=tt(),r=h().set(s,t)
return i[n](r,e)}function zn(e,t,n){if(a(e)&&(t=e,e=void 0),e=e||"",null!=t)return Zn(e,t,n,"month")
var s,i=[]
for(s=0;12>s;s++)i[s]=Zn(e,s,n,"month")
return i}function $n(e,t,n,s){"boolean"==typeof e?(a(t)&&(n=t,t=void 0),t=t||""):(t=e,n=t,e=!1,a(t)&&(n=t,t=void 0),t=t||"")
var i=tt(),r=e?i._week.dow:0
if(null!=n)return Zn(t,(n+r)%7,s,"day")
var o,u=[]
for(o=0;7>o;o++)u[o]=Zn(t,(o+r)%7,s,"day")
return u}function qn(e,t){return zn(e,t,"months")}function Jn(e,t){return zn(e,t,"monthsShort")}function Bn(e,t,n){return $n(e,t,n,"weekdays")}function Qn(e,t,n){return $n(e,t,n,"weekdaysShort")}function Xn(e,t,n){return $n(e,t,n,"weekdaysMin")}function Kn(){var e=this._data
return this._milliseconds=ir(this._milliseconds),this._days=ir(this._days),this._months=ir(this._months),e.milliseconds=ir(e.milliseconds),e.seconds=ir(e.seconds),e.minutes=ir(e.minutes),e.hours=ir(e.hours),e.months=ir(e.months),e.years=ir(e.years),this}function es(e,t,n,s){var i=It(t,n)
return e._milliseconds+=s*i._milliseconds,e._days+=s*i._days,e._months+=s*i._months,e._bubble()}function ts(e,t){return es(this,e,t,1)}function ns(e,t){return es(this,e,t,-1)}function ss(e){return 0>e?Math.floor(e):Math.ceil(e)}function is(){var e,t,n,s,i,r=this._milliseconds,a=this._days,o=this._months,u=this._data
return r>=0&&a>=0&&o>=0||0>=r&&0>=a&&0>=o||(r+=864e5*ss(as(o)+a),a=0,o=0),u.milliseconds=r%1e3,e=v(r/1e3),u.seconds=e%60,t=v(e/60),u.minutes=t%60,n=v(t/60),u.hours=n%24,a+=v(n/24),i=v(rs(a)),o+=i,a-=ss(as(i)),s=v(o/12),o%=12,u.days=a,u.months=o,u.years=s,this}function rs(e){return 4800*e/146097}function as(e){return 146097*e/4800}function os(e){if(!this.isValid())return NaN
var t,n,s=this._milliseconds
if(e=H(e),"month"===e||"year"===e)return t=this._days+s/864e5,n=this._months+rs(t),"month"===e?n:n/12
switch(t=this._days+Math.round(as(this._months)),e){case"week":return t/7+s/6048e5
case"day":return t+s/864e5
case"hour":return 24*t+s/36e5
case"minute":return 1440*t+s/6e4
case"second":return 86400*t+s/1e3
case"millisecond":return Math.floor(864e5*t)+s
default:throw Error("Unknown unit "+e)}}function us(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*w(this._months/12):NaN}function ls(e){return function(){return this.as(e)}}function ds(e){return e=H(e),this.isValid()?this[e+"s"]():NaN}function hs(e){return function(){return this.isValid()?this._data[e]:NaN}}function cs(){return v(this.days()/7)}function fs(e,t,n,s,i){return i.relativeTime(t||1,!!n,e,s)}function ms(e,t,n){var s=It(e).abs(),i=wr(s.as("s")),r=wr(s.as("m")),a=wr(s.as("h")),o=wr(s.as("d")),u=wr(s.as("M")),l=wr(s.as("y")),d=i<=Mr.ss&&["s",i]||i<Mr.s&&["ss",i]||1>=r&&["m"]||r<Mr.m&&["mm",r]||1>=a&&["h"]||a<Mr.h&&["hh",a]||1>=o&&["d"]||o<Mr.d&&["dd",o]||1>=u&&["M"]||u<Mr.M&&["MM",u]||1>=l&&["y"]||["yy",l]
return d[2]=t,d[3]=+e>0,d[4]=n,fs.apply(null,d)}function _s(e){return void 0===e?wr:"function"==typeof e?(wr=e,!0):!1}function ys(e,t){return void 0===Mr[e]?!1:void 0===t?Mr[e]:(Mr[e]=t,"s"===e&&(Mr.ss=t-1),!0)}function gs(e){if(!this.isValid())return this.localeData().invalidDate()
var t=this.localeData(),n=ms(this,!e,t)
return e&&(n=t.pastFuture(+this,n)),t.postformat(n)}function ps(){if(!this.isValid())return this.localeData().invalidDate()
var e,t,n,s=Sr(this._milliseconds)/1e3,i=Sr(this._days),r=Sr(this._months)
e=v(s/60),t=v(e/60),s%=60,e%=60,n=v(r/12),r%=12
var a=n,o=r,u=i,l=t,d=e,h=s,c=this.asSeconds()
return c?(0>c?"-":"")+"P"+(a?a+"Y":"")+(o?o+"M":"")+(u?u+"D":"")+(l||d||h?"T":"")+(l?l+"H":"")+(d?d+"M":"")+(h?h+"S":""):"P0D"}var vs,ws
ws=Array.prototype.some?Array.prototype.some:function(e){for(var t=Object(this),n=t.length>>>0,s=0;n>s;s++)if(s in t&&e.call(this,t[s],s,t))return!0
return!1}
var Ms=ws,Ss=e.momentProperties=[],ks=!1,Ds={}
e.suppressDeprecationWarnings=!1,e.deprecationHandler=null
var Ys
Ys=Object.keys?Object.keys:function(e){var t,n=[]
for(t in e)l(e,t)&&n.push(t)
return n}
var Os,xs=Ys,Ts={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},bs={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},Ps="Invalid date",Ws="%d",Rs=/\d{1,2}/,Cs={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Fs={},Us={},Hs=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Ls=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Gs={},Vs={},Ns=/\d/,js=/\d\d/,As=/\d{3}/,Es=/\d{4}/,Is=/[+-]?\d{6}/,Zs=/\d\d?/,zs=/\d\d\d\d?/,$s=/\d\d\d\d\d\d?/,qs=/\d{1,3}/,Js=/\d{1,4}/,Bs=/[+-]?\d{1,6}/,Qs=/\d+/,Xs=/[+-]?\d+/,Ks=/Z|[+-]\d\d:?\d\d/gi,ei=/Z|[+-]\d\d(?::?\d\d)?/gi,ti=/[+-]?\d+(\.\d{1,3})?/,ni=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,si={},ii={},ri=0,ai=1,oi=2,ui=3,li=4,di=5,hi=6,ci=7,fi=8
Os=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var t
for(t=0;t<this.length;++t)if(this[t]===e)return t
return-1}
var mi=Os
z("M",["MM",2],"Mo",function(){return this.month()+1}),z("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),z("MMMM",0,0,function(e){return this.localeData().months(this,e)}),U("month","M"),G("month",8),Q("M",Zs),Q("MM",Zs,js),Q("MMM",function(e,t){return t.monthsShortRegex(e)}),Q("MMMM",function(e,t){return t.monthsRegex(e)}),te(["M","MM"],function(e,t){t[ai]=w(e)-1}),te(["MMM","MMMM"],function(e,t,n,s){var i=n._locale.monthsParse(e,s,n._strict)
null!=i?t[ai]=i:f(n).invalidMonth=e})
var _i=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,yi="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),gi="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),pi=ni,vi=ni
z("Y",0,0,function(){var e=this.year()
return 9999>=e?""+e:"+"+e}),z(0,["YY",2],0,function(){return this.year()%100}),z(0,["YYYY",4],0,"year"),z(0,["YYYYY",5],0,"year"),z(0,["YYYYYY",6,!0],0,"year"),U("year","y"),G("year",1),Q("Y",Xs),Q("YY",Zs,js),Q("YYYY",Js,Es),Q("YYYYY",Bs,Is),Q("YYYYYY",Bs,Is),te(["YYYYY","YYYYYY"],ri),te("YYYY",function(t,n){n[ri]=2===t.length?e.parseTwoDigitYear(t):w(t)}),te("YY",function(t,n){n[ri]=e.parseTwoDigitYear(t)}),te("Y",function(e,t){t[ri]=parseInt(e,10)}),e.parseTwoDigitYear=function(e){return w(e)+(w(e)>68?1900:2e3)}
var wi=N("FullYear",!0)
z("w",["ww",2],"wo","week"),z("W",["WW",2],"Wo","isoWeek"),U("week","w"),U("isoWeek","W"),G("week",5),G("isoWeek",5),Q("w",Zs),Q("ww",Zs,js),Q("W",Zs),Q("WW",Zs,js),ne(["w","ww","W","WW"],function(e,t,n,s){t[s.substr(0,1)]=w(e)})
var Mi={dow:0,doy:6}
z("d",0,"do","day"),z("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),z("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),z("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),z("e",0,0,"weekday"),z("E",0,0,"isoWeekday"),U("day","d"),U("weekday","e"),U("isoWeekday","E"),G("day",11),G("weekday",11),G("isoWeekday",11),Q("d",Zs),Q("e",Zs),Q("E",Zs),Q("dd",function(e,t){return t.weekdaysMinRegex(e)}),Q("ddd",function(e,t){return t.weekdaysShortRegex(e)}),Q("dddd",function(e,t){return t.weekdaysRegex(e)}),ne(["dd","ddd","dddd"],function(e,t,n,s){var i=n._locale.weekdaysParse(e,s,n._strict)
null!=i?t.d=i:f(n).invalidWeekday=e}),ne(["d","e","E"],function(e,t,n,s){t[s]=w(e)})
var Si="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),ki="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Di="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Yi=ni,Oi=ni,xi=ni
z("H",["HH",2],0,"hour"),z("h",["hh",2],0,Ee),z("k",["kk",2],0,Ie),z("hmm",0,0,function(){return""+Ee.apply(this)+Z(this.minutes(),2)}),z("hmmss",0,0,function(){return""+Ee.apply(this)+Z(this.minutes(),2)+Z(this.seconds(),2)}),z("Hmm",0,0,function(){return""+this.hours()+Z(this.minutes(),2)}),z("Hmmss",0,0,function(){return""+this.hours()+Z(this.minutes(),2)+Z(this.seconds(),2)}),Ze("a",!0),Ze("A",!1),U("hour","h"),G("hour",13),Q("a",ze),Q("A",ze),Q("H",Zs),Q("h",Zs),Q("k",Zs),Q("HH",Zs,js),Q("hh",Zs,js),Q("kk",Zs,js),Q("hmm",zs),Q("hmmss",$s),Q("Hmm",zs),Q("Hmmss",$s),te(["H","HH"],ui),te(["k","kk"],function(e,t,n){var s=w(e)
t[ui]=24===s?0:s}),te(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e}),te(["h","hh"],function(e,t,n){t[ui]=w(e),f(n).bigHour=!0}),te("hmm",function(e,t,n){var s=e.length-2
t[ui]=w(e.substr(0,s)),t[li]=w(e.substr(s)),f(n).bigHour=!0}),te("hmmss",function(e,t,n){var s=e.length-4,i=e.length-2
t[ui]=w(e.substr(0,s)),t[li]=w(e.substr(s,2)),t[di]=w(e.substr(i)),f(n).bigHour=!0}),te("Hmm",function(e,t,n){var s=e.length-2
t[ui]=w(e.substr(0,s)),t[li]=w(e.substr(s))}),te("Hmmss",function(e,t,n){var s=e.length-4,i=e.length-2
t[ui]=w(e.substr(0,s)),t[li]=w(e.substr(s,2)),t[di]=w(e.substr(i))})
var Ti,bi=/[ap]\.?m?\.?/i,Pi=N("Hours",!0),Wi={calendar:Ts,longDateFormat:bs,invalidDate:Ps,ordinal:Ws,dayOfMonthOrdinalParse:Rs,relativeTime:Cs,months:yi,monthsShort:gi,week:Mi,weekdays:Si,weekdaysMin:Di,weekdaysShort:ki,meridiemParse:bi},Ri={},Ci={},Fi=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Ui=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Hi=/Z|[+-]\d\d(?::?\d\d)?/,Li=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],Gi=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Vi=/^\/?Date\((\-?\d+)/i,Ni=/^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/
e.createFromInputFallback=k("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),e.ISO_8601=function(){},e.RFC_2822=function(){}
var ji=k("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=vt.apply(null,arguments)
return this.isValid()&&e.isValid()?this>e?this:e:_()}),Ai=k("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=vt.apply(null,arguments)
return this.isValid()&&e.isValid()?e>this?this:e:_()}),Ei=function(){return Date.now?Date.now():+new Date},Ii=["year","quarter","month","week","day","hour","minute","second","millisecond"]
bt("Z",":"),bt("ZZ",""),Q("Z",ei),Q("ZZ",ei),te(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=Pt(ei,e)})
var Zi=/([\+\-]|\d\d)/gi
e.updateOffset=function(){}
var zi=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,$i=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/
It.fn=Ot.prototype,It.invalid=Yt
var qi=qt(1,"add"),Ji=qt(-1,"subtract")
e.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",e.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]"
var Bi=k("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)})
z(0,["gg",2],0,function(){return this.weekYear()%100}),z(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Pn("gggg","weekYear"),Pn("ggggg","weekYear"),Pn("GGGG","isoWeekYear"),Pn("GGGGG","isoWeekYear"),U("weekYear","gg"),U("isoWeekYear","GG"),G("weekYear",1),G("isoWeekYear",1),Q("G",Xs),Q("g",Xs),Q("GG",Zs,js),Q("gg",Zs,js),Q("GGGG",Js,Es),Q("gggg",Js,Es),Q("GGGGG",Bs,Is),Q("ggggg",Bs,Is),ne(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,s){t[s.substr(0,2)]=w(e)}),ne(["gg","GG"],function(t,n,s,i){n[i]=e.parseTwoDigitYear(t)}),z("Q",0,"Qo","quarter"),U("quarter","Q"),G("quarter",7),Q("Q",Ns),te("Q",function(e,t){t[ai]=3*(w(e)-1)}),z("D",["DD",2],"Do","date"),U("date","D"),G("date",9),Q("D",Zs),Q("DD",Zs,js),Q("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient}),te(["D","DD"],oi),te("Do",function(e,t){t[oi]=w(e.match(Zs)[0],10)})
var Qi=N("Date",!0)
z("DDD",["DDDD",3],"DDDo","dayOfYear"),U("dayOfYear","DDD"),G("dayOfYear",4),Q("DDD",qs),Q("DDDD",As),te(["DDD","DDDD"],function(e,t,n){n._dayOfYear=w(e)}),z("m",["mm",2],0,"minute"),U("minute","m"),G("minute",14),Q("m",Zs),Q("mm",Zs,js),te(["m","mm"],li)
var Xi=N("Minutes",!1)
z("s",["ss",2],0,"second"),U("second","s"),G("second",15),Q("s",Zs),Q("ss",Zs,js),te(["s","ss"],di)
var Ki=N("Seconds",!1)
z("S",0,0,function(){return~~(this.millisecond()/100)}),z(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),z(0,["SSS",3],0,"millisecond"),z(0,["SSSS",4],0,function(){return 10*this.millisecond()}),z(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),z(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),z(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),z(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),z(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),U("millisecond","ms"),G("millisecond",16),Q("S",qs,Ns),Q("SS",qs,js),Q("SSS",qs,As)
var er
for(er="SSSS";er.length<=9;er+="S")Q(er,Qs)
for(er="S";er.length<=9;er+="S")te(er,Vn)
var tr=N("Milliseconds",!1)
z("z",0,0,"zoneAbbr"),z("zz",0,0,"zoneName")
var nr=g.prototype
nr.add=qi,nr.calendar=Qt,nr.clone=Xt,nr.diff=an,nr.endOf=vn,nr.format=hn,nr.from=cn,nr.fromNow=fn,nr.to=mn,nr.toNow=_n,nr.get=E,nr.invalidAt=Tn,nr.isAfter=Kt,nr.isBefore=en,nr.isBetween=tn,nr.isSame=nn,nr.isSameOrAfter=sn,nr.isSameOrBefore=rn,nr.isValid=On,nr.lang=Bi,nr.locale=yn,nr.localeData=gn,nr.max=Ai,nr.min=ji,nr.parsingFlags=xn,nr.set=I,nr.startOf=pn,nr.subtract=Ji,nr.toArray=kn,nr.toObject=Dn,nr.toDate=Sn,nr.toISOString=ln,nr.inspect=dn,nr.toJSON=Yn,nr.toString=un,nr.unix=Mn,nr.valueOf=wn,nr.creationData=bn,nr.year=wi,nr.isLeapYear=ge,nr.weekYear=Wn,nr.isoWeekYear=Rn,nr.quarter=nr.quarters=Ln,nr.month=de,nr.daysInMonth=he,nr.week=nr.weeks=xe,nr.isoWeek=nr.isoWeeks=Te,nr.weeksInYear=Fn,nr.isoWeeksInYear=Cn,nr.date=Qi,nr.day=nr.days=He,nr.weekday=Le,nr.isoWeekday=Ge,nr.dayOfYear=Gn,nr.hour=nr.hours=Pi,nr.minute=nr.minutes=Xi,nr.second=nr.seconds=Ki,nr.millisecond=nr.milliseconds=tr,nr.utcOffset=Ct,nr.utc=Ut,nr.local=Ht,nr.parseZone=Lt,nr.hasAlignedHourOffset=Gt,nr.isDST=Vt,nr.isLocal=jt,nr.isUtcOffset=At,nr.isUtc=Et,nr.isUTC=Et,nr.zoneAbbr=Nn,nr.zoneName=jn,nr.dates=k("dates accessor is deprecated. Use date instead.",Qi),nr.months=k("months accessor is deprecated. Use month instead",de),nr.years=k("years accessor is deprecated. Use year instead",wi),nr.zone=k("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Ft),nr.isDSTShifted=k("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Nt)
var sr=T.prototype
sr.calendar=b,sr.longDateFormat=P,sr.invalidDate=W,sr.ordinal=R,sr.preparse=In,sr.postformat=In,sr.relativeTime=C,sr.pastFuture=F,sr.set=O,sr.months=re,sr.monthsShort=ae,sr.monthsParse=ue,sr.monthsRegex=fe,sr.monthsShortRegex=ce,sr.week=De,sr.firstDayOfYear=Oe,sr.firstDayOfWeek=Ye,sr.weekdays=We,sr.weekdaysMin=Ce,sr.weekdaysShort=Re,sr.weekdaysParse=Ue,sr.weekdaysRegex=Ve,sr.weekdaysShortRegex=Ne,sr.weekdaysMinRegex=je,sr.isPM=$e,sr.meridiem=qe,Xe("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,n=1===w(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th"
return e+n}}),e.lang=k("moment.lang is deprecated. Use moment.locale instead.",Xe),e.langData=k("moment.langData is deprecated. Use moment.localeData instead.",tt)
var ir=Math.abs,rr=ls("ms"),ar=ls("s"),or=ls("m"),ur=ls("h"),lr=ls("d"),dr=ls("w"),hr=ls("M"),cr=ls("y"),fr=hs("milliseconds"),mr=hs("seconds"),_r=hs("minutes"),yr=hs("hours"),gr=hs("days"),pr=hs("months"),vr=hs("years"),wr=Math.round,Mr={ss:44,s:45,m:45,h:22,d:26,M:11},Sr=Math.abs,kr=Ot.prototype
return kr.isValid=Dt,kr.abs=Kn,kr.add=ts,kr.subtract=ns,kr.as=os,kr.asMilliseconds=rr,kr.asSeconds=ar,kr.asMinutes=or,kr.asHours=ur,kr.asDays=lr,kr.asWeeks=dr,kr.asMonths=hr,kr.asYears=cr,kr.valueOf=us,kr._bubble=is,kr.get=ds,kr.milliseconds=fr,kr.seconds=mr,kr.minutes=_r,kr.hours=yr,kr.days=gr,kr.weeks=cs,kr.months=pr,kr.years=vr,kr.humanize=gs,kr.toISOString=ps,kr.toString=ps,kr.toJSON=ps,kr.locale=yn,kr.localeData=gn,kr.toIsoString=k("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",ps),kr.lang=Bi,z("X",0,0,"unix"),z("x",0,0,"valueOf"),Q("x",Xs),Q("X",ti),te("X",function(e,t,n){n._d=new Date(1e3*parseFloat(e,10))}),te("x",function(e,t,n){n._d=new Date(w(e))}),e.version="2.18.1",t(vt),e.fn=nr,e.min=Mt,e.max=St,e.now=Ei,e.utc=h,e.unix=An,e.months=qn,e.isDate=o,e.locale=Xe,e.invalid=_,e.duration=It,e.isMoment=p,e.weekdays=Bn,e.parseZone=En,e.localeData=tt,e.isDuration=xt,e.monthsShort=Jn,e.weekdaysMin=Xn,e.defineLocale=Ke,e.updateLocale=et,e.locales=nt,e.weekdaysShort=Qn,e.normalizeUnits=H,e.relativeTimeRounding=_s,e.relativeTimeThreshold=ys,e.calendarFormat=Bt,e.prototype=nr,e})

function rating(rate) {
  if (rate == undefined){
    return "UNRATED"
  }

  if (rate.includes('tv-14')) {
    return "TV-14"
  }
  if (rate.includes('tv-pg')) {
    return "TV-PG"
  }
  if (rate.includes('tv-y7')) {
    return "TV-Y7"
  }
  if (rate.includes('tv-y')) {
    return "TV-Y"
  }
  if (rate.includes('tv-g')) {
    return "TV-G"
  }
  return rate.toUpperCase();
}

function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 196; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}
function epiformat(s, e) {
  s = parseInt(s)
  e = parseInt(e)
  if (s < 10) {
    s = '0' + s
  }
  if (e < 10) {
    e = '0' + e
  }
  return 'S' + s + 'E' + e
}

	var externalToApi = 'https://api.fox.com/fbc-content/v3/video?externalId=853172291669'
var shows = 'https://api.fox.com/fbc-content/v3/screens/find'
var newest = 'https://api.fox.com/fbc-content/v3/screenpanels/58d57fd0880f910001a9fb82/items' 
var data = null;

function loadInfo(id){
  self.postMessage('add');

var loadShow = new XMLHttpRequest();
loadShow.addEventListener("readystatechange", function () {

  if (this.readyState === 4) {
        if (this.status  === 200) {

    var showinfo = (JSON.parse(this.responseText));


var seasoninfo = new XMLHttpRequest();
seasoninfo.addEventListener("readystatechange",function () {
      if (!this.status  == 200) {
  self.postMessage('remove');

}
  if (this.readyState === 4) {
    if (this.status === 200) {
console.time()
var json = (JSON.parse(this.responseText))

for(i in json.member){
if(!json.member[i].requiresAuth && json.member[i].isFullEpisode ){
var image = json.member[i].images.still.HD.split('?')[0]
var sizes = [
'208:117',
'240:135',
'304:171',
'384:216',
'400:225',
'432:243',
'576:324',
'720:405',
'768:432',
'896:504',
'1024:576',
'1280:720',
'1920:1080'
]
var srcset = ''
for (var z = sizes.length - 1; z >= 0; z--) {
  srcset += (image + '?fit=inside%7C' + encodeURIComponent(sizes[z]) + ' '+ sizes[z].split(':')[0] +'w ' +sizes[z].split(':')[1] +'h,')
}
srcset = srcset.substr(0, srcset.length - 1);
console.log(json.member[i].originalAirDate)
var temp = moment(json.member[i].originalAirDate).subtract(4, 'hours')

console.log(temp)
  self.postMessage({
        img: json.member[i].images.still.SD,
        rating: rating(json.member[i].contentRating),
        href: json.member[i]['@id'],
        show: json.member[i].seriesName,
        episode: json.member[i].name,
        id: makeid(),
        epiformat: epiformat(json.member[i].seasonNumber, json.member[i].episodeNumber),
        length: json.member[i].durationInSeconds,
        type: "fox",
        imgdyn: srcset,
        autoplay:json.member[i].autoPlayVideo.default.url,
        bg:json.member[i].images.still.HD.split('?')[0] + '?fit=inside%7C' + encodeURIComponent('8:4'),
        time:Date.parse(temp)

              });
self.postMessage({loadshow:json.member[i].seriesName,
	img:json.member[i].images.seriesStill.SD})



}
}
console.timeEnd()
  self.postMessage('remove');




    }else{
  self.postMessage('remove');
      return;
    }


}

})

var season = null
try{
	if ( showinfo.panels.member["0"].items.member["0"].latestEpisode.seasonNumber < 10) {
		 showinfo.panels.member["0"].items.member["0"].latestEpisode.seasonNumber = '0'+ showinfo.panels.member["0"].items.member["0"].latestEpisode.seasonNumber
	}
	console.log(showinfo.panels.member["0"].items.member["0"])
var season =  showinfo.panels.member[1].items.member["0"]["@id"].split('?')[0] + '/episodes'
seasoninfo.open("GET",season);
seasoninfo.setRequestHeader("apikey", "rm7dzFLzucfbXAVkZi8e1P34PWEN4GoR");

seasoninfo.send(null)

  self.postMessage('add');

}catch(e){
}








  self.postMessage('remove');


}else{
  self.postMessage('remove');
return;
}

  }
});
loadShow.open("GET", 'https://api.fox.com/fbc-content/v3_blue/screens/series-detail/'+id );

loadShow.setRequestHeader("apikey", "rm7dzFLzucfbXAVkZi8e1P34PWEN4GoR");
loadShow.send(data)

}





  self.postMessage('add');
	self.postMessage('loaded')

var xhr = new XMLHttpRequest();
xhr.onerror = function() {
  self.postMessage('remove');
return;
 };

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4 ) {
if (this.status === 200) {
var allshows = []
var json = JSON.parse(this.responseText).panels.member
/*
for (var i = json.length - 1; i >= 0; i--) {
  try{

allshows.unshift.apply( allshows, json[i].items.member );

  
  }catch(e){
console.log(e)
  }

}
*/
allshows.unshift.apply( allshows, json[3].items.member );

// FX allshows.unshift.apply( allshows, json[4].items.member );

    var foxshows = (JSON.parse(this.responseText).panels.member[3].items.member);
    var json = []
    for (var i = allshows.length - 1; i >= 0; i--) {
      json.push({name:allshows[i].name,image:allshows[i].images.seriesList.HD})
if(allshows[i].seriesType != 'special' || allshows[i].seriesType != 'movie'){


            loadInfo(allshows[i].id)

          }

    }
  self.postMessage('remove');
}else{
  self.postMessage('remove');
  return;
}


  }
});


xhr.open("GET", "https://api.fox.com/fbc-content/v3_blue/screens/find");

xhr.setRequestHeader("apikey", "rm7dzFLzucfbXAVkZi8e1P34PWEN4GoR");


xhr.send(data);


self.addEventListener('message', function(e) {
  self.postMessage(e.data);
}, false);