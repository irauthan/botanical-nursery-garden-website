/**
 * Virendra Garden Botanical Sanctuary & Nursery Store
 * Estd. 1985 • WhatsApp Ordering: +91 7451920608
 */

const PRODUCTS = [
  // =========================================================================
  // 1. AROMA & FRAGRANT FLOWERING PLANTS (Night Queen, Mogra, Rose, Lavender...)
  // =========================================================================
  {
    id: "aroma-night-queen",
    name: "Raat Ki Rani / Night Queen Live Plant",
    category: "aroma",
    price: 180,
    originalPrice: 250,
    badge: "Intense Night Aroma",
    image: "img/plants/night_queen_plant_1788541427827.jpg",
    botanical: "Cestrum nocturnum",
    desc: "Legendary nocturnal flowering shrub. Its starry blossoms emit an intoxicating, sweet fragrance at night that soothes stress and repels mosquitoes naturally.",
    stock: "In Stock (Potted Plant)",
    sunlight: "Full Sun to Partial Shade",
    difficulty: "Easy Care"
  },
  {
    id: "aroma-mogra-jasmine",
    name: "Bela / Mogra Arabian Jasmine Live Plant",
    category: "aroma",
    price: 160,
    originalPrice: 220,
    badge: "Sweet Fragrance",
    image: "img/plants/mogra_jasmine_plant_1788541453113.jpg",
    botanical: "Jasminum sambac",
    desc: "Classic double-petal white fragrant jasmine. Heavy continuous flowering from spring to autumn, perfect for home balconies and pooja rituals.",
    stock: "In Stock",
    sunlight: "Full Sun",
    difficulty: "Easy"
  },
  {
    id: "aroma-lavender",
    name: "Calming English Lavender Live Plant",
    category: "aroma",
    price: 240,
    originalPrice: 320,
    badge: "Stress Relief & Sleep",
    image: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&w=600&q=80",
    botanical: "Lavandula angustifolia",
    desc: "Known worldwide for its anxiety-reducing, calming aroma. Silvery foliage with fragrant purple flower spikes that promote peaceful sleep and relaxation.",
    stock: "Acclimatized",
    sunlight: "Direct Sunlight",
    difficulty: "Moderate"
  },
  {
    id: "aroma-pahari-rose",
    name: "Fragrant Himalayan Damask Rose (Desi Gulab)",
    category: "aroma",
    price: 150,
    originalPrice: 200,
    badge: "Pure Organic Scent",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
    botanical: "Rosa damascena",
    desc: "Intensely perfumed pink mountain rose plant. Ideal for making pure organic rose water (Gulab Jal), gulkand, and aromatic garden walkways.",
    stock: "In Stock",
    sunlight: "Full Sun",
    difficulty: "Easy"
  },
  {
    id: "aroma-gandharaj-gardenia",
    name: "Gandharaj / Cape Jasmine Live Plant",
    category: "aroma",
    price: 210,
    originalPrice: 280,
    badge: "Exotic Perfume",
    image: "https://images.unsplash.com/photo-1596726978434-2e21b212f716?auto=format&fit=crop&w=600&q=80",
    botanical: "Gardenia jasminoides",
    desc: "Large waxy white flowers with deep glossy evergreen foliage. Releases a rich, luxurious floral perfume that lingers across the garden.",
    stock: "Limited",
    sunlight: "Morning Sun / Filtered Light",
    difficulty: "Moderate"
  },
  {
    id: "aroma-blue-poppy",
    name: "Himalayan Blue Poppy Live Potted Plant",
    category: "aroma",
    price: 260,
    originalPrice: 350,
    badge: "Rare Alpine Queen",
    image: "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&w=600&q=80",
    botanical: "Meconopsis betonicifolia",
    desc: "Fabled Queen of Himalayan Flora. Blooms with mesmerizing sky-blue silken petals in cool mountain air. Highly prized ornamental.",
    stock: "Seasonal Special",
    sunlight: "Cool Shaded Spot",
    difficulty: "Care Enthusiast"
  },

  // =========================================================================
  // 2. LIVE GRAFTED FRUIT TREE PLANTS (Mango, Guava, Lemon, Walnut, Peach...)
  // =========================================================================
  {
    id: "fruit-baramasi-lemon",
    name: "All-Season Baramasi Kagzi Lemon Plant",
    category: "fruit",
    price: 220,
    originalPrice: 290,
    badge: "Year-Round Fruiting",
    image: "img/plants/baramasi_lemon_plant_1788541592161.jpg",
    botanical: "Citrus limon (Baramasi Kagzi)",
    desc: "Dwarf grafted lemon plant that flowers and bears juicy, thin-skinned aromatic lemons 12 months a year. Excellent for containers or ground planting.",
    stock: "In Stock (Fruiting Ready)",
    sunlight: "Full Sun",
    difficulty: "Very Easy"
  },
  {
    id: "fruit-thai-guava",
    name: "Thai Super Sweet Dwarf Guava (Amrood) Plant",
    category: "fruit",
    price: 240,
    originalPrice: 320,
    badge: "High Yield & Sweet",
    image: "https://images.unsplash.com/photo-1536511135896-18e38d011f04?auto=format&fit=crop&w=600&q=80",
    botanical: "Psidium guajava (Thai Clone)",
    desc: "Early bearing grafted guava plant with crunchy, seedless/small-core sweet white pulp. Starts fruiting within 1 year.",
    stock: "In Stock",
    sunlight: "Full Sun",
    difficulty: "Easy"
  },
  {
    id: "fruit-mango-langra",
    name: "40-Year Heritage Grafted Langra Mango Plant",
    category: "fruit",
    price: 350,
    originalPrice: 450,
    badge: "Heritage 1985 Graft",
    image: "img/plants/mango_sapling_plant_1788542121122.jpg",
    botanical: "Mangifera indica (Langra Clone)",
    desc: "Propagated directly from our 40-year-old mother orchard trees in Uttarakhand. Highly disease-resistant, bears exceptionally sweet Himalayan mangoes.",
    stock: "Nursery Hardened",
    sunlight: "Full Sun",
    difficulty: "Easy"
  },
  {
    id: "fruit-mango-dussehri",
    name: "Premium Dussehri Grafted Mango Plant",
    category: "fruit",
    price: 320,
    originalPrice: 400,
    badge: "Best Seller",
    image: "img/plants/mango_sapling_plant_1788542121122.jpg",
    botanical: "Mangifera indica (Dussehri)",
    desc: "Aromatic, fiberless sweet mango sapling grafted on robust mountain rootstock for high yield and lush evergreen foliage.",
    stock: "In Stock",
    sunlight: "Full Sun",
    difficulty: "Easy"
  },
  {
    id: "fruit-walnut-kashmiri",
    name: "Himalayan Thin-Shell Walnut (Akhrot) Tree Plant",
    category: "fruit",
    price: 480,
    originalPrice: 600,
    badge: "Rare Mountain Stock",
    image: "https://images.unsplash.com/photo-1568651316409-58b981f144d8?auto=format&fit=crop&w=600&q=80",
    botanical: "Juglans regia",
    desc: "Acclimatized mountain walnut sapling yielding soft-shell, brain-nourishing organic walnuts. Stately long-lived shade and nut tree.",
    stock: "Limited Stock",
    sunlight: "Full Sun / Slope Friendly",
    difficulty: "Moderate"
  },
  {
    id: "fruit-peach-pahari",
    name: "Pahari Sweet Red Peach (Aadoo) Graft Plant",
    category: "fruit",
    price: 290,
    originalPrice: 380,
    badge: "Spring Blossom + Fruit",
    image: "https://images.unsplash.com/photo-1629828874514-c1e5103f2150?auto=format&fit=crop&w=600&q=80",
    botanical: "Prunus persica",
    desc: "Double advantage: stunning pink cherry-like blossoms in February/March followed by delicious juicy red blush peaches in summer.",
    stock: "In Stock",
    sunlight: "Full Sun",
    difficulty: "Easy"
  },
  {
    id: "fruit-pomegranate-bhagwa",
    name: "Sindoor Red Bhagwa Pomegranate (Anaar) Plant",
    category: "fruit",
    price: 230,
    originalPrice: 300,
    badge: "Nutrient Powerhouse",
    image: "https://images.unsplash.com/photo-1541344999736-83eca872f241?auto=format&fit=crop&w=600&q=80",
    botanical: "Punica granatum",
    desc: "Grafted dwarf pomegranate plant producing deep red, soft-seeded sweet arils. Hardy, drought-tolerant, and rich in antioxidants.",
    stock: "In Stock",
    sunlight: "Full Sun",
    difficulty: "Easy"
  },

  // =========================================================================
  // 3. INDOOR AIR-PURIFYING & STRESS-FREE PLANTS (Money Plant, Snake, Lily...)
  // =========================================================================
  {
    id: "indoor-golden-money-plant",
    name: "Golden Money Plant (Pothos) in Eco-Pot",
    category: "indoor",
    price: 150,
    originalPrice: 210,
    badge: "Prosperity & Air Detox",
    image: "img/plants/golden_money_plant_1788541566330.jpg",
    botanical: "Epipremnum aureum",
    desc: "Lush heart-shaped variegated leaves that filter indoor toxins (benzene, formaldehyde). Thrives in soil or water, brings calming green energy.",
    stock: "In Stock (Potted)",
    sunlight: "Bright Indirect Light",
    difficulty: "Super Easy"
  },
  {
    id: "indoor-snake-plant",
    name: "Sansevieria Snake Plant (24-Hr Oxygen Emitter)",
    category: "indoor",
    price: 190,
    originalPrice: 260,
    badge: "Night Oxygen / Bedroom",
    image: "img/plants/snake_plant_indoor_1788541790009.jpg",
    botanical: "Dracaena trifasciata",
    desc: "NASA-proven top indoor air purifier that releases pure oxygen throughout the night. Virtually indestructible, requires minimal watering.",
    stock: "In Stock",
    sunlight: "Low to High Indirect Light",
    difficulty: "Zero Maintenance"
  },
  {
    id: "indoor-peace-lily",
    name: "Peace Lily (White Bloom Air Purifier)",
    category: "indoor",
    price: 230,
    originalPrice: 310,
    badge: "Serene Calming Vibe",
    image: "img/plants/peace_lily_indoor_1788541941981.jpg",
    botanical: "Spathiphyllum",
    desc: "Glossy deep green leaves with elegant white hooded spathes. Absorbs mould spores and indoor radiation, instilling a serene peaceful atmosphere.",
    stock: "In Stock (Buds Present)",
    sunlight: "Medium to Low Light",
    difficulty: "Easy"
  },
  {
    id: "indoor-lucky-jade",
    name: "Lucky Jade Plant (Friendship & Harmony Succulent)",
    category: "indoor",
    price: 170,
    originalPrice: 240,
    badge: "Positive Energy & Desk",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
    botanical: "Crassula ovata",
    desc: "Charming fleshy round leaves resembling green jade coins. Perfect desktop companion to reduce digital eye strain and bring stress-free vibes.",
    stock: "In Stock",
    sunlight: "Bright Indirect Sunlight",
    difficulty: "Very Easy"
  },

  // =========================================================================
  // 4. STRESS-RELIEF & MEDICINAL AYURVEDIC PLANTS (Ashwagandha, Tulsi, Brahmi...)
  // =========================================================================
  {
    id: "med-ashwagandha",
    name: "Organic Ashwagandha (Stress-Relief Indian Ginseng) Plant",
    category: "medicinal",
    price: 140,
    originalPrice: 190,
    badge: "Supreme Adaptogen",
    image: "img/plants/ashwagandha_plant_1788541626877.jpg",
    botanical: "Withania somnifera",
    desc: "The king of Ayurvedic adaptogenic herbs. Cultivated for its powerful roots that lower cortisol (stress hormone), boost stamina, and calm the nervous system.",
    stock: "In Stock",
    sunlight: "Full Sun / Partial Shade",
    difficulty: "Easy"
  },
  {
    id: "med-brahmi-calm",
    name: "Brahmi / Gotu Kola Memory & Mind-Calming Live Plant",
    category: "medicinal",
    price: 130,
    originalPrice: 180,
    badge: "Brain Tonic & Anti-Anxiety",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    botanical: "Bacopa monnieri",
    desc: "Renowned rejuvenating herb for mental clarity, meditation focus, and cognitive tranquility. Fast-growing lush trailing medicinal ground cover.",
    stock: "Fresh & Healthy",
    sunlight: "Partial Sun / Moist Soil",
    difficulty: "Easy"
  },
  {
    id: "med-shyama-tulsi",
    name: "Panch-Tulsi Sacred Holy Basil Combo (Krishna, Rama, Vana)",
    category: "medicinal",
    price: 180,
    originalPrice: 250,
    badge: "100% Pure Oxygen & Prana",
    image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&w=600&q=80",
    botanical: "Ocimum sanctum & tenuiflorum",
    desc: "Set of 3 consecrated Tulsi varieties. High ozone & oxygen emission, natural cough/cold remedy, and sacred botanical centerpiece for homes.",
    stock: "In Stock",
    sunlight: "Direct Sunlight",
    difficulty: "Very Easy"
  },
  {
    id: "med-aloe-vera-curative",
    name: "Medicinal Thick-Leaf Barbadensis Aloe Vera Plant",
    category: "medicinal",
    price: 120,
    originalPrice: 170,
    badge: "Skin, Detox & Healing",
    image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=600&q=80",
    botanical: "Aloe barbadensis miller",
    desc: "Plump, gel-filled organic Aloe Vera. Harvest pure cooling gel directly for skin sunburns, hair nutrition, and digestive detox smoothies.",
    stock: "In Stock",
    sunlight: "Direct / Indirect Sun",
    difficulty: "Zero Maintenance"
  },
  {
    id: "med-giloy-neem",
    name: "Neem-Climbed Organic Giloy (Amrita) Live Vine",
    category: "medicinal",
    price: 110,
    originalPrice: 160,
    badge: "Immunity Fortress",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    botanical: "Tinospora cordifolia",
    desc: "Harvested from mother vines climbing mature Neem trees. The stem possesses double medicinal potency for boosting white blood cells and fighting chronic fevers.",
    stock: "Rooted Vine",
    sunlight: "Partial to Full Sun",
    difficulty: "Very Easy"
  },
  {
    id: "med-lemongrass-live",
    name: "Live Desi Lemongrass Clump (Set of 6 Root Slips)",
    category: "medicinal",
    price: 160,
    originalPrice: 220,
    badge: "Aromatic Herbal Tea",
    image: "img/plants/lemongrass_plant_1788541497686.jpg",
    botanical: "Cymbopogon citratus",
    desc: "Fresh root clumps from our sanctuary's organic borders. Harvest fresh fragrant stalks daily for refreshing citrus herbal tea and digestion support.",
    stock: "Fresh Clumps",
    sunlight: "Full Sun",
    difficulty: "Very Easy"
  },
  {
    id: "med-stevia-sugar",
    name: "Meethi Tulsi / Sweet Stevia Plant (0-Calorie Sweetener)",
    category: "medicinal",
    price: 140,
    originalPrice: 190,
    badge: "Diabetic Friendly",
    image: "img/plants/stevia_plant_1788541475600.jpg",
    botanical: "Stevia rebaudiana",
    desc: "Leaves are 30x sweeter than sugar with zero calories and zero glycemic impact. Sweeten your tea and coffee straight from the plant.",
    stock: "In Stock",
    sunlight: "Full Sun",
    difficulty: "Easy"
  },

  // =========================================================================
  // 5. ORGANIC SOIL, COMPOST & BIO PLANT CARE
  // =========================================================================
  {
    id: "care-himalayan-vermicompost",
    name: "Mountain Orchard Aged Vermicompost (5 Kg Bag)",
    category: "care",
    price: 180,
    originalPrice: 240,
    badge: "100% Bio-Humus",
    image: "https://images.unsplash.com/photo-1585336261026-7f57a66f075d?auto=format&fit=crop&w=600&q=80",
    botanical: "Enriched Organic Earthworm Castings",
    desc: "Matured on leaf litter and indigenous cow dung from Uttarakhand gaushalas. Rich in beneficial mycorrhizae, fast-tracks root growth and flower blooming.",
    stock: "In Stock",
    sunlight: "N/A",
    difficulty: "Ready to Mix"
  },
  {
    id: "care-neem-oil-spray",
    name: "Cold-Pressed Bio Neem Oil Concentrated Spray (500ml)",
    category: "care",
    price: 210,
    originalPrice: 280,
    badge: "Organic Pest Shield",
    image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80",
    botanical: "Azadirachta indica pure extract",
    desc: "Chemical-free deterrent against aphids, whiteflies, mealybugs, and leaf spot fungus. 100% safe for fruit plants, indoor plants, and pets.",
    stock: "In Stock",
    sunlight: "N/A",
    difficulty: "Easy Spray"
  }
];

// Cart State Management
let cart = JSON.parse(localStorage.getItem('vg_plant_cart') || '[]');

document.addEventListener('DOMContentLoaded', () => {
  renderProductCatalog('all');
  initFilterTabs();
  initSearch();
  initCartListeners();
  updateCartUI();
});

// Render Product Grid
function renderProductCatalog(categoryFilter = 'all', searchQuery = '') {
  const grid = document.getElementById('storeProductGrid');
  if (!grid) return;

  let filtered = PRODUCTS.filter(item => {
    const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
    const matchesSearch = !searchQuery || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.botanical.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-store-notice">
        <div style="font-size:3rem; margin-bottom:12px;">🌱</div>
        <h3>No plants found for this search</h3>
        <p>Try searching for Night Queen, Money Plant, Mango, Rose, Tulsi, or choose another category.</p>
        <button class="btn btn-nature" onclick="resetStoreFilters()" style="margin-top:14px;">View All Plants</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => `
    <div class="product-card" data-category="${item.category}" id="product-${item.id}">
      <div class="product-img-wrap">
        <img src="${item.image}" alt="${item.name}" loading="lazy" class="product-img" onerror="this.src='https://images.unsplash.com/photo-1545239351-ef35f43d514b?auto=format&fit=crop&w=600&q=80'">
        ${item.badge ? `<span class="product-badge">${item.badge}</span>` : ''}
        <span class="stock-pill ${item.stock.includes('Limited') || item.stock.includes('Special') ? 'stock-limited' : ''}">${item.stock}</span>
      </div>
      
      <div class="product-body">
        <div class="product-meta">
          <span class="botanical-tag">${item.botanical}</span>
          <span class="care-tag">☀️ ${item.sunlight}</span>
        </div>
        
        <h3 class="product-title">${item.name}</h3>
        <p class="product-desc">${item.desc}</p>
        
        <div class="product-footer">
          <div class="product-pricing">
            <span class="curr-price">₹${item.price}</span>
            ${item.originalPrice ? `<span class="orig-price">₹${item.originalPrice}</span>` : ''}
          </div>
          
          <div class="product-actions">
            <button class="btn-store-action btn-add-cart" onclick="addToCart('${item.id}')" title="Add to Garden Basket">
              🛒 Add
            </button>
            <a href="https://wa.me/917451920608?text=${encodeURIComponent(`Hello Virendra Garden (+91 7451920608)! I want to order/inquire about: *${item.name}* (Price: ₹${item.price}, ID: ${item.id}). Is this live plant available for pickup/shipping?`)}" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="btn-store-action btn-wa-buy" 
               title="Direct 1-Click WhatsApp Order">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// Category Filter Tabs
function initFilterTabs() {
  const tabs = document.querySelectorAll('.store-tab-btn');
  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-cat') || 'all';
      const searchInput = document.getElementById('storeSearchInput');
      renderProductCatalog(cat, searchInput ? searchInput.value : '');
    });
  });
}

// Live Search Filter
function initSearch() {
  const searchInput = document.getElementById('storeSearchInput');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const activeTab = document.querySelector('.store-tab-btn.active');
    const cat = activeTab ? activeTab.getAttribute('data-cat') : 'all';
    renderProductCatalog(cat, e.target.value);
  });
}

function resetStoreFilters() {
  const searchInput = document.getElementById('storeSearchInput');
  if (searchInput) searchInput.value = '';
  const tabs = document.querySelectorAll('.store-tab-btn');
  tabs.forEach(t => t.classList.remove('active'));
  const allTab = document.querySelector('.store-tab-btn[data-cat="all"]');
  if (allTab) allTab.classList.add('active');
  renderProductCatalog('all');
}

// Cart Operations
function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }

  saveCart();
  updateCartUI();
  showToastNotification(`🌿 Added "${product.name}" to your Garden Basket!`);
}

function updateCartQuantity(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }

  saveCart();
  updateCartUI();
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  updateCartUI();
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartUI();
}

function saveCart() {
  localStorage.setItem('vg_plant_cart', JSON.stringify(cart));
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);

  // Cart Badge counters
  const badges = document.querySelectorAll('.cart-count-badge');
  badges.forEach(b => {
    b.textContent = totalItems;
    b.style.display = totalItems > 0 ? 'inline-flex' : 'none';
  });

  // Drawer Items
  const drawerList = document.getElementById('cartDrawerItems');
  const drawerFooter = document.getElementById('cartDrawerFooter');
  const drawerEmpty = document.getElementById('cartDrawerEmpty');
  const totalDisplay = document.getElementById('cartSubtotalAmount');

  if (totalDisplay) totalDisplay.textContent = `₹${totalPrice}`;

  if (drawerList) {
    if (cart.length === 0) {
      drawerList.innerHTML = '';
      if (drawerEmpty) drawerEmpty.style.display = 'block';
      if (drawerFooter) drawerFooter.style.display = 'none';
    } else {
      if (drawerEmpty) drawerEmpty.style.display = 'none';
      if (drawerFooter) drawerFooter.style.display = 'block';

      drawerList.innerHTML = cart.map(item => `
        <div class="cart-item-row">
          <img src="${item.image}" alt="${item.name}" class="cart-item-thumb" onerror="this.src='https://images.unsplash.com/photo-1545239351-ef35f43d514b?auto=format&fit=crop&w=600&q=80'">
          <div class="cart-item-info">
            <h4 class="cart-item-title">${item.name}</h4>
            <div class="cart-item-calc">₹${item.price} × ${item.quantity} = <strong>₹${item.price * item.quantity}</strong></div>
            <div class="cart-item-qty-controls">
              <button class="qty-btn" onclick="updateCartQuantity('${item.id}', -1)">−</button>
              <span class="qty-count">${item.quantity}</span>
              <button class="qty-btn" onclick="updateCartQuantity('${item.id}', 1)">+</button>
              <button class="remove-btn" onclick="removeFromCart('${item.id}')" title="Remove plant">🗑️</button>
            </div>
          </div>
        </div>
      `).join('');
    }
  }

  // Update Checkout WhatsApp Button Link
  const waCheckoutBtn = document.getElementById('waCartCheckoutBtn');
  if (waCheckoutBtn) {
    if (cart.length === 0) {
      waCheckoutBtn.setAttribute('href', '#');
      waCheckoutBtn.classList.add('disabled');
    } else {
      waCheckoutBtn.classList.remove('disabled');
      let orderLines = cart.map((i, idx) => `${idx + 1}. *${i.name}* (Qty: ${i.quantity}) - ₹${i.price * i.quantity}`).join('\n');
      let message = `🌿 *VIRENDRA GARDEN - LIVE PLANT & NURSERY ORDER* 🌿\n\n` +
                    `Hello Virendra Garden (+91 7451920608), I would like to order the following live plants/saplings:\n\n` +
                    `${orderLines}\n\n` +
                    `💰 *Total Estimated Value*: ₹${totalPrice}\n` +
                    `📦 *Total Plants*: ${totalItems}\n\n` +
                    `📍 Please confirm nursery availability, healthy pot packaging, and pickup/delivery options. Thank you!`;
      
      waCheckoutBtn.setAttribute('href', `https://wa.me/917451920608?text=${encodeURIComponent(message)}`);
    }
  }
}

// Drawer Toggle Logic
function initCartListeners() {
  const openCartBtns = document.querySelectorAll('.open-cart-btn');
  const closeCartBtn = document.getElementById('closeCartDrawerBtn');
  const drawerOverlay = document.getElementById('cartDrawerOverlay');
  const drawer = document.getElementById('cartDrawer');

  openCartBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (drawer) drawer.classList.add('active');
      if (drawerOverlay) drawerOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeDrawer = () => {
    if (drawer) drawer.classList.remove('active');
    if (drawerOverlay) drawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (closeCartBtn) closeCartBtn.addEventListener('click', closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);
}

// Toast Notifications
function showToastNotification(msg) {
  let toast = document.getElementById('storeToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'storeToast';
    toast.className = 'store-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}
