import React from 'react'
import "./App.css"
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './routes/Home'
import Animal from './routes/Animal'
import Apiary from './routes/Apiary'
import Crop from './routes/Crop'
import About from './routes/About'



const Layout =()=>{
    return(
        <div>
         <Nav/>
         <Outlet/>
         <Footer/>
        </div>
    )
}
const routes = createBrowserRouter([
    {
        path:"/", element:<Layout/>,
        children:[
            {path:"/",element:<Home/>},
            {path:"/Animal", element:<Animal/>},
            {path:"/Apiary", element:<Apiary/>},
            {path:"/Crop", element:<Crop/>},
            {path:"/About", element:<About/>}
        ]
    }
])


function App() {
  return (
    <div>
    <RouterProvider router={routes}/>
    </div>
  )
}

export default App
