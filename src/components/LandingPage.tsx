import React, { useState } from 'react';
import { Github, ArrowRight } from 'lucide-react';

type LandingPageProps = {
  onSubmit: (username: string) => void;
};

export function LandingPage({ onSubmit }: LandingPageProps) {
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return;
    
    setIsLoading(true);
    // Simulate loading for smooth transition
    setTimeout(() => {
      onSubmit(username);
      setIsLoading(false);
    }, 800);
  };

  const handleDefaultSubmit = () => {
    setIsLoading(true);
    // Simulate loading for smooth transition
    setTimeout(() => {
      onSubmit('default-username'); // Use a default username
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8 animate-fade-in">
          <Github className="w-16 h-16 text-white mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white mb-2">
            README Generator
          </h1>
          <p className="text-gray-300">
            Create an awesome GitHub profile in seconds
          </p>
        </div>

        <form 
          onSubmit={handleSubmit}
          className="backdrop-blur-lg rounded-lg p-6 shadow-xl bg-white/10"
        >
          <div className="relative">
            <input
              type="text"
              value={username}
              name='username'
              autoComplete='off'
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your GitHub username"
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-gray-400 bg-white/10 text-white border-gray-600"
            />
            <button
              type="submit"
              disabled={!username.trim() || isLoading}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md px-4 py-2 flex items-center gap-2 transition-all bg-blue-500 hover:bg-blue-600 disabled:bg-blue-800 text-white"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  Next
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>

        <button
          onClick={handleDefaultSubmit}
          className="mt-4 w-full rounded-lg px-4 py-3 transition-all bg-gray-700 hover:bg-gray-800 text-white"
        >
          Use Default Username
        </button>

        <p className="text-center mt-4 text-sm text-gray-400">
          Your data will be used to generate a personalized README profile
        </p>
      </div>
    </div>
  );
}