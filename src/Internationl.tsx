import React from "react";
import { MapPin, Hotel, Utensils, Car } from "lucide-react";

type Tour = {
  title: string;
  country: string;
  location: string;
  duration: string;
  statusTags: string[];
  description: string;
  image: string;
  expired?: boolean;
};

const tours: Tour[] = [
  {
    title: "Kailash Mansarovar Yatra by Helicopter",
    country: "India",
    location: "India",
    duration: "10 Days 9 Nights",
    statusTags: ["On Sale"],
    expired: true,
    description: "09 Night 10 Days Kailash Tour by Helicopter Ex-Kathmandu",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/49/Mount_Kailash.jpg", // replace with your own image path
  },
  {
    title: "Kashi Ayodhya Prayagraj Tour",
    country: "India",
    location: "India",
    duration: "4 Days 3 Nights",
    statusTags: [],
    description: "Golden Triangle Tour Ex Varanasi",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f3/Ayodhya_Ram_Mandir_Model.jpg", // replace with your own image path
  },
];

const TourPackages: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
      {tours.map((tour, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row gap-4 p-4 bg-white rounded-xl shadow border"
        >
          <div className="relative w-full md:w-1/3 h-56 overflow-hidden rounded-lg">
            <img
              src={tour.image}
              alt={tour.title}
              className="object-cover w-full h-full"
            />
            <div className="absolute top-2 left-2 space-y-1">
              {tour.statusTags.includes("On Sale") && (
                <span className="bg-red-600 text-white text-sm px-2 py-1 rounded">
                  On Sale !
                </span>
              )}
              <span className="bg-green-600 text-white text-sm px-2 py-1 rounded block">
                {tour.duration}
              </span>
              {tour.expired && (
                <span className="bg-orange-500 text-white text-sm px-2 py-1 rounded block">
                  Expired !
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col justify-between w-full">
            <div>
              <h2 className="text-xl font-semibold">{tour.title}</h2>
              <div className="flex items-center text-gray-500 text-sm mb-1">
                <MapPin size={16} className="mr-1" />
                {tour.country} , {tour.location}
              </div>
              <p className="text-sm text-gray-700">{tour.description}</p>
            </div>

            <div className="flex justify-between items-end mt-4">
              <div className="flex gap-2">
                <button className="bg-gray-100 p-2 rounded">
                  <Hotel size={18} />
                </button>
                <button className="bg-gray-100 p-2 rounded">
                  <Utensils size={18} />
                </button>
                <button className="bg-gray-100 p-2 rounded">
                  <Car size={18} />
                </button>
              </div>

              <button className="bg-lime-500 text-white px-4 py-2 rounded font-semibold hover:bg-lime-600">
                Explore
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TourPackages;
