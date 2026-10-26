import React from 'react';
import { motion } from 'framer-motion';

const ORIGIN = { transformBox: 'fill-box', transformOrigin: 'center' };
const BUG_LOOP = { duration: 6, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' };

const CODE_LINES = [
    { x: 222, y: 58, w: 46, color: '#ff2438' },
    { x: 232, y: 70, w: 58, color: '#d4cfcf' },
    { x: 232, y: 82, w: 38, color: '#a39b9c' },
    { x: 222, y: 94, w: 30, color: '#ff2438' },
];

const FLOATERS = [
    { x: 58, y: 92, label: '{ }', delay: 0 },
    { x: 40, y: 168, label: '</>', delay: 0.8 },
    { x: 262, y: 168, label: '#', delay: 1.6 },
];

const CodingBuddy = () => (
    <div className="relative w-full max-w-[320px] mx-auto select-none" aria-hidden>
        <div className="absolute inset-10 rounded-full bg-primary/20 blur-3xl animate-glow-pulse" />

        <svg viewBox="0 0 320 340" className="relative w-full h-auto">
            {FLOATERS.map(({ x, y, label, delay }) => (
                <motion.text
                    key={label}
                    x={x}
                    y={y}
                    fill="#776f70"
                    fontSize="16"
                    fontFamily="ui-monospace, monospace"
                    fontWeight="700"
                    animate={{ y: [0, -8, 0], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, delay, repeat: Infinity, ease: 'easeInOut' }}
                >
                    {label}
                </motion.text>
            ))}

            <motion.g animate={{ y: [0, -4, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}>
                <rect x="206" y="40" width="100" height="70" rx="12" fill="#141112" stroke="#3a3334" strokeWidth="1.5" />
                <path d="M222 110 L214 124 L234 110 Z" fill="#141112" stroke="#3a3334" strokeWidth="1.5" strokeLinejoin="round" />
                <rect x="216" y="108" width="20" height="4" fill="#141112" />
                <circle cx="218" cy="48" r="2.5" fill="#ff2438" />
                <circle cx="226" cy="48" r="2.5" fill="#544d4e" />
                <circle cx="234" cy="48" r="2.5" fill="#544d4e" />
                {CODE_LINES.map((line, i) => (
                    <motion.rect
                        key={i}
                        x={line.x}
                        y={line.y}
                        width={line.w}
                        height="5"
                        rx="2.5"
                        fill={line.color}
                        style={{ transformBox: 'fill-box', transformOrigin: 'left center' }}
                        animate={{ scaleX: [0, 1, 1, 0] }}
                        transition={{ duration: 4, times: [0, 0.25, 0.85, 1], delay: i * 0.35, repeat: Infinity, repeatDelay: 0.6 }}
                    />
                ))}
            </motion.g>

            <motion.g animate={{ y: [0, -2, 0, -1, 0] }} transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut' }}>
                <path d="M100 290 C 100 225, 125 205, 160 205 C 195 205, 220 225, 220 290 Z" fill="#b3001b" />
                <path d="M140 207 L160 232 L180 207" fill="none" stroke="#8b0d1a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="150" y="190" width="20" height="18" rx="6" fill="#e8b593" />

                <circle cx="160" cy="150" r="44" fill="#f1c7a5" />
                <path d="M116 146 C 112 108, 138 92, 164 96 C 190 98, 208 116, 204 142 C 196 126, 180 118, 160 122 C 142 124, 126 132, 116 146 Z" fill="#221d1e" />
                <ellipse cx="116" cy="154" rx="6" ry="9" fill="#e8b593" />
                <ellipse cx="204" cy="154" rx="6" ry="9" fill="#e8b593" />

                <motion.g
                    style={ORIGIN}
                    animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
                    transition={{ duration: 4, times: [0, 0.46, 0.5, 0.54, 1], repeat: Infinity }}
                >
                    <ellipse cx="144" cy="152" rx="9" ry="10" fill="#fff" />
                    <ellipse cx="176" cy="152" rx="9" ry="10" fill="#fff" />
                    <motion.g animate={{ x: [-4, 4] }} transition={BUG_LOOP}>
                        <circle cx="144" cy="155" r="4.5" fill="#141112" />
                        <circle cx="176" cy="155" r="4.5" fill="#141112" />
                        <circle cx="145.5" cy="153.5" r="1.4" fill="#fff" />
                        <circle cx="177.5" cy="153.5" r="1.4" fill="#fff" />
                    </motion.g>
                </motion.g>

                <rect x="131" y="140" width="26" height="22" rx="7" fill="none" stroke="#141112" strokeWidth="2.5" />
                <rect x="163" y="140" width="26" height="22" rx="7" fill="none" stroke="#141112" strokeWidth="2.5" />
                <path d="M157 150 L163 150" stroke="#141112" strokeWidth="2.5" />

                <path d="M150 176 Q 160 184 170 176" fill="none" stroke="#8b4a3a" strokeWidth="2.5" strokeLinecap="round" />
                <ellipse cx="134" cy="172" rx="6" ry="3.5" fill="#ff2438" opacity="0.25" />
                <ellipse cx="186" cy="172" rx="6" ry="3.5" fill="#ff2438" opacity="0.25" />

                <path d="M112 150 C 112 108, 208 108, 208 150" fill="none" stroke="#3a3334" strokeWidth="6" strokeLinecap="round" />
                <rect x="104" y="142" width="14" height="24" rx="6" fill="#ff2438" />
                <rect x="202" y="142" width="14" height="24" rx="6" fill="#ff2438" />
            </motion.g>

            <path d="M92 282 L104 222 L216 222 L228 282 Z" fill="#221d1e" stroke="#3a3334" strokeWidth="1.5" strokeLinejoin="round" />
            <text x="160" y="258" textAnchor="middle" fill="#ff2438" fontSize="18" fontWeight="800" fontFamily="ui-monospace, monospace">&lt;/&gt;</text>
            <rect x="80" y="280" width="160" height="7" rx="3" fill="#3a3334" />

            <rect x="16" y="287" width="288" height="12" rx="4" fill="#2a2324" />
            <rect x="34" y="299" width="8" height="34" rx="2" fill="#221d1e" />
            <rect x="278" y="299" width="8" height="34" rx="2" fill="#221d1e" />

            <g>
                <path d="M254 252 h24 v28 a6 6 0 0 1 -6 6 h-12 a6 6 0 0 1 -6 -6 Z" fill="#f5f4f4" />
                <path d="M278 258 a8 8 0 0 1 0 16" fill="none" stroke="#f5f4f4" strokeWidth="4" />
                <rect x="254" y="262" width="24" height="6" fill="#ff2438" />
                {[260, 268].map((x, i) => (
                    <motion.path
                        key={x}
                        d={`M${x} 246 q -4 -6 0 -12 q 4 -6 0 -12`}
                        fill="none"
                        stroke="#a39b9c"
                        strokeWidth="2"
                        strokeLinecap="round"
                        animate={{ opacity: [0, 0.8, 0], y: [4, -4, -10] }}
                        transition={{ duration: 2.4, delay: i * 0.8, repeat: Infinity, ease: 'easeOut' }}
                    />
                ))}
            </g>

            <motion.g animate={{ x: [0, 200] }} transition={BUG_LOOP}>
                <motion.g animate={{ y: [0, -1.5, 0] }} transition={{ duration: 0.25, repeat: Infinity }}>
                    <path d="M30 284 l-5 -3 M30 287 l-6 0 M30 290 l-5 3 M44 284 l5 -3 M44 287 l6 0 M44 290 l5 3" stroke="#141112" strokeWidth="1.6" strokeLinecap="round" />
                    <ellipse cx="37" cy="287" rx="8" ry="6" fill="#ff2438" />
                    <path d="M37 281 L37 293" stroke="#141112" strokeWidth="1.2" />
                    <circle cx="34" cy="286" r="1.3" fill="#141112" />
                    <circle cx="40" cy="289" r="1.3" fill="#141112" />
                    <circle cx="37" cy="280" r="3.2" fill="#141112" />
                    <path d="M35.5 277.5 l-2 -3 M38.5 277.5 l2 -3" stroke="#141112" strokeWidth="1.2" strokeLinecap="round" />
                </motion.g>
            </motion.g>
        </svg>

        <div className="relative mt-2 text-center">
            <p className="text-sm font-medium text-gray-300">
                Currently turning <span className="text-primary">coffee</span> into code
                <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.2, repeat: Infinity }}>...</motion.span>
            </p>
            <p className="mt-1 text-xs text-gray-500">and keeping an eye on that bug.</p>
        </div>
    </div>
);

export default CodingBuddy;
