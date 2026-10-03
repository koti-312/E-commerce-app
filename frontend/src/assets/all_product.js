import p1_img from './product1.avif'
import p2_img from './product2.avif'
import p3_img from './product3.avif'
import p4_img from './product4.avif'
import p5_img from './product5.avif'
import p6_img from './product6.avif'
import p7_img from './product7.avif'
import p8_img from './product8.avif'
import p9_img from './product9.avif'
import p10_img from './product10.avif'
import p11_img from './product11.png'
import p12_img from './product12.png'
import p13_img from './product13.png'
import p14_img from './product14.png'
import p15_img from './product15.jpg'
import p16_img from './product16.webp'
import p17_img from './product17.png'
import p18_img from './product18.webp'
import p19_img from './product19.webp'
import p20_img from './product20.png'
import p21_img from './bag.png'
import p22_img from './airpods.png'
import p23_img from './watch.avif'
import p24_img from './iphone.jpg'
import p25_img from './Realme phone.webp'
import p26_img from './product21.avif'
import p27_img from './product22.avif'
import p28_img from './product23.png'
import p29_img from './product24.webp'
import p30_img from './sky bag.png'
import p31_img from './shoes.avif'
import p32_img from './speaker.png'
import p33_img from './suitcase.png'
import p34_img from './mouse.png'
import p35_img from './image.png'
import p36_img from './cap.png'
import pro1_img from './mens1.webp'
import pro2_img from './mens2.webp'
import pro3_img from './mens3.webp'
import pro4_img from './mens4.webp'

let all_product = [
    {
        id: 1,
        name: "Black Graphic Printed Sweatshirt",
        category: "mens",
        image: p1_img,
        price: 640.0,
        description: "A relaxed-fit black sweatshirt featuring a bold graphic print, perfect for casual streetwear looks. Soft fleece fabric keeps you warm and comfortable all day."
    },
    {
        id: 2,
        name: "Grey Streetwear Printed Sweatshirt",
        category: "mens",
        image: p2_img,
        price: 800.0,
        description: "A trendy grey sweatshirt with an eye-catching streetwear print, designed for an urban, laid-back style. Breathable fabric makes it ideal for everyday wear."
    },
    {
        id: 3,
        name: "Regular Fit Hooded Puffer Jacket",
        category: "mens",
        image: p3_img,
        price: 590.0,
        description: "Stay warm in style with this regular-fit hooded puffer jacket. Lightweight insulation and a cozy hood make it perfect for chilly outings and winter layering."
    },
    {
        id: 4,
        name: "Men's Foil Printed Kurta",
        category: "mens",
        image: p4_img,
        price: 1000.0,
        description: "An elegant foil-printed kurta that blends traditional charm with a modern finish. Soft fabric and a comfortable fit make it great for festive occasions."
    },
    {
        id: 5,
        name: "Casual Denim Dress",
        category: "mens",
        image: p5_img,
        price: 1500.0,
        description: "A versatile denim outfit built for everyday comfort and durability. Sturdy denim fabric with a classic fit suits both casual and semi-formal settings."
    },
    {
        id: 6,
        name: "Men's Regular Fit Long Kurta",
        category: "mens",
        image: p6_img,
        price: 950.0,
        description: "A classic long kurta with a regular fit, offering timeless style for festive and ethnic occasions. Breathable fabric ensures all-day comfort."
    },
    {
        id: 7,
        name: "Men's Striped Regular Fit Shirt",
        category: "mens",
        image: p7_img,
        price: 700.0,
        description: "A smart striped shirt with a regular fit, perfect for office wear or casual outings. Soft cotton-blend fabric keeps you comfortable through the day."
    },
    {
        id: 8,
        name: "Men's Regular Fit Short Kurta",
        category: "mens",
        image: p8_img,
        price: 1200.0,
        description: "A short kurta with a clean, regular fit — easy to style for both casual days and small celebrations. Lightweight fabric for year-round comfort."
    },
    {
        id: 9,
        name: "Men's Regular Fit Bomber Jacket",
        category: "mens",
        image: p9_img,
        price: 2000.0,
        description: "A sleek bomber jacket with a regular fit, adding an edgy touch to any outfit. Durable fabric and ribbed cuffs give it a sporty, stylish finish."
    },
    {
        id: 10,
        name: "Short Boys' Kurta",
        category: "mens",
        image: p10_img,
        price: 540.0,
        description: "A comfortable short kurta designed for everyday ease, ideal for casual wear or light festive occasions. Soft fabric keeps it gentle on the skin."
    },
    {
        id: 11,
        name: "Elegant Saree",
        category: "womens",
        image: p11_img,
        price: 950.0,
        description: "A beautifully designed saree that blends tradition with elegance, perfect for weddings and festive events. Rich fabric and fine detailing make it stand out."
    },
    {
        id: 12,
        name: "Short Kurti Sharara Set",
        category: "womens",
        image: p12_img,
        price: 1000.0,
        description: "A stylish short kurti paired with a flowing sharara, offering a graceful silhouette for festive occasions. Comfortable fabric ensures ease of movement."
    },
    {
        id: 13,
        name: "Designer Lehenga",
        category: "womens",
        image: p13_img,
        price: 1600.0,
        description: "A stunning designer lehenga crafted for special occasions, featuring intricate detailing and a flattering silhouette that turns heads."
    },
    {
        id: 14,
        name: "Three-Piece Anarkali Dress",
        category: "womens",
        image: p14_img,
        price: 870.0,
        description: "A graceful three-piece Anarkali set combining elegance and comfort, ideal for festive gatherings and celebrations."
    },
    {
        id: 15,
        name: "Frock Wedding Dress",
        category: "womens",
        image: p15_img,
        price: 1000.0,
        description: "A charming frock-style wedding dress designed to make you shine at celebrations, with flattering layers and a comfortable fit."
    },
    {
        id: 16,
        name: "Casual Denim Dress",
        category: "womens",
        image: p16_img,
        price: 1300.0,
        description: "A chic denim dress perfect for casual outings, offering a relaxed fit with a stylish, everyday-ready look."
    },
    {
        id: 17,
        name: "Full-Sleeve Maxi Dress",
        category: "womens",
        image: p17_img,
        price: 3000.0,
        description: "An elegant full-sleeve maxi dress with a flowing silhouette, perfect for both evening events and sophisticated day wear."
    },
    {
        id: 18,
        name: "Elegant Saree",
        category: "womens",
        image: p18_img,
        price: 999,
        description: "A graceful saree with fine craftsmanship, suited for weddings, festivals, and traditional occasions where elegance matters most."
    },
    {
        id: 19,
        name: "Pink Printed Saree",
        category: "womens",
        image: p19_img,
        price: 899.0,
        description: "A vibrant pink printed saree that adds a cheerful touch to any festive look, crafted from soft, comfortable fabric."
    },
    {
        id: 20,
        name: "Elegant Maxi Dress",
        category: "womens",
        image: p20_img,
        price: 1489.0,
        description: "A refined maxi dress with clean lines and a comfortable flow, perfect for parties, dinners, or special evenings out."
    },
    {
        id: 21,
        name: "Men's Messenger Laptop Bag",
        category: "gadgets",
        image: p21_img,
        price: 3500.0,
        description: "A durable messenger-style laptop bag with padded compartments to protect your device, ideal for daily commutes and office use."
    },
    {
        id: 22,
        name: "TWS Wireless Bluetooth Earbuds",
        category: "gadgets",
        image: p22_img,
        price: 1400.0,
        description: "Compact true-wireless earbuds delivering clear sound and a secure fit, perfect for workouts, calls, and everyday listening."
    },
    {
        id: 23,
        name: "Ultra Smartwatch with 3nm Processor",
        category: "gadgets",
        image: p23_img,
        price: 999.0,
        description: "A feature-packed smartwatch with a fast processor, fitness tracking, and notifications — built to keep you connected on the go."
    },
    {
        id: 24,
        name: "Apple iPhone 12 Pro",
        category: "gadgets",
        image: p24_img,
        price: 60000.0,
        description: "A powerful and reliable smartphone with a stunning display, pro-grade camera system, and smooth all-day performance."
    },
    {
        id: 25,
        name: "Realme P3x 5G – 128GB, 6GB RAM",
        category: "gadgets",
        image: p25_img,
        price: 13599.0,
        description: "A value-packed 5G smartphone with ample storage and RAM for smooth multitasking, gaming, and everyday use."
    },
    {
        id: 26,
        name: "Men's Washed Mid-Rise Jogger Jeans",
        category: "mens",
        image: p26_img,
        price: 820.0,
        description: "Comfortable mid-rise jogger jeans with a washed finish, combining casual style with flexible, all-day wearability."
    },
    {
        id: 27,
        name: "Levi's Men's Mid-Wash Slim Fit Jeans",
        category: "mens",
        image: p27_img,
        price: 420.0,
        description: "Classic slim-fit jeans in a mid-wash finish, offering a timeless look that pairs well with any casual outfit."
    },
    {
        id: 28,
        name: "Elegant Half Saree",
        category: "womens",
        image: p28_img,
        price: 670.0,
        description: "A graceful half saree perfect for festive occasions, blending traditional style with a comfortable, easy-to-drape design."
    },
    {
        id: 29,
        name: "Elegant Frock Dress",
        category: "womens",
        image: p29_img,
        price: 900.0,
        description: "A beautifully designed frock dress offering a flattering fit and elegant finish, ideal for celebrations and outings."
    },
    {
        id: 30,
        name: "Large 35L Backpack – School & Office",
        category: "gadgets",
        image: p30_img,
        price: 900.0,
        description: "A spacious 35L backpack with multiple compartments, built for durability and comfort — great for school, office, or travel."
    },
    {
        id: 31,
        name: "ASIAN Men's Dominator-03 Running Shoes",
        category: "gadgets",
        image: p31_img,
        price: 1900.0,
        description: "Lightweight running shoes with cushioned soles and breathable material, designed for comfort during workouts and daily wear."
    },
    {
        id: 32,
        name: "Breeze 5 25W Portable Bluetooth Speaker",
        category: "gadgets",
        image: p32_img,
        price: 2239.0,
        description: "A compact 25W Bluetooth speaker delivering punchy sound and long battery life, perfect for parties, travel, or home use."
    },
    {
        id: 33,
        name: "Men's Colourblock Laptop Roller Case",
        category: "gadgets",
        image: p33_img,
        price: 999.0,
        description: "A sturdy roller laptop case with a stylish colourblock design, making travel and daily commutes easier and more organized."
    },
    {
        id: 34,
        name: "Zebronics Cheetah Wireless Mouse",
        category: "gadgets",
        image: p34_img,
        price: 8990.0,
        description: "A precise and responsive wireless mouse built for smooth navigation, ideal for work, browsing, and gaming."
    },
    {
        id: 35,
        name: "Men's Full-Rim Square Glasses",
        category: "gadgets",
        image: p35_img,
        price: 1000.0,
        description: "Stylish full-rim square glasses that add a sharp, confident look to any outfit, combining comfort with everyday durability."
    },
    {
        id: 36,
        name: "Men's Camo Print Baseball Cap",
        category: "gadgets",
        image: p36_img,
        price: 420.0,
        description: "A casual camo-print baseball cap offering sun protection and a sporty finish to complete your everyday look."
    },
    {
        id: 37,
        name: "Floral Printed Shirt",
        category: "shop",
        image: pro1_img,
        price: 1200.0,
        description: "A relaxed-fit shirt featuring an all-over floral print for an effortlessly stylish look. Made from soft, breathable fabric, perfect for casual outings."
    },
    {
        id: 38,
        name: "Multi-Color Striped Shirt",
        category: "shop",
        image: pro2_img,
        price: 900.0,
        description: "Make a bold statement with this vibrant multi-color striped shirt, crafted from breathable cotton-blend fabric for all-day comfort."
    },
    {
        id: 39,
        name: "Leaf Printed Shirt",
        category: "shop",
        image: pro3_img,
        price: 1500.0,
        description: "Add a splash of color to your wardrobe with this tropical leaf-print shirt, lightweight and breathable for summer outings."
    },
    {
        id: 40,
        name: "White Printed Casual Shirt",
        category: "shop",
        image: pro4_img,
        price: 899.0,
        description: "A clean, versatile white casual shirt with a subtle printed design, perfect for everyday wear and easy to style."
    }
]

export default all_product