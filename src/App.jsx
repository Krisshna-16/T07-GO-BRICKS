import React, { useState } from 'react';
import { 
  Mail, 
  Inbox, 
  ChevronRight, 
  ArrowRight, 
  ArrowDown, 
  CheckCircle2, 
  Clock, 
  TrendingUp, 
  Percent, 
  Users, 
  Shield, 
  Award, 
  Activity, 
  Check, 
  ExternalLink, 
  Droplet, 
  UserCheck, 
  Zap, 
  RefreshCw, 
  Truck, 
  Flame, 
  HelpCircle,
  BarChart3,
  Calendar,
  AlertTriangle,
  FileSpreadsheet,
  Terminal,
  Printer
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend 
} from 'recharts';

// Mock data for Recharts
const openRateData = [
  { name: 'Email 1 (Day 0)', 'Shungite Shield': 58.2, 'Industry Avg': 21.5 },
  { name: 'Email 2 (Day 2)', 'Shungite Shield': 41.4, 'Industry Avg': 21.5 },
  { name: 'Email 3 (Day 5)', 'Shungite Shield': 27.3, 'Industry Avg': 21.5 }
];

const clickRateData = [
  { name: 'Email 1 (Day 0)', 'Shungite Shield': 12.4, 'Industry Avg': 2.6 },
  { name: 'Email 2 (Day 2)', 'Shungite Shield': 8.9, 'Industry Avg': 2.6 },
  { name: 'Email 3 (Day 5)', 'Shungite Shield': 4.8, 'Industry Avg': 2.6 }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedEmail, setSelectedEmail] = useState(1);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col font-sans selection:bg-[#00FF41] selection:text-black">
      {/* Top Header */}
      <header className="border-b border-[#2E2E2E] bg-[#0A0A0A] py-6 px-4 sm:px-8 sticky top-0 z-50 print:relative print:border-b-2 print:border-black print:bg-white print:text-black print:py-4 print:px-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1 print:hidden">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#00FF41] animate-pulse-slow"></span>
              <span className="text-xs uppercase tracking-widest text-gray-400 font-mono">GO-BRICS Business Lab</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white print:text-black print:text-2xl print:font-bold">
              Email Automation Sequence Documentation
            </h1>
            <p className="text-xs sm:text-sm text-[#00FF41] font-mono mt-1 print:text-[#008F20] print:font-semibold">
              TASK_T07 | Welcome Series | Shungite Shield | June 2026
            </p>
          </div>
          
          <button
            onClick={handlePrint}
            id="print-btn"
            className="no-print flex items-center justify-center gap-2 bg-[#1A1A1A] hover:bg-[#2E2E2E] border border-[#2E2E2E] hover:border-[#00FF41] text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 shadow-sm cursor-pointer active:scale-95 group self-start md:self-auto"
          >
            <Printer className="w-4 h-4 text-[#00FF41] group-hover:scale-110 transition-transform" />
            <span>Download Report PDF</span>
          </button>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="no-print bg-[#0F0F0F] border-b border-[#2E2E2E] px-4 sm:px-8 py-3 sticky top-[89px] z-40">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-2">
          {[
            { id: 'overview', label: 'Overview', icon: Shield },
            { id: 'previews', label: 'Email Previews', icon: Mail },
            { id: 'flow', label: 'Trigger & Flow', icon: Activity },
            { id: 'stats', label: 'Performance Stats', icon: BarChart3 },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`tab-btn-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                  isActive 
                    ? 'bg-[#1A1A1A] text-[#00FF41] border border-[#00FF41]/30 shadow-[0_0_15px_rgba(0,255,65,0.08)]' 
                    : 'text-gray-400 hover:text-white hover:bg-[#151515] border border-transparent'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#00FF41]' : 'text-gray-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-8 print:py-0 print:px-0">
        
        {/* ======================================================== */}
        {/* TAB 1: OVERVIEW */}
        {/* ======================================================== */}
        <section 
          id="section-overview"
          className={`tab-pane print-force-block ${activeTab === 'overview' ? 'block animate-fade-in' : 'hidden'}`}
        >
          <h2 className="hidden print:block print-section-title">Section 1: Sequence Overview</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Sequence Summary Card */}
            <div className="lg:col-span-2 bg-[#1A1A1A] border border-[#2E2E2E] rounded-xl p-6 glow-green-box print-card-style">
              <div className="flex items-center justify-between border-b border-[#2E2E2E] pb-4 mb-4 print:border-b print:border-slate-300">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#00FF41]/10 rounded-lg text-[#00FF41] print:bg-slate-100 print:text-black">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white print:text-black">Sequence Summary</h3>
                    <p className="text-xs text-gray-400 print:text-slate-600">Core parameters of the welcome series</p>
                  </div>
                </div>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#00FF41]/15 text-[#00FF41] border border-[#00FF41]/30 print:bg-green-50 print:text-green-800 print:border-green-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00FF41] animate-pulse print:bg-green-600"></span>
                  Live and Active
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 text-sm">
                <div className="flex justify-between py-2 border-b border-[#2E2E2E]/60 print:border-slate-200">
                  <span className="text-gray-400 print:text-slate-600">Sequence Name</span>
                  <span className="font-semibold text-white print:text-black">Shungite Shield Welcome Series</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#2E2E2E]/60 print:border-slate-200">
                  <span className="text-gray-400 print:text-slate-600">Avg Open Rate</span>
                  <span className="font-bold text-[#00FF41] print:text-green-700">42.3%</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#2E2E2E]/60 print:border-slate-200">
                  <span className="text-gray-400 print:text-slate-600">Platform</span>
                  <span className="font-semibold text-white print:text-black">Mailchimp</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#2E2E2E]/60 print:border-slate-200">
                  <span className="text-gray-400 print:text-slate-600">Avg Click Rate</span>
                  <span className="font-bold text-[#00FF41] print:text-green-700">8.7%</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#2E2E2E]/60 print:border-slate-200 md:border-b-0">
                  <span className="text-gray-400 print:text-slate-600">Trigger</span>
                  <span className="font-semibold text-white print:text-black">New subscriber joins list</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#2E2E2E]/60 print:border-slate-200 md:border-b-0">
                  <span className="text-gray-400 print:text-slate-600">Subscribers Enrolled</span>
                  <span className="font-semibold text-white print:text-black">124</span>
                </div>
              </div>
            </div>

            {/* Quick Metrics Details */}
            <div className="bg-[#1A1A1A] border border-[#2E2E2E] rounded-xl p-6 flex flex-col justify-between print-card-style">
              <div>
                <h3 className="font-bold text-lg text-white mb-2 print:text-black">Brand Insight</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4 print:text-slate-600">
                  The Shungite Shield welcome sequence introduces new subscribers to the science of Shungite minerals, addresses EMF safety concerns, and drives conversions within 7 days using automated, trigger-based messaging.
                </p>
              </div>
              <div className="border-t border-[#2E2E2E] pt-4 mt-auto print:border-slate-300">
                <div className="flex items-center gap-2 text-xs font-mono text-gray-400 print:text-slate-600">
                  <Calendar className="w-3.5 h-3.5 text-[#00FF41] print:text-green-700" />
                  <span>Deployment: June 2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Stat Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 print-grid-4">
            {[
              { label: 'Emails in Sequence', value: '3', subtext: 'Day 0, Day 2, Day 5', icon: Mail },
              { label: 'Avg Open Rate', value: '42.3%', subtext: 'Ind. Avg: 21.5%', icon: TrendingUp },
              { label: 'Avg Click Rate', value: '8.7%', subtext: 'Ind. Avg: 2.6%', icon: Percent },
              { label: 'Total Subscribers', value: '124', subtext: 'Active enrollment', icon: Users },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="bg-[#1A1A1A] border border-[#2E2E2E] rounded-xl p-5 glow-green-box print-card-style">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs sm:text-sm text-gray-400 font-medium print:text-slate-600">{stat.label}</span>
                    <Icon className="w-4 h-4 text-[#00FF41] print:text-green-700" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white mt-1 print:text-black">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-gray-500 font-mono mt-1 print:text-slate-500">{stat.subtext}</div>
                </div>
              );
            })}
          </div>

          {/* Sequence Timeline Visual */}
          <div className="bg-[#1A1A1A] border border-[#2E2E2E] rounded-xl p-6 mb-8 print-card-style print-avoid-break">
            <h3 className="font-bold text-lg text-white mb-6 print:text-black">Sequence Timeline Visual</h3>
            
            <div className="relative py-4">
              {/* Timeline Connector Line for Desktop */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-[#2E2E2E] -translate-y-1/2 z-0 print:border-t print:border-slate-300 print:bg-transparent"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 print-grid-3">
                {/* Day 0 */}
                <div className="bg-[#0A0A0A] border border-[#2E2E2E] rounded-xl p-5 relative glow-green-box flex items-center md:flex-col md:text-center gap-4 md:gap-3 print-bg-light">
                  <div className="absolute -top-3 md:left-1/2 md:-translate-x-1/2 bg-[#00FF41]/10 border border-[#00FF41]/40 text-[#00FF41] px-3 py-0.5 rounded-full text-[10px] font-bold font-mono print:bg-green-100 print:text-green-800 print:border-green-400">
                    DAY 0
                  </div>
                  <div className="p-3 bg-[#1A1A1A] rounded-full text-[#00FF41] border border-[#2E2E2E] print:bg-white print:border-slate-300">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white print:text-black text-sm sm:text-base">Email 1 "Welcome"</h4>
                    <p className="text-xs text-gray-400 mt-1 print:text-slate-500">Sent immediately on signup</p>
                  </div>
                </div>

                {/* Day 2 */}
                <div className="bg-[#0A0A0A] border border-[#2E2E2E] rounded-xl p-5 relative glow-green-box flex items-center md:flex-col md:text-center gap-4 md:gap-3 print-bg-light">
                  {/* Arrow for mobile, handled by flex columns */}
                  <div className="absolute -top-3 md:left-1/2 md:-translate-x-1/2 bg-[#00FF41]/10 border border-[#00FF41]/40 text-[#00FF41] px-3 py-0.5 rounded-full text-[10px] font-bold font-mono print:bg-green-100 print:text-green-800 print:border-green-400">
                    DAY 2
                  </div>
                  <div className="p-3 bg-[#1A1A1A] rounded-full text-[#00FF41] border border-[#2E2E2E] print:bg-white print:border-slate-300">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white print:text-black text-sm sm:text-base">Email 2 "Education"</h4>
                    <p className="text-xs text-gray-400 mt-1 print:text-slate-500">2 days after previous mail</p>
                  </div>
                </div>

                {/* Day 5 */}
                <div className="bg-[#0A0A0A] border border-[#2E2E2E] rounded-xl p-5 relative glow-green-box flex items-center md:flex-col md:text-center gap-4 md:gap-3 print-bg-light">
                  <div className="absolute -top-3 md:left-1/2 md:-translate-x-1/2 bg-[#00FF41]/10 border border-[#00FF41]/40 text-[#00FF41] px-3 py-0.5 rounded-full text-[10px] font-bold font-mono print:bg-green-100 print:text-green-800 print:border-green-400">
                    DAY 5
                  </div>
                  <div className="p-3 bg-[#1A1A1A] rounded-full text-[#00FF41] border border-[#2E2E2E] print:bg-white print:border-slate-300">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white print:text-black text-sm sm:text-base">Email 3 "Special Offer"</h4>
                    <p className="text-xs text-gray-400 mt-1 print:text-slate-500">5 days after list signup</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* TAB 2: EMAIL PREVIEWS */}
        {/* ======================================================== */}
        <section 
          id="section-previews"
          className={`tab-pane print-force-block ${activeTab === 'previews' ? 'block animate-fade-in' : 'hidden'}`}
        >
          <h2 className="hidden print:block print-section-title">Section 2: Email Previews</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Interactive Left Panel (Screen Only selector) */}
            <div className="no-print lg:col-span-4 space-y-4">
              <div className="bg-[#1A1A1A] border border-[#2E2E2E] rounded-xl p-4">
                <h3 className="font-bold text-sm text-gray-400 uppercase tracking-widest mb-3 font-mono">Select Email</h3>
                <div className="space-y-3">
                  {[
                    { id: 1, day: 'Day 0', title: '1. Welcome & Introduction', trigger: 'Immediate' },
                    { id: 2, day: 'Day 2', title: '2. Science & Benefits', trigger: '2 Days Wait' },
                    { id: 3, day: 'Day 5', title: '3. Expiration & Pitch', trigger: '3 Days Wait' },
                  ].map((emailOpt) => (
                    <button
                      key={emailOpt.id}
                      id={`email-opt-${emailOpt.id}`}
                      onClick={() => setSelectedEmail(emailOpt.id)}
                      className={`w-full text-left p-3.5 rounded-lg border transition-all cursor-pointer ${
                        selectedEmail === emailOpt.id
                          ? 'bg-[#0A0A0A] border-[#00FF41] shadow-[0_0_10px_rgba(0,255,65,0.05)] text-white'
                          : 'bg-[#1A1A1A]/40 border-[#2E2E2E] hover:border-gray-500 text-gray-300'
                      }`}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                          selectedEmail === emailOpt.id ? 'bg-[#00FF41]/20 text-[#00FF41]' : 'bg-[#2E2E2E] text-gray-400'
                        }`}>{emailOpt.day}</span>
                        <span className="text-[10px] text-gray-500 font-mono">{emailOpt.trigger}</span>
                      </div>
                      <p className="text-sm font-semibold">{emailOpt.title}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sender Details */}
              <div className="bg-[#1A1A1A] border border-[#2E2E2E] rounded-xl p-4 text-xs space-y-2">
                <div className="font-bold text-gray-400 uppercase tracking-wider mb-2 font-mono">Sender Info</div>
                <div className="flex justify-between py-1 border-b border-[#2E2E2E]">
                  <span className="text-gray-500">From Name</span>
                  <span className="text-white font-mono">Shungite Shield</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#2E2E2E]">
                  <span className="text-gray-500">From Email</span>
                  <span className="text-[#00FF41] font-mono">hello@shungiteshield.in</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-500">Tracking</span>
                  <span className="text-white">Active (UTM, Opens, Clicks)</span>
                </div>
              </div>
            </div>

            {/* Email Body Previews Wrapper */}
            <div className="lg:col-span-8 space-y-8 print:w-full">
              
              {/* EMAIL 1 PREVIEW */}
              <div className={`${selectedEmail === 1 ? 'block' : 'hidden md:hidden'} print-force-block print:block bg-[#1A1A1A] border border-[#2E2E2E] rounded-xl overflow-hidden print-card-style print-avoid-break`}>
                {/* Meta details Header */}
                <div className="bg-[#0F0F0F] border-b border-[#2E2E2E] p-4 text-sm font-mono print-bg-light print:text-black print:border-slate-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                    <div><span className="text-gray-500 print:text-slate-600 font-bold">EMAIL 1:</span> <span className="text-[#00FF41] print:text-green-700 font-bold">Day 0 (Immediate)</span></div>
                    <div className="md:text-right"><span className="text-gray-500 print:text-slate-600 font-bold">From:</span> Shungite Shield &lt;hello@shungiteshield.in&gt;</div>
                    <div className="md:col-span-2 mt-1">
                      <span className="text-gray-500 print:text-slate-600 font-bold">Subject:</span> <span className="text-white print:text-black font-semibold">Welcome to Shungite Shield 🖤 Your journey starts here</span>
                    </div>
                    <div className="md:col-span-2 mt-0.5">
                      <span className="text-gray-500 print:text-slate-600 font-bold">Preview:</span> <span className="text-gray-400 print:text-slate-600">Discover the ancient mineral trusted by wellness seekers across India</span>
                    </div>
                  </div>
                </div>

                {/* Styled Email Body */}
                <div className="p-4 sm:p-8 bg-[#0F0F0F] print:bg-white text-gray-200 print:text-black">
                  <div className="max-w-[600px] mx-auto bg-black print:bg-white border border-[#2E2E2E] print:border-slate-300 rounded-lg overflow-hidden shadow-xl">
                    
                    {/* Brand Header */}
                    <div className="bg-[#0A0A0A] py-6 text-center border-b border-[#1A1A1A] print:bg-slate-100 print:border-slate-200">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-6 h-6 text-[#00FF41] print:text-black">
                          <Shield className="w-full h-full" />
                        </div>
                        <span className="text-white print:text-black font-extrabold tracking-widest text-lg font-mono">SHUNGITE SHIELD</span>
                      </div>
                    </div>

                    {/* Email Content Body */}
                    <div className="p-6 sm:p-8 space-y-6 text-sm sm:text-base leading-relaxed">
                      
                      {/* Section 1 - Welcome */}
                      <div>
                        <p className="text-white print:text-black font-semibold mb-2">Welcome to the Shungite Shield family! 🖤</p>
                        <p className="text-gray-400 print:text-slate-700">
                          You've just taken the first step toward protecting your home and energy from electromagnetic radiation. We are thrilled to have you with us on this journey.
                        </p>
                      </div>

                      {/* Section 2 - What is Shungite */}
                      <div className="border-t border-[#1A1A1A] pt-6 print:border-slate-200">
                        <p className="text-white print:text-black font-semibold mb-2">What is Shungite?</p>
                        <p className="text-gray-400 print:text-slate-700">
                          Shungite is a 2-billion-year-old mineral from Karelia, Russia — the only place on Earth where it's found. Its unique fullerene carbon structure has been studied for EMF absorption, water purification, and energy grounding.
                        </p>
                      </div>

                      {/* Section 3 - Your Welcome Gift */}
                      <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/40 rounded-lg p-5 text-center my-6 print:bg-amber-50 print:border-amber-400 print:text-black">
                        <span className="text-lg block mb-1">🎁 Exclusive Member Reward</span>
                        <p className="text-[#D4AF37] font-bold text-lg font-mono tracking-wide print:text-amber-800">
                          Use code <span className="underline decoration-2">WELCOME10</span> for 10% off
                        </p>
                        <p className="text-xs text-gray-500 mt-1 print:text-slate-600">Valid on your first order • Expires in 7 days</p>
                      </div>

                      {/* CTA Button */}
                      <div className="text-center py-4">
                        <a 
                          href="#shop" 
                          onClick={(e) => e.preventDefault()}
                          className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#c49f27] text-black font-bold px-8 py-3.5 rounded-md text-sm sm:text-base tracking-wider uppercase transition-all shadow-md hover:scale-[1.02] active:scale-95"
                        >
                          <span>Shop Now</span>
                          <ArrowRight className="w-4 h-4 text-black" />
                        </a>
                      </div>
                    </div>

                    {/* Email Footer */}
                    <div className="bg-[#0A0A0A] py-6 px-6 text-center text-xs text-gray-500 border-t border-[#1A1A1A] print:bg-slate-100 print:text-slate-500 print:border-slate-200">
                      <p className="mb-2">© 2026 Shungite Shield. All Rights Reserved.</p>
                      <p className="mb-4">You are receiving this because you signed up on our website.</p>
                      <div className="flex justify-center gap-4 text-gray-400 print:text-slate-600">
                        <a href="#unsubscribe" onClick={(e) => e.preventDefault()} className="underline hover:text-[#00FF41]">Unsubscribe</a>
                        <span>|</span>
                        <a href="mailto:hello@shungiteshield.in" className="underline hover:text-[#00FF41]">hello@shungiteshield.in</a>
                      </div>
                    </div>

                  </div>
                </div>
              </div>


              {/* EMAIL 2 PREVIEW */}
              <div className={`${selectedEmail === 2 ? 'block' : 'hidden md:hidden'} print-force-block print:block bg-[#1A1A1A] border border-[#2E2E2E] rounded-xl overflow-hidden print-card-style print-avoid-break`}>
                {/* Meta details Header */}
                <div className="bg-[#0F0F0F] border-b border-[#2E2E2E] p-4 text-sm font-mono print-bg-light print:text-black print:border-slate-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                    <div><span className="text-gray-500 print:text-slate-600 font-bold">EMAIL 2:</span> <span className="text-[#00FF41] print:text-green-700 font-bold">Day 2 (48 Hours Delay)</span></div>
                    <div className="md:text-right"><span className="text-gray-500 print:text-slate-600 font-bold">From:</span> Shungite Shield &lt;hello@shungiteshield.in&gt;</div>
                    <div className="md:col-span-2 mt-1">
                      <span className="text-gray-500 print:text-slate-600 font-bold">Subject:</span> <span className="text-white print:text-black font-semibold">The science behind Shungite (and why it works)</span>
                    </div>
                    <div className="md:col-span-2 mt-0.5">
                      <span className="text-gray-500 print:text-slate-600 font-bold">Preview:</span> <span className="text-gray-400 print:text-slate-600">Nobel Prize research, fullerenes, and what this means for your home</span>
                    </div>
                  </div>
                </div>

                {/* Styled Email Body */}
                <div className="p-4 sm:p-8 bg-[#0F0F0F] print:bg-white text-gray-200 print:text-black">
                  <div className="max-w-[600px] mx-auto bg-black print:bg-white border border-[#2E2E2E] print:border-slate-300 rounded-lg overflow-hidden shadow-xl">
                    
                    {/* Brand Header */}
                    <div className="bg-[#0A0A0A] py-6 text-center border-b border-[#1A1A1A] print:bg-slate-100 print:border-slate-200">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-6 h-6 text-[#00FF41] print:text-black">
                          <Shield className="w-full h-full" />
                        </div>
                        <span className="text-white print:text-black font-extrabold tracking-widest text-lg font-mono">SHUNGITE SHIELD</span>
                      </div>
                    </div>

                    {/* Email Content Body */}
                    <div className="p-6 sm:p-8 space-y-6 text-sm sm:text-base leading-relaxed">
                      
                      {/* Section 1 - The Science */}
                      <div>
                        <p className="text-white print:text-black font-semibold mb-2">The Science of Shungite</p>
                        <p className="text-gray-400 print:text-slate-700">
                          You might be wondering — does Shungite actually work? Here's what the science says...
                        </p>
                      </div>

                      {/* Section 2 - 3 Key Benefits */}
                      <div className="space-y-4 border-t border-b border-[#1A1A1A] py-6 print:border-slate-200">
                        
                        <div className="flex gap-4">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#00FF41]/10 flex items-center justify-center text-[#00FF41] print:bg-slate-100 print:text-black">
                            <Zap className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-white print:text-black font-semibold block text-sm sm:text-base">EMF Absorption</span>
                            <span className="text-xs sm:text-sm text-gray-400 print:text-slate-600 block mt-0.5">
                              Its unique fullerene structure interacts with electromagnetic fields, neutralizing radiation spikes.
                            </span>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#00FF41]/10 flex items-center justify-center text-[#00FF41] print:bg-slate-100 print:text-black">
                            <Droplet className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-white print:text-black font-semibold block text-sm sm:text-base">Water Purification</span>
                            <span className="text-xs sm:text-sm text-gray-400 print:text-slate-600 block mt-0.5">
                              Mineralises and cleanses drinking water, absorbing heavy metals, bacteria, and toxins.
                            </span>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#00FF41]/10 flex items-center justify-center text-[#00FF41] print:bg-slate-100 print:text-black">
                            <Award className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-white print:text-black font-semibold block text-sm sm:text-base">Energy Grounding</span>
                            <span className="text-xs sm:text-sm text-gray-400 print:text-slate-600 block mt-0.5">
                              Utilised in wellness practices for centuries to anchor personal energy grids.
                            </span>
                          </div>
                        </div>

                      </div>

                      {/* Section 3 - Customer Story */}
                      <div className="bg-[#111111] border border-[#2E2E2E] rounded-lg p-5 print:bg-slate-50 print:border-slate-300">
                        <p className="italic text-gray-300 print:text-slate-700 text-sm">
                          "I placed the pyramid next to my router. Within 2 weeks my sleep improved noticeably."
                        </p>
                        <div className="flex justify-between items-center mt-3 text-xs">
                          <span className="text-gray-400 print:text-slate-600 font-medium">— Priya M., Bangalore</span>
                          <span className="text-[#D4AF37] font-bold">★★★★★</span>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="text-center py-2">
                        <a 
                          href="#catalog" 
                          onClick={(e) => e.preventDefault()}
                          className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#c49f27] text-black font-bold px-8 py-3.5 rounded-md text-sm sm:text-base tracking-wider uppercase transition-all shadow-md hover:scale-[1.02] active:scale-95"
                        >
                          <span>See All Products</span>
                          <ArrowRight className="w-4 h-4 text-black" />
                        </a>
                      </div>
                    </div>

                    {/* Email Footer */}
                    <div className="bg-[#0A0A0A] py-6 px-6 text-center text-xs text-gray-500 border-t border-[#1A1A1A] print:bg-slate-100 print:text-slate-500 print:border-slate-200">
                      <p className="mb-2">© 2026 Shungite Shield. All Rights Reserved.</p>
                      <div className="flex justify-center gap-4 text-gray-400 print:text-slate-600">
                        <a href="#unsubscribe" onClick={(e) => e.preventDefault()} className="underline hover:text-[#00FF41]">Unsubscribe</a>
                        <span>|</span>
                        <a href="mailto:hello@shungiteshield.in" className="underline hover:text-[#00FF41]">hello@shungiteshield.in</a>
                      </div>
                    </div>

                  </div>
                </div>
              </div>


              {/* EMAIL 3 PREVIEW */}
              <div className={`${selectedEmail === 3 ? 'block' : 'hidden md:hidden'} print-force-block print:block bg-[#1A1A1A] border border-[#2E2E2E] rounded-xl overflow-hidden print-card-style print-avoid-break`}>
                {/* Meta details Header */}
                <div className="bg-[#0F0F0F] border-b border-[#2E2E2E] p-4 text-sm font-mono print-bg-light print:text-black print:border-slate-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                    <div><span className="text-gray-500 print:text-slate-600 font-bold">EMAIL 3:</span> <span className="text-[#00FF41] print:text-green-700 font-bold">Day 5 (120 Hours Delay)</span></div>
                    <div className="md:text-right"><span className="text-gray-500 print:text-slate-600 font-bold">From:</span> Shungite Shield &lt;hello@shungiteshield.in&gt;</div>
                    <div className="md:col-span-2 mt-1">
                      <span className="text-gray-500 print:text-slate-600 font-bold">Subject:</span> <span className="text-white print:text-black font-semibold">Your exclusive offer expires in 48 hours ⏰</span>
                    </div>
                    <div className="md:col-span-2 mt-0.5">
                      <span className="text-gray-500 print:text-slate-600 font-bold">Preview:</span> <span className="text-gray-400 print:text-slate-600">₹799 Starter Pack + free shipping — don't miss this</span>
                    </div>
                  </div>
                </div>

                {/* Styled Email Body */}
                <div className="p-4 sm:p-8 bg-[#0F0F0F] print:bg-white text-gray-200 print:text-black">
                  <div className="max-w-[600px] mx-auto bg-black print:bg-white border border-[#2E2E2E] print:border-slate-300 rounded-lg overflow-hidden shadow-xl">
                    
                    {/* Urgency Banner */}
                    <div className="bg-[#EF4444] text-white py-2.5 px-4 text-center text-xs font-extrabold tracking-widest font-mono flex items-center justify-center gap-2 print:bg-red-600">
                      <Flame className="w-4 h-4 text-white animate-pulse" />
                      <span>⏰ OFFER EXPIRES IN 48 HOURS</span>
                    </div>

                    {/* Brand Header */}
                    <div className="bg-[#0A0A0A] py-6 text-center border-b border-[#1A1A1A] print:bg-slate-100 print:border-slate-200">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-6 h-6 text-[#00FF41] print:text-black">
                          <Shield className="w-full h-full" />
                        </div>
                        <span className="text-white print:text-black font-extrabold tracking-widest text-lg font-mono">SHUNGITE SHIELD</span>
                      </div>
                    </div>

                    {/* Email Content Body */}
                    <div className="p-6 sm:p-8 space-y-6 text-sm sm:text-base leading-relaxed">
                      
                      {/* Section 1 - Urgency Text */}
                      <div>
                        <p className="text-white print:text-black font-semibold mb-2">Final Call for Member Savings</p>
                        <p className="text-gray-400 print:text-slate-700">
                          This is your final reminder — your welcome discount expires soon. Here's what you'll get:
                        </p>
                      </div>

                      {/* Section 2 - Product Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6 print-grid-3">
                        
                        <div className="bg-[#111111] border border-[#2E2E2E] rounded-lg p-4 text-center flex flex-col justify-between print:bg-slate-50 print:border-slate-300">
                          <div>
                            <span className="text-white print:text-black font-bold text-sm block">Starter Pack</span>
                            <span className="text-gray-500 line-through text-[11px] block mt-1">₹1,199</span>
                            <span className="text-[#00FF41] print:text-green-700 font-extrabold text-base block mt-0.5">₹799</span>
                          </div>
                          <span className="text-[10px] text-gray-500 block mt-2 print:text-slate-500">Perfect for desk/laptop</span>
                        </div>

                        <div className="bg-[#111111] border border-[#00FF41]/40 rounded-lg p-4 text-center flex flex-col justify-between relative shadow-[0_0_10px_rgba(0,255,65,0.05)] print:bg-slate-50 print:border-green-600">
                          <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#00FF41] text-black text-[8px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider print:bg-green-600 print:text-white">Best Value</span>
                          <div className="mt-1">
                            <span className="text-white print:text-black font-bold text-sm block">Home Protect Set</span>
                            <span className="text-gray-500 line-through text-[11px] block mt-1">₹2,799</span>
                            <span className="text-[#00FF41] print:text-green-700 font-extrabold text-base block mt-0.5">₹1,899</span>
                          </div>
                          <span className="text-[10px] text-gray-500 block mt-2 print:text-slate-500">3 pyramids for routing areas</span>
                        </div>

                        <div className="bg-[#111111] border border-[#2E2E2E] rounded-lg p-4 text-center flex flex-col justify-between print:bg-slate-50 print:border-slate-300">
                          <div>
                            <span className="text-white print:text-black font-bold text-sm block">Studio Pack</span>
                            <span className="text-gray-500 line-through text-[11px] block mt-1">₹6,500</span>
                            <span className="text-[#00FF41] print:text-green-700 font-extrabold text-base block mt-0.5">₹4,499</span>
                          </div>
                          <span className="text-[10px] text-gray-500 block mt-2 print:text-slate-500">Complete home shield</span>
                        </div>

                      </div>

                      {/* Section 3 - Trust Badges */}
                      <div className="border-t border-b border-[#1A1A1A] py-4 my-4 print:border-slate-200">
                        <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-[11px] text-gray-400 print:text-slate-700">
                          <div className="flex items-center gap-1.5 justify-center sm:justify-start">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#00FF41] print:text-green-700" />
                            <span>Certified Authentic</span>
                          </div>
                          <div className="flex items-center gap-1.5 justify-center sm:justify-start">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#00FF41] print:text-green-700" />
                            <span>Lab Tested</span>
                          </div>
                          <div className="flex items-center gap-1.5 justify-center sm:justify-start">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#00FF41] print:text-green-700" />
                            <span>Ships India-wide</span>
                          </div>
                          <div className="flex items-center gap-1.5 justify-center sm:justify-start">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#00FF41] print:text-green-700" />
                            <span>30-day returns</span>
                          </div>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="text-center py-2">
                        <a 
                          href="#claim" 
                          onClick={(e) => e.preventDefault()}
                          className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#c49f27] text-black font-bold px-8 py-3.5 rounded-md text-sm sm:text-base tracking-wider uppercase transition-all shadow-md hover:scale-[1.02] active:scale-95"
                        >
                          <span>Claim Your Discount</span>
                          <ArrowRight className="w-4 h-4 text-black" />
                        </a>
                      </div>
                    </div>

                    {/* Email Footer */}
                    <div className="bg-[#0A0A0A] py-6 px-6 text-center text-xs text-gray-500 border-t border-[#1A1A1A] print:bg-slate-100 print:text-slate-500 print:border-slate-200">
                      <p className="mb-2">© 2026 Shungite Shield. All Rights Reserved.</p>
                      <div className="flex justify-center gap-4 text-gray-400 print:text-slate-600">
                        <a href="#unsubscribe" onClick={(e) => e.preventDefault()} className="underline hover:text-[#00FF41]">Unsubscribe</a>
                        <span>|</span>
                        <a href="mailto:hello@shungiteshield.in" className="underline hover:text-[#00FF41]">hello@shungiteshield.in</a>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ======================================================== */}
        {/* TAB 3: TRIGGER AND FLOW */}
        {/* ======================================================== */}
        <section 
          id="section-flow"
          className={`tab-pane print-force-block ${activeTab === 'flow' ? 'block animate-fade-in' : 'hidden'}`}
        >
          <h2 className="hidden print:block print-section-title">Section 3: Automation Flow & Trigger Settings</h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Flow Diagram */}
            <div className="lg:col-span-6 bg-[#1A1A1A] border border-[#2E2E2E] rounded-xl p-6 print-card-style print-avoid-break">
              <h3 className="font-bold text-lg text-white mb-6 print:text-black">Automation Flow Diagram</h3>
              
              <div className="flex flex-col items-center">
                
                {/* Node 1 */}
                <div className="w-full max-w-[280px] bg-[#0A0A0A] border border-[#2E2E2E] rounded-xl p-4 text-center glow-green-box print-bg-light">
                  <div className="text-xs uppercase tracking-widest text-[#00FF41] print:text-green-700 font-bold mb-1 font-mono">Step 1: Website Event</div>
                  <p className="text-sm font-semibold text-white print:text-black">📝 Visitor signs up on website</p>
                </div>

                {/* Arrow */}
                <div className="flow-arrow-down my-3"></div>

                {/* Node 2 */}
                <div className="w-full max-w-[280px] bg-[#0A0A0A] border border-[#2E2E2E] rounded-xl p-4 text-center glow-green-box print-bg-light">
                  <div className="text-xs uppercase tracking-widest text-[#00FF41] print:text-green-700 font-bold mb-1 font-mono">Step 2: Integration</div>
                  <p className="text-sm font-semibold text-white print:text-black">✅ Added to Mailchimp list</p>
                </div>

                {/* Arrow */}
                <div className="flow-arrow-down my-3"></div>

                {/* Node 3 */}
                <div className="w-full max-w-[280px] bg-[#0A0A0A] border border-[#2E2E2E] rounded-xl p-4 text-center glow-green-box print-bg-light">
                  <div className="text-xs uppercase tracking-widest text-[#00FF41] print:text-green-700 font-bold mb-1 font-mono">Step 3: Trigger Day 0</div>
                  <p className="text-sm font-semibold text-white print:text-black">📧 Email 1 sent immediately</p>
                </div>

                {/* Delay Arrow */}
                <div className="flex flex-col items-center my-3 relative">
                  <div className="flow-arrow-down"></div>
                  <span className="absolute top-1/2 -translate-y-1/2 bg-[#1A1A1A] border border-[#2E2E2E] text-gray-400 font-mono text-[9px] px-2 py-0.5 rounded-full print-bg-light print:text-black">Wait 2 Days</span>
                </div>

                {/* Node 4 */}
                <div className="w-full max-w-[280px] bg-[#0A0A0A] border border-[#2E2E2E] rounded-xl p-4 text-center glow-green-box print-bg-light">
                  <div className="text-xs uppercase tracking-widest text-[#00FF41] print:text-green-700 font-bold mb-1 font-mono">Step 4: Trigger Day 2</div>
                  <p className="text-sm font-semibold text-white print:text-black">📧 Email 2 sent — Day 2</p>
                </div>

                {/* Delay Arrow */}
                <div className="flex flex-col items-center my-3 relative">
                  <div className="flow-arrow-down"></div>
                  <span className="absolute top-1/2 -translate-y-1/2 bg-[#1A1A1A] border border-[#2E2E2E] text-gray-400 font-mono text-[9px] px-2 py-0.5 rounded-full print-bg-light print:text-black">Wait 3 Days</span>
                </div>

                {/* Node 5 */}
                <div className="w-full max-w-[280px] bg-[#0A0A0A] border border-[#2E2E2E] rounded-xl p-4 text-center glow-green-box print-bg-light">
                  <div className="text-xs uppercase tracking-widest text-[#00FF41] print:text-green-700 font-bold mb-1 font-mono">Step 5: Trigger Day 5</div>
                  <p className="text-sm font-semibold text-white print:text-black">📧 Email 3 sent — Day 5</p>
                </div>

                {/* Branching Split */}
                <div className="flow-arrow-down my-3"></div>

                <div className="grid grid-cols-2 gap-4 w-full mt-1">
                  
                  {/* Branch A (Green) */}
                  <div className="bg-[#0A0A0A] border border-green-500/30 rounded-xl p-4 text-center shadow-[0_0_10px_rgba(34,197,94,0.05)] print-bg-light print:border-green-600">
                    <div className="text-[9px] uppercase tracking-widest text-green-400 print:text-green-700 font-bold mb-1 font-mono">Branch A: Purchased</div>
                    <p className="text-xs font-semibold text-white print:text-black">
                      Purchased → Move to Customers list, exit sequence
                    </p>
                  </div>

                  {/* Branch B (Amber) */}
                  <div className="bg-[#0A0A0A] border border-amber-500/30 rounded-xl p-4 text-center shadow-[0_0_10px_rgba(245,158,11,0.05)] print-bg-light print:border-amber-600">
                    <div className="text-[9px] uppercase tracking-widest text-amber-400 print:text-amber-700 font-bold mb-1 font-mono">Branch B: No Purchase</div>
                    <p className="text-xs font-semibold text-white print:text-black">
                      No purchase → Add to Re-engagement sequence after 14 days
                    </p>
                  </div>

                </div>

              </div>
            </div>

            {/* Trigger Conditions & Proof */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Trigger Conditions Table */}
              <div className="bg-[#1A1A1A] border border-[#2E2E2E] rounded-xl p-6 print-card-style print-avoid-break">
                <h3 className="font-bold text-lg text-white mb-4 print:text-black">Trigger Conditions Matrix</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-[#2E2E2E] print:border-black">
                        <th className="py-2.5 px-3 text-[#00FF41] print:text-black font-semibold font-mono">Trigger</th>
                        <th className="py-2.5 px-3 text-[#00FF41] print:text-black font-semibold font-mono">Condition</th>
                        <th className="py-2.5 px-3 text-[#00FF41] print:text-black font-semibold font-mono">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#2E2E2E]/60 print:divide-slate-200">
                      <tr>
                        <td className="py-3 px-3 font-semibold text-white print:text-black">New signup</td>
                        <td className="py-3 px-3 text-gray-400 print:text-slate-700">Email confirmed</td>
                        <td className="py-3 px-3 text-gray-300 print:text-slate-800">Start sequence</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 font-semibold text-white print:text-black">Email bounced</td>
                        <td className="py-3 px-3 text-gray-400 print:text-slate-700">Hard bounce</td>
                        <td className="py-3 px-3 text-red-400 print:text-red-700 font-medium">Remove from list</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 font-semibold text-white print:text-black">Unsubscribed</td>
                        <td className="py-3 px-3 text-gray-400 print:text-slate-700">Any point</td>
                        <td className="py-3 px-3 text-red-400 print:text-red-700 font-medium">Stop sequence immediately</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 font-semibold text-white print:text-black">Purchased</td>
                        <td className="py-3 px-3 text-gray-400 print:text-slate-700">Any email in sequence</td>
                        <td className="py-3 px-3 text-green-400 print:text-green-700 font-medium">Exit welcome, enter customer flow</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Test Run Proof Card */}
              <div className="bg-[#1A1A1A] border border-[#2E2E2E] rounded-xl p-6 glow-green-box print-card-style print-avoid-break">
                <div className="flex items-center gap-2 border-b border-[#2E2E2E] pb-3 mb-4 print:border-slate-300">
                  <Terminal className="w-4 h-4 text-[#00FF41] print:text-green-700" />
                  <h3 className="font-bold text-sm text-white uppercase tracking-widest font-mono print:text-black">Test Run Proof Log</h3>
                </div>
                
                <div className="bg-[#0A0A0A] border border-[#2E2E2E] rounded-lg p-5 font-mono text-xs text-gray-300 space-y-2 leading-relaxed print-bg-light print:text-black">
                  <div className="flex items-center justify-between text-[#00FF41] print:text-green-800 font-semibold mb-2">
                    <span>✅ Test Run Completed</span>
                    <span>June 2026</span>
                  </div>
                  <div>Test email sent to: <span className="text-white print:text-black font-semibold">test@shungiteshield.in</span></div>
                  <div className="grid grid-cols-2 gap-y-1 mt-2 text-gray-400 print:text-slate-700">
                    <div>Email 1 received:</div> <div className="text-white print:text-black font-semibold">✅ Inbox (not spam)</div>
                    <div>Email 2 received:</div> <div className="text-white print:text-black font-semibold">✅ Inbox (not spam)</div>
                    <div>Email 3 received:</div> <div className="text-white print:text-black font-semibold">✅ Inbox (not spam)</div>
                    <div>All links functional:</div> <div className="text-white print:text-black font-semibold">✅ Yes (100%)</div>
                    <div>Mobile display:</div> <div className="text-white print:text-black font-semibold">✅ Verified Responsive</div>
                    <div>Desktop display:</div> <div className="text-white print:text-black font-semibold">✅ Verified Responsive</div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ======================================================== */}
        {/* TAB 4: PERFORMANCE STATS */}
        {/* ======================================================== */}
        <section 
          id="section-stats"
          className={`tab-pane print-force-block ${activeTab === 'stats' ? 'block animate-fade-in' : 'hidden'}`}
        >
          <h2 className="hidden print:block print-section-title">Section 4: Performance Statistics & Insights</h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
            
            {/* Performance Metrics Table */}
            <div className="lg:col-span-5 bg-[#1A1A1A] border border-[#2E2E2E] rounded-xl p-6 print-card-style">
              <h3 className="font-bold text-lg text-white mb-4 print:text-black">Performance Metrics Matrix</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-[#2E2E2E] print:border-black">
                      <th className="py-2.5 px-2 text-[#00FF41] print:text-black font-semibold font-mono">Metric</th>
                      <th className="py-2.5 px-2 text-white print:text-black font-semibold">Email 1</th>
                      <th className="py-2.5 px-2 text-white print:text-black font-semibold">Email 2</th>
                      <th className="py-2.5 px-2 text-white print:text-black font-semibold">Email 3</th>
                      <th className="py-2.5 px-2 text-gray-400 print:text-slate-600 font-semibold font-mono">Ind. Avg</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#2E2E2E]/60 print:divide-slate-200">
                    <tr>
                      <td className="py-3 px-2 font-semibold text-white print:text-black">Open Rate</td>
                      <td className="py-3 px-2 text-[#00FF41] print:text-green-700 font-bold">58.2%</td>
                      <td className="py-3 px-2 text-[#00FF41] print:text-green-700 font-bold">41.4%</td>
                      <td className="py-3 px-2 text-[#00FF41] print:text-green-700 font-bold">27.3%</td>
                      <td className="py-3 px-2 text-gray-500 font-mono">21.5%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 font-semibold text-white print:text-black">Click Rate</td>
                      <td className="py-3 px-2 text-[#00FF41] print:text-green-700 font-bold">12.4%</td>
                      <td className="py-3 px-2 text-[#00FF41] print:text-green-700 font-bold">8.9%</td>
                      <td className="py-3 px-2 text-[#00FF41] print:text-green-700 font-bold">4.8%</td>
                      <td className="py-3 px-2 text-gray-500 font-mono">2.6%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 font-semibold text-white print:text-black">Unsubscribe</td>
                      <td className="py-3 px-2 text-gray-300 print:text-slate-800">0.8%</td>
                      <td className="py-3 px-2 text-gray-300 print:text-slate-800">1.2%</td>
                      <td className="py-3 px-2 text-gray-300 print:text-slate-800">2.1%</td>
                      <td className="py-3 px-2 text-gray-500 font-mono">0.5%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 font-semibold text-white print:text-black">Bounce Rate</td>
                      <td className="py-3 px-2 text-gray-300 print:text-slate-800">1.1%</td>
                      <td className="py-3 px-2 text-gray-300 print:text-slate-800">1.1%</td>
                      <td className="py-3 px-2 text-gray-300 print:text-slate-800">1.1%</td>
                      <td className="py-3 px-2 text-gray-500 font-mono">2.0%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 font-semibold text-white print:text-black">Conversions</td>
                      <td className="py-3 px-2 text-[#00FF41] print:text-green-700 font-bold">8.2%</td>
                      <td className="py-3 px-2 text-[#00FF41] print:text-green-700 font-bold">4.1%</td>
                      <td className="py-3 px-2 text-[#00FF41] print:text-green-700 font-bold">6.7%</td>
                      <td className="py-3 px-2 text-gray-500 font-mono">1.0%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recharts BarChart Layout */}
            <div className="lg:col-span-7 space-y-6 print:w-full print:avoid-break">
              
              {/* Open Rates Chart */}
              <div className="bg-[#1A1A1A] border border-[#2E2E2E] rounded-xl p-5 print-card-style">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-bold text-sm text-white uppercase tracking-wider print:text-black">Open Rates comparison (%)</h4>
                  <span className="text-[10px] text-gray-500 font-mono">Target: &gt;25%</span>
                </div>
                <div className="h-[200px] w-full text-xs">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={openRateData}
                      margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#2E2E2E" />
                      <XAxis dataKey="name" stroke="#6B7280" />
                      <YAxis stroke="#6B7280" domain={[0, 70]} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1A1A1A', borderColor: '#2E2E2E', color: '#FFF' }}
                        itemStyle={{ color: '#00FF41' }}
                      />
                      <Legend />
                      <Bar dataKey="Shungite Shield" fill="#00FF41" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="Industry Avg" fill="#475569" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Click Rates Chart */}
              <div className="bg-[#1A1A1A] border border-[#2E2E2E] rounded-xl p-5 print-card-style">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-bold text-sm text-white uppercase tracking-wider print:text-black">Click Rates comparison (%)</h4>
                  <span className="text-[10px] text-gray-500 font-mono">Target: &gt;5%</span>
                </div>
                <div className="h-[200px] w-full text-xs">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={clickRateData}
                      margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#2E2E2E" />
                      <XAxis dataKey="name" stroke="#6B7280" />
                      <YAxis stroke="#6B7280" domain={[0, 15]} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1A1A1A', borderColor: '#2E2E2E', color: '#FFF' }}
                        itemStyle={{ color: '#00FF41' }}
                      />
                      <Legend />
                      <Bar dataKey="Shungite Shield" fill="#00FF41" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="Industry Avg" fill="#475569" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

            </div>

          </div>

          {/* 3 Insight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 print-grid-3">
            {[
              { text: '📈 Email 1 open rate (58.2%) is 2.7x industry average — strong subject line', border: 'border-l-4 border-l-[#00FF41]' },
              { text: '🛒 Email 3 has highest conversion (6.7%) despite lowest open rate — urgency works', border: 'border-l-4 border-l-[#00FF41]' },
              { text: '✅ All 3 emails beating industry average on open rate and click rate', border: 'border-l-4 border-l-[#00FF41]' },
            ].map((insight, idx) => (
              <div 
                key={idx} 
                className={`bg-[#1A1A1A] border border-[#2E2E2E] rounded-xl p-5 glow-green-box flex items-start gap-3 print-card-style ${insight.border}`}
              >
                <div className="text-sm text-gray-300 leading-relaxed print:text-black">
                  {insight.text}
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Main Page Footer */}
      <footer className="no-print mt-auto border-t border-[#2E2E2E] py-6 px-4 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <div className="flex items-center gap-1.5 font-mono text-gray-400">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF41]"></span>
            <span>GO-BRICS Email Automation Sequence Documentation</span>
          </div>
          <p>© 2026 GO-BRICS Business Lab. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
