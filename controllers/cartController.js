import Cart from '../models/cartModel.js';
import Product from '../models/productModel.js';

// Add a product to the cart
const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.user;
    // Validate input
    if (!productId) {
      return res.status(400).json({ message: 'Product ID is required' });
    }
    if (!quantity || quantity <= 0) {
      return res.status(400).json({ message: 'Quantity must be a positive number' });
    }
    // Check if product exists
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    // Check stock availability
    if (quantity > product.stock) {
      return res.status(400).json({ message: 'Requested quantity exceeds available stock' });
    }
    // Find or create cart
    const cart = await Cart.findOne({ userId });
    if (cart) {
      const itemIndex = cart.items.findIndex((item) => item.productId.toString() === productId);
      if (itemIndex >= 0) {
        cart.items[itemIndex].quantity += quantity;
      } else {
        cart.items.push({ productId, quantity });
      }
      await cart.save();
    } else {
      const newCart = new Cart({ userId, items: [{ productId, quantity }] });
      await newCart.save();
    }
    res.status(201).json({ message: 'Product added to cart' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Update product quantity in the cart
const updateCartItem = async (req, res) => {
  try {
    const { quantity } = req.body;
    const cart = await Cart.findOne({ userId: req.user });
    if (!quantity || quantity <= 0) {
      return res.status(400).json({ message: 'Quantity must be a positive number' });
    }
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    const itemIndex = cart.items.findIndex((item) => item.productId.toString() === req.params.id);
    if (itemIndex < 0) {
      return res.status(404).json({ message: 'Item not found in cart' });
    }
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    if (quantity > product.stock) {
      return res.status(400).json({ message: 'Requested quantity exceeds available stock' });
    }
    cart.items[itemIndex].quantity = quantity;
    await cart.save();
    res.status(200).json({ message: 'Cart updated successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Delete product from the cart
const removeFromCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    const itemIndex = cart.items.findIndex((item) => item.productId.toString() === req.params.id);
    if (itemIndex < 0) {
      return res.status(404).json({ message: 'Item not found in cart' });
    }
    cart.items.splice(itemIndex, 1);
    await cart.save();
    res.status(200).json({ message: 'Item removed from cart' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Get cart items
const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user }).populate('items.productId');
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    res.status(200).json(cart.items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export { addToCart, updateCartItem, removeFromCart, getCart };
