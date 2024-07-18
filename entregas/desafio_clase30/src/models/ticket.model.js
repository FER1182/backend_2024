import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const schema = new mongoose.Schema({

  code: {
    type: String,
    required: true,
    default: uuidv4(),
    unique: true,
  },
  purchase_datetime: {
    type: Date,
    default: Date.now,    
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  purchaser:{
    type: String,
    required: true,
  },
});

const TicketModel = mongoose.model("tickets", schema);
export default TicketModel;
