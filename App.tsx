import React, { useState } from 'react';
import Header from './components/Header';
import WorkUploader from './components/WorkUploader';
import WorkManager from './components/WorkManager';
import PortfolioGallery from './components/PortfolioGallery';
import ReadmeGenerator from './components/ReadmeGenerator';
import { Work } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'upload' | 'portfolio'>('upload');
  const [works, setWorks] = useState<Work[]>([]);

  const handleAddWork = (newWork: Work) => {
    setWorks(prev => [...prev, newWork]);
  };

  const handleDeleteWork = (id: string) => {
    setWorks(prev => prev.filter(w => w.id !== id));
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col selection:bg-black selection:text-white">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="flex-grow w-full">
        {activeTab === 'upload' ? (
          <div className="animate-in fade-in duration-500">
            <WorkUploader onAddWork={handleAddWork} />
            <WorkManager works={works} onDelete={handleDeleteWork} />
          </div>
        ) : (
          <div className="animate-in slide-in-from-bottom-2 duration-700">
            <PortfolioGallery works={works} onDelete={handleDeleteWork} />
            <ReadmeGenerator works={works} />
          </div>
        )}
      </main>
      
      <footer className="py-12 border-t border-gray-100 mt-12">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
            <p className="text-gray-400 text-xs font-medium uppercase tracking-widest">
                © {new Date().getFullYear()} JunyaHuang
            </p>
        </div>
      </footer>
    </div>
  );
};

export default App;