import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import PromoBanner from '../components/PromoBanner'

const MainLayout = () => {
  return (
    <div>
      <PromoBanner/>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout
