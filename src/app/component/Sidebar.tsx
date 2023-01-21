import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PeopleIcon from '@mui/icons-material/People';
import ReportIcon from '@mui/icons-material/Report';


export const Sidebar = [
    { 
       title:"Dashbord",
       icon:<DashboardIcon />,
       link:"/dashbord"
    },
    { 
       title:"Users",
       icon:<PeopleIcon />,
       link:"/users"
    },
    { 
       title:"Notifications",
       icon:<NotificationsActiveIcon />,
       link:"/notifications"
    },
    { 
       title:"Reports",
       icon:<ReportIcon />,
       link:"/reports"
    }
]

