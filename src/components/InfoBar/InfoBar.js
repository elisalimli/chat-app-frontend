import React from "react";
import "./InfoBar.css";
import onlineIcon from "../../icons/onlineIcon.png";
import closeIcon from "../../icons/closeIcon.png";

const InfoBar = ({ room, users }) => {
  // {
  //   users.map((user) => console.log(user));
  // }
  // console.log(users.length);
  // console.log("sa");
  // console.log(users);

  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img src={onlineIcon} className="onlineIcon" alt="online image" />
        <h3>{room}</h3>
        {/* {users.map((user) => console.log(user + "SALAM"))} */}
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          <img src={closeIcon} alt="close image" />
        </a>
      </div>
    </div>
  );
};
export default InfoBar;
