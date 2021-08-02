const Router = require('express');
const deviceRouter = new Router();
const deviceController = require('../controllers/deviceController');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');

deviceRouter.post('/', checkRoleMiddleware('ADMIN'), deviceController.create);
deviceRouter.get('/', deviceController.getAll);
deviceRouter.get('/:id', deviceController.getOne);

module.exports = deviceRouter;