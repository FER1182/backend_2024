// mockingProducts.js
import { faker } from '@faker-js/faker';

function generateMockProducts(numProducts = 100) {
  const products = [];
  for (let i = 0; i < numProducts; i++) {
    products.push({
      _id: faker.database.mongodbObjectId(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.commerce.productDescription(),
      category: faker.commerce.department(),
      image: faker.image.url(),
      stock: faker.number.int({ min: 0, max: 100 })
    });
  }
  
  return products;
}

export default generateMockProducts;
