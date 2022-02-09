import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import Stripe from "stripe";
import { connectDB, orderModel } from "../../../models/index";

const handler = nextConnect({});
const stripe = new Stripe(
  process.env.STRIPE_PUBLIC_KEY as string,
  {} as Stripe.StripeConfig
);

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { order, paymentMethod } = req.body;
    await stripe.paymentIntents.create({
      amount: order.subtotal * 100,
      currency: "USD",
      payment_method: paymentMethod.id,
      confirm: true,
    });
    const newOrder = new orderModel(order);
    await newOrder.save();

    res.json({ success: true, res: order });
  } catch (error) {
    res.json({ success: false, res: error });
  }
});

export default connectDB(handler);
