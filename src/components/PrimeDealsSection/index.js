import { Component } from 'react';
import FiltersSection from '../FiltersSection';
import ProductCard from '../ProductCard';
import ProductsHeader from '../ProductsHeader';
import './index.css';

// Sample product data
const sampleProducts = [
  {
    title: 'Portable Bluetooth Speaker',
    brand: 'JBL',
    price: 2499,
    id: '1',
    imageUrl: 'https://m.media-amazon.com/images/I/71K7Q4FpguL._SL1500_.jpg',
    rating: 4.3,
    category: 'speaker'
  },
  {
    title: 'Wireless Bluetooth Speaker',
    brand: 'Sony',
    price: 3999,
    id: '2',
    imageUrl: 'https://cdn.mos.cms.futurecdn.net/mfKh2u7sQmSFmEkNgciizF.jpg',
    rating: 4.6,
    category: 'speaker'
  },
  {
    title: 'Soundbar Speaker',
    brand: 'Bose',
    price: 29999,
    id: '3',
    imageUrl: 'https://th.bing.com/th/id/OIP.c1HPlkkLRwD45yVCraNWQgAAAA?rs=1&pid=ImgDetMain',
    rating: 4.8,
    category: 'speaker'
  },
  {
    title: 'PartyBox Bluetooth Speaker',
    brand: 'JBL',
    price: 5999,
    id: '4',
    imageUrl: 'https://th.bing.com/th/id/OIP.cqfrK31QSZzPuGZvRxORhwHaE6?w=800&h=530&rs=1&pid=ImgDetMain',
    rating: 4.7,
    category: 'speaker'
  },
  {
    title: 'Portable Wireless Speaker',
    brand: 'Marshall',
    price: 15000,
    id: '5',
    imageUrl: 'https://m.media-amazon.com/images/I/71gX5Df5jML.jpg',
    rating: 4.8,
    category: 'speaker'
  },
  {
    title: 'Bluetooth Speaker with Bass Radiator',
    brand: 'Tribit',
    price: 3499,
    id: '6',
    imageUrl: 'https://sonnydickson.com/wp-content/uploads/2023/08/StormBox-Blast_Featured-Image.jpg',
    rating: 4.4,
    category: 'speaker'
  },
  {
    title: 'Bluetooth Speaker with LED Light',
    brand: 'Sony',
    price: 6999,
    id: '7',
    imageUrl: 'https://th.bing.com/th/id/OIP.XVqfHRKmBiqKS_XMg5NvhQHaFY?rs=1&pid=ImgDetMain',
    rating: 4.5,
    category: 'speaker'
  },
  {
    title: 'Portable Outdoor Speaker',
    brand: 'Bose',
    price: 15999,
    id: '8',
    imageUrl: 'https://th.bing.com/th/id/OIP.01MGYmcLNjltzgTdwmELegHaDt?rs=1&pid=ImgDetMain',
    rating: 4.9,
    category: 'speaker'
  },
  {
    title: 'Waterproof Bluetooth Speaker',
    brand: 'Ultimate Ears',
    price: 4999,
    id: '9',
    imageUrl: 'https://th.bing.com/th/id/OIP.08GcQ04e-qC2YSHJdm8ABQHaEK?rs=1&pid=ImgDetMain',
    rating: 4.7,
    category: 'speaker'
  },
  {
    title: 'Bluetooth Speaker with Subwoofer',
    brand: 'Blaupunkt',
    price: 2999,
    id: '10',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61AM4GvrZ6L._SL1500_.jpg',
    rating: 4.6,
    category: 'speaker'
  },
  {
    title: 'Mini Portable Bluetooth Speaker',
    brand: 'JBL',
    price: 1999,
    id: '11',
    imageUrl: 'https://i5.walmartimages.com/asr/d4cc0b1d-779a-401c-afe3-125054ddc36a.ae47a75b256ff9623de48c14cce5731b.jpeg',
    rating: 4.4,
    category: 'speaker'
  },
  {
    title: 'Portable Party Speaker',
    brand: 'Sony',
    price: 34999,
    id: '12',
    imageUrl: 'https://th.bing.com/th/id/OIP.Op9Qu3WjcY5wl-DXFlmmEAHaFj?rs=1&pid=ImgDetMain',
    rating: 4.9,
    category: 'speaker'
  },
  {
    title: 'Portable Bluetooth Speaker with Built-in Mic',
    brand: 'Boat',
    price: 2499,
    id: '13',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71%2BC-M4ZJQL._SL1500_.jpg',
    rating: 4.3,
    category: 'speaker'
  },
  {
    title: 'Waterproof Party Speaker',
    brand: 'Sony',
    price: 19999,
    id: '14',
    imageUrl: 'https://th.bing.com/th/id/R.c2e1d7930292798ac67ebb599f3c1ec7?rik=avlm%2bAsj7dUWeg&riu=http%3a%2f%2fgadgetsin.com%2fuploads%2f2020%2f05%2fsony_srsxb43_portable_waterproof_bluetooth_speaker_1.jpg&ehk=2tVpt51wQNGCn1D4Z%2fJtl8wzQFh%2bs0e5yoBuCqalPCM%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
    rating: 4.6,
    category: 'speaker'
  },
  {
    title: 'Portable Bluetooth Speaker with FM Radio',
    brand: 'Mi',
    price: 1499,
    id: '15',
    imageUrl: 'https://th.bing.com/th/id/OIP.X-CgmR7NbqA6Xjwus8cb3AHaHa?rs=1&pid=ImgDetMain',
    rating: 4.2,
    category: 'speaker'
  },
  {
    title: 'Rugged Bluetooth Speaker',
    brand: 'JBL',
    price: 3999,
    id: '16',
    imageUrl: 'https://9to5toys.com/wp-content/uploads/sites/5/2015/09/jbl-xtreme-9to5toys-review.jpg?quality=82&strip=all',
    rating: 4.4,
    category: 'speaker'
  },
  {
    title: 'Smart Bluetooth Speaker with Alexa',
    brand: 'Echo',
    price: 3999,
    id: '17',
    imageUrl: 'https://th.bing.com/th/id/OIP.9unxZBx1ABg10Vlp5ryQoQHaEs?rs=1&pid=ImgDetMain',
    rating: 4.5,
    category: 'speaker'
  },
  {
    title: 'Bluetooth Speaker with Extra Bass',
    brand: 'Sony',
    price: 8499,
    id: '18',
    imageUrl: 'https://th.bing.com/th/id/OIP.0qq_QyoWbE0XcNS0z55qqwHaEK?rs=1&pid=ImgDetMain',
    rating: 4.7,
    category: 'speaker'
  },
  {
    title: 'Portable Speaker with Bluetooth & NFC',
    brand: 'Sony',
    price: 6999,
    id: '19',
    imageUrl: 'https://brain-images-ssl.cdn.dixons.com/1/8/10178881/l_10178881_017.jpg',
    rating: 4.3,
    category: 'speaker'
  },
  {
    title: 'Bluetooth Speaker with Stereo Sound',
    brand: 'Boat',
    price: 1999,
    id: '20',
    imageUrl: 'https://th.bing.com/th/id/OIP.82Rp9uVppv0YYoI7R2lEagHaFj?rs=1&pid=ImgDetMain',
    rating: 4.2,
    category: 'speaker'
  },
  {
    title: 'Portable Bluetooth Speaker with 360° Sound',
    brand: 'Ultimate Ears',
    price: 6499,
    id: '21',
    imageUrl: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/51f6a2f3-e14f-4c9a-9fc1-017e974f4a72.__CR0,0,1464,600_PT0_SX1464_V1___.jpg',
    rating: 4.8,
    category: 'speaker'
  },
  {
    title: 'Bluetooth Party Speaker with Lights',
    brand: 'Philips',
    price: 9999,
    id: '22',
    imageUrl: 'https://images.philips.com/is/image/philipsconsumer/063379f851444da8a30bb0cc0045fc84?wid=305&hei=173&$jpglarge$',
    rating: 4.5,
    category: 'speaker'
  },
  {
    title: 'Portable Bluetooth Speaker with Enhanced Bass',
    brand: 'Boat',
    price: 1499,
    id: '23',
    imageUrl: 'https://s3b.cashify.in/gpro/uploads/2023/06/14132941/boat-bluetooth-speakers-1024x512.jpg',
    rating: 4.3,
    category: 'speaker'
  },
  {
    title: 'Waterproof Portable Speaker',
    brand: 'Sony',
    price: 7499,
    id: '24',
    imageUrl: 'https://m.media-amazon.com/images/I/71lC0e-kqWL.jpg',
    rating: 4.7,
    category: 'speaker'
  },
  {
    title: 'Comb',
    brand: 'Patheos',
    price: 299,
    id: '25',
    imageUrl: 'https://wp-media.patheos.com/blogs/sites/307/2022/08/Christophers-Comb.jpg',
    rating: 4.0,
    category: 'saloon products'
  },
  {
    title: 'Bluetooth Speaker',
    brand: 'Marshall',
    price: 5000,
    id: '26',
    imageUrl: 'https://www.gizmochina.com/wp-content/uploads/2022/06/Marshall-Woburn-III-bluetooth-speaker.webp',
    rating: 4.5,
    category: 'speaker',
  },
  {
    title: 'Smart TV',
    brand: 'Brand C',
    price: 49999,
    id: '27',
    imageUrl: 'https://www.thetechedvocate.org/wp-content/uploads/2023/05/tcl-6-series-tv-r6-2022-6396.webp',
    rating: 4.8,
    category: 'electronics',
  },
  {
    title: 'Coffee Maker',
    brand: 'Brand D',
    price: 49.99,
    id: '28',
    imageUrl: 'https://m.media-amazon.com/images/S/aplus-media/vc/cd553223-0418-47c5-bde7-25546fb2c1a1.jpg',
    rating: 4.2,
    category: 'appliances',
  },
  {
    title: 'Action Figure',
    brand: 'Brand E',
    price: 19.99,
    id: '29',
    imageUrl: 'https://th.bing.com/th/id/OIP.rnUS560IZsRpwJGvJMeKowEsEs?rs=1&pid=ImgDetMain',
    rating: 4.7,
    category: 'toys',
  },
  {
    title: 'Wireless Headphones',
    brand: 'Studio',
    price: 599,
    id: '30',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/G/02/aplusautomation/vendorimages/fe5dc7f8-6738-42d9-b20d-0120eceef1ec.jpg._CB274416035_.jpg',
    rating: 4.0,
    category: 'headphones'
  },
  {
    title: 'Bluetooth Wireless Headphones',
    brand: 'Boat',
    price: 2999,
    id: '31',
    imageUrl: 'https://vlebazaar.in/image/cache/catalog/boAt-Rockerz-550-Wireless-Bluetooth-Over-The-Ear-Headphones-with-Mic-Arm/boAt-Rockerz-550-Wireless-Bluetooth-Over-The-Ear-Headphones-with-Mic-Army-Green--1000x1000.jpg',
    rating: 4.3,
    category: 'headphones'
  },
  {
    title: 'Noise Cancelling Headphones',
    brand: 'Sony',
    price: 14999,
    id: '32',
    imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5748/5748832_rd.jpg',
    rating: 4.8,
    category: 'headphones'
  },
  {
    title: 'Over-Ear Bluetooth Headphones',
    brand: 'JBL',
    price: 4999,
    id: '33',
    imageUrl: 'https://m.media-amazon.com/images/I/A1UfzenZOrL._CR578,0,3468,3468_UX175.jpg',
    rating: 4.6,
    category: 'headphones'
  },
  {
    title: 'Gaming Headphones with Mic',
    brand: 'HyperX',
    price: 7999,
    id: '34',
    imageUrl: 'https://m.media-amazon.com/images/I/71xHrLkdhtL._SL1500_.jpg',
    rating: 4.7,
    category: 'headphones'
  },
  {
    title: 'True Wireless Earbuds',
    brand: 'Apple',
    price: 17999,
    id: '35',
    imageUrl: 'https://headphonesaddict.com/wp-content/uploads/2020/08/Apple-AirPods-2-true-wireless-earbuds.jpg',
    rating: 4.9,
    category: 'headphones'
  },
  {
    title: 'Bluetooth Sports Headphones',
    brand: 'Boat',
    price: 1999,
    id: '36',
    imageUrl: 'https://th.bing.com/th/id/OIP.OnPcZ_GqliQz6o6RUfAfOQAAAA?w=195&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    rating: 4.4,
    category: 'headphones'
  },
  {
    title: 'On-Ear Bluetooth Headphones',
    brand: 'Beats',
    price: 15999,
    id: '37',
    imageUrl: 'https://th.bing.com/th/id/OIP.1pRhxDFJZj0hEcgdxYG1hAHaFj?w=256&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    rating: 4.7,
    category: 'headphones'
  },
  {
    title: 'Wireless Headphones with Deep Bass',
    brand: 'Sony',
    price: 9999,
    id: '38',
    imageUrl: 'https://th.bing.com/th/id/OIP.FlAml0zr9Bk2sRyDirYdjAHaC5?w=325&h=136&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    rating: 4.6,
    category: 'headphones'
  },
  {
    title: 'Noise Cancelling Earbuds',
    brand: 'Samsung',
    price: 12999,
    id: '39',
    imageUrl: 'https://th.bing.com/th/id/OIP.aPuLBvRX4fitOJmtQZkX8gHaE3?w=273&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    rating: 4.8,
    category: 'headphones'
  },
  {
    title: 'In-Ear Wireless Headphones',
    brand: 'JBL',
    price: 3999,
    id: '40',
    imageUrl: 'https://miro.medium.com/v2/resize:fit:700/0*RXXydDnPVnXPLNMt.jpeg',
    rating: 4.4,
    category: 'headphones'
  },
  {
    title: 'Bluetooth Headphones with Mic',
    brand: 'Philips',
    price: 2499,
    id: '41',
    imageUrl: 'https://img.merkandi.com/imgcache/resized/images/offer/2022/01/20/47836_1(61e897f71db24).jpeg',
    rating: 4.2,
    category: 'headphones'
  },
  {
    title: 'Over-Ear Wireless Headphones',
    brand: 'Sennheiser',
    price: 10999,
    id: '42',
    imageUrl: 'https://th.bing.com/th/id/OIP.Ph-7EVfNy2e1GBLGFrXSaQHaIq?rs=1&pid=ImgDetMain',
    rating: 4.8,
    category: 'headphones'
  },
  {
    title: 'Gaming Headset with Surround Sound',
    brand: 'Logitech',
    price: 8999,
    id: '43',
    imageUrl: 'https://th.bing.com/th/id/OIP.tw51LReZxbiizXWj9Qs3yAHaFl?rs=1&pid=ImgDetMain',
    rating: 4.7,
    category: 'headphones'
  },
  {
    title: 'ANC Wireless Headphones',
    brand: 'Bose',
    price: 29999,
    id: '44',
    imageUrl: 'https://th.bing.com/th/id/OIP.ndqgoZ2Fe0mXLU8oY_dSSQHaEc?rs=1&pid=ImgDetMain',
    rating: 4.9,
    category: 'headphones'
  },
  {
    title: 'Foldable Wireless Headphones',
    brand: 'Boat',
    price: 1999,
    id: '45',
    imageUrl: 'https://th.bing.com/th/id/OIP.9ISvKZJ0TGjyRrQoqmJ4GAAAAA?rs=1&pid=ImgDetMain',
    rating: 4.3,
    category: 'headphones'
  },
  {
    title: 'Over-Ear Headphones with Mic',
    brand: 'JBL',
    price: 6999,
    id: '46',
    imageUrl: 'https://i.pinimg.com/originals/18/72/df/1872df425bd655ee8c3b221a2a9f88b5.jpg',
    rating: 4.5,
    category: 'headphones'
  },
  {
    title: 'Wireless Gaming Headphones',
    brand: 'SteelSeries',
    price: 13999,
    id: '47',
    imageUrl: 'https://th.bing.com/th/id/OIP.8MHyEt934bLzIZexMx9ZyQAAAA?rs=1&pid=ImgDetMain',
    rating: 4.8,
    category: 'headphones'
  },
  {
    title: 'Sports Bluetooth Earphones',
    brand: 'Realme',
    price: 1499,
    id: '48',
    imageUrl: 'https://th.bing.com/th/id/R.b719e20128253abac4ef064a169e0fd2?rik=6mhf6VHqvTykQQ&riu=http%3a%2f%2fwww.gacomputers.in%2fwp-content%2fuploads%2f2020%2f11%2frealme-sweatproof-sports-headphones-realme-bluetooth-earphone-3-1024x768.jpg&ehk=B207nkG%2bq3%2fWT83tHMGSKbvZpR8tHi1SNa7cWIMmfvI%3d&risl=&pid=ImgRaw&r=0',
    rating: 4.4,
    category: 'headphones'
  },
  {
    title: 'True Wireless In-Ear Headphones',
    brand: 'OnePlus',
    price: 5999,
    id: '49',
    imageUrl: 'https://th.bing.com/th/id/OIP.ATO0qfMIQnTcAN6ROon7HAAAAA?rs=1&pid=ImgDetMain',
    rating: 4.7,
    category: 'headphones'
  },
  {
    title: 'Over-Ear Wireless ANC Headphones',
    brand: 'Sony',
    price: 17999,
    id: '50',
    imageUrl: 'https://static.tnn.in/thumb/msid-98718692,thumbsize-1046259,width-1280,height-720,resizemode-75/98718692.jpg',
    rating: 4.8,
    category: 'headphones'
  },
  {
    title: 'Portable Blender',
    brand: 'NutriBullet',
    price: 2999,
    id: '51',
    imageUrl: 'https://hnau.imgix.net/media/catalog/product/n/b/nb07400k-nutribullet-cordless-portable-blender-black-4.jpg?auto=compress&auto=format&fill-color=FFFFFF&fit=fill&fill=solid&w=496&h=279',
    rating: 4.5,
    category: 'mix products'
  },
  {
    title: 'Instant Pot Duo',
    brand: 'Instant Pot',
    price: 8999,
    id: '52',
    imageUrl: 'https://i2.wp.com/pressurecookingtoday.com/wp-content/uploads/2022/11/Instant_Pot_Duo_Plus_Whisper_Quiet_review_by_Pressure_Cooking_Today_IMG_0037-1600x1140.jpg',
    rating: 4.7,
    category: 'mix products'
  },
  {
    title: 'Air Fryer',
    brand: 'Philips',
    price: 7499,
    id: '53',
    imageUrl: 'https://cdn.staticans.com/image/tr:e-sharpen-01,h-1500,w-1500,cm-pad_resize/catalog/brandstore/philips/254-2023_04_25-HD9257_4.jpg',
    rating: 4.6,
    category: 'mix products'
  },
  {
    title: 'Electric Kettle',
    brand: 'Prestige',
    price: 1499,
    id: '54',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2022/4/GX/JL/GQ/124673328/prestige-pkoss-1-5l-electric-kettle-500x500.JPG',
    rating: 4.4,
    category: 'mix products'
  },
  {
    title: 'Cordless Vacuum Cleaner',
    brand: 'Dyson',
    price: 29999,
    id: '55',
    imageUrl: 'https://th.bing.com/th/id/OIP.KI83LbhOQaUHSJ0NTFTOxwHaEK?rs=1&pid=ImgDetMain',
    rating: 4.8,
    category: 'mix products'
  },
  {
    title: 'Smart Water Bottle',
    brand: 'HidrateSpark',
    price: 3499,
    id: '56',
    imageUrl: 'https://th.bing.com/th/id/OIP.Mg2dC6mEnHkQIVWH243WUAAAAA?rs=1&pid=ImgDetMain',
    rating: 4.3,
    category: 'mix products'
  },
  {
    title: 'Electric Toothbrush',
    brand: 'Oral-B',
    price: 2499,
    id: '57',
    imageUrl: 'https://th.bing.com/th/id/OIP.Ut2qY4N762BDF-nOAFuQrgHaJ4?rs=1&pid=ImgDetMain',
    rating: 4.6,
    category: 'mix products'
  },
  {
    title: 'Robot Vacuum Cleaner',
    brand: 'iRobot',
    price: 25999,
    id: '58',
    imageUrl: 'https://th.bing.com/th/id/OIP.cv1Uo6ZcC9aal_nHvBRtKAAAAA?rs=1&pid=ImgDetMain',
    rating: 4.7,
    category: 'mix products'
  },
  {
    title: 'Smart Light Bulb',
    brand: 'Philips Hue',
    price: 1599,
    id: '59',
    imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/philips-hue-pmx070121gerthingchanges-001-1624371474.jpg?crop=0.468xw:0.622xh;0.267xw,0.371xh&resize=640:*',
    rating: 4.5,
    category: 'mix products'
  },
  {
    title: 'Wireless Charging Pad',
    brand: 'Anker',
    price: 1499,
    id: '60',
    imageUrl: 'https://www.tccq.com/image/cache/catalog/1209001/Anker-10W-Wireless-Charging-Pad-Qi-in-Qatar-4-1200x1200.jpeg',
    rating: 4.4,
    category: 'mix products'
  },
  {
    title: 'UV Smartphone Sanitizer',
    brand: 'PhoneSoap',
    price: 3999,
    id: '61',
    imageUrl: 'https://www.refinery29.com/images/10117198.jpg',
    rating: 4.6,
    category: 'mix products'
  },
  {
    title: 'Smart Door Lock',
    brand: 'August',
    price: 11999,
    id: '62',
    imageUrl: 'https://th.bing.com/th/id/OIP.eqYCUY_NQt-mUU4Xua7CZgHaEn?rs=1&pid=ImgDetMain',
    rating: 4.7,
    category: 'mix products'
  },
  {
    title: 'Portable Air Conditioner',
    brand: 'LG',
    price: 25999,
    id: '63',
    imageUrl: 'https://i5.walmartimages.com/asr/9f016954-cf55-454b-8824-1547c2bd00bd_1.5d3228d5c8d273f5fc1a0d7d26d97816.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
    rating: 4.5,
    category: 'mix products'
  },
{
  title: 'Smart Mirror',
  brand: 'SimpleHuman',
  price: 9999,
  id: '64',
  imageUrl: 'https://i5.walmartimages.com/asr/9f016954-cf55-454b-8824-1547c2bd00bd_1.5d3228d5c8d273f5fc1a0d7d26d97816.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
  rating: 4.3,
  category: 'mix products'
},
{
  title: 'Digital Meat Thermometer',
  brand: 'ThermoPro',
  price: 1999,
  id: '65',
  imageUrl: 'https://i5.walmartimages.com/asr/9f016954-cf55-454b-8824-1547c2bd00bd_1.5d3228d5c8d273f5fc1a0d7d26d97816.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
  rating: 4.8,
  category: 'mix products'
},
{
  title: 'Smart Thermostat',
  brand: 'Nest',
  price: 11999,
  id: '66',
  imageUrl: 'https://i5.walmartimages.com/asr/9f016954-cf55-454b-8824-1547c2bd00bd_1.5d3228d5c8d273f5fc1a0d7d26d97816.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
  rating: 4.7,
  category: 'mix products'
},
{
  title: 'Smart Scale',
  brand: 'Fitbit',
  price: 4999,
  id: '67',
  imageUrl: 'https://i5.walmartimages.com/asr/9f016954-cf55-454b-8824-1547c2bd00bd_1.5d3228d5c8d273f5fc1a0d7d26d97816.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
  rating: 4.5,
  category: 'mix products'
},
{
  title: 'Electric Foot Massager',
  brand: 'Renpho',
  price: 5999,
  id: '68',
  imageUrl: 'https://i5.walmartimages.com/asr/9f016954-cf55-454b-8824-1547c2bd00bd_1.5d3228d5c8d273f5fc1a0d7d26d97816.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
  rating: 4.6,
  category: 'mix products'
},
{
  title: 'Smart Security Camera',
  brand: 'Arlo',
  price: 10999,
  id: '69',
  imageUrl: 'https://i5.walmartimages.com/asr/9f016954-cf55-454b-8824-1547c2bd00bd_1.5d3228d5c8d273f5fc1a0d7d26d97816.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
  rating: 4.7,
  category: 'mix products'
},
{
  title: 'Wireless Earbuds',
  brand: 'Samsung',
  price: 6999,
  id: '70',
  imageUrl: 'https://i5.walmartimages.com/asr/9f016954-cf55-454b-8824-1547c2bd00bd_1.5d3228d5c8d273f5fc1a0d7d26d97816.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
  rating: 4.6,
  category: 'mix products'
}
,
{
  title: 'Basmati Rice',
  brand: 'Daawat',
  price: 599,
  id: '71',
  imageUrl: 'https://www.rd.com/wp-content/uploads/2023/04/Getty-1051355600-Resize-DH-RD-Most-Popular-Grocery-Item.jpg',
  rating: 4.7,
  category: 'grocery'
},
{
  title: 'Almonds',
  brand: 'Happilo',
  price: 799,
  id: '72',
  imageUrl: 'https://www.rd.com/wp-content/uploads/2023/04/Getty-1051355600-Resize-DH-RD-Most-Popular-Grocery-Item.jpg',
  rating: 4.5,
  category: 'grocery'
},
{
  title: 'Olive Oil',
  brand: 'Borges',
  price: 999,
  id: '73',
  imageUrl: 'https://www.rd.com/wp-content/uploads/2023/04/Getty-1051355600-Resize-DH-RD-Most-Popular-Grocery-Item.jpg',
  rating: 4.6,
  category: 'grocery'
},
{
  title: 'Peanut Butter',
  brand: 'Pintola',
  price: 349,
  id: '74',
  imageUrl: 'https://www.rd.com/wp-content/uploads/2023/04/Getty-1051355600-Resize-DH-RD-Most-Popular-Grocery-Item.jpg',
  rating: 4.7,
  category: 'grocery'
},
{
  title: 'Whole Wheat Flour',
  brand: 'Aashirvaad',
  price: 299,
  id: '75',
  imageUrl: 'https://www.rd.com/wp-content/uploads/2023/04/Getty-1051355600-Resize-DH-RD-Most-Popular-Grocery-Item.jpg',
  rating: 4.8,
  category: 'grocery'
},
{
  title: 'Organic Honey',
  brand: 'Dabur',
  price: 499,
  id: '76',
  imageUrl: 'https://www.rd.com/wp-content/uploads/2023/04/Getty-1051355600-Resize-DH-RD-Most-Popular-Grocery-Item.jpg',
  rating: 4.6,
  category: 'grocery'
},
{
  title: 'Oats',
  brand: 'Quaker',
  price: 199,
  id: '77',
  imageUrl: 'https://www.rd.com/wp-content/uploads/2023/04/Getty-1051355600-Resize-DH-RD-Most-Popular-Grocery-Item.jpg',
  rating: 4.5,
  category: 'grocery'
},
{
  title: 'Coconut Oil',
  brand: 'Maxcare',
  price: 249,
  id: '78',
  imageUrl: 'https://www.rd.com/wp-content/uploads/2023/04/Getty-1051355600-Resize-DH-RD-Most-Popular-Grocery-Item.jpg',
  rating: 4.7,
  category: 'grocery'
},
{
  title: 'Green Tea',
  brand: 'Lipton',
  price: 349,
  id: '79',
  imageUrl: 'https://www.rd.com/wp-content/uploads/2023/04/Getty-1051355600-Resize-DH-RD-Most-Popular-Grocery-Item.jpg',
  rating: 4.3,
  category: 'grocery'
},
{
  title: 'Dry Dates',
  brand: 'Lion',
  price: 299,
  id: '80',
  imageUrl: 'https://www.rd.com/wp-content/uploads/2023/04/Getty-1051355600-Resize-DH-RD-Most-Popular-Grocery-Item.jpg',
  rating: 4.4,
  category: 'grocery'
},
{
  title: 'Brown Sugar',
  brand: 'Tata',
  price: 139,
  id: '81',
  imageUrl: 'https://www.rd.com/wp-content/uploads/2023/04/Getty-1051355600-Resize-DH-RD-Most-Popular-Grocery-Item.jpg',
  rating: 4.5,
  category: 'grocery'
},
{
  title: 'Cashew Nuts',
  brand: 'Nutty Gritties',
  price: 499,
  id: '82',
  imageUrl: 'https://www.rd.com/wp-content/uploads/2023/04/Getty-1051355600-Resize-DH-RD-Most-Popular-Grocery-Item.jpg',
  rating: 4.6,
  category: 'grocery'
},
{
  title: 'Green Coffee Beans',
  brand: 'Sinew Nutrition',
  price: 449,
  id: '83',
  imageUrl: 'https://www.rd.com/wp-content/uploads/2023/04/Getty-1051355600-Resize-DH-RD-Most-Popular-Grocery-Item.jpg',
  rating: 4.4,
  category: 'grocery'
},
{
  title: 'Pasta',
  brand: 'Barilla',
  price: 299,
  id: '84',
  imageUrl: 'https://www.rd.com/wp-content/uploads/2023/04/Getty-1051355600-Resize-DH-RD-Most-Popular-Grocery-Item.jpg',
  rating: 4.6,
  category: 'grocery'
},
{
  title: 'Ghee',
  brand: 'Amul',
  price: 599,
  id: '85',
  imageUrl: 'https://www.rd.com/wp-content/uploads/2023/04/Getty-1051355600-Resize-DH-RD-Most-Popular-Grocery-Item.jpg',
  rating: 4.8,
  category: 'grocery'
},
{
  title: 'Chia Seeds',
  brand: 'True Elements',
  price: 299,
  id: '86',
  imageUrl: 'https://www.rd.com/wp-content/uploads/2023/04/Getty-1051355600-Resize-DH-RD-Most-Popular-Grocery-Item.jpg',
  rating: 4.5,
  category: 'grocery'
},
{
  title: 'Organic Turmeric Powder',
  brand: '24 Mantra',
  price: 149,
  id: '87',
  imageUrl: 'https://www.rd.com/wp-content/uploads/2023/04/Getty-1051355600-Resize-DH-RD-Most-Popular-Grocery-Item.jpg',
  rating: 4.8,
  category: 'grocery'
},
{
  title: 'Organic Jaggery',
  brand: 'Dhampur',
  price: 199,
  id: '88',
  imageUrl: 'https://www.rd.com/wp-content/uploads/2023/04/Getty-1051355600-Resize-DH-RD-Most-Popular-Grocery-Item.jpg',
  rating: 4.7,
  category: 'grocery'
},
{
  title: 'Mixed Dry Fruits',
  brand: 'Farmley',
  price: 999,
  id: '89',
  imageUrl: 'https://www.rd.com/wp-content/uploads/2023/04/Getty-1051355600-Resize-DH-RD-Most-Popular-Grocery-Item.jpg',
  rating: 4.6,
  category: 'grocery'
},
{
  title: 'Granola Bars',
  brand: 'Kellogg’s',
  price: 349,
  id: '90',
  imageUrl: 'https://www.rd.com/wp-content/uploads/2023/04/Getty-1051355600-Resize-DH-RD-Most-Popular-Grocery-Item.jpg',
  rating: 4.4,
  category: 'grocery'
},
{
  title: 'AirPods Pro Case',
  brand: 'Spigen',
  price: 1499,
  id: '91',
  imageUrl: 'https://i.etsystatic.com/22201959/r/il/eab078/2394927907/il_1588xN.2394927907_l25l.jpg',
  rating: 4.7,
  category: 'airpods case'
},
{
  title: 'AirPods 2 Case',
  brand: 'Caseology',
  price: 999,
  id: '92',
  imageUrl: 'https://i.etsystatic.com/22201959/r/il/eab078/2394927907/il_1588xN.2394927907_l25l.jpg',
  rating: 4.5,
  category: 'airpods case'
},
{
  title: 'AirPods Pro 2nd Gen Case',
  brand: 'Nomad',
  price: 1799,
  id: '93',
  imageUrl: 'https://i.etsystatic.com/22201959/r/il/eab078/2394927907/il_1588xN.2394927907_l25l.jpg',
  rating: 4.8,
  category: 'airpods case'
},
{
  title: 'AirPods Case with Keychain',
  brand: 'Elago',
  price: 1299,
  id: '94',
  imageUrl: 'https://i.etsystatic.com/22201959/r/il/eab078/2394927907/il_1588xN.2394927907_l25l.jpg',
  rating: 4.6,
  category: 'airpods case'
},
{
  title: 'Silicone AirPods Case',
  brand: 'Fintie',
  price: 799,
  id: '95',
  imageUrl: 'https://i.etsystatic.com/22201959/r/il/eab078/2394927907/il_1588xN.2394927907_l25l.jpg',
  rating: 4.4,
  category: 'airpods case'
},
{
  title: 'AirPods Pro Case with Strap',
  brand: 'Moshi',
  price: 1899,
  id: '96',
  imageUrl: 'https://i.etsystatic.com/22201959/r/il/eab078/2394927907/il_1588xN.2394927907_l25l.jpg',
  rating: 4.7,
  category: 'airpods case'
},
{
  title: 'Wooden AirPods Case',
  brand: 'Laut',
  price: 1499,
  id: '97',
  imageUrl: 'https://i.etsystatic.com/22201959/r/il/eab078/2394927907/il_1588xN.2394927907_l25l.jpg',
  rating: 4.5,
  category: 'airpods case'
},
{
  title: 'Shockproof AirPods Case',
  brand: 'Spigen',
  price: 899,
  id: '98',
  imageUrl: 'https://i.etsystatic.com/22201959/r/il/eab078/2394927907/il_1588xN.2394927907_l25l.jpg',
  rating: 4.6,
  category: 'airpods case'
},
{
  title: 'Luxury Leather AirPods Case',
  brand: 'Twelve South',
  price: 2499,
  id: '99',
  imageUrl: 'https://i.etsystatic.com/22201959/r/il/eab078/2394927907/il_1588xN.2394927907_l25l.jpg',
  rating: 4.8,
  category: 'airpods case'
},
{
  title: 'AirPods Case Cover',
  brand: 'UAG',
  price: 1499,
  id: '100',
  imageUrl: 'https://i.etsystatic.com/22201959/r/il/eab078/2394927907/il_1588xN.2394927907_l25l.jpg',
  rating: 4.7,
  category: 'airpods case'
},
{
  title: 'Clear AirPods Case',
  brand: 'Case-Mate',
  price: 1299,
  id: '101',
  imageUrl: 'https://i.etsystatic.com/22201959/r/il/eab078/2394927907/il_1588xN.2394927907_l25l.jpg',
  rating: 4.6,
  category: 'airpods case'
},
{
  title: 'Cute AirPods Case',
  brand: 'i-Blason',
  price: 999,
  id: '102',
  imageUrl: 'https://i.etsystatic.com/22201959/r/il/eab078/2394927907/il_1588xN.2394927907_l25l.jpg',
  rating: 4.5,
  category: 'airpods case'
},
{
  title: 'AirPods Leather Case',
  brand: 'Bellroy',
  price: 2499,
  id: '103',
  imageUrl: 'https://i.etsystatic.com/22201959/r/il/eab078/2394927907/il_1588xN.2394927907_l25l.jpg',
  rating: 4.7,
  category: 'airpods case'
},
{
  title: 'Mini AirPods Case',
  brand: 'Supcase',
  price: 1399,
  id: '104',
  imageUrl: 'https://i.etsystatic.com/22201959/r/il/eab078/2394927907/il_1588xN.2394927907_l25l.jpg',
  rating: 4.6,
  category: 'airpods case'
},
{
  title: 'Vintage AirPods Case',
  brand: 'ZAGG',
  price: 1799,
  id: '105',
  imageUrl: 'https://i.etsystatic.com/22201959/r/il/eab078/2394927907/il_1588xN.2394927907_l25l.jpg',
  rating: 4.5,
  category: 'airpods case'
},
{
  title: 'AirPods Case with Stand',
  brand: 'Anker',
  price: 799,
  id: '106',
  imageUrl: 'https://i.etsystatic.com/22201959/r/il/eab078/2394927907/il_1588xN.2394927907_l25l.jpg',
  rating: 4.6,
  category: 'airpods case'
},
{
  title: 'Soft Silicone Case for AirPods',
  brand: 'Moshi',
  price: 1299,
  id: '107',
  imageUrl: 'https://i.etsystatic.com/22201959/r/il/eab078/2394927907/il_1588xN.2394927907_l25l.jpg',
  rating: 4.7,
  category: 'airpods case'
},
{
  title: 'AirPods Case with Wireless Charging',
  brand: 'Kangaroo',
  price: 1799,
  id: '108',
  imageUrl: 'https://i.etsystatic.com/22201959/r/il/eab078/2394927907/il_1588xN.2394927907_l25l.jpg',
  rating: 4.6,
  category: 'airpods case'
},
{
  title: 'AirPods Pro 2 Case with Cover',
  brand: 'Zagg',
  price: 1599,
  id: '109',
  imageUrl: 'https://i.etsystatic.com/22201959/r/il/eab078/2394927907/il_1588xN.2394927907_l25l.jpg',
  rating: 4.8,
  category: 'airpods case'
},
{
  title: 'Apple Watch Series 8',
  brand: 'Apple',
  price: 39999,
  id: '110',
  imageUrl: 'https://i5.walmartimages.com/asr/e1ae90b2-98da-443b-888c-a71228c5234e.eb10d07052b374f38aa17166043f5a7a.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
  rating: 4.8,
  category: 'smart watch'
},
{
  title: 'Samsung Galaxy Watch 5',
  brand: 'Samsung',
  price: 27999,
  id: '111',
  imageUrl: 'https://i5.walmartimages.com/asr/e1ae90b2-98da-443b-888c-a71228c5234e.eb10d07052b374f38aa17166043f5a7a.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
  rating: 4.7,
  category: 'smart watch'
},
{
  title: 'Amazfit GTR 3',
  brand: 'Amazfit',
  price: 10999,
  id: '112',
  imageUrl: 'https://i5.walmartimages.com/asr/e1ae90b2-98da-443b-888c-a71228c5234e.eb10d07052b374f38aa17166043f5a7a.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
  rating: 4.5,
  category: 'smart watch'
},
{
  title: 'Fitbit Versa 3',
  brand: 'Fitbit',
  price: 21999,
  id: '113',
  imageUrl: 'https://i5.walmartimages.com/asr/e1ae90b2-98da-443b-888c-a71228c5234e.eb10d07052b374f38aa17166043f5a7a.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
  rating: 4.6,
  category: 'smart watch'
},
{
  title: 'Garmin Forerunner 245',
  brand: 'Garmin',
  price: 22999,
  id: '114',
  imageUrl: 'https://i5.walmartimages.com/asr/e1ae90b2-98da-443b-888c-a71228c5234e.eb10d07052b374f38aa17166043f5a7a.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
  rating: 4.7,
  category: 'smart watch'
},
{
  title: 'Huawei Watch GT 3',
  brand: 'Huawei',
  price: 17999,
  id: '115',
  imageUrl: 'https://i5.walmartimages.com/asr/e1ae90b2-98da-443b-888c-a71228c5234e.eb10d07052b374f38aa17166043f5a7a.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
  rating: 4.6,
  category: 'smart watch'
},
{
  title: 'Noise ColorFit Pro 3',
  brand: 'Noise',
  price: 2999,
  id: '116',
  imageUrl: 'https://i5.walmartimages.com/asr/e1ae90b2-98da-443b-888c-a71228c5234e.eb10d07052b374f38aa17166043f5a7a.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
  rating: 4.4,
  category: 'smart watch'
},
{
  title: 'Oppo Watch 46mm',
  brand: 'Oppo',
  price: 14999,
  id: '117',
  imageUrl: 'https://i5.walmartimages.com/asr/e1ae90b2-98da-443b-888c-a71228c5234e.eb10d07052b374f38aa17166043f5a7a.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
  rating: 4.5,
  category: 'smart watch'
},
{
  title: 'Xiaomi Mi Watch',
  brand: 'Xiaomi',
  price: 4999,
  id: '118',
  imageUrl: 'https://i5.walmartimages.com/asr/e1ae90b2-98da-443b-888c-a71228c5234e.eb10d07052b374f38aa17166043f5a7a.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
  rating: 4.3,
  category: 'smart watch'
},
{
  title: 'Realme Watch S Pro',
  brand: 'Realme',
  price: 8999,
  id: '119',
  imageUrl: 'https://i5.walmartimages.com/asr/e1ae90b2-98da-443b-888c-a71228c5234e.eb10d07052b374f38aa17166043f5a7a.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
  rating: 4.6,
  category: 'smart watch'
},
{
  title: 'Amazfit Bip U Pro',
  brand: 'Amazfit',
  price: 4999,
  id: '120',
  imageUrl: 'https://i5.walmartimages.com/asr/e1ae90b2-98da-443b-888c-a71228c5234e.eb10d07052b374f38aa17166043f5a7a.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
  rating: 4.4,
  category: 'smart watch'
},
{
  title: 'TicWatch Pro 3',
  brand: 'TicWatch',
  price: 25999,
  id: '121',
  imageUrl: 'https://i5.walmartimages.com/asr/e1ae90b2-98da-443b-888c-a71228c5234e.eb10d07052b374f38aa17166043f5a7a.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
  rating: 4.8,
  category: 'smart watch'
},
{
  title: 'Samsung Galaxy Watch 4',
  brand: 'Samsung',
  price: 22999,
  id: '122',
  imageUrl: 'https://i5.walmartimages.com/asr/e1ae90b2-98da-443b-888c-a71228c5234e.eb10d07052b374f38aa17166043f5a7a.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
  rating: 4.5,
  category: 'smart watch'
},
{
  title: 'Fossil Gen 5 LTE',
  brand: 'Fossil',
  price: 25999,
  id: '123',
  imageUrl: 'https://i5.walmartimages.com/asr/e1ae90b2-98da-443b-888c-a71228c5234e.eb10d07052b374f38aa17166043f5a7a.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
  rating: 4.7,
  category: 'smart watch'
},
{
  title: 'Suunto 7',
  brand: 'Suunto',
  price: 29999,
  id: '124',
  imageUrl: 'https://i5.walmartimages.com/asr/e1ae90b2-98da-443b-888c-a71228c5234e.eb10d07052b374f38aa17166043f5a7a.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
  rating: 4.6,
  category: 'smart watch'
},
{
  title: 'Skagen Falster 3',
  brand: 'Skagen',
  price: 17999,
  id: '125',
  imageUrl: 'https://i5.walmartimages.com/asr/e1ae90b2-98da-443b-888c-a71228c5234e.eb10d07052b374f38aa17166043f5a7a.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
  rating: 4.5,
  category: 'smart watch'
},
{
  title: 'Withings Steel HR',
  brand: 'Withings',
  price: 12999,
  id: '126',
  imageUrl: 'https://i5.walmartimages.com/asr/e1ae90b2-98da-443b-888c-a71228c5234e.eb10d07052b374f38aa17166043f5a7a.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
  rating: 4.4,
  category: 'smart watch'
},
{
  title: 'Diesel On Axial',
  brand: 'Diesel',
  price: 19999,
  id: '127',
  imageUrl: 'https://i5.walmartimages.com/asr/e1ae90b2-98da-443b-888c-a71228c5234e.eb10d07052b374f38aa17166043f5a7a.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
  rating: 4.6,
  category: 'smart watch'
},
{
  title: 'Casio G-Shock GBD-H1000',
  brand: 'Casio',
  price: 34999,
  id: '128',
  imageUrl: 'https://i5.walmartimages.com/asr/e1ae90b2-98da-443b-888c-a71228c5234e.eb10d07052b374f38aa17166043f5a7a.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
  rating: 4.7,
  category: 'smart watch'
},
{
  title: 'Apple Watch Magnetic Charger',
  brand: 'Apple',
  price: 1999,
  id: '130',
  imageUrl: 'https://th.bing.com/th/id/OIP.0gtIlaYAWI-_elSwl1667wHaHa?rs=1&pid=ImgDetMain',
  rating: 4.7,
  category: 'smart watch charge'
},
{
  title: 'Samsung Galaxy Watch Charger',
  brand: 'Samsung',
  price: 1499,
  id: '131',
  imageUrl: 'https://th.bing.com/th/id/OIP.0gtIlaYAWI-_elSwl1667wHaHa?rs=1&pid=ImgDetMain',
  rating: 4.5,
  category: 'smart watch charge'
},
{
  title: 'Amazfit Smartwatch Charger',
  brand: 'Amazfit',
  price: 799,
  id: '132',
  imageUrl: 'https://th.bing.com/th/id/OIP.0gtIlaYAWI-_elSwl1667wHaHa?rs=1&pid=ImgDetMain',
  rating: 4.6,
  category: 'smart watch charge'
},
{
  title: 'Fitbit Charging Cable',
  brand: 'Fitbit',
  price: 1299,
  id: '133',
  imageUrl: 'https://th.bing.com/th/id/OIP.0gtIlaYAWI-_elSwl1667wHaHa?rs=1&pid=ImgDetMain',
  rating: 4.7,
  category: 'smart watch charge'
},
{
  title: 'Garmin Charging Clip',
  brand: 'Garmin',
  price: 1499,
  id: '134',
  imageUrl: 'https://th.bing.com/th/id/OIP.0gtIlaYAWI-_elSwl1667wHaHa?rs=1&pid=ImgDetMain',
  rating: 4.6,
  category: 'smart watch charge'
},
{
  title: 'Huawei Watch Charging Dock',
  brand: 'Huawei',
  price: 999,
  id: '135',
  imageUrl: 'https://th.bing.com/th/id/OIP.0gtIlaYAWI-_elSwl1667wHaHa?rs=1&pid=ImgDetMain',
  rating: 4.5,
  category: 'smart watch charge'
},
{
  title: 'Xiaomi Mi Watch Charger',
  brand: 'Xiaomi',
  price: 599,
  id: '136',
  imageUrl: 'https://th.bing.com/th/id/OIP.0gtIlaYAWI-_elSwl1667wHaHa?rs=1&pid=ImgDetMain',
  rating: 4.3,
  category: 'smart watch charge'
},
{
  title: 'TicWatch Charging Dock',
  brand: 'TicWatch',
  price: 1299,
  id: '137',
  imageUrl: 'https://th.bing.com/th/id/OIP.0gtIlaYAWI-_elSwl1667wHaHa?rs=1&pid=ImgDetMain',
  rating: 4.6,
  category: 'smart watch charge'
},
{
  title: 'Realme Watch Charging Cable',
  brand: 'Realme',
  price: 699,
  id: '138',
  imageUrl: 'https://th.bing.com/th/id/OIP.0gtIlaYAWI-_elSwl1667wHaHa?rs=1&pid=ImgDetMain',
  rating: 4.4,
  category: 'smart watch charge'
},
{
  title: 'Suunto 7 Charging Cable',
  brand: 'Suunto',
  price: 799,
  id: '139',
  imageUrl: 'https://th.bing.com/th/id/OIP.0gtIlaYAWI-_elSwl1667wHaHa?rs=1&pid=ImgDetMain',
  rating: 4.5,
  category: 'smart watch charge'
},
{
  title: 'Fossil Gen 5 Charger',
  brand: 'Fossil',
  price: 1499,
  id: '140',
  imageUrl: 'https://th.bing.com/th/id/OIP.0gtIlaYAWI-_elSwl1667wHaHa?rs=1&pid=ImgDetMain',
  rating: 4.7,
  category: 'smart watch charge'
},
{
  title: 'Skagen Falster 3 Charger',
  brand: 'Skagen',
  price: 1299,
  id: '141',
  imageUrl: 'https://th.bing.com/th/id/OIP.0gtIlaYAWI-_elSwl1667wHaHa?rs=1&pid=ImgDetMain',
  rating: 4.6,
  category: 'smart watch charge'
},
{
  title: 'Withings Steel HR Charging Dock',
  brand: 'Withings',
  price: 999,
  id: '142',
  imageUrl: 'https://th.bing.com/th/id/OIP.0gtIlaYAWI-_elSwl1667wHaHa?rs=1&pid=ImgDetMain',
  rating: 4.6,
  category: 'smart watch charge'
},
{
  title: 'Amazfit Bip U Pro Charging Dock',
  brand: 'Amazfit',
  price: 599,
  id: '143',
  imageUrl: 'https://th.bing.com/th/id/OIP.0gtIlaYAWI-_elSwl1667wHaHa?rs=1&pid=ImgDetMain',
  rating: 4.4,
  category: 'smart watch charge'
},
{
  title: 'Amazfit GTR Charging Dock',
  brand: 'Amazfit',
  price: 899,
  id: '144',
  imageUrl: 'https://th.bing.com/th/id/OIP.0gtIlaYAWI-_elSwl1667wHaHa?rs=1&pid=ImgDetMain',
  rating: 4.5,
  category: 'smart watch charge'
},
{
  title: 'Samsung Galaxy Watch 3 Charging Dock',
  brand: 'Samsung',
  price: 1999,
  id: '145',
  imageUrl: 'https://th.bing.com/th/id/OIP.0gtIlaYAWI-_elSwl1667wHaHa?rs=1&pid=ImgDetMain',
  rating: 4.6,
  category: 'smart watch charge'
},
{
  title: 'TicWatch Pro 3 Charging Cable',
  brand: 'TicWatch',
  price: 999,
  id: '146',
  imageUrl: 'https://th.bing.com/th/id/OIP.0gtIlaYAWI-_elSwl1667wHaHa?rs=1&pid=ImgDetMain',
  rating: 4.5,
  category: 'smart watch charge'
},
{
  title: 'Xiaomi Mi Watch Charger',
  brand: 'Xiaomi',
  price: 899,
  id: '147',
  imageUrl: 'https://th.bing.com/th/id/OIP.0gtIlaYAWI-_elSwl1667wHaHa?rs=1&pid=ImgDetMain',
  rating: 4.3,
  category: 'smart watch charge'
},
{
  title: 'SanDisk 64GB MicroSDXC Card',
  brand: 'SanDisk',
  price: 799,
  id: '150',
  imageUrl: 'https://th.bing.com/th/id/OIP.9EhtJiVfzx27RS3UQWpyJgHaEL?rs=1&pid=ImgDetMain',
  rating: 4.7,
  category: 'memory card & pand'
},
{
  title: 'Samsung Evo Plus 128GB MicroSD',
  brand: 'Samsung',
  price: 1499,
  id: '151',
  imageUrl: 'https://th.bing.com/th/id/OIP.9EhtJiVfzx27RS3UQWpyJgHaEL?rs=1&pid=ImgDetMain',
  rating: 4.6,
  category: 'memory card & pand'
},
{
  title: 'Kingston 32GB MicroSD Card',
  brand: 'Kingston',
  price: 399,
  id: '152',
  imageUrl: 'https://th.bing.com/th/id/OIP.9EhtJiVfzx27RS3UQWpyJgHaEL?rs=1&pid=ImgDetMain',
  rating: 4.5,
  category: 'memory card & pand'
},
{
  title: 'PNY 256GB MicroSD Card',
  brand: 'PNY',
  price: 2499,
  id: '153',
  imageUrl: 'https://th.bing.com/th/id/OIP.9EhtJiVfzx27RS3UQWpyJgHaEL?rs=1&pid=ImgDetMain',
  rating: 4.8,
  category: 'memory card & pand'
},
{
  title: 'Lexar 128GB MicroSD Card',
  brand: 'Lexar',
  price: 1299,
  id: '154',
  imageUrl: 'https://th.bing.com/th/id/OIP.9EhtJiVfzx27RS3UQWpyJgHaEL?rs=1&pid=ImgDetMain',
  rating: 4.7,
  category: 'memory card & pand'
},
{
  title: 'Transcend 64GB MicroSD',
  brand: 'Transcend',
  price: 699,
  id: '155',
  imageUrl: 'https://th.bing.com/th/id/OIP.9EhtJiVfzx27RS3UQWpyJgHaEL?rs=1&pid=ImgDetMain',
  rating: 4.6,
  category: 'memory card & pand'
},
{
  title: 'Sandisk Ultra 128GB SD Card',
  brand: 'SanDisk',
  price: 1299,
  id: '156',
  imageUrl: 'https://th.bing.com/th/id/OIP.9EhtJiVfzx27RS3UQWpyJgHaEL?rs=1&pid=ImgDetMain',
  rating: 4.6,
  category: 'memory card & pand'
},
{
  title: 'Samsung Evo Select 256GB SD Card',
  brand: 'Samsung',
  price: 2999,
  id: '157',
  imageUrl: 'https://th.bing.com/th/id/OIP.9EhtJiVfzx27RS3UQWpyJgHaEL?rs=1&pid=ImgDetMain',
  rating: 4.7,
  category: 'memory card & pand'
},
{
  title: 'Kingston Canvas React Plus 128GB',
  brand: 'Kingston',
  price: 1799,
  id: '158',
  imageUrl: 'https://th.bing.com/th/id/OIP.9EhtJiVfzx27RS3UQWpyJgHaEL?rs=1&pid=ImgDetMain',
  rating: 4.7,
  category: 'memory card & pand'
},
{
  title: 'Patriot 64GB SD Card',
  brand: 'Patriot',
  price: 899,
  id: '159',
  imageUrl: 'https://th.bing.com/th/id/OIP.9EhtJiVfzx27RS3UQWpyJgHaEL?rs=1&pid=ImgDetMain',
  rating: 4.6,
  category: 'memory card & pand'
},
{
  title: 'Adata 32GB MicroSD Card',
  brand: 'Adata',
  price: 499,
  id: '160',
  imageUrl: 'https://th.bing.com/th/id/OIP.9EhtJiVfzx27RS3UQWpyJgHaEL?rs=1&pid=ImgDetMain',
  rating: 4.5,
  category: 'memory card & pand'
},
{
  title: 'Verbatim 128GB SD Card',
  brand: 'Verbatim',
  price: 1499,
  id: '161',
  imageUrl: 'https://th.bing.com/th/id/OIP.9EhtJiVfzx27RS3UQWpyJgHaEL?rs=1&pid=ImgDetMain',
  rating: 4.6,
  category: 'memory card & pand'
},
{
  title: 'Lexar Professional 256GB SD Card',
  brand: 'Lexar',
  price: 3499,
  id: '162',
  imageUrl: 'https://th.bing.com/th/id/OIP.9EhtJiVfzx27RS3UQWpyJgHaEL?rs=1&pid=ImgDetMain',
  rating: 4.8,
  category: 'memory card & pand'
},
{
  title: 'SanDisk Extreme 512GB SD Card',
  brand: 'SanDisk',
  price: 5999,
  id: '163',
  imageUrl: 'https://th.bing.com/th/id/OIP.9EhtJiVfzx27RS3UQWpyJgHaEL?rs=1&pid=ImgDetMain',
  rating: 4.8,
  category: 'memory card & pand'
},
{
  title: 'Silicon Power 64GB SD Card',
  brand: 'Silicon Power',
  price: 799,
  id: '164',
  imageUrl: 'https://th.bing.com/th/id/OIP.9EhtJiVfzx27RS3UQWpyJgHaEL?rs=1&pid=ImgDetMain',
  rating: 4.6,
  category: 'memory card & pand'
},
{
  title: 'Samsung Pro Endurance 128GB',
  brand: 'Samsung',
  price: 2499,
  id: '165',
  imageUrl: 'https://th.bing.com/th/id/OIP.9EhtJiVfzx27RS3UQWpyJgHaEL?rs=1&pid=ImgDetMain',
  rating: 4.7,
  category: 'memory card & pand'
},
{
  title: 'Sandisk 128GB Ultra SD Card',
  brand: 'SanDisk',
  price: 1499,
  id: '166',
  imageUrl: 'https://th.bing.com/th/id/OIP.9EhtJiVfzx27RS3UQWpyJgHaEL?rs=1&pid=ImgDetMain',
  rating: 4.6,
  category: 'memory card & pand'
},
{
  title: 'Mi 10000mAh Power Bank',
  brand: 'Mi',
  price: 799,
  id: '170',
  imageUrl: 'https://www.cychacks.com/wp-content/uploads/2020/07/power-bank.jpg',
  rating: 4.5,
  category: 'power bank'
},
{
  title: 'Realme 20000mAh Power Bank',
  brand: 'Realme',
  price: 1299,
  id: '171',
  imageUrl: 'https://www.cychacks.com/wp-content/uploads/2020/07/power-bank.jpg',
  rating: 4.7,
  category: 'power bank'
},
{
  title: 'Anker PowerCore 10000mAh',
  brand: 'Anker',
  price: 1599,
  id: '172',
  imageUrl: 'https://www.cychacks.com/wp-content/uploads/2020/07/power-bank.jpg',
  rating: 4.8,
  category: 'power bank'
},
{
  title: 'Ambrane 20000mAh Power Bank',
  brand: 'Ambrane',
  price: 999,
  id: '173',
  imageUrl: 'https://www.cychacks.com/wp-content/uploads/2020/07/power-bank.jpg',
  rating: 4.6,
  category: 'power bank'
},
{
  title: 'Samsung 10000mAh Power Bank',
  brand: 'Samsung',
  price: 1299,
  id: '174',
  imageUrl: 'https://www.cychacks.com/wp-content/uploads/2020/07/power-bank.jpg',
  rating: 4.7,
  category: 'power bank'
},
{
  title: 'Intex 10000mAh Power Bank',
  brand: 'Intex',
  price: 699,
  id: '175',
  imageUrl: 'https://www.cychacks.com/wp-content/uploads/2020/07/power-bank.jpg',
  rating: 4.4,
  category: 'power bank'
},
{
  title: 'Syska 10000mAh Power Bank',
  brand: 'Syska',
  price: 799,
  id: '176',
  imageUrl: 'https://www.cychacks.com/wp-content/uploads/2020/07/power-bank.jpg',
  rating: 4.5,
  category: 'power bank'
},
{
  title: 'Crompton 20000mAh Power Bank',
  brand: 'Crompton',
  price: 1499,
  id: '177',
  imageUrl: 'https://www.cychacks.com/wp-content/uploads/2020/07/power-bank.jpg',
  rating: 4.6,
  category: 'power bank'
},
{
  title: 'Bajaj 10000mAh Power Bank',
  brand: 'Bajaj',
  price: 999,
  id: '178',
  imageUrl: 'https://www.cychacks.com/wp-content/uploads/2020/07/power-bank.jpg',
  rating: 4.4,
  category: 'power bank'
},
{
  title: 'Portronics 15000mAh Power Bank',
  brand: 'Portronics',
  price: 1299,
  id: '179',
  imageUrl: 'https://www.cychacks.com/wp-content/uploads/2020/07/power-bank.jpg',
  rating: 4.6,
  category: 'power bank'
},
{
  title: 'Boat 20000mAh Power Bank',
  brand: 'Boat',
  price: 1499,
  id: '180',
  imageUrl: 'https://www.cychacks.com/wp-content/uploads/2020/07/power-bank.jpg',
  rating: 4.7,
  category: 'power bank'
},
{
  title: 'Zebronics 10000mAh Power Bank',
  brand: 'Zebronics',
  price: 799,
  id: '181',
  imageUrl: 'https://www.cychacks.com/wp-content/uploads/2020/07/power-bank.jpg',
  rating: 4.5,
  category: 'power bank'
},
{
  title: 'iBall 10000mAh Power Bank',
  brand: 'iBall',
  price: 799,
  id: '182',
  imageUrl: 'https://www.cychacks.com/wp-content/uploads/2020/07/power-bank.jpg',
  rating: 4.4,
  category: 'power bank'
},
{
  title: 'Mi 20000mAh Power Bank',
  brand: 'Mi',
  price: 1499,
  id: '183',
  imageUrl: 'https://www.cychacks.com/wp-content/uploads/2020/07/power-bank.jpg',
  rating: 4.8,
  category: 'power bank'
},
{
  title: 'Anker PowerCore 20100mAh',
  brand: 'Anker',
  price: 2499,
  id: '184',
  imageUrl: 'https://www.cychacks.com/wp-content/uploads/2020/07/power-bank.jpg',
  rating: 4.8,
  category: 'power bank'
},
{
  title: 'Mi 5000mAh Power Bank',
  brand: 'Mi',
  price: 499,
  id: '185',
  imageUrl: 'https://www.cychacks.com/wp-content/uploads/2020/07/power-bank.jpg',
  rating: 4.5,
  category: 'power bank'
},
{
  title: 'Ambrane 10000mAh Power Bank',
  brand: 'Ambrane',
  price: 799,
  id: '186',
  imageUrl: 'https://www.cychacks.com/wp-content/uploads/2020/07/power-bank.jpg',
  rating: 4.4,
  category: 'power bank'
},
{
  title: 'Lamicall Adjustable Phone Stand',
  brand: 'Lamicall',
  price: 799,
  id: '190',
  imageUrl: 'https://madeheart.com/media/productphoto/436/56370975/IMG_7173_1500.jpg',
  rating: 4.6,
  category: 'mobile stand'
},
{
  title: 'Ugreen Adjustable Phone Stand',
  brand: 'Ugreen',
  price: 599,
  id: '191',
  imageUrl: 'https://madeheart.com/media/productphoto/436/56370975/IMG_7173_1500.jpg',
  rating: 4.7,
  category: 'mobile stand'
},
{
  title: 'Zircon Mobile Phone Stand',
  brand: 'Zircon',
  price: 499,
  id: '192',
  imageUrl: 'https://madeheart.com/media/productphoto/436/56370975/IMG_7173_1500.jpg',
  rating: 4.5,
  category: 'mobile stand'
},
{
  title: 'Atlin 360° Adjustable Phone Stand',
  brand: 'Atlin',
  price: 699,
  id: '193',
  imageUrl: 'https://madeheart.com/media/productphoto/436/56370975/IMG_7173_1500.jpg',
  rating: 4.4,
  category: 'mobile stand'
},
{
  title: 'NexStand K2 Portable Laptop Stand',
  brand: 'NexStand',
  price: 999,
  id: '194',
  imageUrl: 'https://madeheart.com/media/productphoto/436/56370975/IMG_7173_1500.jpg',
  rating: 4.5,
  category: 'mobile stand'
},
{
  title: 'Omoton Adjustable Desktop Stand',
  brand: 'Omoton',
  price: 649,
  id: '195',
  imageUrl: 'https://madeheart.com/media/productphoto/436/56370975/IMG_7173_1500.jpg',
  rating: 4.6,
  category: 'mobile stand'
},
{
  title: 'Lamicall Cell Phone Stand',
  brand: 'Lamicall',
  price: 799,
  id: '196',
  imageUrl: 'https://madeheart.com/media/productphoto/436/56370975/IMG_7173_1500.jpg',
  rating: 4.7,
  category: 'mobile stand'
},
{
  title: 'Tryone Flexible Phone Stand',
  brand: 'Tryone',
  price: 899,
  id: '197',
  imageUrl: 'https://madeheart.com/media/productphoto/436/56370975/IMG_7173_1500.jpg',
  rating: 4.6,
  category: 'mobile stand'
},
{
  title: 'Targus Mobile Stand',
  brand: 'Targus',
  price: 649,
  id: '198',
  imageUrl: 'https://madeheart.com/media/productphoto/436/56370975/IMG_7173_1500.jpg',
  rating: 4.4,
  category: 'mobile stand'
},
{
  title: 'Kootek Phone Stand',
  brand: 'Kootek',
  price: 599,
  id: '199',
  imageUrl: 'https://madeheart.com/media/productphoto/436/56370975/IMG_7173_1500.jpg',
  rating: 4.5,
  category: 'mobile stand'
},
{
  title: 'Moktek Foldable Phone Stand',
  brand: 'Moktek',
  price: 799,
  id: '200',
  imageUrl: 'https://madeheart.com/media/productphoto/436/56370975/IMG_7173_1500.jpg',
  rating: 4.6,
  category: 'mobile stand'
},
{
  title: 'MOFT Invisible Laptop Stand',
  brand: 'MOFT',
  price: 1299,
  id: '201',
  imageUrl: 'https://madeheart.com/media/productphoto/436/56370975/IMG_7173_1500.jpg',
  rating: 4.8,
  category: 'mobile stand'
},
{
  title: 'iClever Adjustable Phone Stand',
  brand: 'iClever',
  price: 899,
  id: '202',
  imageUrl: 'https://madeheart.com/media/productphoto/436/56370975/IMG_7173_1500.jpg',
  rating: 4.6,
  category: 'mobile stand'
},
{
  title: 'Anker Foldable Phone Stand',
  brand: 'Anker',
  price: 799,
  id: '203',
  imageUrl: 'https://madeheart.com/media/productphoto/436/56370975/IMG_7173_1500.jpg',
  rating: 4.7,
  category: 'mobile stand'
},
{
  title: 'Twelve South HoverBar Adjustable Stand',
  brand: 'Twelve South',
  price: 1299,
  id: '204',
  imageUrl: 'https://madeheart.com/media/productphoto/436/56370975/IMG_7173_1500.jpg',
  rating: 4.6,
  category: 'mobile stand'
},
{
  title: 'Lamicall Adjustable Tablet Stand',
  brand: 'Lamicall',
  price: 699,
  id: '205',
  imageUrl: 'https://madeheart.com/media/productphoto/436/56370975/IMG_7173_1500.jpg',
  rating: 4.7,
  category: 'mobile stand'
},
{
  title: 'Logitech Wireless Mouse',
  brand: 'Logitech',
  price: 799,
  id: '206',
  imageUrl: 'https://www.lifewire.com/thmb/KW1l5x2qWzGVHf5Fl7yAD8OwwcQ=/3000x2000/filters:fill(auto,1)/computer-hardware-2625895-final-v1-8c909b8a32434e26a225db2314823bb2.jpg',
  rating: 4.6,
  category: 'computer products'
},
{
  title: 'HP Wired Keyboard',
  brand: 'HP',
  price: 899,
  id: '207',
  imageUrl: 'https://www.lifewire.com/thmb/KW1l5x2qWzGVHf5Fl7yAD8OwwcQ=/3000x2000/filters:fill(auto,1)/computer-hardware-2625895-final-v1-8c909b8a32434e26a225db2314823bb2.jpg',
  rating: 4.4,
  category: 'computer products'
},
{
  title: 'Corsair RGB Gaming Keyboard',
  brand: 'Corsair',
  price: 3499,
  id: '208',
  imageUrl: 'https://www.lifewire.com/thmb/KW1l5x2qWzGVHf5Fl7yAD8OwwcQ=/3000x2000/filters:fill(auto,1)/computer-hardware-2625895-final-v1-8c909b8a32434e26a225db2314823bb2.jpg',
  rating: 4.8,
  category: 'computer products'
},
{
  title: 'Samsung 1TB SSD',
  brand: 'Samsung',
  price: 7999,
  id: '209',
  imageUrl: 'https://www.lifewire.com/thmb/KW1l5x2qWzGVHf5Fl7yAD8OwwcQ=/3000x2000/filters:fill(auto,1)/computer-hardware-2625895-final-v1-8c909b8a32434e26a225db2314823bb2.jpg',
  rating: 4.7,
  category: 'computer products'
},
{
  title: 'Seagate 2TB External Hard Drive',
  brand: 'Seagate',
  price: 5999,
  id: '210',
  imageUrl: 'https://www.lifewire.com/thmb/KW1l5x2qWzGVHf5Fl7yAD8OwwcQ=/3000x2000/filters:fill(auto,1)/computer-hardware-2625895-final-v1-8c909b8a32434e26a225db2314823bb2.jpg',
  rating: 4.5,
  category: 'computer products'
},
{
  title: 'BenQ 24-inch Monitor',
  brand: 'BenQ',
  price: 8999,
  id: '211',
  imageUrl: 'https://www.lifewire.com/thmb/KW1l5x2qWzGVHf5Fl7yAD8OwwcQ=/3000x2000/filters:fill(auto,1)/computer-hardware-2625895-final-v1-8c909b8a32434e26a225db2314823bb2.jpg',
  rating: 4.6,
  category: 'computer products'
},
{
  title: 'Logitech Webcam',
  brand: 'Logitech',
  price: 1499,
  id: '212',
  imageUrl: 'https://www.lifewire.com/thmb/KW1l5x2qWzGVHf5Fl7yAD8OwwcQ=/3000x2000/filters:fill(auto,1)/computer-hardware-2625895-final-v1-8c909b8a32434e26a225db2314823bb2.jpg',
  rating: 4.5,
  category: 'computer products'
},
{
  title: 'Razer DeathAdder V2 Mouse',
  brand: 'Razer',
  price: 2999,
  id: '213',
  imageUrl: 'https://www.lifewire.com/thmb/KW1l5x2qWzGVHf5Fl7yAD8OwwcQ=/3000x2000/filters:fill(auto,1)/computer-hardware-2625895-final-v1-8c909b8a32434e26a225db2314823bb2.jpg',
  rating: 4.7,
  category: 'computer products'
},
{
  title: 'Microsoft Surface Mouse',
  brand: 'Microsoft',
  price: 2999,
  id: '214',
  imageUrl: 'https://www.lifewire.com/thmb/KW1l5x2qWzGVHf5Fl7yAD8OwwcQ=/3000x2000/filters:fill(auto,1)/computer-hardware-2625895-final-v1-8c909b8a32434e26a225db2314823bb2.jpg',
  rating: 4.4,
  category: 'computer products'
},
{
  title: 'TP-Link AC1750 WiFi Router',
  brand: 'TP-Link',
  price: 2499,
  id: '215',
  imageUrl: 'https://www.lifewire.com/thmb/KW1l5x2qWzGVHf5Fl7yAD8OwwcQ=/3000x2000/filters:fill(auto,1)/computer-hardware-2625895-final-v1-8c909b8a32434e26a225db2314823bb2.jpg',
  rating: 4.5,
  category: 'computer products'
},
{
  title: 'Anker Powerline+ USB-C Cable',
  brand: 'Anker',
  price: 799,
  id: '216',
  imageUrl: 'https://www.lifewire.com/thmb/KW1l5x2qWzGVHf5Fl7yAD8OwwcQ=/3000x2000/filters:fill(auto,1)/computer-hardware-2625895-final-v1-8c909b8a32434e26a225db2314823bb2.jpg',
  rating: 4.7,
  category: 'computer products'
},
{
  title: 'Targus Laptop Backpack',
  brand: 'Targus',
  price: 1999,
  id: '217',
  imageUrl: 'https://www.lifewire.com/thmb/KW1l5x2qWzGVHf5Fl7yAD8OwwcQ=/3000x2000/filters:fill(auto,1)/computer-hardware-2625895-final-v1-8c909b8a32434e26a225db2314823bb2.jpg',
  rating: 4.6,
  category: 'computer products'
},
{
  title: 'Logitech Bluetooth Mouse',
  brand: 'Logitech',
  price: 1099,
  id: '218',
  imageUrl: 'https://www.lifewire.com/thmb/KW1l5x2qWzGVHf5Fl7yAD8OwwcQ=/3000x2000/filters:fill(auto,1)/computer-hardware-2625895-final-v1-8c909b8a32434e26a225db2314823bb2.jpg',
  rating: 4.6,
  category: 'computer products'
},
{
  title: 'ADATA 512GB External SSD',
  brand: 'ADATA',
  price: 4599,
  id: '219',
  imageUrl: 'https://www.lifewire.com/thmb/KW1l5x2qWzGVHf5Fl7yAD8OwwcQ=/3000x2000/filters:fill(auto,1)/computer-hardware-2625895-final-v1-8c909b8a32434e26a225db2314823bb2.jpg',
  rating: 4.7,
  category: 'computer products'
},
{
  title: 'ASUS TUF Gaming Mouse',
  brand: 'ASUS',
  price: 2499,
  id: '220',
  imageUrl: 'https://www.lifewire.com/thmb/KW1l5x2qWzGVHf5Fl7yAD8OwwcQ=/3000x2000/filters:fill(auto,1)/computer-hardware-2625895-final-v1-8c909b8a32434e26a225db2314823bb2.jpg',
  rating: 4.7,
  category: 'computer products'
},
{
  title: 'SteelSeries Arctis 7 Wireless Headset',
  brand: 'SteelSeries',
  price: 9999,
  id: '221',
  imageUrl: 'https://www.lifewire.com/thmb/KW1l5x2qWzGVHf5Fl7yAD8OwwcQ=/3000x2000/filters:fill(auto,1)/computer-hardware-2625895-final-v1-8c909b8a32434e26a225db2314823bb2.jpg',
  rating: 4.8,
  category: 'computer products'
},
  {
    title: 'Anker PowerPort 2 USB Charger',
    brand: 'Anker',
    price: 999,
    id: '301',
    imageUrl: 'https://th.bing.com/th/id/OIP.Mcg-Hdu014qsGHvUbDXhLgHaHa?rs=1&pid=ImgDetMain',
    rating: 4.8,
    category: 'Mobile Charger'
  },
  {
    title: 'Samsung Fast Charging Wall Charger',
    brand: 'Samsung',
    price: 1299,
    id: '302',
    imageUrl: 'https://th.bing.com/th/id/OIP.Mcg-Hdu014qsGHvUbDXhLgHaHa?rs=1&pid=ImgDetMain',
    rating: 4.7,
    category: 'Mobile Charger'
  },
  {
    title: 'Spigen 20W USB-C Charger',
    brand: 'Spigen',
    price: 799,
    id: '303',
    imageUrl: 'https://th.bing.com/th/id/OIP.Mcg-Hdu014qsGHvUbDXhLgHaHa?rs=1&pid=ImgDetMain',
    rating: 4.6,
    category: 'Mobile Charger'
  },
  {
    title: 'RAVPower 30W USB-C Charger',
    brand: 'RAVPower',
    price: 1599,
    id: '304',
    imageUrl: 'https://th.bing.com/th/id/OIP.Mcg-Hdu014qsGHvUbDXhLgHaHa?rs=1&pid=ImgDetMain',
    rating: 4.6,
    category: 'Mobile Charger'
  },
  {
    title: 'Xiaomi 18W Quick Charger',
    brand: 'Xiaomi',
    price: 499,
    id: '305',
    imageUrl: 'https://th.bing.com/th/id/OIP.Mcg-Hdu014qsGHvUbDXhLgHaHa?rs=1&pid=ImgDetMain',
    rating: 4.5,
    category: 'Mobile Charger'
  },
  {
    title: 'Baseus 20W PD Charger',
    brand: 'Baseus',
    price: 899,
    id: '306',
    imageUrl: 'https://th.bing.com/th/id/OIP.Mcg-Hdu014qsGHvUbDXhLgHaHa?rs=1&pid=ImgDetMain',
    rating: 4.7,
    category: 'Mobile Charger'
  },
  {
    title: 'Intex 10W Wall Charger',
    brand: 'Intex',
    price: 399,
    id: '307',
    imageUrl: 'https://th.bing.com/th/id/OIP.Mcg-Hdu014qsGHvUbDXhLgHaHa?rs=1&pid=ImgDetMain',
    rating: 4.4,
    category: 'Mobile Charger'
  },
  {
    title: 'Apple 18W USB-C Power Adapter',
    brand: 'Apple',
    price: 2299,
    id: '308',
    imageUrl: 'https://th.bing.com/th/id/OIP.Mcg-Hdu014qsGHvUbDXhLgHaHa?rs=1&pid=ImgDetMain',
    rating: 4.5,
    category: 'Mobile Charger'
  },
  {
    title: 'Anker PowerPort III Nano 20W Charger',
    brand: 'Anker',
    price: 1299,
    id: '309',
    imageUrl: 'https://th.bing.com/th/id/OIP.Mcg-Hdu014qsGHvUbDXhLgHaHa?rs=1&pid=ImgDetMain',
    rating: 4.8,
    category: 'Mobile Charger'
  },
  {
    title: 'Samsung 25W Fast Charger',
    brand: 'Samsung',
    price: 1699,
    id: '310',
    imageUrl: 'https://th.bing.com/th/id/OIP.Mcg-Hdu014qsGHvUbDXhLgHaHa?rs=1&pid=ImgDetMain',
    rating: 4.7,
    category: 'Mobile Charger'
  },
  {
    title: 'Mi 33W Fast Charger',
    brand: 'Mi',
    price: 899,
    id: '311',
    imageUrl: 'https://th.bing.com/th/id/OIP.Mcg-Hdu014qsGHvUbDXhLgHaHa?rs=1&pid=ImgDetMain',
    rating: 4.6,
    category: 'Mobile Charger'
  },
  {
    title: 'Aukey 18W USB-C Charger',
    brand: 'Aukey',
    price: 999,
    id: '312',
    imageUrl: 'https://th.bing.com/th/id/OIP.Mcg-Hdu014qsGHvUbDXhLgHaHa?rs=1&pid=ImgDetMain',
    rating: 4.5,
    category: 'Mobile Charger'
  },
  {
    title: 'Ambrane 20W Fast Charger',
    brand: 'Ambrane',
    price: 899,
    id: '313',
    imageUrl: 'https://th.bing.com/th/id/OIP.Mcg-Hdu014qsGHvUbDXhLgHaHa?rs=1&pid=ImgDetMain',
    rating: 4.4,
    category: 'Mobile Charger'
  },
  {
    title: 'Realme 30W Dart Charger',
    brand: 'Realme',
    price: 1299,
    id: '314',
    imageUrl: 'https://th.bing.com/th/id/OIP.Mcg-Hdu014qsGHvUbDXhLgHaHa?rs=1&pid=ImgDetMain',
    rating: 4.6,
    category: 'Mobile Charger'
  },
  {
    title: 'OnePlus Warp Charge 30T',
    brand: 'OnePlus',
    price: 1699,
    id: '315',
    imageUrl: 'https://th.bing.com/th/id/OIP.Mcg-Hdu014qsGHvUbDXhLgHaHa?rs=1&pid=ImgDetMain',
    rating: 4.7,
    category: 'Mobile Charger'
  },
  {
    title: 'OPPO 20W VOOC Charger',
    brand: 'OPPO',
    price: 999,
    id: '316',
    imageUrl: 'https://th.bing.com/th/id/OIP.Mcg-Hdu014qsGHvUbDXhLgHaHa?rs=1&pid=ImgDetMain',
    rating: 4.5,
    category: 'Mobile Charger'
  },
  {
    title: 'Portronics 5V 2A Mobile Charger',
    brand: 'Portronics',
    price: 299,
    id: '317',
    imageUrl: 'https://th.bing.com/th/id/OIP.Mcg-Hdu014qsGHvUbDXhLgHaHa?rs=1&pid=ImgDetMain',
    rating: 4.3,
    category: 'Mobile Charger'
  },
  {
    title: 'boAt 30W Fast Charger',
    brand: 'boAt',
    price: 999,
    id: '318',
    imageUrl: 'https://th.bing.com/th/id/OIP.Mcg-Hdu014qsGHvUbDXhLgHaHa?rs=1&pid=ImgDetMain',
    rating: 4.6,
    category: 'Mobile Charger'
  },
  {
    title: 'Tronica 18W PD Charger',
    brand: 'Tronica',
    price: 799,
    id: '319',
    imageUrl: 'https://th.bing.com/th/id/OIP.Mcg-Hdu014qsGHvUbDXhLgHaHa?rs=1&pid=ImgDetMain',
    rating: 4.5,
    category: 'Mobile Charger'
  },
  {
    title: 'Ugreen 20W USB-C Charger',
    brand: 'Ugreen',
    price: 1199,
    id: '320',
    imageUrl: 'https://th.bing.com/th/id/OIP.Mcg-Hdu014qsGHvUbDXhLgHaHa?rs=1&pid=ImgDetMain',
    rating: 4.6,
    category: 'Mobile Charger'
  },
  {
    title: 'Mivi 20W Fast Charger',
    brand: 'Mivi',
    price: 799,
    id: '321',
    imageUrl: 'https://th.bing.com/th/id/OIP.Mcg-Hdu014qsGHvUbDXhLgHaHa?rs=1&pid=ImgDetMain',
    rating: 4.5,
    category: 'Mobile Charger'
  },
  {
    title: 'Zebronics 10W USB Charger',
    brand: 'Zebronics',
    price: 499,
    id: '322',
    imageUrl: 'https://th.bing.com/th/id/OIP.Mcg-Hdu014qsGHvUbDXhLgHaHa?rs=1&pid=ImgDetMain',
    rating: 4.4,
    category: 'Mobile Charger'
  },
  {
    title: 'Lenovo 30W USB-C Charger',
    brand: 'Lenovo',
    price: 1499,
    id: '323',
    imageUrl: 'https://th.bing.com/th/id/OIP.Mcg-Hdu014qsGHvUbDXhLgHaHa?rs=1&pid=ImgDetMain',
    rating: 4.6,
    category: 'Mobile Charger'
  },
  {
    title: 'Techno 25W Quick Charger',
    brand: 'Techno',
    price: 1199,
    id: '324',
    imageUrl: 'https://th.bing.com/th/id/OIP.Mcg-Hdu014qsGHvUbDXhLgHaHa?rs=1&pid=ImgDetMain',
    rating: 4.6,
    category: 'Mobile Charger'
  },
  {
    title: 'Anker PowerDrive 2 Car Charger',
    brand: 'Anker',
    price: 799,
    id: '401',
    imageUrl: 'https://cdn.motor1.com/images/mgl/K61VG/s1/electric-car-charging.jpg',
    rating: 4.7,
    category: 'car charger'
  },
  {
    title: 'Baseus 2-Port Car Charger',
    brand: 'Baseus',
    price: 699,
    id: '402',
    imageUrl: 'https://cdn.motor1.com/images/mgl/K61VG/s1/electric-car-charging.jpg',
    rating: 4.6,
    category: 'car charger'
  },
  {
    title: 'Aukey 36W Dual USB Car Charger',
    brand: 'Aukey',
    price: 899,
    id: '403',
    imageUrl: 'https://cdn.motor1.com/images/mgl/K61VG/s1/electric-car-charging.jpg',
    rating: 4.7,
    category: 'car charger'
  },
  {
    title: 'RAVPower 2-Port Car Charger',
    brand: 'RAVPower',
    price: 1099,
    id: '404',
    imageUrl: 'https://cdn.motor1.com/images/mgl/K61VG/s1/electric-car-charging.jpg',
    rating: 4.6,
    category: 'car charger'
  },
  {
    title: 'Samsung 45W USB-C Car Charger',
    brand: 'Samsung',
    price: 1699,
    id: '405',
    imageUrl: 'https://cdn.motor1.com/images/mgl/K61VG/s1/electric-car-charging.jpg',
    rating: 4.5,
    category: 'car charger'
  },
  {
    title: 'iClever 30W Dual USB Car Charger',
    brand: 'iClever',
    price: 899,
    id: '406',
    imageUrl: 'https://cdn.motor1.com/images/mgl/K61VG/s1/electric-car-charging.jpg',
    rating: 4.6,
    category: 'car charger'
  },
  {
    title: 'Zebronics 3.4A Dual USB Car Charger',
    brand: 'Zebronics',
    price: 399,
    id: '407',
    imageUrl: 'https://cdn.motor1.com/images/mgl/K61VG/s1/electric-car-charging.jpg',
    rating: 4.4,
    category: 'car charger'
  },
  {
    title: 'Mophie Dual USB Car Charger',
    brand: 'Mophie',
    price: 999,
    id: '408',
    imageUrl: 'https://cdn.motor1.com/images/mgl/K61VG/s1/electric-car-charging.jpg',
    rating: 4.7,
    category: 'car charger'
  },
  {
    title: 'Portronics 5V 3A Car Charger',
    brand: 'Portronics',
    price: 499,
    id: '409',
    imageUrl: 'https://cdn.motor1.com/images/mgl/K61VG/s1/electric-car-charging.jpg',
    rating: 4.5,
    category: 'car charger'
  },
  {
    title: 'Tronsmart 36W Car Charger',
    brand: 'Tronsmart',
    price: 799,
    id: '410',
    imageUrl: 'https://cdn.motor1.com/images/mgl/K61VG/s1/electric-car-charging.jpg',
    rating: 4.6,
    category: 'car charger'
  },
  {
    title: 'Anker PowerDrive III Duo Car Charger',
    brand: 'Anker',
    price: 1299,
    id: '411',
    imageUrl: 'https://cdn.motor1.com/images/mgl/K61VG/s1/electric-car-charging.jpg',
    rating: 4.8,
    category: 'car charger'
  },
  {
    title: 'Scosche 20W USB-C Car Charger',
    brand: 'Scosche',
    price: 799,
    id: '412',
    imageUrl: 'https://cdn.motor1.com/images/mgl/K61VG/s1/electric-car-charging.jpg',
    rating: 4.6,
    category: 'car charger'
  },
  {
    title: 'Ambrane 18W Car Charger',
    brand: 'Ambrane',
    price: 799,
    id: '413',
    imageUrl: 'https://cdn.motor1.com/images/mgl/K61VG/s1/electric-car-charging.jpg',
    rating: 4.5,
    category: 'car charger'
  },
  {
    title: 'Ugreen 36W Car Charger',
    brand: 'Ugreen',
    price: 999,
    id: '414',
    imageUrl: 'https://cdn.motor1.com/images/mgl/K61VG/s1/electric-car-charging.jpg',
    rating: 4.7,
    category: 'car charger'
  },
  {
    title: 'Koblenz Car Charger',
    brand: 'Koblenz',
    price: 599,
    id: '415',
    imageUrl: 'https://cdn.motor1.com/images/mgl/K61VG/s1/electric-car-charging.jpg',
    rating: 4.4,
    category: 'car charger'
  },
  {
    title: 'JBL Dual USB Car Charger',
    brand: 'JBL',
    price: 799,
    id: '416',
    imageUrl: 'https://cdn.motor1.com/images/mgl/K61VG/s1/electric-car-charging.jpg',
    rating: 4.6,
    category: 'car charger'
  },
  {
    title: 'Realme 30W Car Charger',
    brand: 'Realme',
    price: 999,
    id: '417',
    imageUrl: 'https://cdn.motor1.com/images/mgl/K61VG/s1/electric-car-charging.jpg',
    rating: 4.6,
    category: 'car charger'
  },
  {
    title: 'Xiaomi 33W Car Charger',
    brand: 'Xiaomi',
    price: 1099,
    id: '418',
    imageUrl: 'https://cdn.motor1.com/images/mgl/K61VG/s1/electric-car-charging.jpg',
    rating: 4.6,
    category: 'car charger'
  },
  {
    title: 'Philips Dual USB Car Charger',
    brand: 'Philips',
    price: 599,
    id: '419',
    imageUrl: 'https://cdn.motor1.com/images/mgl/K61VG/s1/electric-car-charging.jpg',
    rating: 4.5,
    category: 'car charger'
  },
  {
    title: 'BlitzWolf 30W Car Charger',
    brand: 'BlitzWolf',
    price: 799,
    id: '420',
    imageUrl: 'https://cdn.motor1.com/images/mgl/K61VG/s1/electric-car-charging.jpg',
    rating: 4.6,
    category: 'car charger'
  },
  {
    title: 'ZMI 18W Car Charger',
    brand: 'ZMI',
    price: 899,
    id: '421',
    imageUrl: 'https://cdn.motor1.com/images/mgl/K61VG/s1/electric-car-charging.jpg',
    rating: 4.5,
    category: 'car charger'
  },
  {
    title: 'Bovon Dual USB Car Charger',
    brand: 'Bovon',
    price: 499,
    id: '422',
    imageUrl: 'https://cdn.motor1.com/images/mgl/K61VG/s1/electric-car-charging.jpg',
    rating: 4.4,
    category: 'car charger'
  },
  {
    title: 'Vinsic Car Charger',
    brand: 'Vinsic',
    price: 899,
    id: '423',
    imageUrl: 'https://cdn.motor1.com/images/mgl/K61VG/s1/electric-car-charging.jpg',
    rating: 4.5,
    category: 'car charger'
  },
  {
    title: 'Belkin Dual USB Car Charger',
    brand: 'Belkin',
    price: 899,
    id: '424',
    imageUrl: 'https://cdn.motor1.com/images/mgl/K61VG/s1/electric-car-charging.jpg',
    rating: 4.5,
    category: 'car charger'
  },
  {
    title: 'Anker PowerLine+ III Lightning Cable',
    brand: 'Anker',
    price: 899,
    id: '501',
    imageUrl: 'https://cdn.windowsreport.com/wp-content/uploads/2019/11/Universal-USB-multi-charging-cables-1.jpg',
    rating: 4.8,
    category: 'charging cable'
  },
  {
    title: 'Baseus USB-C to USB-C Cable',
    brand: 'Baseus',
    price: 599,
    id: '502',
    imageUrl: 'https://cdn.windowsreport.com/wp-content/uploads/2019/11/Universal-USB-multi-charging-cables-1.jpg',
    rating: 4.6,
    category: 'charging cable'
  },
  {
    title: 'Aukey USB-C to Lightning Cable',
    brand: 'Aukey',
    price: 699,
    id: '503',
    imageUrl: 'https://cdn.windowsreport.com/wp-content/uploads/2019/11/Universal-USB-multi-charging-cables-1.jpg',
    rating: 4.7,
    category: 'charging cable'
  },
  {
    title: 'Anker PowerLine Micro USB Cable',
    brand: 'Anker',
    price: 499,
    id: '504',
    imageUrl: 'https://cdn.windowsreport.com/wp-content/uploads/2019/11/Universal-USB-multi-charging-cables-1.jpg',
    rating: 4.7,
    category: 'charging cable'
  },
  {
    title: 'Spigen MagSafe Charging Cable',
    brand: 'Spigen',
    price: 899,
    id: '505',
    imageUrl: 'https://cdn.windowsreport.com/wp-content/uploads/2019/11/Universal-USB-multi-charging-cables-1.jpg',
    rating: 4.6,
    category: 'charging cable'
  },
  {
    title: 'Belkin USB-A to Lightning Cable',
    brand: 'Belkin',
    price: 799,
    id: '506',
    imageUrl: 'https://cdn.windowsreport.com/wp-content/uploads/2019/11/Universal-USB-multi-charging-cables-1.jpg',
    rating: 4.6,
    category: 'charging cable'
  },
  {
    title: 'Anker USB-C to USB-C 2.0 Cable',
    brand: 'Anker',
    price: 699,
    id: '507',
    imageUrl: 'https://cdn.windowsreport.com/wp-content/uploads/2019/11/Universal-USB-multi-charging-cables-1.jpg',
    rating: 4.7,
    category: 'charging cable'
  },
  {
    title: 'Ugreen USB-C to USB-A Cable',
    brand: 'Ugreen',
    price: 499,
    id: '508',
    imageUrl: 'https://cdn.windowsreport.com/wp-content/uploads/2019/11/Universal-USB-multi-charging-cables-1.jpg',
    rating: 4.5,
    category: 'charging cable'
  },
  {
    title: 'Cable Matters USB-C to USB-C Cable',
    brand: 'Cable Matters',
    price: 649,
    id: '509',
    imageUrl: 'https://cdn.windowsreport.com/wp-content/uploads/2019/11/Universal-USB-multi-charging-cables-1.jpg',
    rating: 4.6,
    category: 'charging cable'
  },
  {
    title: 'RAVPower USB-C to Lightning Cable',
    brand: 'RAVPower',
    price: 899,
    id: '510',
    imageUrl: 'https://cdn.windowsreport.com/wp-content/uploads/2019/11/Universal-USB-multi-charging-cables-1.jpg',
    rating: 4.6,
    category: 'charging cable'
  },
  {
    title: 'ZMI USB-C to USB-A Cable',
    brand: 'ZMI',
    price: 599,
    id: '511',
    imageUrl: 'https://cdn.windowsreport.com/wp-content/uploads/2019/11/Universal-USB-multi-charging-cables-1.jpg',
    rating: 4.5,
    category: 'charging cable'
  },
  {
    title: 'AUKEY USB-C to Lightning Cable',
    brand: 'AUKEY',
    price: 799,
    id: '512',
    imageUrl: 'https://cdn.windowsreport.com/wp-content/uploads/2019/11/Universal-USB-multi-charging-cables-1.jpg',
    rating: 4.7,
    category: 'charging cable'
  },
  {
    title: 'JSAUX USB-C to USB-C Cable',
    brand: 'JSAUX',
    price: 699,
    id: '513',
    imageUrl: 'https://cdn.windowsreport.com/wp-content/uploads/2019/11/Universal-USB-multi-charging-cables-1.jpg',
    rating: 4.6,
    category: 'charging cable'
  },
  {
    title: 'Anker PowerLine II USB-C to USB-C Cable',
    brand: 'Anker',
    price: 899,
    id: '514',
    imageUrl: 'https://cdn.windowsreport.com/wp-content/uploads/2019/11/Universal-USB-multi-charging-cables-1.jpg',
    rating: 4.8,
    category: 'charging cable'
  },
  {
    title: 'Cable Matters USB-C to USB-C 2.0 Cable',
    brand: 'Cable Matters',
    price: 549,
    id: '515',
    imageUrl: 'https://cdn.windowsreport.com/wp-content/uploads/2019/11/Universal-USB-multi-charging-cables-1.jpg',
    rating: 4.5,
    category: 'charging cable'
  },
  {
    title: 'Mophie USB-C to USB-A Cable',
    brand: 'Mophie',
    price: 899,
    id: '516',
    imageUrl: 'https://cdn.windowsreport.com/wp-content/uploads/2019/11/Universal-USB-multi-charging-cables-1.jpg',
    rating: 4.6,
    category: 'charging cable'
  },
  {
    title: 'Aukey USB-A to USB-C Charging Cable',
    brand: 'Aukey',
    price: 599,
    id: '517',
    imageUrl: 'https://cdn.windowsreport.com/wp-content/uploads/2019/11/Universal-USB-multi-charging-cables-1.jpg',
    rating: 4.7,
    category: 'charging cable'
  },
  {
    title: 'Ugreen Lightning to USB Cable',
    brand: 'Ugreen',
    price: 699,
    id: '518',
    imageUrl: 'https://cdn.windowsreport.com/wp-content/uploads/2019/11/Universal-USB-multi-charging-cables-1.jpg',
    rating: 4.5,
    category: 'charging cable'
  },
  {
    title: 'JBL Charge and Sync Cable',
    brand: 'JBL',
    price: 399,
    id: '519',
    imageUrl: 'https://cdn.windowsreport.com/wp-content/uploads/2019/11/Universal-USB-multi-charging-cables-1.jpg',
    rating: 4.4,
    category: 'charging cable'
  },
  {
    title: 'RAVPower USB-C to USB-A Cable',
    brand: 'RAVPower',
    price: 699,
    id: '520',
    imageUrl: 'https://cdn.windowsreport.com/wp-content/uploads/2019/11/Universal-USB-multi-charging-cables-1.jpg',
    rating: 4.6,
    category: 'charging cable'
  },
  {
    title: 'Aukey 3-Pack USB-C Cables',
    brand: 'Aukey',
    price: 1099,
    id: '521',
    imageUrl: 'https://cdn.windowsreport.com/wp-content/uploads/2019/11/Universal-USB-multi-charging-cables-1.jpg',
    rating: 4.7,
    category: 'charging cable'
  },
  {
    title: 'Spigen USB-C to USB-A Cable',
    brand: 'Spigen',
    price: 799,
    id: '522',
    imageUrl: 'https://cdn.windowsreport.com/wp-content/uploads/2019/11/Universal-USB-multi-charging-cables-1.jpg',
    rating: 4.6,
    category: 'charging cable'
  },
  {
    title: 'Anker PowerLine II Micro USB Cable',
    brand: 'Anker',
    price: 799,
    id: '523',
    imageUrl: 'https://cdn.windowsreport.com/wp-content/uploads/2019/11/Universal-USB-multi-charging-cables-1.jpg',
    rating: 4.8,
    category: 'charging cable'
  },
  {
    title: 'Anker PowerCore 10000',
    brand: 'Anker',
    price: 1299,
    id: '601',
    imageUrl: 'https://th.bing.com/th/id/OIP.G9l6gjJiuFRWZu3zi0LXTwHaHa?rs=1&pid=ImgDetMain',
    rating: 4.7,
    category: 'mobile battery'
  },
  {
    title: 'Mi Power Bank 3i',
    brand: 'Mi',
    price: 799,
    id: '602',
    imageUrl: 'https://th.bing.com/th/id/OIP.G9l6gjJiuFRWZu3zi0LXTwHaHa?rs=1&pid=ImgDetMain',
    rating: 4.5,
    category: 'mobile battery'
  },
  {
    title: 'Samsung 10000mAh Power Bank',
    brand: 'Samsung',
    price: 1199,
    id: '603',
    imageUrl: 'https://th.bing.com/th/id/OIP.G9l6gjJiuFRWZu3zi0LXTwHaHa?rs=1&pid=ImgDetMain',
    rating: 4.6,
    category: 'mobile battery'
  },
  {
    title: 'Realme 10000mAh Power Bank',
    brand: 'Realme',
    price: 999,
    id: '604',
    imageUrl: 'https://th.bing.com/th/id/OIP.G9l6gjJiuFRWZu3zi0LXTwHaHa?rs=1&pid=ImgDetMain',
    rating: 4.5,
    category: 'mobile battery'
  },
  {
    title: 'Intex 10000mAh Power Bank',
    brand: 'Intex',
    price: 799,
    id: '605',
    imageUrl: 'https://th.bing.com/th/id/OIP.G9l6gjJiuFRWZu3zi0LXTwHaHa?rs=1&pid=ImgDetMain',
    rating: 4.3,
    category: 'mobile battery'
  },
  {
    title: 'Syska Power Pro 10000mAh',
    brand: 'Syska',
    price: 799,
    id: '606',
    imageUrl: 'https://th.bing.com/th/id/OIP.G9l6gjJiuFRWZu3zi0LXTwHaHa?rs=1&pid=ImgDetMain',
    rating: 4.4,
    category: 'mobile battery'
  },
  {
    title: 'Ambrane 10000mAh Power Bank',
    brand: 'Ambrane',
    price: 699,
    id: '607',
    imageUrl: 'https://th.bing.com/th/id/OIP.G9l6gjJiuFRWZu3zi0LXTwHaHa?rs=1&pid=ImgDetMain',
    rating: 4.3,
    category: 'mobile battery'
  },
  {
    title: 'Croma 10000mAh Power Bank',
    brand: 'Croma',
    price: 799,
    id: '608',
    imageUrl: 'https://th.bing.com/th/id/OIP.G9l6gjJiuFRWZu3zi0LXTwHaHa?rs=1&pid=ImgDetMain',
    rating: 4.6,
    category: 'mobile battery'
  },
  {
    title: 'PTron Power Bank 10000mAh',
    brand: 'PTron',
    price: 599,
    id: '609',
    imageUrl: 'https://th.bing.com/th/id/OIP.G9l6gjJiuFRWZu3zi0LXTwHaHa?rs=1&pid=ImgDetMain',
    rating: 4.4,
    category: 'mobile battery'
  },
  {
    title: 'Zebronics 10000mAh Power Bank',
    brand: 'Zebronics',
    price: 749,
    id: '610',
    imageUrl: 'https://th.bing.com/th/id/OIP.G9l6gjJiuFRWZu3zi0LXTwHaHa?rs=1&pid=ImgDetMain',
    rating: 4.5,
    category: 'mobile battery'
  },
  {
    title: 'Ugreen 10000mAh Power Bank',
    brand: 'Ugreen',
    price: 999,
    id: '611',
    imageUrl: 'https://th.bing.com/th/id/OIP.G9l6gjJiuFRWZu3zi0LXTwHaHa?rs=1&pid=ImgDetMain',
    rating: 4.6,
    category: 'mobile battery'
  },
  {
    title: 'Anker PowerCore Fusion 5000',
    brand: 'Anker',
    price: 1799,
    id: '612',
    imageUrl: 'https://th.bing.com/th/id/OIP.G9l6gjJiuFRWZu3zi0LXTwHaHa?rs=1&pid=ImgDetMain',
    rating: 4.7,
    category: 'mobile battery'
  },
  {
    title: 'RAVPower 10000mAh Power Bank',
    brand: 'RAVPower',
    price: 1299,
    id: '613',
    imageUrl: 'https://th.bing.com/th/id/OIP.G9l6gjJiuFRWZu3zi0LXTwHaHa?rs=1&pid=ImgDetMain',
    rating: 4.8,
    category: 'mobile battery'
  },
  {
    title: 'iBall 10000mAh Power Bank',
    brand: 'iBall',
    price: 699,
    id: '614',
    imageUrl: 'https://th.bing.com/th/id/OIP.G9l6gjJiuFRWZu3zi0LXTwHaHa?rs=1&pid=ImgDetMain',
    rating: 4.2,
    category: 'mobile battery'
  },
  {
    title: 'SAMSUNG 20000mAh Power Bank',
    brand: 'Samsung',
    price: 1699,
    id: '615',
    imageUrl: 'https://th.bing.com/th/id/OIP.G9l6gjJiuFRWZu3zi0LXTwHaHa?rs=1&pid=ImgDetMain',
    rating: 4.7,
    category: 'mobile battery'
  },
  {
    title: 'Anker PowerCore II 20000',
    brand: 'Anker',
    price: 2499,
    id: '616',
    imageUrl: 'https://th.bing.com/th/id/OIP.G9l6gjJiuFRWZu3zi0LXTwHaHa?rs=1&pid=ImgDetMain',
    rating: 4.8,
    category: 'mobile battery'
  },
  {
    title: 'Romoss Sense 6 20000mAh Power Bank',
    brand: 'Romoss',
    price: 1699,
    id: '617',
    imageUrl: 'https://th.bing.com/th/id/OIP.G9l6gjJiuFRWZu3zi0LXTwHaHa?rs=1&pid=ImgDetMain',
    rating: 4.6,
    category: 'mobile battery'
  },
  {
    title: 'Ambrane 20000mAh Power Bank',
    brand: 'Ambrane',
    price: 1299,
    id: '618',
    imageUrl: 'https://th.bing.com/th/id/OIP.G9l6gjJiuFRWZu3zi0LXTwHaHa?rs=1&pid=ImgDetMain',
    rating: 4.5,
    category: 'mobile battery'
  },
  {
    title: 'Syska Power Pro 20000mAh',
    brand: 'Syska',
    price: 1499,
    id: '619',
    imageUrl: 'https://th.bing.com/th/id/OIP.G9l6gjJiuFRWZu3zi0LXTwHaHa?rs=1&pid=ImgDetMain',
    rating: 4.4,
    category: 'mobile battery'
  },
  {
    title: 'PTron Power Bank 20000mAh',
    brand: 'PTron',
    price: 999,
    id: '620',
    imageUrl: 'https://th.bing.com/th/id/OIP.G9l6gjJiuFRWZu3zi0LXTwHaHa?rs=1&pid=ImgDetMain',
    rating: 4.3,
    category: 'mobile battery'
  },
  {
    title: 'Zebronics 20000mAh Power Bank',
    brand: 'Zebronics',
    price: 1399,
    id: '621',
    imageUrl: 'https://th.bing.com/th/id/OIP.G9l6gjJiuFRWZu3zi0LXTwHaHa?rs=1&pid=ImgDetMain',
    rating: 4.6,
    category: 'mobile battery'
  },
  {
    title: 'Ambrane 25000mAh Power Bank',
    brand: 'Ambrane',
    price: 1599,
    id: '622',
    imageUrl: 'https://th.bing.com/th/id/OIP.G9l6gjJiuFRWZu3zi0LXTwHaHa?rs=1&pid=ImgDetMain',
    rating: 4.5,
    category: 'mobile battery'
  },
  {
    title: '3.5mm Audio Jack Connector',
    brand: 'TP-Link',
    price: 199,
    id: '701',
    imageUrl: 'https://th.bing.com/th/id/OIP.fEZdksuRX_4SspeQndqaiQHaHa?rs=1&pid=ImgDetMain',
    rating: 4.3,
    category: 'connector pin'
  },
  {
    title: 'USB Type-C Connector',
    brand: 'Anker',
    price: 399,
    id: '702',
    imageUrl: 'https://th.bing.com/th/id/OIP.fEZdksuRX_4SspeQndqaiQHaHa?rs=1&pid=ImgDetMain',
    rating: 4.6,
    category: 'connector pin'
  },
  {
    title: 'HDMI to VGA Connector',
    brand: 'Cable Matters',
    price: 599,
    id: '703',
    imageUrl: 'https://th.bing.com/th/id/OIP.fEZdksuRX_4SspeQndqaiQHaHa?rs=1&pid=ImgDetMain',
    rating: 4.4,
    category: 'connector pin'
  },
  {
    title: 'USB 3.0 to Ethernet Connector',
    brand: 'UGREEN',
    price: 799,
    id: '704',
    imageUrl: 'https://th.bing.com/th/id/OIP.fEZdksuRX_4SspeQndqaiQHaHa?rs=1&pid=ImgDetMain',
    rating: 4.5,
    category: 'connector pin'
  },
  {
    title: 'Mini DisplayPort to HDMI Connector',
    brand: 'Uni',
    price: 999,
    id: '705',
    imageUrl: 'https://th.bing.com/th/id/OIP.fEZdksuRX_4SspeQndqaiQHaHa?rs=1&pid=ImgDetMain',
    rating: 4.7,
    category: 'connector pin'
  },
  {
    title: 'RJ45 Ethernet Cable Connector',
    brand: 'Mediabridge',
    price: 699,
    id: '706',
    imageUrl: 'https://th.bing.com/th/id/OIP.fEZdksuRX_4SspeQndqaiQHaHa?rs=1&pid=ImgDetMain',
    rating: 4.3,
    category: 'connector pin'
  },
  {
    title: 'USB-A to USB-C Connector',
    brand: 'JSAUX',
    price: 299,
    id: '707',
    imageUrl: 'https://th.bing.com/th/id/OIP.fEZdksuRX_4SspeQndqaiQHaHa?rs=1&pid=ImgDetMain',
    rating: 4.6,
    category: 'connector pin'
  },
  {
    title: 'Lightning to USB Cable Connector',
    brand: 'Apple',
    price: 1299,
    id: '708',
    imageUrl: 'https://th.bing.com/th/id/OIP.fEZdksuRX_4SspeQndqaiQHaHa?rs=1&pid=ImgDetMain',
    rating: 4.8,
    category: 'connector pin'
  },
  {
    title: 'VGA to HDMI Adapter Connector',
    brand: 'GANA',
    price: 499,
    id: '709',
    imageUrl: 'https://th.bing.com/th/id/OIP.fEZdksuRX_4SspeQndqaiQHaHa?rs=1&pid=ImgDetMain',
    rating: 4.4,
    category: 'connector pin'
  },
  {
    title: 'USB-C to Micro USB Connector',
    brand: 'Baseus',
    price: 249,
    id: '710',
    imageUrl: 'https://th.bing.com/th/id/OIP.fEZdksuRX_4SspeQndqaiQHaHa?rs=1&pid=ImgDetMain',
    rating: 4.2,
    category: 'connector pin'
  },
  {
    title: 'MHL to HDMI Adapter Connector',
    brand: 'Cable Matters',
    price: 849,
    id: '711',
    imageUrl: 'https://th.bing.com/th/id/OIP.fEZdksuRX_4SspeQndqaiQHaHa?rs=1&pid=ImgDetMain',
    rating: 4.6,
    category: 'connector pin'
  },
  {
    title: '3.5mm to RCA Audio Connector',
    brand: 'Mediabridge',
    price: 449,
    id: '712',
    imageUrl: 'https://th.bing.com/th/id/OIP.fEZdksuRX_4SspeQndqaiQHaHa?rs=1&pid=ImgDetMain',
    rating: 4.4,
    category: 'connector pin'
  },
  {
    title: 'USB-C to HDMI Connector',
    brand: 'Anker',
    price: 1599,
    id: '713',
    imageUrl: 'https://th.bing.com/th/id/OIP.fEZdksuRX_4SspeQndqaiQHaHa?rs=1&pid=ImgDetMain',
    rating: 4.7,
    category: 'connector pin'
  },
  {
    title: 'USB-A to Micro USB Connector',
    brand: 'UGREEN',
    price: 299,
    id: '714',
    imageUrl: 'https://th.bing.com/th/id/OIP.fEZdksuRX_4SspeQndqaiQHaHa?rs=1&pid=ImgDetMain',
    rating: 4.3,
    category: 'connector pin'
  },
  {
    title: 'USB 2.0 to Serial Port Connector',
    brand: 'StarTech',
    price: 899,
    id: '715',
    imageUrl: 'https://th.bing.com/th/id/OIP.fEZdksuRX_4SspeQndqaiQHaHa?rs=1&pid=ImgDetMain',
    rating: 4.6,
    category: 'connector pin'
  },
  {
    title: 'USB-C to USB-C Connector',
    brand: 'Anker',
    price: 799,
    id: '716',
    imageUrl: 'https://th.bing.com/th/id/OIP.fEZdksuRX_4SspeQndqaiQHaHa?rs=1&pid=ImgDetMain',
    rating: 4.7,
    category: 'connector pin'
  },
  {
    title: '3.5mm TRRS Jack Connector',
    brand: 'Koss',
    price: 399,
    id: '717',
    imageUrl: 'https://th.bing.com/th/id/OIP.fEZdksuRX_4SspeQndqaiQHaHa?rs=1&pid=ImgDetMain',
    rating: 4.4,
    category: 'connector pin'
  },
  {
    title: 'Mini HDMI to HDMI Connector',
    brand: 'Mediabridge',
    price: 599,
    id: '718',
    imageUrl: 'https://th.bing.com/th/id/OIP.fEZdksuRX_4SspeQndqaiQHaHa?rs=1&pid=ImgDetMain',
    rating: 4.5,
    category: 'connector pin'
  },
  {
    title: 'Micro HDMI to HDMI Connector',
    brand: 'Cable Matters',
    price: 799,
    id: '719',
    imageUrl: 'https://th.bing.com/th/id/OIP.fEZdksuRX_4SspeQndqaiQHaHa?rs=1&pid=ImgDetMain',
    rating: 4.6,
    category: 'connector pin'
  },
  {
    title: 'USB-C to DisplayPort Adapter Connector',
    brand: 'Cable Matters',
    price: 999,
    id: '720',
    imageUrl: 'https://th.bing.com/th/id/OIP.fEZdksuRX_4SspeQndqaiQHaHa?rs=1&pid=ImgDetMain',
    rating: 4.5,
    category: 'connector pin'
  },
  {
    title: 'Lightning to 3.5mm Headphone Adapter',
    brand: 'Apple',
    price: 899,
    id: '721',
    imageUrl: 'https://th.bing.com/th/id/OIP.fEZdksuRX_4SspeQndqaiQHaHa?rs=1&pid=ImgDetMain',
    rating: 4.7,
    category: 'connector pin'
  },
  {
    title: 'USB to Micro USB OTG Connector',
    brand: 'Ugreen',
    price: 399,
    id: '722',
    imageUrl: 'https://th.bing.com/th/id/OIP.fEZdksuRX_4SspeQndqaiQHaHa?rs=1&pid=ImgDetMain',
    rating: 4.4,
    category: 'connector pin'
  },
  {
    title: 'LED String Lights',
    brand: 'Twinkle Star',
    price: 599,
    id: '801',
    imageUrl: 'https://th.bing.com/th/id/OIP.NmgwCxRREwNNcsIwxGliLAHaE8?rs=1&pid=ImgDetMain',
    rating: 4.4,
    category: 'decoration & lighting'
  },
  {
    title: 'Fairy Lights for Bedroom',
    brand: 'DazSpirit',
    price: 349,
    id: '802',
    imageUrl: 'https://th.bing.com/th/id/OIP.NmgwCxRREwNNcsIwxGliLAHaE8?rs=1&pid=ImgDetMain',
    rating: 4.2,
    category: 'decoration & lighting'
  },
  {
    title: 'Table Lamp',
    brand: 'Philips',
    price: 1299,
    id: '803',
    imageUrl: 'https://th.bing.com/th/id/OIP.NmgwCxRREwNNcsIwxGliLAHaE8?rs=1&pid=ImgDetMain',
    rating: 4.7,
    category: 'decoration & lighting'
  },
  {
    title: 'Solar Garden Lights',
    brand: 'GIGALUMI',
    price: 799,
    id: '804',
    imageUrl: 'https://th.bing.com/th/id/OIP.NmgwCxRREwNNcsIwxGliLAHaE8?rs=1&pid=ImgDetMain',
    rating: 4.5,
    category: 'decoration & lighting'
  },
  {
    title: 'LED Strip Lights',
    brand: 'Govee',
    price: 1299,
    id: '805',
    imageUrl: 'https://th.bing.com/th/id/OIP.NmgwCxRREwNNcsIwxGliLAHaE8?rs=1&pid=ImgDetMain',
    rating: 4.6,
    category: 'decoration & lighting'
  },
  {
    title: 'Chandelier',
    brand: 'Westinghouse',
    price: 4999,
    id: '806',
    imageUrl: 'https://th.bing.com/th/id/OIP.NmgwCxRREwNNcsIwxGliLAHaE8?rs=1&pid=ImgDetMain',
    rating: 4.8,
    category: 'decoration & lighting'
  },
  {
    title: 'LED Ceiling Light',
    brand: 'Olea',
    price: 2399,
    id: '807',
    imageUrl: 'https://th.bing.com/th/id/OIP.NmgwCxRREwNNcsIwxGliLAHaE8?rs=1&pid=ImgDetMain',
    rating: 4.7,
    category: 'decoration & lighting'
  },
  {
    title: 'Neon Light Sign',
    brand: 'Lovepop',
    price: 1499,
    id: '808',
    imageUrl: 'https://th.bing.com/th/id/OIP.NmgwCxRREwNNcsIwxGliLAHaE8?rs=1&pid=ImgDetMain',
    rating: 4.6,
    category: 'decoration & lighting'
  },
  {
    title: 'LED Lantern',
    brand: 'Coleman',
    price: 899,
    id: '809',
    imageUrl: 'https://th.bing.com/th/id/OIP.NmgwCxRREwNNcsIwxGliLAHaE8?rs=1&pid=ImgDetMain',
    rating: 4.4,
    category: 'decoration & lighting'
  },
  {
    title: 'Decorative Candle Lights',
    brand: 'Yankee Candle',
    price: 799,
    id: '810',
    imageUrl: 'https://th.bing.com/th/id/OIP.NmgwCxRREwNNcsIwxGliLAHaE8?rs=1&pid=ImgDetMain',
    rating: 4.7,
    category: 'decoration & lighting'
  },
  {
    title: 'Floor Lamp',
    brand: 'Brightech',
    price: 1999,
    id: '811',
    imageUrl: 'https://th.bing.com/th/id/OIP.NmgwCxRREwNNcsIwxGliLAHaE8?rs=1&pid=ImgDetMain',
    rating: 4.5,
    category: 'decoration & lighting'
  },
  {
    title: 'Outdoor Lantern Lights',
    brand: 'OxyLED',
    price: 799,
    id: '812',
    imageUrl: 'https://th.bing.com/th/id/OIP.NmgwCxRREwNNcsIwxGliLAHaE8?rs=1&pid=ImgDetMain',
    rating: 4.3,
    category: 'decoration & lighting'
  },
  {
    title: 'LED Floor Lamp',
    brand: 'Brightech',
    price: 1599,
    id: '813',
    imageUrl: 'https://th.bing.com/th/id/OIP.NmgwCxRREwNNcsIwxGliLAHaE8?rs=1&pid=ImgDetMain',
    rating: 4.6,
    category: 'decoration & lighting'
  },
  {
    title: 'Wall Sconce Lighting',
    brand: 'Jasco',
    price: 1099,
    id: '814',
    imageUrl: 'https://th.bing.com/th/id/OIP.NmgwCxRREwNNcsIwxGliLAHaE8?rs=1&pid=ImgDetMain',
    rating: 4.5,
    category: 'decoration & lighting'
  },
  {
    title: 'Pendant Light Fixture',
    brand: 'Kichler',
    price: 4999,
    id: '815',
    imageUrl: 'https://th.bing.com/th/id/OIP.NmgwCxRREwNNcsIwxGliLAHaE8?rs=1&pid=ImgDetMain',
    rating: 4.7,
    category: 'decoration & lighting'
  },
  {
    title: 'LED Night Light',
    brand: 'VAVA',
    price: 599,
    id: '816',
    imageUrl: 'https://th.bing.com/th/id/OIP.NmgwCxRREwNNcsIwxGliLAHaE8?rs=1&pid=ImgDetMain',
    rating: 4.3,
    category: 'decoration & lighting'
  },
  {
    title: 'Smart Light Bulb',
    brand: 'Philips Hue',
    price: 999,
    id: '817',
    imageUrl: 'https://th.bing.com/th/id/OIP.NmgwCxRREwNNcsIwxGliLAHaE8?rs=1&pid=ImgDetMain',
    rating: 4.6,
    category: 'decoration & lighting'
  },
  {
    title: 'Mood Light Lamp',
    brand: 'Miroco',
    price: 1499,
    id: '818',
    imageUrl: 'https://th.bing.com/th/id/OIP.NmgwCxRREwNNcsIwxGliLAHaE8?rs=1&pid=ImgDetMain',
    rating: 4.5,
    category: 'decoration & lighting'
  },
  {
    title: 'Battery Operated LED Lights',
    brand: 'Brightown',
    price: 599,
    id: '819',
    imageUrl: 'https://th.bing.com/th/id/OIP.NmgwCxRREwNNcsIwxGliLAHaE8?rs=1&pid=ImgDetMain',
    rating: 4.4,
    category: 'decoration & lighting'
  },
  {
    title: 'RGB LED Lighting Kit',
    brand: 'RGB Zone',
    price: 1299,
    id: '820',
    imageUrl: 'https://th.bing.com/th/id/OIP.NmgwCxRREwNNcsIwxGliLAHaE8?rs=1&pid=ImgDetMain',
    rating: 4.6,
    category: 'decoration & lighting'
  },
  {
    title: 'Solar LED Garden Lights',
    brand: 'TomCare',
    price: 799,
    id: '821',
    imageUrl: 'https://th.bing.com/th/id/OIP.NmgwCxRREwNNcsIwxGliLAHaE8?rs=1&pid=ImgDetMain',
    rating: 4.4,
    category: 'decoration & lighting'
  },
  {
    title: 'Crystal Chandelier Light',
    brand: 'ASHLEY',
    price: 5999,
    id: '822',
    imageUrl: 'https://th.bing.com/th/id/OIP.NmgwCxRREwNNcsIwxGliLAHaE8?rs=1&pid=ImgDetMain',
    rating: 4.8,
    category: 'decoration & lighting'
  },
  {
    title: 'Silicone Case for iPhone',
    brand: 'Spigen',
    price: 799,
    id: '901',
    imageUrl: 'https://th.bing.com/th/id/OIP.9vBmC485L6WjVLwD-5UShQHaHa?rs=1&pid=ImgDetMain',
    rating: 4.5,
    category: 'mobile covers'
  },
  {
    title: 'Leather Wallet Case for Samsung',
    brand: 'Caseology',
    price: 1499,
    id: '902',
    imageUrl: 'https://th.bing.com/th/id/OIP.9vBmC485L6WjVLwD-5UShQHaHa?rs=1&pid=ImgDetMain',
    rating: 4.6,
    category: 'mobile covers'
  },
  {
    title: 'Shockproof Case for iPhone',
    brand: 'OtterBox',
    price: 1899,
    id: '903',
    imageUrl: 'https://th.bing.com/th/id/OIP.9vBmC485L6WjVLwD-5UShQHaHa?rs=1&pid=ImgDetMain',
    rating: 4.7,
    category: 'mobile covers'
  },
  {
    title: 'Hybrid Case for Xiaomi',
    brand: 'Redmi',
    price: 799,
    id: '904',
    imageUrl: 'https://th.bing.com/th/id/OIP.9vBmC485L6WjVLwD-5UShQHaHa?rs=1&pid=ImgDetMain',
    rating: 4.3,
    category: 'mobile covers'
  },
  {
    title: 'Rugged Armor Case for OnePlus',
    brand: 'Spigen',
    price: 999,
    id: '905',
    imageUrl: 'https://th.bing.com/th/id/OIP.9vBmC485L6WjVLwD-5UShQHaHa?rs=1&pid=ImgDetMain',
    rating: 4.4,
    category: 'mobile covers'
  },
  {
    title: 'Wooden Case for iPhone',
    brand: 'Lupa',
    price: 799,
    id: '906',
    imageUrl: 'https://th.bing.com/th/id/OIP.9vBmC485L6WjVLwD-5UShQHaHa?rs=1&pid=ImgDetMain',
    rating: 4.2,
    category: 'mobile covers'
  },
  {
    title: 'Clear Case for Galaxy S20',
    brand: 'Samsung',
    price: 899,
    id: '907',
    imageUrl: 'https://th.bing.com/th/id/OIP.9vBmC485L6WjVLwD-5UShQHaHa?rs=1&pid=ImgDetMain',
    rating: 4.5,
    category: 'mobile covers'
  },
  {
    title: 'Fashionable Leather Case for iPhone',
    brand: 'Moshi',
    price: 1299,
    id: '908',
    imageUrl: 'https://th.bing.com/th/id/OIP.9vBmC485L6WjVLwD-5UShQHaHa?rs=1&pid=ImgDetMain',
    rating: 4.6,
    category: 'mobile covers'
  },
  {
    title: 'Bumper Case for iPhone 13',
    brand: 'Case-Mate',
    price: 999,
    id: '909',
    imageUrl: 'https://th.bing.com/th/id/OIP.9vBmC485L6WjVLwD-5UShQHaHa?rs=1&pid=ImgDetMain',
    rating: 4.4,
    category: 'mobile covers'
  },
  {
    title: 'Customizable Phone Case',
    brand: 'Casetify',
    price: 1799,
    id: '910',
    imageUrl: 'https://th.bing.com/th/id/OIP.9vBmC485L6WjVLwD-5UShQHaHa?rs=1&pid=ImgDetMain',
    rating: 4.8,
    category: 'mobile covers'
  },
  {
    title: 'Slim Fit Case for Pixel',
    brand: 'Google',
    price: 899,
    id: '911',
    imageUrl: 'https://th.bing.com/th/id/OIP.9vBmC485L6WjVLwD-5UShQHaHa?rs=1&pid=ImgDetMain',
    rating: 4.2,
    category: 'mobile covers'
  },
  {
    title: 'Floral Print Case for iPhone',
    brand: 'SlickWraps',
    price: 899,
    id: '912',
    imageUrl: 'https://th.bing.com/th/id/OIP.9vBmC485L6WjVLwD-5UShQHaHa?rs=1&pid=ImgDetMain',
    rating: 4.3,
    category: 'mobile covers'
  },
  {
    title: 'Heavy Duty Case for iPhone 12',
    brand: 'SUPCASE',
    price: 1499,
    id: '913',
    imageUrl: 'https://th.bing.com/th/id/OIP.9vBmC485L6WjVLwD-5UShQHaHa?rs=1&pid=ImgDetMain',
    rating: 4.6,
    category: 'mobile covers'
  },
  {
    title: 'Carbon Fiber Case for Galaxy S21',
    brand: 'Zizo',
    price: 999,
    id: '914',
    imageUrl: 'https://th.bing.com/th/id/OIP.9vBmC485L6WjVLwD-5UShQHaHa?rs=1&pid=ImgDetMain',
    rating: 4.5,
    category: 'mobile covers'
  },
  {
    title: 'Silicone Case for iPhone 14',
    brand: 'Apple',
    price: 1299,
    id: '915',
    imageUrl: 'https://th.bing.com/th/id/OIP.9vBmC485L6WjVLwD-5UShQHaHa?rs=1&pid=ImgDetMain',
    rating: 4.4,
    category: 'mobile covers'
  },
  {
    title: 'Shockproof Case for Samsung Galaxy',
    brand: 'OtterBox',
    price: 1799,
    id: '916',
    imageUrl: 'https://th.bing.com/th/id/OIP.9vBmC485L6WjVLwD-5UShQHaHa?rs=1&pid=ImgDetMain',
    rating: 4.7,
    category: 'mobile covers'
  },
  {
    title: 'Leather Flip Case for iPhone',
    brand: 'Bose',
    price: 1199,
    id: '917',
    imageUrl: 'https://th.bing.com/th/id/OIP.9vBmC485L6WjVLwD-5UShQHaHa?rs=1&pid=ImgDetMain',
    rating: 4.3,
    category: 'mobile covers'
  },
  {
    title: 'Magnetic Case for iPhone',
    brand: 'Spigen',
    price: 1499,
    id: '918',
    imageUrl: 'https://th.bing.com/th/id/OIP.9vBmC485L6WjVLwD-5UShQHaHa?rs=1&pid=ImgDetMain',
    rating: 4.8,
    category: 'mobile covers'
  },
  {
    title: 'Wallet Case for OnePlus 9',
    brand: 'Moshi',
    price: 1599,
    id: '919',
    imageUrl: 'https://th.bing.com/th/id/OIP.9vBmC485L6WjVLwD-5UShQHaHa?rs=1&pid=ImgDetMain',
    rating: 4.4,
    category: 'mobile covers'
  },
  {
    title: 'Bumper Case for iPhone XR',
    brand: 'Urban Armor Gear',
    price: 999,
    id: '920',
    imageUrl: 'https://th.bing.com/th/id/OIP.9vBmC485L6WjVLwD-5UShQHaHa?rs=1&pid=ImgDetMain',
    rating: 4.7,
    category: 'mobile covers'
  },
  {
    title: 'Slim Leather Case for Samsung',
    brand: 'Samsung',
    price: 1299,
    id: '921',
    imageUrl: 'https://th.bing.com/th/id/OIP.9vBmC485L6WjVLwD-5UShQHaHa?rs=1&pid=ImgDetMain',
    rating: 4.5,
    category: 'mobile covers'
  },
  {
    title: 'Custom Design Case for iPhone',
    brand: 'Caseable',
    price: 1799,
    id: '922',
    imageUrl: 'https://th.bing.com/th/id/OIP.9vBmC485L6WjVLwD-5UShQHaHa?rs=1&pid=ImgDetMain',
    rating: 4.3,
    category: 'mobile covers'
  },
  {
    title: 'Carbon Fiber Back Skin for iPhone',
    brand: 'Dbrand',
    price: 799,
    id: '924',
    imageUrl: 'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile-skin/r/8/n/samsung-galaxy-m13-2022-yes-proskins-original-imagggbf4sgckghx.jpeg?q=70',
    rating: 4.6,
    category: 'mobile back skin'
  },
  {
    title: 'Wood Texture Back Skin for Samsung',
    brand: 'Gizmobeskin',
    price: 899,
    id: '925',
    imageUrl: 'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile-skin/r/8/n/samsung-galaxy-m13-2022-yes-proskins-original-imagggbf4sgckghx.jpeg?q=70',
    rating: 4.3,
    category: 'mobile back skin'
  },
  {
    title: 'Matte Black Back Skin for OnePlus',
    brand: 'Case-Mate',
    price: 699,
    id: '926',
    imageUrl: 'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile-skin/r/8/n/samsung-galaxy-m13-2022-yes-proskins-original-imagggbf4sgckghx.jpeg?q=70',
    rating: 4.5,
    category: 'mobile back skin'
  },
  {
    title: 'Leather Texture Back Skin for iPhone 12',
    brand: 'Skinomi',
    price: 799,
    id: '927',
    imageUrl: 'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile-skin/r/8/n/samsung-galaxy-m13-2022-yes-proskins-original-imagggbf4sgckghx.jpeg?q=70',
    rating: 4.7,
    category: 'mobile back skin'
  },
  {
    title: 'Metallic Silver Back Skin for Xiaomi',
    brand: 'KnottyDeals',
    price: 999,
    id: '928',
    imageUrl: 'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile-skin/r/8/n/samsung-galaxy-m13-2022-yes-proskins-original-imagggbf4sgckghx.jpeg?q=70',
    rating: 4.4,
    category: 'mobile back skin'
  },
  {
    title: 'Silk Touch Back Skin for Samsung Galaxy S21',
    brand: 'ZAGG',
    price: 1099,
    id: '929',
    imageUrl: 'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile-skin/r/8/n/samsung-galaxy-m13-2022-yes-proskins-original-imagggbf4sgckghx.jpeg?q=70',
    rating: 4.3,
    category: 'mobile back skin'
  },
  {
    title: 'Camo Back Skin for iPhone 13',
    brand: 'Gizmobeskin',
    price: 899,
    id: '930',
    imageUrl: 'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile-skin/r/8/n/samsung-galaxy-m13-2022-yes-proskins-original-imagggbf4sgckghx.jpeg?q=70',
    rating: 4.5,
    category: 'mobile back skin'
  },
  {
    title: 'Customizable Back Skin for iPhone 14',
    brand: 'SlickWraps',
    price: 999,
    id: '931',
    imageUrl: 'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile-skin/r/8/n/samsung-galaxy-m13-2022-yes-proskins-original-imagggbf4sgckghx.jpeg?q=70',
    rating: 4.6,
    category: 'mobile back skin'
  },
  {
    title: 'Gradient Color Back Skin for Galaxy S20',
    brand: 'Caseology',
    price: 1099,
    id: '932',
    imageUrl: 'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile-skin/r/8/n/samsung-galaxy-m13-2022-yes-proskins-original-imagggbf4sgckghx.jpeg?q=70',
    rating: 4.4,
    category: 'mobile back skin'
  },
  {
    title: 'Frosted Glass Back Skin for OnePlus 9',
    brand: 'Dbrand',
    price: 799,
    id: '933',
    imageUrl: 'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile-skin/r/8/n/samsung-galaxy-m13-2022-yes-proskins-original-imagggbf4sgckghx.jpeg?q=70',
    rating: 4.5,
    category: 'mobile back skin'
  },
  {
    title: 'Holographic Back Skin for iPhone',
    brand: 'Skinomi',
    price: 899,
    id: '934',
    imageUrl: 'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile-skin/r/8/n/samsung-galaxy-m13-2022-yes-proskins-original-imagggbf4sgckghx.jpeg?q=70',
    rating: 4.7,
    category: 'mobile back skin'
  },
  {
    title: 'Glittery Back Skin for Samsung Galaxy Note 20',
    brand: 'Gizmobeskin',
    price: 799,
    id: '935',
    imageUrl: 'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile-skin/r/8/n/samsung-galaxy-m13-2022-yes-proskins-original-imagggbf4sgckghx.jpeg?q=70',
    rating: 4.4,
    category: 'mobile back skin'
  },
  {
    title: 'Wooden Pattern Back Skin for iPhone X',
    brand: 'SlickWraps',
    price: 999,
    id: '936',
    imageUrl: 'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile-skin/r/8/n/samsung-galaxy-m13-2022-yes-proskins-original-imagggbf4sgckghx.jpeg?q=70',
    rating: 4.5,
    category: 'mobile back skin'
  },
  {
    title: 'Silicone Back Skin for iPhone',
    brand: 'Apple',
    price: 999,
    id: '937',
    imageUrl: 'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile-skin/r/8/n/samsung-galaxy-m13-2022-yes-proskins-original-imagggbf4sgckghx.jpeg?q=70',
    rating: 4.3,
    category: 'mobile back skin'
  },
  {
    title: 'Glowing Back Skin for Samsung',
    brand: 'GlowSkinz',
    price: 1299,
    id: '938',
    imageUrl: 'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile-skin/r/8/n/samsung-galaxy-m13-2022-yes-proskins-original-imagggbf4sgckghx.jpeg?q=70',
    rating: 4.6,
    category: 'mobile back skin'
  },
  {
    title: 'Smooth Finish Back Skin for Galaxy S22',
    brand: 'Spigen',
    price: 899,
    id: '939',
    imageUrl: 'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile-skin/r/8/n/samsung-galaxy-m13-2022-yes-proskins-original-imagggbf4sgckghx.jpeg?q=70',
    rating: 4.5,
    category: 'mobile back skin'
  },
  {
    title: 'Anti-Scratch Back Skin for OnePlus 8T',
    brand: 'Caseology',
    price: 799,
    id: '940',
    imageUrl: 'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile-skin/r/8/n/samsung-galaxy-m13-2022-yes-proskins-original-imagggbf4sgckghx.jpeg?q=70',
    rating: 4.4,
    category: 'mobile back skin'
  },
  {
    title: 'Frosted Silicone Back Skin for Xiaomi',
    brand: 'Redmi',
    price: 799,
    id: '941',
    imageUrl: 'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile-skin/r/8/n/samsung-galaxy-m13-2022-yes-proskins-original-imagggbf4sgckghx.jpeg?q=70',
    rating: 4.3,
    category: 'mobile back skin'
  },
  {
    title: 'Hair Straightener',
    brand: 'Philips',
    price: 2499,
    id: '947',
    imageUrl: 'https://static.wixstatic.com/media/8ddfc54557334e96a2eac37ab491e1c5.jpg/v1/fill/w_1920,h_1281,al_c,q_90,usm_0.66_1.00_0.01/8ddfc54557334e96a2eac37ab491e1c5.jpg',
    rating: 4.5,
    category: 'saloon products'
  },
  {
    title: 'Blow Dryer',
    brand: 'Dyson',
    price: 4999,
    id: '948',
    imageUrl: 'https://static.wixstatic.com/media/8ddfc54557334e96a2eac37ab491e1c5.jpg/v1/fill/w_1920,h_1281,al_c,q_90,usm_0.66_1.00_0.01/8ddfc54557334e96a2eac37ab491e1c5.jpg',
    rating: 4.7,
    category: 'saloon products'
  },
  {
    title: 'Electric Hair Clipper',
    brand: 'Wahl',
    price: 1399,
    id: '949',
    imageUrl: 'https://static.wixstatic.com/media/8ddfc54557334e96a2eac37ab491e1c5.jpg/v1/fill/w_1920,h_1281,al_c,q_90,usm_0.66_1.00_0.01/8ddfc54557334e96a2eac37ab491e1c5.jpg',
    rating: 4.4,
    category: 'saloon products'
  },
  {
    title: 'Hair Curling Iron',
    brand: 'Remington',
    price: 1899,
    id: '950',
    imageUrl: 'https://static.wixstatic.com/media/8ddfc54557334e96a2eac37ab491e1c5.jpg/v1/fill/w_1920,h_1281,al_c,q_90,usm_0.66_1.00_0.01/8ddfc54557334e96a2eac37ab491e1c5.jpg',
    rating: 4.3,
    category: 'saloon products'
  },
  {
    title: 'Hair Trimmer',
    brand: 'Philips',
    price: 1299,
    id: '951',
    imageUrl: 'https://static.wixstatic.com/media/8ddfc54557334e96a2eac37ab491e1c5.jpg/v1/fill/w_1920,h_1281,al_c,q_90,usm_0.66_1.00_0.01/8ddfc54557334e96a2eac37ab491e1c5.jpg',
    rating: 4.5,
    category: 'saloon products'
  },
  {
    title: 'Nail Drill Kit',
    brand: 'Beurer',
    price: 1699,
    id: '952',
    imageUrl: 'https://static.wixstatic.com/media/8ddfc54557334e96a2eac37ab491e1c5.jpg/v1/fill/w_1920,h_1281,al_c,q_90,usm_0.66_1.00_0.01/8ddfc54557334e96a2eac37ab491e1c5.jpg',
    rating: 4.2,
    category: 'saloon products'
  },
  {
    title: 'Hair Growth Serum',
    brand: 'Kiehl\'s',
    price: 2499,
    id: '953',
    imageUrl: 'https://static.wixstatic.com/media/8ddfc54557334e96a2eac37ab491e1c5.jpg/v1/fill/w_1920,h_1281,al_c,q_90,usm_0.66_1.00_0.01/8ddfc54557334e96a2eac37ab491e1c5.jpg',
    rating: 4.6,
    category: 'saloon products'
  },
  {
    title: 'Beard Grooming Kit',
    brand: 'Ustraa',
    price: 999,
    id: '954',
    imageUrl: 'https://static.wixstatic.com/media/8ddfc54557334e96a2eac37ab491e1c5.jpg/v1/fill/w_1920,h_1281,al_c,q_90,usm_0.66_1.00_0.01/8ddfc54557334e96a2eac37ab491e1c5.jpg',
    rating: 4.5,
    category: 'saloon products'
  },
  {
    title: 'Shaving Razor Set',
    brand: 'Gillette',
    price: 799,
    id: '955',
    imageUrl: 'https://static.wixstatic.com/media/8ddfc54557334e96a2eac37ab491e1c5.jpg/v1/fill/w_1920,h_1281,al_c,q_90,usm_0.66_1.00_0.01/8ddfc54557334e96a2eac37ab491e1c5.jpg',
    rating: 4.6,
    category: 'saloon products'
  },
  {
    title: 'Face Cleanser Brush',
    brand: 'Clarisonic',
    price: 2999,
    id: '956',
    imageUrl: 'https://static.wixstatic.com/media/8ddfc54557334e96a2eac37ab491e1c5.jpg/v1/fill/w_1920,h_1281,al_c,q_90,usm_0.66_1.00_0.01/8ddfc54557334e96a2eac37ab491e1c5.jpg',
    rating: 4.7,
    category: 'saloon products'
  },
  {
    title: 'Facial Steamer',
    brand: 'Panasonic',
    price: 1799,
    id: '957',
    imageUrl: 'https://static.wixstatic.com/media/8ddfc54557334e96a2eac37ab491e1c5.jpg/v1/fill/w_1920,h_1281,al_c,q_90,usm_0.66_1.00_0.01/8ddfc54557334e96a2eac37ab491e1c5.jpg',
    rating: 4.4,
    category: 'saloon products'
  },
  {
    title: 'Electric Foot File',
    brand: 'Emjoi',
    price: 1299,
    id: '958',
    imageUrl: 'https://static.wixstatic.com/media/8ddfc54557334e96a2eac37ab491e1c5.jpg/v1/fill/w_1920,h_1281,al_c,q_90,usm_0.66_1.00_0.01/8ddfc54557334e96a2eac37ab491e1c5.jpg',
    rating: 4.3,
    category: 'saloon products'
  },
  {
    title: 'Epilator',
    brand: 'Braun',
    price: 2799,
    id: '959',
    imageUrl: 'https://static.wixstatic.com/media/8ddfc54557334e96a2eac37ab491e1c5.jpg/v1/fill/w_1920,h_1281,al_c,q_90,usm_0.66_1.00_0.01/8ddfc54557334e96a2eac37ab491e1c5.jpg',
    rating: 4.5,
    category: 'saloon products'
  },
  {
    title: 'Hair Volumizer',
    brand: 'Conair',
    price: 1699,
    id: '960',
    imageUrl: 'https://static.wixstatic.com/media/8ddfc54557334e96a2eac37ab491e1c5.jpg/v1/fill/w_1920,h_1281,al_c,q_90,usm_0.66_1.00_0.01/8ddfc54557334e96a2eac37ab491e1c5.jpg',
    rating: 4.4,
    category: 'saloon products'
  },
  {
    title: 'Facial Waxing Kit',
    brand: 'Veet',
    price: 599,
    id: '961',
    imageUrl: 'https://static.wixstatic.com/media/8ddfc54557334e96a2eac37ab491e1c5.jpg/v1/fill/w_1920,h_1281,al_c,q_90,usm_0.66_1.00_0.01/8ddfc54557334e96a2eac37ab491e1c5.jpg',
    rating: 4.2,
    category: 'saloon products'
  },
  {
    title: 'Body Massager',
    brand: 'HealthSense',
    price: 1799,
    id: '962',
    imageUrl: 'https://static.wixstatic.com/media/8ddfc54557334e96a2eac37ab491e1c5.jpg/v1/fill/w_1920,h_1281,al_c,q_90,usm_0.66_1.00_0.01/8ddfc54557334e96a2eac37ab491e1c5.jpg',
    rating: 4.5,
    category: 'saloon products'
  },
  {
    title: 'Moisturizer',
    brand: 'Nivea',
    price: 599,
    id: '963',
    imageUrl: 'https://static.wixstatic.com/media/8ddfc54557334e96a2eac37ab491e1c5.jpg/v1/fill/w_1920,h_1281,al_c,q_90,usm_0.66_1.00_0.01/8ddfc54557334e96a2eac37ab491e1c5.jpg',
    rating: 4.6,
    category: 'saloon products'
  }
];

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
};

const sortbyOptions = [
  {
    optionId: 'PRICE_HIGH',
    displayText: 'Price (High-Low)',
  },
  {
    optionId: 'PRICE_LOW',
    displayText: 'Price (Low-High)',
  },
];

class PrimeDealsSection extends Component {
  state = {
    productsList: sampleProducts,
    apiStatus: apiStatusConstants.success, // Static data with 'SUCCESS'
    activeOptionId: 'PRICE_LOW',
    activeCategoryId: '',
    activeRatingId: '',
    searchInput: '',
  };

  changeSortby = activeOptionId => {
    this.setState({ activeOptionId });
  };

  renderProductsListView = () => {
    const { productsList, activeCategoryId, activeRatingId, searchInput } = this.state;
  
    // Filtering based on search input, category, and rating
    const filteredProducts = productsList.filter(product => {
      const isCategoryMatch = !activeCategoryId || product.category === activeCategoryId;
      const isRatingMatch = !activeRatingId || product.rating >= activeRatingId;
      const isSearchMatch = product.title.toLowerCase().includes(searchInput.toLowerCase());
      return isCategoryMatch && isRatingMatch && isSearchMatch;
    });
  
    return (
      <div className="all-products-container">
        <ProductsHeader
          activeOptionId={this.state.activeOptionId}
          sortbyOptions={sortbyOptions}
          changeSortby={this.changeSortby}
        />
        <ul className="products-list">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard productData={product} key={product.id} />
            ))
          ) : (
            <div className="no-products-view">
              <h1 className="no-products-heading">No Products Found</h1>
              <p className="no-products-description">Try adjusting your filters.</p>
            </div>
          )}
        </ul>
      </div>
    );
  };

  renderAllProducts = () => {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderProductsListView();
      case apiStatusConstants.inProgress:
        return <h1>Loading...</h1>;
      default:
        return null;
    }
  };

  render() {
    const { activeCategoryId, searchInput, activeRatingId } = this.state;

    // Define categories and ratings for filtering
    const categoryOptions = [
      { categoryId: 'speaker', name: 'Speaker' },
      { categoryId: 'headphones', name: 'Headphones' },
      { categoryId: 'mix products', name: 'Mix Products' },
      { categoryId: 'grocery', name: 'Grocery' },
      { categoryId: 'airpods case', name: 'Airpods Case' },
      { categoryId: 'smart watch', name: 'Smart Watch' },
      { categoryId: 'smart watch charge', name: 'Smart Watch Charge' },
      { categoryId: 'memory card & pand', name: 'Memory Card & Pand' },
      { categoryId: 'power bank', name: 'Power Bank' },
      { categoryId: 'mobile stand', name: 'Mobile Stand' },
      { categoryId: 'computer products', name: 'Computer Products' },
      { categoryId: 'Mobile Charger', name: 'Mobile Charger' },
      { categoryId: 'car charger', name: 'Car Charger' },
      { categoryId: 'charging cable', name: 'Charging Cable' },
      { categoryId: 'mobile battery', name: 'Mobile Battery' },
      { categoryId: 'connector pin', name: 'Connector Pin' },
      { categoryId: 'decoration & lighting', name: 'Decoration & Lighting' },
      { categoryId: 'mobile covers', name: 'Mobile Covers' },
      { categoryId: 'mobile back skin', name: 'Mobile Back Skin' },
      { categoryId: 'saloon products', name: 'Saloon Products' },

    ];

    const ratingsList = [
      { ratingId: '1', imageUrl: 'https://via.placeholder.com/20', rating: 1 },
      { ratingId: '2', imageUrl: 'https://via.placeholder.com/20', rating: 2 },
      { ratingId: '3', imageUrl: 'https://via.placeholder.com/20', rating: 3 },
      { ratingId: '4', imageUrl: 'https://via.placeholder.com/20', rating: 4 },
      { ratingId: '5', imageUrl: 'https://via.placeholder.com/20', rating: 5 },
    ];

    return (
      <>
        <div className="all-products-section">
        <FiltersSection
          searchInput={searchInput}
          categoryOptions={categoryOptions}
          ratingsList={ratingsList}
          activeCategoryId={activeCategoryId}
          activeRatingId={activeRatingId}
          changeSearchInput={searchInput => this.setState({ searchInput })}
          changeCategory={activeCategoryId => this.setState({ activeCategoryId })}
          changeRating={activeRatingId => this.setState({ activeRatingId })}
          clearFilters={() => this.setState({ activeCategoryId: '', activeRatingId: '', searchInput: '' })}
        />
        {this.renderAllProducts()}
      </div>
      </>
    );
  }
}

export default PrimeDealsSection;