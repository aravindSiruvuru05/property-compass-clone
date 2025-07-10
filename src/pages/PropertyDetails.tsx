
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import PropertyImageGallery from "@/components/PropertyImageGallery";
import PropertyInfo from "@/components/PropertyInfo";
import PropertyContact from "@/components/PropertyContact";
import Footer from "@/components/Footer";
import { mockProperties } from "@/data/mockProperties";

const PropertyDetails = () => {
  const { id } = useParams();
  const property = mockProperties.find(p => p.id === id);

  if (!property) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-muted-foreground">Property not found</h1>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <PropertyImageGallery images={property.images} />
            <PropertyInfo property={property} />
          </div>
          <div>
            <PropertyContact property={property} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PropertyDetails;
