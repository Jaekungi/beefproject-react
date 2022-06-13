function checklocation(location) {
  const { pathname } = location;
  // console.log(pathname);
  const isHomePage = pathname.includes("home");
  const isAuthPage = pathname.includes("auth");
  const isUserPage = pathname.includes("user");
  const isRootPage = pathname === "/";

  return {
    isHomePage,
    isAuthPage,
    isUserPage,
    isRootPage,
  };
}

export default checklocation;
