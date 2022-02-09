import React, { useState } from "react";
import { Button, TextField } from "../global/index";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Snackbar, Spiner } from "../global/index";
import Image from 'next/image'

interface contactData {
  email: string;
  title: string;
  message: string;
}

const Index = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    severity: "",
    message: "",
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<contactData>();
  const onSubmit = async (contactData: contactData) => {
    setLoading(true);
    const {
      data: { success, res },
    } = await axios.post("/email", contactData);
    setLoading(false);

    setSnackbar({
      open: true,
      severity: success ? "success" : "error",
      message: res,
    });
  };

  return (
    <form
      className="relative flex items-center justify-center w-full p-5"
      style={{ height: "700px" }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Image
        src="/25.jpg"
        alt="men wearing virtual galsses"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <div className="z-10 flex flex-col max-w-lg space-y-11">
        <div className="flex flex-col space-y-4">
          <span className="text-5xl font-bold text-white">Contact Us</span>
          <span className="text-sm font-bold text-white">
            Use the Mimini VR controller as a remote control to navigate your
            virtual reality with ease or use it as gamepad
          </span>
        </div>

        <div className="flex flex-col space-y-2">
          <TextField
            placeholder="Email"
            error={errors.email?.message}
            {...register("email", {
              required: "This is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Incorrect email",
              },
            })}
          />
          <TextField
            placeholder="Title"
            error={errors.title?.message}
            {...register("title", { required: "This is required" })}
          />
          <TextField
            variant="multiline"
            placeholder="Your Message"
            error={errors.message?.message}
            {...register("message", { required: "This is required" })}
          />
        </div>
        <Button type="submit" width="w-full">
          {loading ? <Spiner /> : "Submit"}
        </Button>
      </div>
      <Snackbar
        open={snackbar.open}
        setSnackbar={setSnackbar}
        severity={snackbar.severity as any}
      >
        {snackbar.message}
      </Snackbar>
    </form>
  );
};

export default Index;
