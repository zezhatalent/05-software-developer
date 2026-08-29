import { motion } from 'framer-motion';
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

function Terminal() {
  const { theme } = useTheme();
  const text = code.join('\n');
  const { output } = useTypewriter(text, 28, 600);
  return (
    <div
      className="mx-auto w-full max-w-md overflow-hidden rounded-xl border"
      style={{ borderColor: theme.border, background: theme.surface }}
    >
      <div
        className="flex items-center gap-2 border-b px-4 py-3"
        style={{ borderColor: theme.border, background: theme.bg }}
      >
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs" style={{ color: theme.muted }}>
          developer.ts — {content.name}
        </span>
      </div>
      <pre
        className="p-4 font-mono text-xs leading-relaxed"
        style={{ color: theme.text }}
      >
        {output}
        <span
          className="inline-block h-3.5 w-2 animate-pulse"
          style={{ background: theme.accent, verticalAlign: 'text-bottom' }}
        />
      </pre>
    </div>
  );
}

function GitGraph() {
  const { theme } = useTheme();
  // commit nodes across a timeline
  const commits = [12, 18, 15, 24, 20, 28, 22, 30, 26, 34, 29, 38];
  return (
    <div className="relative mt-10 h-28">
      <motion.div
        className="absolute left-0 right-0 top-1/2 h-1"
        style={{ background: theme.border }}
      />
      {commits.map((h, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 -translate-x-1/2"
          style={{ left: `${(i / (commits.length - 1)) * 100}%` }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4 + i * 0.12 }}
        >
          <span
            className="block h-3 w-3 -translate-y-[50%] -translate-x-[50%] rounded-full"
            style={{ background: theme.accent2, boxShadow: `0 0 8px ${theme.accent2}` }}
          />
          <span
            className="absolute left-1/2 -mt-8 -translate-x-1/2 font-mono text-[10px]"
            style={{ color: theme.muted }}
          >
            +{h}
          </span>
        </motion.div>
      ))}
      <motion.div
        className="absolute left-1/2 top-0 h-2"
        style={{ background: theme.accent }}
        initial={{ width: 0 }}
        animate={{ width: '100%', x: '-50%' }}
        transition={{ duration: 0, delay: 0 }}
      />
    </div>
  );
}

export default function Hero() {
  const { theme } = useTheme();
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
      style={{ background: theme.bg }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(600px circle at 70% 40%, ${theme.accent}1a, transparent)`,
        }}
      />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-28 md:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-mono text-sm"
            style={{ color: theme.accent2 }}
          >
            &gt; init --name
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-5xl font-extrabold md:text-6xl"
            style={{ color: theme.text }}
          >
            {content.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-3 font-mono text-xl font-semibold"
            style={{ color: theme.accent }}
          >
            Software Developer
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="rounded-lg px-6 py-3 font-semibold"
              style={{ background: theme.accent, color: '#fff' }}
            >
              See my code
            </a>
            <a
              href="#contact"
              className="rounded-lg border px-6 py-3 font-semibold"
              style={{ borderColor: theme.accent, color: theme.accent }}
            >
              Let&apos;s talk
            </a>
          </motion.div>
          <GitGraph />
        </div>
        <Terminal />
      </div>
    </section>
  );
}
