import React from 'react';
import { useLocation } from "react-router-dom";
import "../App.css";
import {SidebarData} from './SidebarData';
import {Link} from "react-router-dom";
 
function Sidebar() {
  let location = useLocation()
  return (
    <div className='Sidebar'>
    <ul className="SidebarList">
        {SidebarData.map((val, key) => {
           return (
            <li
             key={key}
             className="row"
             Link to = {`${val.url}`}
             id={location.pathname === val.url ? "active" : ""}
             onClick={() => {
                location.pathname = val.url
             }}
             >
              <div id="icon">{val.icon}</div> 
 
              <div id="title">{val.title}</div> 
 
             </li>
           )
        })}
    </ul>
    </div>
  )
}
 
export default Sidebar