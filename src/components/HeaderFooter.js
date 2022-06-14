import React from "react";
import { Outlet } from "react-router-dom";
import IdentificationHeader from "./header/UserHeader";
import Footer from "./auth/Footer";
import checklocation from "../services/checklocation";
import { useLocation } from "react-router-dom";
import AuthHeader from "../components/header/AuthHeader";
import RootHeader from "../components/header/RootHeader";
import HomeHeader from "./header/HomeHeader";
import UserHeader from "./header/UserHeader";

function HeaderFooter() {
  const location = useLocation();
  const { isHomePage, isAuthPage, isUserPage, isRootPage } =
    checklocation(location);
  console.log(isHomePage);

  return (
    <div>
      {isAuthPage && <AuthHeader />}
      {isHomePage && <HomeHeader />}
      {isUserPage && <UserHeader />}
      {isRootPage && <RootHeader />}

      <Outlet />
    </div>
  );
}

export default HeaderFooter;
