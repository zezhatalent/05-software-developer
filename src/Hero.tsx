import { useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { content } from './content';
import { useTheme } from './components/ThemeProvider';
import { useTypewriter } from './hooks/useTypewriter';

const code = [
  "const developer = {",
  "  name: 'Rohan Kapoor',",
  "  role: 'Software Developer',",
  "  stack: ['React','Node','TS'],",
  "  focuses() {",
  "    return 'clean, tested, scalable code';",
  "  }",
  "};",
];

function CodeBracketsSVG() {
  const { theme } = useTheme();
  return (
    <svg viewBox="0 0 600 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="code-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={theme.accent} stopOpacity="0.3" />
          <stop offset="1" stopColor={theme.accent2} stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <motion.path d="M80,120 L60,200 L80,280" fill="none" stroke="url(#code-grad)" strokeWidth="2" strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.5 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }} />
      <motion.path d="M520,120 L540,200 L520,280" fill="none" stroke="url(#code-grad)" strokeWidth="2" strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.5 }}
        transition={{ duration: 1.5, delay: 0.3, ease: 'easeInOut' }} />
    </svg>
  );
}

function GitGraph() {
  const { theme } = useTheme();
  const commits = [12, 18, 15, 24, 20, 28, 22, 30, 26, 34, 29, 38];
  return (
    <div className="relative mt-10 h-28">
      <motion.div className="absolute left-0 right-0 top-1/2 h-1" style={{ background: theme.border }} />
      {commits.map((lines, i) => (
        <motion.div key={i} className="absolute top-1/2 -translate-x-1/2"
          style={{ left: `${(i / (commits.length - 1)) * 100}%` }}
          initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4 + i * 0.12 }}>
          <span className="block h-3 w-3 -translate-y-1/2 -translate-x-1/2 rounded-full"
            style={{ background: theme.accent2, boxShadow: `0 0 8px ${theme.accent2}` }} />
          <span className="absolute left-1/2 -mt-8 -translate-x-1/2 font-mono text-[10px]"
            style={{ color: theme.muted }}>+{lines}</span>
        </motion.div>
      ))}
    </div>
  );
}

function FloatingCode({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) {
  const { theme } = useTheme();
  return (
    <motion.div className="absolute pointer-events-none" style={{ left: x, top: y }}
      animate={{ y: [0, -20, 0], opacity: [0.08, 0.25, 0.08] }}
      transition={{ duration: 7 + delay, repeat: Infinity, ease: 'easeInOut', delay }}>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M8 4L4 12L8 20M16 4L20 12L16 20" stroke={theme.accent} strokeWidth="0.5" opacity="0.3" />
      </svg>
    </motion.div>
  );
}

function Terminal() {
  const { theme } = useTheme();
  const text = code.join('\n');
  const { output } = useTypewriter(text, 28, 600);
  return (
    <div className="mx-auto w-full max-w-md overflow-hidden rounded-xl border"
      style={{ borderColor: theme.border, background: theme.surface }}>
      <div className="flex items-center gap-2 border-b px-4 py-3"
        style={{ borderColor: theme.border, background: theme.bg }}>
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs" style={{ color: theme.muted }}>
          developer.ts — {content.name}
        </span>
      </div>
      <pre className="p-4 font-mono text-xs leading-relaxed" style={{ color: theme.text }}>
        {output}
        <span className="inline-block h-3.5 w-2 animate-pulse"
          style={{ background: theme.accent, verticalAlign: 'text-bottom' }} />
      </pre>
    </div>
  );
}

export default function Hero() {
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const bgX = useTransform(mouseX, [0, 1], [-10, 10]);
  const bgY = useTransform(mouseY, [0, 1], [-10, 10]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const handler = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    };
    el.addEventListener('mousemove', handler);
    return () => el.removeEventListener('mousemove', handler);
  }, [mouseX, mouseY]);

  return (
    <section ref={sectionRef} id="hero" className="relative flex min-h-screen items-center overflow-hidden" style={{ background: theme.bg }}>
      <motion.div className="pointer-events-none absolute inset-0" style={{ x: bgX, y: bgY }}>
        <CodeBracketsSVG />
      </motion.div>
      <div className="pointer-events-none absolute inset-0"
        style={{ background: `radial-gradient(600px circle at 70% 40%, ${theme.accent}1a, transparent)` }} />
      <FloatingCode delay={0} x="5%" y="15%" size={35} />
      <FloatingCode delay={2} x="90%" y="25%" size={28} />
      <FloatingCode delay={1} x="80%" y="75%" size={32} />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-28 md:grid-cols-2">
        <div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="font-mono text-sm" style={{ color: theme.accent2 }}>
            &gt; init --name
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl font-extrabold md:text-6xl" style={{ color: theme.text }}>
            {content.name}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-3 font-mono text-xl font-semibold" style={{ color: theme.accent }}>
            Software Developer
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
            className="mt-9 flex flex-wrap gap-4">
            <motion.a href="#projects" className="rounded-lg px-6 py-3 font-semibold" style={{ background: theme.accent, color: '#fff' }}
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              See my code
            </motion.a>
            <motion.a href="#contact" className="rounded-lg border px-6 py-3 font-semibold" style={{ borderColor: theme.accent, color: theme.accent }}
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Let&apos;s talk
            </motion.a>
          </motion.div>
          <GitGraph />
        </div>
        <Terminal />
      </div>
    </section>
  );
}
