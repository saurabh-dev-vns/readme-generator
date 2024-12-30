import { generateMinimalTemplate } from './minimal';
import { generateDetailedTemplate } from './detailed';
import { generateModernTemplate } from './modern';
import type { UserData } from '../components/UserForm';

export function generateMarkdown(userData: UserData, template: string, username: string): string {
  const { name, bio, skills, projects, selectedStats, socials, customSections } = userData;

  switch (template) {
    case 'minimal':
      return generateMinimalTemplate(name, bio, skills, projects, username, selectedStats, socials, customSections);
    case 'detailed':
      return generateDetailedTemplate(name, bio, skills, projects, username, selectedStats, socials, customSections);
    case 'modern':
      return generateModernTemplate(name, bio, skills, projects, username, selectedStats, socials, customSections);
    default:
      return '';
  }
}