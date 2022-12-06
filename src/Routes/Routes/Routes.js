import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";

import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyAppointment from "../../Pages/MyAppointment/MyAppointment";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashbordLayOut from './../../Layout/DashbordLayOut';
import AllUsres from'../../Pages/Dashboard/Dashboard/Allusers/AllUsres'
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor";
import ManageDoctor from "../../Pages/Dashboard/MansgeDoctor/ManageDoctor";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import DisplyError from "../../Pages/Shared/DisplyError/DisplyError";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        errorElement:<DisplyError/>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashbordLayOut></DashbordLayOut></PrivateRoute>,
       errorElement:<DisplyError></DisplyError>,
       
        children:[
            {
                path:'/dashboard',
                element:<MyAppointment></MyAppointment>,
                
            },
            {
                path:'/dashboard/allusers',
                element:<AllUsres></AllUsres>
                
            },
          
            {
                path:'/dashboard/addDoctor',
                element:<AddDoctor></AddDoctor>
                
            },
          
            {
                path:'/dashboard//manageDoctor',
                element:<ManageDoctor></ManageDoctor>
                
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({params}) => fetch(`https://doctors-protal-server-imishat.vercel.app/bookings/${params.id}`)
            }, 
          
        ]
    }
])

export default router;