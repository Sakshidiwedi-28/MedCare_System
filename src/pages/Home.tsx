import { Link } from 'react-router-dom';
import { Calendar, Clock, Users } from 'lucide-react';
import Button from '../components/Button';

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
      {/* Hero Section */}
      <div className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your Health, Our Priority
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Schedule appointments with top healthcare professionals in just a few clicks.
            Experience healthcare scheduling reimagined.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to="/book">
              <Button size="lg">Book Appointment</Button>
            </Link>
            <Link to="/register">
              <Button variant="outline" size="lg">
                Register Now
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.name}
                className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {feature.name}
                </h3>
                <p className="mt-2 text-base text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative isolate overflow-hidden bg-blue-600 px-6 py-12 sm:rounded-3xl sm:px-12 sm:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
            Join thousands of patients who trust us with their healthcare needs.
            Register now and experience the difference.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to="/register">
              <Button
                variant="secondary"
                size="lg"
                className="font-semibold"
              >
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}