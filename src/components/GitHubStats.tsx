import { BarChart2 } from 'lucide-react';

type StatsOption = {
  id: string;
  label: string;
  description: string;
};

const statsOptions: StatsOption[] = [
  {
    id: 'basic-stats',
    label: 'Basic Stats',
    description: 'Show total stars, commits, and contributions'
  },
  {
    id: 'languages',
    label: 'Top Languages',
    description: 'Display most used programming languages'
  },
  {
    id: 'streak',
    label: 'GitHub Streak',
    description: 'Show your contribution streak'
  },
  {
    id: 'trophy',
    label: 'Profile Trophy',
    description: 'Display GitHub achievement trophies'
  }
];

type GitHubStatsProps = {
  selectedStats: string[];
  onStatsChange: (stats: string[]) => void;
  username: string;
};

export function GitHubStats({ selectedStats, onStatsChange, username }: GitHubStatsProps) {
  const toggleStat = (statId: string) => {
    if (selectedStats.includes(statId)) {
      onStatsChange(selectedStats.filter(id => id !== statId));
    } else {
      onStatsChange([...selectedStats, statId]);
    }
  };

  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <BarChart2 className={`w-5 h-5 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} />
        <h2 className={`text-lg font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>GitHub Stats</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {statsOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => toggleStat(option.id)}
            className={`p-4 rounded-lg border-2 text-left transition-all ${
              selectedStats.includes(option.id)
                ? 'border-blue-500 bg-blue-900'
                : `${isDarkMode ? 'border-gray-700 hover:border-blue-500' : 'border-gray-400 hover:border-blue-500'}`
            } ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}
          >
            <h3 className="font-medium">{option.label}</h3>
            <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>{option.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}