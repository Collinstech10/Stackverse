import React, { useState } from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { NavigationRoute } from '../types';
import { Code2, Layers, Send, CheckCircle2, ShieldCheck, Mail, MapPin, Globe2 } from 'lucide-react';
import { sendEmailNotification } from '../lib/emailService';

interface ContactPageProps {
  onRouteChange: (route: NavigationRoute) => void;
  onOpenProjectModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onRouteChange,
  onOpenProjectModal,
}) => {
  const [activePath, setActivePath] = useState<'collinstech' | 'stackverse'>('collinstech');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [projectType, setProjectType] = useState('Web Development');
  const [budget, setBudget] = useState('$5k - $15k');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) newErrors.name = 'Full name is required';
    if (!email.trim() || !email.includes('@')) newErrors.email = 'Valid work email is required';
    if (!message.trim()) newErrors.message = 'Please enter your message or project requirements';

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
        division: activePath,
        date: new Date().toISOString(),
      });
      localStorage.setItem('stackverse_messages', JSON.stringify(existing));
    } catch (err) {
      console.error('Failed to save message:', err);
    }

    sendEmailNotification({
      type: 'contact_message',
      name,
      email,
      company,
      projectType,
      budget,
      message,
      division: activePath === 'collinstech' ? 'Collins Tech Consulting' : 'StackVerse Platform',
    });

    setSubmitted(true);
  };

  return (
    <div className="space-y-20 pt-28 pb-16">
      
      {/* HEADER */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          divisionBadge="STACKVERSE"
          eyebrow="GET IN TOUCH"
          title="Let's Build Something."
          subtitle="Choose the department that best aligns with your goals, whether you need custom engineering services or want to inquire about StackVerse products."
        />

        {/* TWO PATH CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Path 1: CollinsTech */}
          <div
            onClick={() => setActivePath('collinstech')}
            className={`cursor-pointer p-8 rounded-3xl glass-card border transition-all duration-300 ${
              activePath === 'collinstech'
                ? 'border-blue-500 bg-blue-950/20 shadow-xl glow-blue'
                : 'border-white/10 hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-2xl bg-blue-950/60 border border-blue-500/30 text-blue-400">
                <Code2 className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono-tech text-blue-400">PATH 01</span>
            </div>

            <h3 className="text-2xl font-bold font-display text-white mb-2">
              I Need a Technology Solution
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              For businesses, startups, and organizations that need custom websites, mobile applications, software systems, AI integrations, or cybersecurity audits.
            </p>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setActivePath('collinstech');
              }}
              className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-2 transition-all"
            >
              <Code2 className="w-4 h-4" />
              <span>Work With CollinsTech</span>
            </button>
          </div>

          {/* Path 2: StackVerse */}
          <div
            onClick={() => setActivePath('stackverse')}
            className={`cursor-pointer p-8 rounded-3xl glass-card border transition-all duration-300 ${
              activePath === 'stackverse'
                ? 'border-violet-500 bg-violet-950/20 shadow-xl glow-violet'
                : 'border-white/10 hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-2xl bg-violet-950/60 border border-violet-500/30 text-violet-400">
                <Layers className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono-tech text-violet-400">PATH 02</span>
            </div>

            <h3 className="text-2xl font-bold font-display text-white mb-2">
              I Want to Learn About StackVerse
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              For strategic partnerships, product inquiries, software ventures, press, or general company communication.
            </p>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setActivePath('stackverse');
              }}
              className="px-6 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold flex items-center gap-2 transition-all"
            >
              <Layers className="w-4 h-4" />
              <span>Contact StackVerse</span>
            </button>
          </div>

        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-white/15 shadow-2xl">
          
          <div className="mb-8 pb-6 border-b border-white/10 flex items-center justify-between">
            <div>
              <span className="text-xs font-mono-tech text-blue-400 uppercase tracking-wider block mb-1">
                SELECTED RECIPIENT: {activePath === 'collinstech' ? 'COLLINSTECH ENGINEERING TEAM' : 'STACKVERSE PARENT OFFICE'}
              </span>
              <h3 className="text-2xl font-bold font-display text-white">
                Send a Direct Inquiry
              </h3>
              <p className="text-xs text-slate-400 font-mono-tech mt-1 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>Direct Email:</span>
                <a href="mailto:eniolaayobamidele0@gmail.com" className="text-blue-300 hover:text-white underline transition-colors">
                  eniolaayobamidele0@gmail.com
                </a>
              </p>
            </div>
            <span className="hidden sm:inline-flex px-3 py-1 rounded-full text-xs font-mono-tech bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
              Response SLA: &lt; 24h
            </span>
          </div>

          {submitted ? (
            <div className="text-center py-12 space-y-4 animate-in fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold font-display text-white">
                Message Sent Successfully!
              </h4>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{name}</strong>. Our team at{' '}
                <strong className={activePath === 'collinstech' ? 'text-blue-400' : 'text-violet-400'}>
                  {activePath === 'collinstech' ? 'CollinsTech' : 'StackVerse'}
                </strong>{' '}
                has received your message and will reply to <span className="underline">{email}</span> within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setName('');
                  setEmail('');
                  setCompany('');
                  setMessage('');
                }}
                className="mt-4 px-6 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono-tech text-slate-300 mb-2">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jordan Lee"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                  {errors.name && <span className="text-xs text-red-400 mt-1 block">{errors.name}</span>}
                </div>

                <div>
                  <label className="block text-xs font-mono-tech text-slate-300 mb-2">
                    WORK EMAIL *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jordan@enterprise.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                  {errors.email && <span className="text-xs text-red-400 mt-1 block">{errors.email}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono-tech text-slate-300 mb-2">
                    COMPANY / ORGANIZATION
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Apex Technologies"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-tech text-slate-300 mb-2">
                    PROJECT / INQUIRY TYPE
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full bg-[#121420] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile Development">Mobile App Development</option>
                    <option value="Custom Software">Custom Enterprise Software</option>
                    <option value="SaaS Development">SaaS Platform Engineering</option>
                    <option value="AI Solutions">AI & Automation</option>
                    <option value="Cybersecurity">Cybersecurity Audit</option>
                    <option value="Product Partnership">StackVerse Venture Partnership</option>
                  </select>
                </div>
              </div>

              {activePath === 'collinstech' && (
                <div>
                  <label className="block text-xs font-mono-tech text-slate-300 mb-2">
                    ESTIMATED BUDGET RANGE
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['<$5k', '$5k - $15k', '$15k - $30k', '$30k+'].map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setBudget(b)}
                        className={`py-2.5 px-3 rounded-xl text-xs font-mono-tech border transition-colors ${
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
              )}

              <div>
                <label className="block text-xs font-mono-tech text-slate-300 mb-2">
                  MESSAGE / PROJECT OVERVIEW *
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your project goals, timelines, or inquiry..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
                {errors.message && <span className="text-xs text-red-400 mt-1 block">{errors.message}</span>}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <span className="text-xs font-mono-tech text-slate-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  Your information is protected and strictly confidential.
                </span>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </div>

            </form>
          )}

        </div>
      </section>

    </div>
  );
};
