/* عرض المعرض تلقائياً. لإضافة الفيديوهات عدّل videos.js فقط. */
(() => {
  const grid = document.getElementById('video-grid');
  const videos = Array.isArray(window.PORTFOLIO_VIDEOS) ? window.PORTFOLIO_VIDEOS : [];
  const validVideos = videos.filter(video => {
    try {
      const url = new URL(video.url);
      return url.protocol === 'https:' && ['youtube.com', 'www.youtube.com', 'youtu.be', 'm.youtube.com', 'tiktok.com', 'www.tiktok.com', 'vm.tiktok.com', 'vt.tiktok.com'].includes(url.hostname);
    } catch { return false; }
  });
  validVideos.forEach((video, index) => {
    const card = document.createElement('a');
    card.className = 'video-card';
    card.href = video.url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.setAttribute('aria-label', `${video.title}، مشاهدة الفيديو في نافذة جديدة`);
    const imageFrame = document.createElement('div');
    imageFrame.className = 'video-image';
    const image = document.createElement('img');
    try {
      const imageUrl = new URL(video.thumbnail, document.baseURI);
      if (['https:', 'http:', 'file:'].includes(imageUrl.protocol)) image.src = video.thumbnail;
    } catch { /* تبقى الصورة البديلة ظاهرة */ }
    image.alt = video.title || 'صورة الفيديو';
    image.loading = 'lazy';
    image.width = 640;
    image.height = 480;
    image.addEventListener('error', () => { image.src = 'assets/video-fallback.svg'; }, { once: true });
    const platform = document.createElement('span');
    platform.className = 'platform';
    platform.dir = 'ltr';
    platform.textContent = new URL(video.url).hostname.includes('tiktok') ? 'TIKTOK' : 'YOUTUBE';
    const play = document.createElement('span');
    play.className = 'play';
    play.textContent = '▶';
    play.setAttribute('aria-hidden', 'true');
    imageFrame.append(image, platform, play);
    const info = document.createElement('div');
    info.className = 'video-info';
    const number = document.createElement('span');
    number.className = 'video-number';
    number.textContent = String(index + 1).padStart(2, '0');
    const title = document.createElement('h3');
    title.textContent = video.title;
    const description = document.createElement('p');
    description.textContent = video.description || '';
    const arrow = document.createElement('span');
    arrow.className = 'card-arrow';
    arrow.textContent = '↗';
    arrow.setAttribute('aria-hidden', 'true');
    info.append(number, title, description, arrow);
    card.append(imageFrame, info);
    grid.append(card);
  });
  document.getElementById('work-count').textContent = `${String(validVideos.length).padStart(2, '0')} PROJECTS`;
  if (!validVideos.length) {
    const message = document.createElement('p');
    message.className = 'notice';
    message.textContent = 'الأعمال غير متاحة حاليًا. يمكنك مشاهدتها من روابط حساباتي أسفل الصفحة.';
    grid.append(message);
  }
})();
