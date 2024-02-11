
## Описание 

Микро проект доски задач (аналог любой другой доски), сделанный на Nest.js.
Документация сделана с использованием Swagger.

## Установка 

Требования:
- Версия Node.js: 18.16.0
- Docker compose V2

Создаем `.env` файл рядом с `.env.example` по его примеру.

Устанавливаем зависимости
```bash
$ npm install
```

## Запуск

Предварительно запускаем docker контейнер с базой данных
```bash
$ docker compose up
```

Запуск сервера(дефолт: http://localhost:3000)
```bash
# development watch
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run build
$ npm run start:prod
```

Для работы необходимо создать аккаунт(email + password), сервер выдаст Bearer token.
При работе с любыми запросами, кроме входа/регистрации, добавляем bearer token в headers

Документацию можно посмотреть [тут](http://localhost:3000/api)
