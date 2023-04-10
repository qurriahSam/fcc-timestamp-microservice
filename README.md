# API Project: Timestamp Microservice for FCC

## About

This project represents my solution to the [Timestamp Microservice challenge](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice) for the freeCodeCamp API and Microservice certification. The application is designed to provide users with a highly reliable and efficient means of retrieving date objects, including both Unix and UTC timestamps. It was built based on the boilerplate available [here](https://github.com/freeCodeCamp/boilerplate-project-timestamp/).

## Endpoints:

| Endpoints         | Description                                                                         |
| ----------------- | ----------------------------------------------------------------------------------- |
| GET `/api`        | Return a date object with unix timestamp and UTC timestamp of the current timestamp |
| GET `/api/{date}` | Return a date object of the informed timestamp (unix or UTC ISO-8601)               |

#### Example usage:

- https://evpress-timestamp.onrender.com/api
- https://evpress-timestamp.onrender.com/api/2015-12-25
- https://evpress-timestamp.onrender.com/api/1451001600000

#### Example output:

- `{"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"}`
- `{"error" : "Invalid Date" }`

## How to use:

Just run on terminal:

```
npm install
npm start
```
