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
  // Generate skill badges
  const skillBadges = skills
    .map(skill => getSkillBadge(skill))
    .filter(Boolean)
    .join(' ');

  // Generate GitHub stats
  const stats = generateGitHubStats(username, selectedStats);
  
  // Generate social badges
  const socialBadges = generateSocialBadges(socials);
  
  // Generate custom sections
  const customContent = generateCustomSections(customSections);

  // Return the final markdown string
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