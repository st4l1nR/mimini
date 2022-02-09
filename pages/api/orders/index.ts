import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import { connectDB, orderModel } from "../../../models/index";
import { Order } from "../../../types/index";
import verifyToken from "../../../middlewares/verifyToken";
import cookieParser from 'cookie-parser'
import cors from 'cors'

const handler = nextConnect({});

handler.use(cookieParser())

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const orders: Order[] = await orderModel.find({});
    res.json({ success: true, res: orders });
  } catch (error) {
    res.json({ success: false, res: error });
  }
});

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const newOrder = new orderModel(req.body);
    res.json({ success: true, res: await newOrder.save() });
  } catch (error) {
    res.json({ success: false, res: error });
  }
});

handler.put(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const orderUpdates = req.body;
  } catch (error) {
    res.json({ succes: false, res: error });
  }
});

export default connectDB(handler);
