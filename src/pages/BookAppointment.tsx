import { useState, FormEvent } from 'react';
import { Calendar } from 'lucide-react';
import Button from '../components/Button';
import Input from '../components/Input';
import toast from 'react-hot-toast';

const DEPARTMENTS = [
  'General Medicine',
  'Cardiology',
  'Dermatology',
  'Orthopedics',
  'Pediatrics',
  'Neurology',
];

const TIME_SLOTS = [
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
];

export default function BookAppointment() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success('Appointment booked successfully!');
    setIsLoading(false);
  };

  // Get tomorrow's date as the minimum date for booking
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <div className="mx-auto max-w-2xl">
      <div className="rounded-lg border bg-white p-8 shadow-sm">
        <div className="mb-8 flex items-center space-x-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
            <Calendar className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Book an Appointment</h1>
            <p className="text-sm text-gray-600">
              Schedule your visit with our healthcare professionals
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Input
              label="Full Name"
              placeholder="John Doe"
              required
            />
            <Input
              label="Phone"
              type="tel"
              placeholder="(555) 555-5555"
              required
            />
          </div>

          <Input
            label="Email"
            type="email"
            placeholder="john@example.com"
            required
          />

          <div>
            <label className="text-sm font-medium text-gray-700">Department</label>
            <select
              className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              required
            >
              <option value="">Select Department</option>
              {DEPARTMENTS.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-gray-700">
                Preferred Date
              </label>
              <input
                type="date"
                min={minDate}
                className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Preferred Time
              </label>
              <select
                className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                required
              >
                <option value="">Select Time</option>
                {TIME_SLOTS.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Additional Notes
            </label>
            <textarea
              className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              rows={4}
              placeholder="Please provide any additional information about your visit"
            />
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? 'Booking appointment...' : 'Book Appointment'}
          </Button>
        </form>
      </div>
    </div>
  );
}