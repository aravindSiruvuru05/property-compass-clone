
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building2, User, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">CommercialHub</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/properties" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Browse Properties
            </Link>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              For Lease
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              For Sale
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Market Data
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              List Property
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
