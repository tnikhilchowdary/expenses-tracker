import mongoose from "mongoose";

const expensesSchema = new mongoose.Schema({
    amount:{
        type:number,
        required:true
    },
    category:{
        type:String,
        required:true,
        emum:[
            "Food",
            "Travel",
            "Rent",
            "Shooping",
            "Bills",
            "Entertainment",
            "Healthcare",
            "Education",
            "Other"
        ]
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    paymentMethod:{
        type:String,
        required:true,
        enum:[
            "Cash",
            "Debit Card",
            "Credit Card"
        ]
    }
},
{timestamps:true} 
);

const expenses = mongoose.model("expenses", expensesSchema);
export default expenses;