function simulateExpensiveWork(product) {
  let score = 0;

  for (let index = 0; index < 500; index += 1) {
    score += Math.sqrt(product.price * (index + 1)) % 7;
  }

  return score;
}

export function getVisibleProducts(products, searchTerm, category, maxPrice, sortBy) {
  console.count('EXPENSIVE: getVisibleProducts');
  const normalizedSearch = searchTerm.trim().toLowerCase();

  const filteredProducts = products.filter((product) => {
    simulateExpensiveWork(product);

    const matchesSearch = product.name.toLowerCase().includes(normalizedSearch);
    const matchesCategory = category === 'All' || product.category === category;
    const matchesPrice = product.price <= maxPrice;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return [...filteredProducts].sort((first, second) => {
    if (sortBy === 'price-low') return first.price - second.price;
    if (sortBy === 'price-high') return second.price - first.price;
    if (sortBy === 'rating') return second.rating - first.rating;
    return first.name.localeCompare(second.name);
  });
}

export function calculateSummary(products) {
  console.count('EXPENSIVE: calculateSummary');

  if (products.length === 0) {
    return {
      count: 0,
      averagePrice: 0,
      lowStock: 0,
      averageRating: 0,
    };
  }

  let totalPrice = 0;
  let totalRating = 0;
  let lowStock = 0;

  products.forEach((product) => {
    totalPrice += product.price;
    totalRating += product.rating;
    if (product.stock < 20) lowStock += 1;
  });

  return {
    count: products.length,
    averagePrice: Math.round(totalPrice / products.length),
    lowStock,
    averageRating: Number((totalRating / products.length).toFixed(1)),
  };
}
