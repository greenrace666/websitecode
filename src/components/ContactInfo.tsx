import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const ContactInfo: React.FC = () => (
  <div>
    <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
    <div className="space-y-4">
      <div className="flex items-center">
        <Mail className="w-6 h-6 text-blue-600 mr-3" />
        <span>126010091@sastra.ac.in</span>
      </div>
      <div className="flex items-center">
        <MapPin className="w-6 h-6 text-blue-600 mr-3" />
        <span>SASTRA Deemed University, Thanjavur</span>
      </div>
    </div>
    <div className="mt-8">
      <h4 className="font-semibold mb-2">Connect</h4>
      <p className="text-gray-600">
        Drop a Hi 👋
      </p>
    </div>
  </div>
);

export default ContactInfo;