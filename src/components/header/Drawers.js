import { Drawer } from "antd";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./style.css";
const Drawers = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <GiHamburgerMenu onClick={showDrawer} className="icon" />
      <Drawer
        title="AUSSIEMITE"
        placement="left"
        width={250}
        onClose={onClose}
        open={open}
      >
        <ul className="nav-list">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Products</li>
          <li>Newsletter / Blog</li>
        </ul>
      </Drawer>
    </>
  );
};
export default Drawers;
