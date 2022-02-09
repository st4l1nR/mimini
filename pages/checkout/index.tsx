import React from "react";
import { GetStaticProps } from "next";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Checkout } from "../../components";
import { Shipping } from "../../types/index";

const Index = ({ shipping }: { shipping: Shipping }) => {
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_KEY as string
  );
  return (
    <Elements stripe={stripePromise}>
      {shipping && <Checkout shipping={shipping} />}
    </Elements>
  );
};

export const getServerSideProps: GetStaticProps = async () => {
  const {
    data: { res },
  } = await axios.get("/shipping");

  return {
    props: {
      shipping: res,
    },
  };
};

export default Index;
