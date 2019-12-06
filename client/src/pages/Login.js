import React from "react";
import Image from "react-image-resizer";

const Login = () => (
  <div className="text-center" role="buttons" aria-label="twobuttons">
    <div className="text-center">
      <div className="col">
        <div className="thumbnail">
          <img src="images/ieor-logo.jpg" height={325} width={500} />
        </div>
      </div>
    </div>
    <div className="card text-center border-0">
      <div className="card-body">
        <h2 className="card-title">Welcome!</h2>
        <h3 className="car-text">IEOR IT Check-in</h3>
      </div>
    </div>
    <div
      className="btn-group btn-group-lg"
      role="group"
      aria-label="First group"
    >
      <button type="button" className="btn btn-primary mr-4">
        Checkout Item
      </button>
    </div>
    <div
      className="btn-group btn-group-lg"
      role="group"
      aria-label="Second group"
    >
      <button type="button" className="btn btn-danger">
        Returning Item
      </button>
    </div>
  </div>
);

export default Login;
