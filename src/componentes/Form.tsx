import  { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import * as z from 'zod';

// Zod schema for form validation
const bookingSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  travelers: z.number().min(1, "At least 1 traveler required"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"),
  message: z.string().optional()
});

type BookingFormData = z.infer<typeof bookingSchema>;

// Mock tour data (would come from API in real app)
const MOCK_TOURS = [
  { id: '123', name: 'Mountain Adventure', price: 199.99 },
  { id: '456', name: 'Beach Paradise', price: 299.99 }
];

const BookingComponent = () => {
  // State for modal and selected tour
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState(MOCK_TOURS[0]);
  
  // React Router hooks
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  
  // Form handling
  const { register, handleSubmit, formState: { errors } } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema)
  });

  // Form submission handler
  const handleFormSubmit = (data: BookingFormData) => {
    console.log("Booking submitted:", data);
    setIsModalOpen(false);
  };

  // 1. Modal Booking Method
  const openModal = (tourId: string) => {
    const tour = MOCK_TOURS.find(t => t.id === tourId) || MOCK_TOURS[0];
    setSelectedTour(tour);
    setIsModalOpen(true);
  };

  // 2. Booking Page Redirect
  const redirectToBookingPage = (tourId: string) => {
    navigate(`/book?tourId=${tourId}`);
  };

  // 3. WhatsApp Redirect
  const redirectToWhatsApp = (tourId: string) => {
    const tour = MOCK_TOURS.find(t => t.id === tourId) || MOCK_TOURS[0];
    const message = `Hi, I'm interested in the ${encodeURIComponent(tour.name)} tour.`;
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  // 4. Checkout Redirect
  const redirectToCheckout = (tourId: string) => {
    const tour = MOCK_TOURS.find(t => t.id === tourId) || MOCK_TOURS[0];
    navigate(`/checkout/${tour.id}`, {
      state: {
        tourName: tour.name,
        price: tour.price
      }
    });
  };

  // Get tour ID from URL params (for booking page)
  const getTourIdFromQuery = () => {
    const params = new URLSearchParams(location.search);
    return params.get('tourId') || '123';
  };

  // Get tour details for display
  const getCurrentTour = () => {
    if (params.id) {
      // For checkout page: /checkout/:id
      return MOCK_TOURS.find(t => t.id === params.id) || MOCK_TOURS[0];
    }
    
    // For booking page: /book?tourId=123
    const tourId = getTourIdFromQuery();
    return MOCK_TOURS.find(t => t.id === tourId) || MOCK_TOURS[0];
  };

  // Current context based on route
  const isBookingPage = location.pathname.includes('/book');
  const isCheckoutPage = location.pathname.includes('/checkout');
  const currentTour = getCurrentTour();

  // Render appropriate content based on route
  if (isBookingPage) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Booking for: {currentTour.name}</h1>
        <div className="bg-gray-100 p-6 rounded-lg">
          <p className="mb-4">Booking form would go here</p>
          <button 
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  if (isCheckoutPage) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Tour Details</h2>
          <p className="text-gray-700 mb-1"><strong>ID:</strong> {params.id}</p>
          <p className="text-gray-700 mb-1"><strong>Tour:</strong> {currentTour.name}</p>
          <p className="text-gray-700 mb-4"><strong>Price:</strong> ${currentTour.price.toFixed(2)}</p>
          
          <div className="mt-6">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Complete Payment
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Main component (home page)
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Tour Booking Options</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {MOCK_TOURS.map(tour => (
          <div key={tour.id} className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold">{tour.name}</h2>
            <p className="text-gray-600">${tour.price.toFixed(2)}</p>
            
            <div className="mt-4 space-y-2">
              <button
                onClick={() => openModal(tour.id)}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Book via Modal
              </button>
              
              <button
                onClick={() => redirectToBookingPage(tour.id)}
                className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
              >
                Book on Booking Page
              </button>
              
              <button
                onClick={() => redirectToWhatsApp(tour.id)}
                className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition flex items-center justify-center"
              >
                <span>Book via WhatsApp</span>
              </button>
              
              <button
                onClick={() => redirectToCheckout(tour.id)}
                className="w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg w-full max-w-md">
            <div className="border-b p-4 flex justify-between items-center">
              <h2 className="text-xl font-semibold">Book {selectedTour.name}</h2>
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </div>
            
            <form onSubmit={handleSubmit(handleFormSubmit)} className="p-4 space-y-4">
              {/* Form fields same as in previous modal example */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input 
                  {...register('fullName')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                />
                {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input 
                  type="email"
                  {...register('email')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input 
                  {...register('phone')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Number of Travelers</label>
                <input 
                  type="number"
                  {...register('travelers', { valueAsNumber: true })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                />
                {errors.travelers && <p className="text-red-500 text-sm mt-1">{errors.travelers.message}</p>}
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Start Date</label>
                  <input 
                    type="date"
                    {...register('startDate')}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                  />
                  {errors.startDate && <p className="text-red-500 text-sm mt-1">{errors.startDate.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">End Date</label>
                  <input 
                    type="date"
                    {...register('endDate')}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                  />
                  {errors.endDate && <p className="text-red-500 text-sm mt-1">{errors.endDate.message}</p>}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea 
                  {...register('message')}
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                />
              </div>
              
              <div className="flex justify-end space-x-2">
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingComponent;