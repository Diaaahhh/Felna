import React from "react";
import logo from '../../assets/logo.ico'
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="full_navbar">
      {/* upper nav */}
      <div className="upper_navbar">
        <div className="moving_wrapper_up">
          {/* logo */}
          <div className="logo">
            <a href="#"><img src={logo} alt="" srcset="" height='20px' width='30px'/></a>
            <h1>FelnaTech</h1>
          </div>

          {/* Search group */}
          <div className="search_group">
<input type="text" placeholder="search your products" />
<button>
    search
</button>
          </div>

          {/* Buttons group */}
          <div className="button_group">
<button className="green">Build PC</button>
<button className="white">callback</button>
          </div>

          {/* cart */}
          <div>
            <p>cart</p>
          </div>

          {/* login button */}
          <button className="green">
            login or register
          </button>
        </div>
      </div>

      {/* lower navbar */}
      <div className="lower_navbar">
        <div className="moving_wrapper_down">
            <ul className="nav_ribbon">
                <li>TV</li>
                <li>TV</li>
                <li>TV</li>
                <li>TV</li>
                <li>TV</li>
                <li>TV</li>
                <li>TV</li>
                <li>TV</li>
                <li>TV</li>
                <li>TV</li>
                <li>TV</li>
                <li>TV</li>
                <li>TV</li>
                <li>TV</li>
                <li>TV</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
