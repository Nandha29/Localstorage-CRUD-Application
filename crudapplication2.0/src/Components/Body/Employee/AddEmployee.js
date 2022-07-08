import React from "react";
import { Link } from "react-router-dom";

const AddEmployee = () => {
  return (
    <div>
      <form>
        <button>
          <Link to="/employee">X</Link>
        </button>
        <div className="employeeDetail">
          <label>Employee name:</label>
          <input placeholder="Employee name" />
        </div>
        <div className="employeeDetail">
          <label>Employee number:</label>
          <input placeholder="Employee number" type="number" />
        </div>
        <div className="employeeDetail">
          <label>Designation:</label>
          <input placeholder="Designation" />
        </div>
        <div className="employeeDetail">
          <label>Salary:</label>
          <input placeholder="Salary" type="number" />
        </div>
        <div className="employeeDetail">
          <label>Mobile number:</label>
          <input placeholder="Mobile number" />
        </div>
        <div className="employeeDetail">
          <label>Address:</label>
          <textarea placeholder="Address" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddEmployee;
