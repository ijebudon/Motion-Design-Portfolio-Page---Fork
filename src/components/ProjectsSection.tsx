import React, { useState } from 'react';
import { PlayIcon, ExternalLinkIcon } from 'lucide-react';
import { VideoModal } from './VideoModal';
export const ProjectsSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const projects = [{
    id: 1,
    title: 'Motion Design',
    category: 'Conference Advert',
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    videoUrl: 'https://drive.google.com/file/d/11joRoHnwp7o8NGg6UakuTuxkEMndoGEa/preview'
  }, {
    id: 2,
    title: 'Video Editing',
    category: 'Insight YT Channel',
    thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    videoUrl: 'https://drive.google.com/file/d/1-w4WCuaxyjeMf2LZArnuryl2cF7i96mt/preview'
  }, {
    id: 3,
    title: 'Logo Animation',
    category: 'GoldenStar Logo',
    thumbnail: 'https://images.unsplash.com/photo-1626251851903-1143b5c6f057?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZ28lMjBkZXNpZ258ZW58MHx8MHx8fDA%3D',
    videoUrl: 'https://drive.google.com/file/d/15FEgMKXWJS8d7gXSBWUurFw11gbkZNIE/preview'
  }, {
    id: 4,
    title: 'Logo Animation',
    category: 'GreatWay Financial Logo',
    thumbnail: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D',
    videoUrl: 'https://drive.google.com/file/d/158kwVXqTQosmO_H0ItAt-YXzqpxoyXqu/preview'
  }, {
    id: 5,
    title: 'Video Editing',
    category: 'TheJuwonlo',
    thumbnail: 'https://images.unsplash.com/photo-1490810194309-344b3661ba39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dmlkZW8lMjBlZGl0aW5nfGVufDB8fDB8fHww',
    videoUrl: 'https://drive.google.com/file/d/11TfZ7imNkVaGIluETrDFMEDYfHKjSJpc/preview'
  }, {
    id: 6,
    title: 'Video Editing',
    category: 'M1 Videography',
    thumbnail: 'https://images.unsplash.com/photo-1636971819476-aa41dc3db0d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmlkZW8lMjBlZGl0aW5nfGVufDB8fDB8fHww',
    videoUrl: 'https://drive.google.com/file/d/12ZHA6JzATXTY_jZwLfjBiEFhkBG4pmQ3/preview'
  }];
  const openVideoModal = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
  };
  const closeVideoModal = () => {
    setSelectedVideo(null);
  };
  return <section id="projects" className="w-full py-20 bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A selection of my best motion design and video editing work. Click
            on any project to view the full video.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => <div key={project.id} className="group relative overflow-hidden rounded-lg bg-gray-900">
              <div className="aspect-video overflow-hidden">
                <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center p-4">
                  <span className="inline-block px-3 py-1 bg-purple-600 rounded-full text-sm mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <button onClick={() => openVideoModal(project.videoUrl)} className="inline-flex items-center text-purple-400 hover:text-purple-300">
                    <PlayIcon className="w-5 h-5 mr-1" />
                    <span>Watch Project</span>
                  </button>
                </div>
              </div>
            </div>)}
        </div>
        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center text-purple-500 hover:text-purple-400 font-medium">
            <span>View All Projects</span>
            <ExternalLinkIcon className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
      <VideoModal videoUrl={selectedVideo || ''} isOpen={selectedVideo !== null} onClose={closeVideoModal} />
    </section>;
};