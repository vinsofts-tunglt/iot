const router = require('express').Router();

// import home controller
import Home from '../controllers/HomeController'
import Detail from '../controllers/DetailController'

/* GET home page. */
router.get('/', Home.index);

/* GET home page. */
router.post('/detail', Detail.index);
export default router;