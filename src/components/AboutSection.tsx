import React from 'react';
import { AwardIcon, BriefcaseIcon, GraduationCapIcon } from 'lucide-react';
export const AboutSection = () => {
  return <section id="about" className="w-full py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-gray-300 mb-6">
              I'm a passionate motion designer and video editor with over 5
              years of experience creating compelling visual content. My work
              focuses on telling stories through animation, visual effects, and
              thoughtful editing.
            </p>
            <p className="text-gray-300 mb-8">
              I've collaborated with brands and agencies to create content that
              engages audiences and delivers messages with impact. My approach
              combines technical expertise with creative vision to produce work
              that stands out.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-2 bg-purple-500/20 rounded-full">
                  <BriefcaseIcon className="h-5 w-5 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">5+ Years Experience</h3>
                  <p className="text-gray-400">
                    Professional motion design & video editing
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-2 bg-purple-500/20 rounded-full">
                  <AwardIcon className="h-5 w-5 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Award Winning</h3>
                  <p className="text-gray-400">
                    Recognized for creative excellence
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-2 bg-purple-500/20 rounded-full">
                  <GraduationCapIcon className="h-5 w-5 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                    BFA in Digital Media
                  </h3>
                  <p className="text-gray-400">
                    Specialized in motion graphics
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden relative z-10">
              <img src="https://drive.google.com/uc?export=view&id=1BZcZmfH73RANY07itKhUGUdCXAd2E3rh" alt="Portrait" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-8 -right-8 bottom-8 -left-8 border-2 border-purple-500 rounded-lg -z-0"></div>
          </div>
        </div>
      </div>
    </section>;
};