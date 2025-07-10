
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Search, Filter } from "lucide-react";
import { useState, useEffect } from "react";

interface PropertySearchProps {
  filters: {
    location: string;
    propertyType: string;
    priceRange: string;
    size: string;
  };
  onFiltersChange: (filters: any) => void;
}

const PropertySearch = ({ filters, onFiltersChange }: PropertySearchProps) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsMinimized(scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const FilterControls = () => (
    <>
      <Select value={filters.propertyType} onValueChange={(value) => onFiltersChange({...filters, propertyType: value})}>
        <SelectTrigger className="h-12">
          <SelectValue placeholder="Property Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="for-lease">For Lease</SelectItem>
          <SelectItem value="for-sale">For Sale</SelectItem>
          <SelectItem value="office">Office</SelectItem>
          <SelectItem value="retail">Retail</SelectItem>
          <SelectItem value="warehouse">Warehouse</SelectItem>
          <SelectItem value="industrial">Industrial</SelectItem>
        </SelectContent>
      </Select>
      
      <Select value={filters.priceRange} onValueChange={(value) => onFiltersChange({...filters, priceRange: value})}>
        <SelectTrigger className="h-12">
          <SelectValue placeholder="Price Range" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="0-1000">$0 - $1,000</SelectItem>
          <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
          <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
          <SelectItem value="5000+">$5,000+</SelectItem>
        </SelectContent>
      </Select>
    </>
  );

  return (
    <>
      {/* Desktop Search Bar */}
      <div className="hidden md:block bg-white rounded-lg shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="md:col-span-2">
            <Input
              placeholder="Location (City, State, ZIP)"
              value={filters.location}
              onChange={(e) => onFiltersChange({...filters, location: e.target.value})}
              className="h-12"
            />
          </div>
          
          <FilterControls />
          
          <Button className="h-12 bg-blue-600 hover:bg-blue-700">
            <Search className="h-5 w-5 mr-2" />
            Search
          </Button>
        </div>
      </div>

      {/* Mobile Search Bar - Fixed and Minimizable */}
      <div className={`md:hidden fixed top-0 left-0 right-0 z-50 bg-white shadow-lg transition-all duration-300 ${
        isMinimized ? 'py-2' : 'py-4'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex gap-2">
            <div className="flex-1">
              <Input
                placeholder="Location (City, State, ZIP)"
                value={filters.location}
                onChange={(e) => onFiltersChange({...filters, location: e.target.value})}
                className={`transition-all duration-300 ${isMinimized ? 'h-10' : 'h-12'}`}
              />
            </div>
            <Button 
              size={isMinimized ? "sm" : "default"}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Search className={`${isMinimized ? 'h-4 w-4' : 'h-5 w-5'}`} />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Filters Dialog */}
      <div className="md:hidden">
        <Dialog open={isFiltersOpen} onOpenChange={setIsFiltersOpen}>
          <DialogTrigger asChild>
            <Button 
              className="fixed bottom-6 right-6 z-50 rounded-full h-14 w-14 bg-blue-600 hover:bg-blue-700 shadow-lg"
              size="icon"
            >
              <Filter className="h-6 w-6" />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-sm">
            <DialogHeader>
              <DialogTitle>Filters</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <FilterControls />
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700"
                onClick={() => setIsFiltersOpen(false)}
              >
                Apply Filters
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Mobile Spacer */}
      <div className={`md:hidden transition-all duration-300 ${isMinimized ? 'h-14' : 'h-20'}`} />
    </>
  );
};

export default PropertySearch;
