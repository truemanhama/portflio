import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  tags: string[];
}

export function ProjectCard({ title, description, imageUrl, link, tags }: ProjectProps) {
  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer" 
      className="group block overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl"
    >
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <ExternalLink className="h-5 w-5 text-gray-600 transition-colors group-hover:text-blue-600" />
        </div>
        <p className="mt-2 text-gray-600">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}