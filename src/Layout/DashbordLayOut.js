import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from './../Pages/Shared/Navbar/Navbar';

const DashbordLayOut = () => {
    return (
        <div>
        <Navbar></Navbar>
        <div className="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                <Link to='/dashboard'>MYAppomintedS</Link>
                <Link to='/dashboard/allusers'>All user</Link>
                <Link to='/dashboard/addDoctor'>Add Doctor</Link>
                <Link to='/dashboard/manageDoctor'>Manage Doctor</Link>

                </ul>

            </div>
        </div>
    </div>
    );
};

export default DashbordLayOut;