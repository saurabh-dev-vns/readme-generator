import { Award } from 'lucide-react';
import { skillsData} from '../data/skills';

type SkillsSelectorProps = {
  selectedSkills: string[];
  onSkillsChange: (skills: string[]) => void;
};

export function SkillsSelector({ selectedSkills, onSkillsChange }: SkillsSelectorProps) {
  const toggleSkill = (skillName: string) => {
    if (selectedSkills.includes(skillName)) {
      onSkillsChange(selectedSkills.filter(s => s !== skillName));
    } else {
      onSkillsChange([...selectedSkills, skillName]);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Award className="w-5 h-5 text-gray-900 dark:text-gray-100" />
        <label className="block text-lg font-semibold text-gray-900 dark:text-gray-100">Skills</label>
      </div>
      <div className="space-y-6">
        {skillsData.map((category) => (
          <div key={category.name} className="space-y-2">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">{category.name}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {category.skills.map((skill) => (
                <button
                  key={skill.name}
                  onClick={() => toggleSkill(skill.name)}
                  className={`flex items-center gap-2 p-2 rounded-lg border transition-all ${
                    selectedSkills.includes(skill.name)
                      ? 'border-blue-500 bg-blue-900 text-white'
                      : 'border-gray-400 bg-gray-200 text-gray-900 hover:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:hover:border-blue-500'
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