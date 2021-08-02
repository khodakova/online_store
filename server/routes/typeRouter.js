const Router = require('express');
const typeRouter = new Router();
const typeController = require('../controllers/typeController');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');

typeRouter.post('/', checkRoleMiddleware('ADMIN'), typeController.create);
typeRouter.get('/', typeController.getAll);

module.exports = typeRouter;