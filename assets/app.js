(function(){
  const C = window.SITE_CONTENT;
  const $ = (s)=>document.querySelector(s);
  const esc = (s="")=>s.replace(/[&<>'"]/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':'&quot;'}[m]));

  $('#heroName').textContent = C.hero.name;
  $('#heroRole').textContent = C.hero.role;
  $('#heroMeta').textContent = C.hero.meta;

  $('#aboutText1').textContent = C.about[0] || '';
  $('#aboutText2').textContent = C.about[1] || '';

  $('#worksGrid').innerHTML = (C.works || []).map(w =>
    `<article class="card"><h3>${esc(w.title)}</h3><p>${esc(w.text)}</p></article>`
  ).join('');

  $('#newsDate').textContent = C.news.date;
  $('#newsTitle').textContent = C.news.title;
  $('#newsDesc').textContent = C.news.desc;

  $('#contactList').innerHTML = (C.contacts || []).map(i =>
    `<div class="contact-item"><div class="k">${esc(i.label)}</div><div class="v">${esc(i.value)}</div></div>`
  ).join('');
})();
