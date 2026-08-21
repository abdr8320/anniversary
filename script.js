/**
 * ====================================================================
 * ANNIVERSARY WEBSITE - JAVASCRIPT LOGIC
 * ====================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const config = window.ANNIVERSARY_CONFIG || {};

  // State Variables
  let currentIndex = 0;
  let isPlaying = true;
  let slideTimer = null;
  let progressInterval = null;
  let currentSlideDuration = config.slideshow?.defaultDuration || 6000;
  let progressStartTime = 0;
  let isUnlocked = false;

  // Touch Swipe Variables
  let touchStartX = 0;
  let touchStartY = 0;
  let touchEndX = 0;
  let touchEndY = 0;

  // DOM Elements
  const coverScreen = document.getElementById("coverScreen");
  const coverCanvas = document.getElementById("coverCanvas");
  const btnOpenStory = document.getElementById("btnOpenStory");
  const coverTitle = document.getElementById("coverTitle");
  const coverCouple = document.getElementById("coverCouple");
  const coverSubtitle = document.getElementById("coverSubtitle");
  const coverDaysCount = document.getElementById("coverDaysCount");

  const topCoupleName = document.getElementById("topCoupleName");
  const liveCounterText = document.getElementById("liveCounterText");
  const storyIndicators = document.getElementById("storyIndicators");
  const slidesTrack = document.getElementById("slidesTrack");
  const slideshowViewport = document.getElementById("slideshowViewport");
  const slideCounter = document.getElementById("slideCounter");

  const navPrev = document.getElementById("navPrev");
  const navNext = document.getElementById("navNext");
  const btnPlayPause = document.getElementById("btnPlayPause");
  const playPauseIcon = document.getElementById("playPauseIcon");
  const btnFullscreen = document.getElementById("btnFullscreen");
  const fullscreenIcon = document.getElementById("fullscreenIcon");

  const btnVinylDisc = document.getElementById("btnVinylDisc");
  const musicSongTitle = document.getElementById("musicSongTitle");
  const musicArtistName = document.getElementById("musicArtistName");
  const bgAudio = document.getElementById("bgAudio");

  const btnLetter = document.getElementById("btnLetter");
  const letterModal = document.getElementById("letterModal");
  const btnCloseLetter = document.getElementById("btnCloseLetter");
  const letterTitle = document.getElementById("letterTitle");
  const letterSalutation = document.getElementById("letterSalutation");
  const letterBody = document.getElementById("letterBody");
  const letterClosing = document.getElementById("letterClosing");
  const letterAuthor = document.getElementById("letterAuthor");

  const btnGallery = document.getElementById("btnGallery");
  const galleryModal = document.getElementById("galleryModal");
  const btnCloseGallery = document.getElementById("btnCloseGallery");
  const galleryGrid = document.getElementById("galleryGrid");

  const btnHeartBurst = document.getElementById("btnHeartBurst");
  const heartBurstContainer = document.getElementById("heartBurstContainer");
  const loveToast = document.getElementById("loveToast");

  /* ====================================================================
     1. INITIALIZATION & DATA INJECTION
     ==================================================================== */
  function initApp() {
    // Populate Couple Info
    if (config.couple) {
      const coupleNames = `${config.couple.partnerName} & ${config.couple.yourName}`;
      if (coverTitle) coverTitle.textContent = config.couple.title || "Happy Anniversary";
      if (coverCouple) coverCouple.textContent = coupleNames;
      if (topCoupleName) topCoupleName.textContent = coupleNames;
      if (coverSubtitle && config.couple.subtitle) coverSubtitle.textContent = config.couple.subtitle;
    }

    // Populate Music Info & Source
    if (config.music) {
      if (musicSongTitle) musicSongTitle.textContent = config.music.title || "Romantic Song";
      if (musicArtistName) musicArtistName.textContent = config.music.artist || "Special For You";
      if (bgAudio && config.music.url) {
        bgAudio.src = config.music.url;
        bgAudio.volume = 0.65;
      }
    }

    // Populate Letter Modal Info
    if (config.letter) {
      if (letterTitle) letterTitle.textContent = config.letter.title || "Surat Cinta";
      if (letterSalutation) letterSalutation.textContent = config.letter.salutation || "Hai Sayang,";
      if (letterBody) letterBody.textContent = config.letter.content || "";
      if (letterClosing) letterClosing.textContent = config.letter.closing || "Selamanya milikmu,";
      if (letterAuthor) letterAuthor.textContent = config.letter.authorName || config.couple?.yourName || "Aku";
    }

    // Build Dynamic Slides, Indicators, and Gallery Grid
    buildSlides();
    buildStoryIndicators();
    buildGalleryGrid();

    // Start Live Days Counter
    startDaysCounter();

    // Init Particle Canvas on Cover Screen
    initCanvasParticles();

    // Set initial slide
    updateSlideView(0);
  }

  /* ====================================================================
     2. BUILD SLIDES & STORY INDICATORS
     ==================================================================== */
  function buildSlides() {
    if (!slidesTrack || !config.slides || !config.slides.length) return;
    slidesTrack.innerHTML = "";

    config.slides.forEach((slide, idx) => {
      const slideItem = document.createElement("div");
      slideItem.className = `slide-item ${idx === 0 ? "active" : ""}`;
      slideItem.setAttribute("data-index", idx);
      slideItem.setAttribute("data-type", slide.type || "image");

      let mediaHtml = "";
      if (slide.type === "video") {
        mediaHtml = `
          <video 
            class="slide-video" 
            src="${slide.url}" 
            poster="${slide.poster || ''}" 
            playsinline 
            preload="metadata"
            muted
          ></video>
        `;
      } else {
        const kenBurnsClass = config.slideshow?.kenBurnsEffect ? "ken-burns" : "";
        mediaHtml = `
          <img 
            class="slide-img ${kenBurnsClass}" 
            src="${slide.url}" 
            alt="${slide.title || 'Foto Kenangan'}"
            loading="${idx === 0 ? 'eager' : 'lazy'}"
          />
        `;
      }

      slideItem.innerHTML = `
        <div class="slide-media-wrapper">
          ${mediaHtml}
        </div>
        <div class="slide-overlay"></div>
        <div class="slide-caption-wrapper">
          <div class="slide-caption-card">
            <div class="slide-meta-row">
              ${slide.date ? `<span class="slide-badge-date">🗓️ ${slide.date}</span>` : ""}
              ${slide.location ? `<span class="slide-badge-location">📍 ${slide.location}</span>` : ""}
              <span class="slide-badge-media-type">${slide.type === "video" ? "🎬 Video" : "📸 Foto"}</span>
            </div>
            <h2 class="slide-title">${slide.title || `Kenangan #${idx + 1}`}</h2>
            ${slide.caption ? `<p class="slide-caption-text">${slide.caption}</p>` : ""}
          </div>
        </div>
      `;

      slidesTrack.appendChild(slideItem);
    });
  }

  function buildStoryIndicators() {
    if (!storyIndicators || !config.slides) return;
    storyIndicators.innerHTML = "";

    config.slides.forEach((_, idx) => {
      const indicator = document.createElement("div");
      indicator.className = `story-indicator-item ${idx === 0 ? "active" : ""}`;
      indicator.setAttribute("data-index", idx);
      indicator.innerHTML = `<div class="story-indicator-fill" id="indicatorFill-${idx}"></div>`;

      // Clicking indicator jumps to that slide
      indicator.addEventListener("click", (e) => {
        e.stopPropagation();
        goToSlide(idx);
      });

      storyIndicators.appendChild(indicator);
    });
  }

  function buildGalleryGrid() {
    if (!galleryGrid || !config.slides) return;
    galleryGrid.innerHTML = "";

    config.slides.forEach((slide, idx) => {
      const thumb = document.createElement("div");
      thumb.className = `gallery-item-thumb ${idx === 0 ? "active" : ""}`;
      thumb.setAttribute("data-index", idx);

      const thumbUrl = slide.type === "video" ? (slide.poster || slide.url) : slide.url;

      thumb.innerHTML = `
        <img src="${thumbUrl}" alt="${slide.title || 'Thumb'}" loading="lazy" />
        ${slide.type === "video" ? '<span class="gallery-video-badge">▶ Video</span>' : ''}
        <div class="gallery-thumb-overlay">
          <span class="gallery-thumb-title">${slide.title || `Momen #${idx + 1}`}</span>
          <span class="gallery-thumb-date">${slide.date || ''}</span>
        </div>
      `;

      thumb.addEventListener("click", () => {
        goToSlide(idx);
        closeModal(galleryModal);
      });

      galleryGrid.appendChild(thumb);
    });
  }

  /* ====================================================================
     3. UNLOCK COVER SCREEN & AUTOPLAY MUSIC
     ==================================================================== */
  if (btnOpenStory) {
    btnOpenStory.addEventListener("click", unlockWebsite);
  }

  function unlockWebsite() {
    if (isUnlocked) return;
    isUnlocked = true;

    // Trigger celebration heart burst
    spawnHeartBurst(window.innerWidth / 2, window.innerHeight / 2, 25);
    showLoveToast("Selamat Hari Jadi Kita Sayang! ❤️");

    // Hide Cover Screen with animation
    if (coverScreen) {
      coverScreen.classList.add("unlocked");
      setTimeout(() => {
        coverScreen.style.display = "none";
      }, 1000);
    }

    // Play Background Audio
    if (bgAudio && config.music?.autoplayOnUnlock) {
      bgAudio.play().then(() => {
        if (btnVinylDisc) btnVinylDisc.classList.add("playing");
      }).catch((err) => {
        console.warn("Autoplay blocked or waiting for further gesture:", err);
      });
    }

    // Start Slideshow
    if (config.slideshow?.autoPlay) {
      startSlideTimer();
    }
  }

  /* ====================================================================
     4. SLIDESHOW ENGINE & VIDEO SYNC
     ==================================================================== */
  function updateSlideView(newIndex) {
    const slideItems = document.querySelectorAll(".slide-item");
    const indicatorItems = document.querySelectorAll(".story-indicator-item");
    const galleryThumbs = document.querySelectorAll(".gallery-item-thumb");

    if (!slideItems.length) return;

    // Handle previous slide video pause
    const prevSlide = slideItems[currentIndex];
    if (prevSlide) {
      const prevVideo = prevSlide.querySelector("video");
      if (prevVideo) {
        prevVideo.pause();
        prevVideo.currentTime = 0;
      }
    }

    currentIndex = (newIndex + slideItems.length) % slideItems.length;

    // Update Slide DOM
    slideItems.forEach((slide, idx) => {
      slide.classList.toggle("active", idx === currentIndex);
    });

    // Update Indicators
    indicatorItems.forEach((item, idx) => {
      item.classList.remove("active", "completed");
      const fill = item.querySelector(".story-indicator-fill");
      if (fill) fill.style.width = "0%";

      if (idx < currentIndex) {
        item.classList.add("completed");
        if (fill) fill.style.width = "100%";
      } else if (idx === currentIndex) {
        item.classList.add("active");
      }
    });

    // Update Gallery Grid Active
    galleryThumbs.forEach((thumb, idx) => {
      thumb.classList.toggle("active", idx === currentIndex);
    });

    // Update Slide Counter
    if (slideCounter) {
      const currentNum = String(currentIndex + 1).padStart(2, "0");
      const totalNum = String(slideItems.length).padStart(2, "0");
      slideCounter.textContent = `${currentNum} / ${totalNum}`;
    }

    // Check Active Slide Type
    const currentSlideData = config.slides[currentIndex];
    const currentSlideEl = slideItems[currentIndex];

    if (currentSlideData?.type === "video") {
      const videoEl = currentSlideEl.querySelector("video");
      if (videoEl) {
        videoEl.currentTime = 0;
        videoEl.play().catch(e => console.log("Video autoplay caught:", e));
      }
      currentSlideDuration = currentSlideData.duration || 8000;
    } else {
      currentSlideDuration = config.slideshow?.defaultDuration || 6000;
    }

    // Reset Progress & Timer if unlocked
    if (isUnlocked && isPlaying) {
      startSlideTimer();
    }
  }

  function nextSlide() {
    updateSlideView(currentIndex + 1);
  }

  function prevSlide() {
    updateSlideView(currentIndex - 1);
  }

  function goToSlide(index) {
    updateSlideView(index);
  }

  function startSlideTimer() {
    clearTimeout(slideTimer);
    clearInterval(progressInterval);

    if (!isPlaying) return;

    progressStartTime = Date.now();
    const activeFill = document.querySelector(`.story-indicator-item[data-index="${currentIndex}"] .story-indicator-fill`);

    progressInterval = setInterval(() => {
      const elapsed = Date.now() - progressStartTime;
      const percent = Math.min((elapsed / currentSlideDuration) * 100, 100);
      if (activeFill) {
        activeFill.style.width = `${percent}%`;
      }
    }, 50);

    slideTimer = setTimeout(() => {
      nextSlide();
    }, currentSlideDuration);
  }

  function togglePlayPause() {
    isPlaying = !isPlaying;
    if (playPauseIcon) {
      playPauseIcon.textContent = isPlaying ? "⏸️" : "▶️";
    }

    if (isPlaying) {
      startSlideTimer();
    } else {
      clearTimeout(slideTimer);
      clearInterval(progressInterval);
    }
  }

  // Navigation Button Events
  if (navNext) navNext.addEventListener("click", () => { nextSlide(); });
  if (navPrev) navPrev.addEventListener("click", () => { prevSlide(); });
  if (btnPlayPause) btnPlayPause.addEventListener("click", togglePlayPause);

  /* ====================================================================
     5. TOUCH / SWIPE GESTURES FOR MOBILE & TABLET
     ==================================================================== */
  if (slideshowViewport) {
    slideshowViewport.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    slideshowViewport.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      touchEndY = e.changedTouches[0].screenY;
      handleSwipeGesture();
    }, { passive: true });
  }

  function handleSwipeGesture() {
    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;
    const absDiffX = Math.abs(diffX);
    const absDiffY = Math.abs(diffY);

    if (absDiffX > 45 && absDiffX > absDiffY) {
      if (diffX < 0) {
        nextSlide(); // Swipe Left -> Next
      } else {
        prevSlide(); // Swipe Right -> Prev
      }
    } else if (absDiffY > 60 && diffY < 0 && absDiffY > absDiffX) {
      // Swipe Up -> Open Letter Modal
      openModal(letterModal);
    }
  }

  /* ====================================================================
     6. KEYBOARD SHORTCUTS (DESKTOP)
     ==================================================================== */
  document.addEventListener("keydown", (e) => {
    if (!isUnlocked) return;

    if (e.key === "ArrowRight") {
      nextSlide();
    } else if (e.key === "ArrowLeft") {
      prevSlide();
    } else if (e.key === " ") {
      e.preventDefault();
      togglePlayPause();
    } else if (e.key.toLowerCase() === "f") {
      toggleFullscreenMode();
    } else if (e.key.toLowerCase() === "m") {
      toggleMusicPlayback();
    } else if (e.key === "Escape") {
      closeModal(letterModal);
      closeModal(galleryModal);
    }
  });

  /* ====================================================================
     7. FLOATING VINYL MUSIC PLAYER
     ==================================================================== */
  if (btnVinylDisc) {
    btnVinylDisc.addEventListener("click", toggleMusicPlayback);
  }

  function toggleMusicPlayback() {
    if (!bgAudio) return;

    if (bgAudio.paused) {
      bgAudio.play().then(() => {
        btnVinylDisc.classList.add("playing");
      }).catch(err => console.log(err));
    } else {
      bgAudio.pause();
      btnVinylDisc.classList.remove("playing");
    }
  }

  if (bgAudio) {
    bgAudio.addEventListener("play", () => {
      if (btnVinylDisc) btnVinylDisc.classList.add("playing");
    });
    bgAudio.addEventListener("pause", () => {
      if (btnVinylDisc) btnVinylDisc.classList.remove("playing");
    });
  }

  /* ====================================================================
     8. DAYS TOGETHER LIVE COUNTER
     ==================================================================== */
  function startDaysCounter() {
    const startDateStr = config.couple?.startDate;
    if (!startDateStr) return;

    const startDate = new Date(startDateStr).getTime();

    function updateCounter() {
      const now = new Date().getTime();
      const difference = Math.max(0, now - startDate);

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      const formattedStr = `${days} Hari, ${hours} Jam, ${minutes} Menit, ${seconds} Detik`;
      const shortDaysStr = `Sudah ${days} Hari Kita Bersama 💕`;

      if (liveCounterText) liveCounterText.textContent = formattedStr;
      if (coverDaysCount) coverDaysCount.textContent = shortDaysStr;
    }

    updateCounter();
    setInterval(updateCounter, 1000);
  }

  /* ====================================================================
     9. MODALS MANAGEMENT (LOVE LETTER & GALLERY)
     ==================================================================== */
  function openModal(modal) {
    if (!modal) return;
    modal.classList.add("open");
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove("open");
  }

  if (btnLetter) btnLetter.addEventListener("click", () => openModal(letterModal));
  if (btnCloseLetter) btnCloseLetter.addEventListener("click", () => closeModal(letterModal));

  if (btnGallery) btnGallery.addEventListener("click", () => openModal(galleryModal));
  if (btnCloseGallery) btnCloseGallery.addEventListener("click", () => closeModal(galleryModal));

  [letterModal, galleryModal].forEach(modal => {
    if (modal) {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal(modal);
      });
    }
  });

  /* ====================================================================
     10. FULLSCREEN MODE TOGGLE
     ==================================================================== */
  if (btnFullscreen) {
    btnFullscreen.addEventListener("click", toggleFullscreenMode);
  }

  function toggleFullscreenMode() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.warn("Fullscreen request error:", err);
      });
      if (fullscreenIcon) fullscreenIcon.textContent = "🗗";
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      if (fullscreenIcon) fullscreenIcon.textContent = "⛶";
    }
  }

  /* ====================================================================
     11. INTERACTIVE HEART BURST & TOAST MESSAGES
     ==================================================================== */
  if (btnHeartBurst) {
    btnHeartBurst.addEventListener("click", (e) => {
      const rect = btnHeartBurst.getBoundingClientRect();
      spawnHeartBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 16);
      showRandomLoveQuote();
    });
  }

  function spawnHeartBurst(x, y, count = 12) {
    if (!heartBurstContainer) return;

    const heartEmojis = ["💖", "❤️", "💕", "✨", "🥰", "🌸", "🌹", "💘"];

    for (let i = 0; i < count; i++) {
      const heart = document.createElement("div");
      heart.className = "flying-heart";
      heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

      const size = Math.random() * 20 + 16;
      const tx = (Math.random() - 0.5) * 260;
      const rot = (Math.random() - 0.5) * 120;
      const duration = Math.random() * 1.5 + 1.2;

      heart.style.left = `${x}px`;
      heart.style.top = `${y}px`;
      heart.style.fontSize = `${size}px`;
      heart.style.setProperty("--tx", `${tx}px`);
      heart.style.setProperty("--rot", `${rot}deg`);
      heart.style.animationDuration = `${duration}s`;

      heartBurstContainer.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, duration * 1000);
    }
  }

  let toastTimeout = null;
  function showLoveToast(message) {
    if (!loveToast) return;
    loveToast.textContent = message;
    loveToast.classList.add("show");

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      loveToast.classList.remove("show");
    }, 3200);
  }

  function showRandomLoveQuote() {
    const quotes = config.loveQuotes || [
      "I love you more each day! ❤️",
      "Happy Anniversary, cintaku! ✨",
      "You make my world so beautiful! 🌸"
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    showLoveToast(randomQuote);
  }

  /* ====================================================================
     12. CANVAS PARTICLE SYSTEM (FLOATING STARS & HEARTS)
     ==================================================================== */
  function initCanvasParticles() {
    if (!coverCanvas) return;
    const ctx = coverCanvas.getContext("2d");
    let width = (coverCanvas.width = window.innerWidth);
    let height = (coverCanvas.height = window.innerHeight);

    window.addEventListener("resize", () => {
      width = coverCanvas.width = window.innerWidth;
      height = coverCanvas.height = window.innerHeight;
    });

    const particles = [];
    const particleCount = Math.min(45, Math.floor(width / 25));

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.5 + 0.8,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: -Math.random() * 0.5 - 0.2,
        alpha: Math.random() * 0.6 + 0.2,
        color: Math.random() > 0.5 ? "rgba(255, 117, 140, " : "rgba(253, 226, 184, "
      });
    }

    function animateParticles() {
      if (isUnlocked && coverScreen.style.display === "none") return;

      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.y < 0) p.y = height + 10;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(255, 117, 140, 0.6)";
        ctx.fill();
      });

      requestAnimationFrame(animateParticles);
    }

    animateParticles();
  }

  // Initialize the App
  initApp();
});
