import React from 'react';
export const SkillsSection = () => {
  const skills = [{
    category: 'Motion Design',
    items: ['After Effects', 'Cinema 4D', 'Motion Graphics', 'Character Animation', 'Logo Animation', 'Kinetic Typography']
  }, {
    category: 'Video Editing',
    items: ['Premiere Pro', 'Final Cut Pro', 'Color Grading', 'Sound Design', 'Narrative Editing', 'Multicam Editing']
  }, {
    category: 'Additional Skills',
    items: ['Photoshop', 'Illustrator', 'Storyboarding', 'Compositing', 'VFX', '3D Modeling']
  }];
  return <section id="skills" className="w-full py-20 bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My technical skills and creative capabilities that bring projects to
            life.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => <div key={index} className="bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-purple-500 transition-colors">
              <h3 className="text-xl font-bold mb-6 text-purple-500">
                {skillGroup.category}
              </h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill, idx) => <li key={idx} className="flex items-center">
                    <div className="h-2 w-2 bg-purple-500 rounded-full mr-3"></div>
                    <span>{skill}</span>
                  </li>)}
              </ul>
            </div>)}
        </div>
        <div className="mt-16">
          <h3 className="text-xl font-bold mb-8 text-center">
            Software Proficiency
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[{
            name: 'Adobe After Effects',
            level: 95
          }, {
            name: 'Adobe Premiere Pro',
            level: 90
          }, {
            name: 'Cinema 4D',
            level: 85
          }, {
            name: 'Adobe Photoshop',
            level: 80
          }].map((software, index) => <div key={index} className="text-center">
                <div className="relative w-32 h-32 mx-auto">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle className="text-gray-700" strokeWidth="8" stroke="currentColor" fill="transparent" r="42" cx="50" cy="50" />
                    <circle className="text-purple-500" strokeWidth="8" strokeDasharray={`${software.level * 2.64}, 264`} strokeLinecap="round" stroke="currentColor" fill="transparent" r="42" cx="50" cy="50" />
                  </svg>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="text-xl font-bold">{software.level}%</span>
                  </div>
                </div>
                <p className="mt-2">{software.name}</p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};