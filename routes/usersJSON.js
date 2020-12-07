/**
 * Created by milos.kosanovic on 31-Mar-17.
 */
var express = require('express');
var router = express.Router();
var controller = require('../controller/jsonController');


/*
 * GET userlist.
 */
router.get('/userlist', controller.getUserList);

/*
 * POST to adduser.
 */
router.post('/adduser', controller.addUser);

/*
 * DELETE to deleteuser.
 */
router.get('/deleteuser/:id', controller.deleteUser);

module.exports = router;