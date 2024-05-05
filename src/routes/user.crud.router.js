const { getAll, create, getOne, remove, update } = require('../controllers/user.crud.controller');
const express = require('express');

const userCrudRouter = express.Router();

userCrudRouter.route("/users")
        .get(getAll)
        .post(create)

userCrudRouter.route("/users/:id")
        .get(getOne)
        .delete(remove)
        .put(update)

module.exports = userCrudRouter;