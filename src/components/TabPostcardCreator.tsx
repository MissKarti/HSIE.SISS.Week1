import React, { useState } from 'react';
import { PostcardData } from '../types';
import { POSTCARD_THEMES, STAMP_DESIGNS } from '../data/lessonData';
import { 
  Mail, 
  Printer, 
  Sparkles, 
  RotateCcw, 
  CheckCircle2, 
  Send, 
  Crown, 
  Flower2, 
  Globe, 
  Castle, 
  User, 
  Calendar,
  Feather,
  Info
} from 'lucide-react';

interface TabPostcardCreatorProps {
  initialEra?: string;
  onPostcardCreated?: () => void;
}

export const TabPostcardCreator: React.FC<TabPostcardCreatorProps> = ({
  initialEra,
  onPostcardCreated
}) => {
  const [formData, setFormData] = useState<PostcardData>({
    studentName: 'Alex Rivers',
    era: initialEra || 'Majapahit Empire Integration (1343 CE)',
    themeGraphic: 'tanah-lot',
    stampDesign: 'garuda',
    message: 'Dear Grade 6 Historians,\n\nI am writing from ancient Bali during the Majapahit expansion! I noticed how Javanese dancers, priests, and artisans migrated here, bringing wayang shadow puppets and gamelan music scales that still thrive today in Balinese temples.',
    recipient: 'Grade 6 History Class, Sydney',
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  });

  const [copied, setCopied] = useState(false);

  const activeTheme = POSTCARD_THEMES.find(t => t.id === formData.themeGraphic) || POSTCARD_THEMES[0];
  const activeStamp = STAMP_DESIGNS.find(s => s.id === formData.stampDesign) || STAMP_DESIGNS[0];

  const handlePrint = () => {
    window.print();
  };

  const handlePresetExample = () => {
    setFormData({
      studentName: 'Jordan Taylor',
      era: 'Prehistoric Origins (2000 BCE)',
      themeGraphic: 'subak-terraces',
      stampDesign: 'frangipani',
      message: 'Greetings from ancient Bali! I have been observing how early Austronesian seafarers built wet-rice terraces and stone altars. Their spiritual connection to water and mountains formed the core of the Subak irrigation tradition we still study today.',
      recipient: 'Mr. Robinson Rubio Jr., HSIE Department',
      date: 'Sep 2, 2024'
    });
  };

  const handleReset = () => {
    setFormData({
      studentName: '',
      era: 'Hindu-Buddhist Cultural Synthesis (1st–5th Century CE)',
      themeGraphic: 'besakih-gateway',
      stampDesign: 'temple',
      message: '',
      recipient: '',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    });
  };

  const renderStampIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flower2': return <Flower2 className="w-5 h-5" />;
      case 'Globe': return <Globe className="w-5 h-5" />;
      case 'Castle': return <Castle className="w-5 h-5" />;
      default: return <Crown className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Section Banner */}
      <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-cinzel font-bold text-slate-100 flex items-center gap-2">
            <Mail className="w-6 h-6 text-amber-400" />
            <span>Cultural Postcard Creator</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Student Reflection Activity: Synthesize historical primary sources into a personalized physical-style postcard.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handlePresetExample}
            className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-amber-300 rounded-xl text-xs font-semibold border border-amber-500/30 transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Load Sample Postcard</span>
          </button>

          <button
            onClick={handlePrint}
            className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold rounded-xl text-xs sm:text-sm hover:from-amber-400 hover:to-amber-500 transition-all cursor-pointer flex items-center gap-1.5 shadow-lg shadow-amber-500/20"
          >
            <Printer className="w-4 h-4" />
            <span>Print Postcard</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Inputs on Left, Live Preview on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Form Controls */}
        <div className="lg:col-span-5 bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-5">
          <div className="flex justify-between items-center pb-3 border-b border-slate-800">
            <h3 className="font-cinzel font-bold text-slate-100 text-sm uppercase tracking-wider flex items-center gap-2">
              <Feather className="w-4 h-4 text-amber-400" />
              <span>Postcard Details</span>
            </h3>
            <button
              onClick={handleReset}
              className="text-xs text-slate-400 hover:text-rose-400 transition-colors flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" /> Reset Form
            </button>
          </div>

          {/* Student Name */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 block">
              1. Student Name <span className="text-rose-400">*</span>
            </label>
            <input
              type="text"
              value={formData.studentName}
              onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
              placeholder="e.g. Maya Lin"
              className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Era Selection */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 block">
              2. Historical Era <span className="text-rose-400">*</span>
            </label>
            <select
              value={formData.era}
              onChange={(e) => setFormData({ ...formData, era: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-amber-500"
            >
              <option value="Prehistoric Origins (2000 BCE)">Prehistoric Origins (2000 BCE)</option>
              <option value="Hindu-Buddhist Cultural Synthesis (1st–5th Century CE)">Hindu-Buddhist Cultural Synthesis (1st–5th Century CE)</option>
              <option value="Majapahit Empire Integration (1343 CE)">Majapahit Empire Integration (1343 CE)</option>
              <option value="The Royal Kingdoms of Gelgel (16th Century)">The Royal Kingdoms of Gelgel (16th Century)</option>
              <option value="Dutch Colonial Era & Puputan (1846–1908 CE)">Dutch Colonial Era & Puputan (1846–1908 CE)</option>
              <option value="Modern UNESCO Heritage Era">Modern UNESCO Heritage Era</option>
            </select>
          </div>

          {/* Theme / Cover Visual Graphic */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 block">
              3. Select Visual Theme
            </label>
            <div className="grid grid-cols-2 gap-2">
              {POSTCARD_THEMES.map((theme) => (
                <button
                  key={theme.id}
                  type="button"
                  onClick={() => setFormData({ ...formData, themeGraphic: theme.id })}
                  className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                    formData.themeGraphic === theme.id
                      ? 'bg-amber-500/20 border-amber-400 text-amber-200 font-bold'
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-750'
                  }`}
                >
                  <span className="text-xs font-semibold block">{theme.name}</span>
                  <span className="text-[10px] text-slate-400 line-clamp-1">{theme.description}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Stamp Selection */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 block">
              4. Choose Postage Stamp Seal
            </label>
            <div className="grid grid-cols-2 gap-2">
              {STAMP_DESIGNS.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setFormData({ ...formData, stampDesign: s.id })}
                  className={`p-2 rounded-xl border text-xs font-semibold flex items-center gap-2 cursor-pointer ${
                    formData.stampDesign === s.id
                      ? 'bg-emerald-500/20 border-emerald-400 text-emerald-200 font-bold'
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-750'
                  }`}
                >
                  <span className={`p-1 rounded ${s.color}`}>
                    {renderStampIcon(s.icon)}
                  </span>
                  <span>{s.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Reflective Message */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label className="text-xs font-semibold text-slate-300">
                5. Reflective Postcard Note <span className="text-rose-400">*</span>
              </label>
              <span className="text-[11px] text-slate-500">{formData.message.length}/350</span>
            </div>
            <textarea
              rows={4}
              maxLength={350}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Describe what you observed, learned, or felt while visiting this era in Balinese history..."
              className="w-full p-3 bg-slate-800 border border-slate-700 rounded-xl text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500 leading-relaxed font-sans"
            />
          </div>

          {/* Recipient */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 block">
              6. Recipient / School Address
            </label>
            <input
              type="text"
              value={formData.recipient}
              onChange={(e) => setFormData({ ...formData, recipient: e.target.value })}
              placeholder="e.g. Grade 6 Classroom"
              className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>

        {/* Right Column: Physical Postcard Live Visual Preview */}
        <div className="lg:col-span-7 space-y-4 sticky top-24">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-semibold text-amber-300 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" /> Live Physical Postcard Artifact Preview
            </span>
            <span>Formatted for Printing</span>
          </div>

          {/* Postcard Physical Frame */}
          <div className="printable-postcard bg-gradient-to-br from-amber-50/95 via-amber-100/90 to-amber-50 text-slate-900 rounded-2xl p-6 sm:p-8 border-4 border-amber-800/40 shadow-2xl relative overflow-hidden transition-all min-h-[420px] flex flex-col justify-between">
            
            {/* Vintage Airmail Stripe Header */}
            <div className="absolute top-0 left-0 right-0 h-3 bg-[repeating-linear-gradient(45deg,#b91c1c,#b91c1c_15px,#ffffff_15px,#ffffff_30px,#1d4ed8_30px,#1d4ed8_45px,#ffffff_45px,#ffffff_60px)] opacity-90" />

            {/* Postcard Header Bar */}
            <div className="pt-2 flex justify-between items-start border-b-2 border-amber-900/20 pb-4">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-amber-800 font-bold block">
                  BALI HISTORICAL POSTCARD • HSIE STAGE 3
                </span>
                <h3 className="font-cinzel font-bold text-xl sm:text-2xl text-amber-950 tracking-tight">
                  {formData.era || 'Select Historical Era'}
                </h3>
                <span className="text-xs text-amber-800 font-medium">
                  {activeTheme.name} Collection
                </span>
              </div>

              {/* Postage Stamp Box */}
              <div className="flex flex-col items-end">
                <div className={`w-20 h-24 p-2 rounded border-2 border-dashed ${activeStamp.color} bg-amber-50 flex flex-col items-center justify-center text-center shadow-md relative`}>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full border border-amber-900/40 bg-amber-900/10 flex items-center justify-center text-[8px] font-mono text-amber-900 rotate-12">
                    BALI '24
                  </div>
                  {renderStampIcon(activeStamp.icon)}
                  <span className="text-[9px] font-bold mt-1 uppercase tracking-tighter">
                    {activeStamp.name}
                  </span>
                  <span className="text-[8px] text-amber-900/80 font-mono">
                    OFFICIAL
                  </span>
                </div>
              </div>
            </div>

            {/* Postcard Body Split: Left Message, Right Recipient Address */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 text-sm">
              
              {/* Message Side */}
              <div className="space-y-3 pr-0 md:pr-4 md:border-r border-amber-900/20">
                <div className="text-xs font-semibold text-amber-900/70 flex items-center gap-1 font-mono">
                  <Feather className="w-3.5 h-3.5 text-amber-800" />
                  <span>Student Reflections & Findings:</span>
                </div>
                <p className="font-serif italic text-amber-950 text-sm leading-relaxed whitespace-pre-wrap min-h-[140px]">
                  {formData.message || 'Type your postcard message on the left form...'}
                </p>
                <div className="pt-2 text-xs font-bold text-amber-900">
                  — Written by {formData.studentName || 'Student Name'}
                </div>
              </div>

              {/* Address / Recipient Side */}
              <div className="space-y-4 pl-0 md:pl-2 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-amber-900/70 font-mono">
                    POSTAL ADDRESS / RECIPIENT:
                  </div>

                  <div className="border-b-2 border-amber-900/30 pb-1 text-sm font-semibold text-amber-950">
                    To: {formData.recipient || 'Classroom / Educator Name'}
                  </div>
                  <div className="border-b-2 border-amber-900/30 pb-1 text-xs text-amber-900">
                    Subject: HSIE History Inquiry Grade 6
                  </div>
                  <div className="border-b-2 border-amber-900/30 pb-1 text-xs text-amber-900">
                    Location: NSW Stage 3 Classroom
                  </div>
                  <div className="border-b-2 border-amber-900/30 pb-1 text-xs text-amber-900">
                    Date Sent: {formData.date}
                  </div>
                </div>

                {/* Grade Stamp Badge */}
                <div className="p-2.5 rounded-lg border border-amber-900/20 bg-amber-900/5 text-[11px] text-amber-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>Assessed for Historical Inquiry (HT3-5)</span>
                </div>
              </div>
            </div>

            {/* Footer Vintage Line */}
            <div className="pt-3 border-t border-amber-900/20 flex justify-between items-center text-[10px] text-amber-900/70 font-mono">
              <span>HOLY ISLAND OF BALI • CULTURAL HERITAGE ARCHIVE</span>
              <span>STAMP #BL-2024-HSIE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
