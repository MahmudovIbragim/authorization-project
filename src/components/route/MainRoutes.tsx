import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../page/home/Home";
import Login from "../page/login/Login";
import Registration from "../page/registration/Registration";
import NotFound from "../page/notFound/NotFound";

const MainRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
