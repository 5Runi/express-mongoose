import mongoose from 'mongoose'; 

const grocerySchema = new mongoose.Schema({
    item: { type: String, required: true },
    quantity: { type: Number, required: true}
});

const Grocery = mongoose.model('Grocery', grocerySchema);

export default {Grocery, grocerySchema };