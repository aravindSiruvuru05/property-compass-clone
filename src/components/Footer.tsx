
import { Building2, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">CommercialHub</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner in commercial real estate. Find, lease, and invest in premium commercial properties nationwide.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Properties</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">For Lease</a></li>
              <li><a href="#" className="hover:text-white">For Sale</a></li>
              <li><a href="#" className="hover:text-white">Office Spaces</a></li>
              <li><a href="#" className="hover:text-white">Retail Properties</a></li>
              <li><a href="#" className="hover:text-white">Industrial</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Property Management</a></li>
              <li><a href="#" className="hover:text-white">Investment Analysis</a></li>
              <li><a href="#" className="hover:text-white">Market Research</a></li>
              <li><a href="#" className="hover:text-white">Consulting</a></li>
              <li><a href="#" className="hover:text-white">Valuation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>1234 Business Ave</li>
              <li>Suite 100</li>
              <li>Dallas, TX 75201</li>
              <li className="pt-2">(555) 123-4567</li>
              <li>info@commercialhub.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
          <p>&copy; 2024 CommercialHub. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
