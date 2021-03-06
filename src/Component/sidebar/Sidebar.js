import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList } from "react-icons/fa";
import { FiHome,  FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { MdForum } from "react-icons/md";
import { ImBook } from "react-icons/im";
import {GrAchievement} from 'react-icons/gr'


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./sidebar.css";


const Sidebar = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header" >
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              <p>{menuCollapse ? "Logo" : " Logo"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="circle" className="mt-5">
              <MenuItem active={true} icon={<FiHome />} style={{fontSize:'15px'}}>
                Home
              </MenuItem>
              <MenuItem icon={<FaList />} style={{fontSize:'15px'}} >Dashboard</MenuItem>
              <MenuItem icon={<ImBook />} style={{fontSize:'15px'}}>My Courses</MenuItem>
              <MenuItem icon={<GrAchievement  />} style={{fontSize:'15px'}}>Achievements</MenuItem>
              <MenuItem icon={<MdForum />} style={{fontSize:'15px'}}>Forum</MenuItem>
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;