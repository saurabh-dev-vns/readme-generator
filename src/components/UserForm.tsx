import { User, Code2, Briefcase } from 'lucide-react';
import { SkillsSelector } from './SkillsSelector';
import { GitHubStats } from './GitHubStats';
import { SocialMediaSelector } from './SocialMediaSelector';
import { CustomMarkdownSection, type CustomSection } from './CustomMarkdownSection';

export type UserData = {
  name: string;
  bio: string;
  skills: string[];
  projects: string;
  selectedStats: string[];
  socials: Record<string, string>;
  customSections: CustomSection[];
};

type UserFormProps = {
  userData: UserData;
  onUserDataChange: (data: Partial<UserData>) => void;
  username: string;
};

export function UserForm({ userData, onUserDataChange, username }: UserFormProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <User className="w-5 h-5 text-white" />
          <label htmlFor="name" className="block text-lg font-semibold text-white">Name</label>
        </div>
        <input
          id="name"
          type="text"
          name='name'
          value={userData.name}
          onChange={(e) => onUserDataChange({ name: e.target.value })}
          className="w-full p-2 border outline-none rounded-lg bg-gray-800 text-white border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Your name"
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Code2 className="w-5 h-5 text-white" />
          <label htmlFor="bio" className="block text-lg font-semibold text-white">Bio</label>
        </div>
        <textarea
          id="bio"
          value={userData.bio}
          name='bio'
          onChange={(e) => onUserDataChange({ bio: e.target.value })}
          className="w-full p-2 border outline-none rounded-lg h-24 bg-gray-800 text-white border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="A brief description about yourself"
        />
      </div>

      <SkillsSelector
        selectedSkills={userData.skills}
        onSkillsChange={(skills) => onUserDataChange({ skills })}
      />

      <SocialMediaSelector
        socials={userData.socials}
        onSocialsChange={(socials) => onUserDataChange({ socials })}
      />

      <GitHubStats
        selectedStats={userData.selectedStats}
        onStatsChange={(selectedStats) => onUserDataChange({ selectedStats })}
        username={username}
      />

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-white" />
          <label htmlFor="projects" className="block text-lg font-semibold text-white">Projects</label>
        </div>
        <textarea
          id="projects"
          name='projects'
          value={userData.projects}
          onChange={(e) => onUserDataChange({ projects: e.target.value })}
          className="w-full p-2 outline-none border rounded-lg h-24 bg-gray-800 text-white border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Your notable projects"
        />
      </div>

      <CustomMarkdownSection
        sections={userData.customSections}
        onSectionsChange={(customSections) => onUserDataChange({ customSections })}
      />
    </div>
  );
}