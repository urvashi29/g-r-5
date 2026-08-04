const categories = ['Electronics', 'Office', 'Home', 'Fitness', 'Travel'];
const adjectives = ['Smart', 'Compact', 'Pro', 'Eco', 'Rapid', 'Prime', 'Ultra', 'Flex'];
const nouns = ['Station', 'Kit', 'Device', 'Pack', 'Hub', 'Tool', 'System', 'Bundle'];

function seededNumber(seed) {
  const value = Math.sin(seed * 999) * 10000;
  return value - Math.floor(value);
}

export const products = Array.from({ length: 1500 }, (_, index) => {
  const id = index + 1;
  const category = categories[index % categories.length];
  const adjective = adjectives[index % adjectives.length];
  const noun = nouns[(index * 3) % nouns.length];

  return {
    id,
    name: `${adjective} ${category} ${noun} ${id}`,
    category,
    price: Math.round(15 + seededNumber(id) * 985),
    rating: Number((3 + seededNumber(id + 2000) * 2).toFixed(1)),
    stock: Math.floor(seededNumber(id + 5000) * 180),
  };
});

export const categoryOptions = ['All', ...categories];
