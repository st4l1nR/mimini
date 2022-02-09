import React, { useState } from "react";
import { useRouter } from "next/router";
import { AlertColor } from "@mui/material";
import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
  Snackbar,
  Spiner,
} from "../../components/global/index";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import Cookies from "universal-cookie";

interface formData {
  username: string;
  password: string;
  rememberMe: boolean;
}
const Index = () => {
  const cookies = new Cookies();
  const router = useRouter()
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<formData>({
    defaultValues: {
      rememberMe: false,
    },
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    severity: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async ({ rememberMe, ...formData }: formData) => {
    console.log(rememberMe);
    setIsLoading(true);
    const {
      data: { success, user, message, error },
    } = await axios.post("/login", formData);
    setIsLoading(false);

    if (success) {
      if (rememberMe) cookies.set("user", user);
      dispatch(login(user));
      router.push('/admin')
    }

    setSnackbar({
      open: true,
      severity: success ? "success" : "error",
      message: success ? message : error,
    });
  };

  return (
    <div
      className="w-full flex justify-center items-center"
      style={{ height: "90vh " }}
    >
      <form
        className="w-full max-w-lg p-5 flex-col space-y-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <span className="text-3xl font-bold text-center">Login</span>
        <TextField
          {...register("username", { required: "This is required" })}
          placeholder="Username"
          error={errors.username?.message}
        />
        <TextField
          {...register("password", { required: "This is required" })}
          type="password"
          placeholder="Password"
          error={errors.password?.message}
        />
        <div className="flex text-lg items-center space-x-4">
          <span>Remember me</span>
          <input
            className="h-4 w-4"
            type="checkbox"
            {...register("rememberMe", { required: false })}
          />
        </div>

        <div className="flex justify-center">
          <Button type="submit">{isLoading ? <Spiner /> : "Login"}</Button>
        </div>
        <Snackbar
          open={snackbar.open}
          setSnackbar={setSnackbar}
          severity={snackbar.severity as AlertColor}
        >
          {snackbar.message}
        </Snackbar>
      </form>
    </div>
  );
};

export default Index;
