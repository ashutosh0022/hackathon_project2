import React from "react";
import ReactDOM from "react-dom/client";

// import App from "./App";
import "./index.css";

import Updateevent from "./Components/DASHBOARD/9_Update_event/Update"
import Home from "./Components/2_Home/home";
import Services from "./Components/5_Services/services";
import Testimonials from "./Components/6_Testimonials/testimonials";
import Contact from "./Components/7_Contact/contact";
import Error from "./Components/error-page/error";
import Signup from "./Components/AUTHENTICATION/Signup/signup";
import Login from "./Components/AUTHENTICATION/Login/login";
import Navbar from "./Components/1_Nav/nav";
import Footer from "./Components/4_Footer/footer";
import DashNavbar from "./Components/DASHBOARD/1_Dash_Navbar/dash_navbar";
import Hostevent from "./Components/DASHBOARD/2_Host_Events/host_event";
import Myevents from "./Components/DASHBOARD/3_My_Events/myevents";
import Getevents from "./Components/3_Slider_Events/getevent";
import Allevents from "./Components/DASHBOARD/4_All_events/all_events";
import Showevent from "./Components/DASHBOARD/5_Show_event/showevent";
import Participated from "./Components/DASHBOARD/6_Participated/Participated";
import Participants from "./Components/DASHBOARD/7_Participants/Participants";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Ticket from "./Components/DASHBOARD/8_Ticket/Ticket"
// import Loader from "./Components/loader/loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        {" "}
        <Navbar />
        <Footer />
      </>
    ),
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: (
          <>
            <Home />
            <Getevents />
          </>
        ),
      },
      // {
      //   path: "/showallevents",
      //   element: <Allevents />,
      // },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/testimonials",
        element: <Testimonials />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/signup",
    element: (
      <>
        <Navbar />
        <Signup />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Navbar />
        <Login />
      </>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <>
        <DashNavbar />
      </>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Allevents />,
        // children: [
        //   {
        //     path: "showevent/:id",
        //     element: <Showevent />,
        //   },
        // ],
      },
      {
        path: "/dashboard/myevents",
        element: <Myevents />,
      },
      {
        path: "/dashboard/hostevent",
        element: <Hostevent />,
      },
      {
        path: "/dashboard/partcipatedevents",
        element: <Participated />,
      },
      {
        path: "/dashboard/updateevent/:uid",
        element: <Updateevent />,
      },
      {
        path: "/dashboard/ticket/:eid",
        element: <Ticket />,
      },
      {
        path: "/dashboard/participants/:id",
        element: <Participants />,
      },
      {
        path: "showevent/:id",
        element: <Showevent />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // </React.StrictMode>
);
