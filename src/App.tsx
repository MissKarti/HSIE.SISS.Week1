/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useCallback } from 'react';
import { TabType, ExitTicketLeaf } from './types';
import { INITIAL_EXIT_TICKETS, LESSON_METADATA } from './data/lessonData';
import { Header } from './components/Header';
import { TabLessonOverview } from './components/TabLessonOverview';
import { TabTimeline } from './components/TabTimeline';
import { TabPostcardCreator } from './components/TabPostcardCreator';
import { TabTreeOfKnowledge } from './components/TabTreeOfKnowledge';
import { TabQuiz } from './components/TabQuiz';
import { Sparkles, BookOpen, Heart, Award } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [postcardEra, setPostcardEra] = useState<string>('');
  const [exitTicketLeaves, setExitTicketLeaves] = useState<ExitTicketLeaf[]>(INITIAL_EXIT_TICKETS);

  // Web Audio Pentatonic Gamelan / Bell Synth Chime
  const playChime = useCallback(() => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      // Pentatonic frequency (659.25 Hz - E5)
      osc.frequency.setValueAtTime(659.25, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.15);

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.5);
    } catch {
      // Ignore audio context autoplay restrictions
    }
  }, []);

  const handleSelectEraForPostcard = (eraName: string) => {
    setPostcardEra(eraName);
    setActiveTab('postcard');
    if (soundEnabled) playChime();
  };

  const handleAddLeaf = (newLeaf: ExitTicketLeaf) => {
    setExitTicketLeaves(prev => [newLeaf, ...prev]);
    if (soundEnabled) playChime();
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 font-sans flex flex-col justify-between selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* Top Header Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        playChime={playChime}
        leafCount={exitTicketLeaves.length}
      />

      {/* Main Container View Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-grow">
        {activeTab === 'overview' && (
          <TabLessonOverview
            onStartLesson={() => {
              setActiveTab('timeline');
              if (soundEnabled) playChime();
            }}
          />
        )}

        {activeTab === 'timeline' && (
          <TabTimeline
            onSelectEraForPostcard={handleSelectEraForPostcard}
          />
        )}

        {activeTab === 'postcard' && (
          <TabPostcardCreator
            initialEra={postcardEra}
          />
        )}

        {activeTab === 'tree' && (
          <TabTreeOfKnowledge
            leaves={exitTicketLeaves}
            onAddLeaf={handleAddLeaf}
          />
        )}

        {activeTab === 'quiz' && (
          <TabQuiz
            soundEnabled={soundEnabled}
            playChime={playChime}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="no-print bg-slate-900 border-t border-slate-800 text-xs text-slate-400 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="font-cinzel font-bold text-slate-300">{LESSON_METADATA.title}</span>
            <span>•</span>
            <span>Grade 6 HSIE History Lesson</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-slate-500">
            <span>Teacher: <strong className="text-slate-300">{LESSON_METADATA.teacher}</strong></span>
            <span>Date: <strong className="text-slate-300">{LESSON_METADATA.date}</strong></span>
            <span className="text-amber-400/80 font-semibold">NSW Syllabus Aligned (HT3-1, HT3-3, HT3-5)</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
