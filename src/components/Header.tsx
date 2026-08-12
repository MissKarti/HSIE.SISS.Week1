import React, { useState } from 'react';
import { TabType } from '../types';
import { LESSON_METADATA } from '../data/lessonData';
import { 
  BookOpen, 
  History, 
  Mail, 
  TreePine, 
  HelpCircle, 
  Award, 
  Volume2, 
  VolumeX, 
  Calendar, 
  User, 
  GraduationCap, 
  Layers,
  Sparkles,
  Info
} from 'lucide-react';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  soundEnabled: boolean;
  setSoundEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  playChime: () => void;
  leafCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  soundEnabled,
  setSoundEnabled,
  playChime,
  leafCount
}) => {
  const [showStandardsModal, setShowStandardsModal] = useState(false);

  const tabs: { id: TabType; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'overview', label: 'Lesson Overview', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'timeline', label: 'History Timeline', icon: <History className="w-4 h-4" />, badge: '6 Eras' },
    { id: 'postcard', label: 'Postcard Creator', icon: <Mail className="w-4 h-4" />, badge: 'Activity' },
    { id: 'tree', label: 'Tree of Knowledge', icon: <TreePine className="w-4 h-4" />, badge: `${leafCount} Exit Tickets` },
    { id: 'quiz', label: 'Interactive Quiz', icon: <HelpCircle className="w-4 h-4" />, badge: '3 Min Check' },
  ];

  const handleTabChange = (tabId: TabType) => {
    setActiveTab(tabId);
    if (soundEnabled) {
      playChime();
    }
  };

  return (
    <header className="bg-slate-900/90 border-b border-amber-500/20 backdrop-blur-md sticky top-0 z-40">
      {/* Top Banner with Decorative Gold Line */}
      <div className="h-1 bg-gradient-to-r from-amber-500 via-emerald-500 to-blue-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Main Header Content */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          
          {/* Title & Theme Subtitle */}
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-1">
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-amber-400" />
              <span>Grade 6 HSIE • History Unit • Ancient World Origins</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-cinzel font-bold text-slate-100 tracking-tight flex items-center gap-3">
              <span>{LESSON_METADATA.title}</span>
            </h1>
          </div>

          {/* Teacher Metadata Card Bar */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/60 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5 px-2 py-1 bg-slate-900/60 rounded-lg text-slate-300">
              <User className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-medium text-slate-200">{LESSON_METADATA.teacher}</span>
            </div>

            <div className="flex items-center gap-1.5 px-2 py-1 bg-slate-900/60 rounded-lg text-slate-300">
              <Calendar className="w-3.5 h-3.5 text-emerald-400" />
              <span>{LESSON_METADATA.date}</span>
            </div>

            <div className="flex items-center gap-1.5 px-2 py-1 bg-slate-900/60 rounded-lg text-slate-300">
              <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
              <span className="font-semibold text-slate-200">{LESSON_METADATA.grade}</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">{LESSON_METADATA.termWeek}</span>
            </div>

            {/* Standards Button */}
            <button
              onClick={() => setShowStandardsModal(!showStandardsModal)}
              className="flex items-center gap-1 px-2.5 py-1 bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 rounded-lg font-medium transition-colors cursor-pointer"
              title="Click to view NSW Learning Standards"
            >
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>NSW Standards</span>
              <Info className="w-3 h-3 text-amber-400 opacity-70" />
            </button>

            {/* Ambient Sound Toggle */}
            <button
              onClick={() => {
                setSoundEnabled(!soundEnabled);
                if (!soundEnabled) playChime();
              }}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                soundEnabled 
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                  : 'bg-slate-700/50 text-slate-400 border border-slate-600'
              }`}
              title={soundEnabled ? 'Mute Interaction Sounds' : 'Enable Interaction Sounds'}
            >
              {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{soundEnabled ? 'Sound On' : 'Muted'}</span>
            </button>
          </div>
        </div>

        {/* Standards Popover Modal / Collapsible */}
        {showStandardsModal && (
          <div className="mt-3 p-4 bg-slate-800 border border-amber-500/30 rounded-xl shadow-xl animate-fadeIn">
            <div className="flex justify-between items-center mb-2 pb-2 border-b border-slate-700">
              <h3 className="font-cinzel font-bold text-amber-300 text-sm flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                NSW Syllabus Learning Standards (Stage 3 History)
              </h3>
              <button 
                onClick={() => setShowStandardsModal(false)}
                className="text-slate-400 hover:text-slate-200 text-xs px-2 py-0.5 rounded bg-slate-700"
              >
                Close
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              {LESSON_METADATA.standards.map((st) => (
                <div key={st.code} className="p-2.5 bg-slate-900/80 rounded-lg border border-slate-700">
                  <span className="inline-block px-1.5 py-0.5 bg-amber-500/20 text-amber-300 font-mono font-bold rounded mb-1">
                    {st.code}
                  </span>
                  <p className="font-semibold text-slate-200 mb-0.5">{st.title}</p>
                  <p className="text-slate-400 leading-relaxed">{st.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Navigation Bar */}
        <nav className="mt-4 flex space-x-1 sm:space-x-2 overflow-x-auto pb-1 no-scrollbar border-t border-slate-800 pt-3">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-transparent text-amber-300 border border-amber-500/40 shadow-lg shadow-amber-500/5'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-transparent'
                }`}
              >
                <span className={isActive ? 'text-amber-400' : 'text-slate-400'}>{tab.icon}</span>
                <span>{tab.label}</span>
                {tab.badge && (
                  <span
                    className={`ml-1 px-1.5 py-0.5 text-[10px] font-bold rounded-full ${
                      isActive
                        ? 'bg-amber-500 text-slate-950'
                        : 'bg-slate-800 text-slate-400 border border-slate-700'
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
