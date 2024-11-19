export default function Footer(){
  return (
    <footer className="bg-navy text-white">
    {/* Main Footer */}
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="font-garamond text-xl text-gold mb-4">Contact</h3>
          <div className="space-y-2">
            <p className="flex items-start">
              <svg className="w-5 h-5 mr-2 text-gold mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span className="flex-1">
                Vulcan Chambers, Gifford's Building
                <br />25 Vulcan Lane, Auckland
                <br />New Zealand
              </span>
            </p>
            <p className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <span>09 379 8330</span>
            </p>
            <p className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <a href="mailto:elizabeth@vulcanchambers.co.nz" 
                 className="hover:text-gold transition-colors break-all">
                elizabeth@vulcanchambers.co.nz
              </a>
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="font-garamond text-xl text-gold mb-4">Practice Areas</h3>
          <ul className="space-y-2">
            <li>
              <a href="/practiceareas" className="hover:text-gold transition-colors block py-1">
                Criminal Law
              </a>
            </li>
            <li>
                <a href="/practiceareas" className="hover:text-gold transition-colors block py-1">
                Civil Law
              </a>
            </li>
            <li>
              <a href="/practiceareas" className="hover:text-gold transition-colors block py-1">
                Education Law
              </a>
            </li>
            <li>
              <a href="/practiceareas" className="hover:text-gold transition-colors block py-1">
                Legal Aid
              </a>
            </li>
          </ul>
        </div>

        {/* Professional Links */}
        <div className="space-y-4">
          <h3 className="font-garamond text-xl text-gold mb-4">Professional</h3>
          <ul className="space-y-2">
            <li>
              <a href="http://www.vulcanchambers.co.nz/" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="hover:text-gold transition-colors block py-1">
                Vulcan Chambers
              </a>
            </li>
            <li>
              <a href="https://elizabethgrierson.com" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="hover:text-gold transition-colors block py-1">
                Personal Website
              </a>
            </li>
            <li>
              <a href="/publications" className="hover:text-gold transition-colors block py-1">
                Publications
              </a>
            </li>
          </ul>
        </div>

        
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-white/10">
      <div className="container mx-auto px-4 py-6">
        <p className="text-center text-sm text-grey-light">
          &copy; {new Date().getFullYear()} Dr. Elizabeth Grierson. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  )
}