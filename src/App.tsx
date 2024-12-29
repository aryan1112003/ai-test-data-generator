import React, { useState } from 'react';
import { Database } from 'lucide-react';
import type { Field, GeneratorSchema } from './types/schema';
import { generateData } from './utils/generators';
import { FieldForm } from './components/FieldForm';
import { DataPreview } from './components/DataPreview';
import { DomainSelector } from './components/DomainSelector';
import { Footer } from './components/Footer';
import { downloadJson } from './utils/download';

export default function App() {
  const [schema, setSchema] = useState<GeneratorSchema>({
    fields: [],
    count: 100,
    domain: ''
  });
  const [generatedData, setGeneratedData] = useState<any[]>([]);

  const handleGenerateData = () => {
    const data = generateData(schema.fields, schema.count);
    setGeneratedData(data);
  };

  const handleDownload = () => {
    downloadJson(generatedData, `test-data-${schema.domain || 'custom'}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-8">
        <div className="max-w-6xl mx-auto">
          <header className="mb-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Database className="w-10 h-10 text-blue-600" />
              <h1 className="text-3xl font-bold">Test Data Generator</h1>
            </div>
            <p className="text-gray-600">Generate realistic test data for your applications</p>
            <div className="text-sm text-gray-500 mt-2">
              Created by Aryan Acharya
            </div>
          </header>

          <main className="space-y-8">
            <DomainSelector 
              onSelectTemplate={(template) => {
                setSchema(prev => ({
                  ...prev,
                  fields: template.fields,
                  domain: template.name
                }));
              }} 
            />
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Configure Fields</h2>
                <div className="flex items-center gap-4">
                  <label className="text-sm text-gray-600">
                    Record Count:
                    <input
                      type="number"
                      min="1"
                      max="1000"
                      value={schema.count}
                      onChange={(e) => setSchema(prev => ({ ...prev, count: parseInt(e.target.value) || 100 }))}
                      className="ml-2 w-24 px-2 py-1 border rounded"
                    />
                  </label>
                  <button
                    onClick={handleGenerateData}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Generate Data
                  </button>
                </div>
              </div>
              
              <FieldForm
                fields={schema.fields}
                onAddField={() => setSchema(prev => ({
                  ...prev,
                  fields: [...prev.fields, { name: '', type: 'string' }]
                }))}
                onRemoveField={(index) => setSchema(prev => ({
                  ...prev,
                  fields: prev.fields.filter((_, i) => i !== index)
                }))}
                onUpdateField={(index, field) => setSchema(prev => ({
                  ...prev,
                  fields: prev.fields.map((f, i) => i === index ? field : f)
                }))}
              />
            </div>

            <DataPreview 
              data={generatedData} 
              onDownload={handleDownload}
            />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}