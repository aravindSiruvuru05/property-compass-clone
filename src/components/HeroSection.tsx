
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const HeroSection = () => {
  const navigate = useNavigate();
  const [searchLocation, setSearchLocation] = useState("");

  const handleSearch = () => {
    navigate("/properties");
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Find Your Perfect
            <span className="text-blue-600 block">Commercial Space</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Discover premium commercial real estate opportunities across the nation. 
            From retail spaces to office buildings, find the perfect property for your business.
          </p>
          
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Enter city, state, or ZIP"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="pl-10 h-12 text-lg"
                  />
                </div>
              </div>
              
              <Select defaultValue="for-lease">
                <SelectTrigger className="h-12">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="for-lease">For Lease</SelectItem>
                  <SelectItem value="for-sale">For Sale</SelectItem>
                  <SelectItem value="all">All Properties</SelectItem>
                </SelectContent>
              </Select>
              
              <Button onClick={handleSearch} className="h-12 bg-blue-600 hover:bg-blue-700 text-lg">
                <Search className="h-5 w-5 mr-2" />
                Search
              </Button>
            </div>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-600">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">10,000+</div>
              <div>Properties Listed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">500+</div>
              <div>Cities Covered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">50+</div>
              <div>States Nationwide</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
