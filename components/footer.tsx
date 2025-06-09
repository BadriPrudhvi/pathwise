import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#D1FAE5] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1: Logo + Mission */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Pathwise</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Helping curious minds learn better through AI-powered personalized learning journeys.
            </p>
          </div>

          {/* Column 2: About */}
          <div className="lg:col-span-1">
            <h3 className="text-gray-900 font-semibold mb-4">About</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Learning */}
          <div className="lg:col-span-1">
            <h3 className="text-gray-900 font-semibold mb-4">Learning</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/courses" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/learning-paths" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Learning Paths
                </Link>
              </li>
              <li>
                <Link href="/mentors" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Mentors
                </Link>
              </li>
              <li>
                <Link href="/certificates" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Certificates
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div className="lg:col-span-1">
            <h3 className="text-gray-900 font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/help" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/feedback" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Feedback
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Social Media */}
          <div className="lg:col-span-1">
            <h3 className="text-gray-900 font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link 
                href="https://facebook.com/pathwise" 
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link 
                href="https://twitter.com/pathwise" 
                className="text-gray-600 hover:text-blue-400 transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link 
                href="https://instagram.com/pathwise" 
                className="text-gray-600 hover:text-pink-600 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link 
                href="https://linkedin.com/company/pathwise" 
                className="text-gray-600 hover:text-blue-700 transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link 
                href="https://youtube.com/pathwise" 
                className="text-gray-600 hover:text-red-600 transition-colors"
                aria-label="Subscribe to our YouTube channel"
              >
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
            <div className="mt-6">
              <p className="text-gray-600 text-sm mb-2">Subscribe to our newsletter</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-r-md hover:bg-green-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with copyright and legal links */}
        <div className="mt-12 pt-8 border-t border-green-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Pathwise. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 