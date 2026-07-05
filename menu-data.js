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
    instagram: "https://www.instagram.com/thebestdaminosofficial",
    tiktok: "https://www.tiktok.com/@thebestdaminosjaranwala",
    whatsapp: "https://wa.me/923025001330"
  }
};

const defaultMenuItems = [
  // ===== PIZZAS =====
  // sizes array: { key, label, inch, price }  — only available sizes listed per pizza
  { id: 12, name: "1 Meter Pizza Laser",    category: "pizza", price: 2999, badge: "🎉 Mega",        desc: "Rs.2999",
    sizes: [ {key:"large",label:"1 Meter",inch:'1 Meter',price:2999} ],
    img: "1 meter.png" },

  { id: 3,  name: "Malai Boti Pizza",       category: "pizza", price: 1100,                          desc: "Medium Rs.1100 | Large Rs.1450 | XL Rs.2250",
    sizes: [ {key:"medium",label:"Medium",inch:'10"',price:1100}, {key:"large",label:"Large",inch:'12"',price:1450}, {key:"xl",label:"XL",inch:'15"',price:2250} ],
    img: "https://dha.cafeela.pk/wp-content/uploads/2021/10/malai-boti-pizza.jpg" },

  { id: 1,  name: "Special Pizza",          category: "pizza", price: 490,  badge: "Chef's Pick",    desc: "Small Rs.490 | Medium Rs.1100 | Large Rs.1450 | XL Rs.2250",
    sizes: [ {key:"small",label:"Small",inch:'9"',price:490}, {key:"medium",label:"Medium",inch:'10"',price:1100}, {key:"large",label:"Large",inch:'12"',price:1450}, {key:"xl",label:"XL",inch:'15"',price:2250} ],
    img: "https://recipesblob.oetker.in/assets/d8a4b00c292a43adbb9f96798e028f01/1272x764/pizza-pollo-arrostojpg.webp" },

  { id: 2,  name: "Super Supreme Pizza",    category: "pizza", price: 490,  badge: "Popular",        desc: "Small Rs.490 | Medium Rs.1100 | Large Rs.1450 | XL Rs.2150",
    sizes: [ {key:"small",label:"Small",inch:'9"',price:490}, {key:"medium",label:"Medium",inch:'10"',price:1100}, {key:"large",label:"Large",inch:'12"',price:1450}, {key:"xl",label:"XL",inch:'15"',price:2150} ],
    img: "https://pizza360.businesswala.pk/assets/uploads/36a47a51215bf36f7cc919cd42a38625.png" },

  { id: 4,  name: "Crown Crust Pizza",      category: "pizza", price: 1600, badge: "Special",        desc: "Large Rs.1600 | XL Rs.2300",
    sizes: [ {key:"large",label:"Large",inch:'12"',price:1600}, {key:"xl",label:"XL",inch:'15"',price:2300} ],
    img: "https://foodplanet.com.pk/wp-content/uploads/2025/09/www.foodplanet.com_.pk-6-1.png" },

  { id: 5,  name: "Lazania Pizza",          category: "pizza", price: 1100,                          desc: "Medium Rs.1100 | Large Rs.1500 | XL Rs.2200",
    sizes: [ {key:"medium",label:"Medium",inch:'10"',price:1100}, {key:"large",label:"Large",inch:'12"',price:1500}, {key:"xl",label:"XL",inch:'15"',price:2200} ],
    img: "https://s.hdnux.com/photos/05/42/55/1452873/4/ratio4x3_1920.jpg" },

  { id: 6,  name: "Double Topping Stuffer", category: "pizza", price: 1400, badge: "New",            desc: "Medium Rs.1400 | Large Rs.2000 | XL Rs.2500",
    sizes: [ {key:"medium",label:"Medium",inch:'10"',price:1400}, {key:"large",label:"Large",inch:'12"',price:2000}, {key:"xl",label:"XL",inch:'15"',price:2500} ],
    img: "https://img1.wsimg.com/isteam/ip/a52bf3e4-cdd6-4ee7-b8ac-02a531625783/Extreme-Deluxe-Pizza-Med.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25" },

  { id: 7,  name: "Kabab Stuffer Pizza",    category: "pizza", price: 1200,                          desc: "Medium Rs.1200 | Large Rs.1750 | XL Rs.2450",
    sizes: [ {key:"medium",label:"Medium",inch:'10"',price:1200}, {key:"large",label:"Large",inch:'12"',price:1750}, {key:"xl",label:"XL",inch:'15"',price:2450} ],
    img: "https://static.tossdown.com/images/bf0f9ee5-3be8-4930-a63b-88195be75af7.webp" },

  { id: 8,  name: "Crazy Pizza",            category: "pizza", price: 1200,                          desc: "Medium Rs.1200 | Large Rs.1550 | XL Rs.2250",
    sizes: [ {key:"medium",label:"Medium",inch:'10"',price:1200}, {key:"large",label:"Large",inch:'12"',price:1550}, {key:"xl",label:"XL",inch:'15"',price:2250} ],
    img: "https://images.deliveryhero.io/image/fd-pk/LH/t73b-listing.jpg" },

  { id: 9,  name: "Kababish Pizza",         category: "pizza", price: 1300,                          desc: "Medium Rs.1300 | Large Rs.1700 | XL Rs.2500",
    sizes: [ {key:"medium",label:"Medium",inch:'10"',price:1300}, {key:"large",label:"Large",inch:'12"',price:1700}, {key:"xl",label:"XL",inch:'15"',price:2500} ],
    img: "https://eatfresh.businesswala.pk/assets/uploads/1460_b13ba76b1fd1870c86303e15dae85d23.png" },

  { id: 10, name: "Square Pizza",           category: "pizza", price: 1549, badge: "Large",          desc: "Large Rs.1549",
    sizes: [ {key:"large",label:"Large",inch:'12"',price:1549} ],
    img: "https://images.deliveryhero.io/image/fd-pk/LH/xum0-listing.jpg" },

  { id: 11, name: "Chef Star Pizza",        category: "pizza", price: 1700, badge: "Chef's Special", desc: "Large Rs.1700",
    sizes: [ {key:"large",label:"Large",inch:'12"',price:1700} ],
    img: "chef star.png" },

  { id: 13, name: "On Choice Value Pizza",  category: "pizza", price: 1850, badge: "Special",        desc: "Large Rs.1850",
    sizes: [ {key:"large",label:"Large",inch:'12"',price:1850} ],
    img: "on choice value.png" },

  // ===== BURGERS =====
  { id: 20, name: "Zinger Burger",        category: "burger", price: 370, badge: "Best Seller", desc: "Crispy zinger chicken fillet with fresh veggies. Rs.370", img: "https://www.eatingonadime.com/wp-content/uploads/2024/03/200KB-Zinger-Burger-8-500x375.jpg" },
  { id: 21, name: "Chicken Patty Burger", category: "burger", price: 330,                       desc: "Juicy chicken patty with fresh veggies. Rs.330", img: "https://static.toiimg.com/thumb/75675148.cms?width=573&height=430" },
  { id: 22, name: "Damino's Burger",      category: "burger", price: 600,                       desc: "Our signature burger with secret sauce. Rs.600", img: "https://static.vecteezy.com/system/resources/thumbnails/075/025/924/small/crispy-chicken-burger-with-sesame-seed-bun-and-png.png" },
  { id: 23, name: "Double Patty Burger",  category: "burger", price: 580,                       desc: "Double patty stacked high with cheese and all the fixings. Rs.580", img: "https://png.pngtree.com/png-clipart/20240310/original/pngtree-tasty-double-patty-burger-isolated-png-image_14552993.png" },
  { id: 24, name: "Pizza Burger",         category: "burger", price: 550,                       desc: "A burger that tastes like pizza — best of both worlds. Rs.550", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-4hIpZGXX4p8jrsn33CwqVKaIkM2XvU8OyA&s" },

  // ===== SHAWARMA =====
  { id: 30, name: "Chicken Shawarma", category: "shawarma", price: 290, badge: "Best Value", desc: "Marinated chicken in soft bread with garlic sauce. Rs.290", img: "https://foxeslovelemons.com/wp-content/uploads/2023/06/Chicken-Shawarma-8.jpg" },
  { id: 31, name: "Zinger Shawarma",  category: "shawarma", price: 350,                      desc: "Crispy zinger chicken in shawarma wrap. Rs.350", img: "https://media-cdn.tripadvisor.com/media/photo-s/1a/44/c4/c8/zinger-shawarma.jpg" },
  { id: 32, name: "Kebab Shawarma",   category: "shawarma", price: 350,                      desc: "Spiced kebab wrapped in soft bread with salad. Rs.350", img: "https://static.vecteezy.com/system/resources/previews/044/560/897/large_2x/delicious-shawarma-kebab-photo.jpeg" },
  { id: 33, name: "Grilled Shawarma", category: "shawarma", price: 400,                      desc: "Flame-grilled chicken shawarma with garlic sauce. Rs.400", img: "https://i.ytimg.com/vi/QqumNHVG_j8/maxresdefault.jpg" },

  // ===== OTHERS =====
  { id: 34, name: "Tortilla Wrap",    category: "shawarma", price: 650, badge: "Special", desc: "Grilled chicken in flour tortilla with fresh salad. Rs.650", img: "https://mojo.generalmills.com/api/public/content/ayg_qoUlKUWlYn7PNiSlnw_webp_base.webp?v=292f8726&t=191ddcab8d1c415fa10fa00a14351227" },
  { id: 35, name: "Dip Sauce",        category: "sides",    price: 60,                    desc: "Special dipping sauce. Rs.60", img: "https://dinnersdishesanddesserts.com/wp-content/uploads/2018/02/Spicy-Cajun-Dipping-Sauce-2-square.jpg" },

  // ===== SANDWICH =====
  { id: 40, name: "Mexican Sandwich", category: "sandwich", price: 550, desc: "Mexican-spiced chicken sandwich with salsa. Rs.550", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRILhlOYaelcLqZPd0H_tHKpmXC8cGlTzMkNw&s" },
  { id: 41, name: "Pizza Sandwich",   category: "sandwich", price: 550, desc: "Pizza-flavored sandwich with mozzarella. Rs.550", img: "https://vaya.in/recipes/wp-content/uploads/2019/02/Pizza-Sandwich.jpg" },
  { id: 42, name: "Spring Roll",      category: "sandwich", price: 470, desc: "Crispy spring rolls filled with spiced chicken. Rs.470", img: "https://thaicaliente.com/wp-content/uploads/2020/09/Spring-Roll-Feature.jpg" },

  // ===== HOT WINGS =====
  { id: 50, name: "Fried Wings (5 Pcs)",  category: "wings", price: 350, badge: "5 Pcs",  desc: "5 pieces golden crispy fried chicken wings. Rs.350", img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&q=80" },
  { id: 51, name: "Fried Wings (10 Pcs)", category: "wings", price: 700, badge: "10 Pcs", desc: "10 pieces golden crispy fried chicken wings. Rs.700", img: "https://thenightowlchef.com/wp-content/uploads/2025/01/crispy-baked-chicken-wings-featured-500x500.jpg" },
  { id: 52, name: "Sweet Chilli Wings",   category: "wings", price: 400,                  desc: "Sticky sweet chilli glazed wings. Rs.400", img: "https://www.staysnatched.com/wp-content/uploads/2022/02/sweet-chili-wings-recipe-2-1.jpg" },
  { id: 53, name: "Oven Baked Wings",     category: "wings", price: 400,                  desc: "Juicy oven-baked wings. Rs.400", img: "https://ifoodblogger.com/wp-content/uploads/2016/10/How-to-bake-chicken-wings-1.jpg" },

  // ===== NUGGETS =====
  { id: 70, name: "Nuggets (5 Pcs)",  category: "wings", price: 350, badge: "5 Pcs",  desc: "5 tender golden chicken nuggets. Rs.350", img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/9/12/1/FN_Picky-Eaters-Chicken-Nuggets_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1383770571120.webp" },
  { id: 71, name: "Nuggets (10 Pcs)", category: "wings", price: 700, badge: "10 Pcs", desc: "10 tender golden chicken nuggets. Rs.700", img: "https://www.budgetbytes.com/wp-content/uploads/2019/05/Homemade-Baked-Chicken-Nuggets-Front-Dip.jpg" },

  // ===== PARATHA =====
  { id: 60, name: "Zinger Paratha",        category: "paratha", price: 350,               desc: "Crispy zinger chicken in a flaky desi paratha. Rs.350", img: "https://i.ytimg.com/vi/11xqUIgdprM/maxresdefault.jpg" },
  { id: 61, name: "Zinger Cheese Paratha", category: "paratha", price: 470, badge: "Cheesy", desc: "Zinger chicken with melted cheese in crispy paratha. Rs.470", img: "https://www.foodfusion.com/wp-content/uploads/2019/05/Crispy-Chicken-roll-Recipe-by-Food-fusion-4.jpg" },

  // ===== PASTA =====
  { id: 80, name: "Damino's Pasta", category: "pasta", price: 370, badge: "F1/F2",    desc: "Signature pasta in rich tomato sauce. F1 Rs.370 | F2 Rs.750", img: "https://cupfulofkale.com/wp-content/uploads/2020/10/Vegan-Sausage-Pasta-Bake-1-683x1024.jpg" },
  { id: 81, name: "Flaming Pasta",  category: "pasta", price: 370, badge: "🔥 Spicy", desc: "Spicy pasta with fiery kick. F1 Rs.370 | F2 Rs.750", img: "https://i.ytimg.com/vi/cH9no3s7VXI/hq720.jpg" },
  { id: 82, name: "Macroni Pasta",  category: "pasta", price: 370,                    desc: "Creamy mac and cheese style pasta. F1 Rs.370 | F2 Rs.750", img: "https://vismaifood.com/storage/app/uploads/public/7b2/49e/d12/thumb__700_0_0_0_auto.jpg" },
  { id: 83, name: "Crunchi Pasta",  category: "pasta", price: 370,                    desc: "Pasta with satisfying crunch. F1 Rs.370 | F2 Rs.750", img: "https://i.ytimg.com/vi/3BGQCpPwO6E/hq720.jpg" },
  { id: 84, name: "Alfredo Pasta",  category: "pasta", price: 500,                    desc: "Creamy white Alfredo sauce pasta. F1 Rs.500 | F2 Rs.999", img: "https://www.shutterstock.com/image-photo/delicious-pasta-bake-melted-cheese-260nw-2742114191.jpg" },
  { id: 86, name: "Lasania Pasta",  category: "pasta", price: 500,                    desc: "Lasagna-style baked pasta. F1 Rs.500 | F2 Rs.999", img: "https://www.shutterstock.com/image-photo/delicious-pasta-bake-melted-cheese-260nw-2742114191.jpg" },
  { id: 87, name: "White Pasta",    category: "pasta", price: 500,                    desc: "Creamy white sauce pasta. F1 Rs.500 | F2 Rs.999", img: "https://vismaifood.com/storage/app/uploads/public/7b2/49e/d12/thumb__700_0_0_0_auto.jpg" },

  // ===== FRIES & SIDES =====
  { id: 90,  name: "Medium Fries",        category: "sides", price: 260,                  desc: "Golden crispy fries. Rs.260", img: "https://lashawarma.ca/wp-content/uploads/2024/10/Fries.jpg" },
  { id: 91,  name: "Large Fries",         category: "sides", price: 380, badge: "Large",  desc: "Extra large crispy fries. Rs.380", img: "https://cdn.dotpe.in/longtail/store-items/5884343/sh5qclzb.jpeg" },
  // ===== ICE CREAM =====
  { id: 120, name: "Ice Cream (1 Scoop)", category: "icecream", price: 250,                  desc: "1 scoop of delicious ice cream. Rs.250", img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&q=80" },
  { id: 121, name: "Ice Cream (2 Scoop)", category: "icecream", price: 500, badge: "Double", desc: "2 scoops of delicious ice cream. Rs.500", img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&q=80" },

  // ===== DRINKS =====
  { id: 100, name: "Cola NeXt (1.5 Ltr)", category: "drinks", price: 220, badge: "Family", desc: "1.5 litre Cola NeXt. Rs.220", img: "https://static-01.daraz.pk/p/dfb2c67a075ab592ccab85da0434b10f.jpg" },
  { id: 101, name: "Cola NeXt (1 Ltr)",   category: "drinks", price: 180,                  desc: "1 litre Cola NeXt. Rs.180", img: "https://www.kkmart.pk/cdn/shop/files/4400203.png?v=1730440671&width=1500" },
  { id: 102, name: "Water",               category: "drinks", price: 130,                  desc: "Chilled mineral water. Rs.130", img: "https://www.nestlepurelife.com/pk/sites/g/files/xknfdk411/files/500Active%20%281%29_2.png" },
  { id: 103, name: "300ml Next Cola",     category: "drinks", price: 80,                   desc: "300ml Next Cola. Rs.80", img: "https://alfatah.pk/cdn/shop/files/8964001179702_ecc8a60f-03b9-4d72-aefc-7e551918ba9d.jpg?v=1746790421" },
  { id: 104, name: "Next Cola Tin",       category: "drinks", price: 120,                  desc: "Chilled Next Cola tin can. Rs.120", img: "https://www.dsmonline.pk/media/catalog/product/cache/e626209f6586797a49e0d0a395e17e33/c/o/cola_next_250ml_can_1.png" },
  { id: 105, name: "Dip Sauce",           category: "sides",  price: 60,                   desc: "Special dipping sauce. Rs.60", img: "https://dinnersdishesanddesserts.com/wp-content/uploads/2018/02/Spicy-Cajun-Dipping-Sauce-2-square.jpg" },

  // ===== SHAKES =====
  { id: 110, name: "Mint Margarita",   category: "shake", price: 350, badge: "Shake", desc: "Refreshing mint margarita shake. Rs.350", img: "chinese/Mint Margrita.png" },
  { id: 111, name: "Mango Shake",      category: "shake", price: 350, badge: "Shake", desc: "Thick creamy mango shake. Rs.350", img: "chinese/Mango Shake.png" },
  { id: 112, name: "Strawberry Shake", category: "shake", price: 350, badge: "Shake", desc: "Sweet and creamy strawberry milkshake. Rs.350", img: "chinese/Strawberry Shake.png" },
  { id: 113, name: "Ice Cream Shake",  category: "shake", price: 550, badge: "Shake", desc: "Rich ice cream blended shake. Rs.550", img: "chinese/ice cream Shake.png" },
  { id: 114, name: "Banana Shake",     category: "shake", price: 350, badge: "Shake", desc: "Creamy banana milkshake. Rs.350", img: "chinese/Banana Shake.png" },
  { id: 115, name: "Apple Shake",      category: "shake", price: 350, badge: "Shake", desc: "Fresh apple blended shake. Rs.350", img: "chinese/Apple Shake.png" },

  // ===== CHINESE DISHES =====
  { id: 130, name: "Russian Salad",        category: "chinese", price: 850,  desc: "Classic creamy Russian salad. Rs.850", img: "chinese/salad.png" },
  { id: 131, name: "Tarragon Steak",       category: "chinese", price: 1100, desc: "Tender steak with tarragon sauce. Rs.1100", img: "chinese/taragon steak.png" },
  { id: 132, name: "Broken Steak",         category: "chinese", price: 1200, desc: "Juicy broken steak. Rs.1200", img: "chinese/broken steak.png" },
  { id: 133, name: "Italian Steak",        category: "chinese", price: 1200, desc: "Italian-style seasoned steak. Rs.1200", img: "chinese/italian steak.png" },
  { id: 134, name: "Chomian",              category: "chinese", price: 999,  desc: "Classic chow mein noodles with chicken. Rs.999", img: "chinese/chomian.png" },
  { id: 135, name: "Manchorian",           category: "chinese", price: 999,  desc: "Spicy Manchurian chicken in tangy sauce. Rs.999", img: "chinese/manchorian.png" },
  { id: 136, name: "Tender Chicken",       category: "chinese", price: 1200, desc: "Soft tender chicken in Chinese-style sauce. Rs.1200", img: "chinese/tender chicken.png" },
  { id: 137, name: "Chicken Cheese Stick", category: "chinese", price: 1200, desc: "Crispy chicken cheese sticks. Rs.1200", img: "chinese/chicken cheese sticks.png" },
  { id: 138, name: "Chicken Cotton Blue",  category: "chinese", price: 1200, desc: "Chicken Cordon Bleu — stuffed with cheese. Rs.1200", img: "chinese/chicken cotton blue.png" },
  { id: 139, name: "Chicken Chili Dry",    category: "chinese", price: 1200, desc: "Dry chili chicken — crispy and spicy. Rs.1200", img: "chinese/chicken Chilli dry.png" },
  { id: 140, name: "Egg Fried Rice",       category: "chinese", price: 500,  desc: "Classic egg fried rice. Rs.500", img: "chinese/Egg fried rice.png" },
  { id: 141, name: "Masala Fried Rice",    category: "chinese", price: 500,  desc: "Spiced masala fried rice. Rs.500", img: "chinese/massala fried rice.png" },
  { id: 142, name: "Sandwich Grilled",     category: "chinese", price: 550,  desc: "Grilled sandwich. Rs.550", img: "chinese/grilled sandwich.png" },
  { id: 143, name: "Club Sandwich",        category: "chinese", price: 550,  desc: "Classic club sandwich. Rs.550", img: "chinese/club sandwich.png" },
  { id: 144, name: "Chicken Sandwich",     category: "chinese", price: 550,  desc: "Grilled chicken sandwich. Rs.550", img: "chinese/chicken sandwich.png" }
];

const defaultDealsData = [
  { id: "d7",       dealNo: "Deal No: 7",       name: "Small Pizza + Chicken Paratha + Drink",    price: 900,  desc: "1 Small Pizza + 1 Chicken Paratha + 1 Reg. Drink + Dip Sauce",                              img: "deal/deal_7.png",       tag: "Value" },
  { id: "d12",      dealNo: "Deal No: 12",      name: "Large Pizza + Drink",                      price: 1600, desc: "1 Large Pizza + 1 Ltr. Drink",                                                              img: "deal/deal_12.png",      tag: "Best Value" },
  { id: "d2",       dealNo: "Deal No: 2",       name: "Wings + Drink + Dip",                      price: 400,  desc: "4 Wings + 1 Reg. Drink + Dip Sauce",                                                        img: "deal/deal_2.png",       tag: "Snack" },
  { id: "d8",       dealNo: "Deal No: 8",       name: "Zinger + Small Pizza + Dip",               price: 900,  desc: "1 Zinger Burger + 1 Small Pizza + 1 Reg. Drink + Dip Sauce",                               img: "deal/deal_8.png",       tag: "🔥 Hot" },
  { id: "d6",       dealNo: "Deal No: 6",       name: "8 Pcs Wings + Drink + Dip",                price: 700,  desc: "8 Pcs Wings + 1 Reg. Drink + Dip Sauce",                                                    img: "deal/deal_6.png",       tag: "Wings" },
  { id: "d14",      dealNo: "Deal No: 14",      name: "Paratha + Wings + Small Pizza",            price: 1100, desc: "1 Paratha Roll + 5 Hot Wings + 1 Small Pizza",                                              img: "deal/deal_14.png",      tag: "Combo" },
  { id: "d9",       dealNo: "Deal No: 9",       name: "Medium Pizza + Paratha Roll + Drink",      price: 1700, desc: "1 Medium Pizza + 1 Paratha Roll + 1 Ltr. Drink",                                           img: "deal/deal_9.jpeg",      tag: "Combo" },
  { id: "d5",       dealNo: "Deal No: 5",       name: "Zinger + Drink + Dip",                     price: 499,  desc: "1 Zinger Burger + 1 Reg. Drink + Dip Sauce",                                               img: "deal/deal_5.jpg",       tag: "Burger" },
  { id: "d13",      dealNo: "Deal No: 13",      name: "Paratha Roll + Wings + Small Pizza",       price: 1100, desc: "1 Paratha Roll + 5 Wings + 1 Small Pizza",                                                  img: "deal/deal_13.jpg",      tag: "Family" },
  { id: "d10",      dealNo: "Deal No: 10",      name: "Large Pizza + Wings + Drink",              price: 1999, desc: "1 Large Pizza + 8 Fried Wings + 1.5 Ltr. Drink",                                           img: "deal/deal_10.jpg",      tag: "🔥 Hot" },
  { id: "d11",      dealNo: "Deal No: 11",      name: "2 Zinger + 2 Chicken Burger + Drink",     price: 1299, desc: "2 Zinger Burger + 2 Chicken Burger + 1 Ltr. Drink",                                        img: "deal/deal_11.jpg",      tag: "Burger" },
  { id: "d16",      dealNo: "Deal No: 16",      name: "Wings + Nuggets + Medium Pizza",           price: 1650, desc: "5 Hot Wings + 5 Nuggets + 1 Medium Pizza",                                                  img: "deal/deal_16.jpg",      tag: "Combo" },
  { id: "d115",     dealNo: "Deal No: 115",     name: "Medium Pizza + Drink",                     price: 1299, desc: "1 Medium Pizza + 1 Ltr. Drink",                                                             img: "deal/deal_115.jpg",     tag: "⭐ Special" },
  { id: "d114",     dealNo: "Deal No: 114",     name: "5 Zinger Burger + Drink",                  price: 1999, desc: "5 Zinger Burger + 1 Ltr. Drink",                                                            img: "deal/deal_114.jpg",     tag: "⭐ Special" },
  { id: "d51",      dealNo: "Deal No: 51",      name: "2 Extra Large Pizza + Drink",              price: 4300, desc: "2 Extra Large Pizza + 1.5 Ltr. Drink",                                                      img: "deal/deal_51.jpg",      tag: "🎉 Mega" },
  { id: "d52",      dealNo: "Deal No: 52",      name: "Medium Pizza + Small Pizza",               price: 1500, desc: "1 Medium Pizza + 1 Small Pizza",                                                            img: "deal/deal_52.jpg",      tag: "Family" },
  { id: "d53",      dealNo: "Deal No: 53",      name: "2 Large Pizza + Drink",                    price: 2900, desc: "2 Large Pizza + 1.5 Ltr. Drink",                                                            img: "deal/deal_53.jpg",      tag: "Family" },
  { id: "d54",      dealNo: "Deal No: 54",      name: "2 Medium Pizza + Drink",                   price: 1999, desc: "2 Medium Pizza + 1 Ltr. Drink",                                                             img: "deal/deal_54.jpg",      tag: "Couple" },
  { id: "d15",      dealNo: "Deal No: 15",      name: "2 Small Pizza + 2 Reg Drink",              price: 1080, desc: "2 Small Pizza + 2 Reg. Drink",                                                              img: "deal/deal_7.png",       tag: "Couple" },
  { id: "d_azaadi", dealNo: "Azaadi Deal",      name: "Wings + Nuggets + Pizza + Pasta + Zinger", price: 1700, desc: "2 Hot Wings + 2 Nuggets + 2 Reg. Drink + 1 Small Pizza + 1 Fries + 1 F1 Pasta + 1 Zinger", img: "deal/deal_16.jpg",      tag: "🎉 Mega" },
  { id: "d_square", dealNo: "Square Platter",   name: "Oven Baked Wings + Spring Roll + Fries",   price: 850,  desc: "6 Oven Baked Wings + 2 Pcs Spring Roll + Fries with Dip Sauce",                            img: "deal/deal_2.png",       tag: "Platter" },
  { id: "d_cp1",    dealNo: "Chinese Platter 1",name: "Manchorian + Egg Rice + Tampora Chicken",  price: 999,  desc: "Manchorian + Egg Rice + Tampora Chicken 2 Pcs",                                            img: "deal/deal_10.jpg",      tag: "Chinese" },
  { id: "d_cp2",    dealNo: "Chinese Platter 2",name: "Chomian + Chili Dry + Egg Rice",           price: 999,  desc: "Chomian + Chili Dry + Egg Rice",                                                            img: "deal/deal_11.jpg",      tag: "Chinese" },
  { id: "dp1",      dealNo: "Promo Deal 1",     name: "Wings + Zinger Burgers + Drink",           price: 2460, desc: "5 Chicken Wings + 3 Zinger Burger + 1.5 Ltr. Drink",                                       img: "deal/promo_deal_1.jpg", tag: "🔥 Promo" },
  { id: "dp2",      dealNo: "Promo Deal 2",     name: "Large Pizza + Paratha + Drink",            price: 2630, desc: "1 Large Pizza + 4 Paratha Roll + 1.5 Ltr. Drink",                                          img: "deal/promo_deal_2.jpg", tag: "🔥 Promo" },
  { id: "dp3",      dealNo: "Promo Deal 3",     name: "Burgers + Paratha + Wings + Drink",        price: 3499, desc: "4 Zinger Burger + 4 Paratha Roll + 4 Chicken Wings + 1.5 Ltr. Drink",                     img: "deal/promo_deal_3.jpg", tag: "🎉 Mega" },
  { id: "dp4",      dealNo: "Promo Deal 4",     name: "Pizza Feast + Burger + Drink",             price: 4700, desc: "1 Large Pizza + 1 Medium Pizza + 1 Small Pizza + 4 Zinger Burger + 1.5 Ltr. Drink",      img: "deal/promo_deal_4.jpg", tag: "🎉 Mega" }
];
