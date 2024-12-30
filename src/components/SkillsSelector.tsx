import { Award } from 'lucide-react';
import { skillsData } from '../data/skills';

// Define the props for the SkillsSelector component
type SkillsSelectorProps = {
  selectedSkills: string[];
  onSkillsChange: (skills: string[]) => void;
};

// SkillsSelector component
export function SkillsSelector({ selectedSkills, onSkillsChange }: SkillsSelectorProps) {
  // Function to toggle the selection of a skill
  const toggleSkill = (skillName: string) => {
    if (selectedSkills.includes(skillName)) {
      onSkillsChange(selectedSkills.filter(s => s !== skillName)); // Remove skill if already selected
    } else {
      onSkillsChange([...selectedSkills, skillName]); // Add skill if not selected
    }
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center gap-2">
        <Award className="w-5 h-5 text-gray-100" />
        <label className="block text-lg font-semibold text-gray-100">Skills</label>
      </div>
      {/* Skills categories */}
      <div className="space-y-6">
        {skillsData.map((category) => (
          <div key={category.name} className="space-y-2">
            <h3 className="text-sm font-medium text-gray-300">{category.name}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {category.skills.map((skill) => (
                <button
                  key={skill.name}
                  onClick={() => toggleSkill(skill.name)}
                  className={`flex items-center gap-2 p-2 rounded-lg border transition-all ${
                    selectedSkills.includes(skill.name)
                      ? 'border-blue-500 bg-blue-900 text-white'
                      : 'border-gray-600 bg-gray-700 text-gray-100 hover:border-blue-500'
                  }`}
                >
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-5 h-5"
                  />
                  <span className="text-sm">{skill.name}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}