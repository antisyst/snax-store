const formatPrice = (price) => {
  let formatedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((price).toFixed(2));

  return formatedPrice;
};

export { formatPrice };
