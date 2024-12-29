import React from 'react';
import { Download } from 'lucide-react';

interface DataPreviewProps {
  data: any[];
  onDownload: () => void;
}

export function DataPreview({ data, onDownload }: DataPreviewProps) {
  if (!data.length) return null;

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Generated Data Preview</h2>
        <button
          onClick={onDownload}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          <Download size={20} />
          Download JSON
        </button>
      </div>
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {Object.keys(data[0]).map((key) => (
                <th
                  key={key}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.slice(0, 5).map((item, index) => (
              <tr key={index}>
                {Object.values(item).map((value: any, i) => (
                  <td key={i} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {typeof value === 'boolean' ? value.toString() : value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}