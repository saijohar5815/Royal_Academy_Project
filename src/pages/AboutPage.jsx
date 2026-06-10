import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Eye, Target, Compass, ArrowUpRight, Radio, Terminal, Fingerprint, 
  Layers, Activity, ShieldCheck, Cpu, Network, Globe2, ChevronRight, Binary, ScanFace
} from "lucide-react";
import Navbar from "../components/Navbar/Navbar";

const stats = [
  { value: "2012", label: "GENESIS_EPOCH", metric: "SYS_INIT", color: "from-blue-600 via-indigo-600 to-violet-600", detail: "Root matrix initialized." },
  { value: "45+", label: "MAPPED_NODES", metric: "NET_ZONE", color: "from-rose-600 via-pink-600 to-orange-600", detail: "Active operational array." },
  { value: "99.4%", label: "CALIBRATION_EFF", metric: "SUCC_RATE", color: "from-emerald-600 via-teal-600 to-cyan-600", detail: "Validated optimization paths." },
  { value: "24/7", label: "TELEMETRY_HUBS", metric: "LIVE_CORE", color: "from-amber-500 via-orange-600 to-red-600", detail: "Continuous pipeline stream." },
];

const pillars = {
  vision: {
    icon: Eye,
    title: "VISION_PARAMETER",
    subtitle: "Predictive Vector Matrix",
    tag: "SYS_VIS_v4.0",
    color: "from-blue-600 via-indigo-600 to-violet-700",
    shadow: "shadow-[0_20px_50px_rgba(37,99,235,0.06)]",
    bgActive: "bg-gradient-to-br from-blue-50 via-indigo-50/30 to-transparent",
    borderActive: "border-blue-500/40",
    textGlow: "text-blue-600",
    desc: "Architecting global leaders through advanced hybrid experiential methodologies, positioning next-gen thinkers at the forefront of digital and socio-economic frontiers.",
    bullets: ["Decentralized curriculum matrices", "Predictive performance tracking", "AI-augmented logic systems"]
  },
  mission: {
    icon: Target,
    title: "CORE_MISSION",
    subtitle: "Execution & Deployment Tiers",
    tag: "SYS_MIS_v2.1",
    color: "from-rose-600 via-pink-600 to-red-700",
    shadow: "shadow-[0_20px_50px_rgba(225,29,72,0.06)]",
    bgActive: "bg-gradient-to-br from-rose-50 via-pink-50/30 to-transparent",
    borderActive: "border-rose-500/40",
    textGlow: "text-rose-600",
    desc: "To deliver rigorous, universally validated educational pathways combining deep scientific research, athletic precision, and empathetic diplomatic mastery.",
    bullets: ["Uncompromised quantitative baselines", "Global multi-tier competition pipelines", "Direct tier-1 university placements"]
  },
  culture: {
    icon: Compass,
    title: "STRATEGIC_CULTURE",
    subtitle: "Ecosystem Integration Nodes",
    tag: "SYS_CUL_v9.3",
    color: "from-emerald-600 via-teal-600 to-cyan-700",
    shadow: "shadow-[0_20px_50px_rgba(5,150,105,0.06)]",
    bgActive: "bg-gradient-to-br from-emerald-50 via-teal-50/30 to-transparent",
    borderActive: "border-emerald-500/40",
    textGlow: "text-emerald-600",
    desc: "Fostering an open ecosystem defined by decentralized continuous learning, institutional integrity, global responsibility, and aggressive baseline excellence.",
    bullets: ["Cross-cultural identity synthesis", "Open-source collaborative environments", "Ethical framework execution models"]
  }
};

const milestones = [
  { year: "2026", title: "Quantum Computing & Global Diplomacy Lab Rollout", tag: "PHASE_04", desc: "Established secondary research frameworks natively integrating computational algorithms with Model UN structural simulations." },
  { year: "2022", title: "Pan-Asian Infrastructure Expansion", tag: "PHASE_03", desc: "Inaugurated state-of-the-art computational laboratories and physical aquatics facilities across three new international hubs." },
  { year: "2018", title: "Full International Baccalaureate Accreditation", tag: "PHASE_02", desc: "Achieved uncompromised global standard tracking tiers, unlocking direct placement partnerships with elite global universities." },
  { year: "2012", title: "The Initial Telemetry", tag: "PHASE_01", desc: "Founded with an experimental baseline class of 60 students, dedicated to redefining traditional education metrics." },
];

const leaders = [
  { name: "Dr. Alistair Vance", role: "CHANCELLOR // CHIEF ARCHITECT", image: "https://s.yimg.com/zb/imgv1/4ebe6b9e-2eff-3461-aa49-94d874748f7d/t_500x300", bio: "Former Department Head of Epistemology with 20+ years steering international educational policy matrices.", signature: "AUTH_VANCE.001", borderGlow: "hover:border-blue-500/40 hover:shadow-blue-500/5" },
  { name: "Elena Rostova", role: "DIRECTOR // DIGITAL ECOSYSTEMS", image: "https://news.harvard.edu/wp-content/uploads/2025/06/062525_JohnGoldberg-_088.jpg?resize=784", bio: "Systems engineer specializing in decentralized educational frameworks and immersive predictive student interfaces.", signature: "AUTH_ROSTOVA.409", borderGlow: "hover:border-rose-500/40 hover:shadow-rose-500/5" },
  { name: "Marcus Sterling", role: "DEAN // STUDENT DIPLOMACY", image: "https://harvardtechnologyreview.com/wp-content/uploads/2023/10/IMG_0247-edited.jpg", bio: "Ex-diplomat dedicating institutional pipelines to developing cross-cultural alignment and athletic leadership metrics.", signature: "AUTH_STERLING.882", borderGlow: "hover:border-emerald-500/40 hover:shadow-emerald-500/5" },
];

export default function CleanPremiumInteractiveDashboard() {
  const [activeTab, setActiveTab] = useState("vision");
  const [hoveredStat, setHoveredStat] = useState(null);

  const ActiveIcon = pillars[activeTab].icon;

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-mono antialiased selection:bg-blue-500/10 selection:text-blue-900 relative overflow-hidden">
      <Navbar />
      
      {/* --- SCIFI PREMIUM LIGHT GEOMETRY & BACKGROUND MESH --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-blue-200/50 via-transparent to-transparent hidden md:block" />
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-purple-200/40 via-transparent to-transparent hidden md:block" />
        <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-200/20 blur-[130px] -top-80 -right-40 animate-pulse duration-[10s]" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-200/20 blur-[120px] bottom-1/4 -left-40 animate-pulse duration-[12s]" />
      </div>

      <div className="max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        
        {/* ======================================================== */}
        {/* TOP HUD ROW */}
        {/* ======================================================== */}
        <div className="pt-4 pb-4 border-b border-slate-200/80">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-[10px] tracking-widest text-slate-500">
            <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start">
              <span className="text-blue-600 flex items-center gap-2 font-bold bg-blue-50 px-3 py-1 rounded border border-blue-200 shadow-sm">
                <Radio size={12} className="animate-pulse" /> CORE_STREAM_LIVE
              </span>
              <span className="font-semibold text-slate-600">[ LOG_SYS: ENABLED ]</span>
              <span className="text-slate-300">|</span>
              <span className="flex items-center gap-1 font-medium"><Network size={12} className="text-indigo-500"/> matrix://academy_mainframe.root</span>
            </div>
            
            <div className="hidden xl:flex items-center gap-2 text-slate-400 font-medium">
              <Cpu size={12} className="text-blue-500 animate-spin" style={{ animationDuration: '6s' }} /> DECENTRALIZED DATA TRANSIT MATRIX // SECURE_TLS_v1.3
            </div>

            <div className="flex items-center justify-between lg:justify-end gap-6 w-full lg:w-auto border-t lg:border-t-0 pt-2 lg:pt-0 border-slate-200">
              <span className="flex items-center gap-1.5 font-medium"><Globe2 size={12} className="text-purple-500" /> SEC_LOC_INDEX // 44_AUTH_A</span>
              <span className="font-bold text-blue-600 bg-blue-50 border border-blue-200 px-3 py-0.5 rounded shadow-sm">
                YEAR: 2026
              </span>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* HERO SYSTEM TERMINAL SECTION */}
        {/* ======================================================== */}
        <section className="pt-12 pb-20 lg:pt-24 lg:pb-28 border-b border-slate-200/80 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column Text Terminal Header */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-800 rounded text-[10px] tracking-widest text-slate-200 uppercase font-bold shadow-md">
                <Terminal size={12} className="text-blue-400" /> SYSTEM_DIRECTIVE // OPERATIONS_MAIN_M4
              </div>
              
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-slate-900 uppercase leading-[0.9] font-sans">
                Pioneering <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 filter drop-shadow-[0_2px_15px_rgba(37,99,235,0.1)]">
                  Human Caliber
                </span>
              </h1>
              
              <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-medium leading-relaxed max-w-2xl font-mono pt-2">
                Royal Academy operates as a highly sophisticated global learning grid. We have dismantled legacy industrial models to deploy fluid scientific tracks, hybrid intelligence, and advanced cultural leadership vectors.
              </p>
            </div>

            {/* Right Column: Holographic Operational Manifest Card */}
            <div className="lg:col-span-5 w-full">
              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-xl group hover:border-blue-500/30 transition-all duration-300"
              >
                {/* Visual corners decoration */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-slate-300 group-hover:border-blue-500 transition-colors" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-slate-300 group-hover:border-blue-500 transition-colors" />
                <div className="absolute top-4 right-4 text-[9px] text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                  // CODE_SYS: ACTIVE
                </div>

                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:rotate-12 transition-transform duration-300">
                    <Fingerprint size={24} />
                  </div>
                  <div>
                    <h3 className="text-[11px] tracking-widest text-slate-400 uppercase font-bold flex items-center gap-1.5">
                      <Layers size={12} className="text-blue-600" /> MAIN_OPERATIONAL_AXIOM
                    </h3>
                    <p className="text-base sm:text-lg text-slate-800 mt-3 font-semibold font-sans italic leading-relaxed tracking-tight border-l-2 border-blue-500/50 pl-4">
                      "We do not process information for testing; we calibrate minds to command emerging global vectors."
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] font-medium">
                    <span className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 font-bold">
                      <Activity size={12} className="animate-pulse" /> INFRA_STABLE
                    </span>
                    <span className="text-blue-600 font-bold flex items-center gap-1 cursor-pointer group-hover:text-blue-500 transition-colors">
                      ACCESS_SYS_MATRIX <ArrowUpRight size={14} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>

          {/* --- TELEMETRY RAIL SYSTEMS (STATS) --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 mt-16 lg:mt-24">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                onHoverStart={() => setHoveredStat(idx)}
                onHoverEnd={() => setHoveredStat(null)}
                className="bg-white border border-slate-200 rounded-2xl p-6 text-left relative overflow-hidden flex flex-col justify-between min-h-[140px] group transition-all duration-300 hover:border-slate-400 shadow-sm hover:shadow-xl"
              >
                {/* Horizontal scanner light bar on card hover */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                
                <div className="flex justify-between items-start">
                  <p className={`text-3xl sm:text-4xl font-black font-sans tracking-tight text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}>
                    {stat.value}
                  </p>
                  <span className="text-[9px] text-slate-500 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded font-bold">{stat.metric}</span>
                </div>
                <div className="mt-4">
                  <p className="text-[11px] uppercase tracking-wider text-slate-700 font-bold flex items-center gap-2">
                    <Binary size={10} className="text-slate-400" /> {stat.label}
                  </p>
                  
                  <div className="h-5 overflow-hidden mt-1 relative">
                    <AnimatePresence>
                      {hoveredStat === idx ? (
                        <motion.p 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-[10px] text-blue-600 font-bold absolute inset-0"
                        >
                          &gt;&gt; {stat.detail}
                        </motion.p>
                      ) : (
                        <motion.p 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="text-[10px] text-slate-400 absolute inset-0 font-medium"
                        >
                          STATUS: SYSTEM_SECURE
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* INTERACTIVE MODULE HUB (STRATEGIC PILLARS) */}
        {/* ======================================================== */}
        <section className="py-20 lg:py-32 border-b border-slate-200">
          <div className="max-w-6xl mx-auto">
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 sm:mb-20 border-b border-slate-200 pb-6">
              <div className="text-left space-y-2">
                <p className="uppercase tracking-[0.3em] text-blue-600 font-bold text-xs bg-blue-50 px-3 py-1 rounded inline-block border border-blue-100">// ARCHITECTURE</p>
                <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-sans">Core Strategic Modules</h2>
              </div>
              <div className="text-slate-400 text-xs font-medium text-right hidden md:block leading-relaxed">
                SYS_STATUS: ROUTING_ENGINE_OK <br />
                MATRIX_NODES: STABLE
              </div>
            </div>

            {/* HIGH TECH TAB INTERFACE */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Vertical Selection Rail */}
              <div className="lg:col-span-4 flex flex-col gap-3 w-full">
                {Object.keys(pillars).map((tab) => {
                  const PillarIcon = pillars[tab].icon;
                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex items-center justify-between p-4 rounded-xl font-bold tracking-widest text-xs uppercase transition-all duration-300 relative border text-left ${
                        activeTab === tab 
                          ? "bg-white text-slate-900 border-slate-300 shadow-md" 
                          : "bg-slate-100/60 text-slate-500 border-slate-200 hover:text-slate-800 hover:bg-white"
                      }`}
                    >
                      {activeTab === tab && (
                        <motion.div 
                          layoutId="panelHighlight" 
                          className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-blue-600 to-indigo-600 rounded-l" 
                        />
                      )}
                      <div className="flex items-center gap-3">
                        <PillarIcon size={16} className={activeTab === tab ? pillars[tab].textGlow : "text-slate-400"} />
                        <span>{tab}</span>
                      </div>
                      <ChevronRight size={14} className={`transform transition-transform ${activeTab === tab ? "rotate-90 text-blue-600" : "text-slate-300"}`} />
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Interactive Terminal Field Output */}
              <div className="lg:col-span-8 w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.25 }}
                    className={`bg-white border-2 ${activeTab ? pillars[activeTab].borderActive : "border-slate-200"} rounded-2xl p-6 sm:p-10 ${pillars[activeTab].shadow} relative overflow-hidden text-left min-h-[380px] flex flex-col justify-between`}
                  >
                    {/* Diagnostic Matrix Grid Overlays */}
                    <div className={`absolute inset-0 opacity-40 ${pillars[activeTab].bgActive} pointer-events-none`} />
                    <div className="absolute top-4 right-6 text-[9px] text-slate-500 bg-slate-50 px-2 py-1 rounded border border-slate-200 font-bold">
                      {pillars[activeTab].tag}
                    </div>

                    <div className="space-y-6 relative z-10">
                      <div>
                        <span className="text-[10px] text-blue-600 tracking-widest block font-bold uppercase mb-1">
                          // {pillars[activeTab].subtitle}
                        </span>
                        <h3 className={`text-2xl sm:text-3xl font-black tracking-tight font-sans ${pillars[activeTab].textGlow}`}>
                          {pillars[activeTab].title}
                        </h3>
                      </div>
                      
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl font-mono font-medium">
                        {pillars[activeTab].desc}
                      </p>

                      <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {pillars[activeTab].bullets.map((bullet, index) => (
                          <div key={index} className="flex items-center gap-3 text-[11px] font-bold bg-slate-50 p-3 rounded-lg border border-slate-200 hover:bg-slate-100/60 transition-colors">
                            <span className={`w-2 h-2 shrink-0 rounded-full bg-gradient-to-r ${pillars[activeTab].color}`} />
                            <span className="text-slate-700 truncate">{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-slate-100 flex justify-between items-center text-[9px] text-slate-400 font-bold">
                      <span>MODULE_SYS_VER // SYSTEM_v4.2.1</span>
                      <span className="text-emerald-600 font-bold">STABLE_METRIC_OK</span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>

          </div>
        </section>

        {/* ======================================================== */}
        {/* TIMELINE CHRONICLE ARRAY */}
        {/* ======================================================== */}
        <section className="py-20 lg:py-32 border-b border-slate-200 relative">
          <div className="max-w-4xl mx-auto">
            
            <div className="text-center space-y-2 mb-20 sm:mb-28">
              <p className="uppercase tracking-[0.3em] text-indigo-600 font-bold text-xs bg-indigo-50 px-3 py-1 rounded inline-block border border-indigo-100">// ENGINE_LOG</p>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-sans">Chronological Heritage</h2>
            </div>

            {/* Asymmetrical High-Tech Timeline Architecture */}
            <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-44 space-y-12 sm:space-y-16">
              {milestones.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative pl-6 sm:pl-16 group"
                >
                  {/* Outer Flying Data Nodes Left-Side */}
                  <div className="sm:absolute sm:-left-52 sm:top-2 font-mono font-black text-sm sm:text-xl text-slate-400 group-hover:text-blue-600 transition-colors duration-300 w-36 text-left flex items-center justify-between">
                    <span>[{item.year}]</span>
                    <span className="text-slate-200 text-xs hidden sm:inline">-----------</span>
                  </div>

                  {/* Reactive Laser Node Points */}
                  <div className="absolute -left-[5px] top-2.5 w-2 h-2 rounded-full bg-slate-300 border border-slate-400 group-hover:border-blue-500 group-hover:bg-blue-600 shadow-[0_0_10px_transparent] group-hover:shadow-blue-500/50 transition-all duration-300 z-10" />

                  {/* Asymmetric Technical Card Grid */}
                  <div className="bg-white border border-slate-200 hover:border-slate-300 rounded-xl p-5 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 text-left relative overflow-hidden group-hover:translate-x-1">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-slate-50 via-transparent to-transparent opacity-80 pointer-events-none" />
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-3">
                      <h3 className="font-bold text-base sm:text-lg text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors font-sans">
                        {item.title}
                      </h3>
                      <span className="text-[9px] text-slate-500 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded font-bold shrink-0">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-mono font-medium">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* ======================================================== */}
        {/* GOVERNANCE CARDS GRID (COMMAND LEADERSHIP) */}
        {/* ======================================================== */}
        <section className="py-20 lg:py-32">
          <div className="text-center max-w-xl mx-auto mb-20 sm:mb-28 space-y-4">
            <p className="uppercase tracking-[0.3em] text-rose-600 font-bold text-xs bg-rose-50 px-3 py-1 rounded inline-block border border-rose-100">// INTELLECTUAL_CORE</p>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-sans">Command Leadership</h2>
            <p className="text-xs text-slate-500 leading-relaxed max-w-md mx-auto font-mono font-semibold">
              Academic authorities, technology theorists, and institutional pioneers directing our global stream matrix.
            </p>
          </div>

          {/* Asymmetric Tri-Card Command System */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
            {leaders.map((leader, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className={`bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-md relative group transition-all duration-300 flex flex-col ${leader.borderGlow}`}
              >
                {/* Advanced Image Scaffolding */}
                <div className="h-72 w-full overflow-hidden relative bg-slate-100 shrink-0 border-b border-slate-200">
                  {/* Subtle clean grid lines over layout picture */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:100%_6px] z-10 pointer-events-none opacity-80" />
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover grayscale-[30%] brightness-95 group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent opacity-80" />
                  
                  {/* Technical Badge Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <p className="text-[10px] tracking-wider text-slate-800 bg-white/90 backdrop-blur-md border border-slate-200 px-3 py-1.5 rounded font-bold shadow-md inline-block max-w-full truncate">
                      {leader.role}
                    </p>
                  </div>
                </div>

                {/* Info Text Nodes */}
                <div className="p-6 bg-white flex flex-col flex-grow text-left justify-between relative">
                  <div className="space-y-3">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight flex items-center justify-between font-sans">
                      {leader.name}
                      <ScanFace size={16} className="text-slate-300 group-hover:text-blue-500 transition-colors" />
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-mono font-medium">
                      {leader.bio}
                    </p>
                  </div>
                  
                  {/* Lower Verification Block */}
                  <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-[9px] font-bold text-slate-400">
                    <span className="text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded flex items-center gap-1">
                      <ShieldCheck size={11}/> SECURE_AUTH
                    </span>
                    <span className="tracking-tight bg-slate-50 px-2 py-0.5 rounded border border-slate-200 font-bold text-slate-500">
                      {leader.signature}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}