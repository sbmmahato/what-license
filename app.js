(function(){var e,n,s=[].indexOf;e=[["Unlicense","https://unlicense.org/","Unlicense",[1]],["MIT License","https://opensource.org/licenses/MIT","MIT",[1]],["BSD 2-Clause License","https://opensource.org/licenses/BSD-2-Clause","BSD-2-Clause",[1]],["BSD 3-Clause License","https://opensource.org/licenses/BSD-3-Clause","BSD-3-Clause",[1]],["Apache License 2.0","https://opensource.org/licenses/Apache-2.0","Apache-2.0",[1]],["Header of Apache License 2.0","https://opensource.org/licenses/Apache-2.0","Apache-2.0_SHORT",[1]],["GNU General Public License version 2 (GPL-2.0)","https://opensource.org/licenses/GPL-2.0","GPL-2.0",[]],["Header of GNU General Public License version 2 (GPL-2.0)","https://opensource.org/licenses/GPL-2.0","GPL-2.0_SHORT",[]],["GNU General Public License version 3 (GPL-3.0)","https://opensource.org/licenses/GPL-3.0","GPL-3.0",[]],["Header of GNU General Public License version 3 (GPL-3.0)","https://opensource.org/licenses/GPL-3.0","GPL-3.0_SHORT",[]]],n=function(e){return e.replace(/\s+/gi," ").replace(/\./gi,".\n")},window.onload=function(){var s,t,l,c,i,o;for(window.all=[],i=[],s=0,t=e.length;s<t;s++)c=(l=e[s]).slice(0),o=document.getElementById(l[2]).innerHTML,document.getElementById(l[2]).innerHTML="",c[2]=n(o),i.push(window.all.push(c));return i},window.check=function(){var e,t,l,c,i,o,a,r,u,p,d,h,g,f,L,T,G,m,E,P,y,I;try{if(document.getElementById("result").style.display="none",l=document.getElementById("button"),l.value="Calculating...",l.enabled=!1,i=document.getElementById("data").value,I=[],i)for((r=new diff_match_patch).Diff_EditCost=4,e=n(i),p=0,L=(y=window.all).length;p<L;p++){for(t=(f=y[p])[2],a=r.diff_main(e,t,!0),r.diff_cleanupEfficiency(a),m=0,h=0,T=a.length;h<T;h++)(d=a[h])[0]===DIFF_EQUAL&&(m+=d[1].length);E=100*m/e.length,console.log(`mct ${m} % ${E} a ${e.length} ${f[0]} ${100*m/e.length}`),o=r.diff_prettyHtml(a),I.push([1*E,f,o])}for(u="",c=0,g=0,G=(I=I.sort(function(e,n){return e=e[0],n=n[0],e<n?1:e>n?-1:0})).length;g<G;g++)P=I[g],(c>0&&P[0]<20||c>2)&&(P[2]=""),c+=1,u+=`<li><a href="${P[1][1]}" target="_blank" title="Show full license" style="color:inherit; text-decoration"><strong>${P[1][0]}</strong> - ${Math.round(P[0])}% match into this license</a>`,s.call(P[1][3],1)>=0&&(u+='<span class="ok">\n  OK FOR USE IN COMMERCIAL PRODUCTS\n</span>'),s.call(P[1][3],1)<0&&(u+=' <span class="warn">\n  BETTER DON\'T USE IN COMMERCIAL PRODUCTS\n</span>'),s.call(P[1][3],2)>=0&&(u+=' <span class="warn">\n  DON\'T FORGET TO ATTRIBUTE THE AUTHOR\n</span>'),P[2]&&(u+=`<div>\n  <div style="font-size: 10px;">\n  ${P[2]}\n  </div>\n  <br>\n</div>`),u+="</li>";document.getElementById("result").style.display="block",document.getElementById("list").innerHTML=u,l.value="Check License",l.enabled=!0}catch(e){e}return!1}}).call(this);