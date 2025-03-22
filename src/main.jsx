import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home.jsx';
import About from './Component/Header/About/About.jsx';
import Contact from './Component/Contact/Contact.jsx';
import User from './Component/Users/Users.jsx';
import Users from './Component/Users/Users.jsx';
import UserDetail from './Component/UserDetails/UserDetail.jsx';
import Photos from './Component/Photos/Photos.jsx';
import PhotoDetails from './Component/PhotoDetails/PhotoDetails.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>
//   },
//   {
//     path: "/about",
//     element: <div>This Is A About</div>
//   },
//   {
//     path: "/contact",
//     element: <div>contact ussss</div>
//   },
// ]);

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path:'about',
        element:<About></About>
      },
      {
        path:'user',
        element:<Users></Users>,
        loader: ()=>fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path:'user/:userId',
        element:<UserDetail></UserDetail>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
      },
      {
        path: 'countrys',
        element:<Photos></Photos>,
        loader: ()=>fetch('https://restcountries.com/v3.1/all')
      },
      {
        path: 'name/:nameId',
        element:<PhotoDetails></PhotoDetails>,
        loader: ({params}) => fetch(`https://restcountries.com/v3.1/name/${params.nameId}`)

        
      },
      {
        path:'contact',
        element:<Contact></Contact>
      },
      {
        path: '*',
        element: <div>44444440444444</div>
      },

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
