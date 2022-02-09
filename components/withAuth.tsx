import React from "react";
import Cookies from "universal-cookie";
import ErrorPage from 'next/error'

const withAuth = (WrappedComponent: any) => (props: any) => {
  if (typeof window !== "undefined") {
    const cookies = new Cookies()
    const user = cookies.get('user');
    if (!user) return <ErrorPage statusCode={404}/>
    return <WrappedComponent {...props} />;
  }
  return null;
};

export default withAuth;
