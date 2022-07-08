import React from "react";

const AddUser = () => {
  return (
    <div>
      <form>
        <div className="userDetails">
          <label>User name:</label>
          <input placeholder="Username" />
        </div>
        <div className="userDetails">
          <label>Mobile number:</label>
          <input placeholder="Mobile number" type="number" />
        </div>
        <div className="userDetails">
          <label>Email id:</label>
          <input placeholder="Email id" />
        </div>
        <div className="userDetails">
          <label>Password:</label>
          <input placeholder="Password" type="password" />
        </div>
        <div className="userDetails">
          <label>Age:</label>
          <input placeholder="Age" type="number" />
        </div>
        <div className="userDetails">
          <label>Address:</label>
          <textarea placeholder="Address" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddUser;
