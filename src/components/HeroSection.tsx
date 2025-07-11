import React from 'react';
import { ArrowDownIcon, PlayCircleIcon } from 'lucide-react';
export const HeroSection = () => {
  return <section id="home" className="w-full min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 md:px-6 py-12 flex flex-col items-center text-center">
        <div className="animate-pulse inline-block p-2 rounded-full bg-purple-500/20 mb-6">
          <PlayCircleIcon className="h-8 w-8 text-purple-500" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Motion Design & <span className="text-purple-500">Video Editing</span>{' '}
          Portfolio
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mb-12">
          Creating captivating visual stories through motion design and
          professional video editing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#projects" className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-md font-medium transition-colors">
            View My Work
          </a>
          <a href="#contact" className="px-8 py-3 bg-transparent border border-white hover:border-purple-500 hover:text-purple-500 rounded-md font-medium transition-colors">
            Get In Touch
          </a>
        </div>
        <a href="#projects" className="absolute bottom-10 animate-bounce flex items-center mt-24 text-gray-400 hover:text-purple-500">
          <span className="mr-2">Scroll</span>
          <ArrowDownIcon className="h-4 w-4" />
        </a>
      </div>
    </section>;
};