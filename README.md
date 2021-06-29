# FIBONACCI API REST

[![nodeJS](https://img.shields.io/badge/12.16.3%20-NodeJS-greene)](https://nodejs.org)
[![javascript](https://img.shields.io/badge/10.0.6-javascript-yellow)](https://nodejs.org)
## Test
for install the dependencies: 
```
npm install
```
for run the project: 
```
npm start
```
you could test the API around **POSTMAN** or if you use VS CODE with **Thunder client**

URL for test:
```
localhost:8000/fibonacci/:number
```
where :number is the param for the fibonacci result
## Feature
 There is a need for a Rest (or Rest-like) API that can receive an index "n" and returns the Fibonacci value that corresponds to the given index, and you have been tasked with implementing the first version of this API.
 
## Way to the solution
I created a rest api with Node.js and Expess.js, because it is relatively fast to create an app with this framework. The first step was to create the server and listen to it on some port (in this case 8000),
then a recursive function is created that receives a number as a parameter. then the main path of the endpoint was created. for the fibonacci series a number is needed, it is obtained through the request parameters (req.params.number).
If the request is correct, it sends a status 200 with the result of the series, otherwise it sends a status 400 with the error.

## Optimization
Could improve the code, separating the responsibilities for middleware. that is, for each request that is executed, validate the params and thus be able to have more security and for error control.


