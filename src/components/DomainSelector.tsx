import React from 'react';
import { domainTemplates } from '../data/templates';
import type { Template } from '../types/schema';

interface DomainSelectorProps {
  onSelectTemplate: (template: Template) => void;
}

export function DomainSelector({ onSelectTemplate }: DomainSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      {domainTemplates.map((template) => (
        <button
          key={template.name}
          onClick={() => onSelectTemplate(template)}
          className="p-4 border rounded-lg hover:bg-blue-50 transition-colors text-left"
        >
          <h3 className="text-lg font-semibold text-blue-600">{template.name}</h3>
          <p className="text-sm text-gray-600 mt-1">{template.description}</p>
        </button>
      ))}
    </div>
  );
}