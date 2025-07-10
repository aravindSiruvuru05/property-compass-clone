
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Building, Square, Calendar, Car, Wifi } from "lucide-react";

interface PropertyInfoProps {
  property: any;
}

const PropertyInfo = ({ property }: PropertyInfoProps) => {
  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Badge className="bg-blue-600">{property.type === 'lease' ? 'For Lease' : 'For Sale'}</Badge>
          <Badge variant="outline">{property.propertyType}</Badge>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="h-5 w-5 mr-2" />
          <span>{property.location}</span>
        </div>
        <div className="text-3xl font-bold text-blue-600">{property.price}</div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Property Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <Square className="h-5 w-5 mr-2 text-gray-400" />
              <div>
                <div className="text-sm text-gray-600">Size</div>
                <div className="font-semibold">{property.size}</div>
              </div>
            </div>
            <div className="flex items-center">
              <Building className="h-5 w-5 mr-2 text-gray-400" />
              <div>
                <div className="text-sm text-gray-600">Type</div>
                <div className="font-semibold">{property.propertyType}</div>
              </div>
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-gray-400" />
              <div>
                <div className="text-sm text-gray-600">Available</div>
                <div className="font-semibold">Immediately</div>
              </div>
            </div>
            <div className="flex items-center">
              <Car className="h-5 w-5 mr-2 text-gray-400" />
              <div>
                <div className="text-sm text-gray-600">Parking</div>
                <div className="font-semibold">20 spaces</div>
              </div>
            </div>
            <div className="flex items-center">
              <Wifi className="h-5 w-5 mr-2 text-gray-400" />
              <div>
                <div className="text-sm text-gray-600">Internet</div>
                <div className="font-semibold">Fiber ready</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Description</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed">
            {property.description || `This exceptional ${property.propertyType.toLowerCase()} space offers modern amenities and prime location advantages. Perfect for businesses looking to establish a professional presence with excellent accessibility and visibility. The property features contemporary design elements, flexible floor plans, and state-of-the-art infrastructure to support your business operations.`}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Features & Amenities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-2">
            {[
              "Air Conditioning", "High-Speed Internet", "Parking Available", 
              "Security System", "Conference Rooms", "Kitchen Facilities",
              "Wheelchair Accessible", "Elevator Access", "Natural Lighting",
              "Modern Fixtures", "Flexible Layout", "Professional Environment"
            ].map((feature, index) => (
              <div key={index} className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                <span className="text-sm text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PropertyInfo;
