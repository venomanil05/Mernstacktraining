const products = [
    {
        id: 1,
        name: "Apple MacBook Air M2",
        description: "A lightweight and powerful laptop with Apple's M2 chip, ideal for students and professionals.",
        price: 125000,
        category: "Laptops",
        brand: "Apple",
        stock: 15,
        rating: 4.8,
        image: "https://example.com/macbook-air-m2.jpg"
    },
    {
        id: 2,
        name: "Dell Inspiron 15",
        description: "A reliable everyday laptop suitable for office work, study, programming, and entertainment.",
        price: 85000,
        category: "Laptops",
        brand: "Dell",
        stock: 20,
        rating: 4.5,
        image: "https://example.com/dell-inspiron-15.jpg"
    },
    {
        id: 3,
        name: "HP Pavilion 15",
        description: "A versatile laptop with a modern design and strong performance for everyday computing.",
        price: 78000,
        category: "Laptops",
        brand: "HP",
        stock: 18,
        rating: 4.4,
        image: "https://example.com/hp-pavilion-15.jpg"
    },
    {
        id: 4,
        name: "Lenovo IdeaPad Slim 5",
        description: "Slim and portable laptop designed for productivity, programming, and daily use.",
        price: 92000,
        category: "Laptops",
        brand: "Lenovo",
        stock: 12,
        rating: 4.6,
        image: "https://example.com/lenovo-ideapad.jpg"
    },
    {
        id: 5,
        name: "ASUS ROG Gaming Laptop",
        description: "High-performance gaming laptop designed for demanding games and creative workloads.",
        price: 185000,
        category: "Laptops",
        brand: "ASUS",
        stock: 8,
        rating: 4.9,
        image: "https://example.com/asus-rog.jpg"
    },

    {
        id: 6,
        name: "iPhone 15",
        description: "Premium smartphone featuring a powerful processor, excellent camera, and modern design.",
        price: 115000,
        category: "Smartphones",
        brand: "Apple",
        stock: 10,
        rating: 4.8,
        image: "https://example.com/iphone-15.jpg"
    },
    {
        id: 7,
        name: "Samsung Galaxy S24",
        description: "Flagship Android smartphone with a high-quality display, advanced cameras, and fast performance.",
        price: 110000,
        category: "Smartphones",
        brand: "Samsung",
        stock: 14,
        rating: 4.7,
        image: "https://example.com/galaxy-s24.jpg"
    },
    {
        id: 8,
        name: "Google Pixel 8",
        description: "Smartphone with an excellent camera system and clean Android experience.",
        price: 85000,
        category: "Smartphones",
        brand: "Google",
        stock: 11,
        rating: 4.6,
        image: "https://example.com/pixel-8.jpg"
    },
    {
        id: 9,
        name: "OnePlus 12",
        description: "Fast and powerful smartphone with a high-refresh-rate display and premium performance.",
        price: 95000,
        category: "Smartphones",
        brand: "OnePlus",
        stock: 16,
        rating: 4.7,
        image: "https://example.com/oneplus-12.jpg"
    },
    {
        id: 10,
        name: "Xiaomi Redmi Note 13",
        description: "Affordable smartphone offering a large display, capable camera, and long battery life.",
        price: 32000,
        category: "Smartphones",
        brand: "Xiaomi",
        stock: 25,
        rating: 4.4,
        image: "https://example.com/redmi-note-13.jpg"
    },

    {
        id: 11,
        name: "Sony WH-1000XM5",
        description: "Premium wireless headphones with advanced noise cancellation and high-quality audio.",
        price: 42000,
        category: "Audio",
        brand: "Sony",
        stock: 9,
        rating: 4.9,
        image: "https://example.com/sony-xm5.jpg"
    },
    {
        id: 12,
        name: "Apple AirPods Pro 2",
        description: "Wireless earbuds with active noise cancellation, transparency mode, and spatial audio.",
        price: 36000,
        category: "Audio",
        brand: "Apple",
        stock: 13,
        rating: 4.8,
        image: "https://example.com/airpods-pro.jpg"
    },
    {
        id: 13,
        name: "JBL Tune 770NC",
        description: "Wireless headphones with noise cancellation and long battery life.",
        price: 12000,
        category: "Audio",
        brand: "JBL",
        stock: 22,
        rating: 4.5,
        image: "https://example.com/jbl-770nc.jpg"
    },
    {
        id: 14,
        name: "Boat Rockerz 450",
        description: "Affordable wireless headphones designed for music, calls, and everyday entertainment.",
        price: 3500,
        category: "Audio",
        brand: "Boat",
        stock: 30,
        rating: 4.2,
        image: "https://example.com/boatrockerz.jpg"
    },
    {
        id: 15,
        name: "Marshall Emberton II",
        description: "Portable Bluetooth speaker with powerful sound and a classic design.",
        price: 28000,
        category: "Audio",
        brand: "Marshall",
        stock: 7,
        rating: 4.8,
        image: "https://example.com/marshall-emberton.jpg"
    },

    {
        id: 16,
        name: "Logitech MX Master 3S",
        description: "Professional wireless mouse designed for productivity and comfortable long-term use.",
        price: 14000,
        category: "Accessories",
        brand: "Logitech",
        stock: 17,
        rating: 4.8,
        image: "https://example.com/mx-master.jpg"
    },
    {
        id: 17,
        name: "Logitech G502 Hero",
        description: "Gaming mouse with customizable buttons and high-precision tracking.",
        price: 8500,
        category: "Gaming",
        brand: "Logitech",
        stock: 19,
        rating: 4.7,
        image: "https://example.com/g502.jpg"
    },
    {
        id: 18,
        name: "Razer DeathAdder V3",
        description: "Lightweight gaming mouse designed for competitive gaming performance.",
        price: 11000,
        category: "Gaming",
        brand: "Razer",
        stock: 12,
        rating: 4.8,
        image: "https://example.com/deathadder.jpg"
    },
    {
        id: 19,
        name: "Keychron K2 Mechanical Keyboard",
        description: "Compact mechanical keyboard suitable for programming, gaming, and productivity.",
        price: 13500,
        category: "Keyboards",
        brand: "Keychron",
        stock: 10,
        rating: 4.7,
        image: "https://example.com/keychron-k2.jpg"
    },
    {
        id: 20,
        name: "Logitech K380 Keyboard",
        description: "Compact wireless keyboard designed for laptops, tablets, and multiple devices.",
        price: 5500,
        category: "Keyboards",
        brand: "Logitech",
        stock: 24,
        rating: 4.5,
        image: "https://example.com/k380.jpg"
    },

    {
        id: 21,
        name: "Samsung 27-inch 4K Monitor",
        description: "4K monitor with a large display suitable for programming, office work, and entertainment.",
        price: 45000,
        category: "Monitors",
        brand: "Samsung",
        stock: 8,
        rating: 4.6,
        image: "https://example.com/samsung-monitor.jpg"
    },
    {
        id: 22,
        name: "LG UltraGear 27-inch",
        description: "High-refresh-rate gaming monitor designed for smooth and responsive gameplay.",
        price: 52000,
        category: "Monitors",
        brand: "LG",
        stock: 6,
        rating: 4.8,
        image: "https://example.com/lg-ultragear.jpg"
    },
    {
        id: 23,
        name: "Dell 24-inch Full HD Monitor",
        description: "Affordable Full HD monitor suitable for home, office, and study environments.",
        price: 22000,
        category: "Monitors",
        brand: "Dell",
        stock: 15,
        rating: 4.4,
        image: "https://example.com/dell-monitor.jpg"
    },
    {
        id: 24,
        name: "ASUS ProArt Monitor",
        description: "Professional monitor designed for photo editing, video editing, and creative work.",
        price: 68000,
        category: "Monitors",
        brand: "ASUS",
        stock: 5,
        rating: 4.8,
        image: "https://example.com/asus-proart.jpg"
    },
    {
        id: 25,
        name: "AOC Gaming Monitor",
        description: "Gaming-focused monitor with a high refresh rate and fast response time.",
        price: 35000,
        category: "Monitors",
        brand: "AOC",
        stock: 9,
        rating: 4.5,
        image: "https://example.com/aoc-monitor.jpg"
    },

    {
        id: 26,
        name: "Samsung T7 Portable SSD",
        description: "Compact external SSD providing fast data transfer and portable storage.",
        price: 15000,
        category: "Storage",
        brand: "Samsung",
        stock: 14,
        rating: 4.8,
        image: "https://example.com/samsung-t7.jpg"
    },
    {
        id: 27,
        name: "WD Elements 2TB HDD",
        description: "Portable external hard drive offering large storage capacity for files and backups.",
        price: 9500,
        category: "Storage",
        brand: "Western Digital",
        stock: 20,
        rating: 4.5,
        image: "https://example.com/wd-elements.jpg"
    },
    {
        id: 28,
        name: "SanDisk 128GB USB Drive",
        description: "Compact USB flash drive suitable for storing and transferring everyday files.",
        price: 1600,
        category: "Storage",
        brand: "SanDisk",
        stock: 35,
        rating: 4.4,
        image: "https://example.com/sandisk-usb.jpg"
    },
    {
        id: 29,
        name: "Kingston 1TB NVMe SSD",
        description: "Fast NVMe solid-state drive designed to improve computer storage performance.",
        price: 10000,
        category: "Storage",
        brand: "Kingston",
        stock: 18,
        rating: 4.7,
        image: "https://example.com/kingston-ssd.jpg"
    },
    {
        id: 30,
        name: "Crucial 500GB SSD",
        description: "Reliable internal SSD offering improved boot and application loading speeds.",
        price: 6500,
        category: "Storage",
        brand: "Crucial",
        stock: 21,
        rating: 4.6,
        image: "https://example.com/crucial-ssd.jpg"
    },

    {
        id: 31,
        name: "Apple Watch Series 9",
        description: "Smartwatch with fitness tracking, notifications, health features, and a premium display.",
        price: 55000,
        category: "Wearables",
        brand: "Apple",
        stock: 8,
        rating: 4.8,
        image: "https://example.com/apple-watch.jpg"
    },
    {
        id: 32,
        name: "Samsung Galaxy Watch 6",
        description: "Feature-rich smartwatch designed for fitness tracking and everyday smart features.",
        price: 38000,
        category: "Wearables",
        brand: "Samsung",
        stock: 11,
        rating: 4.6,
        image: "https://example.com/galaxy-watch.jpg"
    },
    {
        id: 33,
        name: "Xiaomi Smart Band 8",
        description: "Affordable fitness band with activity tracking, health monitoring, and notifications.",
        price: 6500,
        category: "Wearables",
        brand: "Xiaomi",
        stock: 28,
        rating: 4.4,
        image: "https://example.com/xiaomi-band.jpg"
    },
    {
        id: 34,
        name: "Garmin Forerunner 255",
        description: "Advanced GPS smartwatch designed for runners and fitness enthusiasts.",
        price: 48000,
        category: "Wearables",
        brand: "Garmin",
        stock: 6,
        rating: 4.8,
        image: "https://example.com/garmin.jpg"
    },
    {
        id: 35,
        name: "Fitbit Charge 6",
        description: "Fitness tracker with activity monitoring, heart-rate tracking, and workout features.",
        price: 22000,
        category: "Wearables",
        brand: "Fitbit",
        stock: 13,
        rating: 4.5,
        image: "https://example.com/fitbit.jpg"
    },

    {
        id: 36,
        name: "TP-Link WiFi 6 Router",
        description: "High-speed wireless router designed for reliable home and office networking.",
        price: 8500,
        category: "Networking",
        brand: "TP-Link",
        stock: 20,
        rating: 4.6,
        image: "https://example.com/tplink-router.jpg"
    },
    {
        id: 37,
        name: "Netgear Nighthawk Router",
        description: "High-performance router designed for gaming, streaming, and demanding networks.",
        price: 18000,
        category: "Networking",
        brand: "Netgear",
        stock: 7,
        rating: 4.7,
        image: "https://example.com/nighthawk.jpg"
    },
    {
        id: 38,
        name: "TP-Link USB WiFi Adapter",
        description: "Compact wireless adapter for adding WiFi connectivity to desktop computers.",
        price: 1800,
        category: "Networking",
        brand: "TP-Link",
        stock: 30,
        rating: 4.3,
        image: "https://example.com/wifi-adapter.jpg"
    },
    {
        id: 39,
        name: "D-Link Gigabit Switch",
        description: "Reliable network switch suitable for connecting multiple wired devices.",
        price: 4500,
        category: "Networking",
        brand: "D-Link",
        stock: 16,
        rating: 4.4,
        image: "https://example.com/dlink-switch.jpg"
    },
    {
        id: 40,
        name: "Amazon Echo Dot",
        description: "Compact smart speaker with voice assistant features for home automation and entertainment.",
        price: 7500,
        category: "Smart Home",
        brand: "Amazon",
        stock: 14,
        rating: 4.5,
        image: "https://example.com/echo-dot.jpg"
    },

    {
        id: 41,
        name: "Anker Power Bank 20000mAh",
        description: "High-capacity portable battery for charging smartphones and other USB devices.",
        price: 4500,
        category: "Accessories",
        brand: "Anker",
        stock: 25,
        rating: 4.7,
        image: "https://example.com/anker-powerbank.jpg"
    },
    {
        id: 42,
        name: "UGREEN USB-C Hub",
        description: "Multi-port USB-C hub for connecting displays, storage devices, and peripherals.",
        price: 5500,
        category: "Accessories",
        brand: "UGREEN",
        stock: 18,
        rating: 4.6,
        image: "https://example.com/ugreen-hub.jpg"
    },
    {
        id: 43,
        name: "Baseus 100W USB-C Charger",
        description: "Fast USB-C charger designed for laptops, smartphones, tablets, and other devices.",
        price: 4800,
        category: "Accessories",
        brand: "Baseus",
        stock: 20,
        rating: 4.6,
        image: "https://example.com/baseus-charger.jpg"
    },
    {
        id: 44,
        name: "Belkin Wireless Charger",
        description: "Convenient wireless charging pad compatible with supported smartphones and accessories.",
        price: 4500,
        category: "Accessories",
        brand: "Belkin",
        stock: 15,
        rating: 4.5,
        image: "https://example.com/belkin-charger.jpg"
    },
    {
        id: 45,
        name: "Laptop Cooling Pad",
        description: "Cooling pad designed to improve laptop airflow during long working or gaming sessions.",
        price: 2500,
        category: "Accessories",
        brand: "Cooler Master",
        stock: 22,
        rating: 4.3,
        image: "https://example.com/cooling-pad.jpg"
    },

    {
        id: 46,
        name: "PlayStation 5",
        description: "Powerful gaming console offering high-performance gaming and immersive entertainment.",
        price: 85000,
        category: "Gaming",
        brand: "Sony",
        stock: 5,
        rating: 4.9,
        image: "https://example.com/ps5.jpg"
    },
    {
        id: 47,
        name: "Xbox Series X",
        description: "High-performance gaming console designed for fast loading and high-quality gaming.",
        price: 80000,
        category: "Gaming",
        brand: "Microsoft",
        stock: 6,
        rating: 4.8,
        image: "https://example.com/xbox-series-x.jpg"
    },
    {
        id: 48,
        name: "Nintendo Switch OLED",
        description: "Portable gaming console featuring an improved OLED display and flexible gaming modes.",
        price: 52000,
        category: "Gaming",
        brand: "Nintendo",
        stock: 9,
        rating: 4.8,
        image: "https://example.com/nintendo-switch.jpg"
    },
    {
        id: 49,
        name: "Razer Gaming Headset",
        description: "Gaming headset with immersive audio and a microphone for multiplayer gaming.",
        price: 8500,
        category: "Gaming",
        brand: "Razer",
        stock: 14,
        rating: 4.6,
        image: "https://example.com/razer-headset.jpg"
    },
    {
        id: 50,
        name: "Logitech C920 Webcam",
        description: "Full HD webcam suitable for video calls, online classes, streaming, and content creation.",
        price: 9500,
        category: "Cameras",
        brand: "Logitech",
        stock: 12,
        rating: 4.7,
        image: "https://example.com/logitech-c920.jpg"
    }
];

export default products;