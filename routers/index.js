const router = require('express').Router();

// import home controller
import Home from '../controllers/HomeController'

/* GET home page. */
router.get('/', Home.index);

export default router;