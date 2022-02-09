import React from "react";
import { useRouter } from "next/router";
import { Truck } from "react-feather";
import { CgFileDocument } from "react-icons/cg";
import { IoStorefrontOutline } from "react-icons/io5";
import Link from "next/link";

const SidebarItem = ({ children, selected, ...props }: any) => {
  return (
    <Link {...props}>
      <div
        className={`w-full h-12 flex items-center space-x-3 text-xl text-blue-500 font-bold cursor-pointer ${
          selected ? "opacity-100" : "opacity-50"
        }`}
      >
        {children}
      </div>
    </Link>
  );
};

const Index = () => {
  const router = useRouter();
  const { replace, push, pathname } = router;
  return (
    <div
      className="sticky left-0 w-1/5 p-5 flex flex-col space-y-4"
      style={{
        height: "90vh",
      }}
    >
      <SidebarItem href="/admin" selected={pathname === "/admin" && true}>
        <IoStorefrontOutline />
        <span>Dashboard</span>
      </SidebarItem>
      <SidebarItem
        href="/admin/orders"
        selected={pathname === "/admin/orders" && true}
      >
        <CgFileDocument />
        <span>Orders</span>
      </SidebarItem>
      <SidebarItem
        href="/admin/shipping"
        selected={pathname === "/admin/shipping" && true}
      >
        <Truck />
        <span>Shipping</span>
      </SidebarItem>
    </div>
  );
};

export default Index;
