const defaultShopInfo = {
  phone: "0302-5001330",
  whatsapp: "923025001330",
  address: "Opp. Fatima Jinnah Lady Garden, Jaranwala, Punjab, Pakistan",
  hours: "Monday – Sunday\n10:00 AM – 2:00 AM",
  deliveryTime: "30–45 min delivery time",
  discountText: "Limited Time — 15% OFF All Orders",
  discountTextMobile: "🔥 15% OFF All Orders Today!",
  social: {
    facebook: "https://www.facebook.com/share/1a859FYxnz/",
    instagram: "https://www.instagram.com/rana.taseen",
    tiktok: "https://www.tiktok.com/@dpofficaljaranwala",
    whatsapp: "https://wa.me/923025001330"
  }
};

const defaultMenuItems = [
  {
    id: 1,
    name: "Damino's Special Pizza",
    category: "pizza",
    price: 1200,
    sizes: null,
    desc: "Our signature pizza loaded with special toppings, fresh veggies and premium mozzarella.",
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
    badge: "Chef's Pick"
  },
  {
    id: 2,
    name: "Malai Boti Pizza",
    category: "pizza",
    price: 1300,
    sizes: null,
    desc: "Tender malai boti chunks on a creamy white sauce base with mozzarella.",
    img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80"
  },
  {
    id: 3,
    name: "Crown Crust Pizza",
    category: "pizza",
    price: 1400,
    sizes: null,
    desc: "Stuffed crust pizza with a crown of mini bites around the edge.",
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80",
    badge: "Popular"
  },
  {
    id: 4,
    name: "Extreme Pizza",
    category: "pizza",
    price: 1350,
    sizes: null,
    desc: "Extreme toppings, extreme flavor — not for the faint-hearted.",
    img: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&q=80"
  },
  {
    id: 5,
    name: "Super Supreme Pizza",
    category: "pizza",
    price: 1550,
    sizes: null,
    desc: "Loaded with chicken, peppers, onions, olives and premium cheese blend.",
    img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80"
  },
  {
    id: 6,
    name: "Kababish Pizza",
    category: "pizza",
    price: 1250,
    sizes: null,
    desc: "Desi-style pizza topped with seekh kabab pieces and green chutney.",
    img: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400&q=80"
  },
  {
    id: 7,
    name: "Lazania Pizza",
    category: "pizza",
    price: 1300,
    sizes: null,
    desc: "A fusion of lasagna and pizza — layers of flavor in every bite.",
    img: "https://images.unsplash.com/photo-1548369937-47519962c11a?w=400&q=80"
  },
  {
    id: 8,
    name: "Square Pizza",
    category: "pizza",
    price: 1550,
    sizes: null,
    desc: "Detroit-style square pizza with crispy edges and thick fluffy crust.",
    img: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=400&q=80"
  },
  {
    id: 9,
    name: "Kabab Stuffer Pizza",
    category: "pizza",
    price: 1400,
    sizes: null,
    desc: "Stuffed crust filled with spiced kabab mince — a desi delight.",
    img: "https://images.unsplash.com/photo-1548507769-f8a5b2e1b1e1?w=400&q=80"
  },
  {
    id: 10,
    name: "Crazy Pizza",
    category: "pizza",
    price: 1300,
    sizes: null,
    desc: "Crazy combination of toppings that will blow your mind.",
    img: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=400&q=80"
  },
  {
    id: 11,
    name: "Chef Pizza",
    category: "pizza",
    price: 1350,
    sizes: null,
    desc: "Chef's secret recipe pizza with a unique blend of spices and toppings.",
    img: "https://images.unsplash.com/photo-1555072956-7758afb20e8f?w=400&q=80"
  },
  {
    id: 20,
    name: "Zinger Burger",
    category: "burger",
    price: 370,
    desc: "Combo of Chicken & Spices — Delicious, Loaded With Juicy Chicken & Crunch. Rs.370",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
    badge: "Best Seller"
  },
  {
    id: 21,
    name: "Chicken Patty Burger",
    category: "burger",
    price: 300,
    desc: "Juicy chicken patty with fresh veggies and our special sauce.",
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80"
  },
  {
    id: 22,
    name: "Big Patty Burger",
    category: "burger",
    price: 550,
    desc: "Double patty stacked high with cheese and all the fixings.",
    img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&q=80"
  },
  {
    id: 23,
    name: "Tower Burger",
    category: "burger",
    price: 800,
    desc: "A towering burger with multiple layers of chicken, cheese and sauces.",
    img: "https://images.unsplash.com/photo-1586816001966-79b736744398?w=400&q=80",
    badge: "New"
  },
  {
    id: 24,
    name: "Damino's Burger",
    category: "burger",
    price: 550,
    desc: "Our signature burger with secret sauce and premium ingredients.",
    img: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&q=80"
  },
  {
    id: 25,
    name: "Bar B.Q Burger",
    category: "burger",
    price: 550,
    desc: "Smoky BBQ glazed chicken with caramelized onions and cheddar.",
    img: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&q=80"
  },
  {
    id: 30,
    name: "Fried Wings (5 Pcs)",
    category: "wings",
    price: 350,
    desc: "5 pieces of golden crispy fried chicken wings seasoned to perfection.",
    img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&q=80",
    badge: "5 Pcs"
  },
  {
    id: 31,
    name: "Fried Wings (10 Pcs)",
    category: "wings",
    price: 700,
    desc: "10 pieces of golden crispy fried chicken wings — great for sharing.",
    img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&q=80",
    badge: "10 Pcs"
  },
  {
    id: 32,
    name: "Sweet Chilli Wings",
    category: "wings",
    price: 400,
    desc: "Sticky sweet chilli glazed wings — sweet, spicy and totally addictive.",
    img: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400&q=80"
  },
  {
    id: 33,
    name: "Oven Baked Wings",
    category: "wings",
    price: 400,
    desc: "Juicy oven-baked wings with a smoky herb glaze — healthier option.",
    img: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&q=80"
  },
  {
    id: 40,
    name: "Nuggets (5 Pcs)",
    category: "wings",
    price: 350,
    desc: "5 tender golden chicken nuggets, perfectly seasoned and crispy.",
    img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&q=80",
    badge: "5 Pcs"
  },
  {
    id: 41,
    name: "Nuggets (10 Pcs)",
    category: "wings",
    price: 700,
    desc: "10 tender golden chicken nuggets — perfect for the whole family.",
    img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&q=80",
    badge: "10 Pcs"
  },
  {
    id: 50,
    name: "Zinger Paratha",
    category: "paratha",
    price: 340,
    desc: "Crispy zinger chicken wrapped in a flaky desi paratha. Rs.340",
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80"
  },
  {
    id: 51,
    name: "Zinger Cheese Paratha",
    category: "paratha",
    price: 470,
    desc: "Zinger chicken with melted cheese in a crispy golden paratha. Rs.470",
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80",
    badge: "Cheesy"
  },
  {
    id: 60,
    name: "Damino's Pasta (F1)",
    category: "pasta",
    price: 400,
    desc: "F1 size — our signature pasta in a rich tomato and herb sauce. Rs.400",
    img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80",
    badge: "F1"
  },
  {
    id: 61,
    name: "Damino's Pasta (F2)",
    category: "pasta",
    price: 800,
    desc: "F2 size — larger portion of our signature pasta. Rs.800",
    img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80",
    badge: "F2"
  },
  {
    id: 62,
    name: "Flaming Pasta",
    category: "pasta",
    price: 500,
    desc: "Spicy arrabbiata-style pasta with a fiery kick — for spice lovers.",
    img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&q=80",
    badge: "🔥 Spicy"
  },
  {
    id: 63,
    name: "Macroni Pasta",
    category: "pasta",
    price: 500,
    desc: "Creamy mac and cheese style pasta — comfort food at its best.",
    img: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&q=80"
  },
  {
    id: 64,
    name: "Crunchi Pasta",
    category: "pasta",
    price: 550,
    desc: "Pasta with a satisfying crunch — unique texture in every bite.",
    img: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=400&q=80"
  },
  {
    id: 70,
    name: "Chicken Manchurian + Rice",
    category: "chinese",
    price: 999,
    desc: "Classic Manchurian chicken in tangy sauce served with steamed rice.",
    img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80"
  },
  {
    id: 71,
    name: "Chicken Shashlik + Rice",
    category: "chinese",
    price: 999,
    desc: "Grilled shashlik skewers with colorful peppers served over rice.",
    img: "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?w=400&q=80"
  },
  {
    id: 72,
    name: "Chicken Black Pepper + Rice",
    category: "chinese",
    price: 999,
    desc: "Tender chicken in bold black pepper sauce served with steamed rice.",
    img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&q=80"
  },
  {
    id: 73,
    name: "Chicken Fried Rice",
    category: "chinese",
    price: 499,
    desc: "Wok-tossed fried rice with chicken, eggs and vegetables.",
    img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&q=80",
    badge: "Popular"
  },
  {
    id: 74,
    name: "Egg Fried Rice",
    category: "chinese",
    price: 499,
    desc: "Classic egg fried rice with spring onions and soy sauce.",
    img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80"
  },
  {
    id: 75,
    name: "Soup (Corn / Hot N Sour)",
    category: "chinese",
    price: 350,
    desc: "Choice of sweet corn soup or hot & sour soup — warming and delicious.",
    img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80"
  },
  {
    id: 80,
    name: "Chicken Shawarma",
    category: "shawarma",
    price: 250,
    desc: "Marinated chicken wrapped in soft bread with garlic sauce and veggies.",
    img: "https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=400&q=80",
    badge: "Best Value"
  },
  {
    id: 81,
    name: "Zinger Shawarma",
    category: "shawarma",
    price: 310,
    desc: "Crispy zinger chicken in a shawarma wrap with special sauce.",
    img: "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=400&q=80"
  },
  {
    id: 82,
    name: "Tortilla Wrap",
    category: "shawarma",
    price: 600,
    desc: "Grilled chicken in a flour tortilla with fresh salad and sauces.",
    img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80"
  },
  {
    id: 90,
    name: "Fish Burger Single Fly",
    category: "fish",
    price: 499,
    desc: "Crispy battered fish fillet in a soft bun with tartar sauce.",
    img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&q=80"
  },
  {
    id: 91,
    name: "Fish Burger Double Fly",
    category: "fish",
    price: 899,
    desc: "Double crispy fish fillets stacked with cheese and tartar sauce.",
    img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&q=80",
    badge: "Double"
  },
  {
    id: 92,
    name: "Fish Strips (6 Pcs)",
    category: "fish",
    price: 799,
    desc: "Six golden crispy fish strips served with dipping sauce.",
    img: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=400&q=80"
  },
  {
    id: 100,
    name: "Medium Fries",
    category: "sides",
    price: 280,
    desc: "Golden crispy fries seasoned with our special spice blend.",
    img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80"
  },
  {
    id: 101,
    name: "Large Fries",
    category: "sides",
    price: 380,
    desc: "Extra large portion of our signature crispy seasoned fries.",
    img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=400&q=80",
    badge: "Large"
  },
  {
    id: 102,
    name: "Cheese Stick",
    category: "sides",
    price: 550,
    desc: "Gooey mozzarella cheese sticks with marinara dipping sauce.",
    img: "https://images.unsplash.com/photo-1531749668029-2db88e4276c7?w=400&q=80"
  },
  {
    id: 103,
    name: "Chicken Doner",
    category: "sides",
    price: 550,
    desc: "Juicy chicken doner slices served with fresh salad and sauce.",
    img: "https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=400&q=80"
  },
  {
    id: 104,
    name: "Spring Roll",
    category: "sides",
    price: 550,
    desc: "Crispy spring rolls filled with spiced chicken and vegetables.",
    img: "https://images.unsplash.com/photo-1548507769-f8a5b2e1b1e1?w=400&q=80"
  },
  {
    id: 105,
    name: "Pizza Paratha",
    category: "sides",
    price: 450,
    desc: "Pizza-flavored paratha — a unique desi-Italian fusion snack.",
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80"
  },
  {
    id: 110,
    name: "Jalapeno Sandwich",
    category: "sandwich",
    price: 550,
    desc: "Spicy jalapeno chicken sandwich with fresh veggies and sauce.",
    img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80"
  },
  {
    id: 111,
    name: "Mexican Sandwich",
    category: "sandwich",
    price: 550,
    desc: "Mexican-spiced chicken sandwich with salsa and sour cream.",
    img: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=400&q=80"
  },
  {
    id: 112,
    name: "Pizza Sandwich",
    category: "sandwich",
    price: 550,
    desc: "Pizza-flavored sandwich with mozzarella and tomato sauce.",
    img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80"
  },
  {
    id: 113,
    name: "Damino's Sandwich",
    category: "sandwich",
    price: 550,
    desc: "Our signature sandwich with secret sauce and premium fillings.",
    img: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=400&q=80"
  },
  {
    id: 114,
    name: "Pizza Burger",
    category: "sandwich",
    price: 550,
    desc: "A burger that tastes like pizza — the best of both worlds.",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80"
  },
  {
    id: 120,
    name: "Ice Cream (Small)",
    category: "drinks",
    price: 200,
    desc: "Creamy kulfa ice cream — the perfect sweet ending to your meal.",
    img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80"
  },
  {
    id: 121,
    name: "Ice Cream (Large)",
    category: "drinks",
    price: 350,
    desc: "Large serving of our signature kulfa ice cream.",
    img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&q=80"
  },
  {
    id: 130,
    name: "Cola NeXt Tin",
    category: "drinks",
    price: 150,
    desc: "Chilled Cola NeXt in a can — the perfect companion to your meal.",
    img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&q=80"
  },
  {
    id: 131,
    name: "Cola NeXt (Regular)",
    category: "drinks",
    price: 100,
    desc: "Regular Cola NeXt bottle to quench your thirst.",
    img: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400&q=80"
  },
  {
    id: 132,
    name: "Cola NeXt (1 Ltr)",
    category: "drinks",
    price: 180,
    desc: "1 litre Cola NeXt bottle — great for sharing.",
    img: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400&q=80"
  },
  {
    id: 133,
    name: "Cola NeXt (1.5 Ltr)",
    category: "drinks",
    price: 250,
    desc: "1.5 litre Cola NeXt bottle — perfect for the whole family.",
    img: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400&q=80",
    badge: "Family"
  }
];

const defaultDealsData = [
  {
    id: "d51",
    dealNo: "Deal No: 51",
    name: "2 XL Pizza + Drink",
    price: 4500,
    desc: "2 Extra Large Pizza + 1.5 Ltr Drink",
    img: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=400&q=80",
    tag: "⭐ Special"
  },
  {
    id: "d52",
    dealNo: "Deal No: 52",
    name: "2 Large Pizza + Drink",
    price: 3100,
    desc: "2 Large Pizza + 1.5 Ltr Drink",
    img: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&q=80",
    tag: "🔥 Hot"
  },
  {
    id: "d53",
    dealNo: "Deal No: 53",
    name: "2 Large Pizza + Drink",
    price: 2200,
    desc: "2 Large Pizza + 1.5 Ltr Drink",
    img: "https://images.unsplash.com/photo-1548369937-47519962c11a?w=400&q=80",
    tag: "Family"
  },
  {
    id: "d54",
    dealNo: "Deal No: 54",
    name: "2 Medium Pizza + Drink",
    price: 2200,
    desc: "2 Medium Pizza + 1 Ltr Drink",
    img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80",
    tag: "Couple"
  },
  {
    id: "dP4",
    dealNo: "Deal No: P4",
    name: "Pizza Family Feast",
    price: 4700,
    desc: "1 Large Pizza + 1 Medium Pizza + 1 Small Pizza + 4 Zinger Burgers + 1.5 Ltr Drink",
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80",
    tag: "🎉 Mega"
  },
  {
    id: "d12",
    dealNo: "Deal No: 12",
    name: "Large Pizza + Drink",
    price: 1600,
    desc: "1 Large Pizza + 1 Ltr Drink",
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
    tag: "Best Value"
  }
];
