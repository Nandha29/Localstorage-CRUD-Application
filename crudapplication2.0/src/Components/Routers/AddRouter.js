import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowUser from "../Body/User/ShowUser";
import ShowEmployee from "../Body/Employee/ShowEmployee";
import PageNotFound from "../Body/PageNotFound";
import Header from "../Header/Header";
import Homepage from "../Body/Homepage";
import AddUser from "../Body/User/AddUser";
import AddEmployee from "../Body/Employee/AddEmployee";

const AddRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/user" element={<ShowUser />} />
        <Route path="/user/addUser" element={<AddUser />} />
        <Route path="/employee" element={<ShowEmployee />} />
        <Route path="/employee/addEmployee" element={<AddEmployee />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default AddRouter;
