const Restaurant = require("./Restaurant");

const rests = [
  {
    Name: "Ching & Chow",
    Image:
      "https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2950%2Ftrend20201005112101.jpg",
    Rating: 5,
    time: 30,
    cuisine: "Chinese",
    discount: 45,
  },
  {
    Name: "Punjabi Rasoi",
    Image:
      "https://lh3.googleusercontent.com/a38k-_cjU7gYiWgpTNgP_R8Zagju-Uy429SBEwiVXnnyGJ56yRkuV-NW7xCbjeZzLKHReS0MoSI1_YqBUPkYGKtBRvc=w1000",
    Rating: 4,
    time: 35,
    cuisine: "North Indian",
    discount: 30,
  },
  {
    Name: "Banana Leaf",
    Image:
      "https://blog.travelkhana.com/food/wp-content/uploads/sites/5/2017/05/south-indian-14.jpg",
    Rating: 4.5,
    time: 45,
    cuisine: "South Indian",
    discount: 50,
  },
  {
    Name: "Bella Italia",
    Image:
      "https://lp-cms-production.imgix.net/2020-11/GettyRF_599272840.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850",
    Rating: 4.6,
    time: 25,
    cuisine: "Italian",
    discount: 20,
  },
  {
    Name: "Bakerspot",
    Image: "https://im.hunt.in/cg/noida/City-Guide/bakeries-noida.jpg",
    Rating: 4.2,
    time: 30,
    cuisine: "Bakery",
    discount: 50,
  },
];

for (let i = 0; i < rests.length; i++) {
  const restaurant = new Restaurant({
    Name: rests[i].Name,
    Image: rests[i].Image,
    Rating: rests[i].Rating,
    time: rests[i].time,
    cuisine: rests[i].cuisine,
    discount: rests[i].discount,
  });
  restaurant.save();
}
