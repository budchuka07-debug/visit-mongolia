const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");

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

write("index.html", `${head(s0, "蒙古旅游_私人定制游_戈壁沙漠库苏古尔湖 | Visit Mongolia Tours", "蒙古当地私人定制旅游：戈壁沙漠、库苏古尔湖、哈拉和林、那达慕、驯鹿部落。支持微信、支付宝付款。", `<link rel="canonical" href="https://visitmongoliatours.com/" />`)}
${chrome(s0)}
  <section class="hero" style="--hero-img:url('images/hero/hero-mongolia.jpeg')">
    <div class="container hero-content">
      <span class="badge">蒙古当地私人定制</span>
      <h1>真实的蒙古行程：戈壁、草原、湖泊与那达慕。</h1>
      <p>Visit Mongolia Tours 为乌兰巴托当地安排：专车、向导、营地与私人行程。中国旅客可用微信沟通，并支持微信支付与支付宝。</p>
      <div class="cta">
        <a class="btn btn-primary" href="contact.html">微信 / 支付宝咨询</a>
        <a class="btn btn-outline" href="tours/">查看精品线路</a>
      </div>
      <div class="hero-stats">
        <div class="stat"><strong>当地团队</strong><span>乌兰巴托安排，不空转线路</span></div>
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
      <img class="image-round" src="images/destinations/umnugovi.jpeg" alt="蒙古戈壁沙漠旅游" />
    </div>
  </section>
  <section class="section-dark">
    <div class="container">
      <div class="center"><p class="kicker">热门目的地</p><h2 class="title">按地区了解蒙古</h2><p class="desc">南部戈壁、北部蓝湖、中部古迹、西部猎鹰与成吉思汗故乡。</p></div>
      <div class="grid-4">
        <a class="mini-card" href="destinations/umnugovi.html"><img src="images/destinations/umnugovi.jpeg" alt="南戈壁"><div class="card-body"><span class="tag">南部</span><h3>南戈壁</h3><p>洪格尔沙丘、火焰崖、鹰谷与荒漠峡谷。</p></div></a>
        <a class="mini-card" href="destinations/khuvsgul.html"><img src="images/destinations/khuvsgul.jpeg" alt="库苏古尔湖"><div class="card-body"><span class="tag">北部</span><h3>库苏古尔湖</h3><p>蒙古蓝珍珠、针叶林与湖畔蒙古包。</p></div></a>
        <a class="mini-card" href="destinations/uvurkhangai.html"><img src="images/destinations/uvurkhangai.jpeg" alt="哈拉和林"><div class="card-body"><span class="tag">中部</span><h3>哈拉和林</h3><p>蒙古古都、额尔德尼召与鄂尔浑河谷。</p></div></a>
        <a class="mini-card" href="destinations/bayan-ulgii.html"><img src="images/destinations/bayan-ulgii.jpeg" alt="阿尔泰"><div class="card-body"><span class="tag">西部</span><h3>阿尔泰</h3><p>哈萨克猎鹰人、冰川与高山牧场。</p></div></a>
      </div>
      <div class="view-all"><a class="btn btn-primary" href="destinations/">全部目的地</a></div>
    </div>
  </section>
  <section>
    <div class="container">
      <div class="center"><p class="kicker">精品行程</p><h2 class="title">可按人数与季节调整的私人线路</h2><p class="desc">酒店等级、车辆、用餐与停留天数都可以定制。</p></div>
      <div class="grid-3">
        <a class="card" href="tours/gobi-luxury.html"><img src="images/tours/gobi-luxury.jpeg" alt="戈壁沙漠旅游"><div class="card-body"><span class="tag">沙漠</span><h3>戈壁沙漠之旅</h3><p>沙丘、火焰崖、骆驼与南戈壁经典路线，约 5–7 天。</p></div></a>
        <a class="card" href="tours/classic-mongolia.html"><img src="images/tours/classic-mongolia.jpeg" alt="中部蒙古旅游"><div class="card-body"><span class="tag">文化</span><h3>中部蒙古 5 日</h3><p>哈拉和林、鄂尔浑河谷与游牧家庭。</p></div></a>
        <a class="card" href="tours/khuvsgul-north.html"><img src="images/tours/khuvsgul-north.jpeg" alt="库苏古尔湖旅游"><div class="card-body"><span class="tag">湖泊</span><h3>库苏古尔湖之旅</h3><p>北部蓝湖、森林与清凉湖岸。</p></div></a>
        <a class="card" href="tours/altai-eagle.html"><img src="images/tours/altai-eagle.jpeg" alt="阿尔泰旅游"><div class="card-body"><span class="tag">西部</span><h3>阿尔泰五圣山</h3><p>冰川、高山与西部风景。</p></div></a>
        <a class="card" href="tours/naadam-festival.html"><img src="images/tours/naadam-festival.jpeg" alt="那达慕旅游"><div class="card-body"><span class="tag">节日</span><h3>那达慕节日之旅</h3><p>摔跤、赛马、射箭与蒙古最大节日。</p></div></a>
        <a class="card" href="tours/vip-private.html"><img src="images/tours/vip-private.jpeg" alt="蒙古VIP私人游"><div class="card-body"><span class="tag">VIP</span><h3>VIP 私人游</h3><p>专车、精选住宿与全程协调。</p></div></a>
      </div>
      <div class="view-all"><a class="btn btn-primary" href="tours/">全部行程</a></div>
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
<section class="page-hero" style="--hero-img:url('images/hero/hero-mongolia.jpeg')"><div class="container"><p class="kicker">咨询预订</p><h1>微信、支付宝都可以</h1><p>扫描本页二维码即可加好友或付款。也可以先告诉我们日期、人数和想去的地方。</p></div></section>
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
<section class="page-hero" style="--hero-img:url('images/hero/hero-mongolia.jpeg')"><div class="container"><p class="kicker">关于我们</p><h1>乌兰巴托当地团队</h1><p>我们用当地知识安排私人行程，而不是只售卖无法落地的套餐。</p></div></section>
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
<section class="page-hero" style="--hero-img:url('images/hero/hero-mongolia.jpeg')"><div class="container"><p class="kicker">法律</p><h1>隐私政策</h1><p>生效日期：2026。本政策说明我们如何收集、使用和保护您的信息。</p></div></section>
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
<section class="page-hero" style="--hero-img:url('images/hero/hero-mongolia.jpeg')"><div class="container"><p class="kicker">旅行指南</p><h1>签证与入境</h1><p>出行前请确认护照有效期、签证或免签政策，以及回国机票与旅行保险。</p></div></section>
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
<section class="page-hero" style="--hero-img:url('images/hero/hero-mongolia.jpeg')"><div class="container"><p class="kicker">旅行指南</p><h1>安全与实用提示</h1><p>蒙古路途远、天气变化快。私人行程可按路况调整节奏。</p></div></section>
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
<section class="page-hero" style="--hero-img:url('images/tours/vip-private.jpeg')"><div class="container"><p class="kicker">VIP</p><h1>直升机探险咨询</h1><p>适合想节省陆路时间、从空中看戈壁或北部湖泊的高端小团。最终能否执行取决于季节、天气与许可。</p></div></section>
<section><div class="container lux-box">
<p>这不是固定天天发团的产品。请先告知日期、人数与想看的区域，我们确认可行性后再报价。</p>
<p>也可组合地面专车与精选营地，做成 VIP 私人线路。</p>
<a class="btn btn-primary" href="contact.html">微信咨询</a>
<a class="btn btn-outline" href="tours/vip-private.html" style="margin-left:10px;color:#111;border-color:#111">查看 VIP 私人游</a>
</div></section>
${footer(s0)}`);

const destinations = [
  ["umnugovi.html", "南戈壁旅游_洪格尔沙丘火焰崖鹰谷 | Visit Mongolia Tours", "南戈壁：洪格尔沙丘、巴彦扎格火焰崖、鹰谷与偏远红峡谷。", "南部 / 戈壁", "南戈壁 Umnugovi", "红色悬崖、巨大沙丘、峡谷与安静的地平线，使南戈壁成为蒙古戈壁最有代表性的探险区。", "适合沙漠摄影与第一次来戈壁的旅客。旺季为 5–10 月。可从乌兰巴托乘国内航班或越野车前往。", "umnugovi.jpeg"],
  ["khuvsgul.html", "库苏古尔湖旅游_蒙古蓝珍珠 | Visit Mongolia Tours", "库苏古尔湖：针叶林、湖畔蒙古包与可选驯鹿部落延伸。", "北部", "库苏古尔湖", "森林、淡水湖与凉爽的北部空气，是许多旅客心中的蒙古自然核心。", "适合想放慢节奏、看湖景和森林的旅客。可与驯鹿泰加林线路连接。", "khuvsgul.jpeg"],
  ["uvurkhangai.html", "哈拉和林旅游_鄂尔浑河谷 | Visit Mongolia Tours", "前杭爱：哈拉和林古都、额尔德尼召、鄂尔浑河谷与游牧文化。", "中部 / 文化", "哈拉和林与前杭爱", "蒙古古都、寺院与河谷草场，是最经典的中部文化线路。", "适合第一次来蒙古、想看历史与游牧生活的旅客。", "uvurkhangai.jpeg"],
  ["bayan-ulgii.html", "阿尔泰旅游_猎鹰人 | Visit Mongolia Tours", "巴彦乌列盖：阿尔泰山、哈萨克猎鹰文化、冰川与西部高山牧场。", "西部", "巴彦乌列盖 / 阿尔泰", "高山、冰川与哈萨克猎鹰传统，是蒙古西部最有辨识度的目的地。", "适合想看高山与特殊文化的旅客，行程天数通常更长。", "bayan-ulgii.jpeg"],
  ["arkhangai.html", "后杭爱旅游_温泉与火山地形 | Visit Mongolia Tours", "后杭爱：温泉、山地、火山地形与田园路线。", "中部", "后杭爱 Arkhangai", "温泉、山地与绿色河谷，常与哈拉和林、鄂尔浑连成一条中部线路。", "适合文化加自然的组合行程。", "arkhangai.jpeg"],
  ["khentii.html", "肯特旅游_成吉思汗故乡 | Visit Mongolia Tours", "肯特：森林河谷、圣山历史与成吉思汗诞生地一带。", "东部", "肯特 Khentii", "森林、河流与蒙古帝国起源故事，适合历史文化向的旅客。", "可做成从乌兰巴托出发的东部短线或加长线路。", "khentii.jpeg"],
  ["tuv.html", "中央省旅游_特勒尔吉与胡斯泰 | Visit Mongolia Tours", "中央省：特勒尔吉国家公园、胡斯泰野马与乌兰巴托近郊短途。", "乌兰巴托近郊", "中央省 Tuv", "特勒尔吉岩石、草原与胡斯泰野马，适合时间有限的旅客。", "3 日特勒尔吉 + 胡斯泰是最常见的短线。", "tuv.jpeg"],
  ["selenge.html", "色楞格旅游_北部河谷 | Visit Mongolia Tours", "色楞格：河流、寺院、肥沃河谷与北部绿色风景。", "北线", "色楞格 Selenge", "河谷、寺院与通往北部的绿色通道，常作为库苏古尔方向的过渡。", "适合想看北部田园而非只走沙漠的旅客。", "selenge.jpeg"]
];

write("destinations/index.html", `${head(s1, "蒙古旅游目的地_按地区探索 | Visit Mongolia Tours", "按地区了解蒙古：南戈壁、库苏古尔湖、哈拉和林、阿尔泰、肯特与乌兰巴托近郊。")}
${chrome(s1)}
<section class="page-hero" style="--hero-img:url('../images/hero/hero-mongolia.jpeg')"><div class="container"><p class="kicker">目的地</p><h1>按地区探索蒙古</h1><p>先看区域，再选线路。</p></div></section>
<section><div class="container destination-grid">
${destinations.map((d) => `<a class="destination-card" href="${d[0]}"><img src="../images/destinations/${d[7]}" alt="${d[4]}"><div><span class="tag">${d[3]}</span><h3>${d[4]}</h3><p>${d[5]}</p></div></a>`).join("\n")}
</div></section>
${footer(s1)}`);

for (const d of destinations) {
  const img = `../images/destinations/${d[7]}`;
  write(`destinations/${d[0]}`, `${head(s1, d[1], d[2])}
${chrome(s1)}
<section class="page-hero" style="--hero-img:url('${img}')"><div class="container"><p class="kicker">${d[3]}</p><h1>${d[4]}</h1><p>${d[5]}</p></div></section>
<section><div class="container grid-2"><div class="lux-box"><h2 class="title">${d[4]}</h2><p>${d[6]}</p><p>私人行程可按季节、路况、住宿等级和步行强度调整。可用微信咨询，支持支付宝与微信支付。</p><a class="btn btn-primary" href="../contact.html">咨询这条线路</a></div><img class="image-round" src="${img}" alt="${d[4]}"></div></section>
${footer(s1)}`);
}

const tours = [
  ["gobi-luxury.html", "戈壁沙漠旅游 5-7天 | Visit Mongolia Tours", "南戈壁经典：洪格尔沙丘、火焰崖、鹰谷、骆驼与沙漠营地。", "沙漠线路", "戈壁沙漠之旅", "沙丘、火焰崖、骆驼与广阔戈壁，是南戈壁最经典的私人线路。", "5–7 天", "gobi-luxury.jpeg",
    ["第 1 天：从乌兰巴托出发前往戈壁，草原路途后在南部入口一带过夜。", "第 2 天：鹰谷峡谷步行，再到巴彦扎格火焰崖看日落。", "第 3 天：洪格尔沙丘，登沙丘远眺，可选骑骆驼。", "第 4 天：按节奏与天气增加戈壁停留或灵活调整。", "返程：返回乌兰巴托，或连接中部蒙古线路。"],
    ["洪格尔沙丘", "巴彦扎格火焰崖", "鹰谷徒步", "骑骆驼与沙漠营地", "戈壁日落摄影"]],
  ["classic-mongolia.html", "中部蒙古旅游 5天_哈拉和林 | Visit Mongolia Tours", "哈拉和林、鄂尔浑河谷与真实游牧生活。", "文化线路", "中部蒙古 5 日", "发现哈拉和林、鄂尔浑河谷与游牧家庭生活。", "约 5 天", "classic-mongolia.jpeg",
    ["第 1 天：乌兰巴托出发，前往中部草原。", "第 2 天：哈拉和林与额尔德尼召。", "第 3 天：鄂尔浑河谷与游牧家庭。", "第 4 天：按季节增加瀑布、寺院或骑马。", "第 5 天：返回乌兰巴托。"],
    ["哈拉和林古都", "额尔德尼召", "鄂尔浑河谷", "蒙古包住宿", "游牧文化"]],
  ["khuvsgul-north.html", "库苏古尔湖旅游 | Visit Mongolia Tours", "蒙古蓝珍珠：森林、湖岸，可延伸驯鹿部落。", "湖泊线路", "库苏古尔湖之旅", "北部森林、淡水湖与放松的湖岸节奏。", "灵活天数", "khuvsgul-north.jpeg",
    ["前往北部，路途可见森林与牧场。", "湖岸步行、乘船或骑马（季节性）。", "可选延伸至驯鹿泰加林。", "返回乌兰巴托。"],
    ["库苏古尔湖", "针叶林", "湖畔营地", "北部空气与慢旅行"]],
  ["altai-eagle.html", "阿尔泰五圣山旅游 | Visit Mongolia Tours", "西部高山、冰川与哈萨克猎鹰文化。", "西部探险", "阿尔泰五圣山之旅", "冰川、高山与西部戏剧性风景。", "较长线路", "altai-eagle.jpeg",
    ["飞往或陆路前往西部。", "高山牧场与冰川观景。", "可选猎鹰文化探访（季节性）。", "返回乌兰巴托。"],
    ["阿尔泰山", "冰川与高山", "哈萨克文化", "西部摄影"]],
  ["naadam-festival.html", "那达慕节日旅游 | Visit Mongolia Tours", "摔跤、赛马、射箭，蒙古最大节日线路。", "节日线路", "那达慕节日之旅", "在蒙古最大节日期间看传统三项竞技，并结合城市与草原。", "节日季", "naadam-festival.jpeg",
    ["乌兰巴托那达慕开幕与赛事。", "可选乡村赛马或草原延伸。", "按您的日期组合城市与短途。"],
    ["摔跤、赛马、射箭", "节日氛围", "可加草原短线"]],
  ["vip-private.html", "蒙古VIP私人游 | Visit Mongolia Tours", "专车、精选住宿、全程协调的高端小团。", "VIP", "VIP 私人蒙古", "私人越野车、精选营地或酒店、行程按您的节奏定制。", "全定制", "vip-private.jpeg",
    ["按您的日期设计专属路线。", "机场接送与全程司机向导。", "住宿与用餐等级可升级。"],
    ["私人车辆", "精选住宿", "中文微信沟通", "微信 / 支付宝付款"]],
  ["terelj-hustai.html", "特勒尔吉胡斯泰 3日游 | Visit Mongolia Tours", "乌兰巴托近郊：特勒尔吉自然、胡斯泰野马与草原短途。", "短线", "特勒尔吉与胡斯泰 3 日", "适合时间有限、想看自然、马匹与近郊草原的旅客。", "3 天", null,
    ["特勒尔吉岩石与草原。", "胡斯泰野马保护区。", "返回乌兰巴托。"],
    ["特勒尔吉", "胡斯泰野马", "近郊短途"]],
  ["horse-riding.html", "蒙古骑马旅游 4日 | Visit Mongolia Tours", "在山地与湖泊骑马，露营并体验游牧节奏。", "骑行", "4 日骑马探险", "在蒙古山地与湖泊骑马，在自然中露营。", "约 4 天", "classic-mongolia.jpeg",
    ["适应马匹与草原路途。", "骑马穿越山地或湖区。", "营地过夜。", "返回城市。"],
    ["骑马", "露营", "游牧风景"]],
  ["reindeer-taiga.html", "驯鹿泰加林 7日游 | Visit Mongolia Tours", "北上进入森林，探访驯鹿家庭与偏远泰加林。", "北部探险", "7 日驯鹿泰加林", "前往北部，在偏远森林中探访驯鹿家庭。", "约 7 天", "khuvsgul-north.jpeg",
    ["北上库苏古尔方向。", "进入泰加林。", "拜访驯鹿家庭（季节与路况允许时）。", "返回。"],
    ["驯鹿文化", "泰加林", "北部偏远路线"]]
];

function tourImg(t) {
  return t[7] ? `../images/tours/${t[7]}` : "../images/destinations/tuv.jpeg";
}

write("tours/index.html", `${head(s1, "蒙古私人定制行程 | Visit Mongolia Tours", "戈壁、库苏古尔湖、哈拉和林、阿尔泰、那达慕、骑马与 VIP 私人游。微信支付宝可付款。")}
${chrome(s1)}
<section class="page-hero" style="--hero-img:url('../images/hero/hero-mongolia.jpeg')"><div class="container"><p class="kicker">精品行程</p><h1>私人蒙古线路</h1><p>每条线路可按出发日期、人数、舒适度与节奏调整。价格在确认行程后报价。</p></div></section>
<section><div class="container grid-3">
${tours.map((t) => `<a class="card" href="${t[0]}"><img src="${tourImg(t)}" alt="${t[4]}"><div class="card-body"><span class="tag">${t[3]}</span><h3>${t[4]}</h3><p>${t[5]}</p></div></a>`).join("\n")}
</div></section>
${footer(s1)}`);

for (const t of tours) {
  const img = tourImg(t);
  const days = t[8];
  const highlights = t[9];
  write(`tours/${t[0]}`, `${head(s1, t[1], t[2])}
${chrome(s1)}
<section class="page-hero" style="--hero-img:url('${img}')"><div class="container"><p class="kicker">${t[3]}</p><h1>${t[4]}</h1><p>${t[5]}</p></div></section>
<section><div class="container grid-2"><div class="lux-box">
<h2 class="title">${t[4]}</h2>
<p>${t[5]}</p>
<p>时长：${t[6]}。车辆、向导、营地等级与步行强度可调。微信 / 支付宝可扫码联系或付款。</p>
<h3>亮点</h3><ul>${highlights.map((x) => `<li>${x}</li>`).join("")}</ul>
<h3>参考行程</h3>${days.map((x) => `<div class="day"><strong>${x.split("：")[0] || "行程"}</strong><div>${x.includes("：") ? x.split("：").slice(1).join("：") : x}</div></div>`).join("")}
<a class="btn btn-primary" href="../contact.html">微信咨询此线路</a>
</div><img class="image-round" src="${img}" alt="${t[4]}"></div></section>
${footer(s1)}`);
}

const guides = [
  ["mongolian-culture.html", "蒙古文化与礼仪", "传统、蒙古包礼仪、游牧日常与待客方式。", "mongolian-culture.jpeg"],
  ["visa-requirements.html", "签证与入境基础", "护照、签证/免签与出行文件提醒。", "visa-requirements.jpeg"],
  ["safety-guide.html", "安全与旅行提示", "路况、季节、天气、打包与实用建议。", "safety-guide.jpeg"],
  ["modern-ulaanbaatar.html", "现代乌兰巴托", "城市生活、餐厅、博物馆、购物与市区体验。", "modern-ulaanbaatar.jpeg"],
  ["nomadic-experience.html", "游牧家庭体验", "蒙古包生活、待客、奶制品与草原礼仪。", "nomadic-experience.jpeg"],
  ["shows-entertainment-in-mongolia.html", "演出与娱乐", "传统表演、音乐、舞蹈与晚间体验。", "shows-entertainment-in-mongolia.jpeg"]
];

write("guide/index.html", `${head(s1, "蒙古旅行指南 | Visit Mongolia Tours", "文化、签证、安全、乌兰巴托与游牧体验。")}
${chrome(s1)}
<section class="page-hero" style="--hero-img:url('../images/hero/hero-mongolia.jpeg')"><div class="container"><p class="kicker">旅行指南</p><h1>出发前需要知道的事</h1><p>了解蒙古传统、城市、安全和季节，再开始私人行程。</p></div></section>
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

write("_redirects", `/mn.html /index.html 301
/zh /index.html 301
/zh/ /index.html 301
/zh/index.html /index.html 301
/zh/contact.html /contact.html 301
/zh/about.html /about.html 301
/zh/destinations.html /destinations/ 301
/zh/tours.html /tours/ 301
/zh/gobi.html /tours/gobi-luxury.html 301
/zh/classic.html /tours/classic-mongolia.html 301
/zh/khuvsgul-tour.html /tours/khuvsgul-north.html 301
/zh/altai.html /tours/altai-eagle.html 301
/zh/naadam.html /tours/naadam-festival.html 301
/zh/vip.html /tours/vip-private.html 301
/zh/terelj.html /tours/terelj-hustai.html 301
/zh/horse.html /tours/horse-riding.html 301
/zh/reindeer.html /tours/reindeer-taiga.html 301
/zh/umnugovi.html /destinations/umnugovi.html 301
/zh/khuvsgul.html /destinations/khuvsgul.html 301
/zh/uvurkhangai.html /destinations/uvurkhangai.html 301
/zh/bayan-ulgii.html /destinations/bayan-ulgii.html 301
/zh/arkhangai.html /destinations/arkhangai.html 301
/zh/khentii.html /destinations/khentii.html 301
/zh/tuv.html /destinations/tuv.html 301
/zh/selenge.html /destinations/selenge.html 301
`);

write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://visitmongoliatours.com/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>https://visitmongoliatours.com/contact.html</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://visitmongoliatours.com/about.html</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://visitmongoliatours.com/destinations/</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://visitmongoliatours.com/tours/</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://visitmongoliatours.com/guide/</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://visitmongoliatours.com/tours/gobi-luxury.html</loc><priority>0.8</priority></url>
  <url><loc>https://visitmongoliatours.com/tours/classic-mongolia.html</loc><priority>0.8</priority></url>
  <url><loc>https://visitmongoliatours.com/tours/khuvsgul-north.html</loc><priority>0.8</priority></url>
  <url><loc>https://visitmongoliatours.com/contact.html</loc><priority>0.9</priority></url>
</urlset>
`);

const zhRedirect = (to) => `<!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8"><meta http-equiv="refresh" content="0;url=${to}"><link rel="canonical" href="https://visitmongoliatours.com${to.replace(/^\.\./, "")}"><title>蒙古旅游</title></head><body><p><a href="${to}">进入中文网站</a></p></body></html>`;
write("zh/index.html", zhRedirect("../index.html"));
write("zh/contact.html", zhRedirect("../contact.html"));
write("zh/about.html", zhRedirect("../about.html"));

console.log("Chinese site written at visit-mongolia root");
