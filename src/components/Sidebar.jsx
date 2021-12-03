import logo_DH from '../assets/images/logo-DH.png'
import React from 'react'
import {Link} from "react-router-dom";

export default function Sidebar() {
    return (
        <>
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={logo_DH} alt="Digital House" />
                    </div>
                </Link>

                <hr className="sidebar-divider my-0" />

                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - DH movies</span></Link>
                </li>


                <hr className="sidebar-divider" />


                <div className="sidebar-heading">Actions</div>
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/genres">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Pages</span>
                    </Link>
                </li>


                <li className="nav-item">
                    <Link className="nav-link" to="/lastmovie">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Charts</span></Link>
                </li>


                <li className="nav-item">
                    <Link className="nav-link" to="/movies">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tables</span></Link>
                </li>


                <hr className="sidebar-divider d-none d-md-block" />
            </ul>
        </>
    )
}
