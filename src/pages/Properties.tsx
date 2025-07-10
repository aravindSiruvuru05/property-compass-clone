
import Header from "@/components/Header";
import PropertySearch from "@/components/PropertySearch";
import PropertyMap from "@/components/PropertyMap";
import PropertyGrid from "@/components/PropertyGrid";
import Footer from "@/components/Footer";
import { useState } from "react";

const Properties = () => {
  const [selectedProperty, setSelectedProperty] = useState<string | null>(null);
  const [searchFilters, setSearchFilters] = useState({
    location: "Denton, TX",
    propertyType: "for-lease",
    priceRange: "",
    size: ""
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8 md:py-8">
        <PropertySearch filters={searchFilters} onFiltersChange={setSearchFilters} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 md:mt-8">
          <PropertyGrid 
            selectedProperty={selectedProperty}
            onPropertySelect={setSelectedProperty}
            filters={searchFilters}
          />
          <PropertyMap 
            selectedProperty={selectedProperty}
            onPropertySelect={setSelectedProperty}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Properties;
