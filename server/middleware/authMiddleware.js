const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  if (req.method === "OPTIONS") {
    next()
  }
  try {
    // получаем токен из заголовка запроса
    const token = req.headers.authorization.split(' ')[1]; // Bearer token
    if (!token) {
      return res.status(401).json({ message: 'Пользователь не авторизован'})
    }
    // проверяем валидность токена
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    // добавляем к запросу в поле user данные из токена
    req.user = decoded;
    next();
  } catch (e) {
    res.status(401).json({ message: 'Пользователь не авторизован'})
  }
};