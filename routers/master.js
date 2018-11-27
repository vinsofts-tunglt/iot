const router = require('express').Router();

import Master from '../controllers/MasterController'

router.get('/', Master.index);

router.get('/agency', Master.agency);
router.get('/agency/add', Master.agencyadd)
router.get('/agency/edit/:id', Master.agencyedit)
router.get('/customer', Master.customer);
router.get('/customer/add', Master.addcustomer)
router.get('/product', Master.product);
router.get('/product/add', Master.addproduct)
export default router;
