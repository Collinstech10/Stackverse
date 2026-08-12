import React, { useState } from 'react';
import { X, Sparkles, Code2, Layers, CheckCircle2, Send, ShieldCheck, ArrowRight } from 'lucide-react';
import { ProductItem, ProjectItem } from '../../types';
import { sendEmailNotification } from '../../lib/emailService';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProduct?: ProductItem | null;
  selectedCaseStudy?: ProjectItem | null;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  selectedProduct,
  selectedCaseStudy,
}) => {
  const [inquiryType, setInquiryType] = useState<'collinstech' | 'stackverse'>('collinstech');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [projectType, setProjectType] = useState('Web Development');
  const [budget, setBudget] = useState('$5k - $15k');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) newErrors.name = 'Full name is required';
    if (!email.trim() || !email.includes('@')) newErrors.email = 'Valid work email is required';
    if (!message.trim()) newErrors.message = 'Please provide a brief description of your project';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    try {
      const existing = JSON.parse(localStorage.getItem('stackverse_messages') || '[]');
      existing.push({
        id: Date.now().toString(),
        name,
        email,
        company,
        projectType,
        budget,
        message,
        division: inquiryType,
        selectedProduct: selectedProduct?.name,
        selectedCaseStudy: selectedCaseStudy?.title,
        date: new Date().toISOString(),
      });
      localStorage.setItem('stackverse_messages', JSON.stringify(existing));
    } catch (err) {
      console.error('Failed to save project modal inquiry:', err);
    }

    sendEmailNotification({
      type: 'contact_message',
      name,
      email,
      company,
      projectType,
      budget,
      message,
      division: inquiryType === 'collinstech' ? 'Collins Tech Consulting' : 'StackVerse Platform',
      productOrCaseStudy: selectedProduct?.name || selectedCaseStudy?.title || 'General',
    });

    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setCompany('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0d0f18] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* VIEW 1: Inspection Modal for Selected Product */}
        {selectedProduct ? (
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono-tech bg-blue-950/60 text-blue-300 border border-blue-500/30">
                STACKVERSE PRODUCT
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono-tech bg-slate-800 text-slate-300 border border-slate-700">
                {selectedProduct.status}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
              {selectedProduct.name}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedProduct.longDescription}
            </p>

            <div className="space-y-3 bg-white/5 p-4 rounded-2xl border border-white/10">
              <h4 className="text-xs font-mono-tech text-blue-400 uppercase tracking-wider">
                CORE CAPABILITIES & ARCHITECTURE
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {selectedProduct.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-mono-tech text-slate-400 self-center mr-2">TECH STACK:</span>
              {selectedProduct.techStack.map((tech, i) => (
                <span key={i} className="px-2.5 py-1 rounded-md bg-blue-950/40 text-xs font-mono-tech text-blue-300 border border-blue-500/20">
                  {tech}
                </span>
              ))}
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={resetAndClose}
                className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold"
              >
                Close Details
              </button>
            </div>
          </div>
        ) : selectedCaseStudy ? (
          /* VIEW 2: Inspection Modal for Selected Case Study */
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono-tech bg-blue-950/60 text-blue-300 border border-blue-500/30">
                COLLINSTECH DEMO BENCHMARK
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono-tech bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
                Production Tested
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
              {selectedCaseStudy.title}
            </h3>

            <div className="space-y-4">
              <div>
                <strong className="block text-xs font-mono-tech text-slate-400 mb-1 uppercase">Overview</strong>
                <p className="text-sm text-slate-300">{selectedCaseStudy.description}</p>
              </div>

              <div>
                <strong className="block text-xs font-mono-tech text-blue-400 mb-1 uppercase">Engineering Solution</strong>
                <p className="text-sm text-slate-300">{selectedCaseStudy.solution}</p>
              </div>

              <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-500/30">
                <strong className="block text-xs font-mono-tech text-emerald-400 mb-1 uppercase">Benchmark Result</strong>
                <p className="text-sm text-white font-medium">{selectedCaseStudy.result}</p>
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={resetAndClose}
                className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold"
              >
                Close Architecture View
              </button>
            </div>
          </div>
        ) : submitted ? (
          /* VIEW 3: Form Submitted Confirmation */
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold font-display text-white">
              Project Proposal Received!
            </h3>

            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{name}</strong>. Our engineering leads at{' '}
              <strong className="text-blue-400">
                {inquiryType === 'collinstech' ? 'CollinsTech' : 'StackVerse'}
              </strong>{' '}
              will review your project requirements and get back to <span className="underline">{email}</span> within 24 hours.
            </p>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs font-mono-tech text-slate-400 max-w-md mx-auto">
              Selected Path: {inquiryType === 'collinstech' ? 'CollinsTech Software Engineering' : 'StackVerse Platform Inquiry'} • Budget: {budget}
            </div>

            <div className="pt-4">
              <button
                onClick={resetAndClose}
                className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold"
              >
                Return to Website
              </button>
            </div>
          </div>
        ) : (
          /* VIEW 4: Start a Project Form */
          <div className="space-y-6">
            
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/40 text-xs font-mono-tech text-blue-300 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>START A PROJECT</span>
              </div>
              <h3 className="text-2xl font-bold font-display text-white">
                Tell Us What You Want To Build
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Select whether you need custom engineering services with CollinsTech or want to inquire about StackVerse products.
              </p>
            </div>

            {/* Path Selection Toggle */}
            <div className="grid grid-cols-2 gap-3 p-1.5 rounded-2xl bg-white/5 border border-white/10">
              <button
                type="button"
                onClick={() => setInquiryType('collinstech')}
                className={`py-2.5 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                  inquiryType === 'collinstech'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Code2 className="w-4 h-4" />
                <span>Work With CollinsTech</span>
              </button>

              <button
                type="button"
                onClick={() => setInquiryType('stackverse')}
                className={`py-2.5 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                  inquiryType === 'stackverse'
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>Contact StackVerse</span>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono-tech text-slate-300 mb-1">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Alex Morgan"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                  {errors.name && <span className="text-[11px] text-red-400 mt-1 block">{errors.name}</span>}
                </div>

                <div>
                  <label className="block text-xs font-mono-tech text-slate-300 mb-1">
                    WORK EMAIL *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                  {errors.email && <span className="text-[11px] text-red-400 mt-1 block">{errors.email}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono-tech text-slate-300 mb-1">
                    COMPANY / ORGANIZATION
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Tech Startup Ltd"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-tech text-slate-300 mb-1">
                    PROJECT CATEGORY
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full bg-[#121420] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="Web Development">Web Application Development</option>
                    <option value="Mobile Development">Mobile App (iOS & Android)</option>
                    <option value="Custom Software">Custom Enterprise Software</option>
                    <option value="SaaS Development">SaaS Product Development</option>
                    <option value="AI Solutions">AI & Automation Integration</option>
                    <option value="Cybersecurity">Cybersecurity & Security Audit</option>
                    <option value="Cloud Infrastructure">Cloud Deployment & DevOps</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono-tech text-slate-300 mb-1">
                  ESTIMATED BUDGET RANGE
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['<$5k', '$5k - $15k', '$15k - $30k', '$30k+'].map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setBudget(b)}
                      className={`py-2 px-3 rounded-xl text-xs font-mono-tech border transition-colors ${
                        budget === b
                          ? 'bg-blue-600 text-white border-blue-500'
                          : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono-tech text-slate-300 mb-1">
                  PROJECT SCOPE / MESSAGE *
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about the digital product or software solution you want to build..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
                {errors.message && <span className="text-[11px] text-red-400 mt-1 block">{errors.message}</span>}
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] font-mono-tech text-slate-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  Direct response within 24 hours
                </span>

                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold flex items-center gap-2 shadow-lg shadow-blue-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Proposal</span>
                </button>
              </div>

            </form>

          </div>
        )}

      </div>
    </div>
  );
};
