const provinceData = {
  khuvsgul: {
    title: "库苏古尔",
    text: "蒙古蓝珍珠：库苏古尔湖、泰加林与驯鹿文化。",
    bestFor: "湖泊、森林、驯鹿",
    fromUB: "航班或长途陆路",
    season: "6–9 月",
    type: "自然、文化、探险",
    page: "destinations/khuvsgul.html",
    tour: "tours/taiga-reindeer-7d.html",
    attractions: ["库苏古尔湖", "泰加林与驯鹿", "哈特嘎勒", "达尔哈德谷"]
  },
  bayanulgii: {
    title: "巴彦乌列盖",
    text: "西部高山、冰川、猎鹰人文化与高海拔徒步。",
    bestFor: "高山、徒步、文化",
    fromUB: "建议国内航班",
    season: "6–9 月",
    type: "探险、文化、徒步",
    page: "destinations/bayan-ulgii.html",
    tour: "tours/altai-tavan-bogd-7d.html",
    attractions: ["阿尔泰五圣山", "波塔宁冰川", "猎鹰人村落", "托勒博湖"]
  },
  umnugovi: {
    title: "南戈壁",
    text: "戈壁沙漠、巨大沙丘、峡谷与南部戏剧性地貌。",
    bestFor: "沙漠、沙丘、化石",
    fromUB: "航班、巴士或越野",
    season: "5–10 月",
    type: "沙漠探险",
    page: "destinations/umnugovi.html",
    tour: "tours/gobi-highlights-5d.html",
    attractions: ["克尔门峡谷", "洪格尔沙丘", "鹰谷", "火焰崖"]
  },
  arkhangai: {
    title: "后杭爱",
    text: "火山、湖泊、温泉与经典中部公路风景。",
    bestFor: "自然、温泉、中部线路",
    fromUB: "巴士或专车",
    season: "6–9 月",
    type: "风景与文化",
    page: "destinations/arkhangai.html",
    tour: "tours/khangai-adventure-7d.html",
    attractions: ["霍尔戈火山", "泰哈尔石", "岑赫尔温泉", "特尔欣查干湖"]
  },
  tuv: {
    title: "中央省",
    text: "乌兰巴托近郊：野马、国家公园与短途风景。",
    bestFor: "短途、家庭",
    fromUB: "当日往返或过夜",
    season: "全年",
    type: "短途与一日游",
    page: "destinations/tuv.html",
    tour: "tours/terelj-horse-nature-2d.html",
    attractions: ["胡斯泰国家公园", "特勒尔吉", "龟石", "成吉思汗雕像"]
  },
  khentii: {
    title: "肯特",
    text: "成吉思汗故乡氛围、开阔草原与东部历史路线。",
    bestFor: "历史、文化、草原",
    fromUB: "陆路专车",
    season: "6–9 月",
    type: "历史与自然",
    page: "destinations/khentii.html",
    tour: "destinations/khentii.html",
    attractions: ["巴尔丹贝勒温", "东部草原", "历史路线", "安静自然停留"]
  },
  selenge: {
    title: "色楞格",
    text: "北部田园与阿马尔巴亚斯嘎兰特寺。",
    bestFor: "寺院、文化、历史",
    fromUB: "陆路约 5–6 小时",
    season: "5–10 月",
    type: "文化旅行",
    page: "destinations/selenge.html",
    tour: "tours/amar-aglag-4d.html",
    attractions: ["阿马尔巴亚斯嘎兰特寺", "色楞格河谷", "森林草原", "北部遗产路线"]
  }
};

function renderProvinceContent(key) {
  const d = provinceData[key];
  const box = document.getElementById("provinceContent");
  if (!box || !d) return;
  const tourLabel = String(d.tour).includes("destinations/") ? "相关指南" : "相关行程";
  box.innerHTML = `
    <div class="destination-info-top">
      <h3>${d.title}</h3>
      <span class="destination-badge">省份概览</span>
    </div>
    <p>${d.text}</p>
    <div class="destination-meta">
      <div><strong>适合</strong><br>${d.bestFor}</div>
      <div><strong>从乌兰巴托</strong><br>${d.fromUB}</div>
      <div><strong>旺季</strong><br>${d.season}</div>
      <div><strong>风格</strong><br>${d.type}</div>
    </div>
    <div class="destination-mini-links">
      <a class="destination-mini-link" href="${d.page}">省份指南</a>
      <a class="destination-mini-link" href="${d.tour}">${tourLabel}</a>
    </div>
    <div class="destination-attractions">
      <h4>主要景点</h4>
      <ul class="destination-attractions-list">${d.attractions.map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>
    <div class="destination-map-cta">
      <a class="btn btn-primary" href="${d.page}">打开目的地页</a>
      <a class="btn btn-secondary" href="${d.tour}">${tourLabel}</a>
    </div>`;
}

function highlightProvince(key) {
  document.querySelectorAll(".destination-point").forEach((p) => {
    p.classList.toggle("active", p.dataset.provinceBtn === key);
    p.classList.toggle("dimmed", p.dataset.provinceBtn !== key);
  });
  document.querySelectorAll(".destination-place-label").forEach((label) => {
    const match = label.dataset.province === key;
    label.classList.toggle("active", match);
    label.classList.toggle("muted", !match);
  });
}

function showProvince(key, e) {
  if (e) e.preventDefault();
  renderProvinceContent(key);
  highlightProvince(key);
}

document.addEventListener("DOMContentLoaded", function () {
  if (!document.getElementById("provinceContent")) return;
  renderProvinceContent("khuvsgul");
  highlightProvince("khuvsgul");
});

window.showProvince = showProvince;
window.highlightProvince = highlightProvince;
