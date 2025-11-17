import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import { connectDB } from "./dbConfig/db.js";

dotenv.config();//hopefully this loads my config
import {//destructuring methods from controller that are planning to use in this file
  getGroceries,
  createGrocery,
  updateGrocery,
  deleteGrocery
} from './controllers/groceryController.js';//bringing in controller file and destructuring to be able to use them in this server app

const app = express(); //invoke express to app
const PORT = process.env.PORT || 3000;//look at readMe in ENV file have PORT=3000; it's conventional to fully capitalize env variable names; and use _ to delineate space instead of camelCase
//line above says if there is a port in env then use that and if not use 3000
connectDB();//calling connectDB function which comes from ./dbConfig file above on line 3//which also tells us that we'll be exporting this function from the dbConfig file
mongoose.connect(process.env.MONGO_URI, {
  
})
app.use(express.json());

const groceryRouter = express.Router();//using a router for express. When any request comes in app.use is going to see if requests are made to /groceries end point, and forward those requests to the grocery router
app.use('/groceries', groceryRouter);

groceryRouter.get('/', getGroceries, (req, res) => {//return all groceries in db
  return res.status(200).json(res.locals.groceries);//storing results on local object
});

groceryRouter.post('/', createGrocery, (req, res) => {//create a copy of the new grocery and just send that
  return res.status(201).json(res.locals.newGrocery);//status 201 is conventional when you have a successful completion upons req/res cycle AND a resource was created on backend- POSTED
});//also sending back the added grocery; that doesnt always need to happen but that is what's happening here

groceryRouter.put('/:id', updateGrocery, (req, res) => {//takes an id param
  return res.status(200).json(res.locals.updatedGrocery);//sends back just updated/put grocery
});

groceryRouter.delete('/:id', deleteGrocery, (req, res) => {//also taking a id param, comes in from /grocery route but also has an id param
  return res.status(200).json(res.locals.deletedGrocery);//again will send back what was deleted
});


// Global error handler//will give us the ability to pass next //will have error handling in multiple areas
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});
//start server with listen method and console log when server is running
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));