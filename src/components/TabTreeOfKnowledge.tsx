import React, { useState } from 'react';
import { ExitTicketLeaf, LeafType } from '../types';
import { 
  TreePine, 
  Sparkles, 
  Plus, 
  Filter, 
  Send, 
  X, 
  HelpCircle, 
  CheckCircle2, 
  Flame,
  User,
  Clock,
  MessageSquare
} from 'lucide-react';

interface TabTreeOfKnowledgeProps {
  leaves: ExitTicketLeaf[];
  onAddLeaf: (leaf: ExitTicketLeaf) => void;
}

export const TabTreeOfKnowledge: React.FC<TabTreeOfKnowledgeProps> = ({
  leaves,
  onAddLeaf
}) => {
  const [filterType, setFilterType] = useState<LeafType | 'all'>('all');
  const [selectedLeaf, setSelectedLeaf] = useState<ExitTicketLeaf | null>(null);

  // Form State
  const [studentName, setStudentName] = useState('');
  const [leafType, setLeafType] = useState<LeafType>('fact');
  const [content, setContent] = useState('');
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim() || !content.trim()) return;

    // Generate pseudo random position on tree leaves canopy
    // Canopy x ranges 15% to 85%, y ranges 18% to 65%
    const randomX = Math.floor(Math.random() * 66) + 17;
    const randomY = Math.floor(Math.random() * 45) + 18;

    const newLeaf: ExitTicketLeaf = {
      id: `leaf-${Date.now()}`,
      studentName: studentName.trim(),
      type: leafType,
      content: content.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      xPercent: randomX,
      yPercent: randomY
    };

    onAddLeaf(newLeaf);
    setStudentName('');
    setContent('');
    setShowSubmitModal(false);
  };

  const filteredLeaves = leaves.filter(l => filterType === 'all' || l.type === filterType);

  const getLeafStyle = (type: LeafType) => {
    switch (type) {
      case 'fact':
        return {
          bg: 'bg-emerald-500',
          border: 'border-emerald-300',
          shadow: 'shadow-emerald-500/50',
          text: 'text-emerald-300',
          label: 'Fact Learned 🍃',
          badgeBg: 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
        };
      case 'question':
        return {
          bg: 'bg-amber-500',
          border: 'border-amber-300',
          shadow: 'shadow-amber-500/50',
          text: 'text-amber-300',
          label: 'Question Remaining 🍂',
          badgeBg: 'bg-amber-500/20 border-amber-500/40 text-amber-300'
        };
      case 'insight':
        return {
          bg: 'bg-orange-500',
          border: 'border-orange-300',
          shadow: 'shadow-orange-500/50',
          text: 'text-orange-300',
          label: 'Coolest Cultural Insight 🍁',
          badgeBg: 'bg-orange-500/20 border-orange-500/40 text-orange-300'
        };
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top Banner & Control Bar */}
      <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-cinzel font-bold text-slate-100 flex items-center gap-2">
            <TreePine className="w-6 h-6 text-emerald-400" />
            <span>Tree of Knowledge (Exit Ticket Board)</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Share what you learned, remaining questions, or key insights. Watch your exit ticket attach to the sacred Banyan tree!
          </p>
        </div>

        <button
          onClick={() => setShowSubmitModal(true)}
          className="px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold rounded-xl text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 shadow-lg shadow-emerald-500/20"
        >
          <Plus className="w-4 h-4" />
          <span>Add Exit Ticket Leaf</span>
        </button>
      </div>

      {/* Legend & Filter Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-xs">
        <div className="flex items-center gap-1.5 text-slate-400 font-semibold">
          <Filter className="w-3.5 h-3.5" /> Filter Tree Leaves:
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilterType('all')}
            className={`px-3 py-1 rounded-lg border font-medium transition-all cursor-pointer ${
              filterType === 'all'
                ? 'bg-slate-700 text-slate-100 border-slate-500 font-bold'
                : 'bg-slate-800/60 text-slate-400 border-slate-700'
            }`}
          >
            All Leaves ({leaves.length})
          </button>

          <button
            onClick={() => setFilterType('fact')}
            className={`px-3 py-1 rounded-lg border font-medium transition-all cursor-pointer ${
              filterType === 'fact'
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400 font-bold'
                : 'bg-slate-800/60 text-slate-400 border-slate-700'
            }`}
          >
            🍃 Facts ({leaves.filter(l => l.type === 'fact').length})
          </button>

          <button
            onClick={() => setFilterType('question')}
            className={`px-3 py-1 rounded-lg border font-medium transition-all cursor-pointer ${
              filterType === 'question'
                ? 'bg-amber-500/20 text-amber-300 border-amber-400 font-bold'
                : 'bg-slate-800/60 text-slate-400 border-slate-700'
            }`}
          >
            🍂 Questions ({leaves.filter(l => l.type === 'question').length})
          </button>

          <button
            onClick={() => setFilterType('insight')}
            className={`px-3 py-1 rounded-lg border font-medium transition-all cursor-pointer ${
              filterType === 'insight'
                ? 'bg-orange-500/20 text-orange-300 border-orange-400 font-bold'
                : 'bg-slate-800/60 text-slate-400 border-slate-700'
            }`}
          >
            🍁 Insights ({leaves.filter(l => l.type === 'insight').length})
          </button>
        </div>
      </div>

      {/* Stylized Tree Container Canvas */}
      <div className="relative bg-gradient-to-b from-slate-900 via-slate-950 to-emerald-950/40 rounded-3xl border-2 border-emerald-500/30 p-6 sm:p-10 min-h-[500px] sm:min-h-[560px] overflow-hidden shadow-2xl flex flex-col justify-between">
        
        {/* Background SVG Sacred Banyan Tree Silhouette */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-30">
          <svg viewBox="0 0 800 600" className="w-full h-full text-emerald-600/40" fill="currentColor">
            {/* Trunk */}
            <path d="M 370 600 L 380 400 Q 350 350 320 280 Q 280 200 220 150 L 250 140 Q 320 200 370 260 L 390 180 Q 360 120 310 80 L 340 70 Q 390 120 410 180 Q 430 120 480 70 L 510 80 Q 460 120 430 180 L 450 260 Q 500 200 570 140 L 600 150 Q 540 200 500 280 Q 470 350 440 400 L 450 600 Z" />
            {/* Canopy Outline Circles */}
            <circle cx="400" cy="180" r="160" />
            <circle cx="280" cy="220" r="130" />
            <circle cx="520" cy="220" r="130" />
            <circle cx="340" cy="120" r="110" />
            <circle cx="460" cy="120" r="110" />
          </svg>
        </div>

        {/* Tree Header Title Label inside canvas */}
        <div className="relative z-10 text-center space-y-1 bg-slate-900/60 backdrop-blur-sm p-3 rounded-2xl max-w-md mx-auto border border-emerald-500/20">
          <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold block">
            SACRED BANYAN TREE OF KNOWLEDGE
          </span>
          <h3 className="font-cinzel text-lg sm:text-xl font-bold text-slate-100">
            Interactive Student Reflections
          </h3>
          <p className="text-xs text-slate-400">Click any glowing leaf to open student note!</p>
        </div>

        {/* Interactive Leaves Overlay */}
        <div className="absolute inset-0 z-20 pointer-events-auto">
          {filteredLeaves.map((leaf) => {
            const style = getLeafStyle(leaf.type);
            return (
              <button
                key={leaf.id}
                onClick={() => setSelectedLeaf(leaf)}
                style={{
                  left: `${leaf.xPercent}%`,
                  top: `${leaf.yPercent}%`
                }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full ${style.bg} ${style.shadow} shadow-lg border ${style.border} text-slate-950 font-bold transition-all hover:scale-125 cursor-pointer animate-pulse`}
                title={`${leaf.studentName}: ${leaf.content}`}
              >
                <span className="text-xs sm:text-sm">
                  {leaf.type === 'fact' && '🍃'}
                  {leaf.type === 'question' && '🍂'}
                  {leaf.type === 'insight' && '🍁'}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tree Bottom Grass / Roots Footer */}
        <div className="relative z-10 pt-4 border-t border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2 bg-slate-950/70 p-3 rounded-xl backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <span>Total Tickets Submitted: <strong className="text-emerald-300">{leaves.length}</strong></span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-emerald-300">🍃 Green = Fact</span>
            <span className="text-amber-300">🍂 Yellow = Question</span>
            <span className="text-orange-300">🍁 Orange = Insight</span>
          </div>
        </div>
      </div>

      {/* Selected Leaf Detail Popover Modal */}
      {selectedLeaf && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-slate-900 border border-emerald-500/40 rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl relative">
            <button
              onClick={() => setSelectedLeaf(null)}
              className="absolute right-4 top-4 text-slate-400 hover:text-slate-100 p-1.5 rounded-lg bg-slate-800"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-2">
              <span className={`inline-block px-2.5 py-1 rounded-lg text-xs font-bold border ${getLeafStyle(selectedLeaf.type).badgeBg}`}>
                {getLeafStyle(selectedLeaf.type).label}
              </span>

              <h3 className="text-lg font-cinzel font-bold text-slate-100 flex items-center gap-2">
                <User className="w-4 h-4 text-emerald-400" />
                <span>{selectedLeaf.studentName}</span>
              </h3>
            </div>

            <p className="text-sm text-slate-200 bg-slate-800/80 p-4 rounded-xl border border-slate-700 leading-relaxed font-sans">
              "{selectedLeaf.content}"
            </p>

            <div className="flex justify-between items-center text-xs text-slate-400 pt-2 border-t border-slate-800">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-500" /> Submitted at {selectedLeaf.timestamp}
              </span>
              <span className="text-emerald-400 font-semibold">Stage 3 Exit Ticket</span>
            </div>
          </div>
        </div>
      )}

      {/* Submit Exit Ticket Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-slate-900 border border-emerald-500/40 rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-5 shadow-2xl relative">
            <button
              onClick={() => setShowSubmitModal(false)}
              className="absolute right-4 top-4 text-slate-400 hover:text-slate-100 p-1.5 rounded-lg bg-slate-800"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-1">
              <h3 className="text-xl font-cinzel font-bold text-slate-100 flex items-center gap-2">
                <Plus className="w-5 h-5 text-emerald-400" />
                <span>Submit Exit Ticket Leaf</span>
              </h3>
              <p className="text-xs text-slate-400">
                Share your reflection from today's Balinese history lesson.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Your Name *</label>
                <input
                  type="text"
                  required
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="e.g. Sam Taylor"
                  className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Select Leaf Type *</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setLeafType('fact')}
                    className={`p-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                      leafType === 'fact'
                        ? 'bg-emerald-500/30 border-emerald-400 text-emerald-200'
                        : 'bg-slate-800 border-slate-700 text-slate-400'
                    }`}
                  >
                    🍃 Fact Learned
                  </button>

                  <button
                    type="button"
                    onClick={() => setLeafType('question')}
                    className={`p-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                      leafType === 'question'
                        ? 'bg-amber-500/30 border-amber-400 text-amber-200'
                        : 'bg-slate-800 border-slate-700 text-slate-400'
                    }`}
                  >
                    🍂 Question
                  </button>

                  <button
                    type="button"
                    onClick={() => setLeafType('insight')}
                    className={`p-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                      leafType === 'insight'
                        ? 'bg-orange-500/30 border-orange-400 text-orange-200'
                        : 'bg-slate-800 border-slate-700 text-slate-400'
                    }`}
                  >
                    🍁 Insight
                  </button>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Reflection Note *</label>
                <textarea
                  required
                  rows={3}
                  maxLength={200}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Type what you learned, remaining question, or coolest insight..."
                  className="w-full p-3 bg-slate-800 border border-slate-700 rounded-xl text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowSubmitModal(false)}
                  className="px-4 py-2 bg-slate-800 text-slate-300 rounded-xl text-xs font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Attach to Tree</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
