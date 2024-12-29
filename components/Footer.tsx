import React from 'react';
import { Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-12 py-6 border-t">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} Test Data Generator. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/aryan1112003"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <span className="text-sm text-gray-600">
              Created by <a 
                href="https://github.com/aryan1112003"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                Aryan Acharya
              </a>
            </span>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 mt-4">
          This tool is designed to generate test data for development purposes only.
          <br />
          Not intended for production use with real personal information.
        </div>
      </div>
    </footer>
  );
}