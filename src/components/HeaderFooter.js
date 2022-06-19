import React from "react";
import { Outlet } from "react-router-dom";
import checklocation from "../services/checklocation";
import { useLocation } from "react-router-dom";
import AuthHeader from "./header/AuthHeader";
import RootHeader from "./header/RootHeader";
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
