(function(){
  const C = window.SITE_CONTENT;
  const $ = s => document.querySelector(s);
  const esc = s => (s||"").replace(/[&<>'"]/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':'&quot;'}[m]));

  $("#title").textContent = C.brand.title;
  $("#subtitle").textContent = C.brand.subtitle;
  $("#intro").textContent = C.brand.intro;
  $("#quote").textContent = C.brand.heroQuote || "";

  $("#links").innerHTML = C.links.map(x=>`<article class="card"><h3>${esc(x.name)}</h3><p>${esc(x.desc)}</p>${x.url?`<a class="btn" target="_blank" href="${esc(x.url)}">打开 ↗</a>`:`<button class="btn muted" disabled>待补链接</button>`}</article>`).join("");

  $("#portfolio").innerHTML = C.portfolio.map(p=>`<article class="card work"><div class="cover">${p.cover?`<img src="${esc(p.cover)}" alt="${esc(p.title)}">`:`<div class="placeholder">封面待补</div>`}</div><h3>${esc(p.title)}</h3><p class="meta">${esc(p.platform)}</p><p>${esc(p.summary)}</p>${p.link?`<a class="btn" target="_blank" href="${esc(p.link)}">查看案例 ↗</a>`:`<button class="btn muted" disabled>待补链接</button>`}</article>`).join("");

  $("#services").innerHTML = C.services.map(s=>`<article class="card"><h3>${esc(s.title)}</h3><p>${esc(s.desc)}</p></article>`).join("");

  $("#process").innerHTML = C.process.map(p=>`<article class="card step"><div class="badge">${esc(p.step)}</div><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p></article>`).join("");

  $("#resources").innerHTML = C.resources.map(r=>`<article class="card"><h3>${esc(r.category)}</h3><ul>${r.items.map(i=>`<li>${esc(i)}</li>`).join("")}</ul></article>`).join("");

  $("#testimonials").innerHTML = C.testimonials.map(t=>`<article class="card quote"><p>“${esc(t.text)}”</p><h4>${esc(t.name)}</h4></article>`).join("");

  $("#faq").innerHTML = C.faq.map(f=>`<details class="card"><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join("");

  $("#contacts").innerHTML = C.contacts.map(c=>`<div class="item"><div class="t">${esc(c.label)}</div><div class="v">${esc(c.value)}</div></div>`).join("");

  $("#ctaTitle").textContent = C.cta.title;
  $("#ctaText").textContent = C.cta.text;

  $("#privateHint").textContent = C.privateArea.hint;
  const out = $("#privateContent");
  $("#unlockBtn").addEventListener("click", ()=>{
    const v = $("#pwd").value;
    if(v !== C.privateArea.password){ out.innerHTML = '<p class="err">密码不正确，请重试。</p>'; return; }
    out.innerHTML = C.privateArea.items.map(i=>`<article class="card"><h3>${esc(i.title)}</h3><p>${esc(i.text)}</p></article>`).join("");
  });
})();
