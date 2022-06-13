import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "../pages/HomePage";
import CreateReview from "../pages/CreateReview";
import MyBlog from "../pages/MyBlog";
import Login from "../pages/Login";
import Register from "../pages/Register";
import HeaderFooter from "../components/HeaderFooter";

function Router() {
  const user = false;
  return (
    <Routes>
      <Route path="/" element={<HeaderFooter />}>
        {user ? (
          <>
            <Route path="/home" element={<HomePage />} />
            <Route path="create" element={<CreateReview />} />
            <Route path="myblog" element={<MyBlog />} />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </>
        ) : (
          <>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/" element={<Navigate to="/auth/login" />} />
            <Route path="*" element={<Navigate to="/auth/login" />} />
          </>
        )}
      </Route>
    </Routes>
  );
}

export default Router;
