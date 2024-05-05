const express = require('express');
const router = express.Router();
const userCrudRouter = require('./user.crud.router');

// colocar las rutas aquí
router.use(userCrudRouter);


module.exports = router;