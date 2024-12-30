import { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { UserForm, type UserData } from './components/UserForm';
import { TemplateSelector } from './components/TemplateSelector';
import { Preview } from './components/Preview';
import { GithubIcon, Plus } from 'lucide-react';

const initialUserData: UserData = {
  name: '',
  bio: '',
  skills: [],
  projects: '',
  selectedStats: [],
  socials: {},
  customSections: []
};

export default function App() {
  const [username, setUsername] = useState<string | null>(null);
  const [userData, setUserData] = useState<UserData>(initialUserData);
  const [selectedTemplate, setSelectedTemplate] = useState('minimal');

  const handleUserDataChange = (data: Partial<UserData>) => {
    setUserData(prev => ({ ...prev, ...data }));
  };

  const handleCreateNew = () => {
    setUsername(null);
    setUserData(initialUserData);
    setSelectedTemplate('minimal');
    console.log('Initialized new README creation.');
  };

  if (!username) {
    return <LandingPage onSubmit={setUsername} />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 shadow-sm fixed w-full top-0 left-0 z-10 bg-opacity-90 backdrop-filter backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <GithubIcon className="w-8 h-8 text-white" />
              <h1 className="text-xl font-bold text-white">GitHub README Generator</h1>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="text-sm text-gray-300">
                Generating for: <span className="font-medium">{username}</span>
              </div>
              <button
                onClick={handleCreateNew}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label="Create a new README"
              >
                <Plus className="w-4 h-4" />
                Create New
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-44 max-w-7xl mx-auto px-4 sm:pt-28 md:pt-20 lg:pt-24 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <TemplateSelector
              selectedTemplate={selectedTemplate}
              onTemplateChange={setSelectedTemplate}
            />
            <UserForm
              userData={userData}
              onUserDataChange={handleUserDataChange}
              username={username}
            />
          </div>
          <div className="space-y-8">
            <Preview
              userData={userData}
              template={selectedTemplate}
              username={username}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
