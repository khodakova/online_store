// для возможности импортирования переменных окружения из файла .env
require('dotenv').config();
const express = require('express');
// для осуществления управления БД
const sequelize = require('./db.js');
// импортируем модели для создания таблиц в БД
const models = require('./models/models');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express();
// настроим корс для возможности отправки запросов с браузера
app.use(cors());
// для возможности парсинга json-формата
app.use(express.json());
// даем знать серверу, где брать статичные файлы
app.use(express.static(path.resolve(__dirname, 'static')));
// для подгрузки файлов на сервер
app.use(fileUpload({}));
app.use('/api', router);
// обработчик ошибок должен регистрироваться в самом конце
app.use(errorHandler);

// функция для подключения к БД
// делаем функцию асинхронной, т.к. все обращения к БД являются асинхронными
const start = async () => {
  try {
    // с помощью этой функции будет установлено подключение к БД
    await sequelize.authenticate();
    // сверка состояния БД со схемой БД
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e)
  }
};

start();