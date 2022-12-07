import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import { Link,aside} from "react-router-dom";
import { MdDashboard } from 'react-icons/md';
import { FaMandalorian } from 'react-icons/fa';
import { FaUserFriends } from 'react-icons/fa';
import { BsGraphUp } from 'react-icons/bs';
import { MdOutlineRateReview } from 'react-icons/md';

const SideBar = () => {
  return (
    <aside id="leftsidebar" className="sidebar">
      <div className="utf-dashboard-sidebar-item">
        <div className="utf-dashboard-sidebar-item-inner" data-simplebar>
          <div className="utf-dashboard-nav-container">
            {/* Responsive Navigation Trigger */}
            <Link to="#" className="utf-dashboard-responsive-trigger-item">
              <span className="hamburger utf-hamburger-collapse-item">
                <span className="utf-hamburger-box-item">
                  <span className="utf-hamburger-inner-item"></span>
                </span>
              </span>
              <span className="trigger-title">Dashboard Navigation Menu</span>
            </Link>
            {/* <!-- Navigation --> */}
            <div className="utf-dashboard-nav">
              <div className="utf-dashboard-nav-inner">
                <div className="clearfix"></div>
                <ul>
                  <li id="sidebarToggle01">
                    <Link className="nav-link navLinkPadding DisplayFlex" to="" data-bs-toggle="collapse" data-bs-target="#collapseLayouts1"
                    ><MdDashboard className="icons-1" />
                      
                      <span className="DisplayNoneBlock">Dashboard</span>
                      
                      </Link>
                  </li>
                  <li id="sidebarToggle02">
                    <Link to="/CurrentJobs" >
                      <FaUserFriends className="icons-1 " /> Current jobs
                      <span className="nav-tag">5</span>
                    </Link>
                  </li>
                  <li id="sidebarToggle03">
                    <Link to="/ManageJob">
                      <FaUserFriends className="icons-1" /> Manage Jobs
                    </Link>
                  </li>
                  <li id="sidebarToggle05">
                    <Link to="/AffiliateLink"
                    ><FaUserFriends className="icons-1" /> Affiliate link for Recruiter
                    </Link>
                  </li>
                  <li id="sidebarToggle06">
                    <Link to="/CreateTraining"
                    ><FaUserFriends className="icons-1" /> Create Training
                    </Link>
                  </li>
                  <li id="sidebarToggle07">
                    <Link to="/EBooks"
                    ><BsGraphUp className="icons-1" /> E Books
                    </Link>
                  </li>
                  <li id="sidebarToggle08">
                    <Link to="/Inquiry"
                    ><MdOutlineRateReview className="icons-1" /> Inquiry
                    </Link>
                  </li>
                  <li id="sidebarToggle04">
                    <Link to="/Resume"
                    ><FaMandalorian className="icons-1" /> Resume</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );

};

export default SideBar;