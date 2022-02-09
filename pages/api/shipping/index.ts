import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import { connectDB, shippingModel } from "../../../models/index";
import { Shipping } from "../../../types/index";
import cors from "cors";
import verifyToken from "../../../middlewares/verifyToken";


const handler = nextConnect({});


handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const shippings: Shipping[] = await shippingModel.find({});
    res.json({ success: true, res: shippings[0] });
  } catch (error) {
    res.json({ success: false, res: error });
  }
});



handler.put(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const newShipping = req.body;
    const shippings: Shipping[] = await shippingModel.find({});
    const shipping = await shippingModel.findOneAndUpdate(
      { _id: shippings[0]._id },
      newShipping,
      { new: true }
    );
    res.json({ success: true, res: shipping });
  } catch (error) {
    res.json({ success: false, res: error });
  }
});

export default connectDB(handler);
