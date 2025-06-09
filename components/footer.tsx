import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#D1FAE5] py-12 sm:py-16 px-4 sm:px-6 lg:px-8" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Column 1: Logo + Mission */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm" aria-hidden="true">P</span>
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
            <nav aria-label="About navigation">
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="/about" 
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/blog" 
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/careers" 
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/press" 
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded"
                  >
                    Press
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Column 3: Learning */}
          <div className="lg:col-span-1">
            <h3 className="text-gray-900 font-semibold mb-4">Learning</h3>
            <nav aria-label="Learning navigation">
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="/courses" 
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded"
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/learning-paths" 
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded"
                  >
                    Learning Paths
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/mentors" 
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded"
                  >
                    Mentors
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/certificates" 
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded"
                  >
                    Certificates
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Column 4: Support */}
          <div className="lg:col-span-1">
            <h3 className="text-gray-900 font-semibold mb-4">Support</h3>
            <nav aria-label="Support navigation">
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="/help" 
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact" 
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/feedback" 
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded"
                  >
                    Feedback
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/community" 
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded"
                  >
                    Community
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Column 5: Social Media */}
          <div className="lg:col-span-1">
            <h3 className="text-gray-900 font-semibold mb-4">Connect</h3>
            <div className="flex flex-wrap gap-4 mb-6">
              <Link 
                href="https://facebook.com/pathwise" 
                className="text-gray-600 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded"
                aria-label="Follow Pathwise on Facebook"
              >
                <Facebook className="w-5 h-5" aria-hidden="true" />
              </Link>
              <Link 
                href="https://twitter.com/pathwise" 
                className="text-gray-600 hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded"
                aria-label="Follow Pathwise on Twitter"
              >
                <Twitter className="w-5 h-5" aria-hidden="true" />
              </Link>
              <Link 
                href="https://instagram.com/pathwise" 
                className="text-gray-600 hover:text-pink-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded"
                aria-label="Follow Pathwise on Instagram"
              >
                <Instagram className="w-5 h-5" aria-hidden="true" />
              </Link>
              <Link 
                href="https://linkedin.com/company/pathwise" 
                className="text-gray-600 hover:text-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded"
                aria-label="Follow Pathwise on LinkedIn"
              >
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </Link>
              <Link 
                href="https://youtube.com/pathwise" 
                className="text-gray-600 hover:text-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded"
                aria-label="Subscribe to Pathwise YouTube channel"
              >
                <Youtube className="w-5 h-5" aria-hidden="true" />
              </Link>
            </div>
            <div>
              <p className="text-gray-600 text-sm mb-2">Subscribe to our newsletter</p>
              <form className="flex" aria-label="Newsletter subscription">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address for newsletter subscription
                </label>
                <input 
                  id="newsletter-email"
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  aria-required="true"
                />
                <button 
                  type="submit"
                  className="px-3 sm:px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-r-md hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  aria-label="Subscribe to newsletter"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom section with copyright and legal links */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-green-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Pathwise. All rights reserved.
            </p>
            <nav aria-label="Legal navigation">
              <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
                <Link 
                  href="/privacy" 
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded"
                >
                  Privacy Policy
                </Link>
                <Link 
                  href="/terms" 
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded"
                >
                  Terms of Service
                </Link>
                <Link 
                  href="/cookies" 
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded"
                >
                  Cookie Policy
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
} 