import React from "react";
import { Admin, Dashboard } from "../../components";
import withAuth from "../../components/withAuth";

const Index = () => {
  return (
    <Admin>
      <Dashboard />
    </Admin>
  );
};

export default withAuth(Index);
