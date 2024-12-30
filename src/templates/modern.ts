import { getSkillBadge } from '../utils/skillBadges';
import { generateGitHubStats } from '../utils/githubStats';
import { generateSocialBadges } from '../utils/generateSocialBadges';
import { generateCustomSections } from '../utils/generateCustomSections';
import { CustomSection } from '../components/CustomMarkdownSection';

export function generateModernTemplate(
  name: string, 
  bio: string, 
  skills: string[], 
  projects: string,
  username: string,
  selectedStats: string[],
  socials: Record<string, string>,
  customSections: CustomSection[] = []
): string {
  const skillBadges = skills
    .map(skill => getSkillBadge(skill))
    .filter(Boolean)
    .join(' ');

  const stats = generateGitHubStats(username, selectedStats);
  const socialBadges = generateSocialBadges(socials);
  const customContent = generateCustomSections(customSections);

  return `

# 👋 Hi, I'm ${name}

${bio}

## 🤝 Connect with Me

${socialBadges}

## 💻 Technologies & Tools

${skillBadges}

${customContent}

## 📊 GitHub Stats

${stats}

## 🚀 Projects

${projects}

`;
}