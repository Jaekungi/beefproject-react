import React, { useState } from "react";
function SignupComponent(props) {
  return (
    <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
      <form>
        <div className="form-group text-left mb-3">
          <label htmlFor="username">Username</label>
          <input
            type="username.1"
            className="form-control mb-3"
            id="usernameid"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group text-left mb-3">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control mb-3"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="form-group text-left">
          <label htmlFor="exampleInputPassword1">Confirm Password</label>
          <input
            type="password"
            className="form-control mb-3"
            id="confirmPassword"
            placeholder="Confirm Password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}
// import React, { Component } from "react";
// export default class SignUp extends Component {
//   render() {
//     return (
//       <form>
//         <h3>Register</h3>
//         <div className="mb-3">
//           <label>Username</label>
//           <input type="text" className="form-control" placeholder="Username" />
//         </div>

//         <div className="mb-3">
//           <label>Password</label>
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Enter password"
//           />
//         </div>
//         <div className="mb-3">
//           <label>Confirm Password</label>
//           <input
//             type="confirmpassword"
//             className="form-control"
//             placeholder="Confirm your password"
//           />
//         </div>
//         <div className="d-grid">
//           <button type="submit" className="btn btn-primary">
//             Submit
//           </button>
//         </div>
//         <p className="forgot-password text-right">
//           Already registered <a href="/login">Login now?</a>
//         </p>
//       </form>
//     );
//   }
// }

export default SignupComponent;
