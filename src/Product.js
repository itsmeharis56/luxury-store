function photo(id) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1000&q=85`;
}

export const products = [
  {
    id: 1,
    name: "Crimson Sneakers",
    category: "Sneakers",
    price: 8500,
    image: photo("photo-1542291026-7eec264c27ff"),
    description:
      "A bold sneaker style that brings a statement colour to your everyday outfit.",
  },
  {
    id: 2,
    name: "Everyday Sneakers",
    category: "Sneakers",
    price: 7200,
    image: photo("photo-1549298916-b41d501d3772"),
    description:
      "A relaxed sneaker style for casual outfits and your everyday wardrobe.",
  },
  {
    id: 3,
    name: "Classic Watch",
    category: "Watches",
    price: 12500,
    image: photo("photo-1524805444758-089113d48a6d"),
    description:
      "A classic watch look that adds a considered finishing touch to your outfit.",
  },
  {
    id: 4,
    name: "Signature Watch",
    category: "Watches",
    price: 15900,
    image: photo("photo-1523275335684-37898b6baf30"),
    description:
      "A clean, minimal watch style for a wardrobe built around simple details.",
  },
  {
    id: 5,
    name: "Everyday Backpack",
    category: "Bags",
    price: 6800,
    image: photo("photo-1553062407-98eeb64c6a62"),
    description:
      "An everyday backpack style with a relaxed look for your daily collection.",
  },
  {
    id: 6,
    name: "Weekend Sunglasses",
    category: "Accessories",
    price: 3500,
    image: photo("photo-1511499767150-a48a237f0083"),
    description:
      "A simple accessory to bring a little character to your weekend outfit.",
  },
  {
    id: 7,
    name: "Street Edit Sneakers",
    category: "Sneakers",
    price: 9800,
    image: photo("photo-1600185365483-26d7a4cc7519"),
    description:
      "A contemporary sneaker look inspired by easy layering and street style.",
  },
  {
    id: 8,
    name: "City Sneakers",
    category: "Sneakers",
    price: 8900,
    image: photo("photo-1600269452121-4f2416e55c28"),
    description:
      "An understated sneaker style that pairs with a variety of casual looks.",
  },
  {
    id: 9,
    name: "Evening Watch",
    category: "Watches",
    price: 18500,
    image: photo("photo-1547996160-81dfa63595aa"),
    description:
      "An expressive watch style for outfits where the small details stand out.",
  },
  {
    id: 10,
    name: "The City Bag",
    category: "Bags",
    price: 11200,
    image: photo("photo-1548036328-c9fa89d128fa"),
    description:
      "A statement bag style that brings a polished accent to an everyday outfit.",
  },
  {
    id: 11,
    name: "Everyday Carry",
    category: "Bags",
    price: 8400,
    image: photo("photo-1584917865442-de89df76afd3"),
    description:
      "A considered addition to your bag collection, styled for everyday looks.",
  },
  {
    id: 12,
    name: "Signature Frames",
    category: "Accessories",
    price: 4200,
    image: photo("photo-1572635196237-14b3f281503f"),
    description:
      "A distinctive sunglasses style that adds a finishing detail to your edit.",
  },
];