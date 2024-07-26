import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import Home from './Components/Home'
import { MouseFollower } from 'react-mouse-follower';
import Index from './Index';
import Service from './Components/Service';


const App = () => {

  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Home/>}>
        <Route index element={<Index/>}></Route>
       

      </Route>
    )
  );
  return(
    <>
<MouseFollower/>
  <RouterProvider router={router}/>
</>
  )

}

export default App
