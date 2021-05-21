(()=>{"use strict";new class{constructor(){this.init()}init(){(new class{_getElements(e){return"object"==typeof e?[e]:document.querySelectorAll(e)}hide(e){this._hideElements(this._getElements(e))}_hideElements(e){var s,t=e.length;for(s=0;s<t;s++)this._hideElement(e[s])}_hideElement(e){this._styleElement(e,"display","none")}show(e,s){var t=this._getElements(e);s&&this._hideElements(t),this._showElements(t)}_showElements(e){var s,t=e.length;for(s=0;s<t;s++)this._showElement(e[s])}_showElement(e){this._styleElement(e,"display","block")}addStyle(e,s,t){this._styleElements(this._getElements(e),s,t)}_styleElements(e,s,t){var l,n=e.length;for(l=0;l<n;l++)this._styleElement(e[l],s,t)}_styleElement(e,s,t){e.style.setProperty(s,t)}toggleShow(e){var s,t=this._getElements(e),l=t.length;for(s=0;s<l;s++)"none"==t[s].style.display?this._styleElement(t[s],"display","block"):this._styleElement(t[s],"display","none")}addClass(e,s){this._addClassElements(this._getElements(e),s)}_addClassElements(e,s){var t,l=e.length;for(t=0;t<l;t++)this._addClassElement(e[t],s)}_addClassElement(e,s){var t,l,n;for(l=e.className.split(" "),n=s.split(" "),t=0;t<n.length;t++)-1==l.indexOf(n[t])&&(e.className+=" "+n[t])}removeClass(e,s){this._removeClassElements(this._getElements(e),s)}_removeClassElements(e,s){var t,l=e.length;for(t=0;t<l;t++)this._removeClassElement(e[t],s)}_removeClassElement(e,s){var t,l,n;for(l=e.className.split(" "),n=s.split(" "),t=0;t<n.length;t++)for(;l.indexOf(n[t])>-1;)l.splice(l.indexOf(n[t]),1);e.className=l.join(" ")}toggleClass(e,s,t){this._toggleClassElements(this._getElements(e),s,t)}_toggleClassElements(e,s,t){var l,n=e.length;for(l=0;l<n;l++)this._toggleClassElement(e[l],s,t)}_toggleClassElement(e,s,t){var l,n,i,a,m,h,o;if(n=t||"",i=(l=s||"").split(" "),a=n.split(" "),h=e.className.split(" "),0==a.length){for(o=!0,m=0;m<i.length;m++)-1==h.indexOf(i[m])&&(o=!1);o?this._removeClassElement(e,l):this._addClassElement(e,l)}else{for(o=!0,m=0;m<i.length;m++)-1==h.indexOf(i[m])&&(o=!1);o?(this._removeClassElement(e,l),this._addClassElement(e,n)):(this._removeClassElement(e,n),this._addClassElement(e,l))}}}).addClass(document.getElementById("utilities"),"toto")}}})();