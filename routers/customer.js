const router = require('express').Router();

import Customer from '../controllers/customer'
router.get("/", Customer.index);
router.get("/add", Customer.add);
router.get("/edit/", Customer.edit);
export default router;