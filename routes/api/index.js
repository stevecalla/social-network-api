const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

const appRoutes = require('./appRoutes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

router.use('/apps', appRoutes);

module.exports = router;
