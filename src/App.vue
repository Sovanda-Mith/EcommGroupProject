<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useProductStore } from './stores/product';

import imageMonitor1 from '@/assets/landPage2Img/Monitor/AmazonBasics24Inch.jpg';
import imageMonitor2 from '@/assets/landPage2Img/Monitor/KOORUI24-inchComputerMonitor.jpg';
import imageMonitor3 from '@/assets/landPage2Img/Monitor/DELL24inchPROP2419HIPS.jpg';
import imageMonitor4 from '@/assets/landPage2Img/Monitor/24InchGamingMonitor.jpg';
import imageMonitor5 from '@/assets/landPage2Img/Monitor/KTC24GamingMonitor.jpg';

import imageAudio6 from '@/assets/landPage2Img/Audio/SoundcoreAnker.jpg';
import imageAudio7 from '@/assets/landPage2Img/Audio/MOVSSOUE7.jpg';
import imageAudio8 from '@/assets/landPage2Img/Audio/SteelSeriesArctisNova7P.jpg';
import imageAudio9 from '@/assets/landPage2Img/Audio/TurtleBeachRecon70.jpg';
import imageAudio10 from '@/assets/landPage2Img/Audio/ASUSROGDeltaII.jpg';
import imageAudio11 from '@/assets/landPage2Img/Audio/AlienwareProWireless.jpg';

import imageKeyboard12 from "@/assets/landPage2Img/Keyboard/AULAF99.jpg";
import imageKeyboard13 from "@/assets/landPage2Img/Keyboard/ASUSROGAzoth.jpg";
import imageKeyboard14 from "@/assets/landPage2Img/Keyboard/EPOMAKERxAulaF75.jpg";
import imageKeyboard15 from "@/assets/landPage2Img/Keyboard/nuphyHalo75-V2.jpg";
import imageKeyboard16 from "@/assets/landPage2Img/Keyboard/KeychronV3Max.jpg";
import imageKeyboard17 from "@/assets/landPage2Img/Keyboard/KEMOVEK87Wireless.jpg";

import imageMouse18 from "@/assets/landPage2Img/Mouse/INPHICBluetoothMouse.jpg";
import imageMouse19 from "@/assets/landPage2Img/Mouse/BluetoothWirelessMouse.jpg";
import imageMouse20 from "@/assets/landPage2Img/Mouse/LenovoBluetoothSilentMouse.jpg";
import imageMouse21 from "@/assets/landPage2Img/Mouse/USBMouseWireless.jpg";
import imageMouse22 from "@/assets/landPage2Img/Mouse/RazerBasiliskV3.jpg";
import imageMouse23 from "@/assets/landPage2Img/Mouse/ASUSROGChakram.jpg";

import imageController24 from "@/assets/landPage2Img/Controller/ps2.jpg";
import imageController25 from "@/assets/landPage2Img/Controller/DualSenseFortniteEdition.jpg";
import imageController26 from "@/assets/landPage2Img/Controller/SonyDualSense-Blue.jpg";
import imageController27 from "@/assets/landPage2Img/Controller/SonyPS5DualSense.jpg";
import imageController28 from "@/assets/landPage2Img/Controller/RazerWolverineV2.jpg";
import imageController29 from "@/assets/landPage2Img/Controller/PDPXboxREMATCHGLOW.jpg";

import imageOther30 from "@/assets/landPage2Img/Other/HDMI.png";
import imageOther31 from "@/assets/landPage2Img/Other/powercord.png";

const ProductStore = useProductStore();

//all productData
const allProducts = [
  //monitor
  {
    productId: 1,
    name: "Amazon Basics 24 Inch",
    price: 129.99,
    category: "Monitor",
    description: "Amazon Basics 24 Inch Monitor",
    image: imageMonitor1,
    discount: 10,
    tag: "HOT",
    reviewsNum: 420,
  },
  {
    productId: 2,
    name: "KOORUI 24-inch Computer Monitor",
    price: 84.99,
    category: "Monitor",
    description: "KOORUI 24-inch Computer Monitor",
    image: imageMonitor2,
    discount: 10,
    tag: "",
    reviewsNum: 501
  },
  {
    productId: 3,
    name: "DELL 24inch PRO P2419H IPS",
    price: 99.99,
    category: "Monitor",
    description: "DELL 24inch PRO P2419H IPS",
    image: imageMonitor3,
    discount: 10,
    tag: "BEST DEALS",
    reviewsNum: 800
  },
  {
    productId: 4,
    name: "24 Inch Gaming Monitor",
    price: 89.99,
    category: "Monitor",
    description: "24 Inch Gaming Monitor",
    image: imageMonitor4,
    discount: 10,
    tag: "",
    reviewsNum: 761
  },
  {
    productId: 5,
    name: "KTC 24 Gaming Monitor",
    price: 49,
    category: "Monitor",
    description: "KTC 24 Gaming Monitor",
    image: imageMonitor5,
    discount: 10,
    tag: "HOT",
    reviewsNum: 91
  },
  {
    productId: 1,
    name: "Amazon Basics 24 Inch",
    price: 129.99,
    category: "Monitor",
    description: "Amazon Basics 24 Inch Monitor",
    image: imageMonitor1,
    discount: 10,
    tag: "HOT",
    reviewsNum: 420,
  },
  {
    productId: 2,
    name: "KOORUI 24-inch Computer Monitor",
    price: 84.99,
    category: "Monitor",
    description: "KOORUI 24-inch Computer Monitor",
    image: imageMonitor2,
    discount: 10,
    tag: "",
    reviewsNum: 501
  },
  {
    productId: 3,
    name: "DELL 24inch PRO P2419H IPS",
    price: 99.99,
    category: "Monitor",
    description: "DELL 24inch PRO P2419H IPS",
    image: imageMonitor3,
    discount: 10,
    tag: "BEST DEALS",
    reviewsNum: 800
  },
  {
    productId: 4,
    name: "24 Inch Gaming Monitor",
    price: 89.99,
    category: "Monitor",
    description: "24 Inch Gaming Monitor",
    image: imageMonitor4,
    discount: 10,
    tag: "",
    reviewsNum: 761
  },
  {
    productId: 5,
    name: "KTC 24 Gaming Monitor",
    price: 49,
    category: "Monitor",
    description: "KTC 24 Gaming Monitor",
    image: imageMonitor5,
    discount: 10,
    tag: "HOT",
    reviewsNum: 91
  },
  //audio
  {
    productId: 6,
    name: "Soundcore Anker Life Q20 Hybrid",
    price: 50,
    category: "Audio",
    description: "Hybrid Active Noise Cancelling Over-Ear Headphones",
    image: imageAudio6,
    discount: 10,
    tag: "HOT",
    reviewsNum: 520
  },
  {
    productId: 7,
    name: "MOVSSOU E7",
    price: 46.99,
    category: "Audio",
    description: "Noise Cancelling Over-Ear Headphones",
    image: imageAudio7,
    discount: 10,
    tag: "HOT",
    reviewsNum: 123
  },
  {
    productId: 8,
    name: "SteelSeries Arctis Nova 7P",
    price: 149.99,
    category: "Audio",
    description: "Premium Wireless Gaming Headset",
    image: imageAudio8,
    discount: 5,
    tag: "",
    reviewsNum: 401
  },
  {
    productId: 9,
    name: "Turtle Beach Recon 70",
    price: 39.99,
    category: "Audio",
    description: "Lightweight Over-Ear Gaming Headset",
    image: imageAudio9,
    discount: 15,
    tag: "BEST DEALS",
    reviewsNum: 100
  },
  {
    productId: 10,
    name: "ASUS ROG Delta II Wireless",
    price: 229.99,
    category: "Audio",
    description: "High-End Wireless Gaming Headset",
    image: imageAudio10,
    discount: 5,
    tag: "",
    reviewsNum: 761
  },
  {
    productId: 11,
    name: "Alienware Pro Wireless",
    price: 229.99,
    category: "Audio",
    description: "Premium Wireless Gaming Headset by Alienware",
    image: imageAudio11,
    discount: 10,
    tag: "HOT",
    reviewsNum: 91
  },
  //keyboard
  {
    productId: 12,
    name: "AULA F99 Wireless Mechanical Keyboard",
    price: 83,
    category: "Keyboard",
    description: "Compact wireless mechanical keyboard with premium feel.",
    image: imageKeyboard12,
    discount: 10,
    tag: "HOT",
    reviewsNum: 120,
  },
  {
    productId: 13,
    name: "ASUS ROG Azoth",
    price: 210,
    category: "Keyboard",
    description: "High-end mechanical gaming keyboard with OLED display.",
    image: imageKeyboard13,
    discount: 5,
    tag: "HOT",
    reviewsNum: 523,
  },
  {
    productId: 14,
    name: "EPOMAKER x Aula F75",
    price: 71,
    category: "Keyboard",
    description: "Affordable mechanical keyboard with stylish design.",
    image: imageKeyboard14,
    discount: 15,
    tag: "",
    reviewsNum: 501,
  },
  {
    productId: 15,
    name: "nuphy Halo75 V2",
    price: 150,
    category: "Keyboard",
    description: "Durable wireless keyboard with customizable lighting.",
    image: imageKeyboard15,
    discount: 20,
    tag: "BEST DEALS",
    reviewsNum: 1000,
  },
  {
    productId: 16,
    name: "Keychron V3 Max",
    price: 109,
    category: "Keyboard",
    description: "Versatile mechanical keyboard with long battery life.",
    image: imageKeyboard16,
    discount: 10,
    tag: "",
    reviewsNum: 761,
  },
  {
    productId: 17,
    name: "KEMOVE K87 Wireless",
    price: 49,
    category: "Keyboard",
    description: "Wireless compact keyboard for on-the-go productivity.",
    image: imageKeyboard17,
    discount: 25,
    tag: "HOT",
    reviewsNum: 91,
  },
  //mouse
  {
    productId: 18,
    name: "INPHIC Bluetooth Mouse",
    price: 19.99,
    category: "Mouse",
    description: "Ergonomic Bluetooth mouse with silent clicks.",
    image: imageMouse18,
    discount: 10,
    tag: "HOT",
    reviewsNum: 10,
  },
  {
    productId: 19,
    name: "Bluetooth Wireless Mouse",
    price: 16.99,
    category: "Mouse",
    description: "Compact wireless mouse with long battery life.",
    image: imageMouse19,
    discount: 5,
    tag: "HOT",
    reviewsNum: 123,
  },
  {
    productId: 20,
    name: "Lenovo Bluetooth Silent Mouse",
    price: 19.99,
    category: "Mouse",
    description: "High-quality mouse offering silent operation.",
    image: imageMouse20,
    discount: 15,
    tag: "",
    reviewsNum: 501,
  },
  {
    productId: 21,
    name: "USB Mouse Wireless",
    price: 9.49,
    category: "Mouse",
    description: "Affordable wireless mouse with USB connectivity.",
    image: imageMouse21,
    discount: 20,
    tag: "BEST DEALS",
    reviewsNum: 100,
  },
  {
    productId: 22,
    name: "Razer Basilisk V3",
    price: 39.99,
    category: "Mouse",
    description: "Performance gaming mouse with programmable buttons.",
    image: imageMouse22,
    discount: 10,
    tag: "",
    reviewsNum: 361,
  },
  {
    productId: 23,
    name: "ASUS ROG Chakram",
    price: 49,
    category: "Mouse",
    description: "High-end gaming mouse with RGB lighting.",
    image: imageMouse23,
    discount: 25,
    tag: "HOT",
    reviewsNum: 91,
  },
  //controller
  {
    productId: 24,
    name: "PS2 Controller",
    price: 30,
    category: "Controller",
    description: "Classic PS2 controller with ergonomic design.",
    image: imageController24,
    discount: 15,
    tag: "HOT",
    reviewsNum: 230,
  },
  {
    productId: 25,
    name: "DualSense Fortnite Edition",
    price: 75,
    category: "Controller",
    description: "Special edition DualSense controller for Fortnite fans.",
    image: imageController25,
    discount: 10,
    tag: "",
    reviewsNum: 523,
  },
  {
    productId: 26,
    name: "Sony DualSense - Blue",
    price: 75,
    category: "Controller",
    description: "Sony DualSense controller in vibrant blue color.",
    image: imageController26,
    discount: 0,
    tag: "",
    reviewsNum: 401,
  },
  {
    productId: 27,
    name: "Sony PS5 DualSense",
    price: 63,
    category: "Controller",
    description: "The official controller for PS5, offering immersive gameplay.",
    image: imageController27,
    discount: 20,
    tag: "BEST DEALS",
    reviewsNum: 1006,
  },
  {
    productId: 28,
    name: "Razer Wolverine V2",
    price: 45,
    category: "Controller",
    description: "High-precision gaming controller by Razer.",
    image: imageController28,
    discount: 5,
    tag: "",
    reviewsNum: 1761,
  },
  {
    productId: 29,
    name: "PDP Xbox REMATCH GLOW",
    price: 30,
    category: "Controller",
    description: "Illuminated Xbox controller for gaming enthusiasts.",
    image: imageController29,
    discount: 25,
    tag: "HOT",
    reviewsNum: 9021,
  },
  //other
  {
    productId:30,
    name: "HDMI Cable",
    price: 9.99,
    category: "Other",
    description: "HDMI cable for connecting digital devices.",
    image: imageOther30,
    discount: 3,
    tag: "HOT",
    reviewsNum: 10,
  },
  {
    productId: 31,
    name:"Power Cord, Black",
    price: 9.99,
    category: "Other",
    description: "Power cord for connecting power outlets.",
    image: imageOther31,
    discount: 0,
    tag: "HOT",
    reviewsNum: 123,
  },

];

ProductStore.addMultipleProducts(allProducts);
</script>

<template>
  <RouterView></RouterView>
</template>
<style scoped></style>
