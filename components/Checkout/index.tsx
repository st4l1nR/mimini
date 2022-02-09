import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Shipping, Order } from "../../types/index";
import { useForm } from "react-hook-form";
import { TextField, Button, Spiner } from "../global/index";
import Image from 'next/image'

const InputLabel = ({ children }: any) => (
  <span className="text-lg font-bold">{children}</span>
);

const Index = ({ shipping }: { shipping: Shipping }) => {
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Order>();

  const color = watch("color");
  const country = watch("shipping.country");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: Order) => {
    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (!card) return;

    const order: Order = {
      ...data,
      subtotal: data.quantity * 199.99,
    };
    setIsLoading(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (!error) {
      try {
        const {
          data: { res },
        } = await axios.post("/checkout", {
          order,
          paymentMethod,
        });
      } catch (error) {
        console.log(error);
      }
      router.push("/checkout/success");
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid max-w-6xl grid-cols-1 gap-10 m-auto md:grid-cols-2">
        <div className="flex flex-col p-5 space-y-7">
          <div className="flex justify-between">
            <span className="text-lg font-bold">Mimini VR glasses</span>
            <span className="text-xl font-bold text-gray-600">$199.99</span>
          </div>

          <div className="flex flex-col space-y-3">
            <div className="relative w-full h-80">
              <Image
                src={color === "black" ? "/vr-black.png" : "/vr-white.jpg"}
                alt="white virtual reality glasses"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <span className="text-sm text-justify">
              Video Card: NVIDIA GTX 1060 / AMD Radeon RX 480 or greater.
              <br />
              CPU: Intel i5-4590 / AMD Ryzen 5 1500X or greater.
              <br />
              Memory: 8GB RAM or greater.
              <br />
              Video Output: Compatible HDMI 1.3 video output.
              <br />
              USB Ports: 3x USB 3.0 ports plus 1x USB 2.0 port.
              <br />
            </span>
          </div>

          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-2/3">
                <InputLabel>Quantity</InputLabel>
              </div>
              <TextField
                defaultValue={1}
                placeholder="Quantity"
                {...register("quantity", { required: true })}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <InputLabel>Color</InputLabel>
              {errors.color && (
                <span className="w-full text-sm font-bold text-red-500">
                  Color is required
                </span>
              )}
              <div className="flex items-center w-full p-5 h-28 space-x-7 ring-1 ring-gray-300 focus-within:ring-blue-500">
                <input
                  type="radio"
                  className="w-5 h-5"
                  value="black"
                  {...register("color", { required: true })}
                />
                <div className="flex flex-col">
                  <span className="text-xl text-bold">Black</span>
                  <span className="text-sm">Black Mimini VR</span>
                </div>
              </div>
              <div className="flex items-center w-full p-5 h-28 space-x-7 ring-1 ring-gray-300 focus-within:ring-blue-500">
                <input
                  type="radio"
                  className="w-5 h-5"
                  value="white"
                  {...register("color", { required: true })}
                />
                <div className="flex flex-col">
                  <span className="text-xl text-bold">White</span>
                  <span className="text-sm">White Mimini VR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-5 space-y-7">
          <div className="flex flex-col">
            <span className="text-xl font-bold">Payment Details</span>
            <span className="text-sm">
              Complete yout purchase by providing your payment details
            </span>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <InputLabel>Email adress</InputLabel>
              <TextField
                error={errors.email?.type === "required" && "Email is required"}
                {...register("email", { required: true })}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <InputLabel>Card Details</InputLabel>
              <CardElement />
            </div>
            <div className="flex flex-col space-y-2">
              <InputLabel>Cardholder name</InputLabel>
              <TextField
                error={errors.cardholder && "Cardholder is required"}
                {...register("cardholder", { required: true })}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <InputLabel>Shipping adress</InputLabel>
              <div className="flex flex-col space-y-2">
                <div className="flex flex-col space-y-2">
                  {errors.shipping?.country && (
                    <span className="w-full text-sm font-bold text-red-500">
                      Country is required
                    </span>
                  )}
                  <select
                    className="w-full h-12 border-2 border-gray-300 focus-within:border-blue-500"
                    {...register("shipping.country", { required: true })}
                  >
                    <option value="" disabled selected>
                      Country
                    </option>
                    {shipping.countries.map((country, key) => (
                      <option value={country.name} key={key}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col space-y-2">
                  {errors.shipping?.city && (
                    <span className="w-full text-sm font-bold text-red-500">
                      City is required
                    </span>
                  )}
                  <select
                    className="w-full h-12 border-2 border-gray-300 focus-within:border-blue-500"
                    disabled={!country}
                    {...register("shipping.city", { required: true })}
                  >
                    <option value="" disabled selected>
                      City
                    </option>
                    {country &&
                      shipping.countries
                        .find(({ name }) => name === country)
                        ?.cities.map((city, key) => (
                          <option value={city} key={key}>
                            {city}
                          </option>
                        ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 grid-rows-1">
                  <TextField
                    placeholder="Zip Code"
                    error={errors.shipping?.zip && "Zip code is required"}
                    {...register("shipping.zip", { required: true })}
                  />
                  <TextField
                    placeholder="State"
                    error={errors.shipping?.state && "State is required"}
                    {...register("shipping.state", { required: true })}
                  />
                </div>
                <TextField
                  placeholder="Street adress"
                  error={errors.shipping?.adress && "Adress is required"}
                  {...register("shipping.adress", { required: true })}
                ></TextField>
              </div>
            </div>
            <div className="flex flex-col space-y-2 font-bold">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>199.99$</span>
              </div>
              <div className="flex justify-between">
                <span>Total</span>
                <span>199.99$</span>
              </div>
            </div>
          </div>
          <Button
            width="w-full text-center flex justify-center items-center"
            type="submit"
            disabled={isLoading}
          >
            {!isLoading ? "Submit" : <Spiner />}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Index;
