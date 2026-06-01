const defaultShopInfo = {
  phone: "0302-5001330",
  whatsapp: "923025001330",
  address: "Main Water Works Road, Opp. Fatima Jinnah Lady Garden, Anwaar Plaza Jaranwala",
  hours: "Daily Open\n10:30 AM – 1:00 AM",
  deliveryTime: "Free Delivery up to 5KM",
  discountText: "Free Delivery up to 5KM — Order Now!",
  discountTextMobile: "🛵 Free Delivery up to 5KM!",
  social: {
    facebook: "https://www.facebook.com/share/1a859FYxnz/",
    instagram: "https://www.instagram.com/rana.taseen",
    tiktok: "https://www.tiktok.com/@dpofficaljaranwala",
    whatsapp: "https://wa.me/923025001330"
  }
};

const defaultMenuItems = [
  // ===== PIZZAS =====
  {
    id: 1,
    name: "Special Pizza",
    category: "pizza",
    price: 1100,
    desc: "Our signature special pizza loaded with premium toppings, fresh veggies and mozzarella. Medium Rs.1100 | Large Rs.1400 | XL Rs.2250",
    img: "https://recipesblob.oetker.in/assets/d8a4b00c292a43adbb9f96798e028f01/1272x764/pizza-pollo-arrostojpg.webp",
    badge: "Chef's Pick"
  },
  {
    id: 2,
    name: "Super Supreme Pizza",
    category: "pizza",
    price: 1100,
    desc: "Loaded with chicken, peppers, onions, olives and premium cheese blend. Medium Rs.1100 | Large Rs.1400 | XL Rs.2150",
    img: "https://pizza360.businesswala.pk/assets/uploads/36a47a51215bf36f7cc919cd42a38625.png",
    badge: "Popular"
  },
  {
    id: 3,
    name: "Malai Boti Pizza",
    category: "pizza",
    price: 1100,
    desc: "Tender malai boti chunks on a creamy white sauce base with mozzarella. Medium Rs.1100 | Large Rs.1450 | XL Rs.2250",
    img: "https://www.shutterstock.com/shutterstock/photos/2266865417/display_1500/stock-photo-chicken-tikka-pizza-signature-pakistani-flavor-2266865417.jpg"
  },
  {
    id: 4,
    name: "Crown Crust Pizza",
    category: "pizza",
    price: 1600,
    desc: "Stuffed crust pizza with a crown of mini bites around the edge. Large Rs.1600 | Family XL Rs.2300",
    img: "https://foodplanet.com.pk/wp-content/uploads/2025/09/www.foodplanet.com_.pk-6-1.png",
    badge: "Special"
  },
  {
    id: 5,
    name: "Lazania Pizza",
    category: "pizza",
    price: 1100,
    desc: "A fusion of lasagna and pizza — layers of flavor in every bite. Medium Rs.1100 | Large Rs.1500 | XL Rs.2200",
    img: "https://s.hdnux.com/photos/05/42/55/1452873/4/ratio4x3_1920.jpg"
  },
  {
    id: 6,
    name: "Double Topping Stuffer",
    category: "pizza",
    price: 1400,
    desc: "Double the toppings, double the flavor — stuffed to perfection. Medium Rs.1400 | Large Rs.2000 | XL Rs.2500",
    img: "https://img1.wsimg.com/isteam/ip/a52bf3e4-cdd6-4ee7-b8ac-02a531625783/Extreme-Deluxe-Pizza-Med.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25",
    badge: "New"
  },
  {
    id: 7,
    name: "Kabab Stuffer Pizza",
    category: "pizza",
    price: 1200,
    desc: "Stuffed crust filled with spiced kabab mince — a desi delight. Medium Rs.1200 | Large Rs.1750 | XL Rs.2450",
    img: "https://static.tossdown.com/images/bf0f9ee5-3be8-4930-a63b-88195be75af7.webp"
  },
  {
    id: 8,
    name: "Crazy Pizza",
    category: "pizza",
    price: 1200,
    desc: "Crazy combination of toppings that will blow your mind. Medium Rs.1200 | Large Rs.1550 | XL Rs.2250",
    img: "https://images.deliveryhero.io/image/fd-pk/LH/t73b-listing.jpg"
  },
  {
    id: 9,
    name: "Kababish Pizza",
    category: "pizza",
    price: 1300,
    desc: "Desi-style pizza topped with seekh kabab pieces and green chutney. Medium Rs.1300 | Large Rs.1700 | XL Rs.2300",
    img: "https://eatfresh.businesswala.pk/assets/uploads/1460_b13ba76b1fd1870c86303e15dae85d23.png"
  },
  {
    id: 10,
    name: "Square Pizza (Large)",
    category: "pizza",
    price: 1549,
    desc: "Detroit-style square pizza with crispy edges and thick fluffy crust. Rs.1549",
    img: "https://images.deliveryhero.io/image/fd-pk/LH/xum0-listing.jpg",
    badge: "Large"
  },

  // ===== BURGERS =====
  {
    id: 20,
    name: "Zinger Burger",
    category: "burger",
    price: 350,
    desc: "Crispy zinger chicken fillet with fresh veggies and special sauce.",
    img: "https://www.eatingonadime.com/wp-content/uploads/2024/03/200KB-Zinger-Burger-8-500x375.jpg",
    badge: "Best Seller"
  },
  {
    id: 21,
    name: "Chicken Patty Burger",
    category: "burger",
    price: 330,
    desc: "Juicy chicken patty with fresh veggies and our special sauce.",
    img: "https://static.toiimg.com/thumb/75675148.cms?width=573&height=430"
  },
  {
    id: 22,
    name: "Damino's Burger",
    category: "burger",
    price: 500,
    desc: "Our signature burger with secret sauce and premium ingredients.",
    img: "https://static.vecteezy.com/system/resources/thumbnails/075/025/924/small/crispy-chicken-burger-with-sesame-seed-bun-and-png.png"
  },
  {
    id: 23,
    name: "Double Patty Burger",
    category: "burger",
    price: 580,
    desc: "Double patty stacked high with cheese and all the fixings.",
    img: "https://png.pngtree.com/png-clipart/20240310/original/pngtree-tasty-double-patty-burger-isolated-png-image_14552993.png"
  },
  {
    id: 24,
    name: "Pizza Burger",
    category: "burger",
    price: 350,
    desc: "A burger that tastes like pizza — the best of both worlds.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-4hIpZGXX4p8jrsn33CwqVKaIkM2XvU8OyA&s"
  },

  // ===== SHAWARMA =====
  {
    id: 30,
    name: "Chicken Shawarma",
    category: "shawarma",
    price: 290,
    desc: "Marinated chicken wrapped in soft bread with garlic sauce and veggies.",
    img: "https://foxeslovelemons.com/wp-content/uploads/2023/06/Chicken-Shawarma-8.jpg",
    badge: "Best Value"
  },
  {
    id: 31,
    name: "Zinger Shawarma",
    category: "shawarma",
    price: 350,
    desc: "Crispy zinger chicken in a shawarma wrap with special sauce.",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/1a/44/c4/c8/zinger-shawarma.jpg"
  },
  {
    id: 32,
    name: "Kebab Shawarma",
    category: "shawarma",
    price: 350,
    desc: "Spiced kebab meat wrapped in soft bread with fresh salad and sauce.",
    img: "https://static.vecteezy.com/system/resources/previews/044/560/897/large_2x/delicious-shawarma-kebab-photo.jpeg"
  },
  {
    id: 33,
    name: "Grilled Shawarma",
    category: "shawarma",
    price: 400,
    desc: "Flame-grilled chicken shawarma with garlic sauce and crispy veggies.",
    img: "https://i.ytimg.com/vi/QqumNHVG_j8/maxresdefault.jpg"
  },
  {
    id: 34,
    name: "Tortilla Wrap",
    category: "shawarma",
    price: 650,
    desc: "Grilled chicken in a flour tortilla with fresh salad and sauces.",
    img: "https://mojo.generalmills.com/api/public/content/ayg_qoUlKUWlYn7PNiSlnw_webp_base.webp?v=292f8726&t=191ddcab8d1c415fa10fa00a14351227",
    badge: "Special"
  },

  // ===== SANDWICH =====
  {
    id: 40,
    name: "Mexican Sandwich",
    category: "sandwich",
    price: 150,
    desc: "Mexican-spiced chicken sandwich with salsa and fresh veggies.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRILhlOYaelcLqZPd0H_tHKpmXC8cGlTzMkNw&s"
  },
  {
    id: 41,
    name: "Pizza Sandwich",
    category: "sandwich",
    price: 550,
    desc: "Pizza-flavored sandwich with mozzarella and tomato sauce.",
    img: "https://vaya.in/recipes/wp-content/uploads/2019/02/Pizza-Sandwich.jpg"
  },
  {
    id: 42,
    name: "Spring Roll",
    category: "sandwich",
    price: 470,
    desc: "Crispy spring rolls filled with spiced chicken and vegetables.",
    img: "https://thaicaliente.com/wp-content/uploads/2020/09/Spring-Roll-Feature.jpg"
  },

  // ===== HOT WINGS =====
  {
    id: 50,
    name: "Fried Wings (5 Pcs)",
    category: "wings",
    price: 350,
    desc: "5 pieces of golden crispy fried chicken wings seasoned to perfection.",
    img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&q=80",
    badge: "5 Pcs"
  },
  {
    id: 51,
    name: "Fried Wings (10 Pcs)",
    category: "wings",
    price: 700,
    desc: "10 pieces of golden crispy fried chicken wings — great for sharing.",
    img: "https://thenightowlchef.com/wp-content/uploads/2025/01/crispy-baked-chicken-wings-featured-500x500.jpg",
    badge: "10 Pcs"
  },
  {
    id: 52,
    name: "Sweet Chilli Wings",
    category: "wings",
    price: 400,
    desc: "Sticky sweet chilli glazed wings — sweet, spicy and totally addictive.",
    img: "https://www.staysnatched.com/wp-content/uploads/2022/02/sweet-chili-wings-recipe-2-1.jpg"
  },
  {
    id: 53,
    name: "Oven Baked Wings",
    category: "wings",
    price: 400,
    desc: "Juicy oven-baked wings with a smoky herb glaze — healthier option.",
    img: "https://ifoodblogger.com/wp-content/uploads/2016/10/How-to-bake-chicken-wings-1.jpg"
  },

  // ===== PARATHA =====
  {
    id: 60,
    name: "Zinger Paratha",
    category: "paratha",
    price: 350,
    desc: "Crispy zinger chicken wrapped in a flaky desi paratha.",
    img: "https://i.ytimg.com/vi/11xqUIgdprM/maxresdefault.jpg"
  },
  {
    id: 61,
    name: "Zinger Cheese Paratha",
    category: "paratha",
    price: 470,
    desc: "Zinger chicken with melted cheese in a crispy golden paratha.",
    img: "https://www.foodfusion.com/wp-content/uploads/2019/05/Crispy-Chicken-roll-Recipe-by-Food-fusion-4.jpg",
    badge: "Cheesy"
  },

  // ===== NUGGETS =====
  {
    id: 70,
    name: "Nuggets (5 Pcs)",
    category: "wings",
    price: 350,
    desc: "5 tender golden chicken nuggets, perfectly seasoned and crispy.",
    img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/9/12/1/FN_Picky-Eaters-Chicken-Nuggets_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1383770571120.webp",
    badge: "5 Pcs"
  },
  {
    id: 71,
    name: "Nuggets (10 Pcs)",
    category: "wings",
    price: 700,
    desc: "10 tender golden chicken nuggets — perfect for the whole family.",
    img: "https://www.budgetbytes.com/wp-content/uploads/2019/05/Homemade-Baked-Chicken-Nuggets-Front-Dip.jpg",
    badge: "10 Pcs"
  },

  // ===== PASTA =====
  {
    id: 80,
    name: "Damino's Pasta (F1)",
    category: "pasta",
    price: 370,
    desc: "F1 size — our signature pasta in a rich tomato and herb sauce.",
    img: "https://cupfulofkale.com/wp-content/uploads/2020/10/Vegan-Sausage-Pasta-Bake-1-683x1024.jpg",
    badge: "F1"
  },
  {
    id: 81,
    name: "Damino's Pasta (F2)",
    category: "pasta",
    price: 750,
    desc: "F2 size — larger portion of our signature pasta.",
    img: "https://www.shutterstock.com/image-photo/delicious-pasta-bake-melted-cheese-260nw-2742114191.jpg",
    badge: "F2"
  },
  {
    id: 82,
    name: "Flaming Pasta",
    category: "pasta",
    price: 370,
    desc: "Spicy arrabbiata-style pasta with a fiery kick — for spice lovers.",
    img: "https://i.ytimg.com/vi/cH9no3s7VXI/hq720.jpg",
    badge: "🔥 Spicy"
  },
  {
    id: 83,
    name: "Macroni Pasta",
    category: "pasta",
    price: 370,
    desc: "Creamy mac and cheese style pasta — comfort food at its best.",
    img: "https://vismaifood.com/storage/app/uploads/public/7b2/49e/d12/thumb__700_0_0_0_auto.jpg"
  },
  {
    id: 84,
    name: "Crunchi Pasta",
    category: "pasta",
    price: 370,
    desc: "Pasta with a satisfying crunch — unique texture in every bite.",
    img: "https://i.ytimg.com/vi/3BGQCpPwO6E/hq720.jpg"
  },

  // ===== FRIES =====
  {
    id: 90,
    name: "Medium Fries",
    category: "sides",
    price: 260,
    desc: "Golden crispy fries seasoned with our special spice blend.",
    img: "https://lashawarma.ca/wp-content/uploads/2024/10/Fries.jpg"
  },
  {
    id: 91,
    name: "Large Fries",
    category: "sides",
    price: 380,
    desc: "Extra large portion of our signature crispy seasoned fries.",
    img: "https://cdn.dotpe.in/longtail/store-items/5884343/sh5qclzb.jpeg",
    badge: "Large"
  },

  // ===== DRINKS =====
  {
    id: 100,
    name: "Cola NeXt (1.5 Ltr)",
    category: "drinks",
    price: 220,
    desc: "1.5 litre Cola NeXt bottle — perfect for the whole family.",
    img: "https://static-01.daraz.pk/p/dfb2c67a075ab592ccab85da0434b10f.jpg",
    badge: "Family"
  },
  {
    id: 101,
    name: "Cola NeXt (1 Ltr)",
    category: "drinks",
    price: 180,
    desc: "1 litre Cola NeXt bottle — great for sharing.",
    img: "https://www.kkmart.pk/cdn/shop/files/4400203.png?v=1730440671&width=1500"
  },
  {
    id: 102,
    name: "Water",
    category: "drinks",
    price: 130,
    desc: "Chilled mineral water bottle.",
    img: "https://www.nestlepurelife.com/pk/sites/g/files/xknfdk411/files/500Active%20%281%29_2.png"
  },
  {
    id: 103,
    name: "300ml Next Cola",
    category: "drinks",
    price: 80,
    desc: "300ml Next Cola — the perfect companion to your meal.",
    img: "https://alfatah.pk/cdn/shop/files/8964001179702_ecc8a60f-03b9-4d72-aefc-7e551918ba9d.jpg?v=1746790421"
  },
  {
    id: 104,
    name: "Next Cola Tin",
    category: "drinks",
    price: 120,
    desc: "Chilled Next Cola in a can.",
    img: "https://www.dsmonline.pk/media/catalog/product/cache/e626209f6586797a49e0d0a395e17e33/c/o/cola_next_250ml_can_1.png"
  },
  {
    id: 105,
    name: "Dip Sauce",
    category: "sides",
    price: 60,
    desc: "Our special dipping sauce — perfect with wings, nuggets and fries.",
    img: "https://dinnersdishesanddesserts.com/wp-content/uploads/2018/02/Spicy-Cajun-Dipping-Sauce-2-square.jpg"
  },
  {
    id: 106,
    name: "Soooper Ice Cream",
    category: "sides",
    price: 60,
    desc: "Classic Soooper ice cream — the perfect sweet treat after your meal.",
    img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&q=80"
  }
];

const defaultDealsData = [
  {
    id: "d7",
    dealNo: "Deal No: 7",
    name: "Small Pizza + Chicken Paratha + Drink",
    price: 900,
    desc: "1 Small Pizza + 1 Chicken Paratha + 1 Reg. Drink + Dip Sauce",
    img: "/deal/deal_7.png",
    tag: "Value"
  },
  {
    id: "d12",
    dealNo: "Deal No: 12",
    name: "Large Pizza + Drink",
    price: 1600,
    desc: "1 Large Pizza + 1 Ltr. Drink",
    img: "/deal/deal_12.png",
    tag: "Best Value"
  },
  {
    id: "d2",
    dealNo: "Deal No: 2",
    name: "Wings + Drink + Dip",
    price: 400,
    desc: "4 Wings + 1 Reg. Drink + Dip Sauce",
    img: "/deal/deal_2.png",
    tag: "Snack"
  },
  {
    id: "d8",
    dealNo: "Deal No: 8",
    name: "Zinger + Small Pizza + Dip",
    price: 900,
    desc: "1 Zinger Burger + 1 Small Pizza + Dip Sauce",
    img: "/deal/deal_8.png",
    tag: "🔥 Hot"
  },
  {
    id: "d6",
    dealNo: "Deal No: 6",
    name: "8 Pcs Wings + Drink + Dip",
    price: 700,
    desc: "8 Pcs Wings + 1 Reg. Drink + Dip Sauce",
    img: "/deal/deal_6.png",
    tag: "Wings"
  },
  {
    id: "d14",
    dealNo: "Deal No: 14",
    name: "2 Small Pizza + 2 Drinks",
    price: 1100,
    desc: "2 Small Pizza + 2 Reg. Drinks",
    img: "/deal/deal_14.png",
    tag: "Couple"
  },
  {
    id: "d9",
    dealNo: "Deal No: 9",
    name: "Medium Pizza + Paratha + Drink",
    price: 1700,
    desc: "1 Medium Pizza + 1 Paratha Roll + 1 Ltr. Drink",
    img: "/deal/deal_9.jpeg",
    tag: "Combo"
  },
  {
    id: "d5",
    dealNo: "Deal No: 5",
    name: "Zinger + Drink + Dip",
    price: 499,
    desc: "1 Zinger Burger + 1 Reg. Drink + Dip Sauce",
    img: "/deal/deal_5.jpg",
    tag: "Burger"
  },
  {
    id: "d13",
    dealNo: "Deal No: 13",
    name: "Paratha Roll + Wings + Small Pizza",
    price: 1100,
    desc: "1 Paratha Roll + 5 Wings + 1 Small Pizza",
    img: "/deal/deal_13.jpg",
    tag: "Family"
  },
  {
    id: "d10",
    dealNo: "Deal No: 10",
    name: "Large Pizza + Wings + Drink",
    price: 1999,
    desc: "1 Large Pizza + 8 Wings + 1.5 Ltr. Drink",
    img: "/deal/deal_10.jpg",
    tag: "🔥 Hot"
  },
  {
    id: "d11",
    dealNo: "Deal No: 11",
    name: "2 Zinger + 2 Chicken Burger + Drink",
    price: 1299,
    desc: "2 Zinger Burger + 2 Chicken Burger + 1 Ltr. Drink",
    img: "/deal/deal_11.jpg",
    tag: "Burger"
  },
  {
    id: "d16",
    dealNo: "Deal No: 16",
    name: "Wings + Nuggets + Medium Pizza",
    price: 1650,
    desc: "5 Wings + 5 Nuggets + 1 Medium Pizza",
    img: "/deal/deal_16.jpg",
    tag: "Combo"
  },
  {
    id: "d115",
    dealNo: "Deal No: 115",
    name: "Medium Pizza + Drink",
    price: 1299,
    desc: "1 Medium Pizza + 1 Ltr. Drink",
    img: "/deal/deal_115.jpg",
    tag: "⭐ Special"
  },
  {
    id: "d114",
    dealNo: "Deal No: 114",
    name: "5 Zinger Burger + Drink",
    price: 1999,
    desc: "5 Zinger Burger + 1 Ltr. Drink",
    img: "/deal/deal_114.jpg",
    tag: "⭐ Special"
  },
  {
    id: "d51",
    dealNo: "Deal No: 51",
    name: "2 Extra Large Pizza + Drink",
    price: 4300,
    desc: "2 Extra Large Pizza + 1.5 Ltr. Drink",
    img: "/deal/deal_51.jpg",
    tag: "🎉 Mega"
  },
  {
    id: "d52",
    dealNo: "Deal No: 52",
    name: "Medium Pizza + Small Pizza",
    price: 1500,
    desc: "1 Medium Pizza + 1 Small Pizza",
    img: "/deal/deal_52.jpg",
    tag: "Family"
  },
  {
    id: "d53",
    dealNo: "Deal No: 53",
    name: "2 Large Pizza + Drink",
    price: 2900,
    desc: "2 Large Pizza + 1.5 Ltr. Drink",
    img: "/deal/deal_53.jpg",
    tag: "Family"
  },
  {
    id: "d54",
    dealNo: "Deal No: 54",
    name: "2 Medium Pizza + Drink",
    price: 1999,
    desc: "2 Medium Pizza + 1 Ltr. Drink",
    img: "/deal/deal_54.jpg",
    tag: "Couple"
  },
  {
    id: "dp1",
    dealNo: "Promo Deal 1",
    name: "Wings + Zinger Burgers + Drink",
    price: 2460,
    desc: "5 Chicken Wings + 3 Zinger Burger + 1.5 Ltr. Drink",
    img: "/deal/promo_deal_1.jpg",
    tag: "🔥 Promo"
  },
  {
    id: "dp2",
    dealNo: "Promo Deal 2",
    name: "Large Pizza + Paratha + Drink",
    price: 2630,
    desc: "1 Large Pizza + 4 Paratha Roll + 1.5 Ltr. Drink",
    img: "/deal/promo_deal_2.jpg",
    tag: "🔥 Promo"
  },
  {
    id: "dp3",
    dealNo: "Promo Deal 3",
    name: "Burgers + Paratha + Wings + Drink",
    price: 3499,
    desc: "4 Zinger Burgers + 4 Paratha Roll + 4 Chicken Wings + 1.5 Ltr. Drink",
    img: "/deal/promo_deal_3.jpg",
    tag: "🎉 Mega"
  },
  {
    id: "dp4",
    dealNo: "Promo Deal 4",
    name: "Pizza Feast + Burger + Drink",
    price: 4700,
    desc: "1 Large Pizza + 1 Medium Pizza + 1 Small Pizza + 4 Zinger Burger + 1.5 Ltr. Drink",
    img: "/deal/promo_deal_4.jpg",
    tag: "🎉 Mega"
  }
];
