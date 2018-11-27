const router = require('express').Router();

import Admin from '../controllers/AdminController'

router.get('/', Admin.index);

router.get('/user', Admin.user);
router.get('/user/add', Admin.addUser);
router.get('/product', Admin.product);
router.get('/product/add', Admin.addProduct)
router.get('/warranty', Admin.warranty);
router.get('/warranty/add', Admin.addWarranty)
router.get('/warranty/edit/:id', Admin.warrantyEdit)
router.get('/warranty/detail/:id', Admin.warrantyDetail)
router.get('/warranty/byer/:id', Admin.warrantyByer)
export default router;
