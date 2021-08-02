const Router = require('express');
const brandRouter = new Router();
const brandController = require('../controllers/brandController');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');

brandRouter.post('/', checkRoleMiddleware('ADMIN'), brandController.create);
brandRouter.get('/', brandController.getAll);

module.exports = brandRouter;