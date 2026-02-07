import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                SC
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">SkillCoin</h3>
                <p className="text-xs text-gray-400">Expert Marketplace</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">Connect with verified experts worldwide. Share your expertise and earn while helping others achieve their goals.</p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-400 transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">For Clients</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Find Experts</a></li>
              <li><a href="#" className="hover:text-white transition">Browse Categories</a></li>
              <li><a href="#" className="hover:text-white transition">How It Works</a></li>
              <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition">Success Stories</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">For Experts</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Become an Expert</a></li>
              <li><a href="#" className="hover:text-white transition">Expert Resources</a></li>
              <li><a href="#" className="hover:text-white transition">Pricing Calculator</a></li>
              <li><a href="#" className="hover:text-white transition">Withdrawal Guide</a></li>
              <li><a href="#" className="hover:text-white transition">Expert Community</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Press Kit</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="text-sm text-gray-400">
              © 2026 SkillCoin. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 text-sm md:justify-end">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
              <a href="#" className="hover:text-white transition">Cookie Policy</a>
              <a href="#" className="hover:text-white transition">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
