import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-inear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                SC
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">SkillCoin</h1>
                <p className="text-xs text-gray-500">Expert Marketplace</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-2 bg-gray-50 rounded-lg px-4 py-2 flex-1 max-w-md">
              <input type="text" placeholder="Search for any service or expert..."
                className="bg-transparent outline-none flex-1 text-sm" />
              <select className="bg-transparent outline-none text-sm text-gray-600">
                <option>All Categories</option>
                <option>Education</option>
                <option>Health</option>
                <option>Finance</option>
              </select>
              <button className="bg-blue-600 text-white p-2 rounded-lg">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <button className="text-gray-700 hover:text-blue-600 hidden md:block">Find Experts</button>
            <button className="text-gray-700 hover:text-blue-600 hidden md:block">Become Expert</button>
            <div className="flex items-center space-x-2 bg-yellow-100 px-3 py-1 rounded-full">
              <span className="text-yellow-600 font-bold">💰</span>
              <span className="font-semibold text-gray-900">0</span>
            </div>
            <button 
              className="px-6 py-2 bg-linear-to-br from-purple-500 to-blue-500 rounded-full text-white font-bold cursor-pointer hover:opacity-90 transition"
            >
              Sign In / Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
