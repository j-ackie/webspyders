import { useContext } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { UserContext } from "@/contexts/UserContext";
import LoginModal from "./LoginModal";

const Layout = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <Navbar />
      <Outlet />
      {!user && <LoginModal />}
    </>
  );
};

export default Layout;
