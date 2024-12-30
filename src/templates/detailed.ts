import { getSkillBadge } from '../utils/skillBadges';
import { generateGitHubStats } from '../utils/githubStats';
import { generateSocialBadges } from '../utils/generateSocialBadges';
import { generateCustomSections } from '../utils/generateCustomSections';
import { CustomSection } from '../components/CustomMarkdownSection';

export function generateDetailedTemplate(
  name: string, 
  bio: string, 
  skills: string[], 
  projects: string,
  username: string,
  selectedStats: string[],
  socials: Record<string, string>,
  customSections: CustomSection[] = [] 
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
  return `# ${name}

## About Me
${bio}

## 🤝 Connect with Me
${socialBadges}

## 🛠 Skills
${skillBadges}

${customContent}

## 📊 GitHub Stats
${stats}

## 🚀 Projects
${projects}
`;
}