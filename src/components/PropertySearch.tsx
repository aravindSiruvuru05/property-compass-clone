
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";

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
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="md:col-span-2">
          <Input
            placeholder="Location (City, State, ZIP)"
            value={filters.location}
            onChange={(e) => onFiltersChange({...filters, location: e.target.value})}
            className="h-12"
          />
        </div>
        
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
        
        <Button className="h-12 bg-blue-600 hover:bg-blue-700">
          <Search className="h-5 w-5 mr-2" />
          Search
        </Button>
      </div>
    </div>
  );
};

export default PropertySearch;
