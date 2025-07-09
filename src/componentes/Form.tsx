import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Phone, Mail, MapPin } from 'lucide-react';

// Zod schema for form validation
const bookingSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  address: z.string().min(1, "Address is required"),
  nationality: z.string().min(1, "Nationality is required"),
  package: z.string().min(1, "Package selection is required"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  emergencyContact: z.string().min(10, "Emergency contact must be at least 10 digits"),
  message: z.string().optional()
});

type BookingFormData = z.infer<typeof bookingSchema>;

// Tour packages
const TOUR_PACKAGES = [
  { id: '1', name: 'Everest Base Camp Trek', price: 1299 },
  { id: '2', name: 'Annapurna Circuit Trek', price: 1199 },
  { id: '3', name: 'Langtang Valley Trek', price: 999 },
  { id: '4', name: 'Manaslu Circuit Trek', price: 1499 }
];

const BookingFormPage = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitSuccessful },
    reset
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema)
  });

  // Generate mailto link with form data
  const generateMailtoLink = (data: BookingFormData) => {
    const selectedPackage = TOUR_PACKAGES.find(pkg => pkg.name === data.package);
    const price = selectedPackage ? selectedPackage.price : 'N/A';
    
    const subject = `Booking Request: ${data.package}`;
    
    const body = `
Booking Details:
----------------
Full Name: ${data.fullName}
Address: ${data.address}
Nationality: ${data.nationality}
Package: ${data.package} ($${price})
Dates: ${data.startDate} to ${data.endDate}
Email: ${data.email}
Phone: ${data.phone}
Emergency Contact: ${data.emergencyContact}

Message:
${data.message || 'N/A'}
    `.trim();
    
    return `mailto:infolinkasiatours@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  // Form submission handler
  const handleFormSubmit = (data: BookingFormData) => {
    // Open user's email client with prefilled data
    window.location.href = generateMailtoLink(data);
    
    // Reset form after submission
    reset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Tour Booking Form
          </h1>
          <p className="text-lg text-gray-600">
            Fill out the form below to book your adventure
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Contact Information */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <Phone className="mr-2" size={20} />
                    Phone Numbers
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Nepal:</span>
                      <span>+977-01-5912660</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Korea:</span>
                      <span>+82-010-5877-5512</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <Mail className="mr-2" size={20} />
                    Email
                  </h3>
                  <p>infolinkasiatours@gmail.com</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <MapPin className="mr-2" size={20} />
                    Address
                  </h3>
                  <p>Kathmandu, Nepal</p>
                </div>
              </div>
              
              <div className="mt-10 pt-6 border-t border-blue-500">
                <h3 className="text-lg font-semibold mb-3">Why Book With Us?</h3>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Expert local guides</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Best price guarantee</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>24/7 customer support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Eco-friendly tours</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Booking Form */}
            <div className="lg:col-span-2 p-8">
              {isSubmitSuccessful ? (
                <div className="text-center py-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Booking Request Sent!</h2>
                  <p className="text-gray-600 mb-6">
                    Thank you for your booking request. We've sent the details to your email.
                  </p>
                  <button
                    onClick={() => reset()}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    Submit Another Booking
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        {...register('fullName')}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="John Doe"
                      />
                      {errors.fullName && (
                        <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nationality *
                      </label>
                      <input
                        {...register('nationality')}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="e.g., American"
                      />
                      {errors.nationality && (
                        <p className="text-red-500 text-sm mt-1">{errors.nationality.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Address *
                      </label>
                      <input
                        {...register('address')}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="123 Main St, City"
                      />
                      {errors.address && (
                        <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Package *
                      </label>
                      <select
                        {...register('package')}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select a package</option>
                        {TOUR_PACKAGES.map(tour => (
                          <option key={tour.id} value={tour.name}>
                            {tour.name} (${tour.price})
                          </option>
                        ))}
                      </select>
                      {errors.package && (
                        <p className="text-red-500 text-sm mt-1">{errors.package.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Start Date *
                      </label>
                      <input
                        type="date"
                        {...register('startDate')}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      {errors.startDate && (
                        <p className="text-red-500 text-sm mt-1">{errors.startDate.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        End Date *
                      </label>
                      <input
                        type="date"
                        {...register('endDate')}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      {errors.endDate && (
                        <p className="text-red-500 text-sm mt-1">{errors.endDate.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        {...register('email')}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone *
                      </label>
                      <input
                        {...register('phone')}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="+1 123-456-7890"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Emergency Contact *
                      </label>
                      <input
                        {...register('emergencyContact')}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Name and phone number"
                      />
                      {errors.emergencyContact && (
                        <p className="text-red-500 text-sm mt-1">{errors.emergencyContact.message}</p>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Message (Optional)
                      </label>
                      <textarea
                        {...register('message')}
                        rows={4}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Special requests, dietary restrictions, etc."
                      ></textarea>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full py-3 px-4 rounded-xl font-bold text-white shadow-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition transform hover:scale-[1.02]"
                    >
                      Submit Booking Request
                    </button>
                    <p className="text-gray-500 text-sm mt-3 text-center">
                      By submitting this form, you agree to our terms and conditions.
                      Your request will be sent via email.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingFormPage;