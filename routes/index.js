const router = require('express').Router();

router.get('/', (req, res) => {
    //#swagger.tags=['hello world]
    res.send('Welcome to the Home Page');
})

router.use('/', require('./swagger'));

router.use('/users', require('./user'));

module.exports = router;