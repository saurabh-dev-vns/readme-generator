import { socialPlatforms } from '../data/socialPlatforms';

export function generateSocialBadges(socials: Record<string, string>): string {
  return Object.entries(socials)
    .filter(([_, value]) => value.trim())
    .map(([platform, value]) => {
      const platformConfig = socialPlatforms.find(p => p.name === platform);
      return platformConfig ? platformConfig.badgeFormat(value) : '';
    })
    .filter(Boolean)
    .join('\n');
}