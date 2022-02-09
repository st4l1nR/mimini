import { NextApiResponse, NextApiRequest } from "next";
import jwt, { JsonWebTokenError } from "jwt-promisify";
import cookie from "cookie";
import { userModel } from "../models/index";

const verifyRefreshToken = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: any
) => {
  try {
    const { refreshToken } = req.cookies;
    if (!refreshToken) throw new Error("refresh token doesn't exist");

    const user:any = await jwt.verify(
      refreshToken,
      process.env.ACCESS_TOKEN_SECRET as string
    );

    const isInDatabase = await userModel.findOne({
      _id: typeof user !== "string" && user._id as any,
      refreshToken,
    });
    if (!isInDatabase) throw new Error("refresh token isn't in database");

    const newToken = await jwt.sign(
      user,
      process.env.ACCESS_TOKEN_SECRET as string
    );
    const newRefreshToken = await jwt.sign(
      user,
      process.env.REFRESH_TOKEN_SECRET as string
    );

    await userModel.updateOne(
      { _id: typeof user !== "string" && user._id as any},
      { refreshToken: newRefreshToken }
    );

    res.setHeader("Set-Cookie", [
      cookie.serialize("token", newToken, {
        httpOnly: true,
        path: "/",
      }),
      cookie.serialize("refreshToken", newRefreshToken, {
        httpOnly: true,
        path: "/",
      }),
    ]);
    next();
  } catch (error: any) {
    console.log(error.message);
    return res.status(401).end();
  }
};

const verifyToken = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: any
) => {
  try {
    const { token } = req.cookies;
    if (!token) throw new Error("token doesn't exist");
    await jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET as string
    );
    next();
  } catch (error: any) {
    const {name, message} = error
    if (name === "TokenExpiredError") {
      await verifyRefreshToken(req, res, next);
    } else {
      console.log(message);
      return res.status(401).end();
    }
  }
};

export default verifyToken;
