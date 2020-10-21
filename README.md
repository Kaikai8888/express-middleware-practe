# Express Middleware Practice

Showing each request time, method, path and the duration of each request-response cycle on server log.
For example, ``` 2020-10-21 22:38:05 | GET from /new | 15ms ```

## Prerequisite

* Node.js: v10.15.0
* npm: 6.4.1
* nodemon: 2.0.4
* express: 4.17.1

## Installation

1. Enter ` git clone https://github.com/Kaikai8888/express-middleware-practe.git ` in the terminal to download the project folder
2. Use robo 3T to manipulate mongoDB, create connection to `localhost: 27017`, and create the database,`expense-tracker`
3. Enter `npm run dev` in the terminal to run app.js with nodemon to start local server 
4. Enter http://localhost:3000 in the browser and enter the website