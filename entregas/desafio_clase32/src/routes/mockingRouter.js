import express from 'express';
import MockingController from '../controllers/mockingController.js';

const router = express.Router();

router.get('/mockingproducts', MockingController.getMockProducts);

export default router;