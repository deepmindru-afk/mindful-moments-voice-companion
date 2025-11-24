'use client';

import { Button } from '@/components/livekit/button';
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const MotionDiv = motion.create('div');

function WellnessIcon() {
  return (
    <MotionDiv
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 15,
        duration: 0.6,
      }}
      className="relative w-20 h-20 flex items-center justify-center mb-6"
    >
      {/* Subtle Glow */}
      <MotionDiv
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-xl"
      />
      
      {/* Icon Container */}
      <div className="relative z-10 w-20 h-20 flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl shadow-lg shadow-blue-500/25">
        <svg
          className="w-10 h-10 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      </div>
    </MotionDiv>
  );
}

interface WellnessStats {
  totalSessions: number;
  currentStreak: number;
  lastCheckIn: string | null;
}

interface WelcomeViewProps {
  startButtonText: string;
  onStartCall: () => void;
}

export const WelcomeView = ({
  startButtonText,
  onStartCall,
  ref,
}: React.ComponentProps<'div'> & WelcomeViewProps) => {
  const [stats, setStats] = useState<WellnessStats>({
    totalSessions: 0,
    currentStreak: 0,
    lastCheckIn: null,
  });

  useEffect(() => {
    // Fetch stats initially
    const fetchStats = () => {
      fetch('/api/wellness-sessions')
        .then((res) => res.json())
        .then((data) => setStats(data.stats))
        .catch((err) => console.error('Failed to fetch stats:', err));
    };

    fetchStats();

    // Poll for updates every 3 seconds
    const interval = setInterval(fetchStats, 3000);

    return () => clearInterval(interval);
  }, []);

  const formatLastCheckIn = (timestamp: string | null) => {
    if (!timestamp) return null;
    const date = new Date(timestamp);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return 'earlier today';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'yesterday';
    } else {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
  };

  return (
    <div ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 -z-10" />

      <section className="flex flex-col items-center justify-center text-center px-6 py-16 max-w-3xl mx-auto">
        {/* Icon */}
        <WellnessIcon />

        {/* Title - Clean and Professional */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-3"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 dark:from-blue-400 dark:via-cyan-400 dark:to-indigo-400 bg-clip-text text-transparent">
            Mindful Moments
          </h1>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-xl sm:text-2xl font-light text-muted-foreground tracking-wide uppercase mb-8">
            Your Daily Companion
          </p>
        </MotionDiv>

        {/* Stats Display */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-10"
        >
          <div className="text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed">
            {stats.totalSessions === 0 ? (
              <p className="text-center">
                Welcome! Your supportive companion is here for your{' '}
                <span className="font-semibold text-foreground">first check-in</span>.
              </p>
            ) : (
              <div className="flex flex-col items-center gap-4">
                <p className="text-center">
                  Welcome back! You&apos;ve completed{' '}
                  <span className="font-bold text-blue-600 dark:text-blue-400 text-2xl mx-1">
                    {stats.totalSessions}
                  </span>{' '}
                  session{stats.totalSessions !== 1 ? 's' : ''}.
                </p>
                {stats.currentStreak > 1 && (
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full border border-blue-500/20">
                    <span className="text-2xl">⚡</span>
                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                      {stats.currentStreak}-day streak
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>

          {stats.lastCheckIn && (
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>
                Last check-in: <span className="text-foreground font-medium">{formatLastCheckIn(stats.lastCheckIn)}</span>
              </span>
            </div>
          )}
        </MotionDiv>

        {/* CTA Button */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button
            variant="primary"
            size="lg"
            onClick={onStartCall}
            className="px-8 py-4 text-base font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 dark:from-blue-500 dark:to-cyan-500 dark:hover:from-blue-600 dark:hover:to-cyan-600 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 rounded-xl flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
            {startButtonText}
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Button>
        </MotionDiv>

        {/* Feature Pills */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
        >
          {[
            { icon: '🌙', label: 'Mood', color: 'bg-indigo-500/10 border-indigo-500/20' },
            { icon: '💫', label: 'Energy', color: 'bg-cyan-500/10 border-cyan-500/20' },
            { icon: '✨', label: 'Goals', color: 'bg-blue-500/10 border-blue-500/20' },
          ].map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-2 px-4 py-2 ${item.color} backdrop-blur-sm rounded-full border transition-all duration-200 hover:scale-105`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-medium text-foreground">
                {item.label}
              </span>
            </div>
          ))}
        </MotionDiv>
      </section>

      {/* Footer Disclaimer */}
      <div className="fixed bottom-6 left-0 right-0 flex items-center justify-center px-6">
        <p className="text-muted-foreground/60 text-xs max-w-2xl text-center">
          A supportive space for daily reflection · Not a substitute for professional mental health care
        </p>
      </div>
    </div>
  );
};
