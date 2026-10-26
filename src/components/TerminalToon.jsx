import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const SCRIPT = [
    { cmd: 'whoami', out: ['amal_shalinda  // software engineer'] },
    { cmd: 'cat stack.txt', out: ['java  python  react  spring-boot  k8s  agentic-ai'] },
    { cmd: 'npm run fix-bugs', out: ['> 3 bugs found ... 3 bugs squashed  [OK]'] },
    { cmd: 'sudo make coffee', out: ['brewing... done. productivity +100%'] },
];

const ALL_LINES = SCRIPT.flatMap((s) => [{ type: 'cmd', text: s.cmd }, ...s.out.map((t) => ({ type: 'out', text: t }))]);

const GLOW = { textShadow: '0 0 6px rgba(74, 222, 128, 0.55)' };
const SCANLINES = {
    backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.35) 0px, rgba(0,0,0,0.35) 1px, transparent 1px, transparent 3px)',
};
const ORIGIN = { transformBox: 'fill-box', transformOrigin: 'center' };

const Prompt = () => (
    <span className="text-green-600 select-none">amal@dev<span className="text-gray-500">:</span><span className="text-green-500">~</span><span className="text-gray-500">$</span> </span>
);

const Robot = ({ typing }) => (
    <svg viewBox="0 0 100 64" className="w-24 h-auto" aria-hidden>
        <line x1="50" y1="10" x2="50" y2="3" stroke="#3a3334" strokeWidth="2.5" strokeLinecap="round" />
        <motion.circle
            cx="50"
            cy="3"
            r="3"
            fill="#4ade80"
            animate={{ opacity: [1, 0.25, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
        />
        <rect x="17" y="24" width="6" height="14" rx="2" fill="#ff2438" />
        <rect x="77" y="24" width="6" height="14" rx="2" fill="#ff2438" />
        <rect x="22" y="10" width="56" height="40" rx="12" fill="#221d1e" stroke="#3a3334" strokeWidth="2" />
        <rect x="29" y="19" width="42" height="20" rx="10" fill="#050a06" stroke="#14532d" strokeWidth="1" />
        <motion.g animate={{ x: [-4, 4] }} transition={{ duration: 2.4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}>
            <motion.g
                style={ORIGIN}
                animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
                transition={{ duration: 3.5, times: [0, 0.44, 0.5, 0.56, 1], repeat: Infinity }}
            >
                <rect x="39" y="24" width="7" height="10" rx="3" fill="#4ade80" />
                <rect x="54" y="24" width="7" height="10" rx="3" fill="#4ade80" />
            </motion.g>
        </motion.g>
        <motion.ellipse
            cx="32"
            cy="58"
            rx="8"
            ry="5"
            fill="#3a3334"
            animate={typing ? { y: [0, -3, 0] } : { y: 0 }}
            transition={{ duration: 0.22, repeat: typing ? Infinity : 0 }}
        />
        <motion.ellipse
            cx="68"
            cy="58"
            rx="8"
            ry="5"
            fill="#3a3334"
            animate={typing ? { y: [-3, 0, -3] } : { y: 0 }}
            transition={{ duration: 0.22, repeat: typing ? Infinity : 0 }}
        />
    </svg>
);

const TerminalToon = () => {
    const containerRef = useRef(null);
    const [reduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    const [active, setActive] = useState(false);
    const [lines, setLines] = useState(reduced ? ALL_LINES : []);
    const [typing, setTyping] = useState('');

    useEffect(() => {
        if (reduced || !containerRef.current) return;
        const observer = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), { threshold: 0.3 });
        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, [reduced]);

    useEffect(() => {
        if (!active) return;
        let cancelled = false;
        const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

        const run = async () => {
            while (!cancelled) {
                setLines([]);
                await sleep(600);
                for (const step of SCRIPT) {
                    for (let i = 1; i <= step.cmd.length; i++) {
                        if (cancelled) return;
                        setTyping(step.cmd.slice(0, i));
                        await sleep(60 + Math.random() * 70);
                    }
                    await sleep(400);
                    if (cancelled) return;
                    setTyping('');
                    setLines((prev) => [...prev, { type: 'cmd', text: step.cmd }]);
                    await sleep(250);
                    if (cancelled) return;
                    setLines((prev) => [...prev, ...step.out.map((text) => ({ type: 'out', text }))]);
                    await sleep(900);
                }
                await sleep(3000);
            }
        };

        run();
        return () => {
            cancelled = true;
            setTyping('');
        };
    }, [active]);

    return (
        <div ref={containerRef} className="relative w-full max-w-md mx-auto pt-12">
            <div className="absolute top-0 right-10 z-10 translate-y-[6px]">
                <Robot typing={typing.length > 0} />
            </div>

            <div className="relative rounded-xl overflow-hidden border border-green-500/20 bg-[#050a06] shadow-[0_0_50px_-12px_rgba(74,222,128,0.45)]">
                <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0b120c] border-b border-green-500/10">
                    <span className="w-3 h-3 rounded-full bg-primary" />
                    <span className="w-3 h-3 rounded-full bg-gray-600" />
                    <span className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-3 text-xs font-mono text-green-700">amal@dev: ~/portfolio</span>
                </div>

                <div
                    className="relative h-44 px-4 py-3 font-mono text-[12px] leading-[22px] text-green-400 overflow-hidden flex flex-col justify-end"
                    style={GLOW}
                    role="img"
                    aria-label="Animated terminal typing developer commands"
                >
                    {lines.map((line, i) => (
                        <div key={i} className="whitespace-pre-wrap break-words">
                            {line.type === 'cmd' ? (
                                <>
                                    <Prompt />
                                    <span className="text-green-300">{line.text}</span>
                                </>
                            ) : (
                                <span className="text-green-500/80">{line.text}</span>
                            )}
                        </div>
                    ))}
                    <div className="whitespace-pre-wrap">
                        <Prompt />
                        <span className="text-green-300">{typing}</span>
                        <span className="inline-block w-2 h-4 align-middle bg-green-400 animate-blink" />
                    </div>

                    <div aria-hidden className="pointer-events-none absolute inset-0" style={SCANLINES} />
                    <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.55)_100%)]" />
                </div>
            </div>
        </div>
    );
};

export default TerminalToon;
