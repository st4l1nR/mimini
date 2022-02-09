import { NextApiRequest, NextApiResponse } from "next";
import { connectDB, userModel } from "../../../models/index";
import nextConnect from "next-connect";
import cookieParser from "cookie-parser";
import jwt, { JwtPayload } from "jsonwebtoken";
import cookie from "cookie";

const handler = nextConnect({});
handler.use(cookieParser());

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { refreshToken } = req.cookies;
    const user = jwt.verify(
      refreshToken,
      process.env.ACCESS_TOKEN_SECRET as string
    );
    const isInDatabase = await userModel.findOne({
      _id: typeof user !== "string" && user._id as any,
      refreshToken,
    });
    if (!isInDatabase) throw "Invalid token";

    const newToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET as string);
    const newRefreshToken = jwt.sign(
      user,
      process.env.REFRESH_TOKEN_SECRET as string
    );

    await userModel.updateOne(
      { _id: typeof user !== "string" && user._id },
      { refreshToken: newRefreshToken }
    );

    res
      .status(200)
      .setHeader("Set-Cookie", [
        cookie.serialize("token", newToken, {
          httpOnly: true,
          path:'/'
        }),
        cookie.serialize("refreshToken", newRefreshToken, {
          httpOnly: true,
          path:'/'
        }),
      ])
      .json({ success: true });
  } catch (error) {
    res.status(401).json({ success: false, error });
  }
});

handler.delete(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
  } catch (error) {}
});

export default connectDB(handler);
