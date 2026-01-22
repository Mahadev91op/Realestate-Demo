import Image from 'next/image';
import { Bed, Bath, Square, Heart } from 'lucide-react';

export default function PropertyCard({ property }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100 overflow-hidden group">
      <div className="relative h-64 w-full">
        <Image 
          src={property.image} 
          alt={property.title} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-md">
          For Sale
        </div>
        <button className="absolute top-4 right-4 bg-white/80 p-2 rounded-full hover:bg-white text-gray-600 hover:text-red-500 transition-colors shadow-sm">
            <Heart size={18} />
        </button>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
            <div>
                <h3 className="text-2xl font-bold text-blue-600">{property.price}</h3>
                <h4 className="text-lg font-semibold text-gray-800 line-clamp-1">{property.title}</h4>
            </div>
        </div>
        
        <p className="text-gray-500 text-sm mb-4 flex items-center gap-1">
            {property.address}
        </p>
        
        <div className="flex justify-between border-t border-gray-100 pt-4 text-gray-500">
          <div className="flex items-center gap-2">
            <Bed size={18} className="text-blue-500"/>
            <span className="text-sm font-medium">{property.beds} Beds</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath size={18} className="text-blue-500"/>
            <span className="text-sm font-medium">{property.baths} Baths</span>
          </div>
          <div className="flex items-center gap-2">
            <Square size={18} className="text-blue-500"/>
            <span className="text-sm font-medium">{property.sqft} sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
}