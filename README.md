# 🌿 Virendra Garden's (Estd. 1985)
### *Botanical Sanctuary, Himalayan Heritage Orchard & Live Plant Nursery*

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![HTML5 / CSS3 / JS](https://img.shields.io/badge/Built%20With-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-brightgreen)](https://developer.mozilla.org/en-US/)
[![WhatsApp Order](https://img.shields.io/badge/Order%20Plants-WhatsApp%20%2B91%207451920608-25D366?logo=whatsapp)](https://wa.me/917451920608)
[![Location](https://img.shields.io/badge/Location-Uttarakhand%2C%20India-blue)](https://maps.app.goo.gl/ZvK2q6JAgAgWsp1eA)

---

## 📖 About The Project

**Virendra Garden's** is a lush 40-year-old botanical sanctuary and horticultural heritage orchard founded in **1985** by **Mr. Virendra Singh Gusain** in Uttarakhand. 

This official web platform provides an immersive, nature-first digital experience for tourists, nature enthusiasts, families, and plant lovers. It showcases the sanctuary's 40+ tree varieties, interactive zone maps, seasonal flowering/fruiting calendars, audio ambient nature soundscapes, ticket booking calculators, and an e-commerce **Botanical Plant Store & Live Sapling Nursery** with 1-click WhatsApp order generation.

---

## 🗂️ Project Directory & Folder Structure

```text
Garden Website/
├── 📄 index.html           # Primary Homepage (Hero, Experiences, 3D Map, Booking, Store, Founder Story)
├── 📄 Garden.html          # Dual entry point & alternate home route
├── 📄 store.html           # Botanical Nursery & Plant Store (Search, Filters, Cart, WhatsApp Checkout)
├── 📄 gallery.html         # High-Resolution Botanical Photo Gallery with category filters & lightbox
├── 📄 history.html         # 1985 Heritage & Origin Story of Founder Mr. Virendra Singh Gusain
├── 📄 reviews.html         # Verified Visitor Testimonials, Google Ratings & Feedback
├── 📄 feedback.html        # Eco-Pledge form, Adopt-a-Tree certificate & Visitor Inquiries
├── 📄 videos.html          # Orchard Walkthrough Video Reels & Drone tours
│
├── 📁 css/                 # Modern Styling Architecture
│   └── 🎨 style.css        # Core Design System (Tokens, Glassmorphism, Responsive Grid, Night Mode, UI)
│
├── 📁 js/                  # Application Logic & Interactivity
│   ├── ⚡ main.js          # Core App Logic (Navigation, Lightbox, Sound Synthesizer, Booking, Hindi/Eng Toggle)
│   └── 🛒 store.js         # Plant Store Engine (Product Catalog, Cart System, Search & WhatsApp Generator)
│
├── 📁 img/                 # Image Assets
│   └── 📁 plants/          # Verified High-Res Live Plant Photos
│       ├── night_queen_plant_*.jpg    # Raat Ki Rani / Night Queen Live Plant
│       ├── mogra_jasmine_plant_*.jpg  # Bela / Mogra Arabian Jasmine Plant
│       ├── golden_money_plant_*.jpg   # Golden Money Plant (Pothos)
│       ├── baramasi_lemon_plant_*.jpg # All-Season Baramasi Lemon Plant
│       ├── mango_sapling_plant_*.jpg  # Heritage Grafted Langra Mango Sapling
│       ├── ashwagandha_plant_*.jpg    # Organic Ashwagandha Adaptogen Plant
│       ├── stevia_plant_*.jpg         # Sweet Stevia / Meethi Tulsi Plant
│       ├── lemongrass_plant_*.jpg     # Live Lemongrass Root Clump
│       ├── snake_plant_indoor_*.jpg   # Sansevieria Snake Plant
│       └── peace_lily_indoor_*.jpg    # White Bloom Peace Lily Plant
│
├── 📁 Garden/              # Original Sanctuary Photographic Archives (40+ High-Res Orchard Photos)
│   ├── F1.jpg ... F8.jpg   # Heritage Canopy & Orchard Photographs
│   └── IMG_20251016_*.jpg  # High-Resolution DSLR Orchard & Nature Captures
│
├── 🖼️ Virendra.jpg         # Historic Portrait of Founder Mr. Virendra Singh Gusain
└── 📄 README.md            # Comprehensive Project Documentation
```

---

## 🌟 Key Features & Modules

### 1. 🛒 Botanical Nursery & Live Plant Store (`store.html`, `js/store.js`)
* **Curated Live Plant Categories**:
  * 🌸 **Aroma & Night Flowering**: *Raat Ki Rani (Night Queen), Bela Mogra Jasmine, English Lavender, Himalayan Damask Rose, Cape Jasmine, Blue Poppy*.
  * 🍋 **Grafted Fruit Tree Saplings**: *All-Season Baramasi Lemon, Thai Guava, 40-Yr Heritage Langra & Dussehri Mango, Himalayan Walnut, Pahari Peach, Bhagwa Pomegranate*.
  * 🪴 **Indoor & Air-Purifying (Stress-Free)**: *Golden Money Plant, Sansevieria Snake Plant, Peace Lily, Lucky Jade Plant*.
  * 🌿 **Stress-Relief & Ayurvedic Medicinal**: *Organic Ashwagandha, Brahmi Gotu Kola, Panch-Tulsi Combo, Aloe Vera, Giloy Vine, Desi Lemongrass, Sweet Stevia (Meethi Tulsi)*.
  * 🍂 **Organic Soil & Bio-Care**: *Mountain Orchard Aged Vermicompost, Cold-Pressed Bio Neem Oil*.
* **Real-time Live Search & Dynamic Filtering**: Instant search across botanical names, common names, and healing properties.
* **1-Click WhatsApp Ordering**: Direct automated ordering messages sent to nursery manager at **`+91 7451920608`**.
* **Cart & Persistence**: Full browser local storage cart with quantity increment, deletion, and bulk WhatsApp checkout.
* **Automatic Image Fallback**: Smart `onerror` fallback triggers to ensure no broken icons appear.

### 2. 🗺️ Interactive Botanical Zone Map (`index.html`)
* Interactive exploration pins for:
  * 🌳 **Heritage Mango Orchard** (Oldest tree canopy)
  * 🌿 **Ayurvedic Healing Herb Garden**
  * 🌸 **Aroma & Night Queen Promenade**
  * 🧺 **Family Shaded Lawn & Stream**
  * 🍋 **Citrus & Exotic Fruit Grove**
  * 🏡 **Founder Memorial & Reception Pavilion**

### 3. 📅 Seasonal Orchard Calendar
* Dynamic season switcher showing fruit availability, flowering stages, weather, and recommended activities across **Spring Blossom**, **Summer Mango Harvest**, **Monsoon Green Burst**, and **Autumn & Winter Chill**.

### 4. 🎟️ Interactive Visit Cost & Tour Calculator
* Real-time pricing calculator for Adults, Children, Heritage Guided Tours, and Picnic Pavilion bookings with instant reserve via WhatsApp.

### 5. 🎵 Ambient Himalayan Soundscape Synthesizer
* Native Web Audio API procedural nature sound generator creating relaxing mountain breeze and gentle birdsong without requiring heavy MP3 downloads.

### 6. 🌐 Dual-Language Support (English & हिन्दी)
* Instant bilingual toggling between English and Hindi across key interface labels and call-to-actions.

---

## 🚀 Getting Started & Local Development

No heavy build tools, npm node modules, or database configurations required. The project is built with lightweight, standards-compliant web technologies.

### Prerequisites
* Any modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, Brave).
* Optional: Python 3, Node.js (http-server), or VS Code Live Server extension.

### Running Locally

#### Option 1: Python HTTP Server (Recommended)
```bash
# Navigate to the project root directory
cd "e:/ACER PREV/Developerdiary/Garden Website"

# Launch local server on port 8080
python -m http.server 8080
```
Open your browser and visit: **`http://localhost:8080/`** or **`http://localhost:8080/store.html`**

#### Option 2: Direct File Open
Simply double-click `index.html` or `store.html` in your file explorer to open it in any web browser.

---

## 📱 Contact & Store Inquiries

* **Founder**: Mr. Virendra Singh Gusain (Estd. 1985)
* **Plant Store & Nursery Hotline (WhatsApp)**: [`+91 7451920608`](https://wa.me/917451920608)
* **Google Maps Location**: [Virendra Garden on Google Maps](https://maps.app.goo.gl/ZvK2q6JAgAgWsp1eA)
* **Operating Hours**: Monday – Sunday, 8:00 AM – 6:30 PM IST

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
