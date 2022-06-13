import React from "react";
function Header() {
  return (
    <nav class="navbar navbar-dark bg-primary">
      <div className="row col-12 d-flex justify-content-center text-white">
        <span className="h3">LOGO</span>
      </div>
    </nav>
  );
}
export default Header;

// import React from "react";
// import { Link } from "react-router-dom";

// function Header() {
//   return (
//     <div className="Header2">
//       <nav className="navbar-brand navbar-dark bg-primary">
//         <div className="container">
//           <Link className="navbar-brand" to={"/"}>
//             LOGO
//           </Link>
//           <div className="d-flex justify-content-end">
//             <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//               <ul className="navbar-nav ml-auto">
//                 <li className="nav-item">
//                   <Link className="nav-link" to={"/login"}>
//                     Login
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to={"/register"}>
//                     Register
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Header;
