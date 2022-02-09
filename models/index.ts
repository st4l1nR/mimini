import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";

export { default as shippingModel } from "./shippingModel/index";
export { default as orderModel } from "./orderModel/index";
export {default as userModel} from './userModel/index'

export const connectDB =
  (handler: any) => async (req: NextApiRequest, res: NextApiResponse) => {
    if (mongoose.connections[0].readyState) {
      // Use current db connection
      return handler(req, res);
    }
    // Use new db connection
    await mongoose.connect(process.env.MONGODB_URI as string, {});
    console.log("Database connected 🚀");
    return handler(req, res);
  };
