// Define the BadgeConfig type
type BadgeConfig = {
  name: string;
  color: string;
  logo: string;
  logoColor?: string;
};

// Define the BADGE_CONFIGS object containing badge configurations
const BADGE_CONFIGS: Record<string, BadgeConfig> = {
  // Languages
  'C': { name: 'c', color: '00599C', logo: 'c', logoColor: 'white' },
  'Python': { name: 'python', color: '3670A0', logo: 'python', logoColor: 'ffdd54' },
  'JavaScript': { name: 'javascript', color: '323330', logo: 'javascript', logoColor: 'F7DF1E' },
  'TypeScript': { name: 'typescript', color: '007ACC', logo: 'typescript', logoColor: 'white' },
  
  // Frontend
  'HTML5': { name: 'html5', color: 'E34F26', logo: 'html5', logoColor: 'white' },
  'CSS3': { name: 'css3', color: '1572B6', logo: 'css3', logoColor: 'white' },
  'React': { name: 'react', color: '20232a', logo: 'react', logoColor: '61DAFB' },
  'Vue': { name: 'vue.js', color: '4FC08D', logo: 'vue.js', logoColor: 'white' },
  'Angular': { name: 'angular', color: 'DD0031', logo: 'angular', logoColor: 'white' },
  'Next.js': { name: 'Next', color: 'black', logo: 'next.js', logoColor: 'white' },
  'Tailwind': { name: 'tailwindcss', color: '38B2AC', logo: 'tailwind-css', logoColor: 'white' },
  'Bootstrap': { name: 'bootstrap', color: '8511FA', logo: 'bootstrap', logoColor: 'white' },
  
  // Backend
  'Node.js': { name: 'node.js', color: '6DA55F', logo: 'node.js', logoColor: 'white' },
  'Express.js': { name: 'express.js', color: '404d59', logo: 'express', logoColor: '61DAFB' },
  
  // Tools
  'VS Code': { name: 'Visual%20Studio%20Code', color: '007ACC', logo: 'visual-studio-code', logoColor: 'white' },
  'Git': { name: 'git', color: 'F05032', logo: 'git', logoColor: 'white' },
  'Docker': { name: 'docker', color: '2496ED', logo: 'docker', logoColor: 'white' },
  'Kubernetes': { name: 'kubernetes', color: '326CE5', logo: 'kubernetes', logoColor: 'white' },
  
  // Databases
  'MongoDB': { name: 'MongoDB', color: '4ea94b', logo: 'mongodb', logoColor: 'white' },
  
  // Build Tools
  'Vite': { name: 'vite', color: '646CFF', logo: 'vite', logoColor: 'white' },
};

// Function to get the skill badge markdown string
export function getSkillBadge(skillName: string): string {
  const config = BADGE_CONFIGS[skillName];
  if (!config) return '';
  
  const { name, color, logo, logoColor = 'white' } = config;
  return `![${skillName}](https://img.shields.io/badge/${name}-${color}?style=for-the-badge&logo=${logo}&logoColor=${logoColor})`;
}