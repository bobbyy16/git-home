import React from "react";
import { GitHomeContext } from "../App";
import { useContext } from "react";
import Githome_nav from "./Githome_nav";
import Githome_nav_details from "./Githome_nav_details";

const Myspace = () => {
  const { userdata } = useContext(GitHomeContext);
  return (
    <div className="githome_detail_page">
      <div className="user_detail_card">
        <div className="name_image_container">
          <img src={userdata.avatar_url} alt="" />
          <h3>{userdata.name}</h3>
        </div>
      </div>
      <div className="githome_nav_details_container">
        <Githome_nav />
        <Githome_nav_details />
      </div>
    </div>
  );
};

export default Myspace;
