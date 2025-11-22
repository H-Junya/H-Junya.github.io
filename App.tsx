import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProjectGrid from './components/ProjectGrid';
import { Project, Category, FilterType } from './types';
import { INITIAL_PROJECTS } from './constants';

const App: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [filter, setFilter] = useState<FilterType>('ALL');
  const [isEditMode, setIsEditMode] = useState(false);

  // Handler to add a new project
  const handleAddProject = (newProject: Omit<Project, 'id'>) => {
    const projectWithId: Project = {
      ...newProject,
      id: Date.now().toString(), // Simple ID generation
    };
    setProjects(prev => [projectWithId, ...prev]);
  };

  // Handler to delete a project
  const handleDeleteProject = (id: string) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(prev => prev.filter(p => p.id !== id));
    }
  };

  // Handler to replace an image
  const handleUpdateImage = (id: string, file: File) => {
    const newImageUrl = URL.createObjectURL(file);
    setProjects(prev => prev.map(p => {
      if (p.id === id) {
        return { ...p, imageUrl: newImageUrl };
      }
      return p;
    }));
  };

  // Filter logic
  const filteredProjects = projects.filter(project => {
    if (filter === 'ALL') return true;
    return project.category === filter;
  });

  // Cleanup object URLs to prevent memory leaks (basic implementation)
  useEffect(() => {
    return () => {
      projects.forEach(p => {
        if (p.imageUrl.startsWith('blob:')) {
          URL.revokeObjectURL(p.imageUrl);
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      
      <Navbar 
        currentFilter={filter} 
        onFilterChange={setFilter}
        isEditMode={isEditMode}
        onToggleEditMode={() => setIsEditMode(!isEditMode)}
      />

      <main className="flex-grow">
        {/* Intro Section (Visible only on 'ALL' view to keep it clean) */}
        {filter === 'ALL' && (
          <div className="max-w-screen-2xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-light leading-tight">
                Exploring the intersection of <span className="font-serif italic">biology</span>, <br/>
                <span className="font-serif italic">computation</span>, and <br/>
                <span className="font-serif italic">fabrication</span>.
              </h2>
            </div>
            <div className="flex flex-col justify-end items-start md:items-end text-sm font-mono text-gray-500 space-y-2">
              <p>GENERATIVE DESIGN SYSTEMS</p>
              <p>DIGITAL FABRICATION</p>
              <p>BIO-INSPIRED STRUCTURES</p>
            </div>
          </div>
        )}

        {/* Project Display */}
        <ProjectGrid 
          projects={filteredProjects}
          isEditMode={isEditMode}
          onDelete={handleDeleteProject}
          onUpdateImage={handleUpdateImage}
          onAddProject={handleAddProject}
        />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 mt-20">
        <div className="max-w-screen-2xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-gray-400 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} JunyaHuang. All Rights Reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-black transition-colors">Instagram</a>
            <a href="#" className="hover:text-black transition-colors">Twitter</a>
            <a href="#" className="hover:text-black transition-colors">Email</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;
