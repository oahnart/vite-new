export const formatPrice = (value: number, isFixed?: number) => {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: isFixed ?? 2,
  }).format(value);
};
