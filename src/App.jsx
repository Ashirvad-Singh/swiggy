import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import RestaurantCard from './components/RestaurantCard'
import Body from './components/Body'
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'

/**
 * Header
 * - Logo
 * - Nav Item
 * body
 * - Search Bar
 * -RestaurantContainer
 *   - RestaurantCard
 * footer
 *  -Copyright
 *  - Links
 *  - Address
 *  -Contact
 */






const AppLayout = () => {
  return (
    <div className='App'>
      <Header />
      
      <Outlet />

    </div>
  )
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
 path: "/",
    element: <Body />,
      },
       {
   path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  }
    ],
    errorElement: <Error />
  },
 
])
function App() {
  return (
    <>
    <RouterProvider router={appRouter} />
    
    </>
    
  )
}

export default App
