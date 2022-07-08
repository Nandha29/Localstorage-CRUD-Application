import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h4>
        <Link to="/user">User Details</Link>
        <Link to="/employee">Employee Details</Link>
      </h4>
    </div>
  );
};

export default Header;
