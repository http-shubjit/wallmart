import { Product } from "@/typings/productTypings";
export function grouBySKU(Products: Product[]): Record<string, Product[]> {
  return Products?.reduce(
    (accumulator: Record<string, Product[]>, currentProduct: Product) => {
      const sku = currentProduct.meta.sku;
      if (!accumulator[sku]) {
        accumulator[sku] = [];
      }
      accumulator[sku].push(currentProduct);
      return accumulator;
    },
    {}
  );
}
