//In command line make the project name folder.
//terminal..npm init -y
// touch .gitignore... add in files to be ignored
// npm i express
//git init
//touch index.js

//install a tool to add in a package that allows us keep to listening but not Kill connection every time you make an update.  in terminal... npm i nodemon.  then to run it..

//we connect to the express package we just installed.  The dependency is now Globally available in the project.
const express = require("express");

const app = express();

//Now we need to tell our express application to listen to something.  listen as method within express.  Methods always have parentheses... In this casee two parameters..   takes in port number and function.  The function body we can console.log(we are connecting with port 3000)
app.listen(3000, () => {
  console.log("Im here");
});

const cars = [
  { id: 1, make: "Ford", year: "2020", model: "F-150" },
  { id: 2, make: "Tesla", year: "2022", model: "Cyber Truck" },
  { id: 3, make: "Corvette", year: "2021", model: "C-8" },
  { id: 4, make: "Dodge", year: "2022", model: "Ram 2500" },
  { id: 5, make: "Tesla", year: "2020", model: "X" },
];

// put into the parameters of get...(path, function).. The function is the anonymous, request and response function used with get.  This will display all the cars on browser
// app.get("/", (request, response) => {
//   response.send(cars);
// });

//Now I just want to get the Corvette.  Must make route unique
// app.get("/corvette", (req, res) => {
//     res.send(cars[2]); //to see just the make cars.make or cars[].make
// });

//get will

//Now lets make it dynamic...
//Apply a param...change route so we can have user pass in request from browser and send into API.  /:carId as parameter passed into API.  specified car or car details passed as parameter.  The below code will make the web browser dynamic.. we put http://localhost:3000/car/1 or http://localhost:3000/car/2..browser will show data by the index of the array.

app.get("/car/:carId", (req, res) => {
  console.log("This is my request ======>", req.params); //params as property within the request.  Then we are extracting out the value
  const { carId } = req.params; //extracting carId from request.params..can get rid of line above and put const { carId } = req.params.. ask Zhopou
  res.send(cars[carId].make); //to see just the make cars.make or cars[].make
});
