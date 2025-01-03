import { FileEdit, GripVertical } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid'; // Add this import

// Define the type for a custom section
export type CustomSection = {
  id: string;
  title: string;
  content: string;
  position: number;
};

// Define the props for the CustomMarkdownSection component
type CustomMarkdownSectionProps = {
  sections: CustomSection[];
  onSectionsChange: (sections: CustomSection[]) => void;
};

// Main component to manage custom markdown sections
export function CustomMarkdownSection({ sections, onSectionsChange }: CustomMarkdownSectionProps) {
  // Function to add a new section
  const addSection = () => {
    const newSection: CustomSection = {
      id: uuidv4(), // Generate a unique ID for the new section
      title: '',
      content: '',
      position: sections.length,
    };
    onSectionsChange([...sections, newSection]); // Update the sections state with the new section
  };

  // Function to update an existing section
  const updateSection = (id: string, updates: Partial<CustomSection>) => {
    onSectionsChange(
      sections.map(section => 
        section.id === id ? { ...section, ...updates } : section // Update the section with the matching ID
      )
    );
  };

  // Function to remove a section
  const removeSection = (id: string) => {
    onSectionsChange(sections.filter(section => section.id !== id)); // Filter out the section with the matching ID
  };

  return (
      <div className="space-y-4">
        {/* Header with title and add button */}
        <div className="flex flex-col sm:flex-row justify-between gap-2">
          <div className="flex items-center gap-2">
            <FileEdit className="w-5 h-5 text-white" />
            <h2 className="text-lg font-semibold text-white">Custom Sections</h2>
          </div>
          <button
            onClick={addSection}
            className="px-3 py-1.5 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Add Section
          </button>
        </div>
        
        {/* List of sections */}
        <div className="space-y-4">
          {sections.map((section, index) => (
            <Section key={section.id} section={section} index={index} updateSection={updateSection} removeSection={removeSection} />
          ))}
        </div>
      </div>
  );
}

// Component to render an individual section
const Section = ({ section, updateSection, removeSection }: { section: CustomSection; index: number; updateSection: (id: string, updates: Partial<CustomSection>) => void; removeSection: (id: string) => void }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg border border-gray-600 shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <button className="cursor-move p-1 hover:bg-gray-700 rounded" title="Drag to reorder">
          <GripVertical className="w-4 h-4 text-gray-400" />
        </button>
        <input
          type="text"
          value={section.title}
          onChange={(e) => updateSection(section.id, { title: e.target.value })} // Update the section title
          placeholder="Section Title"
          className="flex-1 p-2 border outline-none rounded-md bg-gray-700 text-white border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <button onClick={() => removeSection(section.id)} className="px-2 py-1 text-sm text-red-600 hover:text-red-700 focus:outline-none">
          Remove
        </button>
      </div>
      <textarea
        value={section.content}
        onChange={(e) => updateSection(section.id, { content: e.target.value })} // Update the section content
        placeholder="Enter markdown content..."
        className="w-full h-32 p-2 border outline-none rounded-md bg-gray-700 text-white border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
};