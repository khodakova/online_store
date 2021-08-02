const Router = require('express');
const userRouter = new Router();
const userContoller = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

userRouter.post('/registration', userContoller.registration);
userRouter.post('/login', userContoller.login);
// проверяем пользователя на авторизованность с помощью authMiddleware
userRouter.get('/auth', authMiddleware, userContoller.check);

module.exports = userRouter;