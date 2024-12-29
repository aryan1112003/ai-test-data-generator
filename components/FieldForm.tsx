import React from 'react';
import { PlusCircle, Trash2 } from 'lucide-react';
import type { Field } from '../types/schema';

interface FieldFormProps {
  fields: Field[];
  onAddField: () => void;
  onRemoveField: (index: number) => void;
  onUpdateField: (index: number, field: Field) => void;
}

export function FieldForm({ fields, onAddField, onRemoveField, onUpdateField }: FieldFormProps) {
  const fieldTypes = ['string', 'number', 'boolean', 'date', 'email', 'phone', 'address', 'name'];

  return (
    <div className="space-y-4">
      {fields.map((field, index) => (
        <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow">
          <input
            type="text"
            placeholder="Field name"
            value={field.name}
            onChange={(e) => onUpdateField(index, { ...field, name: e.target.value })}
            className="flex-1 px-3 py-2 border rounded"
          />
          <select
            value={field.type}
            onChange={(e) => onUpdateField(index, { ...field, type: e.target.value as Field['type'] })}
            className="px-3 py-2 border rounded"
          >
            {fieldTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {field.type === 'number' && (
            <>
              <input
                type="number"
                placeholder="Min"
                value={field.min}
                onChange={(e) => onUpdateField(index, { ...field, min: parseInt(e.target.value) })}
                className="w-20 px-3 py-2 border rounded"
              />
              <input
                type="number"
                placeholder="Max"
                value={field.max}
                onChange={(e) => onUpdateField(index, { ...field, max: parseInt(e.target.value) })}
                className="w-20 px-3 py-2 border rounded"
              />
            </>
          )}
          <button
            onClick={() => onRemoveField(index)}
            className="p-2 text-red-600 hover:bg-red-50 rounded"
          >
            <Trash2 size={20} />
          </button>
        </div>
      ))}
      <button
        onClick={onAddField}
        className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded"
      >
        <PlusCircle size={20} />
        Add Field
      </button>
    </div>
  );
}