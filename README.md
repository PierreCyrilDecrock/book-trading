# Book-trading

## Installation

Download and install :

 * Git (https://git-scm.com/)
 * Node JS (https://nodejs.org/en/)
 * Mongo DB (https://www.mongodb.com/)

Make sure everything is install :
```
git version
npm -v
mongo --version
```

Clone the project :
```
git clone https://github.com/PierreCyrilDecrock/book-trading
```

Install node dependencies :
```
cd book-trading
npm install
```

In a console, launch mongo DB :
```
mongod
```

In a console, start the project :
```
npm run start
```

## Use

```
GET http://localhost:8080/users
POST http://localhost:8080/users
GET http://localhost:8080/users/:userID
PUT http://localhost:8080/users/:userID
DELETE http://localhost:8080/users/:userID

```
