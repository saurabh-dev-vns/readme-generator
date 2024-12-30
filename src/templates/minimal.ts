import { getSkillBadge } from '../utils/skillBadges';
import { generateGitHubStats } from '../utils/githubStats';
import { generateSocialBadges } from '../utils/generateSocialBadges';
import { generateCustomSections } from '../utils/generateCustomSections';
import { CustomSection } from '../components/CustomMarkdownSection'; 

export function generateMinimalTemplate(
  name: string, 
  bio: string, 
  skills: string[], 
  projects: string,
  username: string,
  selectedStats: string[],
  socials: Record<string, string>,
  customSections: CustomSection[] = [] // Provide default value

): string {
  const skillBadges = skills
    .map(skill => getSkillBadge(skill))
    .filter(Boolean)
    .join(' ');

  const stats = generateGitHubStats(username, selectedStats);
  const socialBadges = generateSocialBadges(socials);
  const customContent = generateCustomSections(customSections);

  return `# Hi there 👋 I'm ${name}

${bio}

## Connect with Me
${socialBadges}

## Skills
${skillBadges}

${customContent}

## GitHub Stats
${stats}

## Projects
${projects}
`;
}