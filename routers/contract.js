const router = require('express').Router();

import Contract from '../controllers/contract'
router.get("/",Contract.index);
router.get("/add",Contract.add);
router.get("/edit/:addressWarranty",Contract.edit);
export default router;