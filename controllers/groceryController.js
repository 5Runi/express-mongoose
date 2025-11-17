//importing model we just created and referencing it as grocery
import Grocery from '../models/groceryModel.js';
// GET--- list all groceries: we're building out the response that we're going to send to the client
export const getGroceries = async (req, res, next) => {//functionality on a database is async cuz we don't know how long our db response is going to be
    try{
        const groceries = await Grocery.find();//from here we want to take the groceries we grabbed and send it to the next
        res.locals.groceries = groceries;//we're adding the property of groceries on the local property of the response object
        return next()//we are populating the response with some valid information and then moving on
    } catch (err){
        return next(err);//handing off to global error handler where the response will be built up and returned
    }
};

// POST- create a new grocery
export const createGrocery = async (req, res, next) => {
    try{
        const { item, quantity } = req.body;//creates object in data base with these keys and the values of whatever gets passed in here. furhter can add if statements so that if quantity or item isnt added can do something- console log? 1. make access (with const { item, quantity } = req body// then next line if(!item || !body){ console.log("item or body cannot be black please try again... whatever")})
        const newGrocery = await Grocery.create({ item, quantity });//need to pass something in here because adding an object which could be ({item: req.body.item, quantity: req.body.quantity})
        res.locals.newGrocery = newGrocery;
//or destructure directly off request body which is what Sky did on above line
        return next();
    } catch (err) {
        return next(err);
    }
};

// PUT 1. update quantity of an item using the param id; destructure the id from the params property of the request- look at updateGrocery, can see it lives in put route "/:id" this structure tells me there will something specific with this request and taht is how i can access that
export const updateGrocery = async (req, res, next) => {
    try {
        const { id } = req.params;//identify what you're wanting to update
        const { quantity, item } = req.body;//saying what want to update
        // if(!id){
        //     return next(err)
        // }
        const updatedGrocery = await Grocery.findByIdAndUpdate(
            id, //access our property
            { quantity },//taking off req.body, andthen also need to update that specific quantity value to the value it holds?
            { new: true } 
        )
        res.locals.updatedGrocery = updatedGrocery;
        return next();
    } catch (err) {
        return next(err);
    }
};

// DELETE
export const deleteGrocery = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedGrocery = await Grocery.findByIdAndDelete(id);
        res.locals.deletedGrocery = deletedGrocery;
        return next();
    } catch (err) {
        return next(err);
    }
};
//declare exports for this file
// export  {
//     getGroceries,
//     createGrocery,
//     updateGrocery,
//     deleteGrocery
// };
//these functions will write some called to implement some functionality that get called via the request handlers in the middleware \
//I think i could have also done(below);
//