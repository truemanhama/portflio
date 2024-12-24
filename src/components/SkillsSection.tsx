import React from 'react';
import { Skill } from '../data/skills';

interface SkillsSectionProps {
  skills: Skill[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-bold text-gray-900">Skills </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 text-lg font-semibold text-blue-600">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                    <span className="text-gray-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}