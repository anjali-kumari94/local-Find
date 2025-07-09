import soapImg from "./assets/soap.jpg.jpg";
import bakeryImg from "./assets/bakery.jpg.jpg";
import craftsImg from "./assets/crafts.jpg.jpg";
import farmImg from "./assets/farm.jpg.jpg";
import coffeeImg from "./assets/coffee.jpg.jpg";
import artImg from "./assets/art.jpg.jpg";
import honeyImg from "./assets/honey.jpg.jpg";
import cheeseImg from "./assets/cheese.jpg4.jpg";
import recordPlayerImg from "./assets/record-player.jpg.jpg";
import upcycledFurnitureImg from "./assets/furniture.jpg.jpg";
import lavenderSoapImg from "./assets/lavendersoap.jpg";
import mintSoapImg from "./assets/mintsoap.jpg";
import charcoalSoapImg from "./assets/charcoalsoap.jpg";
import roseSoapImg from "./assets/rosesoap.jpg";
import classicRecordPlayerImg from "./assets/classicrecordplayer.jpg";
import portableRecordPlayerImg from "./assets/portablerecordplayer.jpg";
import bluetoothRecordPlayerImg from "./assets/bluetoothrecordplayer.jpg";
import miniRecordPlayerImg from "./assets/minirecordplayer.jpg";
import modernRecordPlayerImg from "./assets/modernrecordplayer.jpg";
import wildflowerHoneyImg from "./assets/honey.jpg2.jpg";
import cloverHoneyImg from "./assets/honey.jpg3.jpg";
import rawHoneyImg from "./assets/honey.jpg.jpg";
import acaciaHoneyImg from "./assets/honey.jpg4.jpg";
import orangeBlossomHoneyImg from "./assets/honey-823614_1280.jpg";
import abstractArtPrintImg from "./assets/art.jpg.jpg";
import natureArtPrintImg from "./assets/natureart.jpg";
import modernArtPrintImg from "./assets/modernart.jpg";
import vintageArtPrintImg from "./assets/vintageart.jpg";
import minimalistArtPrintImg from "./assets/art.jpg2.jpg";
import rusticFurnitureImg from "./assets/furniture.jpg2.jpg";
import modernFurnitureImg from "./assets/furniture.jpg.jpg";
import classicFurnitureImg from "./assets/classicfurniture.jpg";
import ecoFurnitureImg from "./assets/furniture.jpg4.jpg";
import handcraftedFurnitureImg from "./assets/furniture.jpg3.jpg";
import goatCheeseImg from "./assets/cheese.jpg.jpg";
import agedCheddarImg from "./assets/cheese.jpg2.jpg";
import brieCheeseImg from "./assets/cheese.jpg3.jpg";
import blueCheeseImg from "./assets/bluecheese.jpg";
import parmesanCheeseImg from "./assets/parsmencheese.jpg";
import landscapeImg from "./assets/landscape.jpg";

export const businesses = [
  {
    id: "b1",
    name: "Sunrise Bakery",
    type: "Bakery",
    description:
      "Family-owned bakery specializing in artisan breads and pastries.",
    contact: {
      email: "info@sunrisebakery.com",
      phone: "555-123-4567",
    },
    location: "123 Main St, Smalltown, ST 12345",
    featured: true,
  },
  {
    id: "b2",
    name: "Willow Wood Crafts",
    type: "Crafts",
    description: "Handmade wooden crafts and home decor.",
    contact: {
      email: "hello@willowwoodcrafts.com",
      phone: "555-234-5678",
    },
    location: "456 Oak Ave, Smalltown, ST 12345",
    featured: true,
  },
  {
    id: "b3",
    name: "Green Valley Farms",
    type: "Farm",
    description: "Organic produce and farm-fresh eggs.",
    contact: {
      email: "contact@greenvalleyfarms.com",
      phone: "555-345-6789",
    },
    location: "789 Country Rd, Smalltown, ST 12345",
    featured: true,
  },
  {
    id: "b4",
    name: "Bean & Leaf Coffee",
    type: "Coffee Shop",
    description: "Locally roasted coffee and specialty drinks.",
    contact: {
      email: "beans@beanandleaf.com",
      phone: "555-456-7890",
    },
    location: "321 Market St, Smalltown, ST 12345",
    featured: true,
  },
];

export const categories = [
  { id: "c1", name: "Handmade Crafts" },
  { id: "c2", name: "Food" },
  { id: "c3", name: "Beverages" },
  { id: "c4", name: "Art" },
];

const products = [
  {
    id: "p1",
    name: "Handmade Soap",
    description: "Natural handmade soap.",
    price: 12,
    categoryId: "c2",
    businessId: "b1",
    subcategory: "Soap",
    image: soapImg,
  },
  {
    id: "p2",
    name: "Vintage Record Player",
    description: "Classic vintage record player for music lovers.",
    price: 120,
    categoryId: "c2",
    businessId: "b1",
    subcategory: "Record Player",
    image: recordPlayerImg,
  },
  {
    id: "p3",
    name: "Organic Honey",
    description: "Pure, organic honey harvested from local bees.",
    price: 20,
    categoryId: "c2",
    businessId: "b1",
    subcategory: "Honey",
    image: honeyImg,
  },
  {
    id: "p4",
    name: "Local Art Print",
    description: "Beautiful local art print for your home.",
    price: 35,
    categoryId: "c4",
    businessId: "b2",
    subcategory: "Art Print",
    image: abstractArtPrintImg,
  },
  {
    id: "p5",
    name: "Upcycled Furniture",
    description: "Eco-friendly upcycled furniture for your home.",
    price: 200,
    categoryId: "c2",
    businessId: "b3",
    subcategory: "Furniture",
    image: upcycledFurnitureImg,
  },
  {
    id: "p6",
    name: "Artisan Cheese",
    description: "Handcrafted artisan cheese made from local milk.",
    price: 15,
    categoryId: "c2",
    businessId: "b3",
    subcategory: "Cheese",
    image: cheeseImg,
  },
  {
    id: "p7",
    name: "House Blend Coffee Beans",
    description: "Medium roast, whole bean coffee. 12oz bag.",
    price: 12.0,
    categoryId: "c3",
    businessId: "b4",
    subcategory: "Coffee Beans",
    image: coffeeImg,
  },
  {
    id: "p8",
    name: "Iced Vanilla Latte",
    description: "Espresso, milk, and vanilla syrup over ice.",
    price: 4.5,
    categoryId: "c3",
    businessId: "b4",
    subcategory: "Latte",
    image: coffeeImg,
  },
  {
    id: "p9",
    name: "Watercolor Landscape Print",
    description: "8x10 print of original watercolor painting.",
    price: 15.0,
    categoryId: "c4",
    businessId: "b2",
    subcategory: "Art Print",
    image: landscapeImg,
  },
  {
    id: "p10",
    name: "Lavender Soap",
    description: "Soothing lavender-scented handmade soap.",
    price: 14,
    categoryId: "c2",
    businessId: "b1",
    subcategory: "Soap",
    image: lavenderSoapImg,
  },
  {
    id: "p11",
    name: "Mint Soap",
    description: "Refreshing mint handmade soap.",
    price: 13,
    categoryId: "c2",
    businessId: "b1",
    subcategory: "Soap",
    image: mintSoapImg,
  },
  {
    id: "p12",
    name: "Charcoal Soap",
    description: "Detoxifying charcoal handmade soap.",
    price: 15,
    categoryId: "c2",
    businessId: "b1",
    subcategory: "Soap",
    image: charcoalSoapImg,
  },
  {
    id: "p13",
    name: "Rose Soap",
    description: "Romantic rose-scented handmade soap.",
    price: 16,
    categoryId: "c2",
    businessId: "b1",
    subcategory: "Soap",
    image: roseSoapImg,
  },
  // Related products for Vintage Record Player
  {
    id: "p20",
    name: "Classic Record Player",
    description: "Classic style record player for vinyl lovers.",
    price: 130,
    categoryId: "c2",
    businessId: "b1",
    subcategory: "Record Player",
    image: classicRecordPlayerImg,
  },
  {
    id: "p21",
    name: "Portable Record Player",
    description: "Take your music anywhere with this portable record player.",
    price: 110,
    categoryId: "c2",
    businessId: "b1",
    subcategory: "Record Player",
    image: portableRecordPlayerImg,
  },
  {
    id: "p22",
    name: "Bluetooth Record Player",
    description: "Modern record player with Bluetooth connectivity.",
    price: 150,
    categoryId: "c2",
    businessId: "b1",
    subcategory: "Record Player",
    image: bluetoothRecordPlayerImg,
  },
  {
    id: "p23",
    name: "Mini Record Player",
    description: "Compact mini record player for small spaces.",
    price: 90,
    categoryId: "c2",
    businessId: "b1",
    subcategory: "Record Player",
    image: miniRecordPlayerImg,
  },
  {
    id: "p24",
    name: "Modern Record Player",
    description: "Sleek modern design record player.",
    price: 170,
    categoryId: "c2",
    businessId: "b1",
    subcategory: "Record Player",
    image: modernRecordPlayerImg,
  },
  // Related products for Organic Honey
  {
    id: "p30",
    name: "Wildflower Honey",
    description: "Sweet wildflower honey from local bees.",
    price: 22,
    categoryId: "c2",
    businessId: "b1",
    subcategory: "Honey",
    image: wildflowerHoneyImg,
  },
  {
    id: "p31",
    name: "Clover Honey",
    description: "Delicate clover honey, perfect for tea.",
    price: 21,
    categoryId: "c2",
    businessId: "b1",
    subcategory: "Honey",
    image: cloverHoneyImg,
  },
  {
    id: "p32",
    name: "Raw Honey",
    description: "Unfiltered raw honey, straight from the hive.",
    price: 23,
    categoryId: "c2",
    businessId: "b1",
    subcategory: "Honey",
    image: rawHoneyImg,
  },
  {
    id: "p33",
    name: "Acacia Honey",
    description: "Light and floral acacia honey.",
    price: 24,
    categoryId: "c2",
    businessId: "b1",
    subcategory: "Honey",
    image: acaciaHoneyImg,
  },
  {
    id: "p34",
    name: "Orange Blossom Honey",
    description: "Citrusy orange blossom honey.",
    price: 25,
    categoryId: "c2",
    businessId: "b1",
    subcategory: "Honey",
    image: orangeBlossomHoneyImg,
  },
  // Related products for Local Art Print
  {
    id: "p40",
    name: "Abstract Art Print",
    description: "Colorful abstract art print for your wall.",
    price: 40,
    categoryId: "c4",
    businessId: "b2",
    subcategory: "Art Print",
    image: abstractArtPrintImg,
  },
  {
    id: "p41",
    name: "Nature Art Print",
    description: "Beautiful nature-inspired art print.",
    price: 38,
    categoryId: "c4",
    businessId: "b2",
    subcategory: "Art Print",
    image: natureArtPrintImg,
  },
  {
    id: "p42",
    name: "Modern Art Print",
    description: "Modern style art print for contemporary homes.",
    price: 42,
    categoryId: "c4",
    businessId: "b2",
    subcategory: "Art Print",
    image: modernArtPrintImg,
  },
  {
    id: "p43",
    name: "Vintage Art Print",
    description: "Vintage-inspired art print.",
    price: 36,
    categoryId: "c4",
    businessId: "b2",
    subcategory: "Art Print",
    image: vintageArtPrintImg,
  },
  {
    id: "p44",
    name: "Minimalist Art Print",
    description: "Minimalist black and white art print.",
    price: 35,
    categoryId: "c4",
    businessId: "b2",
    subcategory: "Art Print",
    image: minimalistArtPrintImg,
  },
  // Related products for Upcycled Furniture
  {
    id: "p50",
    name: "Rustic Furniture",
    description: "Rustic style upcycled furniture.",
    price: 210,
    categoryId: "c2",
    businessId: "b3",
    subcategory: "Furniture",
    image: rusticFurnitureImg,
  },
  {
    id: "p51",
    name: "Modern Furniture",
    description: "Modern upcycled furniture for your home.",
    price: 220,
    categoryId: "c2",
    businessId: "b3",
    subcategory: "Furniture",
    image: modernFurnitureImg,
  },
  {
    id: "p52",
    name: "Classic Furniture",
    description: "Classic upcycled furniture pieces.",
    price: 230,
    categoryId: "c2",
    businessId: "b3",
    subcategory: "Furniture",
    image: classicFurnitureImg,
  },
  {
    id: "p53",
    name: "Eco Furniture",
    description: "Eco-friendly furniture made from recycled materials.",
    price: 240,
    categoryId: "c2",
    businessId: "b3",
    subcategory: "Furniture",
    image: ecoFurnitureImg,
  },
  {
    id: "p54",
    name: "Handcrafted Furniture",
    description: "Beautiful handcrafted upcycled furniture.",
    price: 250,
    categoryId: "c2",
    businessId: "b3",
    subcategory: "Furniture",
    image: handcraftedFurnitureImg,
  },
  // Related products for Artisan Cheese
  {
    id: "p60",
    name: "Goat Cheese",
    description: "Creamy goat cheese from local farms.",
    price: 18,
    categoryId: "c2",
    businessId: "b3",
    subcategory: "Cheese",
    image: goatCheeseImg,
  },
  {
    id: "p61",
    name: "Aged Cheddar",
    description: "Sharp aged cheddar cheese.",
    price: 19,
    categoryId: "c2",
    businessId: "b3",
    subcategory: "Cheese",
    image: agedCheddarImg,
  },
  {
    id: "p62",
    name: "Brie Cheese",
    description: "Soft and creamy brie cheese.",
    price: 20,
    categoryId: "c2",
    businessId: "b3",
    subcategory: "Cheese",
    image: brieCheeseImg,
  },
  {
    id: "p63",
    name: "Blue Cheese",
    description: "Tangy blue cheese for cheese lovers.",
    price: 21,
    categoryId: "c2",
    businessId: "b3",
    subcategory: "Cheese",
    image: blueCheeseImg,
  },
  {
    id: "p64",
    name: "Parmesan Cheese",
    description: "Aged parmesan cheese, perfect for pasta.",
    price: 22,
    categoryId: "c2",
    businessId: "b3",
    subcategory: "Cheese",
    image: parmesanCheeseImg,
  },
];
export default products;

export const reviews = [
  {
    id: "r1",
    productId: "p1",
    customer: "Alice",
    rating: 5,
    comment: "Best sourdough I've ever had! Perfect crust and flavor.",
  },
  {
    id: "r2",
    productId: "p3",
    customer: "Ben",
    rating: 4,
    comment:
      "Beautiful craftsmanship. The bowl is a centerpiece in my kitchen.",
  },
  {
    id: "r3",
    productId: "p6",
    customer: "Carla",
    rating: 5,
    comment:
      "Eggs are so fresh and tasty. Highly recommend Green Valley Farms.",
  },
  {
    id: "r4",
    productId: "p8",
    customer: "David",
    rating: 4,
    comment: "Delicious latte, just the right amount of sweetness.",
  },
  {
    id: "r5",
    productId: "p9",
    customer: "Ella",
    rating: 5,
    comment: "The print is stunning and arrived quickly. Love it!",
  },
];
