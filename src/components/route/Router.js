import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "../../pages/HomePage";
import CreateReview from "../../pages/CreateReview";
import MyBlog from "../../pages/MyBlog";
import Login from "../../pages/Login";
import Register from "../../pages/Register";

function Router() {
  const user = true;
  return (
    <Routes>
      {user ? (
        <>
          <Route path="/" element={<HomePage />}>
            <Route path="create" element={<CreateReview />} />
            <Route path="myblog" element={<MyBlog />} />
            <Route path="login" element={<Login />} />
          </Route>
        </>
      ) : (
        <>
          <Route path="register" element={<Register />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/Login" />} />
        </>
      )}
    </Routes>
  );
}

export default Router;
