import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import RestaurantCard from './components/RestaurantCard'
import Body from './components/Body'

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
      <Body />
    </div>
  )
}
function App() {
  return (
    <AppLayout />
  )
}

export default App
