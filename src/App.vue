<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useProductStore } from './stores/product';

import imageMonitor1 from '@/assets/landPage2Img/Monitor/AmazonBasics24Inch.jpg';
import imageMonitor2 from '@/assets/landPage2Img/Monitor/KOORUI24-inchComputerMonitor.jpg';
import imageMonitor3 from '@/assets/landPage2Img/Monitor/DELL24inchPROP2419HIPS.jpg';
import imageMonitor4 from '@/assets/landPage2Img/Monitor/24InchGamingMonitor.jpg';
import imageMonitor5 from '@/assets/landPage2Img/Monitor/KTC24GamingMonitor.jpg';
import imageMonitor6 from '@/assets/landPage2Img/Monitor/SANSUI24InchMonitor.jpg';
import imageMonitor7 from '@/assets/landPage2Img/Monitor/monitor7.jpg';
import imageMonitor8 from '@/assets/landPage2Img/Monitor/monitor8.jpg';
import imageMonitor9 from '@/assets/landPage2Img/Monitor/monitor9.jpg';
import imageMonitor10 from '@/assets/landPage2Img/Monitor/monitor10.jpg';
import imageMonitor11 from '@/assets/landPage2Img/Monitor/monitor11.jpg';

import imageAudio12 from '@/assets/landPage2Img/Audio/JBL-Tune510BT-Bluetooth.jpg';
import imageAudio13 from '@/assets/landPage2Img/Audio/Uliptz-Wireless-Bluetooth.jpg';
import imageAudio14 from '@/assets/landPage2Img/Audio/beatsolo.jpg';
import imageAudio15 from '@/assets/landPage2Img/Audio/BeatsStudioBuds.jpg';
import imageAudio16 from '@/assets/landPage2Img/Audio/MOZOTERS8Mini.jpg';
import imageAudio17 from '@/assets/landPage2Img/Audio/SoundcoreAnker.jpg';
import imageAudio18 from '@/assets/landPage2Img/Audio/MOVSSOUE7.jpg';
import imageAudio19 from '@/assets/landPage2Img/Audio/SteelSeriesArctisNova7P.jpg';
import imageAudio20 from '@/assets/landPage2Img/Audio/TurtleBeachRecon70.jpg';
import imageAudio21 from '@/assets/landPage2Img/Audio/ASUSROGDeltaII.jpg';
import imageAudio22 from '@/assets/landPage2Img/Audio/AlienwareProWireless.jpg';

import imageKeyboard23 from "@/assets/landPage2Img/Keyboard/AULAF99.jpg";
import imageKeyboard24 from "@/assets/landPage2Img/Keyboard/ASUSROGAzoth.jpg";
import imageKeyboard25 from "@/assets/landPage2Img/Keyboard/EPOMAKERxAulaF75.jpg";
import imageKeyboard26 from "@/assets/landPage2Img/Keyboard/nuphyHalo75-V2.jpg";
import imageKeyboard27 from "@/assets/landPage2Img/Keyboard/KeychronV3Max.jpg";
import imageKeyboard28 from "@/assets/landPage2Img/Keyboard/KEMOVEK87Wireless.jpg";
import imageKeyboard29 from "@/assets/landPage2Img/Keyboard/AmazonBasicsWiredKeyboard.jpg";
import imageKeyboard30 from "@/assets/landPage2Img/Keyboard/NPET-K10V3PRO.jpg";
import imageKeyboard31 from "@/assets/landPage2Img/Keyboard/MSI-Vigor.jpg";
import imageKeyboard32 from "@/assets/landPage2Img/Keyboard/RK-ROYAL.jpg";
import imageKeyboard33 from "@/assets/landPage2Img/Keyboard/HyperX-Alloy-Origins-60.jpg";

import imageMouse34 from "@/assets/landPage2Img/Mouse/INPHICBluetoothMouse.jpg";
import imageMouse35 from "@/assets/landPage2Img/Mouse/BluetoothWirelessMouse.jpg";
import imageMouse36 from "@/assets/landPage2Img/Mouse/LenovoBluetoothSilentMouse.jpg";
import imageMouse37 from "@/assets/landPage2Img/Mouse/USBMouseWireless.jpg";
import imageMouse38 from "@/assets/landPage2Img/Mouse/RazerBasiliskV3.jpg";
import imageMouse39 from "@/assets/landPage2Img/Mouse/ASUSROGChakram.jpg";
import imageMouse40 from "@/assets/landPage2Img/Mouse/TECKNET-Mouse.jpg";
import imageMouse41 from "@/assets/landPage2Img/Mouse/FFJ-Mouse.jpg";
import imageMouse42 from "@/assets/landPage2Img/Mouse/SM600.jpg";
import imageMouse43 from "@/assets/landPage2Img/Mouse/Redragon-M913.jpg";
import imageMouse44 from "@/assets/landPage2Img/Mouse/Razer-Viper-Ultimate.jpg";

import imageController45 from "@/assets/landPage2Img/Controller/ps2.jpg";
import imageController46 from "@/assets/landPage2Img/Controller/DualSenseFortniteEdition.jpg";
import imageController47 from "@/assets/landPage2Img/Controller/SonyDualSense-Blue.jpg";
import imageController48 from "@/assets/landPage2Img/Controller/SonyPS5DualSense.jpg";
import imageController49 from "@/assets/landPage2Img/Controller/RazerWolverineV2.jpg";
import imageController50 from "@/assets/landPage2Img/Controller/PDPXboxREMATCHGLOW.jpg";
import imageController51 from "@/assets/landPage2Img/Controller/Luna-Controller.jpg";
import imageController52 from "@/assets/landPage2Img/Controller/FLYDIGI-Vader.jpg";
import imageController53 from "@/assets/landPage2Img/Controller/Controller-Grips-Tape.jpg";
import imageController54 from "@/assets/landPage2Img/Controller/AKNES-8Bitdo-Pro-2.jpg";
import imageController55 from "@/assets/landPage2Img/Controller/Turtle-Beach-REACT-R-Wired.jpg";


import imageOther56 from "@/assets/landPage2Img/Other/HDMI.png";
import imageOther57 from "@/assets/landPage2Img/Other/powercord.png";

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
    productId: 6,
    name: "SANSUI 24Inch Monitor",
    price: 100,
    category: "Monitor",
    description: "SANSUI 24Inch Monitor",
    image: imageMonitor6,
    discount: 10,
    tag: "HOT",
    reviewsNum: 91
  },
  {
    productId: 7,
    name: "AOC 22B2HM2 22",
    price: 65,
    category: "Monitor",
    description: "AOC 22B2HM2 22inch Full HD 100Hz",
    image: imageMonitor7,
    discount: 5,
    tag: "HOT",
    reviewsNum: 111
  },
  {
    productId: 8,
    name: "ASUS 24inch",
    price: 94,
    category: "Monitor",
    description: "ASUS 24inch 1080P Eye Care Monitor ",
    image: imageMonitor8,
    discount: 10,
    tag: "HOT",
    reviewsNum: 241
  },
  {
    productId: 9,
    name: "acer SH272 G0bih",
    price: 130,
    category: "Monitor",
    description: "acer SH272 G0bih 27inch fullhd",
    image: imageMonitor9,
    discount: 5,
    tag: "HOT",
    reviewsNum: 41
  },
  {
    productId: 10,
    name: "ASUS 23.8inch",
    price: 128,
    category: "Monitor",
    description: "ASUS 23.8inch 1080P Eye Care Monitor",
    image: imageMonitor10,
    discount: 5,
    tag: "HOT",
    reviewsNum: 123
  },
  {
    productId: 11,
    name: "Samsung 24inch",
    price: 120,
    category: "Monitor",
    description: "Samsung 24inch 1080p Computer Monitor",
    image: imageMonitor11,
    discount: 5,
    tag: "HOT",
    reviewsNum: 203
  },


  //audio
  {
    productId: 12,
    name: "JBL Tune 510BT - Bluetooth",
    price: 30,
    category: "Audio",
    description: "JBL Tune 510BT - Bluetooths",
    image: imageAudio12,
    discount: 5,
    tag: "HOT",
    reviewsNum: 520
  },
  {
    productId: 13,
    name: "Uliptz Wireless Bluetooth",
    price: 20,
    category: "Audio",
    description: "Noise Cancelling Over-Ear Headphones",
    image: imageAudio13,
    discount: 25,
    tag: "HOT",
    reviewsNum: 134
  },
  {
    productId: 14,
    name: "Beats Solo 4 Wireless Bluetooth",
    price: 99,
    category: "Audio",
    description: "Premium Wireless Gaming Headset",
    image: imageAudio14,
    discount: 5,
    tag: "",
    reviewsNum: 401
  },
  {
    productId: 15,
    name: "Beats Studio Buds +",
    price: 39.99,
    category: "Audio",
    description: "Lightweight Over-Ear Gaming Headset",
    image: imageAudio15,
    discount: 15,
    tag: "BEST DEALS",
    reviewsNum: 100
  },
  {
    productId: 16,
    name: "MOZOTER S8 Mini Wireless Earbuds Bluetooth",
    price: 9.99,
    category: "Audio",
    description: "High-End Wireless Gaming Headset",
    image: imageAudio16,
    discount: 5,
    tag: "",
    reviewsNum: 761
  },
  {
    productId: 17,
    name: "Soundcore Anker Life Q20 Hybrid",
    price: 50,
    category: "Audio",
    description: "Hybrid Active Noise Cancelling Over-Ear Headphones",
    image: imageAudio17,
    discount: 10,
    tag: "HOT",
    reviewsNum: 520
  },
  {
    productId: 18,
    name: "MOVSSOU E7",
    price: 46.99,
    category: "Audio",
    description: "Noise Cancelling Over-Ear Headphones",
    image: imageAudio18,
    discount: 10,
    tag: "HOT",
    reviewsNum: 123
  },
  {
    productId: 19,
    name: "SteelSeries Arctis Nova 7P",
    price: 149.99,
    category: "Audio",
    description: "Premium Wireless Gaming Headset",
    image: imageAudio19,
    discount: 5,
    tag: "",
    reviewsNum: 401
  },
  {
    productId: 20,
    name: "Turtle Beach Recon 70",
    price: 39.99,
    category: "Audio",
    description: "Lightweight Over-Ear Gaming Headset",
    image: imageAudio20,
    discount: 15,
    tag: "BEST DEALS",
    reviewsNum: 100
  },
  {
    productId: 21,
    name: "ASUS ROG Delta II Wireless",
    price: 229.99,
    category: "Audio",
    description: "High-End Wireless Gaming Headset",
    image: imageAudio21,
    discount: 5,
    tag: "",
    reviewsNum: 761
  },
  {
    productId: 22,
    name: "Alienware Pro Wireless",
    price: 229.99,
    category: "Audio",
    description: "Premium Wireless Gaming Headset by Alienware",
    image: imageAudio22,
    discount: 10,
    tag: "HOT",
    reviewsNum: 91
  },

  //keyboard
  {
    productId: 23,
    name: "AULA F99 Wireless Mechanical Keyboard",
    price: 83,
    category: "Keyboard",
    description: "Compact wireless mechanical keyboard with premium feel.",
    image: imageKeyboard23,
    discount: 10,
    tag: "HOT",
    reviewsNum: 120,
  },
  {
    productId: 24,
    name: "ASUS ROG Azoth",
    price: 210,
    category: "Keyboard",
    description: "High-end mechanical gaming keyboard with OLED display.",
    image: imageKeyboard24,
    discount: 5,
    tag: "HOT",
    reviewsNum: 523,
  },
  {
    productId: 25,
    name: "EPOMAKER x Aula F75",
    price: 71,
    category: "Keyboard",
    description: "Affordable mechanical keyboard with stylish design.",
    image: imageKeyboard25,
    discount: 15,
    tag: "",
    reviewsNum: 501,
  },
  {
    productId: 26,
    name: "nuphy Halo75 V2",
    price: 150,
    category: "Keyboard",
    description: "Durable wireless keyboard with customizable lighting.",
    image: imageKeyboard26,
    discount: 20,
    tag: "BEST DEALS",
    reviewsNum: 1000,
  },
  {
    productId: 27,
    name: "Keychron V3 Max",
    price: 109,
    category: "Keyboard",
    description: "Versatile mechanical keyboard with long battery life.",
    image: imageKeyboard27,
    discount: 10,
    tag: "",
    reviewsNum: 761,
  },
  {
    productId: 28,
    name: "KEMOVE K87 Wireless",
    price: 49,
    category: "Keyboard",
    description: "Wireless compact keyboard for on-the-go productivity.",
    image: imageKeyboard28,
    discount: 25,
    tag: "HOT",
    reviewsNum: 91,
  },
  {
    productId: 29,
    name: "Amazon Basics Wired Keyboard",
    price: 18,
    category: "Keyboard",
    description: "Compact wireless mechanical keyboard with premium feel.",
    image: imageKeyboard29,
    discount: 0,
    tag: "HOT",
    reviewsNum: 20,
  },
  {
    productId: 30,
    name: "NPET K10V3PRO Gaming Keyboard",
    price: 15,
    category: "Keyboard",
    description: "High-end mechanical gaming keyboard with OLED display.",
    image: imageKeyboard30,
    discount: 0,
    tag: "HOT",
    reviewsNum: 523,
  },
  {
    productId: 31,
    name: "MSI Vigor GK50 Mechanical Gaming Keyboard",
    price: 100,
    category: "Keyboard",
    description: "Affordable mechanical keyboard with stylish design.",
    image: imageKeyboard31,
    discount: 10,
    tag: "",
    reviewsNum: 50,
  },
  {
    productId: 32,
    name: "RK ROYAL KLUDGE RK98 Wireless Mechanical",
    price: 100,
    category: "Keyboard",
    description: "Durable wireless keyboard with customizable lighting.",
    image: imageKeyboard32,
    discount: 20,
    tag: "BEST DEALS",
    reviewsNum: 100,
  },
  {
    productId: 33,
    name: "HyperX Alloy Origins 60",
    price: 150,
    category: "Keyboard",
    description: "Versatile mechanical keyboard with long battery life.",
    image: imageKeyboard33,
    discount: 5,
    tag: "",
    reviewsNum: 761,
  },

  //mouse
  {
    productId: 34,
    name: "INPHIC Bluetooth Mouse",
    price: 19.99,
    category: "Mouse",
    description: "Ergonomic Bluetooth mouse with silent clicks.",
    image: imageMouse34,
    discount: 10,
    tag: "HOT",
    reviewsNum: 10,
  },
  {
    productId: 35,
    name: "Bluetooth Wireless Mouse",
    price: 16.99,
    category: "Mouse",
    description: "Compact wireless mouse with long battery life.",
    image: imageMouse35,
    discount: 5,
    tag: "HOT",
    reviewsNum: 123,
  },
  {
    productId: 36,
    name: "Lenovo Bluetooth Silent Mouse",
    price: 19.99,
    category: "Mouse",
    description: "High-quality mouse offering silent operation.",
    image: imageMouse36,
    discount: 15,
    tag: "",
    reviewsNum: 501,
  },
  {
    productId: 37,
    name: "USB Mouse Wireless",
    price: 9.49,
    category: "Mouse",
    description: "Affordable wireless mouse with USB connectivity.",
    image: imageMouse37,
    discount: 20,
    tag: "BEST DEALS",
    reviewsNum: 100,
  },
  {
    productId: 38,
    name: "Razer Basilisk V3",
    price: 39.99,
    category: "Mouse",
    description: "Performance gaming mouse with programmable buttons.",
    image: imageMouse38,
    discount: 10,
    tag: "",
    reviewsNum: 361,
  },
  {
    productId: 39,
    name: "ASUS ROG Chakram",
    price: 49,
    category: "Mouse",
    description: "High-end gaming mouse with RGB lighting.",
    image: imageMouse39,
    discount: 25,
    tag: "HOT",
    reviewsNum: 91,
  },
  {
    productId: 40,
    name: "TECKNET Wireless Gaming Mouse",
    price: 19.99,
    category: "Mouse",
    description: "Ergonomic Bluetooth mouse with silent clicks.",
    image: imageMouse40,
    discount: 0,
    tag: "HOT",
    reviewsNum: 10,
  },
  {
    productId: 41,
    name: "FFJ Wireless Gaming Mouse",
    price: 49.99,
    category: "Mouse",
    description: "Compact wireless mouse with long battery life.",
    image: imageMouse41,
    discount: 5,
    tag: "HOT",
    reviewsNum: 123,
  },
  {
    productId: 42,
    name: "SM600 White Wireless Gaming Mouse",
    price: 28.99,
    category: "Mouse",
    description: "High-quality mouse offering silent operation.",
    image: imageMouse42,
    discount: 0,
    tag: "",
    reviewsNum: 501,
  },
  {
    productId: 43,
    name: "Redragon M913 Mouse Wireless",
    price: 49.99,
    category: "Mouse",
    description: "Affordable wireless mouse with USB connectivity.",
    image: imageMouse43,
    discount: 25,
    tag: "BEST DEALS",
    reviewsNum: 100,
  },
  {
    productId: 44,
    name: "Razer Viper Ultimate Wireless Mouse",
    price: 39.99,
    category: "Mouse",
    description: "Performance gaming mouse with programmable buttons.",
    image: imageMouse44,
    discount: 10,
    tag: "",
    reviewsNum: 361,
  },

  //controller
  {
    productId: 45,
    name: "PS2 Controller",
    price: 30,
    category: "Controller",
    description: "Classic PS2 controller with ergonomic design.",
    image: imageController45,
    discount: 15,
    tag: "HOT",
    reviewsNum: 230,
  },
  {
    productId: 46,
    name: "DualSense Fortnite Edition",
    price: 75,
    category: "Controller",
    description: "Special edition DualSense controller for Fortnite fans.",
    image: imageController46,
    discount: 10,
    tag: "",
    reviewsNum: 523,
  },
  {
    productId: 47,
    name: "Sony DualSense - Blue",
    price: 75,
    category: "Controller",
    description: "Sony DualSense controller in vibrant blue color.",
    image: imageController47,
    discount: 0,
    tag: "",
    reviewsNum: 401,
  },
  {
    productId: 48,
    name: "Sony PS5 DualSense",
    price: 63,
    category: "Controller",
    description: "The official controller for PS5, offering immersive gameplay.",
    image: imageController48,
    discount: 20,
    tag: "BEST DEALS",
    reviewsNum: 1006,
  },
  {
    productId: 49,
    name: "Razer Wolverine V2",
    price: 45,
    category: "Controller",
    description: "High-precision gaming controller by Razer.",
    image: imageController49,
    discount: 5,
    tag: "",
    reviewsNum: 1761,
  },
  {
    productId: 50,
    name: "PDP Xbox REMATCH GLOW",
    price: 30,
    category: "Controller",
    description: "Illuminated Xbox controller for gaming enthusiasts.",
    image: imageController50,
    discount: 25,
    tag: "HOT",
    reviewsNum: 9021,
  },
  {
    productId: 51,
    name: "Luna Controller + Phone Clip Bundle",
    price: 15,
    category: "Controller",
    description: "Special edition DualSense controller for Fortnite fans.",
    image: imageController51,
    discount: 0,
    tag: "",
    reviewsNum: 523,
  },
  {
    productId: 52,
    name: "FLYDIGI Vader 4 Pro",
    price: 80,
    category: "Controller",
    description: "Sony DualSense controller in vibrant blue color.",
    image: imageController52,
    discount: 0,
    tag: "",
    reviewsNum: 401,
  },
  {
    productId: 53,
    name: "Controller Grips Tape",
    price: 14,
    category: "Controller",
    description: "The official controller for PS5, offering immersive gameplay.",
    image: imageController53,
    discount: 0,
    tag: "BEST DEALS",
    reviewsNum: 1006,
  },
  {
    productId: 54,
    name: "AKNES 8Bitdo Pro 2",
    price: 49.99,
    category: "Controller",
    description: "High-precision gaming controller by Razer.",
    image: imageController54,
    discount: 0,
    tag: "",
    reviewsNum: 1761,
  },
  {
    productId: 55,
    name: "Turtle Beach REACT-R Wired",
    price: 49.99,
    category: "Controller",
    description: "Illuminated Xbox controller for gaming enthusiasts.",
    image: imageController55,
    discount: 25,
    tag: "HOT",
    reviewsNum: 9021,
  },

  //other
  {
    productId:56,
    name: "HDMI Cable",
    price: 9.99,
    category: "Other",
    description: "HDMI cable for connecting digital devices.",
    image: imageOther56,
    discount: 3,
    tag: "HOT",
    reviewsNum: 10,
  },
  {
    productId: 57,
    name:"Power Cord, Black",
    price: 9.99,
    category: "Other",
    description: "Power cord for connecting power outlets.",
    image: imageOther57,
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
