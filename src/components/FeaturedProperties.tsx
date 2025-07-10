
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Building, Square } from "lucide-react";
import { Link } from "react-router-dom";
import { mockProperties } from "@/data/mockProperties";

const FeaturedProperties = () => {
  const featuredProperties = mockProperties.slice(0, 6);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Properties</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium commercial properties available now
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <Link key={property.id} to={`/property/${property.id}`}>
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={property.images[0]}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-600">
                    {property.type === 'lease' ? 'For Lease' : 'For Sale'}
                  </Badge>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg">
                    <span className="font-bold text-blue-600">{property.price}</span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {property.title}
                  </h3>
                  
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center">
                      <Square className="h-4 w-4 mr-1" />
                      <span>{property.size}</span>
                    </div>
                    <div className="flex items-center">
                      <Building className="h-4 w-4 mr-1" />
                      <span>{property.propertyType}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/properties">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              View All Properties
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
