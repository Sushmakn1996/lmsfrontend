import React from "react";
import addUser from "../images/addUser.png";
import group from "../images/group.png";
import team from "../images/team.png";

function SideNavBar() {
  return (
    <div style={{
      font: "small-caption",
      
    }}>
      <div>
        <img className="sideicon" style={{
      
      backgroundColor:"#086288"
    }} src={team} alt="Batch"></img>
        <p>Batch</p>
        <div>
          <img className="sideicon" style={{
      
      backgroundColor:"#086288"
    }} src={group} alt="Mentor"></img>
          <p>Mentor</p>
        </div>
        <div>
          <img className="sideicon" style={{
      
    
    }} src={addUser} alt="Request"></img>
          <p>Request</p>
        </div>
      </div>
    </div>
  );
}

export default SideNavBar;
