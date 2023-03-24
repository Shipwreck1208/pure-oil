import React from "react";
import "./itemStyles.css";

// React Component to display individual item
const Item = ({ name, status }) => (
  <div className="item-container bg-[#7276A5] text-[#E4E4F2] rounded-xl shadow-md shadow-[#E4E4F2] hover:shadow-black hover:text-[#7276A5] hover:bg-[#E4E4F2]">
    <div>
      <span className="item-label">Name:</span>
      {name}
    </div>
    <div>
      <span className="item-label">Status:</span>
      {status}
    </div>
  </div>
);

export default Item;