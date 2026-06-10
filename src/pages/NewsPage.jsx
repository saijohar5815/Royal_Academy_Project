import React, { useState } from "react";
import { 
  BookOpen, BookMarked, ChevronRight, Download, Newspaper, 
  School, ArrowRight, Share2, Filter, Search, Check, ArrowLeft, Bookmark, Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
// --- Mock Data Packages Ingest ---
const featuredNews = {
  id: "FEAT-01",
  title: "Elementary Robotics Cohort Secures Global STEM Innovation Award",
  description: "Our Grade 4 and 5 student tech collective outpaced junior high programs globally, building an eco-sensitive ocean cleanup micro-drone using modular spatial arrays.",
  category: "STEM & Robotics",
  cohort: "Primary Wing (Grades 1-5)",
  date: "June 02, 2026",
  image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200",
  fullContent: "The deployment of modular spatial arrays allowed our lower primary division to build intuitive sensory platforms that dynamically track plastic debris vectors in coastal shallow currents. Judges commended the cohort's exceptional technical demonstration and presentation skills during the international finals panel presentation."
};

const initialNews = [
  {
    id: "NWS-01",
    title: "Senior High Capstone Biology Hub Officially Commissioned",
    category: "Academics",
    cohort: "Senior High (Grades 9-12)",
    date: "May 14, 2026",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
    summary: "A state-of-the-art gene mapping and tissue cultivation lab opens for advanced AP and International Baccalaureate thesis research.",
    fullContent: "This newly launched layout introduces professional-grade CRISPR platforms, thermocyclers, and incubator matrix arrays to our senior school students. It provides a unique opportunity to complete cutting-edge biological research equivalent to undergraduate university pathways."
  },
  {
    id: "NWS-02",
    title: "Varsity Athletic Complex Gets Smart Performance Diagnostics",
    category: "Sports",
    cohort: "All-Campus Leagues",
    date: "April 28, 2026",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200",
    summary: "Integrating real-time biomechanical telemetry to track safety parameters and velocity curves across inter-school tournament lines.",
    fullContent: "By embedding smart diagnostic trackers directly within our premium sporting fields and training centers, student athletes can safely optimize high-performance metrics. This telemetry helps map stamina indexes while significantly reducing field fatigue and ligament stress profiles."
  },
  {
    id: "NWS-03",
    title: "Primary Wing Launches Multilingual Smart Library Registry",
    category: "Campus Life",
    cohort: "Primary Wing (Grades 1-5)",
    date: "April 15, 2026",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200",
    summary: "Our early learners passed a historic benchmark of 50,000 global digital literature reviews read entirely in immersive foreign languages.",
    fullContent: "The bilingual reading track enables younger classes to engage thoroughly with complex global histories. Accelerated reading achievements are synchronized directly with companion institutions situated across Europe and East Asia to offer an interconnected learning platform."
  },
  {
    id: "NWS-04",
    title: "Mathematics Union Announces Matrix Analytics Tournament Results",
    category: "Academics",
    cohort: "Middle School (Grades 6-8)",
    date: "March 30, 2026",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200",
    summary: "Middle school algebra factions sweep state logic championships, breaking long-standing institutional speed records.",
    fullContent: "Competing against over forty regional academies, our specialized data analytics groups completed multi-variable matrices algorithms with a baseline speed accuracy metric of 98.4%. Dedicated curriculum blocks in vector calculus structures have paid off majorly early this standard term."
  },
  {
    id: "NWS-05",
    title: "Sustainable Urban Architecture Guild Unveils Rooftop Biome",
    category: "STEM & Robotics",
    cohort: "Senior High (Grades 9-12)",
    date: "March 12, 2026",
    image: "https://tse3.mm.bing.net/th/id/OIP.bCTLLtl1f95dRyIKzvagnwHaDi?pid=Api&P=0&h=180",
    summary: "An eco-sensitive, self-sustaining high-density greenhouse is deployed atop the West Wing layout to isolate alternative energy systems.",
    fullContent: "Designed entirely by structural design students, the new automated biome utilizes closed-loop nutrient monitoring and photovoltaic solar cells. The platform will serve as an active environmental data gathering array for senior science terms to come."
  },
  {
    id: "NWS-06",
    title: "Creative Arts Faculty Partners with National Symphony Collective",
    category: "Campus Life",
    cohort: "All-Campus Leagues",
    date: "Feb 18, 2026",
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=1200",
    summary: "Introducing spatial orchestral composition masterclasses and fine acoustic design options for intermediate performers.",
    fullContent: "Our performing arts wings will co-host a rotating performance series featuring guest conductors and algorithmic digital audio design elements. This offers students looking into conservatory applications unmatched industry exposure."
  }
];

const curriculumMatrix = {
  primary: {
    title: "Primary Wing (Grades 1 - 5)",
    tagline: "Building Foundational Core Logic & Immersive Environments",
    description: "Focuses on elementary literacy, early mathematical reasoning, and exploratory digital sciences through heavily gamified milestones.",
    subjects: [
      { id: "p1", name: "Foundational English & Speech", topics: ["Phonics & Decoding Strategies", "Interactive Storytelling", "Structural Mechanics & Grammar", "Creative Prose Workshop"] },
      { id: "p2", name: "Mathematics & Analytical Thinking", topics: ["Number Sense & Quantities (1-1000)", "Geometric Spatial Recognition", "Basic Operations (+, -, *, /)", "Introductory Data Tallying"] },
      { id: "p3", name: "Environmental Science (EVS)", topics: ["Community Ecosystems & Frameworks", "Botany & Zoic Life Cycles", "Conservation Systems (Water/Air)", "Personal Health & Micro-habits"] },
      { id: "p4", name: "Elementary Robotics & Code", topics: ["Block Coding Structures (Scratch)", "Modular Lego Assemblies", "Visual Logic Arrays", "Algorithmic Loops Intro"] }
    ]
  },
  middle: {
    title: "Middle School Academy (Grades 6 - 8)",
    tagline: "Transitioning to Specialized Theoretical & Practical Exploration",
    description: "Shifts young minds toward structured analytical research, computational abstractions, and deep inquiry across scientific tracks.",
    subjects: [
      { id: "m1", name: "Integrated Sciences", topics: ["Cellular Foundations & Microorganisms", "Kinematics, Forces & Energy Profiles", "Elements, Compounds & Mixtures", "Ecosystem Dynamics & Climate Data"] },
      { id: "m2", name: "Algebra & Discrete Mathematics", topics: ["Fractional Scales & Decimals", "Linear Variables & Linear Equations", "Practical Coordinate Geometry", "Probability Distributions & Data Matrices"] },
      { id: "m3", name: "Social Infrastructures & Humanities", topics: ["Ancient & Historical Civilizations", "Cartography & Topological Mapping", "Civic Rights & Modern Governance", "Resource Extraction Profiles"] },
      { id: "m4", name: "Applied Python & Web Mechanics", topics: ["Python Syntactical Abstractions", "Basic Terminal Algorithms", "HTML5 & Structural Style Layers", "Digital Citizenship & Threat Safety"] }
    ]
  },
  high: {
    title: "Senior High Graduation (Grades 9 - 12)",
    tagline: "University Readiness, Advanced Placement, & Capstone Fields",
    description: "Advanced academic tracks crafted for global board requirements, college portfolio building, and vocational career pathways.",
    subjects: [
      { id: "h1", name: "Advanced Mathematics & Calculus", topics: ["Trigonometry Identities & Waves", "Differential & Integral Calculus", "Quadratic & Complex Polynomials", "Statistical Vectors & Proof Systems"] },
      { id: "h2", name: "Core Chemical & Physical Domains", topics: ["Organic Carbon Mechanics", "Electromagnetism & Quantum Intro", "CRISPR Gene Sequences & Evolution", "Advanced Laboratory Diagnostic Methods"] },
      { id: "h3", name: "Economics & Corporate Globalism", topics: ["Macroeconomic Market Frameworks", "Micro Analysis & Asset Valuation", "Double-Entry Ledger Architecture", "Global Business Strategies"] },
      { id: "h4", name: "AI Frameworks & Future Engineering", topics: ["Supervised Machine Learning Modules", "Neural Network Architecture Intro", "Human-Centered UI/UX Engineering", "End-to-End Capstone Group Projects"] }
    ]
  }
};

export default function NewsPage() {
  const [currentPage, setCurrentPage] = useState("news"); // Views: "news" | "academics" | "article-detail"
  
  // News-specific states
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [subscriptionState, setSubscriptionState] = useState("idle");
  const [bookmarkedIds, setBookmarkedIds] = useState([]);
  const [activeModalArticle, setActiveModalArticle] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Curriculum-specific states
  const [selectedCohort, setSelectedCohort] = useState("high");
  const [selectedSubjectIndex, setSelectedSubjectIndex] = useState(0);

  // Filter logic for news room
  const filteredNews = initialNews.filter((article) => {
    const matchesCategory = activeCategory === "All" || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.summary?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleToggleBookmark = (id, event) => {
    event?.stopPropagation();
    const isBookmarked = bookmarkedIds.includes(id);
    setBookmarkedIds((prev) => 
      isBookmarked ? prev.filter(bId => bId !== id) : [...prev, id]
    );
    showToast(isBookmarked ? "Article removed from reading list" : "Article saved to your institutional dashboard!");
  };

  const handleCopyLink = (title, event) => {
    event?.stopPropagation();
    navigator.clipboard.writeText(window.location.href + `#${title.replace(/\s+/g, '-').toLowerCase()}`);
    showToast("Shareable institutional link copied to clipboard!");
  };

  const handleViewFullArticle = (article) => {
    setActiveModalArticle(article);
    setCurrentPage("article-detail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!emailInput.trim() || !emailInput.includes("@")) {
      showToast("Error: Please provide a valid email address.");
      return;
    }

    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        const ctx = new AudioContext();
        const osc1 = ctx.createOscillator();
        const gain1 = ctx.createGain();
        osc1.type = "sine";
        osc1.frequency.setValueAtTime(880, ctx.currentTime);
        
        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        osc2.type = "triangle";
        osc2.frequency.setValueAtTime(1320, ctx.currentTime);

        gain1.gain.setValueAtTime(0.4, ctx.currentTime);
        gain1.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);
        gain2.gain.setValueAtTime(0.15, ctx.currentTime);
        gain2.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.8);

        osc1.connect(gain1);
        gain1.connect(ctx.destination);
        osc2.connect(gain2);
        gain2.connect(ctx.destination);

        osc1.start();
        osc2.start();
        osc1.stop(ctx.currentTime + 1.3);
        osc2.stop(ctx.currentTime + 0.9);
      }
    } catch (err) {
      console.warn("Audio chime context dropped interaction layers", err);
    }

    setSubscriptionState("success");
    setEmailInput("");
    showToast("Notification system successfully updated!");
    setTimeout(() => setSubscriptionState("idle"), 6000);
  };

  const handleDownloadSyllabus = () => {
    const activeCohortData = curriculumMatrix[selectedCohort];
    const activeSubject = activeCohortData.subjects[selectedSubjectIndex];
    
    if (!activeSubject) {
      showToast("Error: Target subject data structures unavailable.");
      return;
    }

    const documentContent = `========================================================================
ACADEMIC MASTER RECORD DOSSIER: CURRICULUM SYLLABUS MATRIX
GENESIS YEAR CYCLE: 2026 / 2027 STANDARDS
========================================================================
COHORT SECTOR: ${activeCohortData.title.toUpperCase()}
CLASSIFICATION FIELD: ${activeSubject.name.toUpperCase()}
TOTAL TIMELINE BLOCKS: ${activeSubject.topics.length} Semesters Structure
------------------------------------------------------------------------
${activeSubject.topics.map((topic, index) => `[SEMESTER BLOCK 0${index + 1}] — ${topic}`).join("\n")}
------------------------------------------------------------------------
AUTHENTICATION ENCRYPTED VALIDATION FOOTER
========================================================================`;

    try {
      const blob = new Blob([documentContent], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const downloadAnchor = document.createElement("a");
      const fileStringSanitized = activeSubject.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      
      downloadAnchor.href = url;
      downloadAnchor.download = `syllabus-${selectedCohort}-${fileStringSanitized}-matrix-2026.txt`;
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      document.body.removeChild(downloadAnchor);
      URL.revokeObjectURL(url);
      
      showToast(`Syllabus dossier file generated and downloaded successfully!`);
    } catch (err) {
      showToast("Download failed. Local storage stream initialization error.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased font-sans relative overflow-x-hidden pb-20">
      <Navbar />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-80 pointer-events-none" />
      
      {/* Dynamic Toast Context Layer */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -20, x: "-50%" }}
            className="fixed top-6 left-1/2 z-50 bg-slate-900 text-white px-6 py-4 rounded-xl shadow-xl text-base font-mono flex items-center gap-3 border border-slate-700 w-11/12 sm:w-auto min-w-[320px]"
          >
            <Check size={18} className="text-emerald-400 shrink-0" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Auxiliary Viewport Jump-link button */}
      <div className="fixed bottom-6 right-6 z-40 shadow-2xl rounded-2xl overflow-hidden border border-slate-300">
        <button 
          onClick={() => setCurrentPage(currentPage === "academics" ? "news" : "academics")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-mono text-xs font-bold uppercase tracking-wider px-5 py-4 flex items-center gap-2 transition-all"
        >
          {currentPage === "academics" ? "← Escape View" : "Jump to Academy Focus →"}
        </button>
      </div>

      {/* ================= MAIN CONDITIONAL DISPLAY SWITCH CONTROLLER ================= */}
      {currentPage === "academics" ? (
        /* SYLLABUS DISCOVERY WORKSPACE LAYER */
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 pb-5 gap-4">
            <button 
              onClick={() => setCurrentPage("news")}
              className="inline-flex items-center gap-2 text-sm font-mono font-bold text-indigo-600 hover:text-indigo-800 transition-colors uppercase tracking-wider group"
            >
              <span className="inline-block transition-transform group-hover:-translate-x-1">←</span> Back to Campus News Feed
            </button>
            <span className="text-sm font-mono text-slate-400 font-bold">Standard Metric System: K-12</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 flex items-center gap-3">
              <BookOpen size={44} className="text-indigo-600 shrink-0" />
              Dynamic Syllabus Explorer
            </h1>
            <p className="text-slate-600 text-lg max-w-2xl">
              Inspect current subject mapping models across our core developmental wings. Click a tier to cycle structures.
            </p>
          </div>

          {/* Top Category Selection Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
            {Object.keys(curriculumMatrix).map((cohortKey) => {
              const isSelected = selectedCohort === cohortKey;
              return (
                <button
                  key={cohortKey}
                  onClick={() => {
                    setSelectedCohort(cohortKey);
                    setSelectedSubjectIndex(0);
                  }}
                  className={`text-left p-6 rounded-2xl border-2 transition-all duration-200 shadow-sm flex flex-col justify-between ${
                    isSelected 
                      ? "bg-white border-indigo-600 ring-4 ring-indigo-50" 
                      : "bg-white border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="space-y-2">
                    <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded uppercase tracking-wider ${
                      isSelected ? "bg-indigo-100 text-indigo-800" : "bg-slate-100 text-slate-600"
                    }`}>
                      Category Layer
                    </span>
                    <h3 className="text-xl font-black text-slate-900 pt-1 capitalize">{cohortKey} School</h3>
                    <p className="text-slate-500 text-sm font-mono">{curriculumMatrix[cohortKey].title.split(' ')[2] || "Grades K-12"}</p>
                  </div>
                  <span className={`text-sm font-mono font-bold mt-6 flex items-center gap-1.5 ${
                    isSelected ? "text-indigo-600" : "text-slate-400"
                  }`}>
                    {isSelected ? "Active Layout ●" : "Inspect Branch →"}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detailed Syllabus Workspace Panel */}
          <motion.div 
            key={selectedCohort}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12"
          >
            {/* Left Panel: Navigation Subject Switches */}
            <div className="lg:col-span-5 bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-200 p-6 sm:p-8 space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {curriculumMatrix[selectedCohort].title}
                </h2>
                <p className="text-slate-500 text-sm font-mono mt-1.5 italic">
                  {curriculumMatrix[selectedCohort].tagline}
                </p>
                <p className="text-slate-600 text-base leading-relaxed mt-4">
                  {curriculumMatrix[selectedCohort].description}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">Available Fields</h4>
                <div className="space-y-2">
                  {curriculumMatrix[selectedCohort].subjects.map((sub, idx) => {
                    const isSubjectSelected = selectedSubjectIndex === idx;
                    return (
                      <button
                        key={sub.id}
                        onClick={() => setSelectedSubjectIndex(idx)}
                        className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                          isSubjectSelected
                            ? "bg-white border-indigo-500 shadow-sm text-indigo-900 font-bold"
                            : "bg-slate-100/50 border-transparent text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <BookMarked size={18} className={isSubjectSelected ? "text-indigo-600" : "text-slate-400"} />
                          <span className="text-base tracking-tight">{sub.name}</span>
                        </div>
                        <ChevronRight size={16} className={isSubjectSelected ? "text-indigo-600" : "text-slate-300"} />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Panel: Active Topics Render Blocks */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-8">
              <div className="space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-widest block">Active Target Mapping</span>
                    <h3 className="text-2xl font-black text-slate-900 mt-0.5">
                      {curriculumMatrix[selectedCohort].subjects[selectedSubjectIndex]?.name}
                    </h3>
                  </div>
                  <span className="bg-slate-900 text-white text-sm font-mono font-bold px-3 py-1.5 rounded-lg">
                    {curriculumMatrix[selectedCohort].subjects[selectedSubjectIndex]?.topics.length} Semester Blocks
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {curriculumMatrix[selectedCohort].subjects[selectedSubjectIndex]?.topics.map((topic, orderIdx) => (
                    <div 
                      key={orderIdx}
                      className="bg-slate-50 border border-slate-200 p-5 rounded-xl flex items-start gap-3 hover:bg-slate-100/50 transition-colors"
                    >
                      <div className="bg-indigo-600 text-white font-mono font-bold text-xs h-6 w-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        {orderIdx + 1}
                      </div>
                      <p className="text-base font-semibold text-slate-800 leading-snug">{topic}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm text-slate-400 font-mono">
                <span>* Synchronized to 2026 Board Standards</span>
                <button 
                  onClick={handleDownloadSyllabus}
                  className="inline-flex items-center gap-1.5 text-indigo-600 hover:text-indigo-800 font-bold uppercase transition-colors text-sm"
                >
                  <Download size={16} />
                  Download Syllabus Matrix
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      ) : currentPage === "article-detail" && activeModalArticle ? (
        /* ================= FULL COVERAGE DETAILED PUBLICATION DISPLAY VIEW ================= */
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8"
        >
          {/* Detailed View Navigation Return Actions */}
          <div className="flex items-center justify-between border-b border-slate-200 pb-5">
            <button 
              onClick={() => {
                setCurrentPage("news");
                setActiveModalArticle(null);
              }}
              className="inline-flex items-center gap-2 text-sm font-mono font-bold text-slate-600 hover:text-indigo-600 transition-colors uppercase tracking-wider group"
            >
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
              Back to News Feed
            </button>
            <span className="text-xs font-mono text-slate-400 font-bold uppercase">
              Dossier ID: {activeModalArticle.id}
            </span>
          </div>

          {/* Heading Description Meta Data Section */}
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-mono font-bold uppercase">
                {activeModalArticle.category}
              </span>
              <span className="px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-bold uppercase">
                {activeModalArticle.cohort}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
              {activeModalArticle.title}
            </h1>
            <p className="text-slate-400 text-sm font-mono font-medium">
              Published on: {activeModalArticle.date} • Institutional Press Hub
            </p>
          </div>

          {/* Media Presentation Display Canvas */}
          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md max-h-[480px]">
            <img 
              src={activeModalArticle.image} 
              alt={activeModalArticle.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Core Editorial Description & Story Streams */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 space-y-6 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 leading-relaxed font-mono italic border-l-4 border-indigo-600 pl-4">
              {activeModalArticle.summary || activeModalArticle.description}
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed pt-2 whitespace-pre-line">
              {activeModalArticle.fullContent}
            </p>
          </div>

          {/* Bottom Action Control Bar Array */}
          <div className="flex flex-wrap gap-3 pt-4">
            <button 
              onClick={(e) => handleToggleBookmark(activeModalArticle.id, e)}
              className={`px-5 py-3.5 rounded-xl text-sm font-mono font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${
                bookmarkedIds.includes(activeModalArticle.id)
                  ? "bg-amber-500 text-white shadow-md"
                  : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
              }`}
            >
              <Bookmark size={16} />
              {bookmarkedIds.includes(activeModalArticle.id) ? "Saved in Registry" : "Save to Reading List"}
            </button>
            <button 
              onClick={(e) => handleCopyLink(activeModalArticle.title, e)}
              className="px-5 py-3.5 rounded-xl bg-slate-900 text-white text-sm font-mono font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-slate-800 transition-all"
            >
              <Share2 size={16} />
              Broadcast Dossier Link
            </button>
          </div>
        </motion.div>
      ) : (
        /* ================= BASELINE CAMPUS BULLETIN & NEWSROOM COMPONENT VIEW ================= */
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 sm:space-y-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 pb-5 gap-2">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-mono font-bold tracking-wider text-slate-500 uppercase">
                International Campus Registry // Press & Updates
              </span>
            </div>
            <span className="text-sm font-mono text-slate-400 font-bold">Academic Term: 2026 / 2027</span>
          </div>

          {/* Main Hero Highlight Story Block Banner */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-200 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="p-6 sm:p-10 lg:p-14 lg:col-span-7 flex flex-col justify-center space-y-6">
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-mono font-bold uppercase tracking-tight">
                    <Newspaper size={14} />
                    Featured Story
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-100 text-amber-800 text-sm font-mono font-bold uppercase tracking-tight">
                    <School size={14} />
                    {featuredNews.cohort.toUpperCase()}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                  {featuredNews.title}
                </h1>

                <p className="text-slate-600 text-lg sm:text-xl font-normal leading-relaxed">
                  {featuredNews.description}
                </p>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button 
                    onClick={() => handleViewFullArticle(featuredNews)}
                    className="px-6 py-4 rounded-xl bg-indigo-600 text-white font-mono font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-indigo-700 active:scale-95 transition-all shadow-md"
                  >
                    Read Full Coverage
                    <ArrowRight size={16} />
                  </button>
                  <button 
                    onClick={(e) => handleCopyLink(featuredNews.title, e)}
                    className="px-5 py-4 rounded-xl bg-slate-100 text-slate-700 font-mono font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-slate-200 active:scale-95 transition-all"
                  >
                    <Share2 size={16} />
                    Broadcast Link
                  </button>
                </div>
              </div>

              <div className="relative min-h-[350px] lg:col-span-5 border-t lg:border-t-0 lg:border-l border-slate-200">
                <img
                  src={featuredNews.image}
                  alt="Robotics showcase information"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.section>

          {/* Filtering Central Control Console */}
          <section className="space-y-6 pt-4">
            <div className="flex flex-col lg:flex-row gap-5 items-stretch lg:items-center justify-between border-b border-slate-200 pb-6">
              <div className="space-y-1">
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 flex items-center gap-2.5">
                  <Filter size={26} className="text-indigo-600" />
                  Campus News Feed
                </h2>
                <p className="text-base text-slate-500">Filter central reports by active academic classification tiers.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center w-full lg:w-auto">
                <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none font-mono text-sm">
                  {["All", "Academics", "STEM & Robotics", "Sports", "Campus Life"].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-4 py-2.5 rounded-xl font-bold border tracking-tight transition-all whitespace-nowrap ${
                        activeCategory === cat
                          ? "bg-slate-900 border-slate-900 text-white shadow-md"
                          : "bg-white border-slate-200 text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="relative min-w-0 sm:w-68 w-full">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    type="text"
                    placeholder="Search campus files..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-base font-mono focus:outline-none focus:border-slate-400 transition-all text-slate-800 shadow-sm"
                  />
                </div>
              </div>
            </div>

            {/* Grid Catalog Collection List */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredNews.map((article) => (
                  <motion.div
                    layout
                    key={article.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:border-slate-400 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative h-48 overflow-hidden bg-slate-100 border-b border-slate-100">
                        <img 
                          src={article.image} 
                          alt={article.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <button
                          onClick={(e) => handleToggleBookmark(article.id, e)}
                          className="absolute top-3 right-3 p-2 rounded-lg bg-white/90 backdrop-blur-sm border border-slate-200 text-slate-600 hover:text-amber-500 transition-all shadow-sm"
                        >
                          <Bookmark size={15} fill={bookmarkedIds.includes(article.id) ? "currentColor" : "none"} />
                        </button>
                      </div>
                      
                      <div className="p-5 space-y-2">
                        <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wider block">
                          {article.category}
                        </span>
                        <h3 className="text-lg font-extrabold text-slate-900 tracking-tight leading-snug line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 font-normal pt-1">
                          {article.summary}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 pt-0 border-t border-slate-50 mt-4 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-slate-400 font-bold uppercase">{article.date}</span>
                      <button
                        onClick={() => handleViewFullArticle(article)}
                        className="text-xs font-mono font-black uppercase tracking-wider text-indigo-600 hover:text-indigo-800 transition-colors inline-flex items-center gap-1 group/btn"
                      >
                        View Publication
                        <ChevronRight size={14} className="transition-transform group-hover/btn:translate-x-0.5" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Fallback Viewport for Empty Searching Logs */}
            {filteredNews.length === 0 && (
              <div className="text-center py-20 bg-white border border-slate-200 rounded-3xl shadow-sm">
                <p className="text-slate-400 font-mono text-base font-bold">No active logs matching selection configuration rules found.</p>
              </div>
            )}
          </section>

          {/* Parental Email Registration Footer Card Insertion */}
          <section className="pt-4">
            <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-10 lg:p-14 relative overflow-hidden shadow-xl border border-slate-950">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] [background-size:4rem_4rem] opacity-30 pointer-events-none" />
              
              <div className="max-w-3xl relative z-10 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg">
                  <Sparkles size={14} />
                  <span>Guardian Bulletins</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                  Never Miss An Academic Update
                </h2>

                <p className="text-slate-300 text-lg font-normal leading-relaxed">
                  Subscribe to verify core curriculum releases, regional honors, international innovation triumphs, and seasonal distribution logs directly inside your inbox.
                </p>

                <AnimatePresence mode="wait">
                  {subscriptionState === "idle" ? (
                    <motion.form 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubscribe} 
                      className="flex flex-col sm:flex-row gap-3 pt-2"
                    >
                      <input
                        type="email"
                        required
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        placeholder="Provide parental or institutional email address"
                        className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 text-base font-mono text-white placeholder-slate-500 outline-none focus:border-slate-500 transition-all"
                      />

                      <button 
                        type="submit" 
                        className="px-6 py-4 rounded-xl bg-white text-slate-950 font-mono font-bold text-sm uppercase tracking-wider hover:bg-indigo-50 active:scale-95 transition-all shadow-md flex items-center justify-center"
                      >
                        Subscribe
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-5 rounded-xl bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 font-mono text-base flex items-center gap-3"
                    >
                      <Check size={20} />
                      <span>Registration Confirmed. Secure institutional channel is now active.</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
