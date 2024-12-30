import type { CustomSection } from '../components/CustomMarkdownSection';

export function generateCustomSections(sections: CustomSection[] | undefined | null): string {
  if (!Array.isArray(sections)) {
    console.error('Invalid input: sections must be an array. Received:', sections);
    return ''; // Return an empty string if the input is invalid
  }

  return sections
    .sort((a, b) => a.position - b.position)
    .map(section => {
      const title = section.title.trim();
      return title
        ? `## ${title}\n${section.content}`
        : section.content;
    })
    .filter(Boolean)
    .join('\n\n');
}
