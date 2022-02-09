import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import { connectDB, userModel } from "../../../models/index";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import cookie from "cookie";
import cors from "cors";

const handler = nextConnect({});
handler.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

handler.use(cookieParser())

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { username, password } = req.body;
    const user = await userModel.findOne(
      { username, password, role: "admin" },
      { password: 0 }
    );
    if (!user) throw new Error("Incorrect username or password");
      
    const token = jwt.sign(
      user.toJSON(),
      process.env.ACCESS_TOKEN_SECRET as string,
      { expiresIn: "1hr" }
    );

    const refreshToken = jwt.sign(
      user.toJSON(),
      process.env.REFRESH_TOKEN_SECRET as string
    );
    res
      .setHeader("Set-Cookie", [
        cookie.serialize("token", token, {
          httpOnly: true,
          path: "/",
        }),
        cookie.serialize("refreshToken", refreshToken, {
          httpOnly: true,
          path: "/",
        }),
        cookie.serialize("session", user, {
          path:"/"
        })
      ])
      .json({ success: true, user,  message: "Success login" });
  } catch (error:any) {
    console.log(error)
    const {message} = error
    res.json({ success: false, error:message });
  }
});

export default connectDB(handler);
