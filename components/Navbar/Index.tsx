import React, { useState, useEffect } from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import NavbarAdmin from "./NavbarAdmin";
import {useSelector} from 'react-redux'
import {RootState} from '../../features/store'


import { useRouter } from "next/router";
const Index = () => {
  const router = useRouter();
  const pathname = router.pathname.split("/")[1];
  const [screenWidth, setScreenWidth] = useState(0);
  const user = useSelector((state:RootState)  => state.user)

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);

  return (
    <div>
      {pathname !== "admin" || user.loggedIn  == false ? (
        <>
          {screenWidth && screenWidth > 640 ? (
            <NavbarDesktop />
          ) : (
            <NavbarMobile />
          )}
        </>
      ) : (
        <NavbarAdmin />
      )}
    </div>    
  );
};

export default Index;
