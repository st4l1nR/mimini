import { connection, Schema, model } from "mongoose";
import { Order } from "../../types/index";

delete connection.models["Order"];

const orderSchema = new Schema<Order>(
  {
    color: {
      type:String,
      required:true
    },
    quantity:{
      type:Number,
      required:true
    },
    email: String,
    cardholder: String,
    shipping: {
      type: {
        country: {
          type: String,
          required: true,
        },
        city: {
          type: String,
          required: true,
        },
        adress: {
          type: String,
          required: true,
        },
        zip: {
          type: String,
          required: true,
        },
        state:{
          type:String,
          required:true
        }
      },
      required: true,
    },
    subtotal: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default model<Order>("Order", orderSchema);
