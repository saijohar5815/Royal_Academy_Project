const academicTracks = {
  primary: {
    id: "primary",
    title: "Primary School Framework",
    ageGroup: "Grades 1 - 5 // Age 6-11",
    tagline: "Building Core Mental Models and Fundamentals",
    overview: "Focuses on foundational literacy, arithmetic logic, and an initial introduction to systemic computational thinking through visual block programming.",
    themeColor: "from-amber-500 to-orange-600",
    borderActive: "border-amber-500",
    accentGlow: "hover:shadow-amber-500/10",
    classes: [
      {
        class: "Class 1",
        classHighlights: [
          "Mastery of phonetic alphabets and foundational blends",
          "Fluency in single-digit addition and subtraction loops",
          "Basic spatial recognition through 2D pattern blocks",
          "Introduction to fundamental digital canvas manipulation (Paint)"
        ],
        subjects: [
          { subject: "English", type: "humanities", topics: ["Alphabet & Phonics", "Reading Simple Sentences", "Vocabulary Building"] },
          { subject: "Mathematics", type: "stem", topics: ["Counting Numbers", "Addition & Subtraction", "Shapes & Patterns"] },
          { subject: "EVS", type: "stem", topics: ["My Family", "Plants & Animals", "Our Environment"] },
          { subject: "Computer Science", type: "stem", topics: ["Computer Basics", "Parts of Computer", "Using Paint"] },
          { subject: "General Knowledge", type: "humanities", topics: ["National Symbols", "Good Habits", "Community Helpers"] }
        ]
      },
      {
        class: "Class 2",
        classHighlights: [
          "Transition to basic multi-paragraph story reading syntax",
          "Conceptual grasp of baseline base-10 place values",
          "Basic typing ergonomics and key recognition",
          "Understanding seasonal meteorological patterns"
        ],
        subjects: [
          { subject: "English", type: "humanities", topics: ["Grammar Basics", "Story Reading", "Creative Writing"] },
          { subject: "Mathematics", type: "stem", topics: ["Place Value", "Multiplication", "Measurement"] },
          { subject: "EVS", type: "stem", topics: ["Water & Air", "Food We Eat", "Seasons"] },
          { subject: "Computer Science", type: "stem", topics: ["Keyboard & Mouse", "MS Paint", "Typing Skills"] },
          { subject: "General Knowledge", type: "humanities", topics: ["Famous Personalities", "Festivals", "Basic Science Facts"] }
        ]
      },
      {
        class: "Class 3",
        classHighlights: [
          "Production of cohesive multi-sentence paragraph structures",
          "Introduction to fractional numerical subdivisions",
          "First execution of logical loops in Scratch visual block environment",
          "Baseline interpretation of geographic tracking and mapping grids"
        ],
        subjects: [
          { subject: "English", type: "humanities", topics: ["Paragraph Writing", "Reading Comprehension", "Grammar"] },
          { subject: "Mathematics", type: "stem", topics: ["Fractions", "Division", "Time & Money"] },
          { subject: "Science", type: "stem", topics: ["Living Things", "Plants", "Human Body Basics"] },
          { subject: "Social Studies", type: "humanities", topics: ["Maps", "Our Country", "Transport"] },
          { subject: "Computer Science", type: "stem", topics: ["Introduction to Scratch", "Drawing Tools", "Basic Coding Logic"] }
        ]
      },
      {
        class: "Class 4",
        classHighlights: [
          "Formal narrative essay and structured letter compositions",
          "Execution of abstract multi-step mathematical word problems",
          "Comprehensive tracking of energy transfers across biological food chains",
          "Development of visual asset timelines and animations inside Scratch"
        ],
        subjects: [
          { subject: "English", type: "humanities", topics: ["Essay Writing", "Letter Writing", "Vocabulary"] },
          { subject: "Mathematics", type: "stem", topics: ["Decimals", "Geometry", "Word Problems"] },
          { subject: "Science", type: "stem", topics: ["Matter", "Force", "Food Chain"] },
          { subject: "Social Studies", type: "humanities", topics: ["States of India", "History Basics", "Natural Resources"] },
          { subject: "Computer Science", type: "stem", topics: ["Scratch Programming", "Animations", "Internet Basics"] }
        ]
      },
      {
        class: "Class 5",
        classHighlights: [
          "Delivery of structured public speeches with proper syntax mechanics",
          "Foundational entry into pre-algebraic systems and variables",
          "Mapping human internal organ telemetry configurations",
          "Understanding secure online boundaries and digital safety hygiene"
        ],
        subjects: [
          { subject: "English", type: "humanities", topics: ["Advanced Grammar", "Creative Composition", "Public Speaking"] },
          { subject: "Mathematics", type: "stem", topics: ["Pre-Algebra", "Percentages", "Data Handling"] },
          { subject: "Science", type: "stem", topics: ["Earth & Space", "Energy", "Human Organ Systems"] },
          { subject: "Social Studies", type: "humanities", topics: ["Ancient Civilizations", "Indian Geography", "Civics"] },
          { subject: "Computer Science", type: "stem", topics: ["Scratch Projects", "Logic Building", "Digital Safety"] }
        ]
      }
    ]
  },
  middle: {
    id: "middle",
    title: "Middle School Framework",
    ageGroup: "Grades 6 - 8 // Age 11-14",
    tagline: "Transitioning to Formal Abstract Disciplines",
    overview: "Bridges general knowledge with formal analytical pathways. Introduces text-based syntax programming languages (Python) alongside foundational algebraic geometry.",
    themeColor: "from-blue-500 to-indigo-600",
    borderActive: "border-blue-500",
    accentGlow: "hover:shadow-blue-500/10",
    classes: [
      {
        class: "Class 6",
        classHighlights: [
          "Operational understanding of negative integer geometry scales",
          "Calculation of electrical loop resistance currents",
          "Structural parsing of ancient geo-civilization migration waves",
          "Formalized step-by-step pseudo-algorithm construction"
        ],
        subjects: [
          { subject: "English", type: "humanities", topics: ["Grammar", "Poetry", "Essay Writing"] },
          { subject: "Mathematics", type: "stem", topics: ["Integers", "Fractions", "Ratio & Proportion"] },
          { subject: "Science", type: "stem", topics: ["Food & Nutrition", "Motion", "Electricity Basics"] },
          { subject: "Social Science", type: "humanities", topics: ["Ancient History", "Geography", "Civics"] },
          { subject: "Computer Science", type: "stem", topics: ["MS Office", "Internet", "Algorithms"] }
        ]
      },
      {
        class: "Class 7",
        classHighlights: [
          "Formulating and balancing linear algebraic configurations",
          "Analysis of chemical pH properties along acid/base spectrums",
          "Writing and compiling baseline clean strings in native Python script",
          "Deconstruction of democratic architecture and constitutional logic"
        ],
        subjects: [
          { subject: "English", type: "humanities", topics: ["Literature", "Speech", "Writing Skills"] },
          { subject: "Mathematics", type: "stem", topics: ["Algebra", "Linear Equations", "Statistics"] },
          { subject: "Science", type: "stem", topics: ["Acids & Bases", "Respiration", "Heat"] },
          { subject: "Social Science", type: "humanities", topics: ["Medieval History", "Environment", "Democracy"] },
          { subject: "Computer Science", type: "stem", topics: ["Python Basics", "Flowcharts", "Problem Solving"] }
        ]
      },
      {
        class: "Class 8",
        classHighlights: [
          "Plotting multi-variable graphing frameworks and structural mensuration",
          "Analyzing microscopic cell biology structures and tissue functions",
          "Compiling native HTML files with complete structural tag hierarchy",
          "Constructing targeted persuasive speech scripts for public debates"
        ],
        subjects: [
          { subject: "English", type: "humanities", topics: ["Advanced Literature", "Debate", "Creative Writing"] },
          { subject: "Mathematics", type: "stem", topics: ["Linear Equations", "Graphs", "Mensuration"] },
          { subject: "Science", type: "stem", topics: ["Force & Pressure", "Cell Biology", "Metals & Non-metals"] },
          { subject: "Social Science", type: "humanities", topics: ["Modern History", "Resources", "Indian Constitution"] },
          { subject: "Computer Science", type: "stem", topics: ["Python Programming", "HTML Basics", "Robotics Introduction"] }
        ]
      }
    ]
  },
  high: {
    id: "high",
    title: "High School Framework",
    ageGroup: "Grades 9 - 12 // Age 14-18",
    tagline: "Specialized Advanced Training Pipeline",
    overview: "Deep specialization layout optimized for advanced engineering, computer science paradigms, and macro humanities analysis.",
    themeColor: "from-rose-500 to-violet-600",
    borderActive: "border-rose-500",
    accentGlow: "hover:shadow-rose-500/10",
    classes: [
      {
        class: "Class 9",
        classHighlights: [
          "Manipulating complex polynomial expressions and coordinate vectors",
          "Balancing sub-atomic configurations and molecular weight masses",
          "Introduction to binary data representations and hexadecimal structures",
          "Critical macro analysis of historical economic timeline trends"
        ],
        subjects: [
          { subject: "English", type: "humanities", topics: ["Literature", "Grammar", "Writing Skills"] },
          { subject: "Mathematics", type: "stem", topics: ["Number Systems", "Polynomials", "Coordinate Geometry"] },
          { subject: "Science", type: "stem", topics: ["Atoms & Molecules", "Motion", "Cell Structure"] },
          { subject: "Social Science", type: "humanities", topics: ["History", "Geography", "Economics"] },
          { subject: "Computer Science", type: "stem", topics: ["Python", "Data Representation", "Cyber Safety"] }
        ]
      },
      {
        class: "Class 10",
        classHighlights: [
          "Execution of advanced calculations via standard Trigonometry functions",
          "Solving multivariable quadratic systems and computing raw probabilities",
          "Writing modular functions with parameterized inputs in Python",
          "Deconstruction of globalization networks and cross-border supply chains"
        ],
        subjects: [
          { subject: "English", type: "humanities", topics: ["Literature", "Formal Letters", "Analytical Writing"] },
          { subject: "Mathematics", type: "stem", topics: ["Quadratic Equations", "Trigonometry", "Probability"] },
          { subject: "Science", type: "stem", topics: ["Chemical Reactions", "Electricity", "Genetics"] },
          { subject: "Social Science", type: "humanities", topics: ["Nationalism", "Resources", "Globalization"] },
          { subject: "Computer Science", type: "stem", topics: ["Python Functions", "Database Basics", "Networking"] }
        ]
      },
      {
        class: "Class 11",
        classHighlights: [
          "Executing computational mathematical limits and foundational calculus proofs",
          "Calculating classical mechanics trajectories and thermal energy transitions",
          "Building architectural data blueprints using Python OOP paradigms",
          "Authoring intensive, thesis-driven academic research manuscripts"
        ],
        subjects: [
          { subject: "English", type: "humanities", topics: ["Advanced Literature", "Research Writing", "Presentations"] },
          { subject: "Mathematics", type: "stem", topics: ["Limits", "Relations & Functions", "Statistics"] },
          { subject: "Physics", type: "stem", topics: ["Mechanics", "Thermodynamics", "Waves"] },
          { subject: "Chemistry", type: "stem", topics: ["Atomic Structure", "Chemical Bonding", "Equilibrium"] },
          { subject: "Computer Science", type: "stem", topics: ["Python OOP", "SQL", "Data Structures"] }
        ]
      },
      {
        class: "Class 12",
        classHighlights: [
          "Resolving advanced vector fields and linear programming arrays",
          "Analyzing quantum mechanics structures and solid-state semiconductors",
          "Writing complex relational schema operations inside transactional MySQL",
          "Consuming asynchronous endpoints via multi-threaded API pipelines"
        ],
        subjects: [
          { subject: "English", type: "humanities", topics: ["Critical Analysis", "Academic Writing", "Communication"] },
          { subject: "Mathematics", type: "stem", topics: ["Calculus", "Vectors", "Linear Programming"] },
          { subject: "Physics", type: "stem", topics: ["Electromagnetism", "Modern Physics", "Semiconductors"] },
          { subject: "Chemistry", type: "stem", topics: ["Organic Chemistry", "Biomolecules", "Polymers"] },
          { subject: "Computer Science", type: "stem", topics: ["Advanced Python", "MySQL", "Networking & APIs"] }
        ]
      }
    ]
  }
};

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, RefreshCw, Network, ArrowRight, Compass, 
  Library, Trophy, CheckCircle2, ChevronRight, 
  BookOpen, Terminal, ChevronDown, Lightbulb
} from "lucide-react";
import Navbar from "../components/Navbar/Navbar";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

export default function Academics() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedTrack, setSelectedTrack] = useState("primary");
  const [selectedClassIndex, setSelectedClassIndex] = useState(0);
  const [expandedSubject, setExpandedSubject] = useState(null);
  const [syncTime, setSyncTime] = useState(new Date().toLocaleTimeString());

  // REMOVED: The problematic tracking useEffect that caused cascading renders

  // Only keep the side-effect handler for ticking time and managing global scroll bars
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const timer = setInterval(() => setSyncTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, [currentPage, selectedTrack, selectedClassIndex]);

  // Atomic state updates inside your tracking handler
  const handleTrackChange = (trackId) => {
    setSelectedTrack(trackId);
    setSelectedClassIndex(0); // Safely reset atomically
    setExpandedSubject(null);  // Safely reset atomically
  };

  const navigateToTrack = (trackId) => {
    handleTrackChange(trackId);
    setCurrentPage("academics");
  };

  const activeTrackData = academicTracks[selectedTrack];
  const activeClassData = activeTrackData.classes[selectedClassIndex];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans antialiased selection:bg-blue-500/20 selection:text-blue-900 relative overflow-hidden w-full">
      
      {/* GLOBAL BACKGROUND MATRIX */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.25]" style={{ backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="absolute w-[800px] h-[800px] rounded-full bg-blue-200/20 blur-[130px] -top-20 -right-20" />
      </div>

      {/* TOP DECORATIVE HUD BAR */}
      <div className="w-full bg-slate-950 border-b border-slate-800 py-3 relative z-50">
        <div className="w-full px-6 sm:px-10 lg:px-16 flex justify-between items-center text-xs font-mono font-bold tracking-wider text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span>LIVE_STREAM_ACTIVE</span>
            <span className="text-slate-500">NODE // ACADEMY_CORE_LIGHT</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-4 text-slate-500">
              <button 
                onClick={() => setCurrentPage("home")}
                className={`hover:text-blue-500 font-mono transition-colors ${currentPage === "home" ? "text-blue-400 underline decoration-2 underline-offset-4" : ""}`}
              >
                OVERVIEW_HUB
              </button>
              <span className="text-slate-700">/</span>
              <button 
                onClick={() => { setCurrentPage("academics"); handleTrackChange("primary"); }}
                className={`hover:text-blue-500 font-mono transition-colors ${currentPage === "academics" ? "text-blue-400 underline decoration-2 underline-offset-4" : ""}`}
              >
                ACADEMIC_TRACKS
              </button>
            </div>
            <div className="flex items-center gap-4 text-slate-400">
              <span>SECURE TRANSIT // TLS_1.3</span>
              <span>SYSTEM YEAR: 2026</span>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
      <main className="relative z-10 w-full px-4 sm:px-10 lg:px-16 xl:px-24 pt-12 pb-24 max-w-[1600px] mx-auto">
        <AnimatePresence mode="wait">
          {currentPage === "home" ? (
            <motion.div
              key="home-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <header className="py-12 md:py-20 border-b border-slate-200/80 text-left grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-full text-xs font-mono tracking-wider text-blue-600 uppercase font-bold">
                    <Sparkles size={14} /> CORE ENVIRONMENT TRANSIT DIRECT LOG
                  </div>
                  <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black text-slate-950 tracking-tight uppercase leading-[0.95]">
                    Architecting the <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
                      Next Matrix Track
                    </span>
                  </h1>
                  <p className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed max-w-3xl pt-2">
                    Welcome to the central academic interface layer. Select a specialized tracking framework module from the matrix catalog below to analyze curricula, benchmarks, and tactical deployment metrics.
                  </p>
                </div>

                <div className="lg:col-span-5 w-full">
                  <div className="bg-slate-950 text-slate-200 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5 relative overflow-hidden font-mono text-sm">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
                    <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        </div>
                        <span className="text-xs text-slate-400 font-bold ml-1">SYS_MONITOR // CORE_SYNC</span>
                      </div>
                      <div className="text-xs text-blue-400 bg-blue-950/60 px-2.5 py-1 rounded border border-blue-900/50 flex items-center gap-1">
                        <RefreshCw size={12} className="animate-spin" /> {syncTime}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-4 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <Network size={16} className="text-blue-400" />
                          <div>
                            <div className="text-xs text-slate-500 font-bold uppercase">Global Campus Pipeline</div>
                            <div className="text-slate-200 font-bold text-sm">Curriculum Mappings Active</div>
                          </div>
                        </div>
                        <span className="text-emerald-400 font-bold bg-emerald-950/40 px-2.5 py-1 rounded border border-emerald-900/30 text-xs">100% SYNCED</span>
                      </div>
                    </div>

                    <div className="space-y-3 bg-slate-900/30 border border-slate-900 rounded-xl p-4">
                      <div className="flex justify-between text-xs text-slate-400 font-bold uppercase tracking-wider">
                        <span>Tier Workload Balancing</span>
                      </div>
                      <div className="space-y-4 pt-1">
                        <div>
                          <div className="flex justify-between text-sm mb-1.5 text-slate-300"><span>Primary (Grades 1-5)</span><span>42%</span></div>
                          <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden"><div className="bg-amber-500 h-full rounded-full" style={{ width: '42%' }} /></div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1.5 text-slate-300"><span>Middle (Grades 6-8)</span><span>68%</span></div>
                          <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden"><div className="bg-blue-500 h-full rounded-full" style={{ width: '68%' }} /></div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1.5 text-slate-300"><span>High (Grades 9-12)</span><span>91%</span></div>
                          <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden"><div className="bg-rose-500 h-full rounded-full" style={{ width: '91%' }} /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </header>

              <section id="development-tracks" className="py-16 w-full">
                <div className="space-y-2 text-left mb-12">
                  <p className="uppercase tracking-[0.25em] text-blue-600 font-mono font-bold text-sm">// PROGRAM OVERVIEW ENTRIES</p>
                  <h2 className="text-3xl font-black text-slate-900 tracking-tight sm:text-4xl">Academic Development Tracks</h2>
                </div>

                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full"
                >
                  {Object.values(academicTracks).map((track) => (
                    <motion.div 
                      key={track.id}
                      variants={cardVariants}
                      whileHover={{ y: -8, scale: 1.015 }}
                      className={`bg-white border border-slate-200/90 rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between shadow-sm relative group ${track.accentGlow} hover:border-slate-300/30 transition-shadow duration-300 ease-out w-full`}
                    >
                      <div className="space-y-6">
                        <motion.div 
                          whileHover={{ rotate: 6, scale: 1.05 }}
                          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${track.themeColor} flex items-center justify-center text-white shadow-md`}
                        >
                          {track.id === "primary" && <Lightbulb size={26} />}
                          {track.id === "middle" && <BookOpen size={26} />}
                          {track.id === "high" && <Terminal size={26} />}
                        </motion.div>
                        
                        <div className="space-y-3 text-left">
                          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-bold block">{track.ageGroup}</span>
                          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors duration-200">{track.title}</h3>
                          <p className="text-base text-slate-600 leading-relaxed font-medium pt-1">
                            {track.overview}
                          </p>
                        </div>
                      </div>

                      <div className="pt-8 mt-6 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-slate-400">STATUS // VERIFIED</span>
                        <motion.button
                          onClick={() => navigateToTrack(track.id)}
                          whileTap={{ scale: 0.97 }}
                          className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider text-white bg-gradient-to-r ${track.themeColor} shadow-md overflow-hidden relative`}
                        >
                          <span>Explore Program</span>
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </section>
            </motion.div>
          ) : (
            <motion.div
              key="academics-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="py-6 md:py-12 w-full"
            >
              <div className="overflow-x-auto whitespace-nowrap pb-4 mb-10 border-b border-slate-200 w-full">
                <div className="flex justify-start md:justify-center items-center gap-4 min-w-max px-2">
                  {Object.values(academicTracks).map((track) => {
                    const isSelected = selectedTrack === track.id;
                    return (
                      <button
                        key={track.id}
                        onClick={() => handleTrackChange(track.id)} // Updated to use the batch handler
                        className={`flex items-center gap-2.5 px-6 py-4 rounded-2xl text-sm font-mono uppercase tracking-wider font-bold transition-all duration-200 border-2 ${
                          isSelected 
                            ? `bg-white text-slate-950 ${track.borderActive} shadow-md` 
                            : "bg-slate-100/80 border-transparent text-slate-500 hover:text-slate-800"
                        }`}
                      >
                        {track.title}
                      </button>
                    );
                  })}
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedTrack}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-12 w-full"
                >
                  <div className={`bg-white border-2 ${activeTrackData.borderActive}/20 rounded-3xl p-6 sm:p-10 text-left relative overflow-hidden w-full shadow-sm`}>
                    <div className="space-y-4 max-w-5xl relative z-10">
                      <span className="font-mono text-xs font-bold text-slate-400 block uppercase tracking-widest">// TARGET AGE SECTOR: {activeTrackData.ageGroup}</span>
                      <h2 className={`text-3xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r ${activeTrackData.themeColor}`}>
                        {activeTrackData.title}
                      </h2>
                      <p className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight italic">"{activeTrackData.tagline}"</p>
                      <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium pt-2">{activeTrackData.overview}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
                    
                    {/* LEFT PANEL: GRADES & SUBJECT ACCORDIONS */}
                    <div className="lg:col-span-8 space-y-8 w-full">
                      
                      <div className="space-y-4 text-left">
                        <div className="flex items-center gap-2 font-mono text-sm font-black uppercase text-slate-400 tracking-wider">
                          <Compass size={16} /> // Grade Pipeline Alignment Matrix
                        </div>
                        <div className="grid grid-cols-2 sm:flex sm:flex-row gap-2 bg-slate-100 p-2 rounded-2xl w-full">
                          {activeTrackData.classes.map((cls, idx) => {
                            const isCurrent = selectedClassIndex === idx;
                            return (
                              <button
                                key={cls.class}
                                onClick={() => {
                                  setSelectedClassIndex(idx);
                                  setExpandedSubject(null);
                                }}
                                className={`flex-1 px-4 py-3.5 rounded-xl font-mono text-sm font-black transition-all ${
                                  isCurrent 
                                    ? `bg-gradient-to-br ${activeTrackData.themeColor} text-white shadow-md scale-[1.02]` 
                                    : "text-slate-600 hover:bg-slate-200/60"
                                }`}
                              >
                                {cls.class.toUpperCase()}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div className="space-y-4 text-left">
                        <div className="flex items-center gap-2 font-mono text-sm font-black uppercase text-slate-400 tracking-wider">
                          <Library size={16} /> // Interactive Syllabus Modules for {activeClassData.class}
                        </div>
                        
                        <div className="space-y-3 w-full">
                          {activeClassData.subjects.map((sub, sIdx) => {
                            const isExpanded = expandedSubject === sIdx;
                            const isStem = sub.type === "stem";

                            return (
                              <div 
                                key={sub.subject} 
                                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all hover:border-slate-300"
                              >
                                <button
                                  onClick={() => setExpandedSubject(isExpanded ? null : sIdx)}
                                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
                                >
                                  <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs font-mono uppercase ${
                                      isStem 
                                        ? "bg-blue-50 text-blue-600 border border-blue-200" 
                                        : "bg-emerald-50 text-emerald-600 border border-emerald-200"
                                    }`}>
                                      {isStem ? "STEM" : "HUM"}
                                    </div>
                                    <div>
                                      <h4 className="text-xl font-extrabold text-slate-900 tracking-tight">{sub.subject}</h4>
                                      <span className="text-xs font-mono text-slate-400 uppercase font-bold">{sub.topics.length} CORE MODULES REGISTERED</span>
                                    </div>
                                  </div>
                                  <motion.div
                                    animate={{ rotate: isExpanded ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="text-slate-400"
                                  >
                                    <ChevronDown size={20} />
                                  </motion.div>
                                </button>

                                <AnimatePresence initial={false}>
                                  {isExpanded && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: "auto", opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.25, ease: "easeInOut" }}
                                    >
                                      <div className="px-6 pb-6 pt-2 border-t border-slate-100 bg-slate-50/50">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mt-3">
                                          {sub.topics.map((topic, tIdx) => (
                                            <motion.div
                                              key={topic}
                                              initial={{ scale: 0.95, opacity: 0 }}
                                              animate={{ scale: 1, opacity: 1 }}
                                              transition={{ delay: tIdx * 0.05 }}
                                              className="bg-white border border-slate-200 p-4 rounded-xl flex items-center gap-3 shadow-2xs group hover:border-slate-400 transition-colors"
                                            >
                                              <div className={`w-2 h-2 rounded-full shrink-0 ${isStem ? "bg-blue-500" : "bg-emerald-500"}`} />
                                              <span className="text-sm font-bold text-slate-700 leading-snug">{topic}</span>
                                            </motion.div>
                                          ))}
                                        </div>
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                    </div>

                    {/* RIGHT PANEL: DYNAMIC CLASS TARGET PANEL */}
                    <div className="lg:col-span-4 space-y-6 w-full lg:sticky lg:top-28">
                      <AnimatePresence mode="wait">
                        <motion.div 
                          key={`${selectedTrack}-${selectedClassIndex}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm text-left relative overflow-hidden"
                        >
                          <div className="flex items-center gap-2 font-mono text-sm font-black uppercase text-slate-400 tracking-wider mb-2">
                            <Trophy size={16} /> // Expected Targets
                          </div>
                          <div className="text-xs font-mono font-black text-blue-600 tracking-wider uppercase mb-5">
                            Focus Framework: {activeClassData.class}
                          </div>
                          
                          <ul className="space-y-4">
                            {activeClassData.classHighlights.map((highlight, index) => (
                              <motion.li 
                                key={index}
                                initial={{ opacity: 0, x: -5 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="flex items-start gap-3 text-base font-semibold text-slate-700 leading-normal"
                              >
                                <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                                <span>{highlight}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      </AnimatePresence>

                      <button 
                        onClick={() => setCurrentPage("home")}
                        className="w-full py-4 bg-slate-950 hover:bg-slate-900 text-white font-mono font-bold text-xs uppercase tracking-widest rounded-2xl transition-all duration-150 shadow-lg flex items-center justify-center gap-2"
                      >
                        Return to Hub Home <ChevronRight size={14} />
                      </button>
                    </div>

                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* FOOTER */}
      <footer className="mt-16 border-t border-slate-200 bg-white py-8 text-center text-xs font-mono tracking-widest text-slate-400 w-full">
        <div className="w-full px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span>ROYAL ACADEMY MATRIX CORP INTEGRATION // PROT_v4</span>
          <span>SYSTEM RUNTIME SECURE ACCESS STATUS: CURRENT_OK_2026</span>
        </div>
      </footer>
    </div>
  );
}