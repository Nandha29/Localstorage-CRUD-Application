import React from "react";
import { Link } from "react-router-dom";

const ShowUser = () => {
  return (
    <div>
      <div>
        <button>
          <Link to="/user/addUser"> Add user</Link>
        </button>
      </div>
      ShowUser
    </div>
  );
};

export default ShowUser;
