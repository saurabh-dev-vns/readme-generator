import { Share2 } from 'lucide-react';
import { socialPlatforms } from '../data/socialPlatforms';

type SocialMediaSelectorProps = {
  socials: Record<string, string>;
  onSocialsChange: (socials: Record<string, string>) => void;
};

export function SocialMediaSelector({ socials, onSocialsChange }: SocialMediaSelectorProps) {
  const handleSocialChange = (platform: string, value: string) => {
    onSocialsChange({ ...socials, [platform]: value });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Share2 className="w-5 h-5 text-white" />
        <h2 className="text-lg font-semibold text-white">Social Media</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {socialPlatforms.map((platform) => (
          <div key={platform.name} className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-400">
              <platform.icon className="w-4 h-4" />
              {platform.label}
            </label>
            <input
              type="text"
              value={socials[platform.name] || ''}
              onChange={(e) => handleSocialChange(platform.name, e.target.value)}
              placeholder={platform.placeholder}
              className="w-full p-2 border rounded-lg bg-gray-800 text-white border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}