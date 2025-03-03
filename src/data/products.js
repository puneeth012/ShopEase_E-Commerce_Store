const products = [
    {
        id: 1,
        name: "Apple 16 Pro Max",
        price: 25000,
        image: "https://images-na.ssl-images-amazon.com/images/I/31Q14qzdoZL._SY445_SX342_QL70_FMwebp_.jpg",
        category: "Smartphones",
        brand: "Apple",
        description: "Experience the power of the latest Apple 16 Pro Max with cutting-edge technology and superior camera quality.",
        stock: 15,
        material: "Aluminum & Glass",
        shipping: "Free Shipping",
        reviews: []
    },
    {
        id: 2,
        name: "Boat Stone 450",
        price: 3000,
        image: "https://m.media-amazon.com/images/I/51Tf2zsMODL._AC_UY327_FMwebp_QL65_.jpg",
        category: "Wireless Headphones",
        brand: "Boat",
        description: "Portable and durable Bluetooth speaker with rich bass and up to 8 hours of playtime.",
        stock: 50,
        material: "Plastic & Rubber",
        shipping: "Standard Delivery (3-5 Days)",
        reviews: []
    },
    {
        id: 3,
        name: "Acer Nitro",
        price: 60000,
        image: "https://m.media-amazon.com/images/I/81zAEcXFPOL._AC_UY327_FMwebp_QL65_.jpg",
        category: "Laptops",
        brand: "Acer",
        description: "High-performance gaming laptop with a powerful GPU and high refresh rate display.",
        stock: 20,
        material: "Metal & Plastic",
        shipping: "Express Delivery Available",
        reviews: []
    },
    {
        id: 4,
        name: "Dell XPS 13",
        category: "Laptops",
        price: 99999,
        image: "https://m.media-amazon.com/images/I/51wxpqO7zoL._SX300_SY300_QL70_FMwebp_.jpg",
        brand: "Dell",
        description: "Ultra-thin and powerful laptop with a stunning 4K touchscreen display and premium design.",
        stock: 10,
        material: "Aluminum",
        shipping: "Free Shipping",
        reviews: []
    },
    {
        id: 5,
        name: "JBL Headphones",
        category: "Wireless Headphones",
        price: 29999,
        image: "https://m.media-amazon.com/images/I/61KmeiNKw3L._AC_UY327_FMwebp_QL65_.jpg",
        brand: "JBL",
        description: "Premium wireless headphones with noise cancellation and high-fidelity audio.",
        stock: 30,
        material: "Plastic & Leather",
        shipping: "Ships in 24 hours",
        reviews: []
    },
    {
        id: 6,
        name: "AirPods Pro 2",
        category: "Wireless Headphones",
        price: 26999,
        image: "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UY327_FMwebp_QL65_.jpg",
        brand: "Apple",
        description: "Next-gen AirPods Pro with adaptive noise cancellation and spatial audio support.",
        stock: 25,
        material: "Plastic",
        shipping: "Standard Delivery (3-5 Days)",
        reviews: []
    },
    {
        id: 7,
        name: "Google Pixel 7 Pro",
        category: "Smartphones",
        price: 68999,
        image: "https://m.media-amazon.com/images/I/51Q71kJrp5L._AC_UY327_FMwebp_QL65_.jpg",
        brand: "Google",
        description: "Flagship Google smartphone with AI-powered camera and smooth stock Android experience.",
        stock: 12,
        material: "Aluminum & Glass",
        shipping: "Free Shipping",
        reviews: []
    },
    {
        id: 8,
        name: "OnePlus 11",
        category: "Smartphones",
        price: 61999,
        image: "https://m.media-amazon.com/images/I/61amb0CfMGL._AC_UY327_FMwebp_QL65_.jpg",
        brand: "OnePlus",
        description: "OnePlus flagship smartphone with Hasselblad-tuned cameras and fast charging.",
        stock: 18,
        material: "Aluminum & Glass",
        shipping: "Express Delivery Available",
        reviews: []
    },
    {
        id: 9,
        name: "ASUS ROG Strix G16",
        category: "Laptops",
        price: 124999,
        image: "https://m.media-amazon.com/images/I/71WChkpECLL._AC_UY327_FMwebp_QL65_.jpg",
        brand: "ASUS",
        description: "High-end gaming laptop with powerful NVIDIA RTX graphics and RGB keyboard.",
        stock: 8,
        material: "Metal & Plastic",
        shipping: "Free Shipping",
        reviews: []
    },
    {
        id: 10,
        name: "HP Spectre x360",
        category: "Laptops",
        price: 109999,
        image: "https://m.media-amazon.com/images/I/71Kwi8zU+DL._AC_UY327_FMwebp_QL65_.jpg",
        brand: "HP",
        description: "Convertible touchscreen laptop with premium design and long battery life.",
        stock: 14,
        material: "Aluminum",
        shipping: "Ships within 48 hours",
        reviews: []
    }
];

export default products;
