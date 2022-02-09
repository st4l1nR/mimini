import React from "react";
import AdminSidebar from "./AdminSidebar";

const index = ({ children }: any) => {
  return (
    <div>
      <AdminSidebar />
      <div className="w-5/6">{children}</div>
    </div>
  );
};

export default index;
