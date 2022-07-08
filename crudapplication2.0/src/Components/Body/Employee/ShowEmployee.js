import React from "react";
import { Link } from "react-router-dom";

const ShowEmployee = () => {
  return (
    <div>
      <div>
        <button>
          <Link to="/employee/addEmployee"> Add Employee </Link>
        </button>
      </div>
      ShowEmployee
    </div>
  );
};

export default ShowEmployee;
