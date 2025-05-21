import express from 'express';
import { addToCart, updateCartItem, removeFromCart, getCart } from '../controllers/cartController.js';
import verifyJWT from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(verifyJWT);

router.get('/', getCart);
router.post('/', addToCart);
router.put('/:id', updateCartItem);
router.delete('/:id', removeFromCart);

export default router;
