import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Type definitions
type Activity = {
  id: string;
  name: string;
  description: string;
  icon: string;
};

type Accommodation = {
  id: string;
  name: string;
  type: 'hotel' | 'resort' | 'villa' | 'camp';
  description: string;
  pricePerNight: number;
};

type DurationOption = {
  id: string;
  label: string;
  days: number;
};

type TravelerOption = {
  id: string;
  label: string;
  count: number;
};

type TourData = {
  destination: string;
  activities: string[];
  accommodation: string;
  duration: string;
  travelers: string;
  startDate: string;
  specialRequests: string;
};

// Mock data
const destinations = [
  { id: 'bali', name: 'Bali, Indonesia' },
  { id: 'kyoto', name: 'Kyoto, Japan' },
  { id: 'santorini', name: 'Santorini, Greece' },
  { id: 'serengeti', name: 'Serengeti, Tanzania' },
  { id: 'paris', name: 'Paris, France' },
  { id: 'nyc', name: 'New York, USA' },
];

const activities: Activity[] = [
  { id: 'hiking', name: 'Hiking', description: 'Explore nature trails and mountains', icon: '🚶‍♂️' },
  { id: 'culture', name: 'Cultural Tours', description: 'Visit historical sites and museums', icon: '🏛️' },
  { id: 'beach', name: 'Beach Activities', description: 'Swimming, surfing, and relaxation', icon: '🏖️' },
  { id: 'food', name: 'Food Tours', description: 'Experience local cuisine', icon: '🍜' },
  { id: 'shopping', name: 'Shopping', description: 'Local markets and boutiques', icon: '🛍️' },
  { id: 'wildlife', name: 'Wildlife Safari', description: 'See animals in their natural habitat', icon: '🦁' },
  { id: 'adventure', name: 'Adventure Sports', description: 'Zip-lining, rafting, and more', icon: '🚵‍♀️' },
  { id: 'wellness', name: 'Wellness & Spa', description: 'Relaxation and rejuvenation', icon: '💆‍♀️' },
];

const accommodations: Accommodation[] = [
  { id: 'luxury-hotel', name: 'Luxury Hotel', type: 'hotel', description: '5-star accommodation with premium amenities', pricePerNight: 350 },
  { id: 'boutique-resort', name: 'Boutique Resort', type: 'resort', description: 'Unique properties with personalized service', pricePerNight: 280 },
  { id: 'private-villa', name: 'Private Villa', type: 'villa', description: 'Exclusive private residence with staff', pricePerNight: 450 },
  { id: 'eco-lodge', name: 'Eco Lodge', type: 'camp', description: 'Sustainable stays in natural settings', pricePerNight: 120 },
  { id: 'budget-hotel', name: 'Budget Hotel', type: 'hotel', description: 'Comfortable and affordable options', pricePerNight: 80 },
];

const durationOptions: DurationOption[] = [
  { id: 'short', label: 'Short Break (3-5 days)', days: 4 },
  { id: 'week', label: 'One Week (6-8 days)', days: 7 },
  { id: 'extended', label: 'Extended Stay (9-14 days)', days: 12 },
  { id: 'long', label: 'Long Vacation (15+ days)', days: 18 },
];

const travelerOptions: TravelerOption[] = [
  { id: 'solo', label: 'Solo Traveler', count: 1 },
  { id: 'couple', label: 'Couple', count: 2 },
  { id: 'family', label: 'Family (4 people)', count: 4 },
  { id: 'group', label: 'Group (6+ people)', count: 6 },
];

const CustomizeTour: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [tourData, setTourData] = useState<TourData>({
    destination: '',
    activities: [],
    accommodation: '',
    duration: '',
    travelers: '',
    startDate: '',
    specialRequests: '',
  });
  
  const [priceEstimate, setPriceEstimate] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const calculatePrice = () => {
    if (!tourData.duration || !tourData.travelers || !tourData.accommodation) return 0;
    
    const duration = durationOptions.find(d => d.id === tourData.duration)?.days || 0;
    const travelers = travelerOptions.find(t => t.id === tourData.travelers)?.count || 1;
    const accommodation = accommodations.find(a => a.id === tourData.accommodation)?.pricePerNight || 0;
    
    // Base calculation: accommodation * duration * travelers
    let total = accommodation * duration * travelers;
    
    // Add activity fees
    total += tourData.activities.length * 50 * travelers;
    
    return total;
  };

  const handleInputChange = (field: keyof TourData, value: any) => {
    setTourData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleActivityToggle = (activityId: string) => {
    setTourData(prev => {
      if (prev.activities.includes(activityId)) {
        return {
          ...prev,
          activities: prev.activities.filter(id => id !== activityId)
        };
      } else {
        return {
          ...prev,
          activities: [...prev.activities, activityId]
        };
      }
    });
  };

  const nextStep = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
      
      // Update price estimate when moving to step 5
      if (currentStep === 4) {
        setPriceEstimate(calculatePrice());
      }
    } else {
      setIsSubmitted(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetForm = () => {
    setTourData({
      destination: '',
      activities: [],
      accommodation: '',
      duration: '',
      travelers: '',
      startDate: '',
      specialRequests: '',
    });
    setCurrentStep(1);
    setIsSubmitted(false);
    setPriceEstimate(0);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-800">Choose Your Destination</h3>
            <p className="text-gray-600">Select your dream location from our handpicked destinations</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {destinations.map(dest => (
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  key={dest.id}
                  className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                    tourData.destination === dest.id 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                  onClick={() => handleInputChange('destination', dest.id)}
                >
                  <div className="flex items-center">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-800">{dest.name}</h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
        
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-800">Select Activities</h3>
            <p className="text-gray-600">Choose what you'd like to experience during your trip</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {activities.map(activity => (
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  key={activity.id}
                  className={`border rounded-lg p-4 cursor-pointer transition-all ${
                    tourData.activities.includes(activity.id) 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                  onClick={() => handleActivityToggle(activity.id)}
                >
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">{activity.icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">{activity.name}</h4>
                      <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
        
      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-800">Accommodation Style</h3>
            <p className="text-gray-600">Select your preferred type of accommodation</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {accommodations.map(acc => (
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  key={acc.id}
                  className={`border rounded-xl p-5 cursor-pointer transition-all ${
                    tourData.accommodation === acc.id 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                  onClick={() => handleInputChange('accommodation', acc.id)}
                >
                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-gray-800">{acc.name}</h4>
                        <p className="text-sm text-gray-600 mt-1">{acc.description}</p>
                      </div>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        ${acc.pricePerNight}/night
                      </span>
                    </div>
                    <div className="mt-4 flex items-center text-sm text-gray-600">
                      <span className="bg-gray-100 px-2 py-1 rounded mr-2">
                        {acc.type.charAt(0).toUpperCase() + acc.type.slice(1)}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
        
      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Trip Details</h3>
              <p className="text-gray-600">Specify the duration and number of travelers</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Trip Duration</h4>
                <div className="space-y-3">
                  {durationOptions.map(option => (
                    <motion.div 
                      whileHover={{ scale: 1.01 }}
                      key={option.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-all ${
                        tourData.duration === option.id 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                      onClick={() => handleInputChange('duration', option.id)}
                    >
                      <div className="flex items-center">
                        <div className={`w-5 h-5 rounded-full border mr-3 flex items-center justify-center ${
                          tourData.duration === option.id 
                            ? 'border-blue-500 bg-blue-500' 
                            : 'border-gray-300'
                        }`}>
                          {tourData.duration === option.id && (
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          )}
                        </div>
                        <span>{option.label}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Number of Travelers</h4>
                <div className="space-y-3">
                  {travelerOptions.map(option => (
                    <motion.div 
                      whileHover={{ scale: 1.01 }}
                      key={option.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-all ${
                        tourData.travelers === option.id 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                      onClick={() => handleInputChange('travelers', option.id)}
                    >
                      <div className="flex items-center">
                        <div className={`w-5 h-5 rounded-full border mr-3 flex items-center justify-center ${
                          tourData.travelers === option.id 
                            ? 'border-blue-500 bg-blue-500' 
                            : 'border-gray-300'
                        }`}>
                          {tourData.travelers === option.id && (
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          )}
                        </div>
                        <span>{option.label}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-semibold text-gray-800 mb-3">Preferred Start Date</h4>
              <input
                type="date"
                value={tourData.startDate}
                onChange={(e) => handleInputChange('startDate', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
          </motion.div>
        );
        
      case 5:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Review Your Tour</h3>
              <p className="text-gray-600">Confirm your selections and add any special requests</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-800 mb-3">Tour Summary</h4>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Destination:</span>
                      <span className="font-medium">
                        {destinations.find(d => d.id === tourData.destination)?.name || 'Not selected'}
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium">
                        {durationOptions.find(d => d.id === tourData.duration)?.label || 'Not selected'}
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Travelers:</span>
                      <span className="font-medium">
                        {travelerOptions.find(t => t.id === tourData.travelers)?.label || 'Not selected'}
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Accommodation:</span>
                      <span className="font-medium">
                        {accommodations.find(a => a.id === tourData.accommodation)?.name || 'Not selected'}
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Start Date:</span>
                      <span className="font-medium">
                        {tourData.startDate || 'Not selected'}
                      </span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800 mb-3">Selected Activities</h4>
                  <div className="space-y-2">
                    {tourData.activities.length > 0 ? (
                      tourData.activities.map(activityId => {
                        const activity = activities.find(a => a.id === activityId);
                        return activity ? (
                          <div key={activityId} className="flex items-center">
                            <span className="mr-2">{activity.icon}</span>
                            <span>{activity.name}</span>
                          </div>
                        ) : null;
                      })
                    ) : (
                      <p className="text-gray-500">No activities selected</p>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-bold text-gray-800 mb-3">Price Estimate</h4>
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">Total:</span>
                    <span className="text-2xl font-bold text-blue-600">${priceEstimate.toLocaleString()}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    This is an estimated price. Final price may vary based on availability and season.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-semibold text-gray-800 mb-3">Special Requests</h4>
              <textarea
                value={tourData.specialRequests}
                onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                placeholder="Any dietary restrictions, accessibility needs, or other special requests..."
                className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </motion.div>
        );
        
      case 6:
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
              <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Tour Request Submitted!</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Thank you for customizing your dream tour with us. Our travel experts will review your preferences 
              and contact you within 24 hours with a personalized itinerary and final pricing.
            </p>
            <div className="bg-gray-50 rounded-xl p-6 max-w-xl mx-auto text-left">
              <h4 className="font-bold text-gray-800 mb-4">Next Steps:</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-800 rounded-full mr-3 mt-1">1</span>
                  <span>You'll receive a confirmation email with your request details</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-800 rounded-full mr-3 mt-1">2</span>
                  <span>Our travel expert will contact you to discuss your preferences</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-800 rounded-full mr-3 mt-1">3</span>
                  <span>We'll create a personalized itinerary just for you</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-800 rounded-full mr-3 mt-1">4</span>
                  <span>Finalize your booking and get ready for an amazing journey!</span>
                </li>
              </ul>
            </div>
          </motion.div>
        );
        
      default:
        return null;
    }
  };

  const getStepTitle = (step: number) => {
    const titles = [
      "Choose Destination",
      "Select Activities",
      "Accommodation Style",
      "Trip Details",
      "Review & Confirm",
      "Request Submitted"
    ];
    return titles[step - 1] || "";
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Customize Your Dream Tour</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Build your perfect vacation with our easy customization tool. Select your preferences step by step.
        </p>
      </div>
      
      {!isSubmitted ? (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold text-gray-800">
                {currentStep < 6 ? `Step ${currentStep}: ${getStepTitle(currentStep)}` : "Thank You!"}
              </h2>
              <span className="text-sm font-medium text-gray-500">
                {currentStep} of 5
              </span>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
              <motion.div 
                className="bg-blue-600 h-2.5 rounded-full"
                initial={{ width: `${((currentStep - 1) / 5) * 100}%` }}
                animate={{ width: `${((currentStep - 1) / 5) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
          
          <div className="p-6 md:p-8">
            {renderStep()}
            
            <div className="flex justify-between mt-12">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`px-6 py-3 rounded-lg font-medium ${
                  currentStep === 1 
                    ? 'text-gray-400 cursor-not-allowed' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Back
              </button>
              
              <button
                onClick={nextStep}
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={
                  (currentStep === 1 && !tourData.destination) ||
                  (currentStep === 4 && (!tourData.duration || !tourData.travelers))
                }
              >
                {currentStep === 5 ? 'Submit Request' : 'Next Step'}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <button
            onClick={resetForm}
            className="mt-8 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Create Another Tour
          </button>
        </div>
      )}
      
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">How It Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "Customize", 
              description: "Choose your destination, activities, and preferences", 
              icon: "✏️" 
            },
            { 
              title: "Review", 
              description: "See your personalized itinerary and price estimate", 
              icon: "📋" 
            },
            { 
              title: "Book & Travel", 
              description: "Confirm your booking and enjoy your dream vacation", 
              icon: "✈️" 
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h4 className="font-bold text-gray-800 text-lg mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomizeTour;