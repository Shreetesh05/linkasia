import { useForm, type UseFormRegister } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Phone, Mail, MapPin } from 'lucide-react';

// Booking Schema
const bookingSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  address: z.string().min(1, 'Address is required'),
  nationality: z.string().min(1, 'Nationality is required'),
  package: z.string().min(1, 'Package selection is required'),
  startDate: z.string().min(1, 'Start date is required'),
  endDate: z.string().min(1, 'End date is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  emergencyContact: z.string().min(10, 'Emergency contact must be at least 10 digits'),
  message: z.string().optional()
});

export type BookingFormData = z.infer<typeof bookingSchema>;

const TOUR_PACKAGES = [
  { id: '1', name: 'Everest Base Camp Trek' },
  { id: '2', name: 'Annapurna Circuit Trek' },
  { id: '3', name: 'Langtang Valley Trek' },
  { id: '4', name: 'Manaslu Circuit Trek' }
];

const generateGmailLink = (data: BookingFormData) => {
  const subject = `Booking Request: ${data.package}`;
  const body = `Booking Details:\n----------------\nFull Name: ${data.fullName}\nAddress: ${data.address}\nNationality: ${data.nationality}\nPackage: ${data.package}\nDates: ${data.startDate} to ${data.endDate}\nEmail: ${data.email}\nPhone: ${data.phone}\nEmergency Contact: ${data.emergencyContact}\n\nMessage:\n${data.message || 'N/A'}`;
  return `https://mail.google.com/mail/?view=cm&fs=1&to=infolinkasiatours@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

const generateMailtoLink = (data: BookingFormData) => {
  const subject = `Booking Request: ${data.package}`;
  const body = `Booking Details:\n----------------\nFull Name: ${data.fullName}\nAddress: ${data.address}\nNationality: ${data.nationality}\nPackage: ${data.package}\nDates: ${data.startDate} to ${data.endDate}\nEmail: ${data.email}\nPhone: ${data.phone}\nEmergency Contact: ${data.emergencyContact}\n\nMessage:\n${data.message || 'N/A'}`;
  return `mailto:infolinkasiatours@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

const Input = ({
  label,
  name,
  type = 'text',
  register,
  error
}: {
  label: string;
  name: keyof BookingFormData;
  type?: string;
  register: UseFormRegister<BookingFormData>;
  error: any;
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label} *</label>
    <input
      type={type}
      {...register(name)}
      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
  </div>
);

const BookingFormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema)
  });

  const handleFormSubmit = (data: BookingFormData) => {
    const mailtoLink = generateMailtoLink(data);
    try {
      window.location.href = mailtoLink;
      setTimeout(() => {
        window.open(generateGmailLink(data), '_blank');
      }, 1500);
    } catch {
      window.open(generateGmailLink(data), '_blank');
    }
    reset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Tour Booking Form</h1>
          <p className="text-lg text-gray-600">Fill out the form below to book your adventure</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center"><Phone className="mr-2" size={20} />Phone</h3>
                  <ul>
                    <li>Nepal: +977-01-5912660</li>
                    <li>Korea: +82-010-5877-5512</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center"><Mail className="mr-2" size={20} />Email</h3>
                  <p>infolinkasiatours@gmail.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center"><MapPin className="mr-2" size={20} />Address</h3>
                  <p>Kathmandu, Nepal</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 p-8">
              {isSubmitSuccessful ? (
                <div className="text-center py-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Booking Request Sent!</h2>
                  <p className="text-gray-600 mb-6">Thank you for your booking request. We've sent the details to your email.</p>
                  <button onClick={() => reset()} className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    Submit Another Booking
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input label="Full Name" name="fullName" register={register} error={errors.fullName} />
                    <Input label="Nationality" name="nationality" register={register} error={errors.nationality} />
                    <Input label="Address" name="address" register={register} error={errors.address} />
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Package *</label>
                      <select {...register('package')} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option value="">Select a package</option>
                        {TOUR_PACKAGES.map((tour) => (
                          <option key={tour.id} value={tour.name}>{tour.name}</option>
                        ))}
                      </select>
                      {errors.package && <p className="text-red-500 text-sm mt-1">{errors.package.message}</p>}
                    </div>
                    <Input type="date" label="Start Date" name="startDate" register={register} error={errors.startDate} />
                    <Input type="date" label="End Date" name="endDate" register={register} error={errors.endDate} />
                    <Input type="email" label="Email" name="email" register={register} error={errors.email} />
                    <Input label="Phone" name="phone" register={register} error={errors.phone} />
                    <Input label="Emergency Contact" name="emergencyContact" register={register} error={errors.emergencyContact} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                    <textarea {...register('message')} rows={4} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Special requests, dietary restrictions, etc." />
                  </div>
                  <div className="pt-4">
                    <button type="submit" className="w-full py-3 px-4 rounded-xl font-bold text-white shadow-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition transform hover:scale-[1.02]">
                      Submit Booking Request
                    </button>
                    <p className="text-gray-500 text-sm mt-3 text-center">
                      By submitting this form, you agree to our terms and conditions. Your request will be sent via email.
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