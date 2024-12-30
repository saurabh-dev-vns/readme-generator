import { socialPlatforms } from '../data/socialPlatforms';

// Function to generate social badges markdown string
export function generateSocialBadges(socials: Record<string, string>): string {
  return Object.entries(socials)
    .filter(([_, value]) => value.trim()) // Filter out empty values
    .map(([platform, value]) => {
      const platformConfig = socialPlatforms.find(p => p.name === platform);
      return platformConfig ? platformConfig.badgeFormat(value) : '';
    })
    .filter(Boolean) // Filter out empty strings
    .join('\n');
}