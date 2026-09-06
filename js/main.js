/**
 * Virendra Garden - Master Interactive Engine (Estd. 1985)
 * Comprehensive Tourist Experience & Eco-Sanctuary System
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initHeaderScroll();
  initSlider();
  initLightbox();
  initGalleryFilter();
  initReviews();
  initFeedbackForm();
  highlightActiveNav();

  // Phase 1 to 5 Upgrades
  initAmbientAudio();
  initLanguageSwitcher();
  initSeasonTabs();
  initGardenMap();
  initCertificateModal();
});

/* ==========================================================================
   1. NAVIGATION & MOBILE MENU
   ========================================================================== */
function initMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navLinks.classList.toggle('mobile-open');
      menuBtn.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
      menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu when clicking any nav link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
        navLinks.classList.remove('mobile-open');
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('mobile-open')) {
        navLinks.classList.remove('mobile-open');
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }
}

function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }
}

function highlightActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .bottom-nav-item');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && (href === 'index.html' || href === 'Garden.html'))) {
      link.classList.add('active');
    }
  });
}

/* ==========================================================================
   2. HERO INTERACTIVE SLIDER
   ========================================================================== */
function initSlider() {
  const track = document.querySelector('.slider-track');
  const slides = document.querySelectorAll('.slide-item');
  const nextBtn = document.querySelector('.slider-btn.next');
  const prevBtn = document.querySelector('.slider-btn.prev');
  const dotsContainer = document.querySelector('.slider-dots');

  if (!track || slides.length === 0) return;

  let currentIndex = 0;
  let autoplayTimer = null;
  const totalSlides = slides.length;

  // Build dots
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = `slider-dot ${i === 0 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.addEventListener('click', () => goToSlide(i));
      dotsContainer.appendChild(dot);
    });
  }

  function updateSlide() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    const dots = document.querySelectorAll('.slider-dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  }

  function goToSlide(index) {
    currentIndex = (index + totalSlides) % totalSlides;
    updateSlide();
    resetAutoplay();
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);

  // Autoplay
  function startAutoplay() {
    autoplayTimer = setInterval(nextSlide, 4500);
  }

  function resetAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
    startAutoplay();
  }

  startAutoplay();

  // Pause on hover
  const sliderContainer = document.querySelector('.slider-container');
  if (sliderContainer) {
    sliderContainer.addEventListener('mouseenter', () => clearInterval(autoplayTimer));
    sliderContainer.addEventListener('mouseleave', startAutoplay);
  }

  // Touch Swipe Support
  let touchStartX = 0;
  let touchEndX = 0;

  track.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
  }
}

/* ==========================================================================
   3. GALLERY CATEGORY FILTERING & ENHANCED LIGHTBOX
   ========================================================================== */
function initGalleryFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.gallery-item');

  if (filterBtns.length === 0 || items.length === 0) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      items.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || filterValue === itemCategory) {
          item.style.display = 'block';
          item.classList.add('fade-in');
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

function initLightbox() {
  const modal = document.querySelector('.lightbox-modal');
  if (!modal) return;

  const lightboxImg = modal.querySelector('.lightbox-img');
  const captionEl = modal.querySelector('.lightbox-caption-text');
  const counterEl = modal.querySelector('.lightbox-counter');
  const closeBtn = modal.querySelector('.lightbox-close');
  const prevBtn = modal.querySelector('.lightbox-prev');
  const nextBtn = modal.querySelector('.lightbox-next');

  let currentGalleryIndex = 0;
  let currentImages = [];

  function getVisibleGalleryItems() {
    return Array.from(document.querySelectorAll('.gallery-item')).filter(
      item => item.style.display !== 'none'
    );
  }

  document.addEventListener('click', (e) => {
    const galleryItem = e.target.closest('.gallery-item');
    if (!galleryItem) return;

    currentImages = getVisibleGalleryItems();
    currentGalleryIndex = currentImages.indexOf(galleryItem);
    if (currentGalleryIndex !== -1) {
      showLightbox(currentGalleryIndex);
    }
  });

  function showLightbox(index) {
    if (!currentImages[index]) return;
    const item = currentImages[index];
    const img = item.querySelector('img');
    const caption = item.querySelector('.gallery-caption')?.innerText || img.getAttribute('alt') || '';

    lightboxImg.src = img.getAttribute('src');
    lightboxImg.alt = caption;
    if (captionEl) captionEl.textContent = caption;
    if (counterEl) counterEl.textContent = `Photo ${index + 1} of ${currentImages.length}`;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function hideLightbox() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function showNext() {
    if (currentImages.length === 0) return;
    currentGalleryIndex = (currentGalleryIndex + 1) % currentImages.length;
    showLightbox(currentGalleryIndex);
  }

  function showPrev() {
    if (currentImages.length === 0) return;
    currentGalleryIndex = (currentGalleryIndex - 1 + currentImages.length) % currentImages.length;
    showLightbox(currentGalleryIndex);
  }

  if (closeBtn) closeBtn.addEventListener('click', hideLightbox);
  if (nextBtn) nextBtn.addEventListener('click', showNext);
  if (prevBtn) prevBtn.addEventListener('click', showPrev);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) hideLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') hideLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });
}

/* ==========================================================================
   4. REVIEWS SYSTEM (LOCAL STORAGE PERSISTENCE)
   ========================================================================== */
const DEFAULT_REVIEWS = [
  {
    name: "Meera Rawat",
    rating: 5,
    date: "October 2024",
    comment: "Such a peaceful and beautiful place. The 100+ mango trees, walnut trees and fresh mountain air made our family picnic memorable!"
  },
  {
    name: "Ravi Sharma",
    rating: 5,
    date: "November 2024",
    comment: "Incredible 40-year legacy by Mr. Virendra Singh Gusain. We planted a sapling here in honor of our parents. Truly inspiring."
  },
  {
    name: "Deepa Gusain",
    rating: 5,
    date: "January 2025",
    comment: "Lovely garden vibes! Litchi, Peaches, Walnuts, and fresh Lemongrass tea aroma all around. A green treasure."
  },
  {
    name: "Amit Negi",
    rating: 5,
    date: "February 2025",
    comment: "Visited during sunset. The natural greenery, calm atmosphere, and well-maintained paved trails are refreshing."
  }
];

function initReviews() {
  const reviewsContainer = document.getElementById('reviewsList');
  const reviewForm = document.getElementById('reviewForm');
  const starsSelect = document.querySelectorAll('#starRatingSelect span');

  if (!reviewsContainer) return;

  // Load reviews from localStorage or defaults
  let stored = localStorage.getItem('vg_reviews_1985');
  let reviews = stored ? JSON.parse(stored) : DEFAULT_REVIEWS;

  renderReviews(reviews, reviewsContainer);

  // Star selector logic in review form
  let selectedRating = 5;
  if (starsSelect) {
    starsSelect.forEach(star => {
      star.addEventListener('click', () => {
        selectedRating = parseInt(star.getAttribute('data-value'), 10);
        starsSelect.forEach(s => {
          const val = parseInt(s.getAttribute('data-value'), 10);
          s.classList.toggle('selected', val <= selectedRating);
        });
      });
    });
  }

  // Handle Form Submission
  if (reviewForm) {
    reviewForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('reviewName');
      const commentInput = document.getElementById('reviewComment');

      if (!nameInput.value.trim() || !commentInput.value.trim()) return;

      const newReview = {
        name: nameInput.value.trim(),
        rating: selectedRating,
        date: "Just now",
        comment: commentInput.value.trim()
      };

      reviews.unshift(newReview);
      localStorage.setItem('vg_reviews_1985', JSON.stringify(reviews));

      renderReviews(reviews, reviewsContainer);
      reviewForm.reset();

      // Reset stars to 5
      if (starsSelect) {
        starsSelect.forEach(s => s.classList.add('selected'));
      }

      showToast("Review published successfully! Thank you for honoring our green sanctuary.");
    });
  }
}

function renderReviews(reviews, container) {
  container.innerHTML = '';
  reviews.forEach(rev => {
    const starStr = '<i class="fa-solid fa-star"></i>'.repeat(rev.rating) + '<i class="fa-regular fa-star"></i>'.repeat(5 - rev.rating);
    const initial = rev.name ? rev.name.charAt(0).toUpperCase() : 'V';

    const card = document.createElement('div');
    card.className = 'review-card fade-in';
    card.innerHTML = `
      <div>
        <div class="stars" style="margin-bottom: 8px; color: #fbbf24; display: flex; gap: 3px;">${starStr}</div>
        <p class="review-quote">“${escapeHtml(rev.comment)}”</p>
      </div>
      <div class="review-author-info">
        <div class="avatar-circle">${initial}</div>
        <div>
          <div class="author-name">${escapeHtml(rev.name)}</div>
          <div class="review-date">${escapeHtml(rev.date)}</div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

/* ==========================================================================
   5. FEEDBACK & TREE ADOPTION / ECO-PLEDGE FORM
   ========================================================================== */
function initFeedbackForm() {
  const form = document.getElementById('feedbackForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('feedbackName')?.value || 'Nature Friend';
    const type = document.getElementById('feedbackType')?.value || 'Inquiry';

    if (type.includes('Plant') || type.includes('Tree') || type.includes('Sapling') || type.includes('Adopt')) {
      showToast(`Thank you ${escapeHtml(name)}! Your Plant a Tree request is confirmed. Generating your Green Guardian Certificate...`);
      setTimeout(() => {
        generateAndShowCertificate(name, "Heritage Fruit / Mango Tree");
      }, 900);
    } else {
      showToast(`Thank you ${escapeHtml(name)}, your inquiry has been received!`);
    }
    form.reset();
  });
}

/* ==========================================================================
   6. TOURIST UPGRADE: SENSORY NATURE SOUNDSCAPE (WEB AUDIO API)
   ========================================================================== */
let audioCtx = null;
let isAudioPlaying = false;
let breezeNode = null;
let birdInterval = null;

function initAmbientAudio() {
  const pill = document.querySelector('.audio-control-pill');
  if (!pill) return;

  pill.addEventListener('click', () => {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    if (isAudioPlaying) {
      stopAmbientAudio();
      pill.classList.remove('playing');
      pill.querySelector('.audio-label').textContent = 'Sound';
    } else {
      startAmbientAudio();
      pill.classList.add('playing');
      pill.querySelector('.audio-label').textContent = 'Playing';
      showToast('Enjoy the peaceful mountain breeze and birdsong of Virendra Garden.');
    }
    isAudioPlaying = !isAudioPlaying;
  });
}

function startAmbientAudio() {
  if (!audioCtx) return;

  // 1. Soothing Mountain Breeze (Pink Noise generator)
  const bufferSize = audioCtx.sampleRate * 2;
  const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const output = noiseBuffer.getChannelData(0);
  let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
  for (let i = 0; i < bufferSize; i++) {
    const white = Math.random() * 2 - 1;
    b0 = 0.99886 * b0 + white * 0.0555179;
    b1 = 0.99332 * b1 + white * 0.0750759;
    b2 = 0.96900 * b2 + white * 0.1538520;
    b3 = 0.86650 * b3 + white * 0.3104856;
    b4 = 0.55000 * b4 + white * 0.5329522;
    b5 = -0.7616 * b5 - white * 0.0168980;
    output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
    output[i] *= 0.04; // Gentle volume
    b6 = white * 0.115926;
  }

  const whiteNoise = audioCtx.createBufferSource();
  whiteNoise.buffer = noiseBuffer;
  whiteNoise.loop = true;

  // Filter for soft wind resonance
  const filter = audioCtx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(450, audioCtx.currentTime);

  const gainNode = audioCtx.createGain();
  gainNode.gain.setValueAtTime(0.35, audioCtx.currentTime);

  whiteNoise.connect(filter);
  filter.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  whiteNoise.start(0);
  breezeNode = { source: whiteNoise, gain: gainNode };

  // 2. Periodic Himalayan Birdsong chirps
  playBirdChirp();
  birdInterval = setInterval(playBirdChirp, 3800);
}

function playBirdChirp() {
  if (!audioCtx || !isAudioPlaying) return;

  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = 'sine';
  // Modulate frequency for natural chirp
  const baseFreq = 2200 + Math.random() * 600;
  osc.frequency.setValueAtTime(baseFreq, now);
  osc.frequency.exponentialRampToValueAtTime(baseFreq + 700, now + 0.08);
  osc.frequency.exponentialRampToValueAtTime(baseFreq + 200, now + 0.16);
  osc.frequency.exponentialRampToValueAtTime(baseFreq + 900, now + 0.24);

  gain.gain.setValueAtTime(0.001, now);
  gain.gain.exponentialRampToValueAtTime(0.12, now + 0.04);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start(now);
  osc.stop(now + 0.3);
}

function stopAmbientAudio() {
  if (breezeNode && breezeNode.source) {
    try { breezeNode.source.stop(); } catch(e){}
    breezeNode = null;
  }
  if (birdInterval) {
    clearInterval(birdInterval);
    birdInterval = null;
  }
}

/* ==========================================================================
   7. TOURIST UPGRADE: SEASONAL CALENDAR TABS
   ========================================================================== */
function initSeasonTabs() {
  const tabBtns = document.querySelectorAll('.season-tab-btn');
  const contentCards = document.querySelectorAll('.season-content-card');

  if (tabBtns.length === 0 || contentCards.length === 0) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      contentCards.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const targetSeason = btn.getAttribute('data-season');
      const activeCard = document.getElementById(`season-${targetSeason}`);
      if (activeCard) activeCard.classList.add('active');
    });
  });
}

/* ==========================================================================
   8. TOURIST UPGRADE: INTERACTIVE GARDEN ESTATE MAP
   ========================================================================== */
const ZONE_DATA = {
  mango: {
    title: "Zone A: 100+ Heritage Mango Grove",
    desc: "40+ year mature organic mango trees providing a dense green walking canopy and sweet summer harvest.",
    tag: "Orchard Trail • Shaded Canopy"
  },
  walnut: {
    title: "Zone B: Walnut (Akhrot) & Mountain Peach Hill",
    desc: "Himalayan walnut trees and sweet mountain peach orchard blooming with vibrant pink flowers in spring.",
    tag: "Highland Fruit Zone"
  },
  gazebo: {
    title: "Zone C: Sunset Picnic Gazebo & Meditation Lawn",
    desc: "Spacious grassy lawn with wooden seating benches, panoramic valley sunset views and fresh mountain breezes.",
    tag: "Family Picnics & Relaxation"
  },
  herbal: {
    title: "Zone D: Lemongrass & Botanical Nursery",
    desc: "Aromatic lemongrass beds, medicinal flora, and floral biodiversity supporting mountain butterflies and bees.",
    tag: "Herbal Wellness & Aroma"
  },
  trails: {
    title: "Zone E: Paved Nature Walking Trails",
    desc: "Clean, flat and senior-citizen friendly stone-paved loop trail connecting all major orchard zones.",
    tag: "Easy Walking & Birdwatching"
  }
};

function initGardenMap() {
  const pins = document.querySelectorAll('.map-pin');
  const infoTitle = document.getElementById('mapZoneTitle');
  const infoDesc = document.getElementById('mapZoneDesc');
  const infoTag = document.getElementById('mapZoneTag');

  if (pins.length === 0 || !infoTitle) return;

  pins.forEach(pin => {
    pin.addEventListener('click', () => {
      const zoneKey = pin.getAttribute('data-zone');
      const data = ZONE_DATA[zoneKey];
      if (!data) return;

      infoTitle.textContent = data.title;
      infoDesc.textContent = data.desc;
      if (infoTag) infoTag.textContent = data.tag;

      pins.forEach(p => p.querySelector('.map-pin-pulse').style.transform = 'scale(1)');
      pin.querySelector('.map-pin-pulse').style.transform = 'scale(1.25)';
    });
  });
}

/* ==========================================================================
   9. TOURIST UPGRADE: INSTANT GREEN GUARDIAN CERTIFICATE GENERATOR
   ========================================================================== */
function initCertificateModal() {
  const closeBtn = document.querySelector('.cert-close-btn');
  const downloadBtn = document.getElementById('downloadCertBtn');
  const shareBtn = document.getElementById('shareCertBtn');
  const modal = document.querySelector('.cert-modal');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      const canvas = document.getElementById('certCanvas');
      if (!canvas) return;
      const link = document.createElement('a');
      link.download = 'Virendra_Garden_Green_Guardian_Certificate.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
      showToast('Certificate downloaded successfully!');
    });
  }

  if (shareBtn) {
    shareBtn.addEventListener('click', () => {
      const text = encodeURIComponent('I just pledged/adopted a tree at Virendra Garden (Estd. 1985) in Uttarakhand! Join the green initiative.');
      window.open(`https://wa.me/?text=${text}`, '_blank');
    });
  }
}

function generateAndShowCertificate(name, treeType) {
  const modal = document.querySelector('.cert-modal');
  const canvas = document.getElementById('certCanvas');
  if (!modal || !canvas) return;

  const ctx = canvas.getContext('2d');
  canvas.width = 1200;
  canvas.height = 800;

  // 1. Background Luxury Gradient
  const bgGrad = ctx.createLinearGradient(0, 0, 1200, 800);
  bgGrad.addColorStop(0, '#04120c');
  bgGrad.addColorStop(0.5, '#0a2318');
  bgGrad.addColorStop(1, '#05160e');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, 1200, 800);

  // 2. Gold Borders
  ctx.strokeStyle = '#f59e0b';
  ctx.lineWidth = 14;
  ctx.strokeRect(30, 30, 1140, 740);

  ctx.strokeStyle = 'rgba(52, 211, 153, 0.5)';
  ctx.lineWidth = 2;
  ctx.strokeRect(46, 46, 1108, 708);

  // 3. Elegant Gold Corner Flourishes
  ctx.strokeStyle = '#f59e0b';
  ctx.lineWidth = 3;
  // Top-left
  ctx.beginPath();
  ctx.moveTo(60, 95);
  ctx.lineTo(60, 60);
  ctx.lineTo(95, 60);
  ctx.stroke();
  // Top-right
  ctx.beginPath();
  ctx.moveTo(1140, 95);
  ctx.lineTo(1140, 60);
  ctx.lineTo(1105, 60);
  ctx.stroke();
  // Bottom-left
  ctx.beginPath();
  ctx.moveTo(60, 705);
  ctx.lineTo(60, 740);
  ctx.lineTo(95, 740);
  ctx.stroke();
  // Bottom-right
  ctx.beginPath();
  ctx.moveTo(1140, 705);
  ctx.lineTo(1140, 740);
  ctx.lineTo(1105, 740);
  ctx.stroke();

  // 4. Header Titles
  ctx.textAlign = 'center';
  ctx.fillStyle = '#f59e0b';
  ctx.font = 'bold 22px Outfit, sans-serif';
  ctx.letterSpacing = '3px';
  ctx.fillText('VIRENDRA GARDEN’S • BOTANICAL SANCTUARY (ESTD. 1985)', 600, 120);

  ctx.fillStyle = '#ffffff';
  ctx.font = 'italic 700 48px Playfair Display, serif';
  ctx.fillText('Green Guardian Certificate', 600, 185);

  ctx.fillStyle = '#94a3b8';
  ctx.font = '20px Outfit, sans-serif';
  ctx.fillText('This prestigious eco-honor is lovingly conferred upon', 600, 240);

  // 5. Guardian Name
  ctx.fillStyle = '#34d399';
  ctx.font = 'bold 54px Playfair Display, serif';
  ctx.fillText(name.toUpperCase(), 600, 330);

  // Underline
  ctx.strokeStyle = '#f59e0b';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(350, 355);
  ctx.lineTo(850, 355);
  ctx.stroke();

  // 6. Tree Pledge Text
  ctx.fillStyle = '#e2e8f0';
  ctx.font = '22px Outfit, sans-serif';
  ctx.fillText(`For pledging to adopt and nurture a sapling of:`, 600, 410);

  ctx.fillStyle = '#fbbf24';
  ctx.font = 'bold 28px Outfit, sans-serif';
  ctx.fillText(`“ ${treeType || 'Heritage Fruit Tree'} ”`, 600, 455);

  ctx.fillStyle = '#cbd5e1';
  ctx.font = '18px Outfit, sans-serif';
  ctx.fillText('Contributing directly towards mountain biodiversity, clean oxygen, and green legacy in Uttarakhand.', 600, 505);

  // 7. Date & Stamp
  const dateStr = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  ctx.fillStyle = '#94a3b8';
  ctx.font = '18px Outfit, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText(`Date: ${dateStr}`, 100, 660);
  ctx.fillText(`Certificate ID: VG-${Math.floor(100000 + Math.random() * 900000)}`, 100, 690);

  // Founder Signature
  ctx.textAlign = 'right';
  ctx.fillStyle = '#34d399';
  ctx.font = 'italic bold 26px Playfair Display, serif';
  ctx.fillText('Virendra Singh Gusain Legacy', 1100, 655);
  ctx.fillStyle = '#94a3b8';
  ctx.font = '16px Outfit, sans-serif';
  ctx.fillText('Sanctuary Conservation Trust • Estd. 1985', 1100, 685);

  modal.classList.add('active');
}

/* ==========================================================================
   10. TOURIST UPGRADE: BILINGUAL (ENGLISH / HINDI) ENGINE
   ========================================================================== */
const TRANSLATIONS = {
  en: {
    heroTag: "In Loving Honor of Mr. Virendra Singh Gusain • Estd. 1985",
    heroTitle: "A 40-Year Living Legacy of Nature",
    heroSub: "Established in 1985, a peaceful botanical sanctuary nurturing 100+ Mango trees, Walnut (Akhrot), Litchi, Peach (Aadu), Banana, Guava, Pomegranate, Jamun, Pear, Lemon Grass, and exotic Himalayan flowers.",
    btnExperiences: "Explore Experiences",
    btnExplore: "Explore Photo Gallery",
    btnMaps: "Visit on Google Maps",
    storeBadge: "Authenticated Orchard Nursery",
    storeTitle: "Botanical Nursery & Live Plant Store",
    storeLead: "Take a living piece of our 40-year botanical sanctuary home. Certified high-yield grafted fruit saplings, rare Himalayan blooms, organic seeds, and Ayurvedic plants cultivated with pure mountain spring water.",
    cartLabel: "Basket"
  },
  hi: {
    heroTag: "श्री वीरेंद्र सिंह गुसाईं जी की पावन स्मृति में • स्थापना 1985",
    heroTitle: "प्रकृति की 40 वर्षीय जीवित धरोहर",
    heroSub: "1985 से स्थापित एक शांत प्राकृतिक बॉटनिकल अभयारण्य, जहाँ 100+ आम के पेड़, अखरोट, आड़ू, लीची, केला, अमरूद, अनार, जामुन, नाशपाती, लेमनग्रास और हिमालयी फूल फल-फूल रहे हैं।",
    btnExperiences: "अनुभव और उद्यान भ्रमण",
    btnExplore: "फोटो गैलरी देखें",
    btnMaps: "गूगल मैप्स पर देखें",
    storeBadge: "प्रमाणित बगीचा एवं पौधशाला",
    storeTitle: "प्राकृतिक पौधशाला एवं सजीव पौधे स्टोर",
    storeLead: "हमारे 40 वर्षों के अभयारण्य का एक जीवंत अंश अपने घर ले जाएं। प्रमाणित कलमी फलदार पौधे, दुर्लभ हिमालयी पुष्प, जैविक बीज एवं औषधीय पौधे।",
    cartLabel: "टोकरी"
  }
};

function initLanguageSwitcher() {
  const switchBtns = document.querySelectorAll('.lang-switch-btn, .lang-btn, #langToggleBtn');
  if (switchBtns.length === 0) return;

  let currentLang = localStorage.getItem('vg_lang') || 'en';
  applyLanguage(currentLang);

  switchBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'hi' : 'en';
      localStorage.setItem('vg_lang', currentLang);
      applyLanguage(currentLang);
      showToast(currentLang === 'hi' ? 'भाषा बदलकर हिन्दी कर दी गई है।' : 'Language set to English.');
    });
  });
}

function applyLanguage(lang) {
  const switchBtns = document.querySelectorAll('.lang-switch-btn, .lang-btn, #langToggleBtn');
  switchBtns.forEach(btn => {
    btn.innerHTML = lang === 'en' ? '<i class="fa-solid fa-language"></i> हिन्दी' : '<i class="fa-solid fa-globe"></i> English';
  });

  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  const heroBadge = document.querySelector('.hero-badge');
  const heroTitle = document.querySelector('.hero-title');
  const heroSub = document.querySelector('.hero-subtitle');
  const btnExperiences = document.querySelector('.hero-actions .btn-primary');
  const btnExplore = document.querySelector('.hero-actions .btn-secondary');

  if (heroBadge && t.heroTag) heroBadge.innerHTML = `<i class="fa-solid fa-seedling"></i> ${t.heroTag}`;
  if (heroTitle && t.heroTitle) heroTitle.innerHTML = `${t.heroTitle} <br><span>Virendra Garden's</span>`;
  if (heroSub && t.heroSub) heroSub.innerHTML = t.heroSub;
  if (btnExperiences && t.btnExperiences) btnExperiences.innerHTML = `<i class="fa-solid fa-compass"></i> ${t.btnExperiences}`;
  if (btnExplore && t.btnExplore) btnExplore.innerHTML = `<i class="fa-solid fa-images"></i> ${t.btnExplore}`;

  // Store page dynamic translations
  const storeBadge = document.querySelector('.store-hero .badge');
  const storeTitle = document.querySelector('.store-hero .page-title');
  const storeLead = document.querySelector('.store-hero .section-lead');
  const cartLabel = document.querySelector('.nav-cart-btn .cart-label');

  if (storeBadge && t.storeBadge) storeBadge.textContent = t.storeBadge;
  if (storeTitle && t.storeTitle) storeTitle.textContent = t.storeTitle;
  if (storeLead && t.storeLead) storeLead.textContent = t.storeLead;
  if (cartLabel && t.cartLabel) cartLabel.textContent = t.cartLabel;
}

/* ==========================================================================
   UTILITY FUNCTIONS
   ========================================================================== */
function showToast(message) {
  let toast = document.querySelector('.toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #4ade80;"></i> <div>${message}</div>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4500);
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

