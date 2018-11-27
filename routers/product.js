const router = require('express').Router();

import Product from '../controllers/product'
router.route('/')
     .get(Product.index);
router.route('/add')
     .get(Product.add);
router.route('/edit/')
     .get(Product.edit);
export default router;