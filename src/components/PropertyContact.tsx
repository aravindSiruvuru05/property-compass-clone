
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, User } from "lucide-react";
import { useState } from "react";

interface PropertyContactProps {
  property: any;
}

const PropertyContact = ({ property }: PropertyContactProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // Handle form submission
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Contact Agent</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
              <User className="h-8 w-8 text-gray-600" />
            </div>
            <h3 className="font-semibold text-lg">Sarah Johnson</h3>
            <p className="text-gray-600">Commercial Real Estate Specialist</p>
          </div>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-3 text-gray-400" />
              <span className="text-sm">(555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-3 text-gray-400" />
              <span className="text-sm">sarah.johnson@commercialhub.com</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </Button>
            <Button variant="outline" className="w-full">
              <Mail className="h-4 w-4 mr-2" />
              Send Email
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Request Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
            <Input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
            <Input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
            <Textarea
              placeholder="Message (optional)"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows={4}
            />
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quick Stats</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Property ID:</span>
              <span className="font-medium">{property.id}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Listed:</span>
              <span className="font-medium">2 days ago</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Views:</span>
              <span className="font-medium">124</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Inquiries:</span>
              <span className="font-medium">8</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PropertyContact;
