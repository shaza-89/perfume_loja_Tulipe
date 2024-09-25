import asyncHandler from '../middleware/asyncHandler.js';
import product from "../models/productModel.js"

// @desc    Fetch all products
// @route   GET /api/products
// @access  public
const getProducts = asyncHandler(async (req, res) => {
     const Perfumes = await product.find({});
    res.json(Perfumes);
    
});

// @desc    Fetch a product
// @route   GET /api/products/:id
// @access  public

const getProductById = asyncHandler(async (req, res) => {
    const Perfume = await product.findById(req.params.id);

    if (Perfume) {
      return res.json(Perfume);
    }
    else {
        res.status(404);
        throw new Error("Resource not found");
    }
     
});

export { getProducts, getProductById };


