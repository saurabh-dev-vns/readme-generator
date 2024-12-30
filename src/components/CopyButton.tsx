import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

// Define the props for the CopyButton component
type CopyButtonProps = {
  onCopy: () => Promise<void>; // Function to be called when the button is clicked
};

// CopyButton component definition
export function CopyButton({ onCopy }: CopyButtonProps) {
  const [copied, setCopied] = useState(false); // State to track if the text has been copied

  // Function to handle the copy action
  const handleCopy = async () => {
    await onCopy(); // Call the onCopy function passed as a prop
    setCopied(true); // Set the copied state to true
    setTimeout(() => setCopied(false), 5000); // Reset the copied state after 5 seconds
  };

  return (
    <button
      onClick={handleCopy} // Attach the handleCopy function to the button's onClick event
      className={`flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-300 bg-gray-800 border rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
        copied ? 'border-green-500 text-green-400' : 'border-gray-600' // Change styles based on the copied state
      }`}
    >
      {copied ? (
        <>
          <Check className="w-4 h-4" /> {/* Show check icon when copied */}
          Copied!
        </>
      ) : (
        <>
          <Copy className="w-4 h-4" /> {/* Show copy icon when not copied */}
          Copy
        </>
      )}
    </button>
  );
}