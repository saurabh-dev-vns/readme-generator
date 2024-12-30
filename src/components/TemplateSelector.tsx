import { Layout } from 'lucide-react';

type Template = {
  id: string;
  name: string;
  description: string;
};

const templates: Template[] = [
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'Clean and simple layout focusing on essential information'
  },
  {
    id: 'detailed',
    name: 'Detailed',
    description: 'Comprehensive layout with sections for projects, skills, and stats'
  },
  {
    id: 'modern',
    name: 'Modern',
    description: 'Contemporary design with badges and dynamic content'
  }
];

type TemplateSelectorProps = {
  selectedTemplate: string;
  onTemplateChange: (templateId: string) => void;
};

export function TemplateSelector({ selectedTemplate, onTemplateChange }: TemplateSelectorProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-lg font-semibold text-white">
        <Layout className="w-5 h-5 text-white" />
        <h2>Choose Template</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {templates.map((template) => (
          <button
            key={template.id}
            onClick={() => onTemplateChange(template.id)}
            className={`p-4 rounded-lg border-2 text-left transition-all ${
              selectedTemplate === template.id
                ? 'border-blue-500 bg-blue-900'
                : 'border-gray-600 bg-gray-800 hover:border-blue-200'
            } text-white`}
          >
            <h3 className="font-medium">{template.name}</h3>
            <p className="text-sm text-gray-400 mt-1">{template.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}