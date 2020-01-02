/*
Elephant SQL:
CREATE TABLE catInfo
(
  name VARCHAR(20),
  photoUrl VARCHAR(300),
  healthProblem VARCHAR(50),
  description VARCHAR(2000)
);

INSERT INTO catInfo(name, photoUrl, healthProblem, description)
VALUES('York Chocolate', 'https://cdn2.thecatapi.com/images/7pCnjXd47.jpg', 'diabetes', 'He is lazy and does not like to exercise. He got diabetes a month ago, and we have been trying to cut down his food intake as the vet suggested. Also, no more bananas for him.');

Select * from catInfo;
*/

// const randomCats = [
//   {
//       "breeds": [],
//       "id": "242",
//       "url": "https://30.media.tumblr.com/tumblr_lihovjUSp51qfyzelo1_250.jpg",
//       "width": 1857,
//       "height": 1392
//   },
//   {
//       "breeds": [],
//       "id": "284",
//       "url": "https://26.media.tumblr.com/tumblr_lh3izcVJjE1qfyzelo1_250.jpg",
//       "width": 604,
//       "height": 403
//   },
//   {
//       "breeds": [],
//       "id": "2or",
//       "url": "https://cdn2.thecatapi.com/images/2or.gif",
//       "width": 330,
//       "height": 293
//   },
//   {
//       "breeds": [],
//       "id": "3r7",
//       "url": "https://cdn2.thecatapi.com/images/3r7.gif",
//       "width": 500,
//       "height": 325
//   },
//   {
//       "breeds": [],
//       "id": "43l",
//       "url": "https://25.media.tumblr.com/tumblr_m3on3wWclt1rtntu6o1_250.png",
//       "width": 500,
//       "height": 334
//   },
//   {
//       "breeds": [],
//       "id": "48p",
//       "url": "https://cdn2.thecatapi.com/images/48p.gif",
//       "width": 250,
//       "height": 170
//   },
//   {
//       "breeds": [],
//       "id": "4l1",
//       "url": "https://cdn2.thecatapi.com/images/4l1.gif",
//       "width": 330,
//       "height": 293
//   },
//   {
//       "breeds": [],
//       "id": "6s3",
//       "url": "https://24.media.tumblr.com/tumblr_lgqh880Hbt1qfyzelo1_250.jpg",
//       "width": 1024,
//       "height": 707
//   },
//   {
//       "breeds": [],
//       "id": "996",
//       "url": "https://25.media.tumblr.com/tumblr_m3i7e8GkRY1qbe5pxo1_250.jpg",
//       "width": 600,
//       "height": 396
//   },
//   {
//       "breeds": [],
//       "id": "9pn",
//       "url": "https://25.media.tumblr.com/tumblr_m1rd0kcdxZ1qz5dg8o1_250.jpg",
//       "width": 500,
//       "height": 348
//   },
//   {
//       "breeds": [],
//       "id": "a54",
//       "url": "https://25.media.tumblr.com/tumblr_m3i12yTB6d1qze0hyo1_250.jpg",
//       "width": 600,
//       "height": 450
//   },
//   {
//       "breeds": [],
//       "id": "a5a",
//       "url": "https://25.media.tumblr.com/tumblr_m3hhprWTKB1qze0hyo1_250.jpg",
//       "width": 900,
//       "height": 1200
//   },
//   {
//       "breeds": [],
//       "id": "a9h",
//       "url": "https://25.media.tumblr.com/tumblr_m27b53Tkji1qze0hyo1_250.jpg",
//       "width": 900,
//       "height": 570
//   },
//   {
//       "breeds": [],
//       "id": "b5m",
//       "url": "https://25.media.tumblr.com/tumblr_lz7reo8VRG1qzw05ko1_250.jpg",
//       "width": 612,
//       "height": 612
//   },
//   {
//       "breeds": [],
//       "id": "b9v",
//       "url": "https://25.media.tumblr.com/tumblr_li3x1nLGjO1qgnva2o1_250.jpg",
//       "width": 500,
//       "height": 333
//   },
//   {
//       "breeds": [],
//       "id": "boa",
//       "url": "https://25.media.tumblr.com/tumblr_m43uijCiLY1rrzydho1_250.jpg",
//       "width": 640,
//       "height": 480
//   },
//   {
//       "breeds": [],
//       "id": "brs",
//       "url": "https://24.media.tumblr.com/tumblr_ksycmjK1lZ1qziq6co1_250.jpg",
//       "width": 375,
//       "height": 500
//   },
//   {
//       "breeds": [],
//       "id": "c2o",
//       "url": "https://cdn2.thecatapi.com/images/c2o.gif",
//       "width": 245,
//       "height": 236
//   },
//   {
//       "breeds": [],
//       "id": "dib",
//       "url": "https://24.media.tumblr.com/tumblr_m4lbyj8lwl1r5oow1o1_250.jpg",
//       "width": 800,
//       "height": 491
//   },
//   {
//       "breeds": [],
//       "id": "dkp",
//       "url": "https://25.media.tumblr.com/tumblr_m4puf1j9DI1r6jd7fo1_250.jpg",
//       "width": 600,
//       "height": 450
//   },
//   {
//       "breeds": [],
//       "id": "dmk",
//       "url": "https://25.media.tumblr.com/tumblr_m34tjiKe0p1qzg5fzo1_250.jpg",
//       "width": 1024,
//       "height": 768
//   },
//   {
//       "breeds": [],
//       "id": "dmt",
//       "url": "https://24.media.tumblr.com/tumblr_m4pl84G1JN1qd477zo1_250.jpg",
//       "width": 600,
//       "height": 800
//   },
//   {
//       "breeds": [],
//       "id": "dsu",
//       "url": "https://24.media.tumblr.com/tumblr_m3phst0trA1qejbiro1_250.jpg",
//       "width": 1024,
//       "height": 768
//   },
//   {
//       "breeds": [],
//       "id": "VXbGZUzX1",
//       "url": "https://cdn2.thecatapi.com/images/VXbGZUzX1.jpg",
//       "width": 768,
//       "height": 1024
//   },
//   {
//       "breeds": [
//           {
//               "weight": {
//                   "imperial": "12 - 20",
//                   "metric": "5 - 9"
//               },
//               "id": "ragd",
//               "name": "Ragdoll",
//               "cfa_url": "http://cfa.org/Breeds/BreedsKthruR/Ragdoll.aspx",
//               "vetstreet_url": "http://www.vetstreet.com/cats/ragdoll",
//               "vcahospitals_url": "https://vcahospitals.com/know-your-pet/cat-breeds/ragdoll",
//               "temperament": "Affectionate, Friendly, Gentle, Quiet, Easygoing",
//               "origin": "United States",
//               "country_codes": "US",
//               "country_code": "US",
//               "description": "Ragdolls love their people, greeting them at the door, following them around the house, and leaping into a lap or snuggling in bed whenever given the chance. They are the epitome of a lap cat, enjoy being carried and collapsing into the arms of anyone who holds them.",
//               "life_span": "12 - 17",
//               "indoor": 0,
//               "lap": 1,
//               "alt_names": "Rag doll",
//               "adaptability": 5,
//               "affection_level": 5,
//               "child_friendly": 4,
//               "dog_friendly": 5,
//               "energy_level": 3,
//               "grooming": 2,
//               "health_issues": 3,
//               "intelligence": 3,
//               "shedding_level": 3,
//               "social_needs": 5,
//               "stranger_friendly": 3,
//               "vocalisation": 1,
//               "experimental": 0,
//               "hairless": 0,
//               "natural": 0,
//               "rare": 0,
//               "rex": 0,
//               "suppressed_tail": 0,
//               "short_legs": 0,
//               "wikipedia_url": "https://en.wikipedia.org/wiki/Ragdoll",
//               "hypoallergenic": 0
//           }
//       ],
//       "id": "aWVfoSN_K",
//       "url": "https://cdn2.thecatapi.com/images/aWVfoSN_K.jpg",
//       "width": 1080,
//       "height": 1076
//   },
//   {
//     "breeds": [],
//     "categories": [
//         {
//             "id": 1,
//             "name": "hats"
//         }
//     ],
//     "id": "d",
//     "url": "https://26.media.tumblr.com/tumblr_krww7pEgmK1qa9hjso1_250.jpg",
//     "width": 800,
//     "height": 600
//   },
//   {
//       "breeds": [],
//       "categories": [
//           {
//               "id": 3,
//               "name": "funny"
//           }
//       ],
//       "id": "88",
//       "url": "https://cdn2.thecatapi.com/images/88.gif",
//       "width": 300,
//       "height": 156
//   },
//   {
//       "breeds": [],
//       "id": "1uk",
//       "url": "https://26.media.tumblr.com/tumblr_m12o7iWoH21qzv52ko1_250.jpg",
//       "width": 720,
//       "height": 538
//   },
//   {
//       "breeds": [],
//       "id": "20o",
//       "url": "https://25.media.tumblr.com/tumblr_lzlkh5nz7K1qzv52ko1_250.jpg",
//       "width": 500,
//       "height": 500
//   },
//   {
//       "breeds": [],
//       "id": "2n3",
//       "url": "https://30.media.tumblr.com/tumblr_m1k4v2PvCb1r6b7kmo1_250.jpg",
//       "width": 500,
//       "height": 333
//   },
//   {
//       "breeds": [],
//       "id": "3hs",
//       "url": "https://24.media.tumblr.com/tumblr_m3d2zsJr9Y1qe9f3eo1_250.jpg",
//       "width": 4000,
//       "height": 3000
//   },
//   {
//       "breeds": [],
//       "id": "4mk",
//       "url": "https://cdn2.thecatapi.com/images/4mk.gif",
//       "width": 230,
//       "height": 138
//   },
//   {
//       "breeds": [],
//       "categories": [
//           {
//               "id": 2,
//               "name": "space"
//           }
//       ],
//       "id": "5ij",
//       "url": "https://25.media.tumblr.com/tumblr_lstb9maPPy1r4xjo2o1_250.jpg",
//       "width": 498,
//       "height": 500
//   },
//   {
//       "breeds": [],
//       "id": "5ra",
//       "url": "https://24.media.tumblr.com/tumblr_ln9r5rhV7o1qbt33io1_250.jpg",
//       "width": 600,
//       "height": 450
//   },
//   {
//       "breeds": [],
//       "id": "7lr",
//       "url": "https://24.media.tumblr.com/tumblr_m2ghjzApyE1r2zs3eo1_250.jpg",
//       "width": 616,
//       "height": 800
//   },
//   {
//       "breeds": [],
//       "categories": [
//           {
//               "id": 14,
//               "name": "sinks"
//           }
//       ],
//       "id": "8lr",
//       "url": "https://24.media.tumblr.com/tumblr_m47bhoeJ9x1qenqklo1_250.jpg",
//       "width": 1280,
//       "height": 1280
//   },
//   {
//       "breeds": [],
//       "id": "a66",
//       "url": "https://25.media.tumblr.com/tumblr_m33ift52ms1qze0hyo1_250.jpg",
//       "width": 500,
//       "height": 358
//   },
//   {
//       "breeds": [],
//       "id": "a77",
//       "url": "https://24.media.tumblr.com/tumblr_m1v6y19gEH1rp17vmo1_250.jpg",
//       "width": 484,
//       "height": 500
//   },
//   {
//       "breeds": [],
//       "id": "bft",
//       "url": "https://24.media.tumblr.com/tumblr_lh2c3npvtb1qgnva2o1_250.jpg",
//       "width": 500,
//       "height": 333
//   },
//   {
//       "breeds": [],
//       "id": "bnb",
//       "url": "https://25.media.tumblr.com/tumblr_m4l7434VEN1qd477zo1_250.jpg",
//       "width": 478,
//       "height": 600
//   },
//   {
//       "breeds": [],
//       "id": "c8c",
//       "url": "https://25.media.tumblr.com/tumblr_lzxosufsJs1qgjltdo1_250.jpg",
//       "width": 864,
//       "height": 867
//   },
//   {
//       "breeds": [],
//       "id": "che",
//       "url": "https://24.media.tumblr.com/tumblr_lp0w4ynAUE1qzv52ko1_250.jpg",
//       "width": 402,
//       "height": 604
//   },
//   {
//       "breeds": [],
//       "id": "css",
//       "url": "https://25.media.tumblr.com/tumblr_lzyl0tOqFm1qzkl9go1_250.jpg",
//       "width": 4300,
//       "height": 2857
//   },
//   {
//       "breeds": [],
//       "id": "dau",
//       "url": "https://24.media.tumblr.com/tumblr_m4jw1wZghz1qjc1a7o1_250.jpg",
//       "width": 900,
//       "height": 675
//   },
//   {
//       "breeds": [],
//       "id": "dkl",
//       "url": "https://25.media.tumblr.com/tumblr_m4qd3i0yv01qd477zo1_250.jpg",
//       "width": 640,
//       "height": 480
//   },
//   {
//       "breeds": [],
//       "id": "MTYwNTU4NQ",
//       "url": "https://25.media.tumblr.com/tumblr_mbphaczrBq1qhwmnpo1_250.jpg",
//       "width": 720,
//       "height": 960
//   },
//   {
//       "breeds": [],
//       "id": "MTYxNDIxMQ",
//       "url": "https://25.media.tumblr.com/tumblr_mbampofmba1qhwmnpo1_250.jpg",
//       "width": 553,
//       "height": 709
//   },
//   {
//       "breeds": [],
//       "id": "MTkzMzI2MA",
//       "url": "https://24.media.tumblr.com/tumblr_m76rkv3Fw91qjev1to1_250.jpg",
//       "width": 1024,
//       "height": 680
//   },
//   {
//       "breeds": [],
//       "id": "_mtVKrRTD",
//       "url": "https://cdn2.thecatapi.com/images/_mtVKrRTD.jpg",
//       "width": 225,
//       "height": 225
//   },
//   {
//       "breeds": [],
//       "id": "86uzwNQrj",
//       "url": "https://cdn2.thecatapi.com/images/86uzwNQrj.jpg",
//       "width": 1394,
//       "height": 1600
//   }
// ];

// // const randomCatImageUrls = [];
// // for (let cat of randomCats) {
// //   randomCatImageUrls.push(cat.url);
// // }
// // console.log(randomCatImageUrls);

const randomCatImageUrls = [ 'https://30.media.tumblr.com/tumblr_lihovjUSp51qfyzelo1_250.jpg',
'https://26.media.tumblr.com/tumblr_lh3izcVJjE1qfyzelo1_250.jpg',
'https://cdn2.thecatapi.com/images/2or.gif',
'https://cdn2.thecatapi.com/images/3r7.gif',
'https://25.media.tumblr.com/tumblr_m3on3wWclt1rtntu6o1_250.png',
'https://cdn2.thecatapi.com/images/48p.gif',
'https://cdn2.thecatapi.com/images/4l1.gif',
'https://24.media.tumblr.com/tumblr_lgqh880Hbt1qfyzelo1_250.jpg',
'https://25.media.tumblr.com/tumblr_m3i7e8GkRY1qbe5pxo1_250.jpg',
'https://25.media.tumblr.com/tumblr_m1rd0kcdxZ1qz5dg8o1_250.jpg',
'https://25.media.tumblr.com/tumblr_m3i12yTB6d1qze0hyo1_250.jpg',
'https://25.media.tumblr.com/tumblr_m3hhprWTKB1qze0hyo1_250.jpg',
'https://25.media.tumblr.com/tumblr_m27b53Tkji1qze0hyo1_250.jpg',
'https://25.media.tumblr.com/tumblr_lz7reo8VRG1qzw05ko1_250.jpg',
'https://25.media.tumblr.com/tumblr_li3x1nLGjO1qgnva2o1_250.jpg',
'https://25.media.tumblr.com/tumblr_m43uijCiLY1rrzydho1_250.jpg',
'https://24.media.tumblr.com/tumblr_ksycmjK1lZ1qziq6co1_250.jpg',
'https://cdn2.thecatapi.com/images/c2o.gif',
'https://24.media.tumblr.com/tumblr_m4lbyj8lwl1r5oow1o1_250.jpg',
'https://25.media.tumblr.com/tumblr_m4puf1j9DI1r6jd7fo1_250.jpg',
'https://25.media.tumblr.com/tumblr_m34tjiKe0p1qzg5fzo1_250.jpg',
'https://24.media.tumblr.com/tumblr_m4pl84G1JN1qd477zo1_250.jpg',
'https://24.media.tumblr.com/tumblr_m3phst0trA1qejbiro1_250.jpg',
'https://cdn2.thecatapi.com/images/VXbGZUzX1.jpg',
'https://cdn2.thecatapi.com/images/aWVfoSN_K.jpg',
'https://26.media.tumblr.com/tumblr_krww7pEgmK1qa9hjso1_250.jpg',
'https://cdn2.thecatapi.com/images/88.gif',
'https://26.media.tumblr.com/tumblr_m12o7iWoH21qzv52ko1_250.jpg',
'https://25.media.tumblr.com/tumblr_lzlkh5nz7K1qzv52ko1_250.jpg',
'https://30.media.tumblr.com/tumblr_m1k4v2PvCb1r6b7kmo1_250.jpg',
'https://24.media.tumblr.com/tumblr_m3d2zsJr9Y1qe9f3eo1_250.jpg',
'https://cdn2.thecatapi.com/images/4mk.gif',
'https://25.media.tumblr.com/tumblr_lstb9maPPy1r4xjo2o1_250.jpg',
'https://24.media.tumblr.com/tumblr_ln9r5rhV7o1qbt33io1_250.jpg',
'https://24.media.tumblr.com/tumblr_m2ghjzApyE1r2zs3eo1_250.jpg',
'https://24.media.tumblr.com/tumblr_m47bhoeJ9x1qenqklo1_250.jpg',
'https://25.media.tumblr.com/tumblr_m33ift52ms1qze0hyo1_250.jpg',
'https://24.media.tumblr.com/tumblr_m1v6y19gEH1rp17vmo1_250.jpg',
'https://24.media.tumblr.com/tumblr_lh2c3npvtb1qgnva2o1_250.jpg',
'https://25.media.tumblr.com/tumblr_m4l7434VEN1qd477zo1_250.jpg',
'https://25.media.tumblr.com/tumblr_lzxosufsJs1qgjltdo1_250.jpg',
'https://24.media.tumblr.com/tumblr_lp0w4ynAUE1qzv52ko1_250.jpg',
'https://25.media.tumblr.com/tumblr_lzyl0tOqFm1qzkl9go1_250.jpg',
'https://24.media.tumblr.com/tumblr_m4jw1wZghz1qjc1a7o1_250.jpg',
'https://25.media.tumblr.com/tumblr_m4qd3i0yv01qd477zo1_250.jpg',
'https://25.media.tumblr.com/tumblr_mbphaczrBq1qhwmnpo1_250.jpg',
'https://25.media.tumblr.com/tumblr_mbampofmba1qhwmnpo1_250.jpg',
'https://24.media.tumblr.com/tumblr_m76rkv3Fw91qjev1to1_250.jpg',
'https://cdn2.thecatapi.com/images/_mtVKrRTD.jpg',
'https://cdn2.thecatapi.com/images/86uzwNQrj.jpg' ];

// const catNameStr = `Oscar

// 2. Max

// 3. Tiger

// 4. Sam

// 5. Misty

// 6. Simba

// 7. Coco

// 8. Chloe

// 9. Lucy

// 10. Missy

// 11. Molly

// 12. Tigger

// 13. Smokey

// 14. Milo

// 15. Cleo

// 16. Sooty

// 17. Monty

// 18. Puss

// 19. Kitty

// 20. Felix

// 21. Bella

// 22. Jack

// 23. Lucky

// 24. Casper

// 25. Charlie

// 26. Thomas

// 27. Toby

// 28. Ginger

// 29. Oliver

// 30. Daisy

// 31. Gizmo

// 32. Muffin

// 33. Jessie

// 34. Sophie

// 35. Fluffy

// 36. Sebastian

// 37. Billy

// 38. Jasper

// 39. Jasmine

// 40. Sasha

// 41. Zoe

// 42. Phoebe

// 43. Tom

// 44. Lilly

// 45. Sylvester

// 46. George

// 47. Kimba

// 48. Harry

// 49. Holly

// 50. Minnie`;

// let newCatNameStr = '';
// for (let char of catNameStr) {
//   if (char.match(/[A-Za-z]/g) || char === ' ') {
//     newCatNameStr += char;
//   }
// }
// console.log(newCatNameStr);
// const randomCatNames = newCatNameStr.split(' ');
// console.log(randomCatNames);

const randomCatNames = [ 'Oscar',
'Max',
'Tiger',
'Sam',
'Misty',
'Simba',
'Coco',
'Chloe',
'Lucy',
'Missy',
'Molly',
'Tigger',
'Smokey',
'Milo',
'Cleo',
'Sooty',
'Monty',
'Puss',
'Kitty',
'Felix',
'Bella',
'Jack',
'Lucky',
'Casper',
'Charlie',
'Thomas',
'Toby',
'Ginger',
'Oliver',
'Daisy',
'Gizmo',
'Muffin',
'Jessie',
'Sophie',
'Fluffy',
'Sebastian',
'Billy',
'Jasper',
'Jasmine',
'Sasha',
'Zoe',
'Phoebe',
'Tom',
'Lilly',
'Sylvester',
'George',
'Kimba',
'Harry',
'Holly',
'Minnie' ];

// const catDescriptions = ` Meow all night having their mate disturbing sleeping humans twitch tail in permanent irritation so lick face hiss at owner, pee a lot, and meow repeatedly scratch at fence purrrrrr eat muffins and poutine until owner comes back. Ignore the squirrels, you'll never catch them anyway give me attention or face the wrath of my claws, for steal the warm chair right after you get up. I hate cucumber pls dont throw it at me refuse to drink water except out of someone's glass or you call this cat food or paw your face to wake you up in the morning and meow. Friends are not food the door is opening! how exciting oh, it's you, meh chew iPad power cord. Demand to have some of whatever the human is cooking, then sniff the offering and walk away plan steps for world domination meow meow, i tell my human and refuse to leave cardboard box i just saw other cats inside the house and nobody ask me before using my litter box attempt to leap between furniture but woefully miscalibrate and bellyflop onto the floor; what's your problem? i meant to do that now i shall wash myself intently. This is the day white cat sleeps on a black shirt poop on couch hide head under blanket so no one can see. Pet me pet me pet me pet me, bite, scratch, why are you petting me sit on human they not getting up ever. Fooled again thinking the dog likes me plop down in the middle where everybody walks. Thug cat litter box is life need to check on human, have not seen in an hour might be dead oh look, human is alive, hiss at human, feed me. Scratch the postman wake up lick paw wake up owner meow meow. Fall over dead (not really but gets sypathy) scratch the furniture but decide to want nothing to do with my owner today meow loudly just to annoy owners, but stretch. Side-eyes your "jerk" other hand while being petted attack like a vicious monster dream about hunting birds, leave dead animals as gifts. If it fits i sits eat and than sleep on your face humans,humans, humans oh how much they love us felines we are the center of attention they feed, they clean drink water out of the faucet, but purrrrrr. Take a big fluffing crap 💩 lick the other cats or catch mouse and gave it as a present or i shredded your linens for you and going to catch the red dot today going to catch the red dot today pee in the shoe. Try to jump onto window and fall while scratching at wall stinky cat plan your travel but Gate keepers of hell. Stinky cat sweet beast do i like standing on litter cuz i sits when i have spaces, my cat buddies have no litter i live in luxury cat life so rub whiskers on bare skin act innocent or the door is opening! how exciting oh, it's you, meh and dead stare with ears cocked 𝕄𝔼𝕆𝕎. Scratch jumps off balcony gives owner dead mouse at present then poops in litter box snatches yarn and fights with dog cat chases laser then plays in grass finds tiny spot in cupboard and sleeps all day jumps in bathtub and meows when owner fills food dish the cat knocks over the food dish cat slides down the water slide and into pool and swims even though it does not like water, thug cat i am the best swat at dog mew. Pet my belly, you know you want to; seize the hand and shred it! eat fish on floor open the door, let me out, let me out, let me-out, let me-aow, let meaow, meaow! mark territory. Man running from cops stops to pet cats, goes to jail. Skid on floor, crash into wall side-eyes your "jerk" other hand while being petted . Bring your owner a dead bird hiding behind the couch until lured out by a feathery toy, i’m so hungry i’m so hungry but ew not for that for lick yarn hanging out of own butt or proudly present butt to human yet jump off balcony, onto stranger's head. Get my claw stuck in the dog's ear my cat stared at me he was sipping his tea, too kitty kitty why must they do that damn that dog i can haz yet cats are a queer kind of folk. Hit you unexpectedly. Please stop looking at your phone and pet me. Slap owner's face at 5am until human fills food dish bite off human's toes.

// Crusty butthole lies down but be superior yet mice and cat snacks, and cats making all the muffins. Rub whiskers on bare skin act innocent immediately regret falling into bathtub poop in litter box, scratch the walls for eat plants, meow, and throw up because i ate plants see owner, run in terror. I'm going to lap some water out of my master's cup meow annoy owner until he gives you food say meow repeatedly until belly rubs, feels good but meow sleep everywhere, but not in my bed munch on tasty moths chew on cable. Get my claw stuck in the dog's ear you call this cat food so man running from cops stops to pet cats, goes to jail. Floof tum, tickle bum, jellybean footies curly toes cereal boxes make for five star accommodation ask to go outside and ask to come inside and ask to go outside and ask to come inside, bite nose of your human. Chew master's slippers mark territory cough hairball, eat toilet paper skid on floor, crash into wall cat is love, cat is life kitty poochy. Disappear for four days and return home with an expensive injury; bite the vet sugar, my siamese, stalks me (in a good way), day and night . Jumps off balcony gives owner dead mouse at present then poops in litter box snatches yarn and fights with dog cat chases laser then plays in grass finds tiny spot in cupboard and sleeps all day jumps in bathtub and meows when owner fills food dish the cat knocks over the food dish cat slides down the water slide and into pool and swims even though it does not like water. Hide head under blanket so no one can see sleeps on my head curl into a furry donut. Behind the couch chirp at birds claw your carpet in places everyone can see - why hide my amazing artistic clawing skills? so suddenly go on wild-eyed crazy rampage and intently stare at the same spot, and jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed. Put butt in owner's face demand to be let outside at once, and expect owner to wait for me as i think about it.

// Jump up to edge of bath, fall in then scramble in a mad panic to get out sleep all day whilst slave is at work, play all night whilst slave is sleeping but dream about hunting birds. Spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce push your water glass on the floor chase dog then run away. Rub face on owner scream for no reason at 4 am meowzer and flop over, for where is my slave? I'm getting hungry. Cuddle no cuddle cuddle love scratch scratch i like cats because they are fat and fluffy lick master's hand at first then bite because im moody decide to want nothing to do with my owner today yet demand to be let outside at once, and expect owner to wait for me as i think about it so give me attention or face the wrath of my claws. Love me!. Chase after silly colored fish toys around the house i will ruin the couch with my claws i like frogs and 0 gravity or rub whiskers on bare skin act innocent stare at the wall, play with food and get confused by dust throw down all the stuff in the kitchen.

// Shred all toilet paper and spread around the house stare out cat door then go back inside or chew master's slippers meowing non stop for food, kitten is playing with dead mouse. Sniff all the things i will be pet i will be pet and then i will hiss so scratch my tummy actually i hate you now fight me. Hiss and stare at nothing then run suddenly away decide to want nothing to do with my owner today. Get scared by doggo also cucumerro meow go back to sleep owner brings food and water tries to pet on head, so scratch get sprayed by water because bad cat. Prance along on top of the garden fence, annoy the neighbor's dog and make it bark cat walks in keyboard get scared by sudden appearance of cucumber but loved it, hated it, loved it, hated it so sleep all day whilst slave is at work, play all night whilst slave is sleeping yet burrow under covers. Sit on the laptop sit on human they not getting up ever. I see a bird i stare at it i meow at it i do a wiggle come here birdy sit in box for intently stare at the same spot bury the poop bury it deep, leave fur on owners clothes let me in let me out let me in let me out let me in let me out who broke this door anyway . Attack feet meowwww. Howl uncontrollably for no reason find empty spot in cupboard and sleep all day but lick the other cats but meow for swat at dog, stand with legs in litter box, but poop outside ignore the human until she needs to get up, then climb on her lap and sprawl. Cat dog hate mouse eat string barf pillow no baths hate everything under the bed attack feet purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table. Make muffins throw down all the stuff in the kitchen steal the warm chair right after you get up shove bum in owner's face like camera lens yet kitty kitty, but spend all night ensuring people don't sleep sleep all day and toilet paper attack claws fluff everywhere meow miao french ciao litterbox. I’m so hungry i’m so hungry but ew not for that attack the dog then pretend like nothing happened. Kitty time spread kitty litter all over house scratch my tummy actually i hate you now fight me so play riveting piece on synthesizer keyboard and fooled again thinking the dog likes me. The dog smells bad hide at bottom of staircase to trip human purr like a car engine oh yes, there is my human slave woman she does best pats ever that all i like about her hiss meow so bury the poop bury it deep yet pee in the shoe sleep all day whilst slave is at work, play all night whilst slave is sleeping poop in litter box, scratch the walls. Sit on human they not getting up ever meow all night rub my belly hiss catasstrophe so sleep all day whilst slave is at work, play all night whilst slave is sleeping and cat sit like bread. Howl on top of tall thing caticus cuteicus. The cat was chasing the mouse chew on cable being gorgeous with belly side up and sometimes switches in french and say "miaou" just because well why not look at dog hiiiiiisssss for cat snacks. Chase laser. Spread kitty litter all over house the door is opening! how exciting oh, it's you, meh or attack the dog then pretend like nothing happened. Cat cat moo moo lick ears lick paws. Playing with balls of wool. Meow meow get video posted to internet for chasing red dot. Mesmerizing birds woops poop hanging from butt must get rid run run around house drag poop on floor maybe it comes off woops left brown marks on floor human slave clean lick butt now, for if human is on laptop sit on the keyboard scratch touch my tail, i shred your hand purrrr but has closed eyes but still sees you lick yarn hanging out of own butt. Do i like standing on litter cuz i sits when i have spaces, my cat buddies have no litter i live in luxury cat life lick face hiss at owner, pee a lot, and meow repeatedly scratch at fence purrrrrr eat muffins and poutine until owner comes back i'm going to lap some water out of my master's cup meow yet lick arm hair refuse to drink water except out of someone's glass, or destroy the blinds and cats making all the muffins.

// Murder hooman toes floof tum, tickle bum, jellybean footies curly toes nap all day, humans,humans, humans oh how much they love us felines we are the center of attention they feed, they clean , destroy couch. Reward the chosen human with a slow blink and sometimes switches in french and say "miaou" just because well why not for scoot butt on the rug or shove bum in owner's face like camera lens or sniff catnip and act crazy. Spit up on light gray carpet instead of adjacent linoleum meow to be let out hunt anything that moves, but immediately regret falling into bathtub. Ears back wide eyed poop on couch or scoot butt on the rug yet knock dish off table head butt cant eat out of my own dish. Howl on top of tall thing eat the fat cats food and hack up furballs but yowling nonstop the whole night side-eyes your "jerk" other hand while being petted but fight own tail, meow meow. Morning beauty routine of licking self. Terrorize the hundred-and-twenty-pound rottweiler and steal his bed, not sorry drink water out of the faucet or love to play with owner's hair tie sleep on dog bed, force dog to sleep on floor walk on car leaving trail of paw prints on hood and windshield but fooled again thinking the dog likes me. This human feeds me, i should be a god white cat sleeps on a black shirt jump up to edge of bath, fall in then scramble in a mad panic to get out eat grass, throw it back up for purr like an angel yet need to chase tail, yet intrigued by the shower. Walk on car leaving trail of paw prints on hood and windshield. Hit you unexpectedly knock dish off table head butt cant eat out of my own dish hide from vacuum cleaner, or cats are a queer kind of folk. Flee in terror at cucumber discovered on floor. And sometimes switches in french and say "miaou" just because well why not. Play time hiss at vacuum cleaner fat baby cat best buddy little guy scratch. Claw drapes attack feet, yet i bet my nine lives on you-oooo-ooo-hooo relentlessly pursues moth destroy couch as revenge meow all night, for hate dog.

// Wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again knock dish off table head butt cant eat out of my own dish yet stick butt in face, yet oooo! dangly balls! jump swat swing flies so sweetly to the floor crash move on wash belly nap but my water bowl is clean and freshly replenished, so i'll drink from the toilet i cry and cry and cry unless you pet me, and then maybe i cry just for fun. Be a nyan cat, feel great about it, be annoying 24/7 poop rainbows in litter box all day hit you unexpectedly sleep in the bathroom sink. Hiiiiiiiiii feed me now leave hair on owner's clothes. Catching very fast laser pointer run outside as soon as door open no, you can't close the door, i haven't decided whether or not i wanna go out yet experiences short bursts of poo-phoria after going to the loo. Make plans to dominate world and then take a nap chase imaginary bugs put butt in owner's face for attack dog, run away and pretend to be victim for mark territory what a cat-ass-trophy! so hiss at vacuum cleaner. I shall purr myself to sleep flex claws on the human's belly and purr like a lawnmower yet toilet paper attack claws fluff everywhere meow miao french ciao litterbox i'm going to lap some water out of my master's cup meow or slap the dog because cats rule scream for no reason at 4 am. And sometimes switches in french and say "miaou" just because well why not sit on the laptop has closed eyes but still sees you. Kitty loves pigs while happily ignoring when being called, i'm bored inside, let me out i'm lonely outside, let me in i can't make up my mind whether to go in or out, guess i'll just stand partway in and partway out, contemplating the universe for half an hour how dare you nudge me with your foot?!?! leap into the air in greatest offense! but bring your owner a dead bird swat turds around the house so stares at human while pushing stuff off a table crusty butthole. Find box a little too small and curl up with fur hanging out loves cheeseburgers, eat from dog's food and lick master's hand at first then bite because im moody swat at dog, so hide from vacuum cleaner and refuse to leave cardboard box. Cats secretly make all the worlds muffins sit on human, fat baby cat best buddy little guy. Plop down in the middle where everybody walks. Lie in the sink all day you are a captive audience while sitting on the toilet, pet me open the door, let me out, let me out, let me-out, let me-aow, let meaow, meaow! so rub against owner because nose is wet. Miaow then turn around and show you my bum dont wait for the storm to pass, dance in the rain lick left leg for ninety minutes, still dirty toy mouse squeak roll over but gimme attention gimme attention gimme attention gimme attention gimme attention gimme attention just kidding i don't want it anymore meow bye. Stare at ceiling light purr for relentlessly pursues moth yet head nudges for man running from cops stops to pet cats, goes to jail. Nya nya nyan ignore the human until she needs to get up, then climb on her lap and sprawl why use post when this sofa is here bird bird bird bird bird bird human why take bird out i could have eaten that and shred all toilet paper and spread around the house licks your face have a lot of grump in yourself because you can't forget to be grumpy and not be like king grumpy cat. Eat all the power cords if it smells like fish eat as much as you wish really likes hummus for swat turds around the house, attack like a vicious monster but catty ipsum. Fat baby cat best buddy little guy experiences short bursts of poo-phoria after going to the loo prance along on top of the garden fence, annoy the neighbor's dog and make it bark for howl on top of tall thing. Stare at wall turn and meow stare at wall some more meow again continue staring eat half my food and ask for more i shredded your linens for you yet if it smells like fish eat as much as you wish run at 3am. Yowling nonstop the whole night scratch at door to be let outside, get let out then scratch at door immmediately after to be let back in but your pillow is now my pet bed. Loved it, hated it, loved it, hated it.

// Chirp at birds cats woo friends are not food or making bread on the bathrobe or as lick i the shoes nap all day, or you are a captive audience while sitting on the toilet, pet me. Meow meow rub against owner because nose is wet skid on floor, crash into wall but catch mouse and gave it as a present and i love cuddles yet bite the neighbor's bratty kid. All of a sudden cat goes crazy stuff and things, lick yarn hanging out of own butt for miaow then turn around and show you my bum so try to hold own back foot to clean it but foot reflexively kicks you in face, go into a rage and bite own foot, hard what the heck just happened, something feels fishy. Cat meoooow i iz master of hoomaan, not hoomaan master of i, oooh damn dat dog i'm going to lap some water out of my master's cup meow unwrap toilet paper, slap owner's face at 5am until human fills food dish yet step on your keyboard while you're gaming and then turn in a circle . Bird bird bird bird bird bird human why take bird out i could have eaten that eat fish on floor but pretend not to be evil. My cat stared at me he was sipping his tea, too spread kitty litter all over house i like frogs and 0 gravity. Get scared by sudden appearance of cucumber meow for food, then when human fills food dish, take a few bites of food and continue meowing. Claw your carpet in places everyone can see - why hide my amazing artistic clawing skills? brown cats with pink ears. Swat at dog chase laser and kitty scratches couch bad kitty so hack up furballs, yet destroy the blinds hell is other people.

// Cuddle no cuddle cuddle love scratch scratch chew foot, yet dont wait for the storm to pass, dance in the rain. Carefully drink from water glass and then spill it everywhere and proceed to lick the puddle pee in human's bed until he cleans the litter box, under the bed. Roll over and sun my belly. Adventure always meow to be let out but cuddle no cuddle cuddle love scratch scratch. Cats are fats i like to pets them they like to meow back. A nice warm laptop for me to sit on i shall purr myself to sleep sniff other cat's butt and hang jaw half open thereafter asdflkjaertvlkjasntvkjn (sits on keyboard) rub my belly hiss or bite the neighbor's bratty kid. Kick up litter kitty time but cat snacks. Milk the cow i like frogs and 0 gravity need to chase tail. Scratch the postman wake up lick paw wake up owner meow meow find something else more interesting, so scratch, and lick butt lie in the sink all day or i like cats because they are fat and fluffy. Good now the other hand, too do i like standing on litter cuz i sits when i have spaces, my cat buddies have no litter i live in luxury cat life so cough furball into food bowl then scratch owner for a new one need to chase tail, yet mewl for food at 4am but bathe private parts with tongue then lick owner's face. Ooh, are those your $250 dollar sandals? lemme use that as my litter box. Spread kitty litter all over house spend all night ensuring people don't sleep sleep all day but throwup on your pillow bleghbleghvomit my furball really tie the room together. The dog smells bad nya nya nyan, cat milk copy park pee walk owner escape bored tired cage droppings sick vet vomit yet cuddle no cuddle cuddle love scratch scratch massacre a bird in the living room and then look like the cutest and most innocent animal on the planet and sweet beast. Miaow then turn around and show you my bum ask to be pet then attack owners hand, i hate cucumber pls dont throw it at me. Sit in box hide when guests come over this human feeds me, i should be a god but find a way to fit in tiny box stares at human while pushing stuff off a table. Mesmerizing birds. Rub butt on table cough furball. I like big cats and i can not lie meow all night. X get video posted to internet for chasing red dot look at dog hiiiiiisssss yet chase mice, and hate dog, yet pelt around the house and up and down stairs chasing phantoms. I like fish find a way to fit in tiny box play time, or walk on car leaving trail of paw prints on hood and windshield pelt around the house and up and down stairs chasing phantoms grab pompom in mouth and put in water dish. Dead stare with ears cocked. Purrr purr littel cat, little cat purr purr cats are fats i like to pets them they like to meow back and meow to be let in, yet scratch my tummy actually i hate you now fight me.

// Poop in litter box, scratch the walls burrow under covers, hey! you there, with the hands or meow go back to sleep owner brings food and water tries to pet on head, so scratch get sprayed by water because bad cat. Always hungry purr this is the day sleep everywhere, but not in my bed good morning sunshine. I like frogs and 0 gravity cough hairball on conveniently placed pants stare out the window push your water glass on the floor slap owner's face at 5am until human fills food dish and be superior fight an alligator and win. Pee in human's bed until he cleans the litter box eat an easter feather as if it were a bird then burp victoriously, but tender spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce but love and coo around boyfriend who purrs and makes the perfect moonlight eyes so i can purr and swat the glittery gleaming yarn to him (the yarn is from a $125 sweater). Chill on the couch table cats are the world but pretend not to be evil so there's a forty year old lady there let us feast.

// Behind the couch knock dish off table head butt cant eat out of my own dish climb a tree, wait for a fireman jump to fireman then scratch his face. Poop on grasses cat is love, cat is life and open the door, let me out, let me out, let me-out, let me-aow, let meaow, meaow! purr for lick the other cats meowwww for meow meow. Scratch my tummy actually i hate you now fight me stare at guinea pigs for eat owner's food. Sleep on keyboard humans,humans, humans oh how much they love us felines we are the center of attention they feed, they clean so toilet paper attack claws fluff everywhere meow miao french ciao litterbox yet meow to be let in spill litter box, scratch at owner, destroy all furniture, especially couch. I shredded your linens for you. Lick plastic bags hell is other people and i will ruin the couch with my claws but i want to go outside let me go outside nevermind inside is better. You are a captive audience while sitting on the toilet, pet me wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again. Bleghbleghvomit my furball really tie the room together hiiiiiiiiii feed me now so ccccccccccccaaaaaaaaaaaaaaatttttttttttttttttssssssssssssssss but step on your keyboard while you're gaming and then turn in a circle yet and sometimes switches in french and say "miaou" just because well why not. Morning beauty routine of licking self tickle my belly at your own peril i will pester for food when you're in the kitchen even if it's salad ask to go outside and ask to come inside and ask to go outside and ask to come inside and hate dog hey! you there, with the hands, but murf pratt ungow ungow. Annoy owner until he gives you food say meow repeatedly until belly rubs, feels good sleep in the bathroom sink and shove bum in owner's face like camera lens yet human give me attention meow purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table so snuggles up to shoulders or knees and purrs you to sleep or miaow then turn around and show you my bum. Touch my tail, i shred your hand purrrr mewl for food at 4am so groom forever, stretch tongue and leave it slightly out, blep do i like standing on litter cuz i sits when i have spaces, my cat buddies have no litter i live in luxury cat life. Rub whiskers on bare skin act innocent.
// `;
// console.log(catDescriptions.length);

// let beginningIndex = 0;
// let periodCount = 0;
// let descriptionCount = 0;
// const randomCatDescriptions = [];
// for (let endingIndex = 0; endingIndex < catDescriptions.length; endingIndex += 1) {
//   if (catDescriptions[endingIndex] === '.') {
//     periodCount += 1;
//     if (periodCount === 3) {
//       descriptionCount += 1;
//       // console.log(endingIndex - beginningIndex);
//       if (catDescriptions[beginningIndex] === '.') {
//         randomCatDescriptions.push(catDescriptions.slice(beginningIndex + 2, endingIndex + 1).split('\'').join(''));
//       } else {
//         randomCatDescriptions.push(catDescriptions.slice(beginningIndex + 1, endingIndex + 1).split('\'').join(''));
//       }
//       beginningIndex = endingIndex;
//       periodCount = 0;
//     }
//   }
// }
// console.log('number of descriptions: ', descriptionCount);
// console.log(randomCatDescriptions);

const randomCatDescriptions = [ 'Meow all night having their mate disturbing sleeping humans twitch tail in permanent irritation so lick face hiss at owner, pee a lot, and meow repeatedly scratch at fence purrrrrr eat muffins and poutine until owner comes back. Ignore the squirrels, youll never catch them anyway give me attention or face the wrath of my claws, for steal the warm chair right after you get up. I hate cucumber pls dont throw it at me refuse to drink water except out of someones glass or you call this cat food or paw your face to wake you up in the morning and meow.',
'Friends are not food the door is opening! how exciting oh, its you, meh chew iPad power cord. Demand to have some of whatever the human is cooking, then sniff the offering and walk away plan steps for world domination meow meow, i tell my human and refuse to leave cardboard box i just saw other cats inside the house and nobody ask me before using my litter box attempt to leap between furniture but woefully miscalibrate and bellyflop onto the floor; whats your problem? i meant to do that now i shall wash myself intently. This is the day white cat sleeps on a black shirt poop on couch hide head under blanket so no one can see.',
'Pet me pet me pet me pet me, bite, scratch, why are you petting me sit on human they not getting up ever. Fooled again thinking the dog likes me plop down in the middle where everybody walks. Thug cat litter box is life need to check on human, have not seen in an hour might be dead oh look, human is alive, hiss at human, feed me.',
'Scratch the postman wake up lick paw wake up owner meow meow. Fall over dead (not really but gets sypathy) scratch the furniture but decide to want nothing to do with my owner today meow loudly just to annoy owners, but stretch. Side-eyes your "jerk" other hand while being petted attack like a vicious monster dream about hunting birds, leave dead animals as gifts.',
'If it fits i sits eat and than sleep on your face humans,humans, humans oh how much they love us felines we are the center of attention they feed, they clean drink water out of the faucet, but purrrrrr. Take a big fluffing crap 💩 lick the other cats or catch mouse and gave it as a present or i shredded your linens for you and going to catch the red dot today going to catch the red dot today pee in the shoe. Try to jump onto window and fall while scratching at wall stinky cat plan your travel but Gate keepers of hell.',
'Stinky cat sweet beast do i like standing on litter cuz i sits when i have spaces, my cat buddies have no litter i live in luxury cat life so rub whiskers on bare skin act innocent or the door is opening! how exciting oh, its you, meh and dead stare with ears cocked 𝕄𝔼𝕆𝕎. Scratch jumps off balcony gives owner dead mouse at present then poops in litter box snatches yarn and fights with dog cat chases laser then plays in grass finds tiny spot in cupboard and sleeps all day jumps in bathtub and meows when owner fills food dish the cat knocks over the food dish cat slides down the water slide and into pool and swims even though it does not like water, thug cat i am the best swat at dog mew. Pet my belly, you know you want to; seize the hand and shred it! eat fish on floor open the door, let me out, let me out, let me-out, let me-aow, let meaow, meaow! mark territory.',
'Man running from cops stops to pet cats, goes to jail. Skid on floor, crash into wall side-eyes your "jerk" other hand while being petted . Bring your owner a dead bird hiding behind the couch until lured out by a feathery toy, i’m so hungry i’m so hungry but ew not for that for lick yarn hanging out of own butt or proudly present butt to human yet jump off balcony, onto strangers head.',
'Get my claw stuck in the dogs ear my cat stared at me he was sipping his tea, too kitty kitty why must they do that damn that dog i can haz yet cats are a queer kind of folk. Hit you unexpectedly. Please stop looking at your phone and pet me.',
'Slap owners face at 5am until human fills food dish bite off humans toes.\n\nCrusty butthole lies down but be superior yet mice and cat snacks, and cats making all the muffins. Rub whiskers on bare skin act innocent immediately regret falling into bathtub poop in litter box, scratch the walls for eat plants, meow, and throw up because i ate plants see owner, run in terror.',
'Im going to lap some water out of my masters cup meow annoy owner until he gives you food say meow repeatedly until belly rubs, feels good but meow sleep everywhere, but not in my bed munch on tasty moths chew on cable. Get my claw stuck in the dogs ear you call this cat food so man running from cops stops to pet cats, goes to jail. Floof tum, tickle bum, jellybean footies curly toes cereal boxes make for five star accommodation ask to go outside and ask to come inside and ask to go outside and ask to come inside, bite nose of your human.',
'Chew masters slippers mark territory cough hairball, eat toilet paper skid on floor, crash into wall cat is love, cat is life kitty poochy. Disappear for four days and return home with an expensive injury; bite the vet sugar, my siamese, stalks me (in a good way), day and night . Jumps off balcony gives owner dead mouse at present then poops in litter box snatches yarn and fights with dog cat chases laser then plays in grass finds tiny spot in cupboard and sleeps all day jumps in bathtub and meows when owner fills food dish the cat knocks over the food dish cat slides down the water slide and into pool and swims even though it does not like water.',
'Hide head under blanket so no one can see sleeps on my head curl into a furry donut. Behind the couch chirp at birds claw your carpet in places everyone can see - why hide my amazing artistic clawing skills? so suddenly go on wild-eyed crazy rampage and intently stare at the same spot, and jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed. Put butt in owners face demand to be let outside at once, and expect owner to wait for me as i think about it.',
'\nJump up to edge of bath, fall in then scramble in a mad panic to get out sleep all day whilst slave is at work, play all night whilst slave is sleeping but dream about hunting birds. Spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce push your water glass on the floor chase dog then run away. Rub face on owner scream for no reason at 4 am meowzer and flop over, for where is my slave? Im getting hungry.',
'Cuddle no cuddle cuddle love scratch scratch i like cats because they are fat and fluffy lick masters hand at first then bite because im moody decide to want nothing to do with my owner today yet demand to be let outside at once, and expect owner to wait for me as i think about it so give me attention or face the wrath of my claws. Love me!. Chase after silly colored fish toys around the house i will ruin the couch with my claws i like frogs and 0 gravity or rub whiskers on bare skin act innocent stare at the wall, play with food and get confused by dust throw down all the stuff in the kitchen.',
'\nShred all toilet paper and spread around the house stare out cat door then go back inside or chew masters slippers meowing non stop for food, kitten is playing with dead mouse. Sniff all the things i will be pet i will be pet and then i will hiss so scratch my tummy actually i hate you now fight me. Hiss and stare at nothing then run suddenly away decide to want nothing to do with my owner today.',
'Get scared by doggo also cucumerro meow go back to sleep owner brings food and water tries to pet on head, so scratch get sprayed by water because bad cat. Prance along on top of the garden fence, annoy the neighbors dog and make it bark cat walks in keyboard get scared by sudden appearance of cucumber but loved it, hated it, loved it, hated it so sleep all day whilst slave is at work, play all night whilst slave is sleeping yet burrow under covers. Sit on the laptop sit on human they not getting up ever.',
'I see a bird i stare at it i meow at it i do a wiggle come here birdy sit in box for intently stare at the same spot bury the poop bury it deep, leave fur on owners clothes let me in let me out let me in let me out let me in let me out who broke this door anyway . Attack feet meowwww. Howl uncontrollably for no reason find empty spot in cupboard and sleep all day but lick the other cats but meow for swat at dog, stand with legs in litter box, but poop outside ignore the human until she needs to get up, then climb on her lap and sprawl.',
'Cat dog hate mouse eat string barf pillow no baths hate everything under the bed attack feet purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table. Make muffins throw down all the stuff in the kitchen steal the warm chair right after you get up shove bum in owners face like camera lens yet kitty kitty, but spend all night ensuring people dont sleep sleep all day and toilet paper attack claws fluff everywhere meow miao french ciao litterbox. I’m so hungry i’m so hungry but ew not for that attack the dog then pretend like nothing happened.',
'Kitty time spread kitty litter all over house scratch my tummy actually i hate you now fight me so play riveting piece on synthesizer keyboard and fooled again thinking the dog likes me. The dog smells bad hide at bottom of staircase to trip human purr like a car engine oh yes, there is my human slave woman she does best pats ever that all i like about her hiss meow so bury the poop bury it deep yet pee in the shoe sleep all day whilst slave is at work, play all night whilst slave is sleeping poop in litter box, scratch the walls. Sit on human they not getting up ever meow all night rub my belly hiss catasstrophe so sleep all day whilst slave is at work, play all night whilst slave is sleeping and cat sit like bread.',
'Howl on top of tall thing caticus cuteicus. The cat was chasing the mouse chew on cable being gorgeous with belly side up and sometimes switches in french and say "miaou" just because well why not look at dog hiiiiiisssss for cat snacks. Chase laser.',
'Spread kitty litter all over house the door is opening! how exciting oh, its you, meh or attack the dog then pretend like nothing happened. Cat cat moo moo lick ears lick paws. Playing with balls of wool.',
'Meow meow get video posted to internet for chasing red dot. Mesmerizing birds woops poop hanging from butt must get rid run run around house drag poop on floor maybe it comes off woops left brown marks on floor human slave clean lick butt now, for if human is on laptop sit on the keyboard scratch touch my tail, i shred your hand purrrr but has closed eyes but still sees you lick yarn hanging out of own butt. Do i like standing on litter cuz i sits when i have spaces, my cat buddies have no litter i live in luxury cat life lick face hiss at owner, pee a lot, and meow repeatedly scratch at fence purrrrrr eat muffins and poutine until owner comes back im going to lap some water out of my masters cup meow yet lick arm hair refuse to drink water except out of someones glass, or destroy the blinds and cats making all the muffins.',
'\nMurder hooman toes floof tum, tickle bum, jellybean footies curly toes nap all day, humans,humans, humans oh how much they love us felines we are the center of attention they feed, they clean , destroy couch. Reward the chosen human with a slow blink and sometimes switches in french and say "miaou" just because well why not for scoot butt on the rug or shove bum in owners face like camera lens or sniff catnip and act crazy. Spit up on light gray carpet instead of adjacent linoleum meow to be let out hunt anything that moves, but immediately regret falling into bathtub.',
'Ears back wide eyed poop on couch or scoot butt on the rug yet knock dish off table head butt cant eat out of my own dish. Howl on top of tall thing eat the fat cats food and hack up furballs but yowling nonstop the whole night side-eyes your "jerk" other hand while being petted but fight own tail, meow meow. Morning beauty routine of licking self.',
'Terrorize the hundred-and-twenty-pound rottweiler and steal his bed, not sorry drink water out of the faucet or love to play with owners hair tie sleep on dog bed, force dog to sleep on floor walk on car leaving trail of paw prints on hood and windshield but fooled again thinking the dog likes me. This human feeds me, i should be a god white cat sleeps on a black shirt jump up to edge of bath, fall in then scramble in a mad panic to get out eat grass, throw it back up for purr like an angel yet need to chase tail, yet intrigued by the shower. Walk on car leaving trail of paw prints on hood and windshield.',
'Hit you unexpectedly knock dish off table head butt cant eat out of my own dish hide from vacuum cleaner, or cats are a queer kind of folk. Flee in terror at cucumber discovered on floor. And sometimes switches in french and say "miaou" just because well why not.',
'Play time hiss at vacuum cleaner fat baby cat best buddy little guy scratch. Claw drapes attack feet, yet i bet my nine lives on you-oooo-ooo-hooo relentlessly pursues moth destroy couch as revenge meow all night, for hate dog.\n\nWake up wander around the house making large amounts of noise jump on top of your humans bed and fall asleep again knock dish off table head butt cant eat out of my own dish yet stick butt in face, yet oooo! dangly balls! jump swat swing flies so sweetly to the floor crash move on wash belly nap but my water bowl is clean and freshly replenished, so ill drink from the toilet i cry and cry and cry unless you pet me, and then maybe i cry just for fun.',
'Be a nyan cat, feel great about it, be annoying 24/7 poop rainbows in litter box all day hit you unexpectedly sleep in the bathroom sink. Hiiiiiiiiii feed me now leave hair on owners clothes. Catching very fast laser pointer run outside as soon as door open no, you cant close the door, i havent decided whether or not i wanna go out yet experiences short bursts of poo-phoria after going to the loo.',
'Make plans to dominate world and then take a nap chase imaginary bugs put butt in owners face for attack dog, run away and pretend to be victim for mark territory what a cat-ass-trophy! so hiss at vacuum cleaner. I shall purr myself to sleep flex claws on the humans belly and purr like a lawnmower yet toilet paper attack claws fluff everywhere meow miao french ciao litterbox im going to lap some water out of my masters cup meow or slap the dog because cats rule scream for no reason at 4 am. And sometimes switches in french and say "miaou" just because well why not sit on the laptop has closed eyes but still sees you.',
'Kitty loves pigs while happily ignoring when being called, im bored inside, let me out im lonely outside, let me in i cant make up my mind whether to go in or out, guess ill just stand partway in and partway out, contemplating the universe for half an hour how dare you nudge me with your foot?!?! leap into the air in greatest offense! but bring your owner a dead bird swat turds around the house so stares at human while pushing stuff off a table crusty butthole. Find box a little too small and curl up with fur hanging out loves cheeseburgers, eat from dogs food and lick masters hand at first then bite because im moody swat at dog, so hide from vacuum cleaner and refuse to leave cardboard box. Cats secretly make all the worlds muffins sit on human, fat baby cat best buddy little guy.',
'Plop down in the middle where everybody walks. Lie in the sink all day you are a captive audience while sitting on the toilet, pet me open the door, let me out, let me out, let me-out, let me-aow, let meaow, meaow! so rub against owner because nose is wet. Miaow then turn around and show you my bum dont wait for the storm to pass, dance in the rain lick left leg for ninety minutes, still dirty toy mouse squeak roll over but gimme attention gimme attention gimme attention gimme attention gimme attention gimme attention just kidding i dont want it anymore meow bye.',
'Stare at ceiling light purr for relentlessly pursues moth yet head nudges for man running from cops stops to pet cats, goes to jail. Nya nya nyan ignore the human until she needs to get up, then climb on her lap and sprawl why use post when this sofa is here bird bird bird bird bird bird human why take bird out i could have eaten that and shred all toilet paper and spread around the house licks your face have a lot of grump in yourself because you cant forget to be grumpy and not be like king grumpy cat. Eat all the power cords if it smells like fish eat as much as you wish really likes hummus for swat turds around the house, attack like a vicious monster but catty ipsum.',
'Fat baby cat best buddy little guy experiences short bursts of poo-phoria after going to the loo prance along on top of the garden fence, annoy the neighbors dog and make it bark for howl on top of tall thing. Stare at wall turn and meow stare at wall some more meow again continue staring eat half my food and ask for more i shredded your linens for you yet if it smells like fish eat as much as you wish run at 3am. Yowling nonstop the whole night scratch at door to be let outside, get let out then scratch at door immmediately after to be let back in but your pillow is now my pet bed.',
'Loved it, hated it, loved it, hated it.\n\nChirp at birds cats woo friends are not food or making bread on the bathrobe or as lick i the shoes nap all day, or you are a captive audience while sitting on the toilet, pet me. Meow meow rub against owner because nose is wet skid on floor, crash into wall but catch mouse and gave it as a present and i love cuddles yet bite the neighbors bratty kid.',
'All of a sudden cat goes crazy stuff and things, lick yarn hanging out of own butt for miaow then turn around and show you my bum so try to hold own back foot to clean it but foot reflexively kicks you in face, go into a rage and bite own foot, hard what the heck just happened, something feels fishy. Cat meoooow i iz master of hoomaan, not hoomaan master of i, oooh damn dat dog im going to lap some water out of my masters cup meow unwrap toilet paper, slap owners face at 5am until human fills food dish yet step on your keyboard while youre gaming and then turn in a circle . Bird bird bird bird bird bird human why take bird out i could have eaten that eat fish on floor but pretend not to be evil.',
'My cat stared at me he was sipping his tea, too spread kitty litter all over house i like frogs and 0 gravity. Get scared by sudden appearance of cucumber meow for food, then when human fills food dish, take a few bites of food and continue meowing. Claw your carpet in places everyone can see - why hide my amazing artistic clawing skills? brown cats with pink ears.',
'Swat at dog chase laser and kitty scratches couch bad kitty so hack up furballs, yet destroy the blinds hell is other people.\n\nCuddle no cuddle cuddle love scratch scratch chew foot, yet dont wait for the storm to pass, dance in the rain. Carefully drink from water glass and then spill it everywhere and proceed to lick the puddle pee in humans bed until he cleans the litter box, under the bed.',
'Roll over and sun my belly. Adventure always meow to be let out but cuddle no cuddle cuddle love scratch scratch. Cats are fats i like to pets them they like to meow back.',
'A nice warm laptop for me to sit on i shall purr myself to sleep sniff other cats butt and hang jaw half open thereafter asdflkjaertvlkjasntvkjn (sits on keyboard) rub my belly hiss or bite the neighbors bratty kid. Kick up litter kitty time but cat snacks. Milk the cow i like frogs and 0 gravity need to chase tail.',
'Scratch the postman wake up lick paw wake up owner meow meow find something else more interesting, so scratch, and lick butt lie in the sink all day or i like cats because they are fat and fluffy. Good now the other hand, too do i like standing on litter cuz i sits when i have spaces, my cat buddies have no litter i live in luxury cat life so cough furball into food bowl then scratch owner for a new one need to chase tail, yet mewl for food at 4am but bathe private parts with tongue then lick owners face. Ooh, are those your $250 dollar sandals? lemme use that as my litter box.',
'Spread kitty litter all over house spend all night ensuring people dont sleep sleep all day but throwup on your pillow bleghbleghvomit my furball really tie the room together. The dog smells bad nya nya nyan, cat milk copy park pee walk owner escape bored tired cage droppings sick vet vomit yet cuddle no cuddle cuddle love scratch scratch massacre a bird in the living room and then look like the cutest and most innocent animal on the planet and sweet beast. Miaow then turn around and show you my bum ask to be pet then attack owners hand, i hate cucumber pls dont throw it at me.',
'Sit in box hide when guests come over this human feeds me, i should be a god but find a way to fit in tiny box stares at human while pushing stuff off a table. Mesmerizing birds. Rub butt on table cough furball.',
'I like big cats and i can not lie meow all night. X get video posted to internet for chasing red dot look at dog hiiiiiisssss yet chase mice, and hate dog, yet pelt around the house and up and down stairs chasing phantoms. I like fish find a way to fit in tiny box play time, or walk on car leaving trail of paw prints on hood and windshield pelt around the house and up and down stairs chasing phantoms grab pompom in mouth and put in water dish.',
'Dead stare with ears cocked. Purrr purr littel cat, little cat purr purr cats are fats i like to pets them they like to meow back and meow to be let in, yet scratch my tummy actually i hate you now fight me.\n\nPoop in litter box, scratch the walls burrow under covers, hey! you there, with the hands or meow go back to sleep owner brings food and water tries to pet on head, so scratch get sprayed by water because bad cat.',
'Always hungry purr this is the day sleep everywhere, but not in my bed good morning sunshine. I like frogs and 0 gravity cough hairball on conveniently placed pants stare out the window push your water glass on the floor slap owners face at 5am until human fills food dish and be superior fight an alligator and win. Pee in humans bed until he cleans the litter box eat an easter feather as if it were a bird then burp victoriously, but tender spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce but love and coo around boyfriend who purrs and makes the perfect moonlight eyes so i can purr and swat the glittery gleaming yarn to him (the yarn is from a $125 sweater).',
'Chill on the couch table cats are the world but pretend not to be evil so theres a forty year old lady there let us feast.\n\nBehind the couch knock dish off table head butt cant eat out of my own dish climb a tree, wait for a fireman jump to fireman then scratch his face. Poop on grasses cat is love, cat is life and open the door, let me out, let me out, let me-out, let me-aow, let meaow, meaow! purr for lick the other cats meowwww for meow meow.',
'Scratch my tummy actually i hate you now fight me stare at guinea pigs for eat owners food. Sleep on keyboard humans,humans, humans oh how much they love us felines we are the center of attention they feed, they clean so toilet paper attack claws fluff everywhere meow miao french ciao litterbox yet meow to be let in spill litter box, scratch at owner, destroy all furniture, especially couch. I shredded your linens for you.',
'Lick plastic bags hell is other people and i will ruin the couch with my claws but i want to go outside let me go outside nevermind inside is better. You are a captive audience while sitting on the toilet, pet me wake up wander around the house making large amounts of noise jump on top of your humans bed and fall asleep again. Bleghbleghvomit my furball really tie the room together hiiiiiiiiii feed me now so ccccccccccccaaaaaaaaaaaaaaatttttttttttttttttssssssssssssssss but step on your keyboard while youre gaming and then turn in a circle yet and sometimes switches in french and say "miaou" just because well why not.',
'Morning beauty routine of licking self tickle my belly at your own peril i will pester for food when youre in the kitchen even if its salad ask to go outside and ask to come inside and ask to go outside and ask to come inside and hate dog hey! you there, with the hands, but murf pratt ungow ungow. Annoy owner until he gives you food say meow repeatedly until belly rubs, feels good sleep in the bathroom sink and shove bum in owners face like camera lens yet human give me attention meow purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table so snuggles up to shoulders or knees and purrs you to sleep or miaow then turn around and show you my bum. Touch my tail, i shred your hand purrrr mewl for food at 4am so groom forever, stretch tongue and leave it slightly out, blep do i like standing on litter cuz i sits when i have spaces, my cat buddies have no litter i live in luxury cat life.',
'Meeeeeeeoooooooooooowwwwwwwwwww'];

// let longSQLqueries = '';
// for (let i = 0; i < 50; i += 1) {
//   longSQLqueries += `
//   INSERT INTO catInfo(name, photoUrl, healthProblem, description)
//   VALUES('${randomCatNames[i]}', '${randomCatImageUrls[i]}', 'diabetes', '${randomCatDescriptions[i]}');\n
//   `;
// }
// console.log(longSQLqueries);

// let longSQLqueries = `UPDATE catInfo
// SET healthProblem = 'flea'
// WHERE name = 'Molly'`;
// for (let i = 11; i < 20; i += 1) {
//   longSQLqueries += ` OR name = '${randomCatNames[i]}'`;
// }
// console.log(longSQLqueries);

let longSQLqueries = `UPDATE catInfo
SET healthProblem = 'vomiting'
WHERE name = 'Zoe'`;
for (let i = 41; i < 50; i += 1) {
  longSQLqueries += ` OR name = '${randomCatNames[i]}'`;
}
console.log(longSQLqueries);

/*
Credit:
The image urls are from: https://documenter.getpostman.com/view/5578104/RWgqUxxh?version=latest
The random cat names are from: https://www.bowwow.com.au/cat-names
The long ipsum is from: http://www.catipsum.com/
*/
