import React, { useEffect, useRef, useState } from 'react';

const prefersNoVideo = () =>
    typeof window !== 'undefined' &&
    (window.matchMedia('(prefers-reduced-motion: reduce)').matches || navigator.connection?.saveData === true);

const OVERLAY = 'bg-white/85 dark:bg-gray-950/80';

const VideoBackground = ({ src, poster, eager = false, treatment = 'tinted' }) => {
    const tinted = treatment === 'tinted';
    const containerRef = useRef(null);
    const videoRef = useRef(null);
    const [disabled] = useState(prefersNoVideo);
    const [shouldLoad, setShouldLoad] = useState(eager);
    const [ready, setReady] = useState(false);
    const [failed, setFailed] = useState(false);

    useEffect(() => {
        if (!src || disabled || failed || !containerRef.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldLoad(true);
                    videoRef.current?.play().catch(() => {});
                } else {
                    videoRef.current?.pause();
                }
            },
            { rootMargin: '200px 0px' },
        );
        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, [src, disabled, failed]);

    if (!src || failed) return null;

    if (disabled) {
        return poster ? (
            <img src={poster} alt="" aria-hidden className="absolute inset-0 z-0 w-full h-full object-cover pointer-events-none" />
        ) : null;
    }

    return (
        <div
            ref={containerRef}
            aria-hidden
            className={`absolute inset-0 z-0 overflow-hidden pointer-events-none transition-opacity duration-1000 ${ready || poster ? 'opacity-100' : 'opacity-0'}`}
        >
            {shouldLoad && (
                <video
                    ref={videoRef}
                    src={src}
                    poster={poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload={eager ? 'auto' : 'metadata'}
                    onLoadedData={() => setReady(true)}
                    onError={() => setFailed(true)}
                    className={`absolute inset-0 w-full h-full object-cover ${tinted ? 'grayscale contrast-125 scale-105' : ''}`}
                />
            )}
            {tinted && (
                <>
                    <div className={`absolute inset-0 ${OVERLAY}`} />
                    <div className="absolute inset-0 bg-primary/40 dark:bg-primary/50 mix-blend-color" />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/20" />
                    <div
                        className="absolute inset-0"
                        style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgb(var(--background-rgb) / 0.9) 100%)' }}
                    />
                    <div className="absolute inset-x-0 h-1/3 bg-gradient-to-b from-transparent via-primary/5 to-transparent animate-scan" />
                </>
            )}
        </div>
    );
};

export default VideoBackground;
