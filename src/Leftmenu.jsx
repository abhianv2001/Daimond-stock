import React, { useState } from 'react'
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import PlaylistAddRoundedIcon from '@mui/icons-material/PlaylistAddRounded';
import { Link } from 'react-router-dom';
import Loader from './Loader';

function Leftmenu() {
    const [loading, setloading] = useState(true);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    setTimeout(() => {
        setloading(false);
    }, 1000);


    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <>
            <button
                type="button"
                onClick={toggleSidebar}
                className="main-headerflex items-center bg-[#fff] justify-between w-full p-5 font-medium text-left text-gray-500 sticky z-[1] top-0 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px "
            >
                <span className="sr-only">Toggle Sidebar</span>
                <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                </svg>
            </button>

            <aside id="default-sidebar"
                className={`${isSidebarOpen ? 'show' : ''
                    }`}>
                <div class="menu h-full px-3 py-4 overflow-y-auto bg-[#1d4c70] relative shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                    <div className="logo">
                        <img src="assets/image/logo1237.png" alt="" />
                    </div>
                    <ul>
                        <li>
                            {loading ? (
                                <Loader />
                            ) : (
                                <Link to="/" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <DashboardCustomizeIcon />
                                    <span class="ml-3">Dashboard</span>
                                </Link>
                            )}
                        </li>
                        <li>
                            {loading ? (
                                <Loader />
                            ) : (
                                <Link to="/daimondlist" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <PlaylistAddRoundedIcon />
                                    <span class="ml-3">Daimond List</span>
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>

            </aside >

        </>
    )
}

export default Leftmenu;
