import { useContext } from "react";
import { GitHomeContext } from "../App";

const Navbar = () => {
  const { userdata } = useContext(GitHomeContext);
  return (
    <div className="nav_title">
      <h1>GitHome</h1>
      {userdata.length != 0 && <h3>Logout</h3>}
    </div>
  );
};

export default Navbar;
