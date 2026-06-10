import React, { useState } from 'react';
import { 
  GraduationCap, 
  Sparkles,
  Zap,
  Globe,
  Compass,
  Calendar, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2,
  User,
  Mail,
  Phone,
  BookOpen,
  ArrowUpRight,
  ShieldCheck,
  Building2,
  Lock,
  ChevronRight
} from 'lucide-react';
import Navbar from "../components/Navbar/Navbar";

export default function Admissions() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    program: '',
    portfolioUrl: '',
  });
  
  const [activeStep, setActiveStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (activeStep < 3) setActiveStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    if (activeStep > 1) setActiveStep(prev => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const isStep1Valid = formData.fullName && formData.email && formData.phone;
  const isStep2Valid = formData.dob && formData.gender;
  const isStep3Valid = formData.program;

  return (
    <div className="w-full min-h-screen bg-[#0d1527] text-slate-100 selection:bg-indigo-500 selection:text-white antialiased font-sans relative">
      
      {/* --- NAV BAR --- */}
      <nav className="w-full border-b border-slate-800/60 bg-[#0d1527]/80 backdrop-blur-xl fixed top-0 left-0 z-50">
        <div className="w-full px-6 sm:px-10 lg:px-16 h-24 flex items-center justify-between">
          <Navbar />
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="font-black text-2xl tracking-tight uppercase bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              NEXUS <span className="text-indigo-400 font-light">INTERNATIONAL</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-12 text-base font-semibold text-slate-300">
            <a href="#pillars" className="hover:text-white transition-colors tracking-wide">Our Pillars</a>
            <a href="#timeline" className="hover:text-white transition-colors tracking-wide">Admissions Timeline</a>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-slate-900/80 border border-slate-800 text-sm font-mono text-slate-300">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse inline-block"></span>
            ENROLLMENT PORTAL 2026/27
          </div>
        </div>
      </nav>

      {/* --- BACKGROUND GRAPHICS --- */}
      <div className="absolute top-0 left-0 w-full h-[800px] opacity-40 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[5%] w-[700px] h-[700px] rounded-full bg-gradient-to-br from-indigo-600/30 via-cyan-500/15 to-transparent blur-[150px]" />
        <div className="absolute top-[10%] right-[5%] w-[650px] h-[650px] rounded-full bg-gradient-to-br from-purple-600/25 via-pink-500/15 to-transparent blur-[140px]" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_80%,transparent_100%)] opacity-25 pointer-events-none" />

      {/* --- HERO SECTION --- */}
      <div className="relative pt-48 pb-20 px-6 sm:px-10 lg:px-16 text-center z-10">
        <div className="max-w-6xl mx-auto space-y-8">
          <div>
            <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-bold bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-300 border border-indigo-500/30 tracking-wider uppercase backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-cyan-400" /> Now Accepting Applications • Grades 1 to 12
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.1]">
            Nurturing Minds.<br />
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Inspiring Global Leaders.
            </span>
          </h1>

          <p className="max-w-4xl mx-auto text-lg sm:text-xl lg:text-2xl text-slate-300 font-normal leading-relaxed">
            Welcome to a premier international learning ecosystem. Combining rigorous academic frameworks with immersive real-world innovation, we prepare students to shape tomorrow's world.
          </p>

          {/* Milestone Metrics Row */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-8">
            {[
              { value: "1:8", label: "Faculty-Student Ratio" },
              { value: "45+", label: "Nationalities Represented", color: "text-cyan-400" },
              { value: "100%", label: "University Placement", color: "text-purple-400" }
            ].map((metric, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-sm shadow-xl">
                <div className={`text-2xl sm:text-4xl font-black text-white ${metric.color || ''}`}>{metric.value}</div>
                <div className="text-xs uppercase text-slate-400 font-extrabold tracking-widest mt-2">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- MAIN CONTENT LAYOUT --- */}
      <div className="w-full px-6 sm:px-10 lg:px-16 pb-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-start">
          
          {/* LEFT COLUMN: PILLARS & TIMELINE */}
          <div className="lg:col-span-7 space-y-16">
            
            {/* Ecosystem Pillars Section */}
            <div id="pillars" className="space-y-8">
              <div>
                <h2 className="text-sm uppercase tracking-widest text-indigo-400 font-black">Educational Pillars</h2>
                <p className="text-3xl lg:text-4xl font-black text-slate-100 mt-2">Engineered for holistic development.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-slate-900/50 border border-slate-800/80 p-8 rounded-2xl hover:border-indigo-500/40 hover:bg-slate-900/80 transition-all duration-300 shadow-xl backdrop-blur-sm group">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-5 border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-all">
                    <BookOpen className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h3 className="font-bold text-xl lg:text-2xl text-slate-200 flex items-center gap-2 group-hover:text-white transition-colors">
                    Royal Academy Continuous Continuum <ArrowUpRight className="w-5 h-5 text-slate-600 group-hover:text-slate-400 transition-colors" />
                  </h3>
                  <p className="text-base lg:text-lg text-slate-300 mt-3 leading-relaxed">
                    A seamless academic path blending standard international benchmarks with personalized support structures across primary, middle, and high school levels.
                  </p>
                </div>

                <div className="bg-slate-900/50 border border-slate-800/80 p-8 rounded-2xl hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all duration-300 shadow-xl backdrop-blur-sm group">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-5 border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-all">
                    <Globe className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="font-bold text-xl lg:text-2xl text-slate-200 group-hover:text-white transition-colors">Global Intercultural Core</h3>
                  <p className="text-base lg:text-lg text-slate-300 mt-3 leading-relaxed">
                    Dual-language pathways, international field exchanges, and standard global citizenship modules that prepare students for international university ecosystems.
                  </p>
                </div>

                <div className="bg-slate-900/50 border border-slate-800/80 p-8 rounded-2xl hover:border-purple-500/40 hover:bg-slate-900/80 transition-all duration-300 shadow-xl backdrop-blur-sm group">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-5 border border-purple-500/20 group-hover:bg-purple-500/20 transition-all">
                    <Zap className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="font-bold text-xl lg:text-2xl text-slate-200 group-hover:text-white transition-colors">STEAM & Maker Innovation</h3>
                  <p className="text-base lg:text-lg text-slate-300 mt-3 leading-relaxed">
                    Hands-on active creation spaces, dynamic robotics labs, and integrated computational courses structured right into our weekly program curriculum.
                  </p>
                </div>

                <div className="bg-slate-900/50 border border-slate-800/80 p-8 rounded-2xl hover:border-emerald-500/40 hover:bg-slate-900/80 transition-all duration-300 shadow-xl backdrop-blur-sm group">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-5 border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-all">
                    <ShieldCheck className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="font-bold text-xl lg:text-2xl text-slate-200 group-hover:text-white transition-colors">Inclusive Merit Grants</h3>
                  <p className="text-base lg:text-lg text-slate-300 mt-3 leading-relaxed">
                    Exceptional prospective student profiles automatically trigger competitive scholarship evaluations, covering up to 100% of academic instructional fees.
                  </p>
                </div>
              </div>
            </div>

            {/* Milestone Timeline */}
            <div id="timeline" className="bg-slate-900/30 backdrop-blur-md p-8 sm:p-12 rounded-2xl border border-slate-800/80 shadow-2xl">
              <div className="flex items-center justify-between mb-10 border-b border-slate-800/60 pb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                    <Calendar className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-white">Admissions Milestones</h2>
                    <p className="text-base text-slate-400 mt-0.5">Key application review windows</p>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-400/5 px-4 py-2 rounded border border-cyan-400/20 tracking-widest uppercase">Term 1 Intake</span>
              </div>
              
              <div className="space-y-10 pl-2">
                {[
                  { phase: "Phase 01", date: "Rolling Basis", title: "Application & Document Submission", desc: "Submit current school reports, standardized baseline records, identity data verification, and program grade track choices." },
                  { phase: "Phase 02", date: "Within 7 Days", title: "Academic Assessment & Parent Interview", desc: "Prospective students participate in age-appropriate evaluations alongside family discussions with our alignment board." },
                  { phase: "Phase 03", date: "Final Review", title: "Seat Placement Offer & Registration", desc: "Successful candidates receive standard official enrollment offers, scholarship assignments, and introductory registration data." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 items-start relative group">
                    <div className="flex flex-col items-center flex-shrink-0 mt-2">
                      <div className="w-5 h-5 rounded-full bg-[#0d1527] border-2 border-slate-700 group-hover:border-indigo-400 flex items-center justify-center transition-colors">
                        <div className="w-2 h-2 rounded-full bg-slate-700 group-hover:bg-indigo-400 transition-colors" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-mono font-bold text-slate-400 uppercase tracking-wider">{item.phase}</span>
                        <span className="text-sm font-mono font-bold text-indigo-400 bg-indigo-400/10 px-3 py-1 rounded border border-indigo-400/20">{item.date}</span>
                      </div>
                      <h4 className="font-bold text-slate-100 text-xl mt-2 group-hover:text-white transition-colors">{item.title}</h4>
                      <p className="text-base lg:text-lg text-slate-300 mt-2 leading-relaxed max-w-3xl">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: APPLICATION FORM */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="bg-slate-900/70 backdrop-blur-2xl rounded-2xl border-2 border-slate-800/80 shadow-2xl overflow-hidden transition-all relative">
              
              <div className="w-full h-2 bg-slate-800/40 relative">
                <div 
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 transition-all duration-300 ease-out"
                  style={{ width: submitted ? '100%' : `${(activeStep / 3) * 100}%` }}
                />
              </div>

              {submitted ? (
                /* SUCCESS STATE */
                <div className="p-8 sm:p-12 text-center space-y-8">
                  <div className="w-24 h-24 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/20 shadow-2xl relative">
                    <CheckCircle2 className="w-12 h-12" />
                    <div className="absolute inset-0 rounded-full border border-emerald-400/30 animate-ping opacity-25" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-3xl font-black text-white tracking-tight">Application Received</h3>
                    <p className="text-sm font-mono text-slate-400 tracking-widest uppercase">REGISTRATION ID: NX-{Math.floor(100000 + Math.random() * 900000)}</p>
                  </div>
                  <p className="text-base lg:text-lg text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you for applying, the family of <span className="font-bold text-white">{formData.fullName}</span>. Your baseline details have been logged. An confirmation overview layout has been dispatched to <span className="text-cyan-400 font-semibold underline">{formData.email}</span>.
                  </p>
                  <button 
                    onClick={() => { setSubmitted(false); setActiveStep(1); setFormData({ fullName:'', email:'', phone:'', dob:'', gender:'', program:'', portfolioUrl:'' }); }}
                    className="w-full py-4 rounded-xl bg-slate-950 border border-slate-800 text-base font-bold text-slate-300 hover:text-white hover:border-slate-700 transition-all shadow-xl"
                  >
                    Start Another Application
                  </button>
                </div>
              ) : (
                /* REGISTRATION FORM */
                <div className="p-8 sm:p-12 space-y-8">
                  
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-6">
                    <div>
                      <h3 className="text-2xl font-black text-white tracking-tight">Enrollment Form</h3>
                      <p className="text-base text-indigo-400 font-semibold mt-1">
                        {activeStep === 1 && "Student & Guardian Contact"}
                        {activeStep === 2 && "Personal Parameters"}
                        {activeStep === 3 && "Grade Track Selection"}
                      </p>
                    </div>
                    <span className="text-sm font-mono font-bold text-indigo-400 bg-indigo-500/10 px-4 py-2 rounded-lg border border-indigo-500/20 shadow-sm">
                      Step {activeStep} / 3
                    </span>
                  </div>

                  <form onSubmit={activeStep === 3 ? handleSubmit : handleNextStep} className="space-y-8">
                    
                    {/* STEP 1 */}
                    {activeStep === 1 && (
                      <div className="space-y-6">
                        <div className="space-y-2.5">
                          <label className="text-sm font-bold uppercase tracking-widest text-slate-200 block">Student Full Legal Name</label>
                          <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input 
                              type="text" 
                              name="fullName" 
                              required 
                              value={formData.fullName} 
                              onChange={handleChange} 
                              placeholder="e.g., Alex Mercer" 
                              className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-slate-700 bg-slate-800/40 text-base focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white font-medium placeholder:text-slate-500 transition-all shadow-inner"
                            />
                          </div>
                        </div>

                        <div className="space-y-2.5">
                          <label className="text-sm font-bold uppercase tracking-widest text-slate-200 block">Primary Guardian Email</label>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input 
                              type="email" 
                              name="email" 
                              required 
                              value={formData.email} 
                              onChange={handleChange} 
                              placeholder="e.g., parent@domain.com" 
                              className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-slate-700 bg-slate-800/40 text-base focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white font-medium placeholder:text-slate-500 transition-all shadow-inner"
                            />
                          </div>
                        </div>

                        <div className="space-y-2.5">
                          <label className="text-sm font-bold uppercase tracking-widest text-slate-200 block">Contact Phone Line</label>
                          <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input 
                              type="tel" 
                              name="phone" 
                              required 
                              value={formData.phone} 
                              onChange={handleChange} 
                              placeholder="e.g., +1 (555) 019-2831" 
                              className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-slate-700 bg-slate-800/40 text-base focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white font-medium placeholder:text-slate-500 transition-all shadow-inner"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* STEP 2 */}
                    {activeStep === 2 && (
                      <div className="space-y-6">
                        <div className="space-y-2.5">
                          <label className="text-sm font-bold uppercase tracking-widest text-slate-200 block">Date of Birth</label>
                          <input 
                            type="date" 
                            name="dob" 
                            required 
                            value={formData.dob} 
                            onChange={handleChange} 
                            className="w-full px-5 py-4 rounded-xl border-2 border-slate-700 bg-slate-800/40 text-base focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white font-semibold transition-all shadow-inner"
                          />
                        </div>

                        <div className="space-y-2.5">
                          <label className="text-sm font-bold uppercase tracking-widest text-slate-200 block">Gender</label>
                          <select 
                            name="gender" 
                            required 
                            value={formData.gender} 
                            onChange={handleChange} 
                            className="w-full px-5 py-4 rounded-xl border-2 border-slate-700 bg-slate-800/40 text-base focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white font-semibold transition-all shadow-inner"
                          >
                            <option value="" disabled className="bg-slate-900 text-slate-500">Select orientation parameters...</option>
                            <option value="male" className="bg-slate-900 text-white">Male</option>
                            <option value="female" className="bg-slate-900 text-white">Female</option>
                            <option value="other" className="bg-slate-900 text-white">Other</option>
                          </select>
                        </div>
                      </div>
                    )}

                    {/* STEP 3 */}
                    {activeStep === 3 && (
                      <div className="space-y-6">
                        <div className="space-y-2.5">
                          <label className="text-sm font-bold uppercase tracking-widest text-slate-200 block">Target Grade Track</label>
                          <div className="relative">
                            <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <select 
                              name="program" 
                              required 
                              value={formData.program} 
                              onChange={handleChange} 
                              className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-slate-700 bg-slate-800/40 text-base focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white font-semibold transition-all appearance-none shadow-inner"
                            >
                              <option value="" disabled className="bg-slate-900 text-slate-500">Select placement level...</option>
                              <option value="primary" className="bg-slate-900 text-white">Primary School (Grades 1–5)</option>
                              <option value="middle" className="bg-slate-900 text-white">Middle School (Grades 6–8)</option>
                              <option value="lower_secondary" className="bg-slate-900 text-white">Lower Secondary (Grades 9–10)</option>
                              <option value="ib_diploma" className="bg-slate-900 text-white">High School IB Diploma (Grades 11–12)</option>
                            </select>
                          </div>
                        </div>

                        <div className="space-y-2.5">
                          <label className="text-sm font-bold uppercase tracking-widest text-slate-200 block">Previous Report Repository URL (Optional)</label>
                          <input 
                            type="url" 
                            name="portfolioUrl" 
                            value={formData.portfolioUrl} 
                            onChange={handleChange} 
                            placeholder="https://drive.google.com/your-records" 
                            className="w-full px-5 py-4 rounded-xl border-2 border-slate-700 bg-slate-800/40 text-base focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white font-medium placeholder:text-slate-500 transition-all shadow-inner"
                          />
                        </div>
                      </div>
                    )}

                    {/* BUTTON CONTROLS */}
                    <div className="flex items-center justify-between gap-4 pt-4">
                      {activeStep > 1 && (
                        <button
                          type="button"
                          onClick={handlePrevStep}
                          className="px-6 py-4 rounded-xl border-2 border-slate-700 bg-slate-800/40 text-base font-bold text-slate-300 hover:text-white hover:border-slate-500 transition-all flex items-center gap-2 shadow-sm"
                        >
                          <ArrowLeft className="w-5 h-5" /> Back
                        </button>
                      )}
                      
                      {activeStep < 3 ? (
                        <button
                          type="submit"
                          disabled={activeStep === 1 ? !isStep1Valid : !isStep2Valid}
                          className="flex-1 py-4 px-6 rounded-xl font-bold text-base text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-30 disabled:hover:bg-indigo-600 transition-all flex items-center justify-center gap-2 ml-auto group shadow-lg shadow-indigo-950/40"
                        >
                          Next Segment <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                      ) : (
                        <button
                          type="submit"
                          disabled={!isStep3Valid}
                          className="flex-1 py-4 px-6 rounded-xl font-bold text-base text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 disabled:opacity-30 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-indigo-950/50"
                        >
                          Submit Registration <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                      )}
                    </div>

                    <div className="flex items-center justify-center gap-3 pt-4 border-t border-slate-800/60">
                      <Building2 className="w-5 h-5 text-slate-400" />
                      <Lock className="w-4 h-4 text-slate-400" />
                      <span className="text-xs text-slate-400 font-mono tracking-wider uppercase">Encrypted Enrollment Channel</span>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}