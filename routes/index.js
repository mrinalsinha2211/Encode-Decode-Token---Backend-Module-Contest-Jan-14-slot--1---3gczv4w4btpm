const router = require('express').Router();

router.use('/token', require('./tokenRoutes.js'));

module.exports = router;
