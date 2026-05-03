import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <div className="space-bg min-h-screen text-white relative">

      {/* Glow effects */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600 opacity-20 blur-[150px] top-0 left-0"></div>
      <div className="absolute w-[400px] h-[400px] bg-blue-500 opacity-20 blur-[120px] bottom-0 right-0"></div>
      <Header />
      <Outlet />
      <Footer />
    </div>
    </div>
  )
}
