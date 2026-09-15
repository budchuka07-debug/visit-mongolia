const fs = require("fs");
const path = require("path");
const catalog = require("./catalog-zh");

const root = path.join(__dirname, "..");

function usd(n) {
  return "$" + Number(n).toLocaleString("en-US");
}

function prefix(depth) {
  return depth === 0 ? "" : "../".repeat(depth);
}

function shell(depth) {
  const p = prefix(depth);
  return {
    p,
    css: `${p}style.css`,
    js: `${p}script.js`,
    home: `${p}index.html`,
    dest: `${p}destinations/`,
    tours: `${p}tours/`,
    guide: `${p}guide/`,
    about: `${p}about.html`,
    contact: `${p}contact.html`,
    privacy: `${p}privacy-policy.html`,
    img: `${p}images/`
  };
}

function head(s, title, desc, extra = "") {
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <meta name="description" content="${desc}" />
  <meta name="robots" content="index,follow" />
  <link rel="stylesheet" href="${s.css}" />
  ${extra}
</head>
<body>`;
}

function chrome(s) {
  return `
  <div class="topbar">
    <div class="container">
      <span>微信 / 支付宝：扫描本站二维码即可加好友或付款</span>
      <span>WhatsApp：<a href="https://wa.me/97690283039" target="_blank" rel="noopener">+976 90283039</a></span>
    </div>
  </div>
  <header>
    <div class="container nav">
      <a class="logo" href="${s.home}"><b>蒙古<span>旅游</span></b></a>
      <nav class="nav-links" id="navLinks">
        <a href="${s.home}">首页</a>
        <a href="${s.dest}">目的地</a>
        <a href="${s.tours}">精品行程</a>
        <a href="${s.guide}">旅行指南</a>
        <a href="${s.about}">关于我们</a>
        <a href="${s.contact}">咨询预订</a>
      </nav>
      <button class="menu" onclick="document.getElementById('navLinks').classList.toggle('open')">☰</button>
    </div>
  </header>`;
}

function payBlock(s) {
  return `
        <div class="pay-methods" aria-label="支付方式">
          <span class="pay-chip pay-wechat">微信支付 WeChat Pay</span>
          <span class="pay-chip pay-alipay">支付宝 Alipay</span>
          <span class="pay-chip pay-wise">Wise</span>
          <span class="pay-chip pay-swift">SWIFT</span>
        </div>
        <div class="qr-grid">
          <figure class="qr-card"><img src="${s.img}pay/wechat-friend.jpg" alt="微信加好友"><figcaption>微信加好友<br>Chuluunchimeg Bud</figcaption></figure>
          <figure class="qr-card"><img src="${s.img}pay/alipay-friend.jpg" alt="支付宝加好友"><figcaption>支付宝好友<br>chuka</figcaption></figure>
          <figure class="qr-card qr-money"><img src="${s.img}pay/wechat-receive.jpg" alt="微信收款"><figcaption>收款码 · 微信<br>Chuluunchimeg Bud</figcaption></figure>
          <figure class="qr-card qr-money"><img src="${s.img}pay/alipay-receive.jpg" alt="支付宝收款"><figcaption>收款码 · 支付宝<br>CHULUUNCHIMEG</figcaption></figure>
        </div>
        <p class="pay-note">上面两个是加好友。下面两个黄色/橙色是收款码：微信收款、支付宝收款。</p>`;
}

function footer(s) {
  return `
  <footer class="footer">
    <div class="container footer-grid">
      <div><h3>蒙古旅游</h3><p>Visit Mongolia Tours：蒙古当地私人定制。微信、支付宝可加好友并付款。</p></div>
      <div><h4>页面</h4><a href="${s.home}">首页</a><a href="${s.dest}">目的地</a><a href="${s.tours}">精品行程</a><a href="${s.contact}">咨询预订</a><a href="${s.privacy}">隐私政策</a></div>
      <div><h4>联系</h4><a href="https://wa.me/97690283039">+976 90283039</a><a href="mailto:bookingmongoliatour@gmail.com">bookingmongoliatour@gmail.com</a><span>微信 / 支付宝</span></div>
    </div>
    <div class="container footer-bottom">© 2026 Visit Mongolia Tours. 蒙古当地旅行。</div>
  </footer>
  <script src="${s.js}"></script>
</body>
</html>`;
}

function contactCard(s) {
  return `
      <div class="contact-card">
        <p class="kicker">联系我们</p>
        <h2 class="title">用微信、支付宝或 WhatsApp 开始咨询</h2>
        <div class="contact-item"><strong>WhatsApp</strong><br><a href="https://wa.me/97690283039">+976 90283039</a></div>
        <div class="contact-item"><strong>微信 / 支付宝</strong><br>直接扫描下方二维码：加好友或付款</div>
        <div class="contact-item"><strong>邮箱</strong><br><a href="mailto:bookingmongoliatour@gmail.com">bookingmongoliatour@gmail.com</a></div>
        <div class="contact-item"><strong>地址</strong><br>乌兰巴托 Bayanzurkh 区，42 号楼 117 室</div>
        ${payBlock(s)}
        <div class="contact-actions">
          <a class="btn wechat-btn" href="mailto:bookingmongoliatour@gmail.com?subject=%E5%BE%AE%E4%BF%A1%2F%E6%94%AF%E4%BB%98%E5%AE%9D%E5%92%A8%E8%AF%A2">邮件咨询</a>
          <a class="btn btn-primary" href="https://wa.me/97690283039" target="_blank" rel="noopener">WhatsApp</a>
        </div>
      </div>`;
}

function write(rel, html) {
  const full = path.join(root, rel);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, html);
}

const s0 = shell(0);
const s1 = shell(1);

const featuredTours = catalog.featuredTourIds.map((id) => catalog.tours.find((t) => t.id === id));

write("index.html", `${head(s0, "蒙古旅游_私人定制游_戈壁沙漠库苏古尔湖 | Visit Mongolia Tours", "蒙古当地私人定制旅游：31 条线路覆盖戈壁沙漠、库苏古尔湖、哈拉和林、那达慕、驯鹿部落。支持微信、支付宝付款。", `<link rel="canonical" href="https://visitmongoliatours.com/" />`)}
${chrome(s0)}
  <section class="hero" style="--hero-img:url('images/hero/hero-1-mongolia.jpg')">
    <div class="container hero-content">
      <span class="badge">蒙古当地私人定制</span>
      <h1>真实的蒙古行程：戈壁、草原、湖泊与那达慕。</h1>
      <p>Visit Mongolia Tours 为乌兰巴托当地安排：专车、向导、营地与私人行程。中国旅客可用微信沟通，并支持微信支付与支付宝。现有 31 条可订线路。</p>
      <div class="cta">
        <a class="btn btn-primary" href="contact.html">微信 / 支付宝咨询</a>
        <a class="btn btn-outline" href="tours/">查看 31 条线路</a>
      </div>
      <div class="hero-stats">
        <div class="stat"><strong>31 条线路</strong><span>戈壁、湖泊、中部、西部、那达慕</span></div>
        <div class="stat"><strong>微信支付</strong><span>支付宝 / Wise / SWIFT</span></div>
        <div class="stat"><strong>私人小团</strong><span>专车司机，可调节奏</span></div>
      </div>
    </div>
  </section>
  <section>
    <div class="container grid-2">
      <div class="lux-box">
        <p class="kicker">为什么找当地团队</p>
        <h2 class="title">先确认日期与线路，再安排落地服务。</h2>
        <p>蒙古路途远、旺季营地紧张。我们先确认出行日期、人数和路线。微信、支付宝可直接扫码加好友或付款；Wise 与 SWIFT 同样接受。</p>
        <p>线路覆盖戈壁、库苏古尔湖、中部哈拉和林、西部阿尔泰、那达慕、骑马与驯鹿部落。</p>
      </div>
      <img class="image-round" src="images/destinations/khongor-dunes.jpg" alt="蒙古戈壁沙漠旅游" />
    </div>
  </section>
  <section class="section-dark">
    <div class="container">
      <div class="center"><p class="kicker">热门目的地</p><h2 class="title">按地区了解蒙古</h2><p class="desc">南部戈壁、北部蓝湖、中部古迹、西部猎鹰与成吉思汗故乡。</p></div>
      <div class="grid-4">
        <a class="mini-card" href="destinations/umnugovi.html"><img src="images/destinations/khongor-dunes.jpg" alt="南戈壁"><div class="card-body"><span class="tag">南部</span><h3>南戈壁</h3><p>洪格尔沙丘、火焰崖、鹰谷与荒漠峡谷。</p></div></a>
        <a class="mini-card" href="destinations/khuvsgul.html"><img src="images/destinations/khuvsgul-lake.jpg" alt="库苏古尔湖"><div class="card-body"><span class="tag">北部</span><h3>库苏古尔湖</h3><p>蒙古蓝珍珠、针叶林与湖畔蒙古包。</p></div></a>
        <a class="mini-card" href="destinations/uvurkhangai.html"><img src="images/destinations/erdene-zuu.jpg" alt="哈拉和林"><div class="card-body"><span class="tag">中部</span><h3>哈拉和林</h3><p>蒙古古都、额尔德尼召与鄂尔浑河谷。</p></div></a>
        <a class="mini-card" href="destinations/bayan-ulgii.html"><img src="images/destinations/altai-tavan-bogd.jpg" alt="阿尔泰"><div class="card-body"><span class="tag">西部</span><h3>阿尔泰</h3><p>哈萨克猎鹰人、冰川与高山牧场。</p></div></a>
      </div>
      <div class="view-all"><a class="btn btn-primary" href="destinations/">全部目的地</a></div>
    </div>
  </section>
  <section>
    <div class="container">
      <div class="center"><p class="kicker">精品行程</p><h2 class="title">可按人数与季节调整的私人线路</h2><p class="desc">酒店等级、车辆、用餐与停留天数都可以定制。以下为 31 条线路中的热门选择。</p></div>
      <div class="grid-3">
        ${featuredTours.map((t) => `<a class="card" href="tours/${t.id}.html"><img src="${t.image}" alt="${t.name}"><div class="card-body"><span class="tag">${catalog.regionLabel[t.region]} · ${t.days} 天</span><h3>${t.name}</h3><p>${t.highlights.slice(0, 3).join("、")}。</p></div></a>`).join("\n        ")}
      </div>
      <div class="view-all"><a class="btn btn-primary" href="tours/">全部 31 条行程</a></div>
    </div>
  </section>
  <section class="contact" id="contact">
    <div class="container contact-grid">
      ${contactCard(s0)}
      <div class="contact-card">
        <form class="form" action="mailto:bookingmongoliatour@gmail.com" method="post" enctype="text/plain">
          <input name="name" placeholder="姓名" required>
          <input name="email" type="email" placeholder="邮箱" required>
          <input name="wechat" placeholder="微信号 / 支付宝账号（选填）">
          <select name="service">
            <option>戈壁沙漠线路</option>
            <option>库苏古尔湖线路</option>
            <option>中部哈拉和林</option>
            <option>那达慕节日</option>
            <option>VIP 私人定制</option>
          </select>
          <textarea name="message" placeholder="请写出发日期、人数、想去的地方..."></textarea>
          <button class="btn btn-primary" type="submit">发送咨询</button>
        </form>
      </div>
    </div>
  </section>
${footer(s0)}`);

write("contact.html", `${head(s0, "蒙古旅游咨询_微信支付宝 | Visit Mongolia Tours", "用微信、支付宝、WhatsApp 或邮箱咨询蒙古私人定制。")}
${chrome(s0)}
<section class="page-hero" style="--hero-img:url('images/hero/hero-1-mongolia.jpg')"><div class="container"><p class="kicker">咨询预订</p><h1>微信、支付宝都可以</h1><p>扫描本页二维码即可加好友或付款。也可以先告诉我们日期、人数和想去的地方。</p></div></section>
<section class="contact"><div class="container contact-grid">
${contactCard(s0)}
<div class="contact-card">
<form class="form" action="mailto:bookingmongoliatour@gmail.com" method="post" enctype="text/plain">
<input name="name" placeholder="姓名" required>
<input name="email" type="email" placeholder="邮箱" required>
<input name="wechat" placeholder="微信号 / 支付宝账号">
<input name="dates" placeholder="出行日期">
<textarea name="message" placeholder="人数、目的地、特殊需求"></textarea>
<button class="btn btn-primary" type="submit">发送</button>
</form>
</div>
</div></section>
${footer(s0)}`);

write("about.html", `${head(s0, "关于我们 | Visit Mongolia Tours 蒙古旅游", "乌兰巴托当地团队，提供蒙古私人定制、专车与向导。微信、支付宝可联系并付款。")}
${chrome(s0)}
<section class="page-hero" style="--hero-img:url('images/hero/hero-nomadic-mongolia.jpg')"><div class="container"><p class="kicker">关于我们</p><h1>乌兰巴托当地团队</h1><p>我们用当地知识安排私人行程，而不是只售卖无法落地的套餐。</p></div></section>
<section><div class="container lux-box">
<p>网站：Visit Mongolia Tours（visitmongoliatours.com）</p>
<p>地址：乌兰巴托 Bayanzurkh 区，42 号楼 117 室</p>
<p>WhatsApp：+976 90283039</p>
<p>邮箱：bookingmongoliatour@gmail.com</p>
<p>中国旅客可扫描本站微信 / 支付宝二维码加好友或付款。Wise 与 SWIFT 同样接受。</p>
<a class="btn btn-primary" href="contact.html">联系我们</a>
</div></section>
${footer(s0)}`);

write("privacy-policy.html", `${head(s0, "隐私政策 | Visit Mongolia Tours", "Visit Mongolia Tours 如何收集与使用您的信息。")}
${chrome(s0)}
<section class="page-hero" style="--hero-img:url('images/hero/hero-1-mongolia.jpg')"><div class="container"><p class="kicker">法律</p><h1>隐私政策</h1><p>生效日期：2026。本政策说明我们如何收集、使用和保护您的信息。</p></div></section>
<section><div class="container lux-box">
<h2>我们可能收集的信息</h2>
<p>您主动提供的姓名、邮箱、微信、电话与行程需求；以及网站访问中的基础技术信息。</p>
<h2>用途</h2>
<p>用于回复咨询、安排行程、改进网站，以及在您同意后处理预订相关沟通。</p>
<h2>联系</h2>
<p>如需查询或删除信息，请发邮件至 bookingmongoliatour@gmail.com，或通过微信 / WhatsApp 联系。</p>
</div></section>
${footer(s0)}`);

write("visa-requirements.html", `${head(s0, "蒙古签证与入境 | Visit Mongolia Tours", "中国旅客赴蒙古的签证与入境提醒。最终以大使馆与边检规定为准。")}
${chrome(s0)}
<section class="page-hero" style="--hero-img:url('images/destinations/ulaanbaatar.jpg')"><div class="container"><p class="kicker">旅行指南</p><h1>签证与入境</h1><p>出行前请确认护照有效期、签证或免签政策，以及回国机票与旅行保险。</p></div></section>
<section><div class="container lux-box">
<p>蒙古入境规则会调整。请以中国外交部、蒙古驻华使领馆和官方 eVisa 系统为准。我们可协助说明行程，但不替代官方签证决定。</p>
<ul>
<li>护照有效期通常需覆盖行程结束之后</li>
<li>确认是否需要签证、落地签或电子签</li>
<li>准备行程单、酒店/营地安排与往返交通信息</li>
<li>边境与国内航班政策请在出发前再核对一次</li>
</ul>
<a class="btn btn-primary" href="contact.html">咨询行程安排</a>
</div></section>
${footer(s0)}`);

write("safety-guide.html", `${head(s0, "蒙古旅行安全须知 | Visit Mongolia Tours", "路况、季节、天气、打包与戈壁/北部行程的实用安全提醒。")}
${chrome(s0)}
<section class="page-hero" style="--hero-img:url('images/tour/mongolia-jeep-tour.jpg')"><div class="container"><p class="kicker">旅行指南</p><h1>安全与实用提示</h1><p>蒙古路途远、天气变化快。私人行程可按路况调整节奏。</p></div></section>
<section><div class="container lux-box">
<ul>
<li>分层穿衣，准备防晒、防风与步行鞋</li>
<li>戈壁与北部温差大，夜间更凉</li>
<li>部分路段为土路，行程可能因天气调整</li>
<li>建议购买含医疗运送的旅行保险</li>
<li>尊重游牧家庭礼仪，进入蒙古包听从向导说明</li>
</ul>
<a class="btn btn-primary" href="guide/">更多旅行指南</a>
</div></section>
${footer(s0)}`);

write("vip-helicopter-expedition.html", `${head(s0, "蒙古直升机探险 | Visit Mongolia Tours", "蒙古直升机与高端私人行程咨询。按季节、天气与空域许可安排。")}
${chrome(s0)}
<section class="page-hero" style="--hero-img:url('images/hero/hero-1-mongolia.jpg')"><div class="container"><p class="kicker">VIP</p><h1>直升机探险咨询</h1><p>适合想节省陆路时间、从空中看戈壁或北部湖泊的高端小团。最终能否执行取决于季节、天气与许可。</p></div></section>
<section><div class="container lux-box">
<p>这不是固定天天发团的产品。请先告知日期、人数与想看的区域，我们确认可行性后再报价。</p>
<p>也可组合地面专车与精选营地，做成 VIP 私人线路。</p>
<a class="btn btn-primary" href="contact.html">微信咨询</a>
<a class="btn btn-outline" href="tours/helicopter-expedition-1d.html" style="margin-left:10px;color:#111;border-color:#111">查看直升机线路</a>
</div></section>
${footer(s0)}`);


require("./render-zh-catalog")({ write, head, chrome, footer, s1, usd, catalog });
