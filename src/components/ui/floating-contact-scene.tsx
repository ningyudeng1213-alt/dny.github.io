'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

import Floating, { FloatingElement } from '@/components/ui/floating';

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';


const FloatingPhoto = ({ src, alt, height }: { src: string; alt: string; height: number }) => (
  <img
    src={src}
    alt={alt}
    loading="eager"
    style={{ height: `${height}px`, width: 'auto', display: 'block' }}
  />
);

export function FloatingContactScene() {
  return (
    <div className="relative w-full max-w-6xl px-4">
      <div className="relative h-[72vh] min-h-[560px] w-full overflow-visible bg-transparent">
        <motion.div
          className="pointer-events-none absolute inset-0 z-30 flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h3
            className="m-0 text-[38px] font-bold tracking-[0.08em] text-[#2a2010] md:text-[54px]"
            style={{ fontFamily: "'Adobe Song Std', 'AdobeSongStd', serif" }}
          >
            Photo Works.
          </h3>
          <div className="pointer-events-auto mt-5">
            <Link
              href="/#section-contact"
              className="z-50 inline-flex w-28 cursor-pointer items-center justify-center rounded-full bg-white py-2.5 text-sm font-black text-black transition-transform hover:scale-110 md:w-32 md:text-base"
              style={{ fontFamily: "'Adobe Song Std', 'AdobeSongStd', serif" }}
            >
              Contact
            </Link>
          </div>
        </motion.div>

        <Floating sensitivity={1} easingFactor={0.06}>
          <FloatingElement depth={0.6}  className="left-[0%]   top-[2%]">
            <FloatingPhoto src={`${BASE}/01.webp`}  alt="01" height={200} />
          </FloatingElement>
          <FloatingElement depth={1.3}  className="left-[33%] top-[0%]">
            <FloatingPhoto src={`${BASE}/06.webp`}  alt="06" height={175} />
          </FloatingElement>
          <FloatingElement depth={0.9}  className="right-[15%] top-[44%]">
            <FloatingPhoto src={`${BASE}/03.webp`}  alt="03" height={165} />
          </FloatingElement>
          <FloatingElement depth={1.5}  className="left-[0%]   top-[42%]">
            <FloatingPhoto src={`${BASE}/04.webp`}  alt="04" height={170} />
          </FloatingElement>
          <FloatingElement depth={0.75} className="right-[0%] top-[2%]">
            <FloatingPhoto src={`${BASE}/05.webp`}  alt="05" height={230} />
          </FloatingElement>
          <FloatingElement depth={1.1}  className="left-[4%]  top-[82%]">
            <FloatingPhoto src={`${BASE}/02.webp`}  alt="02" height={150} />
          </FloatingElement>
          <FloatingElement depth={1.7}  className="left-[27%] top-[85%]">
            <FloatingPhoto src={`${BASE}/07.webp`}  alt="07" height={185} />
          </FloatingElement>
          <FloatingElement depth={0.85} className="left-[55%] top-[70%]">
            <FloatingPhoto src={`${BASE}/08.webp`} alt="08" height={165} />
          </FloatingElement>
          <FloatingElement depth={1.4}  className="right-[1%] top-[78%]">
            <FloatingPhoto src={`${BASE}/09.webp`} alt="09" height={200} />
          </FloatingElement>
          <FloatingElement depth={1.0}  className="left-[48%] top-[20%]">
            <FloatingPhoto src={`${BASE}/10.webp`}  alt="10" height={195} />
          </FloatingElement>
          <FloatingElement depth={1.6}  className="left-[18%] top-[40%]">
            <FloatingPhoto src={`${BASE}/11.webp`}  alt="11" height={205} />
          </FloatingElement>
        </Floating>
      </div>
    </div>
  );
}
