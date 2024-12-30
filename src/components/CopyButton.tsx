import  { useState } from 'react';
import { Copy, Check } from 'lucide-react';

type CopyButtonProps = {
  onCopy: () => Promise<void>;
};

export function CopyButton({ onCopy }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await onCopy();
    setCopied(true);
    setTimeout(() => setCopied(false), 5000);
  };

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-300 bg-gray-800 border rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
        copied ? 'border-green-500 text-green-400' : 'border-gray-600'
      }`}
    >
      {copied ? (
        <>
          <Check className="w-4 h-4" />
          Copied!
        </>
      ) : (
        <>
          <Copy className="w-4 h-4" />
          Copy
        </>
      )}
    </button>
  );
}