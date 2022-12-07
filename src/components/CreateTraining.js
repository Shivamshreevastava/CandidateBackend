import React from "react";
import SideBar from "./SideBar";
import Footer from "./Footer";
import CreateTraningDataTable from "../datatables/CreateTraningDataTable";


const CreateTraining = () => {
    return (
            <div class="utf-dashboard-content-container-aera" data-simplebar>
                <div id="dashboard-titlebar" class="utf-dashboard-headline-item">
                    <div class="row">
                        <div class="col-xl-12 z-index-1">
                            <h3>Create Training</h3>
                            <nav id="breadcrumbs">
                                <ul>
                                    <li><a href="index.php">Home</a></li>
                                    <li><a href="dashboard.php">Dashboard</a></li>
                                    <li>Create Training</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="utf-dashboard-content-inner-aera margin-bottom-115">
                    <div class="row">
                        <div class="col-xl-12">
                            <CreateTraningDataTable />
                            <div class="clearfix"></div>
                        </div>
                    </div>
                   
                </div>
                <Footer />
            </div>
    )
}

export default CreateTraining;