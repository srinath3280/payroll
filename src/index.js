import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './views/home/home';
import Dashboard from './views/dashboard/dashboard';
import Approvals from './views/approvals/approvals';
import ApprovalTable from './views/approvals/approved/approved';
import PendingTable from './views/approvals/pending/pending';
import RejectedTable from './views/approvals/rejected/rejected';
import Training from './views/training/training';
import OngoingCourses from './views/training/ongoing/ongoing';
import CompletedCourses from './views/training/completedCourses/completedCourses';
import Fuel from './views/fuel/fuel';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        children: [
          {
            path: '/dashboard',
            element: <Dashboard></Dashboard>
          },
          {
            path:'/approvals',
            element:<Approvals></Approvals>,
            children:[
              {
                index: true,
                element:<ApprovalTable></ApprovalTable>
              },
              {
                path:'/approvals/approved',
                element:<ApprovalTable></ApprovalTable>
              },
              {
                path:'/approvals/pending',
                element:<PendingTable></PendingTable>
              },
              {
                path:'/approvals/rejected',
                element:<RejectedTable></RejectedTable>
              }
            ]
          },
          {
            path:'/training',
            element:<Training></Training>,
            children:[
              {
                index: true,
                element:<OngoingCourses></OngoingCourses>
              },
              {
                path:'/training/ongoing',
                element:<OngoingCourses></OngoingCourses>
              },
              {
                path:'/training/completed',
                element:<CompletedCourses></CompletedCourses>
              }
            ]
          },
          {
            path:'/fuel-expenses',
            element:<Fuel></Fuel>
          }
        ]

      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
