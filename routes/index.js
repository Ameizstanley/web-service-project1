const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Welcome to the Home Page');
})


router.use('/users', require('./user'));

module.exports = router;