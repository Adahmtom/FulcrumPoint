'use client';

import { useEffect, useRef } from 'react';

/* ─── Reusable scroll-driven geo-shape animation (same effect used on the homepage About Us section) ─── */
export default function AnimatedGeoBlock({ className }: { className?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const tri1Ref = useRef<SVGGElement>(null);
  const sq2Ref  = useRef<SVGGElement>(null);
  const sq3Ref  = useRef<SVGGElement>(null);
  const sq1Ref  = useRef<SVGGElement>(null);
  const tri2Ref = useRef<SVGGElement>(null);

  const SPLITS = {
    tri1: { x:   0, y: -130 },
    sq2:  { x: -130, y:   0 },
    sq3:  { x:  130, y:   0 },
    sq1:  { x:   0, y:  130 },
    tri2: { x:  100, y:  100 },
  } as const;

  useEffect(() => {
    let rafId: number;
    const onScroll = () => {
      rafId = requestAnimationFrame(() => {
        if (!wrapRef.current) return;
        const rect = wrapRef.current.getBoundingClientRect();
        const vh   = window.innerHeight;
        const totalTravel = rect.height + vh;
        const progress = Math.max(0, Math.min(1, (vh - rect.top) / totalTravel));

        let factor: number;
        if (progress < 0.15)      factor = 0;
        else if (progress < 0.45) factor = (progress - 0.15) / 0.30;
        else if (progress < 0.55) factor = 1;
        else if (progress < 0.85) factor = 1 - (progress - 0.55) / 0.30;
        else                      factor = 0;

        const e = factor < 0.5
          ? 2 * factor * factor
          : 1 - Math.pow(-2 * factor + 2, 2) / 2;

        const apply = (ref: React.RefObject<SVGGElement | null>, ox: number, oy: number) => {
          if (!ref.current) return;
          ref.current.setAttribute('transform', `translate(${ox * (1 - e)},${oy * (1 - e)})`);
        };

        apply(tri1Ref, SPLITS.tri1.x, SPLITS.tri1.y);
        apply(sq2Ref,  SPLITS.sq2.x,  SPLITS.sq2.y);
        apply(sq3Ref,  SPLITS.sq3.x,  SPLITS.sq3.y);
        apply(sq1Ref,  SPLITS.sq1.x,  SPLITS.sq1.y);
        apply(tri2Ref, SPLITS.tri2.x, SPLITS.tri2.y);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(rafId); };
  }, []);

  return (
    <div ref={wrapRef} className={className} aria-hidden="true">
      <svg viewBox="-156 -150 495 570" xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet" style={{ width: '100%', height: '100%' }}>
        <g ref={tri1Ref}>
          <path d="M 0 0 L 0 182 L 182 182 L 0 0 Z"
            transform="matrix(1,0,0,1,0,-140.382)" fill="#7aa2ce" opacity="0.35" />
        </g>
        <g ref={sq2Ref}>
          <rect width="182" height="182"
            transform="matrix(1,0,0,1,-146.2714,5.8893)" fill="#4E546B" opacity="0.10" />
        </g>
        <g ref={sq3Ref}>
          <rect width="182" height="182"
            transform="matrix(1,0,0,1,146.2714,5.8893)" fill="#0d2756" opacity="0.08" />
        </g>
        <g ref={sq1Ref}>
          <rect width="182" height="182"
            transform="matrix(1,0,0,1,0,152.1607)" fill="#4E546B" opacity="0.08" />
        </g>
        <g ref={tri2Ref}>
          <path d="M 0 0 L 0 90 L 90 90 L 0 0 Z"
            transform="matrix(1,0,0,1,164.332,314.8853)" fill="#EC8647" opacity="0.55" />
        </g>
      </svg>
    </div>
  );
}
