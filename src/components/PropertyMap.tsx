
import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { mockProperties } from "@/data/mockProperties";

interface PropertyMapProps {
  selectedProperty: string | null;
  onPropertySelect: (id: string) => void;
}

const PropertyMap = ({ selectedProperty, onPropertySelect }: PropertyMapProps) => {
  // Mock map with property pins
  return (
    <Card className="h-[600px] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-sm">
            <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Interactive Map</h3>
            <p className="text-gray-600 text-sm mb-4">
              Map integration would show property locations with interactive pins
            </p>
            <div className="text-xs text-gray-500">
              Click on properties in the list to see them highlighted here
            </div>
          </div>
        </div>
        
        {/* Mock property pins */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-blue-600 rounded-full shadow-lg animate-pulse"></div>
        <div className="absolute top-32 right-24 w-3 h-3 bg-blue-600 rounded-full shadow-lg animate-pulse"></div>
        <div className="absolute bottom-32 left-32 w-3 h-3 bg-blue-600 rounded-full shadow-lg animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-blue-600 rounded-full shadow-lg animate-pulse"></div>
        
        {selectedProperty && (
          <div className="absolute top-24 left-24 w-4 h-4 bg-red-500 rounded-full shadow-lg ring-4 ring-red-200 animate-bounce"></div>
        )}
      </div>
    </Card>
  );
};

export default PropertyMap;
