import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "../pages/HomePage";
import CreateReview from "../pages/CreateReview";
import MyBlog from "../pages/MyBlog";
import Login from "../pages/Login";
import Register from "../pages/Register";
import RootHeader from "../components/header/RootHeader";
import { useAuth } from "../contexts/AuthContext";
import MyBlogEdit from "../pages/MyBlogEdit";

function Router() {
  const { user } = useAuth();
  console.log(user);
  return (
    <Routes>
      {user ? (
        <>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/review/myblog" element={<MyBlog />} />
          <Route path="create" element={<CreateReview />} />
          <Route path="/myblog/edit/:id" element={<MyBlogEdit />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </>
      ) : (
        <>
          <Route path="/" element={<RootHeader />}>
            <Route path="auth/login" element={<Login />} />
            <Route path="auth/register" element={<Register />} />
          </Route>
          <Route path="" element={<Navigate to="/auth/login" />} />
          <Route path="*" element={<Navigate to="/auth/login" />} />
        </>
      )}
    </Routes>
  );
}

export default Router;
