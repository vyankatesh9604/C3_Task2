import React from 'react'
import profile from '../../assets/profile.jpg'
import {MdNotificationsNone} from 'react-icons/md'


export default function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light mt-3 " style={{height:'20px',marginBottom:20,marginTop:10}}>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
              <li className="nav-item mt-2 mr-5">
                  <MdNotificationsNone />
              </li>
              <li className="nav-item mr-4">
                  <li activeClassName="menu_active" exact className="nav-link">G Vyankatesh</li>
              </li>
              <li className="nav-item dropdown ">
                  <a class="nav-link dropdown-toggle  mr-5"  id="navbarDropdownMenuLink" data-display="static" aria-haspopup="true" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img src={profile } width="40" height="40" class="rounded-circle"/>
                  </a>
                  <div class="dropdown-menu w-25 " aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item " href="#">Edit Profile</a>
                    <a class="dropdown-item" href="#">Log Out</a>
                  </div>
              </li>
              
          </ul>
      </div>
  </nav>

    )
}
