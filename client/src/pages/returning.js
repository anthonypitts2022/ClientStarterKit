import React, { useState } from "react";
import App from "../css/App.css";

const Checkout = () => {

  return (

    <div className="container main-container">
      <div className="row">
        <div className="col">
          <div className="card text-center border-0">
            <div className="card-body">
              <h2 className="card-title">Returning Item</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="thumbnail">
            <img className="border shadow-sm" src="images/adapters.jpg" height={105} width={150} />
              <body className="car-text pl-4 mt-2">
                <strong>Adapters</strong>
              </body>
          </div>
        </div>
        <div className="col">
          <div className="thumbnail text-center">
            <img className="border shadow-sm" src="images/tablet.jpg" height={105} width={140} />
              <body className="car-text text-center mt-2">
                <strong>Tablet</strong>
              </body>
          </div>
        </div>
        <div className="col">
          <div className="thumbnail text-center">
            <img className="border shadow-sm" src="images/lenovo.jpg" height={105} width={140} />
              <body className="car-text text-center">
                <strong>Laptop</strong>
              </body>
          </div>
        </div>
        <div className="col">
          <div className="thumbnail text-right">
            <img className="border shadow-sm" src="images/clicker.jpg" height={105} width={140} />
              <body className="car-text text-right pr-5">
                <strong>Clicker</strong>
              </body>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div class="input-group mt-5">
              <input
                type="text"
                class="form-control"
                placeholder="UNI"
                aria-describedby="basic-addon1"
              ></input>
          </div>
        </div>
        <div className="col">
          <div class="input-group mt-5">
            <select class="browser-default custom-select custom-select-mid">
              <option selected>Device</option>
              <option value="1">Adapter</option>
              <option value="2">Tablet</option>
              <option value="3">Lenovo Laptop</option>
              <option value="4">Clicker</option>
              <option value="5">Another device</option>
            </select>
          </div>
        </div>
      </div>


        <div className="row">
          <div className="col">
            <div className="card text-center border-0">
              <div class="mt-5">
                <button type="button" class="btn btn-dark">
                  Return
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
};

export default Checkout;
