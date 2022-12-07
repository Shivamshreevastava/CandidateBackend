import React from 'react';
import SideBar from './SideBar';
import Footer from './Footer';
import Current_jobs_Datatable from '../datatables/Current_jobs_Datatable';

const CurrentJobs = () => {
    return (
            <div className="utf-dashboard-content-container-aera" data-simplebar>
                <div id="dashboard-titlebar" className="utf-dashboard-headline-item">
                    <div className="row">
                        <div className="col-xl-12 z-index-1">
                            <h3>  Applies</h3>
                            <nav id="breadcrumbs">
                                <ul>
                                    <li><a href="index.php">Home</a></li>
                                    <li><a href="dashboard.php">Dashboard</a></li>
                                    <li>Applies</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            
                <div class="utf-dashboard-content-inner-aera margin-bottom-115">
                    <div class="row">
                        <div class="col-xl-12">
                            
                                <Current_jobs_Datatable />
                    
                    </div>
                </div>
            </div>
            <Footer/>
        </div>  
    )
}


export default CurrentJobs;