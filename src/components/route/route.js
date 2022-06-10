import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';


function Router() {
  const { user } = useContext(AuthContext);
  return (
    <Routes>
      {user ? (
        <>
          <Route path="/" element={<HomePage />}>
            <Route path="register" element={<Register />}>
              <Route path="create" element={<Create />} />
              <Route path="myblog" element={<MyBlog />} />
              <Route path="suggestion" element={<FriendPage />} />
            
          <Route path="*" element={<Navigate to="/" />} />
        </>
      ) : (
        <>
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      )}
    </Routes>
  );
}

export default Router;
