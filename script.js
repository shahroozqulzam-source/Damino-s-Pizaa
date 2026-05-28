// ===== MENU DATA (from official Damino's Jaranwala menu board) =====
const menuItems = [

  // ── PIZZA ──
  { id: 1,  name: "Damino's Special Pizza",  category: "pizza", price: 1200, sizes: null,
    desc: "Our signature pizza loaded with special toppings, fresh veggies and premium mozzarella.",
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80", badge: "Chef's Pick" },
  { id: 2,  name: "Malai Boti Pizza",         category: "pizza", price: 1300, sizes: null,
    desc: "Tender malai boti chunks on a creamy white sauce base with mozzarella.",
    img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80" },
  { id: 3,  name: "Crown Crust Pizza",        category: "pizza", price: 1400, sizes: null,
    desc: "Stuffed crust pizza with a crown of mini bites around the edge.",
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80", badge: "Popular" },
  { id: 4,  name: "Extreme Pizza",            category: "pizza", price: 1350, sizes: null,
    desc: "Extreme toppings, extreme flavor — not for the faint-hearted.",
    img: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&q=80" },
  { id: 5,  name: "Super Supreme Pizza",      category: "pizza", price: 1550, sizes: null,
    desc: "Loaded with chicken, peppers, onions, olives and premium cheese blend.",
    img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80" },
  { id: 6,  name: "Kababish Pizza",           category: "pizza", price: 1250, sizes: null,
    desc: "Desi-style pizza topped with seekh kabab pieces and green chutney.",
    img: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400&q=80" },
  { id: 7,  name: "Lazania Pizza",            category: "pizza", price: 1300, sizes: null,
    desc: "A fusion of lasagna and pizza — layers of flavor in every bite.",
    img: "https://images.unsplash.com/photo-1548369937-47519962c11a?w=400&q=80" },
  { id: 8,  name: "Square Pizza",             category: "pizza", price: 1550, sizes: null,
    desc: "Detroit-style square pizza with crispy edges and thick fluffy crust.",
    img: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=400&q=80" },
  { id: 9,  name: "Kabab Stuffer Pizza",      category: "pizza", price: 1400, sizes: null,
    desc: "Stuffed crust filled with spiced kabab mince — a desi delight.",
    img: "https://images.unsplash.com/photo-1548507769-f8a5b2e1b1e1?w=400&q=80" },
  { id: 10, name: "Crazy Pizza",              category: "pizza", price: 1300, sizes: null,
    desc: "Crazy combination of toppings that will blow your mind.",
    img: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=400&q=80" },
  { id: 11, name: "Chef Pizza",               category: "pizza", price: 1350, sizes: null,
    desc: "Chef's secret recipe pizza with a unique blend of spices and toppings.",
    img: "https://images.unsplash.com/photo-1555072956-7758afb20e8f?w=400&q=80" },

  // ── BURGERS ──
  { id: 20, name: "Zinger Burger",            category: "burger", price: 370,
    desc: "Combo of Chicken & Spices — Delicious, Loaded With Juicy Chicken & Crunch. Rs.370",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80", badge: "Best Seller" },
  { id: 21, name: "Chicken Patty Burger",     category: "burger", price: 300,
    desc: "Juicy chicken patty with fresh veggies and our special sauce.",
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80" },
  { id: 22, name: "Big Patty Burger",         category: "burger", price: 550,
    desc: "Double patty stacked high with cheese and all the fixings.",
    img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&q=80" },
  { id: 23, name: "Tower Burger",             category: "burger", price: 800,
    desc: "A towering burger with multiple layers of chicken, cheese and sauces.",
    img: "https://images.unsplash.com/photo-1586816001966-79b736744398?w=400&q=80", badge: "New" },
  { id: 24, name: "Damino's Burger",          category: "burger", price: 550,
    desc: "Our signature burger with secret sauce and premium ingredients.",
    img: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&q=80" },
  { id: 25, name: "Bar B.Q Burger",           category: "burger", price: 550,
    desc: "Smoky BBQ glazed chicken with caramelized onions and cheddar.",
    img: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&q=80" },

  // ── HOT WINGS ──
  { id: 30, name: "Fried Wings (5 Pcs)",      category: "wings", price: 350,
    desc: "5 pieces of golden crispy fried chicken wings seasoned to perfection.",
    img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&q=80", badge: "5 Pcs" },
  { id: 31, name: "Fried Wings (10 Pcs)",     category: "wings", price: 700,
    desc: "10 pieces of golden crispy fried chicken wings — great for sharing.",
    img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&q=80", badge: "10 Pcs" },
  { id: 32, name: "Sweet Chilli Wings",       category: "wings", price: 400,
    desc: "Sticky sweet chilli glazed wings — sweet, spicy and totally addictive.",
    img: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400&q=80" },
  { id: 33, name: "Oven Baked Wings",         category: "wings", price: 400,
    desc: "Juicy oven-baked wings with a smoky herb glaze — healthier option.",
    img: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&q=80" },

  // ── NUGGETS ──
  { id: 40, name: "Nuggets (5 Pcs)",          category: "wings", price: 350,
    desc: "5 tender golden chicken nuggets, perfectly seasoned and crispy.",
    img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&q=80", badge: "5 Pcs" },
  { id: 41, name: "Nuggets (10 Pcs)",         category: "wings", price: 700,
    desc: "10 tender golden chicken nuggets — perfect for the whole family.",
    img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&q=80", badge: "10 Pcs" },

  // ── DAMINO'S PARATHA ──
  { id: 50, name: "Zinger Paratha",           category: "paratha", price: 340,
    desc: "Crispy zinger chicken wrapped in a flaky desi paratha. Rs.340",
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80" },
  { id: 51, name: "Zinger Cheese Paratha",    category: "paratha", price: 470,
    desc: "Zinger chicken with melted cheese in a crispy golden paratha. Rs.470",
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80", badge: "Cheesy" },

  // ── PASTA ──
  { id: 60, name: "Damino's Pasta (F1)",      category: "pasta", price: 400,
    desc: "F1 size — our signature pasta in a rich tomato and herb sauce. Rs.400",
    img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80", badge: "F1" },
  { id: 61, name: "Damino's Pasta (F2)",      category: "pasta", price: 800,
    desc: "F2 size — larger portion of our signature pasta. Rs.800",
    img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80", badge: "F2" },
  { id: 62, name: "Flaming Pasta",            category: "pasta", price: 500,
    desc: "Spicy arrabbiata-style pasta with a fiery kick — for spice lovers.",
    img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&q=80", badge: "🔥 Spicy" },
  { id: 63, name: "Macroni Pasta",            category: "pasta", price: 500,
    desc: "Creamy mac and cheese style pasta — comfort food at its best.",
    img: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&q=80" },
  { id: 64, name: "Crunchi Pasta",            category: "pasta", price: 550,
    desc: "Pasta with a satisfying crunch — unique texture in every bite.",
    img: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=400&q=80" },

  // ── CHINESE ──
  { id: 70, name: "Chicken Manchurian + Rice", category: "chinese", price: 999,
    desc: "Classic Manchurian chicken in tangy sauce served with steamed rice.",
    img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80" },
  { id: 71, name: "Chicken Shashlik + Rice",   category: "chinese", price: 999,
    desc: "Grilled shashlik skewers with colorful peppers served over rice.",
    img: "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?w=400&q=80" },
  { id: 72, name: "Chicken Black Pepper + Rice",category: "chinese", price: 999,
    desc: "Tender chicken in bold black pepper sauce served with steamed rice.",
    img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&q=80" },
  { id: 73, name: "Chicken Fried Rice",        category: "chinese", price: 499,
    desc: "Wok-tossed fried rice with chicken, eggs and vegetables.",
    img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&q=80", badge: "Popular" },
  { id: 74, name: "Egg Fried Rice",            category: "chinese", price: 499,
    desc: "Classic egg fried rice with spring onions and soy sauce.",
    img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80" },
  { id: 75, name: "Soup (Corn / Hot N Sour)",  category: "chinese", price: 350,
    desc: "Choice of sweet corn soup or hot & sour soup — warming and delicious.",
    img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80" },

  // ── SHAWARMA ──
  { id: 80, name: "Chicken Shawarma",          category: "shawarma", price: 250,
    desc: "Marinated chicken wrapped in soft bread with garlic sauce and veggies.",
    img: "https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=400&q=80", badge: "Best Value" },
  { id: 81, name: "Zinger Shawarma",           category: "shawarma", price: 310,
    desc: "Crispy zinger chicken in a shawarma wrap with special sauce.",
    img: "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=400&q=80" },
  { id: 82, name: "Tortilla Wrap",             category: "shawarma", price: 600,
    desc: "Grilled chicken in a flour tortilla with fresh salad and sauces.",
    img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80" },

  // ── FISH ──
  { id: 90, name: "Fish Burger Single Fly",    category: "fish", price: 499,
    desc: "Crispy battered fish fillet in a soft bun with tartar sauce.",
    img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&q=80" },
  { id: 91, name: "Fish Burger Double Fly",    category: "fish", price: 899,
    desc: "Double crispy fish fillets stacked with cheese and tartar sauce.",
    img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&q=80", badge: "Double" },
  { id: 92, name: "Fish Strips (6 Pcs)",       category: "fish", price: 799,
    desc: "Six golden crispy fish strips served with dipping sauce.",
    img: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=400&q=80" },

  // ── SIDES / FRIES ──
  { id: 100, name: "Medium Fries",             category: "sides", price: 280,
    desc: "Golden crispy fries seasoned with our special spice blend.",
    img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80" },
  { id: 101, name: "Large Fries",              category: "sides", price: 380,
    desc: "Extra large portion of our signature crispy seasoned fries.",
    img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=400&q=80", badge: "Large" },
  { id: 102, name: "Cheese Stick",             category: "sides", price: 550,
    desc: "Gooey mozzarella cheese sticks with marinara dipping sauce.",
    img: "https://images.unsplash.com/photo-1531749668029-2db88e4276c7?w=400&q=80" },
  { id: 103, name: "Chicken Doner",            category: "sides", price: 550,
    desc: "Juicy chicken doner slices served with fresh salad and sauce.",
    img: "https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=400&q=80" },
  { id: 104, name: "Spring Roll",              category: "sides", price: 550,
    desc: "Crispy spring rolls filled with spiced chicken and vegetables.",
    img: "https://images.unsplash.com/photo-1548507769-f8a5b2e1b1e1?w=400&q=80" },
  { id: 105, name: "Pizza Paratha",            category: "sides", price: 450,
    desc: "Pizza-flavored paratha — a unique desi-Italian fusion snack.",
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80" },

  // ── SANDWICHES ──
  { id: 110, name: "Jalapeno Sandwich",        category: "sandwich", price: 550,
    desc: "Spicy jalapeno chicken sandwich with fresh veggies and sauce.",
    img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80" },
  { id: 111, name: "Mexican Sandwich",         category: "sandwich", price: 550,
    desc: "Mexican-spiced chicken sandwich with salsa and sour cream.",
    img: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=400&q=80" },
  { id: 112, name: "Pizza Sandwich",           category: "sandwich", price: 550,
    desc: "Pizza-flavored sandwich with mozzarella and tomato sauce.",
    img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80" },
  { id: 113, name: "Damino's Sandwich",        category: "sandwich", price: 550,
    desc: "Our signature sandwich with secret sauce and premium fillings.",
    img: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=400&q=80" },
  { id: 114, name: "Pizza Burger",             category: "sandwich", price: 550,
    desc: "A burger that tastes like pizza — the best of both worlds.",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80" },

  // ── ICE CREAM ──
  { id: 120, name: "Ice Cream (Small)",        category: "drinks", price: 200,
    desc: "Creamy kulfa ice cream — the perfect sweet ending to your meal.",
    img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80" },
  { id: 121, name: "Ice Cream (Large)",        category: "drinks", price: 350,
    desc: "Large serving of our signature kulfa ice cream.",
    img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&q=80" },

  // ── COLD DRINKS ──
  { id: 130, name: "Cola NeXt Tin",            category: "drinks", price: 150,
    desc: "Chilled Cola NeXt in a can — the perfect companion to your meal.",
    img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&q=80" },
  { id: 131, name: "Cola NeXt (Regular)",      category: "drinks", price: 100,
    desc: "Regular Cola NeXt bottle to quench your thirst.",
    img: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400&q=80" },
  { id: 132, name: "Cola NeXt (1 Ltr)",        category: "drinks", price: 180,
    desc: "1 litre Cola NeXt bottle — great for sharing.",
    img: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400&q=80" },
  { id: 133, name: "Cola NeXt (1.5 Ltr)",      category: "drinks", price: 250,
    desc: "1.5 litre Cola NeXt bottle — perfect for the whole family.",
    img: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400&q=80", badge: "Family" },
];

// ===== DEALS DATA (exact from menu board) =====
const dealsData = [
  {
    id: "d51", dealNo: "Deal No: 51",
    name: "2 XL Pizza + Drink",
    price: 4500,
    desc: "2 Extra Large Pizza + 1.5 Ltr Drink",
    img: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=400&q=80",
    tag: "⭐ Special"
  },
  {
    id: "d52", dealNo: "Deal No: 52",
    name: "2 Large Pizza + Drink",
    price: 3100,
    desc: "2 Large Pizza + 1.5 Ltr Drink",
    img: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&q=80",
    tag: "🔥 Hot"
  },
  {
    id: "d53", dealNo: "Deal No: 53",
    name: "2 Large Pizza + Drink",
    price: 2200,
    desc: "2 Large Pizza + 1.5 Ltr Drink",
    img: "https://images.unsplash.com/photo-1548369937-47519962c11a?w=400&q=80",
    tag: "Family"
  },
  {
    id: "d54", dealNo: "Deal No: 54",
    name: "2 Medium Pizza + Drink",
    price: 2200,
    desc: "2 Medium Pizza + 1 Ltr Drink",
    img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80",
    tag: "Couple"
  },
  {
    id: "dP4", dealNo: "Deal No: P4",
    name: "Pizza Family Feast",
    price: 4700,
    desc: "1 Large Pizza + 1 Medium Pizza + 1 Small Pizza + 4 Zinger Burgers + 1.5 Ltr Drink",
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80",
    tag: "🎉 Mega"
  },
  {
    id: "d12", dealNo: "Deal No: 12",
    name: "Large Pizza + Drink",
    price: 1600,
    desc: "1 Large Pizza + 1 Ltr Drink",
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
    tag: "Best Value"
  },
];

// ===== PIZZA SIZE CONFIG =====
const pizzaSizes = [
  { key: 'small',  label: 'Small',  inch: '7"',  extra: 0   },
  { key: 'medium', label: 'Medium', inch: '10"', extra: 200 },
  { key: 'large',  label: 'Large',  inch: '12"', extra: 400 },
  { key: 'xl',     label: 'XL',     inch: '14"', extra: 600 },
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
        ${item.category === 'pizza' ? `<span class="menu-card-size-tag"><i class="fas fa-pizza-slice"></i> 4 Sizes</span>` : ''}
      </div>
      <div class="menu-card-body">
        <div class="menu-card-name">${item.name}</div>
        <div class="menu-card-desc">${item.desc}</div>
        ${item.category === 'pizza' ? `
        <div class="menu-card-sizes-preview">
          <span>S</span><span>M</span><span>L</span><span>XL</span>
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

  window.open(`https://wa.me/923025001330?text=${encodeURIComponent(msg)}`, '_blank');

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
  window.open(`https://wa.me/923025001330?text=${encodeURIComponent(msg)}`, '_blank');
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
document.addEventListener('DOMContentLoaded', () => {
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
