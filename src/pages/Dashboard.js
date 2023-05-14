import React from "react";
import "./Dashboard.css";

const Metric = ({ title, value }) => (
  <div className="metric-container">
    <p className="metric-title">{title}</p>
    <p className="metric-value">{value}</p>
  </div>
);

const Dashboard = () => (
  <div className="dashboard">
    <Metric title="Revenue" value="$7,235" />
    <Metric title="Affiliate Share" value="$2,127" />
    <Metric title="Growth" value="14.3%" />
  </div>
);

export default Dashboard;
