import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { UserPlus } from 'lucide-react';
import Button from '../components/Button';
import Input from '../components/Input';
import toast from 'react-hot-toast';

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success('Registration successful!');
    setIsLoading(false);
  };

  return (
    <div className="mx-auto max-w-md">
      <div className="rounded-lg border bg-white p-8 shadow-sm">
        <div className="mb-8 flex flex-col items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
            <UserPlus className="h-6 w-6 text-blue-600" />
          </div>
          <h1 className="mt-4 text-2xl font-bold">Create an account</h1>
          <p className="mt-2 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:underline">
              Sign in
            </Link>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="First Name"
              placeholder="John"
              required
            />
            <Input
              label="Last Name"
              placeholder="Doe"
              required
            />
          </div>
          
          <Input
            label="Email"
            type="email"
            placeholder="john@example.com"
            required
          />
          
          <Input
            label="Phone"
            type="tel"
            placeholder="(555) 555-5555"
            required
          />
          
          <Input
            label="Password"
            type="password"
            placeholder="Create a password"
            required
          />
          
          <Input
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            required
          />

          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              className="mt-1 rounded border-gray-300"
              required
            />
            <label className="text-sm text-gray-600">
              I agree to the{' '}
              <Link to="/terms" className="text-blue-600 hover:underline">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="text-blue-600 hover:underline">
                Privacy Policy
              </Link>
            </label>
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? 'Creating account...' : 'Create account'}
          </Button>
        </form>
      </div>
    </div>
  );
}