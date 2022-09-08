/** ==================================================================
 * USER ROUTE
==================================================================== */
const { Router } = require('express');

// CONTROLLERS
const { getUsers } = require('../controllers/users.controllers');

const router = Router();

/** ==================================================================
 * GET USERS
==================================================================== */
router.get('/', getUsers);

// EXPORTS
module.exports = router;