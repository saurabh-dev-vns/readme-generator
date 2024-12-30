import React from 'react';
import { Eye, Download } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { UserData } from './UserForm';
import { generateMarkdown } from '../templates';
import { CopyButton } from './CopyButton';

type PreviewProps = {
  userData: UserData;
  template: string;
  username: string;
};

export function Preview({ userData, template, username }: PreviewProps) {
  // State to manage custom sections
  const [sections, setSections] = React.useState(userData.customSections || []);
  
  // Update sections when userData.customSections changes
  React.useEffect(() => {
    setSections(userData.customSections || []);
  }, [userData.customSections]);

  // Generate markdown using userData, template, and username
  const markdown = React.useMemo(() => {
    try {
      return generateMarkdown({ ...userData, customSections: sections }, template, username);
    } catch (error) {
      console.error('Error generating markdown:', error);
      return 'Error generating preview. Please check your inputs.';
    }
  }, [userData, template, username, sections]);

  // Function to copy markdown to clipboard
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(markdown);
    } catch (error) {
      console.error('Failed to copy markdown:', error);
    }
  };

  // Function to download markdown as README.md file
  const handleDownload = () => {
    try {
      const blob = new Blob([markdown], { type: 'text/markdown' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'README.md';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Failed to download markdown:', error);
    }
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Eye className="w-5 h-5 text-white" />
          <h2 className="text-lg font-semibold text-gray-100">Preview</h2>
        </div>
        <div className="flex items-center gap-2">
          <CopyButton onCopy={handleCopy} />
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-100 bg-gray-900 border-gray-700 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Download className="w-4 h-4" />
            Download
          </button>
        </div>
      </div>
      {/* Markdown preview */}
      <div className="p-6 rounded-lg border shadow-sm bg-gray-900 border-gray-700">
        <div className="prose prose-sm prose-invert text-gray-100">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              img: ({ node, ...props }) => {
                const isGitHubStat =
                  props.src?.includes('github-readme-stats') ||
                  props.src?.includes('github-readme-streak-stats') ||
                  props.src?.includes('github-profile-trophy');
                return (
                  <img
                    {...props}
                    className={`inline-block ${isGitHubStat ? 'w-full max-w-2xl my-4' : 'h-10'}`}
                    style={{
                      objectFit: isGitHubStat ? 'contain' : 'cover',
                    }}
                  />
                );
              },
            }}
          >
            {markdown}
          </ReactMarkdown>
        </div>
      </div>
      {/* Raw markdown */}
      <div className="p-6 rounded-lg border bg-gray-800 border-gray-700">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-400">Raw Markdown</span>
          <CopyButton onCopy={handleCopy} />
        </div>
        <pre className="whitespace-pre-wrap font-mono text-sm text-gray-300">
          {markdown}
        </pre>
      </div>
    </div>
  );
}
