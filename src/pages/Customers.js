import React from "react";
import "./Customers.css";

const customers = [
  {
    name: "John Doe",
    email: "john@doe.com",
    location: "San Francisco"
  },
  {
    name: "Jane Doe",
    email: "jane@doe.com",
    location: "New York"
  },
  {
    name: "Ryan Chenkie",
    email: "ryan@chenkie.com",
    location: "Ottawa"
  }
];

const CustomerList = ({ customers }) => (
  <table className="customer-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Location</th>
      </tr>
    </thead>
    <tbody>
      {customers.map((c, i) => (
        <tr key={i}>
          <td>{c.name}</td>
          <td>{c.email}</td>
          <td>{c.location}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const Customers = () => <CustomerList customers={customers} />;

export default Customers;
