import React, { useState } from "react";
import App from "../css/App.css";


const Returning = () => {
  return (
    <div class="bg-gradient-info>">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card text-center border-0">
              <div className="card-body">
                <h2 className="card-title">Checkout Item</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="thumbnail">
              <img className="border shadow-sm" src="images/adapters.jpg" height={105} width={150} />
                <body className="car-text pl-4">
                  <strong>Adapters</strong>
                </body>
            </div>
          </div>
          <div className="col">
            <div className="thumbnail text-center">
              <img className="border shadow-sm" src="images/tablet.jpg" height={105} width={140} />
                <body className="car-text text-center">
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
          <div className="col-3">
            <div class="input-group mt-5">
                <input
                  type="text"
                  class="form-control"
                  placeholder="UNI"
                  aria-describedby="basic-addon1"
                ></input>
            </div>
          </div>
        </div>

        <div className="card border-0">
          <div className="card-body">
            <body className="car-text">Important Note: You will receive an email notifying when the device must be returned to the office.</body>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div class="input-group mt-4">
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

          <div className="col">
            <div class="input-group mt-4">
              <select class="browser-default custom-select custom-select-mid">
                <option selected>For how long</option>
                <option value="1">30 minutes</option>
                <option value="2">1 hour</option>
                <option value="3">2 hours</option>
                <option value="4">3 hours</option>
                <option value="5">1 day</option>
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
    </div>
  );
};

export default Returning;
