import React, { useState, useEffect } from "react";
import axios from "axios";
import { GetStaticProps, GetServerSideProps } from "next";
import { Shipping } from "../../types/index";
import { Admin, AdminShipping, withAuth } from "../../components";

type props = {
  shipping: Shipping;
};
const Shipping = ({ shipping }: props) => {
  return <Admin>{shipping && <AdminShipping shipping={shipping} />}</Admin>;
};

export async function getServerSideProps() {
  const {
    data: { res },
  } = await axios.get("/shipping");
  return {
    props: {
      shipping: res,
    },
  };
}

export default withAuth(Shipping);
