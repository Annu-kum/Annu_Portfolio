import { Github, Linkedin, Mail, Twitter,Phone } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-[#0f172a] text-white py-12 border-t border-[#334155]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Annu Kumari</h2>
            <p className="text-gray-400">Junior Software Developer</p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a 
              href="https://github.com/Annu-kum" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400 transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/annu-kumari-2b888421b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:annuk5523@gmail.com"
              className="text-gray-400 hover:text-indigo-400 transition-colors"
            >
              <Mail size={20} />
            </a>
            <a 
              href="tel:9343667427"
              className="text-gray-400 hover:text-indigo-400 transition-colors"
            >
              <Phone size={20} />
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Annu Kumari. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-[#334155] text-center">
          <p className="text-gray-400 text-sm">
            Made by using React and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}