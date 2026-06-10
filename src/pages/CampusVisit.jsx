import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { motion, AnimatePresence } from 'framer-motion'; 
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Info,
  Smile,
  BookOpen,
  Award,
  School
} from 'lucide-react';
import Navbar from "../components/Navbar/Navbar";

const TOUR_TRACKS = [
  {
    id: 'primary',
    title: 'Primary School (Grades 1 - 5)',
    tagline: 'Foundational years, play-based & active learning',
    duration: '1.5 Hours',
    icon: Smile,
    description: 'Explore our vibrant primary wings, foundational literacy centers, indoor & outdoor developmental play zones, and meet our early-childhood educators.',
    highlights: ['Smart Classrooms Tour', 'Activity & Play Zone Hub', 'Curriculum & Support Briefing']
  },
  {
    id: 'middle',
    title: 'Middle School (Grades 6 - 8)',
    tagline: 'Bridging foundational skills to critical thinking',
    duration: '1.5 Hours',
    icon: BookOpen,
    description: 'Tour specialized interactive subject labs, digital learning studios, student council spaces, and learn about our unique co-curricular electives program.',
    highlights: ['Introductory Science Labs', 'Arts & Music Studios', 'Sports Complex Overview']
  },
  {
    id: 'high',
    title: 'High School (Grades 9 - 12)',
    tagline: 'Academic rigor, leadership, & career mapping',
    duration: '2 Hours',
    icon: Award,
    description: 'Deep dive into advanced STEM & Humanities streams, standard preparation centers, competitive sports infrastructure, and college/career counseling spaces.',
    highlights: ['Advanced Laboratories', 'Career Counseling Desk', 'Senior Student Panel Q&A']
  }
];

const AVAILABLE_DATES = [
  { id: 'd1', day: 'Tue', date: 'June 16', slots: ['09:00 AM', '11:00 AM'] },
  { id: 'd2', day: 'Thu', date: 'June 18', slots: ['09:00 AM', '11:00 AM', '02:00 PM'] },
  { id: 'd3', day: 'Sat', date: 'June 20', slots: ['10:00 AM', '01:00 PM'] }
];

export default function CampusVisit() {
  const navigate = useNavigate(); 
  
  const [selectedTrack, setSelectedTrack] = useState(TOUR_TRACKS[0].id);
  const [selectedDateObj, setSelectedDateObj] = useState(AVAILABLE_DATES[0]);
  const [selectedSlot, setSelectedSlot] = useState(AVAILABLE_DATES[0].slots[0]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    targetGrade: '1',
    email: '',
    phone: '',
    visitorCount: '2',
    notes: ''
  });

  const handleDateChange = (dateObj) => {
    setSelectedDateObj(dateObj);
    setSelectedSlot(dateObj.slots[0]); 
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.parentName || !formData.email || !formData.childName) return;
    setFormSubmitted(true);
  };

  const currentTrackDetails = TOUR_TRACKS.find(t => t.id === selectedTrack);

  return (
    <div className="w-full min-h-screen bg-white text-slate-900 antialiased font-sans relative overflow-x-hidden">
      <Navbar />
      
      {/* Container wrapper adjusting max width and fluid margins across ultra-wides down to mobiles */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-10 space-y-8 lg:space-y-12">
         
        {/* --- Header Section --- */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-8 lg:p-10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
          <div className="space-y-3 relative z-10 flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles size={12} className="animate-pulse shrink-0" />
              <span>Admissions Open (Grades 1-12)</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
              Book a Campus Visit
            </h1>
            <p className="text-slate-500 text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed">
              Select the appropriate schooling division to plan your personalized campus experience and interactive counseling session.
            </p>
          </div>
          
          <div className="w-full md:w-auto flex font-mono text-slate-600 border-t md:border-t-0 pt-4 md:pt-0 border-slate-100 shrink-0">
            <div className="w-full md:w-auto flex items-start sm:items-center gap-2.5 bg-slate-50 border border-slate-200/60 p-3.5 rounded-2xl shadow-inner">
              <MapPin size={18} className="text-emerald-600 shrink-0 mt-0.5 sm:mt-0" />
              <span className="font-bold text-xs leading-normal">Main Administration Gate / Welcome Desk</span>
            </div>
          </div>
        </motion.div>

        {formSubmitted ? (
          /* --- Booking Success View State --- */
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white border-2 border-emerald-500 rounded-3xl p-6 sm:p-10 md:p-12 text-center max-w-3xl mx-auto space-y-6 md:space-y-8 shadow-xl"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200 shadow-sm">
              <CheckCircle2 size={36} className="sm:size-[44px]" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Appointment Confirmed!</h2>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                We are excited to welcome your family. A confirmation slip and campus entry guidelines have been sent to <strong className="text-emerald-700 underline break-all">{formData.email}</strong>.
              </p>
            </div>
            
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 text-left grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-0.5">
                <span className="text-slate-400 block text-[10px] uppercase font-mono font-bold tracking-wider">School Division</span>
                <span className="text-slate-800 font-bold text-sm sm:text-base">{currentTrackDetails.title}</span>
              </div>
              <div className="space-y-0.5">
                <span className="text-slate-400 block text-[10px] uppercase font-mono font-bold tracking-wider">Schedule Block</span>
                <span className="text-slate-800 font-bold text-sm sm:text-base">{selectedDateObj.date} @ {selectedSlot}</span>
              </div>
              <div className="space-y-0.5">
                <span className="text-slate-400 block text-[10px] uppercase font-mono font-bold tracking-wider">Student Parameters</span>
                <span className="text-slate-800 font-bold text-sm sm:text-base">{formData.childName} (Grade {formData.targetGrade})</span>
              </div>
              <div className="space-y-0.5">
                <span className="text-slate-400 block text-[10px] uppercase font-mono font-bold tracking-wider">Total Attendees</span>
                <span className="text-slate-800 font-bold text-sm sm:text-base">{formData.visitorCount} Family Members</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button 
                onClick={() => setFormSubmitted(false)}
                className="w-full sm:w-auto px-6 py-3.5 bg-slate-900 text-white rounded-xl font-mono text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-all shadow-md active:scale-95"
              >
                Book Another Session
              </button>
              <button 
                onClick={() => navigate('/')}
                className="w-full sm:w-auto px-6 py-3.5 bg-white border border-slate-300 text-slate-700 rounded-xl font-mono text-xs font-bold uppercase tracking-wider hover:bg-slate-50 transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <ArrowLeft size={14} />
                Return Home
              </button>
            </div>
          </motion.div>
        ) : (
          /* --- Responsive Master Scheduling Matrix Workflow --- */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Content Column: Division Tracks & Adaptive Date Pickers */}
            <div className="lg:col-span-7 space-y-8 lg:space-y-10">
              
              {/* STEP 1: Select Tour Experiences */}
              <div className="space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-mono text-xs shadow-sm shrink-0">1</span>
                  Select School Division
                </h2>
                
                <div className="grid grid-cols-1 gap-4">
                  {TOUR_TRACKS.map((track) => {
                    const TrackIcon = track.icon;
                    const isTrackSelected = selectedTrack === track.id;
                    return (
                      <motion.button
                        whileHover={{ y: -1 }}
                        key={track.id}
                        onClick={() => setSelectedTrack(track.id)}
                        className={`text-left p-5 sm:p-6 md:p-8 rounded-3xl border-2 transition-all duration-300 flex flex-col sm:flex-row items-start gap-4 sm:gap-5 ${
                          isTrackSelected 
                            ? "bg-white border-emerald-600 ring-4 ring-emerald-50/50 shadow-sm" 
                            : "bg-white border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        <div className={`p-3.5 rounded-2xl border shrink-0 ${
                          isTrackSelected ? "bg-emerald-50 border-emerald-200 text-emerald-700" : "bg-slate-50 border-slate-200 text-slate-400"
                        }`}>
                          <TrackIcon size={22} />
                        </div>
                        <div className="space-y-2 flex-1 w-full">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-4">
                            <h3 className="text-base sm:text-lg font-black text-slate-900 leading-tight">{track.title}</h3>
                            <span className="w-fit text-[10px] font-mono font-bold bg-slate-100 border border-slate-200 text-slate-600 px-2.5 py-0.5 rounded-md shadow-sm shrink-0">
                              {track.duration}
                            </span>
                          </div>
                          <p className="text-emerald-600 text-xs font-mono font-bold tracking-wide">{track.tagline}</p>
                          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-0.5">{track.description}</p>
                          
                          {/* Inner Highlights Feature Elements */}
                          <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-100 mt-2.5">
                            {track.highlights.map((item, idx) => (
                              <span key={idx} className="inline-flex items-center gap-1.5 text-[11px] text-slate-700 font-bold bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" /> {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* STEP 2: Calendar Engine */}
              <div className="space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-mono text-xs shadow-sm shrink-0">2</span>
                  Select Date & Time Slot
                </h2>

                <div className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 md:p-8 space-y-6 shadow-sm">
                  {/* Calendar Row Picker */}
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block">Available Days (Working Hours)</span>
                    <div className="grid grid-cols-3 gap-2.5 sm:gap-4">
                      {AVAILABLE_DATES.map((dateObj) => {
                        const isDateSelected = selectedDateObj.id === dateObj.id;
                        return (
                          <button
                            key={dateObj.id}
                            type="button"
                            onClick={() => handleDateChange(dateObj)}
                            className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border text-center transition-all duration-200 ${
                              isDateSelected 
                                ? "bg-slate-900 border-slate-900 text-white shadow-md font-bold scale-[1.01]" 
                                : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100/60"
                            }`}
                          >
                            <span className="text-[10px] font-mono block uppercase opacity-75 tracking-wider">{dateObj.day}</span>
                            <span className="text-sm sm:text-base font-extrabold tracking-tight block mt-0.5">{dateObj.date}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Slot Selection Grid */}
                  <div className="space-y-2 border-t border-slate-100 pt-5">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block">Available Time Slots</span>
                    <div className="flex flex-wrap gap-2.5">
                      {selectedDateObj.slots.map((slot) => {
                        const isSlotSelected = selectedSlot === slot;
                        return (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedSlot(slot)}
                            className={`px-4 py-2.5 rounded-xl border font-mono text-xs sm:text-sm tracking-tight transition-all duration-200 flex items-center gap-2 ${
                              isSlotSelected 
                                ? "bg-emerald-600 border-emerald-600 text-white font-bold shadow-sm" 
                                : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                            }`}
                          >
                            <Clock size={14} className="shrink-0" />
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Dynamic Parent Registration Form (Sticky layout on wide views) */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-6 w-full">
              
              <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
                <div className="bg-slate-900 text-white p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-emerald-400 shrink-0" />
                    <h3 className="text-sm font-bold font-mono uppercase tracking-wider">Visit Campus</h3>
                  </div>
                  <span className="w-fit text-[10px] bg-slate-800 text-emerald-300 font-mono font-bold px-2.5 py-1 rounded-md border border-slate-700/60">
                    Royal Academy Admissions
                  </span>
                </div>

                <form onSubmit={handleSubmit} className="p-5 sm:p-6 md:p-8 space-y-4">
                  {/* Summary Micro Badge */}
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 shadow-inner text-xs sm:text-sm">
                    <div className="text-slate-700 font-bold flex items-center gap-2">
                      <School size={14} className="text-emerald-600 shrink-0" />
                      <span className="truncate">{currentTrackDetails.title}</span>
                    </div>
                    <div className="text-slate-600 flex items-center gap-2 border-t border-slate-200/60 pt-2">
                      <Clock size={14} className="text-emerald-600 shrink-0" />
                      <span className="leading-tight"><strong>{selectedDateObj.date}</strong> at <strong>{selectedSlot}</strong></span>
                    </div>
                  </div>

                  {/* Input Element: Parent Name */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono font-bold uppercase text-slate-400 tracking-wider">Parent / Guardian Name</label>
                    <input 
                      type="text" 
                      name="parentName"
                      required
                      value={formData.parentName}
                      onChange={handleInputChange}
                      placeholder="e.g. John Doe"
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-50 transition-all"
                    />
                  </div>

                  {/* Student data fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono font-bold uppercase text-slate-400 tracking-wider">Child's Name</label>
                      <input 
                        type="text" 
                        name="childName"
                        required
                        value={formData.childName}
                        onChange={handleInputChange}
                        placeholder="e.g. Alex Doe"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-50 transition-all"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono font-bold uppercase text-slate-400 tracking-wider">Target Grade</label>
                      <select 
                        name="targetGrade"
                        value={formData.targetGrade}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-50 transition-all"
                      >
                        {[...Array(12)].map((_, i) => (
                          <option key={i+1} value={i+1}>Grade {i+1}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Contact Inputs */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono font-bold uppercase text-slate-400 tracking-wider">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="parent@example.com"
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-50 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono font-bold uppercase text-slate-400 tracking-wider">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone number"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-50 transition-all"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono font-bold uppercase text-slate-400 tracking-wider">Attendees Count</label>
                      <select 
                        name="visitorCount"
                        value={formData.visitorCount}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-50 transition-all"
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 People (Parent + Child)</option>
                        <option value="3">3 People</option>
                        <option value="4+">4+ Family Members</option>
                      </select>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono font-bold uppercase text-slate-400 tracking-wider">Specific Interests / Medical Needs</label>
                    <textarea 
                      name="notes"
                      rows="3"
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="Let us know if your child has interests in specific sports, arts, or needs physical assistance..."
                      className="w-full bg-white border border-slate-200 rounded-xl p-3.5 text-sm text-slate-800 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-50 transition-all resize-none h-20"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all active:scale-[0.99] flex items-center justify-center gap-2 group mt-2"
                  >
                    <span>Request Appointment</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1 shrink-0" />
                  </button>

                  <div className="flex items-start gap-2 text-[11px] text-slate-500 bg-slate-50 border border-slate-200/60 rounded-xl p-3 leading-normal">
                    <Info size={13} className="shrink-0 text-slate-400 mt-0.5" />
                    <span>Weekend slots fill up quickly. For schedule updates, reach out to the administration desk.</span>
                  </div>
                </form>
              </div>

            </div>

          </div>
        )}

        {/* --- DYNAMIC BACK BUTTON FOOTER --- */}
        <div className="pt-4 border-t border-slate-200 flex items-center justify-start">
          <button
            type="button"
            onClick={() => navigate('/')} 
            className="group px-5 py-2.5 border border-slate-300 hover:border-slate-400 rounded-xl bg-white text-slate-600 hover:text-slate-800 transition-all duration-200 flex items-center gap-2 active:scale-95"
          >
            <ArrowLeft size={16} className="transform group-hover:-translate-x-0.5 transition-transform shrink-0" />
            <span className="text-xs font-bold">Back to Home</span>
          </button>
        </div>

      </div>
    </div>
  );
}