import React from "react";
import axios from "axios";
import { Order } from "../../types/index";
import { Admin, withAuth } from "../../components";

const Orders = ({ orders = [] }: { orders: Order[] }) => {
  return (
    <Admin>
      <div className="flex flex-col w-full"></div>
    </Admin>
  );
};

export async function getServerSideProps() {
  const {
    data: { res },
  } = await axios.get("/orders");
  return {
    props: {
      orders: res,
    },
  };
}

export default withAuth(Orders);
