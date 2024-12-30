import { Twitter, Linkedin, Globe, Mail, Github } from 'lucide-react';

export const socialPlatforms = [
  {
    name: 'twitter',
    label: 'Twitter',
    icon: Twitter,
    placeholder: 'username',
    badgeFormat: (username: string) => 
      `[![Twitter](https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white)](https://twitter.com/${username})`
  },
  {
    name: 'linkedin',
    label: 'LinkedIn',
    icon: Linkedin,
    placeholder: 'profile URL or username',
    badgeFormat: (username: string) => 
      `[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/${username})`
  },
  {
    name: 'website',
    label: 'Website',
    icon: Globe,
    placeholder: 'https://your-website.com',
    badgeFormat: (url: string) => 
      `[![Website](https://img.shields.io/badge/Website-%23000000.svg?style=for-the-badge&logo=About.me&logoColor=white)](${url})`
  },
  {
    name: 'email',
    label: 'Email',
    icon: Mail,
    placeholder: 'email@example.com',
    badgeFormat: (email: string) => 
      `[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:${email})`
  },
  {
    name: 'github',
    label: 'GitHub',
    icon: Github,
    placeholder: 'username',
    badgeFormat: (username: string) => 
      `[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/${username})`
  }
];