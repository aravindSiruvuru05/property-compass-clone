
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Building, Square } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { mockProperties } from "@/data/mockProperties";

interface PropertyGridProps {
  selectedProperty: string | null;
  onPropertySelect: (id: string) => void;
  filters: any;
}

const PropertyGrid = ({ selectedProperty, onPropertySelect, filters }: PropertyGridProps) => {
  const navigate = useNavigate();

  const handlePropertyClick = () => {
    navigate('/property/11');
  };

  return (
    <div className="h-[600px] overflow-y-auto space-y-4 pr-2">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Properties in {filters.location}</h2>
        <span className="text-sm text-gray-600">{mockProperties.length} properties found</span>
      </div>
      
      {mockProperties.map((property) => (
        <Card 
          key={property.id}
          className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
            selectedProperty === property.id ? 'ring-2 ring-blue-500 shadow-lg' : ''
          }`}
          onClick={() => {
            onPropertySelect(property.id);
            handlePropertyClick();
          }}
        >
          <CardContent className="p-0">
            <div className="flex">
              <div className="relative w-32 h-24 flex-shrink-0">
                <img
                  src={property.images[0]}
                  alt={property.title}
                  className="w-full h-full object-cover rounded-l-lg"
                />
                <Badge className="absolute top-2 left-2 bg-blue-600 text-xs">
                  {property.type === 'lease' ? 'Lease' : 'Sale'}
                </Badge>
              </div>
              
              <div className="flex-1 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-sm line-clamp-1">{property.title}</h3>
                  <span className="font-bold text-blue-600 text-sm">{property.price}</span>
                </div>
                
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="h-3 w-3 mr-1" />
                  <span className="text-xs">{property.location}</span>
                </div>
                
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <div className="flex items-center">
                    <Square className="h-3 w-3 mr-1" />
                    <span>{property.size}</span>
                  </div>
                  <div className="flex items-center">
                    <Building className="h-3 w-3 mr-1" />
                    <span>{property.propertyType}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PropertyGrid;
