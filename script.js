// ===== DATA INHERITED FROM SHARED fallback default menu-data.js =====
let menuItems = [...defaultMenuItems];
let dealsData = [...defaultDealsData];

// ===== SHOP CONFIG & DYNAMIC LOADING =====
let shopInfo = {
  phone: "0302-5001330",
  whatsapp: "923025001330",
  address: "Opp. Fatima Jinnah Lady Garden, Jaranwala, Punjab, Pakistan",
  hours: "Monday – Sunday\n10:00 AM – 2:00 AM",
  deliveryTime: "30–45 min delivery time",
  discountText: "Limited Time — 15% OFF All Orders",
  social: {
    facebook: "https://www.facebook.com/share/1a859FYxnz/",
    instagram: "https://www.instagram.com/rana.taseen",
    tiktok: "https://www.tiktok.com/@dpofficaljaranwala",
    whatsapp: "https://wa.me/923025001330"
  }
};

async function loadConfig() {
  // Load configurations directly from the static frontend files (menu-data.js)
  if (typeof defaultShopInfo !== 'undefined') {
    shopInfo = { ...defaultShopInfo };
  }
  applyConfig();
}

function applyConfig() {
  const waUrl = `https://wa.me/${shopInfo.whatsapp}`;
  document.querySelectorAll('.dynamic-whatsapp-link').forEach(el => {
    el.href = waUrl;
  });
  
  document.querySelectorAll('.dynamic-phone-link').forEach(el => {
    el.href = `tel:+${shopInfo.whatsapp}`;
  });
  document.querySelectorAll('.dynamic-phone-text').forEach(el => {
    el.textContent = shopInfo.phone;
  });

  const discountEl = document.getElementById('hero-discount-banner');
  if (discountEl) {
    discountEl.innerHTML = `<i class="fas fa-fire"></i> ${shopInfo.discountText}`;
  }
  const mobDiscountEl = document.getElementById('mobile-discount-banner');
  if (mobDiscountEl) {
    mobDiscountEl.innerHTML = shopInfo.discountTextMobile || "🔥 15% OFF All Orders Today!";
  }

  const addressLoc = document.getElementById('loc-address');
  if (addressLoc) addressLoc.innerHTML = shopInfo.address.replace(/\n/g, '<br/>');
  const addressFooter = document.getElementById('footer-address');
  if (addressFooter) addressFooter.textContent = shopInfo.address.replace(/\n/g, ', ');

  const hoursLoc = document.getElementById('loc-hours');
  if (hoursLoc) hoursLoc.innerHTML = shopInfo.hours.replace(/\n/g, '<br/>');
  const hoursFooter = document.getElementById('footer-hours');
  if (hoursFooter) hoursFooter.innerHTML = shopInfo.hours.replace(/\n/g, ' | ');

  const delLoc = document.getElementById('loc-delivery');
  if (delLoc) delLoc.innerHTML = `All areas of Jaranwala<br/>${shopInfo.deliveryTime}`;

  if (shopInfo.social) {
    document.querySelectorAll('.dynamic-social-facebook').forEach(el => el.href = shopInfo.social.facebook);
    document.querySelectorAll('.dynamic-social-instagram').forEach(el => el.href = shopInfo.social.instagram);
    document.querySelectorAll('.dynamic-social-tiktok').forEach(el => el.href = shopInfo.social.tiktok);
    document.querySelectorAll('.dynamic-social-whatsapp').forEach(el => el.href = `https://wa.me/${shopInfo.whatsapp}`);
  }
}

// ===== PIZZA SIZE CONFIG =====
// Base price on each pizza item = Medium price.
// Extra cost added on top of the medium (base) price.
const pizzaSizes = [
  { key: 'medium',    label: 'Medium',    inch: '10"', extra: 0    },
  { key: 'large',     label: 'Large',     inch: '12"', extra: 350  },
  { key: 'xl',        label: 'XL',        inch: '14"', extra: 1100 },
  { key: 'familyxl',  label: 'Family XL', inch: '16"', extra: 1200 },
];

// ===== CART STATE =====
let cart = [];
let _sizePickerItemId = null;

// ===== RENDER MENU =====
function renderMenu(items) {
  const grid = document.getElementById('menuGrid');
  if (!items.length) {
    grid.innerHTML = '<p style="color:var(--gray);text-align:center;grid-column:1/-1;padding:40px">No items found.</p>';
    return;
  }
  grid.innerHTML = items.map(item => `
    <div class="menu-card fade-in">
      <div class="menu-card-img-wrap">
        <img src="${item.img}" alt="${item.name}" class="menu-card-img" loading="lazy"
          onerror="this.src='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80'" />
        ${item.badge ? `<span class="menu-card-badge">${item.badge}</span>` : ''}
        ${item.category === 'pizza' ? `<span class="menu-card-size-tag"><i class="fas fa-pizza-slice"></i> 3-4 Sizes</span>` : ''}
      </div>
      <div class="menu-card-body">
        <div class="menu-card-name">${item.name}</div>
        <div class="menu-card-desc">${item.desc}</div>
        ${item.category === 'pizza' ? `
        <div class="menu-card-sizes-preview">
          <span>M</span><span>L</span><span>XL</span>
        </div>` : ''}
        <div class="menu-card-footer">
          <span class="menu-card-price">
            ${item.category === 'pizza' ? `From Rs. ${item.price.toLocaleString()}` : `Rs. ${item.price.toLocaleString()}`}
          </span>
          <button class="add-cart-btn" onclick="${item.category === 'pizza' ? `openSizePicker(${item.id})` : `addToCart(${item.id})`}">
            <i class="fas fa-plus"></i> ${item.category === 'pizza' ? 'Choose Size' : 'Add'}
          </button>
        </div>
      </div>
    </div>
  `).join('');
  observeFadeIns();
}

// ===== RENDER DEALS =====
function renderDeals() {
  const grid = document.getElementById('dealsGrid');
  grid.innerHTML = dealsData.map(deal => `
    <div class="deal-card fade-in">
      <div class="deal-card-img-wrap">
        <img src="${deal.img}" alt="${deal.name}" class="deal-card-img" loading="lazy"
          onerror="this.src='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80'" />
        <span class="deal-tag">${deal.tag}</span>
        <span class="deal-number-badge">${deal.dealNo}</span>
      </div>
      <div class="deal-card-body">
        <div class="deal-card-name">${deal.name}</div>
        <div class="deal-card-desc">${deal.desc}</div>
        <div class="deal-card-footer">
          <span class="deal-price">Rs. ${deal.price.toLocaleString()}</span>
          <button class="deal-add-btn" onclick="addDealToCart('${deal.id}','${deal.name.replace(/'/g,"\\'")}',${deal.price},'${deal.img}')">
            <i class="fas fa-plus"></i> Add Deal
          </button>
        </div>
      </div>
    </div>
  `).join('');
  observeFadeIns();
}

// ===== FILTER MENU =====
function filterMenu(category, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  const filtered = category === 'all' ? menuItems : menuItems.filter(i => i.category === category);
  renderMenu(filtered);
}

// ===== SIZE PICKER =====
function openSizePicker(id) {
  const item = menuItems.find(i => i.id === id);
  if (!item) return;
  _sizePickerItemId = id;

  document.getElementById('sizePickerName').textContent = item.name;
  document.getElementById('sizePickerImg').src = item.img;

  const optionsEl = document.getElementById('sizePickerOptions');
  optionsEl.innerHTML = pizzaSizes.map(s => `
    <div class="size-option" data-size="${s.key}" onclick="selectSize('${s.key}', ${item.price + s.extra})">
      <div class="size-option-icon">
        <i class="fas fa-pizza-slice" style="font-size:${s.key==='small'?'1rem':s.key==='medium'?'1.3rem':s.key==='large'?'1.6rem':'2rem'}"></i>
      </div>
      <div class="size-option-info">
        <span class="size-option-label">${s.label}</span>
        <span class="size-option-inch">${s.inch}</span>
      </div>
      <span class="size-option-price">Rs. ${(item.price + s.extra).toLocaleString()}</span>
    </div>
  `).join('');

  // default select first
  selectSize('small', item.price);

  document.getElementById('sizePickerOverlay').classList.add('active');
  document.getElementById('sizePickerModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function selectSize(sizeKey, price) {
  document.querySelectorAll('.size-option').forEach(el => {
    el.classList.toggle('selected', el.dataset.size === sizeKey);
  });
  const addBtn = document.getElementById('sizePickerAddBtn');
  addBtn.dataset.size = sizeKey;
  addBtn.dataset.price = price;
  const sizeLabel = pizzaSizes.find(s => s.key === sizeKey).label;
  addBtn.innerHTML = `<i class="fas fa-cart-plus"></i> Add ${sizeLabel} — Rs. ${Number(price).toLocaleString()}`;
}

function closeSizePicker() {
  document.getElementById('sizePickerOverlay').classList.remove('active');
  document.getElementById('sizePickerModal').classList.remove('active');
  if (!document.getElementById('cartSidebar').classList.contains('active')) {
    document.body.style.overflow = '';
  }
  _sizePickerItemId = null;
}

function confirmSizePicker() {
  const addBtn = document.getElementById('sizePickerAddBtn');
  const sizeKey = addBtn.dataset.size;
  const price   = parseInt(addBtn.dataset.price);
  const item    = menuItems.find(i => i.id === _sizePickerItemId);
  if (!item) return;

  const sizeLabel = pizzaSizes.find(s => s.key === sizeKey).label;
  const sizeInch  = pizzaSizes.find(s => s.key === sizeKey).inch;
  // unique cart id per pizza+size combo
  const cartId = `${item.id}_${sizeKey}`;

  const existing = cart.find(c => c.id === cartId);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({
      id: cartId,
      name: item.name,
      size: sizeLabel,
      sizeInch: sizeInch,
      price,
      img: item.img,
      qty: 1,
      isPizza: true,
    });
  }

  updateCart();
  showToast(`${item.name} (${sizeLabel}) added to cart!`);
  document.getElementById('cartBtn').classList.add('bounce-anim');
  setTimeout(() => document.getElementById('cartBtn').classList.remove('bounce-anim'), 600);
  closeSizePicker();
}

// ===== CART FUNCTIONS =====
function addToCart(id) {
  const item = menuItems.find(i => i.id === id);
  if (!item) return;
  // Pizza items should go through size picker
  if (item.category === 'pizza') { openSizePicker(id); return; }
  const existing = cart.find(c => c.id === id);
  if (existing) existing.qty++;
  else cart.push({ ...item, qty: 1 });
  updateCart();
  showToast(`${item.name} added to cart!`);
  document.getElementById('cartBtn').classList.add('bounce-anim');
  setTimeout(() => document.getElementById('cartBtn').classList.remove('bounce-anim'), 600);
}

function addDealToCart(id, name, price, img) {
  const existing = cart.find(c => c.id === id);
  if (existing) existing.qty++;
  else cart.push({ id, name, price, img, qty: 1 });
  updateCart();
  showToast(`${name} added to cart!`);
}

function removeFromCart(id) {
  cart = cart.filter(c => String(c.id) !== String(id));
  updateCart();
}

function changeQty(id, delta) {
  const item = cart.find(c => String(c.id) === String(id));
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else updateCart();
}

function clearCart() {
  cart = [];
  updateCart();
}

function updateCart() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById('cartCount').textContent = count;
  document.getElementById('cartTotal').textContent = `Rs. ${total.toLocaleString()}`;

  // sync mobile bottom nav badge
  const mobBadge = document.getElementById('mobCartBadge');
  if (mobBadge) {
    mobBadge.textContent = count;
    mobBadge.style.display = count > 0 ? 'flex' : 'none';
  }

  const itemsEl  = document.getElementById('cartItems');
  const emptyEl  = document.getElementById('cartEmpty');
  const footerEl = document.getElementById('cartFooter');

  if (cart.length === 0) {
    // remove all cart-item rows but keep the empty placeholder
    itemsEl.querySelectorAll('.cart-item').forEach(el => el.remove());
    emptyEl.style.display = 'flex';
    footerEl.style.display = 'none';
  } else {
    emptyEl.style.display = 'none';
    footerEl.style.display = 'block';
    // rebuild only the cart-item rows
    itemsEl.querySelectorAll('.cart-item').forEach(el => el.remove());
    const rows = cart.map(item => {
      const div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `
        <img src="${item.img}" alt="${item.name}" class="cart-item-img"
          onerror="this.src='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80'" />
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}${item.isPizza ? ` <span class="cart-item-size-badge">${item.size} ${item.sizeInch}</span>` : ''}</div>
          <div class="cart-item-price">Rs. ${(item.price * item.qty).toLocaleString()}</div>
        </div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty('${item.id}',-1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty('${item.id}',1)">+</button>
        </div>
        <button class="remove-item" onclick="removeFromCart('${item.id}')"><i class="fas fa-trash"></i></button>
      `;
      return div;
    });
    rows.forEach(row => itemsEl.appendChild(row));
  }
}

function checkoutWhatsApp() {
  openCheckoutModal();
}

function openCheckoutModal() {
  if (cart.length === 0) { showToast('Your cart is empty!'); return; }

  // Build order summary inside modal
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById('checkoutTotal').textContent = `Rs. ${total.toLocaleString()}`;
  document.getElementById('checkoutSummary').innerHTML = cart.map(item => `
    <div class="checkout-summary-item">
      <span>${item.name}${item.isPizza ? ` (${item.size} ${item.sizeInch})` : ''} × ${item.qty}</span>
      <span>Rs. ${(item.price * item.qty).toLocaleString()}</span>
    </div>
  `).join('');

  document.getElementById('checkoutOverlay').classList.add('active');
  document.getElementById('checkoutModal').classList.add('active');
  document.body.style.overflow = 'hidden';
  setTimeout(() => document.getElementById('coName').focus(), 350);
}

function closeCheckoutModal() {
  document.getElementById('checkoutOverlay').classList.remove('active');
  document.getElementById('checkoutModal').classList.remove('active');
  if (!document.getElementById('cartSidebar').classList.contains('active')) {
    document.body.style.overflow = '';
  }
}

function submitCheckout(e) {
  e.preventDefault();

  const name    = document.getElementById('coName').value.trim();
  const phone   = document.getElementById('coPhone').value.trim();
  const address = document.getElementById('coAddress').value.trim();
  const note    = document.getElementById('coNote').value.trim();

  // Highlight empty required fields
  let valid = true;
  ['coName','coPhone','coAddress'].forEach(id => {
    const el = document.getElementById(id);
    if (!el.value.trim()) { el.classList.add('error'); valid = false; }
    else el.classList.remove('error');
  });
  if (!valid) { showToast('Please fill all required fields ⚠️'); return; }

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  let msg = `🍕 *New Order — The Best Damino's Pizza Jaranwala*\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `👤 *Name:* ${name}\n`;
  msg += `📞 *Phone:* ${phone}\n`;
  msg += `📍 *Address:* ${address}\n`;
  if (note) msg += `📝 *Note:* ${note}\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `🛒 *Order Items:*\n`;
  cart.forEach(item => {
    const sizeInfo = item.isPizza ? ` [${item.size} ${item.sizeInch}]` : '';
    msg += `  • ${item.name}${sizeInfo} × ${item.qty}  =  Rs. ${(item.price * item.qty).toLocaleString()}\n`;
  });
  msg += `━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `💰 *Total: Rs. ${total.toLocaleString()}*\n`;
  msg += `\nPlease confirm my order. Thank you! 🙏`;

  window.open(`https://wa.me/${shopInfo.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');

  // Clean up after sending
  closeCheckoutModal();
  clearCart();
  if (document.getElementById('cartSidebar').classList.contains('active')) toggleCart();
  document.getElementById('checkoutForm').reset();
  showToast('Order sent! Check WhatsApp 🎉');
}

function toggleCart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
}

// ===== NAVBAR =====
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
  document.getElementById('hamburger').classList.toggle('open');
}

window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 60);
  const sections = ['home','menu','deals','about','location','contact'];
  let current = '';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 100) current = id;
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
    document.getElementById('hamburger').classList.remove('open');
  });
});

// ===== CONTACT → WHATSAPP =====
function sendToWhatsApp(e) {
  e.preventDefault();
  const name    = document.getElementById('cName').value.trim();
  const phone   = document.getElementById('cPhone').value.trim();
  const address = document.getElementById('cAddress').value.trim();
  const message = document.getElementById('cMessage').value.trim();
  let msg = `👋 *Hello Damino's Pizza Jaranwala!*\n\n`;
  msg += `*Name:* ${name}\n*Phone:* ${phone}\n`;
  if (address) msg += `*Address:* ${address}\n`;
  if (message) msg += `*Message:* ${message}\n`;
  msg += `\nSent from the website contact form.`;
  window.open(`https://wa.me/${shopInfo.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
}

// ===== TOAST =====
function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.style.cssText = `position:fixed;bottom:100px;left:50%;transform:translateX(-50%) translateY(20px);
      background:var(--red);color:#fff;padding:12px 24px;border-radius:50px;font-size:0.88rem;
      font-weight:600;z-index:9999;opacity:0;transition:all 0.3s ease;pointer-events:none;
      white-space:nowrap;box-shadow:0 8px 24px rgba(227,28,28,0.4);`;
    document.body.appendChild(toast);
  }
  toast.textContent = '✓ ' + msg;
  toast.style.opacity = '1';
  toast.style.transform = 'translateX(-50%) translateY(0)';
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(20px)';
  }, 2500);
}

// ===== FADE-IN OBSERVER =====
function observeFadeIns() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in:not(.visible)').forEach(el => observer.observe(el));
}

// ===== HAMBURGER STYLES =====
const style = document.createElement('style');
style.textContent = `
  .hamburger.open span:nth-child(1){transform:translateY(7px) rotate(45deg);}
  .hamburger.open span:nth-child(2){opacity:0;}
  .hamburger.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg);}
  @keyframes cartBounce{0%,100%{transform:scale(1)}50%{transform:scale(1.3)}}
  .bounce-anim{animation:cartBounce 0.4s ease;}
`;
document.head.appendChild(style);

// ===== INIT =====
document.addEventListener('DOMContentLoaded', async () => {
  await loadConfig();
  renderMenu(menuItems);
  renderDeals();
  updateCart();
  observeFadeIns();
});

// ===== HERO PIZZA IMAGE HOVER ROTATION =====
const pizzaImages = [
  "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700&q=90", // top-down classic
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=700&q=90", // pepperoni slice
  "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=700&q=90", // cheesy pull
  "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=700&q=90", // supreme loaded
  "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=700&q=90", // margherita
  "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=700&q=90", // square detroit
];

let pizzaIndex = 0;
let pizzaHoverInterval = null;

function swapPizzaImage() {
  const img = document.getElementById('heroPizzaImg');
  if (!img) return;

  // fade out
  img.classList.add('fade-swap');

  setTimeout(() => {
    pizzaIndex = (pizzaIndex + 1) % pizzaImages.length;
    img.src = pizzaImages[pizzaIndex];
    img.onload = () => {
      img.classList.remove('fade-swap');
    };
    // fallback in case onload doesn't fire (cached)
    setTimeout(() => img.classList.remove('fade-swap'), 200);
  }, 400);
}

document.addEventListener('DOMContentLoaded', () => {
  const wrap = document.getElementById('heroPizzaWrap');
  if (!wrap) return;

  // Preload all images silently
  pizzaImages.forEach(src => { const i = new Image(); i.src = src; });

  wrap.addEventListener('mouseenter', () => {
    swapPizzaImage();
    pizzaHoverInterval = setInterval(swapPizzaImage, 1200);
  });

  wrap.addEventListener('mouseleave', () => {
    clearInterval(pizzaHoverInterval);
    pizzaHoverInterval = null;
    // smoothly return to first image
    const img = document.getElementById('heroPizzaImg');
    if (!img) return;
    img.classList.add('fade-swap');
    setTimeout(() => {
      pizzaIndex = 0;
      img.src = pizzaImages[0];
      img.onload = () => img.classList.remove('fade-swap');
      setTimeout(() => img.classList.remove('fade-swap'), 200);
    }, 400);
  });

  // On mobile — auto-rotate every 3s (tap to pause)
  if (window.matchMedia('(max-width: 1024px)').matches) {
    let autoRotate = setInterval(swapPizzaImage, 3000);
    wrap.addEventListener('click', () => {
      if (autoRotate) { clearInterval(autoRotate); autoRotate = null; }
      else { autoRotate = setInterval(swapPizzaImage, 3000); }
    });
  }
});

// ===== MOBILE BOTTOM NAV =====
function setMobActive(el) {
  document.querySelectorAll('.mob-nav-item').forEach(i => i.classList.remove('active'));
  if (el) el.classList.add('active');
}

// Keep mobile cart badge in sync — merged into main updateCart above

// Highlight active nav item on scroll (mobile)
window.addEventListener('scroll', () => {
  if (window.innerWidth > 768) return;
  const sections = [
    { id: 'home',    el: document.getElementById('mobHome') },
    { id: 'menu',    el: document.getElementById('mobMenu') },
    { id: 'deals',   el: document.getElementById('mobDeals') },
    { id: 'reviews', el: document.getElementById('mobReviews') },
    { id: 'contact', el: document.getElementById('mobContact') },
  ];
  let current = 'home';
  sections.forEach(s => {
    const sec = document.getElementById(s.id);
    if (sec && window.scrollY >= sec.offsetTop - 120) current = s.id;
  });
  sections.forEach(s => {
    if (s.el) s.el.classList.toggle('active', s.id === current);
  });
}, { passive: true });

// ===== PWA — Service Worker + Install Banner =====
let deferredPrompt = null;

// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(reg => console.log('SW registered:', reg.scope))
      .catch(err => console.log('SW error:', err));
  });
}

// Capture the install prompt
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredPrompt = e;

  // Only show on mobile and if not already dismissed
  if (window.innerWidth <= 768 && !sessionStorage.getItem('pwaDismissed')) {
    setTimeout(() => {
      const banner = document.getElementById('pwaBanner');
      if (banner) banner.classList.add('show');
    }, 3000); // show after 3 seconds
  }
});

// Install button clicked
document.addEventListener('DOMContentLoaded', () => {
  const installBtn  = document.getElementById('pwaInstallBtn');
  const dismissBtn  = document.getElementById('pwaDismissBtn');
  const banner      = document.getElementById('pwaBanner');

  if (installBtn) {
    installBtn.addEventListener('click', async () => {
      if (!deferredPrompt) return;
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        showToast('App installed! 🎉');
      }
      deferredPrompt = null;
      banner.classList.remove('show');
    });
  }

  if (dismissBtn) {
    dismissBtn.addEventListener('click', () => {
      banner.classList.remove('show');
      sessionStorage.setItem('pwaDismissed', '1');
    });
  }
});

// Hide banner if already installed
window.addEventListener('appinstalled', () => {
  const banner = document.getElementById('pwaBanner');
  if (banner) banner.classList.remove('show');
  deferredPrompt = null;
});
