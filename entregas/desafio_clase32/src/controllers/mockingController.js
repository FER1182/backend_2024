import generateMockProducts from '../utils/utils.js';

class MockingController {
  static getMockProducts(req, res) {
    const products = generateMockProducts();
    
    res.json(products);
  }
}

export default MockingController;