function galleryImgs(prefix) {
  return Array.from({ length: 30 }, (_, i) => {
    const n = i + 1;
    return `<img src="${prefix}images/gallery/gallery${n}.jpg" alt="蒙古旅游图库 ${n}">`;
  }).join("\n        ");
}

function lightbox() {
  return `<div id="image-lightbox" class="image-lightbox"><span class="image-lightbox-close">&times;</span><img id="image-lightbox-img" alt="放大图片"></div>`;
}

function homePage({ head, chrome, footer, contactCard, s0, featuredTours, catalog }) {
  return `${head(s0, "蒙古旅游_私人定制游_戈壁沙漠库苏古尔湖 | Visit Mongolia Tours", "蒙古当地私人定制：戈壁、库苏古尔湖、哈拉和林、那达慕、驯鹿部落。31 条线路，支持微信支付宝。Booking Mongolia 中文站。", `<link rel="canonical" href="https://visitmongoliatours.com/" />`)}
${chrome(s0)}
  <section class="hero has-slides" id="home">
    <div class="hero-slide active" style="background-image:url('images/hero/hero-1-mongolia.jpg')"></div>
    <div class="hero-slide" style="background-image:url('images/hero/hero-horse-riders.jpg')"></div>
    <div class="hero-slide" style="background-image:url('images/hero/hero-khuvsgul-lake.jpg')"></div>
    <div class="hero-slide" style="background-image:url('images/hero/hero-nomadic-mongolia.jpg')"></div>
    <div class="container hero-content">
      <span class="badge">真实蒙古 · 游牧生活 · 探险 · 节日</span>
      <h1>和当地团队一起发现真实的蒙古。</h1>
      <p>探索游牧文化、驯鹿家庭、戈壁与库苏古尔湖。Visit Mongolia Tours 是 Booking Mongolia 的中文网站：私人行程、微信沟通、支付宝付款。</p>
      <div class="cta">
        <a class="btn btn-primary" href="tours/">查看行程</a>
        <a class="btn btn-outline" href="guide/">旅行指南</a>
        <a class="btn btn-outline" href="visa-requirements.html">签证须知</a>
      </div>
      <div class="hero-stats">
        <div class="stat"><strong>31+</strong><span>可订私人线路</span></div>
        <div class="stat"><strong>4×4</strong><span>偏远地区专车</span></div>
        <div class="stat"><strong>VIP</strong><span>定制小团与协调</span></div>
        <div class="stat"><strong>微信</strong><span>支付宝可加好友付款</span></div>
      </div>
    </div>
  </section>
  <section class="vip-band">
    <div class="container">
      <h2 class="title">VIP 直升机探险</h2>
      <p>可按季节与许可，从空中看戈壁、阿尔泰、泰加林或库苏古尔湖。</p>
      <a class="btn btn-primary" href="tours/helicopter-expedition-1d.html">查看高端线路</a>
    </div>
  </section>
  <section id="experiences">
    <div class="container">
      <div class="section-head"><h2>热门蒙古体验</h2><p>很多旅客出发前会先搜索这些体验。</p></div>
      <div class="grid-3">
        <a class="card" href="tours/taiga-reindeer-7d.html"><img src="images/experiences/exp-reindeer.jpg" alt="驯鹿体验"><div class="card-body"><span class="tag">北部蒙古</span><h3>驯鹿体验</h3><p>在泰加林探访查坦驯鹿家庭，感受独特北部文化。</p></div></a>
        <a class="card" href="tours/altai-tavan-bogd-7d.html"><img src="images/experiences/exp-eagle-hunter.jpg" alt="猎鹰人"><div class="card-body"><span class="tag">西部蒙古</span><h3>猎鹰人体验</h3><p>哈萨克猎鹰传统与西部高山牧场。</p></div></a>
        <a class="card" href="tours/gobi-highlights-5d.html"><img src="images/experiences/exp-gobi-desert.jpg" alt="戈壁沙漠"><div class="card-body"><span class="tag">南部蒙古</span><h3>戈壁沙漠远征</h3><p>沙丘、骆驼、悬崖与广阔戈壁。</p></div></a>
        <a class="card" href="tours/hustai-nomad-elsen-4d.html"><img src="images/experiences/exp-nomadic-life.jpg" alt="游牧生活"><div class="card-body"><span class="tag">中部蒙古</span><h3>游牧生活体验</h3><p>住进当地家庭，体验真实乡下节奏。</p></div></a>
        <a class="card" href="tours/khuvsgul-lake-5d.html"><img src="images/experiences/exp-khuvsgul-lake.jpg" alt="库苏古尔湖"><div class="card-body"><span class="tag">湖泊探险</span><h3>库苏古尔湖之旅</h3><p>蒙古蓝珍珠、针叶林与清凉湖岸。</p></div></a>
        <a class="card" href="tours/naadam-gobi-7d.html"><img src="images/experiences/exp-naadam-festival.jpg" alt="那达慕"><div class="card-body"><span class="tag">节日季</span><h3>那达慕节日</h3><p>摔跤、赛马、射箭，蒙古最大节日。</p></div></a>
      </div>
    </div>
  </section>
  <section id="destinations" class="destination-map-section section-dark">
    <div class="container">
      <div class="section-head"><h2>按目的地看蒙古</h2><p>先看全国地图，再点省份，了解著名景点在哪里。</p></div>
      <div class="destination-map-layout">
        <div class="destination-map-panel">
          <div class="destination-mapbox" id="destinationMapBox">
            <div class="destination-map-bg"></div>
            <button class="destination-point active" data-province-btn="khuvsgul" style="left:56%;top:16%" onclick="showProvince('khuvsgul', event)">库苏古尔</button>
            <button class="destination-point" data-province-btn="bayanulgii" style="left:12%;top:27%" onclick="showProvince('bayanulgii', event)">巴彦乌列盖</button>
            <button class="destination-point" data-province-btn="umnugovi" style="left:56%;top:76%" onclick="showProvince('umnugovi', event)">南戈壁</button>
            <button class="destination-point" data-province-btn="arkhangai" style="left:37%;top:42%" onclick="showProvince('arkhangai', event)">后杭爱</button>
            <button class="destination-point" data-province-btn="tuv" style="left:52%;top:49%" onclick="showProvince('tuv', event)">中央省</button>
            <button class="destination-point" data-province-btn="khentii" style="left:77%;top:37%" onclick="showProvince('khentii', event)">肯特</button>
            <button class="destination-point" data-province-btn="selenge" style="left:46%;top:23%" onclick="showProvince('selenge', event)">色楞格</button>
            <a href="destinations/khuvsgul.html" class="destination-place-label featured" data-province="khuvsgul" style="left:59%;top:11%">库苏古尔湖</a>
            <a href="destinations/khuvsgul.html" class="destination-place-label" data-province="khuvsgul" style="left:64%;top:20%">驯鹿</a>
            <a href="destinations/bayan-ulgii.html" class="destination-place-label featured" data-province="bayanulgii" style="left:10%;top:20%">五圣山</a>
            <a href="destinations/bayan-ulgii.html" class="destination-place-label" data-province="bayanulgii" style="left:16%;top:34%">猎鹰人</a>
            <a href="destinations/umnugovi.html" class="destination-place-label featured" data-province="umnugovi" style="left:58%;top:69%">克尔门</a>
            <a href="destinations/umnugovi.html" class="destination-place-label" data-province="umnugovi" style="left:63%;top:79%">洪格尔</a>
            <a href="destinations/arkhangai.html" class="destination-place-label featured" data-province="arkhangai" style="left:39%;top:37%">霍尔戈</a>
            <a href="destinations/arkhangai.html" class="destination-place-label" data-province="arkhangai" style="left:31%;top:44%">泰哈尔</a>
            <a href="destinations/arkhangai.html" class="destination-place-label" data-province="arkhangai" style="left:40%;top:50%">岑赫尔</a>
            <a href="destinations/tuv.html" class="destination-place-label featured" data-province="tuv" style="left:52%;top:44%">胡斯泰</a>
            <a href="destinations/tuv.html" class="destination-place-label" data-province="tuv" style="left:58%;top:52%">特勒尔吉</a>
            <a href="destinations/khentii.html" class="destination-place-label featured" data-province="khentii" style="left:76%;top:31%">巴尔丹</a>
            <a href="destinations/selenge.html" class="destination-place-label featured" data-province="selenge" style="left:44%;top:16%">阿玛尔寺</a>
          </div>
          <div class="destination-map-legend"><span>点击省份查看景点</span><span>著名地点始终标在全图上</span></div>
        </div>
        <div class="destination-map-panel">
          <div id="provinceContent"></div>
          <div class="destination-tip"><strong>怎么用：</strong>先看全国地图，再点省份名称，对应景点会更清楚。</div>
          <h3 style="margin-top:22px">快速省份</h3>
          <div class="destination-province-list">
            <a class="destination-province-link" href="destinations/khuvsgul.html">库苏古尔</a>
            <a class="destination-province-link" href="destinations/bayan-ulgii.html">巴彦乌列盖</a>
            <a class="destination-province-link" href="destinations/umnugovi.html">南戈壁</a>
            <a class="destination-province-link" href="destinations/dundgovi.html">中戈壁</a>
            <a class="destination-province-link" href="destinations/arkhangai.html">后杭爱</a>
            <a class="destination-province-link" href="destinations/tuv.html">中央省</a>
            <a class="destination-province-link" href="destinations/khentii.html">肯特</a>
            <a class="destination-province-link" href="destinations/selenge.html">色楞格</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container">
      <div class="mongolia-story-box">
        <div>
          <h2 class="title">为什么蒙古感觉不同</h2>
          <p>蒙古是世界上人口密度最低的国家之一。草原、戈壁、高山与泰加林之间空间巨大，路途本身就是体验。</p>
          <p>尤其在南戈壁，常常开很久看不到城镇、车流甚至信号，只偶尔遇见一户游牧家庭。这种荒野感，正是人们记住蒙古的原因。</p>
          <div class="mongolia-story-facts">
            <div class="fact"><strong>156 万 km²</strong><span>蒙古国土面积</span></div>
            <div class="fact"><strong>辽阔空间</strong><span>人口密度极低的开阔风景</span></div>
            <div class="fact"><strong>南戈壁</strong><span>少人、少车、信号弱的偏远路</span></div>
            <div class="fact"><strong>荒野自然</strong><span>草原、沙漠、高山、泰加林与湖泊</span></div>
          </div>
        </div>
        <div class="mongolia-story-side">
          <div class="mongolia-story-card"><h3>为感觉而来，不只为拍照</h3><p>地平线、星空、游牧生活、偏远河谷，以及现代世界里越来越少的自由感。</p></div>
          <div class="mongolia-story-card"><h3>想比日期和价格？</h3><p>31 条线路可按 1、2、3、4 人看参考价，再用微信确认季节与营地。</p>
            <div class="story-cta-row"><a class="btn btn-primary" href="tours/">查看行程与日期</a><a class="destination-mini-link" href="contact.html">定制路线</a></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container">
      <div class="section-head"><h2>蒙古风景名胜</h2><p>也可以不用地图，直接从这些卡片打开目的地。</p></div>
      <div class="featured-places-grid">
        <a href="destinations/arkhangai.html" class="featured-place-card"><img src="images/destinations/terkhiin-tsagaan-nuur.jpg" alt="特尔欣查干湖"><div class="featured-place-body"><span class="featured-place-meta">后杭爱</span><h3>特尔欣查干湖</h3><p>火山湖、霍尔戈火山与中部自然路线。</p></div></a>
        <a href="guide/modern-ulaanbaatar.html" class="featured-place-card"><img src="images/destinations/ulaanbaatar.jpg" alt="乌兰巴托"><div class="featured-place-body"><span class="featured-place-meta">首都</span><h3>现代乌兰巴托</h3><p>咖啡馆、购物、夜生活与城市节奏。</p></div></a>
        <a href="destinations/arkhangai.html" class="featured-place-card"><img src="images/destinations/tsenkher.jpg" alt="岑赫尔温泉"><div class="featured-place-body"><span class="featured-place-meta">后杭爱</span><h3>岑赫尔温泉</h3><p>长途越野后最受欢迎的放松一晚。</p></div></a>
        <a href="destinations/umnugovi.html" class="featured-place-card"><img src="images/destinations/khongor-dunes.jpg" alt="洪格尔沙丘"><div class="featured-place-body"><span class="featured-place-meta">南戈壁</span><h3>洪格尔沙丘</h3><p>蒙古最标志的巨大鸣沙丘。</p></div></a>
        <a href="destinations/umnugovi.html" class="featured-place-card"><img src="images/destinations/bayanzag.jpg" alt="巴彦扎格"><div class="featured-place-body"><span class="featured-place-meta">南戈壁</span><h3>巴彦扎格火焰崖</h3><p>恐龙化石与戏剧性日落红崖。</p></div></a>
        <a href="destinations/umnugovi.html" class="featured-place-card"><img src="images/destinations/khermen-tsav.jpg" alt="克尔门峡谷"><div class="featured-place-body"><span class="featured-place-meta">南戈壁</span><h3>克尔门峡谷</h3><p>远戈壁红色峡谷，适合探险摄影。</p></div></a>
        <a href="destinations/dundgovi.html" class="featured-place-card"><img src="images/destinations/ongiin-khiid.jpg" alt="翁金寺"><div class="featured-place-body"><span class="featured-place-meta">中戈壁</span><h3>翁金寺</h3><p>河谷中的寺院遗址，戈壁中途文化站。</p></div></a>
        <a href="destinations/uvurkhangai.html" class="featured-place-card"><img src="images/destinations/elsen-tasarkhai.jpg" alt="额尔森塔萨尔海"><div class="featured-place-body"><span class="featured-place-meta">前杭爱</span><h3>额尔森塔萨尔海</h3><p>中部迷你戈壁，草原与沙丘交界。</p></div></a>
        <a href="destinations/uvurkhangai.html" class="featured-place-card"><img src="images/destinations/erdene-zuu.jpg" alt="额尔德尼召"><div class="featured-place-body"><span class="featured-place-meta">前杭爱</span><h3>额尔德尼召与哈拉和林</h3><p>蒙古最重要的历史寺院与古都。</p></div></a>
        <a href="destinations/selenge.html" class="featured-place-card"><img src="images/destinations/amarbayasgalant.jpg" alt="阿马尔巴亚斯嘎兰特"><div class="featured-place-body"><span class="featured-place-meta">色楞格</span><h3>阿马尔巴亚斯嘎兰特寺</h3><p>北部最完整的寺院建筑群之一。</p></div></a>
        <a href="destinations/tuv.html" class="featured-place-card"><img src="images/destinations/hustai.jpg" alt="胡斯泰"><div class="featured-place-body"><span class="featured-place-meta">中央省</span><h3>胡斯泰野马</h3><p>塔克希野马回归故乡的保护区。</p></div></a>
        <a href="destinations/bayan-ulgii.html" class="featured-place-card"><img src="images/destinations/altai-tavan-bogd.jpg" alt="阿尔泰五圣山"><div class="featured-place-body"><span class="featured-place-meta">巴彦乌列盖</span><h3>阿尔泰五圣山</h3><p>冰川、雪峰与猎鹰人文化。</p></div></a>
      </div>
    </div>
  </section>
  <section id="tours">
    <div class="container">
      <div class="section-head"><h2>精品行程</h2><p>从私人体验和文化线路中选择。价格可按人数与季节调整。</p></div>
      <div class="grid-3">
        ${featuredTours.map((t) => `<a class="card" href="tours/${t.id}.html"><img src="${t.image}" alt="${t.name}"><div class="card-body"><span class="tag">${catalog.regionLabel[t.region]} · ${t.days} 天</span><h3>${t.name}</h3><p>${t.highlights.slice(0, 3).join("、")}。</p></div></a>`).join("\n        ")}
      </div>
      <div class="view-all"><a class="btn btn-primary" href="tours/">全部 31 条行程</a></div>
    </div>
  </section>
  <section id="videos">
    <div class="container">
      <div class="section-head"><h2>发现蒙古视频</h2><p>看真实旅行瞬间、风景与当地体验。</p></div>
      <div class="video-main"><iframe src="https://www.youtube.com/embed/I3UwzFhugZU" title="发现蒙古" allowfullscreen></iframe></div>
      <div class="video-small">
        <iframe src="https://www.youtube.com/embed/oLMVrk5xGw0" title="蒙古视频 1" allowfullscreen></iframe>
        <iframe src="https://www.youtube.com/embed/Cr8ofaL-Ilw" title="蒙古视频 2" allowfullscreen></iframe>
        <iframe src="https://www.youtube.com/embed/Pni2kcTipaw" title="蒙古视频 3" allowfullscreen></iframe>
      </div>
    </div>
  </section>
  <section id="gallery">
    <div class="container">
      <div class="section-head">
        <h2>蒙古图库</h2>
        <p>风景、游牧生活与真实行程照片。也可从外面上传您的照片。</p>
        <p class="desc"><a href="gallery.html#add-photo">添加照片和说明</a></p>
      </div>
      <div class="gallery-grid" id="gallery-grid">
        ${galleryImgs("")}
      </div>
      <div class="view-all"><a class="btn btn-primary" href="gallery.html">打开完整图库</a></div>
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
  ${lightbox()}
  <script src="js/destinations-map.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
  <script src="js/gallery.js"></script>
${footer(s0)}`;
}

function galleryPage({ head, chrome, footer, s0 }) {
  return `${head(s0, "蒙古旅游图库 | Visit Mongolia Tours", "蒙古风景、游牧生活与真实行程照片。可上传您的照片到图库。")}
${chrome(s0)}
<section class="page-hero" style="--hero-img:url('images/hero/hero-nomadic-mongolia.jpg')"><div class="container"><p class="kicker">图库</p><h1>蒙古真实照片</h1><p>风景、游牧与行程照片。欢迎从外面添加您的照片和说明。</p></div></section>
<section id="gallery">
  <div class="container">
    <div class="gallery-upload" id="add-photo">
      <h3>添加照片</h3>
      <p class="pay-note">上传蒙古旅行照片和一句说明。照片会进入图库并显示在网站上。</p>
      <form id="gallery-form">
        <div class="form-grid">
          <div><label for="gallery_name">您的名字（选填）</label><input type="text" id="gallery_name" maxlength="80" placeholder="姓名 / 旅者名"></div>
          <div><label for="gallery_title">说明</label><input type="text" id="gallery_title" maxlength="120" placeholder="例如：库苏古尔湖日出" required></div>
          <div class="full"><label for="gallery_description">补充文字（选填）</label><textarea id="gallery_description" maxlength="600" placeholder="地点、季节或这一刻的感受"></textarea></div>
          <div class="full"><label for="gallery_images">照片</label><input type="file" id="gallery_images" accept="image/*" multiple required></div>
          <div class="full"><button class="btn btn-primary" type="submit">加入图库</button></div>
        </div>
        <div id="gallery-notice" class="notice"></div>
      </form>
    </div>
    <div class="gallery-grid" id="gallery-grid">
      ${galleryImgs("")}
    </div>
  </div>
</section>
${lightbox()}
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script src="js/gallery.js"></script>
${footer(s0)}`;
}

module.exports = { homePage, galleryPage };
