import React from 'react';
import { TabType } from '../types';
import { LESSON_METADATA } from '../data/lessonData';
import { 
  Target, 
  Clock, 
  BookOpenCheck, 
  HelpCircle, 
  Sparkles, 
  ArrowRight, 
  Compass, 
  Feather, 
  Flame, 
  Layers, 
  GraduationCap,
  MapPin,
  CheckCircle2
} from 'lucide-react';

interface TabLessonOverviewProps {
  onStartLesson: () => void;
}

export const TabLessonOverview: React.FC<TabLessonOverviewProps> = ({ onStartLesson }) => {
  const lessonPhases = [
    {
      time: '00–05 min',
      phase: 'Hook & Introduction',
      icon: <Flame className="w-4 h-4 text-amber-400" />,
      color: 'border-amber-500/40 bg-amber-500/10 text-amber-300',
      description: 'Engage students with Balinese gamelan audio, ancient temple imagery, and central inquiry question.'
    },
    {
      time: '05–18 min',
      phase: 'Interactive Timeline Journey',
      icon: <Compass className="w-4 h-4 text-emerald-400" />,
      color: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300',
      description: 'Explore 6 major historical eras from Austronesian rice cultivation to Hindu-Buddhist contact and Majapahit.'
    },
    {
      time: '18–28 min',
      phase: 'Cultural Postcard Creation',
      icon: <Feather className="w-4 h-4 text-blue-400" />,
      color: 'border-blue-500/40 bg-blue-500/10 text-blue-300',
      description: 'Students synthesize primary source evidence into a personalized historical postcard artifact.'
    },
    {
      time: '28–35 min',
      phase: 'Formative Quiz Check',
      icon: <HelpCircle className="w-4 h-4 text-purple-400" />,
      color: 'border-purple-500/40 bg-purple-500/10 text-purple-300',
      description: '5-question interactive check with instant feedback and historical explanations.'
    },
    {
      time: '35–40 min',
      phase: 'Tree of Knowledge Exit Ticket',
      icon: <Sparkles className="w-4 h-4 text-rose-400" />,
      color: 'border-rose-500/40 bg-rose-500/10 text-rose-300',
      description: 'Students post a leaf ticket (Fact, Question, or Insight) on the interactive Banyan Tree.'
    }
  ];

  const keyVocab = [
    { term: 'Agama Hindu Dharma', def: 'The unique Balinese synthesis of Indian Hinduism and indigenous animist spirit worship.' },
    { term: 'Majapahit Empire', def: 'Powerful Javanese Hindu empire (1293–1527) whose court culture deeply enriched Balinese art & theatre.' },
    { term: 'Subak System', def: 'A 1,000-year-old democratic water management system based on the Tri Hita Karana philosophy.' },
    { term: 'Puputan', def: 'A ceremonial royal ritual of fighting to the death rather than submitting to colonial surrender.' },
    { term: 'Lontar Manuscripts', def: 'Traditional Balinese sacred books etched onto dried palmyra palm leaves.' }
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 border border-amber-500/30 p-6 sm:p-8 shadow-2xl">
        <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-12 -top-12 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold">
              <GraduationCap className="w-4 h-4 text-amber-400" />
              <span>NSW Stage 3 HSIE Lesson Plan</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-cinzel font-bold text-slate-100 tracking-tight leading-tight">
              Uncovering the Sacred History & Traditions of Bali
            </h2>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Step back in time to explore how volcanic islands, seafaring traders, royal Javanese empires, and spiritual traditions forged Bali’s vibrant heritage. Students investigate historical evidence, craft reflective primary source postcards, and share insights on the Tree of Knowledge.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={onStartLesson}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold rounded-xl shadow-lg shadow-amber-500/20 transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>Launch Interactive Timeline</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Stats Summary Card */}
          <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-700 space-y-3">
            <h3 className="font-cinzel text-xs font-bold text-amber-400 tracking-wider uppercase border-b border-slate-800 pb-2">
              Lesson Quick Specs
            </h3>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Total Duration:</span>
                <span className="font-semibold text-emerald-400">40 Minutes</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Target Grade:</span>
                <span className="font-semibold text-slate-200">Grade 6 (Stage 3)</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Syllabus Subject:</span>
                <span className="font-semibold text-slate-200">HSIE - History</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-slate-400">Key Pedagogy:</span>
                <span className="font-semibold text-amber-300">Inquiry-Based Learning</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Learning Objectives (NSW Syllabus Standards) */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Target className="w-5 h-5 text-amber-400" />
          <h3 className="text-xl font-cinzel font-bold text-slate-100">
            Core Learning Objectives
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {LESSON_METADATA.standards.map((st, idx) => (
            <div
              key={st.code}
              className="bg-slate-900/80 p-5 rounded-xl border border-slate-700/80 hover:border-amber-500/40 transition-all space-y-3 shadow-md relative overflow-hidden group"
            >
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 bg-amber-500/20 text-amber-300 font-mono font-bold text-xs rounded-lg border border-amber-500/30">
                  {st.code}
                </span>
                <span className="text-slate-500 text-xs font-semibold">Goal {idx + 1}</span>
              </div>

              <h4 className="font-semibold text-slate-100 text-base group-hover:text-amber-300 transition-colors">
                {st.title}
              </h4>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {st.description}
              </p>

              <div className="pt-2 flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Assessed via Postcard & Exit Ticket</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 40-Minute Timeline Breakdown */}
      <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-emerald-400" />
            <h3 className="text-xl font-cinzel font-bold text-slate-100">
              40-Minute Lesson Timeline
            </h3>
          </div>
          <span className="text-xs text-slate-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
            Structured Classroom Delivery
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {lessonPhases.map((phase, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-xl border ${phase.color} space-y-2 relative flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-900/80 border border-slate-700">
                    {phase.time}
                  </span>
                  {phase.icon}
                </div>
                <h4 className="font-bold text-sm text-slate-100 mb-1">
                  {phase.phase}
                </h4>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {phase.description}
                </p>
              </div>

              <div className="pt-3 text-[10px] uppercase tracking-wider font-semibold opacity-70 border-t border-slate-800/80">
                Phase {idx + 1} of 5
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Historical Vocabulary Reference */}
      <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
          <BookOpenCheck className="w-5 h-5 text-blue-400" />
          <h3 className="text-lg font-cinzel font-bold text-slate-100">
            Key Vocabulary & Concepts
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {keyVocab.map((item, idx) => (
            <div key={idx} className="p-3.5 bg-slate-800/60 rounded-xl border border-slate-700/60 space-y-1 hover:bg-slate-800 transition-colors">
              <span className="font-bold text-xs text-amber-300 block">{item.term}</span>
              <p className="text-xs text-slate-300 leading-snug">{item.def}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
