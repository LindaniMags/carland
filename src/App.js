import React, { useState } from "react";
import carland from "./carland.module.css";
import Pop from "./Pop";
import vw from "./components/popup/images/VW-car.png";
import discover from "./components/popup/images/discovercars.svg";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineLuggage } from "react-icons/md";
import { GiCarDoor } from "react-icons/gi";
import { PiGasPumpLight } from "react-icons/pi";
import { FaGasPump } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FcApproval } from "react-icons/fc";
import { Link } from "react-router-dom";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [guest, setGuest] = useState("");
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <div className="nav">
        <img src={discover} alt="logo" />
        <div className="nav-text">
          <p>Help</p>
          <p>Manage Booking</p>
          <h3>Log in</h3>
        </div>
      </div>
      <div className="rent-details-con">
        <div className="car-details-con">
          <div className="datail econ-datail">
            <div className="car-image">
              <img src={vw} alt="car-image" />
            </div>
            <div className="car-specs">
              <h3>Economy</h3>
              <div className="specs">
                <div className="spec">
                  <IoPersonOutline />
                  <p>4 seats</p>
                </div>
                <div className="spec">
                  <MdOutlineLuggage />
                  <p>1 bag</p>
                </div>
                <div className="spec">
                  <GiCarDoor />
                  <p>5 doors</p>
                </div>
                <div className="spec">
                  <PiGasPumpLight />
                  <p>Gasoline</p>
                </div>
              </div>
              <p>PARTIAL PREPAYMENT</p>
            </div>
          </div>
          <div className="datail datail-info">
            <div className="car-info">
              <div className="fuel">
                <FaGasPump />
                <div className="fuel-text">
                  <p>Fuel policy</p>
                  <p>Same to Same</p>
                </div>
              </div>
              <div className="pick-up fuel">
                <FaLocationDot />
                <div className="fuel-text">
                  <p>Pick-up location</p>
                  <p>Rental office</p>
                </div>
              </div>
            </div>
            <div className="conditions">
              <div className="condition">
                <FcApproval />
                <p>Unlimited mileage</p>
              </div>
              <div className="condition">
                <FcApproval />
                <p>Collision Damage Waiver</p>
              </div>
              <div className="condition">
                <FcApproval />
                <p>Theft Protection</p>
              </div>
            </div>
          </div>
          <div className="datail">
            <div className="ratings">
              <h2>8.6</h2>
              <p>Excellent</p>
            </div>
          </div>
        </div>
        <div className="input inputs">
          <div className="price">1000.00</div>
          <div className="form-container">
            <form className="form">
              <div className="dates">
                <div className="from input">
                  <label>From</label>
                  <input
                    placeholder="dd-mm-yyyy"
                    type="text"
                    value={from}
                    onChange={(event) => setFrom(event.target.value)}
                  />
                </div>
                <div className="to input">
                  <label>To</label>
                  <input
                    placeholder="dd-mm-yyyy"
                    type="text"
                    value={to}
                    onChange={(event) => setTo(event.target.value)}
                  />
                </div>
              </div>
              <div className="guest input">
                <label>Guests</label>
                <input
                  placeholder="Number of guests"
                  type="text"
                  value={guest}
                  onChange={(event) => setGuest(event.target.value)}
                />
              </div>

              <button
                className="submit"
                onClick={() => {
                  alert("Form Submitted!");
                }}
                type="button"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="booking-con">
        <div className="summary-con">
          <h3>Summary</h3>
          <div className="summary">
            <div className="cost-pay">
              <div className="rental-cost">
                <div className="cost">
                  <p>Cost of rental</p>
                  <p>R1000</p>
                </div>
                <div className="cost cost-cov">
                  <p>+ Full Coverage</p>
                  <p>R200.00</p>
                </div>
                <div className="cost total">
                  <p>Total</p>
                  <p>R1200.00</p>
                </div>
              </div>
              <div className="payment">
                <div className="cost">
                  <p>Pay now</p>
                  <p>R1050</p>
                </div>
                <div className="cost">
                  <p>Pay at pick-up</p>
                  <p>R1200</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="personal-info-con">
          <h3>Driver's Details</h3>
          <div className="diver-con">
            <div className="names-con">
              <div className="from input">
                <label>First Name:</label>
                <input
                  placeholder=""
                  type="text"
                  value={from}
                  onChange={(event) => setFrom(event.target.value)}
                />
              </div>
              <div className="from input">
                <label>Last Name:</label>
                <input
                  placeholder=""
                  type="text"
                  value={from}
                  onChange={(event) => setFrom(event.target.value)}
                />
              </div>
            </div>
            <div className="names-con">
              <div className="from input">
                <label>Email:</label>
                <input
                  placeholder=""
                  type="text"
                  value={from}
                  onChange={(event) => setFrom(event.target.value)}
                />
              </div>
              <div className="from input">
                <label>Phone:</label>
                <input
                  placeholder=""
                  type="text"
                  value={from}
                  onChange={(event) => setFrom(event.target.value)}
                />
              </div>
            </div>
            <div className="names-con">
              <div className="from input">
                <label>Date Of Birth:</label>
                <input
                  placeholder=""
                  type="text"
                  value={from}
                  onChange={(event) => setFrom(event.target.value)}
                />
              </div>
              <div className="from input">
                <label>Country of Residency</label>
                <input
                  placeholder=""
                  type="text"
                  value={from}
                  onChange={(event) => setFrom(event.target.value)}
                />
              </div>
            </div>
          </div>
          <Link to="/processing">
            <button
              className="submit book-now"
              onClick={togglePopup}
              type="button"
            >
              Book Now
            </button>
          </Link>
        </div>
      </div>

      <Pop isOpen={isOpen} handleClose={togglePopup} />
    </div>
  );
}
export default App;

/*

        <div className="input inputs">
          <div className="price">R7500.00</div>
          <div className="form-container">
            <form className="form">
              <div className="dates">
                <div className="from input">
                  <label>From</label>
                  <input
                    placeholder="dd-mm-yyyy"
                    type="text"
                    value={from}
                    onChange={(event) => setFrom(event.target.value)}
                  />
                </div>
                <div className="to input">
                  <label>To</label>
                  <input
                    placeholder="dd-mm-yyyy"
                    type="text"
                    value={to}
                    onChange={(event) => setTo(event.target.value)}
                  />
                </div>
              </div>
              <div className="guest input">
                <label>Guests</label>
                <input
                  placeholder="Number of guests"
                  type="text"
                  value={guest}
                  onChange={(event) => setGuest(event.target.value)}
                />
              </div>

              <button className="submit" onClick={togglePopup} type="button">
                Submit
              </button>
            </form>
          </div>
        </div>
*/

/*

      <Pop isOpen={isOpen} handleClose={togglePopup} />
*/

/*
const [isOpen, setIsOpen] = useState(false);
  const [guest, setGuest] = useState("");
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
*/
