import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { sendEmailNotification } from '../../lib/emailService';
import { useToast } from '../../context/ToastContext';

export interface NewsletterSubscriptionProps {
  variant?: 'inline' | 'card';
  title?: string;
  subtitle?: string;
  className?: string;
}

export const NewsletterSubscription: React.FC<NewsletterSubscriptionProps> = ({
  variant = 'card',
  title = 'Subscribe to StackVerse Insights',
  subtitle = 'Get quarterly engineering breakdowns, architectural blueprints, and AI product updates delivered directly to your inbox.',
  className = '',
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { showToast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      const emailVal = email.trim();
      try {
        const existing = JSON.parse(localStorage.getItem('stackverse_newsletter_subscribers') || '[]');
        existing.push({ email: emailVal, date: new Date().toISOString() });
        localStorage.setItem('stackverse_newsletter_subscribers', JSON.stringify(existing));
      } catch (err) {
        console.error('LocalStorage save failed:', err);
      }

      // Trigger EmailJS dispatch
      sendEmailNotification({
        type: 'newsletter_subscription',
        email: emailVal,
      });

      showToast(
        'Subscription Confirmed',
        `Thank you for subscribing (${emailVal}). You will receive our technical dispatches!`,
        'success'
      );

      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 6000);
    }
  };

  if (variant === 'inline') {
    return (
      <div className={`space-y-3 ${className}`}>
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono-tech text-slate-300 font-medium tracking-wider uppercase flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-blue-400" />
            <span>STACKVERSE NEWSLETTER</span>
          </span>
        </div>
        
        {subscribed ? (
          <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 text-xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Subscribed! Welcome to StackVerse Insights.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-2">
            <div className="flex items-center gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="enter.your@email.com"
                className="w-full bg-white/5 border border-white/10 backdrop-blur-md rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/80 transition-all"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-blue-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all shrink-0 cursor-pointer"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono-tech pt-0.5">
              <span>Quarterly technical updates</span>
              <a href="mailto:eniolaayobamidele0@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors">
                eniolaayobamidele0@gmail.com
              </a>
            </div>
          </form>
        )}
      </div>
    );
  }

  return (
    <div className={`relative p-8 sm:p-12 rounded-3xl glass-panel border border-white/10 overflow-hidden ${className}`}>
      {/* Ambient background spotlights */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs font-mono-tech">
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          <span>INSIGHTS DISPATCH</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight">
          {title}
        </h3>

        <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        {subscribed ? (
          <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-sm max-w-md mx-auto flex items-center justify-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>Successfully subscribed! Check your inbox for upcoming releases.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3">
            <div className="flex flex-col sm:flex-row items-center gap-2.5">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.work.email@company.com"
                className="w-full bg-white/5 border border-white/10 backdrop-blur-md rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/80 transition-all"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all shrink-0 cursor-pointer"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono-tech px-1">
              <span>Zero spam. Direct architecture notes.</span>
              <a href="mailto:eniolaayobamidele0@gmail.com" className="text-blue-400 hover:underline">
                eniolaayobamidele0@gmail.com
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export const NewsletterSection = NewsletterSubscription;
