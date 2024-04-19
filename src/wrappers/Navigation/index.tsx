import Home from "@/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { useContext } from "react";
import { UserContext } from "@/contexts/UserContext";
import Login from "@/pages/Login";

const Navigation = () => {
  const { user } = useContext(UserContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
