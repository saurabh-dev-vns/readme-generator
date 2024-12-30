import type { CustomSection } from '../components/CustomMarkdownSection';

// Function to generate custom sections markdown string
export function generateCustomSections(sections: CustomSection[] | undefined | null): string {
  if (!Array.isArray(sections)) {
    console.error('Invalid input: sections must be an array. Received:', sections);
    return ''; // Return an empty string if the input is invalid
  }

  return sections
    .sort((a, b) => a.position - b.position) // Sort sections by position
    .map(section => {
      const title = section.title.trim();
      return title
        ? `## ${title}\n${section.content}` // Add title if it exists
        : section.content; // Otherwise, just add content
    })
    .filter(Boolean) // Filter out empty strings
    .join('\n\n');
}
