import { Link } from 'react-router-dom';
import { Calendar, Clock, Users } from 'lucide-react';
import Button from '../components/Button';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function Home() {
  const features = [
    {
      name: 'Easy Scheduling',
      description: 'Book appointments quickly and easily with our intuitive interface.',
      icon: Calendar,
    },
    {
      name: '24/7 Access',
      description: 'Schedule appointments anytime, anywhere, at your convenience.',
      icon: Clock,
    },
    {
      name: 'Expert Care',
      description: 'Connect with our experienced healthcare professionals.',
      icon: Users,
    },
  ];

  return (
    <div className="space-y-16">
      {/* Enhanced Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-500 to-indigo-600">
        <div className="mx-auto max-w-3xl text-center py-16">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
            Your Health, Our Priority
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-200">
            Schedule appointments with top healthcare professionals in just a few clicks.
            Experience healthcare scheduling reimagined.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to="/book">
              <Button size="lg" className="bg-indigo-700 text-white hover:bg-indigo-600 transform transition">
                Book Appointment
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="outline" size="lg" className="border-indigo-400 text-indigo-300 hover:border-indigo-300 transform transition">
                Register Now
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Enhanced Features Section */}
      <div className="mx-auto max-w-5xl py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.name}
                className="relative rounded-2xl border border-gray-300 bg-white p-8 shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-800">
                  {feature.name}
                </h3>
                <p className="mt-2 text-base text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Maps and Locations Section */}
      <div className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Locations
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-600">
              Find our partner hospitals on the map below.
            </p>
          </div>
          <div className="mt-10">
            <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: '400px', width: '100%' }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[28.6139, 77.2090]}>
                <Popup>
                  AIIMS, New Delhi
                </Popup>
              </Marker>
              <Marker position={[19.0760, 72.8777]}>
                <Popup>
                  Fortis Hospital, Mumbai
                </Popup>
              </Marker>
              <Marker position={[13.0827, 80.2707]}>
                <Popup>
                  Apollo Hospital, Chennai
                </Popup>
              </Marker>
              <Marker position={[22.5726, 88.3639]}>
                <Popup>
                  Fortis Hospital, Kolkata
                </Popup>
              </Marker>
              <Marker position={[12.9716, 77.5946]}>
                <Popup>
                  Manipal Hospital, Bangalore
                </Popup>
              </Marker>
              <Marker position={[17.3850, 78.4867]}>
                <Popup>
                  Yashoda Hospital, Hyderabad
                </Popup>
              </Marker>
              <Marker position={[23.0225, 72.5714]}>
                <Popup>
                  Zydus Hospital, Ahmedabad
                </Popup>
              </Marker>
              <Marker position={[26.9124, 75.7873]}>
                <Popup>
                  SMS Hospital, Jaipur
                </Popup>
              </Marker>
              {/* Add more markers as needed */}
            </MapContainer>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Our Patients Say
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-600">
              Hear from those who have experienced our exceptional care.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center bg-white p-6 shadow rounded-lg">
              <p className="text-lg text-gray-600">
                "The staff was incredibly attentive and caring. I felt at ease knowing I was in good hands."
              </p>
              <span className="mt-4 text-sm font-semibold text-gray-900">- Swati Bhatia</span>
            </div>
            <div className="flex flex-col items-center bg-white p-6 shadow rounded-lg">
              <p className="text-lg text-gray-600">
                "Booking an appointment was so easy and convenient. Highly recommend!"
              </p>
              <span className="mt-4 text-sm font-semibold text-gray-900">- Aditiya Sharma</span>
            </div>
            <div className="flex flex-col items-center bg-white p-6 shadow rounded-lg">
              <p className="text-lg text-gray-600">
                "Excellent service and professional staff. Will definitely return for future needs."
              </p>
              <span className="mt-4 text-sm font-semibold text-gray-900">- Ansh Dubey</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Contact Section */}
      <div className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Contact Us
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-600">
              We would love to hear from you. Reach out to us with any questions or feedback.
            </p>
          </div>
          <div className="mt-10 max-w-xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <div className="mt-1">
                  <input type="text" id="name" name="name" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Your Name" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1">
                  <input type="email" id="email" name="email" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="you@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <div className="mt-1">
                  <textarea id="message" name="message" rows={4} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Type your message here..."></textarea>
                </div>
              </div>
              <div>
                <button type="submit" className="w-full inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="mt-10 text-center">
            <p className="text-lg text-gray-600">
              Or contact us directly at <a href="mailto:support@medcare.com" className="text-indigo-600 hover:text-indigo-500">support@medcare.com</a> or call us at <span className="text-indigo-600">+1-234-567-890</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}