const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const IC={a:'<path d="M3 20V9l9-6 9 6v11M9 20v-6h6v6"/>',b:'<path d="M4 20l3-3m0 0l9-9 3 3-9 9zM14 6l2-2 4 4-2 2"/>',c:'<path d="M3 7h18M5 7v13h14V7M9 11h6M12 3v4"/>'};
const SV=[['a','Conception 3D sur mesure','Mesures, plan et visuel 3D de votre cuisine avant toute fabrication, pour valider chaque détail.'],['b','Fabrication soignée','Caissons, façades et plans de travail réalisés avec des matériaux de haute qualité.'],['c','Pose et finitions','Une installation propre par une équipe expérimentée, jusqu’à la dernière poignée.']];
const ST=[['Rendez-vous','Nous écoutons vos besoins et prenons les mesures.'],['Plan 3D','Vous visualisez votre cuisine et ajustez le projet.'],['Fabrication','Votre cuisine est réalisée sur mesure.'],['Pose','Installation, réglages et contrôle final.']];
const WK=[['Cuisine moderne en L','Casablanca'],['Cuisine ouverte sur salon','Casablanca'],['Îlot central','Casablanca'],['Cuisine bois et noir','Casablanca'],['Cuisine compacte','Casablanca'],['Cuisine blanche mate','Casablanca'],['Cuisine en U','Casablanca'],['Cuisine laquée','Casablanca'],['Rénovation complète','Casablanca']];
const RV=[['Ali E.','Excellent travail de la part d’Ayman et son équipe. Les matériaux sont de haute qualité, je recommande.','Il y a un an'],['Amal L.','Un grand merci à toute l’équipe pour la réalisation de ma nouvelle cuisine. Le résultat est exactement ce que j’espérais, tant au niveau du design que de la pose. Un travail soigné et un grand professionnalisme du début à la fin.','Il y a 9 mois']];
const INFO='<a href="tel:+212662555258"><b>Téléphone</b>06 62 55 52 58</a><div><b>Adresse</b>NR 67-69, 1 Rue 11 Bd Tah, Casablanca 20430</div><div><b>Horaires</b>Ouvert · Ferme à 19h</div>';
const PL=[['#e9e4da','#1d4a4a','#2a6a66','#f3efe6','#c9a24a'],['#dfe3df','#2b2f33','#3d444a','#eceae4','#e0b25a'],['#efe8dc','#6b4a32','#8a6444','#f5f1e8','#2f6b66'],['#e4e8ea','#f3f1ec','#ffffff','#2b2b2b','#c9a24a'],['#e7e1d6','#26394a','#35506b','#f0ece2','#d4a64a'],['#dde3dc','#3b5a45','#4d7358','#efece4','#c9a24a']];
function K(i){const[w,l,u,t,a]=PL[i%6],I=i%2==0,V=i%3==1;let s=`<svg class="ks" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="400" height="300" fill="${w}"/><rect y="232" width="400" height="68" fill="#5a4636" opacity=".6"/>`;
if(V)s+=`<rect x="150" y="30" width="100" height="70" fill="#bfe0ea" stroke="${t}" stroke-width="5"/><path d="M200 30v70M150 65h100" stroke="${t}" stroke-width="3"/>`;
for(let k=0;k<6;k++){if(V&&k>1&&k<4)continue;const x=12+k*64;s+=`<rect x="${x}" y="22" width="60" height="74" rx="2" fill="${u}"/><rect x="${x+(k%2?6:50)}" y="64" width="2.4" height="20" rx="1" fill="${a}"/>`}
if(!V)s+=`<path d="M158 96h84l-14 22h-56z" fill="${t}"/>`;
s+=`<rect y="100" width="400" height="64" fill="${t}" opacity=".3"/><rect y="164" width="400" height="10" fill="${t}"/>`;
for(let k=0;k<6;k++){const x=12+k*64;s+=`<rect x="${x}" y="174" width="60" height="58" fill="${l}"/><rect x="${x+18}" y="182" width="24" height="2.4" rx="1" fill="${a}"/>`}
if(I){s+=`<rect x="60" y="208" width="280" height="10" fill="${t}"/><rect x="70" y="218" width="260" height="62" fill="${l}"/><rect x="70" y="218" width="260" height="62" fill="#000" opacity=".1"/>`;(V?[110,200,290]:[100,300]).forEach(x=>s+=`<path d="M${x} 100V140" stroke="#333" stroke-width="1.5"/><path d="M${x-12} 152a12 12 0 0 1 24 0z" fill="${a}"/><circle cx="${x}" cy="154" r="24" fill="${a}" opacity=".25"/>`);for(let k=0;k<3;k++)s+=`<rect x="${100+k*80}" y="228" width="30" height="2.4" rx="1" fill="${a}"/>`}
return s+'</svg>'}
function P(n,i,alt){return K(i)+`<img class="ks" src="assets/img/${n}.jpg" alt="${alt||''}" ${n=='hero'?'':'loading="lazy"'} onload="this.previousElementSibling.remove()" onerror="this.remove()">`}
const L={
services:()=>SV.map(s=>`<div class="card rv"><div class="ic"><svg viewBox="0 0 24 24">${IC[s[0]]}</svg></div><h3>${s[1]}</h3><p>${s[2]}</p></div>`).join(''),
steps:()=>ST.map(s=>`<div class="card rv"><h3>${s[0]}</h3><p>${s[1]}</p></div>`).join(''),
work:n=>WK.slice(0,n).map((w,i)=>`<div class="t rv" style="background:linear-gradient(140deg,hsl(${170-i*9} 45% ${16+i%3*5}%),hsl(${38+i*5} 50% ${30+i%4*5}%))">${P('work-'+(i+1),i,w[0])}<div><b>${w[0]}</b><span>${w[1]}</span></div></div>`).join(''),
reviews:()=>RV.map(r=>`<div class="rev rv"><div class="stars">★★★★★</div><p>« ${r[1]} »</p><small>${r[0]} · ${r[2]} · Avis Google</small></div>`).join(''),
info:()=>INFO};
$$('[data-list]').forEach(e=>e.innerHTML=L[e.dataset.list](+e.dataset.n||0));
$('#home').insertAdjacentHTML('afterbegin',P('hero',2));
$$('.pic').forEach((p,j)=>p.insertAdjacentHTML('afterbegin',P(j?'contact':'about',j?5:4,j?'Showroom Kitchen.ma':'Équipe Kitchen.ma')));
const sel=(n,a)=>`<select name="${n}" required><option value="" disabled selected>${a[0]}</option>${a.slice(1).map(o=>`<option>${o}</option>`).join('')}</select>`;
$$('[data-form]').forEach(e=>{e.innerHTML=`<form class="frm ${e.hasAttribute('data-big')?'big':''}"><h3>${e.dataset.form}</h3><p>Réponse rapide et sans engagement.</p>
<label><input name="nom" placeholder="Nom complet" required autocomplete="name"></label>
<div class="r2"><label><input name="email" type="email" placeholder="E-mail" autocomplete="email"></label><label><input name="tel" type="tel" placeholder="Téléphone" required autocomplete="tel"></label></div>
<label>${sel('type',['Type de projet','Cuisine complète neuve','Rénovation de cuisine','Cuisine ouverte','Autre'])}</label>
<div class="r2"><label>${sel('budget',['Budget','Moins de 30 000 DH','30 000 – 60 000 DH','60 000 – 100 000 DH','Plus de 100 000 DH'])}</label><label>${sel('delai',['Délai','Dès que possible','1 à 3 mois','3 à 6 mois','Je me renseigne'])}</label></div>
<label><textarea name="msg" placeholder="Parlez-nous de votre projet"></textarea></label>
<button class="btn" type="submit">Envoyer ma demande</button><small>Votre message s’ouvre dans WhatsApp.</small></form>`;
e.firstChild.addEventListener('submit',ev=>{ev.preventDefault();const f=ev.target;if(!f.checkValidity())return f.reportValidity();const d=Object.fromEntries(new FormData(f));
const t=`Bonjour Kitchen.ma, je souhaite un devis.\nNom : ${d.nom}\nTéléphone : ${d.tel}\nE-mail : ${d.email||'-'}\nProjet : ${d.type}\nBudget : ${d.budget}\nDélai : ${d.delai}\nMessage : ${d.msg||'-'}`;
window.open('https://wa.me/212662555258?text='+encodeURIComponent(t),'_blank','noopener');})});
const hd=$('#hd'),tog=o=>{hd.classList.toggle('open',o);$('#bg').setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':''};
$('#bg').onclick=()=>tog(!hd.classList.contains('open'));$('#ov').onclick=()=>tog(false);
$$('nav a').forEach(a=>a.addEventListener('click',()=>tog(false)));
addEventListener('scroll',()=>hd.classList.toggle('sc',scrollY>24),{passive:true});
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
function route(){const h=location.hash.slice(1),pg=h.startsWith('page-')&&$(`[data-v="${h}"]`)?h:'home';
$$('.view').forEach(v=>v.hidden=v.dataset.v!==pg);
requestAnimationFrame(()=>{$$('.rv').forEach(e=>{if(!e.closest('.view').hidden&&!e.classList.contains('in'))io.observe(e)});
if(pg!=='home')scrollTo({top:0,behavior:'instant'});else{const t=h&&document.getElementById(h);t?t.scrollIntoView({behavior:'smooth'}):scrollTo({top:0,behavior:'instant'})}
hd.classList.toggle('sc',scrollY>24)})}
addEventListener('hashchange',route);route();
