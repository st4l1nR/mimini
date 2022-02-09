import React from "react";
import { useRouter } from "next/router";
import { Button } from "../../components/global/index";
import Link from "next/link";

const Success = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-screen max-w-4xl p-5 m-auto space-y-5">
      <div className="relative w-3xl h-2/3">
        <img
          src="/checkout-success.svg"
          className="object-contain w-full h-full"
          alt="girl with boxes"
        />
      </div>

      <div className="flex flex-col items-center w-full space-y-3 h-1/3">
        <span className="text-2xl font-bold text-center">
          Your Payment is Succesfull
        </span>
        <span className="text-gray-400 text-md">
          Thank you for your payment. We sent a email with the details of your
          order
        </span>
        <Link href="/">
          <div>
            <Button onClick={() => router.push("/")}>Back to Home</Button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Success;
