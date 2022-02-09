import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import "../styles/output.css";
import type { AppProps } from "next/app";
import axios from "axios";
import Cookies from 'universal-cookie'
import { Navbar, Footer, Admin } from "../components";
import { Provider } from "react-redux";
import { store } from "../features/store";
import { login } from "../features/userSlice";

const cookies = new Cookies()
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_ENDPOINT as string;
axios.defaults.withCredentials = true

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pathname = router.pathname.split("/")[1];


  useEffect(() => {
    const user = cookies.get('user')
    console.log(user)
    if (user) store.dispatch(login(user))
  }, []);

  return (
    <Provider store={store}>
      <Navbar />
      <div className="w-full h-full px-2 md:px-5 font-montserrat">
        <Component {...pageProps} />
      </div>
      {pathname !== "admin" && <Footer />}
    </Provider>
  );
}
export default MyApp;
