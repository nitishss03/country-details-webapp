import { Footers } from "../UI/Footer";
import Header from "../UI/Header";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footers />
    </>
  );
};
