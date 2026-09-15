module.exports = function renderZhCatalog({ write, head, chrome, footer, s1, usd, catalog }) {
  const up = (p) => `../${p}`;

  write("destinations/index.html", `${head(s1, "蒙古旅游目的地_按地区探索 | Visit Mongolia Tours", "按地区了解蒙古：南戈壁、中戈壁、库苏古尔湖、哈拉和林、阿尔泰、肯特与乌兰巴托近郊。")}
${chrome(s1)}
<section class="page-hero" style="--hero-img:url('../images/hero/hero-1-mongolia.jpg')"><div class="container"><p class="kicker">目的地</p><h1>按地区探索蒙古</h1><p>先看景点实景，再选 31 条私人线路。</p></div></section>
<section><div class="container destination-grid">
${catalog.destinations.map((d) => `<a class="destination-card" href="${d.file}"><img src="${up(d.image)}" alt="${d.name}"><div><span class="tag">${d.tag}</span><h3>${d.name}</h3><p>${d.lead}</p></div></a>`).join("\n")}
</div></section>
${footer(s1)}`);

  for (const d of catalog.destinations) {
    const hero = up(d.image);
    const stats = d.stats.map((s) => `<div class="stat-box"><strong>${s[0]}</strong><span>${s[1]}</span></div>`).join("");
    const places = d.places.map((p, i) => {
      const reverse = i % 2 === 1 ? " place-grid reverse" : " place-grid";
      const meta = p.meta.map((m) => `<div><strong>${m[0]}</strong>${m[1]}</div>`).join("");
      return `<article class="place-card"><div class="${reverse.trim()}"><img src="${up(p.image)}" alt="${p.name}"><div class="place-body"><h3>${p.name}</h3><p class="place-sub">${p.sub}</p><p>${p.text}</p><div class="meta-grid">${meta}</div><p>${p.extra}</p></div></div></article>`;
    }).join("\n");
    write(`destinations/${d.file}`, `${head(s1, d.title, d.desc)}
${chrome(s1)}
<section class="page-hero" style="--hero-img:url('${hero}')"><div class="container"><p class="kicker">${d.tag}</p><h1>${d.name}</h1><p>${d.lead}</p></div></section>
<section><div class="container"><div class="stats-4">${stats}</div></div></section>
<section><div class="container grid-2"><div class="lux-box"><h2 class="title">${d.name}</h2><p>${d.why}</p><p>私人行程可按季节、路况、住宿等级和步行强度调整。可用微信咨询，支持支付宝与微信支付。</p><a class="btn btn-primary" href="../contact.html">咨询这条线路</a></div><img class="image-round" src="${hero}" alt="${d.name}"></div></section>
<section><div class="container"><h2 class="title">主要景点</h2>${places}</div></section>
${footer(s1)}`);
  }

  write("tours/index.html", `${head(s1, "蒙古私人定制行程_31条线路 | Visit Mongolia Tours", "31 条蒙古私人线路：戈壁、库苏古尔湖、哈拉和林、阿尔泰、那达慕、骑马与 VIP。含参考价，支持微信支付宝。")}
${chrome(s1)}
<section class="page-hero" style="--hero-img:url('../images/hero/hero-horse-riders.jpg')"><div class="container"><p class="kicker">精品行程</p><h1>31 条私人蒙古线路</h1><p>参考价为每人美元，不含国际机票。最终以确认人数、季节与住宿等级为准。可用微信 / 支付宝咨询。</p></div></section>
<section><div class="container grid-3">
${catalog.tours.map((t) => {
    const price = t.prices ? `2人同行约 ${usd(t.prices[2])} / 人` : "需询价";
    return `<a class="card" href="${t.id}.html"><img src="${up(t.image)}" alt="${t.name}"><div class="card-body"><span class="tag">${catalog.regionLabel[t.region]} · ${t.days} 天</span><h3>${t.name}</h3><p>${t.highlights.slice(0, 3).join("、")}</p><p class="card-price">${price}</p></div></a>`;
  }).join("\n")}
</div></section>
${footer(s1)}`);

  for (const t of catalog.tours) {
    const img = up(t.image);
    const tag = `${catalog.regionLabel[t.region]} · ${catalog.styleLabel[t.style]}`;
    const priceBlock = t.prices
      ? `<div class="price-grid">
<div class="price-box"><strong>1 人</strong>${usd(t.prices[1])}</div>
<div class="price-box"><strong>2 人</strong>${usd(t.prices[2])}</div>
<div class="price-box"><strong>3 人</strong>${usd(t.prices[3])}</div>
<div class="price-box"><strong>4 人</strong>${usd(t.prices[4])}</div>
</div><p class="pay-note">以上为每人参考价（美元），不含国际机票。旺季营地与车辆可能调整。</p>`
      : `<p>本线路按航线、机型与人数单独报价。</p>`;
    const map = t.map ? `<img class="route-map" src="${up(t.map)}" alt="${t.name} 路线图">` : "";
    const includes = t.includes ? `<h3>包含</h3><ul>${t.includes.map((x) => `<li>${x}</li>`).join("")}</ul>` : "";
    const note = t.note ? `<p>${t.note}</p>` : "";
    write(`tours/${t.id}.html`, `${head(s1, `${t.name} | Visit Mongolia Tours`, `${t.name}：${t.highlights.join("、")}。${t.days} 天私人行程，支持微信支付宝。`)}
${chrome(s1)}
<section class="page-hero" style="--hero-img:url('${img}')"><div class="container"><p class="kicker">${tag}</p><h1>${t.name}</h1><p>${t.en} · ${t.days} 天 · ${t.season}</p></div></section>
<section><div class="container grid-2"><div class="lux-box">
<h2 class="title">${t.name}</h2>
<p>路线：${t.route}</p>
<p>从乌兰巴托：${t.fromUB}。建议节奏：${t.group}。</p>
${priceBlock}
<h3>亮点</h3><ul>${t.highlights.map((x) => `<li>${x}</li>`).join("")}</ul>
${map}
<h3>参考行程</h3>${t.itinerary.map((x) => {
      const parts = x.split("：");
      return `<div class="day"><strong>${parts[0]}</strong><div>${parts.slice(1).join("：") || x}</div></div>`;
    }).join("")}
<h3>住宿等级</h3>
<div class="meta-grid">
<div><strong>标准</strong>${t.standard}</div>
<div><strong>经济</strong>${t.budget}</div>
<div><strong>升级</strong>${t.premium}</div>
</div>
${includes}${note}
<a class="btn btn-primary" href="../contact.html">微信咨询此线路</a>
</div><img class="image-round" src="${img}" alt="${t.name}"></div></section>
${footer(s1)}`);
  }

  for (const [from, to] of Object.entries(catalog.aliases)) {
    write(`tours/${from}`, `<!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8"><meta http-equiv="refresh" content="0;url=${to}"><link rel="canonical" href="https://visitmongoliatours.com/tours/${to}"><title>线路已更新</title></head><body><p><a href="${to}">进入中文线路页</a></p></body></html>`);
  }

  const guides = [
    ["mongolian-culture.html", "蒙古文化与礼仪", "传统、蒙古包礼仪、游牧日常与待客方式。", "mongolian-culture.jpg"],
    ["visa-requirements.html", "签证与入境基础", "护照、签证/免签与出行文件提醒。", "visa-requirements.jpg"],
    ["safety-guide.html", "安全与旅行提示", "路况、季节、天气、打包与实用建议。", "safety-guide.jpg"],
    ["modern-ulaanbaatar.html", "现代乌兰巴托", "城市生活、餐厅、博物馆、购物与市区体验。", "modern-ulaanbaatar.jpg"],
    ["nomadic-experience.html", "游牧家庭体验", "蒙古包生活、待客、奶制品与草原礼仪。", "nomadic-experience.jpg"],
    ["shows-entertainment-in-mongolia.html", "演出与娱乐", "传统表演、音乐、舞蹈与晚间体验。", "shows-entertainment-in-mongolia.jpg"]
  ];

  write("guide/index.html", `${head(s1, "蒙古旅行指南 | Visit Mongolia Tours", "文化、签证、安全、乌兰巴托与游牧体验。")}
${chrome(s1)}
<section class="page-hero" style="--hero-img:url('../images/hero/hero-nomadic-mongolia.jpg')"><div class="container"><p class="kicker">旅行指南</p><h1>出发前需要知道的事</h1><p>了解蒙古传统、城市、安全和季节，再开始私人行程。</p></div></section>
<section><div class="container grid-3">
${guides.map((g) => `<a class="card" href="${g[0]}"><img src="../images/guide/${g[3]}" alt="${g[1]}"><div class="card-body"><span class="tag">指南</span><h3>${g[1]}</h3><p>${g[2]}</p></div></a>`).join("\n")}
</div></section>
${footer(s1)}`);

  for (const g of guides) {
    write(`guide/${g[0]}`, `${head(s1, `${g[1]} | Visit Mongolia Tours`, g[2])}
${chrome(s1)}
<section class="page-hero" style="--hero-img:url('../images/guide/${g[3]}')"><div class="container"><p class="kicker">旅行指南</p><h1>${g[1]}</h1><p>${g[2]}</p></div></section>
<section><div class="container lux-box">
<p>${g[2]} 具体安排会按您的日期、人数和季节调整。需要落地行程时，请用微信或支付宝联系我们。</p>
<a class="btn btn-primary" href="../contact.html">咨询定制</a>
</div></section>
${footer(s1)}`);
  }

  write("mn.html", `<!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8"><meta http-equiv="refresh" content="0;url=index.html"><link rel="canonical" href="https://visitmongoliatours.com/"><title>蒙古旅游</title></head><body><p><a href="index.html">进入中文网站</a></p></body></html>`);

  const aliasRedirects = Object.entries(catalog.aliases).map(([from, to]) => `/tours/${from} /tours/${to} 301`).join("\n");
  write("_redirects", `/mn.html /index.html 301
/zh /index.html 301
/zh/ /index.html 301
/zh/index.html /index.html 301
/zh/contact.html /contact.html 301
/zh/about.html /about.html 301
/zh/destinations.html /destinations/ 301
/zh/tours.html /tours/ 301
/zh/gobi.html /tours/gobi-classic-7d.html 301
/zh/classic.html /tours/central-classic-5d.html 301
/zh/khuvsgul-tour.html /tours/khuvsgul-north-7d.html 301
/zh/altai.html /tours/altai-tavan-bogd-7d.html 301
/zh/naadam.html /tours/naadam-gobi-7d.html 301
/zh/vip.html /tours/vip-grand-5d.html 301
/zh/terelj.html /tours/terelj-horse-nature-2d.html 301
/zh/horse.html /tours/horse-nomad-5d.html 301
/zh/reindeer.html /tours/taiga-reindeer-7d.html 301
/zh/umnugovi.html /destinations/umnugovi.html 301
/zh/khuvsgul.html /destinations/khuvsgul.html 301
/zh/uvurkhangai.html /destinations/uvurkhangai.html 301
/zh/bayan-ulgii.html /destinations/bayan-ulgii.html 301
/zh/arkhangai.html /destinations/arkhangai.html 301
/zh/khentii.html /destinations/khentii.html 301
/zh/tuv.html /destinations/tuv.html 301
/zh/selenge.html /destinations/selenge.html 301
${aliasRedirects}
`);

  const destUrls = catalog.destinations.map((d) => `  <url><loc>https://visitmongoliatours.com/destinations/${d.file}</loc><priority>0.8</priority></url>`).join("\n");
  const tourUrls = catalog.tours.map((t) => `  <url><loc>https://visitmongoliatours.com/tours/${t.id}.html</loc><priority>0.8</priority></url>`).join("\n");
  write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://visitmongoliatours.com/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>https://visitmongoliatours.com/contact.html</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://visitmongoliatours.com/about.html</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://visitmongoliatours.com/destinations/</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://visitmongoliatours.com/tours/</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://visitmongoliatours.com/guide/</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
${destUrls}
${tourUrls}
</urlset>
`);

  const zhRedirect = (to) => `<!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8"><meta http-equiv="refresh" content="0;url=${to}"><link rel="canonical" href="https://visitmongoliatours.com${to.replace(/^\.\./, "")}"><title>蒙古旅游</title></head><body><p><a href="${to}">进入中文网站</a></p></body></html>`;
  write("zh/index.html", zhRedirect("../index.html"));
  write("zh/contact.html", zhRedirect("../contact.html"));
  write("zh/about.html", zhRedirect("../about.html"));

  console.log(`Chinese catalog written: ${catalog.tours.length} tours, ${catalog.destinations.length} destinations`);
};
