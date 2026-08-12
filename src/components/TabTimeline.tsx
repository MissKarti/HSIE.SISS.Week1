import React, { useState } from 'react';
import { TimelineEvent, EventCategory } from '../types';
import { TIMELINE_EVENTS } from '../data/lessonData';
import { 
  Search, 
  Filter, 
  Sparkles, 
  Quote, 
  MapPin, 
  BookOpen, 
  Mail, 
  X, 
  ChevronRight, 
  Calendar,
  Layers,
  Compass,
  Scroll,
  Crown,
  ShieldAlert,
  Castle,
  Waves
} from 'lucide-react';

interface TabTimelineProps {
  onSelectEraForPostcard: (eraName: string) => void;
}

export const TabTimeline: React.FC<TabTimelineProps> = ({ onSelectEraForPostcard }) => {
  const [selectedCategory, setSelectedCategory] = useState<EventCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeEvent, setActiveEvent] = useState<TimelineEvent | null>(null);

  const categories: { id: EventCategory | 'all'; label: string; color: string }[] = [
    { id: 'all', label: 'All Historical Eras', color: 'bg-slate-800 text-slate-200 border-slate-700' },
    { id: 'culture', label: 'Culture & Religion (Gold)', color: 'bg-amber-500/20 text-amber-300 border-amber-500/40' },
    { id: 'conflict', label: 'Conflict & Politics (Red)', color: 'bg-rose-500/20 text-rose-300 border-rose-500/40' },
    { id: 'modern', label: 'Modern Era (Green)', color: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' }
  ];

  const filteredEvents = TIMELINE_EVENTS.filter(event => {
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.year.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.detailedDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryBadge = (category: EventCategory) => {
    switch (category) {
      case 'culture':
        return <span className="px-2.5 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded-lg text-xs font-semibold">Culture & Religion</span>;
      case 'conflict':
        return <span className="px-2.5 py-1 bg-rose-500/20 text-rose-300 border border-rose-500/40 rounded-lg text-xs font-semibold">Conflict & Politics</span>;
      case 'modern':
        return <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-lg text-xs font-semibold">Modern Era</span>;
    }
  };

  const getEventBorderClass = (category: EventCategory) => {
    switch (category) {
      case 'culture': return 'border-amber-500/40 hover:border-amber-400 bg-gradient-to-br from-amber-950/20 to-slate-900';
      case 'conflict': return 'border-rose-500/40 hover:border-rose-400 bg-gradient-to-br from-rose-950/20 to-slate-900';
      case 'modern': return 'border-emerald-500/40 hover:border-emerald-400 bg-gradient-to-br from-emerald-950/20 to-slate-900';
    }
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Waves': return <Waves className="w-5 h-5 text-amber-400" />;
      case 'Scroll': return <Scroll className="w-5 h-5 text-amber-400" />;
      case 'Crown': return <Crown className="w-5 h-5 text-rose-400" />;
      case 'Castle': return <Castle className="w-5 h-5 text-amber-400" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-rose-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-emerald-400" />;
      default: return <Compass className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Search & Filter Header Bar */}
      <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-cinzel font-bold text-slate-100 flex items-center gap-2">
              <Compass className="w-6 h-6 text-amber-400" />
              <span>Interactive Balinese History Timeline</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Click any era card to inspect historical primary sources, quotes, artifacts, and key takeaways.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search eras, years, facts..."
              className="w-full pl-9 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200">
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800">
          <span className="text-xs font-semibold text-slate-400 flex items-center gap-1 mr-1">
            <Filter className="w-3.5 h-3.5" /> Filter Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold shadow-md'
                  : 'bg-slate-800/80 text-slate-400 border-slate-700 hover:bg-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Event Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            onClick={() => setActiveEvent(event)}
            className={`p-6 rounded-2xl border ${getEventBorderClass(event.category)} transition-all hover:-translate-y-1 cursor-pointer shadow-lg relative flex flex-col justify-between group`}
          >
            <div className="space-y-3">
              {/* Top Meta Bar */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold px-2.5 py-1 bg-slate-900/90 text-amber-300 border border-amber-500/30 rounded-lg">
                  {event.year}
                </span>
                {getCategoryBadge(event.category)}
              </div>

              {/* Title & Era */}
              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-0.5">
                  {event.era}
                </span>
                <h3 className="font-cinzel font-bold text-lg text-slate-100 group-hover:text-amber-300 transition-colors flex items-center gap-2">
                  <span>{event.title}</span>
                </h3>
              </div>

              {/* Summary */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                {event.summary}
              </p>
            </div>

            {/* Bottom Footer Action */}
            <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
              <span className="text-amber-400 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>Inspect Evidence & Artifacts</span>
                <ChevronRight className="w-4 h-4" />
              </span>
              <div className="p-1.5 bg-slate-800/80 rounded-lg">
                {renderIcon(event.imageIcon)}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-12 bg-slate-900/50 rounded-2xl border border-slate-800">
          <p className="text-slate-400 text-sm">No historical eras found matching "{searchQuery}".</p>
          <button onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }} className="mt-3 px-4 py-2 bg-slate-800 text-amber-300 rounded-xl text-xs font-semibold">
            Reset Filters
          </button>
        </div>
      )}

      {/* Detailed Inspection Modal */}
      {activeEvent && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
          <div className="bg-slate-900 border border-amber-500/40 rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setActiveEvent(null)}
              className="absolute right-4 top-4 text-slate-400 hover:text-slate-100 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded-lg">
                  {activeEvent.year}
                </span>
                {getCategoryBadge(activeEvent.category)}
              </div>

              <h2 className="text-2xl font-cinzel font-bold text-slate-100">
                {activeEvent.title}
              </h2>
              <span className="text-xs text-amber-400/80 font-semibold uppercase tracking-wider block">
                Historical Era: {activeEvent.era}
              </span>
            </div>

            {/* Detailed Description */}
            <div className="space-y-3">
              <h4 className="font-bold text-sm text-slate-200 uppercase tracking-wider text-xs">
                Historical Context & Evidence
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed bg-slate-800/50 p-4 rounded-xl border border-slate-700/60">
                {activeEvent.detailedDescription}
              </p>
            </div>

            {/* Primary Source Quote */}
            {activeEvent.primarySourceQuote && (
              <div className="p-4 bg-amber-500/10 border-l-4 border-amber-500 rounded-r-xl space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold">
                  <Quote className="w-4 h-4" />
                  <span>Primary Historical Source / Oral Tradition</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-200 italic font-serif leading-relaxed">
                  {activeEvent.primarySourceQuote}
                </p>
              </div>
            )}

            {/* Artifacts & Locations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 space-y-1">
                <span className="text-slate-400 font-semibold flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" /> Key Location:
                </span>
                <span className="text-slate-200 font-medium block">{activeEvent.location}</span>
              </div>

              <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 space-y-1">
                <span className="text-slate-400 font-semibold flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-blue-400" /> Preserved Artifacts:
                </span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {activeEvent.artifacts.map((art, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-slate-900 text-slate-300 rounded border border-slate-700 text-[11px]">
                      {art}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Takeaway */}
            <div className="p-4 bg-slate-800/90 rounded-xl border border-slate-700 space-y-1">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                Key Classroom Takeaway (HT3-1 Standard)
              </span>
              <p className="text-xs sm:text-sm text-slate-200 font-medium">
                {activeEvent.keyTakeaway}
              </p>
            </div>

            {/* Action Bar */}
            <div className="pt-2 flex justify-between items-center border-t border-slate-800">
              <button
                onClick={() => {
                  const era = activeEvent.era;
                  setActiveEvent(null);
                  onSelectEraForPostcard(era);
                }}
                className="flex items-center gap-2 px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all cursor-pointer shadow-lg shadow-amber-500/20"
              >
                <Mail className="w-4 h-4" />
                <span>Create Postcard for this Era</span>
              </button>

              <button
                onClick={() => setActiveEvent(null)}
                className="px-4 py-2 bg-slate-800 text-slate-300 hover:text-slate-100 rounded-xl text-xs font-semibold cursor-pointer"
              >
                Close Inspection
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
