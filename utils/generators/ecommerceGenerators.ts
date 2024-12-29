import { faker } from '@faker-js/faker';
import type { Field } from '../../types/schema';

export const generateEcommerceData: Record<string, (field: Field) => any> = {
  product: () => {
    const adjectives = ['Premium', 'Ultra', 'Deluxe', 'Professional', 'Essential', 'Luxury', 'Classic', 'Elite'];
    const products = ['Laptop', 'Smartphone', 'Headphones', 'Camera', 'Tablet', 'Watch', 'Speaker', 'Monitor', 'Keyboard'];
    return `${faker.helpers.arrayElement(adjectives)} ${faker.helpers.arrayElement(products)}`;
  },
  price: () => faker.commerce.price(),
  category: () => faker.commerce.department(),
  description: () => faker.commerce.productDescription(),
  sku: () => faker.string.alphanumeric(10).toUpperCase(),
  brand: () => faker.company.name(),
  color: () => faker.color.human(),
  size: () => faker.helpers.arrayElement(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
  weight: () => faker.number.float({ min: 0.1, max: 100, precision: 0.01 }).toFixed(2),
  stockQuantity: () => faker.number.int({ min: 0, max: 1000 }),
  rating: () => faker.number.float({ min: 1, max: 5, precision: 0.1 }).toFixed(1),
  reviews: () => faker.number.int({ min: 0, max: 1000 }),
  discount: () => faker.number.float({ min: 0, max: 0.7, precision: 0.01 }).toFixed(2),
  shippingMethod: () => faker.helpers.arrayElement(['Standard', 'Express', 'Next Day', 'International']),
};