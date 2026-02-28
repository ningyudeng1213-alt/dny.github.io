'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [playing]);

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  // 唱片阴影：停止 vs 播放
  const discShadow = playing
    ? '6px 12px 30px rgba(0,0,0,0.5), 3px 6px 12px rgba(0,0,0,0.3)'
    : '4px 8px 20px rgba(0,0,0,0.35), 2px 4px 8px rgba(0,0,0,0.2)';

  return (
    <>
      {/*
        容器 80×80px。布局：
          唱片 50×50 在左下区（left:0, top:24），
          唱针 48×54 在右上区（top:0, right:0），
          唱针 pivot 在其右上角，扫入唱片左侧。
      */}
      <div
        style={{
          position: 'fixed',
          top: '16px',
          right: '16px',
          zIndex: 9999,
          width: '80px',
          height: '80px',
          cursor: 'pointer',
          userSelect: 'none',
        }}
        onClick={() => setPlaying(p => !p)}
      >
        {/* 唱片 */}
        <div
          style={{
            position: 'absolute',
            left: '0px',
            top: '22px',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            overflow: 'hidden',
            boxShadow: discShadow,
            transition: 'box-shadow 0.6s ease',
            animation: playing ? 'spin-disc 3s linear infinite' : 'none',
            zIndex: 1,
          }}
        >
          <Image
            src={`${basePath}/disc.png`}
            alt="disc"
            width={50}
            height={50}
            style={{ display: 'block', width: '100%', height: '100%' }}
            priority
          />
        </div>

        {/*
          唱针：
          - 48×54px，定位在右上角 top:0, right:0
          - transformOrigin: right 6px → pivot 在元素右上角
          - 默认 rotate(35deg)：针头抬起偏右
          - 播放 rotate(10deg)：针头落在唱片约 1/3 处
        */}
        <div
          style={{
            position: 'absolute',
            top: '0px',
            right: '0px',
            width: '48px',
            height: '54px',
            transformOrigin: 'right 6px',
            transform: playing ? 'rotate(10deg)' : 'rotate(35deg)',
            transition: 'transform 0.7s ease',
            zIndex: 2,
          }}
        >
          <Image
            src={`${basePath}/needle.png`}
            alt="needle"
            width={48}
            height={54}
            style={{ display: 'block', width: '100%', height: '100%' }}
            priority
          />
        </div>

        <audio ref={audioRef} src={`${basePath}/music/song.mp3`} loop />
      </div>

      <style>{`
        @keyframes spin-disc {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}
