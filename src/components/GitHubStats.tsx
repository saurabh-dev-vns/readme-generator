import { BarChart2 } from 'lucide-react';

// Define the type for stats options
type StatsOption = {
  id: string; // Unique identifier for the stat option
  label: string; // Display label for the stat option
  description: string; // Description of what the stat option represents
};

// Array of stats options to be displayed
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

// Define the props for the GitHubStats component
type GitHubStatsProps = {
  selectedStats: string[]; // Array of currently selected stat option IDs
  onStatsChange: (stats: string[]) => void; // Callback function to handle changes in selected stats
  username: string; // GitHub username for which stats are being displayed
};

// GitHubStats component definition
export function GitHubStats({ selectedStats, onStatsChange, username }: GitHubStatsProps) {
  // Function to toggle the selection of a stat option
  const toggleStat = (statId: string) => {
    if (selectedStats.includes(statId)) {
      // If the stat is already selected, remove it from the selection
      onStatsChange(selectedStats.filter(id => id !== statId));
    } else {
      // If the stat is not selected, add it to the selection
      onStatsChange([...selectedStats, statId]);
    }
  };

  return (
    <div className="space-y-4">
      {/* Header with icon and title */}
      <div className="flex items-center gap-2">
        <BarChart2 className="w-5 h-5 text-white" />
        <h2 className="text-lg font-semibold text-gray-200">GitHub Stats</h2>
      </div>
      {/* Grid of stat options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {statsOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => toggleStat(option.id)}
            className={`p-4 rounded-lg border-2 text-left transition-all ${
              selectedStats.includes(option.id)
                ? 'border-blue-500 bg-blue-900' // Style for selected stat option
                : 'border-gray-700 hover:border-blue-500' // Style for unselected stat option
            } text-gray-200`}
          >
            <h3 className="font-medium">{option.label}</h3>
            <p className="text-sm mt-1 text-gray-400">{option.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}