npm install express express-validator bcryptjs config gravatar jsonwebtoken mongoose request
npm install -D nodemon concurrently

body-parser-Чтобы обрабатывать запрос HTTP POST в Экспресс .js версии 4 и выше, вам необходимо установить модуль промежуточного программного обеспечения с именем body-parser. body-parser извлекает всю часть тела входящего потока запросов и предоставляет его на req.body. Среднее программное обеспечение ранее было частью Express.js, но теперь вы должны установить его отдельно. Этот модуль body-parser анализирует данные JSON, буфера, строки и URL-адреса, переданные с использованием запроса HTTP POST. Установите body-parser с помощью NPM, как показано ниже.

populate()-?
const profile = await (await Profile.findOne({ user: req.user.id })).populated('user', ['name', 'avatar'])